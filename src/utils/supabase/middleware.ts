import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
// Import proper logging instead of using console directly
import { logError, logInfo, logWarn } from '@/utils/productionLogger';

/**
 * Authentication middleware using Supabase Auth
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  let supabase;
  try {
    supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({ name, value, ...options });
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            });
            response.cookies.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({ name, value: '', ...options });
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            });
            response.cookies.set({ name, value: '', ...options });
          },
        },
      }
    );
  } catch (initError) {
    logError('CRITICAL: Failed to initialize Supabase client in middleware', initError, {
      url: request.nextUrl.pathname,
      userAgent: request.headers.get('user-agent'),
      context: 'middleware-init'
    });
    return response;
  }

  const isPublicRoute = [
    '/', '/auth', '/auth/login', '/auth/register', '/auth/verify-email', '/auth/error',
    '/api', '/api/auth', '/about', '/contact', '/terms', '/privacy',
    '/favicon.ico', '/_next', '/static'
  ].some(route => {
    if (route === '/api' || route === '/_next' || route === '/static') {
      return request.nextUrl.pathname.startsWith(route);
    }
    return request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(route + '/');
  });

  if (isPublicRoute) {
    logInfo('Middleware: Public route accessed', { 
      path: request.nextUrl.pathname,
      userAgent: request.headers.get('user-agent')?.substring(0, 100)
    });
    return response;
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      logInfo('Middleware: No user found or error, redirecting to login', {
        from: request.nextUrl.pathname,
        error: error ? error.message : 'No user found',
        userAgent: request.headers.get('user-agent')?.substring(0, 100)
      });
      
      const redirectUrl = new URL('/auth/login', request.url);
      redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    logInfo('Middleware: User authenticated, allowing access', {
      path: request.nextUrl.pathname,
      userId: user.id,
      userEmail: user.email
    });
    
    return response;
  } catch (authError) {
    logError('Middleware: Error during authentication check', authError, {
      path: request.nextUrl.pathname,
      userAgent: request.headers.get('user-agent')?.substring(0, 100),
      context: 'auth-check'
    });
    
    // Redirect to login on authentication errors
    const redirectUrl = new URL('/auth/login', request.url);
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
}