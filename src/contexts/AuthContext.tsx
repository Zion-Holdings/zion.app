import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session, Provider } from '@supabase/supabase-js'
import { supabase } from '../../utils/supabase/client'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
  updatePassword: (password: string) => Promise<{ error: any }>
  signInWithProvider: (provider: Provider) => Promise<{ error: any }>
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log('Getting initial session...')
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (mounted) {
          if (error) {
            console.error('Error getting session:', error)
            setError(error.message)
          } else {
            console.log('Session retrieved:', session ? 'exists' : 'null')
            setSession(session)
            setUser(session?.user ?? null)
          }
          setLoading(false)
        }
      } catch (error) {
        console.error('Unexpected error getting session:', error)
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Unknown error')
          setLoading(false)
        }
      }
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session ? 'session exists' : 'no session')
      if (mounted) {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
        setError(null) // Clear any previous errors
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Attempting sign in...')
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        console.error('Sign in error:', error)
        setError(error.message)
      } else {
        console.log('Sign in successful')
        setError(null)
      }
      return { error }
    } catch (err) {
      console.error('Unexpected sign in error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      return { error: { message: errorMessage } }
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      console.log('Attempting sign up...')
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            // Add any additional user metadata here if needed
          }
        }
      })
      
      if (error) {
        console.error('Sign up error:', error)
        setError(error.message)
        return { error }
      }
      
      // Check if the signup was successful but requires email confirmation
      if (data.user && !data.session) {
        console.log('User created but needs email confirmation')
        setError(null)
        return { error: null }
      }
      
      console.log('Sign up successful')
      setError(null)
      return { error }
    } catch (err) {
      console.error('Unexpected sign up error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      return { error: { message: errorMessage } }
    }
  }

  const signOut = async () => {
    try {
      console.log('Signing out...')
      await supabase.auth.signOut()
      console.log('Sign out successful')
      setError(null)
    } catch (err) {
      console.error('Sign out error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      console.log('Resetting password...')
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })
      if (error) {
        console.error('Reset password error:', error)
        setError(error.message)
      } else {
        console.log('Password reset email sent')
        setError(null)
      }
      return { error }
    } catch (err) {
      console.error('Unexpected reset password error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      return { error: { message: errorMessage } }
    }
  }

  const updatePassword = async (password: string) => {
    try {
      console.log('Updating password...')
      const { error } = await supabase.auth.updateUser({
        password: password
      })
      if (error) {
        console.error('Update password error:', error)
        setError(error.message)
      } else {
        console.log('Password updated successfully')
        setError(null)
      }
      return { error }
    } catch (err) {
      console.error('Unexpected update password error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      return { error: { message: errorMessage } }
    }
  }

  const signInWithProvider = async (provider: Provider) => {
    try {
      console.log('Signing in with provider:', provider)
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        }
      })
      if (error) {
        console.error('Social sign in error:', error)
        setError(error.message)
      } else {
        console.log('Social sign in initiated')
        setError(null)
      }
      return { error }
    } catch (err) {
      console.error('Unexpected social sign in error:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      return { error: { message: errorMessage } }
    }
  }

  const clearError = () => {
    setError(null)
  }

  const value = {
    user,
    session,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    signInWithProvider,
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 