import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { Home } from './pages/Home';
import Services from './pages/Services';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

export function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={false} onClose={() => {}} />
          
          {/* Main Content with enhanced Suspense */}
          <main className="ml-64 pt-20 min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/comprehensive-services" element={<Services />} />
                <Route path="/services-comparison" element={<Services />} />
                <Route path="/it-onsite-services" element={<Services />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          
          {/* Enhanced Accessibility Controls */}
          <AccessibilityControls position="bottom-right" />
          
          {/* AI Chatbot - Always Available */}
          <AIChatbot />
          
          {/* Collaborative Text Editor - Development Mode */}
          {process.env.NODE_ENV === 'development' && (
            <div className="fixed bottom-24 left-6 z-40 w-96">
              <CollaborativeTextEditor
                roomId="dev-editor"
                userId="dev-user"
                userName="Developer"
                initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                enableAI={true}
                enableCollaboration={true}
                enableVersioning={true}
              />
            </div>
          )}
          
          {/* AI Code Generator - Development Mode */}
          {process.env.NODE_ENV === 'development' && (
            <div className="fixed bottom-24 right-6 z-40 w-96">
              <AICodeGenerator />
            </div>
          )}
          
          {/* Development Dashboards */}
          {process.env.NODE_ENV === 'development' && (
            <>
              {/* Performance Dashboard */}
              <div className="fixed top-4 left-4 z-40">
                <PerformanceDashboard />
              </div>
              
              {/* Analytics Dashboard */}
              <div className="fixed top-4 right-4 z-40">
                <AnalyticsDashboard />
              </div>
              
              {/* Enterprise Dashboard */}
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                <EnterpriseDashboard />
              </div>
              
              {/* Security & Compliance Dashboard */}
              <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                <SecurityComplianceDashboard />
              </div>
              
              {/* Machine Learning Dashboard */}
              <div className="fixed top-4 right-4 z-40">
                <MachineLearningDashboard />
              </div>
            </>
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
}