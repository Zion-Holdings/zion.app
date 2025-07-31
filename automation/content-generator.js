const fs = require('fs');
const path = require('path');

class ContentGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.contentPath = path.join(this.projectRoot, 'pages');
    this.chatgptMemory = this.loadChatGPTMemory();
    this.marketplaceFeatures = this.extractMarketplaceFeatures();
  }

  loadChatGPTMemory() {
    try {
      const memoryPath = path.join(this.projectRoot, 'automation', 'chatgpt-content-memory.json');
      const memoryData = fs.readFileSync(memoryPath, 'utf8');
      return JSON.parse(memoryData);
    } catch (error) {
      console.log('ChatGPT memory not found, using default content');
      return {
        memories: [
          {
            id: 'zion-marketplace-vision',
            content: 'Zion is an AI-powered marketplace connecting businesses with IT services, AI talents, cutting-edge equipment, and innovative solutions.'
          },
          {
            id: 'marketplace-features',
            content: 'AI-powered matching algorithms, secure blockchain transactions, global network connectivity, 99.9% transaction success rate.'
          }
        ]
      };
    }
  }

  extractMarketplaceFeatures() {
    const features = [];
    this.chatgptMemory.memories.forEach(memory => {
      if (memory.id === 'marketplace-features') {
        features.push(...memory.content.split(', '));
      }
    });
    return features;
  }

  generateMarketplacePage() {
    const content = `
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
              className={\`px-6 py-3 rounded-lg font-medium transition-all duration-300 \${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
              }\`}
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
`;

    const filePath = path.join(this.contentPath, 'marketplace.tsx');
    fs.writeFileSync(filePath, content);
    console.log('✅ Generated marketplace page');
  }

  generateAboutPage() {
    const content = `
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
`;

    const filePath = path.join(this.contentPath, 'about.tsx');
    fs.writeFileSync(filePath, content);
    console.log('✅ Generated about page');
  }

  generateAuthPages() {
    // Login page
    const loginContent = `
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Login: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Head>
        <title>Login - Zion</title>
        <meta name="description" content="Login to your Zion account" />
      </Head>

      <div className="max-w-md w-full mx-4">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <h2 className="text-2xl font-bold text-white mt-4">Welcome Back</h2>
            <p className="text-gray-300 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-purple-400 hover:text-purple-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
`;

    // Signup page
    const signupContent = `
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Signup: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'business'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log('Signup attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-8">
      <Head>
        <title>Sign Up - Zion</title>
        <meta name="description" content="Create your Zion account" />
      </Head>

      <div className="max-w-md w-full mx-4">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <h2 className="text-2xl font-bold text-white mt-4">Join Zion</h2>
            <p className="text-gray-300 mt-2">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-300 mb-2">
                I am a
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="business">Business Owner</option>
                <option value="provider">Service Provider</option>
                <option value="individual">Individual</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-purple-400 hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
`;

    // Create auth directory
    const authDir = path.join(this.contentPath, 'auth');
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
    }

    // Write login page
    const loginPath = path.join(authDir, 'login.tsx');
    fs.writeFileSync(loginPath, loginContent);
    console.log('✅ Generated login page');

    // Write signup page
    const signupPath = path.join(authDir, 'signup.tsx');
    fs.writeFileSync(signupPath, signupContent);
    console.log('✅ Generated signup page');
  }

  generateAllContent() {
    console.log('🚀 Starting automatic content generation...');
    
    this.generateMarketplacePage();
    this.generateAboutPage();
    this.generateAuthPages();
    
    console.log('✅ All content generated successfully!');
  }
}

module.exports = ContentGenerator; 