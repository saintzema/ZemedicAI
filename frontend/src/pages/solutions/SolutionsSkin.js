import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SolutionsSkin = () => {
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
            <span className="text-purple-400">Skin Lesion Detection</span>
          </div>
          
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Annalise Enterprise
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Skin Lesion Detection
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Our AI-powered dermatology assistant helps physicians detect and classify skin lesions with high accuracy, improving early detection of melanoma and other skin conditions.
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
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="AI Skin Lesion Analysis" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">91%</div>
              <h3 className="text-xl font-semibold mb-4">Sensitivity</h3>
              <p className="text-gray-300">For melanoma detection, significantly improving early diagnosis rates.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">87%</div>
              <h3 className="text-xl font-semibold mb-4">Specificity</h3>
              <p className="text-gray-300">High specificity reduces unnecessary biopsies and patient anxiety.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">18</div>
              <h3 className="text-xl font-semibold mb-4">Skin Conditions</h3>
              <p className="text-gray-300">Accurately identifies and classifies 18 different skin conditions.</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mb-20">
            <blockquote className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/20 relative">
              <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
              <p className="text-xl text-gray-200 mb-6 relative z-10">
                The AI skin analysis tool has transformed our practice, particularly in remote regions with limited access to dermatologists. We can now provide expert-level assessments for potentially dangerous skin lesions within minutes, leading to faster interventions for malignant cases.
              </p>
              <footer>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <cite className="font-medium text-white not-italic">Dr. Adebayo Olanrewaju</cite>
                    <p className="text-sm text-gray-400">Director of Dermatology, Lagos University Teaching Hospital</p>
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
                  Smartphone Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  Our solution works with standard smartphone cameras, making it accessible even in resource-limited settings. The mobile app guides users to take proper clinical images for analysis.
                </p>
                <p className="text-gray-300 font-medium">
                  Results available in less than 15 seconds.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1586769852044-692d5d239b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Smartphone Skin Analysis" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Comprehensive Analysis
                </h3>
                <p className="text-gray-300 mb-4">
                  Our AI doesn't just classify lesions; it provides detailed analysis of multiple features including asymmetry, border irregularity, color variations, diameter, and evolution.
                </p>
                <p className="text-gray-300">
                  The system uses visual heat maps to highlight areas of concern, making it easier for physicians to understand the AI's reasoning.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Comprehensive Skin Analysis" 
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
          
          {/* Patient Management Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10">
                <h2 className="text-2xl font-bold mb-6">
                  Streamlined Patient Management with
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    Annalise Dermatology Suite
                  </span>
                </h2>
                <p className="text-gray-300 mb-4">
                  Our solution integrates seamlessly with electronic health records to track lesions over time, facilitating early detection of changes.
                </p>
                <p className="text-gray-300 mb-4">
                  Set automatic follow-up reminders for high-risk patients and manage treatment plans all within one platform.
                </p>
                <p className="text-gray-300 mb-6">
                  Secure sharing options allow for easy telemedicine consultations with dermatology specialists.
                </p>
                <Link to="#" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                  Learn more about patient management features
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-950">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Patient Management System" 
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
                <div className="text-3xl font-bold text-purple-400 mb-4">250,000+</div>
                <h3 className="text-xl font-semibold mb-4">Training Images</h3>
                <p className="text-gray-300">
                  Our AI was trained on a diverse dataset of over 250,000 dermatological images spanning different skin types, ages, and demographics to ensure accuracy across all populations.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-indigo-400 mb-4">120+</div>
                <h3 className="text-xl font-semibold mb-4">Dermatologists</h3>
                <p className="text-gray-300">
                  Every image in our training set was reviewed by multiple dermatologists to ensure proper classification and identification of subtle features.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-purple-400 mb-4">32</div>
                <h3 className="text-xl font-semibold mb-4">Clinical Trials</h3>
                <p className="text-gray-300">
                  Our solution has been validated through rigorous clinical trials across multiple continents and healthcare settings, consistently demonstrating performance on par with dermatologists.
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
                  In our rural clinic, where the nearest dermatologist is 200 kilometers away, this AI tool has been revolutionary. We've identified several early melanomas that would have likely progressed to dangerous stages before being caught.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr. Amina Diallo</cite>
                      <p className="text-sm text-gray-400">General Practitioner, Rural Health Initiative, Senegal</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
              
              <blockquote className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-indigo-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  The accuracy on dark skin tones is what impressed me most. Many AI systems struggle with melanin-rich skin, but this solution performs exceptionally well across all Fitzpatrick skin types, making it ideal for our diverse patient population.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr. Ngozi Okonkwo</cite>
                      <p className="text-sm text-gray-400">Dermatologist, University of Nairobi Teaching Hospital</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-20">
            <p className="text-gray-400 text-sm leading-relaxed">
              Annalise Enterprise Skin Lesion Detection is intended to assist clinicians in the assessment and classification of visible skin lesions. It is not intended as a replacement for dermatological consultation or biopsy for suspicious lesions.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              For detailed device information, including indications for use, contraindications, and warnings, please consult the user guide prior to use. Not all features are available in all regions.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              annalise.ai, ANNALISE ENTERPRISE and the Annalise logo are trademarks of Annalise-AI Pty Ltd, registered in Australia and other countries and regions.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Experience the Future of Dermatology</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to request a brochure, private demonstration, or with any questions you may have about our skin lesion detection solution.
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

export default SolutionsSkin;