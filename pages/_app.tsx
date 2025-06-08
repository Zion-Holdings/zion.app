import React from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider'; // Assuming @ is src/
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </HelmetProvider>
    </ReduxProvider>
  );
}

export default MyApp;
