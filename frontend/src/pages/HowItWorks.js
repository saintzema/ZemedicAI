import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnhancedBeforeAfterSlider from '../components/EnhancedBeforeAfterSlider';

const HowItWorks = () => {
  // Using local image paths instead of Google Drive URLs
  const cxrBeforeImage = "/images/cxr-before.jpg";
  const cxrAfterImage = "/images/cxr-after.jpg";
  const cthBeforeImage = "/images/cth-before.jpg";
  const cthAfterImage = "/images/cth-after.jpg";

  // AI Detection box data for CT brain scan - revised to be more accurate to image
  const brainAIDetections = [
    {
      x: 45,
      y: 35,
      width: 20,
      height: 20,
      color: '#FFCC00', // Yellow
      label: 'Temporal Lobe Lesion',
      confidence: 96,
      description: 'Abnormal tissue density detected in right temporal lobe',
      labelPosition: { x: -5, y: -5 }
    },
    {
      x: 50,
      y: 40,
      width: 12,
      height: 12,
      color: '#00CCFF', // Blue
      label: 'Mass Effect',
      confidence: 92,
      description: 'Indicates pressure on surrounding tissue',
      labelPosition: { x: 5, y: 8 }
    },
    {
      x: 42,
      y: 48,
      width: 10,
      height: 10,
      color: '#FF3366', // Red
      label: 'Edema',
      confidence: 88,
      description: 'Fluid accumulation in surrounding tissue',
      labelPosition: { x: -8, y: 5 }
    }
  ];

  // AI Detection box data for chest X-ray - revised to be more accurate to image
  const chestAIDetections = [
    {
      x: 45,
      y: 40,
      width: 20,
      height: 20,
      color: '#FF3366', // Red
      label: 'Infiltrate',
      confidence: 94,
      description: 'Abnormal opacity in left upper lobe',
      labelPosition: { x: 0, y: -5 }
    },
    {
      x: 50,
      y: 58,
      width: 15,
      height: 15,
      color: '#FFCC00', // Yellow
      label: 'Consolidation',
      confidence: 89,
      description: 'Consolidation in lower left lobe',
      labelPosition: { x: 5, y: 2 }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow py-10 page-transition">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              How ZemedicAI Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our advanced AI technology transforms medical diagnostics, making expert-level analysis accessible across Africa.
            </p>
          </div>
          
          {/* Overview Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Powerful AI, <span className="text-purple-400">Simple Process</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                ZemedicAI uses state-of-the-art deep learning models specifically trained on diverse African population data to ensure accurate diagnostics regardless of patient demographics or equipment variations.
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Image Acquisition</h3>
                    <p className="text-gray-300">
                      A medical image is captured using standard imaging equipment or uploaded from an existing source.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Analysis</h3>
                    <p className="text-gray-300">
                      Our proprietary neural networks analyze the image, identifying patterns and abnormalities with pinpoint accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Results Generation</h3>
                    <p className="text-gray-300">
                      Detailed diagnostic insights are generated, including confidence scores and visual heatmap indications of detected conditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Review</h3>
                    <p className="text-gray-300">
                      Results are presented to healthcare professionals who can make informed clinical decisions based on the AI analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl overflow-hidden border border-gray-800 p-6">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1306&q=80" 
                alt="AI Analysis Process" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-gray-300 text-sm italic">
                ZemedicAI processes and analyzes medical images in seconds, providing clinicians with immediate diagnostic insights.
              </p>
            </div>
          </div>
          
          {/* Technologies Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Advanced Technologies</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Deep Neural Networks</h3>
                <p className="text-gray-300">
                  Our convolutional neural networks (CNNs) feature over 250 layers specifically optimized for medical imaging analysis, enabling detection of even subtle findings.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Heat Map Visualization</h3>
                <p className="text-gray-300">
                  Our AI generates multi-colored heat maps that highlight regions of interest with varying colors to indicate different finding types and confidence levels.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Explainable AI</h3>
                <p className="text-gray-300">
                  Our models don't just make predictions; they highlight the specific regions and features that influenced the diagnosis, improving clinical trust and understanding.
                </p>
              </div>
            </div>
          </div>
          
          {/* Before/After Slider Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">See The Difference</h2>
            <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
              Drag the slider to compare raw medical images with ZemedicAI's enhanced diagnostic visualization. See how our AI highlights areas of interest with colored heatmaps and provides detailed findings.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <EnhancedBeforeAfterSlider 
                beforeImage={cxrBeforeImage}
                afterImage={cxrAfterImage}
                title="Chest X-Ray Analysis"
                description="See how ZemedicAI identifies and highlights lung opacities, nodules, and other abnormalities in chest X-rays, providing detailed localization of findings."
                aiBoundingBoxes={chestAIDetections}
              />
              
              <EnhancedBeforeAfterSlider 
                beforeImage={cthBeforeImage}
                afterImage={cthAfterImage}
                title="Brain CT Scan Interpretation"
                description="Observe how our AI detects and visualizes hemorrhages, infarcts, and other critical conditions in brain CT scans with precise region highlighting."
                aiBoundingBoxes={brainAIDetections}
              />
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/demo" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Try The Demo
              </Link>
            </div>
          </div>
          
          {/* How AI Detection Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Understanding AI Heatmaps</h2>
            <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
              Our AI generates multicolored heatmaps to highlight potential areas of concern, with different colors representing different findings.
            </p>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg" style={{ background: 'radial-gradient(circle, rgba(255,51,102,0.8) 0%, rgba(255,51,102,0.4) 50%, rgba(255,51,102,0.1) 100%)' }}></div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Red Regions</h3>
                  <p className="text-gray-300 text-sm">
                    Indicate high-priority findings that may require immediate attention, such as hemorrhages, pneumothorax, or severe infections.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg" style={{ background: 'radial-gradient(circle, rgba(255,204,0,0.8) 0%, rgba(255,204,0,0.4) 50%, rgba(255,204,0,0.1) 100%)' }}></div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Yellow Regions</h3>
                  <p className="text-gray-300 text-sm">
                    Highlight moderate-priority findings such as nodules, masses, consolidations, or moderate tissue abnormalities.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg" style={{ background: 'radial-gradient(circle, rgba(0,204,255,0.8) 0%, rgba(0,204,255,0.4) 50%, rgba(0,204,255,0.1) 100%)' }}></div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Blue Regions</h3>
                  <p className="text-gray-300 text-sm">
                    Show secondary findings or associated effects, like edema, mild opacities, or anatomical variations.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Color Intensity Indicates Confidence</h3>
                <p className="text-gray-300 text-center mb-6">
                  The brightness and opacity of the colored regions correspond to the AI's confidence level in the detected abnormality.
                </p>
                <div className="flex justify-center items-center gap-2 md:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg opacity-30" style={{ background: '#FFCC00' }}></div>
                    <p className="text-xs text-gray-400">Low Confidence<br/>(50-70%)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg opacity-60" style={{ background: '#FFCC00' }}></div>
                    <p className="text-xs text-gray-400">Medium Confidence<br/>(70-90%)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg opacity-90" style={{ background: '#FFCC00' }}></div>
                    <p className="text-xs text-gray-400">High Confidence<br/>(90-100%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Training Process */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Training Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                <p className="text-gray-300">We've collected over 1 million diverse medical images from across Africa to ensure our models work for all populations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Annotation</h3>
                <p className="text-gray-300">Every training image is meticulously annotated by at least 3 experienced radiologists to ensure ground truth accuracy.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Model Training</h3>
                <p className="text-gray-300">Our deep learning models are trained on powerful GPU clusters, continuously optimizing for accuracy and sensitivity.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clinical Validation</h3>
                <p className="text-gray-300">Models undergo rigorous clinical validation in real-world settings before deployment, ensuring safety and efficacy.</p>
              </div>
            </div>
          </div>
          
          {/* Clinical Performance */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Clinical Performance</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-purple-500/30 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">97%</div>
                <h3 className="text-xl font-semibold mb-4">Sensitivity for Critical Findings</h3>
                <p className="text-gray-300">
                  Our chest X-ray algorithm achieves 97% sensitivity for detecting pneumonia, tuberculosis, and other critical conditions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-purple-500/30 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">94%</div>
                <h3 className="text-xl font-semibold mb-4">Overall Accuracy</h3>
                <p className="text-gray-300">
                  Across all conditions and image types, ZemedicAI achieves a 94% average accuracy rate, comparable to specialist radiologists.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl border border-purple-500/30 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">&lt;20s</div>
                <h3 className="text-xl font-semibold mb-4">Analysis Time</h3>
                <p className="text-gray-300">
                  Complete analysis results are delivered in less than 20 seconds, compared to hours or days for traditional radiologist reading.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-500/20 relative">
              <div className="absolute -top-5 -left-5 text-6xl text-purple-500 opacity-50">"</div>
              <p className="text-xl text-gray-200 mb-6 relative z-10">
                What impresses me most about ZemedicAI is not just the accuracy, but how it highlights exactly where to look with the colored heatmaps. When it detects a subtle pneumothorax or early tuberculosis, it shows me precisely where the finding is located, with different colors indicating the type of abnormality. It's like having a tireless expert assistant, especially valuable in our understaffed rural clinics.
              </p>
              <footer>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-700 mr-4"></div>
                  <div>
                    <cite className="font-medium text-white not-italic">Dr. Amina Diallo</cite>
                    <p className="text-sm text-gray-400">Chief Radiologist, Kenyatta National Hospital</p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-10 text-center border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience ZemedicAI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              See how our AI can transform healthcare delivery at your facility, from major hospitals to rural clinics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/demo" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium"
              >
                Try Demo
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

export default HowItWorks;