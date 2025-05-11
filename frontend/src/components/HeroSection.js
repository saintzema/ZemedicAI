import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Custom typing animation component
const TypedText = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const fullText = currentPhrase;
      
      // Set typing speed based on action
      if (isDeleting) {
        setTypingSpeed(50); // faster when deleting
      } else {
        setTypingSpeed(100); // slower when typing
      }
      
      // Handle typing and deleting
      if (!isDeleting && currentText === fullText) {
        // Pause at the end of the text before deleting
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      } else if (isDeleting && currentText === '') {
        // Move to the next phrase after fully deleted
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        return;
      }
      
      // Calculate next text
      const nextText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);
      
      setCurrentText(nextText);
    };

    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <span>
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

const HeroSection = () => {
  // Mission phrases that reflect ZemedicAI's work
  const missionPhrases = [
    "Intelligent diagnosis...anywhere.",
    "AI for accessible healthcare in Africa.",
    "Democratizing medical imaging expertise.",
    "Bridging diagnostic gaps worldwide.",
    "Expert analysis where it's needed most.",
    "Empowering rural healthcare with AI.",
    "Healthcare innovation for every clinic.",
    "Transforming medical imaging forever."
  ];

  return (
    <section className="dark-purple-gradient text-white overflow-hidden py-24 md:py-36">
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
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block mb-4 text-5xl font-bold text-white">We're on a mission to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">redefine</span></span>
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                <TypedText phrases={missionPhrases} />
              </span>
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
              <Link 
                to="/contact" 
                className="btn btn-white text-center uppercase tracking-wide text-sm hover:bg-purple-100 hover:text-purple-700 transition-all duration-300"
              >
                Speak with our experts
              </Link>
              <Link 
                to="/demo" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-center uppercase tracking-wide text-sm transition-all duration-300"
              >
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black diagnostic-ui">
              {/* Header with patient info */}
              <div className="px-4 py-3 bg-black border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="text-purple-500">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">ZemedicAI</span>
                </div>
                <div className="text-white text-sm">
                  Jane DOE • 63y, F
                </div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500/70"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-500/70"></div>
                  <div className="h-2 w-2 rounded-full bg-red-500/70"></div>
                </div>
              </div>
              
              {/* Main content area with X-ray */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c" 
                  alt="Chest X-ray Analysis" 
                  className="w-full h-auto xray-zoom bg-black"
                />
                
                {/* CT scan date overlay */}
                <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-sm">
                  <div className="text-xs text-purple-300">CT Brain</div>
                  <div className="text-white text-xs">27 Dec 2023 - 10:45 PM</div>
                </div>
                
                {/* Priority indicator */}
                <div className="absolute top-2 right-2 bg-red-900/30 text-red-300 text-xs px-3 py-1 rounded-full border border-red-500/40 flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <span>PRIORITY</span>
                </div>
                
                {/* Diagnostic findings overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
                  <div className="space-y-3">
                    <div className="analysis-finding analysis-finding-primary">
                      <div className="w-1 h-6 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-white text-sm font-medium">Extra-axial haematoma</span>
                    </div>
                    
                    <div className="analysis-finding analysis-finding-secondary">
                      <div className="w-1 h-6 bg-gray-600 rounded-full mr-2"></div>
                      <span className="text-gray-300 text-sm">Acute subdural</span>
                    </div>
                    
                    <div className="analysis-finding analysis-finding-secondary">
                      <div className="w-1 h-6 bg-gray-600 rounded-full mr-2"></div>
                      <span className="text-gray-300 text-sm">Uncal herniation</span>
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