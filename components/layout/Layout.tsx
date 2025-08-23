import React, { useState } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedAnalytics from '../EnhancedAnalytics';
import SecurityEnhancer from '../SecurityEnhancer';
import MobileOptimizer from '../MobileOptimizer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

  return (
    <AccessibilityEnhancer>
      <MobileOptimizer>
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
          {/* Skip to content link for accessibility */}
          <a href="#main" className="skip-link">Skip to main content</a>
          
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
                onClose={() => setSidebarOpen(false)} 
              />
              
              <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
                {children}
              </main>
            </div>
            
            {/* Footer */}
            <UltraFuturisticFooter2040 />
          </div>

          {/* Enhancement Toggle */}
          <button
            onClick={() => setShowEnhancements(!showEnhancements)}
            className="fixed top-20 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
            title="Toggle Enhancement Tools"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Enhancement Tools */}
          {showEnhancements && (
            <>
              <PerformanceMonitor showUI={true} />
              <EnhancedAnalytics showUI={true} />
              <SecurityEnhancer showUI={true} />
            </>
          )}
          
          {/* Cookie Consent Banner */}
          <CookieConsentBanner />
        </div>
      </MobileOptimizer>
    </AccessibilityEnhancer>
  );
}
