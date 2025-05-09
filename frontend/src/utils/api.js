// API utilities for ZemedicAI

// Base API URL from environment variables
const API_URL = process.env.REACT_APP_BACKEND_URL;

// Helper function for handling API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || response.statusText);
  }
  return response.json();
};

// Function to upload and analyze chest X-ray images
export const analyzeXray = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/api/analyze/xray`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  return handleResponse(response);
};

// Function to upload and analyze skin lesion images
export const analyzeSkin = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/api/analyze/skin`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  return handleResponse(response);
};

// Function to upload and analyze CT scan images
export const analyzeCTScan = async (file, token) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/api/analyze/ct-scan`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  return handleResponse(response);
};

// Function to get user's analysis history
export const getUserHistory = async (token) => {
  const response = await fetch(`${API_URL}/api/user/history`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return handleResponse(response);
};

// Function to get a specific analysis result by ID
export const getAnalysisById = async (id, token) => {
  const response = await fetch(`${API_URL}/api/analysis/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return handleResponse(response);
};

// Function to create a PDF report for an analysis
export const generateReport = async (analysisId, token) => {
  const response = await fetch(`${API_URL}/api/analysis/${analysisId}/report`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || response.statusText);
  }

  return response.blob();
};

// Function to update user profile
export const updateUserProfile = async (userData, token) => {
  const response = await fetch(`${API_URL}/api/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(userData)
  });

  return handleResponse(response);
};
