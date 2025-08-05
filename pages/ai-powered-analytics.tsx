import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
  previousValue: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'stable';
  trend: 'up' | 'down' | 'stable';
  category: string;
  aiInsight: string;
  prediction: number;
  confidence: number;
  lastUpdated: Date;
}

interface AIInsight {
  id: string;
  type: 'trend' | 'anomaly' | 'prediction' | 'recommendation' | 'optimization';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  category: string;
  actionable: boolean;
  actionUrl?: string;
  actionText?: string;
  createdAt: Date;
  priority: number;
}

interface PredictiveModel {
  id: string;
  name: string;
  description: string;
  accuracy: number;
  lastTrained: Date;
  nextTraining: Date;
  status: 'active' | 'training' | 'inactive';
  metrics: {
    precision: number;
    recall: number;
    f1Score: number;
  };
  predictions: {
    total: number;
    accurate: number;
    recent: number;
  };
}

interface MarketTrend {
  id: string;
  category: string;
  trend: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  timeframe: string;
  dataPoints: number;
  aiAnalysis: string;
  recommendations: string[];
}

const AIPoweredAnalyticsPage: NextPage = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [predictiveModels, setPredictiveModels] = useState<PredictiveModel[]>([]);
  const [marketTrends, setMarketTrends] = useState<MarketTrend[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'insights' | 'predictions' | 'trends' | 'models'>('overview');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterImpact, setFilterImpact] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'priority' | 'confidence' | 'impact'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered analytics data
    setTimeout(() => {
      const mockAnalyticsData: AnalyticsData[] = [
        {
          id: '1',
          metric: 'Revenue Growth',
          value: 2847500,
          previousValue: 2450000,
          change: 16.2,
          changeType: 'increase',
          trend: 'up',
          category: 'Financial',
          aiInsight: 'Revenue growth is 16.2% above previous period, driven by increased AI service adoption and new client acquisitions.',
          prediction: 3150000,
          confidence: 87.5,
          lastUpdated: new Date()
        },
        {
          id: '2',
          metric: 'User Engagement',
          value: 89.3,
          previousValue: 82.1,
          change: 8.8,
          changeType: 'increase',
          trend: 'up',
          category: 'User Behavior',
          aiInsight: 'User engagement increased by 8.8%, with mobile users showing 15% higher engagement rates.',
          prediction: 92.1,
          confidence: 91.2,
          lastUpdated: new Date()
        },
        {
          id: '3',
          metric: 'Service Completion Rate',
          value: 94.7,
          previousValue: 91.2,
          change: 3.8,
          changeType: 'increase',
          trend: 'up',
          category: 'Operations',
          aiInsight: 'Service completion rate improved by 3.8%, indicating better project management and client satisfaction.',
          prediction: 96.2,
          confidence: 85.9,
          lastUpdated: new Date()
        },
        {
          id: '4',
          metric: 'Customer Satisfaction',
          value: 4.8,
          previousValue: 4.6,
          change: 4.3,
          changeType: 'increase',
          trend: 'up',
          category: 'Quality',
          aiInsight: 'Customer satisfaction improved by 4.3%, with AI services receiving the highest ratings.',
          prediction: 4.9,
          confidence: 88.7,
          lastUpdated: new Date()
        },
        {
          id: '5',
          metric: 'Market Share',
          value: 12.4,
          previousValue: 10.8,
          change: 14.8,
          changeType: 'increase',
          trend: 'up',
          category: 'Market',
          aiInsight: 'Market share increased by 14.8%, primarily in AI development and cloud services segments.',
          prediction: 14.2,
          confidence: 82.3,
          lastUpdated: new Date()
        },
        {
          id: '6',
          metric: 'Average Project Duration',
          value: 4.2,
          previousValue: 5.1,
          change: -17.6,
          changeType: 'decrease',
          trend: 'down',
          category: 'Efficiency',
          aiInsight: 'Average project duration decreased by 17.6%, indicating improved efficiency and automation.',
          prediction: 3.8,
          confidence: 79.4,
          lastUpdated: new Date()
        }
      ];

      const mockAIInsights: AIInsight[] = [
        {
          id: '1',
          type: 'trend',
          title: 'AI Service Demand Surge',
          description: 'AI development services are experiencing a 45% increase in demand, with machine learning and computer vision leading the growth.',
          impact: 'high',
          confidence: 94.2,
          category: 'Market Trends',
          actionable: true,
          actionUrl: '/service-marketplace',
          actionText: 'Explore AI Services',
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          priority: 1
        },
        {
          id: '2',
          type: 'anomaly',
          title: 'Unusual Payment Pattern Detected',
          description: 'Payment processing shows an unusual pattern with 23% higher transaction volume during off-peak hours.',
          impact: 'medium',
          confidence: 87.6,
          category: 'Financial',
          actionable: true,
          actionUrl: '/payment-processing',
          actionText: 'Investigate Payments',
          createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          priority: 2
        },
        {
          id: '3',
          type: 'prediction',
          title: 'Revenue Forecast for Q4',
          description: 'Based on current trends, Q4 revenue is predicted to increase by 22% compared to Q3, driven by holiday season demand.',
          impact: 'high',
          confidence: 91.8,
          category: 'Financial',
          actionable: false,
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          priority: 1
        },
        {
          id: '4',
          type: 'recommendation',
          title: 'Optimize Mobile Experience',
          description: 'Mobile users show 15% higher engagement but 23% lower conversion rate. Recommend optimizing mobile checkout process.',
          impact: 'medium',
          confidence: 89.3,
          category: 'User Experience',
          actionable: true,
          actionUrl: '/mobile-responsive',
          actionText: 'Optimize Mobile',
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
          priority: 2
        },
        {
          id: '5',
          type: 'optimization',
          title: 'Service Category Performance',
          description: 'Blockchain services show 34% higher profitability but 12% lower completion rate. Recommend improving project management.',
          impact: 'medium',
          confidence: 85.7,
          category: 'Operations',
          actionable: true,
          actionUrl: '/project-management',
          actionText: 'Improve Management',
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
          priority: 3
        }
      ];

      const mockPredictiveModels: PredictiveModel[] = [
        {
          id: '1',
          name: 'Revenue Prediction Model',
          description: 'Machine learning model for predicting quarterly revenue based on market trends and user behavior.',
          accuracy: 94.2,
          lastTrained: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          nextTraining: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          status: 'active',
          metrics: {
            precision: 0.92,
            recall: 0.89,
            f1Score: 0.91
          },
          predictions: {
            total: 1250,
            accurate: 1176,
            recent: 89
          }
        },
        {
          id: '2',
          name: 'Customer Churn Prediction',
          description: 'AI model to predict customer churn and identify at-risk customers for retention strategies.',
          accuracy: 87.6,
          lastTrained: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          nextTraining: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          status: 'active',
          metrics: {
            precision: 0.85,
            recall: 0.82,
            f1Score: 0.84
          },
          predictions: {
            total: 890,
            accurate: 780,
            recent: 45
          }
        },
        {
          id: '3',
          name: 'Service Demand Forecasting',
          description: 'Predictive model for forecasting service demand across different categories and time periods.',
          accuracy: 91.3,
          lastTrained: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          nextTraining: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          status: 'training',
          metrics: {
            precision: 0.89,
            recall: 0.93,
            f1Score: 0.91
          },
          predictions: {
            total: 1560,
            accurate: 1423,
            recent: 67
          }
        },
        {
          id: '4',
          name: 'Price Optimization Model',
          description: 'AI model for optimizing service pricing based on market conditions and demand patterns.',
          accuracy: 88.9,
          lastTrained: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
          nextTraining: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
          status: 'active',
          metrics: {
            precision: 0.87,
            recall: 0.85,
            f1Score: 0.86
          },
          predictions: {
            total: 720,
            accurate: 640,
            recent: 34
          }
        }
      ];

      const mockMarketTrends: MarketTrend[] = [
        {
          id: '1',
          category: 'AI Development',
          trend: 'Exponential Growth',
          description: 'AI development services are experiencing unprecedented growth with 45% increase in demand.',
          impact: 'positive',
          confidence: 94.2,
          timeframe: 'Next 6 months',
          dataPoints: 1250,
          aiAnalysis: 'Machine learning and computer vision services are driving the growth, with enterprise adoption increasing by 67%.',
          recommendations: [
            'Expand AI service offerings',
            'Invest in AI talent acquisition',
            'Develop specialized AI solutions'
          ]
        },
        {
          id: '2',
          category: 'Cloud Services',
          trend: 'Steady Growth',
          description: 'Cloud services showing consistent 12% quarterly growth with strong enterprise adoption.',
          impact: 'positive',
          confidence: 87.6,
          timeframe: 'Next 12 months',
          dataPoints: 890,
          aiAnalysis: 'AWS and Azure services are leading the growth, with DevOps automation showing highest demand.',
          recommendations: [
            'Enhance cloud service portfolio',
            'Focus on DevOps automation',
            'Develop hybrid cloud solutions'
          ]
        },
        {
          id: '3',
          category: 'Blockchain',
          trend: 'Emerging Market',
          description: 'Blockchain services showing 23% growth with DeFi and NFT development leading the trend.',
          impact: 'positive',
          confidence: 82.3,
          timeframe: 'Next 18 months',
          dataPoints: 456,
          aiAnalysis: 'Smart contract development and DeFi protocols are the fastest-growing segments.',
          recommendations: [
            'Develop blockchain expertise',
            'Focus on DeFi solutions',
            'Explore NFT marketplace opportunities'
          ]
        },
        {
          id: '4',
          category: 'Mobile Development',
          trend: 'Mature Market',
          description: 'Mobile development showing stable 8% growth with cross-platform solutions gaining popularity.',
          impact: 'neutral',
          confidence: 78.9,
          timeframe: 'Next 6 months',
          dataPoints: 678,
          aiAnalysis: 'React Native and Flutter are dominating the cross-platform development market.',
          recommendations: [
            'Focus on cross-platform development',
            'Enhance mobile UI/UX capabilities',
            'Develop mobile-first solutions'
          ]
        }
      ];

      setAnalyticsData(mockAnalyticsData);
      setAiInsights(mockAIInsights);
      setPredictiveModels(mockPredictiveModels);
      setMarketTrends(mockMarketTrends);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredInsights = useMemo(() => {
    let filtered = aiInsights.filter(insight => {
      // Category filter
      if (filterCategory !== 'all' && insight.category !== filterCategory) return false;
      
      // Impact filter
      if (filterImpact !== 'all' && insight.impact !== filterImpact) return false;
      
      // Search term filter
      if (searchTerm && !insight.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !insight.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Sort insights
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return a.priority - b.priority;
        case 'confidence':
          return b.confidence - a.confidence;
        case 'impact':
          const impactOrder = { high: 3, medium: 2, low: 1 };
          return impactOrder[b.impact] - impactOrder[a.impact];
        case 'recent':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    return filtered;
  }, [aiInsights, filterCategory, filterImpact, searchTerm, sortBy]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase': return 'text-green-400';
      case 'decrease': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'trend': return '📈';
      case 'anomaly': return '⚠️';
      case 'prediction': return '🔮';
      case 'recommendation': return '💡';
      case 'optimization': return '⚡';
      default: return '📊';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'training': return 'text-yellow-400 bg-yellow-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  if (loading) {
    return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Analytics...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>AI-Powered Analytics - Zion</title>
        <meta name="description" content="Intelligent analytics platform with AI-driven insights, predictive modeling, and automated business intelligence" />
        <meta name="keywords" content="AI analytics, predictive insights, business intelligence, machine learning, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md flex items-center space-x-8">
              <Link href="/smart-notifications" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Notifications
              </Link>
              <Link href="/project-management" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/service-categories" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Categories
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
            AI-Powered Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent analytics platform with AI-driven insights, predictive modeling, 
            and automated business intelligence for data-driven decision making.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'insights', name: 'AI Insights', icon: '🤖' },
              { id: 'predictions', name: 'Predictions', icon: '🔮' },
              { id: 'trends', name: 'Market Trends', icon: '📈' },
              { id: 'models', name: 'AI Models', icon: '🧠' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Overview Dashboard */}
        {selectedView === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6">
              {analyticsData.map((metric) => (
                <div key={metric.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                    <span className={`px-4 py-3 rounded-full text-xs font-medium ${getChangeColor(metric.changeType)}`}>
                      {formatPercentage(metric.change)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white mb-2">
                      {metric.category === 'Financial' ? formatCurrency(metric.value) : metric.value}
                    </div>
                    <p className="text-sm text-gray-400">Previous: {metric.category === 'Financial' ? formatCurrency(metric.previousValue) : metric.previousValue}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-300">{metric.aiInsight}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Prediction: {metric.category === 'Financial' ? formatCurrency(metric.prediction) : metric.prediction}</span>
                    <span className="text-purple-400">{metric.confidence.toFixed(1)}% confidence</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Insights */}
        {selectedView === 'insights' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="grid grid-cols-1 lg grid-cols-4 gap-4">
                <div className="lg col-span-2">
                  <input
                    type="text"
                    placeholder="Search AI insights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus border-purple-500 transition-colors"
                  />
                </div>
                
                <div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus border-purple-500 transition-colors"
                  >
                    <option value="all">All Categories</option>
                    <option value="Market Trends">Market Trends</option>
                    <option value="Financial">Financial</option>
                    <option value="User Experience">User Experience</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
                
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus border-purple-500 transition-colors"
                  >
                    <option value="recent">Sort by Recent</option>
                    <option value="priority">Sort by Priority</option>
                    <option value="confidence">Sort by Confidence</option>
                    <option value="impact">Sort by Impact</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Insights List */}
            <div className="space-y-4">
              {filteredInsights.map((insight) => (
                <div key={insight.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{getTypeIcon(insight.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                          {insight.impact.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{insight.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>Confidence: {insight.confidence.toFixed(1)}%</span>
                        <span>Category: {insight.category}</span>
                        <span>Priority: {insight.priority}</span>
                      </div>
                      
                      {insight.actionable && insight.actionUrl && insight.actionText && (
                        <Link 
                          href={insight.actionUrl}
                          className="inline-flex items-center px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                        >
                          {insight.actionText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Predictive Models */}
        {selectedView === 'models' && (
          <div className="grid grid-cols-1 lg grid-cols-2 gap-6">
            {predictiveModels.map((model) => (
              <div key={model.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                  <span className={`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                    {model.status.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{model.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Accuracy</p>
                    <p className="text-lg font-semibold text-green-400">{model.accuracy.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">F1 Score</p>
                    <p className="text-lg font-semibold text-blue-400">{(model.metrics.f1Score * 100).toFixed(1)}%</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Predictions</span>
                    <span className="text-white">{model.predictions.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accurate Predictions</span>
                    <span className="text-green-400">{model.predictions.accurate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Recent Predictions</span>
                    <span className="text-blue-400">{model.predictions.recent}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Last Trained: {model.lastTrained.toLocaleDateString()}</span>
                    <span>Next Training: {model.nextTraining.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Market Trends */}
        {selectedView === 'trends' && (
          <div className="space-y-6">
            {marketTrends.map((trend) => (
              <div key={trend.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{trend.category}</h3>
                    <p className="text-gray-300">{trend.description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                      trend.impact === 'positive' ? 'text-green-400 bg-green-500/20' : 
                      trend.impact === 'negative' ? 'text-red-400 bg-red-500/20' : 
                      'text-gray-400 bg-gray-500/20'
                    }`}>
                      {trend.impact.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400">{trend.timeframe}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-2"><strong>AI Analysis:</strong> {trend.aiAnalysis}</p>
                  <p className="text-sm text-gray-400">Confidence: {trend.confidence.toFixed(1)}% | Data Points: {trend.dataPoints}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-2"><strong>Recommendations:</strong></p>
                  <ul className="space-y-1">
                    {trend.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unlock the Power of AI Analytics
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent insights, predictive modeling, and automated analytics 
              to make data-driven decisions and optimize your business performance.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                Explore Insights
              </button>
              <Link href="/analytics-dashboard" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredAnalyticsPage 