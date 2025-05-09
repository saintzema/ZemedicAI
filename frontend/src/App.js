import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import AnalysisDetail from './pages/AnalysisDetail';
import XrayAnalysis from './pages/XrayAnalysis';
import SkinAnalysis from './pages/SkinAnalysis';
import CTScanAnalysis from './pages/CTScanAnalysis';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/analysis/:id" element={<AnalysisDetail />} />
            <Route path="/analyze/xray" element={<XrayAnalysis />} />
            <Route path="/analyze/skin" element={<SkinAnalysis />} />
            <Route path="/analyze/ct-scan" element={<CTScanAnalysis />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
