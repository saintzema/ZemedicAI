import React from 'react';
import { motion } from 'framer-motion';
import { FaLungs, FaBrain, FaHeartbeat, FaStethoscope, FaUserMd, FaChartLine, FaHospital, FaClock, FaShieldAlt } from 'react-icons/fa';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      icon: <FaLungs className="h-7 w-7" />,
      title: 'Chest X-Ray Analysis',
      description: 'Detect pneumonia, tuberculosis, and other lung conditions with our advanced AI algorithm trained on over 1 million X-rays.',
      color: 'bg-indigo-600',
      link: '/analyze/xray'
    },
    {
      id: 2,
      icon: <FaStethoscope className="h-7 w-7" />,
      title: 'Skin Lesion Detection',
      description: 'Identify melanoma and other skin conditions from images with 97% accuracy, providing early diagnosis for improved outcomes.',
      color: 'bg-purple-600',
      link: '/analyze/skin'
    },
    {
      id: 3,
      icon: <FaBrain className="h-7 w-7" />,
      title: 'CT Scan Interpretation',
      description: 'Rapidly assess brain CT scans for hemorrhage, stroke, and tumors, reducing critical diagnosis times by up to 80%.',
      color: 'bg-blue-600',
      link: '/analyze/ct-scan'
    },
    {
      id: 4,
      icon: <FaHeartbeat className="h-7 w-7" />,
      title: 'ECG Analysis',
      description: 'Detect arrhythmias, myocardial infarction, and other cardiac abnormalities from standard 12-lead ECGs.',
      color: 'bg-red-600',
      link: '#'
    }
  ];

  // Professional solution attributes with icons instead of emojis
  const solutionAttributes = [
    { 
      title: "Clinician friendly", 
      icon: <FaUserMd className="h-8 w-8 text-purple-500" />, 
      description: "Designed by clinicians for clinicians with intuitive workflows" 
    },
    { 
      title: "Diagnostically valuable", 
      icon: <FaChartLine className="h-8 w-8 text-purple-500" />, 
      description: "Enhanced detection with fewer false positives" 
    },
    { 
      title: "Patient focused", 
      icon: <FaHospital className="h-8 w-8 text-purple-500" />, 
      description: "Improving patients' lives through faster, accurate diagnosis" 
    },
    { 
      title: "Cost effective", 
      icon: <FaShieldAlt className="h-8 w-8 text-purple-500" />, 
      description: "Helping clinicians make fast, accurate decisions with less stress" 
    },
    { 
      title: "Time efficient", 
      icon: <FaClock className="h-8 w-8 text-purple-500" />, 
      description: "Faster reporting frees up time for patient care" 
    }
  ];

  return (
    <section id="solutions" className="py-24 dark-purple-gradient text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading-light">Our solutions are</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-20">
          {solutionAttributes.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <motion.span
              className="section-tag-dark"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered Solutions
            </motion.span>
            
            <motion.h2 
              className="section-heading-light mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Advanced Diagnostic Tools
            </motion.h2>
            
            <motion.p 
              className="section-subheading text-gray-300"
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
                className="bg-black/30 backdrop-blur-sm p-8 h-full flex flex-col rounded-2xl border border-gray-800 hover:border-purple-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-4 rounded-xl ${solution.color} text-white w-fit mb-6`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  {solution.description}
                </p>
                
                <a 
                  href={solution.link} 
                  className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 mt-auto"
                >
                  Learn more
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Showcase - Annalise.ai Style */}
        <div className="mt-32 bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 md:p-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-900/40 text-purple-300 rounded-full mb-6 border border-purple-700/50">
                Featured Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Diagnose with confidence for better patient outcomes
              </h2>
              
              <p className="text-gray-300 mb-8">
                Our advanced medical imaging AI is specially adapted for the unique healthcare challenges across Africa. Designed to work with limited 
                bandwidth, intermittent power, and a wide range of imaging equipment quality.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Works offline when internet connection is unreliable",
                  "Optimized for lower-resolution imaging equipment",
                  "Contextual recommendations based on local resources",
                  "Multilingual reporting in major African languages"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-6 w-6 text-purple-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-white uppercase tracking-wide text-sm">
                Find Out More
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616012480717-fd9867059ca0" 
                alt="X-ray analysis in action" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
