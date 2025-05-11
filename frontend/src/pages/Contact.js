import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultType = queryParams.get('type');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    country: '',
    interestType: defaultType || 'general',
    message: '',
  });

  const interestTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booth', label: 'Solar-Powered Diagnostic Booth' },
    { value: 'sdk', label: 'SDK Integration for Existing Equipment' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'demo', label: 'Request a Demo' },
    { value: 'support', label: 'Technical Support' }
  ];

  // Set default interest type based on URL parameter when component mounts
  useEffect(() => {
    if (defaultType) {
      setFormData(prev => ({
        ...prev,
        interestType: defaultType
      }));
    }
  }, [defaultType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your interest in ZemedicAI! We will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      country: '',
      interestType: 'general',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow py-12 page-transition">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">Contact ZemedicAI</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or interested in our AI diagnostic solutions? 
              We're here to help you bring advanced healthcare technology to your facility.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
                <h2 className="heading-secondary-gradient mb-6">
                  <span>Get in Touch</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-white mb-2">Organization/Hospital</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="Your organization"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-white mb-2">Country*</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      placeholder="Your country"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interestType" className="block text-white mb-2">I'm interested in*</label>
                    <select
                      id="interestType"
                      name="interestType"
                      value={formData.interestType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    >
                      {interestTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 sticky top-8">
                <h2 className="heading-card mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 border border-purple-800/30">
                      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <a href="mailto:hello@zemaai.com" className="text-purple-400 hover:text-purple-300">hello@zemaai.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 border border-purple-800/30">
                      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-400">+254 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4 border border-purple-800/30">
                      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Headquarters</h3>
                      <p className="text-gray-400">
                        Innovation Hub<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6 mt-6">
                    <h3 className="text-white font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", name: "Twitter" },
                        { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", name: "Facebook" },
                        { icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", name: "Instagram" },
                        { icon: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z", name: "LinkedIn" }
                      ].map((social, index) => (
                        <a 
                          key={index} 
                          href="#" 
                          className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                          aria-label={social.name}
                        >
                          <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions about contacting ZemedicAI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer: "We aim to respond to all inquiries within 24-48 hours during business days."
                },
                {
                  question: "I'm interested in a demo. What's the process?",
                  answer: "Select 'Request a Demo' from the dropdown menu, and our team will schedule a personalized demo tailored to your specific needs."
                },
                {
                  question: "Do you offer solutions outside of Africa?",
                  answer: "Yes, while our primary focus is on the African continent, we do offer our solutions globally. Contact us for specific availability in your region."
                },
                {
                  question: "What information should I include for a preorder inquiry?",
                  answer: "For preorders, please include your organization type, number of units you're interested in, and your target deployment timeline to help us better understand your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;