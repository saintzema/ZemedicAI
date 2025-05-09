import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import { getUserHistory } from '../utils/api';
import { FaXRay, FaAllergies, FaBrain, FaHistory, FaUserMd, FaInfoCircle, FaChartBar, FaBell, FaCalendarAlt } from 'react-icons/fa';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const { demoMode } = useDemoMode();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    xrayCount: 0,
    skinCount: 0,
    ctCount: 0
  });

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!currentUser || !currentUser.token) return;
        
        const data = await getUserHistory(currentUser.token);
        const recentHistory = data.slice(0, 5); // Get latest 5 analyses
        setHistory(recentHistory);
        
        // Calculate stats
        if (data.length > 0) {
          const xrayAnalyses = data.filter(item => item.type === 'xray');
          const skinAnalyses = data.filter(item => item.type === 'skin');
          const ctAnalyses = data.filter(item => item.type === 'ct-scan');
          
          setStats({
            totalAnalyses: data.length,
            xrayCount: xrayAnalyses.length,
            skinCount: skinAnalyses.length,
            ctCount: ctAnalyses.length
          });
        }
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
      imageUrl: 'https://images.unsplash.com/photo-1584555684040-bad07f46a21f',
      predictions: [
        { label: 'Pneumonia', confidence: 0.82 },
        { label: 'Pleural Effusion', confidence: 0.67 }
      ]
    },
    {
      id: 'demo2',
      type: 'skin',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      findings: ['Melanoma'],
      imageUrl: 'https://images.unsplash.com/photo-1606501190025-f3ad6d3ea6ae',
      predictions: [
        { label: 'Melanoma', confidence: 0.75 }
      ]
    },
    {
      id: 'demo3',
      type: 'ct-scan',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      findings: ['Brain Tumor'],
      imageUrl: 'https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc',
      predictions: [
        { label: 'Brain Tumor', confidence: 0.68 }
      ]
    }
  ];

  // Demo stats
  const demoStats = {
    totalAnalyses: 12,
    xrayCount: 6,
    skinCount: 4,
    ctCount: 2
  };

  const displayHistory = demoMode ? demoHistory : history;
  const displayStats = demoMode ? demoStats : stats;
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
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
  
  const getConfidenceStyle = (confidence) => {
    if (confidence > 0.7) return 'bg-red-500';
    if (confidence > 0.4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {currentUser?.name || 'User'}</h1>
        <p className="text-gray-600 mt-1">
          Your medical imaging AI dashboard
        </p>
        
        {demoMode && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-r-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaInfoCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Demo Mode Active:</strong> All analyses use simulated AI outputs based on trained patterns.
                  Toggle off Demo Mode in the navigation bar to connect to real AI models.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaChartBar className="text-[#5718e3] text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Analyses</p>
              <p className="text-2xl font-bold text-gray-800">{displayStats.totalAnalyses}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaXRay className="text-[#5718e3] text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">X-ray Analyses</p>
              <p className="text-2xl font-bold text-gray-800">{displayStats.xrayCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaAllergies className="text-[#5718e3] text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Skin Analyses</p>
              <p className="text-2xl font-bold text-gray-800">{displayStats.skinCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaBrain className="text-[#5718e3] text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">CT Scan Analyses</p>
              <p className="text-2xl font-bold text-gray-800">{displayStats.ctCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Options */}
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaBell className="mr-2 text-[#5718e3]" />
        Start New Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Link to="/analysis/xray" className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
          <div className="h-40 bg-gradient-to-r from-[#5718e3] to-purple-500 p-6 text-white">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">Chest X-ray Analysis</h3>
              <FaXRay className="text-3xl" />
            </div>
            <p className="mt-2 text-white text-opacity-90">
              Analyze chest X-rays for pneumonia, tuberculosis, and other conditions
            </p>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Pneumonia Detection</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Tuberculosis Screening</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Nodule Identification</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#5718e3] text-white font-medium py-2 rounded-md hover:bg-[#4714b3] transition-colors">
              Start Analysis
            </button>
          </div>
        </Link>
        
        <Link to="/analysis/skin" className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
          <div className="h-40 bg-gradient-to-r from-[#36b649] to-green-500 p-6 text-white">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">Skin Lesion Analysis</h3>
              <FaAllergies className="text-3xl" />
            </div>
            <p className="mt-2 text-white text-opacity-90">
              Detect melanoma and other skin conditions from uploaded images
            </p>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Melanoma Detection</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Lesion Classification</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Risk Assessment</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#36b649] text-white font-medium py-2 rounded-md hover:bg-green-600 transition-colors">
              Start Analysis
            </button>
          </div>
        </Link>
        
        <Link to="/analysis/ct-scan" className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
          <div className="h-40 bg-gradient-to-r from-[#5718e3] to-[#36b649] p-6 text-white">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">CT Scan Analysis</h3>
              <FaBrain className="text-3xl" />
            </div>
            <p className="mt-2 text-white text-opacity-90">
              Analyze brain CT scans for tumors, bleeding, and other abnormalities
            </p>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Tumor Detection</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Hemorrhage Identification</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 ml-2">Stroke Assessment</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white font-medium py-2 rounded-md hover:opacity-90 transition-opacity">
              Start Analysis
            </button>
          </div>
        </Link>
      </div>

      {/* Recent Analyses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
          <div className="flex justify-between items-center bg-gradient-to-r from-[#5718e3] to-[#36b649] p-4 text-white">
            <h2 className="text-lg font-semibold flex items-center">
              <FaHistory className="mr-2" />
              Recent Analyses
            </h2>
            <Link to="/history" className="flex items-center text-white hover:text-gray-100 transition-colors text-sm">
              View All History
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-10 h-10 border-4 border-t-[#5718e3] border-gray-200 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="p-4 text-red-500">{error}</div>
          ) : displayHistory.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {displayHistory.map((item) => (
                <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                        {getTypeIcon(item.type)}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{getTypeLabel(item.type)}</div>
                        <div className="text-sm text-gray-500">{formatDateTime(item.date)}</div>
                      </div>
                    </div>
                    <Link
                      to={`/history/${item.id}`}
                      className="bg-[#5718e3] text-xs text-white px-3 py-1 rounded-full hover:bg-[#4714b3] transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1">
                      {(item.predictions || []).map((prediction, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                        >
                          <div className={`h-2 w-2 rounded-full ${getConfidenceStyle(prediction.confidence)} mr-1`}></div>
                          <span className="text-xs font-medium">{prediction.label}</span>
                          <span className="text-xs ml-1 text-gray-500">{(prediction.confidence * 100).toFixed(0)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 px-4">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaHistory className="text-gray-400 text-xl" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">No analysis history found</p>
              <p className="text-gray-500 text-sm mt-1">Start a new analysis using one of the options above!</p>
            </div>
          )}
        </div>
        
        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#5718e3] to-[#36b649] p-4 text-white">
            <h2 className="text-lg font-semibold flex items-center">
              <FaCalendarAlt className="mr-2" />
              Upcoming Events
            </h2>
          </div>
          <div className="p-4">
            <div className="border-l-4 border-[#5718e3] pl-3 mb-4">
              <div className="text-sm text-gray-500">May 15, 2025</div>
              <div className="font-medium">New X-ray AI Model Release</div>
              <div className="text-sm text-gray-600">Improved detection rates for rare conditions</div>
            </div>
            <div className="border-l-4 border-[#36b649] pl-3 mb-4">
              <div className="text-sm text-gray-500">May 22, 2025</div>
              <div className="font-medium">Scheduled Maintenance</div>
              <div className="text-sm text-gray-600">System upgrade from 2AM - 4AM UTC</div>
            </div>
            <div className="border-l-4 border-gray-300 pl-3">
              <div className="text-sm text-gray-500">June 1, 2025</div>
              <div className="font-medium">CT Scan Model Beta Access</div>
              <div className="text-sm text-gray-600">Early access to enhanced CT analysis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;