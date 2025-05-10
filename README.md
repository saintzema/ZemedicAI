# ZemedicAI - AI-Powered Medical Diagnostics Platform

ZemedicAI is a full-stack application featuring a React frontend and FastAPI backend that provides AI-powered medical diagnostics for X-ray analysis, skin lesion detection, and CT scan interpretation.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Local Development Setup](#local-development-setup)
- [Deployment Guide](#deployment-guide)
  - [Deploying to Hostinger](#deploying-to-hostinger)
  - [Deploying to Other Platforms](#deploying-to-other-platforms)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## Features

- **AI-Powered Diagnostics**: Analysis for X-rays, skin lesions, and CT scans
- **Dark Theme UI**: Professional clinical interface with purple/indigo gradients
- **Responsive Design**: Works on all device sizes
- **Interactive Visualizations**: Confidence indicators and region highlighting
- **Comprehensive Content**: Detailed product pages and company information

## Project Structure

```
/app/
├── backend/             # FastAPI backend
│   ├── server.py        # Main API server
│   ├── requirements.txt # Python dependencies
│   └── .env             # Backend environment variables
├── frontend/            # React frontend
│   ├── public/          # Static assets
│   ├── src/             # React source code
│   │   ├── components/  # Reusable UI components
│   │   ├── contexts/    # React contexts (Auth, etc.)
│   │   ├── pages/       # Application pages
│   │   ├── utils/       # Utility functions
│   │   └── App.js       # Main application component
│   ├── package.json     # Node.js dependencies
│   └── .env             # Frontend environment variables
└── README.md            # This file
```

## Local Development Setup

### Prerequisites

- Node.js (v14+)
- Python (3.7+)
- MongoDB (local or remote)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the backend directory:
   ```
   MONGO_URL="mongodb://localhost:27017"
   DB_NAME="zemedic_database"
   ```

5. Start the backend server:
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the frontend directory:
   ```
   REACT_APP_BACKEND_URL="http://localhost:8001/api"
   ```

4. Start the frontend development server:
   ```bash
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Using Docker Compose (Optional)

If you have Docker and Docker Compose installed, you can run the entire application stack with:

```bash
docker-compose up
```

## Deployment Guide

### Deploying to Hostinger

#### Backend Deployment

1. Log in to your Hostinger account and create a new website.

2. Set up a Python environment:
   - Go to the Hostinger control panel
   - Enable Python in the "Website" > "Python" section
   - Choose Python 3.9+ version

3. Upload backend files via SSH or FTP:
   ```bash
   scp -r backend/* user@your-hostinger-domain.com:/path/to/backend/
   ```

4. Install dependencies on the server:
   ```bash
   pip install -r requirements.txt
   ```

5. Configure environment variables in Hostinger control panel:
   - Go to "Website" > "Environment Variables"
   - Add:
     - MONGO_URL="mongodb://your-mongo-uri"
     - DB_NAME="your_database_name"

6. Set up a production server with Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app
   ```

7. Configure Hostinger to start this Python application automatically.

#### Frontend Deployment

1. Build the production version of the frontend:
   ```bash
   cd frontend
   yarn build
   ```

2. Upload the build directory to Hostinger via SSH or FTP:
   ```bash
   scp -r build/* user@your-hostinger-domain.com:/path/to/public_html/
   ```

3. Configure environment variables for production:
   - Create a `.env.production` file before building:
   ```
   REACT_APP_BACKEND_URL="https://api.your-hostinger-domain.com/api"
   ```

4. Set up URL rewriting for React Router:
   - Create an `.htaccess` file in the public_html directory:
   ```
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Deploying to Other Platforms

#### Deploying Backend to Heroku

1. Create a Heroku account and install the Heroku CLI.

2. Initialize a Git repository (if not already done):
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```

4. Add a Procfile for Heroku:
   ```
   web: gunicorn -k uvicorn.workers.UvicornWorker server:app
   ```

5. Configure environment variables:
   ```bash
   heroku config:set MONGO_URL="mongodb://your-mongo-uri"
   heroku config:set DB_NAME="your_database_name"
   ```

6. Deploy to Heroku:
   ```bash
   git push heroku master
   ```

#### Deploying Frontend to Netlify

1. Create a Netlify account.

2. Create a `netlify.toml` file in the frontend directory:
   ```toml
   [build]
     command = "yarn build"
     publish = "build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. Configure environment variables in Netlify UI or with a `.env.production` file.

4. Deploy using the Netlify UI or CLI:
   ```bash
   netlify deploy --prod
   ```

## Environment Variables

### Backend Variables

- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: MongoDB database name

### Frontend Variables

- `REACT_APP_BACKEND_URL`: URL of the backend API (must include `/api` suffix)

## API Documentation

Once the backend is running, Swagger documentation is available at:
- Local: http://localhost:8001/docs
- Production: https://your-backend-domain.com/docs

## Troubleshooting

### Common Issues

1. **Backend can't connect to MongoDB**
   - Check if MongoDB is running
   - Verify the MONGO_URL in .env is correct
   - Make sure network allows connection to MongoDB

2. **Frontend can't connect to Backend**
   - Verify REACT_APP_BACKEND_URL is correctly set
   - Check if backend server is running
   - Ensure CORS is properly configured in backend

3. **Deployment Issues**
   - Make sure all environment variables are set in production
   - Check server logs for specific errors
   - Verify build process completed successfully

### Getting Help

If you encounter issues not covered in this guide, please open an issue on our GitHub repository or contact our support team at support@zemedic.ai.

---

© 2023 ZemedicAI. All Rights Reserved.