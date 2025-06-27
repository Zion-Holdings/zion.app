import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { WhitelabelProvider } from '@/context/WhitelabelContext'; // Added WhitelabelProvider
import { WalletProvider } from '@/context/WalletContext'; // Added WalletProvider
import { useAuth } from '@/hooks/useAuth';
import { AnalyticsProvider } from '@/context/AnalyticsContext'; // Added AnalyticsProvider
import { CartProvider } from '@/context/CartContext'; // Added CartProvider
import { ErrorProvider } from '@/context/ErrorContext';
import { FeedbackProvider } from '@/context/FeedbackContext'; // Added FeedbackProvider
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { ToastContainer } from '@/components/ToastContainer';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { BetaBanner } from '@/components/BetaBanner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import dynamic from 'next/dynamic';
import { PerformanceMonitor } from '@/components/ui/performance-monitor';
import { BundleAnalyzer } from '@/components/ui/bundle-analyzer';
import { QuickActions } from '@/components/ui/quick-actions';

// Dynamically load heavy components to improve initial load time
const IntercomChat = dynamic(() => import('@/components/IntercomChat'), {
  ssr: false,
  loading: () => null
});
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
// Import Next.js fonts for optimal loading and CLS prevention
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import {
  validateProductionEnvironment,
  initializeServices,
} from '@/utils/environmentConfig';
import {
  initializePerformanceOptimizations,
  initializePerformance,
} from '@/utils/performance';
import '@/utils/globalFetchInterceptor';
import '@/utils/consoleErrorToast';
import { initConsoleLogCapture } from '@/utils/consoleLogCapture';
import { RouteChangeHandler } from '@/components/RouteChangeHandler';
import { registerServiceWorker } from '@/serviceWorkerRegistration';
import PageTransition from '@/components/PageTransition';
import { AnimatePresence } from 'framer-motion';

// Configure fonts with optimal loading strategies
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  preload: true, // Enable automatic preloading
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-poppins',
  preload: true, // Enable automatic preloading
});
const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isAuthenticated } = useAuth();

  // Prevent hydration issues by ensuring this only runs on client
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Provide safe defaults during initial render to prevent blank screens
  const safeAuthState = React.useMemo(
    () => ({
      isAuthenticated: isClient ? !!isAuthenticated : false,
      user: isClient ? user : null,
    }),
    [isClient, isAuthenticated, user],
  );

  return (
    <LanguageProvider authState={safeAuthState}>{children}</LanguageProvider>
  );
};

// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: false, // Disable retries for faster error handling
      },
    },
  }));
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Optimize initialization by deferring non-critical operations
  React.useEffect(() => {
    let isMounted = true;

    const initializeApp = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
          console.log('[App] Starting optimized initialization...');
        }

        // Critical: Initialize error handlers first
        initializeGlobalErrorHandlers();

        // Critical: Validate environment (graceful in development)
        try {
          validateProductionEnvironment();
        } catch (error) {
          console.warn('[App] Environment validation warning:', error);
        }

        // Defer non-critical initializations
        setTimeout(() => {
          if (!isMounted) return;

          // Initialize services asynchronously
          initializeServices().catch((err) =>
            console.warn('Service initialization failed', err),
          );

          // Initialize performance monitoring only if needed
          if (typeof window !== 'undefined' && process.env.PERFORMANCE_MONITORING === 'true') {
            initializePerformanceOptimizations();
            initializePerformance();
          }

          // Initialize console log capture only in development
          if (process.env.NODE_ENV === 'development') {
            initConsoleLogCapture();
          }
        }, 100); // Defer by 100ms to improve initial render time

        // Mark as initialized immediately for critical path
        if (isMounted) {
          setIsInitialized(true);
        }
      } catch (error) {
        console.error('[App] Critical initialization error:', error);
        
        // Only send to Sentry if it's available
        try {
          if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
            Sentry.captureException(error);
          }
        } catch (sentryError) {
          console.warn('[App] Could not send error to Sentry:', sentryError);
        }

        // Still mark as initialized to prevent infinite loading
        if (isMounted) {
          setIsInitialized(true);
        }
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, []);

  // Set Sentry context for current route (optimized)
  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN && !process.env.NEXT_PUBLIC_SENTRY_DSN.includes('dummy')) {
      Sentry.setTag('route', router.pathname);
      Sentry.setContext('query', router.query);
    }
  }, [router.pathname, router.query]);

  // Register service worker only in production
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        registerServiceWorker();
      }, 2000); // Defer service worker registration
    }
  }, []);

  // Show optimized loading screen during critical initialization
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Initializing Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">Optimizing performance...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* Next.js font optimization handles preloading automatically */}
        {/* Font optimization CSS to prevent CLS */}
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }

          /* Optimized fallback font adjustments */
          @font-face {
            font-family: 'Inter Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 107%;
            ascent-override: 90%;
            descent-override: 25%;
            line-gap-override: 0%;
          }

          @font-face {
            font-family: 'Poppins Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 102%;
            ascent-override: 92%;
            descent-override: 24%;
            line-gap-override: 0%;
          }

          /* Performance optimizations */
          .font-inter { font-family: var(--font-inter), 'Inter Fallback', system-ui, sans-serif; }
          .font-poppins { font-family: var(--font-poppins), 'Poppins Fallback', system-ui, sans-serif; }
        `}</style>
      </Head>
      <div className={`${inter.variable} ${poppins.variable}`}>
        <ProductionErrorBoundary>
          <RootErrorBoundary>
            <HydrationErrorBoundary>
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-pulse text-lg">Loading...</div>
                  </div>
                }
              >
                <GlobalErrorBoundary>
                  <QueryClientProvider client={queryClient}>
                    <ApiErrorBoundary>
                      <ReduxProvider store={store}>
                        <I18nextProvider i18n={i18n}>
                          <ErrorProvider>
                            <AuthProvider>
                              <WhitelabelProvider>
                                <LanguageProviderWrapper>
                                  <WalletProvider>
                                    <CartProvider>
                                      <AnalyticsProvider>
                                        <FeedbackProvider>
                                          <ThemeProvider>
                                            <AppLayout>
                                              <RouteChangeHandler
                                                resetScrollOnChange={true}
                                                forceRerender={false}
                                              />
                                              <ErrorBoundary>
                                                <Component
                                                  key={router.asPath}
                                                  {...pageProps}
                                                />
                                              </ErrorBoundary>
                                              <ErrorResetOnRouteChange />
                                              <ToastContainer />
                                              <OfflineIndicator />
                                              <IntercomChat />
                                              <PerformanceMonitor />
                                              <BundleAnalyzer />
                                              <QuickActions />
                                            </AppLayout>
                                          </ThemeProvider>
                                        </FeedbackProvider>
                                      </AnalyticsProvider>
                                    </CartProvider>
                                  </WalletProvider>
                                </LanguageProviderWrapper>
                              </WhitelabelProvider>
                            </AuthProvider>
                          </ErrorProvider>
                        </I18nextProvider>
                      </ReduxProvider>
                    </ApiErrorBoundary>
                  </QueryClientProvider>
                </GlobalErrorBoundary>
              </React.Suspense>
            </HydrationErrorBoundary>
          </RootErrorBoundary>
        </ProductionErrorBoundary>
      </div>
    </>
  );
}

// Optimize component logging
if (process.env.NODE_ENV === 'development') {
  console.log('[App] MyApp component optimized and ready');
}

export default MyApp;
