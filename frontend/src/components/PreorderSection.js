import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreorderSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7" 
              alt="Solar-powered AI Diagnostic Booth" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-600/30 mb-3">
                Solar Powered
              </span>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-white text-sm font-medium">Off-grid capability</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag-dark">Now Available for Preorder</span>
            
            <h2 className="heading-secondary mb-4">
              Solar-Powered AI Diagnostic Booths
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Bring advanced AI diagnostic capabilities to even the most remote locations with our solar-powered, self-contained diagnostic booths. Designed for reliable operation in challenging environments with limited infrastructure.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 text-purple-400 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">Solar Powered</h3>
                  <p className="text-sm text-gray-400">Runs on 100% renewable energy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 text-purple-400 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">Built-in Hardware</h3>
                  <p className="text-sm text-gray-400">Complete diagnostic system</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 text-purple-400 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">Secure Access</h3>
                  <p className="text-sm text-gray-400">Biometric authentication</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 text-purple-400 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">Offline Operation</h3>
                  <p className="text-sm text-gray-400">Works without internet</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact?type=booth" 
                className="btn btn-primary text-center"
              >
                Preorder Now
              </Link>
              <Link 
                to="/preorder" 
                className="btn btn-outline border-white text-white hover:bg-white/10 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* SDK Option */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="text-center mb-10">
            <span className="section-tag-dark">For Existing Equipment</span>
            <h2 className="section-heading-light mt-4">
              ZemedicAI SDK Integration
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Add our powerful AI diagnostic capabilities to your existing medical imaging equipment through our secure and easy-to-integrate SDK.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 rounded-2xl border border-gray-800 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800 flex flex-col">
                <div className="rounded-full bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4 border border-purple-800/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Easy Integration</h3>
                <p className="text-gray-400 mb-4 flex-grow">Simple API that integrates with your existing PACS or medical imaging software in hours, not weeks.</p>
                <span className="text-purple-400 text-sm">Documentation included</span>
              </div>
              
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800 flex flex-col">
                <div className="rounded-full bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4 border border-purple-800/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Multiple Modalities</h3>
                <p className="text-gray-400 mb-4 flex-grow">Support for X-ray, CT, MRI, ultrasound, and skin images with specialized algorithms for each type.</p>
                <span className="text-purple-400 text-sm">99.2% accuracy</span>
              </div>
              
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800 flex flex-col">
                <div className="rounded-full bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4 border border-purple-800/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Privacy Focused</h3>
                <p className="text-gray-400 mb-4 flex-grow">On-premise processing option ensures patient data never leaves your facility. Compliant with GDPR and HIPAA.</p>
                <span className="text-purple-400 text-sm">End-to-end encryption</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Link 
                to="/contact?type=sdk" 
                className="btn btn-white text-center hover:bg-purple-100 hover:text-purple-700 transition-all duration-300"
              >
                Request SDK Integration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreorderSection;