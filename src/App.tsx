import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
<<<<<<< HEAD
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { BlockchainWeb3Dashboard } from './components/BlockchainWeb3Dashboard';
import './App.css';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));

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
              
              {/* Blockchain & Web3 Dashboard */}
              <div className="fixed top-4 left-4 z-40">
                <BlockchainWeb3Dashboard />
              </div>
            </>
          )}
        </div>
      </Router>
    </ErrorBoundary>
=======
import { ScrollToTop } from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import RequestQuote from './pages/RequestQuote';
import HomePage from './pages/HomePage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import AISolutions from './pages/AISolutions';
import CloudInfrastructure from './pages/CloudInfrastructure';
import Cybersecurity from './pages/Cybersecurity';
import DigitalTransformation from './pages/DigitalTransformation';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        <div className="flex pt-16">
          <Sidebar className="hidden lg:block" />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/quote" element={<RequestQuote />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
>>>>>>> 1c7828f56ab38ae138619d2be76cfad61dd0da82
  );
}

export default App;