import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import HowItWorksSection from '../components/HowItWorksSection';
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
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
        <HowItWorksSection />
        <AfricanMapSection />
        <SolarBoothSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
