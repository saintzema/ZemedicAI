import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TeamMember = ({ name, title, image, bio }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="h-64 bg-gray-800 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-purple-400 font-medium mb-4">{title}</p>
        <p className="text-gray-300">{bio}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                About ZemedicAI
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Transforming Healthcare Across Africa
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                ZemedicAI was founded with a singular mission: to make expert-level medical diagnostics accessible to everyone across Africa, regardless of location or resources.
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-xl border border-purple-500/20">
                <p className="text-gray-300 italic">
                  "We're not just building AI - we're building healthcare infrastructure for the future of Africa, where quality diagnostics are available to all, not just the privileged few."
                </p>
                <p className="text-white font-medium mt-4">— Dr. Nnamdi Okonkwo, Founder & CEO</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="ZemedicAI Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Our Story Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  The Beginning
                </h3>
                <p className="text-gray-300 mb-4">
                  ZemedicAI began in 2018 when Dr. Nnamdi Okonkwo, a radiologist from Nigeria, and Sarah Kimani, a software engineer from Kenya, recognized a critical problem: across Africa, there was only one radiologist for every 1 million people.
                </p>
                <p className="text-gray-300">
                  This extreme shortage meant that patients in many areas waited weeks or months for imaging results, with many critical conditions going undiagnosed until it was too late. They envisioned using AI to bridge this gap.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                    alt="Healthcare challenges in Africa" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  The Journey
                </h3>
                <p className="text-gray-300 mb-4">
                  The journey wasn't easy. They faced skepticism about deploying advanced AI in resource-limited settings, challenges in gathering diverse training data that represented African populations, and hurdles in creating solutions that could work without reliable electricity or internet.
                </p>
                <p className="text-gray-300">
                  The breakthrough came in 2020 when they developed their first edge computing solution that could run advanced diagnostic AI on low-power devices, paired with solar-powered imaging booths. The first pilot in rural Kenya showed remarkable results.
                </p>
                
                <div className="mt-8 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Technological innovation" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
            
            <div className="relative border-l-2 border-purple-500/50 ml-6 pl-10 space-y-12">
              <div className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="absolute -left-11 top-5 w-0.5 h-full bg-purple-500/50"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="text-purple-400 font-semibold mb-2">2018</div>
                  <h3 className="text-xl font-bold mb-4">Foundation</h3>
                  <p className="text-gray-300">
                    ZemedicAI was founded in Nairobi, Kenya by Dr. Nnamdi Okonkwo and Sarah Kimani with the mission to make expert-level diagnostics accessible across Africa.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="absolute -left-11 top-5 w-0.5 h-full bg-purple-500/50"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="text-purple-400 font-semibold mb-2">2019</div>
                  <h3 className="text-xl font-bold mb-4">First AI Model</h3>
                  <p className="text-gray-300">
                    Developed our first chest X-ray interpretation AI model, trained on 100,000+ diverse X-rays from multiple African countries to ensure accurate performance across different demographics.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="absolute -left-11 top-5 w-0.5 h-full bg-purple-500/50"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="text-purple-400 font-semibold mb-2">2020</div>
                  <h3 className="text-xl font-bold mb-4">Solar Booth Innovation</h3>
                  <p className="text-gray-300">
                    Developed and deployed our first solar-powered diagnostic booth in rural Kenya, proving that advanced AI could work in areas with limited infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="absolute -left-11 top-5 w-0.5 h-full bg-purple-500/50"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="text-purple-400 font-semibold mb-2">2021</div>
                  <h3 className="text-xl font-bold mb-4">Series A Funding</h3>
                  <p className="text-gray-300">
                    Secured $12 million in Series A funding to expand operations across East Africa and develop additional diagnostic AI models for skin, CT, and ultrasound imaging.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="text-purple-400 font-semibold mb-2">2023</div>
                  <h3 className="text-xl font-bold mb-4">Expansion Across Africa</h3>
                  <p className="text-gray-300">
                    Now operating in 12 countries with over 140 employees, ZemedicAI's solutions have analyzed over 1.5 million medical images and served more than 750,000 patients across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-8 h-8 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize access to expert-level medical diagnostics across Africa, using AI technology to bridge the gap in specialist care and ensure that even the most remote communities have access to life-saving diagnostic services.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-xl border border-indigo-500/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-8 h-8 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A future where every person in Africa has access to quick, accurate, and affordable diagnostic care, breaking down the barriers of distance and resource limitations through innovative technology solutions adapted for local contexts.
              </p>
            </div>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember 
                name="Dr. Nnamdi Okonkwo"
                title="Founder & CEO"
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                bio="Radiologist with 15+ years of experience. Previously led medical imaging departments at Lagos University Teaching Hospital and worked with Doctors Without Borders across Africa."
              />
              
              <TeamMember 
                name="Sarah Kimani"
                title="Co-Founder & CTO"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                bio="AI engineer with background in computer vision. Previously developed edge computing solutions at IBM Research Africa and holds multiple patents in low-resource computing."
              />
              
              <TeamMember 
                name="Dr. Maya Abebe"
                title="Chief Medical Officer"
                image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                bio="Public health specialist with expertise in healthcare systems across East Africa. Led major WHO initiatives and helped design Ethiopia's rural healthcare program."
              />
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="bg-gray-900 rounded-xl p-10 border border-gray-800 mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">12</div>
                <p className="text-gray-300 font-medium">Countries</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">1.5M+</div>
                <p className="text-gray-300 font-medium">Images Analyzed</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">750K+</div>
                <p className="text-gray-300 font-medium">Patients Served</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">68</div>
                <p className="text-gray-300 font-medium">Solar Booths Deployed</p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-black/30 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="text-gray-300 mb-6 md:mb-0 md:mr-8">
                  In areas where ZemedicAI is deployed, we've seen a 42% reduction in diagnostic delays and a 28% improvement in early disease detection rates, directly saving thousands of lives.
                </p>
                <Link 
                  to="/case-studies" 
                  className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
          
          {/* Investors & Partners */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Investors & Partners</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-700/30 rounded flex items-center justify-center text-lg font-bold text-gray-400">Partner Logo</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/partners" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
              >
                View All Partners
              </Link>
            </div>
          </div>
          
          {/* Awards & Recognition */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Awards & Recognition</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-xl border border-gray-800">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1l2.928 6.097 6.582.95-4.759 4.638 1.123 6.545L10 16.223l-5.874 3.008 1.123-6.545L.49 8.047l6.582-.95L10 1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Company's Most Innovative Companies 2022</h3>
                <p className="text-gray-300">
                  Ranked #3 in Africa category for our innovative approach to healthcare delivery in resource-limited settings.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-xl border border-gray-800">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">World Economic Forum Technology Pioneer 2023</h3>
                <p className="text-gray-300">
                  Recognized for our contribution to solving critical healthcare challenges through innovative technology.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-xl border border-gray-800">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bill & Melinda Gates Foundation Global Health Innovation Prize 2022</h3>
                <p className="text-gray-300">
                  Awarded for our innovative approach to delivering diagnostic services in last-mile communities.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're looking to partner with us, invest in our mission, or join our growing team, we'd love to hear from you and explore how we can work together to transform healthcare in Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/careers" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Explore Careers
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-black border border-purple-500 text-purple-400 hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;