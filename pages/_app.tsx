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

import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../src/index.css';

// Import all providers synchronously for reliability
import { WhitelabelProvider } from '../src/context/WhitelabelContext';
import { WalletProvider } from '../src/context/WalletContext';
import { AnalyticsProvider } from '../src/context/AnalyticsContext';
import { CartProvider } from '../src/context/CartContext';
import { FeedbackProvider } from '../src/context/FeedbackContext';
import { ThemeProvider } from '../src/context/ThemeContext';
// import AppLayout from '../src/components/AppLayout';

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
  return (
    <AppErrorBoundary>
      <WhitelabelProvider>
        <WalletProvider>
          <AnalyticsProvider>
            <CartProvider>
              <FeedbackProvider>
                <ThemeProvider>
                  {children}
                </ThemeProvider>
              </FeedbackProvider>
            </CartProvider>
          </AnalyticsProvider>
        </WalletProvider>
      </WhitelabelProvider>
    </AppErrorBoundary>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [initializationError, setInitializationError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
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
            const reportWebVitals = (metric: any) => {
              // Report metrics to analytics service
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', metric.name, {
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  event_label: metric.id,
                  non_interaction: true,
                });
              }
              
              // Initialize comprehensive performance monitoring on first metric
              if (!(global as any).performanceMonitorInitialized) {
                (global as any).performanceMonitorInitialized = true;
                import('@/utils/performance-monitor').then(({ default: performanceMonitor }) => {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('🔧 Performance monitoring initialized');
                  }
                }).catch((error) => {
                  console.warn('Failed to initialize performance monitoring:', error);
                });
              }
            };
            
            onCLS(reportWebVitals);
            onFCP(reportWebVitals);
            onINP(reportWebVitals);
            onLCP(reportWebVitals);
            onTTFB(reportWebVitals);
          } catch (webVitalsError) {
            // Silently fail if web-vitals is not available
          }
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setInitializationError('Failed to initialize application. Please refresh the page.');
        setIsLoading(false);
      }
    };

    // Force initialization completion after maximum 3 seconds
    const forceInitTimeout = setTimeout(() => {
      console.warn('Force completing app initialization due to timeout');
      setLoadingProgress(100);
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
  );
}

export default MyApp;
