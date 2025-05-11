import React, { useState, useEffect } from 'react';

/**
 * Enhanced Analysis Result component with AI heatmap overlay
 *  
 * This component displays the analyzed medical image with an AI-generated
 * heatmap overlay showing areas of interest highlighted by color based on
 * condition and confidence.
 */
const EnhancedAnalysisResult = ({ 
  image, 
  conditions, 
  activeCondition,
  onConditionClick,
  findings,
  confidence,
  recommendation
}) => {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [brightnessValue, setBrightnessValue] = useState(100);
  const [contrastValue, setContrastValue] = useState(100);
  const [showExplanation, setShowExplanation] = useState(false);
  const [activeExplanation, setActiveExplanation] = useState(null);

  // Create SVG heatmap overlay
  const createHeatmapMask = () => {
    // Only show conditions with a location and probability > 20
    const displayableConditions = conditions.filter(c => c.location && c.probability > 20);
    
    if (displayableConditions.length === 0) return null;
    
    const maskSvg = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          ${displayableConditions.map((condition, idx) => `
            <radialGradient id="heatGradient${idx}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.7}" />
              <stop offset="70%" stop-color="${getColorForCondition(condition)}" stop-opacity="${condition.probability/100 * 0.4}" />
              <stop offset="100%" stop-color="${getColorForCondition(condition)}" stop-opacity="0" />
            </radialGradient>
          `).join('')}
        </defs>
        ${displayableConditions.map((condition, idx) => `
          <ellipse 
            cx="${condition.location.x}%" 
            cy="${condition.location.y}%" 
            rx="${condition.location.radius}%" 
            ry="${condition.location.radius}%" 
            fill="url(#heatGradient${idx})" 
          />
        `).join('')}
      </svg>
    `;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(maskSvg)}`;
  };

  // Get appropriate color based on condition severity and type
  const getColorForCondition = (condition) => {
    if (condition.severity === 'Severe') return '#FF3366'; // Red for severe conditions
    if (condition.severity === 'Moderate') return '#FFCC00'; // Yellow for moderate
    return '#00CCFF'; // Blue for mild/none
  };

  const handleBrightnessChange = (e) => {
    setBrightnessValue(parseInt(e.target.value));
  };

  const handleContrastChange = (e) => {
    setContrastValue(parseInt(e.target.value));
  };

  // Patient-friendly explanations for various conditions
  const getConditionExplanation = (conditionName) => {
    const explanations = {
      // X-ray conditions
      'Pneumonia': 'An infection that causes inflammation in the air sacs of your lungs, which can fill with fluid. This appears as white patches or areas of cloudiness on X-rays.',
      'Pleural Effusion': 'A buildup of excess fluid between the layers of tissue that line your lungs and chest cavity. This appears as a white area at the bottom of the lung on X-rays.',
      'Cardiomegaly': 'An enlarged heart, which can be caused by various conditions including high blood pressure or heart disease. This appears as an enlarged heart shadow on X-rays.',
      'Atelectasis': 'A partial or complete collapse of a lung or lobe of a lung. This appears as an area of increased density or whiteness on X-rays.',
      'Lung Opacity': 'A general term for any area that appears whiter than normal on a chest X-ray, which could indicate inflammation, infection, or fluid.',
      'Pulmonary Edema': 'Excess fluid in the lungs, often due to heart problems. This appears as increased whiteness throughout the lungs on X-rays.',
      'Pneumothorax': 'Air trapped between the lung and chest wall, causing the lung to collapse. This appears as a dark area without lung markings on X-rays.',
      'Tuberculosis': 'A bacterial infection that primarily affects the lungs. On X-rays, it often appears as patchy areas of whiteness, typically in the upper parts of the lungs.',
      'Lung Nodule': 'A small round or oval-shaped growth in the lung. It appears as a round white spot on X-rays.',
      'Emphysema': 'A condition that damages the air sacs in your lungs, making it difficult to breathe. X-rays may show increased darkness of the lungs and a flattened diaphragm.',
      'Fibrosis': 'Scarring of lung tissue, which can be caused by various conditions. It appears as white lines or patches on X-rays.',
      'Hilar Enlargement': 'Enlargement of the area where blood vessels and airways enter the lungs. This appears as an enlarged white area in the center of the chest on X-rays.',
      
      // CT scan conditions
      'Normal Brain': 'The scan shows brain tissue with normal appearance and no significant abnormalities.',
      'Intracranial Hemorrhage': 'Bleeding inside the skull, which can put pressure on the brain. This appears as a bright white area on CT scans.',
      'Subarachnoid Hemorrhage': 'Bleeding in the space between the brain and the thin tissues that cover it. This appears as white areas following the brain\'s surface on CT scans.',
      'Subdural Hematoma': 'A collection of blood between the surface of the brain and its tough outer covering. This appears as a crescent-shaped white area on CT scans.',
      'Epidural Hematoma': 'A collection of blood between the skull and the tough outer covering of the brain. This appears as a lens-shaped white area on CT scans.',
      'Intraparenchymal Hemorrhage': 'Bleeding within the brain tissue itself. This appears as an irregular white area within the brain on CT scans.',
      'Ischemic Stroke': 'A blockage of blood flow to part of the brain, causing that area to die. Early CT scans may look normal, but later scans show a dark area where the stroke occurred.',
      'Cerebral Infarction': 'An area of dead brain tissue caused by a lack of blood supply. This appears as a dark area on CT scans.',
      'Cerebral Aneurysm': 'A bulge in a blood vessel in the brain, which could potentially rupture. This may appear as a round area on CT scans with contrast.',
      'Brain Tumor': 'An abnormal growth of cells in the brain. Depending on the type, it may appear as a white or dark area, often with surrounding swelling on CT scans.',
      'Mass Effect': 'Pressure on the brain caused by a tumor, bleeding, or swelling, pushing normal brain structures out of position. This appears as a shift in normal brain anatomy on CT scans.',
      'Midline Shift': 'When structures in the center of the brain are pushed to one side, usually due to pressure from a tumor, bleeding, or swelling. This appears as an asymmetry in the brain\'s center line on CT scans.',
      'Hydrocephalus': 'A buildup of fluid in the brain\'s ventricles (fluid spaces), putting pressure on the brain. This appears as enlarged, dark fluid spaces on CT scans.',
      'Brain Atrophy': 'Shrinkage of brain tissue, which can occur with aging or certain diseases. This appears as enlarged dark spaces around and within the brain on CT scans.',
      'Cerebral Edema': 'Swelling in the brain caused by excess fluid. This appears as areas of decreased density (darker) with loss of the normal gray-white differentiation on CT scans.',
      'Sinusitis': 'Inflammation of the sinuses, which are air-filled spaces in the skull. This appears as white areas filling normally dark air spaces on CT scans.',
      'Chronic Microvascular Changes': 'Small changes in the brain\'s tiny blood vessels, often due to high blood pressure or diabetes over time. These appear as small dark spots or areas on specialized CT scans.',
      'Calcifications': 'Deposits of calcium in brain tissue, which can be normal or caused by various conditions. These appear as very bright white spots on CT scans.',
      
      // Skin conditions
      'Melanoma': 'A serious form of skin cancer that begins in the cells that produce melanin (the pigment that gives skin its color). It often appears as an irregular, dark-colored spot that changes in size, shape, or color.',
      'Basal Cell Carcinoma': 'The most common type of skin cancer, which rarely spreads to other parts of the body but can cause local damage. It often appears as a pearly or waxy bump, a flat, flesh-colored lesion, or a bleeding or scabbing sore that doesn't heal.',
      'Squamous Cell Carcinoma': 'A common form of skin cancer that can spread to other parts of the body if left untreated. It often appears as a firm, red nodule or a flat lesion with a scaly, crusted surface.',
      'Benign Nevus': 'A common, non-cancerous mole. These are typically round or oval, with smooth edges and consistent color (often brown, tan, or flesh-colored).',
      'Seborrheic Keratosis': 'A common, non-cancerous skin growth that often appears in older adults. These look like waxy, stuck-on growths and can be brown, black, or tan.',
      'Actinic Keratosis': 'A rough, scaly patch on the skin caused by years of sun exposure. It's considered a pre-cancerous growth that may develop into skin cancer if left untreated.',
      'Dermatofibroma': 'A common, non-cancerous skin growth that often forms after minor injury to the skin. It appears as a small, firm bump that\'s usually pink, gray, red, or brown.',
      'Vascular Lesion': 'An abnormal cluster of blood vessels that can appear as a red or purple mark on the skin. Common types include hemangiomas and port-wine stains.',
      'Angioma': 'A benign tumor made up of small blood vessels. These appear as small, bright red spots on the skin, commonly known as cherry angiomas.',
      'Dermatitis': 'Inflammation of the skin that can cause an itchy rash, swelling, and redness. There are many types, including eczema and contact dermatitis.',
      'Psoriasis': 'A chronic skin condition that causes cells to build up rapidly on the skin\'s surface, forming red, scaly patches that can be itchy and painful.',
      'Rosacea': 'A chronic skin condition that causes redness, visible blood vessels, and sometimes small, red, pus-filled bumps on the face.'
    };
    
    return explanations[conditionName] || 'No detailed explanation available for this condition.';
  };

  const handleConditionHover = (condition) => {
    setActiveExplanation(condition.name);
  };

  const handleConditionLeave = () => {
    if (!showExplanation) {
      setActiveExplanation(null);
    }
  };

  const toggleExplanation = (condition) => {
    if (activeExplanation === condition.name && showExplanation) {
      setShowExplanation(false);
      setActiveExplanation(null);
    } else {
      setShowExplanation(true);
      setActiveExplanation(condition.name);
    }
  };

  return (
    <div className="space-y-6">
      {/* Image Viewer with Heatmap */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800 flex justify-between items-center">
          <h2 className="heading-subsection">AI Analysis Results</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowHeatmap(!showHeatmap)}
              className={`px-3 py-1.5 rounded text-xs ${showHeatmap 
                ? 'bg-purple-800 text-purple-100'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} 
                transition-colors flex items-center`}
            >
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {showHeatmap ? 'Hide AI Overlay' : 'Show AI Overlay'}
            </button>
          </div>
        </div>
        
        <div className="bg-black flex justify-center items-center p-2 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>
          
          {/* Base Image */}
          <div className="relative w-full max-h-[400px] flex justify-center z-10">
            <img  
              src={image}  
              alt="Medical scan"  
              className="max-h-[400px] object-contain"
              style={{
                filter: `brightness(${brightnessValue}%) contrast(${contrastValue}%)`
              }}
            />
            
            {/* Heatmap Overlay */}
            {showHeatmap && createHeatmapMask() && (
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-screen"
                style={{ 
                  backgroundImage: `url("${createHeatmapMask()}")`,
                }}
              />
            )}
            
            {/* AI Status Indicator */}
            {showHeatmap && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center z-20">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2 pulse-animation"></span>
                <span>AI Analysis Complete</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="brightness" className="block text-sm text-gray-400 mb-1">Brightness: {brightnessValue}%</label>
              <input  
                type="range"  
                id="brightness"  
                min="50"  
                max="150"  
                value={brightnessValue} 
                onChange={handleBrightnessChange} 
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
              />
            </div>
            <div>
              <label htmlFor="contrast" className="block text-sm text-gray-400 mb-1">Contrast: {contrastValue}%</label>
              <input  
                type="range"  
                id="contrast"  
                min="50"  
                max="150"  
                value={contrastValue} 
                onChange={handleContrastChange} 
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Findings Section */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800">
          <h2 className="heading-subsection">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">AI</span>
            <span className="ml-1">Analysis Findings</span>
          </h2>
        </div>
        <div className="p-5">
          <div className="mb-6">
            <h3 className="heading-card mb-2">Overall Findings</h3>
            <p className="text-white">{findings}</p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h3 className="heading-card">AI Confidence</h3>
              <span className="text-sm text-gray-400">{confidence}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div  
                className={`h-2.5 rounded-full ${ 
                  confidence > 90 ? 'bg-gradient-to-r from-green-500 to-green-600' :  
                  confidence > 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :  
                  'bg-gradient-to-r from-red-500 to-red-600' 
                }`} 
                style={{ width: `${confidence}%` }} 
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Findings */}
      <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
        <div className="p-5 border-b border-gray-800">
          <h2 className="heading-subsection">Detailed Findings</h2>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <div key={index} className="relative">
                <div  
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${ 
                    activeCondition === condition.name  
                      ? 'bg-purple-900/30 border-l-2 border-purple-500'  
                      : 'hover:bg-gray-800' 
                  }`} 
                  onClick={() => {
                    onConditionClick(condition);
                    toggleExplanation(condition);
                  }}
                  onMouseEnter={() => handleConditionHover(condition)}
                  onMouseLeave={handleConditionLeave}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200 font-medium flex items-center">
                      <div 
                        className="h-3 w-3 rounded-full mr-2" 
                        style={{ 
                          backgroundColor: getColorForCondition(condition) 
                        }}
                      ></div>
                      {condition.name}
                      {/* Info icon */}
                      <svg className="h-4 w-4 text-gray-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${ 
                      condition.severity === 'None' ? 'bg-green-900/30 text-green-400 border border-green-600/30' :  
                      condition.severity === 'Mild' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-600/30' :  
                      condition.severity === 'Moderate' ? 'bg-orange-900/30 text-orange-400 border border-orange-600/30' : 
                      'bg-red-900/30 text-red-400 border border-red-600/30' 
                    }`}> 
                      {condition.severity} 
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-gray-800 rounded-full h-2 mr-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${condition.probability}%`,
                          background: `linear-gradient(to right, ${getColorForCondition(condition)}99, ${getColorForCondition(condition)})`
                        }} 
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 w-12">{condition.probability}%</span>
                  </div>
                </div>
                
                {/* Tooltip for hover */}
                {activeExplanation === condition.name && !showExplanation && (
                  <div className="absolute z-50 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm max-w-xs left-0 mt-2">
                    <div className="absolute -top-2 left-4 transform rotate-45 w-4 h-4 bg-gray-800"></div>
                    {getConditionExplanation(condition.name)}
                  </div>
                )}
                
                {/* Full explanation when clicked */}
                {activeExplanation === condition.name && showExplanation && (
                  <div className="mt-2 p-4 bg-gray-800 rounded-lg border border-gray-700 text-white text-sm animate-fadeIn">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-purple-300 mb-2">About {condition.name}</h4>
                      <button 
                        className="text-gray-400 hover:text-gray-300"
                        onClick={() => setShowExplanation(false)}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p>{getConditionExplanation(condition.name)}</p>
                    
                    {/* Additional information based on severity */}
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <h5 className="font-medium text-gray-300 mb-1">What this means for you:</h5>
                      <p>
                        {condition.severity === 'None' ? 
                          'This finding is normal and requires no action.' : 
                          condition.severity === 'Mild' ? 
                          'This condition is mild and may require monitoring or minor intervention.' :
                          condition.severity === 'Moderate' ? 
                          'This condition requires attention and may need medical intervention.' :
                          'This is a serious finding that requires prompt medical attention.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      {recommendation && (
        <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-800">
          <div className="p-5 border-b border-gray-800">
            <h2 className="heading-subsection">Recommendations</h2>
          </div>
          <div className="p-5">
            <div className="bg-gray-800/70 p-4 rounded-lg border-l-2 border-purple-500">
              <p className="text-white">{recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalysisResult;