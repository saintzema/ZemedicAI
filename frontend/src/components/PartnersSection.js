import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'CDC',
      logo: 'https://via.placeholder.com/200x80/f5f5f5/5718e3?text=CDC',
    },
    {
      name: 'WHO',
      logo: 'https://via.placeholder.com/200x80/f5f5f5/5718e3?text=WHO',
    },
    {
      name: 'NHS',
      logo: 'https://via.placeholder.com/200x80/f5f5f5/5718e3?text=NHS',
    },
    {
      name: 'Mayo Clinic',
      logo: 'https://via.placeholder.com/200x80/f5f5f5/5718e3?text=Mayo+Clinic',
    },
    {
      name: 'Cleveland Clinic',
      logo: 'https://via.placeholder.com/200x80/f5f5f5/5718e3?text=Cleveland+Clinic',
    }
  ];

  const certifications = [
    {
      name: 'Medical Device Certification',
      logo: 'https://via.placeholder.com/120x120/f5f5f5/5718e3?text=CERTIFIED',
      title: 'MEDICAL DEVICE QUALITY',
      subtitle: 'MANAGEMENT CERTIFIED'
    },
    {
      name: 'Information Security',
      logo: 'https://via.placeholder.com/120x120/f5f5f5/5718e3?text=SECURITY',
      title: 'INFORMATION SECURITY',
      subtitle: 'MANAGEMENT CERTIFIED'
    },
    {
      name: 'X-Ray Association',
      logo: 'https://via.placeholder.com/120x120/f5f5f5/5718e3?text=X-RAY',
      title: 'MEMBER OF AXREM (UK)',
      subtitle: 'ASSOCIATION OF X-RAY EQUIPMENT MANUFACTURERS'
    }
  ];

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a0b40]">
            Some of our Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#5718e3]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-20 w-auto mb-4"
                />
                <h3 className="font-bold text-sm uppercase">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersSection;