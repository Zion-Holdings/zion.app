
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>About - Zion</title>
        <meta name="description" content="Learn about Zion's mission to revolutionize the marketplace with AI-powered solutions" />
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
            <div className="flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionizing the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zion is the premier AI-powered marketplace connecting businesses with top-tier IT services, 
            AI talents, cutting-edge equipment, and innovative solutions.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We believe that every business deserves access to the best technology solutions, 
              regardless of their size or location. Zion bridges the gap between innovative 
              service providers and businesses seeking cutting-edge solutions.
            </p>
            <p className="text-gray-300 mb-6">
              Through our advanced AI matching algorithms and secure blockchain technology, 
              we ensure that every connection is meaningful, every transaction is transparent, 
              and every partnership drives real business growth.
            </p>
            <div className="flex space-x-4">
              <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Explore Marketplace
              </Link>
              <Link href="/auth/signup" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Join Zion
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm">🤖</span>
                </div>
                <span className="text-white">AI-Powered Matching Algorithms</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm">🔒</span>
                </div>
                <span className="text-white">Secure Blockchain Transactions</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm">🌐</span>
                </div>
                <span className="text-white">Global Network Connectivity</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm">⚡</span>
                </div>
                <span className="text-white">99.9% Transaction Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              10K+
            </div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              500+
            </div>
            <div className="text-gray-300">Service Providers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              99.9%
            </div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              24/7
            </div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Powered by Advanced Technology</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver exceptional user experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Machine Learning</h3>
            <p className="text-gray-300">Advanced algorithms that learn and improve with every interaction</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Blockchain</h3>
            <p className="text-gray-300">Secure and transparent transaction processing</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cloud Native</h3>
            <p className="text-gray-300">Scalable infrastructure built for global reach</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
