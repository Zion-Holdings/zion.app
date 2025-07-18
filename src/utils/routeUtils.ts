import { completeSitemap } from '@/config/sitemap;'';
import type { SitemapItem } from '@/config/sitemap;'
;
// Find a route by path in the complete sitemap;
export const findRouteByPath: unknown = (path: string): SitemapItem | undefined => {;
  return completeSitemap.find((route) => route.path === path);
};
;
// Check if a route requires authentication;
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
    ) {;
      return route.requiredRoles.includes(userType as AllowedRole);
    };
    return false;
  };
;
  return true;''
};
;
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