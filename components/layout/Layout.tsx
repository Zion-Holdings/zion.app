import React, { useState } from 'react';
import UltraFuturisticNavigation2025 from './UltraFuturisticNavigation2025';
import UltraFuturisticFooter2025 from './UltraFuturisticFooter2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Skip to content link for accessibility */}
        <a href="#main" className="skip-link">Skip to main content</a>
        
        {/* Futuristic Background */}
        <UltraFuturisticBackground2036 />
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Navigation */}
          <UltraFuturisticNavigation2025 />
          
          {/* Sidebar and Main Content */}
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <main id="main" role="main" className="flex-1 pt-32 lg:pt-36">
              {children}
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
      </div>
    </PerformanceOptimizer>
  );
}
