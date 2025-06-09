import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth/AuthContext';
import { safeStorage } from '@/utils/safeStorage';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const { user, isLoading, isAuthenticated } =
    auth ?? { user: null, isLoading: false, isAuthenticated: false };
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return; // Wait until loading is complete
    }

    if (!isAuthenticated || !user) {
      const next = encodeURIComponent(router.asPath);
      safeStorage.setItem('nextPath', router.asPath);
      router.replace(`/login?redirectTo=${next}`);
    }
  }, [isAuthenticated, user, isLoading, router]);

  if (isLoading || (!isAuthenticated && !isLoading) || (!user && !isLoading) ) { // Show loader if loading or if conditions for redirect are met but effect hasn't run
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  // If authenticated, render children. Otherwise, useEffect will trigger redirect.
  return <>{children}</>;
};

export default PrivateRoute;
