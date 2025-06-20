import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Handle root path specifically to prevent 404s
  if (pathname === '/') {
    const response = NextResponse.next();
    
    // Set cache headers to prevent caching issues
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=300'
    );
    
    // Add headers to help with debugging
    response.headers.set('X-Route-Handler', 'middleware-root');
    response.headers.set('X-Timestamp', Date.now().toString());
    
    return response;
  }

  // Handle legacy route redirects
  if (pathname === '/home') {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // Handle mobile route redirects (from next.config.cjs)
  if (pathname.startsWith('/m/')) {
    url.pathname = pathname.replace('/m/', '/mobile/pwa/');
    return NextResponse.redirect(url, 301);
  }

  // Set appropriate cache headers for static pages
  if (pathname.startsWith('/api/')) {
    // Don't cache API routes by default
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    return response;
  }

  // For all other requests, add debugging headers
  const response = NextResponse.next();
  response.headers.set('X-Route-Handler', 'middleware-passthrough');
  
  return response;
}

export const config = {
  // Run middleware on all routes except static files and API routes that need special handling
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)' 
  ],
}; 