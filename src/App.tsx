import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Lazy load available pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Mission = React.lazy(() => import('./pages/Mission'));
const Team = React.lazy(() => import('./pages/Team'));

// New service pages
const ServicesOverview = React.lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = React.lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = React.lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = React.lazy(() => import('./pages/services/IndustrySolutions'));

// Additional new service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const DigitalMarketingServicesPage = React.lazy(() => import('./pages/DigitalMarketingServicesPage'));
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/mission', element: <Mission /> },
  { path: '/team', element: <Team /> },
  
  // Service routes
  { path: '/services', element: <ServicesOverview /> },
  { path: '/services/ai-autonomous-systems', element: <AIAutonomousSystems /> },
  { path: '/services/quantum-technology', element: <QuantumTechnology /> },
  { path: '/services/cybersecurity', element: <Cybersecurity /> },
  { path: '/services/it-infrastructure', element: <ITInfrastructure /> },
  { path: '/services/micro-saas-solutions', element: <MicroSAASSolutions /> },
  { path: '/services/industry-solutions', element: <IndustrySolutions /> },
  
  // Additional new service routes
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/digital-marketing', element: <DigitalMarketingServicesPage /> },
  { path: '/business-solutions', element: <BusinessSolutionsPage /> },
  { path: '/services-overview', element: <ServicesOverviewPage /> },
];

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {baseRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;