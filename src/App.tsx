import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Home from './pages/Home';
import ExpandedServicesPage from './pages/ExpandedServicesPage';
import AIServicesPage from './pages/AIServicesPage';
import CybersecurityServicesPage from './pages/CybersecurityServicesPage';
import ComprehensiveServicesPage from './pages/ComprehensiveServicesPage';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import ServicesComparisonPage from './pages/ServicesComparisonPage';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import About from './pages/About';
import GreenIT from './pages/GreenIT';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/cybersecurity" element={<CybersecurityServicesPage />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
            <Route path="/services-comparison" element={<ServicesComparisonPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/green-it" element={<GreenIT />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;