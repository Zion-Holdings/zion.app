// CRITICAL: Runtime check - polyfills should be loaded from document script and webpack banner
if (process.env.NODE_ENV === 'development') {
  console.log('🚨 APP.TSX RUNTIME CHECK - Polyfills should be active');
  console.log('- globalThis.__extends:', !!(globalThis as any).__extends);
  console.log('- globalThis.__assign:', !!(globalThis as any).__assign);
  console.log('- globalThis.process:', !!(globalThis as any).process);
}

// CRITICAL: Import environment polyfill FIRST to prevent process.env errors
import '../src/utils/env-polyfill';

// Enhanced error logging - import early for comprehensive coverage
import enhancedErrorLogger from '../src/utils/enhanced-error-logger';

// Add global error handling for undefined components
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('getInitialProps')) {
      console.error('Component loading error caught:', event.reason);
      event.preventDefault(); // Prevent the error from crashing the app
    }
  });
  
  // Additional error handling for process.env errors
  window.addEventListener('error', (event) => {
    if (event.message?.includes('Cannot read properties of undefined')) {
      console.error('Runtime error caught:', event.error);
      event.preventDefault();
    }
  });
  
  // Add blank screen detection
  window.addEventListener('load', () => {
    setTimeout(() => {
      const root = document.getElementById('__next');
      if (root && root.innerText.trim() === '') {
        console.error('Blank screen detected - attempting recovery');
        // Show a basic fallback with additional instructions
        root.innerHTML = `
          <div style="padding: 2rem; text-align: center; font-family: sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 style="color: #333; margin-bottom: 1rem;">Zion Tech Marketplace</h1>
            <p style="color: #666; margin-bottom: 1rem;">Loading application...</p>
            <p style="color: #666; margin-bottom: 1rem;">If refreshing doesn't work, visit <a href='/offline.html'>offline mode</a> for troubleshooting steps.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Reload Page
            </button>
          </div>
        `;
      }
    }, 3000);
  });
}

import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { CartProvider } from '@/context/CartContext';
import { FeedbackProvider } from '@/context/FeedbackContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { WalletProvider } from '@/context/WalletContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import { ErrorProvider } from '@/context/ErrorContext';
import { LanguageProvider } from '@/context/LanguageContext';
import '../src/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <ReduxProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <AuthProvider>
              <WhitelabelProvider>
                <WalletProvider>
                  <AnalyticsProvider>
                    <CartProvider>
                      <FeedbackProvider>
                        <ThemeProvider>
                          <Component {...pageProps} />
                        </ThemeProvider>
                      </FeedbackProvider>
                    </CartProvider>
                  </AnalyticsProvider>
                </WalletProvider>
              </WhitelabelProvider>
            </AuthProvider>
          </LanguageProvider>
        </I18nextProvider>
      </ReduxProvider>
    </ErrorProvider>
  );
}
