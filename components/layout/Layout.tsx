import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2037 from '../backgrounds/UltraFuturisticBackground2037';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} relative overflow-x-hidden transition-colors duration-300`}>
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2036 />
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-24 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
          )}
        </button>
        
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
        <UltraFuturisticFooter2036 />
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
}
