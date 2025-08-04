import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Custom404: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Page Not Found - Zion</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore Zion's marketplace for AI services, IT solutions, and innovative technologies." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Talents
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The page you're looking for doesn't exist. But don't worry, we have plenty of amazing services and solutions waiting for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 block">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-lg font-semibold">Explore Marketplace</div>
              <div className="text-sm opacity-90">Discover AI services & solutions</div>
            </Link>
            
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 block">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-lg font-semibold">IT Services</div>
              <div className="text-sm opacity-90">Professional IT consulting</div>
            </Link>
            
            <Link href="/talents" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 block">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-lg font-semibold">AI Talents</div>
              <div className="text-sm opacity-90">Expert AI developers</div>
            </Link>
            
            <Link href="/equipment" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 block">
              <div className="text-2xl mb-2">⚙️</div>
              <div className="text-lg font-semibold">Equipment</div>
              <div className="text-sm opacity-90">High-performance hardware</div>
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Can't find what you're looking for?</h3>
            <p className="text-gray-300 mb-4">
              Try searching our marketplace or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                AI Service Matcher
              </Link>
              <Link href="/contact" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <Link href="/" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Custom404 