
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Services: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Services - Zion</title>
        <meta name="description" content="Browse AI and technology services on Zion's marketplace." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI & Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI and technology services from verified experts and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/ai-powered-analytics" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">AI Analytics</h3>
            <p className="text-gray-300">Advanced analytics and insights</p>
          </Link>
          
          <Link href="/ai-powered-automation" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">AI Automation</h3>
            <p className="text-gray-300">Intelligent automation solutions</p>
          </Link>
          
          <Link href="/ai-powered-security-cybersecurity" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-300">AI-powered security solutions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
