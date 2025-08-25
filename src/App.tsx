import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/MainNavigation';
import ChatAssistant from './components/ChatAssistant/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const EnhancedServicesShowcase = React.lazy(() => import('./components/EnhancedServicesShowcase'));

// Simple error boundary using functional component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Simple loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary>
      <MainNavigation />
      
      <React.Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/green-it" element={<GreenIT />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/micro-saas-services" element={<MicroSaasServices />} />
          <Route path="/enhanced-services" element={<EnhancedServicesShowcase />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
      </React.Suspense>

      {/* Global Components */}
      <ChatAssistant />
    </ErrorBoundary>
  );
};

export default App;