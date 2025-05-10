import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DemoOption = ({ title, description, image, link, gradient }) => {
  return (
    <div className={`bg-gradient-to-br rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 ${gradient}`}>
      <div className="h-48 bg-gray-900 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-6">{description}</p>
        <Link 
          to={link} 
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
        >
          Try Demo
        </Link>
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Experience Our AI in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Try our interactive demos to see how our AI solutions can transform healthcare delivery with accurate diagnostics in seconds.
            </p>
          </div>
          
          {/* Demo Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <DemoOption 
              title="X-Ray Analysis"
              description="Upload a chest X-ray image and see how our AI detects up to 124 findings with high accuracy, in just seconds."
              image="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              link="/analyze/xray"
              gradient="from-purple-900/20 to-indigo-900/20"
            />
            
            <DemoOption 
              title="Skin Lesion Detection"
              description="Take or upload a photo of a skin lesion and watch our AI identify potential conditions and provide risk assessments."
              image="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              link="/analyze/skin"
              gradient="from-fuchsia-900/20 to-purple-900/20"
            />
            
            <DemoOption 
              title="CT Scan Interpretation"
              description="Upload a brain CT scan and see how our AI quickly identifies critical findings like hemorrhages, infarcts, and more."
              image="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              link="/analyze/ct-scan"
              gradient="from-indigo-900/20 to-blue-900/20"
            />
          </div>
          
          {/* How It Works */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">How the Demo Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Select Demo Type</h3>
                <p className="text-gray-300">Choose from X-ray analysis, skin lesion detection, or CT scan interpretation.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Image</h3>
                <p className="text-gray-300">Upload your own medical image or use one of our sample images for testing.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-gray-300">Our AI will process the image in seconds, analyzing it for various medical conditions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">View Results</h3>
                <p className="text-gray-300">Explore the detailed analysis with findings, confidence scores, and visual highlights.</p>
              </div>
            </div>
          </div>
          
          {/* Demo Disclaimer */}
          <div className="bg-gray-900/50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-16">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg className="w-6 h-6 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Demo Disclaimer
            </h3>
            <p className="text-gray-300 mb-4">
              These demos are provided for educational and demonstration purposes only. The AI analyses are not intended for clinical use or to replace 
              professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-gray-300">
              While our demos use the same AI technology that powers our clinical solutions, the clinical versions undergo additional 
              regulatory approvals and validations before deployment in healthcare settings.
            </p>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">What Users Say About Our Demos</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative">
                <div className="absolute -top-2 -left-2 text-5xl text-purple-600 opacity-50">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  I was blown away by the speed and accuracy of the chest X-ray analysis. As a radiologist, I'm impressed by how detailed the findings are and how well the AI highlights areas of concern.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-white">Dr. Michael Chen</h4>
                    <p className="text-sm text-gray-400">Radiologist, Johns Hopkins Hospital</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative">
                <div className="absolute -top-2 -left-2 text-5xl text-purple-600 opacity-50">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  The skin lesion detection demo is incredibly intuitive. The visualization tools and detailed breakdown of the analysis give me confidence in the AI's assessment of potentially concerning lesions.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-white">Dr. Sarah Johnson</h4>
                    <p className="text-sm text-gray-400">Dermatologist, Mayo Clinic</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative">
                <div className="absolute -top-2 -left-2 text-5xl text-purple-600 opacity-50">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  The CT scan interpretation demo detected a subtle hemorrhage that I initially missed. This tool would be invaluable in emergency settings where time is critical and radiologists might not be immediately available.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-white">Dr. David Okafor</h4>
                    <p className="text-sm text-gray-400">Emergency Physician, Kenyatta Hospital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Full Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our demos showcase just a fraction of what our full AI solutions can do. Contact us to learn more about our comprehensive healthcare AI platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Contact Sales
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-3 bg-black border border-purple-500 text-purple-400 hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;