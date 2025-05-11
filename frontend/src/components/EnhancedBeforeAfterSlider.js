import React, { useState, useRef, useEffect } from 'react';

const EnhancedBeforeAfterSlider = ({ beforeImage, afterImage, title, description, aiBoundingBoxes = [] }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = e.clientX - containerRect.left;
      const newPosition = (relativeX / containerWidth) * 100;
      
      // Constrain to 0-100 range
      const constrainedPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(constrainedPosition);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && containerRef.current && e.touches[0]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = e.touches[0].clientX - containerRect.left;
      const newPosition = (relativeX / containerWidth) * 100;
      
      // Constrain to 0-100 range
      const constrainedPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(constrainedPosition);
    }
  };

  useEffect(() => {
    // Add event listeners to document to handle mouse movement outside of component
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Create SVG masks for the heatmap overlay
  const createHeatmapMask = () => {
    const maskSvg = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          ${aiBoundingBoxes.map((box, idx) => `
            <radialGradient id="heatGradient${idx}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="${box.color}" stop-opacity="0.6" />
              <stop offset="70%" stop-color="${box.color}" stop-opacity="0.3" />
              <stop offset="100%" stop-color="${box.color}" stop-opacity="0" />
            </radialGradient>
          `).join('')}
        </defs>
        ${aiBoundingBoxes.map((box, idx) => `
          <ellipse 
            cx="${box.x + box.width/2}%" 
            cy="${box.y + box.height/2}%" 
            rx="${box.width/1.5}%" 
            ry="${box.height/1.5}%" 
            fill="url(#heatGradient${idx})" 
          />
        `).join('')}
      </svg>
    `;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(maskSvg)}`;
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg">
      {title && <h3 className="text-xl font-bold text-white mb-3">{title}</h3>}
      
      <div 
        ref={containerRef}
        className="relative h-[400px] overflow-hidden rounded-lg mb-4 cursor-ew-resize" 
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Bottom Layer) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        />

        {/* After Image with Heatmap Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          {/* Base Image */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${afterImage})` }}
          />
          
          {/* Heatmap Overlay - SVG Mask */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center mix-blend-screen"
            style={{ 
              backgroundImage: `url("${createHeatmapMask()}")`,
              opacity: sliderPosition > 10 ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>

        {/* Confidence Labels for findings - only shown when slider is moved */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {aiBoundingBoxes.map((box, idx) => (
            <div
              key={`label-${idx}`}
              className="absolute bg-black/70 px-2 py-1 rounded text-sm text-white border-l-2 font-mono z-20"
              style={{
                left: `${box.x + (box.labelPosition?.x || 0)}%`,
                top: `${box.y + (box.labelPosition?.y || 0)}%`,
                borderLeftColor: box.color,
                transform: 'translateY(-100%)',
                opacity: sliderPosition > 10 ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            >
              {box.label} {box.confidence && `${box.confidence}%`}
            </div>
          ))}
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[4px] bg-white cursor-ew-resize z-30"
          style={{ 
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex items-center justify-center space-x-1">
              <svg className="w-4 h-4 text-gray-900 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded z-20">Original Scan</div>
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded z-20">AI Analysis</div>
        
        {/* AI Status Indicator */}
        <div 
          className="absolute top-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center z-20"
          style={{ 
            opacity: sliderPosition > 10 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2 pulse-animation"></span>
          <span>AI Analysis Complete</span>
        </div>
      </div>

      {description && <p className="text-gray-300">{description}</p>}
      
      {/* AI Detection Info */}
      <div className="mt-4 border-t border-gray-700 pt-4">
        <h4 className="text-md font-semibold text-white mb-2">AI Detection Details</h4>
        <div className="space-y-2">
          {aiBoundingBoxes.map((box, idx) => (
            <div key={`detail-${idx}`} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: box.color }}
              ></div>
              <span className="text-sm text-gray-300">
                {box.label}: {box.confidence}% confidence - {box.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedBeforeAfterSlider;