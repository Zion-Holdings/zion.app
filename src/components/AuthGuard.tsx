<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Loader2, Shield } from '@/components/ui/icons;;
import { useRouter } from 'next/router;;
import { useAuth } from '@/hooks/useAuth;;
import { toast } from '@/hooks/use-toast;

interface AuthGuardProps {;
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  showToast?: boolean;
  allowGuest?: boolean;
};
;;
export function AuthGuard(): unknown {): unknown {): unknown {): unknown {): unknown {{''
  children,;
  requireAuth = true,;''
  requireRole,;''
  redirectTo = '/auth/login',''
  fallback,;
  showToast = true,;
  allowGuest = false,;
}: AuthGuardProps) {;''
  const { user, isAuthenticated, isLoading } = useAuth()''
  const router: unknown = useRouter();
;''
  useEffect(() => {;''
    // Don't redirect while auth is still loading''
    if (isLoading) return;
;''
    // If authentication is required but user is not authenticated''
    if (requireAuth && !isAuthenticated && !allowGuest) {;
      if (showToast) {;''
        toast({;''
          title: 'Authentication Required',;''
          description: 'Please log in to access this feature.',;''
          variant: 'destructive',''
=======
import React, { useEffect } from 'react''
import { Loader2, Shield } from '@/components/ui/icons'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireRole?: string[]
  redirectTo?: string
  fallback?: React.ReactNode
  showToast?: boolean
  allowGuest?: boolean

'
export function AuthGuard(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  children,;
  requireAuth = true,'
  requireRole,'
  redirectTo = '/auth/login','
  fallback,;
  showToast = true,;
  allowGuest = false,;
}: AuthGuardProps) {'
  const { user, isAuthenticated, isLoading } = useAuth()'
  const router = useRouter();
'
  useEffect(() => {'
    // Don't redirect while auth is still loading'
    if (isLoading) return;
'
    // If authentication is required but user is not authenticated'
    if (requireAuth && !isAuthenticated && !allowGuest) {;
      if (showToast) {'
        toast({'
          title: 'Authentication Required','
          description: 'Please log in to access this feature.','
          variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        });
      };

      const returnTo = encodeURIComponent(router.asPath);
      router.push(`${redirectTo}?returnTo=${returnTo}`);
      return;
    };

    // If specific roles are required;
    if (requireRole && isAuthenticated && user) {;
      const userRoles = user.role ? [user.role] : [];
      const hasRequiredRole = requireRole.some((role) =>;
        userRoles.includes(role),;
<<<<<<< HEAD
      );''
''
      if (!hasRequiredRole) {;
        if (showToast) {;''
          toast({;''
            title: 'Access Denied',;''`
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,`'
            variant: 'destructive',''
          });''
        };''
        router.push('/dashboard'); // Redirect to dashboard instead of login''
=======
      )'
'
      if (!hasRequiredRole) {;
        if (showToast) {'
          toast({'`
            title: 'Access Denied','``
            description: `This feature requires ${requireRole.join(' or ')} privileges.`,;
            variant: 'destructive','
          })'
        }'
        router.push('/dashboard'); // Redirect to dashboard instead of login'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        return;
      };
    };
  }, [;
    isAuthenticated,;
    isLoading,;
    user,;
    requireAuth,;
    requireRole,;
    router,;
    redirectTo,;
    showToast,;
    allowGuest,;
  ]);
<<<<<<< HEAD
;''
  // Show loading state while auth is being determined''
  if (isLoading) {;
    return (;''
      fallback || (;''
        <div className="flex items-center justify-center min-h-screen>;"
          <div className="flex items-center gap-2 text-muted-foreground">;";""
            <Loader2 className=h-6 w-6 animate-spin" />""
=======
'
  // Show loading state while auth is being determined'
  if (isLoading) {;
    return ('
      fallback || ('
        <div className="flex items-center justify-center min-h-screen>;"
          <div className="flex items-center gap-2 text-muted-foreground">;"
            <Loader2 className=h-6 w-6 animate-spin" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            <span>Loading...</span>;
          </div>;
        </div>);
    );
  };

<<<<<<< HEAD
  // Show unauthorized state if auth is required but user is not authenticated;""
  if (requireAuth && !isAuthenticated && !allowGuest) {;";"
    return (";";"
      fallback || (";";""
        <div className="flex flex-col items-center justify-center min-h-screen gap-4>;"
          <Shield className="h-12 w-12 text-muted-foreground" />;";""
          <div className=text-center">";;"""
            <h2 className=text-xl font-semibold mb-2>";""
              Authentication Required;";""
            </h2>;";";"
            <p className="text-muted-foreground">"
=======
  // Show unauthorized state if auth is required but user is not authenticated;"
  if (requireAuth && !isAuthenticated && !allowGuest) {;";
    return (";";
      fallback || ("
        <div className="flex flex-col items-center justify-center min-h-screen gap-4>;"
          <Shield className="h-12 w-12 text-muted-foreground" />;"
          <div className=text-center">""
            <h2 className=text-xl font-semibold mb-2>";"
              Authentication Required;";"
            </h2>;";";
            <p className="text-muted-foreground">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              Please log in to access this feature.;
            </p>;
          </div>;
        </div>
<<<<<<< HEAD
      );"""
    );;""
  }";;""
";;"""
  // Show role denied state if user doesn't have required role''
=======
      );""
    );"
  }";"
";""
  // Show role denied state if user doesn't have required role'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  if (requireRole && isAuthenticated && user) {;
    const userRoles = user.role ? [user.role] : [];
    const hasRequiredRole = requireRole.some((role) =>;
      userRoles.includes(role),;
<<<<<<< HEAD
    );''
''
    if (!hasRequiredRole) {;
      return (;''
        fallback || (;''
          <div className=flex flex-col items-center justify-center min-h-screen gap-4>";";""
            <Shield className="h-12 w-12 text-muted-foreground />;"
            <div className="text-center">;";""
              <h2 className=text-xl font-semibold mb-2">Access Denied</h2>";;"""
              <p className=text-muted-foreground>";";""
                This feature requires {requireRole.join(' or ')} privileges.''
=======
    )'
'
    if (!hasRequiredRole) {;
      return ('
        fallback || ('
          <div className=flex flex-col items-center justify-center min-h-screen gap-4>"
            <Shield className="h-12 w-12 text-muted-foreground />;"
            <div className="text-center">;"
              <h2 className=text-xl font-semibold mb-2">Access Denied</h2>""
              <p className=text-muted-foreground>"
                This feature requires {requireRole.join(' or ')} privileges.'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              </p>;
            </div>;
          </div>;
        );
      );
    };
  };

  // Render children if all auth checks pass;
<<<<<<< HEAD
  return <>{children}</>;''
}''

// Higher-order component for easy wrapping;;
export function withAuthGuard<P extends object>(;''
  Component: "React.ComponentType<P>,;"
  guardOptions?: Omit<AuthGuardProps, 'children'>,''
=======
  return <>{children}</>'
}'

// Higher-order component for easy wrapping'
export function withAuthGuard<P extends object>('
  Component: React.ComponentType<P>,;
  guardOptions?: Omit<AuthGuardProps, 'children'>,'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
) {;
  return function AuthGuardedComponent(): unknown {): unknown {): unknown {): unknown {): unknown {props: P) {;
    return (;
      <AuthGuard {...guardOptions}>;
        <Component {...props} />;
      </AuthGuard>);
  };
};

// Hook for programmatic auth checks;
export function useAuthGuard(): ;
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const requireAuth = (options?: {;
    redirectTo?: string;
    showToast?: boolean;
<<<<<<< HEAD
    returnUrl?: string;''
  }) => {''
    if (isLoading) return false;
;''
    if (!isAuthenticated) {;''
      const redirectTo: unknown = options?.redirectTo || '/login;''
      const returnUrl: unknown = options?.returnUrl || router.asPath''

      if (options?.showToast !== false) {;''
        toast({;''
          title: 'Authentication Required',;''
          description: 'Please log in to continue.',;''
          variant: 'destructive',''
=======
    returnUrl?: string'
  }) => {'
    if (isLoading) return false;
'
    if (!isAuthenticated) {'
      const redirectTo = options?.redirectTo || '/login'
      const returnUrl = options?.returnUrl || router.asPath'

      if (options?.showToast !== false) {'
        toast({'
          title: 'Authentication Required','
          description: 'Please log in to continue.','
          variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        });
      };`
``
      router.push(`${redirectTo}?returnTo=${encodeURIComponent(returnUrl)}`);
      return false;
    };
<<<<<<< HEAD
;''
    return true''
  };
;''
  const requireRole: unknown "unknown = (",;"
    roles: string[]",""
    options?: {
      showToast?: boolean;""
      redirectTo?: string;";"
    },";";"
  ) => {";";""
    if (!requireAuth({ showToast: "false })) return false"

    const userRoles: unknown = user?.role ? [user.role] : [];
    const hasRequiredRole: unknown = roles.some((role) => userRoles.includes(role))""
;""
    if (!hasRequiredRole) {;";""
      if (options?.showToast !== false) {;";""
        toast({;";"""
          title: 'Access Denied',;''`
          description: `This feature requires ${roles.join(' or ')} privileges.`,`'
          variant: 'destructive',''
        });
      };''
;''
      router.push(options?.redirectTo || '/dashboard')''
=======
'
    return true'
  };
'
  const requireRole: (,;
    roles: string[]","
    options?: {
      showToast?: boolean;"
      redirectTo?: string;";
    },";";
  ) => {"
    if (!requireAuth({ showToast: "false })) return false

    const userRoles = user?.role ? [user.role] : [];
    const hasRequiredRole = roles.some((role) => userRoles.includes(role))"
;"
    if (!hasRequiredRole) {;";"
      if (options?.showToast !== false) {;";"
        toast({;";""`
          title: 'Access Denied','``
          description: `This feature requires ${roles.join(' or ')} privileges.`,;
          variant: 'destructive','
        });
      }'
'
      router.push(options?.redirectTo || '/dashboard')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      return false;
    };

    return true;
  };

  const checkPermission = (permission: string): boolean => {;
    if (!isAuthenticated || !user) return false;

    // Simple permission check - can be extended based on your permission system;
    // Use type assertion for extensibility, as permissions might be added to user type later;
    const userPermissions: unknown =;
      (user as unknown as { permissions?: string[] }).permissions || [];
    return userPermissions.includes(permission);
  };

  return {;
    requireAuth,;
    requireRole,;
    checkPermission,;
    isAuthenticated,;
<<<<<<< HEAD
    user,;''
    isLoading,''
  };
};
;''
}''
};
};
};''
}''

};
};''
}''


}''
=======
    user,'
    isLoading,'
  };
};
'
}'
};
};
}'
}'

};
}'
}'

`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`