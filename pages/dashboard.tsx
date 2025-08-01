import type { NextPage } from 'next'
import Head from 'next/head'
import { useAuth } from '../src/contexts/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Dashboard: NextPage = () => {
  const { user, session, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Dashboard - Zion</title>
        <meta name="description" content="Your Zion dashboard" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
              <p className="text-gray-300 mt-2">Manage your account and services</p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* User Info Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <p className="text-white">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">User ID</label>
                <p className="text-white font-mono text-sm">{user.id}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Verified</label>
                <p className="text-white">{user.email_confirmed_at ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Created At</label>
                <p className="text-white">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <p className="text-gray-300 mb-4">Browse and manage AI services</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                View Services
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Profile</h3>
              <p className="text-gray-300 mb-4">Update your profile information</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
              <p className="text-gray-300 mb-4">Manage your account settings</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard