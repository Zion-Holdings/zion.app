import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServices'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricing'));
const ContactPage = React.lazy(() => import('./pages/Contact'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/contact', element: <ContactPage /> },
];

const App = () => {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        {baseRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;