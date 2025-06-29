import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Using console.error for logging in middleware as a dedicated logger might not be available/configured.
// In a production setup, structured logging would be preferred.

export async function updateSession(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      'CRITICAL: Supabase URL or Anon Key is not defined in environment variables. Middleware cannot proceed.'
    );
    const errorUrl = request.nextUrl.clone();
    errorUrl.pathname = '/service-unavailable'; // Ensure this page exists and is static or public
    errorUrl.search = '';
    return NextResponse.redirect(errorUrl);
  }

  let supabaseResponse = NextResponse.next({
    request,
  });

  let supabase;
  try {
    supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });
  } catch (initError) {
    console.error('CRITICAL: Failed to initialize Supabase client in middleware.', initError);
    const errorUrl = request.nextUrl.clone();
    errorUrl.pathname = '/service-unavailable';
    errorUrl.search = '';
    return NextResponse.redirect(errorUrl);
  }

  // Define public routes that don't require authentication
  // Added '/service-unavailable' to the list of public routes.
  const publicRoutes = [
    '/',
    '/login',
    '/auth/login',
    '/auth/register',
    '/auth/verify-email',
    '/auth/forgot-password',
    '/signup',
    '/about',
    '/contact',
    '/pricing',
    '/features',
    '/blog',
    '/docs',
    '/help',
    '/privacy',
    '/terms',
    '/offline',
    '/404',
    '/500',
    // Added Marketplace and Community to public routes
    '/marketplace',
    '/community',
    '/service-unavailable' // Ensure this error page is public
  ];

  // Check if current path is a public route
  const isPublicRoute = publicRoutes.some(route => {
    // Check for exact match or if the path starts with the route followed by a slash,
    // but only if the route is not the root path, to avoid matching all paths.
    if (request.nextUrl.pathname === route) {
      return true;
    }
    // Ensure that if route is `/foo`, it matches `/foo/bar` but not `/foobar`
    if (route !== '/' && request.nextUrl.pathname.startsWith(route + '/')) {
      return true;
    }
    return false;
  });

  // More specific checks for Next.js internals and static assets
  const isNextInternal = request.nextUrl.pathname.startsWith('/_next/');
  const isStaticAsset = /\.(?!html|json)([a-zA-Z0-9]+)$/.test(request.nextUrl.pathname) || request.nextUrl.pathname.startsWith('/static/') || request.nextUrl.pathname.startsWith('/images/');


  if (
    isPublicRoute ||
    request.nextUrl.pathname.startsWith('/api/') || // API routes
    isNextInternal || // Next.js internal files
    isStaticAsset    // Other static assets like .ico, .png, etc.
  ) {
    return supabaseResponse;
  }

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      console.log('Middleware: No user found or error, redirecting to login from:', request.nextUrl.pathname, error ? `Error: ${error.message}`: '');
      const url = request.nextUrl.clone();
      const returnTo = encodeURIComponent(url.pathname + url.search);
      url.pathname = '/auth/login';
      url.search = `?returnTo=${returnTo}`;
      return NextResponse.redirect(url);
    }

    console.log('Middleware: User authenticated, allowing access to:', request.nextUrl.pathname);
  } catch (authError: any) { // Added type annotation for authError
    console.error('Middleware: Error during authentication check:', authError.message || authError);
    const url = request.nextUrl.clone();
    url.pathname = '/auth/login'; // Fallback to login on other auth check errors
    return NextResponse.redirect(url);
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // ... (rest of the original comment) ...

  return supabaseResponse;
}