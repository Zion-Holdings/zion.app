import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { WalletProvider } from '@/context/WalletContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import { CartProvider } from '@/context/CartContext';
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary'; // Generic ErrorBoundary
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout'; // Default AppLayout
import ProductionErrorBoundary from '@/components/ProductionErrorBoundary';
import '../src/index.css'; // Global Tailwind styles
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
import { validateProductionEnvironment, initializeServices } from '@/utils/environmentConfig';

// Define types for getLayout pattern
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('[App] MyApp component rendering started.');
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    console.log('[App] MyApp main useEffect hook started.');
    try {
      validateProductionEnvironment();
      initializeServices();
      initializeGlobalErrorHandlers();
      
      const { publicRuntimeConfig } = getConfig();
      console.log('[App] Public Runtime Config:', publicRuntimeConfig);
      
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE) {
        Sentry.setTag('release', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE);
      }
      if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
        Sentry.setTag('environment', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
      }
    } catch (error) {
      console.error('[App] Critical initialization error:', error);
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        console.warn('[App] Could not send error to Sentry:', sentryError);
      }
    }
  }, []);

  React.useEffect(() => {
    Sentry.setTag('route', router.pathname);
    Sentry.setContext('query', router.query);
  }, [router.pathname, router.query]); // Added router.query as dependency

  console.log('[App] Attempting to render component:', Component.displayName || Component.name || 'UnnamedComponent');

  // Use the getLayout defined on the page component, or default to AppLayout
  const getLayout = Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>);

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
                                    {getLayout(
                                      <>
                                        {/* ErrorBoundary now wraps only the Component */}
                                        <ErrorBoundary>
                                          <Component {...pageProps} />
                                        </ErrorBoundary>
                                        <ErrorResetOnRouteChange />
                                        <Toaster />
                                        <OfflineIndicator />
                                      </>
                                    )}
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
