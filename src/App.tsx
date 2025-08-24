import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from "./components/ui/loading-spinner";

// Import only the pages that exist
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const EnterpriseSolutions = React.lazy(() => import('./pages/EnterpriseSolutions'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Simple loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner 
        size="xl" 
        text="Loading Zion..." 
        variant="pulse" 
        className="mb-8"
      />
      <div className="text-zion-slate-light text-lg max-w-md mx-auto">
        <p className="mb-4">Preparing your tech marketplace experience...</p>
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-zion-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
        <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;