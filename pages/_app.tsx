import React from 'react';
import Router from 'next/router';
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
import ClientBrowserRouter from '@/components/ClientBrowserRouter'; // Add this import
import { RouterWrapper } from '@/components/RouterWrapper';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary'; // Import the new Error Boundary
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      console.log(`Router: routeChangeStart - ${url}`);
    };
    const handleRouteChangeComplete = (url: string) => {
      console.log(`Router: routeChangeComplete - ${url}`);
    };
    const handleRouteChangeError = (err: any, url: string) => {
      console.error(`Router: routeChangeError - Error: ${err.message || err} on URL: ${url}`);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  return (
    <GlobalErrorBoundary> {/* Wrap the entire application with CustomErrorBoundary */}
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <HelmetProvider>
            <ClientBrowserRouter> {/* Add ClientBrowserRouter here */}
            <RouterWrapper>
              <AuthProvider>
                <WhitelabelProvider>
                  <I18nextProvider i18n={i18n}>
                    <WalletProvider>
                      <CartProvider>
                        <AnalyticsProvider>
                          <Component {...pageProps} />
                        </AnalyticsProvider>
                        <Toaster />
                      </CartProvider>
                    </WalletProvider>
                  </I18nextProvider>
                </WhitelabelProvider>
              </AuthProvider>
            </RouterWrapper>
          </ClientBrowserRouter> {/* Close ClientBrowserRouter here */}
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default MyApp;
