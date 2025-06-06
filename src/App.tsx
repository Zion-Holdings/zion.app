import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import {
  AuthRoutes,
  DashboardRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  DeveloperRoutes
} from './routes';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import AIMatcherPage from './pages/AIMatcher';
import TalentDirectory from './pages/TalentDirectory';
import TalentsPage from './pages/TalentsPage';
import MoreTalentsPage from './pages/MoreTalentsPage';
import AdditionalTalentsPage from './pages/AdditionalTalentsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentDetail from './pages/EquipmentDetail';
import Analytics from './pages/Analytics';
import MobileLaunchPage from './pages/MobileLaunchPage';
import AboutPage from './pages/About';
import CommunityPage from './pages/CommunityPage';
import { CommunityProvider } from './context';
import Categories from './pages/Categories';
import AllCategoriesPage from './pages/AllCategoriesPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NewProductsPage from './pages/NewProductsPage';
import NewServicesPage from './pages/NewServicesPage';
import Sitemap from './pages/Sitemap';
import PartnersPage from './pages/Partners';
import Help from './pages/Help';
import { ErrorBoundary } from 'react-error-boundary';
import { LoginForm } from './components/auth/login';
import LoginErrorFallback from './components/auth/login/LoginErrorFallback';
import Signup from './pages/Signup';
import SimpleSignup from './pages/SimpleSignup';
import Dashboard from './pages/Dashboard';
import OAuthCallback from './pages/OAuthCallback';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import OpenAppRedirect from './pages/OpenAppRedirect';
import ContactPage from './pages/Contact';
import ZionHireAI from './pages/ZionHireAI';
import AITalentMatchingPage from './pages/AITalentMatchingPage';
import ITSupportPage from './pages/ITSupportPage';
import WishlistPage from './pages/Wishlist';
import FavoritesPage from './pages/Favorites';
import CartPage from './pages/Cart';
import FeedbackAnalytics from './pages/FeedbackAnalytics';
import AIPoweredContent from './pages/features/AIPoweredContent';
import TalentMarketplace from './pages/features/TalentMarketplace';
import Ecommerce from './pages/features/Ecommerce';
import InstantMessaging from './pages/features/InstantMessaging';
import AdminDashboard from './pages/features/AdminDashboard';
import SearchFeature from './pages/features/Search';
import IntegrationsFeature from './pages/features/Integrations';
import Internationalization from './pages/features/Internationalization';
import ErrorTriggerComponent from './components/testing/ErrorTriggerComponent'; // Added for error testing
const Checkout = React.lazy(() => import('./pages/Checkout'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const RecommendationsPage = React.lazy(() => import('./pages/RecommendationsPage'));
const MarketplaceRoutes = React.lazy(() => import(/* webpackChunkName: "MarketplaceRoutes" */ './routes/MarketplaceRoutes'));
const TalentRoutes = React.lazy(() => import(/* webpackChunkName: "TalentRoutes" */ './routes/TalentRoutes'));
const CommunityRoutes = React.lazy(() => import(/* webpackChunkName: "CommunityRoutes" */ './routes/CommunityRoutes'));
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Wallet from './pages/Wallet';
import { SupportChatbot } from './components/SupportChatbot';
import PrivateRoute from './components/PrivateRoute';
// FallbackProps, Button, Card components imports removed as RootErrorFallback is removed.

// RootErrorFallback function removed.

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/login', element: <ErrorBoundary FallbackComponent={LoginErrorFallback}><LoginForm /></ErrorBoundary> },
  { path: '/register', element: <SimpleSignup /> },
  { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
];

const App = () => {
  // Scroll to top when navigating between routes (handled in AppLayout)
  const location = useLocation();
  useEffect(() => {
    try {
      // critical render logic could go here
    } catch (err) {
      logIssue('Render failed in main view', { error: err });
    }
  }, []);
  return (
    <GlobalErrorBoundary>
      <WhitelabelProvider>
        <WalletProvider> {/* Added WalletProvider */}
          <ThemeProvider defaultTheme="dark">
          <ToastProvider>
            <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {baseRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<PageTransition>{element}</PageTransition>} />
                  ))}
                  {/* Test routes for error boundaries - START */}
                  <Route path="/test-error-render" element={<PageTransition><ErrorTriggerComponent /></PageTransition>} />
                  <Route path="/test-error-mount" element={<PageTransition><ErrorTriggerComponent onMount={true} /></PageTransition>} />
                  {/* Test routes for error boundaries - END */}
                  <Route path="/oauth" element={<PageTransition><OAuthCallback /></PageTransition>} />
                  <Route path="/auth/*" element={<PageTransition><AuthRoutes /></PageTransition>} />
                  {/* <Route path="/dashboard/*" element={<PageTransition><DashboardRoutes /></PageTransition>} /> */}
                  <Route path="/marketplace/*" element={<PageTransition><MarketplaceRoutes /></PageTransition>} />
                  {/* <Route path="/talent/*" element={<PageTransition><TalentRoutes /></PageTransition>} /> */}
                  {/* <Route path="/admin/*" element={<PageTransition><AdminRoutes /></PageTransition>} /> */}
                  <Route path="/mobile/*" element={<PageTransition><MobileAppRoutes /></PageTransition>} />
                  {/* <Route path="/content/*" element={<PageTransition><ContentRoutes /></PageTransition>} /> */}
                  {/* <Route path="/enterprise/*" element={<PageTransition><EnterpriseRoutes /></PageTransition>} /> */}
                  <Route path="/community/*" element={<PageTransition><CommunityProvider><CommunityRoutes /></CommunityProvider></PageTransition>} />
                  {/* <Route path="/developers/*" element={<PageTransition><DeveloperRoutes /></PageTransition>} /> */}
                  {/* <Route path="*" element={<PageTransition><ErrorRoutes /></PageTransition>} /> */}
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
