import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import ProductShowcase from '../components/ProductShowcase';
import PartnersSection from '../components/PartnersSection';
import { FaStethoscope, FaChartLine, FaUserMd, FaLock, FaMobileAlt, FaBrain, FaCheck, FaArrowRight } from 'react-icons/fa';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with gradient background and animated X-ray */}
      <HeroSection />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Product Showcase with Enterprise Description */}
      <ProductShowcase />
      
      {/* Partners and Certifications Section */}
      <PartnersSection />
      
      {/* Additional Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1a0b40]">
            Advanced AI Medical Diagnostics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaStethoscope className="text-[#5718e3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a0b40]">Chest X-ray Analysis</h3>
              <p className="text-gray-600 mb-6">
                Detect pneumonia, tuberculosis, lung masses, and other abnormalities with our AI-powered X-ray analysis.
              </p>
              <ul className="mb-6">
                {['Pneumonia Detection', 'Tuberculosis Screening', 'Lung Nodule Identification'].map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FaCheck className="text-[#36b649] mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/analysis/xray" className="inline-flex items-center text-[#5718e3] font-medium hover:underline">
                Learn more <FaArrowRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUserMd className="text-[#36b649] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a0b40]">Skin Lesion Detection</h3>
              <p className="text-gray-600 mb-6">
                Analyze skin lesions and moles for early detection of melanoma and other skin conditions with high accuracy.
              </p>
              <ul className="mb-6">
                {['Melanoma Detection', 'Lesion Classification', 'Risk Assessment'].map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FaCheck className="text-[#36b649] mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/analysis/skin" className="inline-flex items-center text-[#5718e3] font-medium hover:underline">
                Learn more <FaArrowRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-gradient-to-r from-purple-100 to-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaBrain className="text-[#5718e3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a0b40]">CT Scan Analysis</h3>
              <p className="text-gray-600 mb-6">
                Identify abnormalities in CT scans with our advanced neural networks trained on comprehensive medical datasets.
              </p>
              <ul className="mb-6">
                {['Brain Tumor Detection', 'Hemorrhage Identification', 'Stroke Assessment'].map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FaCheck className="text-[#36b649] mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/analysis/ct-scan" className="inline-flex items-center text-[#5718e3] font-medium hover:underline">
                Learn more <FaArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the future of medical diagnostics?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join healthcare professionals worldwide using ZemedicAI for faster, more accurate medical imaging analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="inline-block bg-white text-[#5718e3] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link to="/demo" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#5718e3] font-bold py-3 px-8 rounded-lg text-lg">
              Try Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
