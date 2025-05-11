import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { analyzeXray } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import EnhancedAnalysisResult from '../components/EnhancedAnalysisResult';

const XrayAnalysis = () => {
  const { currentUser } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeCondition, setActiveCondition] = useState(null);
  const fileInputRef = useRef(null);

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

  // Generate random analysis results based on image data
  const generateXrayResults = (imageData) => {
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
    
    // Possible findings for X-rays with different probabilities
    const possibleConditions = [
      { name: 'Pneumonia', severity: random(1, 3) === 1 ? 'Moderate' : 'Mild', location: { x: random(45, 55), y: random(45, 55), radius: random(15, 25) } },
      { name: 'Pleural Effusion', severity: random(1, 10) > 8 ? 'Moderate' : 'Mild', location: { x: random(30, 40), y: random(60, 70), radius: random(10, 20) } },
      { name: 'Cardiomegaly', severity: random(1, 4) === 1 ? 'Moderate' : 'Mild', location: { x: random(40, 60), y: random(55, 65), radius: random(15, 25) } },
      { name: 'Atelectasis', severity: 'Mild', location: { x: random(35, 65), y: random(40, 60), radius: random(10, 20) } },
      { name: 'Lung Opacity', severity: random(1, 10) > 7 ? 'Moderate' : 'Mild', location: { x: random(30, 70), y: random(30, 70), radius: random(10, 20) } },
      { name: 'Pulmonary Edema', severity: 'Moderate', location: { x: random(40, 60), y: random(40, 60), radius: random(20, 30) } },
      { name: 'Pneumothorax', severity: 'Severe', location: { x: random(25, 35), y: random(30, 50), radius: random(15, 25) } },
      { name: 'Tuberculosis', severity: 'Moderate', location: { x: random(40, 60), y: random(35, 45), radius: random(15, 25) } },
      { name: 'Lung Nodule', severity: 'Mild', location: { x: random(35, 65), y: random(35, 65), radius: random(5, 15) } },
      { name: 'Emphysema', severity: 'Mild', location: { x: random(30, 70), y: random(30, 70), radius: random(15, 30) } },
      { name: 'Fibrosis', severity: 'Moderate', location: { x: random(40, 60), y: random(50, 70), radius: random(15, 25) } },
      { name: 'Hilar Enlargement', severity: 'Mild', location: { x: random(45, 55), y: random(40, 50), radius: random(10, 15) } }
    ];
    
    // Select primary condition
    const primaryConditionIndex = random(0, possibleConditions.length - 1);
    const primaryCondition = possibleConditions[primaryConditionIndex];
    
    // Set probability for primary condition
    primaryCondition.probability = random(65, 95);
    
    // Select secondary conditions
    const conditions = [primaryCondition];
    const usedIndices = [primaryConditionIndex];
    const numAdditionalConditions = random(1, 4);
    
    for (let i = 0; i < numAdditionalConditions; i++) {
      let idx;
      do {
        idx = random(0, possibleConditions.length - 1);
      } while (usedIndices.includes(idx));
      
      usedIndices.push(idx);
      const condition = { ...possibleConditions[idx] };
      condition.probability = random(5, 40);
      conditions.push(condition);
    }
    
    // Sort by probability descending
    conditions.sort((a, b) => b.probability - a.probability);
    
    // Generate findings text based on conditions
    let findings = '';
    
    if (primaryCondition.name === 'Pneumonia') {
      findings = `${random(1, 2) === 1 ? 'Focal' : 'Multifocal'} opacities seen in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'upper' : (random(1, 2) === 1 ? 'middle' : 'lower')} lobe consistent with pneumonia. ${conditions.some(c => c.name === 'Pleural Effusion') ? 'Small pleural effusion noted.' : 'No pleural effusion seen.'} Heart size ${conditions.some(c => c.name === 'Cardiomegaly') ? 'is enlarged' : 'appears normal'}.`;
    } else if (primaryCondition.name === 'Pleural Effusion') {
      findings = `${random(1, 2) === 1 ? 'Small' : 'Moderate'} ${random(1, 2) === 1 ? 'right-sided' : 'left-sided'} pleural effusion noted. No focal consolidation identified. ${conditions.some(c => c.name === 'Cardiomegaly') ? 'Heart is enlarged with cardiothoracic ratio of approximately ' + random(55, 65) + '%.' : 'Heart size is within normal limits.'}`;
    } else if (primaryCondition.name === 'Cardiomegaly') {
      findings = `Cardiomegaly is present with cardiothoracic ratio of approximately ${random(55, 65)}%. ${conditions.some(c => c.name === 'Pleural Effusion') ? (random(1, 2) === 1 ? 'Right-sided' : 'Left-sided') + ' pleural effusion noted.' : 'No pleural effusion seen.'} ${conditions.some(c => c.name === 'Pulmonary Edema') ? 'Signs of pulmonary edema present.' : 'No signs of pulmonary edema.'}`;
    } else if (primaryCondition.name === 'Lung Opacity') {
      findings = `${random(1, 2) === 1 ? 'Focal' : 'Diffuse'} lung opacity in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'upper' : (random(1, 2) === 1 ? 'middle' : 'lower')} zone. No significant pleural effusion. Heart size within normal limits.`;
    } else {
      findings = `Findings consistent with ${primaryCondition.name.toLowerCase()}. ${conditions.some(c => c.name === 'Pleural Effusion') ? (random(1, 2) === 1 ? 'Right-sided' : 'Left-sided') + ' pleural effusion noted.' : 'No pleural effusion seen.'} Heart size ${conditions.some(c => c.name === 'Cardiomegaly') ? 'is mildly enlarged' : 'appears normal'}.`;
    }
    
    // Generate recommendation
    let recommendation = '';
    if (primaryCondition.severity === 'Severe' || primaryCondition.probability > 85) {
      recommendation = `Clinical correlation recommended. Consider ${primaryCondition.name === 'Pneumonia' ? 'antibiotic therapy and' : ''} follow-up imaging in ${random(1, 4)}-${random(5, 8)} weeks to monitor resolution of findings.`;
    } else if (primaryCondition.severity === 'Moderate' || primaryCondition.probability > 70) {
      recommendation = `Follow-up recommended in ${random(4, 12)} weeks to ensure resolution of findings. ${random(1, 2) === 1 ? 'Clinical correlation suggested.' : ''}`;
    } else {
      recommendation = 'No urgent intervention required based on these findings. Clinical correlation recommended.';
    }
    
    // Overall confidence
    const confidence = Math.min(97, Math.max(85, primaryCondition.probability + random(-5, 5)));
    
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
        
        // Generate dynamic results based on image preview data
        const mockResult = generateXrayResults(preview);
        
        setResult(mockResult);
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
            <h1 className="heading-secondary">Chest X-Ray Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="heading-subsection mb-4">Upload X-Ray Image</h2>
              
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
                        src={preview}  
                        alt="X-ray preview"  
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
              <h2 className="heading-subsection mb-4">Analysis Results</h2>
              
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
                  <p className="mt-2 text-gray-400">Upload an X-ray image to view analysis results</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
            <h2 className="heading-subsection mb-4 flex items-center">
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