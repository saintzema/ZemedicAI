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
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import About from './pages/About';
import Partners from './pages/Partners';

// Solutions Pages
import Solutions from './pages/Solutions';
import SolutionsXray from './pages/solutions/SolutionsXray';
import SolutionsSkin from './pages/solutions/SolutionsSkin';
import SolutionsCTScan from './pages/solutions/SolutionsCTScan';

// Deployment Pages
import Deployment from './pages/Deployment';
import DeploymentSolarBooths from './pages/deployment/DeploymentSolarBooths';

import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/analysis/:id" element={<AnalysisDetail />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            
            {/* Analysis Pages */}
            <Route path="/analyze/xray" element={<XrayAnalysis />} />
            <Route path="/analyze/skin" element={<SkinAnalysis />} />
            <Route path="/analyze/ct-scan" element={<CTScanAnalysis />} />
            
            {/* Solutions Pages */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/xray" element={<SolutionsXray />} />
            <Route path="/solutions/skin" element={<SolutionsSkin />} />
            <Route path="/solutions/ct-scan" element={<SolutionsCTScan />} />
            
            {/* Deployment Pages */}
            <Route path="/deployment" element={<Deployment />} />
            <Route path="/deployment/solar-booths" element={<DeploymentSolarBooths />} />
            
            <Route path="*" element={<Landing />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
