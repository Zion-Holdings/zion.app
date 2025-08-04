import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const AIPoweredBiddingAuction: NextPage = () => {
  const [currentBid, setCurrentBid] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [bidders, setBidders] = useState([
    { id: 1, name: 'TechCorp', bid: 2500, time: '2:30' },
    { id: 2, name: 'InnovateLabs', bid: 2400, time: '2:25' },
    { id: 3, name: 'FutureSystems', bid: 2300, time: '2:20' }
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Bidding & Auction System | Zion</title>
        <meta name="description" content="Advanced AI-powered bidding and auction system with real-time pricing, smart negotiation, and dynamic analytics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Bidding & Auction System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of marketplace transactions with AI-powered real-time bidding, 
              smart pricing algorithms, and intelligent auction management.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚡ Real-time Bidding</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 AI Pricing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">💬 Smart Negotiation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Dynamic Analytics</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-powered-bidding-auction/" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Browse Auctions
              </Link>
              <Link href="/ai-powered-bidding-auction/" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Create Auction
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Auction Demo */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Live Auction Demo
            </h2>
            <p className="text-lg text-gray-300">
              Experience real-time bidding with AI-powered price optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Auction Item */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">AI Development Service</h3>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Time Left</div>
                  <div className="text-2xl font-bold text-red-400">{formatTime(timeLeft)}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Current Bid</div>
                <div className="text-3xl font-bold text-green-400">${currentBid.toLocaleString()}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Description</div>
                <p className="text-gray-300">
                  Custom AI model development with machine learning integration, 
                  data preprocessing, and deployment support.
                </p>
              </div>
              
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Enter your bid"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  min={currentBid + 100}
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Place Bid
                </button>
              </div>
            </div>
            
            {/* Bidding History */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Bidding History</h3>
              <div className="space-y-4">
                {bidders.map((bidder) => (
                  <div key={bidder.id} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">{bidder.name}</div>
                      <div className="text-sm text-gray-400">{bidder.time} ago</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">${bidder.bid.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-lg text-gray-300">
              Powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Pricing</h3>
              <p className="text-gray-300 text-sm">
                Intelligent pricing algorithms that optimize for market conditions and demand
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Updates</h3>
              <p className="text-gray-300 text-sm">
                Instant bid notifications and live auction updates with WebSocket technology
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive bidding analytics and market trend analysis
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-gray-300 text-sm">
                Blockchain-based verification and fraud prevention systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Bidding?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already benefiting from AI-powered auctions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h3>
              <p className="text-gray-300 text-sm">
                The First Free AI-Powered Marketplace
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/marketplace" className="hover:text-white transition-colors">Browse All</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/talents" className="hover:text-white transition-colors">Talents</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="/profile" className="hover:text-white transition-colors">Profile</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Zion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AIPoweredBiddingAuction 