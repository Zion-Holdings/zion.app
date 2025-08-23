import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [focusTrap, setFocusTrap] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Focus trap for sidebar
  useEffect(() => {
    if (sidebarOpen) {
      setFocusTrap(true);
      // Focus first focusable element in sidebar
      const firstFocusable = document.querySelector('[data-sidebar] button, [data-sidebar] a, [data-sidebar] input');
      if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
      }
    } else {
      setFocusTrap(false);
    }
  }, [sidebarOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>

      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2036 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          isMenuOpen={sidebarOpen}
        />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-y-0 left-0 z-40 lg:relative lg:translate-x-0"
              >
                <EnhancedSidebar2025 
                  isOpen={sidebarOpen} 
                  onClose={() => setSidebarOpen(false)}
                  data-sidebar
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28 focus:outline-none"
            tabIndex={-1}
            aria-label="Main content"
          >
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2036 />
      </div>

      {/* Focus trap overlay */}
      {focusTrap && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
