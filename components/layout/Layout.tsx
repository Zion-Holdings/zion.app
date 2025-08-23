import React, { useState, useEffect, useCallback, useMemo } from 'react';
import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Performance optimization: Debounced scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  // Performance optimization: Resize handler
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1024);
    if (window.innerWidth >= 1024 && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [sidebarOpen]);

  // Performance optimization: Effect with cleanup
  useEffect(() => {
    handleResize(); // Initial check
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  // Performance optimization: Memoized sidebar state
  const sidebarState = useMemo(() => ({
    isOpen: sidebarOpen,
    onClose: () => setSidebarOpen(false),
    isMobile
  }), [sidebarOpen, isMobile]);

  // Performance optimization: Memoized main content classes
  const mainContentClasses = useMemo(() => {
    const baseClasses = 'flex-1 pt-24 lg:pt-28';
    const transitionClasses = 'transition-all duration-300 ease-in-out';
    const sidebarOffset = sidebarOpen && isMobile ? 'lg:ml-0' : '';
    
    return `${baseClasses} ${transitionClasses} ${sidebarOffset}`;
  }, [sidebarOpen, isMobile]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Enhanced Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:font-medium"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Enhanced Navigation with scroll state */}
        <div className={`transition-all duration-300 ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
          <UltraFuturisticNavigation2036 
            isScrolled={isScrolled}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            isMobile={isMobile}
          />
        </div>
        
        {/* Enhanced Sidebar and Main Content */}
        <div className="flex relative">
          {/* Sidebar */}
          <EnhancedSidebar2025 {...sidebarState} />
          
          {/* Main Content */}
          <main 
            id="main" 
            role="main" 
            className={mainContentClasses}
            aria-label="Main content"
          >
            {/* Enhanced Error Boundary */}
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2036 />
      </div>

      {/* Enhanced Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Enhanced Cookie Consent Banner */}
      <CookieConsentBanner />
      
      {/* Enhanced Keyboard Navigation Support */}
      <KeyboardNavigationSupport 
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  );
}

// Enhanced Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Layout Error Boundary caught an error:', error, errorInfo);
    
    // Log to error reporting service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-gray-900 rounded-lg text-sm text-red-400 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced Keyboard Navigation Support Component
const KeyboardNavigationSupport: React.FC<{
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}> = ({ sidebarOpen, onSidebarToggle }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key closes sidebar
      if (event.key === 'Escape' && sidebarOpen) {
        onSidebarToggle();
      }
      
      // Ctrl/Cmd + K opens search (if implemented)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        // Focus search input if available
        const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
      
      // Ctrl/Cmd + M toggles sidebar
      if ((event.ctrlKey || event.metaKey) && event.key === 'm') {
        event.preventDefault();
        onSidebarToggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, onSidebarToggle]);

  return null;
};

// TypeScript declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
