import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AnalysisDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the analysis data from your API
  // This is mock data for demonstration purposes
  const analysis = {
    id,
    type: 'Chest X-Ray',
    date: 'May 9, 2023',
    status: 'Completed',
    result: id === '2' ? 'Abnormal' : 'Normal',
    findings: id === '2' ? 
      'Mild opacity in the right lower lobe consistent with early pneumonia. No pleural effusion. Heart size normal.' :
      'No abnormalities detected. Lung fields clear. Heart size normal. No pleural effusion.',
    confidence: id === '2' ? 86 : 98,
    recommendations: id === '2' ?
      'Follow-up X-ray recommended in 2 weeks. Consider antibiotic treatment based on clinical presentation.' :
      'No further imaging required at this time.',
    image: 'https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c'
  };

  const findingDetails = id === '2' ? [
    { condition: 'Pneumonia', probability: 86, severity: 'Mild' },
    { condition: 'Pleural Effusion', probability: 12, severity: 'None' },
    { condition: 'Cardiomegaly', probability: 8, severity: 'None' },
    { condition: 'Atelectasis', probability: 6, severity: 'None' }
  ] : [
    { condition: 'Pneumonia', probability: 2, severity: 'None' },
    { condition: 'Pleural Effusion', probability: 1, severity: 'None' },
    { condition: 'Cardiomegaly', probability: 3, severity: 'None' },
    { condition: 'Atelectasis', probability: 2, severity: 'None' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/analysis" className="text-indigo-600 hover:text-indigo-800 mr-4">
              <svg className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Analyses
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{analysis.type} Analysis</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
                  <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                    analysis.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {analysis.result}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date</h3>
                    <p className="mt-1 text-sm text-gray-900">{analysis.date}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">AI Confidence</h3>
                    <div className="mt-1 relative pt-1">
                      <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                        <div style={{ width: `${analysis.confidence}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                          analysis.confidence > 90 ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                      <p className="text-sm text-gray-900">{analysis.confidence}%</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Findings</h3>
                    <p className="mt-1 text-sm text-gray-900">{analysis.findings}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Recommendations</h3>
                    <p className="mt-1 text-sm text-gray-900">{analysis.recommendations}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">X-Ray Image</h2>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <img src={analysis.image} alt="X-Ray" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Detailed Findings</h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Condition
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Probability
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Severity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {findingDetails.map((finding, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{finding.condition}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    finding.probability > 50 ? 'bg-red-600' : 
                                    finding.probability > 20 ? 'bg-yellow-500' : 'bg-green-500'
                                  }`} 
                                  style={{ width: `${finding.probability}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{finding.probability}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              finding.severity === 'None' ? 'bg-green-100 text-green-800' :
                              finding.severity === 'Mild' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {finding.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
