import React, { useState, useEffect } from 'react';

/**
 * Enhanced Analysis Result component with AI heatmap overlay
 *  
 * This component displays the analyzed medical image with an AI-generated
 * heatmap overlay showing areas of interest highlighted by color based on
 * condition and confidence.
 */
const EnhancedAnalysisResult = ({ 
  image, 
  conditions, 
  activeCondition,
  onConditionClick,
  findings,
  confidence,
  recommendation
}) => {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [brightnessValue, setBrightnessValue] = useState(100);
  const [contrastValue, setContrastValue] = useState(100);

  // Create SVG heatmap overlay
  const createHeatmapMask = () => {
    // Only show conditions with a location and probability > 20
    const displayableConditions = conditions.filter(c => c.location && c.probability > 20);
    
    if (displayableConditions.length === 0) return null;
    
    const maskSvg = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          ${displayableConditions.map((condition, idx) => `
            <radialGradient id="heatGradient${idx}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.7}" />
              <stop offset="70%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.4}" />
              <stop offset="100%" stop-color="${getColorForCondition(condition)}" stop-opacity="0" />
            </radialGradient>
          `).join('')}
        </defs>
        ${displayableConditions.map((condition, idx) => `
          <ellipse 
            cx="${condition.location.x}%" 
            cy="${condition.location.y}%" 
            rx="${condition.location.radius}%" 
            ry="${condition.location.radius}%" 
            fill="url(#heatGradient${idx})" 
          />
        `).join('')}
      </svg>
    `;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(maskSvg)}`;
  };

  // Get appropriate color based on condition severity and type
  const getColorForCondition = (condition) => {
    if (condition.severity === 'Severe') return '#FF3366'; // Red for severe conditions
    if (condition.severity === 'Moderate') return '#FFCC00'; // Yellow for moderate
    return '#00CCFF'; // Blue for mild/none
  };

  const handleBrightnessChange = (e) => {
    setBrightnessValue(parseInt(e.target.value));
  };

  const handleContrastChange = (e) => {
    setContrastValue(parseInt(e.target.value));
  };

  return (
    <div className="space-y-6">
      {/* Image Viewer with Heatmap */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800 flex justify-between items-center">
          <h2 className="heading-subsection">AI Analysis Results</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowHeatmap(!showHeatmap)}
              className={`px-3 py-1.5 rounded text-xs ${showHeatmap 
                ? 'bg-purple-800 text-purple-100'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} 
                transition-colors flex items-center`}
            >
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {showHeatmap ? 'Hide AI Overlay' : 'Show AI Overlay'}
            </button>
          </div>
        </div>
        
        <div className="bg-black flex justify-center items-center p-2 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>
          
          {/* Base Image */}
          <div className="relative w-full max-h-[400px] flex justify-center z-10">
            <img  
              src={image}  
              alt="Medical scan"  
              className="max-h-[400px] object-contain"
              style={{
                filter: `brightness(${brightnessValue}%) contrast(${contrastValue}%)`
              }}
            />
            
            {/* Heatmap Overlay */}
            {showHeatmap && createHeatmapMask() && (
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-screen"
                style={{ 
                  backgroundImage: `url("${createHeatmapMask()}")`,
                }}
              />
            )}
            
            {/* AI Status Indicator */}
            {showHeatmap && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center z-20">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2 pulse-animation"></span>
                <span>AI Analysis Complete</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="brightness" className="block text-sm text-gray-400 mb-1">Brightness: {brightnessValue}%</label>
              <input  
                type="range"  
                id="brightness"  
                min="50"  
                max="150"  
                value={brightnessValue} 
                onChange={handleBrightnessChange} 
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
              />
            </div>
            <div>
              <label htmlFor="contrast" className="block text-sm text-gray-400 mb-1">Contrast: {contrastValue}%</label>
              <input  
                type="range"  
                id="contrast"  
                min="50"  
                max="150"  
                value={contrastValue} 
                onChange={handleContrastChange} 
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Findings Section */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800">
          <h2 className="heading-subsection">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">AI</span>
            <span className="ml-1">Analysis Findings</span>
          </h2>
        </div>
        <div className="p-5">
          <div className="mb-6">
            <h3 className="heading-card mb-2">Overall Findings</h3>
            <p className="text-white">{findings}</p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h3 className="heading-card">AI Confidence</h3>
              <span className="text-sm text-gray-400">{confidence}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div  
                className={`h-2.5 rounded-full ${ 
                  confidence > 90 ? 'bg-gradient-to-r from-green-500 to-green-600' :  
                  confidence > 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :  
                  'bg-gradient-to-r from-red-500 to-red-600' 
                }`} 
                style={{ width: `${confidence}%` }} 
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Findings */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800">
          <h2 className="heading-subsection">Detailed Findings</h2>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <div  
                key={index}  
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${ 
                  activeCondition === condition.name  
                    ? 'bg-purple-900/30 border-l-2 border-purple-500'  
                    : 'hover:bg-gray-800' 
                }`} 
                onClick={() => onConditionClick(condition)} 
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-200 font-medium flex items-center">
                    <div 
                      className="h-3 w-3 rounded-full mr-2" 
                      style={{ 
                        backgroundColor: getColorForCondition(condition) 
                      }}
                    ></div>
                    {condition.name}
                  </span>
                  <span className={`text-sm px-2 py-0.5 rounded-full ${ 
                    condition.severity === 'None' ? 'bg-green-900/30 text-green-400 border border-green-600/30' :  
                    condition.severity === 'Mild' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-600/30' :  
                    condition.severity === 'Moderate' ? 'bg-orange-900/30 text-orange-400 border border-orange-600/30' : 
                    'bg-red-900/30 text-red-400 border border-red-600/30' 
                  }`}> 
                    {condition.severity} 
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-800 rounded-full h-2 mr-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${condition.probability}%`,
                        background: `linear-gradient(to right, ${getColorForCondition(condition)}99, ${getColorForCondition(condition)})`
                      }} 
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 w-12">{condition.probability}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      {recommendation && (
        <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
          <div className="p-5 border-b border-gray-800">
            <h2 className="heading-subsection">Recommendations</h2>
          </div>
          <div className="p-5">
            <div className="bg-gray-800/70 p-4 rounded-lg border-l-2 border-purple-500">
              <p className="text-white">{recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalysisResult;