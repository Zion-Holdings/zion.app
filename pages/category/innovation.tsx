import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const InnovationPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Innovation - Zion AI Marketplace</title>
        <meta name="description" content="Connect with the world's premier IT services, AI talents, cutting-edge equipment, and innovative solutions powered by advanced AI matching and secure blockchain technology." />
        <meta name="keywords" content="innovation, AI marketplace, IT services, Zion" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Zion
                  </Link>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Innovation
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                The Future of Technology Exchange
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Connect with the world's premier IT services, AI talents, cutting-edge equipment, and innovative solutions powered by advanced AI matching and secure blockchain technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  Start Trading Now
                </Link>
                <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  Explore Marketplace
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                    <div className="text-gray-400 text-sm">Active Users</div>
                  </div>
                
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50M+</div>
                    <div className="text-gray-400 text-sm">Total Volume</div>
                  </div>
                
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400 text-sm">AI Services</div>
                  </div>
                
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced features that make Zion the premier AI marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Matching</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced algorithms ensure perfect matches between buyers and sellers.
                  </p>
                </div>
              </div>
            
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Secure Blockchain</h3>
                  <p className="text-gray-300 mb-6">
                    All transactions secured with enterprise-grade blockchain technology.
                  </p>
                </div>
              </div>
            
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-300 mb-6">
                    Execute transactions in milliseconds with high-performance infrastructure.
                  </p>
                </div>
              </div>
            
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
                  <p className="text-gray-300 mb-6">
                    Connect with verified professionals and businesses worldwide.
                  </p>
                </div>
              </div>
            
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Become part of the world's most advanced AI-powered marketplace. Connect, trade, and grow with Zion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Get Started Free
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default InnovationPage