import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-[#5718e3] to-[#36b649] rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-3">
                Z
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#5718e3] to-[#36b649] bg-clip-text text-transparent">
                ZemedicAI
              </h2>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Advanced AI-powered diagnostic platform for medical imaging analysis of chest X-rays, 
              skin lesions, and CT scans. Providing healthcare professionals with fast, accurate insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5718e3] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5718e3] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5718e3] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5718e3] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#5718e3] to-[#36b649] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/analysis/xray" className="text-gray-300 hover:text-white transition-colors">
                  Chest X-ray Analysis
                </Link>
              </li>
              <li>
                <Link to="/analysis/skin" className="text-gray-300 hover:text-white transition-colors">
                  Skin Lesion Detection
                </Link>
              </li>
              <li>
                <Link to="/analysis/ct-scan" className="text-gray-300 hover:text-white transition-colors">
                  CT Scan Analysis
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Medical API Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#5718e3] to-[#36b649] bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-[#5718e3] mt-0.5 mr-3" />
                <span className="text-gray-300">
                  123 Medical Center Drive<br />
                  San Francisco, CA 94158
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-[#36b649] mr-3" />
                <a href="tel:+14155550123" className="text-gray-300 hover:text-white transition-colors">
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-[#5718e3] mr-3" />
                <a href="mailto:contact@zemedic.ai" className="text-gray-300 hover:text-white transition-colors">
                  contact@zemedic.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ZemedicAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-[#5718e3] to-[#36b649] h-2"></div>
    </footer>
  );
};

export default Footer;