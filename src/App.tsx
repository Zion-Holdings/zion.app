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
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ErrorBoundary } from './components/ErrorBoundary';

// Enhanced lazy loading with preloading hints and better code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.default })));
const AISolutions = lazy(() => import('./pages/AISolutions').then(module => ({ default: module.default })));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase').then(module => ({ default: module.default })));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher').then(module => ({ default: module.default })));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory').then(module => ({ default: module.default })));
const TalentsPage = lazy(() => import('./pages/TalentsPage').then(module => ({ default: module.default })));
const EmergingTech = lazy(() => import('./pages/EmergingTech').then(module => ({ default: module.default })));

// Our enhanced service pages with better chunking
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default })));
const Mission = lazy(() => import('./pages/Mission').then(module => ({ default: module.default })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.default })));
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview').then(module => ({ default: module.default })));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems').then(module => ({ default: module.default })));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology').then(module => ({ default: module.default })));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.default })));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure').then(module => ({ default: module.default })));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions').then(module => ({ default: module.default })));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions').then(module => ({ default: module.default })));

// New enhanced pages
const WhitePapers = lazy(() => import('./pages/WhitePapers').then(module => ({ default: module.default })));
const Events = lazy(() => import('./pages/Events').then(module => ({ default: module.default })));
const Webinars = lazy(() => import('./pages/Webinars').then(module => ({ default: module.default })));

// Enhanced Loading Component with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
      {/* Progress indicator */}
      <div className="w-48 h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Preload critical routes for better performance
const preloadCriticalRoutes = () => {
  // Preload Home page immediately
  const homePromise = import('./pages/Home');
  
  // Preload other critical routes after a delay
  setTimeout(() => {
    import('./pages/Services');
    import('./pages/AISolutions');
  }, 1000);
  
  return homePromise;
};

const App = () => {
  useScrollToTop();

  // Preload critical routes on mount
  React.useEffect(() => {
    preloadCriticalRoutes();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={false} onClose={() => {}} />
              
              {/* Main Content with enhanced Suspense and error handling */}
              <main className="ml-64 pt-20 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/services-showcase" element={<ServicesShowcase />} />
                    <Route path="/match" element={<AIMatcherPage />} />
                    <Route path="/talent" element={<TalentDirectory />} />
                    <Route path="/talents" element={<TalentsPage />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/comprehensive-services" element={<Services />} />
                    <Route path="/services-comparison" element={<Services />} />
                    <Route path="/it-onsite-services" element={<Services />} />
                    
                    {/* Our enhanced service routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                    
                    {/* New enhanced page routes */}
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/webinars" element={<Webinars />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
              
              {/* AI Chatbot - Always Available */}
              <AIChatbot />
              
              {/* Collaborative Text Editor - Development Mode */}
              {import.meta.env.DEV && (
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
              {import.meta.env.DEV && (
                <div className="fixed bottom-24 right-6 z-40 w-96">
                  <AICodeGenerator />
                </div>
              )}
              
              {/* Development Dashboards */}
              {import.meta.env.DEV && (
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
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;