import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const XrayAnalysis = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an X-ray image to analyze');
      return;
    }
    
    // Simulate API call
    setIsAnalyzing(true);
    setResult(null);
    
    // Mock analysis result after delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        success: true,
        findings: 'No significant abnormalities detected. Lung fields clear. Heart size within normal limits. No pleural effusion.',
        confidence: 96,
        conditions: [
          { name: 'Pneumonia', probability: 4, severity: 'None' },
          { name: 'Pleural Effusion', probability: 2, severity: 'None' },
          { name: 'Cardiomegaly', probability: 5, severity: 'None' },
          { name: 'Atelectasis', probability: 3, severity: 'None' }
        ],
        recommendation: 'No further imaging required at this time.'
      });
    }, 3000);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/analysis" className="text-indigo-600 hover:text-indigo-800 mr-4">
              <svg className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Analyses
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Chest X-Ray Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload X-Ray Image</h2>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {preview ? (
                    <div className="mb-4">
                      <img 
                        src={preview} 
                        alt="X-ray preview" 
                        className="mx-auto max-h-64 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 mt-2">Drag and drop an X-ray image, or click to select</p>
                      <p className="text-gray-500 text-sm mt-1">Supported formats: JPEG, PNG</p>
                    </div>
                  )}
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={!file || isAnalyzing}
                    className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      !file || isAnalyzing ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze X-Ray'}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h2>
              
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
                  <p className="mt-4 text-gray-600">Analyzing X-ray image...</p>
                  <p className="mt-2 text-gray-500 text-sm">This usually takes 5-10 seconds</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-800">Analysis completed successfully</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Findings</h3>
                    <p className="text-gray-700">{result.findings}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">AI Confidence</h3>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                        <div 
                          style={{ width: `${result.confidence}%` }} 
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                            result.confidence > 90 ? 'bg-green-500' : result.confidence > 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-700">{result.confidence}%</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Conditions Detected</h3>
                    <div className="space-y-2">
                      {result.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-700">{condition.name}</span>
                          <div className="flex items-center w-1/2">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                              <div
                                className={`h-2.5 rounded-full ${
                                  condition.probability > 50 ? 'bg-red-600' : 
                                  condition.probability > 20 ? 'bg-yellow-500' : 'bg-green-500'
                                }`}
                                style={{ width: `${condition.probability}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-700 w-12">{condition.probability}%</span>
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                              condition.severity === 'None' ? 'bg-green-100 text-green-800' :
                              condition.severity === 'Mild' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {condition.severity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Recommendation</h3>
                    <p className="text-gray-700">{result.recommendation}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Analyze Another X-Ray
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <svg className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-4">Upload an X-ray image to view analysis results</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Chest X-Ray Analysis</h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                Our AI-powered chest X-ray analysis system can detect up to 14 different conditions, including:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-2">
                <li>Pneumonia</li>
                <li>Pleural Effusion</li>
                <li>Cardiomegaly</li>
                <li>Atelectasis</li>
                <li>Pulmonary Edema</li>
                <li>Consolidation</li>
                <li>Tuberculosis</li>
                <li>Lung Nodules</li>
                <li>Emphysema</li>
                <li>Fibrosis</li>
                <li>Pneumothorax</li>
                <li>Fractures</li>
                <li>Lung Masses</li>
                <li>Foreign Objects</li>
              </ul>
              <p className="mt-4">
                The system has been trained on over 1 million chest X-rays and has been validated with radiologists
                from leading medical institutions across Africa. It achieves an average accuracy of 94% across all conditions.
              </p>
              <p className="mt-2">
                <strong>Note:</strong> This AI system is designed to assist healthcare professionals and should not replace clinical judgment.
                Always consult with a qualified healthcare provider for diagnosis and treatment decisions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default XrayAnalysis;
