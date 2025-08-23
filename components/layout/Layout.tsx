import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2025 from './UltraFuturisticFooter2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import TopContactBar from './TopContactBar';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');


  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }


    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    if (sidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [sidebarOpen]);

  // Handle focus management for accessibility
  useEffect(() => {
    if (sidebarOpen) {
      // Focus the first focusable element in the sidebar
      const firstFocusable = document.querySelector('.sidebar-focusable') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [sidebarOpen]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#06b6d4" />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2036 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            aria-hidden={!sidebarOpen}
            aria-label="Main navigation menu"
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28 min-h-screen"
            aria-label="Main content"
          >
            {/* Announcement for screen readers when sidebar opens/closes */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
            >
              {sidebarOpen ? 'Sidebar opened' : 'Sidebar closed'}
            </div>
            
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
>>>>>>> 0d3d59dc48bc65c272e3c7f2106b07881fc97407
  );
}
