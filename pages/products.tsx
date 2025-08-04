import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Products: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Products - Zion</title>
        <meta name="description" content="Innovation and technology products on Zion's marketplace." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge technology products and innovative solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/ai-powered-analytics" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">AI Products</h3>
            <p className="text-gray-300">AI-powered solutions</p>
          </Link>
          
          <Link href="/ai-powered-automation" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Software Products</h3>
            <p className="text-gray-300">Enterprise software solutions</p>
          </Link>
          
          <Link href="/ai-powered-security-cybersecurity" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Security Products</h3>
            <p className="text-gray-300">Cybersecurity solutions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
