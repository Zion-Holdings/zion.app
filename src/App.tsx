import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary'; // Import GlobalErrorBoundary
import { captureException } from './utils/sentry'; // This might be redundant if GlobalErrorBoundary handles all Sentry logging
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WalletProvider } from './context/WalletContext'; // Added WalletProvider
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import ToastProvider from "./components/ToastProvider";
import OfflineToast from "./components/OfflineToast";
import InstallPrompt from "./components/InstallPrompt";
import { FeedbackWidget } from "./components/feedback/FeedbackWidget";
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import SimpleSignup from './pages/SimpleSignup';
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
const Checkout = lazy(() => import('./pages/Checkout'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const RecommendationsPage = lazy(() => import('./pages/RecommendationsPage'));
const MarketplaceRoutes = lazy(() => import(/* webpackChunkName: "MarketplaceRoutes" */ './routes/MarketplaceRoutes'));
const TalentRoutes = lazy(() => import(/* webpackChunkName: "TalentRoutes" */ './routes/TalentRoutes'));
const CommunityRoutes = lazy(() => import(/* webpackChunkName: "CommunityRoutes" */ './routes/CommunityRoutes'));
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
  // { path: '/categories/all', element: <AllCategoriesPage /> },
  // { path: '/match', element: <AIMatcherPage /> },
  // { path: '/login', element: <Login /> },
  // { path: '/register', element: <Signup /> },
  // { path: '/signup', element: <SimpleSignup /> },
  // { path: '/oauth', element: <OAuthCallback /> },
  // { path: '/talent', element: <TalentDirectory /> },
  // { path: '/talents', element: <TalentsPage /> },
  // { path: '/more-talents', element: <MoreTalentsPage /> },
  // { path: '/additional-talents', element: <AdditionalTalentsPage /> },
  // { path: '/services', element: <ServicesPage /> },
  // { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  // { path: '/it-onsite-services/:country', element: <ITOnsiteServicesPage /> },
  // { path: '/categories', element: <Categories /> },
  // { path: '/equipment', element: <EquipmentPage /> },
  // { path: '/equipment/:id', element: <EquipmentDetail /> },
  // { path: '/new-products', element: <NewProductsPage /> },
  // { path: '/analytics', element: <Analytics /> },
  // { path: '/feedback-analytics', element: <FeedbackAnalytics /> },
  // { path: '/mobile-launch', element: <MobileLaunchPage /> },
  // { path: '/open-app', element: <OpenAppRedirect /> },
  // {
  //   path: '/community',
  //   element: (
  //     <CommunityProvider>
  //       <CommunityPage />
  //     </CommunityProvider>
  //   ),
  // },
  // { path: '/contact', element: <ContactPage /> },
  // { path: '/partners', element: <PartnersPage /> },
  // { path: '/sitemap', element: <Sitemap /> },
  // { path: '/help', element: <Help /> },
  // { path: '/zion-hire-ai', element: <ZionHireAI /> },
  // { path: '/hire-ai', element: <ZionHireAI /> },
  // { path: '/ai-talent-matching', element: <AITalentMatchingPage /> },
  // { path: '/it-support', element: <ITSupportPage /> },
  // { path: '/request-quote', element: <RequestQuotePage /> },
  // { path: '/blog', element: <Blog /> },
  // { path: '/blog/:slug', element: <BlogPost /> },
  // { path: '/favorites', element: <FavoritesPage /> },
  // { path: '/wishlist', element: <WishlistPage /> },
  // { path: '/cart', element: <PrivateRoute><CartPage /></PrivateRoute> },
  // { path: '/wallet', element: <PrivateRoute><Wallet /></PrivateRoute> },
  // { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> },
  // { path: '/recommendations', element: <PrivateRoute><RecommendationsPage /></PrivateRoute> },
  // { path: '/checkout', element: <PrivateRoute><Checkout /></PrivateRoute> },
  // { path: '/forgot-password', element: <ForgotPassword /> },
  // { path: '/reset-password/:token', element: <ResetPassword /> },
  // { path: '/features/ai-content-generation', element: <AIPoweredContent /> },
  // { path: '/features/talent-marketplace', element: <TalentMarketplace /> },
  // { path: '/features/e-commerce', element: <Ecommerce /> },
  // { path: '/features/instant-messaging', element: <InstantMessaging /> },
  // { path: '/features/admin-dashboard', element: <AdminDashboard /> },
  // { path: '/features/search', element: <SearchFeature /> },
  // { path: '/features/integrations', element: <IntegrationsFeature /> },
  // { path: '/features/internationalization', element: <Internationalization /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  const location = useLocation();
  return (
    <GlobalErrorBoundary>
      <WhitelabelProvider>
        <WalletProvider> {/* Added WalletProvider */}
          <ThemeProvider defaultTheme="dark">
          <ToastProvider>
            <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {baseRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<PageTransition>{element}</PageTransition>} />
                  ))}
                  {/* Test routes for error boundaries - START */}
                  <Route path="/test-error-render" element={<PageTransition><ErrorTriggerComponent /></PageTransition>} />
                  <Route path="/test-error-mount" element={<PageTransition><ErrorTriggerComponent onMount={true} /></PageTransition>} />
                  {/* Test routes for error boundaries - END */}
                  <Route path="/auth/*" element={<PageTransition><AuthRoutes /></PageTransition>} />
                  {/* <Route path="/dashboard/*" element={<PageTransition><DashboardRoutes /></PageTransition>} /> */}
                  {/* <Route path="/marketplace/*" element={<PageTransition><MarketplaceRoutes /></PageTransition>} /> */}
                  {/* <Route path="/talent/*" element={<PageTransition><TalentRoutes /></PageTransition>} /> */}
                  {/* <Route path="/admin/*" element={<PageTransition><AdminRoutes /></PageTransition>} /> */}
                  {/* <Route path="/mobile/*" element={<PageTransition><MobileAppRoutes /></PageTransition>} /> */}
                  {/* <Route path="/content/*" element={<PageTransition><ContentRoutes /></PageTransition>} /> */}
                  {/* <Route path="/enterprise/*" element={<PageTransition><EnterpriseRoutes /></PageTransition>} /> */}
                  {/* <Route path="/community/*" element={<PageTransition><CommunityProvider><CommunityRoutes /></CommunityProvider></PageTransition>} /> */}
                  {/* <Route path="/developers/*" element={<PageTransition><DeveloperRoutes /></PageTransition>} /> */}
                  {/* <Route path="*" element={<PageTransition><ErrorRoutes /></PageTransition>} /> */}
                </Routes>
              </AnimatePresence>
            </Suspense>
            <OfflineToast />
            <SupportChatbot />
            <FeedbackWidget />
            <InstallPrompt />
          </ToastProvider>
        </ThemeProvider>
      </WalletProvider> {/* Added WalletProvider closing tag */}
    </WhitelabelProvider>
    </GlobalErrorBoundary>
  );
};

export default App;
