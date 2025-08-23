import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/utils/supabase/client'
import type { User } from '@supabase/supabase-js'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { toast } from '@/hooks/use-toast';

interface AuthGuardOptions {
  redirectTo?: string
  allowUnauthenticated?: boolean
  requireEmailVerified?: boolean
}

interface AuthGuardState {
  user: User | null
  loading: boolean
  error: string | null
  isAuthenticated: boolean
  isEmailVerified: boolean
}

export function useAuthGuard(options: AuthGuardOptions = {}): AuthGuardState {
  const {
    redirectTo = '/auth/login',
    allowUnauthenticated = false,
    requireEmailVerified = false
  } = options

  const router = useRouter()
  const [state, setState] = useState<AuthGuardState>({
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
    isEmailVerified: false
  })

  useEffect(() => {
    let mounted = true
    let redirectTimer: NodeJS.Timeout | null = null

    const checkAuth = async () => {
      try {
        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (!mounted) return

        if (sessionError) {
          logErrorToProduction('Auth guard session error:', { data: sessionError })
          setState(prev => ({
            ...prev,
            loading: false,
            error: sessionError.message,
            isAuthenticated: false,
            isEmailVerified: false
          }))
          return
        }

        const user = session?.user || null
        const isAuthenticated = !!user
        const isEmailVerified = user?.email_confirmed_at != null

        setState(prev => ({
          ...prev,
          user,
          loading: false,
          error: null,
          isAuthenticated,
          isEmailVerified
        }))

        // Handle redirects based on auth state
        if (!allowUnauthenticated && !isAuthenticated) {
          // User is not authenticated and auth is required
          const currentPath = router.asPath
          const returnTo = encodeURIComponent(currentPath)
          
          // Avoid redirecting if we're already on the login page
          if (!router.pathname.startsWith('/auth/') && !router.pathname.startsWith('/login')) {
            redirectTimer = setTimeout(() => {
              if (mounted) {
                logInfo('Auth guard: Redirecting unauthenticated user to login')
                toast.info('Please sign in to continue')
                router.replace(`${redirectTo}?returnTo=${returnTo}`)
              }
            }, 100)
          }
        } else if (requireEmailVerified && isAuthenticated && !isEmailVerified) {
          // User is authenticated but email is not verified
          redirectTimer = setTimeout(() => {
            if (mounted) {
              logInfo('Auth guard: Redirecting to email verification')
              router.replace('/auth/verify-email')
            }
          }, 100)
        }

      } catch (error) {
        if (mounted) {
          logErrorToProduction('Auth guard error:', { data: error })
          setState(prev => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error.message : 'Authentication error',
            isAuthenticated: false,
            isEmailVerified: false
          }))
        }
      }
    }

    // Initial auth check
    checkAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return

        logInfo('Auth guard: Auth state changed:', { data: event })
        
        const user = session?.user || null
        const isAuthenticated = !!user
        const isEmailVerified = user?.email_confirmed_at != null

        setState(prev => ({
          ...prev,
          user,
          isAuthenticated,
          isEmailVerified,
          loading: false,
          error: null
        }))

        // Handle sign out
        if (event === 'SIGNED_OUT' && !allowUnauthenticated) {
          redirectTimer = setTimeout(() => {
            if (mounted) {
              logInfo('Auth guard: User signed out, redirecting to login')
              toast.info('Please sign in to continue')
              router.replace(redirectTo)
            }
          }, 100)
        }
      }
    )

    // Cleanup
    return () => {
      mounted = false
      subscription.unsubscribe()
      if (redirectTimer) {
        clearTimeout(redirectTimer)
      }
    }
  }, [router, redirectTo, allowUnauthenticated, requireEmailVerified, supabase.auth])

  return state
}

// Helper hook for protecting pages that require authentication
export function useRequireAuth(options?: Omit<AuthGuardOptions, 'allowUnauthenticated'>) {
  return useAuthGuard({ ...options, allowUnauthenticated: false })
}

// Helper hook for pages that are public but might show different content for authenticated users
export function useOptionalAuth(options?: Omit<AuthGuardOptions, 'allowUnauthenticated'>) {
  return useAuthGuard({ ...options, allowUnauthenticated: true })
}

// HOC for protecting pages
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  options?: AuthGuardOptions
) {
  return function AuthGuardedComponent(props: P) {
    const { loading, error } = useAuthGuard(options)

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Checking authentication...</p>
          </div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Authentication Error</p>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      )
    }

    return <Component {...props} />
  }
} 