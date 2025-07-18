// CRITICAL: Import immediate process polyfill FIRST to prevent process.env errors
import '../src/utils/immediate-process-polyfill';
import * as ProductionLogger from '@/utils/productionLogger';


// CRITICAL: Runtime check - polyfills should be loaded from document script and webpack banner
if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
  // logInfo('🚨 APP.TSX RUNTIME CHECK - Polyfills should be active');
}

// Enhanced error logging - import early for comprehensive coverage
import _enhancedErrorLogger from '../src/utils/enhanced-error-logger';

// Add global error handling for undefined components
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('getInitialProps')) {
      ProductionLogger.logErrorToProduction('Component loading error caught: ' + String(event.reason));
      event.preventDefault(); // Prevent the error from crashing the app
    }
  });
  
  // Additional error handling for process.env errors
  window.addEventListener('error', (event) => {
    if (event.message?.includes('Cannot read properties of undefined')) {
      ProductionLogger.logErrorToProduction('Runtime error caught: ' + String(event.error));
      event.preventDefault();
    }
  });
  
  // Enhanced error handling for getInitialProps and http errors
  window.addEventListener('error', (event) => {
    const errorMessage = event.message || '';
    const _errorSource = event.filename || '';
    
    // Handle getInitialProps errors
    if (errorMessage.includes('getInitialProps') || errorMessage.includes('Cannot read properties of undefined (reading \'getInitialProps\')')) {
      ProductionLogger.logErrorToProduction('getInitialProps error caught: ' + String(event.error));
      event.preventDefault();
      return;
    }
    
    // Handle http/https errors
    if (errorMessage.includes('http is not defined') || errorMessage.includes('https is not defined')) {
      ProductionLogger.logErrorToProduction('HTTP/HTTPS error caught: ' + String(event.error));
      event.preventDefault();
      return;
    }
    
    // Handle TypeScript helper errors
    if (errorMessage.includes('__extends') || errorMessage.includes('__assign') || errorMessage.includes('Cannot destructure property')) {
      ProductionLogger.logErrorToProduction('TypeScript helper error caught: ' + String(event.error));
      event.preventDefault();
      return;
    }
  });
  
  // Enhanced unhandled rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const message = reason?.message || '';
    
    // Handle getInitialProps promise rejections
    if (message.includes('getInitialProps') || message.includes('Cannot read properties of undefined (reading \'getInitialProps\')')) {
      ProductionLogger.logErrorToProduction('getInitialProps promise rejection caught: ' + String(reason));
      event.preventDefault();
      return;
    }
    
    // Handle component loading errors
    if (message.includes('Failed to load component') || message.includes('Invalid component')) {
      ProductionLogger.logErrorToProduction('Component loading promise rejection caught: ' + String(reason));
      event.preventDefault();
      return;
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
          ProductionLogger.logErrorToProduction('Blank screen detected - attempting recovery');
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { CartProvider } from '@/context/CartContext';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../src/index.css'; // Restored main CSS import
import '../src/components/video/video-call.css';

// Dynamically import the Toaster component from sonner for client-side rendering only
const Toaster = dynamic(
  async () => {
    try {
      const mod = await import('sonner');
      return mod.Toaster;
    } catch (_err) {
      ProductionLogger.logWarn('Toaster dependency missing:', { error: _err });
      return () => null;
    }
  },
  { ssr: false }
);

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
    const handleError = (_event: ErrorEvent) => {
      ProductionLogger.logErrorToProduction(`Error in ${name}: ` + String(_event.error));
      setError(_event.error);
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

// Provider wrapper with Redux, React Query, i18n, Auth, and Cart
const ProviderWrapper: React.FC<{ children: React.ReactNode; queryClient: QueryClient }> = ({ children, queryClient }) => {
  return (
    <ErrorBoundary name="BasicWrapper">
      <ErrorBoundary name="QueryClientProvider">
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary name="ReduxProvider">
            <Provider store={store}>
              <ErrorBoundary name="I18nextProvider">
                <I18nextProvider i18n={i18n}>
                  <ErrorBoundary name="AuthProvider">
                    <AuthProvider>
                      <ErrorBoundary name="CartProvider">
                        <CartProvider>
                          {children}
                        </CartProvider>
                      </ErrorBoundary>
                    </AuthProvider>
                  </ErrorBoundary>
                </I18nextProvider>
              </ErrorBoundary>
            </Provider>
          </ErrorBoundary>
        </QueryClientProvider>
      </ErrorBoundary>
    </ErrorBoundary>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
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
      ProductionLogger.logErrorToProduction('Route change error');
    };

    // Only add event listeners if router.events exists
    if (router.events) {
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeError);

      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        router.events.off('routeChangeError', handleRouteChangeError);
      };
    }

    // Return empty cleanup function if router.events doesn't exist
    return () => {};
  }, [router]); // Keep router in dependencies but add safety check

  // Show loading screen
  if (isLoading) {
    return <SimpleLoading />;
  }

  // Main app render with Redux, React Query, i18n, Auth, and Cart
  return (
    <ProviderWrapper queryClient={queryClient}>
      <Head>
        <link rel="stylesheet" href="/skeleton.css" />
      </Head>
      <Component {...pageProps} />
      <Toaster richColors position="top-right" />
    </ProviderWrapper>
  );
}
