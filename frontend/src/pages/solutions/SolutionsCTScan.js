import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SolutionsCTScan = () => {
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
            <span className="text-purple-400">CT Scan Interpretation</span>
          </div>
          
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Annalise Enterprise CTB
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Advanced Brain CT Analysis
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Our AI-powered CT scan interpretation solution provides rapid and accurate detection of critical neurological conditions, reducing time to diagnosis and improving patient outcomes.
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
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                alt="AI CT Scan Analysis" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <h3 className="text-xl font-semibold mb-4">Accuracy</h3>
              <p className="text-gray-300">For detecting intracranial hemorrhage, validated across multiple clinical settings.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">&lt;30s</div>
              <h3 className="text-xl font-semibold mb-4">Processing Time</h3>
              <p className="text-gray-300">Results delivered in under 30 seconds, critical for time-sensitive neurological emergencies.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">36</div>
              <h3 className="text-xl font-semibold mb-4">Brain Findings</h3>
              <p className="text-gray-300">Detects 36 critical brain CT findings, including subtle early signs of stroke.</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mb-20">
            <blockquote className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/20 relative">
              <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
              <p className="text-xl text-gray-200 mb-6 relative z-10">
                Annalise CTB has transformed how we handle neurological emergencies, especially during night shifts when radiologists aren't immediately available. The speed and accuracy with which it identifies critical findings like hemorrhages gives us confidence to make timely treatment decisions.
              </p>
              <footer>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <cite className="font-medium text-white not-italic">Dr. Rashid Abdallah</cite>
                    <p className="text-sm text-gray-400">Head of Emergency Medicine, Kenyatta National Hospital</p>
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
                  Comprehensive Analysis
                </h3>
                <p className="text-gray-300 mb-4">
                  Our AI system analyzes every slice of the brain CT scan, detecting subtle abnormalities that can be easily missed by the human eye, especially in emergency settings.
                </p>
                <p className="text-gray-300 font-medium">
                  Detects early signs of ischemic stroke, even before conventional imaging markers appear.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Comprehensive CT Analysis" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Advanced Visualization
                </h3>
                <p className="text-gray-300 mb-4">
                  Our solution provides intuitive visual overlays that highlight detected abnormalities, including 3D reconstructions for better spatial understanding of pathologies.
                </p>
                <p className="text-gray-300">
                  Interactive viewing tools allow clinicians to adjust contrast, brightness, and zoom levels to better visualize subtle findings.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1591192037063-aa813aed8bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Advanced CT Visualization" 
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
          
          {/* Clinical Integration Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10">
                <h2 className="text-2xl font-bold mb-6">
                  Seamless Clinical Integration with
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    Annalise Neuro Suite
                  </span>
                </h2>
                <p className="text-gray-300 mb-4">
                  Our solution integrates directly with your hospital's PACS and RIS systems, automatically prioritizing critical cases in the workflow.
                </p>
                <p className="text-gray-300 mb-4">
                  Automated alerts notify the appropriate clinical teams when life-threatening conditions are detected, reducing time to treatment.
                </p>
                <p className="text-gray-300 mb-6">
                  Comprehensive reporting features allow for quick documentation and communication of findings across the care team.
                </p>
                <Link to="#" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                  Learn more about integration capabilities
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-950">
                <img 
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Clinical Integration" 
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
                <div className="text-3xl font-bold text-purple-400 mb-4">500,000+</div>
                <h3 className="text-xl font-semibold mb-4">CT Studies</h3>
                <p className="text-gray-300">
                  Our AI was trained on a diverse dataset of over 500,000 brain CT studies from multiple institutions across the globe, representing a wide spectrum of pathologies and imaging protocols.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-indigo-400 mb-4">180+</div>
                <h3 className="text-xl font-semibold mb-4">Neuroradiologists</h3>
                <p className="text-gray-300">
                  Each scan in our training dataset was meticulously annotated by experienced neuroradiologists, ensuring the highest quality of ground truth data for AI training.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-purple-400 mb-4">28</div>
                <h3 className="text-xl font-semibold mb-4">Clinical Validations</h3>
                <p className="text-gray-300">
                  Our solution has undergone rigorous validation in 28 different clinical environments, from major academic medical centers to rural hospitals with limited resources.
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
                  The ability to detect subtle midline shifts and early signs of cerebral edema has made a significant difference in our management of traumatic brain injuries. In several cases, the AI flagged concerning findings that led to lifesaving interventions before clinical deterioration.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr. Samuel Mensah</cite>
                      <p className="text-sm text-gray-400">Neurosurgeon, Korle-Bu Teaching Hospital, Ghana</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
              
              <blockquote className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-indigo-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  As the only radiologist serving our district hospital, I rely heavily on Annalise CTB for preliminary assessments, especially during off-hours when I'm on call. It has dramatically improved our workflow and reduced the time to diagnosis for critical neurological conditions.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr. Florence Nyambura</cite>
                      <p className="text-sm text-gray-400">Chief Radiologist, Nakuru Provincial Hospital, Kenya</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-20">
            <p className="text-gray-400 text-sm leading-relaxed">
              Annalise Enterprise CTB is intended to assist clinicians with the interpretation of brain CT scans. It is not intended to replace clinical judgment or the expertise of qualified radiologists.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              For detailed device information, including indications for use, contraindications, and warnings, please consult the user guide prior to use. Features and availability may vary by region.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              annalise.ai, ANNALISE ENTERPRISE and the Annalise logo are trademarks of Annalise-AI Pty Ltd, registered in Australia and other countries and regions.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Revolutionize Neurological Care</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to request a brochure, private demonstration, or with any questions you may have about Annalise Enterprise CTB.
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

export default SolutionsCTScan;