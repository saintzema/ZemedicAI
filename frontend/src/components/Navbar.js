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
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Home
            </Link>
            <a href="#solutions" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Solutions
            </a>
            <a href="#deployment" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Deployment
            </a>
            <a href="#partners" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Partners
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="btn btn-outline text-sm py-1.5">
                Sign In
              </a>
              <a href="#" className="btn btn-primary text-sm py-1.5">
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#solutions" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#deployment" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Deployment
              </a>
              <a 
                href="#partners" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </a>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
