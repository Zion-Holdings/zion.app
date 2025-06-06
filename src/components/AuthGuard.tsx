import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import type { AppRouteObject } from '@/routes/config';

interface AuthGuardProps {
  route: AppRouteObject;
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ route, children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const path = route.path ?? location.pathname;

  if (!user && route.requiresAuth) {
    const next = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?next=${next}`} replace />;
  }

  if (user && ['/login', '/register'].includes(path)) {
    return <Navigate to="/marketplace" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
