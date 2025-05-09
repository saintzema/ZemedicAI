import React, { useState, useEffect } from 'react';
import { FaDownload, FaInfoCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultsViewer = ({ 
  imageUrl, 
  predictions, 
  analysisType,
  loading,
  error,
  onDownloadReport,
  demoMode,
  recommendations = []
}) => {
  const [activeTab, setActiveTab] = useState('findings');
  const [expandedFinding, setExpandedFinding] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [pulseHighlight, setPulseHighlight] = useState(true);
  const [showSideBySide, setShowSideBySide] = useState(window.innerWidth >= 1024);
  const [heatmapPoints, setHeatmapPoints] = useState([]);

  // Generate heatmap points based on predictions
  useEffect(() => {
    if (predictions && predictions.length > 0) {
      const newPoints = [];
      predictions.forEach((prediction, index) => {
        // Generate random points for demo purposes
        // In a real app, these would come from the AI model's region predictions
        const severity = prediction.confidence;
        const color = severity > 0.7 ? 'rgba(255, 59, 48, 0.7)' : 
                     severity > 0.4 ? 'rgba(255, 204, 0, 0.7)' : 
                     'rgba(52, 199, 89, 0.7)';
                     
        // Create 1-3 points for each condition based on severity
        const numPoints = Math.ceil(severity * 3);
        
        for (let i = 0; i < numPoints; i++) {
          newPoints.push({
            x: 30 + Math.random() * 40 + (index * 5),
            y: 30 + Math.random() * 40,
            radius: 8 + (severity * 12),
            color: color,
            label: prediction.label,
            confidence: prediction.confidence,
            pulse: severity > 0.6
          });
        }
      });
      setHeatmapPoints(newPoints);
    }
  }, [predictions]);

  // Chart options for confidence scores
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw.toFixed(1)}% confidence`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: function(value) {
            const label = this.getLabelForValue(value);
            return label.length > 10 ? label.slice(0, 8) + '...' : label;
          },
          color: 'rgba(255, 255, 255, 0.7)'
        },
        grid: {
          display: false,
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Confidence %',
          color: 'rgba(255, 255, 255, 0.7)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
    },
  };

  // Prepare chart data
  const chartData = {
    labels: predictions.map(p => p.label),
    datasets: [
      {
        label: 'Confidence %',
        data: predictions.map(p => p.confidence * 100),
        backgroundColor: predictions.map(p => {
          // Color based on confidence
          if (p.confidence > 0.7) return 'rgba(255, 59, 48, 0.8)';
          if (p.confidence > 0.4) return 'rgba(255, 204, 0, 0.8)';
          return 'rgba(52, 199, 89, 0.8)';
        }),
        borderColor: predictions.map(p => {
          if (p.confidence > 0.7) return 'rgb(255, 59, 48)';
          if (p.confidence > 0.4) return 'rgb(255, 204, 0)';
          return 'rgb(52, 199, 89)';
        }),
        borderWidth: 1,
      },
    ],
  };

  // Get conditional styles for confidence level
  const getConfidenceStyle = (confidence) => {
    if (confidence > 0.7) return 'bg-red-500';
    if (confidence > 0.4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  // Get severity label
  const getSeverityLabel = (confidence) => {
    if (confidence > 0.7) return 'High';
    if (confidence > 0.4) return 'Medium';
    return 'Low';
  };
  
  // Get numeric severity (1-10)
  const getNumericSeverity = (confidence) => {
    return Math.round(confidence * 10);
  };

  // Demo mode badge
  const DemoModeBadge = () => (
    <div className="bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 p-2 mb-4 rounded">
      <div className="flex">
        <FaInfoCircle className="text-yellow-500 mt-1 mr-2" />
        <div>
          <p className="text-sm text-yellow-300">
            <span className="font-bold">Demo Mode:</span> Results are simulated and do not represent actual medical analysis.
          </p>
        </div>
      </div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-900 rounded-lg text-white">
        <div className="w-12 h-12 border-4 border-t-purple-500 border-purple-200 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300">Analyzing image...</p>
        <p className="text-xs text-gray-500 mt-2">Using advanced AI to detect conditions</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-4 rounded-lg text-white">
        <div className="flex">
          <FaExclamationTriangle className="text-red-500 mt-1 mr-2" />
          <div>
            <p className="text-red-300 font-semibold">Analysis Error</p>
            <p className="text-red-200">
              {error}
            </p>
            <p className="text-red-300 text-sm mt-2">Please try again or use a different image.</p>
          </div>
        </div>
      </div>
    );
  }

  // Render heatmap overlay on image
  const renderHeatmapOverlay = () => {
    if (!showHeatmap || heatmapPoints.length === 0) return null;
    
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {heatmapPoints.map((point, index) => (
          <div 
            key={index}
            className={`absolute rounded-full opacity-70 ${pulseHighlight && point.pulse ? 'animate-pulse' : ''}`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.radius}px`,
              height: `${point.radius}px`,
              backgroundColor: point.color,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${point.radius / 2}px ${point.color}`
            }}
            title={`${point.label}: ${(point.confidence * 100).toFixed(1)}% confidence`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 shadow-xl rounded-lg overflow-hidden text-white">
      {demoMode && <DemoModeBadge />}
      
      <div className={`flex flex-col ${showSideBySide ? 'lg:flex-row' : ''} gap-1`}>
        {/* Left side - Image */}
        <div className={`${showSideBySide ? 'lg:w-1/2' : 'w-full'} bg-black p-2 rounded-t-lg ${showSideBySide ? 'lg:rounded-l-lg lg:rounded-t-none' : ''}`}>
          <div className="flex justify-between items-center mb-2 px-2">
            <h3 className="text-lg font-semibold text-purple-300">{analysisType} Image</h3>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowHeatmap(!showHeatmap)}
                className={`text-xs px-2 py-1 rounded ${showHeatmap ? 'bg-purple-600' : 'bg-gray-700'}`}
              >
                {showHeatmap ? 'Hide Markers' : 'Show Markers'}
              </button>
              <button 
                onClick={() => setPulseHighlight(!pulseHighlight)}
                className={`text-xs px-2 py-1 rounded ${pulseHighlight ? 'bg-purple-600' : 'bg-gray-700'}`}
              >
                {pulseHighlight ? 'Static View' : 'Dynamic View'}
              </button>
            </div>
          </div>
          
          <div className="heat-map-container mb-4 rounded overflow-hidden relative">
            <img 
              src={imageUrl} 
              alt={`${analysisType} Analysis`} 
              className="rounded w-full"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
            {renderHeatmapOverlay()}
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={onDownloadReport}
              className="text-sm flex items-center space-x-1 bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded transition-colors"
            >
              <FaDownload />
              <span>Download Report</span>
            </button>
          </div>
        </div>

        {/* Right side - Results */}
        <div className={`${showSideBySide ? 'lg:w-1/2' : 'w-full'} p-4 bg-gray-800`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-purple-300">Analysis Results</h3>
            <button 
              onClick={() => setShowSideBySide(!showSideBySide)}
              className="text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
            >
              {showSideBySide ? 'Stack View' : 'Side-by-Side'}
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-4">
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'findings' ? 'text-purple-300 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('findings')}
            >
              Findings
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'metrics' ? 'text-purple-300 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('metrics')}
            >
              Metrics
            </button>
            <button 
              className={\`px-4 py-2 text-sm font-medium \${activeTab === 'recommendations' ? 'text-purple-300 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}\`}
              onClick={() => setActiveTab('recommendations')}
            >
              Recommendations
            </button>
          </div>
          
          {/* Tab content */}
          {activeTab === 'findings' && (
            <div>
              {predictions.length > 0 ? (
                <div className="space-y-3">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                      <div 
                        className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-colors"
                        onClick={() => setExpandedFinding(expandedFinding === index ? null : index)}
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getConfidenceStyle(prediction.confidence)} mr-2`}></div>
                          <span className="font-medium">{prediction.label}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm mr-2">
                            {getSeverityLabel(prediction.confidence)}
                          </span>
                          <span className="text-sm bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
                            {getNumericSeverity(prediction.confidence)}
                          </span>
                          {expandedFinding === index ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                        </div>
                      </div>
                      
                      {expandedFinding === index && (
                        <div className="px-4 py-3 bg-gray-950 bg-opacity-50">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Confidence:</span>
                            <span className="text-sm font-medium">
                              {(prediction.confidence * 100).toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
                            <div 
                              className={\`h-1.5 rounded-full \${getConfidenceStyle(prediction.confidence)}\`}
                              style={{ width: \`\${prediction.confidence * 100}%\` }}
                            ></div>
                          </div>
                          
                          {prediction.description && (
                            <div className="text-sm text-gray-300 mt-2">
                              <span className="font-medium">Description:</span>
                              <p>{prediction.description}</p>
                            </div>
                          )}
                          
                          <div className="mt-2 pt-2 border-t border-gray-700">
                            <span className="text-xs text-gray-400">
                              This condition typically requires {prediction.confidence > 0.7 ? 'urgent' : prediction.confidence > 0.4 ? 'timely' : 'routine'} follow-up.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No findings detected. Upload an image and analyze to see results.
                </p>
              )}
            </div>
          )}
          
          {activeTab === 'metrics' && (
            <div>
              {predictions.length > 0 ? (
                <>
                  <div className="p-1 bg-gray-900 rounded-lg mb-6">
                    <Bar options={chartOptions} data={chartData} height={200} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Highest Confidence</div>
                      <div className="text-xl font-bold text-white">
                        {predictions.length > 0 ? (predictions.sort((a, b) => b.confidence - a.confidence)[0].confidence * 100).toFixed(1) + '%' : 'N/A'}
                      </div>
                      <div className="text-sm text-gray-300">
                        {predictions.length > 0 ? predictions.sort((a, b) => b.confidence - a.confidence)[0].label : ''}
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Detected Conditions</div>
                      <div className="text-xl font-bold text-white">{predictions.length}</div>
                      <div className="text-sm text-gray-300">
                        {predictions.filter(p => p.confidence > 0.7).length} high severity
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No metrics available. Analyze an image to see detailed metrics.
                </p>
              )}
            </div>
          )}
          
          {activeTab === 'recommendations' && (
            <div>
              {recommendations.length > 0 ? (
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="bg-gray-900 p-3 rounded-lg">
                      <div className="flex items-start">
                        <span className="bg-purple-700 text-white text-xs px-2 py-1 rounded-full mr-2 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-gray-300">{rec}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No recommendations available. Analyze an image to receive suggestions.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsViewer;