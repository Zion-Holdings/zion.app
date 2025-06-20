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
import { AnalyticsProvider } from '@/context/AnalyticsContext'; // Added AnalyticsProvider
import { CartProvider } from '@/context/CartContext'; // Added CartProvider
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import { validateProductionEnvironment, initializeServices } from '@/utils/environmentConfig';
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('[App] MyApp component rendering started.');
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    console.log('[App] MyApp main useEffect hook started.');
    
    try {
      // Validate environment variables (graceful in development, strict in production)
      validateProductionEnvironment();
      
      // Initialize services based on configuration
      initializeServices();
      
      // Initialize global error handlers
      initializeGlobalErrorHandlers();
      
      const { publicRuntimeConfig } = getConfig();
      console.log('[App] Public Runtime Config:', publicRuntimeConfig);
      
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE) {
        Sentry.setTag('release', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE);
      }
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
        Sentry.setTag('environment', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
      }
      
      console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", publicRuntimeConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'NOT_SET');
      console.log("NEXT_PUBLIC_REOWN_PROJECT_ID:", publicRuntimeConfig.NEXT_PUBLIC_REOWN_PROJECT_ID ? 'SET' : 'NOT_SET');
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

  // Log initialization messages
  console.log('[App Provider] Initializing RootErrorBoundary...');
  console.log('[App Provider] Initializing GlobalErrorBoundary...');
  console.log('[App Provider] Initializing QueryClientProvider...');
  console.log('[App Provider] Initializing ReduxProvider...');
  console.log('[App Provider] Initializing HelmetProvider...');
  console.log('[App Provider] Initializing ErrorProvider...');
  console.log('[App Provider] Initializing AuthProvider...');
  console.log('[App Provider] Initializing WhitelabelProvider...');
  console.log('[App Provider] Initializing I18nextProvider...');
  console.log('[App Provider] Initializing WalletProvider...');
  console.log('[App Provider] Initializing CartProvider...');
  console.log('[App Provider] Initializing AnalyticsProvider...');
  console.log('[App Provider] Initializing ThemeProvider...');
  console.log('[App Provider] Initializing BrowserRouter...');
  console.log('[App Provider] Initializing ErrorBoundary (wrapping Component)...');

  console.log('[App] Attempting to render component:', Component.name || 'UnnamedComponent');

  // Use ProductionErrorBoundary as the top-level error boundary
  return (
    <ProductionErrorBoundary>
      <RootErrorBoundary>
        <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <GlobalErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <ApiErrorBoundary>
                <ReduxProvider store={store}>
                  <HelmetProvider>
                    <ErrorProvider>
                      <AuthProvider>
                        <WhitelabelProvider>
                          <I18nextProvider i18n={i18n}>
                            <WalletProvider>
                              <CartProvider>
                                <AnalyticsProvider>
                                  <ThemeProvider>
                                    <AppLayout>
                                      <ErrorBoundary>
                                        <Component {...pageProps} />
                                      </ErrorBoundary>
                                      <ErrorResetOnRouteChange />
                                      <Toaster />
                                      <OfflineIndicator />
                                    </AppLayout>
                                  </ThemeProvider>
                                </AnalyticsProvider>
                              </CartProvider>
                            </WalletProvider>
                          </I18nextProvider>
                        </WhitelabelProvider>
                      </AuthProvider>
                    </ErrorProvider>
                  </HelmetProvider>
                </ReduxProvider>
              </ApiErrorBoundary>
            </QueryClientProvider>
          </GlobalErrorBoundary>
        </React.Suspense>
      </RootErrorBoundary>
    </ProductionErrorBoundary>
  );
}

console.log('[App] Finished attempting to render component:', MyApp.name || 'UnnamedComponent');

export default MyApp;
