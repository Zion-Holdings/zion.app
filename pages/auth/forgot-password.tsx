import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../../src/contexts/AuthContext';
import AuthLayout from '../../components/layout/AuthLayout';

const ForgotPassword: NextPage = () => {
  
  const [email, setEmail] = useState(''
  const [loading, setLoading] = useState(false
  const [message, setMessage] = useState(''
}
  const { resetPassword, error } = useAuth(
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(
    setLoading(true
    setMessage(''
    const { error } = await resetPassword(email
    if (!error) {
      setMessage('Password reset email sent! Please check your inbox.'
    }
    
    setLoading(false
  }

  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password - Zion</title>
        <meta name="description" content="Reset your Zion account password." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg px-8 py-40>"
        </div><div className="text-center mb-8>"
          <h1 className=""text-3xl" font-bold text-white mb-4>
            Reset Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"">Password</span>
          </h1>
          <p className="text-gray-300>
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
"
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10>
          {error && ("
            </div><div className=""mb-4" p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm>
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6>
            <div>"
              <label htmlFor=email className="block text-sm font-medium text-gray-300 mb-2>
                Email Address
              </label>
              
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                placeholder=your.email@example.com
              />
            </div>
            
            
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
          
          <div className="mt-6 text-center>"
            <Link href=/auth/login"" className="text-purple-400 hover text-purple-300 transition-colors />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  
  </div>

  </div>

};
"
export default ForgotPassword ")))))))))))