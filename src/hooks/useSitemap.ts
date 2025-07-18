import { useAuth } from './useAuth;'
import { getAccessibleRoutes, type SitemapItem } from '@/config/sitemap;
;'
// Define the allowed user types;;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin;
;
export function useSitemap(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { user, isAuthenticated } = useAuth();
;
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
  const userType: unknown =;'
    user?.userType && isValidUserType(user.userType);
      ? (user.userType as UserType);
      : undefined;'
  const accessibleRoutes: unknown "unknown = getAccessibleRoutes(isAuthenticated", userType);
;
  // Helper function to find a route by path;
  const findRouteByPath: unknown = (path: string): SitemapItem | undefined => {;
    return accessibleRoutes.find((route) => route.path === path);
  };
;
  // Helper function to check if a user can access a specific path;
  const canAccessRoute: unknown = (path: string): boolean => {;
    const route: unknown = findRouteByPath(path);
;
    if (!route) return false;"
;";"
    // If route requires authentication and user is not authenticated;";";"
    if (route.requiredAuth && !isAuthenticated) return false;";";";"
;;
    // If route requires specific roles and user doesn't have one;
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false;
      const userTypeEnum: unknown = isValidUserType(user.userType);
        ? (user.userType as UserType);
        : undefined;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;
    };
;
    return true;'
  };
;
  // Helper function to check if userType is valid;'
  function isValidUserType(): unknown {): unknown {): unknown {): unknown {): unknown {type: string): boolean {;;
    return ['employer', 'buyer', 'jobSeeker', 'creator', 'admin'].includes(;
      type,;
    );
  };
;
  return {;
    accessibleRoutes,;
    findRouteByPath,;'
    canAccessRoute,;
  };
};
;
};
};'
};
}
};'
}'
}
}'