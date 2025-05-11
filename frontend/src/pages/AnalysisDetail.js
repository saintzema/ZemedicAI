import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeft, FaDownload, FaShare, FaPrint, FaInfoCircle } from 'react-icons/fa';

const AnalysisDetail = () => {
  const { id } = useParams();
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [activeCondition, setActiveCondition] = useState(null);
  
  // In a real app, you would fetch the analysis data from your API
  // This is mock data for demonstration purposes
  const analysis = {
    id,
    type: id === '2' ? 'CT Scan' : 'Chest X-Ray',
    date: id === '2' ? 'April 15, 2023' : 'May 9, 2023',
    status: 'Completed',
    priority: id === '2' ? 'High' : 'Normal',
    result: id === '2' ? 'Abnormal' : 'Normal',
    findings: id === '2' ? 
      'Extra-axial haematoma detected on the right side with significant mass effect. Acute subdural hemorrhage along the right frontoparietal convexity. Midline shift of approximately 4mm to the left. Early signs of uncal herniation.' : 
      'No significant abnormalities detected. Lung fields clear bilaterally. Heart size within normal limits. No pleural effusion or pneumothorax. Costophrenic angles are sharp.',
    confidence: id === '2' ? 94 : 98,
    recommendations: id === '2' ?
      'Immediate neurosurgical consultation recommended. Follow-up CT scan after treatment to assess reduction in hematoma size and mass effect. Monitor for signs of increased intracranial pressure.' :
      'No further imaging required at this time based on these findings. Routine follow-up as clinically indicated.',
    image: id === '2' ? 'https://images.unsplash.com/photo-1559757175-38115a67bc69' : 'https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c',
    patient: {
      name: id === '2' ? 'Jane Smith' : 'John Doe',
      id: id === '2' ? 'PT-10051' : 'PT-10042',
      age: id === '2' ? 63 : 45,
      gender: id === '2' ? 'Female' : 'Male',
      clinical_notes: id === '2' ? 'Patient presented with sudden onset severe headache, confusion, and left-sided weakness. History of hypertension.' : 'Routine annual check-up. No symptoms reported. History of controlled asthma.',
      referring_physician: id === '2' ? 'Dr. Michael Chen' : 'Dr. Sarah Johnson'
    }
  };

  const findingDetails = id === '2' ? [
    { name: 'Extra-axial haematoma', probability: 94, severity: 'Severe', primaryFinding: true, location: { x: 37, y: 42, radius: 18 } },
    { name: 'Acute subdural', probability: 87, severity: 'Moderate', primaryFinding: false, location: { x: 30, y: 45, radius: 12 } },
    { name: 'Midline shift', probability: 82, severity: 'Moderate', primaryFinding: false, location: null },
    { name: 'Uncal herniation', probability: 76, severity: 'Moderate', primaryFinding: false, location: { x: 45, y: 50, radius: 10 } },
    { name: 'Intraparenchymal hemorrhage', probability: 8, severity: 'None', primaryFinding: false, location: null }
  ] : [
    { name: 'Pneumonia', probability: 2, severity: 'None', primaryFinding: false, location: null },
    { name: 'Pleural Effusion', probability: 1, severity: 'None', primaryFinding: false, location: null },
    { name: 'Cardiomegaly', probability: 3, severity: 'None', primaryFinding: false, location: null },
    { name: 'Pulmonary Edema', probability: 2, severity: 'None', primaryFinding: false, location: null },
    { name: 'Atelectasis', probability: 2, severity: 'None', primaryFinding: false, location: null }
  ];

  // Set initial active condition
  React.useEffect(() => {
    const primaryCondition = findingDetails.find(c => c.primaryFinding);
    setActiveCondition(primaryCondition?.name || findingDetails[0]?.name);
  }, [findingDetails]);

  // Create SVG heatmap overlay
  const createHeatmapMask = () => {
    // Only show conditions with a location and probability > 20
    const displayableConditions = findingDetails.filter(c => c.location && c.probability > 20);
    
    if (displayableConditions.length === 0) return null;
    
    const maskSvg = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          ${displayableConditions.map((condition, idx) => `
            <radialGradient id="heatGradient${idx}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.7}" />
              <stop offset="70%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.4}" />
              <stop offset="100%" stop-color="${getColorForCondition(condition)}" stop-opacity="0" />
            </radialGradient>
          `).join('')}
        </defs>
        ${displayableConditions.map((condition, idx) => `
          <ellipse 
            cx="${condition.location.x}%" 
            cy="${condition.location.y}%" 
            rx="${condition.location.radius}%" 
            ry="${condition.location.radius}%" 
            fill="url(#heatGradient${idx})" 
          />
        `).join('')}
      </svg>
    `;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(maskSvg)}`;
  };

  // Get appropriate color based on condition severity and type
  const getColorForCondition = (condition) => {
    if (condition.severity === 'Severe') return '#FF3366'; // Red for severe conditions
    if (condition.severity === 'Moderate') return '#FFCC00'; // Yellow for moderate
    return '#00CCFF'; // Blue for mild/none
  };

  const handleConditionClick = (condition) => {
    setActiveCondition(condition.name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 page-transition">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/analysis" className="text-purple-400 hover:text-purple-300 mr-4 flex items-center">
              <FaArrowLeft className="mr-2" />
              Back to Analyses
            </Link>
            <h1 className="text-3xl font-bold text-white">{analysis.type} Analysis</h1>
            
            <div className="ml-auto flex space-x-3">
              <button className="p-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 hover:bg-gray-800 transition-colors">
                <FaDownload />
              </button>
              <button className="p-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 hover:bg-gray-800 transition-colors">
                <FaShare />
              </button>
              <button className="p-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 hover:bg-gray-800 transition-colors">
                <FaPrint />
              </button>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="bg-gray-900 rounded-xl p-4 mb-6 flex justify-between items-center border border-gray-800">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-sm text-gray-400">Date:</span>
                <span className="ml-2 text-white">{analysis.date}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400">Patient:</span>
                <span className="ml-2 text-white">{analysis.patient.name}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400">ID:</span>
                <span className="ml-2 text-white">{analysis.patient.id}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400">Age/Gender:</span>
                <span className="ml-2 text-white">{analysis.patient.age}y, {analysis.patient.gender}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                analysis.priority === 'High' ? 'bg-red-900/30 text-red-400 border border-red-500/30' : 
                'bg-blue-900/30 text-blue-400 border border-blue-500/30'
              }`}>
                {analysis.priority}
              </div>
              <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                analysis.result === 'Normal' ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 
                'bg-red-900/30 text-red-400 border border-red-500/30'
              }`}>
                {analysis.result}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="md:col-span-5 space-y-8">
              {/* Patient Information */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <h2 className="text-lg font-semibold text-white">Patient Information</h2>
                  <FaInfoCircle className="text-purple-400" />
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Patient Name</p>
                      <p className="text-white font-medium">{analysis.patient.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Patient ID</p>
                      <p className="text-white font-medium">{analysis.patient.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Age</p>
                      <p className="text-white font-medium">{analysis.patient.age} years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Gender</p>
                      <p className="text-white font-medium">{analysis.patient.gender}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/70 p-3 rounded-lg">
                    <p className="text-sm text-purple-400">Clinical Notes</p>
                    <p className="text-white mt-1">{analysis.patient.clinical_notes}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-400">Referring Physician</p>
                    <p className="text-white font-medium">{analysis.patient.referring_physician}</p>
                  </div>
                </div>
              </div>
              
              {/* AI Analysis Results */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <h2 className="text-lg font-semibold text-white flex items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">AI</span>
                    <span className="ml-1">Analysis Results</span>
                  </h2>
                </div>
                <div className="p-5">
                  <div className="mb-6">
                    <h3 className="text-sm text-purple-400 mb-2">Overall Findings</h3>
                    <p className="text-white">{analysis.findings}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-sm text-purple-400">AI Confidence</h3>
                      <span className="text-sm text-gray-400">{analysis.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          analysis.confidence > 90 ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                          analysis.confidence > 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 
                          'bg-gradient-to-r from-red-500 to-red-600'
                        }`}
                        style={{ width: `${analysis.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/70 p-4 rounded-lg border-l-2 border-purple-500">
                    <h3 className="text-sm text-purple-400 mb-3">Recommendations</h3>
                    <p className="text-white">{analysis.recommendations}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-7 space-y-8">
              {/* Image Viewer with AI Heatmap */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-white">{analysis.type} Analysis</h2>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className={`px-3 py-1.5 rounded text-xs ${showHeatmap 
                        ? 'bg-purple-800 text-purple-100'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} 
                        transition-colors flex items-center`}
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {showHeatmap ? 'Hide AI Overlay' : 'Show AI Overlay'}
                    </button>
                    <button className="px-3 py-1.5 bg-gray-800 rounded text-xs text-gray-300 hover:bg-gray-700 transition-colors flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Zoom
                    </button>
                  </div>
                </div>
                
                <div className="bg-black flex justify-center items-center p-2 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>
                  
                  {/* Base Image */}
                  <div className="relative w-full max-h-[400px] flex justify-center z-10">
                    <img  
                      src={analysis.image}  
                      alt={analysis.type}  
                      className="max-h-[400px] object-contain"
                    />
                    
                    {/* Heatmap Overlay */}
                    {showHeatmap && createHeatmapMask() && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center mix-blend-screen"
                        style={{ 
                          backgroundImage: `url("${createHeatmapMask()}")`,
                        }}
                      />
                    )}
                    
                    {/* AI Status Indicator */}
                    {showHeatmap && findingDetails.some(c => c.location) && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center z-20">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2 pulse-animation"></span>
                        <span>AI Analysis Complete</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center text-sm text-gray-400">
                  {analysis.type} - {analysis.date}
                </div>
              </div>
              
              {/* Detailed Findings */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <h2 className="text-lg font-semibold text-white">Detailed Findings</h2>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    {findingDetails.map((finding, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg flex items-start transition-all duration-300 cursor-pointer ${
                          activeCondition === finding.name || finding.primaryFinding 
                            ? 'bg-purple-900/20 border-l-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
                            : 'bg-gray-800/50 hover:bg-gray-800'
                        }`}
                        onClick={() => handleConditionClick(finding)}
                      >
                        <div className="pt-1">
                          <div 
                            className="h-3 w-3 rounded-full"
                            style={{ 
                              backgroundColor: getColorForCondition(finding)
                            }}
                          ></div>
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between">
                            <span className="text-white font-medium">{finding.name}</span>
                            <span className={`text-sm ${
                              finding.severity === 'None' ? 'text-green-400' :
                              finding.severity === 'Mild' ? 'text-yellow-400' :
                              finding.severity === 'Moderate' ? 'text-orange-400' : 'text-red-400'
                            }`}>
                              {finding.severity}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-1.5 mr-3">
                              <div 
                                className="h-1.5 rounded-full"
                                style={{ 
                                  width: `${finding.probability}%`,
                                  background: `linear-gradient(to right, ${getColorForCondition(finding)}99, ${getColorForCondition(finding)})`
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-300 w-10">{finding.probability}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Analysis Metadata */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <h2 className="text-lg font-semibold text-white">Analysis Information</h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-400">Analysis ID</p>
                      <p className="text-white font-medium">AN-{10000 + parseInt(id)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Analysis Date</p>
                      <p className="text-white font-medium">{analysis.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">AI Version</p>
                      <p className="text-white font-medium">ZemedicAI v2.4.1</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Model</p>
                      <p className="text-white font-medium">{analysis.type === 'CT Scan' ? 'BrainCT-Net' : 'ChestXR-Net'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisDetail;