import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '@/context/auth/AuthContext';
import { safeStorage } from '@/utils/safeStorage';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useContext(AuthContext) ?? { user: null, isLoading: false, isAuthenticated: false } as any;
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    const next = encodeURIComponent(location.pathname + location.search);
    safeStorage.setItem('nextPath', location.pathname + location.search);
    return <Navigate to={`/login?redirectTo=${next}`} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
