import type { NextPage }  from 'next';;import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useAuth }  from '../src/contexts/AuthContext';;
import { useEffect, useState }  from 'react';;

const DebugAuth: NextPage = () => {
  const { user, session, loading, error } = useAuth()
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const info = {
      user: user ? {
        id: user.id,
        email: user.email,
        emailConfirmed: user.email_confirmed_at ? true : false,
        createdAt: user.created_at,
        lastSignIn: user.last_sign_in_at
      } : null,
      session: session ? {
        accessToken: session.access_token ? 'exists' : 'missing',
        refreshToken: session.refresh_token ? 'exists' : 'missing',
        expiresAt: session.expires_at,
        tokenType: session.token_type
      } : null,
      loading,
      error,
      timestamp: new Date().toISOString()
    }
    setDebugInfo(info)
  }, [user, session, loading, error])

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Auth Debug - Zion</title>
        <meta name="description" content="Authentication debug information" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Authentication Debug</h1>
        
        <div className="grid grid-cols-1 md grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Current State</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Loading:</span>
                <span className={`font-mono ${loading ? 'text-yellow-400' : 'text-green-400'}`}>
                  {loading ? 'true' : 'false'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">User:</span>
                <span className={`font-mono ${user ? 'text-green-400' : 'text-red-400'}`}>
                  {user ? 'exists' : 'null'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Session:</span>
                <span className={`font-mono ${session ? 'text-green-400' : 'text-red-400'}`}>
                  {session ? 'exists' : 'null'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Error:</span>
                <span className={`font-mono ${error ? 'text-red-400' : 'text-green-400'}`}>
                  {error || 'none'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Environment</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Supabase URL:</span>
                <span className="font-mono text-blue-400">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Supabase Key:</span>
                <span className="font-mono text-blue-400">
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Node Env:</span>
                <span className="font-mono text-blue-400">
                  {process.env.NODE_ENV}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Debug Information</h2>
          <pre className="text-xs text-gray-300 bg-black/20 p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Actions</h2>
          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Refresh Page
            </button>
            <button
              onClick={() => window.open('/auth/login', '_blank')}
              className="ml-4 px-4 py-4 bg-purple-600 hover bg-purple-700 text-white rounded-lg transition-colors"
            >
              Open Login Page
            </button>
            <button
              onClick={() => window.open('/dashboard', '_blank')}
              className="ml-4 px-4 py-4 bg-green-600 hover bg-green-700 text-white rounded-lg transition-colors"
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default DebugAuth 