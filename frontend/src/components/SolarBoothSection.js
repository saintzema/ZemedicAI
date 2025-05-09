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
    <section id="deployment" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Flexible Deployment
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Diagnostics for Every Environment
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
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
              className="solar-booth card h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video relative">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">{option.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
                    {option.icon}
                  </div>
                  <p className="text-gray-700">{option.description}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarBoothSection;
