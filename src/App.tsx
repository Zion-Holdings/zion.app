import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
            <Route path="/services-comparison" element={<ServicesComparisonPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;