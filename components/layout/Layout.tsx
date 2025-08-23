import React, { ReactNode } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Navigation */}
        <UltraFuturisticNavigation2040 />
        
        {/* Main Content */}
        <main id="main" role="main" className="pt-24 lg:pt-28">
          {children}
        </main>
        
        {/* Footer */}
        <UltraAdvancedFuturisticFooter2025 />
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
}
