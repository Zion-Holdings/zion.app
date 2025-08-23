import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';

// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                  <App />
                  <LanguageDetectionPopup />
                </LanguageProvider>
              </AnalyticsProvider>
            </NotificationProvider>
          </AuthProvider>
        </Router>
      </WhitelabelProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
