
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Equipment: NextPage = () => {
  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Equipment - Zion</title>
        <meta name="description" content="High-performance computing equipment and technology hardware on Zion's marketplace." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access cutting-edge computing equipment and technology hardware for your AI and development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/ai-powered-autonomous-vehicle-transportation" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Computing Hardware</h3>
            <p className="text-gray-300">GPU clusters and servers</p>
          </Link>
          
          <Link href="/ai-powered-autonomous-drone-delivery-logistics" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">AI Hardware</h3>
            <p className="text-gray-300">Specialized AI equipment</p>
          </Link>
          
          <Link href="/ai-powered-inventory-supply-chain" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Network Equipment</h3>
            <p className="text-gray-300">High-speed networking</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Equipment
