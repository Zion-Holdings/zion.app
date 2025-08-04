
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

      <div className="container-responsive section-padding">
        <div className="text-center mb-16">
          <h1 className="text-responsive-4xl font-bold text-white mb-6">
            Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Marketplace</span>
          </h1>
          <p className="text-responsive-lg text-gray-300 max-w-3xl mx-auto">
            The world's first free AI-powered marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
          </p>
        </div>

        <div className="grid-responsive-4 gap-6 lg:gap-8">
          <Link href="/services" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-black/30 transition-all duration-300 hover-responsive">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-responsive-lg font-semibold text-white mb-3">Services</h3>
              <p className="text-gray-300 text-responsive-sm">Browse AI and technology services</p>
            </div>
          </Link>
          
          <Link href="/talents" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-black/30 transition-all duration-300 hover-responsive">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-responsive-lg font-semibold text-white mb-3">Talents</h3>
              <p className="text-gray-300 text-responsive-sm">Find AI experts and professionals</p>
            </div>
          </Link>
          
          <Link href="/equipment" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-black/30 transition-all duration-300 hover-responsive">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-responsive-lg font-semibold text-white mb-3">Equipment</h3>
              <p className="text-gray-300 text-responsive-sm">High-performance computing equipment</p>
            </div>
          </Link>
          
          <Link href="/products" className="group">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/10 hover:bg-black/30 transition-all duration-300 hover-responsive">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-responsive-lg font-semibold text-white mb-3">Products</h3>
              <p className="text-gray-300 text-responsive-sm">Innovation and technology products</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
