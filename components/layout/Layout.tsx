import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2025 from './UltraFuturisticFooter2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // Show offline indicator
  if (!isOnline) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">You're Offline</h1>
          <p className="text-white/70">Please check your internet connection and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Skip to content link for accessibility */}
        <a 
          href="#main" 
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        
        {/* Online/Offline Status Indicator */}
        <div className={`fixed top-4 right-4 z-50 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
          isOnline 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {isOnline ? 'Online' : 'Offline'}
        </div>
        
        {/* Futuristic Background */}
        <UltraFuturisticBackground2036 />
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Navigation */}
          <UltraFuturisticNavigation2045 />
          
          {/* Sidebar and Main Content */}
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <main 
              id="main" 
              role="main" 
              className="flex-1 pt-32 lg:pt-36"
              aria-label="Main content"
            >
              {isLoading ? (
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white/70">Loading Zion Tech Group...</p>
                  </div>
                </div>
              ) : (
                children
              )}
            </main>
          </div>
          
          {/* Footer */}
          <UltraFuturisticFooter2025 />
        </div>

        {/* Accessibility and Performance Tools */}
        <AccessibilityEnhancer />
        <PerformanceMonitor />
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />

        {/* PWA Install Prompt */}
        <div id="pwa-install-prompt" className="hidden fixed bottom-4 left-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-xl shadow-lg z-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Install Zion Tech Group</h3>
              <p className="text-sm opacity-90">Get the app for a better experience</p>
            </div>
            <div className="flex gap-2">
              <button 
                id="pwa-install-accept"
                className="px-4 py-2 bg-white text-cyan-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Install
              </button>
              <button 
                id="pwa-install-dismiss"
                className="px-4 py-2 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics Display (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
            <div>FPS: <span id="fps-counter">--</span></div>
            <div>Memory: <span id="memory-usage">--</span></div>
          </div>
        )}
      </div>
    </EnhancedErrorBoundary>
  );
}
