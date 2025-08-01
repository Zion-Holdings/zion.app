import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const blockchainNetworkPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion Blockchain Network - Zion AI Products</title>
        <meta name="description" content="A secure, scalable blockchain network designed specifically for AI marketplace transactions, ensuring transparency and immutability." />
        <meta name="keywords" content="AI marketplace, blockchain, security, automation, blockchain, smart contracts, security, transparency" />
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
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
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

      {/* Product Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Blockchain Network
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A secure, scalable blockchain network designed specifically for AI marketplace transactions, ensuring transparency and immutability.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Distributed ledger technology</h3>
                <p className="text-gray-300">Advanced distributed ledger technology capabilities designed for enterprise use.</p>
              </div>
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Smart contract execution</h3>
                <p className="text-gray-300">Advanced smart contract execution capabilities designed for enterprise use.</p>
              </div>
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Real-time transaction verification</h3>
                <p className="text-gray-300">Advanced real-time transaction verification capabilities designed for enterprise use.</p>
              </div>
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Privacy protection protocols</h3>
                <p className="text-gray-300">Advanced privacy protection protocols capabilities designed for enterprise use.</p>
              </div>
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Cross-chain compatibility</h3>
                <p className="text-gray-300">Advanced cross-chain compatibility capabilities designed for enterprise use.</p>
              </div>
            
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Consensus mechanism</h3>
                <p className="text-gray-300">Advanced consensus mechanism capabilities designed for enterprise use.</p>
              </div>
            
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">100% transaction transparency</h3>
                <div className="text-3xl font-bold text-green-400">100%</div>
              </div>
            
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Zero downtime since launch</h3>
                
              </div>
            
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Reduced fraud by 95%</h3>
                <div className="text-3xl font-bold text-green-400">95%</div>
              </div>
            
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Instant settlement times</h3>
                
              </div>
            
          </div>

          {/* Pricing */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 ">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-white mb-6">$49/month</div>
                  <ul className="space-y-3 mb-8">
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Up to 1,000 transactions
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Basic smart contracts
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Email support
                      </li>
                    
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 border-purple-500/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-6">$199/month</div>
                  <ul className="space-y-3 mb-8">
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Up to 10,000 transactions
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Advanced smart contracts
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Priority support
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom contracts
                      </li>
                    
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 ">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Unlimited transactions
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom blockchain
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Dedicated support
                      </li>
                    
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Private network
                      </li>
                    
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default blockchainNetworkPage