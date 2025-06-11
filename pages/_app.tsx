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
import { RouterWrapper } from '@/components/RouterWrapper';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
import * as Sentry from '@sentry/nextjs';
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
    if (process.env.NEXT_PUBLIC_SENTRY_RELEASE) {
      Sentry.setTag('release', process.env.NEXT_PUBLIC_SENTRY_RELEASE);
    }
    if (process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
      Sentry.setTag('environment', process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
    }
    console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    console.log("NEXT_PUBLIC_REOWN_PROJECT_ID:", process.env.NEXT_PUBLIC_REOWN_PROJECT_ID);
  }, []); // Empty dependency array ensures this runs only once on mount

  React.useEffect(() => {
    Sentry.setTag('route', router.pathname);
    Sentry.setContext('query', router.query);
  }, [router.pathname]);

  return (
    <RootErrorBoundary>
      <GlobalErrorBoundary>
      {/* Wrap the entire application with CustomErrorBoundary */}
      <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <HelmetProvider>
              <RouterWrapper>
                <AuthProvider>
                  <WhitelabelProvider>
                    <I18nextProvider i18n={i18n}>
                      <WalletProvider>
                        <CartProvider>
                          <AnalyticsProvider>
                            <ThemeProvider>
                              {/* Wrap in ThemeProvider so dark/light toggle works globally */}
                              <AppLayout> {/* Consistent header/footer layout */}
                                <ErrorBoundary>
                                  <Component {...pageProps} />
                                </ErrorBoundary>
                              </AppLayout>
                            </ThemeProvider>
                          </AnalyticsProvider>
                          <Toaster />
                        </CartProvider>
                      </WalletProvider>
                    </I18nextProvider>
                  </WhitelabelProvider>
                </AuthProvider>
              </RouterWrapper>
          </HelmetProvider>
        </ReduxProvider>
        </QueryClientProvider>
      </GlobalErrorBoundary>
    </RootErrorBoundary>
  );
}

export default MyApp;
