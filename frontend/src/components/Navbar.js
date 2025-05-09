import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useDemoMode } from '../contexts/DemoModeContext';
import { FaBars, FaTimes, FaUser, FaHistory, FaSignOutAlt, FaCog, FaFlask, FaBell } from 'react-icons/fa';
import ZemedicLogo from '../assets/zemedic-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const { demoMode, toggleDemoMode } = useDemoMode();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when location changes
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentUser ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <img src={ZemedicLogo} alt="ZemedicAI Logo" className="h-12 md:h-14 w-auto" />
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {currentUser ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'bg-purple-100 text-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Dashboard
                </Link>
                
                <div className="relative group">
                  <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    ['/analysis/xray', '/analysis/skin', '/analysis/ct-scan'].includes(location.pathname)
                      ? 'bg-purple-100 text-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    Analysis
                  </button>
                  <div className="absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        to="/analysis/xray"
                        className={`flex items-center px-4 py-2 text-sm ${
                          isActive('/analysis/xray') 
                            ? 'bg-purple-50 text-[#5718e3]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        role="menuitem"
                      >
                        <span className="bg-[#5718e3] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-2">X</span>
                        Chest X-Ray Analysis
                      </Link>
                      <Link
                        to="/analysis/skin"
                        className={`flex items-center px-4 py-2 text-sm ${
                          isActive('/analysis/skin') 
                            ? 'bg-green-50 text-[#36b649]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        role="menuitem"
                      >
                        <span className="bg-[#36b649] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-2">S</span>
                        Skin Lesion Analysis
                      </Link>
                      <Link
                        to="/analysis/ct-scan"
                        className={`flex items-center px-4 py-2 text-sm ${
                          isActive('/analysis/ct-scan') 
                            ? 'bg-gradient-to-r from-purple-50 to-green-50 text-[#5718e3]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        role="menuitem"
                      >
                        <span className="bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs mr-2">C</span>
                        CT Scan Analysis
                      </Link>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/history" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/history') 
                      ? 'bg-purple-100 text-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  History
                </Link>
                
                <div className="flex items-center ml-4 bg-gray-100 rounded-full p-1">
                  <span className={`flex items-center transition-colors px-2 py-1 text-xs font-medium rounded-full ${demoMode ? 'bg-white text-[#5718e3] shadow-sm' : 'text-gray-600'}`}>
                    <FaFlask className="mr-1" />
                    Demo
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer mx-1">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={demoMode}
                      onChange={toggleDemoMode}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5718e3]"></div>
                  </label>
                  <span className={`flex items-center transition-colors px-2 py-1 text-xs font-medium rounded-full ${!demoMode ? 'bg-white text-[#36b649] shadow-sm' : 'text-gray-600'}`}>
                    <FaCog className="mr-1" />
                    Live
                  </span>
                </div>
                
                <div className="relative ml-2">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </button>
                  
                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="p-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900 truncate">{currentUser.name || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                      </div>
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <FaUser className="mr-3 text-gray-500" />
                          Profile
                        </Link>
                        <Link
                          to="/history"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <FaHistory className="mr-3 text-gray-500" />
                          History
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <FaSignOutAlt className="mr-3 text-gray-500" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'bg-purple-100 text-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-[#5718e3] to-[#36b649] hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            {currentUser && (
              <div className="flex items-center mr-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={demoMode}
                    onChange={toggleDemoMode}
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5718e3]"></div>
                </label>
                <span className="ml-1 text-xs font-medium text-gray-600">
                  {demoMode ? 'Demo' : 'Live'}
                </span>
              </div>
            )}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {currentUser ? (
              <>
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-[#5718e3] to-[#36b649] flex items-center justify-center text-white">
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{currentUser.name || 'User'}</div>
                      <div className="text-sm font-medium text-gray-500">{currentUser.email}</div>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <div className="relative">
                        <button
                          type="button"
                          className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <FaBell className="h-5 w-5" />
                        </button>
                        <div className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#5718e3] ring-2 ring-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/dashboard"
                  className={`block px-4 py-2 text-base font-medium ${
                    isActive('/dashboard') 
                      ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Dashboard
                </Link>
                
                <div className="border-t border-gray-200 pt-2">
                  <div className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Analysis
                  </div>
                  <Link
                    to="/analysis/xray"
                    className={`block pl-6 pr-4 py-2 text-base font-medium ${
                      isActive('/analysis/xray') 
                        ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Chest X-Ray Analysis
                  </Link>
                  <Link
                    to="/analysis/skin"
                    className={`block pl-6 pr-4 py-2 text-base font-medium ${
                      isActive('/analysis/skin') 
                        ? 'bg-green-50 text-[#36b649] border-l-4 border-[#36b649]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Skin Lesion Analysis
                  </Link>
                  <Link
                    to="/analysis/ct-scan"
                    className={`block pl-6 pr-4 py-2 text-base font-medium ${
                      isActive('/analysis/ct-scan') 
                        ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    CT Scan Analysis
                  </Link>
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-base font-medium ${
                      isActive('/profile') 
                        ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/history"
                    className={`block px-4 py-2 text-base font-medium ${
                      isActive('/history') 
                        ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    History
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`block px-4 py-2 text-base font-medium ${
                    isActive('/') 
                      ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-base font-medium ${
                    isActive('/login') 
                      ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`block px-4 py-2 text-base font-medium ${
                    isActive('/register') 
                      ? 'bg-purple-50 text-[#5718e3] border-l-4 border-[#5718e3]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;