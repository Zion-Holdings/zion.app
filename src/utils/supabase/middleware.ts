/// <reference types="node" />
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
// Import proper logging instead of using console directly
import { logErrorToProduction, logInfo, logWarn } from '@/utils/productionLogger';

/**
 * Authentication middleware using Supabase Auth
 * Optimized for production deployment
 */
export async function updateSession(request: NextRequest) {
  const response = NextResponse.next();

  // Validate environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    logWarn('Supabase environment variables not configured, skipping auth middleware');
    return response;
  }

  let supabase;
  try {
    supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            const cookies = (response as any).cookies;
            if (cookies && typeof cookies.set === 'function') {
              cookies.set(name, value, options);
            }
          },
          remove(name: string, options: CookieOptions) {
            const cookies = (response as any).cookies;
            if (cookies && typeof cookies.set === 'function') {
              cookies.set(name, '', options);
            }
          },
        },
      }
    );
  } catch (initError: unknown) {
    logErrorToProduction('Failed to initialize Supabase client in middleware', initError);
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
    return response;
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      const redirectUrl = new URL('/auth/login', request.nextUrl.href);
      redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
    
    return response;
  } catch (authError: unknown) {
    logErrorToProduction('Error during authentication check', authError);
    // Redirect to login on authentication errors
    const redirectUrl = new URL('/auth/login', request.nextUrl.href);
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
}