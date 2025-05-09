import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Analysis from './pages/Analysis';
import AnalysisDetail from './pages/AnalysisDetail';
import XrayAnalysis from './pages/XrayAnalysis';
import SkinAnalysis from './pages/SkinAnalysis';
import CTScanAnalysis from './pages/CTScanAnalysis';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/analysis" element={
            <PrivateRoute>
              <Analysis />
            </PrivateRoute>
          } />
          <Route path="/analysis/:id" element={
            <PrivateRoute>
              <AnalysisDetail />
            </PrivateRoute>
          } />
          <Route path="/analyze/xray" element={
            <PrivateRoute>
              <XrayAnalysis />
            </PrivateRoute>
          } />
          <Route path="/analyze/skin" element={
            <PrivateRoute>
              <SkinAnalysis />
            </PrivateRoute>
          } />
          <Route path="/analyze/ct-scan" element={
            <PrivateRoute>
              <CTScanAnalysis />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
