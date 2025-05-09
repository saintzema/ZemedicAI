import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import { getUserHistory } from '../utils/api';
import { FaXRay, FaAllergies, FaBrain, FaDownload, FaExclamationCircle, FaFilter } from 'react-icons/fa';

const HistoryPage = () => {
  const { currentUser } = useAuth();
  const { demoMode } = useDemoMode();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!currentUser || !currentUser.token) return;
        
        if (!demoMode) {
          const data = await getUserHistory(currentUser.token);
          setHistory(data || []);
        } else {
          // Demo data
          const demoHistory = [
            {
              id: 'demo1',
              type: 'xray',
              date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
              findings: ['Pneumonia', 'Pleural Effusion'],
              imageUrl: 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f'
            },
            {
              id: 'demo2',
              type: 'skin',
              date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
              findings: ['Melanoma'],
              imageUrl: 'https://images.unsplash.com/photo-1606501190025-f3ad6d3ea6ae'
            },
            {
              id: 'demo3',
              type: 'ct-scan',
              date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
              findings: ['Brain Tumor'],
              imageUrl: 'https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc'
            },
            {
              id: 'demo4',
              type: 'xray',
              date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
              findings: ['Normal'],
              imageUrl: 'https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c'
            },
            {
              id: 'demo5',
              type: 'skin',
              date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
              findings: ['Basal Cell Carcinoma'],
              imageUrl: 'https://images.unsplash.com/photo-1542994419-6ce2d65bea12'
            }
          ];
          setHistory(demoHistory);
        }
      } catch (error) {
        console.error('Error fetching history:', error);
        setError('Failed to load analysis history');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [currentUser, demoMode]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'xray':
        return <FaXRay className="text-2xl text-[#5718e3]" />;
      case 'skin':
        return <FaAllergies className="text-2xl text-[#5718e3]" />;
      case 'ct-scan':
        return <FaBrain className="text-2xl text-[#5718e3]" />;
      default:
        return null;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'xray':
        return 'Chest X-ray';
      case 'skin':
        return 'Skin Lesion';
      case 'ct-scan':
        return 'CT Scan';
      default:
        return 'Analysis';
    }
  };

  const filteredHistory = history.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analysis History</h1>
        <div className="flex justify-center py-20">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analysis History</h1>
        <p className="text-gray-600 mt-2">
          View and manage your past medical image analyses
        </p>
      </div>
      
      {demoMode && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm text-yellow-700">
            <strong>Demo Mode Active:</strong> Showing sample analysis history
          </p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaExclamationCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-semibold">All Analyses</h2>
            
            <div className="flex items-center">
              <FaFilter className="text-gray-400 mr-2" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="form-input py-1 px-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="xray">Chest X-rays</option>
                <option value="skin">Skin Lesions</option>
                <option value="ct-scan">CT Scans</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredHistory.length > 0 ? (
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
                    Findings
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preview
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-2 text-sm font-medium text-gray-900">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(item.date)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {item.findings.map((finding, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                          >
                            {finding}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-16 h-16 rounded overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={`${getTypeLabel(item.type)} analysis`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link
                          to={`/history/${item.id}`}
                          className="text-[#5718e3] hover:text-[#4714b3]"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => {
                            if (demoMode) {
                              alert('Download feature is disabled in demo mode');
                            } else {
                              // Download report logic
                              alert(`Downloading report for ${item.id}`);
                            }
                          }}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No analysis history found with the selected filter.</p>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="mt-2 text-[#5718e3] hover:underline"
              >
                View all analyses
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
