import React, { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import AfricanMapSection from '../components/AfricanMapSection';
import SolarBoothSection from '../components/SolarBoothSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const Landing = () => {
  useEffect(() => {
    // Scroll to top when landing page is loaded
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'ZemedicAI - AI-Powered Medical Diagnostics for Africa';
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <AfricanMapSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <SolutionsSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <SolarBoothSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <PartnersSection />
        </ErrorBoundary>
        
        {/* Call to Action Section */}
        <ErrorBoundary>
          <section className="py-16 bg-gradient-secondary text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bring Advanced AI Diagnostics to Your Healthcare Facility
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of healthcare providers across Africa who are using ZemedicAI to improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/register" className="btn bg-white text-indigo-600 hover:bg-gray-100 text-center">
                  Get Started
                </a>
                <a href="#" className="btn bg-transparent border-2 border-white hover:bg-white/10 text-center">
                  Request Demo
                </a>
              </div>
            </div>
          </section>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Landing;
