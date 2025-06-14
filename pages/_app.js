import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { WhitelabelProvider } from '@/context/WhitelabelContext'; // Added WhitelabelProvider
import { WalletProvider } from '@/context/WalletContext'; // Added WalletProvider
import { AnalyticsProvider } from '@/context/AnalyticsContext'; // Added AnalyticsProvider
import { CartProvider } from '@/context/CartContext'; // Added CartProvider
import { RouterWrapper } from '@/components/RouterWrapper';
import { ErrorProvider } from '@/context/ErrorContext';
import ErrorResetOnRouteChange from '@/components/ErrorResetOnRouteChange';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import ErrorBoundary from '@/components/ErrorBoundary';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppLayout } from '@/layout/AppLayout';
// Import global Tailwind styles so they load before the app renders
import '../src/index.css';
import * as Sentry from '@sentry/nextjs';
import { initializeGlobalErrorHandlers } from '@/utils/globalAppErrors';
// If you have global CSS, import it here:
// import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
    console.log('[App] MyApp component rendering started.');
    const router = useRouter();
    const [queryClient] = React.useState(() => new QueryClient());
    React.useEffect(() => {
        console.log('[App] MyApp main useEffect hook started.');
        initializeGlobalErrorHandlers(); // Initialize global error handlers
        if (process.env.NEXT_PUBLIC_SENTRY_RELEASE) {
            Sentry.setTag('release', process.env.NEXT_PUBLIC_SENTRY_RELEASE);
        }
        if (process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT) {
            Sentry.setTag('environment', process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT);
        }
        console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
        console.log("NEXT_PUBLIC_REOWN_PROJECT_ID:", process.env.NEXT_PUBLIC_REOWN_PROJECT_ID);
    }, []); // Empty dependency array ensures this runs only once on mount
    React.useEffect(() => {
        Sentry.setTag('route', router.pathname);
        Sentry.setContext('query', router.query);
    }, [router.pathname]);
    return (_jsx(RootErrorBoundary, { children: _jsx(GlobalErrorBoundary, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(ReduxProvider, { store: store, children: _jsx(HelmetProvider, { children: _jsx(RouterWrapper, { children: _jsxs(ErrorProvider, { children: [_jsx(ErrorResetOnRouteChange, {}), _jsx(AuthProvider, { children: _jsx(WhitelabelProvider, { children: _jsx(I18nextProvider, { i18n: i18n, children: _jsx(WalletProvider, { children: _jsxs(CartProvider, { children: [_jsx(AnalyticsProvider, { children: _jsx(ThemeProvider, { children: _jsxs(AppLayout, { children: [" ", _jsx(ErrorBoundary, { children: _jsx(Component, { ...pageProps }) })] }) }) }), _jsx(Toaster, {})] }) }) }) }) })] }) }) }) }) }) }) }));
}
export default MyApp;
