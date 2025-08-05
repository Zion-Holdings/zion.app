import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../src/contexts/AuthContext';
import AuthLayout from '../../components/layout/AuthLayout';

const ResetPassword: NextPage = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { updatePassword } = useAuth()
  const router = useRouter()

  // Handle URL parameters for messages
  useEffect(() => {
    const { message: urlMessage, error: urlError } = router.query
    if (urlMessage) {
      setMessage(urlMessage as string)
    }
    if (urlError) {
      setError(urlError as string)
    }
  }, [router.query])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      const { error } = await updatePassword(password)
      
      if (error) {
        setError(error.message)
      } else {
        setMessage('Password updated successfully! Redirecting to login...')
        setTimeout(() => {
          router.push('/auth/login')
        }, 2000)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
    <AuthLayout>
      <Head>
        <title>Reset Password - Zion</title>
        <meta name="description" content="Reset your Zion account password." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Reset Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Password</span>
          </h1>
          <p className="text-gray-300">
            Enter your new password below.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
              {error}
            </div>
          )}
          
          {message && (
            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your new password"
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Confirm your new password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              {loading ? 'Updating Password...' : 'Update Password'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 transition-colors">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  
  </ModernLayout>

  </ModernLayout>
)
}

export default ResetPassword 