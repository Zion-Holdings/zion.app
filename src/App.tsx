<<<<<<< HEAD
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
=======
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { motion } from "framer-motion";

// Enhanced loading fallback
const EnhancedLoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="xl" text="Loading Zion Tech Group..." variant="pulse" className="mb-8"/>
      <motion.div
        className="mt-8 text-zion-slate-light text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Please wait while we prepare your experience...
      </motion.div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-zion-blue-dark">
            <MainNavigation />
            <main className="pt-16">
              <Suspense fallback={<EnhancedLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Add more routes as components become available */}
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77

export default App;