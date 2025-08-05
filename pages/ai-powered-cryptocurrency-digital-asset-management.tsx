import type { NextPage }  from 'next';;import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';;
import { useState, useEffect, useMemo }  from 'react';;
import Link  from 'next/link';;

interface Cryptocurrency {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
  maxSupply: number
  aiAnalysis: CryptoAnalysis
}

interface CryptoAnalysis {
  sentimentScore: number
  volatilityIndex: number
  riskLevel: 'low' | 'medium' | 'high' | 'extreme'
  trendPrediction: 'bullish' | 'bearish' | 'neutral'
  recommendations: string[]
}

interface DigitalAsset {
  id: string
  name: string
  type: 'cryptocurrency' | 'nft' | 'token' | 'defi' | 'metaverse'
  symbol: string
  quantity: number
  averagePrice: number
  currentValue: number
  totalReturn: number
  aiAnalysis: AssetAnalysis
}

interface AssetAnalysis {
  performanceScore: number
  diversificationImpact: number
  riskAssessment: number
  recommendations: string[]
}

interface Portfolio {
  id: string
  name: string
  totalValue: number
  totalReturn: number
  riskScore: number
  diversificationScore: number
  assets: DigitalAsset[]
  aiAnalysis: PortfolioAnalysis
}

interface PortfolioAnalysis {
  optimizationScore: number
  rebalancingNeeded: boolean
  riskAdjustment: number
  recommendations: string[]
}

interface TradingStrategy {
  id: string
  name: string
  type: 'momentum' | 'mean-reversion' | 'arbitrage' | 'ai-driven'
  description: string
  performance: number
  riskLevel: string
  aiAnalysis: StrategyAnalysis
}

interface StrategyAnalysis {
  accuracy: number
  profitFactor: number
  maxDrawdown: number
  recommendations: string[]
}

interface InvestmentInsight {
  id: string
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

interface CryptocurrencyAnalytics {
  totalAssets: number
  totalValue: number
  averageReturn: number
  topPerformer: string
  aiInsights: InvestmentInsight[]
}

const AIPoweredCryptocurrencyDigitalAssetManagementPage: NextPage = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([])
  const [digitalAssets, setDigitalAssets] = useState<DigitalAsset[]>([])
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [tradingStrategies, setTradingStrategies] = useState<TradingStrategy[]>([])
  const [analytics, setAnalytics] = useState<CryptocurrencyAnalytics | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'crypto' | 'assets' | 'portfolios' | 'strategies' | 'analytics'>('overview')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const mockCryptocurrencies: Cryptocurrency[] = [
    {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250.50,
      change24h: 2.45,
      marketCap: 850000000000,
      volume24h: 28000000000,
      circulatingSupply: 19600000,
      maxSupply: 21000000,
      aiAnalysis: {
        sentimentScore: 0.75,
        volatilityIndex: 0.65,
        riskLevel: 'medium',
        trendPrediction: 'bullish',
        recommendations: ['Consider dollar-cost averaging', 'Monitor support levels', 'Watch for institutional adoption']
      }
    },
    {
      id: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2850.75,
      change24h: -1.20,
      marketCap: 340000000000,
      volume24h: 15000000000,
      circulatingSupply: 120000000,
      maxSupply: 0,
      aiAnalysis: {
        sentimentScore: 0.68,
        volatilityIndex: 0.72,
        riskLevel: 'medium',
        trendPrediction: 'neutral',
        recommendations: ['Monitor DeFi ecosystem growth', 'Watch for ETH 2.0 updates', 'Consider staking opportunities']
      }
    },
    {
      id: '3',
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.485,
      change24h: 5.80,
      marketCap: 17000000000,
      volume24h: 800000000,
      circulatingSupply: 35000000000,
      maxSupply: 45000000000,
      aiAnalysis: {
        sentimentScore: 0.82,
        volatilityIndex: 0.58,
        riskLevel: 'low',
        trendPrediction: 'bullish',
        recommendations: ['Strong fundamentals', 'Consider long-term position', 'Monitor development progress']
      }
    }
  ]

  const mockDigitalAssets: DigitalAsset[] = [
    {
      id: '1',
      name: 'Bitcoin',
      type: 'cryptocurrency',
      symbol: 'BTC',
      quantity: 0.5,
      averagePrice: 42000,
      currentValue: 21625.25,
      totalReturn: 2.98,
      aiAnalysis: {
        performanceScore: 8.5,
        diversificationImpact: 0.7,
        riskAssessment: 0.6,
        recommendations: ['Hold for long-term', 'Consider increasing position', 'Monitor market conditions']
      }
    },
    {
      id: '2',
      name: 'Ethereum',
      type: 'cryptocurrency',
      symbol: 'ETH',
      quantity: 3.2,
      averagePrice: 2800,
      currentValue: 9122.40,
      totalReturn: 1.85,
      aiAnalysis: {
        performanceScore: 7.8,
        diversificationImpact: 0.6,
        riskAssessment: 0.7,
        recommendations: ['Consider staking', 'Monitor DeFi opportunities', 'Hold for medium-term']
      }
    },
    {
      id: '3',
      name: 'CryptoPunk #1234',
      type: 'nft',
      symbol: 'PUNK',
      quantity: 1,
      averagePrice: 50000,
      currentValue: 75000,
      totalReturn: 50.00,
      aiAnalysis: {
        performanceScore: 9.2,
        diversificationImpact: 0.3,
        riskAssessment: 0.8,
        recommendations: ['High-risk, high-reward', 'Consider taking profits', 'Monitor NFT market trends']
      }
    }
  ]

  const mockPortfolios: Portfolio[] = [
    {
      id: '1',
      name: 'Conservative Portfolio',
      totalValue: 50000,
      totalReturn: 12.5,
      riskScore: 0.3,
      diversificationScore: 0.8,
      assets: mockDigitalAssets.slice(0, 2),
      aiAnalysis: {
        optimizationScore: 8.2,
        rebalancingNeeded: false,
        riskAdjustment: 0.2,
        recommendations: ['Well-diversified portfolio', 'Consider adding stablecoins', 'Monitor rebalancing needs']
      }
    },
    {
      id: '2',
      name: 'Growth Portfolio',
      totalValue: 75000,
      totalReturn: 25.8,
      riskScore: 0.7,
      diversificationScore: 0.6,
      assets: mockDigitalAssets,
      aiAnalysis: {
        optimizationScore: 7.5,
        rebalancingNeeded: true,
        riskAdjustment: 0.4,
        recommendations: ['Consider rebalancing', 'Add more stable assets', 'Monitor risk exposure']
      }
    }
  ]

  const mockTradingStrategies: TradingStrategy[] = [
    {
      id: '1',
      name: 'AI Momentum Strategy',
      type: 'ai-driven',
      description: 'AI-powered momentum trading with real-time market analysis',
      performance: 18.5,
      riskLevel: 'medium',
      aiAnalysis: {
        accuracy: 0.78,
        profitFactor: 2.1,
        maxDrawdown: 0.12,
        recommendations: ['Continue monitoring', 'Consider position sizing', 'Watch for market shifts']
      }
    },
    {
      id: '2',
      name: 'Mean Reversion Bot',
      type: 'mean-reversion',
      description: 'Automated mean reversion trading with statistical analysis',
      performance: 12.3,
      riskLevel: 'low',
      aiAnalysis: {
        accuracy: 0.72,
        profitFactor: 1.8,
        maxDrawdown: 0.08,
        recommendations: ['Stable performance', 'Consider scaling up', 'Monitor volatility']
      }
    },
    {
      id: '3',
      name: 'Arbitrage Scanner',
      type: 'arbitrage',
      description: 'Cross-exchange arbitrage opportunities with AI detection',
      performance: 8.7,
      riskLevel: 'low',
      aiAnalysis: {
        accuracy: 0.85,
        profitFactor: 1.5,
        maxDrawdown: 0.05,
        recommendations: ['Low risk, consistent returns', 'Consider automation', 'Monitor exchange fees']
      }
    }
  ]

  const mockAnalytics: CryptocurrencyAnalytics = {
    totalAssets: 15,
    totalValue: 125000,
    averageReturn: 18.5,
    topPerformer: 'Cardano (ADA)',
    aiInsights: [
      {
        id: '1',
        title: 'Strong Market Sentiment',
        description: 'AI analysis shows positive sentiment across major cryptocurrencies with institutional adoption increasing',
        impact: 'positive',
        confidence: 0.85,
        recommendations: ['Consider increasing exposure', 'Monitor institutional flows', 'Watch for regulatory news']
      },
      {
        id: '2',
        title: 'Portfolio Rebalancing Needed',
        description: 'AI recommends rebalancing portfolio to optimize risk-return profile and maintain diversification',
        impact: 'neutral',
        confidence: 0.78,
        recommendations: ['Rebalance within 30 days', 'Consider adding stablecoins', 'Review risk allocation']
      }
    ]
  }

  useEffect(() => {
    setCryptocurrencies(mockCryptocurrencies)
    setDigitalAssets(mockDigitalAssets)
    setPortfolios(mockPortfolios)
    setTradingStrategies(mockTradingStrategies)
    setAnalytics(mockAnalytics)
  }, [])

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400'
  }

  const getChangeBgColor = (change: number) => {
    return change >= 0 ? 'bg-green-500' : 'bg-red-500'
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'high': return 'text-orange-400'
      case 'extreme': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'bullish': return '📈'
      case 'bearish': return '📉'
      case 'neutral': return '📊'
      default: return '📊'
    }
  }

  const getInsightColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-400'
      case 'negative': return 'text-red-400'
      case 'neutral': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getInsightIcon = (impact: string) => {
    switch (impact) {
      case 'positive': return '📈'
      case 'negative': return '📉'
      case 'neutral': return '📊'
      default: return '📊'
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
  }

  const filteredAssets = useMemo(() => {
    return digitalAssets.filter(asset => {
      const typeMatch = selectedType === 'all' || asset.type === selectedType
      return typeMatch
    })
  }, [digitalAssets, selectedType])

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Cryptocurrency & Digital Asset Management - Zion</title>
        <meta name="description" content="Advanced AI-powered cryptocurrency and digital asset management platform with trading strategies, portfolio optimization, and intelligent investment insights" />
        <meta name="keywords" content="cryptocurrency, digital assets, portfolio management, trading strategies, AI investment, blockchain, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/ai-powered-live-streaming-broadcasting" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Streaming
              </Link>
              <Link href="/ai-powered-voice-assistant-speech-recognition" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Voice Assistant
              </Link>
              <Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Autonomous Vehicles
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-4 rounded-lg text-sm font-medium hover:from-blue-700 hover to-cyan-700 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Cryptocurrency & Digital Asset Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of digital asset management with AI-powered cryptocurrency trading, 
            portfolio optimization, and intelligent investment strategies. Maximize returns with 
            cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover to-cyan-700 transition-all duration-200">
              Start Trading
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover to-emerald-700 transition-all duration-200">
              Manage Portfolio
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'crypto', label: 'Cryptocurrencies', icon: '₿' },
            { id: 'assets', label: 'Digital Assets', icon: '💎' },
            { id: 'portfolios', label: 'Portfolios', icon: '📈' },
            { id: 'strategies', label: 'Trading Strategies', icon: '🤖' },
            { id: 'analytics', label: 'Analytics', icon: '📈' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 lg grid-cols-2 gap-8">
            {/* Cryptocurrencies Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Top Cryptocurrencies</h3>
              <div className="space-y-4">
                {cryptocurrencies.slice(0, 3).map((crypto) => (
                  <div key={crypto.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{crypto.symbol} - {crypto.name}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getChangeBgColor(crypto.change24h)} text-white`}>
                        {formatPercentage(crypto.change24h)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{formatCurrency(crypto.price)}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>MC: {formatCurrency(crypto.marketCap)}</span>
                      <span className={getRiskColor(crypto.aiAnalysis.riskLevel)}>
                        {crypto.aiAnalysis.riskLevel} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Portfolio Summary</h3>
              <div className="space-y-4">
                {portfolios.slice(0, 2).map((portfolio) => (
                  <div key={portfolio.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{portfolio.name}</h4>
                      <span className={`px-4 py-3 rounded text-xs font-medium ${getChangeBgColor(portfolio.totalReturn)} text-white`}>
                        {formatPercentage(portfolio.totalReturn)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{formatCurrency(portfolio.totalValue)}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Risk: {portfolio.riskScore * 100}%</span>
                      <span>Diversification: {portfolio.diversificationScore * 100}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'crypto' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
              {cryptocurrencies.map((crypto) => (
                <div key={crypto.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{crypto.symbol}</h3>
                    <span className={`px-4 py-3 rounded text-xs font-medium ${getChangeBgColor(crypto.change24h)} text-white`}>
                      {formatPercentage(crypto.change24h)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{crypto.name}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white">{formatCurrency(crypto.price)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Market Cap</span>
                      <span className="text-white">{formatCurrency(crypto.marketCap)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Volume (24h)</span>
                      <span className="text-white">{formatCurrency(crypto.volume24h)}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sentiment</span>
                      <span className="text-white">{Math.round(crypto.aiAnalysis.sentimentScore * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Trend</span>
                      <span className="text-white flex items-center">
                        {getTrendIcon(crypto.aiAnalysis.trendPrediction)} {crypto.aiAnalysis.trendPrediction}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'assets' && (
          <div className="space-y-6">
            {/* Asset Type Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'cryptocurrency', 'nft', 'token', 'defi', 'metaverse'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-4 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Assets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
              {filteredAssets.map((asset) => (
                <div key={asset.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{asset.symbol}</h3>
                    <span className={`px-4 py-3 rounded text-xs font-medium ${getChangeBgColor(asset.totalReturn)} text-white`}>
                      {formatPercentage(asset.totalReturn)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{asset.name} • {asset.type}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Quantity</span>
                      <span className="text-white">{asset.quantity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Avg Price</span>
                      <span className="text-white">{formatCurrency(asset.averagePrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current Value</span>
                      <span className="text-white">{formatCurrency(asset.currentValue)}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Performance</span>
                      <span className="text-white">{asset.aiAnalysis.performanceScore}/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk</span>
                      <span className="text-white">{Math.round(asset.aiAnalysis.riskAssessment * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'portfolios' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md grid-cols-2 gap-6">
              {portfolios.map((portfolio) => (
                <div key={portfolio.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{portfolio.name}</h3>
                    <span className={`px-3 py-3 rounded-full text-sm ${getChangeBgColor(portfolio.totalReturn)} text-white`}>
                      {formatPercentage(portfolio.totalReturn)}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{formatCurrency(portfolio.totalValue)} total value</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{Math.round(portfolio.riskScore * 100)}%</div>
                      <div className="text-gray-400 text-sm">Risk Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{Math.round(portfolio.diversificationScore * 100)}%</div>
                      <div className="text-gray-400 text-sm">Diversification</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Optimization</span>
                      <span className="text-white">{Math.round(portfolio.aiAnalysis.optimizationScore * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Rebalancing</span>
                      <span className="text-white">{portfolio.aiAnalysis.rebalancingNeeded ? 'Needed' : 'Not needed'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'strategies' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
              {tradingStrategies.map((strategy) => (
                <div key={strategy.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{strategy.name}</h3>
                    <span className="px-3 py-3 rounded-full text-sm bg-blue-500/20 text-blue-400">
                      {strategy.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{strategy.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{formatPercentage(strategy.performance)}</div>
                      <div className="text-gray-400 text-sm">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{strategy.riskLevel}</div>
                      <div className="text-gray-400 text-sm">Risk Level</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-white">{Math.round(strategy.aiAnalysis.accuracy * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Profit Factor</span>
                      <span className="text-white">{strategy.aiAnalysis.profitFactor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'analytics' && analytics && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.totalAssets}</div>
                <div className="text-gray-400">Total Assets</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{formatCurrency(analytics.totalValue)}</div>
                <div className="text-gray-400">Total Value</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{formatPercentage(analytics.averageReturn)}</div>
                <div className="text-gray-400">Avg Return</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.topPerformer}</div>
                <div className="text-gray-400">Top Performer</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Investment Insights</h3>
              <div className="space-y-4">
                {analytics.aiInsights.map((insight) => (
                  <div key={insight.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{getInsightIcon(insight.impact)}</span>
                      <h4 className={`text-lg font-medium ${getInsightColor(insight.impact)}`}>
                        {insight.title}
                      </h4>
                      <span className="text-sm text-gray-400">{Math.round(insight.confidence * 100)}% confidence</span>
                    </div>
                    <p className="text-gray-300 mb-3">{insight.description}</p>
                    <div className="space-y-2">
                      {insight.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>•</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/20 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
          <div className="grid grid-cols-1 md grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The first free AI-powered marketplace for high-tech products, IT services, AI talents, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ai-powered-live-streaming-broadcasting" className="hover text-white">Live Streaming</Link></li>
                <li><Link href="/ai-powered-voice-assistant-speech-recognition" className="hover text-white">Voice Assistant</Link></li>
                <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="hover text-white">Autonomous Vehicles</Link></li>
                <li><Link href="/ai-powered-cryptocurrency-digital-asset-management" className="hover text-white">Cryptocurrency</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/marketplace" className="hover text-white">Marketplace</Link></li>
                <li><Link href="/services" className="hover text-white">IT Services</Link></li>
                <li><Link href="/talents" className="hover text-white">AI Talents</Link></li>
                <li><Link href="/equipment" className="hover text-white">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help-desk-support" className="hover text-white">Help Desk</Link></li>
                <li><Link href="/contact" className="hover text-white">Contact</Link></li>
                <li><Link href="/docs" className="hover text-white">Documentation</Link></li>
                <li><Link href="/status" className="hover text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredCryptocurrencyDigitalAssetManagementPage 