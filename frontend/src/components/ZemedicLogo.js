import React from 'react';
import logoBase64 from '../assets/zemedic-logo';

const ZemedicLogo = ({ className = 'h-8 w-auto' }) => {
  return (
    <img 
      src={`data:image/png;base64,${logoBase64}`} 
      alt="ZemedicAI Logo" 
      className={className}
    />
  );
};

export default ZemedicLogo;
