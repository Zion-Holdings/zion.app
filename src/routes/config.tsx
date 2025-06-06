import React from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

export type AppRouteObject = RouteObject & {
  metaTitle?: string;
  requiresAuth?: boolean;
}
import RootPage from '@/pages/RootPage';
import MarketplaceLanding from '@/pages/MarketplaceLanding';
import Categories from '@/pages/Categories';
import Blog from '@/pages/Blog';
import ServicesPage from '@/pages/ServicesPage';

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
  GovernanceRoutes,
  MarketplaceRoutes, // Assuming MarketplaceRoutes is a group of routes
  TalentRoutes,      // Assuming TalentRoutes is a group of routes
  CommunityRoutes,   // Assuming CommunityRoutes is a group of routes
} from '.'; // Importing from the same directory (src/routes)

export const primaryRoutes: AppRouteObject[] = [
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
  { path: '/login', element: <LoginForm />, metaTitle: 'Login - Zion', requiresAuth: false },
];

export const allRoutes: AppRouteObject[] = [
  ...primaryRoutes,
  { path: '/about', element: <AboutPage />, metaTitle: 'About - Zion' },
  { path: '/register', element: <Signup />, metaTitle: 'Register - Zion' },
  { path: '/signup', element: <Signup />, metaTitle: 'Sign Up - Zion' },
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
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/roadmap', element: <RoadmapPage />, metaTitle: 'Roadmap - Zion' },
  { path: '/roadmap/suggest', element: <RoadmapSuggestPage />, metaTitle: 'Suggest Feature - Zion' },
  { path: '/roadmap/:id', element: <RoadmapFeaturePage />, metaTitle: 'Feature - Zion' },
  { path: '/verify', element: <VerifyIdentity />, metaTitle: 'Verify Identity', requiresAuth: true },
  { path: '/checkout/:id', element: <CheckoutPage />, requiresAuth: true },
  { path: '/oauth', element: <OAuthCallback /> },
  { path: '/auth/*', element: <AuthRoutes /> },
  { path: '/marketplace/*', element: <MarketplaceRoutes /> },
  { path: '/talent/*', element: <TalentRoutes /> },
  { path: '/admin/*', element: <AdminRoutes /> },
  { path: '/mobile/*', element: <MobileAppRoutes /> },
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
  { path: '/governance/*', element: <GovernanceRoutes />, metaTitle: 'Governance - Zion' },
  { path: '/dao/*', element: <GovernanceRoutes />, metaTitle: 'DAO - Zion' },
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
  // Wildcard for error handling - ensure this is last
  { path: '*', element: <ErrorRoutes />, metaTitle: 'Not Found - Zion' },
];
