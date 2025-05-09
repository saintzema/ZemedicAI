import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="*" element={<Landing />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

export default App;
