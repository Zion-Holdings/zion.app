// CRITICAL: Runtime check - polyfills should be loaded from document script and webpack banner
if (process.env.NODE_ENV === 'development') {
  console.log('🚨 APP.TSX RUNTIME CHECK - Polyfills should be active');
  console.log('- globalThis.__extends:', !!(globalThis as any).__extends);
  console.log('- globalThis.__assign:', !!(globalThis as any).__assign);
  console.log('- globalThis.process:', !!(globalThis as any).process);
}

// CRITICAL: Import environment polyfill FIRST to prevent process.env errors
import '../src/utils/env-polyfill';

// Enhanced error logging - import early for comprehensive coverage
import enhancedErrorLogger from '../src/utils/enhanced-error-logger';

// Add global error handling for undefined components
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('getInitialProps')) {
      console.error('Component loading error caught:', event.reason);
      event.preventDefault(); // Prevent the error from crashing the app
    }
  });
  
  // Additional error handling for process.env errors
  window.addEventListener('error', (event) => {
    if (event.message?.includes('Cannot read properties of undefined')) {
      console.error('Runtime error caught:', event.error);
      event.preventDefault();
    }
  });
  
  // Add blank screen detection
  window.addEventListener('load', () => {
    setTimeout(() => {
      const root = document.getElementById('__next');
      if (root) {
        const hasVisible = Array.from(root.children || []).some(
          (el) => !['SCRIPT', 'STYLE', 'LINK'].includes(el.tagName)
        );
        if (!hasVisible && root.innerText.trim() === '') {
          console.error('Blank screen detected - attempting recovery');
          // Show a basic fallback with additional instructions
          root.innerHTML = `
          <div style="padding: 2rem; text-align: center; font-family: sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 style="color: #333; margin-bottom: 1rem;">Zion Tech Marketplace</h1>
            <p style="color: #666; margin-bottom: 1rem;">Loading application...</p>
            <p style="color: #666; margin-bottom: 1rem;">If refreshing doesn't work, visit <a href='/offline.html'>offline mode</a> for troubleshooting steps.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Reload Page
            </button>
          </div>
        `;
        }
      }
    }, 3000);
  });
}

import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import '../src/index.css';

// Dynamically import the Toaster component from sonner for client-side rendering only
const Toaster = dynamic(() => import('sonner').then((mod) => mod.Toaster), {
  ssr: false,
});

// Simple loading component
const SimpleLoading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  }}>
    <div style={{ textAlign: 'center' }}>
      <h1>Zion Tech Marketplace</h1>
      <p>Loading...</p>
    </div>
  </div>
);

// Enhanced error boundary with detailed logging
const ErrorBoundary: React.FC<{ children: React.ReactNode; name: string }> = ({ children, name }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error(`Error in ${name}:`, event.error);
      setError(event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [name]);

  if (hasError) {
    return (
      <div style={{
        padding: '1rem',
        border: '2px solid #ff4444',
        borderRadius: '8px',
        backgroundColor: '#fff5f5',
        color: '#cc0000',
        margin: '1rem'
      }}>
        <h3>Error in {name}</h3>
        <p>{error?.message || 'Unknown error occurred'}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

// Ultra-minimal provider wrapper with no external providers
const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary name="BasicWrapper">
      {children}
    </ErrorBoundary>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Show loading immediately
  useEffect(() => {
    // Set a timeout to hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle router events for page transitions
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Could add route change loading if needed
    };

    const handleRouteChangeComplete = () => {
      // Route change completed
    };

    const handleRouteChangeError = () => {
      console.error('Route change error');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  // Show loading screen
  if (isLoading) {
    return <SimpleLoading />;
  }

  // Main app render with no external providers
  return (
    <ProviderWrapper>
      <Component {...pageProps} />
      <Toaster richColors position="top-right" />
    </ProviderWrapper>
  );
}
