import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import EnhancedServicesShowcase from './pages/EnhancedServicesShowcase';
import AIServicesPage from './pages/AIServicesPage';
import CybersecurityServicesPage from './pages/CybersecurityServicesPage';
import ComprehensiveContact from './pages/ComprehensiveContact';

function App() {
  const baseRoutes = [
    { path: '/', element: <Home /> },
    { path: '/enhanced-services', element: <EnhancedServicesShowcase /> },
    { path: '/ai-services', element: <AIServicesPage /> },
    { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
    { path: '/comprehensive-contact', element: <ComprehensiveContact /> },
    { path: '*', element: <NotFound /> },
  ];

  return (
    <Router>
      <Routes>
        {baseRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;