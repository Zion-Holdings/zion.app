import React from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const isBrowser = typeof window !== 'undefined';
  const Router = isBrowser ? BrowserRouter : MemoryRouter;
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <AuthProvider>
          <WhitelabelProvider>
            <Router>
              <Component {...pageProps} />
            </Router>
          </WhitelabelProvider>
        </AuthProvider>
      </HelmetProvider>
    </ReduxProvider>
  );
}

export default MyApp;
