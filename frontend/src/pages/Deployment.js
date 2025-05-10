import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DeploymentOption = ({ title, description, image, link, gradient }) => {
  return (
    <div className={`bg-gradient-to-br rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 ${gradient}`}>
      <div className="h-48 bg-gray-900 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-6">{description}</p>
        <Link 
          to={link} 
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Deployment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Flexible Deployment Options
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to work in any environment, from urban hospitals with advanced infrastructure to remote clinics with limited resources.
            </p>
          </div>
          
          {/* Deployment Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <DeploymentOption 
              title="Solar Booths"
              description="Self-contained diagnostic booths powered by solar energy, designed for remote areas with limited electricity and connectivity."
              image="https://images.unsplash.com/photo-1497435561182-05c977d9a798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              link="/deployment/solar-booths"
              gradient="from-purple-900/20 to-indigo-900/20"
            />
            
            <DeploymentOption 
              title="Telehealth"
              description="Integrate our AI diagnostic tools into your existing telehealth platform to enhance remote consultations with automated analysis."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              link="/deployment/telehealth"
              gradient="from-fuchsia-900/20 to-purple-900/20"
            />
            
            <DeploymentOption 
              title="Cloud API"
              description="Access our AI diagnostics through secure cloud APIs that integrate with your existing PACS, RIS, or hospital information systems."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              link="/deployment/cloud-api"
              gradient="from-indigo-900/20 to-blue-900/20"
            />
            
            <DeploymentOption 
              title="Mobile SDK"
              description="Embed our AI capabilities directly into your mobile health applications, enabling offline diagnostics on smartphones and tablets."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              link="/deployment/mobile-sdk"
              gradient="from-green-900/20 to-teal-900/20"
            />
            
            <DeploymentOption 
              title="Custom Solutions"
              description="Our team works with you to design and implement a custom deployment solution tailored to your specific needs and constraints."
              image="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              link="/deployment/custom-solutions"
              gradient="from-orange-900/20 to-red-900/20"
            />
          </div>
          
          {/* Compare Deployment Options */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Compare Deployment Options</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider w-1/4">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Solar Booths</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Telehealth</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Cloud API</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Mobile SDK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-gray-900/50">
                    <td className="px-6 py-4 text-sm font-medium text-white">Internet Requirement</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Optional</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Required</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Required</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Optional</td>
                  </tr>
                  <tr className="bg-gray-900/30">
                    <td className="px-6 py-4 text-sm font-medium text-white">Power Source</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Solar</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Grid</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Grid</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Battery</td>
                  </tr>
                  <tr className="bg-gray-900/50">
                    <td className="px-6 py-4 text-sm font-medium text-white">Integration Complexity</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Low</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">High</td>
                  </tr>
                  <tr className="bg-gray-900/30">
                    <td className="px-6 py-4 text-sm font-medium text-white">Initial Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">High</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Low</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Low</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Medium</td>
                  </tr>
                  <tr className="bg-gray-900/50">
                    <td className="px-6 py-4 text-sm font-medium text-white">Operational Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Low</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Low</td>
                  </tr>
                  <tr className="bg-gray-900/30">
                    <td className="px-6 py-4 text-sm font-medium text-white">Ideal Use Case</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Remote Areas</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Virtual Care</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Hospitals</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-300">Field Workers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Deployment Process */}
          <div className="bg-gray-900 rounded-xl p-8 mb-20 border border-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Deployment Process</h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessment</h3>
                <p className="text-gray-300">We evaluate your needs, infrastructure, and constraints to determine the best deployment option.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Planning</h3>
                <p className="text-gray-300">We create a detailed implementation plan tailored to your specific requirements and timeline.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-gray-300">Our team handles the technical setup, integration, and configuration of your solution.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Training</h3>
                <p className="text-gray-300">We provide comprehensive training for your staff to ensure smooth adoption and operation.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 -z-10"></div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-300">Ongoing technical support, maintenance, and updates ensure your solution performs optimally.</p>
              </div>
            </div>
          </div>
          
          {/* Deployment Stats */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Deployment Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">68</div>
                <p className="text-gray-300 font-medium">Solar Booths Deployed</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">124</div>
                <p className="text-gray-300 font-medium">Cloud API Integrations</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">32</div>
                <p className="text-gray-300 font-medium">Mobile App Integrations</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                <p className="text-gray-300 font-medium">Countries Served</p>
              </div>
            </div>
          </div>
          
          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Deployment Case Studies</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">Rural Kenya</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Solar Booth Network</h3>
                  <p className="text-gray-300 mb-4">Deployed 12 solar-powered diagnostic booths across rural Kenya, serving over 50,000 patients in the first year with a 97% uptime rate.</p>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                    Read Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-gradient-to-br from-indigo-900/50 to-blue-900/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">Lagos Teaching Hospital</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Cloud API Integration</h3>
                  <p className="text-gray-300 mb-4">Integrated our AI diagnostics with the hospital's existing PACS system, reducing diagnosis time by 78% and improving accuracy by 45%.</p>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                    Read Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-48 bg-gradient-to-br from-green-900/50 to-teal-900/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">Doctors Without Borders</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Mobile SDK Deployment</h3>
                  <p className="text-gray-300 mb-4">Equipped 200+ field workers with our mobile SDK, enabling diagnostic capabilities in conflict zones with minimal infrastructure.</p>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center font-medium">
                    Read Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI Diagnostics?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss the best deployment option for your healthcare facility, organization, or community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-3 bg-black border border-purple-500 text-purple-400 hover:bg-purple-900/20 rounded-lg font-medium"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deployment;