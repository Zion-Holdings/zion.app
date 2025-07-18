<<<<<<< HEAD
import { useAuth } from './useAuth'
import { getAccessibleRoutes, type SitemapItem } from '@/config/sitemap;;
'
// Define the allowed user types;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin;
export function useSitemap(): ;
=======
import { useAuth } from './useAuth;'';
import { getAccessibleRoutes, type SitemapItem } from '@/config/sitemap;'
;''
// Define the allowed user types;;
type UserType = 'employer' | 'buyer' | 'jobSeeker' | 'creator' | 'admin;'
;
export function useSitemap(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const { user, isAuthenticated } = useAuth();
  // Get routes that the current user can access;
  // Cast userType to UserType or pass undefined if not valid;
<<<<<<< HEAD
  const userType: unknown ='
    user?.userType && isValidUserType(user.userType);
      ? (user.userType as UserType);
      : undefined'
  const accessibleRoutes: getAccessibleRoutes(isAuthenticated", userType);
=======
  const userType: unknown =;''
    user?.userType && isValidUserType(user.userType);
      ? (user.userType as UserType);
      : undefined;''
  const accessibleRoutes: unknown "unknown = getAccessibleRoutes(isAuthenticated", userType);"
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  // Helper function to find a route by path;
  const findRouteByPath = (path: string): SitemapItem | undefined => {;
    return accessibleRoutes.find((route) => route.path === path);
  };
  // Helper function to check if a user can access a specific path;
<<<<<<< HEAD
  const canAccessRoute = (path: string): boolean => {;
    const route = findRouteByPath(path);
    if (!route) return false;"
;";"
    // If route requires authentication and user is not authenticated;"
    if (route.requiredAuth && !isAuthenticated) return false;"
;
    // If route requires specific roles and user doesn't have one;
=======
  const canAccessRoute: unknown = (path: string): boolean => {;
    const route: unknown = findRouteByPath(path);
;
    if (!route) return false;""
;";""
    // If route requires authentication and user is not authenticated;";";""
    if (route.requiredAuth && !isAuthenticated) return false;";";";""
;;
    // If route requires specific roles and user doesn't have one;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (route.requiredRoles && route.requiredRoles.length > 0) {;
      if (!user || !user.userType) return false;
      const userTypeEnum = isValidUserType(user.userType);
        ? (user.userType as UserType);
        : undefined;
      return userTypeEnum ? route.requiredRoles.includes(userTypeEnum) : false;
    };
<<<<<<< HEAD
    return true'
  };
  // Helper function to check if userType is valid'
  function isValidUserType(): unknown {): unknown {): unknown {): unknown {): unknown {type: string): boolean {;
    return ['employer', 'buyer', 'jobSeeker', 'creator', 'admin'].includes(;
=======
;
    return true;''
  };
;
  // Helper function to check if userType is valid;''
  function isValidUserType(): unknown {): unknown {): unknown {): unknown {): unknown {type: string): boolean {;;
    return ['employer', 'buyer', 'jobSeeker', 'creator', 'admin'].includes(;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      type,;
    );
  };
  return {;
    accessibleRoutes,;
<<<<<<< HEAD
    findRouteByPath,'
=======
    findRouteByPath,;''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    canAccessRoute,;
  };
};
};
<<<<<<< HEAD
}'
};
}
}'
}'
=======
};''
};
}
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''