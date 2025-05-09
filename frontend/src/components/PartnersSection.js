import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  // These would normally be imported logo images, but for this demo we'll use placeholder names
  const partners = [
    { id: 1, name: 'African Health Organization' },
    { id: 2, name: 'Ministry of Health, Kenya' },
    { id: 3, name: 'Nigerian Medical Association' },
    { id: 4, name: 'South African Medical Research Council' },
    { id: 5, name: 'University of Nairobi Hospital' },
    { id: 6, name: 'Cairo Medical Center' },
    { id: 7, name: 'World Health Partners' },
    { id: 8, name: 'Doctors Without Borders' },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "ZemedicAI has revolutionized how we diagnose respiratory conditions in our rural clinics. The solar-powered booths have brought advanced diagnostics to areas that previously had none.",
      author: "Dr. Amina Kimani",
      title: "Chief Medical Officer",
      organization: "Kenyan Rural Health Initiative"
    },
    {
      id: 2,
      quote: "The accuracy of the AI system in detecting tuberculosis has helped us identify cases earlier and start treatment faster. This technology is saving lives across our facilities.",
      author: "Dr. Emmanuel Okafor",
      title: "Director of Radiology",
      organization: "Lagos University Teaching Hospital"
    },
    {
      id: 3,
      quote: "Integrating ZemedicAI into our telehealth platform has extended our reach to remote communities. We can now provide specialist-level diagnostics to patients hundreds of kilometers away.",
      author: "Dr. Sarah Nkosi",
      title: "Head of Digital Health",
      organization: "South African Medical Research Council"
    }
  ];

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted By Leading Healthcare Providers
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We collaborate with hospitals, government agencies, and NGOs across Africa
            to bring AI-powered medical diagnostics to those who need it most.
          </motion.p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center h-24 px-8 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-lg font-medium text-gray-700 text-center">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Partners Say</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-indigo-100">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
              
              <div className="mt-auto">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
                <p className="text-indigo-600 text-sm">{testimonial.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
