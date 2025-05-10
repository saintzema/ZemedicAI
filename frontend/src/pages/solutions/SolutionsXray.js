import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SolutionsXray = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-8">
            <Link to="/" className="text-gray-400 hover:text-purple-400">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/solutions" className="text-gray-400 hover:text-purple-400">Solutions</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-purple-400">X-Ray Analysis</span>
          </div>
          
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Annalise Enterprise CXR
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  AI that empowers clinicians
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Developed by clinicians for clinicians, our AI decision support solution can detect up to 124 findings on chest X-rays in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo" className="btn-primary px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block text-center">
                  Try Demo
                </Link>
                <Link to="/contact" className="px-8 py-3 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-600/10 rounded-lg font-medium inline-block text-center">
                  Download Brochure
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="AI X-Ray Analysis" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
              <h3 className="text-xl font-semibold mb-4">Improved Accuracy</h3>
              <p className="text-gray-300">Improves accuracy by 45%, averaged across all analyzed findings.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">12%</div>
              <h3 className="text-xl font-semibold mb-4">Greater Productivity</h3>
              <p className="text-gray-300">Improves efficiency by 12%, averaged across all analyzed findings.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">124</div>
              <h3 className="text-xl font-semibold mb-4">Findings Detected</h3>
              <p className="text-gray-300">Our ontology tree covers the most clinically relevant findings.</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mb-20">
            <blockquote className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/20 relative">
              <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
              <p className="text-xl text-gray-200 mb-6 relative z-10">
                As humans, we can be susceptible to cognitive biases that affect how we look at images, whereas software will look at things objectively every time, so you get a slightly different perspective.
              </p>
              <footer>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <cite className="font-medium text-white not-italic">Dr Dobb</cite>
                    <p className="text-sm text-gray-400">Consultant in Acute Medicine, Emergency Department, NHS Grampian</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          
          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Advanced Features</h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Intuitive Design
                </h3>
                <p className="text-gray-300 mb-4">
                  See the chest like never before with findings correlated across multiple views. Analyze up to three images per study.
                </p>
                <p className="text-gray-300 font-medium">
                  Results available in less than 20 seconds.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1663047166207-f2be91530f28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Intuitive X-Ray Analysis Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Seamless Workflow Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  Our customisable user interface can be integrated effortlessly into your PACS and RIS. Most clinicians feel comfortable using Annalise Enterprise CXR in under 10 studies.
                </p>
                <p className="text-gray-300">
                  To help clinicians interpret with confidence, a confidence bar displays the likelihood of the findings and the AI model's uncertainty.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                    alt="Seamless Workflow Integration" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Drafting the Future Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10">
                <h2 className="text-2xl font-bold mb-6">
                  Drafting the future of radiology with 
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    Annalise Reporting
                  </span>
                </h2>
                <p className="text-gray-300 mb-4">
                  Annalise Enterprise CXR is now available with our automated draft reporting feature.
                </p>
                <p className="text-gray-300 mb-4">
                  Designed to make radiology reporting quick and easy, Annalise Reporting creates complete, editable draft reports ready for radiologists to review and sign off.
                </p>
                <p className="text-gray-300 mb-6">
                  Annalise Reporting is fully integrated into the routine reporting workflow and backed by the comprehensive set of findings built into Annalise solutions.
                </p>
                <Link to="#" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                  Learn more about Annalise Reporting
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-950">
                <img 
                  src="https://images.unsplash.com/photo-1631578932291-b857e1daa31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Annalise Reporting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Clinical Robust AI Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Powered by Clinically Robust AI
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-purple-400 mb-4">782,000+</div>
                <h3 className="text-xl font-semibold mb-4">Unique CXR Studies</h3>
                <p className="text-gray-300">
                  Chest X-rays were sourced from broad datasets across three continents – including various types/brands of CXR equipment, departmental and portable imaging, and different patient demographics.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-indigo-400 mb-4">150+</div>
                <h3 className="text-xl font-semibold mb-4">Radiologists</h3>
                <p className="text-gray-300">
                  Annalise Enterprise CXR has been trained and validated on datasets hand-annotated by at least three individuals from a group of over 150 fully qualified radiologists.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-purple-400 mb-4">280,000,000+</div>
                <h3 className="text-xl font-semibold mb-4">CXR Labels</h3>
                <p className="text-gray-300">
                  To ensure a consistent and high standard of annotating across all data-sets, radiologists were trained in standardised annotating procedures.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">What Medical Professionals Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  The extra pair of eyes is very welcome. You fatigue a little bit less. And even by the end of a busy ward round you still perform well because you haven't expended all your energy, concentration and stress levels.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr Dobb</cite>
                      <p className="text-sm text-gray-400">Consultant in Acute Medicine, NHS Grampian</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
              
              <blockquote className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-indigo-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  A colleague was initially saying a chest X-ray was normal, but Annalise has flagged it as a potential mass. The patient had a CT scan two days later, which confirmed lung cancer.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr Struan Wilkie</cite>
                      <p className="text-sm text-gray-400">Lead Consultant Radiologist, NHS Grampian</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-20">
            <p className="text-gray-400 text-sm leading-relaxed">
              Annalise Enterprise is intended to assist clinicians with the interpretation of radiological imaging studies. Annalise Enterprise CXR is not available for purchase by the general public. It is available for clinical use in Australia, New Zealand, EU, UK, India, ASEAN*, UAE, more and growing.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              For detailed device information, including indications for use, contraindications, and warnings, please consult the user guide prior to use. Not all features are available in all regions. Annalise Enterprise CXR is not for sale in the U.S. Annalise Enterprise CXR is CE marked under Regulation (EU) 2017/745 as a class IIb medical device.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              annalise.ai, ANNALISE ENTERPRISE and the Annalise logo are trademarks of Annalise-AI Pty Ltd, registered in Australia and other countries and regions.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              *Annalise Enterprise CXR is not available in all ASEAN countries.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Please reach out to annalise.ai directly for further information.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Discover Annalise Products</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to request a brochure, private demonstration, or with any questions you may have.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsXray;