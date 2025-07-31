
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

const Marketplace: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'it-services', name: 'IT Services', icon: '💻' },
    { id: 'ai-talent', name: 'AI Talent', icon: '🤖' },
    { id: 'equipment', name: 'Equipment', icon: '⚙️' },
    { id: 'innovation', name: 'Innovation', icon: '🚀' }
  ]

  const services = [
    {
      id: 1,
      title: 'AI Development Services',
      category: 'ai-talent',
      description: 'Expert AI developers for machine learning, deep learning, and AI integration',
      price: '$150-500/hr',
      rating: 4.9,
      provider: 'AI Solutions Pro',
      image: '/images/ai-development.jpg'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      category: 'it-services',
      description: 'Complete cloud infrastructure design and implementation',
      price: '$2000-15000',
      rating: 4.8,
      provider: 'CloudTech Experts',
      image: '/images/cloud-infrastructure.jpg'
    },
    {
      id: 3,
      title: 'High-Performance Computing Equipment',
      category: 'equipment',
      description: 'Latest GPU clusters and computing hardware for AI workloads',
      price: '$5000-50000',
      rating: 4.7,
      provider: 'TechHardware Plus',
      image: '/images/computing-equipment.jpg'
    },
    {
      id: 4,
      title: 'Blockchain Integration',
      category: 'innovation',
      description: 'Secure blockchain solutions for transparent transactions',
      price: '$3000-25000',
      rating: 4.9,
      provider: 'BlockChain Solutions',
      image: '/images/blockchain.jpg'
    }
  ]

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory
    const searchMatch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Marketplace - Zion</title>
        <meta name="description" content="Discover AI-powered services, IT solutions, and innovative technologies on Zion marketplace" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with top-tier IT services, AI talents, cutting-edge equipment, and innovative solutions. 
            Powered by advanced AI matching algorithms and secure blockchain technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Start Exploring
            </Link>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🛠️</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <div className="flex items-center text-yellow-400">
                  <span>★</span>
                  <span className="ml-1 text-sm">{service.rating}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">{service.price}</span>
                <span className="text-gray-400 text-sm">{service.provider}</span>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-medium transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform ensures the perfect match between your needs and available services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Matching</h3>
            <p className="text-gray-300">Advanced algorithms connect you with the perfect service providers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Transactions</h3>
            <p className="text-gray-300">Blockchain technology ensures transparent and secure payments</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">99.9% transaction success rate with instant processing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
