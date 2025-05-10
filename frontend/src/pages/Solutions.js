import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SolutionCard = ({ title, description, icon, link, gradient }) => {
  return (
    <Link 
      to={link}
      className={`block p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50 bg-gradient-to-br ${gradient}`}
    >
      <div className="flex items-center mb-4">
        <div className="bg-black bg-opacity-30 p-2 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-purple-400 font-medium flex items-center">
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </Link>
  );
};

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              AI-Powered Medical Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI technologies are transforming healthcare delivery across Africa, 
              making expert-level diagnostics accessible even in resource-limited settings.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <SolutionCard 
              title="X-Ray Analysis" 
              description="AI-powered chest X-ray analysis that can detect up to 124 findings in seconds with high accuracy."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>}
              link="/solutions/xray"
              gradient="from-purple-900/30 to-indigo-900/30"
            />
            
            <SolutionCard 
              title="Skin Lesion Detection" 
              description="Accurate detection and classification of skin conditions from simple smartphone images."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>}
              link="/solutions/skin"
              gradient="from-fuchsia-900/30 to-purple-900/30"
            />
            
            <SolutionCard 
              title="CT Scan Interpretation" 
              description="Advanced analysis of CT scans for quick and accurate detection of critical conditions."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>}
              link="/solutions/ct-scan"
              gradient="from-indigo-900/30 to-blue-900/30"
            />
            
            <SolutionCard 
              title="ECG Analysis" 
              description="Rapid interpretation of ECG readings to detect cardiac abnormalities and arrhythmias."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>}
              link="/solutions/ecg"
              gradient="from-red-900/30 to-purple-900/30"
            />
            
            <SolutionCard 
              title="For Hospitals" 
              description="Comprehensive AI-powered diagnostic suite tailored for hospital environments."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>}
              link="/solutions/for-hospitals"
              gradient="from-blue-900/30 to-cyan-900/30"
            />
            
            <SolutionCard 
              title="For Clinics" 
              description="Affordable and efficient AI diagnostic tools specifically designed for clinics and small healthcare facilities."
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>}
              link="/solutions/for-clinics"
              gradient="from-emerald-900/30 to-teal-900/30"
            />
          </div>
          
          {/* Features Section */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-16 border border-gray-800">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Why Choose ZemedicAI?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our solutions are built specifically for the unique healthcare challenges of Africa, 
                with features designed to work even in low-resource settings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Highly Accurate</h3>
                <p className="text-gray-300">Our AI models achieve accuracy levels comparable to specialist physicians, validated through extensive clinical trials.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ultra-Fast</h3>
                <p className="text-gray-300">Get diagnostic results in seconds instead of hours or days, enabling quick treatment decisions.</p>
              </div>
              
              <div className="bg-black/30 p-6 rounded-xl border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Works Offline</h3>
                <p className="text-gray-300">Our solutions can function without continuous internet connectivity, perfect for remote areas.</p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">What Our Users Are Saying</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Healthcare providers across Africa trust ZemedicAI to improve patient outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative">
                <div className="absolute -top-2 -left-2 text-5xl text-purple-600">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  ZemedicAI's X-ray analysis tool has become indispensable in our rural clinic. It provides the diagnostic confidence we need when specialist consultation isn't readily available.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-white">Dr. Nkem Adebayo</h4>
                    <p className="text-sm text-gray-400">Chief Medical Officer, Kibera Community Health Center</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <svg className="h-20 w-20 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 9.3v2.9h2.7c-.2 1.1-1.4 3.7-4.7 3.7-2.9 0-5.3-2.4-5.3-5.3S9.1 5.3 12 5.3c1.6 0 2.7.7 3.3 1.3l2.2-2.1C16.1 3.1 14.2 2 12 2 7.6 2 4 5.6 4 10s3.6 8 8 8c4.6 0 7.7-3.2 7.7-7.8 0-.5 0-1-.1-1.5H14z" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative">
                <div className="absolute -top-2 -left-2 text-5xl text-purple-600">"</div>
                <p className="text-gray-300 mb-6 relative z-10">
                  The solar-powered booth solution has revolutionized how we deliver care in remote regions. Patients who previously had to travel hours now have access to advanced diagnostics right in their community.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-white">Dr. Sarah Mutambo</h4>
                    <p className="text-sm text-gray-400">Director of Rural Health Initiatives, Ministry of Health, Zambia</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 9.3v2.9h2.7c-.2 1.1-1.4 3.7-4.7 3.7-2.9 0-5.3-2.4-5.3-5.3S9.1 5.3 12 5.3c1.6 0 2.7.7 3.3 1.3l2.2-2.1C16.1 3.1 14.2 2 12 2 7.6 2 4 5.6 4 10s3.6 8 8 8c4.6 0 7.7-3.2 7.7-7.8 0-.5 0-1-.1-1.5H14z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to transform healthcare delivery?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of healthcare facilities across Africa that are using ZemedicAI to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-3 bg-black border border-purple-500 text-purple-400 hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;