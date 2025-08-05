import type { NextPage }  from 'next';;import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useEffect, useState }  from 'react';;
import { useRouter }  from 'next/router';;
import Link  from 'next/link';;
import AuthLayout  from '../../components/layout/AuthLayout';;

const Verify: NextPage = () => {
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const { token } = router.query
    
    if (token) {
      // Simulate verification process
      setTimeout(() => {
        setStatus('success')
        setMessage('Email verified successfully! You can now login to your account.')
      }, 2000)
    } else {
      setStatus('error')
      setMessage('Invalid verification link. Please check your email for the correct link.')
    }
  }, [router.query])

  return (
    <ModernLayout>
    return (
    <AuthLayout>
      <Head>
        <title>Email Verification - Zion</title>
        <meta name="description" content="Verify your email address to complete your Zion account setup." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg px-8 py-40">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Verification</span>
          </h1>
          <p className="text-gray-300">
            Verifying your email address...
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
          {status === 'loading' && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-300">Verifying your email address...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-300 mb-4">{message}</p>
              <Link 
                href="/auth/login" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Continue to Login
              </Link>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-300 mb-4">{message}</p>
              <Link 
                href="/auth/login" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  
  </ModernLayout>

  </ModernLayout>
)
}

export default Verify 