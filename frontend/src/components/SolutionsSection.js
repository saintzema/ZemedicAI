import React from 'react';
import { FaUserMd, FaBullseye, FaUserCheck, FaDollarSign, FaClock } from 'react-icons/fa';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <FaUserMd className="text-[#5718e3] text-4xl" />,
      title: 'Clinician friendly',
      description: 'Designed by clinicians for clinicians to make their workdays easier and more efficient — from the bedside to the radiology room and beyond.'
    },
    {
      icon: <FaBullseye className="text-[#5718e3] text-4xl" />,
      title: 'Diagnostically valuable',
      description: 'Enhanced detection may lead to better follow up and fewer false positives/negatives, leading to decreased medico-legal risk and insurance premiums.'
    },
    {
      icon: <FaUserCheck className="text-[#5718e3] text-4xl" />,
      title: 'Patient focused',
      description: 'Improving patients\' lives by facilitating rapid triage, decision support, and access to time-sensitive interventions.'
    },
    {
      icon: <FaDollarSign className="text-[#5718e3] text-4xl" />,
      title: 'Cost effective',
      description: 'Helping clinicians make fast, accurate decisions with less stress enabling time and money savings.'
    },
    {
      icon: <FaClock className="text-[#5718e3] text-4xl" />,
      title: 'Time efficient',
      description: 'Faster reporting frees up time which clinicians can spend with patients or on additional or difficult cases.'
    }
  ];

  return (
    <section className="py-20 bg-[#f1ebff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1a0b40]">
          Our solutions are
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#5718e3]">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;