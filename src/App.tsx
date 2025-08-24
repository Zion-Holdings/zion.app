import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb';
import { FloatingContactButton } from './components/FloatingContactButton';

const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/ai-services', element: <AIServicesShowcase /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutionsPage /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

const App = () => {
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <Breadcrumb />
      <Suspense fallback={<div className="p-4 text-center text-white">Loading...</div>}>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      <FloatingContactButton />
    </div>
  );
};

export default App;