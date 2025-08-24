import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MicroSaasServices from './pages/MicroSaasServices';
import ComprehensiveServices from './pages/ComprehensiveServices';
import CybersecurityServicesPage from './pages/CybersecurityServicesPage';
import ExpandedServicesPage from './pages/ExpandedServicesPage';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import EnhancedServicesShowcase from './pages/EnhancedServicesShowcase';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/micro-saas-services" element={<MicroSaasServices />} />
        <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
        <Route path="/enhanced-services" element={<EnhancedServicesShowcase />} />
        <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
        <Route path="/expanded-services" element={<ExpandedServicesPage />} />
        <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;