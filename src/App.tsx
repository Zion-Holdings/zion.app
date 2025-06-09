import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
// import { captureException } from './utils/sentry'; // This might be redundant if GlobalErrorBoundary handles all Sentry logging Removed: react-router specific
import { logIssue } from './utils/logIssue';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WalletProvider } from './context/WalletContext'; // Added WalletProvider
import OfflineToast from "./components/OfflineToast";
import InstallPrompt from "./components/InstallPrompt";
import { allRoutes } from './routes/config'; // Import the consolidated route configuration
// import AuthGuard from './components/AuthGuard'; // Removed: react-router specific
// import PageTransition from './components/PageTransition'; // Removed: react-router specific

// Commenting out React.lazy imports for pages as they will be handled by Next.js file-system routing
// const Checkout = React.lazy(() => import('./pages/Checkout'));
// const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
// const RecommendationsPage = React.lazy(() => import('./pages/RecommendationsPage'));

import { SupportChatbot } from './components/SupportChatbot';
// import PrivateRoute from './components/PrivateRoute'; // Removed: react-router specific


// RootErrorFallback function removed.

const App = ({ children }) => { // Changed signature to accept children
  const router = useRouter();

  useEffect(() => {
    // TODO: Implement title update logic compatible with Next.js.
    // This might involve a different approach, perhaps in individual pages
    // or a custom _app.tsx / layout component.
    // The original logic using allRoutes and matchPath needs rethinking.
    // For now, we're just logging the path.
    console.log("Current path:", router.asPath);
    // Example of how you might try to match and set title (needs refinement):
    try {
      const matched = allRoutes.find(
        (r) => r.path && router.asPath.startsWith(r.path) // Simplified matching
      );
      if (matched && matched.metaTitle) {
        document.title = matched.metaTitle;
      } else {
        // Potentially set a default title or leave as is
        // document.title = "Default Title";
      }
    } catch (err) {
      logIssue('Error setting document title in App.tsx', { error: err, path: router.asPath });
    }
  }, [router.asPath]); // Depend on Next.js router's path

  // Note: The main rendering of pages (Component) will be handled by Next.js's <Component {...pageProps} />
  // in `pages/_app.tsx`. This App.tsx as a central routing hub is no longer the pattern.
  // The providers and global components will likely move to `pages/_app.tsx`.
  // For this refactoring step, we are simplifying App.tsx significantly.
  // The <AnimatePresence> and routing logic previously here will be removed or relocated.

  return (
    <WalletProvider>
      <ThemeProvider defaultTheme="dark">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          {children} {/* Render children here */}
        </React.Suspense>
        <OfflineToast />
        <SupportChatbot />
        <InstallPrompt />
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;
