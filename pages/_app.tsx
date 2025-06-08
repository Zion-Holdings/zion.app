import React from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider'; // Assuming @ is src/
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { WhitelabelProvider } from '@/context/WhitelabelContext'; // Added WhitelabelProvider
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <AuthProvider>
          <WhitelabelProvider>
            <Component {...pageProps} />
          </WhitelabelProvider>
        </AuthProvider>
      </HelmetProvider>
    </ReduxProvider>
  );
}

export default MyApp;
