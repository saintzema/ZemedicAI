import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import xrayAnimation from '../assets/xray-animation.gif';

const HeroSection = () => {
  // For the counter animation effect
  const [count, setCount] = useState(0);
  const targetCount = 1283542; // Number of analyses processed

  useEffect(() => {
    // Animate the counter
    const duration = 2000; // 2 seconds
    const step = Math.max(1, Math.floor(targetCount / (duration / 20)));
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= targetCount) {
        clearInterval(timer);
        setCount(targetCount);
      } else {
        setCount(current);
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0b40] to-[#2e0f7c] text-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwaC0yVjBoMnYzNHptLTQgMGgtMlYwaDJ2MzR6bS00IDBoLTJWMGgydjM0em0tNCAwSDE4VjBoMnYzNHptLTQgMGgtMlYwaDJ2MzR6TTkgMzRIN1YwaDJ2MzR6bS00IDBoLTJWMGgydjM0ekwzIDM0SDFWMGgydjM0eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We're on a mission to <span className="text-[#36b649]">revolutionize</span> AI in medical imaging worldwide.
            </h1>
            <p className="text-xl opacity-90 mb-10 max-w-lg">
              Bringing advanced AI diagnostics for chest X-rays, skin lesions, and CT scans to every corner of the globe with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn bg-[#5718e3] hover:bg-[#4714b3] text-white font-semibold py-3 px-8 rounded-lg text-center">
                Start Free Trial
              </Link>
              <Link to="/demo" className="btn border-2 border-white text-white hover:bg-white hover:text-[#5718e3] font-semibold py-3 px-8 rounded-lg text-center">
                Try Demo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Main image - either static or animation */}
              <img 
                src={xrayAnimation || "https://images.unsplash.com/photo-1584555684040-bad07f46a21f"} 
                alt="AI analyzing chest X-ray" 
                className="rounded-lg shadow-2xl w-full"
              />
              
              {/* UI overlay to show the app interface */}
              <div className="absolute -right-8 -bottom-8 w-3/4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-purple-900">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#5718e3]"></div>
                  <span className="text-sm font-medium text-gray-300">Analysis Results</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">Pneumonia</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                      <span className="text-red-400">92%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">Pleural Effusion</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                      <span className="text-yellow-400">65%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">Cardiomegaly</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      <span className="text-green-400">23%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats counter section */}
      <div className="bg-[#5718e3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block opacity-60">
              <svg className="w-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M673.4,97.7l-30.8,10.9c-9.7-29.8-38.7-46.5-68.6-36.8c-30,9.7-46.5,42.1-36.8,72.1c0.9,3.1,2.1,6,3.4,8.8
                  l-31.1,10.2c-5.7-18.3-13.6-35.8-23.5-52.1h-21.7c12.8,19.6,22.5,41.4,28.6,64.5l-106.5,35c-20.3-28.5-54.4-45.2-90.4-41.2
                  c-51.9,5.5-90.3,51.9-85.8,104.6c0.2,1.6,0.3,3.2,0.6,4.8L99.5,303.2c-0.6-3.5-0.9-7.1-0.9-10.6c0-35.8,29-64.8,64.8-64.8
                  c35.8,0,64.8,29,64.8,64.8c0,8.1-1.5,15.8-4.3,23l-28.1-13.4c1.3-3.1,1.9-6.4,1.9-9.8c0-14.3-11.6-25.9-25.9-25.9
                  c-14.3,0-25.9,11.6-25.9,25.9c0,14.3,11.6,25.9,25.9,25.9c4.4,0,8.7-1.1,12.4-3.2l29.5,14.1c-11.7,11.9-27.9,19.3-45.9,19.3
                  c-34.3,0-62.2-26.9-64.3-60.7l111.3-23.9c8.3,25.8,27,47.3,52.8,57.5c46.4,18.8,99.5-4.1,118.5-51c0.9-2.2,1.7-4.5,2.4-6.8
                  l108.9,38.5c-2,20.2,12.8,38.1,33,40.1c20.2,2,38.1-12.8,40.1-33c0.6-5.9-0.2-11.8-2.2-17.2l30.8-20.2c9.7,16.2,21.9,30.6,35.9,42.8
                  h22.2c-23.2-20.8-41.5-47.3-53-77.4l31.3-20.5c9.2,15.9,26.5,25.9,45.2,25.3c29.8-0.7,53.5-25.4,52.9-55.5
                  C727.9,121.1,703.8,97.7,673.4,97.7z M508.4,202.6c0.4,34.6-29.3,62.9-64.1,63.3c-34.7,0.4-63.4-27.5-63.8-62.1
                  c-0.4-34.7,29.3-63,64.1-63.3C479.3,140.1,508,168,508.4,202.6z" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                {count.toLocaleString()}
              </div>
              <div className="text-2xl md:text-3xl">Cases processed and counting.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;