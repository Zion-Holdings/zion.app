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

// Enhanced lazy loading with preloading hints and error boundaries
const Home = lazy(() => import('./pages/Home').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Home page</div> 
})));

const Services = lazy(() => import('./pages/Services').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Services page</div> 
})));

const AISolutions = lazy(() => import('./pages/AISolutions').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load AI Solutions page</div> 
})));

const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Services Showcase page</div> 
})));

const AIMatcherPage = lazy(() => import('./pages/AIMatcher').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load AI Matcher page</div> 
})));

const TalentDirectory = lazy(() => import('./pages/TalentDirectory').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Talent Directory page</div> 
})));

const TalentsPage = lazy(() => import('./pages/TalentsPage').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Talents page</div> 
})));

const EmergingTech = lazy(() => import('./pages/EmergingTech').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Emerging Tech page</div> 
})));

// Enhanced service pages with error handling
const About = lazy(() => import('./pages/About').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load About page</div> 
})));

const Contact = lazy(() => import('./pages/Contact').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Contact page</div> 
})));

const Mission = lazy(() => import('./pages/Mission').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Mission page</div> 
})));

const Team = lazy(() => import('./pages/Team').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Team page</div> 
})));

const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Services Overview page</div> 
})));

const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load AI Autonomous Systems page</div> 
})));

const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Quantum Technology page</div> 
})));

const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Cybersecurity page</div> 
})));

const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load IT Infrastructure page</div> 
})));

const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Micro SAAS Solutions page</div> 
})));

const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions').then(module => ({ 
  default: module.default 
})).catch(() => ({ 
  default: () => <div className="text-center py-20 text-red-400">Failed to load Industry Solutions page</div> 
})));

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
      <div className="mt-4 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

// Enhanced Error Boundary Component
const EnhancedErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary fallback={
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-6">We're working to fix this issue. Please try refreshing the page.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="quantum-button"
        >
          Refresh Page
        </button>
      </div>
    </div>
  }>
    {children}
  </ErrorBoundary>
);

const App = () => {
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
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
                    
                    {/* Enhanced service routes */}
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
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
              
              {/* AI Chatbot - Always Available */}
              <AIChatbot />
              
              {/* Development Mode Features - Only in development */}
              {import.meta.env.DEV && (
                <>
                  {/* Collaborative Text Editor */}
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
                  
                  {/* AI Code Generator */}
                  <div className="fixed bottom-24 right-6 z-40 w-96">
                    <AICodeGenerator />
                  </div>
                  
                  {/* Development Dashboards */}
                  <div className="fixed top-4 left-4 z-40">
                    <PerformanceDashboard />
                  </div>
                  
                  <div className="fixed top-4 right-4 z-40">
                    <AnalyticsDashboard />
                  </div>
                  
                  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                    <EnterpriseDashboard />
                  </div>
                  
                  <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                    <SecurityComplianceDashboard />
                  </div>
                  
                  <div className="fixed top-4 right-4 z-40">
                    <MachineLearningDashboard />
                  </div>
                </>
              )}
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;