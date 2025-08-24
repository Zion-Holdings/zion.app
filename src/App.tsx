import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ComprehensiveServicesPage from './pages/ComprehensiveServicesPage';
import AIServicesPage from './pages/AIServicesPage';
import CybersecurityServicesPage from './pages/CybersecurityServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;