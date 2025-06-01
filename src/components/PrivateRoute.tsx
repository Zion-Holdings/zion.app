import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '@/context/auth/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? { user: null } as any;
  const location = useLocation();

  if (user === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  if (user === false) {
    const next = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?redirectTo=${next}`} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
