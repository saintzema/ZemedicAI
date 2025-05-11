import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLungs, FaBrain, FaCamera, FaHeartbeat, FaPlus, FaClipboardList, FaUserMd, FaChartLine, FaFileAlt, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  // Mock data for recent analyses
  const recentAnalyses = [
    {
      id: '1',
      type: 'Chest X-Ray',
      date: 'May 9, 2023',
      status: 'Completed',
      priority: 'Normal',
      result: 'Normal',
      icon: <FaLungs className="text-indigo-400" />,
      primaryFinding: 'No significant findings',
      aiConfidence: 98
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
      aiConfidence: 94
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
      aiConfidence: 97
    }
  ];
  
  // Mock stats
  const stats = [
    { name: 'Total Analyses', value: '24', icon: <FaClipboardList className="h-5 w-5 text-purple-400" /> },
    { name: 'This Month', value: '8', icon: <FaChartLine className="h-5 w-5 text-indigo-400" /> },
    { name: 'Abnormal Findings', value: '3', icon: <FaUserMd className="h-5 w-5 text-red-400" /> },
    { name: 'Types Used', value: '3/5', icon: <FaHeartbeat className="h-5 w-5 text-green-400" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="heading-secondary">Welcome back, {currentUser?.name || 'User'}</h1>
            <p className="text-gray-400 mt-1">Here's what's happening with your account</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-800">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold text-purple-400">{stat.value}</span>
                </div>
                <div className="text-sm font-medium text-gray-400">{stat.name}</div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-800">
            <div className="p-6 bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-b border-gray-800">
              <h2 className="heading-subsection">Quick Actions</h2>
              <p className="text-indigo-200 mt-1">Start a new analysis or view your reports</p>
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
                  <h3 className="font-semibold text-white mb-1">Analyze X-Ray</h3>
                  <p className="text-sm text-gray-400 text-center">Upload and analyze a chest X-ray</p>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="group flex flex-col items-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-900 transition-all duration-300"
                >
                  <div className="p-4 bg-purple-900/30 rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors duration-300">
                    <FaBrain className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Analyze CT Scan</h3>
                  <p className="text-sm text-gray-400 text-center">Upload and analyze a CT scan</p>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="group flex flex-col items-center p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-900 transition-all duration-300"
                >
                  <div className="p-4 bg-blue-900/30 rounded-full mb-4 group-hover:bg-blue-900/50 transition-colors duration-300">
                    <FaCamera className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Analyze Skin Lesion</h3>
                  <p className="text-sm text-gray-400 text-center">Upload and analyze a skin lesion</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Recent Analyses */}
          <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-800">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="heading-subsection">Recent Analyses</h2>
              <Link to="/analysis" className="text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center">
                View all
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="divide-y divide-gray-800">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800 rounded-xl">
                        {analysis.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="heading-card">{analysis.type}</h3>
                          <div className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            analysis.priority === 'High' ? 'bg-red-900/30 text-red-400 border border-red-500/30' : 
                            'bg-blue-900/30 text-blue-400 border border-blue-500/30'
                          }`}>
                            {analysis.priority}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          Analyzed on {analysis.date}
                        </p>
                        <div className="mt-2">
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
                        View Details
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 px-6 py-4 border-t border-gray-800">
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                <FaPlus className="mr-2 h-4 w-4" />
                Schedule New Analysis
              </button>
            </div>
          </div>
          
          {/* Usage Limits */}
          <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h2 className="heading-subsection">Usage Limits</h2>
              <p className="text-gray-400 text-sm mt-1">Your current plan allowances and usage</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Monthly Analyses (25/50)</span>
                  <span className="text-sm font-medium text-gray-300">50%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Storage (1.2 GB/2 GB)</span>
                  <span className="text-sm font-medium text-gray-300">60%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded-xl mt-4 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Your <span className="font-medium text-purple-400">Professional Plan</span> renews on June 12, 2023
                    </p>
                    <div className="mt-2 flex space-x-4">
                      <a href="#" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                        Upgrade Plan
                      </a>
                      <a href="#" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                        View Billing
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="px-4 py-2 bg-purple-900/30 text-purple-400 text-sm font-medium rounded-lg border border-purple-500/30">
                      Professional
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

export default Dashboard;