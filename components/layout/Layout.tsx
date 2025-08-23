import React from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import SEOOptimizer from '../SEOOptimizer';
import ErrorBoundary from '../ErrorBoundary';

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
        
        <div className="flex">
          <EnhancedSidebar2025 isOpen={false} onClose={() => {}} />
          
          <main id="main-content" className="flex-1">
            <SEOOptimizer
              title={title}
              description={description}
              keywords={keywords}
              ogImage={ogImage}
            />
            {children}
          </main>
        </div>
        
        <UltraFuturisticFooter2040 />
        
        <AccessibilityEnhancer />
        <PerformanceOptimizer />
      </div>
    </ErrorBoundary>
  );
};
