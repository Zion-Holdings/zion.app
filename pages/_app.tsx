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

  return (
    (() => {
      console.log('[App Provider] Initializing RootErrorBoundary...');
      return (
        <RootErrorBoundary>
          {(() => {
            console.log('[App Provider] Initializing GlobalErrorBoundary...');
            return (
              <GlobalErrorBoundary>
                {/* Wrap the entire application with CustomErrorBoundary */}
                {(() => {
                  console.log('[App Provider] Initializing QueryClientProvider...');
                  return (
                    <QueryClientProvider client={queryClient}>
                      {(() => {
                        console.log('[App Provider] Initializing ReduxProvider...');
                        return (
                          <ReduxProvider store={store}>
                            {(() => {
                              console.log('[App Provider] Initializing HelmetProvider...');
                              return (
                                <HelmetProvider>
                                  {(() => {
                                    console.log('[App Provider] Initializing ErrorProvider...');
                                    return (
                                      <ErrorProvider>
                                        <ErrorResetOnRouteChange />
                                        {(() => {
                                          console.log('[App Provider] Initializing AuthProvider...');
                                          return (
                                            <AuthProvider>
                                              {(() => {
                                                console.log('[App Provider] Initializing WhitelabelProvider...');
                                                return (
                                                  <WhitelabelProvider>
                                                    {(() => {
                                                      console.log('[App Provider] Initializing I18nextProvider...');
                                                      return (
                                                        <I18nextProvider i18n={i18n}>
                                                          {(() => {
                                                            console.log('[App Provider] Initializing WalletProvider...');
                                                            return (
                                                              <WalletProvider>
                                                                {(() => {
                                                                  console.log('[App Provider] Initializing CartProvider...');
                                                                  return (
                                                                    <CartProvider>
                                                                      {(() => {
                                                                        console.log('[App Provider] Initializing AnalyticsProvider...');
                                                                        return (
                                                                          <AnalyticsProvider>
                                                                            {(() => {
                                                                              console.log('[App Provider] Initializing ThemeProvider...');
                                                                              return (
                                                                                <ThemeProvider>
                                                                                  {/* Wrap in ThemeProvider so dark/light toggle works globally */}
                                                                                  {(() => {
                                                                                    console.log('[App Provider] Initializing AppLayout...');
                                                                                    return (
                                                                                      <AppLayout> {/* Consistent header/footer layout */}
                                                                                        {(() => {
                                                                                          console.log('[App Provider] Initializing ErrorBoundary (wrapping Component)...');
                                                                                          return (
                                                                                            <ErrorBoundary>
                                                                                              {(() => {
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
                                                                                                return renderedComponent;
                                                                                              })()}
                                                                                            </ErrorBoundary>
                                                                                          );
                                                                                        })()}
                                                                                        {console.log('[App Provider] AppLayout initialized.')}
                                                                                      </AppLayout>
                                                                                    );
                                                                                  })()}
                                                                                  {console.log('[App Provider] ThemeProvider initialized.')}
                                                                                </ThemeProvider>
                                                                              );
                                                                            })()}
                                                                            {console.log('[App Provider] AnalyticsProvider initialized.')}
                                                                          </AnalyticsProvider>
                                                                        );
                                                                      })()}
                                                                      {console.log('[App Provider] CartProvider initialized.')}
                                                                    </CartProvider>
                                                                  );
                                                                })()}
                                                                {console.log('[App Provider] WalletProvider initialized.')}
                                                              </WalletProvider>
                                                              );
                                                            })()}
                                                            {console.log('[App Provider] I18nextProvider initialized.')}
                                                          </I18nextProvider>
                                                        );
                                                      })()}
                                                      {console.log('[App Provider] WhitelabelProvider initialized.')}
                                                    </WhitelabelProvider>
                                                  );
                                                })()}
                                                {console.log('[App Provider] AuthProvider initialized.')}
                                              </AuthProvider>
                                            );
                                          })()}
                                        {console.log('[App Provider] ErrorProvider initialized.')}
                                      </ErrorProvider>
                                      );
                                    })()}
                                    {console.log('[App Provider] HelmetProvider initialized.')}
                                  </HelmetProvider>
                                );
                              })()}
                              {console.log('[App Provider] ReduxProvider initialized.')}
                            </ReduxProvider>
                          );
                        })()}
                        {console.log('[App Provider] QueryClientProvider initialized.')}
                      </QueryClientProvider>
                    );
                  })()}
                  {console.log('[App Provider] GlobalErrorBoundary initialized.')}
                </GlobalErrorBoundary>
              );
            })()}
            {console.log('[App Provider] RootErrorBoundary initialized.')}
          </RootErrorBoundary>
        );
      })()
  );
}

export default MyApp;
