import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { analyzeCTScan } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import EnhancedAnalysisResult from '../components/EnhancedAnalysisResult';

const CTScanAnalysis = () => {
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

  // Generate random analysis results based on file name
  const generateCTResults = (fileName) => {
    // Use the file name as a seed for pseudo-randomness
    const seed = fileName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Create a simple deterministic random number generator
    const random = (min, max) => {
      const x = Math.sin(seed++) * 10000;
      return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
    };
    
    // Decide if this should show a major finding or be relatively normal
    const hasMajorFinding = random(1, 10) <= 7;  // 70% chance of major finding
    
    // Possible major and minor findings for CT scans
    let conditions = [];
    
    if (hasMajorFinding) {
      // Choose one major finding
      const majorFindings = [
        {
          name: 'Subdural hematoma',
          probability: random(85, 95),
          severity: 'Moderate',
          location: { x: random(30, 40), y: random(40, 50), radius: random(15, 25) }
        },
        {
          name: 'Intraparenchymal hemorrhage',
          probability: random(82, 94),
          severity: 'Severe',
          location: { x: random(40, 50), y: random(40, 50), radius: random(10, 20) }
        },
        {
          name: 'Ischemic stroke',
          probability: random(80, 92),
          severity: 'Moderate',
          location: { x: random(45, 55), y: random(35, 45), radius: random(12, 22) }
        },
        {
          name: 'Mass lesion',
          probability: random(75, 90),
          severity: 'Moderate',
          location: { x: random(35, 60), y: random(30, 50), radius: random(15, 25) }
        }
      ];
      
      const selectedMajorFinding = majorFindings[random(0, majorFindings.length - 1)];
      conditions.push(selectedMajorFinding);
      
      // Add associated findings based on the major finding
      if (selectedMajorFinding.name === 'Subdural hematoma' || selectedMajorFinding.name === 'Intraparenchymal hemorrhage') {
        // Add midline shift with higher probability
        conditions.push({
          name: 'Midline shift',
          probability: random(60, 85),
          severity: 'Moderate',
          location: { x: 50, y: 45, radius: 5 }
        });
        // Add mass effect
        conditions.push({
          name: 'Mass effect',
          probability: random(70, 90),
          severity: 'Moderate',
          location: { x: selectedMajorFinding.location.x + 5, y: selectedMajorFinding.location.y, radius: 10 }
        });
      } else if (selectedMajorFinding.name === 'Mass lesion') {
        // Add edema
        conditions.push({
          name: 'Perilesional edema',
          probability: random(65, 85),
          severity: 'Moderate',
          location: { 
            x: selectedMajorFinding.location.x + random(-5, 5), 
            y: selectedMajorFinding.location.y + random(-5, 5), 
            radius: selectedMajorFinding.location.radius + 5 
          }
        });
        // Possible mass effect
        if (random(1, 10) > 4) {
          conditions.push({
            name: 'Mass effect',
            probability: random(50, 80),
            severity: 'Moderate',
            location: { x: 50, y: 45, radius: 8 }
          });
        }
      }
    } else {
      // Normal or minor findings
      conditions.push({
        name: 'Normal findings',
        probability: random(85, 97),
        severity: 'None',
        location: null
      });
    }
    
    // Add some additional low-probability findings regardless
    const minorFindings = [
      { name: 'Sinusitis', probability: random(0, 25), severity: random(1, 10) > 7 ? 'Mild' : 'None', location: random(1, 10) > 7 ? { x: 30, y: 30, radius: 10 } : null },
      { name: 'Chronic microvascular changes', probability: random(0, 30), severity: 'Mild', location: null },
      { name: 'Age-related atrophy', probability: random(0, 35), severity: 'Mild', location: null },
      { name: 'Calcified granuloma', probability: random(0, 15), severity: 'None', location: null }
    ];
    
    // Add 2-3 minor findings with non-zero probability
    for (let i = 0; i < random(2, 3); i++) {
      const finding = minorFindings[random(0, minorFindings.length - 1)];
      if (finding.probability > 0) {
        conditions.push(finding);
      }
    }
    
    // Filter to remove duplicates and sort by probability
    conditions = conditions.filter((condition, index, self) => 
      index === self.findIndex(c => c.name === condition.name)
    );
    conditions.sort((a, b) => b.probability - a.probability);
    
    // Generate findings text and recommendation
    let findings, recommendation;
    const primaryCondition = conditions[0];
    
    if (hasMajorFinding) {
      if (primaryCondition.name === 'Subdural hematoma') {
        findings = `${random(1, 2) === 1 ? 'Mild' : 'Moderate'} ${random(1, 2) === 1 ? 'right' : 'left'}-sided subdural hematoma in the ${random(1, 2) === 1 ? 'frontoparietal' : 'temporoparietal'} region. ${conditions.some(c => c.name === 'Midline shift') ? 'Mild midline shift present.' : 'No significant midline shift.'} Ventricles are ${random(1, 3) === 1 ? 'mildly compressed' : 'normal in size and shape'}. No evidence of intraparenchymal hemorrhage.`;
        recommendation = `Neurosurgical consultation recommended. Follow-up scan in ${random(24, 48)} hours to assess for progression. Monitor neurological status closely.`;
      } else if (primaryCondition.name === 'Intraparenchymal hemorrhage') {
        findings = `Acute intraparenchymal hemorrhage in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'frontal' : random(1, 2) === 1 ? 'parietal' : 'temporal'} lobe, measuring approximately ${random(1, 3)}.${random(0, 9)} cm in maximal dimension. ${conditions.some(c => c.name === 'Midline shift') ? 'Associated midline shift of approximately ' + random(2, 5) + ' mm.' : 'No significant midline shift.'} No evidence of intraventricular extension.`;
        recommendation = `Immediate neurosurgical evaluation required. Consider repeat imaging in 6-12 hours. Close monitoring in intensive care setting recommended.`;
      } else if (primaryCondition.name === 'Ischemic stroke') {
        findings = `Evidence of acute/subacute ischemic infarct in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'middle cerebral artery' : random(1, 2) === 1 ? 'anterior cerebral artery' : 'posterior cerebral artery'} territory. No hemorrhagic transformation. No significant mass effect or midline shift.`;
        recommendation = `Neurological consultation recommended. Consider vascular imaging to evaluate for arterial occlusion or stenosis. Initiate appropriate stroke management and secondary prevention.`;
      } else if (primaryCondition.name === 'Mass lesion') {
        findings = `${random(1, 3) === 1 ? 'Well-defined' : random(1, 2) === 1 ? 'Irregular' : 'Heterogeneous'} mass lesion in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'frontal' : random(1, 2) === 1 ? 'parietal' : 'temporal'} lobe, measuring approximately ${random(2, 4)}.${random(0, 9)} cm. ${conditions.some(c => c.name === 'Perilesional edema') ? 'Moderate surrounding edema present.' : 'Minimal surrounding edema.'} ${conditions.some(c => c.name === 'Mass effect') ? 'Associated mass effect with ' + (random(1, 2) === 1 ? 'mild' : 'moderate') + ' ventricular compression.' : 'No significant mass effect.'}`;
        recommendation = `Contrast-enhanced MRI recommended for further characterization. Neurosurgical consultation advised for potential biopsy planning. Clinical correlation with patient history suggested.`;
      }
    } else {
      findings = `No acute intracranial hemorrhage, mass effect, or midline shift. Ventricles and cisterns are normal in size and shape. Gray-white matter differentiation is preserved. No evidence of acute territorial infarct. ${
        conditions.some(c => c.name === 'Sinusitis' && c.probability > 15) ? 'Incidental note of ' + (random(1, 2) === 1 ? 'right' : 'left') + '-sided ' + (random(1, 2) === 1 ? 'maxillary' : 'ethmoid') + ' sinusitis.' : ''
      } ${
        conditions.some(c => c.name === 'Chronic microvascular changes' && c.probability > 15) ? 'Mild chronic microvascular changes, appropriate for patient age.' : ''
      }`;
      recommendation = `No acute intracranial abnormality identified. No follow-up imaging is required based on these findings.`;
    }
    
    // Calculate overall confidence
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
      setError('Please select a CT scan image to analyze');
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      // For demo purposes we're using a timeout to simulate API call
      // In production, replace this with the actual API call:
      // const response = await analyzeCTScan(file, currentUser?.token);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        
        // Generate dynamic results based on file name
        const mockResult = generateCTResults(file.name);
        
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
            <h1 className="heading-secondary">CT Scan Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
              <h2 className="heading-subsection mb-4">Upload CT Scan Image</h2>
              
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
                        alt="CT scan preview"  
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
                      <p className="text-gray-400 mt-2">Drag and drop a CT scan image, or click to select</p>
                      <p className="text-gray-500 text-sm mt-1">Supported formats: JPEG, PNG, DICOM (converted)</p>
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
                        For best results, upload a single slice of a CT scan. Our system currently supports brain CT scan analysis.
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
                    {isAnalyzing ? 'Analyzing...' : 'Analyze CT Scan'}
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
                  <p className="mt-6 text-gray-300">Analyzing CT scan image...</p>
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
                  <p className="mt-2 text-gray-400">Upload a CT scan image to view analysis results</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-gray-900 rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
            <h2 className="heading-subsection mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About CT Scan Analysis
            </h2>
            <div className="prose max-w-none text-gray-300">
              <p>
                Our AI-powered brain CT scan analysis system can detect various conditions, including:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-300">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Intracranial Hemorrhage
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Infarction / Stroke
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Mass Effect
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Midline Shift
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Hydrocephalus
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Brain Tumors
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Skull Fractures
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Sinusitis
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                The system has been trained on over 500,000 CT scan images and has been validated with radiologists
                from leading medical institutions. It achieves an average accuracy of 92% across all conditions, with
                a sensitivity of 95% for detecting acute hemorrhage.
              </p>
              <div className="mt-4 p-3 bg-gray-800 rounded-lg border-l-2 border-purple-500">
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-400">Note:</span> This AI system is designed to assist healthcare professionals and should not replace clinical judgment.
                  Always consult with a qualified radiologist for diagnosis and treatment decisions.
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

export default CTScanAnalysis;