import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLungs, FaBrain, FaCamera, FaHeartbeat, FaPlus, FaClipboardList, FaUserMd, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  // Mock data for recent analyses
  const recentAnalyses = [
    {
      id: '1',
      type: 'Chest X-Ray',
      date: 'May 9, 2023',
      status: 'Completed',
      result: 'Normal',
      icon: <FaLungs className="text-indigo-600" />
    },
    {
      id: '2',
      type: 'CT Scan',
      date: 'April 15, 2023',
      status: 'Completed',
      result: 'Abnormal',
      icon: <FaBrain className="text-purple-600" />
    },
    {
      id: '3',
      type: 'Skin Lesion',
      date: 'March 22, 2023',
      status: 'Completed',
      result: 'Normal',
      icon: <FaCamera className="text-blue-600" />
    }
  ];
  
  // Mock stats
  const stats = [
    { name: 'Total Analyses', value: '24', icon: <FaClipboardList className="h-5 w-5 text-indigo-600" /> },
    { name: 'This Month', value: '8', icon: <FaChartLine className="h-5 w-5 text-purple-600" /> },
    { name: 'Abnormal Findings', value: '3', icon: <FaUserMd className="h-5 w-5 text-red-600" /> },
    { name: 'Types Used', value: '3/5', icon: <FaHeartbeat className="h-5 w-5 text-green-600" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {currentUser?.name || 'User'}</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your account</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold text-purple-600">{stat.value}</span>
                </div>
                <div className="text-sm font-medium text-gray-500">{stat.name}</div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <p className="text-indigo-100 mt-1">Start a new analysis or view your reports</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  to="/analyze/xray" 
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <FaLungs className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Analyze X-Ray</h3>
                  <p className="text-sm text-gray-600 text-center">Upload and analyze a chest X-ray</p>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-4 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <FaBrain className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Analyze CT Scan</h3>
                  <p className="text-sm text-gray-600 text-center">Upload and analyze a CT scan</p>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <FaCamera className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Analyze Skin Lesion</h3>
                  <p className="text-sm text-gray-600 text-center">Upload and analyze a skin lesion</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Recent Analyses */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recent Analyses</h2>
              <Link to="/analysis" className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center">
                View all
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentAnalyses.map((analysis) => (
                    <tr key={analysis.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                            {analysis.icon}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{analysis.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{analysis.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {analysis.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${analysis.result === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
                          {analysis.result}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link to={`/analysis/${analysis.id}`} className="text-purple-600 hover:text-purple-900">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                <FaPlus className="mr-2 h-4 w-4" />
                Schedule New Analysis
              </button>
            </div>
          </div>
          
          {/* Usage Limits */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Usage Limits</h2>
              <p className="text-gray-600 text-sm mt-1">Your current plan allowances and usage</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Monthly Analyses (25/50)</span>
                  <span className="text-sm font-medium text-gray-700">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Storage (1.2 GB/2 GB)</span>
                  <span className="text-sm font-medium text-gray-700">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      Your <span className="font-medium text-indigo-600">Professional Plan</span> renews on June 12, 2023
                    </p>
                    <div className="mt-2 flex space-x-4">
                      <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-800">
                        Upgrade Plan
                      </a>
                      <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-800">
                        View Billing
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg">
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
