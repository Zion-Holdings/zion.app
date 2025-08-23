import React, { useState, useEffect, useCallback } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPerformanceMonitoringEnabled, setIsPerformanceMonitoringEnabled] = useState(false);
  const [isAccessibilityEnabled, setIsAccessibilityEnabled] = useState(true);
  const [isCookieConsentEnabled, setIsCookieConsentEnabled] = useState(true);

  // Performance optimization: Check user preferences
  useEffect(() => {
    // Check if user has enabled performance monitoring
    const perfEnabled = localStorage.getItem('performance-monitoring-enabled') === 'true';
    setIsPerformanceMonitoringEnabled(perfEnabled);

    // Check if user has disabled accessibility features
    const accessibilityDisabled = localStorage.getItem('accessibility-disabled') === 'true';
    setIsAccessibilityEnabled(!accessibilityDisabled);

    // Check if user has disabled cookie consent
    const cookieConsentDisabled = localStorage.getItem('cookie-consent-disabled') === 'true';
    setIsCookieConsentEnabled(!cookieConsentDisabled);
  }, []);

  // Performance optimization: Handle sidebar state
  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Performance optimization: Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Toggle sidebar with Ctrl+Shift+S
      if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault();
        handleSidebarToggle();
      }
      
      // Toggle performance monitoring with Ctrl+Shift+P
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsPerformanceMonitoringEnabled(prev => !prev);
        localStorage.setItem('performance-monitoring-enabled', (!isPerformanceMonitoringEnabled).toString());
      }
      
      // Toggle accessibility with Ctrl+Shift+A
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsAccessibilityEnabled(prev => !prev);
        localStorage.setItem('accessibility-disabled', (!isAccessibilityEnabled).toString());
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleSidebarToggle, isPerformanceMonitoringEnabled, isAccessibilityEnabled]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-cyan-500 text-black px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
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
        <UltraFuturisticNavigation2040 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={handleSidebarClose} 
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28"
            aria-label="Main content"
          >
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2040 />
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer 
        enabled={isAccessibilityEnabled}
        showUI={isAccessibilityEnabled}
      />
      <PerformanceMonitor 
        enabled={isPerformanceMonitoringEnabled}
        logToConsole={process.env.NODE_ENV === 'development'}
        showUI={isPerformanceMonitoringEnabled}
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner 
        enabled={isCookieConsentEnabled}
        showUI={isCookieConsentEnabled}
      />

      {/* Performance Monitoring Toggle Button */}
      {!isPerformanceMonitoringEnabled && (
        <button
          onClick={() => {
            setIsPerformanceMonitoringEnabled(true);
            localStorage.setItem('performance-monitoring-enabled', 'true');
          }}
          className="fixed bottom-4 right-4 z-40 p-3 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-full shadow-lg backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Enable performance monitoring"
          title="Press Ctrl+Shift+P to enable performance monitoring"
        >
          📊
        </button>
      )}

      {/* Accessibility Toggle Button */}
      {!isAccessibilityEnabled && (
        <button
          onClick={() => {
            setIsAccessibilityEnabled(true);
            localStorage.setItem('accessibility-disabled', 'false');
          }}
          className="fixed bottom-4 left-4 z-40 p-3 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-full shadow-lg backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Enable accessibility features"
          title="Press Ctrl+Shift+A to enable accessibility features"
        >
          ♿
        </button>
      )}
    </div>
  );
}
