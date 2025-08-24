import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoading } from "./components/ui/loading";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
            <Route path="/services-comparison" element={<ServicesComparisonPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <AccessibilityEnhancer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;