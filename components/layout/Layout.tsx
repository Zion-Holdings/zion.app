import React, { useState } from 'react';
import UltraFuturisticNavigation2046 from './UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from './UltraFuturisticFooter2046';
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




  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* SEO Optimization */}
        <SEOOptimizer {...seo} />
        
        {/* Skip to content link for accessibility */}
        <a href="#main" className="skip-link">Skip to main content</a>
        
        {/* Futuristic Background */}
        <UltraFuturisticBackground2036 />
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Top Contact Bar */}
          <TopContactBar />
          
          {/* Navigation */}
          <UltraFuturisticNavigation2046 />
          
          {/* Sidebar and Main Content */}
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <main id="main" role="main" className="flex-1 pt-32 lg:pt-36">
              <MobileOptimizer>
                {children}
              </MobileOptimizer>
            </main>
          </div>
          
          {/* Footer */}
          <UltraFuturisticFooter2046 />
        </div>

        {/* Enhanced Components */}
        <AccessibilityEnhancer>
          <PerformanceMonitor showUI={false} />
        </AccessibilityEnhancer>
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
        
        {/* Analytics Dashboard */}
        <Analytics showUI={true} autoRefresh={true} refreshInterval={60000} />
        

      </div>
    </ErrorBoundary>
  );
}
