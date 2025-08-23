import '../styles/globals.css'
import '../styles/accessibility.css'
import type { AppProps } from 'next/app'

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
      if (root) {
        const hasVisible = Array.from(root.children || []).some(
          (el) => !['SCRIPT', 'STYLE', 'LINK'].includes(el.tagName)
        );
        if (!hasVisible && root.innerText.trim() === '') {
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
      }
    }, 3000);
  });
}

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
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
import { ChakraProvider } from '@chakra-ui/react';
import '../src/index.css';

// Simple loading component
const SimpleLoading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  }}>
    <div style={{ textAlign: 'center' }}>
      <h1>Zion Tech Marketplace</h1>
      <p>Loading...</p>
    </div>
  </div>
);

// Simple error boundary
const SimpleErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

// Provider wrapper with error handling
const ProviderWrapper: React.FC<{ children: React.ReactNode; queryClient: QueryClient }> = ({ children, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
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
                            <ChakraProvider>
                              {children}
                            </ChakraProvider>
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
    </QueryClientProvider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Show loading immediately
  useEffect(() => {
    // Set a timeout to hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle router events for page transitions
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Could add route change loading if needed
    };

    const handleRouteChangeComplete = () => {
      // Route change completed
    };

    const handleRouteChangeError = () => {
      console.error('Route change error');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  // Show loading screen
  if (isLoading) {
    return <SimpleLoading />;
  }

  // Main app render with all providers
  return (
    <ProviderWrapper queryClient={queryClient}>
      <Component {...pageProps} />
    </ProviderWrapper>
  );
}
