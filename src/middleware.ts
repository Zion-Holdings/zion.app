import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Placeholder for the actual list of protected paths.
// In a real app, this might be more dynamic or organized differently.
const protectedPaths = [
  '/dashboard',
  '/verify',
  '/checkout', // Base for dynamic checkout paths
  '/startup-os',
  '/founder-dashboard',
  '/founder/backup',
  '/auth/onboarding',
  '/auth/talent-onboarding',
  '/auth/service-onboarding',
  '/admin', // Base for admin paths
  '/client-dashboard',
  '/talent-dashboard',
  '/creator-dashboard',
  '/analytics',
  '/project', // Base for project paths
  '/messages',
  '/inbox',
  '/payments',
  '/interviews',
  '/notifications',
  '/applications/track',
  '/hiring-tracker',
  '/projects', // Specific page
  '/portfolio-builder',
  '/referrals',
  '/developers', // Specific page from DashboardRoutes
  '/wallet',
  '/rewards',
  '/achievements',
  '/orders', // Base for orders paths
  '/contract-builder'
];

// Function to check if a path is protected.
// Handles exact matches and base paths for dynamic segments.
function isPathProtected(pathname: string): boolean {
  return protectedPaths.some(protectedPath => {
    if (pathname.startsWith(protectedPath + '/')) { // Handles /checkout/:id, /admin/:path*, etc.
        // Ensure it's not just a partial match like /admin-feature matching /admin
        return true;
    }
    return pathname === protectedPath; // Exact match for paths like /dashboard, /verify
  });
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Prevent middleware from running on static assets or API routes if not intended
  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const isAuthPage = pathname.startsWith('/auth/login') || pathname.startsWith('/auth/signup'); // Add other auth pages if needed

  // Attempt to retrieve the auth token (example cookie name)
  // In a real Supabase setup, you'd use server-side helpers to get the session/user
  const authTokenCookie = request.cookies.get('sb-access-token'); // Common Supabase access token cookie

  if (isPathProtected(pathname)) {
    if (!authTokenCookie) {
      // User is not authenticated and trying to access a protected page,
      // redirect to login, preserving the intended URL for redirection after login.
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirectTo', pathname); // Pass current path for redirect after login
      return NextResponse.redirect(loginUrl);
    }
    // If token exists, assume it's valid for this example.
    // Real validation would happen via Supabase client or backend.
  } else if (isAuthPage && authTokenCookie) {
    // User is authenticated and trying to access login/signup page,
    // redirect to dashboard or a default authenticated page.
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /auth/login, /auth/signup (public auth pages, handled in logic if user is already authed)
     * - Root path '/' if it's public and should not invoke middleware checks often
     * This ensures the middleware runs on actual page navigations.
     * A more targeted matcher based on `protectedPaths` is generally better for performance
     * if the number of protected routes is manageable.
     */
    // Example of a more targeted matcher (adjust as needed):
    '/dashboard/:path*',
    '/verify/:path*', // Allow /verify and /verify/anything
    '/checkout/:path*',
    '/startup-os/:path*',
    '/founder-dashboard/:path*',
    '/founder/backup/:path*',
    '/auth/onboarding/:path*',
    '/auth/talent-onboarding/:path*',
    '/auth/service-onboarding/:path*',
    '/admin/:path*',
    '/client-dashboard/:path*',
    '/talent-dashboard/:path*',
    '/creator-dashboard/:path*',
    '/analytics/:path*',
    '/project/:path*',
    '/messages/:path*',
    '/inbox/:path*',
    '/payments/:path*',
    '/interviews/:path*',
    '/notifications/:path*',
    '/applications/track/:path*',
    '/hiring-tracker/:path*',
    '/projects/:path*', // Note: if /projects is a single page, use /projects, if it has subpages, use /projects/:path*
    '/portfolio-builder/:path*',
    '/referrals/:path*',
    '/developers/:path*', // Assuming /developers is a single page that's protected
    '/wallet/:path*',
    '/rewards/:path*',
    '/achievements/:path*',
    '/orders/:path*',
    '/contract-builder/:path*',
    // Add auth pages to matcher to handle redirect if user is already authenticated
    '/auth/login',
    '/auth/signup',
  ],
};
