import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
            <Route path="/services-comparison" element={<ServicesComparisonPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;