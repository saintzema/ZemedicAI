import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import { getUserHistory } from '../utils/api';
import { FaXRay, FaAllergies, FaBrain, FaHistory, FaUserMd, FaInfoCircle } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const { demoMode } = useDemoMode();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!currentUser || !currentUser.token) return;
        
        const data = await getUserHistory(currentUser.token);
        setHistory(data.slice(0, 5)); // Get latest 5 analyses
      } catch (error) {
        console.error('Error fetching history:', error);
        setError('Failed to load recent analyses');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [currentUser]);

  // Sample past analyses for demo mode
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
    }
  ];

  const displayHistory = demoMode ? demoHistory : history;
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'xray':
        return <FaXRay className="text-[#5718e3]" />;
      case 'skin':
        return <FaAllergies className="text-[#5718e3]" />;
      case 'ct-scan':
        return <FaBrain className="text-[#5718e3]" />;
      default:
        return <FaUserMd className="text-[#5718e3]" />;
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {currentUser?.name || 'User'}</h1>
        <p className="text-gray-600 mt-2">
          Access your medical image analysis dashboard
        </p>
        
        {demoMode && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaInfoCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Demo Mode Active:</strong> All analyses will use simulated data and won't be saved.
                  Toggle off Demo Mode in the navigation bar for real analysis.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Analysis Options */}
      <h2 className="text-xl font-semibold mb-4">Start New Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Link to="/analysis/xray" className="dashboard-card">
          <div className="dashboard-card-header">
            <h3 className="dashboard-card-title">Chest X-ray Analysis</h3>
            <FaXRay className="dashboard-card-icon" />
          </div>
          <p className="text-gray-600 mb-4">
            Analyze chest X-rays for pneumonia, tuberculosis, and other conditions.
          </p>
          <button className="btn-primary mt-auto">Start Analysis</button>
        </Link>
        
        <Link to="/analysis/skin" className="dashboard-card">
          <div className="dashboard-card-header">
            <h3 className="dashboard-card-title">Skin Lesion Analysis</h3>
            <FaAllergies className="dashboard-card-icon" />
          </div>
          <p className="text-gray-600 mb-4">
            Detect melanoma and other skin conditions from uploaded images.
          </p>
          <button className="btn-primary mt-auto">Start Analysis</button>
        </Link>
        
        <Link to="/analysis/ct-scan" className="dashboard-card">
          <div className="dashboard-card-header">
            <h3 className="dashboard-card-title">CT Scan Analysis</h3>
            <FaBrain className="dashboard-card-icon" />
          </div>
          <p className="text-gray-600 mb-4">
            Analyze brain CT scans for tumors, bleeding, and other abnormalities.
          </p>
          <button className="btn-primary mt-auto">Start Analysis</button>
        </Link>
      </div>

      {/* Recent Analyses */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Analyses</h2>
          <Link to="/history" className="flex items-center text-[#5718e3] hover:text-[#4714b3] transition-colors">
            <FaHistory className="mr-1" />
            <span>View All History</span>
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : displayHistory.length > 0 ? (
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Findings
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayHistory.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-2 font-medium text-gray-900">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatDate(item.date)}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
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
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link
                        to={`/history/${item.id}`}
                        className="text-[#5718e3] hover:text-[#4714b3]"
                      >
                        View<span className="sr-only">, {item.id}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No analysis history found. Start a new analysis above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
