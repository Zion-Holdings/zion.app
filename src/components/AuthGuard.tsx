import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useAuth } from '@/hooks/useAuth';
import type { AppRouteObject } from '@/routes/config';

interface AuthGuardProps {
  route: AppRouteObject;
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ route, children }) => {
  const { user, isLoading } = useAuth(); // Assuming useAuth provides isLoading
  const router = useRouter();
  const currentPath = router.pathname; // Or router.asPath depending on needs

  useEffect(() => {
    if (isLoading) {
      return; // Don't do anything while auth state is loading
    }

    const targetPath = route.path ?? currentPath;

    if (!user && route.requiresAuth) {
      const next = encodeURIComponent(router.asPath); // Use router.asPath for full path with query
      router.replace(`/login?next=${next}`);
    } else if (user && ['/login', '/register', '/signup'].includes(targetPath)) {
      router.replace('/marketplace');
    }
  }, [user, isLoading, route, router, currentPath]);

  // Render children only if authorized or if route doesn't require auth,
  // or if still loading (to prevent layout shift or premature render)
  if (isLoading) {
    return null; // Or a loading spinner, or children if they handle loading state
  }
  if (!user && route.requiresAuth) {
    return null; // Or a loading/redirecting indicator
  }
  if (user && ['/login', '/register', '/signup'].includes(route.path ?? currentPath)) {
    return null; // Or a loading/redirecting indicator
  }

  return <>{children}</>;
};

export default AuthGuard;
