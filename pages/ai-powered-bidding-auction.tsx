import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface Auction {
  id: string;
  title: string;
  type: 'service' | 'product' | 'talent' | 'project';
  status: 'upcoming' | 'active' | 'ending' | 'completed' | 'cancelled';
  description: string;
  startPrice: number;
  currentPrice: number;
  reservePrice?: number;
  startDate: Date;
  endDate: Date;
  timeRemaining: number;
  totalBids: number;
  uniqueBidders: number;
  aiAnalysis: AIAuctionAnalysis;
  bids: Bid[];
  participants: AuctionParticipant[];
  requirements: AuctionRequirement[];
  categories: string[];
  tags: string[];
}

interface Bid {
  id: string;
  auctionId: string;
  bidderId: string;
  amount: number;
  timestamp: Date;
  status: 'active' | 'outbid' | 'winning' | 'withdrawn';
  aiScore: number;
  bidderProfile: BidderProfile;
}

interface BidderProfile {
  id: string;
  name: string;
  rating: number;
  verified: boolean;
  trustScore: number;
  completionRate: number;
  totalProjects: number;
  avatar: string;
}

interface AuctionParticipant {
  id: string;
  userId: string;
  name: string;
  status: 'watching' | 'bidding' | 'won' | 'lost';
  maxBid: number;
  lastBidTime: Date;
  aiRecommendation: AIBidRecommendation;
}

interface AIAuctionAnalysis {
  id: string;
  marketValue: number;
  fairPrice: number;
  demandLevel: 'low' | 'medium' | 'high';
  competitionLevel: 'low' | 'medium' | 'high';
  pricePrediction: number;
  confidence: number;
  recommendations: string[];
  riskFactors: string[];
  opportunities: string[];
}

interface AIBidRecommendation {
  id: string;
  recommendedBid: number;
  maxBid: number;
  confidence: number;
  reasoning: string;
  riskLevel: 'low' | 'medium' | 'high';
  expectedROI: number;
}

interface AuctionRequirement {
  id: string;
  category: string;
  description: string;
  priority: 'required' | 'preferred' | 'optional';
  weight: number;
}

interface NegotiationSession {
  id: string;
  auctionId: string;
  participants: string[];
  status: 'active' | 'completed' | 'cancelled';
  currentOffer: number;
  counterOffers: CounterOffer[];
  aiMediation: AIMediation;
  deadline: Date;
}

interface CounterOffer {
  id: string;
  fromUserId: string;
  amount: number;
  terms: string;
  timestamp: Date;
  status: 'pending' | 'accepted' | 'rejected' | 'countered';
}

interface AIMediation {
  id: string;
  suggestedPrice: number;
  confidence: number;
  reasoning: string;
  recommendations: string[];
  fairValue: number;
}

interface AuctionAnalytics {
  totalAuctions: number;
  activeAuctions: number;
  totalBids: number;
  averageBidAmount: number;
  successRate: number;
  aiAccuracy: number;
  topCategories: string[];
  aiInsights: AuctionInsight[];
}

interface AuctionInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredBiddingAuctionPage: NextPage = () => {
  const [auctions, setAuctions] = useState<Auction[]>([])
  const [negotiations, setNegotiations] = useState<NegotiationSession[]>([])
  const [analytics, setAnalytics] = useState<AuctionAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'auctions' | 'negotiations' | 'analytics'>('auctions')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'ending' | 'price' | 'bids' | 'popularity'>('ending')
  const [isLoading, setIsLoading] = useState(true)

  // Mock auctions
  const mockAuctions: Auction[] = [
    {
      id: '1',
      title: 'AI-Powered Web Development Project',
      type: 'service',
      status: 'active',
      description: 'Complete web development project with AI integration, responsive design, and modern technologies',
      startPrice: 5000,
      currentPrice: 8500,
      reservePrice: 6000,
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-01-25'),
      timeRemaining: 86400000, // 24 hours in milliseconds
      totalBids: 23,
      uniqueBidders: 8,
      aiAnalysis: {
        id: '1',
        marketValue: 12000,
        fairPrice: 9500,
        demandLevel: 'high',
        competitionLevel: 'high',
        pricePrediction: 11000,
        confidence: 0.87,
        recommendations: ['Consider increasing your bid by 15%', 'Focus on unique value propositions'],
        riskFactors: ['High competition', 'Tight timeline'],
        opportunities: ['AI expertise premium', 'Long-term partnership potential']
      },
      bids: [
        {
          id: '1',
          auctionId: '1',
          bidderId: 'user123',
          amount: 8500,
          timestamp: new Date('2024-01-20T10:30:00'),
          status: 'winning',
          aiScore: 92,
          bidderProfile: {
            id: 'user123',
            name: 'TechCorp Solutions',
            rating: 4.8,
            verified: true,
            trustScore: 95,
            completionRate: 98,
            totalProjects: 156,
            avatar: '/avatars/techcorp.jpg'
          }
        },
        {
          id: '2',
          auctionId: '1',
          bidderId: 'user456',
          amount: 8200,
          timestamp: new Date('2024-01-20T09:15:00'),
          status: 'outbid',
          aiScore: 88,
          bidderProfile: {
            id: 'user456',
            name: 'Digital Innovations',
            rating: 4.6,
            verified: true,
            trustScore: 87,
            completionRate: 94,
            totalProjects: 89,
            avatar: '/avatars/digital-innovations.jpg'
          }
        }
      ],
      participants: [
        {
          id: '1',
          userId: 'user123',
          name: 'TechCorp Solutions',
          status: 'bidding',
          maxBid: 9500,
          lastBidTime: new Date('2024-01-20T10:30:00'),
          aiRecommendation: {
            id: '1',
            recommendedBid: 9000,
            maxBid: 9500,
            confidence: 0.85,
            reasoning: 'Current bid is competitive but consider increasing to secure the project',
            riskLevel: 'medium',
            expectedROI: 1.3
          }
        }
      ],
      requirements: [
        {
          id: '1',
          category: 'Technology',
          description: 'React, Node.js, AI integration',
          priority: 'required',
          weight: 0.4
        },
        {
          id: '2',
          category: 'Experience',
          description: '5+ years web development',
          priority: 'preferred',
          weight: 0.3
        }
      ],
      categories: ['Web Development', 'AI Integration', 'Full-Stack'],
      tags: ['React', 'Node.js', 'AI', 'Responsive Design']
    },
    {
      id: '2',
      title: 'Senior AI Engineer - Remote Position',
      type: 'talent',
      status: 'active',
      description: 'Experienced AI engineer for machine learning and deep learning projects',
      startPrice: 80000,
      currentPrice: 95000,
      startDate: new Date('2024-01-18'),
      endDate: new Date('2024-01-28'),
      timeRemaining: 172800000, // 48 hours
      totalBids: 15,
      uniqueBidders: 6,
      aiAnalysis: {
        id: '2',
        marketValue: 110000,
        fairPrice: 98000,
        demandLevel: 'high',
        competitionLevel: 'medium',
        pricePrediction: 105000,
        confidence: 0.78,
        recommendations: ['Highlight unique AI expertise', 'Consider flexible work arrangements'],
        riskFactors: ['Remote work challenges', 'Skill verification needed'],
        opportunities: ['Long-term contract potential', 'Specialized AI skills premium']
      },
      bids: [
        {
          id: '3',
          auctionId: '2',
          bidderId: 'user789',
          amount: 95000,
          timestamp: new Date('2024-01-20T11:00:00'),
          status: 'winning',
          aiScore: 89,
          bidderProfile: {
            id: 'user789',
            name: 'Sarah Chen',
            rating: 4.9,
            verified: true,
            trustScore: 92,
            completionRate: 96,
            totalProjects: 67,
            avatar: '/avatars/sarah-chen.jpg'
          }
        }
      ],
      participants: [
        {
          id: '2',
          userId: 'user789',
          name: 'Sarah Chen',
          status: 'bidding',
          maxBid: 100000,
          lastBidTime: new Date('2024-01-20T11:00:00'),
          aiRecommendation: {
            id: '2',
            recommendedBid: 97000,
            maxBid: 100000,
            confidence: 0.82,
            reasoning: 'Strong position, maintain competitive bid',
            riskLevel: 'low',
            expectedROI: 1.2
          }
        }
      ],
      requirements: [
        {
          id: '3',
          category: 'Skills',
          description: 'Machine Learning, Python, TensorFlow',
          priority: 'required',
          weight: 0.5
        },
        {
          id: '4',
          category: 'Experience',
          description: '3+ years AI development',
          priority: 'required',
          weight: 0.3
        }
      ],
      categories: ['AI Development', 'Machine Learning', 'Remote Work'],
      tags: ['Python', 'TensorFlow', 'Deep Learning', 'Remote']
    }
  ]

  // Mock negotiations
  const mockNegotiations: NegotiationSession[] = [
    {
      id: '1',
      auctionId: '1',
      participants: ['user123', 'user456'],
      status: 'active',
      currentOffer: 9000,
      counterOffers: [
        {
          id: '1',
          fromUserId: 'user123',
          amount: 9000,
          terms: 'Complete project within 6 weeks with AI integration',
          timestamp: new Date('2024-01-20T12:00:00'),
          status: 'pending'
        },
        {
          id: '2',
          fromUserId: 'user456',
          amount: 8500,
          terms: 'Complete project within 8 weeks with basic features',
          timestamp: new Date('2024-01-20T12:30:00'),
          status: 'countered'
        }
      ],
      aiMediation: {
        id: '1',
        suggestedPrice: 8750,
        confidence: 0.85,
        reasoning: 'Fair compromise considering project scope and timeline',
        recommendations: ['Consider timeline flexibility', 'Include milestone payments'],
        fairValue: 8750
      },
      deadline: new Date('2024-01-22T12:00:00')
    }
  ]

  // Mock analytics
  const mockAnalytics: AuctionAnalytics = {
    totalAuctions: 1240,
    activeAuctions: 156,
    totalBids: 8920,
    averageBidAmount: 7500,
    successRate: 0.87,
    aiAccuracy: 0.94,
    topCategories: ['Web Development', 'AI Services', 'Design', 'Mobile Development'],
    aiInsights: [
      {
        id: '1',
        title: 'High Demand for AI Services',
        description: 'AI-related auctions show 40% higher average bids and 60% more competition',
        impact: 'positive',
        confidence: 0.92,
        recommendations: ['Focus on AI expertise', 'Highlight AI capabilities in bids']
      },
      {
        id: '2',
        title: 'Remote Work Premium',
        description: 'Remote positions command 15% higher bids on average',
        impact: 'positive',
        confidence: 0.88,
        recommendations: ['Emphasize remote work capabilities', 'Consider flexible arrangements']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setAuctions(mockAuctions)
      setNegotiations(mockNegotiations)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockAuctions, mockNegotiations, mockAnalytics])

  const filteredAuctions = useMemo(() => {
    let filtered = auctions

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(auction => auction.categories.includes(selectedCategory))
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'ending':
          return a.timeRemaining - b.timeRemaining
        case 'price':
          return b.currentPrice - a.currentPrice
        case 'bids':
          return b.totalBids - a.totalBids
        case 'popularity':
          return b.uniqueBidders - a.uniqueBidders
        default:
          return 0
      }
    })
  }, [auctions, selectedCategory, sortBy])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300'
      case 'ending': return 'bg-yellow-500/20 text-yellow-300'
      case 'upcoming': return 'bg-blue-500/20 text-blue-300'
      case 'completed': return 'bg-gray-500/20 text-gray-300'
      case 'cancelled': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-green-500/20 text-green-300'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300'
      case 'low': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const formatTimeRemaining = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60))
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Bidding & Auction System | Zion Tech Group</title>
        <meta name="description" content="Real-time bidding, auction management, price optimization, and automated negotiation powered by AI." />
        <meta name="keywords" content="bidding, auction, negotiation, real-time, AI pricing, marketplace" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Bidding & Auction System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time bidding, auction management, price optimization, 
              and automated negotiation powered by advanced AI for dynamic marketplace transactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">⚡ Real-time Bidding</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🤖 AI Pricing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">💬 Smart Negotiation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('auctions')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'auctions'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Active Auctions ({auctions.length})
              </button>
              <button
                onClick={() => setActiveTab('negotiations')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'negotiations'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Negotiations ({negotiations.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Analytics
              </button>
            </div>

            {/* Auctions Tab */}
            {activeTab === 'auctions' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Categories</option>
                        <option value="Web Development" className="bg-slate-800">Web Development</option>
                        <option value="AI Development" className="bg-slate-800">AI Development</option>
                        <option value="Design" className="bg-slate-800">Design</option>
                        <option value="Mobile Development" className="bg-slate-800">Mobile Development</option>
                      </select>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="ending" className="bg-slate-800">Ending Soon</option>
                        <option value="price" className="bg-slate-800">Price</option>
                        <option value="bids" className="bg-slate-800">Most Bids</option>
                        <option value="popularity" className="bg-slate-800">Popularity</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Auction
                    </button>
                  </div>
                </div>

                {/* Auctions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredAuctions.map((auction) => (
                    <div key={auction.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{auction.title}</h3>
                          <p className="text-gray-300 text-sm">{auction.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(auction.status)}`}>
                          {auction.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Current Price</div>
                          <div className="text-2xl font-bold text-white">${auction.currentPrice.toLocaleString()}</div>
                          <div className="text-gray-300 text-sm">Start: ${auction.startPrice.toLocaleString()}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Time Remaining</div>
                          <div className="text-xl font-bold text-white">{formatTimeRemaining(auction.timeRemaining)}</div>
                          <div className="text-gray-300 text-sm">{auction.totalBids} bids</div>
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Market Value</div>
                              <div className="text-white font-semibold">${auction.aiAnalysis.marketValue.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Fair Price</div>
                              <div className="text-white font-semibold">${auction.aiAnalysis.fairPrice.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Demand</div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(auction.aiAnalysis.demandLevel)}`}>
                                {auction.aiAnalysis.demandLevel}
                              </span>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Competition</div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(auction.aiAnalysis.competitionLevel)}`}>
                                {auction.aiAnalysis.competitionLevel}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">AI Confidence: {Math.round(auction.aiAnalysis.confidence * 100)}%</div>
                            <div className="text-xs text-gray-300">
                              Predicted final price: ${auction.aiAnalysis.pricePrediction.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Top Bids */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Top Bids</h4>
                        <div className="space-y-2">
                          {auction.bids.slice(0, 3).map((bid) => (
                            <div key={bid.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-semibold text-xs">
                                    {bid.bidderProfile.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-white font-semibold text-sm">{bid.bidderProfile.name}</div>
                                  <div className="text-gray-400 text-xs">Rating: {bid.bidderProfile.rating}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-semibold">${bid.amount.toLocaleString()}</div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  bid.status === 'winning' ? 'bg-green-500/20 text-green-300' :
                                  bid.status === 'outbid' ? 'bg-red-500/20 text-red-300' :
                                  'bg-yellow-500/20 text-yellow-300'
                                }`}>
                                  {bid.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Place Bid
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Negotiations Tab */}
            {activeTab === 'negotiations' && (
              <div className="space-y-8">
                {negotiations.map((negotiation) => (
                  <div key={negotiation.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white">Negotiation Session #{negotiation.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        negotiation.status === 'active' ? 'bg-green-500/20 text-green-300' :
                        negotiation.status === 'completed' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {negotiation.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Current Offer</div>
                        <div className="text-2xl font-bold text-white">${negotiation.currentOffer.toLocaleString()}</div>
                        <div className="text-gray-300 text-sm">Active participants: {negotiation.participants.length}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Deadline</div>
                        <div className="text-white font-semibold">{negotiation.deadline.toLocaleDateString()}</div>
                        <div className="text-gray-300 text-sm">{negotiation.counterOffers.length} counter offers</div>
                      </div>
                    </div>

                    {/* AI Mediation */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">AI Mediation</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Suggested Price</div>
                            <div className="text-white font-semibold">${negotiation.aiMediation.suggestedPrice.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Fair Value</div>
                            <div className="text-white font-semibold">${negotiation.aiMediation.fairValue.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">AI Confidence: {Math.round(negotiation.aiMediation.confidence * 100)}%</div>
                          <div className="text-xs text-gray-300">{negotiation.aiMediation.reasoning}</div>
                        </div>
                      </div>
                    </div>

                    {/* Counter Offers */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Counter Offers</h4>
                      <div className="space-y-3">
                        {negotiation.counterOffers.map((offer) => (
                          <div key={offer.id} className="bg-white/5 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="text-white font-semibold">User #{offer.fromUserId}</div>
                                <div className="text-gray-400 text-sm">{offer.terms}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-semibold">${offer.amount.toLocaleString()}</div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  offer.status === 'accepted' ? 'bg-green-500/20 text-green-300' :
                                  offer.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                                  offer.status === 'countered' ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-blue-500/20 text-blue-300'
                                }`}>
                                  {offer.status}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-400">
                              {offer.timestamp.toLocaleDateString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analytics && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalAuctions.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Auctions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeAuctions.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active Auctions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalBids.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Bids</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">${analytics.averageBidAmount.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Avg Bid Amount</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Success Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Success Rate</span>
                          <span className="text-white">{(analytics.successRate * 100).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: `${analytics.successRate * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">AI Accuracy</span>
                          <span className="text-white">{(analytics.aiAccuracy * 100).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: `${analytics.aiAccuracy * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Top Categories</h3>
                    <div className="space-y-2">
                      {analytics.topCategories.map((category, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300">{category}</span>
                          <div className="w-20 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                              style={{ width: `${100 - (index * 15)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {analytics.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'positive' ? 'bg-green-500/20 text-green-300' :
                            insight.impact === 'negative' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                        <div className="text-xs text-gray-400 mb-2">
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">
                          <strong>Recommendations:</strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Bidding?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our AI-powered auction system and discover the best deals 
              with intelligent pricing and automated negotiation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Browse Auctions
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Create Auction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredBiddingAuctionPage 