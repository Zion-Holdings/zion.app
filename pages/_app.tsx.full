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

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';

// Synchronously import core providers
import { AuthProvider } from '../src/context/auth/AuthProvider';
import { WhitelabelProvider } from '../src/context/WhitelabelContext';
import { CartProvider } from '../src/context/CartContext';
import { FeedbackProvider } from '../src/context/FeedbackContext';
import { ThemeProvider } from '../src/context/ThemeContext';

// Dynamically import potentially heavy providers
const DynamicWalletProvider = dynamic(() =>
  import('../src/context/WalletContext').then(mod => mod.WalletProvider),
  { ssr: false, loading: () => <DynamicProviderFallback providerName="Wallet System" /> }
);

const DynamicAnalyticsProvider = dynamic(() =>
  import('../src/context/AnalyticsContext').then(mod => mod.AnalyticsProvider),
  { ssr: false, loading: () => <DynamicProviderFallback providerName="Analytics" /> }
);

// Fallback component for dynamic providers
const DynamicProviderFallback: React.FC<{ providerName: string }> = ({ providerName }) => (
  <div style={{ display: 'none' }} data-provider-loading={providerName}>
    Loading {providerName}...
  </div>
);

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
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h2>⚠️ Application Error</h2>
          <p>Something went wrong while loading the application.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      );
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
const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Note: Suspense for dynamic imports is handled individually by next/dynamic.
  // A top-level Suspense here could be added if there are other suspense-using components.
  return (
    <AppErrorBoundary>
      <ReduxProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <WhitelabelProvider>
              <DynamicWalletProvider> {/* Use dynamic import */}
                <DynamicAnalyticsProvider> {/* Use dynamic import */}
                  <CartProvider>
                    <FeedbackProvider>
                      <ThemeProvider>
                        {children}
                      </ThemeProvider>
                    </FeedbackProvider>
                  </CartProvider>
                </DynamicAnalyticsProvider>
              </DynamicWalletProvider>
            </WhitelabelProvider>
          </AuthProvider>
        </I18nextProvider>
      </ReduxProvider>
    </AppErrorBoundary>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  // Start with isLoading true to show the loading screen immediately.
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [initializationError, setInitializationError] = useState<string | null>(null);
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    // Ensure loading screen is shown at the very start
    setIsLoading(true);
    setLoadingProgress(5); // Initial small progress

    const initializeApp = async () => {
      try {
        // Simulate progressive loading with realistic steps
        const steps = [
          { name: 'Loading Core Components', duration: 300 },
          { name: 'Initializing Providers', duration: 400 },
          { name: 'Setting up Analytics', duration: 200 },
          { name: 'Configuring Theme', duration: 200 },
          { name: 'Final Setup', duration: 300 }
        ];

        let currentProgress = 0;
        const progressStep = 100 / steps.length;

        for (let i = 0; i < steps.length; i++) {
          const step = steps[i];
          if (!step) continue;
          
          // Update progress
          currentProgress = (i + 1) * progressStep;
          setLoadingProgress(Math.min(currentProgress, 95));

          // Simulate async work
          await new Promise(resolve => setTimeout(resolve, step.duration));
        }

        // Final progress update
        setLoadingProgress(100);
        
        // Small delay to show completion
        await new Promise(resolve => setTimeout(resolve, 200));

        // PERFORMANCE: Initialize Web Vitals monitoring in production
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
          try {
            const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals');

            const reportWebVitalsSafely = (metric: any) => {
              try { // Add specific try-catch within the callback
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', metric.name, {
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    event_label: metric.id,
                    non_interaction: true,
                  });
                }

                // Initialize comprehensive performance monitoring on first metric (still keeping the actual import commented for now as per previous step)
                if (!(global as any).performanceMonitorInitialized) {
                  (global as any).performanceMonitorInitialized = true;
                  // import('@/utils/performance-monitor').then(...).catch(...);
                  console.log('Performance monitor import is currently skipped.');
                }
              } catch (reportError) {
                console.warn('Error during Web Vitals reporting:', reportError);
              }
            };
            
            // Wrap each listener setup in a try-catch as well, just in case
            try { onCLS(reportWebVitalsSafely); } catch (e) { console.warn('Failed to setup onCLS:', e); }
            try { onFCP(reportWebVitalsSafely); } catch (e) { console.warn('Failed to setup onFCP:', e); }
            try { onINP(reportWebVitalsSafely); } catch (e) { console.warn('Failed to setup onINP:', e); }
            try { onLCP(reportWebVitalsSafely); } catch (e) { console.warn('Failed to setup onLCP:', e); }
            try { onTTFB(reportWebVitalsSafely); } catch (e) { console.warn('Failed to setup onTTFB:', e); }

          } catch (webVitalsError) {
            console.warn('Web Vitals main initialization failed:', webVitalsError);
          }
        }
        
        setIsLoading(false); // Crucial: ensure isLoading is set to false
      } catch (error) {
        console.error('App initialization error:', error);
        setInitializationError('Failed to initialize application. Please refresh the page.');
        setIsLoading(false);
      }
    };

    // Force initialization completion after maximum 3 seconds
    const forceInitTimeout = setTimeout(() => {
      console.warn('Force completing app initialization due to timeout');
      setLoadingProgress(100); // Ensure progress is full on timeout
      setIsLoading(false);
    }, 3000);

    initializeApp().finally(() => {
      clearTimeout(forceInitTimeout);
    });

    return () => {
      clearTimeout(forceInitTimeout);
    };
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

  // Show loading screen during initialization
  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading - Zion App</title>
          <meta name="description" content="Zion App is loading..." />
        </Head>
        <LoadingScreen progress={loadingProgress} />
      </>
    );
  }

  // Show error screen if initialization failed
  if (initializationError) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2>🚫 Initialization Error</h2>
        <p>{initializationError}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Reload Application
        </button>
      </div>
    );
  }

  // Main app render with all providers
  return (
    <QueryClientProvider client={queryClient}> {/* Added QueryClientProvider */}
      <ProviderWrapper>
        <Head>
          <title>Zion App - AI Marketplace & DAO Platform</title>
        <meta name="description" content="Zion App - The ultimate AI marketplace and DAO platform for the future of work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
             <div>
         <Component {...pageProps} />
       </div>
      </ProviderWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
