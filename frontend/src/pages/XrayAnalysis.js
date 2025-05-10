import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { analyzeXray } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

const XrayAnalysis = () => {
  const { currentUser } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [highlights, setHighlights] = useState({});
  const [activeCondition, setActiveCondition] = useState(null);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError(null);
    
    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      return;
    }
    
    // Check if file is an image
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select an image file');
      setFile(null);
      setPreview(null);
      return;
    }
    
    setFile(selectedFile);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an X-ray image to analyze');
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      // For demo purposes we're using a timeout to simulate API call
      // In production, replace this with the actual API call:
      // const response = await analyzeXray(file, currentUser?.token);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        
        // Sample result data
        const mockResult = {
          success: true,
          findings: 'Focal airspace opacity observed in the right lower lobe. No pleural effusion. Heart size within normal limits.',
          confidence: 92,
          conditions: [
            { name: 'Focal airspace opacity', probability: 92, severity: 'Moderate', location: { x: 65, y: 55, radius: 20 } },
            { name: 'Multifocal airspace opacity', probability: 15, severity: 'Mild', location: null },
            { name: 'Diffuse lower airspace opacity', probability: 8, severity: 'None', location: null },
            { name: 'Basal interstitial thickening', probability: 4, severity: 'None', location: null },
            { name: 'Lower zone fibrotic volume loss', probability: 12, severity: 'None', location: null },
          ],
          recommendation: 'Follow-up imaging recommended in 3-4 weeks to monitor resolution of opacity. Consider antibiotic therapy if clinically indicated.'
        };
        
        setResult(mockResult);
        
        // Create highlight data
        const highlightData = {};
        mockResult.conditions.forEach(condition => {
          if (condition.location) {
            highlightData[condition.name] = condition.location;
          }
        });
        
        setHighlights(highlightData);
        setActiveCondition(mockResult.conditions[0].name);
      }, 3000);
    } catch (err) {
      setIsAnalyzing(false);
      setError(err.message || 'An error occurred during analysis');
    }
  };

  const handleConditionClick = (condition) => {
    setActiveCondition(condition.name);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
    setHighlights({});
    setActiveCondition(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const drawHighlight = () => {
    if (!imageRef.current || !activeCondition || !highlights[activeCondition]) return;
    
    const img = imageRef.current;
    const imgRect = img.getBoundingClientRect();
    const location = highlights[activeCondition];
    
    // Calculate scaling based on image's displayed size vs natural size
    const scaleX = imgRect.width / img.naturalWidth;
    const scaleY = imgRect.height / img.naturalHeight;
    
    // Adjust highlight position and size based on scaling
    const scaledX = location.x * scaleX;
    const scaledY = location.y * scaleY;
    const scaledRadius = location.radius * Math.min(scaleX, scaleY);
    
    return (
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${scaledX}%`,
          top: `${scaledY}%`,
          width: `${scaledRadius * 2}%`,
          height: `${scaledRadius * 2}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0) 70%)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite'
        }}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/analysis" className="text-purple-400 hover:text-purple-300 mr-4 flex items-center">
              <svg className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="ml-2">Back to Analyses</span>
            </Link>
            <h1 className="text-3xl font-bold text-white">Chest X-Ray Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Upload X-Ray Image</h2>
              
              {error && (
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-4 text-red-400">
                  <p>{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div 
                  className="border-2 border-dashed border-gray-700 hover:border-purple-500 transition-colors duration-300 rounded-lg p-8 text-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {preview ? (
                    <div className="mb-4 relative">
                      <img  
                        ref={imageRef}
                        src={preview}  
                        alt="X-ray preview"  
                        className="mx-auto max-h-64 object-contain rounded"
                      />
                      {activeCondition && highlights[activeCondition] && drawHighlight()}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="mx-auto h-24 w-24 text-gray-600 flex items-center justify-center bg-gray-800 rounded-full mb-4">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 mt-2">Drag and drop an X-ray image, or click to select</p>
                      <p className="text-gray-500 text-sm mt-1">Supported formats: JPEG, PNG, DICOM</p>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full px-3 py-2 text-sm border border-gray-700 bg-gray-800 rounded-md text-gray-300 file:bg-purple-600 file:text-white file:border-0 file:px-4 file:py-2 file:mr-4 file:rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={!file || isAnalyzing}
                    className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                      !file || isAnalyzing ? 'bg-purple-800/40 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                    }`}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze X-Ray'}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Analysis Results</h2>
              
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-r-2 border-l-2 border-indigo-500 animate-spin animation-delay-150"></div>
                    <div className="absolute inset-4 rounded-full border-t-2 border-b-2 border-violet-500 animate-spin animation-delay-300"></div>
                  </div>
                  <p className="mt-6 text-gray-300">Analyzing X-ray image...</p>
                  <p className="mt-2 text-gray-500 text-sm">This usually takes 5-10 seconds</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="bg-green-900/30 border-l-4 border-green-500 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-400">Analysis completed successfully</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Findings</h3>
                    <p className="text-gray-300">{result.findings}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">AI Confidence</h3>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-3 mb-1 text-xs flex rounded-full bg-gray-800">
                        <div  
                          style={{ width: `${result.confidence}%` }}  
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full ${
                            result.confidence > 90 ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                            result.confidence > 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 
                            'bg-gradient-to-r from-red-500 to-red-600'
                          }`} 
                        ></div>
                      </div>
                      <p className="text-sm text-gray-300 flex justify-between">
                        <span>Overall Confidence</span>
                        <span>{result.confidence}%</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Conditions Detected</h3>
                    <div className="space-y-2">
                      {result.conditions.map((condition, index) => (
                        <div 
                          key={index} 
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            activeCondition === condition.name 
                              ? 'bg-purple-900/30 border-l-2 border-purple-500' 
                              : 'hover:bg-gray-800'
                          }`}
                          onClick={() => handleConditionClick(condition)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-200 font-medium flex items-center">
                              <div className={`h-3 w-3 rounded-full mr-2 ${
                                condition.probability > 50 ? 'bg-red-500' :  
                                condition.probability > 20 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}></div>
                              {condition.name}
                            </span>
                            <span className={`text-sm px-2 py-0.5 rounded-full ${
                              condition.severity === 'None' ? 'bg-green-900/30 text-green-400 border border-green-600/30' : 
                              condition.severity === 'Mild' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-600/30' : 
                              'bg-red-900/30 text-red-400 border border-red-600/30'
                            }`}>
                              {condition.severity}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-800 rounded-full h-2 mr-2">
                              <div
                                className={`h-2 rounded-full ${
                                  condition.probability > 70 ? 'bg-gradient-to-r from-red-500 to-red-600' :  
                                  condition.probability > 40 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 
                                  'bg-gradient-to-r from-green-500 to-green-600'
                                }`}
                                style={{ width: `${condition.probability}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-400 w-12">{condition.probability}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Recommendation</h3>
                    <p className="text-gray-300">{result.recommendation}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-sm text-sm hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Analyze Another X-Ray
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <div className="bg-gray-800 h-24 w-24 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-gray-400">Upload an X-ray image to view analysis results</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Chest X-Ray Analysis
            </h2>
            <div className="prose max-w-none text-gray-300">
              <p>
                Our AI-powered chest X-ray analysis system can detect up to 14 different conditions, including:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-300">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Pneumonia
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Pleural Effusion
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Cardiomegaly
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Atelectasis
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Pulmonary Edema
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Consolidation
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Tuberculosis
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Lung Nodules
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Emphysema
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Fibrosis
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Pneumothorax
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Fractures
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Lung Masses
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Foreign Objects
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                The system has been trained on over 1 million chest X-rays and has been validated with radiologists
                from leading medical institutions across Africa. It achieves an average accuracy of 94% across all conditions.
              </p>
              <div className="mt-4 p-3 bg-gray-800 rounded-lg border-l-2 border-purple-500">
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-400">Note:</span> This AI system is designed to assist healthcare professionals and should not replace clinical judgment.
                  Always consult with a qualified healthcare provider for diagnosis and treatment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default XrayAnalysis;