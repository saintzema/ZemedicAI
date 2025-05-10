# ZemedicAI - AI-Powered Medical Diagnostics for Africa

ZemedicAI is a cutting-edge platform that delivers AI-powered medical diagnostic tools designed specifically for the unique healthcare challenges across Africa, bringing advanced medical imaging analysis to areas that need it most.

![ZemedicAI Platform](https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c)

## Features

- 🏥 **AI Diagnostic Analysis**: X-ray, CT scan, and skin lesion analysis with high accuracy
- 🌍 **African-Focused Solutions**: Designed specifically for the healthcare needs of Africa
- 🔋 **Flexible Deployment Options**: Solar-powered booths, telehealth integration, cloud API, and mobile SDK
- 📊 **Comprehensive Reporting**: Detailed analysis results with professional medical reporting
- 🔒 **Secure Authentication**: User authentication and data protection
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT-based auth system
- **Deployment**: Docker, Supervisor

## Local Development Setup

### Prerequisites

- Node.js (v14+ recommended)
- Python 3.8+
- MongoDB
- Git

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/zemedic-ai.git
cd zemedic-ai/frontend

# Install dependencies
yarn install

# Create .env file
cp .env.example .env
# Edit .env file to add your backend URL
# REACT_APP_BACKEND_URL=http://localhost:8001

# Start development server
yarn start
```

### Backend Setup

```bash
# Navigate to backend directory
cd ../backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env to configure MongoDB
# MONGO_URL=mongodb://localhost:27017
# DB_NAME=zemedic

# Start development server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## Production Deployment

### Option 1: Traditional Server Deployment

1. **Build the Frontend**

```bash
cd frontend
yarn build
```

2. **Set up Nginx or Apache**

Configure your web server to serve the built frontend from `/frontend/build` and proxy API requests to the backend.

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    # Serve frontend
    location / {
        root /path/to/zemedic-ai/frontend/build;
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy API requests to backend
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. **Set up the Backend**

```bash
cd backend
# Install production dependencies
pip install gunicorn
# Start the backend with gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app
```

4. **Set up Supervisor**

Create a supervisor configuration file to manage your processes:

```ini
[program:frontend]
command=nginx
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/frontend.err.log
stdout_logfile=/var/log/supervisor/frontend.out.log

[program:backend]
command=/path/to/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8001 server:app
directory=/path/to/zemedic-ai/backend
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/backend.err.log
stdout_logfile=/var/log/supervisor/backend.out.log

[program:mongodb]
command=mongod --dbpath /var/lib/mongodb
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/mongodb.err.log
stdout_logfile=/var/log/supervisor/mongodb.out.log
```

### Option 2: Docker Deployment

1. **Build and push Docker images**

```bash
# Build frontend image
docker build -t zemedic-frontend:latest -f frontend.Dockerfile .

# Build backend image
docker build -t zemedic-backend:latest -f backend.Dockerfile .

# Push to your registry
docker push yourusername/zemedic-frontend:latest
docker push yourusername/zemedic-backend:latest
```

2. **Deploy with Docker Compose**

Create a `docker-compose.yml` file:

```yaml
version: '3'
services:
  mongodb:
    image: mongo:latest
    volumes:
      - mongodb_data:/data/db
    networks:
      - zemedic-network

  backend:
    image: yourusername/zemedic-backend:latest
    depends_on:
      - mongodb
    environment:
      - MONGO_URL=mongodb://mongodb:27017
      - DB_NAME=zemedic
    networks:
      - zemedic-network

  frontend:
    image: yourusername/zemedic-frontend:latest
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - zemedic-network

networks:
  zemedic-network:

volumes:
  mongodb_data:
```

3. **Deploy with docker-compose**

```bash
docker-compose up -d
```

### Option 3: Cloud Deployment (AWS, Azure, GCP)

1. **AWS Elastic Beanstalk**

   - Create a new application and environment
   - Configure your environment with the necessary environment variables
   - Deploy your application code

2. **Azure App Service**

   - Create a new App Service
   - Configure deployment settings
   - Set up environment variables
   - Deploy your application

3. **Google Cloud Run**

   - Build your Docker images
   - Push to Google Container Registry
   - Create a new Cloud Run service
   - Configure environment variables
   - Deploy your containers

## Project Structure

```
/app
├── backend/
│   ├── requirements.txt      # Python dependencies
│   ├── server.py             # Main FastAPI application
│   └── .env                  # Environment variables
├── frontend/
│   ├── package.json          # Node.js dependencies
│   ├── public/               # Static assets
│   └── src/                  # React source code
│       ├── components/       # Reusable UI components
│       ├── contexts/         # React contexts for state management
│       ├── pages/            # Page components
│       ├── assets/           # Images, fonts, etc.
│       ├── App.js            # Main React component
│       └── index.js          # React entry point
└── README.md                 # Project documentation
```

## Environment Variables

### Frontend (.env)

```
REACT_APP_BACKEND_URL=https://api.yourdomain.com
```

### Backend (.env)

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=zemedic_db
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributors

- The ZemedicAI Team
