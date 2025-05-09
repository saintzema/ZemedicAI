import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaChartLine, FaUserMd, FaLock, FaMobileAlt, FaBrain } from 'react-icons/fa';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5718e3] to-[#36b649] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced AI Medical Imaging Analysis
              </h1>
              <p className="text-xl mb-8">
                ZemedicAI provides instant diagnosis for chest X-rays, skin lesions, and CT scans using state-of-the-art AI models.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="btn bg-white text-[#5718e3] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-center">
                  Get Started
                </Link>
                <Link to="/login" className="btn border-2 border-white text-white hover:bg-white hover:text-[#5718e3] font-bold py-3 px-8 rounded-lg text-center">
                  Log In
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1584555684040-bad07f46a21f" 
                alt="Chest X-ray example" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Advanced AI Medical Diagnostics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaStethoscope className="text-[#5718e3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Chest X-ray Analysis</h3>
              <p className="text-gray-600">
                Detect pneumonia, tuberculosis, lung masses, and other abnormalities with our AI-powered X-ray analysis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUserMd className="text-[#5718e3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Skin Lesion Detection</h3>
              <p className="text-gray-600">
                Analyze skin lesions and moles for early detection of melanoma and other skin conditions with high accuracy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaBrain className="text-[#5718e3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">CT Scan Insights</h3>
              <p className="text-gray-600">
                Identify abnormalities in CT scans with our advanced neural networks trained on comprehensive medical datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How ZemedicAI Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#5718e3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Upload Medical Image</h3>
              <p className="text-gray-600">
                Simply upload your chest X-ray, skin lesion photo, or CT scan through our secure interface.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#5718e3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our state-of-the-art AI models analyze the image using deep learning algorithms trained on vast medical datasets.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#5718e3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Receive Insights</h3>
              <p className="text-gray-600">
                Get instant results with detailed analysis, confidence scores, and recommended next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefits of ZemedicAI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaChartLine className="text-4xl text-[#36b649] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">Enhanced Accuracy</h3>
              <p className="text-center text-gray-300">
                AI models trained on extensive medical datasets provide high diagnostic accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaLock className="text-4xl text-[#36b649] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">Secure & Private</h3>
              <p className="text-center text-gray-300">
                Your medical data is encrypted and protected with industry-leading security measures.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaMobileAlt className="text-4xl text-[#36b649] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">Accessible Anywhere</h3>
              <p className="text-center text-gray-300">
                Access ZemedicAI from any device, anywhere, anytime you need medical insights.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserMd className="text-4xl text-[#36b649] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">Clinical Support</h3>
              <p className="text-center text-gray-300">
                Provides valuable second opinions to support healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#36b649] to-[#5718e3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience the future of medical diagnostics?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare professionals and patients using ZemedicAI for faster, more accurate medical imaging analysis.
          </p>
          <Link to="/register" className="inline-block bg-white text-[#5718e3] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
