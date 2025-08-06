import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Define public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/services',
    '/products',
    '/talent',
    '/auth',
    '/auth/callback',
    '/404',
    '/api'
  ];

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith(route + '/') ||
    request.nextUrl.pathname.startsWith('/blog/') ||
    request.nextUrl.pathname.startsWith('/category/') ||
    request.nextUrl.pathname.startsWith('/chat-content/') ||
    request.nextUrl.pathname.startsWith('/services/')
  );

  // Only redirect unauthenticated users if they're trying to access protected routes
  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth';
    return NextResponse.redirect(url);
  }

  // Redirect authenticated users away from /auth (except for auth callback)
  if (user && request.nextUrl.pathname.startsWith('/auth') && !request.nextUrl.pathname.startsWith('/auth/callback')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    // Exclude static and public assets, and auth callback
    '/((?!_next/static|_next/image|favicon.ico|public|auth/callback).*)',
  ],
};
