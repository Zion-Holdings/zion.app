import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  console.log('Auth0 middleware processing request:', {
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
    '/categories',
    '/search',
    '/api/products',
    '/api/categories',
    '/api/search',
    '/api/marketplace',
    '/signup',
    '/forgot-password',
    '/verify-status',
    '/auth', // Auth0 routes themselves
  ];

  // Check if the request is for a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(route + '/') ||
    pathname.startsWith('/api/auth/') // Allow all auth API routes
  );

  // Skip Auth0 middleware for public routes
  if (isPublicRoute) {
    console.log('Skipping Auth0 middleware for public route:', pathname);
    return;
  }

  try {
    const response = await auth0.middleware(request);
    
    console.log('Auth0 middleware response:', {
      status: response?.status,
      statusText: response?.statusText,
      redirected: response?.redirected
    });
    
    return response;
  } catch (error) {
    console.error('Auth0 middleware error:', error);
    // Return the request as-is if middleware fails
    return;
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