import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DeploymentSolarBooths = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-8">
            <Link to="/" className="text-gray-400 hover:text-purple-400">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/deployment" className="text-gray-400 hover:text-purple-400">Deployment</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-purple-400">Solar Booths</span>
          </div>
          
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Solar-Powered Medical
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  AI Diagnostic Booths
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Bringing advanced AI diagnostics to remote areas with limited power and connectivity, our solar-powered booths provide lifesaving medical imaging services where they've never been available before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block text-center">
                  Request Information
                </Link>
                <Link to="/demo" className="px-8 py-3 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-600/10 rounded-lg font-medium inline-block text-center">
                  View Demo
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Solar-Powered Medical Booth" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Key Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">100% Solar Powered</h3>
                <p className="text-gray-300">
                  Equipped with high-efficiency solar panels and advanced battery storage, our booths can operate continuously, even in areas with unreliable electricity or no grid connection.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Offline Capability</h3>
                <p className="text-gray-300">
                  Our AI systems run locally, allowing for diagnostic services even without internet connectivity. Data syncs automatically when connectivity is available.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ruggedized Design</h3>
                <p className="text-gray-300">
                  Built to withstand harsh environments, extreme temperatures, dust, and high humidity levels, ensuring reliable operation in any African climate.
                </p>
              </div>
            </div>
          </div>
          
          {/* How It Works Section */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-20 border border-gray-800">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Patient Arrives</h3>
                <p className="text-gray-300">Patient enters the booth and is guided through the process by simple visual instructions and voice prompts.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Imaging Performed</h3>
                <p className="text-gray-300">Integrated medical imaging devices (X-ray, ultrasound, or dermatological camera) capture necessary images.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-gray-300">Our powerful edge AI systems analyze the images locally, generating diagnostic results within seconds.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Results Delivered</h3>
                <p className="text-gray-300">Patient receives printed results and, if needed, connects with a remote healthcare provider via telemedicine link.</p>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-3"></div>
                    Power System
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>3.5 kW solar array with sun-tracking capability</li>
                    <li>12 kWh lithium iron phosphate battery storage</li>
                    <li>Intelligent power management system</li>
                    <li>Optional grid connection for hybrid operation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-3"></div>
                    Imaging Equipment
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>Low-dose digital X-ray system</li>
                    <li>High-resolution ultrasound</li>
                    <li>Dermatological imaging camera</li>
                    <li>Secure image storage and transmission</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-3"></div>
                    AI System
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>Edge computing with dedicated AI processors</li>
                    <li>Local storage for up to 10,000 patient records</li>
                    <li>Over-the-air AI model updates</li>
                    <li>Multiple language support for user interface</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Connectivity Options</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                    Standard Package
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>4G/LTE cellular connectivity with external antenna</li>
                    <li>Local Wi-Fi hotspot for maintenance access</li>
                    <li>Intelligent bandwidth management for data synchronization</li>
                    <li>Store-and-forward capability for disconnected operation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                    Enhanced Connectivity (Optional)
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>Starlink satellite internet integration</li>
                    <li>Mesh network capability for multi-booth deployments</li>
                    <li>Extended range Wi-Fi for community access</li>
                    <li>Fiber optic connection readiness</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                    Security Features
                  </h3>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>HIPAA and GDPR compliant data handling</li>
                    <li>Multi-factor authentication for administrative access</li>
                    <li>Physical security measures with remote monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Deployment Map */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Current Deployments</h2>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-300">
                  Our solar-powered AI diagnostic booths are currently deployed in 12 countries across Africa, 
                  providing essential medical imaging services to over 500,000 people in remote communities.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557761112-4b09750b5ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Africa Deployment Map" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
                </div>
                
                {/* Sample Deployment Markers */}
                <div className="absolute top-[30%] left-[45%] h-4 w-4 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-[30%] left-[45%] h-4 w-4 bg-purple-500 rounded-full"></div>
                
                <div className="absolute top-[45%] left-[38%] h-4 w-4 bg-indigo-500 rounded-full animate-ping"></div>
                <div className="absolute top-[45%] left-[38%] h-4 w-4 bg-indigo-500 rounded-full"></div>
                
                <div className="absolute top-[60%] left-[50%] h-4 w-4 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-[60%] left-[50%] h-4 w-4 bg-purple-500 rounded-full"></div>
                
                <div className="absolute top-[38%] left-[60%] h-4 w-4 bg-indigo-500 rounded-full animate-ping"></div>
                <div className="absolute top-[38%] left-[60%] h-4 w-4 bg-indigo-500 rounded-full"></div>
                
                <div className="absolute top-[25%] left-[25%] h-4 w-4 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-[25%] left-[25%] h-4 w-4 bg-purple-500 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">68</div>
                  <p className="text-gray-300">Active Booths</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-400">12</div>
                  <p className="text-gray-300">Countries</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">243k</div>
                  <p className="text-gray-300">Patients Served</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-400">37k</div>
                  <p className="text-gray-300">Critical Findings</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Rural Kenya: Improving TB Detection</h3>
                <p className="text-gray-300 mb-4">
                  In remote areas of Kenya, our solar-powered booths have increased tuberculosis detection rates by 215%, 
                  enabling early intervention and reducing community transmission. Local healthcare workers report significantly 
                  improved treatment outcomes due to early detection.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                    <div>
                      <h4 className="font-medium text-white">Dr. Njeri Kamau</h4>
                      <p className="text-sm text-gray-400">Ministry of Health, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 p-6 rounded-xl shadow-xl relative border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Niger Delta: Maternal Health Revolution</h3>
                <p className="text-gray-300 mb-4">
                  In the Niger Delta region, our booths equipped with ultrasound capabilities have provided 
                  prenatal screening to over 15,000 expectant mothers, identifying high-risk pregnancies and 
                  enabling timely interventions that have reduced maternal mortality by 43% in the served communities.
                </p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                    <div>
                      <h4 className="font-medium text-white">Dr. Elizabeth Okonkwo</h4>
                      <p className="text-sm text-gray-400">Regional Health Director, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing and Availability */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing and Availability</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Purchase Option</h3>
                <ul className="text-gray-300 space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>One-time purchase with 5-year warranty</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Installation and training included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Annual maintenance contract available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>AI updates for the life of the product</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/30 relative shadow-xl shadow-purple-500/10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-4">Lease Option</h3>
                <ul className="text-gray-300 space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>3-5 year lease terms with no upfront cost</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full maintenance and support included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Equipment upgrades every 3 years</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All AI updates and technology improvements</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Pay-Per-Use Model</h3>
                <ul className="text-gray-300 space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>No capital investment required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pay only for completed diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Revenue sharing options available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Ideal for NGOs and public health facilities</span>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Special pricing available for bulk deployments and public health programs.
                <br />
                Contact us for custom configurations and integration with existing healthcare infrastructure.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare Delivery?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our solar-powered AI diagnostic booths can serve your community's healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-3 bg-black border border-purple-500 text-purple-400 hover:bg-purple-900/20 rounded-lg font-medium"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentSolarBooths;