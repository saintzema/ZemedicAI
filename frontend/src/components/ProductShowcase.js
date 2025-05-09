import React from 'react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0b40] to-[#2e0f7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ZemedicAI Enterprise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Diagnose with confidence for better patient outcomes.
              </h3>
              <p className="text-xl mb-6">
                Built by clinicians for clinicians, ZemedicAI is a comprehensive decision-support tool that detects up to 124 chest X-ray findings in less than 20 seconds. An in-built confidence bar displays the likelihood of the finding, assisting clinicians to interpret with speed, accuracy and peace of mind.
              </p>
              <Link to="/demo" className="inline-block bg-[#5718e3] hover:bg-[#4714b3] text-white font-semibold py-3 px-8 rounded-lg">
                Find Out More
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1584555684040-bad07f46a21f" 
                alt="Chest X-ray with AI analysis" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-xl w-3/4">
                <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#5718e3]"></div>
                  <span className="text-sm font-medium">Chest X-ray</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span>Pneumonia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span>Pleural Effusion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Solar-Powered AI Diagnostic Booths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0c0521] bg-opacity-50 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590944667245-8ad4c2abf8ae"
                alt="Solar-powered diagnostic booth" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Solar-Powered Technology</h3>
                <p className="text-gray-300 mb-4">
                  Our innovative solar panels power the entire diagnostic booth, making it deployable in remote areas without reliable electricity.
                </p>
                <div className="flex items-center text-[#36b649]">
                  <span className="text-sm font-semibold">100% sustainable energy</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0c0521] bg-opacity-50 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1561364202-5248a42a59e6"
                alt="Diagnostic kiosk interface" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Telehealth Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect patients with specialists remotely through our integrated telehealth system, extending healthcare reach beyond physical limitations.
                </p>
                <div className="flex items-center text-[#36b649]">
                  <span className="text-sm font-semibold">Remote consultations enabled</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0c0521] bg-opacity-50 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1595464144526-5fb181b74625"
                alt="Healthcare kiosk" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">SDK Integration</h3>
                <p className="text-gray-300 mb-4">
                  Our flexible SDK allows seamless integration with existing X-ray machines and healthcare systems, enhancing their capabilities with AI.
                </p>
                <div className="flex items-center text-[#36b649]">
                  <span className="text-sm font-semibold">Universal compatibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;