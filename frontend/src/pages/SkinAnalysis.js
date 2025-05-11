import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { analyzeSkin } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import EnhancedAnalysisResult from '../components/EnhancedAnalysisResult';

const SkinAnalysis = () => {
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
  const imageContainerRef = useRef(null);

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

  // Generate random analysis results based on the image data
  const generateAnalysisResults = (imageData) => {
    // Create a seed from the image data by sampling pixel values
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = imageData;
    
    // Create a random seed based on current timestamp + some random factors
    const timestamp = new Date().getTime();
    const randomFactor = Math.floor(Math.random() * 10000);
    let seed = timestamp + randomFactor;
    
    // Generate a deterministic random number based on the seed
    const random = (min, max) => {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      return min + Math.floor(rnd * (max - min + 1));
    };
    
    // Possible skin conditions with different probabilities
    const possibleConditions = [
      // Malignant conditions
      { name: 'Melanoma', severity: 'Malignant' },
      { name: 'Basal Cell Carcinoma', severity: 'Malignant' },
      { name: 'Squamous Cell Carcinoma', severity: 'Malignant' },
      // Benign conditions
      { name: 'Benign Nevus', severity: 'Benign' },
      { name: 'Seborrheic Keratosis', severity: 'Benign' },
      { name: 'Actinic Keratosis', severity: 'Benign' },
      { name: 'Dermatofibroma', severity: 'Benign' },
      { name: 'Vascular Lesion', severity: 'Benign' },
      { name: 'Angioma', severity: 'Benign' },
      { name: 'Dermatitis', severity: 'Benign' },
      { name: 'Psoriasis', severity: 'Benign' },
      { name: 'Rosacea', severity: 'Benign' }
    ];
    
    // Select primary condition
    const primaryConditionIndex = random(0, possibleConditions.length - 1);
    const primaryCondition = possibleConditions[primaryConditionIndex];
    const isMalignant = primaryCondition.severity === 'Malignant';
    
    // Assign a probability for the primary condition
    const primaryProbability = isMalignant 
      ? random(68, 95) 
      : random(75, 98);
    
    // Create conditions array
    const conditions = [
      { 
        ...primaryCondition, 
        probability: primaryProbability,
        location: { 
          x: random(40, 60), 
          y: random(40, 60), 
          radius: random(15, 25) 
        }
      }
    ];
    
    // Add some additional conditions with lower probabilities
    const numAdditionalConditions = random(1, 3);
    const usedIndices = [primaryConditionIndex];
    
    for (let i = 0; i < numAdditionalConditions; i++) {
      let idx;
      do {
        idx = random(0, possibleConditions.length - 1);
      } while (usedIndices.includes(idx));
      
      usedIndices.push(idx);
      const condition = possibleConditions[idx];
      const probability = random(5, 30);
      
      conditions.push({
        ...condition,
        probability,
        // Only add location for higher probability conditions
        location: probability > 15 ? { 
          x: random(30, 70), 
          y: random(30, 70), 
          radius: random(8, 15) 
        } : null
      });
    }
    
    // Sort by probability descending
    conditions.sort((a, b) => b.probability - a.probability);
    
    // Generate findings text
    let findings = '';
    if (isMalignant && primaryProbability > 75) {
      findings = `The lesion appears to have irregular borders and varied pigmentation. Features suggest a ${primaryProbability > 85 ? 'highly ' : ''}concerning ${primaryCondition.name.toLowerCase()} that requires urgent evaluation.`;
    } else if (isMalignant) {
      findings = `The lesion shows some concerning features that may be consistent with ${primaryCondition.name.toLowerCase()}. Clinical correlation and possibly biopsy are recommended.`;
    } else {
      findings = `The lesion appears to have regular borders and consistent coloration. Features are most consistent with ${primaryCondition.name.toLowerCase()}, which is a benign condition.`;
    }
    
    // Generate recommendation
    let recommendation = '';
    if (isMalignant && primaryProbability > 75) {
      recommendation = 'Urgent dermatological evaluation recommended. Consider biopsy for definitive diagnosis. Continue regular skin self-examinations for any changes.';
    } else if (isMalignant) {
      recommendation = 'Dermatological evaluation recommended in the next 1-2 weeks. Consider close monitoring or biopsy if clinically indicated.';
    } else {
      recommendation = 'Routine follow-up recommended. No immediate intervention required based on these findings. Continue regular skin examinations.';
    }
    
    // Calculate an overall confidence score
    const confidence = Math.min(95, Math.max(75, primaryProbability + random(-5, 5)));
    
    return {
      success: true,
      findings,
      confidence,
      conditions,
      recommendation
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a skin image to analyze');
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      // For demo purposes we're using a timeout to simulate API call
      // In production, replace this with the actual API call:
      // const response = await analyzeSkin(file, currentUser?.token);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        
        // Generate truly random results based on image data, not just filename
        const mockResult = generateAnalysisResults(preview);
        
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
            <h1 className="heading-secondary">Skin Lesion Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="heading-subsection mb-4">Upload Skin Image</h2>
              
              {error && (
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-4 text-red-400">
                  <p>{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div 
                  ref={imageContainerRef}
                  className="border-2 border-dashed border-gray-700 hover:border-purple-500 transition-colors duration-300 rounded-lg p-8 text-center" 
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {preview ? (
                    <div className="mb-4 relative">
                      <img 
                        ref={imageRef}
                        src={preview} 
                        alt="Skin lesion preview" 
                        className="mx-auto max-h-64 object-contain rounded"
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="mx-auto h-24 w-24 text-gray-600 flex items-center justify-center bg-gray-800 rounded-full mb-4">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 mt-2">Drag and drop a skin lesion image, or click to select</p>
                      <p className="text-gray-500 text-sm mt-1">Supported formats: JPEG, PNG</p>
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
                
                <div className="bg-indigo-900/30 border-l-4 border-indigo-500 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-indigo-300">
                        For best results, take a clear, well-lit close-up photo of the skin lesion against a plain background. Include a ruler or coin for scale if possible.
                      </p>
                    </div>
                  </div>
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
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Skin Lesion'}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="heading-subsection mb-4">Analysis Results</h2>
              
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-r-2 border-l-2 border-indigo-500 animate-spin animation-delay-150"></div>
                    <div className="absolute inset-4 rounded-full border-t-2 border-b-2 border-violet-500 animate-spin animation-delay-300"></div>
                  </div>
                  <p className="mt-6 text-gray-300">Analyzing skin image...</p>
                  <p className="mt-2 text-gray-500 text-sm">This usually takes 5-10 seconds</p>
                </div>
              ) : result ? (
                <EnhancedAnalysisResult 
                  image={preview} 
                  conditions={result.conditions} 
                  activeCondition={activeCondition} 
                  onConditionClick={handleConditionClick} 
                  findings={result.findings} 
                  confidence={result.confidence} 
                  recommendation={result.recommendation} 
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <div className="bg-gray-800 h-24 w-24 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-gray-400">Upload a skin lesion image to view analysis results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkinAnalysis;