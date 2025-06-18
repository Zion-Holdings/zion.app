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
import { RouterWrapper } from '../src/components/RouterWrapper';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';
import { captureException } from '@/utils/sentry';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('[App] MyApp component rendering started.');
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    console.log('[App] MyApp main useEffect hook started.');
    initializeGlobalErrorHandlers(); // Initialize global error handlers
    const { publicRuntimeConfig } = getConfig();
    console.log('[App] Public Runtime Config:', publicRuntimeConfig); // Add this line
    if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE) {
      Sentry.setTag('release', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE);
    }
    if (publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
      Sentry.setTag('environment', publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
    }
    console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", publicRuntimeConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    console.log("NEXT_PUBLIC_REOWN_PROJECT_ID:", publicRuntimeConfig.NEXT_PUBLIC_REOWN_PROJECT_ID);
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

  // Render component with error handling
  let renderedComponent;
  console.log('[App] Attempting to render component:', Component.name);
  try {
    console.log('[App] Rendering component:', Component.name);
    renderedComponent = <Component {...pageProps} />;
    console.log('[App] Component rendered successfully:', Component.name);
  } catch (error) {
    console.error('[App] Error rendering component:', Component.name, error);
    captureException(error, {
      message: 'Error rendering component',
      extra: {
        component: Component.name,
        pageProps: pageProps,
      },
    });
    renderedComponent = <div>Error rendering component. See console for details.</div>;
  }
  console.log('[App] Finished attempting to render component:', Component.name);

  return (
    <RootErrorBoundary>
      <GlobalErrorBoundary>
        {/* Wrap the entire application with QueryClientProvider first */}
        <QueryClientProvider client={queryClient}>
          <ApiErrorBoundary queryClient={queryClient}>
            <ReduxProvider store={store}>
              <HelmetProvider>
                <ErrorProvider>
                  <ErrorResetOnRouteChange />
                  <AuthProvider>
                    <WhitelabelProvider>
                      <I18nextProvider i18n={i18n}>
                        <WalletProvider>
                          <CartProvider>
                            <AnalyticsProvider>
                              <ThemeProvider>
                                {/* Wrap in ThemeProvider so dark/light toggle works globally */}
                                <RouterWrapper>
                                  <AppLayout> {/* Consistent header/footer layout */}
                                    <ErrorBoundary>
                                      <ErrorBoundary>
                                        {renderedComponent}
                                      </ErrorBoundary>
                                    </ErrorBoundary>
                                    <OfflineIndicator />
                                  </AppLayout>
                                </RouterWrapper>
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
    </RootErrorBoundary>
  );
}

export default MyApp;
