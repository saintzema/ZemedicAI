import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLungs, FaBrain, FaCamera } from 'react-icons/fa';

const Analysis = () => {
  const analyses = [
    {
      id: '1',
      type: 'Chest X-Ray',
      date: 'May 9, 2023',
      status: 'Completed',
      result: 'Normal',
      icon: <FaLungs className="h-5 w-5 text-indigo-600" />
    },
    {
      id: '2',
      type: 'CT Scan',
      date: 'April 15, 2023',
      status: 'Completed',
      result: 'Abnormal',
      icon: <FaBrain className="h-5 w-5 text-purple-600" />
    },
    {
      id: '3',
      type: 'Skin Lesion',
      date: 'March 22, 2023', 
      status: 'Completed',
      result: 'Normal',
      icon: <FaCamera className="h-5 w-5 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Analyses</h1>
            <p className="text-gray-600">View and manage your diagnostic analyses</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-xl font-semibold">Recent Analyses</h2>
              <p className="text-indigo-100 mt-1">View your most recent diagnostic results</p>
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
                  {analyses.map((analysis) => (
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
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Start New Analysis</h2>
              <p className="text-gray-600 text-sm mt-1">Select the type of analysis you want to perform</p>
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
                  <h3 className="font-semibold text-gray-900 mb-1">Chest X-Ray Analysis</h3>
                  <p className="text-sm text-gray-600 text-center">Upload and analyze chest X-rays for 14 different conditions</p>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-4 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <FaBrain className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">CT Scan Interpretation</h3>
                  <p className="text-sm text-gray-600 text-center">Analyze CT scans for brain conditions and abnormalities</p>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <FaCamera className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Skin Lesion Detection</h3>
                  <p className="text-sm text-gray-600 text-center">Identify potential skin conditions from uploaded images</p>
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
