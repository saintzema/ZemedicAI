import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import XrayAnalysis from './pages/XrayAnalysis';
import SkinAnalysis from './pages/SkinAnalysis';
import CTScanAnalysis from './pages/CTScanAnalysis';
import Profile from './pages/Profile';
import HistoryPage from './pages/HistoryPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Contexts
import { AuthProvider } from './contexts/AuthContext';
import { DemoModeProvider } from './contexts/DemoModeContext';

function App() {
  return (
    <AuthProvider>
      <DemoModeProvider>
        <Router>
          <div className="App flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/analysis/xray" 
                  element={
                    <ProtectedRoute>
                      <XrayAnalysis />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/analysis/skin" 
                  element={
                    <ProtectedRoute>
                      <SkinAnalysis />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/analysis/ct-scan" 
                  element={
                    <ProtectedRoute>
                      <CTScanAnalysis />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/history" 
                  element={
                    <ProtectedRoute>
                      <HistoryPage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DemoModeProvider>
    </AuthProvider>
  );
}

export default App;
