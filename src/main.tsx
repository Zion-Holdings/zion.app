import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { Global, css } from '@emotion/react';

// Integrate axe-core accessibility auditing in development
// if (process.env.NODE_ENV !== 'production') {
//   // Dynamically import to avoid bundling in production and use ESM standard
//   import('@axe-core/react').then((axeModule) => {
//     // Ensure React and ReactDOM are available and valid
//     if (React && ReactDOM && axeModule && typeof axeModule.default === 'function') {
//       axeModule.default(React, ReactDOM, 1000);
//     } else {
//       console.warn('Axe-core dynamic import failed or React/ReactDOM not available.');
//     }
//   }).catch(error => {
//     console.error('Failed to load @axe-core/react:', error);
//   });
// }


// Add console logs to verify critical ENV vars (use carefully in prod)
if (process.env.NODE_ENV !== 'production') {
  console.log('API_URL:', process.env.REACT_APP_API_URL);
}

import App from './App.tsx';
import './index.css';
// Removed feat/i18n-implementation and main markers
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/index';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
import './utils/globalErrorHandler';
import ToastProvider from './components/ToastProvider';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import RootErrorBoundary from './components/RootErrorBoundary';
import {
  AppLoaderProvider,
  NotificationProvider,
  MessagingProvider,
} from './context';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// import { ReferralMiddleware } from '@/components/referral/ReferralMiddleware';
import { Provider } from 'react-redux';
import { store } from './store';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';

// Import analytics provider
// import { AnalyticsProvider } from './context/AnalyticsContext';
// import { ViewModeProvider } from './context/ViewModeContext';
import { CartProvider } from './context/CartContext';
// import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { registerServiceWorker } from './serviceWorkerRegistration';
import { enableDevToolsInStaging } from './utils/devtools';
import './utils/checkDuplicateClassNames';
import { checkEssentialEnvVars } from './utils/validateEnv';
import { FeedbackProvider } from './context/FeedbackContext';
import { FeedbackWidget } from './components/feedback/FeedbackWidget';

enableDevToolsInStaging();

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => showApiError(error),
  }),
  mutationCache: new MutationCache({
    onError: (error) => showApiError(error),
  }),
});

try {
  checkEssentialEnvVars(); // Added call

  // Removed initGA() call as it's undefined and likely superseded by AnalyticsProvider
  // Render the app with proper provider structure
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', sans-serif;
            color: var(--foreground);
            background-color: var(--background);
          }
        `}
      />
      <RootErrorBoundary>
        <Provider store={store}>
          <AppLoaderProvider>
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <WhitelabelProvider>
                <FeedbackProvider>
                <Router basename={process.env.PUBLIC_URL || '/'}>
                <AuthProvider>
                  <MessagingProvider>
                  <NotificationProvider>
                    {/* <AnalyticsProvider> */}
                      {/* <LanguageProvider authState={{ isAuthenticated: false, user: null }}> */}
                        {/* <ViewModeProvider> */}
                          <CartProvider>
                            {/* <FavoritesProvider> */}
                              {/* <ReferralMiddleware> */}
                                <ToastProvider>
                                  <GlobalErrorBoundary>
                                    <Suspense fallback={<div>Loading App...</div>}>
                                      <AppLayout>
                                        <App />
                                      </AppLayout>
                                    </Suspense>
                                  </GlobalErrorBoundary>
                                </ToastProvider>
                              {/* </ReferralMiddleware> */}
                            {/* </FavoritesProvider> */}
                          </CartProvider>
                        {/* </ViewModeProvider> */}
                        {/* <LanguageDetectionPopup /> */}
                      {/* </LanguageProvider> */}
                    {/* </AnalyticsProvider> */}
                  </NotificationProvider>
                  </MessagingProvider>
                </AuthProvider>
                </Router>
                <FeedbackWidget />
              </FeedbackProvider>
            </WhitelabelProvider>
          </QueryClientProvider>
        </HelmetProvider>
        </I18nextProvider>
        </AppLoaderProvider>
      </Provider>
      </RootErrorBoundary>
      {/* Removed duplicate main marker */}
    </React.StrictMode>,
  );
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="background-color: white; color: black; padding: 20px; text-align: center; font-family: sans-serif; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999;">
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
