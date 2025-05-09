// Demo data for the application in developer mode

// Chest X-ray conditions
const chestConditions = [
  {
    label: 'Pneumonia',
    description: 'Inflammation of the air sacs in one or both lungs',
    recommendations: [
      'Rest and drink plenty of fluids',
      'Take prescribed antibiotics for bacterial pneumonia',
      'Use over-the-counter pain relievers as recommended',
      'Schedule a follow-up chest X-ray to ensure the infection is cleared'
    ]
  },
  {
    label: 'COVID-19 Pneumonia',
    description: 'Lung inflammation caused by SARS-CoV-2 infection',
    recommendations: [
      'Follow isolation protocols as recommended by CDC',
      'Monitor oxygen levels with a pulse oximeter',
      'Stay hydrated and get adequate rest',
      'Seek immediate medical attention if experiencing severe shortness of breath'
    ]
  },
  {
    label: 'Tuberculosis',
    description: 'Infectious disease that primarily affects the lungs',
    recommendations: [
      'Complete the full course of prescribed TB medication',
      'Attend all follow-up appointments to monitor treatment progress',
      'Improve ventilation in living and working spaces',
      'Notify close contacts so they can be tested for TB'
    ]
  },
  {
    label: 'Pleural Effusion',
    description: 'Excess fluid around the lungs',
    recommendations: [
      'Follow-up with a pulmonologist',
      'Additional testing may be needed to determine the cause',
      'Therapeutic thoracentesis may be recommended',
      'Monitor for worsening symptoms such as increased shortness of breath'
    ]
  },
  {
    label: 'Atelectasis',
    description: 'Collapsed or closed lung',
    recommendations: [
      'Deep breathing exercises to re-expand the lung',
      'Incentive spirometry exercises as directed',
      'Position changes to help drain secretions',
      'Follow-up imaging to ensure resolution'
    ]
  },
  {
    label: 'Cardiomegaly',
    description: 'Enlarged heart',
    recommendations: [
      'Consult with a cardiologist',
      'Echocardiogram for further evaluation',
      'Limit sodium intake',
      'Regular monitoring of blood pressure'
    ]
  },
  {
    label: 'Pulmonary Nodule',
    description: 'Small round or oval-shaped growth in the lung',
    recommendations: [
      'Follow-up CT scan in 3-6 months to monitor growth',
      'Avoid smoking and secondhand smoke exposure',
      'Discuss biopsy options with your physician if recommended',
      'Regular follow-up with a pulmonologist'
    ]
  },
  {
    label: 'Lung Mass',
    description: 'Abnormal growth or tumor in the lung',
    recommendations: [
      'Immediate follow-up with a pulmonologist',
      'CT-guided biopsy or bronchoscopy may be needed',
      'Smoking cessation if applicable',
      'PET scan may be recommended for further evaluation'
    ]
  },
  {
    label: 'Pneumothorax',
    description: 'Collapsed lung due to air in the pleural space',
    recommendations: [
      'Urgent medical evaluation if symptoms worsen',
      'Avoid air travel or diving until cleared by a physician',
      'Smoking cessation if applicable',
      'Follow-up imaging to ensure resolution'
    ]
  },
  {
    label: 'COPD',
    description: 'Chronic obstructive pulmonary disease',
    recommendations: [
      'Smoking cessation is essential',
      'Pulmonary rehabilitation program',
      'Proper use of prescribed inhalers',
      'Annual flu vaccine and pneumonia vaccine as recommended'
    ]
  }
];

// Skin conditions
const skinConditions = [
  {
    label: 'Melanoma',
    description: 'Serious form of skin cancer',
    recommendations: [
      'Immediate referral to a dermatologist for biopsy',
      'Total body skin examination to check for other suspicious lesions',
      'Regular skin self-exams monthly',
      'Use sunscreen and protective clothing to prevent further damage'
    ]
  },
  {
    label: 'Basal Cell Carcinoma',
    description: 'Most common type of skin cancer',
    recommendations: [
      'Dermatology consultation for treatment options',
      'Consider Mohs surgery for complete removal',
      'Regular skin checks every 6 months',
      'Sun protection with SPF 30+ sunscreen daily'
    ]
  },
  {
    label: 'Squamous Cell Carcinoma',
    description: 'Second most common form of skin cancer',
    recommendations: [
      'Prompt excision to prevent spread',
      'Follow-up examinations every 3-6 months',
      'Daily sun protection measures',
      'Monitor lymph nodes for any enlargement'
    ]
  },
  {
    label: 'Seborrheic Keratosis',
    description: 'Benign skin growth',
    recommendations: [
      'No treatment necessary unless cosmetically undesirable',
      'Monitor for any changes in appearance',
      'Avoid picking or traumatizing the lesions',
      'Regular skin examinations with dermatologist'
    ]
  },
  {
    label: 'Actinic Keratosis',
    description: 'Precancerous skin lesion',
    recommendations: [
      'Topical treatments such as fluorouracil or imiquimod',
      'Cryotherapy (freezing) option',
      'Strict sun protection measures',
      'Regular dermatology check-ups every 6-12 months'
    ]
  },
  {
    label: 'Psoriasis',
    description: 'Chronic autoimmune condition causing rapid skin cell buildup',
    recommendations: [
      'Topical corticosteroids or other prescribed medications',
      'Moisturize skin regularly',
      'Phototherapy may be beneficial',
      'Stress management techniques'
    ]
  },
  {
    label: 'Eczema',
    description: 'Inflammatory skin condition causing itchy, red rashes',
    recommendations: [
      'Identify and avoid triggers',
      'Use gentle, fragrance-free skincare products',
      'Apply prescribed topical medications as directed',
      'Keep skin moisturized, especially after bathing'
    ]
  },
  {
    label: 'Dermatofibroma',
    description: 'Benign skin nodule',
    recommendations: [
      'Generally no treatment required',
      'Avoid trauma to the area',
      'Surgical removal if causing discomfort',
      'Routine skin checks to monitor any changes'
    ]
  }
];

// CT scan conditions
const ctScanConditions = [
  {
    label: 'Brain Tumor',
    description: 'Abnormal growth of tissue in the brain',
    recommendations: [
      'Immediate neurosurgery consultation',
      'MRI with contrast for further characterization',
      'Discuss biopsy options if appropriate',
      'Consider second opinion from neuro-oncologist'
    ]
  },
  {
    label: 'Stroke',
    description: 'Brain damage from interrupted blood flow',
    recommendations: [
      'Urgent neurological evaluation',
      'Blood-thinning medication may be prescribed',
      'Blood pressure management',
      'Rehabilitation therapy as needed'
    ]
  },
  {
    label: 'Intracranial Hemorrhage',
    description: 'Bleeding within the skull',
    recommendations: [
      'Emergency neurosurgical consultation',
      'Blood pressure control',
      'Avoid blood thinners',
      'Close neurological monitoring'
    ]
  },
  {
    label: 'Multiple Sclerosis',
    description: 'Disease affecting the central nervous system',
    recommendations: [
      'Referral to a neurologist specialized in MS',
      'MRI with and without contrast for further evaluation',
      'Consider disease-modifying therapies',
      'Join a support group for additional resources'
    ]
  },
  {
    label: 'Brain Aneurysm',
    description: 'Bulge or ballooning in a blood vessel in the brain',
    recommendations: [
      'Neurosurgical or interventional neuroradiology consultation',
      'Additional vascular imaging studies',
      'Blood pressure control',
      'Smoking cessation if applicable'
    ]
  },
  {
    label: 'Sinusitis',
    description: 'Inflammation of the sinuses',
    recommendations: [
      'Nasal corticosteroids or antibiotics if bacterial',
      'Saline nasal irrigation',
      'Decongestants for symptom relief',
      'Follow-up if symptoms persist beyond 10 days'
    ]
  },
  {
    label: 'Hydrocephalus',
    description: 'Buildup of fluid in brain ventricles',
    recommendations: [
      'Neurosurgical evaluation for possible shunt placement',
      'Regular neurological monitoring',
      'Watch for headaches, vision changes, and balance issues',
      'Follow-up imaging to monitor ventricular size'
    ]
  },
  {
    label: 'Atrophy',
    description: 'Loss of brain cells or shrinkage',
    recommendations: [
      'Neurological evaluation for cognitive assessment',
      'Consider underlying causes like Alzheimer\'s or other dementias',
      'Cognitive exercises and mental stimulation',
      'Regular follow-up to monitor progression'
    ]
  }
];

// Generate random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate random confidence value (between 0.1 and 0.95)
const getRandomConfidence = () => {
  return parseFloat((Math.random() * 0.85 + 0.1).toFixed(2));
};

// Generate random recommendations based on detected conditions
const generateRecommendations = (predictions, analysisType) => {
  let allRecommendations = [];
  let conditionsList;
  
  // Select appropriate conditions list
  if (analysisType === 'xray') {
    conditionsList = chestConditions;
  } else if (analysisType === 'skin') {
    conditionsList = skinConditions;
  } else {
    conditionsList = ctScanConditions;
  }
  
  // Get recommendations for each detected condition
  predictions.forEach(prediction => {
    const condition = conditionsList.find(c => c.label === prediction.label);
    if (condition && condition.recommendations) {
      condition.recommendations.forEach(rec => {
        if (!allRecommendations.includes(rec)) {
          allRecommendations.push(rec);
        }
      });
    }
  });
  
  // Add general lifestyle recommendations
  const generalRecommendations = [
    'Maintain a balanced diet rich in fruits and vegetables',
    'Regular physical activity for at least 30 minutes daily',
    'Ensure adequate sleep (7-8 hours per night)',
    'Manage stress through mindfulness or relaxation techniques',
    'Stay hydrated with adequate water intake',
    'Avoid smoking and limit alcohol consumption'
  ];
  
  // Add 2-3 general recommendations
  for (let i = 0; i < 3; i++) {
    const randomIndex = getRandomNumber(0, generalRecommendations.length - 1);
    const rec = generalRecommendations[randomIndex];
    if (!allRecommendations.includes(rec)) {
      allRecommendations.push(rec);
    }
  }
  
  return allRecommendations;
};

// Generate demo data for chest X-ray analysis
export const generateChestXrayDemo = () => {
  // Number of conditions to detect (1-3)
  const numConditions = getRandomNumber(1, 3);
  
  // Select random conditions
  const shuffled = [...chestConditions].sort(() => 0.5 - Math.random());
  const selectedConditions = shuffled.slice(0, numConditions);
  
  // Generate predictions with random confidence scores
  const predictions = selectedConditions.map(condition => ({
    label: condition.label,
    confidence: getRandomConfidence(),
    description: condition.description
  }));
  
  // Sort by confidence (highest first)
  predictions.sort((a, b) => b.confidence - a.confidence);
  
  // Generate recommendations based on detected conditions
  const recommendations = generateRecommendations(predictions, 'xray');
  
  return {
    predictions,
    recommendations
  };
};

// Generate demo data for skin lesion analysis
export const generateSkinLesionDemo = () => {
  // Number of conditions to detect (1-2)
  const numConditions = getRandomNumber(1, 2);
  
  // Select random conditions
  const shuffled = [...skinConditions].sort(() => 0.5 - Math.random());
  const selectedConditions = shuffled.slice(0, numConditions);
  
  // Generate predictions with random confidence scores
  const predictions = selectedConditions.map(condition => ({
    label: condition.label,
    confidence: getRandomConfidence(),
    description: condition.description
  }));
  
  // Sort by confidence (highest first)
  predictions.sort((a, b) => b.confidence - a.confidence);
  
  // Generate recommendations based on detected conditions
  const recommendations = generateRecommendations(predictions, 'skin');
  
  return {
    predictions,
    recommendations
  };
};

// Generate demo data for CT scan analysis
export const generateCTScanDemo = () => {
  // Number of conditions to detect (1-2)
  const numConditions = getRandomNumber(1, 2);
  
  // Select random conditions
  const shuffled = [...ctScanConditions].sort(() => 0.5 - Math.random());
  const selectedConditions = shuffled.slice(0, numConditions);
  
  // Generate predictions with random confidence scores
  const predictions = selectedConditions.map(condition => ({
    label: condition.label,
    confidence: getRandomConfidence(),
    description: condition.description
  }));
  
  // Sort by confidence (highest first)
  predictions.sort((a, b) => b.confidence - a.confidence);
  
  // Generate recommendations based on detected conditions
  const recommendations = generateRecommendations(predictions, 'ct');
  
  return {
    predictions,
    recommendations
  };
};
