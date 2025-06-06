import React, { lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

export type AppRouteObject = RouteObject & {
  metaTitle?: string;
};
import Home from '@/pages/Home';
import Marketplace from '@/pages/Marketplace'; // Assuming Marketplace component exists
import Categories from '@/pages/Categories';
import Blog from '@/pages/Blog';
import Signup from '@/pages/Signup';
const Login = lazy(() => import('@/pages/Login'));
import { LoginForm } from '@/components/auth/login';
import RegisterForm from '@/components/auth/RegisterForm';
import OAuthCallback from '@/pages/OAuthCallback';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Wallet from '@/pages/Wallet';
import CheckoutPage from '@/pages/CheckoutPage';
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
  { path: '/signup', element: <Signup />, metaTitle: 'Sign Up - Zion' },
  { path: '/register', element: <Navigate to="/signup" replace />, metaTitle: 'Sign Up - Zion' },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    metaTitle: 'Dashboard - Zion'
  },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/checkout/:id', element: <CheckoutPage /> },
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
  // Test routes
  { path: '/test-error-render', element: <ErrorTriggerComponent />, metaTitle: 'Test Error Render - Zion' },
  { path: '/test-error-mount', element: <ErrorTriggerComponent onMount={true} />, metaTitle: 'Test Error Mount - Zion' },
  // Wildcard for error handling - ensure this is last
  { path: '*', element: <ErrorRoutes />, metaTitle: 'Not Found - Zion' },
];
