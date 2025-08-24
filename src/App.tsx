import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <ToasterProvider>
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Sonner position="top-right" />
        </ToasterProvider>
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;