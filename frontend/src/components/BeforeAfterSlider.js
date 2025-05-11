import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description }) => {
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

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg">
      {title && <h3 className="text-xl font-bold text-white mb-3">{title}</h3>}
      
      <div 
        ref={containerRef}
        className="relative h-[400px] overflow-hidden rounded-lg mb-4 cursor-ew-resize" 
        onMouseMove={isDragging ? handleMouseMove : null}
        onTouchMove={isDragging ? handleTouchMove : null}
      >
        {/* Before Image (Bottom Layer) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        />

        {/* After Image (Top Layer with clip) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[4px] bg-white cursor-ew-resize"
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
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">Before</div>
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded">After</div>
      </div>

      {description && <p className="text-gray-300">{description}</p>}
    </div>
  );
};

export default BeforeAfterSlider;