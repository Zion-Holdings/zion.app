
import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';

const Talents: NextPage = () => {
  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length: 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI Talents - Zion</title>
        <meta name="description" content="Find AI experts and technology professionals on Zion's marketplace." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-40">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Talents</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with verified AI experts, developers, and technology professionals from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/talent-directory" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Talent Directory</h3>
            <p className="text-gray-300">Browse verified professionals</p>
          </Link>
          
          <Link href="/skill-verification" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Skill Verification</h3>
            <p className="text-gray-300">Verified skills and certifications</p>
          </Link>
          
          <Link href="/ai-service-matcher" className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">AI Matcher</h3>
            <p className="text-gray-300">Find the perfect match</p>
          </Link>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>
)
}

export default Talents
