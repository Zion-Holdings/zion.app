
import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../../components/layout/AuthLayout';

const Signup: NextPage = () => {
  return (
    <div>
    return (
    <AuthLayout>
      <Head>
        <title>Sign Up - Zion</title>
        <meta name="description" content="Create your Zion account to access the AI-powered marketplace." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-md mx-auto px-4 sm:px-6" lg:px-8" py-40">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
          </h1>
          <p className="text-gray-300">
            Create your account and start exploring our AI-powered marketplace.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                placeholder="Create a strong password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-purple-400 hover text-purple-300 transition-colors">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  
  </div>

  </div>
)
};

export default Signup
