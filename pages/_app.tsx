import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const isBrowser = typeof window !== 'undefined';
  const Router = isBrowser ? BrowserRouter : MemoryRouter;
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <HelmetProvider>
        <AuthProvider>
          <WhitelabelProvider>
            <I18nextProvider i18n={i18n}>
              <Router>
                <Component {...pageProps} />
              </Router>
              <Toaster />
            </I18nextProvider>
          </WhitelabelProvider>
        </AuthProvider>
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
