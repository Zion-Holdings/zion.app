import React from 'react';
// Removed: import { RouteObject } from 'react-router';
// Removed: import { Navigate } from 'react-router-dom';

// Redefined AppRouteObject without react-router types
export interface AppRouteObject {
  path?: string;
  element?: React.ReactNode; // Keep as ReactNode for component references
  index?: boolean;
  children?: AppRouteObject[];
  metaTitle?: string;
  requiresAuth?: boolean;
  // caseSensitive?: boolean; // Removed as it was from RouteObject
}

// Ensure this interface still meets the needs of guardRoutes and other usages.
// It might need further adjustments based on how it's consumed elsewhere,
// but for now, it removes the react-router dependency.

/*
  The original AppRouteObject extended Omit<RouteObject, 'index' | 'children'>.
  RouteObject has properties like:
  caseSensitive?: boolean;
  path?: string;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  handle?: RouteHandle;
  shouldRevalidate?: ShouldRevalidateFunction;
  children?: RouteObject[];
  index?: boolean;

  The new AppRouteObject keeps path, element, index, children, metaTitle, requiresAuth.
  If other properties from RouteObject were implicitly used (e.g. id, caseSensitive),
  they might need to be explicitly added back or handled differently.
*/
import RootPage from '@/pages/RootPage';
import MarketplaceLanding from '@/pages/MarketplaceLanding';
import Categories from '@/pages/Categories';
import Blog from '@/pages/Blog';
import ServicesPage from '@/pages/ServicesPage';
import ProductsList from '@/pages/ProductsList';
import ErrorGuard from '@/components/ErrorGuard';

function guardRoutes(routes: AppRouteObject[]): AppRouteObject[] {
  return routes;
}
import { LoginForm } from '@/components/auth/login';
import OAuthCallback from '@/pages/OAuthCallback';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Wallet from '@/pages/Wallet';
import CheckoutPage from '@/pages/CheckoutPage';
import AboutPage from '@/pages/About';
import PartnersPage from '@/pages/Partners';
import PartnerIntegration from '@/pages/PartnerIntegration';
import InvestorMatchPage from '@/pages/InvestorMatch';
import BlogPost from '@/pages/BlogPost';
import GrantsPage from '@/pages/Grants';
import RoadmapPage from '@/pages/Roadmap';
import RoadmapFeaturePage from '@/pages/RoadmapFeature';
import RoadmapSuggestPage from '@/pages/RoadmapSuggest';
import ErrorTriggerComponent from '@/components/testing/ErrorTriggerComponent';
import { CommunityProvider } from '@/context';
import VerifyIdentity from '@/pages/VerifyIdentity';
import StartupOSPage from '@/pages/StartupOS'; // Import the new page
import GlobalMapPage from '@/pages/GlobalMap';
import SummitPage from '@/pages/SummitPage';
import OrgChartPage from '@/pages/OrgChart';
import PrivacyVotePage from '@/pages/governance/privacy';
import MobilePwa from '@/pages/MobilePwa';
import FounderBackupVault from '@/pages/FounderBackupVault';
import CongressPage from '@/pages/Congress';
import UNBridgePage from '@/pages/UNBridge';
import InternationalProposalsPage from '@/pages/InternationalProposals';
import DocsPage from '@/pages/DocsPage'; // Added import for DocsPage
import CartPage from '@/pages/Cart'; // Import CartPage
const Signup = React.lazy(() => import('@/pages/Signup'));

import {
 AuthRoutes,
 DashboardRoutes,
 AdminRoutes,
 MobileAppRoutes,
 ContentRoutes,
 ErrorRoutes,
 EnterpriseRoutes,
 DeveloperRoutes,
 MarketplaceRoutes, // Assuming MarketplaceRoutes is a group of routes
 TalentRoutes,      // Assuming TalentRoutes is a group of routes
 CommunityRoutes,   // Assuming CommunityRoutes is a group of routes
} from '.'; // Importing from the same directory (src/routes)

export const primaryRoutes: AppRouteObject[] = guardRoutes([
  { path: '/', element: <RootPage /> },
  {
    path: '/marketplace',
    element: <MarketplaceLanding />,
    metaTitle: 'Marketplace - Zion',
    requiresAuth: false,
  },
  { path: '/categories', element: <Categories />, metaTitle: 'Categories - Zion' },
  { path: '/blog', element: <Blog />, metaTitle: 'Blog - Zion', requiresAuth: false },
  { path: '/services', element: <ServicesPage />, metaTitle: 'Services - Zion', requiresAuth: false },
  { path: '/products', element: <ProductsList />, metaTitle: 'Products - Zion', requiresAuth: false },
]);

export const allRoutes: AppRouteObject[] = guardRoutes([
  { path: '/login', element: <LoginForm /> },
  ...primaryRoutes,
  { path: '/about', element: <AboutPage />, metaTitle: 'About - Zion' },
  { path: '/register', element: <Signup />, metaTitle: 'Register - Zion' },
  { path: '/signup', element: <Signup />, metaTitle: 'Sign Up - Zion' },
  { path: '/summit', element: <SummitPage />, metaTitle: 'Zion Global Summit' },
  { path: '/zion-global-2025', element: <SummitPage />, metaTitle: 'Zion Global Summit 2025' },
  {
    path: '/dashboard',
    element: <Dashboard />,
    metaTitle: 'Dashboard - Zion',
    requiresAuth: true,
  },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/investor-match', element: <InvestorMatchPage />, metaTitle: 'Investor Match - Zion' },
  { path: '/integrate', element: <PartnerIntegration />, metaTitle: 'Partner API - Zion' },
  { path: '/investor-match', element: <InvestorMatchPage />, metaTitle: 'Investor Match - Zion' },
  { path: '/grants', element: <GrantsPage />, metaTitle: 'Grants - Zion' },
  { path: '/team', element: <OrgChartPage />, metaTitle: 'Team - Zion' },
  { path: '/governance/org-chart', element: <OrgChartPage />, metaTitle: 'Org Chart - Zion' },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/roadmap', element: <RoadmapPage />, metaTitle: 'Roadmap - Zion' },
  { path: '/roadmap/suggest', element: <RoadmapSuggestPage />, metaTitle: 'Suggest Feature - Zion' },
  { path: '/roadmap/:id', element: <RoadmapFeaturePage />, metaTitle: 'Feature - Zion' },
  { path: '/verify', element: <VerifyIdentity />, metaTitle: 'Verify Identity', requiresAuth: true },
  { path: '/cart', element: <CartPage />, metaTitle: 'Cart - Zion' }, // Added cart route
  { path: '/checkout/:id', element: <CheckoutPage />, requiresAuth: true },
  { path: '/oauth', element: <OAuthCallback /> },
  { path: '/auth/*', element: <AuthRoutes /> },
  { path: '/marketplace/products', element: <ProductsList /> },
  { path: '/marketplace/*', element: <MarketplaceRoutes /> },
  { path: '/talent/*', element: <TalentRoutes /> },
  { path: '/admin/*', element: <AdminRoutes /> },
  { path: '/mobile/*', element: <MobileAppRoutes /> },
  { path: '/mobile/pwa/*', element: <MobilePwa />, metaTitle: 'Zion Mobile PWA' },
  // Removed: { path: '/m/*', element: <Navigate to="/mobile/pwa" replace /> }, // This redirect should be handled in next.config.js
  { path: '/content/*', element: <ContentRoutes /> },
  { path: '/enterprise/*', element: <EnterpriseRoutes /> },
  {
    path: '/community/*',
    element: (
      <CommunityProvider>
        <CommunityRoutes />
      </CommunityProvider>
    ),
    metaTitle: 'Community - Zion'
  },
  { path: '/developers/*', element: <DeveloperRoutes />, metaTitle: 'Developers - Zion' },
  { path: '/governance/privacy', element: <PrivacyVotePage />, metaTitle: 'ZK Vote - Zion' },
  { path: '/dao/zkvote', element: <PrivacyVotePage />, metaTitle: 'ZK Vote - Zion' },
  // Test routes
  { path: '/test-error-render', element: <ErrorTriggerComponent />, metaTitle: 'Test Error Render - Zion' },
  { path: '/test-error-mount', element: <ErrorTriggerComponent onMount={true} />, metaTitle: 'Test Error Mount - Zion' },
  // Add the new route for Startup OS
  {
    path: '/startup-os',
    element: <StartupOSPage />,
    metaTitle: 'Startup OS - Zion',
    requiresAuth: true, // Assuming it requires authentication
  },
  {
    path: '/founder-dashboard',
    element: <StartupOSPage />, // Reuses the same page component
    metaTitle: 'Founder Dashboard - Zion',
    requiresAuth: true,
  },
  {
    path: '/founder/backup',
    element: <FounderBackupVault />,
    metaTitle: 'Founder Backup Vault - Zion',
    requiresAuth: true,
  },
  {
    path: '/global',
    element: <GlobalMapPage />,
    metaTitle: 'Global Map - Zion',
    requiresAuth: false,
  },
  {
    path: '/convene',
    element: <CongressPage />,
    metaTitle: 'Planetary Congress - Zion',
    requiresAuth: false,
  },
  {
    path: '/protocol/congress',
    element: <CongressPage />,
    metaTitle: 'Planetary Congress - Zion',
    requiresAuth: false,
  },
  {
    path: '/protocol/un-bridge',
    element: <UNBridgePage />,
    metaTitle: 'UN Bridge - Zion',
    requiresAuth: false,
  },
  {
    path: '/proposals/international',
    element: <InternationalProposalsPage />,
    metaTitle: 'International Proposals - Zion',
    requiresAuth: false,
  },
  // Route for documentation page
  { path: '/resources/docs', element: <DocsPage />, metaTitle: 'Documentation - Zion' },
  // Wildcard for error handling - ensure this is last
  { path: '*', element: <ErrorRoutes />, metaTitle: 'Not Found - Zion' },
]);
