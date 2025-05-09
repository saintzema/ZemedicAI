import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLungs, FaBrain, FaCamera, FaFilter, FaCalendarAlt, FaSortAmountDown, FaFileAlt, FaChartLine, FaUserMd } from 'react-icons/fa';

const Analysis = () => {
  const analyses = [
    {
      id: '1',
      type: 'Chest X-Ray',
      date: 'May 9, 2023',
      status: 'Completed',
      priority: 'Normal',
      result: 'Normal',
      icon: <FaLungs className="text-indigo-400" />,
      primaryFinding: 'No significant findings',
      aiConfidence: 98,
      patient: 'John Doe',
      patientId: 'PT-10042',
      age: 45,
      gender: 'Male'
    },
    {
      id: '2',
      type: 'CT Scan',
      date: 'April 15, 2023',
      status: 'Completed',
      priority: 'High',
      result: 'Abnormal',
      icon: <FaBrain className="text-purple-400" />,
      primaryFinding: 'Extra-axial haematoma',
      aiConfidence: 94,
      patient: 'Jane Smith',
      patientId: 'PT-10051',
      age: 63,
      gender: 'Female'
    },
    {
      id: '3',
      type: 'Skin Lesion',
      date: 'March 22, 2023', 
      status: 'Completed',
      priority: 'Normal',
      result: 'Normal',
      icon: <FaCamera className="text-blue-400" />,
      primaryFinding: 'Benign nevus',
      aiConfidence: 97,
      patient: 'Mark Johnson',
      patientId: 'PT-10038',
      age: 32,
      gender: 'Male'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analyses</h1>
              <p className="text-gray-400">View and manage your diagnostic analyses</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <FaFilter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <FaSortAmountDown className="h-4 w-4" />
                <span>Sort</span>
              </button>
              <button className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-300 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <FaCalendarAlt className="h-4 w-4" />
                <span>Date Range</span>
              </button>
            </div>
          </div>
          
          {/* Analysis Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-800 flex items-center space-x-4">
              <div className="p-3 bg-indigo-900/30 rounded-xl">
                <FaFileAlt className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24</div>
                <div className="text-sm text-gray-400">Total Analyses</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-800 flex items-center space-x-4">
              <div className="p-3 bg-green-900/30 rounded-xl">
                <FaChartLine className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Average AI Confidence</div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-800 flex items-center space-x-4">
              <div className="p-3 bg-purple-900/30 rounded-xl">
                <FaUserMd className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-gray-400">Abnormal Findings</div>
              </div>
            </div>
          </div>

          {/* Analyses List */}
          <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Analysis History</h2>
              <p className="text-gray-400 text-sm mt-1">All your diagnostic analyses in one place</p>
            </div>
            
            <div className="divide-y divide-gray-800">
              {analyses.map((analysis) => (
                <div key={analysis.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800 rounded-xl">
                        {analysis.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium text-white">{analysis.type}</h3>
                          <div className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            analysis.priority === 'High' ? 'bg-red-900/30 text-red-400 border border-red-500/30' : 
                            'bg-blue-900/30 text-blue-400 border border-blue-500/30'
                          }`}>
                            {analysis.priority}
                          </div>
                        </div>
                        
                        <div className="flex space-x-4 mt-1">
                          <p className="text-sm text-gray-400">
                            Patient: <span className="text-gray-300">{analysis.patient}</span>
                          </p>
                          <p className="text-sm text-gray-400">
                            ID: <span className="text-gray-300">{analysis.patientId}</span>
                          </p>
                          <p className="text-sm text-gray-400">
                            {analysis.age} y, {analysis.gender}
                          </p>
                        </div>
                        
                        <p className="text-sm text-gray-400 mt-2">
                          Analyzed on {analysis.date}
                        </p>
                        
                        <div className="mt-3">
                          <div className="flex items-center space-x-2">
                            <div className={`h-2 w-2 rounded-full ${
                              analysis.result === 'Normal' ? 'bg-green-500' : 'bg-red-500'
                            }`}></div>
                            <p className={`text-sm font-medium ${
                              analysis.result === 'Normal' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {analysis.primaryFinding}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="mb-2">
                        <div className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          analysis.result === 'Normal' ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 
                          'bg-red-900/30 text-red-400 border border-red-500/30'
                        }`}>
                          {analysis.result}
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <span className="text-xs text-gray-400 mr-2">AI confidence:</span>
                        <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              analysis.aiConfidence > 90 ? 'bg-green-500' : 
                              analysis.aiConfidence > 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${analysis.aiConfidence}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-400">{analysis.aiConfidence}%</span>
                      </div>
                      
                      <Link to={`/analysis/${analysis.id}`} className="mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                        View Report
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 px-6 py-4 flex justify-between items-center border-t border-gray-800">
              <p className="text-sm text-gray-400">Showing 3 of 24 analyses</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">Previous</button>
                <button className="px-3 py-1 rounded-md bg-purple-900/50 text-purple-300 border border-purple-700/30">1</button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">2</button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">3</button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">Next</button>
              </div>
            </div>
          </div>
          
          {/* Start New Analysis */}
          <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden mb-8 border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Start New Analysis</h2>
              <p className="text-gray-400 text-sm mt-1">Select the type of analysis you want to perform</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  to="/analyze/xray" 
                  className="group flex flex-col items-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-900 transition-all duration-300"
                >
                  <div className="p-4 bg-indigo-900/30 rounded-full mb-4 group-hover:bg-indigo-900/50 transition-colors duration-300">
                    <FaLungs className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Chest X-Ray Analysis</h3>
                  <p className="text-sm text-gray-400 text-center">Upload and analyze chest X-rays for 14 different conditions</p>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="group flex flex-col items-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-900 transition-all duration-300"
                >
                  <div className="p-4 bg-purple-900/30 rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors duration-300">
                    <FaBrain className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">CT Scan Interpretation</h3>
                  <p className="text-sm text-gray-400 text-center">Analyze CT scans for brain conditions and abnormalities</p>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="group flex flex-col items-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-900 transition-all duration-300"
                >
                  <div className="p-4 bg-blue-900/30 rounded-full mb-4 group-hover:bg-blue-900/50 transition-colors duration-300">
                    <FaCamera className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Skin Lesion Detection</h3>
                  <p className="text-sm text-gray-400 text-center">Identify potential skin conditions from uploaded images</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
