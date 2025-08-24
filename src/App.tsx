import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { ToasterProvider } from "./components/Toaster";
import { Sonner } from "./components/Sonner";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const AISolutionsPage = React.lazy(() => import('./pages/AISolutions'));
const ITServicesPage = React.lazy(() => import('./pages/ITServices'));
const EnterprisePage = React.lazy(() => import('./pages/Enterprise'));
const DeveloperPortalPage = React.lazy(() => import('./pages/DeveloperPortal'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenter'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const AccessibilityPage = React.lazy(() => import('./pages/Accessibility'));

// Our comprehensive services pages
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/ai-solutions', element: <AISolutionsPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/enterprise', element: <EnterprisePage /> },
  { path: '/developers', element: <DeveloperPortalPage /> },
  { path: '/help-center', element: <HelpCenterPage /> },
  { path: '/cookies', element: <CookiesPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  // Our comprehensive services routes
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
      <WhitelabelProvider>
        <ThemeProvider>
          <Router>
            <Suspense fallback={<EnhancedSuspenseFallback />}>
              <Routes>
                {baseRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Suspense>
            <ToasterProvider />
            <Sonner />
          </Router>
        </ThemeProvider>
      </WhitelabelProvider>
    </ErrorBoundary>
  );
}

export default App;