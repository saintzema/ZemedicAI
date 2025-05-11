
import requests
import sys
import logging
import json
import os
from datetime import datetime

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ZemedicAPITester:
    def __init__(self, base_url="https://719aa599-875d-4e6d-bb88-7a222149f050.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.token = None
        self.test_user = f"test_user_{datetime.now().strftime('%H%M%S')}"
        self.test_password = "TestPass123!"
        self.test_email = f"{self.test_user}@example.com"
        self.analysis_id = None
        self.ct_analysis_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None, files=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if not headers:
            headers = {'Content-Type': 'application/json'}
        
        if self.token and 'Authorization' not in headers:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        logger.info(f"Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                if files:
                    # Remove Content-Type for multipart/form-data
                    if 'Content-Type' in headers:
                        del headers['Content-Type']
                    response = requests.post(url, headers=headers, files=files)
                else:
                    response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                logger.info(f"✅ Passed - Status: {response.status_code}")
                try:
                    return True, response.json() if response.content else {}
                except:
                    return True, {}
            else:
                logger.error(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_content = response.json() if response.content else {}
                    logger.error(f"Response content: {error_content}")
                except:
                    logger.error(f"Response content: {response.text}")
                return False, {}

        except Exception as e:
            logger.error(f"❌ Failed - Error: {str(e)}")
            return False, {}
    
    def test_image_availability(self, image_paths):
        """Test if images are available at the specified paths"""
        for image_path in image_paths:
            self.tests_run += 1
            url = f"{self.base_url}{image_path}"
            logger.info(f"Testing image availability: {image_path}")
            
            try:
                response = requests.head(url)
                if response.status_code == 200:
                    self.tests_passed += 1
                    logger.info(f"✅ Image found: {image_path}")
                else:
                    logger.error(f"❌ Image not found: {image_path} (Status: {response.status_code})")
            except Exception as e:
                logger.error(f"❌ Error checking image: {image_path} - {str(e)}")
    
    def register_user(self):
        """Register a test user"""
        logger.info(f"Registering test user: {self.test_user}")
        data = {
            "email": self.test_email,
            "name": "Test User",
            "password": self.test_password
        }
        
        success, response = self.run_test(
            "User Registration",
            "POST",
            "api/auth/register",
            200,
            data=data
        )
        
        if success and 'access_token' in response:
            self.token = response['access_token']
            logger.info("✅ Registration successful, token obtained")
            return True
        
        return success
    
    def login_user(self):
        """Login and get authentication token"""
        logger.info(f"Logging in as: {self.test_email}")
        data = {
            "email": self.test_email,
            "password": self.test_password
        }
        
        success, response = self.run_test(
            "User Login",
            "POST",
            "api/auth/login",
            200,
            data=data
        )
        
        if success and 'access_token' in response:
            self.token = response['access_token']
            logger.info("✅ Login successful, token obtained")
            return True
        else:
            logger.error("❌ Login failed, no token obtained")
            return False
    
    def test_xray_analysis(self):
        """Test the X-ray analysis endpoint with heatmap visualization"""
        if not self.token:
            logger.error("❌ Cannot test X-ray analysis: No authentication token")
            return False
        
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-xray.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
        
        logger.info("Testing X-ray analysis with heatmap visualization")
        
        with open(test_image_path, 'rb') as f:
            files = {'file': ('sample-xray.jpg', f, 'image/jpeg')}
            success, response = self.run_test(
                "X-ray Analysis",
                "POST",
                "api/analyze/xray",
                200,
                files=files
            )
        
        if success:
            # Log the full response to understand its structure
            logger.info(f"X-ray analysis response: {json.dumps(response, indent=2)}")
            
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have confidence scores for progress bars
                has_confidence = False
                for prediction in response.get('predictions', []):
                    if 'confidence' in prediction:
                        has_confidence = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has confidence score: {prediction['confidence']}")
                
                if not has_confidence:
                    logger.warning("⚠️ No predictions with confidence scores found for progress bars")
            else:
                logger.error("❌ Response missing 'predictions' field needed for visualization")
                success = False
            
            # Check if the response has an image URL for visualization
            if 'image_url' in response:
                logger.info(f"✅ Response contains image URL: {response['image_url']}")
            else:
                logger.error("❌ Response missing 'image_url' field needed for visualization")
                success = False
            
            # Store the analysis ID for later use
            if 'id' in response:
                self.analysis_id = response['id']
                logger.info(f"✅ Analysis ID stored: {self.analysis_id}")
            else:
                logger.error("❌ Response missing 'id' field")
                success = False
        
        return success
    
    def test_ct_scan_analysis(self):
        """Test the CT scan analysis endpoint with heatmap visualization"""
        if not self.token:
            logger.error("❌ Cannot test CT scan analysis: No authentication token")
            return False
        
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-ct.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
        
        logger.info("Testing CT scan analysis with heatmap visualization")
        
        with open(test_image_path, 'rb') as f:
            files = {'file': ('sample-ct.jpg', f, 'image/jpeg')}
            success, response = self.run_test(
                "CT Scan Analysis",
                "POST",
                "api/analyze/ct-scan",
                200,
                files=files
            )
        
        if success:
            # Log the full response to understand its structure
            logger.info(f"CT scan analysis response: {json.dumps(response, indent=2)}")
            
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have confidence scores for progress bars
                has_confidence = False
                for prediction in response.get('predictions', []):
                    if 'confidence' in prediction:
                        has_confidence = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has confidence score: {prediction['confidence']}")
                
                if not has_confidence:
                    logger.warning("⚠️ No predictions with confidence scores found for progress bars")
            else:
                logger.error("❌ Response missing 'predictions' field needed for visualization")
                success = False
            
            # Check if the response has an image URL for visualization
            if 'image_url' in response:
                logger.info(f"✅ Response contains image URL: {response['image_url']}")
            else:
                logger.error("❌ Response missing 'image_url' field needed for visualization")
                success = False
            
            # Store the analysis ID for later use
            if 'id' in response:
                self.ct_analysis_id = response['id']
                logger.info(f"✅ CT Analysis ID stored: {self.ct_analysis_id}")
            else:
                logger.error("❌ Response missing 'id' field")
                success = False
        
        return success
    
    def test_analysis_detail(self, analysis_id=None):
        """Test the analysis detail endpoint with heatmap visualization"""
        if not self.token:
            logger.error("❌ Cannot test analysis detail: No authentication token")
            return False
        
        # If no analysis ID is provided, use the one from the X-ray analysis
        if analysis_id is None:
            if hasattr(self, 'analysis_id'):
                analysis_id = self.analysis_id
                logger.info(f"Using X-ray analysis ID: {analysis_id}")
            elif hasattr(self, 'ct_analysis_id'):
                analysis_id = self.ct_analysis_id
                logger.info(f"Using CT scan analysis ID: {analysis_id}")
            else:
                logger.info("Getting analysis ID from user history")
                success, history = self.run_test(
                    "User History",
                    "GET",
                    "api/user/history",
                    200
                )
                
                if success and history and len(history) > 0:
                    analysis_id = history[0].get('id')
                    logger.info(f"Found analysis ID: {analysis_id}")
                else:
                    logger.error("❌ No analysis found in user history")
                    return False
        
        logger.info(f"Testing analysis detail with ID {analysis_id}")
        
        success, response = self.run_test(
            "Analysis Detail",
            "GET",
            f"api/analysis/{analysis_id}",
            200
        )
        
        if success:
            # Log the full response to understand its structure
            logger.info(f"Analysis detail response: {json.dumps(response, indent=2)}")
            
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have confidence scores for progress bars
                has_confidence = False
                for prediction in response.get('predictions', []):
                    if 'confidence' in prediction:
                        has_confidence = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has confidence score: {prediction['confidence']}")
                
                if not has_confidence:
                    logger.warning("⚠️ No predictions with confidence scores found for progress bars")
            else:
                logger.error("❌ Response missing 'predictions' field needed for visualization")
                success = False
            
            # Check if the response has an image URL for visualization
            if 'image_url' in response:
                logger.info(f"✅ Response contains image URL: {response['image_url']}")
            else:
                logger.error("❌ Response missing 'image_url' field needed for visualization")
                success = False
        
        return success

def main():
    # Setup
    tester = ZemedicAPITester()
    
    # Test health endpoint
    logger.info("Testing backend health endpoint...")
    success, response = tester.run_test(
        "Health Check",
        "GET",
        "api/health",
        200
    )
    
    if not success:
        logger.error("❌ Health check failed, stopping tests")
        return 1
    
    logger.info(f"Health check response: {response}")
    
    # Test image availability
    logger.info("Testing image availability...")
    image_paths = [
        "/images/cxr-before.jpg",
        "/images/cxr-after.jpg",
        "/images/cth-before.jpg",
        "/images/cth-after.jpg"
    ]
    tester.test_image_availability(image_paths)
    
    # Test user registration and login
    if tester.register_user():
        # If registration didn't provide a token, try login
        if not tester.token and not tester.login_user():
            logger.error("❌ Login failed, skipping analysis tests")
            return 1
        
        # Test X-ray analysis with heatmap visualization
        tester.test_xray_analysis()
        
        # Test CT scan analysis with heatmap visualization
        tester.test_ct_scan_analysis()
        
        # Test analysis detail with heatmap visualization
        tester.test_analysis_detail()
    else:
        logger.error("❌ Registration failed, skipping login and analysis tests")
        return 1
    
    # Print results
    logger.info(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
