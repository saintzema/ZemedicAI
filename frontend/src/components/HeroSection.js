import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-primary text-white overflow-hidden py-24 md:py-32">
      <div className="container-custom relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl hero-animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-500 blur-3xl" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="z-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We're on a mission to redefine AI in medical imaging
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ZemedicAI delivers cutting-edge diagnostic solutions across Africa, bringing advanced medical imaging analysis where it's needed most.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="btn btn-white text-center">
                Speak with our experts
              </a>
              <a href="#solutions" className="btn btn-outline border-white text-white hover:bg-white/10 text-center">
                Explore Solutions
              </a>
            </motion.div>
          </div>
          
          {/* Right Column - X-ray Animation */}
          <motion.div 
            className="z-10 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black/40 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c" 
                alt="Chest X-ray Analysis" 
                className="w-full h-auto xray-zoom"
              />
              
              {/* Diagnostic UI overlay - mimicking annalise.ai */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/40 to-transparent p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="text-white font-medium">ZemedicAI</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-4 w-4 rounded-full bg-gray-500/50"></div>
                    <div className="h-4 w-4 rounded-full bg-gray-500/50"></div>
                    <div className="h-4 w-4 rounded-full bg-red-500/50"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-sm">CT Brain</span>
                    </div>
                    <div className="text-xs text-gray-300">27 Dec 2023 - 10:45 PM</div>
                  </div>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs font-semibold rounded">PRIORITY</span>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="bg-purple-500/20 p-2 rounded-md border-l-2 border-purple-500">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-white text-sm font-medium">Extra-axial haematoma</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/30 p-2 rounded-md">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-gray-500 rounded-full mr-2"></div>
                      <span className="text-gray-200 text-sm">Acute subdural</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/30 p-2 rounded-md">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-gray-500 rounded-full mr-2"></div>
                      <span className="text-gray-200 text-sm">Uncal herniation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-xl shadow-xl transform rotate-3 float-up">
              <p className="text-gray-600 font-medium">Cases processed</p>
              <p className="text-purple-600 text-3xl font-bold">6,208,413</p>
              <p className="text-gray-600 text-sm">and counting</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
