import React from 'react';
import { motion } from 'framer-motion';
import { FaLungs, FaBrain, FaHeartbeat, FaSkin } from 'react-icons/fa';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      icon: <FaLungs className="h-7 w-7" />,
      title: 'Chest X-Ray Analysis',
      description: 'Detect pneumonia, tuberculosis, and other lung conditions with our advanced AI algorithm trained on over 1 million X-rays.',
      color: 'bg-indigo-100 text-indigo-600',
      link: '/analyze/xray'
    },
    {
      id: 2,
      icon: <FaSkin className="h-7 w-7" />,
      title: 'Skin Lesion Detection',
      description: 'Identify melanoma and other skin conditions from images with 97% accuracy, providing early diagnosis for improved outcomes.',
      color: 'bg-purple-100 text-purple-600',
      link: '/analyze/skin'
    },
    {
      id: 3,
      icon: <FaBrain className="h-7 w-7" />,
      title: 'CT Scan Interpretation',
      description: 'Rapidly assess brain CT scans for hemorrhage, stroke, and tumors, reducing critical diagnosis times by up to 80%.',
      color: 'bg-blue-100 text-blue-600',
      link: '/analyze/ct-scan'
    },
    {
      id: 4,
      icon: <FaHeartbeat className="h-7 w-7" />,
      title: 'ECG Analysis',
      description: 'Detect arrhythmias, myocardial infarction, and other cardiac abnormalities from standard 12-lead ECGs.',
      color: 'bg-red-100 text-red-600',
      link: '#'
    }
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="solutions" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Solutions
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Advanced Diagnostic Tools
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our suite of AI diagnostic tools helps healthcare providers make faster, more accurate
            diagnoses even in resource-limited settings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="card p-6 h-full flex flex-col hover:shadow-lg transition-shadow"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
            >
              <div className={`p-3 rounded-xl ${solution.color} w-fit mb-6`}>
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {solution.description}
              </p>
              
              <a 
                href={solution.link} 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 mt-auto"
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1616012480717-fd9867059ca0" 
              alt="X-ray analysis in action" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end">
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-3">
                  Featured
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold">X-ray Analysis</h3>
                <p className="text-gray-200 mt-2">Diagnose 14 different lung conditions in seconds</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AI that transforms healthcare delivery in Africa
            </h2>
            
            <p className="text-gray-600 mb-6">
              Our advanced medical imaging AI is specially adapted for the unique healthcare challenges across Africa. Designed to work with limited 
              bandwidth, intermittent power, and a wide range of imaging equipment quality.
            </p>
            
            <ul className="space-y-4">
              {[
                "Works offline when internet connection is unreliable",
                "Optimized for lower-resolution imaging equipment",
                "Contextual recommendations based on local healthcare resources",
                "Multilingual reporting in major African languages"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 btn btn-primary">
              Try Demo Analysis
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
