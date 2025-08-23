import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import SEOOptimizer from '../SEOOptimizer';
import MobileOptimizer from '../MobileOptimizer';

import ErrorBoundary from '../ErrorBoundary';
import Analytics from '../Analytics';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  };
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

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
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [sidebarOpen]);


  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Loading indicator */}
      {isLoading && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          role="status"
          aria-label="Page loading"
        >
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2040 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          isMenuOpen={sidebarOpen}
        />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            aria-label="Main navigation sidebar"
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28"
            aria-label="Main content area"
          >
            {/* Announcement for screen readers when content changes */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
              id="announcement"
            >
              Main content loaded
            </div>
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2040 />
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
      
      {/* Focus indicator for keyboard navigation */}
      <style jsx global>{`
        .skip-link:focus {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
          padding: 0.5rem 1rem;
          background: #06b6d4;
          color: white;
          border-radius: 0.25rem;
          text-decoration: none;
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        /* Focus styles for all interactive elements */
        button:focus,
        a:focus,
        input:focus,
        select:focus,
        textarea:focus,
        [tabindex]:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        /* Remove focus outline for mouse users but keep for keyboard */
        button:focus:not(:focus-visible),
        a:focus:not(:focus-visible),
        input:focus:not(:focus-visible),
        select:focus:not(:focus-visible),
        textarea:focus:not(:focus-visible),
        [tabindex]:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
    </div>

  );
}
