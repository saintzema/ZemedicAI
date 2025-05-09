import os
import uuid
import json
import logging
from typing import List, Optional
from datetime import datetime, timedelta
from pathlib import Path

import jwt
from fastapi import FastAPI, File, UploadFile, HTTPException, Depends, Form, Body, Header, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, Field
from passlib.context import CryptContext
import torchxrayvision as xrv
import torch
import numpy as np
from PIL import Image
from io import BytesIO
import torchvision.transforms as transforms
from pymongo import MongoClient
from bson.objectid import ObjectId
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(title="ZemedicAI API", description="API for ZemedicAI medical image analysis")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "zemedic_db")

try:
    client = MongoClient(MONGO_URL)
    # Test the connection
    client.admin.command('ping')
    db = client[DB_NAME]
    logger.info("Successfully connected to MongoDB")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {str(e)}")
    # For demo purposes, we'll still initialize the app but won't use the database
    client = None
    db = None

# JWT Configuration
SECRET_KEY = os.environ.get("SECRET_KEY", "your-secret-key")  # Should be properly secured in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 1 week

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 setup
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")

# File upload directory
UPLOAD_DIR = Path("./uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# ----------------------------------------
# Models
# ----------------------------------------

class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class UserInDB(User):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user_id: str
    email: str
    name: str

class TokenData(BaseModel):
    user_id: Optional[str] = None

class LoginData(BaseModel):
    email: EmailStr
    password: str

class RegisterData(UserCreate):
    pass

class Prediction(BaseModel):
    label: str
    confidence: float
    description: Optional[str] = None

class AnalysisResult(BaseModel):
    id: str
    user_id: str
    type: str
    date: datetime
    image_url: str
    predictions: List[Prediction]
    recommendations: Optional[List[str]] = None

# ----------------------------------------
# Auth functions
# ----------------------------------------

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(email: str):
    user_doc = db.users.find_one({"email": email})
    if user_doc:
        user_doc["id"] = str(user_doc["_id"])
        del user_doc["_id"]
        return UserInDB(**user_doc)
    return None

def authenticate_user(email: str, password: str):
    user = get_user(email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    # Demo mode for MongoDB unavailability
    if client is None or db is None:
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            user_id: str = payload.get("sub")
            if user_id is None:
                raise credentials_exception
                
            # Create a demo user
            return User(
                id=user_id,
                email="demo@example.com",
                name="Demo User",
                created_at=datetime.utcnow()
            )
        except jwt.PyJWTError:
            raise credentials_exception
    
    # Normal flow with MongoDB
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
        token_data = TokenData(user_id=user_id)
    except jwt.PyJWTError:
        raise credentials_exception
    
    user_doc = db.users.find_one({"_id": ObjectId(token_data.user_id)})
    if user_doc is None:
        raise credentials_exception
    
    user_doc["id"] = str(user_doc["_id"])
    del user_doc["_id"]
    return UserInDB(**user_doc)

# ----------------------------------------
# Image Analysis Functions
# ----------------------------------------

def analyze_xray_image(image_data: bytes):
    """Analyze chest X-ray images using torchxrayvision model."""
    try:
        # Load the pre-trained model
        model = xrv.models.DenseNet121(weights="densenet121-res224-all")
        model.eval()

        # Preprocess the image
        img = Image.open(BytesIO(image_data)).convert('RGB')
        img = img.resize((224, 224))
        transform = transforms.Compose([
            transforms.Grayscale(num_output_channels=1),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.5], std=[0.5])
        ])
        
        img_tensor = transform(img).unsqueeze(0)
        
        # Make prediction
        with torch.no_grad():
            output = model(img_tensor)
            
        # Get results
        preds = output.cpu().detach().numpy()[0]
        
        # Map to pathology names
        pathologies = xrv.datasets.default_pathologies
        
        # Prepare results (top 3 highest confidence)
        results = []
        for i in range(len(pathologies)):
            # Convert from logit to probability with sigmoid
            prob = 1 / (1 + np.exp(-preds[i]))
            results.append({"label": pathologies[i], "confidence": float(prob)})
        
        # Sort by confidence and take top 3
        results.sort(key=lambda x: x["confidence"], reverse=True)
        top_results = results[:3]
        
        # Generate recommendations based on findings
        recommendations = [
            "Consult with a healthcare professional for proper diagnosis",
            "Consider follow-up imaging to monitor any changes",
            "Maintain a healthy lifestyle with proper diet and exercise",
            "If you smoke, consider a smoking cessation program"
        ]
        
        return {
            "predictions": top_results,
            "recommendations": recommendations
        }
        
    except Exception as e:
        logger.error(f"Error analyzing X-ray: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error analyzing image: {str(e)}")

def analyze_skin_image(image_data: bytes):
    """Placeholder for skin lesion analysis."""
    # Demo predictions for skin lesions
    predictions = [
        {"label": "Melanoma", "confidence": 0.12},
        {"label": "Basal Cell Carcinoma", "confidence": 0.08},
        {"label": "Seborrheic Keratosis", "confidence": 0.75}
    ]
    
    recommendations = [
        "Schedule a follow-up with a dermatologist",
        "Protect your skin from sun exposure",
        "Monitor any changes in size, shape, or color of the lesion",
        "Apply prescribed topical treatments as directed"
    ]
    
    return {
        "predictions": predictions,
        "recommendations": recommendations
    }

def analyze_ct_scan(image_data: bytes):
    """Placeholder for CT scan analysis."""
    # Demo predictions for CT scans
    predictions = [
        {"label": "Normal Findings", "confidence": 0.82},
        {"label": "Mild Atrophy", "confidence": 0.15},
        {"label": "Cerebral Edema", "confidence": 0.03}
    ]
    
    recommendations = [
        "Regular follow-up with your neurologist",
        "Maintain consistent sleep schedule",
        "Stay hydrated and maintain a balanced diet",
        "Report any new or worsening symptoms immediately"
    ]
    
    return {
        "predictions": predictions,
        "recommendations": recommendations
    }

# ----------------------------------------
# API Endpoints
# ----------------------------------------

@app.get("/api/health")
def health_check():
    """Health check endpoint."""
    return {"status": "ok", "timestamp": datetime.now().isoformat()}

# Auth endpoints
@app.post("/api/auth/register", response_model=Token)
async def register(data: RegisterData):
    """Register a new user."""
    # Demo mode for MongoDB unavailability
    if client is None or db is None:
        # Generate a demo user ID and token for testing
        user_id = str(uuid.uuid4())
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user_id}, expires_delta=access_token_expires
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user_id": user_id,
            "email": data.email,
            "name": data.name
        }
    
    # Normal flow with MongoDB
    # Check if email already exists
    existing_user = db.users.find_one({"email": data.email})
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    
    # Create new user document
    hashed_password = get_password_hash(data.password)
    user_id = str(ObjectId())
    
    user_data = {
        "_id": ObjectId(user_id),
        "email": data.email,
        "name": data.name,
        "hashed_password": hashed_password,
        "created_at": datetime.utcnow()
    }
    
    db.users.insert_one(user_data)
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user_id}, expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": user_id,
        "email": data.email,
        "name": data.name
    }

@app.post("/api/auth/login", response_model=Token)
async def login(data: LoginData):
    """Login and get access token."""
    # Demo mode for MongoDB unavailability
    if client is None or db is None:
        # Generate a demo user ID and token for testing
        user_id = str(uuid.uuid4())
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user_id}, expires_delta=access_token_expires
        )
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user_id": user_id,
            "email": data.email,
            "name": "Demo User"
        }
    
    # Normal flow with MongoDB
    user = authenticate_user(data.email, data.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.id}, expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": user.id,
        "email": user.email,
        "name": user.name
    }

# Analysis endpoints
@app.post("/api/analyze/xray")
async def analyze_xray(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """Analyze a chest X-ray image."""
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="File must be an image"
        )
    
    # Read the image file
    image_data = await file.read()
    
    # Analyze the image
    analysis_result = analyze_xray_image(image_data)
    
    # Generate a unique ID
    analysis_id = str(uuid.uuid4())
    
    # Save the image if possible
    try:
        file_extension = file.filename.split(".")[-1]
        unique_filename = f"{uuid.uuid4()}.{file_extension}"
        file_path = UPLOAD_DIR / unique_filename
        with open(file_path, "wb") as f:
            f.write(image_data)
        image_url = f"/uploads/{unique_filename}"
    except Exception as e:
        logger.error(f"Error saving image: {str(e)}")
        # Use a placeholder if saving fails
        image_url = "https://images.unsplash.com/photo-1584555684040-bad07f46a21f"
    
    # Store in MongoDB if available
    if client is not None and db is not None:
        try:
            analysis_doc = {
                "_id": ObjectId(analysis_id),
                "user_id": current_user.id,
                "type": "xray",
                "date": datetime.utcnow(),
                "image_url": image_url,
                "predictions": analysis_result["predictions"],
                "recommendations": analysis_result["recommendations"]
            }
            
            db.analyses.insert_one(analysis_doc)
        except Exception as e:
            logger.error(f"Error storing analysis in MongoDB: {str(e)}")
    
    # Return the result
    return {
        "id": analysis_id,
        "type": "xray",
        "predictions": analysis_result["predictions"],
        "recommendations": analysis_result["recommendations"],
        "image_url": image_url
    }

@app.post("/api/analyze/skin")
async def analyze_skin_lesion(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """Analyze a skin lesion image."""
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="File must be an image"
        )
    
    # Read the image file
    image_data = await file.read()
    
    # Analyze the image
    analysis_result = analyze_skin_image(image_data)
    
    # Save the image
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = UPLOAD_DIR / unique_filename
    with open(file_path, "wb") as f:
        f.write(image_data)
    
    # Create analysis document
    analysis_id = str(ObjectId())
    analysis_doc = {
        "_id": ObjectId(analysis_id),
        "user_id": current_user.id,
        "type": "skin",
        "date": datetime.utcnow(),
        "image_url": f"/uploads/{unique_filename}",
        "predictions": analysis_result["predictions"],
        "recommendations": analysis_result["recommendations"]
    }
    
    db.analyses.insert_one(analysis_doc)
    
    # Return the result
    return {
        "id": analysis_id,
        "type": "skin",
        "predictions": analysis_result["predictions"],
        "recommendations": analysis_result["recommendations"],
        "image_url": f"/uploads/{unique_filename}"
    }

@app.post("/api/analyze/ct-scan")
async def analyze_ct_scan_image(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """Analyze a CT scan image."""
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="File must be an image"
        )
    
    # Read the image file
    image_data = await file.read()
    
    # Analyze the image
    analysis_result = analyze_ct_scan(image_data)
    
    # Save the image
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = UPLOAD_DIR / unique_filename
    with open(file_path, "wb") as f:
        f.write(image_data)
    
    # Create analysis document
    analysis_id = str(ObjectId())
    analysis_doc = {
        "_id": ObjectId(analysis_id),
        "user_id": current_user.id,
        "type": "ct-scan",
        "date": datetime.utcnow(),
        "image_url": f"/uploads/{unique_filename}",
        "predictions": analysis_result["predictions"],
        "recommendations": analysis_result["recommendations"]
    }
    
    db.analyses.insert_one(analysis_doc)
    
    # Return the result
    return {
        "id": analysis_id,
        "type": "ct-scan",
        "predictions": analysis_result["predictions"],
        "recommendations": analysis_result["recommendations"],
        "image_url": f"/uploads/{unique_filename}"
    }

@app.get("/api/user/history")
async def get_user_history(
    current_user: User = Depends(get_current_user)
):
    """Get user's analysis history."""
    analyses = db.analyses.find({"user_id": current_user.id}).sort("date", -1)
    
    result = []
    for analysis in analyses:
        analysis["id"] = str(analysis["_id"])
        del analysis["_id"]
        result.append(analysis)
    
    return result

@app.get("/api/analysis/{analysis_id}")
async def get_analysis_by_id(
    analysis_id: str,
    current_user: User = Depends(get_current_user)
):
    """Get a specific analysis by ID."""
    analysis = db.analyses.find_one({"_id": ObjectId(analysis_id)})
    
    if not analysis:
        raise HTTPException(
            status_code=404,
            detail="Analysis not found"
        )
    
    if analysis["user_id"] != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to access this analysis"
        )
    
    analysis["id"] = str(analysis["_id"])
    del analysis["_id"]
    
    return analysis

@app.get("/api/user/profile")
async def get_user_profile(
    current_user: User = Depends(get_current_user)
):
    """Get user's profile information."""
    return {
        "id": current_user.id,
        "email": current_user.email,
        "name": current_user.name,
        "created_at": current_user.created_at
    }

@app.put("/api/user/profile")
async def update_user_profile(
    name: str = Form(None),
    current_user: UserInDB = Depends(get_current_user)
):
    """Update user's profile information."""
    updates = {}
    
    if name:
        updates["name"] = name
    
    if updates:
        db.users.update_one(
            {"_id": ObjectId(current_user.id)},
            {"$set": updates}
        )
    
    updated_user = db.users.find_one({"_id": ObjectId(current_user.id)})
    updated_user["id"] = str(updated_user["_id"])
    del updated_user["_id"]
    del updated_user["hashed_password"]
    
    return updated_user

if __name__ == "__main__":
    import uvicorn
    
    # Run the FastAPI app
    uvicorn.run("server:app", host="0.0.0.0", port=8001, reload=True)
