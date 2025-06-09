import React, { Suspense } from 'react';
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

import './index.css';
import App from '../App'; // Or correct path
// Removed feat/i18n-implementation and main markers
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { HelmetProvider } from 'react-helmet-async';
// Removed: import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import '../utils/globalFetchInterceptor';
import '../utils/consoleErrorToast';
import '../utils/globalErrorHandler';
import ToastProvider from '../components/ToastProvider';
import GlobalErrorBoundary from '../components/GlobalErrorBoundary';
import { logError } from '../utils/logError';
import RootErrorBoundary from '../components/RootErrorBoundary';
import {
  AppLoaderProvider,
  NotificationProvider,
  MessagingProvider,
} from '../context';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from '../components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// import { ReferralMiddleware } from '@/components/referral/ReferralMiddleware';
import { Provider } from 'react-redux';
import { store } from '../store';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';

// Import analytics provider
// import { AnalyticsProvider } from '../context/AnalyticsContext';
// import { ViewModeProvider } from '../context/ViewModeContext';
import { CartProvider } from '../context/CartContext';
// import { FavoritesProvider } from '../context/FavoritesContext.jsx';
import { registerServiceWorker } from '../serviceWorkerRegistration';
import { enableDevToolsInStaging, highlightZeroHeightElements } from '../utils/devtools';
import '../utils/checkDuplicateClassNames';
import { checkEssentialEnvVars } from '../utils/validateEnv';
import { FeedbackProvider } from '../context/FeedbackContext';
import { FeedbackWidget } from '../components/feedback/FeedbackWidget';

enableDevToolsInStaging();
highlightZeroHeightElements();

// Initialize a React Query client with global error handling
// TODO: queryClient should ideally be defined within MyApp to avoid global scope,
// or passed via context if shared across different MyApp instances (though unlikely for _app.tsx).
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => showApiError(error),
  }),
  mutationCache: new MutationCache({
    onError: (error) => showApiError(error),
  }),
});

// Define MyApp component
function MyApp({ Component, pageProps }) {
  // TODO: Consider moving checkEssentialEnvVars and other initializations
  // to an effect hook within MyApp or ensure they are Next.js compatible.
  try {
    checkEssentialEnvVars(); // Added call
  } catch (error) {
    logError(error, { message: 'Error in checkEssentialEnvVars during MyApp initialization' });
    // Optionally, render a more Next.js friendly error UI or re-throw
    // For now, logging and allowing Next.js default error handling to take over.
  }

  return (
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
          {/* <Router basename={process.env.PUBLIC_URL || '/'}> */} {/* Router might not be needed with Next.js routing */}
          <AppLoaderProvider>
            <I18nextProvider i18n={i18n}>
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                  <WhitelabelProvider>
                    <FeedbackProvider>
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
                                  <Suspense fallback={<div>Loading Page...</div>}>
                                    <AppLayout> {/* AppLayout might need adjustment for Next.js page structure */}
                                      <App>
                                        <Component {...pageProps} />
                                      </App>
                                    </AppLayout>
                                  </Suspense>
                                </GlobalErrorBoundary>
                              </ToastProvider>
                              {/* </ReferralMiddleware> */}
                              {/* </FavoritesProvider> */}
                            </CartProvider>
                            {/* </ViewModeProvider> */}
                            {/* <LanguageDetectionPopup /> */} {/* This might need to be integrated differently in Next.js */}
                            {/* </LanguageProvider> */}
                            {/* </AnalyticsProvider> */}
                          </NotificationProvider>
                        </MessagingProvider>
                      </AuthProvider>
                      <FeedbackWidget />
                    </FeedbackProvider>
                  </WhitelabelProvider>
                </QueryClientProvider>
              </HelmetProvider>
            </I18nextProvider>
          </AppLoaderProvider>
          {/* </Router> */}
        </Provider>
      </RootErrorBoundary>
    </React.StrictMode>
  );
}

export default MyApp;

// The following code related to service workers and global error handling for images
// might need to be adapted for a Next.js environment, possibly in `_document.tsx` or an effect hook.
if (typeof window !== 'undefined') {
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
}
