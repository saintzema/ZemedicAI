import React from 'react';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaWifi, FaCloud, FaMobileAlt } from 'react-icons/fa';

const SolarBoothSection = () => {
  const deploymentOptions = [
    {
      id: 1,
      title: "Solar-Powered Diagnostic Booths",
      description: "Off-grid AI medical imaging analysis in a self-contained unit powered by renewable energy, perfect for remote locations.",
      image: "https://images.unsplash.com/photo-1644349057008-19f93297bc0c",
      icon: <FaSolarPanel className="h-6 w-6 text-yellow-500" />,
      features: ["Off-grid operation", "Solar powered", "Satellite connectivity", "Ruggedized design"]
    },
    {
      id: 2,
      title: "Telehealth Integration",
      description: "Connect remote healthcare workers with specialists through our integrated telehealth platform with AI-assisted diagnostics.",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
      icon: <FaWifi className="h-6 w-6 text-blue-500" />,
      features: ["Real-time consultation", "Secure video conferencing", "Image sharing", "AI-assisted reporting"]
    },
    {
      id: 3,
      title: "Cloud API Integration",
      description: "Integrate our powerful diagnostic algorithms directly into your existing healthcare systems through our secure cloud API.",
      image: "https://images.unsplash.com/photo-1631563020241-09beac7791b7",
      icon: <FaCloud className="h-6 w-6 text-indigo-500" />,
      features: ["FHIR/HL7 compatible", "End-to-end encryption", "Custom workflows", "HIPAA/GDPR compliant"]
    },
    {
      id: 4,
      title: "Mobile SDK",
      description: "Embed our diagnostic capabilities directly into your mobile health applications to extend reach to smartphone users.",
      image: "https://images.unsplash.com/photo-1735837893073-fef13dedc842",
      icon: <FaMobileAlt className="h-6 w-6 text-green-500" />,
      features: ["Offline capabilities", "Low bandwidth mode", "Cross-platform", "White-label options"]
    }
  ];

  return (
    <section id="deployment" className="py-24 dark-purple-gradient text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            className="section-tag-dark"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Flexible Deployment
          </motion.span>
          
          <motion.h2 
            className="section-heading-light mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Diagnostics for Every Environment
          </motion.h2>
          
          <motion.p 
            className="section-subheading text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From solar-powered diagnostic booths in remote villages to cloud API integration with major hospitals,
            ZemedicAI adapts to the unique needs of healthcare providers across Africa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deploymentOptions.map((option, index) => (
            <motion.div 
              key={option.id}
              className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full shadow-md border border-gray-800">
                        {option.icon}
                      </div>
                      <h3 className="text-white text-2xl font-bold">{option.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-300 mb-6">{option.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-bold text-white mb-3 text-lg">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <svg className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#" className="mt-8 text-purple-400 inline-flex items-center font-medium hover:text-purple-300">
                  Learn more about {option.title.toLowerCase()}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action - annalise.ai style */}
        <div className="mt-20 bg-black rounded-3xl shadow-lg overflow-hidden border border-gray-800">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="relative bg-gradient-primary overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
              </div>
              <div className="relative p-12 md:p-16 flex flex-col h-full justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform healthcare in your region?</h2>
                <p className="text-gray-200 mb-8">Book a demo to see how ZemedicAI can enhance diagnostic capabilities at your facility.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-auto">
                  <a href="#" className="btn btn-white uppercase tracking-wide text-sm">
                    Request Demo
                  </a>
                  <a href="#" className="btn btn-outline border-white text-white hover:bg-white/10 uppercase tracking-wide text-sm">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center bg-black">
              <h3 className="text-2xl font-bold text-white mb-6">How we support your deployment</h3>
              <ul className="space-y-5">
                {[
                  "Custom installation and setup for your specific environment",
                  "Comprehensive training for your clinical and technical staff",
                  "Ongoing technical support with 24/7 availability",
                  "Regular software updates with improved algorithms",
                  "Data analysis and reporting to measure impact"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarBoothSection;
