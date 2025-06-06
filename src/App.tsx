import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary'; // Import GlobalErrorBoundary
import { captureException } from './utils/sentry'; // This might be redundant if GlobalErrorBoundary handles all Sentry logging
import { logIssue } from './utils/logIssue';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WalletProvider } from './context/WalletContext'; // Added WalletProvider
import { WhitelabelProvider } from "./context/WhitelabelContext";
import ToastProvider from "./components/ToastProvider";
import OfflineToast from "./components/OfflineToast";
import InstallPrompt from "./components/InstallPrompt";
import { allRoutes } from './routes/config'; // Import the consolidated route configuration
import AuthGuard from './components/AuthGuard';
import PageTransition from './components/PageTransition';
// import Home from './pages/Home'; // Removed - Handled by allRoutes
// import AIMatcherPage from './pages/AIMatcher'; // Removed - Assuming handled by other route groups or specific pages
// import TalentDirectory from './pages/TalentDirectory'; // Removed - Assuming handled by other route groups or specific pages
// import TalentsPage from './pages/TalentsPage'; // Removed - Assuming handled by other route groups or specific pages
// import MoreTalentsPage from './pages/MoreTalentsPage'; // Removed - Assuming handled by other route groups or specific pages
// import AdditionalTalentsPage from './pages/AdditionalTalentsPage'; // Removed - Assuming handled by other route groups or specific pages
// import ServicesPage from './pages/ServicesPage'; // Removed - Assuming handled by other route groups or specific pages
// import EquipmentPage from './pages/EquipmentPage'; // Removed - Assuming handled by other route groups or specific pages
// import EquipmentDetail from './pages/EquipmentDetail'; // Removed - Assuming handled by other route groups or specific pages
// import Analytics from './pages/Analytics'; // Removed - Assuming handled by other route groups or specific pages
// import MobileLaunchPage from './pages/MobileLaunchPage'; // Removed - Assuming handled by other route groups or specific pages
// import AboutPage from './pages/About'; // Removed - Handled by allRoutes
// import CommunityPage from './pages/CommunityPage'; // Removed - Assuming handled by other route groups or specific pages
// import { CommunityProvider } from './context'; // Moved to config.tsx
// import Categories from './pages/Categories'; // Removed - Handled by allRoutes
// import AllCategoriesPage from './pages/AllCategoriesPage'; // Removed - Assuming handled by other route groups or specific pages
// import Blog from './pages/Blog'; // Removed - Handled by allRoutes
// import BlogPost from './pages/BlogPost'; // Removed - Handled by allRoutes
// import NewProductsPage from './pages/NewProductsPage'; // Removed - Assuming handled by other route groups or specific pages
// import NewServicesPage from './pages/NewServicesPage'; // Removed - Assuming handled by other route groups or specific pages
// import Sitemap from './pages/Sitemap'; // Removed - Assuming handled by other route groups or specific pages
// import PartnersPage from './pages/Partners'; // Removed - Handled by allRoutes
// import Help from './pages/Help'; // Removed - Assuming handled by other route groups or specific pages
// import Login from './pages/Login'; // Removed - Handled by allRoutes
// import Signup from './pages/Signup'; // Removed - Handled by allRoutes
// import SimpleSignup from './pages/SimpleSignup'; // Removed - Handled by allRoutes
// import Dashboard from './pages/Dashboard'; // Removed - Handled by allRoutes
// import OAuthCallback from './pages/OAuthCallback'; // Removed - Handled by allRoutes
// import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage'; // Removed - Assuming handled by other route groups or specific pages
// import OpenAppRedirect from './pages/OpenAppRedirect'; // Removed - Assuming handled by other route groups or specific pages
// import ContactPage from './pages/Contact'; // Removed - Assuming handled by other route groups or specific pages
// import ZionHireAI from './pages/ZionHireAI'; // Removed - Assuming handled by other route groups or specific pages
// import AITalentMatchingPage from './pages/AITalentMatchingPage'; // Removed - Assuming handled by other route groups or specific pages
// import ITSupportPage from './pages/ITSupportPage'; // Removed - Assuming handled by other route groups or specific pages
// import WishlistPage from './pages/Wishlist'; // Removed - Assuming handled by other route groups or specific pages
// import FavoritesPage from './pages/Favorites'; // Removed - Assuming handled by other route groups or specific pages
// import CartPage from './pages/Cart'; // Removed - Assuming handled by other route groups or specific pages
// import FeedbackAnalytics from './pages/FeedbackAnalytics'; // Removed - Assuming handled by other route groups or specific pages
// import AIPoweredContent from './pages/features/AIPoweredContent'; // Removed - Assuming handled by other route groups or specific pages
// import TalentMarketplace from './pages/features/TalentMarketplace'; // Removed - Assuming handled by other route groups or specific pages
// import Ecommerce from './pages/features/Ecommerce'; // Removed - Assuming handled by other route groups or specific pages
// import InstantMessaging from './pages/features/InstantMessaging'; // Removed - Assuming handled by other route groups or specific pages
// import AdminDashboard from './pages/features/AdminDashboard'; // Removed - Assuming handled by other route groups or specific pages
// import SearchFeature from './pages/features/Search'; // Removed - Assuming handled by other route groups or specific pages
// import IntegrationsFeature from './pages/features/Integrations'; // Removed - Assuming handled by other route groups or specific pages
// import Internationalization from './pages/features/Internationalization'; // Removed - Assuming handled by other route groups or specific pages
// import ErrorTriggerComponent from './components/testing/ErrorTriggerComponent'; // Removed - Handled by allRoutes
const Checkout = React.lazy(() => import('./pages/Checkout'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const RecommendationsPage = React.lazy(() => import('./pages/RecommendationsPage'));
// const MarketplaceRoutes = React.lazy(() => import(/* webpackChunkName: "MarketplaceRoutes" */ './routes/MarketplaceRoutes')); // Removed - Handled by allRoutes
// const TalentRoutes = React.lazy(() => import(/* webpackChunkName: "TalentRoutes" */ './routes/TalentRoutes')); // Removed - Handled by allRoutes
// const CommunityRoutes = React.lazy(() => import(/* webpackChunkName: "CommunityRoutes" */ './routes/CommunityRoutes')); // Removed - Handled by allRoutes
// import Profile from './pages/Profile'; // Removed - Handled by allRoutes
// import ForgotPassword from './pages/ForgotPassword'; // Removed - Handled by allRoutes
// import ResetPassword from './pages/ResetPassword'; // Removed - Handled by allRoutes
// import Wallet from './pages/Wallet'; // Removed - Handled by allRoutes
import { SupportChatbot } from './components/SupportChatbot';
// import PrivateRoute from './components/PrivateRoute'; // Removed - Handled by allRoutes
// FallbackProps, Button, Card components imports removed as RootErrorFallback is removed.

// RootErrorFallback function removed.

const App = () => {
  // Scroll to top when navigating between routes (handled in AppLayout)
  const location = useLocation();
  useEffect(() => {
    try {
      const matched = allRoutes.find(
        (r) => r.path && matchPath({ path: r.path, end: false }, location.pathname)
      );
      if (matched && matched.metaTitle) {
        document.title = matched.metaTitle;
      }
    } catch (err) {
      logIssue('Render failed in main view', { error: err });
    }
  }, [location.pathname]);
  return (
    <GlobalErrorBoundary>
      <WhitelabelProvider>
        <WalletProvider> {/* Added WalletProvider */}
          <ThemeProvider defaultTheme="dark">
          <ToastProvider>
            <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {allRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        <AuthGuard route={route}>
                          <PageTransition>{route.element}</PageTransition>
                        </AuthGuard>
                      }
                    />
                  ))}
                </Routes>
              </AnimatePresence>
            </React.Suspense>
            <OfflineToast />
            <SupportChatbot />
            <InstallPrompt />
          </ToastProvider>
        </ThemeProvider>
      </WalletProvider> {/* Added WalletProvider closing tag */}
    </WhitelabelProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
