import React from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';

const HowItWorksSection = () => {
  // Image paths for the before/after sliders
  const cxrBeforeImage = "/images/cxr-before.jpg";
  const cxrAfterImage = "/images/cxr-after.jpg";
  const cthBeforeImage = "/images/cth-before.jpg";
  const cthAfterImage = "/images/cth-after.jpg";

  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">ZemedicAI</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            Our AI transforms ordinary medical images into powerful diagnostic tools with abnormality detection and region highlighting.
          </p>
          <Link to="/how-it-works" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
            Learn more about our technology
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BeforeAfterSlider 
            beforeImage={cxrBeforeImage}
            afterImage={cxrAfterImage}
            title="Chest X-Ray Analysis"
            description="See how our AI identifies and highlights abnormalities in chest X-rays, providing diagnostic guidance for clinicians."
          />
          
          <BeforeAfterSlider 
            beforeImage={cthBeforeImage}
            afterImage={cthAfterImage}
            title="Brain CT Scan Interpretation"
            description="Our AI detects critical findings in brain CT scans with precise region highlighting for accurate diagnosis."
          />
        </div>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Image Upload</h3>
              <p className="text-gray-300 text-sm">Upload or capture a medical image using standard equipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">AI Analysis</h3>
              <p className="text-gray-300 text-sm">Advanced neural networks analyze the image in seconds</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Abnormality Detection</h3>
              <p className="text-gray-300 text-sm">AI identifies and localizes abnormalities with high accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Diagnostic Support</h3>
              <p className="text-gray-300 text-sm">Clinicians receive detailed findings to support decision-making</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/demo" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
          >
            Try It Yourself
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;