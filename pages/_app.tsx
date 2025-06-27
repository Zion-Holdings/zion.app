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
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { ToastContainer } from '@/components/ToastContainer';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { BetaBanner } from '@/components/BetaBanner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import { IntercomChat } from '@/components/IntercomChat';
import { HydrationErrorBoundary } from '@/components/HydrationErrorBoundary';
// Import Next.js fonts for optimal loading and CLS prevention
import { Inter, Montserrat } from 'next/font/google';
import Head from 'next/head';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import { validateProductionEnvironment, initializeServices } from '@/utils/environmentConfig';
import { initializePerformanceOptimizations, initializePerformance } from '@/utils/performance';
import '@/utils/globalFetchInterceptor';
import '@/utils/consoleErrorToast';
import { initConsoleLogCapture } from '@/utils/consoleLogCapture';
import { RouteChangeHandler } from '@/components/RouteChangeHandler';

// Configure fonts with optimal loading strategies
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-montserrat',
});

const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  
  // Prevent hydration issues by ensuring this only runs on client
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Provide safe defaults during initial render to prevent blank screens
  const safeAuthState = React.useMemo(() => ({
    isAuthenticated: isClient ? !!isAuthenticated : false,
    user: isClient ? user : null
  }), [isClient, isAuthenticated, user]);
  
  return (
    <LanguageProvider authState={safeAuthState}>
      {children}
    </LanguageProvider>
  );
};

// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    initConsoleLogCapture();
    if (process.env.NODE_ENV === 'development') {
      console.log('[App] MyApp main useEffect hook started.');
    }
    
    try {
      // Validate environment variables (graceful in development, strict in production)
      validateProductionEnvironment();
      
      // Initialize services based on configuration
      initializeServices().catch(err =>
        console.warn('Service initialization failed', err)
      );
      
      // Initialize global error handlers
      initializeGlobalErrorHandlers();
      
      // Initialize performance monitoring and optimizations
      initializePerformanceOptimizations();
      
      // Initialize advanced performance monitoring
      if (typeof window !== 'undefined') {
        initializePerformance();
      }
      
      const { publicRuntimeConfig } = getConfig();
      if (process.env.NODE_ENV === 'development') {
        console.log('[App] Public Runtime Config:', publicRuntimeConfig);
      }
      
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE) {
        Sentry.setTag('release', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE);
      }
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
        Sentry.setTag('environment', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'NOT_SET');
        console.log("SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'NOT_SET');
      }
      
      // Mark as initialized after successful setup
      setIsInitialized(true);
    } catch (error) {
      console.error('[App] Critical initialization error:', error);
      
      // Only send to Sentry if it's available and configured
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        console.warn('[App] Could not send error to Sentry:', sentryError);
      }
      
      // Still mark as initialized even with errors to prevent infinite loading
      setIsInitialized(true);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  React.useEffect(() => {
    Sentry.setTag('route', router.pathname);
    Sentry.setContext('query', router.query);
  }, [router.pathname, router.query]);

  // Only log provider initialization in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[App Provider] Initializing providers...');
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[App] Attempting to render component:', Component.name || 'UnnamedComponent');
  }

  // Show loading screen during critical initialization to prevent blank screens
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zion-blue">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
          <p className="text-white text-lg">Initializing Zion App...</p>
        </div>
      </div>
    );
  }

  // Use ProductionErrorBoundary as the top-level error boundary
  return (
    <>
      <Head>
        {/* Critical font preloading to prevent CLS */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          as="style"
          onLoad={(e) => {
            const target = e.target as HTMLLinkElement;
            target.onload = null;
            target.rel = 'stylesheet';
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          as="style"
          onLoad={(e) => {
            const target = e.target as HTMLLinkElement;
            target.onload = null;
            target.rel = 'stylesheet';
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        {/* Font optimization CSS to prevent CLS */}
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
          }
          
          /* Fallback font adjustments to match Inter/Montserrat metrics */
          @font-face {
            font-family: 'Inter Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 107%;
            ascent-override: 90%;
            descent-override: 25%;
            line-gap-override: 0%;
          }
          
          @font-face {
            font-family: 'Montserrat Fallback';
            src: local('Arial'), local('system-ui');
            size-adjust: 103%;
            ascent-override: 92%;
            descent-override: 24%;
            line-gap-override: 0%;
          }
        `}</style>
      </Head>
      <div className={`${inter.variable} ${montserrat.variable}`}>
        <ProductionErrorBoundary>
          <RootErrorBoundary>
            <HydrationErrorBoundary>
              <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
                                          <ThemeProvider>
                                            <AppLayout>
                                              <RouteChangeHandler 
                                                resetScrollOnChange={true}
                                                forceRerender={true}
                                              />
                                              <ErrorBoundary>
                                                <Component key={router.asPath} {...pageProps} />
                                              </ErrorBoundary>
                                              <ErrorResetOnRouteChange />
                                              <ToastContainer />
                                              <OfflineIndicator />
                                              <BetaBanner />
                                              <IntercomChat />
                                            </AppLayout>
                                          </ThemeProvider>
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

console.log('[App] Finished attempting to render component:', MyApp.name || 'UnnamedComponent');

export default MyApp;
