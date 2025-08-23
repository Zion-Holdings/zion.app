import React from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2045 from '../backgrounds/UltraFuturisticBackground2045';
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import EnhancedPerformanceOptimizer from '../EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  type?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  ogImage,
  type
}) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
        {/* SVG Filters for Color Blindness Support */}
        <svg width="0" height="0" className="sr-only">
          <defs>
            <filter id="protanopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"
              />
            </filter>
            <filter id="deuteranopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"
              />
            </filter>
            <filter id="tritanopia-filter">
              <feColorMatrix
                type="matrix"
                values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>

        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <EnhancedPerformanceMonitor />
      <EnhancedPerformanceOptimizer />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
      
      {/* Service Worker Update Notification */}
      <div id="sw-update-notification" className="hidden fixed bottom-4 right-4 bg-cyan-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Update Available</h4>
            <p className="text-sm text-cyan-100 mb-3">A new version of Zion Tech Group is available.</p>
            <div className="flex gap-2">
              <button 
                onClick={() => window.location.reload()} 
                className="bg-white text-cyan-600 px-3 py-1 rounded text-sm font-medium hover:bg-cyan-500 transition-colors"
              >
                Update Now
              </button>
              <button 
                onClick={() => document.getElementById('sw-update-notification')?.classList.add('hidden')} 
                className="text-cyan-100 hover:text-white text-sm transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>
        
        <UltraFuturisticFooter2040 />
        
        <AccessibilityEnhancer />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
};
