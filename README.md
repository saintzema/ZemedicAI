# ZemedicAI - Medical Imaging AI Analysis Platform

ZemedicAI is a full-stack web application that provides AI-powered analysis of medical images, including chest X-rays, skin lesions, and CT scans. This project is an MVP (Minimum Viable Product) that demonstrates the core functionality of the platform.

## Features

- **Multiple Analysis Types:**
  - Chest X-ray analysis
  - Skin lesion analysis
  - CT scan analysis

- **User Authentication:**
  - Register and login functionality
  - User profile management

- **Demo Mode:**
  - Toggle between demo mode and real analysis
  - Simulated results for demonstration purposes

- **Analysis Features:**
  - Image upload with drag-and-drop
  - Real-time processing
  - Display of conditions with confidence scores
  - Suggested actions and lifestyle changes

- **History Tracking:**
  - View previous analyses
  - Filter by analysis type

## Technology Stack

- **Frontend:**
  - React.js with React Router
  - Tailwind CSS for styling
  - Chart.js for data visualization

- **Backend:**
  - FastAPI (Python)
  - TorchXRayVision for X-ray analysis
  - MongoDB for data storage

## Architecture

The application follows a modern client-server architecture:

- **Frontend:** Single page application built with React.js
- **Backend:** RESTful API built with FastAPI
- **Database:** MongoDB (document-oriented database)
- **AI Models:** Integration with TorchXRayVision and custom models

## AI Models

### Chest X-ray Analysis
- Uses the TorchXRayVision library with DenseNet121 model pre-trained on multiple chest X-ray datasets
- Capable of detecting 14 different thoracic diseases and conditions

### Skin Lesion Analysis (Demo/Placeholder)
- Simulated analysis based on ISIC Skin Lesion datasets
- Will integrate with pre-trained models in future versions

### CT Scan Analysis (Demo/Placeholder)
- Simulated analysis for brain CT scans
- Will integrate with pre-trained models in future versions

## Getting Started

### Prerequisites

- Node.js and npm/yarn
- Python 3.8+
- MongoDB

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/zemedic-ai.git
cd zemedic-ai
```

2. Install backend dependencies:
```
cd backend
pip install -r requirements.txt
```

3. Install frontend dependencies:
```
cd ../frontend
yarn install
```

4. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Configure MongoDB connection and JWT secret

5. Start the backend:
```
cd ../backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

6. Start the frontend:
```
cd ../frontend
yarn start
```

7. Open your browser and navigate to `http://localhost:3000`

## Future Improvements

- Integration with more comprehensive medical datasets
- Enhanced visualization with heatmaps for anomaly detection
- Multi-language support (English and French)
- DICOM format support for more professional medical imaging
- Integration with electronic health record (EHR) systems
- Mobile app development

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- NIH ChestXray14 dataset
- ISIC Skin Lesion dataset
- TorchXRayVision library by Joseph Paul Cohen
