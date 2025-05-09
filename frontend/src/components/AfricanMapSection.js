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

  // Connect the points with invisible lines to show the network effect
  const connectionLines = [];
  for (let i = 0; i < connectionPoints.length; i++) {
    for (let j = i + 1; j < connectionPoints.length; j++) {
      if (Math.random() > 0.7) { // Only create some connections, not all
        connectionLines.push({
          id: `${i}-${j}`,
          point1: connectionPoints[i],
          point2: connectionPoints[j],
          delay: connectionPoints[i].delay + 0.2
        });
      }
    }
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Reach
          </motion.span>
          
          <motion.h2 
            className="section-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Serving Healthcare Providers Across Africa
          </motion.h2>
          
          <motion.p 
            className="section-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our network of AI diagnostic solutions is expanding throughout the continent, 
            bringing advanced medical imaging analysis to remote and underserved regions.
          </motion.p>
        </div>

        <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)' }}>
          {/* Map background */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://media.istockphoto.com/id/1232510116/vector/africa-map-network-bright-mesh-on-dark-blue-background.jpg?s=1024x1024&w=is&k=20&c=O8hdLzNDkOYK0zyCaq1kVPc4jCKu0PqomIEEjf9O4x0=" 
              alt="Africa Network Map"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connectionLines.map((line) => (
              <motion.line
                key={line.id}
                x1={line.point1.x}
                y1={line.point1.y}
                x2={line.point2.x}
                y2={line.point2.y}
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.5, 
                  delay: line.delay + 0.5
                }}
              />
            ))}
          </svg>

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

          {/* Stats overlay - annalise.ai style */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact at a glance</h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <p className="text-purple-600 text-4xl font-bold mb-1">12+</p>
                <p className="text-gray-700">Countries</p>
              </div>
              <div>
                <p className="text-purple-600 text-4xl font-bold mb-1">300+</p>
                <p className="text-gray-700">Hospitals</p>
              </div>
              <div>
                <p className="text-purple-600 text-4xl font-bold mb-1">1M+</p>
                <p className="text-gray-700">Scans Analyzed</p>
              </div>
              <div>
                <p className="text-purple-600 text-4xl font-bold mb-1">98%</p>
                <p className="text-gray-700">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials - annalise.ai style */}
        <div className="mt-20">
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-0.5 w-16 bg-purple-200 mr-6"></span>
            <h3 className="text-2xl font-bold text-gray-900">What clinicians are saying</h3>
            <span className="h-0.5 w-16 bg-purple-200 ml-6"></span>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "ZemedicAI has revolutionized how we diagnose respiratory conditions in our rural clinics. The solar-powered booths have brought advanced diagnostics to areas that previously had none.",
                author: "Dr. Amina Kimani",
                title: "Chief Medical Officer",
                organization: "Kenyan Rural Health Initiative"
              },
              {
                quote: "The accuracy of the AI system in detecting tuberculosis has helped us identify cases earlier and start treatment faster. This technology is saving lives across our facilities.",
                author: "Dr. Emmanuel Okafor",
                title: "Director of Radiology",
                organization: "Lagos University Teaching Hospital"
              },
              {
                quote: "Integrating ZemedicAI into our telehealth platform has extended our reach to remote communities. We can now provide specialist-level diagnostics to patients hundreds of kilometers away.",
                author: "Dr. Sarah Nkosi",
                title: "Head of Digital Health",
                organization: "South African Medical Research Council"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-700 mb-8 relative z-10">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-purple-600 text-sm">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricanMapSection;
