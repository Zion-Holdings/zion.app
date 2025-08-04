import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signInWithProvider } from '@supabase/auth-helpers-nextjs'
import type { Provider } from '@supabase/supabase-js'

const AuthCallback = () => {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { provider } = router.query

      if (provider && typeof provider === 'string') {
        try {
          const result = await signInWithProvider(provider as Provider)
          console.log('Auth callback result:', result)
          
          // Redirect to dashboard or home page
          router.push('/dashboard')
        } catch (error) {
          console.error('Auth callback error:', error)
          router.push('/auth/error')
        }
      }
    }

    if (router.isReady) {
      handleAuthCallback()
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
        <p className="text-white mt-4">Completing authentication...</p>
      </div>
    </div>
  )
}

export default AuthCallback 