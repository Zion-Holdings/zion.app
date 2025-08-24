import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load only the pages we know work
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

// Simple loading component
const PageLoader = () => (
  <div className="loading-overlay">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-lg">Loading amazing content...</p>
    </div>
  </div>
);

const baseRoutes = [
  { path: '/', element: <MicroSaasServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
];

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {baseRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;