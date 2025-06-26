import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Define public routes that don't require authentication
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
    '/500'
  ]

  // Check if current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith(route + '/')
  )

  // Skip auth check for public routes, API routes, static files
  if (
    isPublicRoute ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return supabaseResponse
  }

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  try {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser()

    // If there's an error getting user or no user, redirect to login
    if (error || !user) {
      console.log('Middleware: No user found, redirecting to login from:', request.nextUrl.pathname)
      
      // Preserve the original URL as returnTo parameter
      const url = request.nextUrl.clone()
      const returnTo = encodeURIComponent(url.pathname + url.search)
      url.pathname = '/auth/login'
      url.search = `?returnTo=${returnTo}`
      
      return NextResponse.redirect(url)
    }

    // User is authenticated, allow access
    console.log('Middleware: User authenticated, allowing access to:', request.nextUrl.pathname)
    
  } catch (error) {
    console.error('Middleware: Error checking auth:', error)
    // On error, redirect to login
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
} 