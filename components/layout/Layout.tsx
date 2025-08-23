import React, { ReactNode } from 'react';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import EnhancedFooter2025 from './EnhancedFooter2025';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      
      <EnhancedNavigation2025 />
      <main id="main" role="main" className="pt-0">
        {children}
      </main>
      <EnhancedFooter2025 />
    </div>
  );
};

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
=======
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
