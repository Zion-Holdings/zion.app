
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Marketplace: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Marketplace - Zion</title>
        <meta name="description" content="Explore Zion's AI-powered marketplace for services, talents, equipment, and products." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The world's first free AI-powered marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/services" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Services</h3>
            <p className="text-gray-300">Browse AI and technology services</p>
          </Link>
          
          <Link href="/talents" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Talents</h3>
            <p className="text-gray-300">Find AI experts and professionals</p>
          </Link>
          
          <Link href="/equipment" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Equipment</h3>
            <p className="text-gray-300">High-performance computing equipment</p>
          </Link>
          
          <Link href="/products" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Products</h3>
            <p className="text-gray-300">Innovation and technology products</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
