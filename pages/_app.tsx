import '../styles/globals.css'
import '../styles/accessibility.css'
import type { AppProps } from 'next/app'

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
      if (root && root.innerText.trim() === '') {
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
    }, 3000);
  });
}

import React, { useEffect, useState, Suspense } from 'react'; // Added Suspense
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Import dynamic
import '../src/index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
import AppFallback from '@/components/AppFallback';
import EnvironmentCheck from '@/components/EnvironmentCheck';
import { SimpleErrorBoundary } from '@/components/SimpleErrorBoundary';
import { SimpleLoading } from '@/components/SimpleLoading';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';

// Create a single QueryClient instance for the entire app
const queryClient = new QueryClient();

// Synchronously import core providers
import { AuthProvider } from '../src/context/auth/AuthProvider';
import { WhitelabelProvider } from '../src/context/WhitelabelContext';
import { CartProvider } from '../src/context/CartContext';
import { FeedbackProvider } from '../src/context/FeedbackContext';
import { ThemeProvider } from '../src/context/ThemeContext';

// Fallback component for dynamic providers
const DynamicProviderFallback: React.FC<{ providerName: string }> = ({ providerName }) => (
  <div style={{ display: 'none' }} data-provider-loading={providerName}>
    Loading {providerName}...
  </div>
);

// Dynamically import potentially heavy providers
const DynamicWalletProvider = dynamic(() =>
  import('../src/context/WalletContext').then(mod => mod.WalletProvider),
  { ssr: false, loading: () => <DynamicProviderFallback providerName="Wallet System" /> }
);

const DynamicAnalyticsProvider = dynamic(() =>
  import('../src/context/AnalyticsContext').then(mod => mod.AnalyticsProvider),
  { ssr: false, loading: () => <DynamicProviderFallback providerName="Analytics" /> }
);

// Simple local Error Boundary for specific components
class SimpleBoundary extends React.Component<{ children: React.ReactNode, fallbackUI: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error: any) { console.error("SimpleBoundary derived error:", error); return { hasError: true }; }
  componentDidCatch(error: any, errorInfo: any) { console.error("SimpleBoundary caught:", error, errorInfo); }
  render() {
    if (this.state.hasError) { return this.props.fallbackUI; }
    return this.props.children;
  }
}

// Error boundary component
class AppErrorBoundary extends React.Component<
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
    console.error('App Error Boundary caught an error:', error, errorInfo);
    
    // Report to enhanced error logger
    if (typeof window !== 'undefined') {
      enhancedErrorLogger.captureReactError(error, errorInfo, errorInfo.componentStack || undefined);
      enhancedErrorLogger.addBreadcrumb('error-boundary', `React error in component: ${error.name}`, 'error');
    }
  }

  render() {
    if (this.state.hasError) {
      return <AppFallback error={this.state.error} retry={() => window.location.reload()} />;
    }

    return this.props.children;
  }
}

// Loading screen component
const LoadingScreen: React.FC<{ progress: number }> = ({ progress }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    fontFamily: 'Arial, sans-serif'
  }}>
    <div style={{
      width: '120px',
      height: '120px',
      border: '8px solid #e9ecef',
      borderTop: '8px solid #007bff',
      borderRadius: '50%',
      animation: 'spin 2s linear infinite'
    }} />
    <h2 style={{ marginTop: '2rem', color: '#495057' }}>
      Initializing Zion App...
    </h2>
    <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>
      Loading components ({progress}%)
    </p>
    <div style={{
      width: '200px',
      height: '6px',
      backgroundColor: '#e9ecef',
      borderRadius: '3px',
      marginTop: '1rem'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: '#007bff',
        borderRadius: '3px',
        transition: 'width 0.3s ease'
      }} />
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Provider wrapper with error handling
const ProviderWrapper: React.FC<{ children: React.ReactNode; client: QueryClient }> = ({ children, client }) => {
  return (
    <SimpleErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <QueryClientProvider client={client}>
            <HydrationErrorBoundary>
              <ThemeProvider>
                <WhitelabelProvider>
                  <AuthProvider>
                    <CartProvider>
                      <FeedbackProvider>
                        <DynamicWalletProvider>
                          <DynamicAnalyticsProvider>
                            {children}
                            <EnvironmentCheck />
                          </DynamicAnalyticsProvider>
                        </DynamicWalletProvider>
                      </FeedbackProvider>
                    </CartProvider>
                  </AuthProvider>
                </WhitelabelProvider>
              </ThemeProvider>
            </HydrationErrorBoundary>
          </QueryClientProvider>
        </ReduxProvider>
      </I18nextProvider>
    </SimpleErrorBoundary>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Show loading immediately with timeout
  useEffect(() => {
    // Set a timeout to hide loading after 3 seconds maximum
    const timer = setTimeout(() => {
      console.log('App loading timeout reached - showing content');
      setIsLoading(false);
    }, 3000);

    // Also try to hide loading after 1 second if everything is ready
    const quickTimer = setTimeout(() => {
      if (document.readyState === 'complete') {
        console.log('Document ready - showing content early');
        setIsLoading(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(quickTimer);
    };
  }, []);

  // Failsafe: ensure loading state resolves even if initialization hangs
  useEffect(() => {
    const forceTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Force completing app initialization due to timeout');
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(forceTimer);
  }, [isLoading]);

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
    return <SimpleLoading message="Initializing Zion Tech Marketplace..." />;
  }

  // Main app render with all providers
  return (
    <ProviderWrapper client={queryClient}>
      <Component {...pageProps} />
    </ProviderWrapper>
  );
}

export default MyApp;
