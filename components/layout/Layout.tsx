import React, { useState, useEffect, Suspense } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import SEOOptimizer from '../SEOOptimizer';
import MobileOptimizer from '../MobileOptimizer';
import Analytics from '../Analytics';
import { Loader2, AlertTriangle } from 'lucide-react';

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

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-center">
      <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
      <p className="text-gray-300 text-lg">Loading Zion Tech Group...</p>
      <div className="mt-4 flex space-x-2 justify-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  </div>
);

// Enhanced error boundary component
const EnhancedErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: globalThis.ErrorEvent) => {
      // Layout error caught
      setError(event.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: globalThis.PromiseRejectionEvent) => {
      // Unhandled promise rejection
      setError(new Error(event.reason));
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-300 mb-6">
            We're experiencing technical difficulties. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Refresh Page
          </button>
          {error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-400">Error Details</summary>
              <pre className="mt-2 text-xs text-red-400 bg-red-900/20 p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        // Trigger search functionality
      }
      
      // Escape to close sidebar
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* SEO Optimization */}
        <SEOOptimizer {...seo} />
        
        {/* Enhanced Skip to content link for accessibility */}
        <a 
          href="#main" 
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>
        
        {/* Online/Offline Status Indicator */}
        <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isOnline ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="flex items-center space-x-2 px-3 py-2 bg-red-500 text-white rounded-lg text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>You're offline</span>
          </div>
        </div>
        
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
            
            <main 
              id="main" 
              role="main" 
              className="flex-1 pt-24 lg:pt-28"
              tabIndex={-1}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <MobileOptimizer>
                  {children}
                </MobileOptimizer>
              </Suspense>
            </main>
          </div>
          
          {/* Footer */}
          <UltraFuturisticFooter2040 />
        </div>

        {/* Enhanced Components */}
        <AccessibilityEnhancer>
          <PerformanceMonitor showUI={false} />
        </AccessibilityEnhancer>
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
        
        {/* Analytics Dashboard */}
        <Analytics showUI={true} autoRefresh={true} refreshInterval={60000} />
        
        {/* Performance and Accessibility Quick Actions */}
        <div className="fixed bottom-4 right-4 z-40 space-y-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
}
