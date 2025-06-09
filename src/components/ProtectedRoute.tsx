
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';

export interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
  tenantAdminAllowed = false,
  requiredUserType
}) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { tenant } = useWhitelabel();
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id);
  
  const isCheckingPermissions = isLoading || isCheckingTenantAdmin;

  useEffect(() => {
    if (isCheckingPermissions) {
      return; // Wait until loading is complete
    }

    if (!user) {
      const next = encodeURIComponent(router.asPath); // Use router.asPath for the full path with query
      router.replace(`/login?next=${next}`);
      return;
    }

    if (adminOnly) {
      const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
      if (!hasAdminAccess) {
        router.replace("/unauthorized");
        return;
      }
    }

    if (requiredUserType && user.userType !== requiredUserType) {
      router.replace("/unauthorized");
      return;
    }
  }, [user, isLoading, router, adminOnly, requiredUserType, tenantAdminAllowed, isTenantAdmin, isCheckingPermissions]);

  // Show loading state if auth or tenant admin status is still being checked
  if (isCheckingPermissions) {
    return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>;
  }

  // If user is authenticated and passes all checks, render children
  // Otherwise, useEffect will have triggered a redirect and this return might show briefly or not at all.
  // It's important that pages using this component can handle a null child if redirection is happening.
  if (!user || (adminOnly && !(user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin))) || (requiredUserType && user.userType !== requiredUserType)) {
    // Still show loader while redirecting or if conditions not met before redirect effect runs
    return <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
    </div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
