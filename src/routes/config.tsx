import React, { lazy } from 'react';
import { RouteObject } from 'react-router';

export interface AppRouteObject extends RouteObject {
  metaTitle?: string;
}
import Home from '@/pages/Home';
import Marketplace from '@/pages/Marketplace'; // Assuming Marketplace component exists
import Categories from '@/pages/Categories';
import Blog from '@/pages/Blog';
const Login = lazy(() => import('@/pages/Login'));
import { LoginForm } from '@/components/auth/login';
import RegisterForm from '@/components/auth/RegisterForm';
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

export const primaryRoutes: AppRouteObject[] = [
  { path: '/', element: <Home />, metaTitle: 'Home - Zion' },
  { path: '/marketplace', element: <Marketplace />, metaTitle: 'Marketplace - Zion' },
  { path: '/categories', element: <Categories />, metaTitle: 'Categories - Zion' },
  { path: '/blog', element: <Blog />, metaTitle: 'Blog - Zion' },
  { path: '/login', element: <Login />, metaTitle: 'Login - Zion' },
];

export const allRoutes: AppRouteObject[] = [
  ...primaryRoutes,
  { path: '/about', element: <AboutPage />, metaTitle: 'About - Zion' },
  { path: '/register', element: <Signup />, metaTitle: 'Register - Zion' },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    metaTitle: 'Dashboard - Zion'
  },
  { path: '/partners', element: <PartnersPage />, metaTitle: 'Partners - Zion' },
  { path: '/blog/:slug', element: <BlogPost />, metaTitle: 'Blog Post - Zion' },
  { path: '/oauth', element: <OAuthCallback />, metaTitle: 'OAuth Redirect - Zion' },
  { path: '/auth/*', element: <AuthRoutes />, metaTitle: 'Auth - Zion' },
  { path: '/marketplace/*', element: <MarketplaceRoutes />, metaTitle: 'Marketplace - Zion' },
  { path: '/talent/*', element: <TalentRoutes />, metaTitle: 'Talent - Zion' },
  { path: '/admin/*', element: <AdminRoutes />, metaTitle: 'Admin - Zion' },
  { path: '/mobile/*', element: <MobileAppRoutes />, metaTitle: 'Mobile - Zion' },
  { path: '/content/*', element: <ContentRoutes />, metaTitle: 'Content - Zion' },
  { path: '/enterprise/*', element: <EnterpriseRoutes />, metaTitle: 'Enterprise - Zion' },
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
  // Test routes
  { path: '/test-error-render', element: <ErrorTriggerComponent />, metaTitle: 'Test Error Render - Zion' },
  { path: '/test-error-mount', element: <ErrorTriggerComponent onMount={true} />, metaTitle: 'Test Error Mount - Zion' },
  // Wildcard for error handling - ensure this is last
  { path: '*', element: <ErrorRoutes />, metaTitle: 'Not Found - Zion' },
];
