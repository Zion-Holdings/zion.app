import React from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2045 from '../backgrounds/UltraFuturisticBackground2045';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../EnhancedPerformanceMonitor';
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

        <UltraFuturisticNavigation2040 />
        
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2045 />
        
        {/* Sidebar */}
        <EnhancedSidebar2025 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        <UltraFuturisticFooter2040 />
        
        <AccessibilityEnhancer />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
};
