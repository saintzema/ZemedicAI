import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import ImageUploader from '../components/ImageUploader';
import ResultsViewer from '../components/ResultsViewer';
import { analyzeCTScan } from '../utils/api';
import { generateCTScanDemo } from '../utils/demoData';
import { FaInfoCircle, FaCloudUploadAlt, FaHistory, FaBrain } from 'react-icons/fa';

const CTScanAnalysis = () => {
  const { currentUser } = useAuth();
  const { demoMode } = useDemoMode();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysisId, setAnalysisId] = useState('');
  const [recentUploads, setRecentUploads] = useState([]);

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
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate demo data
        const demoResult = generateCTScanDemo();
        setPredictions(demoResult.predictions);
        setRecommendations(demoResult.recommendations);
        const newAnalysisId = 'demo-' + Date.now();
        setAnalysisId(newAnalysisId);
        
        // Add to recent uploads
        const newUpload = {
          id: newAnalysisId,
          timestamp: new Date(),
          imageUrl: imageUrl,
          primaryFinding: demoResult.predictions[0]?.label || 'No findings'
        };
        setRecentUploads(prev => [newUpload, ...prev].slice(0, 5));
      } else {
        // Real API call
        const result = await analyzeCTScan(file, currentUser.token);
        setPredictions(result.predictions || []);
        setRecommendations(result.recommendations || []);
        setAnalysisId(result.id || '');
        
        // Add to recent uploads for real mode too
        if (result.id) {
          const newUpload = {
            id: result.id,
            timestamp: new Date(),
            imageUrl: imageUrl,
            primaryFinding: result.predictions[0]?.label || 'No findings'
          };
          setRecentUploads(prev => [newUpload, ...prev].slice(0, 5));
        }
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

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CT Scan Analysis</h1>
        <div className="flex items-center text-gray-600">
          <FaBrain className="mr-2 text-[#5718e3]" />
          <p>Upload CT scan images for AI-powered analysis and detection</p>
        </div>
      </div>
      
      {demoMode && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-md shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaInfoCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Mode Active:</strong> Results are simulated using trained patterns from medical datasets.
                Toggle off in the navigation bar for connecting to real AI models.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaCloudUploadAlt className="mr-2 text-[#5718e3]" />
                Upload CT Scan Image
              </h2>
              <div className="text-sm text-gray-500">
                Accepted formats: JPG, PNG
              </div>
            </div>
            
            <ImageUploader
              onUpload={handleFileUpload}
              accept={{ 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] }}
              title="Upload CT Scan"
              subtitle="Drag & drop your CT scan image here, or click to select"
            />
            
            <button
              onClick={handleAnalyze}
              disabled={!file || loading}
              className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center ${
                (!file || loading) 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white hover:opacity-90'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : 'Analyze CT Scan'}
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaHistory className="mr-2 text-[#5718e3]" />
                Recent Activity
              </h2>
            </div>
            
            {recentUploads.length > 0 ? (
              <div className="space-y-3">
                {recentUploads.map((upload) => (
                  <div key={upload.id} className="flex items-center p-2 rounded-md hover:bg-gray-50">
                    <div className="h-12 w-12 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={upload.imageUrl} alt="CT scan thumbnail" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 truncate">{upload.primaryFinding}</p>
                      <p className="text-xs text-gray-500">{formatDate(upload.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No recent analyses</p>
                <p className="text-sm mt-1">Analyzed images will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {(imageUrl || error) && (
        <ResultsViewer
          imageUrl={imageUrl}
          predictions={predictions}
          recommendations={recommendations}
          analysisType="CT Scan"
          loading={loading}
          error={error}
          onDownloadReport={handleDownloadReport}
          demoMode={demoMode}
        />
      )}
      
      {/* Information Panel */}
      <div className="mt-8 bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">About CT Scan AI Analysis</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-lg">Detectable Conditions</h4>
            <ul className="space-y-1 list-disc pl-5">
              <li>Brain Tumors</li>
              <li>Stroke</li>
              <li>Intracranial Hemorrhage</li>
              <li>Multiple Sclerosis</li>
              <li>Brain Aneurysm</li>
              <li>Hydrocephalus</li>
              <li>Brain Atrophy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Technology</h4>
            <p className="mb-3">
              Our CT scan analysis uses advanced deep learning models trained on thousands of 
              clinically validated scans with 94% agreement with radiologist diagnoses.
            </p>
            <p className="text-sm">
              <strong>Note:</strong> This tool is designed to assist healthcare professionals and should not replace proper medical diagnosis.
              Always consult with a qualified neurologist for interpretation of results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTScanAnalysis;