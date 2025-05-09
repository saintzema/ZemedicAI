import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Analysis = () => {
  const analyses = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Analyses</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Analyses</h2>
              
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
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Start New Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  to="/analyze/xray" 
                  className="block p-6 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-indigo-900 mb-2">Chest X-Ray Analysis</h3>
                  <p className="text-indigo-700">Upload and analyze chest X-rays for 14 different conditions.</p>
                </Link>
                
                <Link 
                  to="/analyze/ct-scan" 
                  className="block p-6 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-blue-900 mb-2">CT Scan Interpretation</h3>
                  <p className="text-blue-700">Analyze CT scans for brain conditions and abnormalities.</p>
                </Link>
                
                <Link 
                  to="/analyze/skin" 
                  className="block p-6 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-purple-900 mb-2">Skin Lesion Detection</h3>
                  <p className="text-purple-700">Identify potential skin conditions from uploaded images.</p>
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
