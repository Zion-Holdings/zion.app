import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
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
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import { IntercomChat } from '@/components/IntercomChat';
// Import Next.js fonts for optimal loading and CLS prevention
import { Inter, Montserrat } from 'next/font/google';
import Head from 'next/head';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import { validateProductionEnvironment, initializeServices } from '@/utils/environmentConfig';
import { initializePerformanceOptimizations } from '@/utils/performance';
import '@/utils/globalFetchInterceptor';
import '@/utils/consoleErrorToast';
import { Auth0Provider } from '@auth0/nextjs-auth0';

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
  return (
    <LanguageProvider authState={{ isAuthenticated: !!isAuthenticated, user }}>
      {children}
    </LanguageProvider>
  );
};

// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[App] MyApp main useEffect hook started.');
    }
    
    try {
      // Validate environment variables (graceful in development, strict in production)
      validateProductionEnvironment();
      
      // Initialize services based on configuration
      initializeServices();
      
      // Initialize global error handlers
      initializeGlobalErrorHandlers();
      
      // Initialize performance monitoring and optimizations
      initializePerformanceOptimizations();
      
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
        console.log("AUTH0_CLIENT_ID:", process.env.AUTH0_CLIENT_ID ? 'SET' : 'NOT_SET');
        console.log("AUTH0_ISSUER_BASE_URL:", process.env.AUTH0_ISSUER_BASE_URL ? 'SET' : 'NOT_SET');
      }
    } catch (error) {
      console.error('[App] Critical initialization error:', error);
      
      // Only send to Sentry if it's available and configured
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        console.warn('[App] Could not send error to Sentry:', sentryError);
      }
      
      // Don't throw here - let the error boundary handle it in the UI
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  React.useEffect(() => {
    Sentry.setTag('route', router.pathname);
    Sentry.setContext('query', router.query);
  }, [router.pathname]);

  // Only log provider initialization in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[App Provider] Initializing providers...');
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[App] Attempting to render component:', Component.name || 'UnnamedComponent');
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
            <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <GlobalErrorBoundary>
                <QueryClientProvider client={queryClient}>
                  <ApiErrorBoundary>
                    <ReduxProvider store={store}>
                      <HelmetProvider>
                        <ErrorProvider>
                          <Auth0Provider>
                            <AuthProvider>
                              <WhitelabelProvider>
                                <I18nextProvider i18n={i18n}>
                                  <LanguageProviderWrapper>
                                    <WalletProvider>
                                    <CartProvider>
                                      <AnalyticsProvider>
                                        <ThemeProvider>
                                          <AppLayout>
                                            <ErrorBoundary>
                                              <Component {...pageProps} productId="example-product-id" />
                                            </ErrorBoundary>
                                            <ErrorResetOnRouteChange />
                                            <Toaster />
                                            <OfflineIndicator />
                                            <IntercomChat />
                                          </AppLayout>
                                        </ThemeProvider>
                                      </AnalyticsProvider>
                                    </CartProvider>
                                  </WalletProvider>
                                  </LanguageProviderWrapper>
                                </I18nextProvider>
                              </WhitelabelProvider>
                            </AuthProvider>
                          </Auth0Provider>
                        </ErrorProvider>
                      </HelmetProvider>
                    </ReduxProvider>
                  </ApiErrorBoundary>
                </QueryClientProvider>
              </GlobalErrorBoundary>
            </React.Suspense>
          </RootErrorBoundary>
        </ProductionErrorBoundary>
      </div>
    </>
  );
}

console.log('[App] Finished attempting to render component:', MyApp.name || 'UnnamedComponent');

export default MyApp;
