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

  return (
    <section id="partners" className="py-24 bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            className="section-tag-dark"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Partners
          </motion.span>
          
          <motion.h2 
            className="section-heading-light mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted By Leading Healthcare Providers
          </motion.h2>
          
          <motion.p 
            className="section-subheading text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We collaborate with hospitals, government agencies, and NGOs across Africa
            to bring AI-powered medical diagnostics to those who need it most.
          </motion.p>
        </div>

        {/* Partners grid - annalise.ai style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center h-28 px-8 rounded-xl border border-gray-800 hover:border-purple-800 transition-all duration-300 bg-gray-900/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-lg font-medium text-gray-300 text-center">{partner.name}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Case studies - annalise.ai style */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <span className="h-0.5 w-16 bg-purple-900 mr-6"></span>
            <h3 className="text-2xl font-bold text-white">Client success stories</h3>
            <span className="h-0.5 w-16 bg-purple-900 ml-6"></span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhancing Rural Healthcare Access",
                location: "Northern Kenya",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
                description: "How solar-powered diagnostic booths brought AI analysis to areas without reliable electricity."
              },
              {
                title: "Improving TB Detection Rates",
                location: "Nigeria",
                image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55",
                description: "Achieving a 78% increase in tuberculosis detection through AI-assisted X-ray screening."
              },
              {
                title: "Training the Next Generation",
                location: "South Africa",
                image: "https://images.unsplash.com/photo-1516549655669-df668a1d9930",
                description: "How medical students use ZemedicAI as a learning tool to improve diagnostic skills."
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                className="case-study h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="case-study-overlay"></div>
                <div className="case-study-content">
                  <div className="text-purple-300 text-sm mb-2">{study.location}</div>
                  <h4 className="text-white text-xl font-bold mb-2">{study.title}</h4>
                  <p className="text-gray-300 text-sm">{study.description}</p>
                  <a href="#" className="mt-4 inline-flex items-center text-purple-300 hover:text-purple-200 text-sm font-medium">
                    Read case study
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Final CTA - annalise.ai style */}
        <motion.div
          className="bg-gradient-primary rounded-3xl overflow-hidden text-white py-16 px-8 text-center border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform healthcare delivery in Africa?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join hundreds of healthcare providers across Africa who are using ZemedicAI to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#" className="btn btn-white text-center uppercase tracking-wide text-sm">
                Get Started
              </a>
              <a href="#" className="btn btn-outline border-white text-white hover:bg-white/10 text-center uppercase tracking-wide text-sm">
                Request Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
