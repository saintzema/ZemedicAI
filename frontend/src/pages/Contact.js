import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    interest: 'General Inquiry'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, you would send this data to your backend
    setSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you have questions about our solutions, want to schedule a demo, or explore partnership opportunities, we're here to help.
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-300 mb-4">
                Our support team is available Monday-Friday, 8am-6pm EAT
              </p>
              <a href="tel:+254123456789" className="text-purple-400 hover:text-purple-300 font-medium">
                +254 123 456 789
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-300 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <a href="mailto:info@zemedic.ai" className="text-purple-400 hover:text-purple-300 font-medium">
                info@zemedic.ai
              </a>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-300 mb-4">
                Our headquarters is located in Nairobi, with offices across Africa
              </p>
              <address className="text-purple-400 font-medium not-italic">
                Kilimani Business Center<br />
                Nairobi, Kenya
              </address>
            </div>
          </div>
          
          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              {submitted ? (
                <div className="bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-medium text-green-400">Thank you for reaching out!</h3>
                      <p className="mt-2 text-gray-300">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <div className="mt-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your organization"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">I'm interested in</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Demo">Product Demo</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Investment">Investment</option>
                        <option value="Career">Career Opportunities</option>
                        <option value="Support">Technical Support</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 mb-6">
                {/* This is a placeholder for a map - in a real implementation, you would use Google Maps or a similar service */}
                <div className="h-[400px] bg-gray-800 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Map of Africa" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                  <address className="text-gray-300 not-italic">
                    Kilimani Business Center<br />
                    5th Floor, Suite 503<br />
                    Nairobi, Kenya<br />
                    <br />
                    <span className="text-purple-400">+254 123 456 789</span>
                  </address>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-semibold mb-2">Lagos Office</h3>
                  <address className="text-gray-300 not-italic">
                    Victoria Island<br />
                    Tech Hub Building<br />
                    Lagos, Nigeria<br />
                    <br />
                    <span className="text-purple-400">+234 987 654 321</span>
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">What types of medical imaging does your AI analyze?</h3>
                <p className="text-gray-300">
                  Our AI solutions can analyze chest X-rays, CT scans (brain and chest), ultrasound images, skin lesion photos, and ECG readings. We're continuously expanding our capabilities to cover more imaging modalities.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">How do your solar-powered booths work without internet?</h3>
                <p className="text-gray-300">
                  Our solar booths feature edge computing technology that allows the AI to run locally without internet connectivity. The systems sync data and receive updates when connectivity is available, but can operate fully offline.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">What kind of support do you provide after installation?</h3>
                <p className="text-gray-300">
                  We provide comprehensive support including technical maintenance, AI updates, staff training, and remote monitoring. Our support packages are customizable based on your specific needs and resources.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">How do you ensure data privacy and security?</h3>
                <p className="text-gray-300">
                  Patient data privacy and security are paramount. We employ end-to-end encryption, secure local storage, and comply with international data protection standards. All data transmission follows strict security protocols.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/faq" className="text-purple-400 hover:text-purple-300 font-medium flex items-center justify-center">
                View all FAQs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Request Demo CTA */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">See Our Solutions in Action</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Request a personalized demonstration of our AI diagnostic solutions and see how they can transform healthcare delivery in your setting.
            </p>
            <Link 
              to="/demo" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium inline-block"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;