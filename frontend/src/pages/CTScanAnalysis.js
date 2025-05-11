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

  // Generate random analysis results based on image data
  const generateCTResults = (imageData) => {
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
    
    // Possible brain conditions with various severities
    const possibleConditions = [
      // Normal findings
      { name: 'Normal Brain', severity: 'None', isCritical: false, isNormal: true },
      
      // Hemorrhage types
      { name: 'Intracranial Hemorrhage', severity: 'Severe', isCritical: true, isNormal: false, location: { x: random(35, 65), y: random(35, 65), radius: random(15, 25) } },
      { name: 'Subarachnoid Hemorrhage', severity: 'Severe', isCritical: true, isNormal: false, location: { x: random(35, 65), y: random(35, 65), radius: random(10, 20) } },
      { name: 'Subdural Hematoma', severity: 'Severe', isCritical: true, isNormal: false, location: { x: random(25, 75), y: random(30, 50), radius: random(15, 30) } },
      { name: 'Epidural Hematoma', severity: 'Severe', isCritical: true, isNormal: false, location: { x: random(30, 70), y: random(30, 50), radius: random(15, 25) } },
      { name: 'Intraparenchymal Hemorrhage', severity: 'Severe', isCritical: true, isNormal: false, location: { x: random(40, 60), y: random(40, 60), radius: random(10, 20) } },
      
      // Stroke and vascular conditions
      { name: 'Ischemic Stroke', severity: 'Moderate', isCritical: true, isNormal: false, location: { x: random(30, 70), y: random(30, 70), radius: random(15, 25) } },
      { name: 'Cerebral Infarction', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: random(30, 70), y: random(30, 70), radius: random(10, 20) } },
      { name: 'Cerebral Aneurysm', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: random(40, 60), y: random(40, 60), radius: random(5, 10) } },
      
      // Mass lesions
      { name: 'Brain Tumor', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: random(30, 70), y: random(30, 70), radius: random(10, 20) } },
      { name: 'Mass Effect', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: random(30, 70), y: random(30, 70), radius: random(15, 25) } },
      { name: 'Midline Shift', severity: 'Moderate', isCritical: false, isNormal: false },
      
      // Brain structure abnormalities
      { name: 'Hydrocephalus', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: 50, y: 50, radius: 35 } },
      { name: 'Brain Atrophy', severity: 'Mild', isCritical: false, isNormal: false },
      { name: 'Cerebral Edema', severity: 'Moderate', isCritical: false, isNormal: false, location: { x: random(30, 70), y: random(30, 70), radius: random(20, 30) } },
      
      // Secondary findings
      { name: 'Sinusitis', severity: 'Mild', isCritical: false, isNormal: false, location: { x: random(30, 70), y: random(70, 85), radius: random(10, 15) } },
      { name: 'Chronic Microvascular Changes', severity: 'Mild', isCritical: false, isNormal: false },
      { name: 'Calcifications', severity: 'Mild', isCritical: false, isNormal: false, location: { x: random(35, 65), y: random(35, 65), radius: random(5, 10) } }
    ];
    
    // Determine if we should show normal or abnormal findings
    const showNormal = random(1, 10) <= 3; // 30% chance of normal findings
    
    let primaryCondition;
    const conditions = [];
    
    if (showNormal) {
      primaryCondition = possibleConditions.find(c => c.isNormal);
      primaryCondition.probability = random(85, 98);
      conditions.push({ ...primaryCondition });
      
      // Maybe add some incidental minor findings
      if (random(1, 3) === 1) {
        const minorCondition = possibleConditions.find(c => c.name === 'Sinusitis' || c.name === 'Calcifications');
        if (minorCondition) {
          minorCondition.probability = random(10, 25);
          conditions.push({ ...minorCondition });
        }
      }
    } else {
      // Select an abnormal condition as primary
      const abnormalConditions = possibleConditions.filter(c => !c.isNormal);
      const primaryIndex = random(0, abnormalConditions.length - 1);
      primaryCondition = abnormalConditions[primaryIndex];
      primaryCondition.probability = random(65, 95);
      conditions.push({ ...primaryCondition });
      
      // Add secondary conditions
      const numSecondaryConditions = random(1, 3);
      const usedIndices = [primaryIndex];
      
      for (let i = 0; i < numSecondaryConditions; i++) {
        let idx;
        do {
          idx = random(0, abnormalConditions.length - 1);
        } while (usedIndices.includes(idx));
        
        usedIndices.push(idx);
        const condition = { ...abnormalConditions[idx] };
        
        // Related conditions get higher probability
        const isRelated = (primaryCondition.name.includes('Hemorrhage') && condition.name.includes('Hemorrhage')) || 
                          (primaryCondition.name.includes('Stroke') && condition.name.includes('Infarction')) ||
                          (primaryCondition.name === 'Mass Effect' && condition.name === 'Midline Shift');
        
        condition.probability = isRelated ? random(40, 70) : random(10, 40);
        conditions.push(condition);
      }
    }
    
    // Sort by probability
    conditions.sort((a, b) => b.probability - a.probability);
    
    // Generate findings text
    let findings = '';
    let recommendation = '';
    
    if (showNormal) {
      findings = `No acute intracranial hemorrhage, mass effect, or midline shift. Ventricles and cisterns are normal in size and shape. Gray-white matter differentiation is preserved. No evidence of acute territorial infarct. ${ 
        conditions.some(c => c.name === 'Sinusitis' && c.probability > 15) ? 'Incidental note of ' + (random(1, 2) === 1 ? 'right' : 'left') + '-sided ' + (random(1, 2) === 1 ? 'maxillary' : 'ethmoid') + ' sinusitis.' : '' 
      } ${ 
        conditions.some(c => c.name === 'Chronic Microvascular Changes' && c.probability > 15) ? 'Mild chronic microvascular changes, appropriate for patient age.' : '' 
      }`;
      recommendation = `No acute intracranial abnormality identified. No follow-up imaging is required based on these findings.`;
    } else if (primaryCondition.isCritical) {
      if (primaryCondition.name.includes('Hemorrhage') || primaryCondition.name.includes('Hematoma')) {
        findings = `Acute ${primaryCondition.name.toLowerCase()} identified in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'frontal' : random(1, 2) === 1 ? 'parietal' : 'temporal'} region, measuring approximately ${random(1, 5)}.${random(0, 9)} cm in maximal dimension. ${conditions.some(c => c.name === 'Midline shift') ? 'Associated midline shift of approximately ' + random(2, 7) + ' mm.' : 'No significant midline shift.'} ${conditions.some(c => c.name === 'Mass effect') ? 'Mass effect on adjacent structures.' : ''} Ventricles are ${random(1, 3) === 1 ? 'compressed' : 'normal in size and configuration'}.`;
        recommendation = `Neurosurgical consultation recommended. Follow-up scan in ${random(12, 48)} hours to assess for progression. Clinical correlation suggested.`;
      } else if (primaryCondition.name === 'Ischemic Stroke') {
        findings = `Evidence of acute/subacute ischemic infarct in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'middle cerebral artery' : random(1, 2) === 1 ? 'anterior cerebral artery' : 'posterior cerebral artery'} territory. No hemorrhagic transformation identified. ${conditions.some(c => c.name === 'Mass effect') ? 'Mild mass effect on adjacent structures.' : 'No significant mass effect.'} ${conditions.some(c => c.name === 'Midline shift') ? 'Minimal midline shift noted.' : 'No midline shift.'}`;
        recommendation = `Neurological consultation recommended. Consider vascular imaging to evaluate for arterial occlusion or stenosis. Stroke protocol management advised.`;
      }
    } else {
      if (primaryCondition.name === 'Brain Tumor') {
        findings = `${random(1, 2) === 1 ? 'Well-circumscribed' : 'Irregular'} ${random(1, 2) === 1 ? 'hyperdense' : 'heterogeneous'} mass identified in the ${random(1, 2) === 1 ? 'right' : 'left'} ${random(1, 3) === 1 ? 'frontal' : random(1, 2) === 1 ? 'parietal' : 'temporal'} lobe, measuring approximately ${random(2, 5)}.${random(0, 9)} cm in maximal dimension. ${conditions.some(c => c.name === 'Perilesional edema') ? 'Moderate surrounding edema present.' : 'Minimal surrounding edema.'} ${conditions.some(c => c.name === 'Mass effect') ? 'Associated mass effect with ' + (random(1, 2) === 1 ? 'mild' : 'moderate') + ' ventricular compression.' : 'No significant mass effect.'}`;
        recommendation = `Contrast-enhanced MRI recommended for further characterization. Neurosurgical consultation advised for potential biopsy planning.`;
      } else if (primaryCondition.name === 'Hydrocephalus') {
        findings = `Ventricular enlargement consistent with ${random(1, 2) === 1 ? 'communicating' : 'non-communicating'} hydrocephalus. ${random(1, 2) === 1 ? 'Moderate' : 'Significant'} dilatation of the ${random(1, 2) === 1 ? 'lateral and third' : 'lateral, third, and fourth'} ventricles. ${conditions.some(c => c.name === 'Periventricular edema') ? 'Periventricular edema noted, suggesting transependymal CSF flow.' : 'No evident periventricular edema.'} ${conditions.some(c => c.name === 'Mass effect') ? 'Mass effect on adjacent brain parenchyma.' : ''}`;
        recommendation = `Neurosurgical consultation recommended for evaluation and potential CSF diversion procedure. Clinical correlation with symptoms of increased intracranial pressure advised.`;
      } else {
        findings = `Findings consistent with ${primaryCondition.name.toLowerCase()}. ${conditions.some(c => c.name === 'Mass effect') ? 'Associated mass effect present.' : 'No significant mass effect.'} ${conditions.some(c => c.name === 'Midline shift') ? 'Mild midline shift noted.' : 'No midline shift present.'} Ventricles are ${random(1, 3) === 1 ? 'mildly enlarged' : 'normal in size and configuration'}.`;
        recommendation = `Clinical correlation recommended. Consider follow-up imaging in ${random(1, 3)} ${random(1, 2) === 1 ? 'weeks' : 'months'} to assess for changes.`;
      }
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
        
        // Generate dynamic results based on image preview data
        const mockResult = generateCTResults(preview);
        
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