import React from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';
import EnhancedBeforeAfterSlider from './EnhancedBeforeAfterSlider';

const HowItWorksSection = () => {
  // Using local image paths instead of Google Drive URLs
  const cxrBeforeImage = "/images/cxr-before.jpg";
  const cxrAfterImage = "/images/cxr-after.jpg";
  const cthBeforeImage = "/images/cth-before.jpg";
  const cthAfterImage = "/images/cth-after.jpg";

  // AI Detection box data for CT brain scan - revised to be more accurate to image
  const brainAIDetections = [
    {
      x: 45,
      y: 35,
      width: 20,
      height: 20,
      color: '#FFCC00', // Yellow
      label: 'Temporal Lobe Lesion',
      confidence: 96,
      description: 'Abnormal tissue density detected in right temporal lobe',
      labelPosition: { x: -5, y: -5 }
    },
    {
      x: 50,
      y: 40,
      width: 12,
      height: 12,
      color: '#00CCFF', // Blue
      label: 'Mass Effect',
      confidence: 92,
      description: 'Indicates pressure on surrounding tissue',
      labelPosition: { x: 5, y: 8 }
    },
    {
      x: 42,
      y: 48,
      width: 10,
      height: 10,
      color: '#FF3366', // Red
      label: 'Edema',
      confidence: 88,
      description: 'Fluid accumulation in surrounding tissue',
      labelPosition: { x: -8, y: 5 }
    }
  ];

  // AI Detection box data for chest X-ray - revised to be more accurate to image
  const chestAIDetections = [
    {
      x: 45,
      y: 40,
      width: 20,
      height: 20,
      color: '#FF3366', // Red
      label: 'Infiltrate',
      confidence: 94,
      description: 'Abnormal opacity in left upper lobe',
      labelPosition: { x: 0, y: -5 }
    },
    {
      x: 50,
      y: 58,
      width: 15,
      height: 15,
      color: '#FFCC00', // Yellow
      label: 'Consolidation',
      confidence: 89,
      description: 'Consolidation in lower left lobe',
      labelPosition: { x: 5, y: 2 }
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary-gradient mb-4">
            How <span>ZemedicAI</span> Works
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
          <EnhancedBeforeAfterSlider 
            beforeImage={cxrBeforeImage}
            afterImage={cxrAfterImage}
            title="Chest X-Ray Analysis"
            description="See how our AI identifies and highlights abnormalities in chest X-rays, providing diagnostic guidance for clinicians."
            aiBoundingBoxes={chestAIDetections}
          />
          
          <EnhancedBeforeAfterSlider 
            beforeImage={cthBeforeImage}
            afterImage={cthAfterImage}
            title="Brain CT Scan Interpretation"
            description="Our AI detects critical findings in brain CT scans with precise region highlighting and confidence scoring for accurate diagnosis."
            aiBoundingBoxes={brainAIDetections}
          />
        </div>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="heading-card mb-2">Image Upload</h3>
              <p className="text-gray-300 text-sm">Upload or capture a medical image using standard equipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="heading-card mb-2">AI Analysis</h3>
              <p className="text-gray-300 text-sm">Advanced neural networks analyze the image in seconds</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="heading-card mb-2">Abnormality Detection</h3>
              <p className="text-gray-300 text-sm">AI identifies and localizes abnormalities with high accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="heading-card mb-2">Diagnostic Support</h3>
              <p className="text-gray-300 text-sm">Clinicians receive detailed findings to support decision-making</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/demo" 
            className="btn btn-primary px-8 py-3 rounded-lg font-medium inline-block"
          >
            Try It Yourself
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;