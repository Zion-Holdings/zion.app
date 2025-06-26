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
    '/signup',
    '/forgot-password',
    '/verify-status',
    '/auth', // Auth routes
    '/login',
  ];

  // Check if the request is for a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(route + '/') ||
    pathname.startsWith('/api/auth/') // Allow all auth API routes
  );

  // Skip authentication middleware for public routes
  if (isPublicRoute) {
    console.log('Skipping authentication middleware for public route:', pathname);
    return NextResponse.next();
  }

  try {
    // Get the session token from cookies
    const sessionToken = request.cookies.get('sb-gnwtggeptzkqnduuthto-auth-token')?.value;
    
    // If there's no session token, redirect to login for protected routes
    if (!sessionToken) {
      console.log('No session found, redirecting to login');
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('returnTo', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
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