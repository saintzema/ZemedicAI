import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeft, FaDownload, FaShare, FaPrint, FaInfoCircle } from 'react-icons/fa';

const AnalysisDetail = () => {
  const { id } = useParams();
  
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
    { condition: 'Extra-axial haematoma', probability: 94, severity: 'Severe', primaryFinding: true },
    { condition: 'Acute subdural', probability: 87, severity: 'Moderate', primaryFinding: false },
    { condition: 'Midline shift', probability: 82, severity: 'Moderate', primaryFinding: false },
    { condition: 'Uncal herniation', probability: 76, severity: 'Moderate', primaryFinding: false },
    { condition: 'Intraparenchymal hemorrhage', probability: 8, severity: 'None', primaryFinding: false }
  ] : [
    { condition: 'Pneumonia', probability: 2, severity: 'None', primaryFinding: false },
    { condition: 'Pleural Effusion', probability: 1, severity: 'None', primaryFinding: false },
    { condition: 'Cardiomegaly', probability: 3, severity: 'None', primaryFinding: false },
    { condition: 'Pulmonary Edema', probability: 2, severity: 'None', primaryFinding: false },
    { condition: 'Atelectasis', probability: 2, severity: 'None', primaryFinding: false }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
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
                <div className="p-5 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-white">Patient Information</h2>
                  <FaInfoCircle className="text-gray-400" />
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
                  
                  <div>
                    <p className="text-sm text-gray-400">Clinical Notes</p>
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
                <div className="p-5 border-b border-gray-800">
                  <h2 className="text-lg font-semibold text-white">AI Analysis Results</h2>
                </div>
                <div className="p-5">
                  <div className="mb-6">
                    <h3 className="text-sm text-gray-400 mb-2">Overall Findings</h3>
                    <p className="text-white">{analysis.findings}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-sm text-gray-400">AI Confidence</h3>
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
                  
                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">Recommendations</h3>
                    <p className="text-white">{analysis.recommendations}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-7 space-y-8">
              {/* Image Viewer */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-white">{analysis.type} Image</h2>
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">Zoom</button>
                    <button className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">Contrast</button>
                    <button className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">Annotate</button>
                  </div>
                </div>
                <div className="bg-black flex justify-center items-center p-2">
                  <img 
                    src={analysis.image} 
                    alt={analysis.type} 
                    className="w-full max-h-[400px] object-contain"
                  />
                </div>
                <div className="p-3 bg-black/50 text-center text-sm text-gray-400">
                  {analysis.type} - {analysis.date}
                </div>
              </div>
              
              {/* Detailed Findings */}
              <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
                <div className="p-5 border-b border-gray-800">
                  <h2 className="text-lg font-semibold text-white">Detailed Findings</h2>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    {findingDetails.map((finding, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg flex items-start ${
                          finding.primaryFinding ? 'bg-purple-900/20 border-l-2 border-purple-500' : 'bg-gray-800/50'
                        }`}
                      >
                        <div className="pt-1">
                          <div className={`h-3 w-3 rounded-full ${
                            finding.probability > 50 ? 'bg-red-500' : 
                            finding.probability > 20 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between">
                            <span className="text-white font-medium">{finding.condition}</span>
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
                                className={`h-1.5 rounded-full ${
                                  finding.probability > 50 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                                  finding.probability > 20 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 
                                  'bg-gradient-to-r from-green-500 to-green-600'
                                }`}
                                style={{ width: `${finding.probability}%` }}
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
                <div className="p-5 border-b border-gray-800">
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
