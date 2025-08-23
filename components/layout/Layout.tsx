import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticNeonBackground2026 from '../backgrounds/UltraFuturisticNeonBackground2026';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../ui/PerformanceMonitor';
import AccessibilityEnhancer from '../ui/AccessibilityEnhancer';
import ErrorBoundary from '../ui/ErrorBoundary';

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
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Futuristic Background */}
        <UltraFuturisticBackground2035 />
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Top Contact Bar */}
          <TopContactBar />
          
          {/* Navigation */}
          <UltraFuturisticNavigation2035 />
          
          {/* Sidebar and Main Content */}
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <main id="main" className="flex-1 pt-24 lg:pt-28">
              {children}
            </main>
          </div>
          
          {/* Footer */}
          <UltraFuturisticFooter2035 />
        </div>

        {/* Enhanced UI Components */}
        <PerformanceMonitor />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  );
}
