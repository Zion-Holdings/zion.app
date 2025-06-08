import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
// If you have global CSS, import it here:
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <AuthProvider>
          <WhitelabelProvider>
            <I18nextProvider i18n={i18n}>
              <Component {...pageProps} />
            </I18nextProvider>
          </WhitelabelProvider>
        </AuthProvider>
      </HelmetProvider>
    </ReduxProvider>
  );
}

export default MyApp;
