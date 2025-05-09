import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-primary text-white overflow-hidden">
      <div className="container-custom py-16 lg:py-24 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl hero-animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-500 blur-3xl" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="z-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered Medical Diagnostics for Africa
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ZemedicAI delivers cutting-edge diagnostic solutions designed for rural and urban healthcare facilities across Africa, bringing advanced medical imaging analysis where it's needed most.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/register" className="btn btn-secondary text-center">
                Get Started
              </Link>
              <Link to="/#solutions" className="btn bg-white text-indigo-900 hover:bg-gray-100 text-center">
                Explore Solutions
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column - X-ray Animation */}
          <motion.div 
            className="z-10 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-900/30">
              <img 
                src="https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c" 
                alt="Chest X-ray Analysis" 
                className="w-full h-auto xray-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
              
              {/* Overlay diagnostic elements */}
              <div className="absolute top-1/4 right-1/4 h-16 w-16 rounded-full border-2 border-purple-400 opacity-70 flex items-center justify-center">
                <div className="absolute h-3 w-3 bg-purple-400 rounded-full hero-animate-pulse"></div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/3 h-20 w-20 rounded-full border-2 border-indigo-400 opacity-70 flex items-center justify-center">
                <div className="absolute h-3 w-3 bg-indigo-400 rounded-full hero-animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Diagnostic results overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Diagnostic AI</h3>
                  <span className="text-sm text-green-400">99.2% accuracy</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 text-sm">Pneumonia</span>
                    <div className="w-2/3 bg-gray-700 rounded-full h-1.5">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <span className="text-gray-200 text-sm">82%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 text-sm">Pleural Effusion</span>
                    <div className="w-2/3 bg-gray-700 rounded-full h-1.5">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <span className="text-gray-200 text-sm">67%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl transform rotate-3 float-up">
              <p className="text-gray-800 font-semibold">Trusted by</p>
              <p className="text-indigo-600 text-2xl font-bold">300+ hospitals</p>
              <p className="text-gray-600 text-sm">across Africa</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
