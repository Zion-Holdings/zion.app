import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Home, Search, User }  from 'lucide-react';

interface Recommendation {
  id: string;
  type: 'product' | 'service' | 'talent' | 'equipment';
  title: string;
  description: string;
  image: string;
  confidence: number;
  reason: string;
  category: string;
  tags: string[];
  price?: number;
  rating?: number;
  reviewCount?: number;
  location?: string;
  availability?: string;
  aiScore: number;
  userMatch: number;
  trending: boolean;
  featured: boolean;
}

interface UserPreference {
  category: string;
  weight: number;
  lastUpdated: Date;
}

interface RecommendationEngine {
  id: string;
  name: string;
  type: 'collaborative' | 'content-based' | 'hybrid' | 'deep-learning';
  status: 'active' | 'training' | 'inactive';
  accuracy: number;
  coverage: number;
  lastTrained: Date;
  modelVersion: string;
  features: string[];
}

interface RecommendationAnalytics {
  totalRecommendations: number;
  clickThroughRate: number;
  conversionRate: number;
  averageRating: number;
  userSatisfaction: number;
  topCategories: string[];
  popularItems: Recommendation[];
  trendingItems: Recommendation[];
}

const AIPoweredRecommendationsPage: NextPage = () => {
  
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]
  const [userPreferences, setUserPreferences] = useState<UserPreference[]>([]
  const [recommendationEngines, setRecommendationEngines] = useState<RecommendationEngine[]>([]
  const [analytics, setAnalytics] = useState<RecommendationAnalytics | null>(null
  const [selectedCategory, setSelectedCategory] = useState<string>('all'
  const [sortBy, setSortBy] = useState<'confidence' | 'rating' | 'price' | 'aiScore'>('confidence'
  const [filterType, setFilterType] = useState<string>('all'
  const [isLoading, setIsLoading] = useState(true
  const [showFilters, setShowFilters] = useState(false
  // Mock data for recommendations
  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      type: 'product',
      title: 'AI-Powered Data Analytics Platform',
      description: 'Advanced analytics platform with machine learning capabilities for business intelligence.',
      image: '/images/products/ai-analytics-platform.jpg',
      confidence: 0.95,
      reason: 'Based on your interest in data science and previous purchases',
      category: 'Data Analytics',
      tags: ['AI', 'Machine Learning', 'Business Intelligence'],
      price: 2999,
      rating: 4.8,
      reviewCount: 156,
      aiScore: 0.92,
      userMatch: 0.89,
      trending: true,
      featured: true
}
    },
{
      id: '2',
      type: 'service',
      title: 'DevOps Automation Consulting',
      description: 'Expert DevOps automation services to streamline your development pipeline.',
      image: '/images/services/devops-automation.jpg',
      confidence: 0.88,
      reason: 'Matches your project requirements and budget',
      category: 'DevOps',
      tags: ['Automation', 'CI/CD', 'Cloud'],
      price: 150,
      rating: 4.9,
      reviewCount: 89,
      aiScore: 0.87,
      userMatch: 0.85,
      trending: false,
      featured: true
    }
    {
      id: '3',
      type: 'talent',
      title: 'Senior AI Engineer',
      description: 'Experienced AI engineer specializing in machine learning and deep learning.',
      image: '/images/talents/ai-engineer.jpg',
      confidence: 0.92,
      reason: 'Perfect match for your AI project requirements',
      category: 'AI Development',
      tags: ['Machine Learning', 'Python', 'TensorFlow'],
      price: 85,
      rating: 4.7,
      reviewCount: 234,
      location: 'San Francisco, CA',
      availability: 'Available',
      aiScore: 0.91,
      userMatch: 0.93,
      trending: true,
      featured: false
    },
{
      id: '4',
      type: 'equipment',
      title: 'High-Performance GPU Server',
      description: 'Enterprise-grade GPU server for AI/ML workloads and rendering.',
      image: '/images/equipment/gpu-server.jpg',
      confidence: 0.85,
      reason: 'Based on your computing requirements and budget',
      category: 'Hardware',
      tags: ['GPU', 'AI/ML', 'Rendering'],
      price: 15000,
      rating: 4.6,
      reviewCount: 45,
      aiScore: 0.84,
      userMatch: 0.82,
      trending: false,
      featured: true
    }
    {
      id: '5',
      type: 'product',
      title: 'Blockchain Development Kit',
      description: 'Complete toolkit for blockchain development and smart contract creation.',
      image: '/images/products/blockchain-kit.jpg',
      confidence: 0.78,
      reason: 'Aligned with your interest in emerging technologies',
      category: 'Blockchain',
      tags: ['Smart Contracts', 'Web3', 'DeFi'],
      price: 599,
      rating: 4.5,
      reviewCount: 78,
      aiScore: 0.79,
      userMatch: 0.76,
      trending: true,
      featured: false
    }
  ]

  // Mock recommendation engines
  const mockEngines: RecommendationEngine[] = [
    {
      id: '1',
      name: 'Collaborative Filtering Engine',
      type: 'collaborative',
      status: 'active',
      accuracy: 0.89,
      coverage: 0.92,
      lastTrained: new Date('2024-01-15'),
      modelVersion: 'v2.1.0',
      features: ['User-Item Matrix', 'Similarity Scoring', 'Neighborhood Selection']
    },
{
      id: '2',
      name: 'Content-Based Engine',
      type: 'content-based',
      status: 'active',
      accuracy: 0.85,
      coverage: 0.88,
      lastTrained: new Date('2024-01-10'),
      modelVersion: 'v1.8.2',
      features: ['Feature Extraction', 'TF-IDF', 'Cosine Similarity']
    }
    {
      id: '3',
      name: 'Deep Learning Engine',
      type: 'deep-learning',
      status: 'training',
      accuracy: 0.92,
      coverage: 0.95,
      lastTrained: new Date('2024-01-20'),
      modelVersion: 'v3.0.0',
      features: ['Neural Networks', 'Embeddings', 'Attention Mechanisms']
    },
{
      id: '4',
      name: 'Hybrid Engine',
      type: 'hybrid',
      status: 'active',
      accuracy: 0.94,
      coverage: 0.96,
      lastTrained: new Date('2024-01-18'),
      modelVersion: 'v2.5.1',
      features: ['Ensemble Methods', 'Multi-Modal', 'Real-time Learning']
    }
  ]

  // Mock analytics
  const mockAnalytics: RecommendationAnalytics = {
    totalRecommendations: 1247,
    clickThroughRate: 0.23,
    conversionRate: 0.08,
    averageRating: 4.6,
    userSatisfaction: 0.87,
    topCategories: ['AI Development', 'Data Analytics', 'DevOps', 'Blockchain', 'Cloud Services'],
    popularItems: mockRecommendations.slice(0, 3),
    trendingItems: mockRecommendations.filter(r => r.trending
  }

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setRecommendations(mockRecommendations
      setRecommendationEngines(mockEngines
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const filteredRecommendations = useMemo(() => {
    let filtered = recommendations

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(r => r.type === filterType
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'confidence':
          return b.confidence - a.confidence
        case 'rating':
          return (
    <div>
      b.rating || 0) - (a.rating || 0
        case 'price':
          return (a.price || 0) - (b.price || 0
        case 'aiScore':
          return b.aiScore - a.aiScore
        default:
          return 0
      }
    }
  } [recommendations, selectedCategory, filterType, sortBy]
  const categories = useMemo(() => {
    const cats = Array.from(new Set(recommendations.map(r => r.category))
    return ['all', ...cats]
  } [recommendations]
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-500'
    if (confidence >= 0.8) return 'text-yellow-500'
    if (confidence >= 0.7) return 'text-orange-500'
    return 'text-red-500'
  }

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.9) return 'Excellent Match'
    if (confidence >= 0.8) return 'Great Match'
    if (confidence >= 0.7) return 'Good Match'
    return 'Fair Match'
  }

  return (
    <div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        <div className="fixed" inset-0 z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Recommendations | Zion Tech Group</title>
        <meta name="description" content="Discover personalized AI-powered recommendations for products, services, and talents tailored to your needs and preferences." />
        <meta name="keywords" content="AI recommendations, personalized suggestions, machine learning, predictive analytics, smart matching" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="relative overflow-hidden>
        <div className="absolute" inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20></div>
        <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44>
          <div className=text-center">
            <h1 className="text-5xl:md:text-6xl:font-bold text-white mb-6>
              AI-Powered Recommendations
            </h1>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
              Discover personalized recommendations powered by advanced machine learning algorithms. 
              Get the best products, services, and talents tailored to your specific needs and preferences.
            </p>
            <div className="flex" flex-wrap justify-center gap-4>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3">
                <span className="text-white font-semibold>🎯 95% Accuracy</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3>
                <span className="text-white" font-semibold>⚡ Real-time Updates</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg:px-6 py-3">
                <span className="text-white font-semibold>🧠 Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-32>
        {isLoading ? (
          <div className="flex" justify-center items-center py-40>
            <div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8>
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 sticky top-6>
                <h3 className="text-xl" font-semibold text-white mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6>
                  <label className="block" text-sm font-medium text-gray-300 mb-2>Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full" bg-white/10 border border-white/20 rounded-lg:px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className=bg-slate-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div className="mb-6>
                  <label className="block" text-sm font-medium text-gray-300 mb-2>Type</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full" bg-white/10 border border-white/20 rounded-lg:px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                  >
                    <option value=all" className="bg-slate-800>All Types</option>
                    <option value=product className="bg-slate-800">Products</option>
                    <option value=service" className="bg-slate-800>Services</option>
                    <option value=talent className="bg-slate-800">Talents</option>
                    <option value=equipment" className="bg-slate-800>Equipment</option>
                  </select>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <label className="block" text-sm font-medium text-gray-300 mb-2>Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full" bg-white/10 border border-white/20 rounded-lg:px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500"
                  >
                    <option value="confidence" className="bg-slate-800>Confidence Score</option>
                    <option value=rating className="bg-slate-800">Rating</option>
                    <option value=price" className="bg-slate-800>Price</option>
                    <option value=aiScore className="bg-slate-800">AI Score</option>
                  </select>
                </div>

                {/* Results Count */}
                <div className=text-sm:text-gray-400">
                  {filteredRecommendations.length} recommendations found
                </div>
              </div>
            </div>

            {/* Recommendations Grid */}
            <div className="lg:col-span-3>
              <div className="grid" grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6>
                {filteredRecommendations.map((recommendation) => (
                  <div key={recommendation.id} className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 hover:bg-white/15 transition-all duration-300 border border-white/10>
                    {/* Header */}
                    <div className="flex" items-start justify-between mb-4">
                      <div className="flex items-center space-x-2>
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${
                          recommendation.type === 'product' ? 'bg-blue-500/20 text-blue-300' :
                          recommendation.type === 'service' ? 'bg-green-500/20 text-green-300' :
                          recommendation.type === 'talent' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-orange-500/20 text-orange-300'
                        }`}>
                          {recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1)}
                        </span>
                        {recommendation.trending && (
                          <span className="px-4" py-3 rounded-full text-xs font-medium bg-red-500/20 text-red-300>
                            Trending
                          </span>
                        )},
{recommendation.featured && (
                          <span className="px-4" py-3 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-right>
                        <div className="{`text-sm:font-semibold" ${getConfidenceColor(recommendation.confidence)}`}>
                          {Math.round(recommendation.confidence * 100)}%
                        </div>
                        <div className="text-xs" text-gray-400>
                          {getConfidenceText(recommendation.confidence)}
                        </div>
                      </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full" h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg:mb-4 flex items-center justify-center">
                      <div className="text-4xl>📦</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg" font-semibold text-white mb-2>{recommendation.title}</h3>
                    <p className="text-gray-300" text-sm:mb-3 line-clamp-2>{recommendation.description}</p>

                    {/* Tags */}
                    <div className="flex" flex-wrap gap-1 mb-3">
                      {recommendation.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-4 py-3 bg-white/10 rounded-full text-xs text-gray-300>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex" items-center justify-between mb-4>
                      <div className="flex" items-center space-x-4>
                        {recommendation.rating && (
                          <div className="flex" items-center space-x-1">
                            <span className="text-yellow-400>★</span>
                            <span className="text-white" text-sm>{recommendation.rating}</span>
                            <span className="text-gray-400" text-xs>({recommendation.reviewCount})</span>
                          </div>
                        )}
                        {recommendation.price && (
                          <div className="text-white" font-semibold">
                            ${recommendation.price.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="text-right>
                        <div className="text-xs" text-gray-400>AI Score</div>
                        <div className="text-sm:font-semibold" text-purple-400>
                          {Math.round(recommendation.aiScore * 100)}%
                        </div>
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="bg-white/5" rounded-lg:p-3 mb-4">
                      <div className="text-xs text-gray-400 mb-1>Why recommended:</div>
                      <div className="text-sm:text-gray-300">{recommendation.reason}</div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full" bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-4 rounded-lg:font-medium transition-all duration-300 transform hover:scale-105>
                      View Details
                    </button>
                  </div>
                ))}
              </div>

              {filteredRecommendations.length === 0 && (
                <div className="text-center" py-32">
                  <div className="text-6xl:mb-4>🔍</div>
                  <h3 className="text-xl" font-semibold text-white mb-2>No recommendations found</h3>
                  <p className="text-gray-400">Try adjusting your filters to see more recommendations.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recommendation Engines Section */},
{!isLoading && (
          <div className=mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center>AI Recommendation Engines</h2>
            <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
              {recommendationEngines.map((engine) => (
                <div key={engine.id} className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                  <div className="flex" items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white>{engine.name}</h3>
                    <span className="{`px-4" py-3 rounded-full text-xs font-medium ${
                      engine.status === 'active' ? 'bg-green-500/20 text-green-300' :
                      engine.status === 'training' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {engine.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex" justify-between text-sm">
                        <span className="text-gray-400>Accuracy</span>
                        <span className="text-white">{Math.round(engine.accuracy * 100)}%</span>
                      </div>
                      <div className="w-full" bg-gray-700 rounded-full h-2 mt-1>
                        <div className="bg-green-500" h-2 rounded-full" style={{ width: `${engine.accuracy * 100}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm>
                        <span className="text-gray-400">Coverage</span>
                        <span className="text-white">{Math.round(engine.coverage * 100)}%</span>
                      </div>
                      <div className="w-full" bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full style={{ width: `${engine.coverage * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4" text-xs text-gray-400>
                    <div>Version: {engine.modelVersion}</div>
                    <div>Last trained: {engine.lastTrained.toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Section */},
{!isLoading && analytics && (
          <div className="mt-16">
            <h2 className="text-3xl" font-bold text-white mb-8 text-center">Recommendation Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
              <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                <div className="text-3xl" font-bold text-white mb-2>{analytics.totalRecommendations.toLocaleString()}</div>
                <div className=text-gray-400">Total Recommendations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                <div className="text-3xl" font-bold text-white mb-2>{Math.round(analytics.clickThroughRate * 100)}%</div>
                <div className="text-gray-400">Click Through Rate</div>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2>{Math.round(analytics.conversionRate * 100)}%</div>
                <div className="text-gray-400">Conversion Rate</div>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                <div className="text-3xl" font-bold text-white mb-2">{analytics.averageRating.toFixed(1)}</div>
                <div className="text-gray-400>Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r" from-purple-600/20 to-pink-600/20 mt-16>
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-36>
          <div className=text-center">
            <h2 className="text-3xl font-bold text-white mb-4>
              Ready to Get Personalized Recommendations?
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl:mx-auto>
              Our AI-powered recommendation system learns from your preferences and behavior to provide you with the most relevant suggestions.
            </p>
            <div className="flex" flex-col sm:flex-row gap-4 justify-center>
              <Link href=/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105 />
                Get Started
              </Link>
              <Link href=/ai-service-matcher className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 backdrop-blur-sm" />
                Try AI Matcher
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>

};

export default AIPoweredRecommendationsPage 