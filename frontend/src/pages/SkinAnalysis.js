import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import ImageUploader from '../components/ImageUploader';
import ResultsViewer from '../components/ResultsViewer';
import { analyzeSkin } from '../utils/api';
import { generateSkinLesionDemo } from '../utils/demoData';
import { FaInfoCircle } from 'react-icons/fa';

const SkinAnalysis = () => {
  const { currentUser } = useAuth();
  const { demoMode } = useDemoMode();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysisId, setAnalysisId] = useState('');

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    } else {
      setImageUrl('');
      setPredictions([]);
      setRecommendations([]);
      setError('');
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please upload an image first');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      if (demoMode) {
        // Simulate API delay in demo mode
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate demo data
        const demoResult = generateSkinLesionDemo();
        setPredictions(demoResult.predictions);
        setRecommendations(demoResult.recommendations);
        setAnalysisId('demo-' + Date.now());
      } else {
        // Real API call
        const result = await analyzeSkin(file, currentUser.token);
        setPredictions(result.predictions || []);
        setRecommendations(result.recommendations || []);
        setAnalysisId(result.id || '');
      }
    } catch (error) {
      console.error('Analysis error:', error);
      setError(error.message || 'Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReport = () => {
    // For demo purposes, alert the user
    if (demoMode) {
      alert('Report download feature available only in real analysis mode');
      return;
    }
    
    // In real mode, we would call an API to generate a report
    if (analysisId) {
      // Placeholder for real implementation
      alert(`Downloading report for analysis ${analysisId}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Skin Lesion Analysis</h1>
        <p className="text-gray-600 mt-2">
          Upload images of skin lesions for AI-powered analysis
        </p>
      </div>
      
      {demoMode && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaInfoCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Mode Active:</strong> Results are simulated and do not represent actual medical analysis.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload Skin Lesion Image</h2>
        <ImageUploader
          onUpload={handleFileUpload}
          accept={{ 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] }}
          title="Upload Skin Image"
          subtitle="Drag & drop your skin lesion image here, or click to select"
        />
        
        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          className={`btn-primary w-full ${(!file || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Analyzing...' : 'Analyze Skin Lesion'}
        </button>
      </div>
      
      {(imageUrl || error) && (
        <ResultsViewer
          imageUrl={imageUrl}
          predictions={predictions}
          recommendations={recommendations}
          analysisType="Skin Lesion"
          loading={loading}
          error={error}
          onDownloadReport={handleDownloadReport}
          demoMode={demoMode}
        />
      )}
      
      {/* Information Panel */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-800">About Skin Lesion Analysis</h3>
        <p className="text-blue-700 mb-4">
          Our AI model can detect various skin conditions including:
        </p>
        <ul className="list-disc pl-5 text-blue-700 mb-4">
          <li>Melanoma</li>
          <li>Basal Cell Carcinoma</li>
          <li>Squamous Cell Carcinoma</li>
          <li>Actinic Keratosis</li>
          <li>Seborrheic Keratosis</li>
          <li>Dermatofibroma</li>
          <li>Vascular Lesions</li>
        </ul>
        <p className="text-blue-700 text-sm">
          <strong>Note:</strong> This tool is designed to assist healthcare professionals and should not replace proper medical diagnosis.
          Always consult with a qualified dermatologist for proper interpretation of results.
        </p>
      </div>
    </div>
  );
};

export default SkinAnalysis;
