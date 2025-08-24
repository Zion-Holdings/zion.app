import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
];

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;