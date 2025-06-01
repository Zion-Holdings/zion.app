console.log("main.tsx: Start");
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
feat/i18n-implementation
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Adjust the path if your i18n.js is elsewhere
main
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';

import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { ReferralMiddleware } from '@/components/referral/ReferralMiddleware';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';
import { ThemeProvider } from '@/context/ThemeContext'; // Import ThemeProvider

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
import { CartProvider } from './context/CartContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => showApiError(error),
    },
    mutations: {
      onError: (error) => showApiError(error),
    },
  },
});

try {
  console.log("main.tsx: Before ReactDOM.createRoot");
  initGA();
  // Render the app with proper provider structure
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
feat/i18n-implementation
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <WhitelabelProvider>
              <Router>
                <AuthProvider>
                  <NotificationProvider>
                    <AnalyticsProvider>
                      <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                        <ViewModeProvider>
                          <CartProvider>
                            <ReferralMiddleware>
                              <AppLayout>
                                <App />
                              </AppLayout>
                            </ReferralMiddleware>
                          </CartProvider>
                        </ViewModeProvider>
                        <LanguageDetectionPopup />
                      </LanguageProvider>
                    </AnalyticsProvider>
                  </NotificationProvider>
                </AuthProvider>
              </Router>
            </WhitelabelProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </I18nextProvider>
main
    </React.StrictMode>,
  );
  console.log("main.tsx: After ReactDOM.createRoot");
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
  console.log("main.tsx: Global error caught");
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Error</h1>
        <p>A critical error occurred while loading the application.</p>
        <p>Error: ${(error as Error).message}</p>
        <pre>${(error as Error).stack}</pre>
        <p>Please check the console for more details.</p>
      </div>
    `;
  }
}

registerServiceWorker();

// Global fallback for images that fail to load
// Replace broken images (e.g., offline Unsplash links) with a local placeholder
document.addEventListener(
  'error',
  (event) => {
    const target = event.target as HTMLElement;
    if (target instanceof HTMLImageElement && !target.dataset.fallback) {
      target.dataset.fallback = 'true';
      target.src = '/placeholder.svg';
    }
  },
  true,
);
