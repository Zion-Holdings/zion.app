import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { MainNavigation } from "./layout/MainNavigation";
import { MainSidebar } from "./components/layout/MainSidebar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import Cookies from "./pages/Cookies";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-zion-blue-dark">
        <MainNavigation onSidebarToggle={handleSidebarToggle} />
        <div className="flex pt-16">
          <MainSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1">
            <Suspense fallback={<EnhancedLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/cookies" element={<Cookies />} />
                {/* Add more routes as components become available */}
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;