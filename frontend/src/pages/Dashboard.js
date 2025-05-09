import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  // Mock data for recent analyses
  const recentAnalyses = [
    {
      id: '1',
      type: 'Chest X-Ray',
      date: 'May 9, 2023',
      status: 'Completed',
      result: 'Normal'
    },
    {
      id: '2',
      type: 'CT Scan',
      date: 'April 15, 2023',
      status: 'Completed',
      result: 'Abnormal'
    },
    {
      id: '3',
      type: 'Skin Lesion',
      date: 'March 22, 2023',
      status: 'Completed',
      result: 'Normal'
    }
  ];
  
  // Mock stats
  const stats = [
    { name: 'Total Analyses', value: '24' },
    { name: 'This Month', value: '8' },
    { name: 'Abnormal Findings', value: '3' },
    { name: 'Types Used', value: '3/5' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container-custom">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {currentUser?.name || 'User'}</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-500">{stat.name}</div>
                  <div className="mt-1 text-3xl font-semibold text-indigo-600">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  to="/analyze/xray" 
                  className="block p-4 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-500 rounded-md text-white mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-indigo-900">Analyze X-Ray</h3>
                      <p className="text-sm text-indigo-700">Upload and analyze a chest X-ray</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-500 rounded-md text-white mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900">Analyze CT Scan</h3>
                      <p className="text-sm text-blue-700">Upload and analyze a CT scan</p>
                    </div>
                  </div>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="block p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-500 rounded-md text-white mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-900">Analyze Skin Lesion</h3>
                      <p className="text-sm text-purple-700">Upload and analyze a skin lesion</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Recent Analyses */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent Analyses</h2>
                <Link to="/analysis" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all
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
                      <tr key={analysis.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{analysis.type}</div>
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
                          <Link to={`/analysis/${analysis.id}`} className="text-indigo-600 hover:text-indigo-900">
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Usage Limits */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Limits</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Monthly Analyses (25/50)</span>
                    <span className="text-sm font-medium text-gray-700">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Storage (1.2 GB/2 GB)</span>
                    <span className="text-sm font-medium text-gray-700">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-600">
                    You're currently on the <span className="font-medium text-indigo-600">Professional Plan</span>. 
                    Your subscription renews on June 12, 2023.
                  </p>
                  <div className="mt-2">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Upgrade Plan
                    </a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      View Billing
                    </a>
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
