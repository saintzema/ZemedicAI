import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import ZemedicLogo from './ZemedicLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ZemedicLogo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Solutions
            </a>
            <a href="#deployment" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Deployment
            </a>
            <a href="#partners" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Partners
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About Us
            </a>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="btn btn-outline text-sm py-1.5 px-5">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary text-sm py-1.5 px-5">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#deployment" 
                className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Deployment
              </a>
              <a 
                href="#partners" 
                className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </a>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <Link 
                to="/login" 
                className="px-4 py-2 text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
