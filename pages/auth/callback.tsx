import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../src/contexts/AuthContext'
import { Provider } from '@supabase/supabase-js'
import PageLayout from '../../components/layout/PageLayout'

const Callback: NextPage = () => {
  const router = useRouter()
  const { signInWithProvider } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const { provider, error } = router.query
        
        if (error) {
          setStatus('error')
          setMessage('Authentication failed. Please try again.')
          return
        }

        if (provider) {
          const result = await signInWithProvider(provider as Provider)
          
          if (result.error) {
            setStatus('error')
            setMessage(result.error.message || 'Authentication failed. Please try again.')
          } else {
            setStatus('success')
            setMessage('Authentication successful! Redirecting to dashboard...')
            setTimeout(() => {
              router.push('/dashboard')
            }, 2000)
          }
        } else {
          setStatus('error')
          setMessage('Invalid authentication callback.')
        }
      } catch (err) {
        setStatus('error')
        setMessage('An unexpected error occurred. Please try again.')
      }
    }

    if (router.isReady) {
      handleCallback()
    }
  }, [router.isReady, router.query, signInWithProvider, router])

  return (
    <PageLayout>
      <Head>
        <title>Authentication Callback - Zion</title>
        <meta name="description" content="Processing your authentication request." />
      </Head>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Authentication <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Callback</span>
          </h1>
          <p className="text-gray-300">
            Processing your authentication request...
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
          {status === 'loading' && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-300">Processing authentication...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-300">{message}</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-300 mb-4">{message}</p>
              <button 
                onClick={() => router.push('/auth/login')}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default Callback 