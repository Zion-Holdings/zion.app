/**
 * Defines routes that are publicly accessible and should not trigger
 * authentication-related error toasts.
 *
 * Paths can be exact strings or regular expressions.
 */

export const publicRoutes: (string | RegExp)[] = [
  '/', // Homepage
  '/login',
  '/auth/login',
  '/register',
  '/auth/register',
  '/forgot-password',
  '/auth/forgot-password',
  '/reset-password',
  '/auth/reset-password',
  '/about',
  '/contact',
  '/terms',
  '/privacy',
  '/blog', // Blog index
  /^\/blog\/.+/, // Individual blog posts
  '/resources', // Resources index
  /^\/resources\/.+/, // Specific resource pages (e.g., /resources/docs)
  '/docs', // Docs index (if separate from resources)
  /^\/docs\/.+/, // Specific doc pages
  '/marketplace', // Marketplace index
  /^\/marketplace\/.+/, // Individual marketplace sub-pages/items
  '/community',   // Community index
  /^\/community\/.+/, // Individual community sub-pages/posts
  '/api/health', // Public health check endpoints
  '/api/status',
  // Add other known public paths or patterns here
  // For example, API endpoints that are intentionally public:
  // /api/public-data
];

/**
 * Checks if a given URL path is considered public.
 * @param path The URL path to check (e.g., /resources/docs).
 * @returns True if the path is public, false otherwise.
 */
export const isPublicRoute = (path: string): boolean => {
  if (!path) {
    return false;
  }

  // Ensure path starts with a slash for consistent matching
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return publicRoutes.some(route => {
    if (route instanceof RegExp) {
      return route.test(normalizedPath);
    }
    // For string routes, ensure exact match or match if it's a base path
    // e.g. '/docs' should match '/docs' and '/docs/'
    return normalizedPath === route || normalizedPath === `${route}/`;
  });
};
