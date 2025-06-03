import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary as LocalErrorBoundary } from './components/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import { captureException } from './utils/sentry';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WalletProvider } from './context/WalletContext'; // Added WalletProvider
import { useScrollToTop } from "./hooks";
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
import WishlistPage from './pages/Wishlist';
import FavoritesPage from './pages/Favorites';
import CartPage from './pages/Cart';
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
import type { FallbackProps } from 'react-error-boundary';

function RootErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center space-y-2">
      <p>Something went wrong</p>
      <button onClick={resetErrorBoundary} className="underline">
        Retry
      </button>
    </div>
  );
}

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/categories/all', element: <AllCategoriesPage /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/signup', element: <SimpleSignup /> },
  { path: '/oauth', element: <OAuthCallback /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/more-talents', element: <MoreTalentsPage /> },
  { path: '/additional-talents', element: <AdditionalTalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/it-onsite-services/:country', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/new-products', element: <NewProductsPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  {
    path: '/community',
    element: (
      <CommunityProvider>
        <CommunityPage />
      </CommunityProvider>
    ),
  },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/help', element: <Help /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/favorites', element: <FavoritesPage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/cart', element: <PrivateRoute><CartPage /></PrivateRoute> },
  { path: '/wallet', element: <PrivateRoute><Wallet /></PrivateRoute> },
  { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> },
  { path: '/recommendations', element: <PrivateRoute><RecommendationsPage /></PrivateRoute> },
  { path: '/checkout', element: <PrivateRoute><Checkout /></PrivateRoute> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password/:token', element: <ResetPassword /> },
];

const App = () => {
  console.log("App.tsx: Start");
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  console.log("App.tsx: Rendering Tree");
  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onError={(error, info) => {
        captureException(error);
        if (info?.componentStack) captureException(info.componentStack);
      }}
    >
      <WhitelabelProvider>
        <WalletProvider> {/* Added WalletProvider */}
          <ThemeProvider defaultTheme="dark">
            <ToastProvider>
            <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
              <LocalErrorBoundary>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
            <Route path="/talent/*" element={<TalentRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/mobile/*" element={<MobileAppRoutes />} />
            <Route path="/content/*" element={<ContentRoutes />} />
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
            <Route path="/community/*" element={<CommunityRoutes />} />
            <Route path="/developers/*" element={<DeveloperRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
              </LocalErrorBoundary>
        </Suspense>
        <OfflineToast />
        <SupportChatbot />
        <InstallPrompt />
          </ToastProvider>
      </ThemeProvider>
        </WalletProvider> {/* Added WalletProvider closing tag */}
    </WhitelabelProvider>
    </ErrorBoundary>
  );
};

export default App;
