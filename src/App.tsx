import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';

// Import existing pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/enhanced-services', element: <EnhancedServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/services-comparison', element: <ServicesComparisonPage /> },
];

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;