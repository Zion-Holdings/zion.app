import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import type { AppProps } from 'next/app';
import { StaticRouter } from 'react-router-dom/server'; // Changed from BrowserRouter
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { WhitelabelProvider } from '@/context/WhitelabelContext'; // Added WhitelabelProvider
import { WalletProvider } from '@/context/WalletContext'; // Added WalletProvider
import { AnalyticsProvider } from '@/context/AnalyticsContext'; // Added AnalyticsProvider
import { CartProvider } from '@/context/CartContext'; // Added CartProvider
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
// If you have global CSS, import it here:
// import '../styles/globals.css';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) { // Added router to props
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <AuthProvider>
            <WhitelabelProvider>
              <StaticRouter location={router.pathname}> {/* Moved StaticRouter up */}
                <AnalyticsProvider>
                  <WalletProvider>
                    <CartProvider> {/* Added CartProvider */}
                      <Component {...pageProps} />
                    </CartProvider>
                  </WalletProvider>
                </AnalyticsProvider>
              </StaticRouter>
            </WhitelabelProvider>
          </AuthProvider>
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
