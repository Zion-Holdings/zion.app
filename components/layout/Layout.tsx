import React, { useState } from 'react';
import UltraFuturisticNavigation2044 from './UltraFuturisticNavigation2044';
import UltraFuturisticFooter2044 from './UltraFuturisticFooter2044';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2043 from '../backgrounds/UltraFuturisticBackground2043';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2043 theme="consciousness" intensity="high" />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2044 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2044 />
      </div>
      
      {/* Enhanced Components */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      <CookieConsentBanner />
    </div>
  );
}
