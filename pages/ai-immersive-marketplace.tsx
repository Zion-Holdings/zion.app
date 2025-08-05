import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';

interface ImmersiveProduct {
  id: string
  name: string
  description: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  vrModel?: string
  arExperience?: string
  dimensions: {
    width: number
    height: number
    depth: number
  }
  features: string[]
  aiRecommendation: {
    score: number
    reason: string
    matchPercentage: number
  }
  immersiveFeatures: {
    vrTour: boolean
    arTryOn: boolean
    interactiveDemo: boolean
    virtualShowroom: boolean
  }
}

interface VirtualShowroom {
  id: string
  name: string
  theme: string
  category: string
  productCount: number
  visitorCount: number
  rating: number
  description: string
  features: string[]
  aiOptimized: boolean
}

interface ImmersiveExperience {
  id: string
  type: 'vr-tour' | 'ar-try-on' | 'interactive-demo' | 'virtual-showroom'
  title: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  rating: number
  userCount: number
  aiPowered: boolean
  features: string[]
}

interface AIInsight {
  type: 'recommendation' | 'trend' | 'optimization' | 'prediction'
  title: string
  description: string
  confidence: number
  actionItems: string[]
}

const AIImmersiveMarketplacePage: NextPage = () => {
  const [products, setProducts] = useState<ImmersiveProduct[]>([])
  const [showrooms, setShowrooms] = useState<VirtualShowroom[]>([])
  const [experiences, setExperiences] = useState<ImmersiveExperience[]>([])
  const [insights, setInsights] = useState<AIInsight[]>([])
  const [selectedView, setSelectedView] = useState<'overview' | 'products' | 'showrooms' | 'experiences' | 'insights'>('overview')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)
  const [vrMode, setVrMode] = useState(false)
  const [arMode, setArMode] = useState(false)

  // Mock data
  const mockProducts: ImmersiveProduct[] = [
    {
      id: '1',
      name: 'AI-Powered Gaming Rig Pro',
      description: 'High-performance gaming computer with AI-optimized graphics and real-time ray tracing',
      category: 'Computing',
      price: 2499,
      originalPrice: 2999,
      rating: 4.8,
      reviewCount: 156,
      image: '/api/placeholder/400/300',
      vrModel: '/models/gaming-rig-vr.glb',
      arExperience: '/ar/gaming-rig-demo',
      dimensions: { width: 45, height: 35, depth: 20 },
      features: ['RTX 4090', '32GB RAM', '2TB NVMe', 'AI Cooling'],
      aiRecommendation: {
        score: 9.2,
        reason: 'Perfect match for your gaming and AI development needs',
        matchPercentage: 94
      },
      immersiveFeatures: {
        vrTour: true,
        arTryOn: true,
        interactiveDemo: true,
        virtualShowroom: true
      }
    },
    {
      id: '2',
      name: 'Quantum Computing Workstation',
      description: 'Advanced quantum computing setup for AI research and development',
      category: 'AI & Research',
      price: 15999,
      rating: 4.9,
      reviewCount: 23,
      image: '/api/placeholder/400/300',
      vrModel: '/models/quantum-workstation-vr.glb',
      arExperience: '/ar/quantum-demo',
      dimensions: { width: 60, height: 40, depth: 30 },
      features: ['Quantum Processor', 'AI Accelerator', 'Advanced Cooling'],
      aiRecommendation: {
        score: 9.8,
        reason: 'Ideal for your AI research and quantum computing projects',
        matchPercentage: 98
      },
      immersiveFeatures: {
        vrTour: true,
        arTryOn: false,
        interactiveDemo: true,
        virtualShowroom: true
      }
    },
    {
      id: '3',
      name: 'Immersive VR Development Kit',
      description: 'Complete VR development environment with AI-powered tools',
      category: 'VR/AR',
      price: 3499,
      originalPrice: 3999,
      rating: 4.7,
      reviewCount: 89,
      image: '/api/placeholder/400/300',
      vrModel: '/models/vr-kit-vr.glb',
      arExperience: '/ar/vr-kit-demo',
      dimensions: { width: 30, height: 25, depth: 15 },
      features: ['VR Headset', 'Motion Controllers', 'AI Development Tools'],
      aiRecommendation: {
        score: 8.9,
        reason: 'Excellent for your VR development and AI integration projects',
        matchPercentage: 89
      },
      immersiveFeatures: {
        vrTour: true,
        arTryOn: true,
        interactiveDemo: true,
        virtualShowroom: true
      }
    }
  ]

  const mockShowrooms: VirtualShowroom[] = [
    {
      id: '1',
      name: 'AI Innovation Hub',
      theme: 'Futuristic Tech',
      category: 'AI & Research',
      productCount: 45,
      visitorCount: 1234,
      rating: 4.8,
      description: 'Explore cutting-edge AI technology in an immersive virtual environment',
      features: ['Interactive AI Demos', 'Virtual Lab Tours', 'Expert Consultations'],
      aiOptimized: true
    },
    {
      id: '2',
      name: 'Gaming & Entertainment Center',
      theme: 'Gaming Paradise',
      category: 'Gaming',
      productCount: 78,
      visitorCount: 2156,
      rating: 4.6,
      description: 'Experience the latest gaming technology in a virtual gaming paradise',
      features: ['VR Gaming Stations', 'Performance Testing', 'Gaming Tournaments'],
      aiOptimized: true
    },
    {
      id: '3',
      name: 'Quantum Computing Lab',
      theme: 'Scientific Research',
      category: 'Research',
      productCount: 23,
      visitorCount: 567,
      rating: 4.9,
      description: 'Explore quantum computing technology in a virtual research laboratory',
      features: ['Quantum Simulations', 'Research Tools', 'Expert Guidance'],
      aiOptimized: true
    }
  ]

  const mockExperiences: ImmersiveExperience[] = [
    {
      id: '1',
      type: 'vr-tour',
      title: 'AI Development Lab VR Tour',
      description: 'Take a virtual tour of our AI development laboratory',
      duration: 15,
      difficulty: 'beginner',
      rating: 4.7,
      userCount: 892,
      aiPowered: true,
      features: ['Interactive AI Demos', 'Expert Commentary', 'Q&A Sessions']
    },
    {
      id: '2',
      type: 'ar-try-on',
      title: 'Gaming Setup AR Experience',
      description: 'Try out gaming setups in your own space with AR',
      duration: 8,
      difficulty: 'beginner',
      rating: 4.5,
      userCount: 1245,
      aiPowered: true,
      features: ['Real-time Placement', 'Size Visualization', 'Performance Preview']
    },
    {
      id: '3',
      type: 'interactive-demo',
      title: 'Quantum Computing Interactive Demo',
      description: 'Interactive demonstration of quantum computing principles',
      duration: 20,
      difficulty: 'advanced',
      rating: 4.8,
      userCount: 456,
      aiPowered: true,
      features: ['Quantum Simulations', 'Educational Content', 'Expert Guidance']
    }
  ]

  const mockInsights: AIInsight[] = [
    {
      type: 'recommendation',
      title: 'VR Gaming Setup Trending',
      description: 'AI analysis shows 45% increase in VR gaming interest',
      confidence: 92,
      actionItems: ['Highlight VR gaming products', 'Create VR gaming showroom', 'Offer VR gaming demos']
    },
    {
      type: 'trend',
      title: 'AI Development Tools Popular',
      description: 'AI development tools showing 78% higher engagement',
      confidence: 87,
      actionItems: ['Feature AI development products', 'Create AI lab experience', 'Offer AI consultation']
    },
    {
      type: 'optimization',
      title: 'AR Try-On Conversion Boost',
      description: 'AR try-on experiences increase conversion by 34%',
      confidence: 94,
      actionItems: ['Expand AR experiences', 'Optimize AR performance', 'Add more AR products']
    },
    {
      type: 'prediction',
      title: 'Quantum Computing Interest Rising',
      description: 'AI predicts 67% increase in quantum computing interest',
      confidence: 89,
      actionItems: ['Prepare quantum computing content', 'Create quantum lab experience', 'Train quantum experts']
    }
  ]

  useEffect(() => {
    setIsLoading(true)
    // Simulate data loading
    setTimeout(() => {
      setProducts(mockProducts)
      setShowrooms(mockShowrooms)
      setExperiences(mockExperiences)
      setInsights(mockInsights)
      setIsLoading(false)
    }, 1000)
  }, [])

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'recommendation': return 'text-blue-500'
      case 'trend': return 'text-green-500'
      case 'optimization': return 'text-purple-500'
      case 'prediction': return 'text-orange-500'
      default: return 'text-gray-500'
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'recommendation': return '🎯'
      case 'trend': return '📈'
      case 'optimization': return '⚡'
      case 'prediction': return '🔮'
      default: return '💡'
    }
  }

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'vr-tour': return '🥽'
      case 'ar-try-on': return '📱'
      case 'interactive-demo': return '🎮'
      case 'virtual-showroom': return '🏪'
      default: return '🌟'
    }
  }

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI Immersive Marketplace - Zion</title>
        <meta name="description" content="Experience the future of shopping with AI-powered immersive marketplace featuring VR/AR experiences" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/ai-project-management" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8" py-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Immersive</span> Marketplace
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of shopping with AI-powered virtual reality and augmented reality experiences
          </p>
          
          {/* VR/AR Mode Toggle */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setVrMode(!vrMode)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                vrMode
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              🥽 VR Mode
            </button>
            <button
              onClick={() => setArMode(!arMode)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                arMode
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              📱 AR Mode
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '🏠' },
            { id: 'products', label: 'Products', icon: '🛍️' },
            { id: 'showrooms', label: 'Showrooms', icon: '🏪' },
            { id: 'experiences', label: 'Experiences', icon: '🌟' },
            { id: 'insights', label: 'AI Insights', icon: '🤖' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-300 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading immersive experiences...</p>
          </div>
        ) : (
          <>
            {/* Overview */}
            {selectedView === 'overview' && (
              <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🛍️</div>
                  <div className="text-2xl font-bold text-white">{products.length}</div>
                  <div className="text-gray-400">Immersive Products</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🏪</div>
                  <div className="text-2xl font-bold text-white">{showrooms.length}</div>
                  <div className="text-gray-400">Virtual Showrooms</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="text-2xl font-bold text-white">{experiences.length}</div>
                  <div className="text-gray-400">Immersive Experiences</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-2xl font-bold text-white">{insights.length}</div>
                  <div className="text-gray-400">AI Insights</div>
                </div>
              </div>
            )}

            {/* Products */}
            {selectedView === 'products' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">AI-Recommended Immersive Products</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                          <p className="text-gray-300 text-sm">{product.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">${product.price.toLocaleString()}</div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-400 line-through">${product.originalPrice.toLocaleString()}</div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                          <div className="text-sm text-gray-400">AI Recommendation</div>
                          <div className="text-white font-medium">{product.aiRecommendation.reason}</div>
                          <div className="text-purple-400 text-sm">Match: {product.aiRecommendation.matchPercentage}%</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-400">Category:</span>
                          <span className="text-white ml-2">{product.category}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">AI Score:</span>
                          <span className="text-white ml-2">{product.aiRecommendation.score}/10</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="px-4 py-3 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-all duration-300">
                          🥽 VR Tour
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover from-blue-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-all duration-300">
                          📱 AR Try-On
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Showrooms */}
            {selectedView === 'showrooms' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Virtual Showrooms</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {showrooms.map((showroom) => (
                    <div key={showroom.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{showroom.name}</h3>
                          <p className="text-gray-300 text-sm">{showroom.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Theme</div>
                          <div className="text-white font-medium">{showroom.theme}</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>{i < Math.floor(showroom.rating) ? '★' : '☆'}</span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">({showroom.visitorCount} visitors)</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Products:</span>
                            <span className="text-white ml-2">{showroom.productCount}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Category:</span>
                            <span className="text-white ml-2">{showroom.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Features:</div>
                        {showroom.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                        🏪 Enter Showroom
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experiences */}
            {selectedView === 'experiences' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Immersive Experiences</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {experiences.map((experience) => (
                    <div key={experience.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="text-3xl">{getExperienceIcon(experience.type)}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                          <p className="text-gray-300 text-sm">{experience.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>{i < Math.floor(experience.rating) ? '★' : '☆'}</span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">({experience.userCount} users)</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Duration:</span>
                            <span className="text-white ml-2">{experience.duration} min</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Difficulty:</span>
                            <span className="text-white ml-2 capitalize">{experience.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-gray-400">Features:</div>
                        {experience.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover from-blue-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                        🌟 Start Experience
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Insights */}
            {selectedView === 'insights' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">AI-Powered Insights</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="text-2xl">{getInsightIcon(insight.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                            <span className={`px-4 py-3 rounded-full text-xs ${getInsightColor(insight.type).replace('text-', 'bg-')} ${getInsightColor(insight.type)}`}>
                              {insight.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-400">Confidence:</span>
                            <span className="text-white">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-400">Action Items:</div>
                        {insight.actionItems.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2 text-sm">
                            <span className="text-purple-400">•</span>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
};

export default AIImmersiveMarketplacePage 