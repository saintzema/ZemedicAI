import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Preorder = () => {
  // Technical specifications for the diagnostic booth
  const boothSpecs = [
    { name: "Dimensions", value: "2.4m x 2.4m x 2.6m (standard shipping container size)" },
    { name: "Weight", value: "1200 kg" },
    { name: "Power", value: "Solar panels: 3kW capacity with 5kWh battery backup" },
    { name: "Connectivity", value: "4G/LTE, Satellite, WiFi, Ethernet" },
    { name: "Operating Temperature", value: "-10°C to 50°C" },
    { name: "Water Resistance", value: "IP65 rated enclosure" },
    { name: "Modalities Supported", value: "X-ray, Ultrasound, Dermatology, Vital signs" },
    { name: "Computing", value: "Edge AI computing with redundant systems" },
    { name: "Display", value: "21.5\" medical-grade touchscreen" },
    { name: "Security", value: "Biometric access, encrypted data storage" }
  ];

  // Deployment locations 
  const deploymentLocations = [
    {
      name: "Rural Villages",
      description: "Bring diagnostic care to communities far from hospitals",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed"
    },
    {
      name: "Mobile Clinics",
      description: "Enhance mobile healthcare operations with AI diagnostics",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    },
    {
      name: "Urban Centers",
      description: "Improve throughput in high-volume healthcare facilities",
      image: "https://images.unsplash.com/photo-1606318313496-831b1e3771cc"
    }
  ];

  // SDK integration paths
  const sdkIntegrations = [
    {
      title: "On-Premise Integration",
      description: "Install our SDK directly on your existing systems with local processing and no data leaving your facility.",
      features: ["Data stays on-site", "Works offline", "Low latency", "Highest privacy"]
    },
    {
      title: "Hybrid Cloud Solution",
      description: "Combine on-premise processing with cloud-based model updates and anonymized quality improvement.",
      features: ["Continuous learning", "Regular updates", "Flexible scaling", "Balanced approach"]
    },
    {
      title: "Full Cloud Integration",
      description: "Fully managed cloud solution with API access and minimal on-premise requirements.",
      features: ["Minimal hardware needs", "Always up-to-date", "Pay-per-use option", "Rapid deployment"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow py-12 page-transition">
        {/* Hero Section */}
        <section className="dark-purple-gradient py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h1
                className="heading-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Pre-order ZemedicAI Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Be among the first to deploy our cutting-edge AI diagnostic technology
                in your healthcare facilities
              </motion.p>
            </div>
          </div>
        </section>

        {/* Solar Booth Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="section-tag-dark">Solar-Powered AI Booth</span>
                <h2 className="heading-secondary mt-4 mb-6">Autonomous Diagnostic Station</h2>
                <p className="text-gray-300 mb-8">
                  The ZemedicAI Solar Diagnostic Booth is a self-contained, solar-powered 
                  medical imaging analysis station designed specifically for deployment in remote 
                  and underserved regions. With built-in AI capabilities, it can operate completely 
                  off-grid while providing hospital-quality diagnostic support.
                </p>

                <div className="mb-10">
                  <h3 className="heading-subsection mb-4">Technical Specifications</h3>
                  <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="grid grid-cols-1 divide-y divide-gray-800">
                      {boothSpecs.map((spec, index) => (
                        <div key={index} className="flex px-4 py-3">
                          <div className="w-40 md:w-64 flex-shrink-0 font-medium text-white">{spec.name}</div>
                          <div className="text-gray-400">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link 
                  to="/contact?type=booth" 
                  className="btn btn-primary text-center"
                >
                  Preorder Your Booth
                </Link>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7"
                  alt="ZemedicAI Solar Diagnostic Booth"
                  className="w-full h-auto object-cover rounded-2xl border border-gray-800"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
                  <div className="text-sm text-gray-300">Starting at</div>
                  <div className="text-2xl font-bold text-white">$24,999</div>
                  <div className="text-xs text-gray-400">Financing options available</div>
                </div>
              </div>
            </div>

            {/* Deployment Locations */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="heading-secondary mb-6">Deployment Locations</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  ZemedicAI Solar Diagnostic Booths are designed to operate in various environments, 
                  bringing advanced medical imaging analysis to any location.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {deploymentLocations.map((location, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={location.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                      <p className="text-gray-400">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDK Integration Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-indigo-900/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="section-tag-dark">Software Integration</span>
              <h2 className="heading-secondary mt-4 mb-6">SDK for Existing Equipment</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Already have medical imaging equipment? Enhance it with our AI diagnostic 
                capabilities through our secure and flexible SDK integration options.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {sdkIntegrations.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{option.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <svg className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/contact?type=sdk" 
                className="btn btn-white text-center hover:bg-purple-100 hover:text-purple-700 transition-all duration-300"
              >
                Request SDK Details
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Have questions about preordering our solutions? Here are answers to commonly asked questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is the lead time for the Solar Diagnostic Booth?",
                  answer: "Current lead time is approximately 3-6 months from order confirmation, depending on your location and specific customization requirements."
                },
                {
                  question: "Is there a minimum order quantity?",
                  answer: "No, you can order a single booth. However, volume discounts are available for orders of 3 or more units."
                },
                {
                  question: "Do I need special permits to install the booth?",
                  answer: "Requirements vary by location. Our team will provide documentation to support your permitting process and can connect you with local partners who can help navigate regional requirements."
                },
                {
                  question: "What ongoing support is provided?",
                  answer: "All booths and SDK integrations include a standard 1-year support package with remote monitoring, software updates, and technical support. Extended support packages are available."
                },
                {
                  question: "Is training included?",
                  answer: "Yes, each booth purchase includes comprehensive training for up to 5 staff members. SDK integration includes training for your technical team."
                },
                {
                  question: "How is maintenance handled in remote locations?",
                  answer: "The booths are designed for minimal maintenance with self-diagnostic capabilities. When service is needed, our regional partners provide support, and many issues can be resolved remotely."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Have more questions? Contact our team for personalized assistance.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-outline border-white text-white hover:bg-white/10 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Preorder;