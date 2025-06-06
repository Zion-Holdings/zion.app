import React from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home';
import Marketplace from '@/pages/Marketplace'; // Assuming Marketplace component exists
import Categories from '@/pages/Categories';
import Blog from '@/pages/Blog';
import Login from '@/pages/Login';
import Signup from '@/pages/SimpleSignup';
import OAuthCallback from '@/pages/OAuthCallback';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Wallet from '@/pages/Wallet';
import AboutPage from '@/pages/About';
import PartnersPage from '@/pages/Partners';
import BlogPost from '@/pages/BlogPost';
import ErrorTriggerComponent from '@/components/testing/ErrorTriggerComponent';
import PrivateRoute from '@/components/PrivateRoute';
import { CommunityProvider } from '@/context';
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

export const primaryRoutes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/marketplace', element: <Marketplace /> }, // Define Marketplace route
  { path: '/categories', element: <Categories /> },
  { path: '/blog', element: <Blog /> },
  { path: '/login', element: <Login /> },
];

export const allRoutes: RouteObject[] = [
  ...primaryRoutes,
  { path: '/about', element: <AboutPage /> },
  { path: '/register', element: <Signup /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/blog/:slug', element: <BlogPost /> },
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
    )
  },
  { path: '/developers/*', element: <DeveloperRoutes /> },
  // Test routes
  { path: '/test-error-render', element: <ErrorTriggerComponent /> },
  { path: '/test-error-mount', element: <ErrorTriggerComponent onMount={true} /> },
  // Wildcard for error handling - ensure this is last
  { path: '*', element: <ErrorRoutes /> },
];
