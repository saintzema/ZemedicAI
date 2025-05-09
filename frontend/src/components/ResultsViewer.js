import React from 'react';
import { FaDownload, FaInfoCircle } from 'react-icons/fa';
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
  // Chart options for confidence scores
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Confidence Scores',
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function(value) {
            const label = this.getLabelForValue(value);
            return label.length > 15 ? label.slice(0, 12) + '...' : label;
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Confidence %',
        },
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
          if (p.confidence > 0.7) return 'rgba(255, 99, 132, 0.8)';
          if (p.confidence > 0.4) return 'rgba(255, 159, 64, 0.8)';
          return 'rgba(54, 182, 73, 0.8)';
        }),
        borderColor: predictions.map(p => {
          if (p.confidence > 0.7) return 'rgb(255, 99, 132)';
          if (p.confidence > 0.4) return 'rgb(255, 159, 64)';
          return 'rgb(54, 182, 73)';
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

  // Demo mode badge
  const DemoModeBadge = () => (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-2 mb-4">
      <div className="flex">
        <FaInfoCircle className="text-yellow-500 mt-1 mr-2" />
        <div>
          <p className="text-sm text-yellow-700">
            <span className="font-bold">Demo Mode:</span> Results are simulated and do not represent actual medical analysis.
          </p>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="spinner"></div>
        <p className="mt-4 text-gray-600">Analyzing image...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
        <div className="flex">
          <div>
            <p className="text-red-700">
              Error: {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {demoMode && <DemoModeBadge />}
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <div className="heat-map-container mb-4">
            <img 
              src={imageUrl} 
              alt={`${analysisType} Analysis`} 
              className="rounded-lg shadow-sm w-full"
            />
            {/* Heatmap overlay could be placed here */}
          </div>
          {predictions.length > 0 && (
            <button
              onClick={onDownloadReport}
              className="btn-secondary w-full flex items-center justify-center mt-4"
            >
              <FaDownload className="mr-2" /> Download Full Report
            </button>
          )}
        </div>

        {/* Right side - Results */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
          
          {predictions.length > 0 ? (
            <>
              <div className="mb-6">
                <Bar options={chartOptions} data={chartData} />
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Detected Conditions:</h4>
                <div className="space-y-3">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="border rounded-md overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b">
                        <span className="font-medium">{prediction.label}</span>
                      </div>
                      <div className="px-4 py-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Confidence:</span>
                          <span className="text-sm font-medium">
                            {(prediction.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="progress-container">
                          <div 
                            className={`progress-bar ${getConfidenceStyle(prediction.confidence)}`}
                            style={{ width: `${prediction.confidence * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {recommendations.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Recommendations:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-gray-700">{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">
              No conditions detected. Upload an image and click Analyze to get results.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsViewer;
