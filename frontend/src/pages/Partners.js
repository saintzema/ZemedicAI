import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PartnerCard = ({ name, type, description, image }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="h-40 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gray-700/30 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">{name}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs font-medium">
            {type}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading healthcare institutions, technology companies, governments, and NGOs to bring advanced AI diagnostics to communities across Africa.
            </p>
          </div>
          
          {/* Partners by Category */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Healthcare Partners</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PartnerCard 
                name="Kenyatta National Hospital"
                type="Healthcare Institution"
                description="Kenya's largest referral hospital partnering with us to implement AI diagnostics across their radiology department, serving over 700,000 patients annually."
              />
              
              <PartnerCard 
                name="Lagos University Teaching Hospital"
                type="Healthcare Institution"
                description="Nigeria's premier teaching hospital working with us to train the next generation of physicians on AI-assisted diagnostics while improving patient care."
              />
              
              <PartnerCard 
                name="Pan-African Medical Association"
                type="Professional Organization"
                description="Collaborating to establish best practices and clinical guidelines for the implementation of AI in diagnostic workflows across African healthcare systems."
              />
              
              <PartnerCard 
                name="Rural Health Network Ghana"
                type="Healthcare Provider"
                description="Network of 47 rural clinics utilizing our solar-powered diagnostic booths to bring advanced imaging capabilities to underserved communities."
              />
              
              <PartnerCard 
                name="East African Medical Consortium"
                type="Regional Organization"
                description="Regional consortium working with us to standardize AI implementation and share medical imaging data to improve AI performance across diverse populations."
              />
              
              <PartnerCard 
                name="Women's Health Initiative Senegal"
                type="Healthcare Provider"
                description="Focused on improving maternal healthcare through early detection of pregnancy complications using our ultrasound AI solutions."
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Technology Partners</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PartnerCard 
                name="Microsoft Africa Research"
                type="Technology Company"
                description="Providing cloud infrastructure and AI expertise to help scale our solutions across the continent while ensuring security and compliance."
              />
              
              <PartnerCard 
                name="Sunshine Solar Systems"
                type="Technology Provider"
                description="Developing custom solar power solutions optimized for our diagnostic booths to ensure reliable operation in areas with limited electricity."
              />
              
              <PartnerCard 
                name="AfriConnect Telecom"
                type="Telecommunications"
                description="Partnering to provide satellite and mobile connectivity solutions for our diagnostic systems, enabling remote monitoring and telehealth capabilities."
              />
              
              <PartnerCard 
                name="Medical Imaging Innovations"
                type="Medical Device Manufacturer"
                description="Collaborating on the development of low-cost, energy-efficient X-ray and ultrasound devices specifically designed for our diagnostic booths."
              />
              
              <PartnerCard 
                name="DataSecure Africa"
                type="Cybersecurity Firm"
                description="Ensuring the highest standards of data protection and patient privacy across all our systems and deployments."
              />
              
              <PartnerCard 
                name="Edge Computing Solutions"
                type="Technology Provider"
                description="Developing specialized hardware and software solutions that enable our AI to run efficiently on low-power devices without internet connectivity."
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Government & NGO Partners</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PartnerCard 
                name="Ministry of Health, Kenya"
                type="Government"
                description="Implementing our AI diagnostic solutions across 36 public hospitals as part of the national healthcare modernization program."
              />
              
              <PartnerCard 
                name="African Centers for Disease Control"
                type="Regional Organization"
                description="Utilizing our diagnostic network for early detection of disease outbreaks and epidemic monitoring across multiple African countries."
              />
              
              <PartnerCard 
                name="Doctors Without Borders"
                type="International NGO"
                description="Deploying our portable diagnostic solutions in emergency response situations and refugee camps across conflict-affected regions."
              />
              
              <PartnerCard 
                name="Bill & Melinda Gates Foundation"
                type="Foundation"
                description="Supporting the expansion of our tuberculosis detection program to reach 1.5 million people across rural East Africa."
              />
              
              <PartnerCard 
                name="United Nations Development Programme"
                type="International Organization"
                description="Partnering to integrate our AI diagnostics into sustainable development initiatives focusing on healthcare accessibility."
              />
              
              <PartnerCard 
                name="African Development Bank"
                type="Financial Institution"
                description="Providing financing mechanisms for hospitals and clinics to acquire and implement our AI diagnostic solutions."
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Research & Academic Partners</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PartnerCard 
                name="University of Nairobi Medical School"
                type="Academic Institution"
                description="Collaborating on research to improve AI diagnostic accuracy for conditions prevalent in African populations."
              />
              
              <PartnerCard 
                name="Stanford Center for AI in Medicine"
                type="Research Institution"
                description="Joint research initiative focusing on adapting advanced AI techniques for low-resource medical settings."
              />
              
              <PartnerCard 
                name="African AI Research Network"
                type="Research Consortium"
                description="Continental network of AI researchers working to improve healthcare outcomes through ethical AI implementation."
              />
              
              <PartnerCard 
                name="University of Cape Town"
                type="Academic Institution"
                description="Training the next generation of AI healthcare specialists through joint educational programs and internships."
              />
              
              <PartnerCard 
                name="Makerere University AI Lab"
                type="Research Institution"
                description="Collaborative development of specialized AI models for tropical diseases and conditions endemic to East Africa."
              />
              
              <PartnerCard 
                name="African Society of Radiology"
                type="Professional Organization"
                description="Working together to establish clinical validation protocols and measure real-world impact of AI diagnostic systems."
              />
            </div>
          </div>
          
          {/* Partnership Tiers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Partnership Opportunities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 rounded-xl p-8 border border-gray-800 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Clinical Partner</h3>
                <div className="mb-6 text-gray-300 flex-grow">
                  <p className="mb-4">
                    For healthcare facilities looking to implement our AI diagnostic solutions into their existing workflows.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Implementation support and training</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Customization for your specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Ongoing technical support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Regular AI model updates</span>
                    </li>
                  </ul>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center mt-4"
                >
                  Become a Clinical Partner
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 rounded-xl p-8 border border-purple-500/30 flex flex-col relative shadow-xl shadow-purple-500/10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Strategic Partner</h3>
                <div className="mb-6 text-gray-300 flex-grow">
                  <p className="mb-4">
                    For organizations looking to co-develop solutions and reach underserved communities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>All Clinical Partner benefits</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Joint implementation programs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Co-branded solutions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Shared impact measurement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Priority feature development</span>
                    </li>
                  </ul>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center mt-4"
                >
                  Become a Strategic Partner
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-900/80 rounded-xl p-8 border border-gray-800 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">Research Partner</h3>
                <div className="mb-6 text-gray-300 flex-grow">
                  <p className="mb-4">
                    For academic and research institutions looking to improve healthcare AI for African populations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Data sharing agreements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Joint research programs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Publication collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Academic training programs</span>
                    </li>
                  </ul>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium text-center mt-4"
                >
                  Become a Research Partner
                </Link>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Partners Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  Working with ZemedicAI has transformed how we deliver care at our rural clinics. The solar booths allow us to provide diagnostic services that would have been impossible before, and the integration with our existing systems was seamless.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Dr. Margaret Kuria</cite>
                      <p className="text-sm text-gray-400">Medical Director, Rural Health Network Ghana</p>
                    </div>
                  </div>
                </footer>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-800 relative">
                <div className="absolute -top-5 -left-5 text-6xl text-indigo-500 opacity-50">"</div>
                <p className="text-xl text-gray-200 mb-6 relative z-10">
                  Our partnership with ZemedicAI has accelerated our research on adaptive AI models for diverse populations. Their commitment to addressing healthcare disparities through technology aligns perfectly with our institutional mission.
                </p>
                <footer>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 mr-4"></div>
                    <div>
                      <cite className="font-medium text-white not-italic">Professor James Odhiambo</cite>
                      <p className="text-sm text-gray-400">Director of AI Research, University of Nairobi</p>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Interested in Partnering With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our mission to transform healthcare across Africa through innovative AI diagnostics. Let's explore how we can work together.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
            >
              Contact Our Partnership Team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;