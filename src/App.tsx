import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Simplified imports - only what's needed for expanded services
const Suspense = React.Suspense;
const Home = React.lazy(() => import('./pages/Home'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <EnhancedServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-overview', element: <ServicesOverviewPage /> },
];

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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