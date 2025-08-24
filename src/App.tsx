import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/LoadingSpinner";
import { FloatingCTA } from "./components/FloatingCTA";

// Import pages directly instead of using lazy loading for now
import Home from './pages/Home';
import About from './pages/About';
import GreenIT from './pages/GreenIT';
import Careers from './pages/Careers';
import Sitemap from './pages/Sitemap';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HelpCenter from './pages/HelpCenter';
import ContactPage from './pages/Contact';
import MicroSaasServices from './pages/MicroSaasServices';

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/careers', element: <Careers /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
];

// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
  return (
    <PageLoader 
      text="Loading Zion Tech Group..." 
      className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark"
    />
  );
}

// Simple error boundary using functional component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        
        {/* Global Components */}
        <FloatingCTA />
        <Toaster />
        <SonnerToaster />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;