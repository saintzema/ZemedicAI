import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import ZemedicLogo from './ZemedicLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

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
            <Link to="/#solutions" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Solutions
            </Link>
            <Link to="/#deployment" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Deployment
            </Link>
            <Link to="/#partners" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Partners
            </Link>
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="btn btn-outline text-sm py-1.5">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-primary text-sm py-1.5"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn btn-outline text-sm py-1.5">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary text-sm py-1.5">
                  Sign Up
                </Link>
              </div>
            )}
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
              <Link 
                to="/#solutions" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/#deployment" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Deployment
              </Link>
              <Link 
                to="/#partners" 
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              {currentUser ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
