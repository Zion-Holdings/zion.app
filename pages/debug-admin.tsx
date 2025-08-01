import React, { useState, useEffect } from 'react';
import { useAuth } from '../src/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DebugAdmin() {
  const { user, loading, session } = useAuth();
  const router = useRouter();
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    if (!loading) {
      setDebugInfo({
        user: user ? {
          id: user.id,
          email: user.email,
          email_confirmed_at: user.email_confirmed_at,
          created_at: user.created_at
        } : null,
        session: session ? {
          access_token: session.access_token ? 'exists' : 'missing',
          refresh_token: session.refresh_token ? 'exists' : 'missing',
          expires_at: session.expires_at
        } : null,
        loading,
        timestamp: new Date().toISOString()
      });
    }
  }, [user, session, loading]);

  const checkAdminAccess = () => {
    const authorizedEmails = [
      'kleber@ziontechgroup.com',
      'admin@ziontechgroup.com'
    ];
    
    if (!user?.email) {
      return { hasAccess: false, reason: 'No user email' };
    }
    
    if (!authorizedEmails.includes(user.email)) {
      return { hasAccess: false, reason: `Email ${user.email} not authorized` };
    }
    
    return { hasAccess: true, reason: 'Authorized' };
  };

  const adminCheck = checkAdminAccess();

  return (
    <>
      <Head>
        <title>Debug Admin Access - Zion</title>
        <meta name="description" content="Debug admin authentication" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Debug Admin Access</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Authentication Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-700">Loading State</h3>
                <p className="text-sm text-gray-600">{loading ? 'Loading...' : 'Loaded'}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">User Status</h3>
                <p className="text-sm text-gray-600">{user ? 'Authenticated' : 'Not authenticated'}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Session Status</h3>
                <p className="text-sm text-gray-600">{session ? 'Active session' : 'No session'}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Admin Access</h3>
                <p className={`text-sm ${adminCheck.hasAccess ? 'text-green-600' : 'text-red-600'}`}>
                  {adminCheck.reason}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Debug Information</h2>
            <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions</h2>
            <div className="space-y-4">
              <button
                onClick={() => router.push('/admin-dashboard')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Try Admin Dashboard
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors ml-4"
              >
                Go to Regular Dashboard
              </button>
              <button
                onClick={() => router.push('/auth/login')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors ml-4"
              >
                Go to Login
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Variables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-700">Supabase URL</h3>
                <p className="text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set'}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Supabase Anon Key</h3>
                <p className="text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 