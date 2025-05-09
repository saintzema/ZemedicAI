import React, { createContext, useState, useContext } from 'react';

const DemoModeContext = createContext();

export const useDemoMode = () => useContext(DemoModeContext);

export const DemoModeProvider = ({ children }) => {
  const [demoMode, setDemoMode] = useState(false);

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
