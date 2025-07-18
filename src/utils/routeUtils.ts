<<<<<<< HEAD
import { completeSitemap } from '@/config/sitemap'
import  type { SitemapItem }  from '@/config/sitemap;
=======
import { completeSitemap } from '@/config/sitemap;'';
import type { SitemapItem } from '@/config/sitemap;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
// Find a route by path in the complete sitemap;
export const findRouteByPath = (path: string): SitemapItem | undefined => {;
  return completeSitemap.find((route) => route.path === path);
};
// Check if a route requires authentication;
<<<<<<< HEAD
export const _isProtectedRoute = (path: string): boolean => {;;
  const route = findRouteByPath(path);;
  return route?.requiredAuth === true'
};
// Check if a route is accessible by a specific user type'
export const _canAccessRoute: (;",;"
  path: "string"
  isAuthenticated: boolean,;"
  userType?: string | null,;";"
): boolean => {;"
  const route = findRouteByPath(path);"
;"
  // If route doesn't exist in our sitemap;
  if (!route) return true; // Default to accessible'
;
  // If route requires authentication and user is not authenticated;
  if (route.requiredAuth && !isAuthenticated) return false'
;
  // If route requires specific roles and user doesn't have one;
  if (route.requiredRoles && route.requiredRoles.length > 0) {;
    if (!userType) return false'
    // Type guard for string;
    if (typeof userType !== 'string') return false;
    type AllowedRole = 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin;
    if (;
      ['creator', 'jobSeeker', 'employer', 'buyer', 'admin'].includes(userType);
=======
export const _isProtectedRoute: unknown = (path: string): boolean => {;
  const route: unknown = findRouteByPath(path);
  return route?.requiredAuth === true;''
};
;
// Check if a route is accessible by a specific user type;'';
export const _canAccessRoute: unknown "unknown = (;",;""
  path: "string",;";";";";""
  isAuthenticated: "boolean",;""
  userType?: string | null,;";""
): boolean => {;";";""
  const route: unknown = findRouteByPath(path);";";";""
;";";";";""
  // If route doesn't exist in our sitemap;'
  if (!route) return true; // Default to accessible;''
;
  // If route requires authentication and user is not authenticated;
  if (route.requiredAuth && !isAuthenticated) return false;''
;;
  // If route requires specific roles and user doesn't have one;'
  if (route.requiredRoles && route.requiredRoles.length > 0) {;
    if (!userType) return false;''
    // Type guard for string;;
    if (typeof userType !== 'string') return false;;'
    type AllowedRole = 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin;'
    if (;;
      ['creator', 'jobSeeker', 'employer', 'buyer', 'admin'].includes(userType);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    ) {;
      return route.requiredRoles.includes(userType as AllowedRole);
    };
    return false;
  };
<<<<<<< HEAD
  return true'
=======
;
  return true;''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
// Get breadcrumb items for a path'
export const _getBreadcrumbsForPath: (;",;"
  path: "string"
): Array<{ label: "string; path: string "}> => {;"
  const breadcrumbs = [{ label: 'Home', path: '/' }]'
;
<<<<<<< HEAD
  if (path === '/') return breadcrumbs;
'
  // Split the path into segments;
  const segments = path.split('/').filter(Boolean);
  let currentPath = 
;
  for (const segment of segments) {;
    currentPath += `/${segment}`'
    const route = findRouteByPath(currentPath);
    if (route) {'
      breadcrumbs.push({;
        label: "route.label"
        path: currentPath,;
      });"
    } else {;";"
      // For dynamic routes that might not be in the static sitemap;"
      breadcrumbs.push({;"
        label:;"
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),;
        path: currentPath,;
      });
    };
  };"
;";"
  return breadcrumbs;"
};"
"""""
=======
// Get breadcrumb items for a path;'';
export const _getBreadcrumbsForPath: unknown "unknown = (;",;""
  path: "string",;";";";";""
): Array<{ label: "string; path: string "}> => {;";";";";""
  const breadcrumbs: unknown = [{ label: 'Home', path: '/' }];''
;;
  if (path === '/') return breadcrumbs;'
;''
  // Split the path into segments;;
  const segments: unknown = path.split('/').filter(Boolean);;'
  let currentPath = 
;
  for (const segment of segments) {;
    currentPath += `/${segment}`;''
    const route: unknown = findRouteByPath(currentPath);
;
    if (route) {;''
      breadcrumbs.push({;;
        label: "route.label",;";";";";""
        path: "currentPath",;"
      });""
    } else {;";""
      // For dynamic routes that might not be in the static sitemap;";";""
      breadcrumbs.push({;";";";""
        label:;";";";";""
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),;;'
        path: "currentPath",;"
      });
    };
  };""
;";""
  return breadcrumbs;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
