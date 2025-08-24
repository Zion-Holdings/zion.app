import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services-comparison" element={<ServicesComparisonPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/blockchain-services" element={<BlockchainServicesPage />} />
            <Route path="/iot-services" element={<IoTServicesPage />} />
            <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
            <Route path="/services-overview" element={<ServicesOverviewPage />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;