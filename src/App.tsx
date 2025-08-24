import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

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
    <Router>
      <div className="min-h-screen bg-zion-blue-dark">
        <MainNavigation />
        <main className="pt-16">
          <Suspense fallback={<EnhancedLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/expanded-services" element={<ExpandedServicesPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/cybersecurity-services" element={<CybersecurityServicesPage />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;