import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import './App.css';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ComprehensiveServices = lazy(() => import('./pages/ComprehensiveServices'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-200">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-800 mb-4">Something went wrong</h1>
            <p className="text-red-600 mb-6">We're working to fix this issue. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar />
          
          {/* Main Content with enhanced Suspense */}
          <main className="ml-64 pt-20 min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                <Route path="/services-comparison" element={<Services />} />
                <Route path="/it-onsite-services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/help" element={<HelpCenter />} />
                
                {/* Additional service category routes */}
                <Route path="/services/ai" element={<Services />} />
                <Route path="/services/it" element={<Services />} />
                <Route path="/services/saas" element={<Services />} />
                <Route path="/services/security" element={<Services />} />
                <Route path="/services/cloud" element={<Services />} />
                <Route path="/services/analytics" element={<Services />} />
                
                {/* Solution routes */}
                <Route path="/solutions/enterprise-ai" element={<Services />} />
                <Route path="/solutions/digital-transformation" element={<Services />} />
                <Route path="/solutions/automation" element={<Services />} />
                <Route path="/solutions/iot" element={<Services />} />
                <Route path="/solutions/blockchain" element={<Services />} />
                <Route path="/solutions/quantum" element={<Services />} />
                
                {/* Company routes */}
                <Route path="/team" element={<About />} />
                <Route path="/partners" element={<About />} />
                <Route path="/case-studies" element={<Blog />} />
                
                {/* Support routes */}
                <Route path="/docs" element={<HelpCenter />} />
                <Route path="/api" element={<HelpCenter />} />
                <Route path="/status" element={<HelpCenter />} />
                <Route path="/support" element={<Contact />} />
                <Route path="/training" element={<HelpCenter />} />
                
                {/* Legal routes */}
                <Route path="/privacy" element={<About />} />
                <Route path="/terms" element={<About />} />
                <Route path="/cookies" element={<About />} />
                <Route path="/accessibility" element={<About />} />
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
};

export default App;