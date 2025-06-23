import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  console.log('Auth0 middleware processing request:', {
    url: request.url,
    pathname: request.nextUrl.pathname,
    method: request.method
  });

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