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
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));

// Simple error boundary using functional component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const App = () => {
  return (
    <ErrorBoundary>
      <MainNavigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/green-it" element={<GreenIT />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/micro-saas-services" element={<MicroSaasServices />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
      
      {/* Global Components */}
      <ChatAssistant />
    </ErrorBoundary>
  );
};

export default App;