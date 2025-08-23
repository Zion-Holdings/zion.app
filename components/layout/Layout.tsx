import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2037 from './UltraFuturisticNavigation2037';
import UltraFuturisticFooter2037 from './UltraFuturisticFooter2037';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2037 from '../backgrounds/UltraFuturisticBackground2037';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation for sidebar
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  // Handle focus trap for sidebar
  useEffect(() => {
    if (sidebarOpen) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [sidebarOpen]);

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Zion Tech Group Application"
    >
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg font-semibold">Loading Zion Tech Group</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic Background */}
      <UltraFuturisticBackground2037 intensity="high" theme="quantum" />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2037 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          aria-expanded={sidebarOpen}
        />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            aria-hidden={!sidebarOpen}
            aria-label="Main navigation menu"
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28 min-h-screen"
            aria-label="Main content"
          >
            {/* Announcement for screen readers when sidebar opens/closes */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
            >
              {sidebarOpen ? 'Sidebar opened' : 'Sidebar closed'}
            </div>
            
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2037 />
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </div>
  );
}
