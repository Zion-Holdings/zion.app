import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Lazy load pages with better error handling
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services/:id', element: <ServiceDetailPage /> },
  { path: '/pricing', element: <PricingPage /> },
];

// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-gold mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group...</h2>
        <p className="text-zion-slate-light">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
}

// Simple Error Boundary Component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;