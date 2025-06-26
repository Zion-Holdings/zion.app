import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  console.log('Supabase middleware processing request:', {
    url: request.url,
    pathname,
    method: request.method
  });

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/marketplace',
    '/cart',
    '/checkout',
    '/products',
    '/product',
    '/services',
    '/contact',
    '/blog',
    '/partners',
    '/docs',
    '/tutorials',
    '/case-studies',
    '/status',
    '/api-status',
    '/categories',
    '/category',
    '/search',
    '/equipment', // Add equipment as public route
    '/talent', // Add talent as public route
    '/community', // Community sections should be public
    '/resources', // Resources sections should be public
    '/api/health',
    '/api/health/environment',
    '/api/products',
    '/api/categories',
    '/api/search',
    '/api/marketplace',
    '/api/reviews', // Add reviews API as public
    '/api/health', // Health check endpoint should be public
    '/signup',
    '/forgot-password',
    '/verify-status',
    '/auth', // Auth routes including /auth/login
    '/login', // Explicitly public, though covered by /auth
  ];

  const isPublicRoute = publicRoutes.some(route => {
    if (route === '/') return pathname === '/'; // Exact match for root
    return pathname.startsWith(route) || pathname.startsWith('/api/auth/');
  });

  const returnTo = request.nextUrl.searchParams.get('returnTo');

  // Prevent redirect loop if already on login and returnTo is also login
  if (pathname === '/auth/login' && returnTo === '/auth/login') {
    console.log('Redirect loop detected on /auth/login. Clearing returnTo and redirecting to /');
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('returnTo'); // Example if returnTo was stored in a cookie
    // If returnTo is only a URL param, this redirect to '/' effectively clears it for the next navigation
    return response;
  }

  // If trying to access a public route, allow it, regardless of a potentially problematic returnTo.
  if (isPublicRoute) {
    console.log('Skipping authentication middleware for public route:', pathname);
    // If a 'returnTo' parameter led to a public page, we might want to clear it
    // so it doesn't interfere with future navigations.
    // However, simply proceeding should be fine as the public route takes precedence.
    return NextResponse.next();
  }

  // Protected route logic
  try {
    const sessionToken = request.cookies.get('sb-gnwtggeptzkqnduuthto-auth-token')?.value;
    
    if (!sessionToken) {
      console.log(`No session found for protected route ${pathname}, redirecting to login.`);
      const loginUrl = new URL('/auth/login', request.url);
      // Set returnTo only if it's not already pointing to login page itself, to avoid issues.
      // And only if the current path is not already a login/auth path.
      if (pathname !== '/auth/login' && !pathname.startsWith('/auth/')) {
        loginUrl.searchParams.set('returnTo', pathname);
      }
      return NextResponse.redirect(loginUrl);
    }
    
    // User is authenticated
    console.log(`User authenticated for route: ${pathname}`);
    // If user is authenticated and tries to go to login, redirect to dashboard or returnTo if valid
    if (pathname === '/auth/login') {
      const validReturnTo = returnTo && returnTo !== '/auth/login' ? returnTo : '/dashboard';
      console.log(`Authenticated user on login page, redirecting to: ${validReturnTo}`);
      return NextResponse.redirect(new URL(validReturnTo, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    // Fallback: allow request to proceed to avoid breaking site on middleware errors
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files) 
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}; 