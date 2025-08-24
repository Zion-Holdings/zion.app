import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Import only the working pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Import new service pages
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage'));
const EnterpriseSolutions = React.lazy(() => import('./pages/EnterpriseSolutions'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/micro-saas', element: <MicroSAASPage /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutions /> },
];

const App = () => {
  return (
    <div className="min-h-screen bg-background">
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