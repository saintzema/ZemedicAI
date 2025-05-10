import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import ZemedicLogo from './ZemedicLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  
  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
  };
  
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black shadow-md border-b border-gray-800">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ZemedicLogo className="h-10 w-auto" fill="#ffffff" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                to="/solutions" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors flex items-center"
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
              >
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              
              {/* Solutions Dropdown */}
              {showSolutionsDropdown && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-20"
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                >
                  <div className="p-2">
                    <Link to="/solutions/xray" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-md">
                      X-Ray Analysis
                    </Link>
                    <Link to="/solutions/skin" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-md">
                      Skin Lesion Detection
                    </Link>
                    <Link to="/solutions/ct-scan" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded-md">
                      CT Scan Interpretation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/deployment" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
              Deployment
            </Link>
            
            <Link to="/partners" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
              Partners
            </Link>
            
            <Link to="/about" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
              About Us
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/demo" className="btn-outline text-sm py-1.5 px-5 border border-purple-500 text-purple-400 hover:bg-purple-600/10 rounded-md transition-colors">
                Web Demo
              </Link>
              <Link to="/contact" className="btn-primary text-sm py-1.5 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <div>
                <div
                  className="px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded flex justify-between items-center"
                  onClick={toggleSolutionsDropdown}
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                
                {showSolutionsDropdown && (
                  <div className="ml-4 mt-2 border-l border-gray-800 pl-4 space-y-2">
                    <Link
                      to="/solutions/xray"
                      className="block py-2 text-sm text-gray-400 hover:text-purple-400"
                      onClick={closeMobileMenu}
                    >
                      X-Ray Analysis
                    </Link>
                    <Link
                      to="/solutions/skin"
                      className="block py-2 text-sm text-gray-400 hover:text-purple-400"
                      onClick={closeMobileMenu}
                    >
                      Skin Lesion Detection
                    </Link>
                    <Link
                      to="/solutions/ct-scan"
                      className="block py-2 text-sm text-gray-400 hover:text-purple-400"
                      onClick={closeMobileMenu}
                    >
                      CT Scan Interpretation
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/deployment"
                className="px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded"
                onClick={closeMobileMenu}
              >
                Deployment
              </Link>
              
              <Link
                to="/partners"
                className="px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded"
                onClick={closeMobileMenu}
              >
                Partners
              </Link>
              
              <Link
                to="/about"
                className="px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              
              <Link
                to="/demo"
                className="px-4 py-2 text-purple-400 hover:text-purple-300 hover:bg-gray-800 rounded border border-purple-500/50"
                onClick={closeMobileMenu}
              >
                Web Demo
              </Link>
              
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 rounded"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;