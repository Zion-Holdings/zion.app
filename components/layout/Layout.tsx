import React, { useState } from 'react';

import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2037 from '../backgrounds/UltraFuturisticBackground2037';
import TopContactBar from './TopContactBar';
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import AccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Revolutionary 2045 Technology",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
  keywords = "AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology",
  ogImage = "/og-image.jpg",
  canonicalUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (typeof window !== 'undefined' && window.confirm) {
                    if (window.confirm('A new version is available! Would you like to update?')) {
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      window.location.reload();
                    }
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          // Silently handle service worker registration errors
          // eslint-disable-next-line no-console
          console.error('Service Worker registration failed:', error);
        });
    }

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      {/* Futuristic Background */}
      <UltraFuturisticBackground2037 theme="quantum-neon" intensity="medium" />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2036 />
        
        {/* Enhanced Sidebar */}
        <EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content */}
        <main className="pt-32 pb-16 relative z-10">
          <EnhancedErrorBoundary>
            {children}
          </EnhancedErrorBoundary>
        </main>
        
        {/* Enhanced Footer */}
        <EnhancedFooter2025 />
        
        {/* Performance Monitor */}
        <EnhancedPerformanceMonitor />
        
        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer />
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
        
        {/* Offline Indicator */}
        {!isOnline && (
          <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm">You are offline</span>
            </div>
          </div>
        )}
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
}
