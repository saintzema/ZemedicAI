import React, { createContext, useState, useEffect, useContext } from 'react';

const DemoModeContext = createContext();

export const useDemoMode = () => useContext(DemoModeContext);

export const DemoModeProvider = ({ children }) => {
  const [demoMode, setDemoMode] = useState(() => {
    // Initialize from localStorage if available
    const savedMode = localStorage.getItem('zemedic-demo-mode');
    return savedMode ? JSON.parse(savedMode) : true; // Default to true for demo purposes
  });

  // Save to localStorage when demoMode changes
  useEffect(() => {
    localStorage.setItem('zemedic-demo-mode', JSON.stringify(demoMode));
  }, [demoMode]);

  const toggleDemoMode = () => {
    setDemoMode(prevMode => !prevMode);
  };

  const value = {
    demoMode,
    toggleDemoMode
  };

  return (
    <DemoModeContext.Provider value={value}>
      {children}
    </DemoModeContext.Provider>
  );
};
