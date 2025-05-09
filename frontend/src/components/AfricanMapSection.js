import React from 'react';
import { motion } from 'framer-motion';

const AfricanMapSection = () => {
  // Africa connection points - approximate coordinates
  const connectionPoints = [
    { id: 1, x: '30%', y: '25%', label: 'Cairo', delay: 0 },     // Egypt
    { id: 2, x: '45%', y: '40%', label: 'Khartoum', delay: 0.3 }, // Sudan
    { id: 3, x: '55%', y: '45%', label: 'Addis Ababa', delay: 0.6 }, // Ethiopia
    { id: 4, x: '52%', y: '65%', label: 'Nairobi', delay: 0.9 }, // Kenya
    { id: 5, x: '45%', y: '75%', label: 'Dar es Salaam', delay: 1.2 }, // Tanzania
    { id: 6, x: '48%', y: '87%', label: 'Johannesburg', delay: 1.5 }, // South Africa
    { id: 7, x: '18%', y: '35%', label: 'Dakar', delay: 1.8 }, // Senegal
    { id: 8, x: '25%', y: '45%', label: 'Abuja', delay: 2.1 }, // Nigeria
    { id: 9, x: '30%', y: '65%', label: 'Kinshasa', delay: 2.4 }, // DRC
    { id: 10, x: '40%', y: '35%', label: 'Kano', delay: 2.7 }, // Nigeria
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Serving Healthcare Providers Across Africa
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our network of AI diagnostic solutions is expanding throughout the continent, 
            bringing advanced medical imaging analysis to remote and underserved regions.
          </motion.p>
        </div>

        <div className="relative aspect-[4/3] md:aspect-[16/9] bg-indigo-50 rounded-xl overflow-hidden shadow-lg">
          {/* Map background */}
          <img 
            src="https://media.istockphoto.com/id/1232510116/vector/africa-map-network-bright-mesh-on-dark-blue-background.jpg?s=1024x1024&w=is&k=20&c=O8hdLzNDkOYK0zyCaq1kVPc4jCKu0PqomIEEjf9O4x0=" 
            alt="Africa Network Map"
            className="w-full h-full object-cover"
          />

          {/* Connection points */}
          {connectionPoints.map((point) => (
            <motion.div
              key={point.id}
              className="absolute"
              style={{ 
                left: point.x, 
                top: point.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: point.delay,
                type: "spring",
                stiffness: 200
              }}
            >
              <div className="map-point"></div>
              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm text-indigo-800 whitespace-nowrap">
                {point.label}
              </div>
            </motion.div>
          ))}

          {/* Stats overlay */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-indigo-600 text-3xl font-bold">12+</p>
                <p className="text-gray-700">Countries</p>
              </div>
              <div>
                <p className="text-indigo-600 text-3xl font-bold">300+</p>
                <p className="text-gray-700">Hospitals</p>
              </div>
              <div>
                <p className="text-indigo-600 text-3xl font-bold">1M+</p>
                <p className="text-gray-700">Scans Analyzed</p>
              </div>
              <div>
                <p className="text-indigo-600 text-3xl font-bold">98%</p>
                <p className="text-gray-700">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricanMapSection;
