import { useRouter } from 'next/router';import ModernLayout from '../components/layout/ModernLayout'

import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Only proceed if we have valid environment variables
      if (supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder-key') {
        console.warn('Supabase environment variables not configured')
        router.push('/auth/login?error=configuration_missing')
        return
      }

      const { data, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Auth callback error:', error)
        router.push('/auth/login?error=auth_callback_failed')
        return
      }

      if (data.session) {
        router.push('/dashboard')
      } else {
        router.push('/auth/login')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <ModernLayout>
      <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-responsive-lg text-responsive-lg">
        <h1 className="text-2xl font-bold mb-4 text-responsive-lg text-responsive-lg">Processing authentication...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>
)
} 