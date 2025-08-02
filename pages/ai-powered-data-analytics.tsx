import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream' | 'external';
  status: 'active' | 'inactive' | 'error' | 'syncing';
  lastSync: Date;
  recordCount: number;
  size: number;
  schema: {
    field: string;
    type: string;
    description: string;
  }[];
  aiEnabled: boolean;
  refreshRate: string;
}

interface DataAnalysis {
  id: string;
  name: string;
  type: 'trend' | 'correlation' | 'prediction' | 'anomaly' | 'segmentation' | 'forecasting';
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  dataSource: string;
  createdAt: Date;
  completedAt?: Date;
  aiConfidence: number;
  insights: {
    id: string;
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    confidence: number;
    actionable: boolean;
  }[];
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
  };
}

interface BusinessIntelligence {
  id: string;
  name: string;
  category: 'financial' | 'operational' | 'customer' | 'marketing' | 'product';
  description: string;
  lastUpdated: Date;
  dataPoints: number;
  aiGenerated: boolean;
  status: 'active' | 'draft' | 'archived';
  kpis: {
    name: string;
    current: number;
    target: number;
    trend: 'up' | 'down' | 'stable';
    change: number;
  }[];
  visualizations: {
    type: 'chart' | 'table' | 'dashboard' | 'report';
    title: string;
    data: any;
  }[];
}

interface DataAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const AIPoweredDataAnalyticsPage: NextPage = () => {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [analyses, setAnalyses] = useState<DataAnalysis[]>([]);
  const [intelligence, setIntelligence] = useState<BusinessIntelligence[]>([]);
  const [analytics, setAnalytics] = useState<DataAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'sources' | 'analyses' | 'intelligence' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'confidence' | 'accuracy' | 'impact'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered data analytics data
    setTimeout(() => {
      const mockDataSources: DataSource[] = [
        {
          id: '1',
          name: 'User Transactions Database',
          type: 'database',
          status: 'active',
          lastSync: new Date('2024-01-20T15:30:00'),
          recordCount: 1250000,
          size: 2.5,
          schema: [
            { field: 'user_id', type: 'string', description: 'Unique user identifier' },
            { field: 'transaction_amount', type: 'decimal', description: 'Transaction amount' },
            { field: 'transaction_date', type: 'datetime', description: 'Transaction timestamp' },
            { field: 'payment_method', type: 'string', description: 'Payment method used' }
          ],
          aiEnabled: true,
          refreshRate: 'Real-time'
        },
        {
          id: '2',
          name: 'Customer Behavior API',
          type: 'api',
          status: 'active',
          lastSync: new Date('2024-01-20T15:25:00'),
          recordCount: 890000,
          size: 1.8,
          schema: [
            { field: 'session_id', type: 'string', description: 'User session identifier' },
            { field: 'page_views', type: 'integer', description: 'Number of page views' },
            { field: 'time_spent', type: 'integer', description: 'Time spent on site' },
            { field: 'conversion_rate', type: 'decimal', description: 'Conversion rate' }
          ],
          aiEnabled: true,
          refreshRate: '5 minutes'
        },
        {
          id: '3',
          name: 'Product Performance CSV',
          type: 'file',
          status: 'syncing',
          lastSync: new Date('2024-01-20T15:20:00'),
          recordCount: 450000,
          size: 0.9,
          schema: [
            { field: 'product_id', type: 'string', description: 'Product identifier' },
            { field: 'sales_volume', type: 'integer', description: 'Sales volume' },
            { field: 'revenue', type: 'decimal', description: 'Revenue generated' },
            { field: 'rating', type: 'decimal', description: 'Customer rating' }
          ],
          aiEnabled: true,
          refreshRate: 'Daily'
        },
        {
          id: '4',
          name: 'Market Trends Stream',
          type: 'stream',
          status: 'active',
          lastSync: new Date('2024-01-20T15:15:00'),
          recordCount: 320000,
          size: 0.6,
          schema: [
            { field: 'trend_id', type: 'string', description: 'Trend identifier' },
            { field: 'trend_score', type: 'decimal', description: 'Trend popularity score' },
            { field: 'category', type: 'string', description: 'Trend category' },
            { field: 'growth_rate', type: 'decimal', description: 'Growth rate percentage' }
          ],
          aiEnabled: true,
          refreshRate: 'Real-time'
        },
        {
          id: '5',
          name: 'External Market Data',
          type: 'external',
          status: 'error',
          lastSync: new Date('2024-01-20T14:45:00'),
          recordCount: 0,
          size: 0,
          schema: [
            { field: 'market_id', type: 'string', description: 'Market identifier' },
            { field: 'market_size', type: 'decimal', description: 'Market size in USD' },
            { field: 'growth_rate', type: 'decimal', description: 'Market growth rate' },
            { field: 'competition_level', type: 'string', description: 'Competition level' }
          ],
          aiEnabled: false,
          refreshRate: 'Weekly'
        }
      ];

      const mockAnalyses: DataAnalysis[] = [
        {
          id: '1',
          name: 'Customer Churn Prediction',
          type: 'prediction',
          status: 'completed',
          dataSource: 'User Transactions Database',
          createdAt: new Date('2024-01-20T14:00:00'),
          completedAt: new Date('2024-01-20T14:30:00'),
          aiConfidence: 94,
          insights: [
            {
              id: 'insight-1',
              title: 'High-risk customers identified',
              description: 'AI identified 2,340 customers with 85% churn probability',
              impact: 'high',
              confidence: 92,
              actionable: true
            },
            {
              id: 'insight-2',
              title: 'Retention strategy recommendations',
              description: 'Personalized offers can reduce churn by 23%',
              impact: 'high',
              confidence: 88,
              actionable: true
            }
          ],
          metrics: {
            accuracy: 94.2,
            precision: 91.8,
            recall: 89.5,
            f1Score: 90.6
          }
        },
        {
          id: '2',
          name: 'Revenue Trend Analysis',
          type: 'trend',
          status: 'completed',
          dataSource: 'User Transactions Database',
          createdAt: new Date('2024-01-20T13:30:00'),
          completedAt: new Date('2024-01-20T14:00:00'),
          aiConfidence: 87,
          insights: [
            {
              id: 'insight-3',
              title: 'Seasonal revenue patterns',
              description: 'Revenue peaks in Q4 with 34% increase',
              impact: 'medium',
              confidence: 85,
              actionable: true
            },
            {
              id: 'insight-4',
              title: 'Growth opportunities identified',
              description: 'Untapped market segments worth $2.3M annually',
              impact: 'high',
              confidence: 82,
              actionable: true
            }
          ],
          metrics: {
            accuracy: 87.3,
            precision: 84.1,
            recall: 86.7,
            f1Score: 85.4
          }
        },
        {
          id: '3',
          name: 'Anomaly Detection',
          type: 'anomaly',
          status: 'running',
          dataSource: 'Customer Behavior API',
          createdAt: new Date('2024-01-20T15:00:00'),
          aiConfidence: 76,
          insights: [
            {
              id: 'insight-5',
              title: 'Unusual activity detected',
              description: 'Spike in failed transactions at 3:00 AM',
              impact: 'high',
              confidence: 89,
              actionable: true
            }
          ],
          metrics: {
            accuracy: 76.5,
            precision: 73.2,
            recall: 78.9,
            f1Score: 75.9
          }
        },
        {
          id: '4',
          name: 'Customer Segmentation',
          type: 'segmentation',
          status: 'completed',
          dataSource: 'Customer Behavior API',
          createdAt: new Date('2024-01-20T12:00:00'),
          completedAt: new Date('2024-01-20T12:45:00'),
          aiConfidence: 91,
          insights: [
            {
              id: 'insight-6',
              title: '5 distinct customer segments identified',
              description: 'High-value segment shows 3x higher engagement',
              impact: 'medium',
              confidence: 91,
              actionable: true
            }
          ],
          metrics: {
            accuracy: 91.2,
            precision: 89.8,
            recall: 92.1,
            f1Score: 90.9
          }
        }
      ];

      const mockIntelligence: BusinessIntelligence[] = [
        {
          id: '1',
          name: 'Financial Performance Dashboard',
          category: 'financial',
          description: 'Comprehensive financial metrics and performance indicators',
          lastUpdated: new Date('2024-01-20T15:30:00'),
          dataPoints: 1250,
          aiGenerated: true,
          status: 'active',
          kpis: [
            {
              name: 'Monthly Revenue',
              current: 1250000,
              target: 1200000,
              trend: 'up',
              change: 4.2
            },
            {
              name: 'Customer Acquisition Cost',
              current: 45,
              target: 40,
              trend: 'down',
              change: -11.1
            },
            {
              name: 'Customer Lifetime Value',
              current: 850,
              target: 800,
              trend: 'up',
              change: 6.3
            }
          ],
          visualizations: [
            {
              type: 'dashboard',
              title: 'Revenue Trends',
              data: { revenue: 1250000, growth: 4.2 }
            }
          ]
        },
        {
          id: '2',
          name: 'Customer Behavior Analysis',
          category: 'customer',
          description: 'Deep insights into customer behavior and preferences',
          lastUpdated: new Date('2024-01-20T15:25:00'),
          dataPoints: 890,
          aiGenerated: true,
          status: 'active',
          kpis: [
            {
              name: 'Customer Satisfaction',
              current: 4.6,
              target: 4.8,
              trend: 'down',
              change: -4.2
            },
            {
              name: 'Retention Rate',
              current: 87.5,
              target: 90.0,
              trend: 'down',
              change: -2.8
            },
            {
              name: 'Engagement Score',
              current: 78.3,
              target: 85.0,
              trend: 'down',
              change: -7.9
            }
          ],
          visualizations: [
            {
              type: 'chart',
              title: 'Customer Journey',
              data: { satisfaction: 4.6, retention: 87.5 }
            }
          ]
        },
        {
          id: '3',
          name: 'Operational Efficiency Report',
          category: 'operational',
          description: 'Operational metrics and efficiency analysis',
          lastUpdated: new Date('2024-01-20T15:20:00'),
          dataPoints: 567,
          aiGenerated: true,
          status: 'active',
          kpis: [
            {
              name: 'System Uptime',
              current: 99.8,
              target: 99.9,
              trend: 'down',
              change: -0.1
            },
            {
              name: 'Response Time',
              current: 1.2,
              target: 1.0,
              trend: 'down',
              change: -20.0
            },
            {
              name: 'Error Rate',
              current: 0.3,
              target: 0.1,
              trend: 'down',
              change: -200.0
            }
          ],
          visualizations: [
            {
              type: 'report',
              title: 'Performance Metrics',
              data: { uptime: 99.8, responseTime: 1.2 }
            }
          ]
        }
      ];

      const mockAnalytics: DataAnalytics[] = [
        {
          id: '1',
          metric: 'Data Accuracy',
          current: 94.2,
          target: 95.0,
          improvement: -0.8,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '2',
          metric: 'AI Confidence',
          current: 87.5,
          target: 90.0,
          improvement: -2.8,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '3',
          metric: 'Analysis Speed',
          current: 2.8,
          target: 2.0,
          improvement: -40.0,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '4',
          metric: 'Insight Quality',
          current: 89.3,
          target: 92.0,
          improvement: -2.9,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '5',
          metric: 'Predictive Accuracy',
          current: 91.7,
          target: 94.0,
          improvement: -2.4,
          trend: 'down',
          period: 'This Month'
        },
        {
          id: '6',
          metric: 'Automation Rate',
          current: 78.5,
          target: 85.0,
          improvement: -7.6,
          trend: 'down',
          period: 'This Month'
        }
      ];

      setDataSources(mockDataSources);
      setAnalyses(mockAnalyses);
      setIntelligence(mockIntelligence);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredDataSources = useMemo(() => {
    let filtered = dataSources.filter(source => {
      // Type filter
      if (filterType !== 'all' && source.type !== filterType) return false;
      
      // Status filter
      if (filterStatus !== 'all' && source.status !== filterStatus) return false;
      
      // Search term filter
      if (searchTerm && !source.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Sort data sources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'confidence':
          return b.aiEnabled ? 1 : -1;
        case 'accuracy':
          return b.recordCount - a.recordCount;
        case 'impact':
          return b.size - a.size;
        case 'recent':
        default:
          return new Date(b.lastSync).getTime() - new Date(a.lastSync).getTime();
      }
    });

    return filtered;
  }, [dataSources, filterType, filterStatus, searchTerm, sortBy]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'inactive': return 'text-gray-400 bg-gray-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      case 'syncing': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'database': return '🗄️';
      case 'api': return '🔌';
      case 'file': return '📁';
      case 'stream': return '🌊';
      case 'external': return '🌐';
      default: return '📊';
    }
  };

  const getAnalysisTypeIcon = (type: string) => {
    switch (type) {
      case 'trend': return '📈';
      case 'correlation': return '🔗';
      case 'prediction': return '🔮';
      case 'anomaly': return '⚠️';
      case 'segmentation': return '🎯';
      case 'forecasting': return '📅';
      default: return '📊';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-orange-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const formatFileSize = (size: number) => {
    if (size >= 1) return `${size} GB`;
    return `${(size * 1024).toFixed(1)} MB`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Loading AI-Powered Data Analytics...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Data Analytics - Zion</title>
        <meta name="description" content="Intelligent data analysis, business intelligence, predictive analytics, and AI-driven insights" />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data insights, Zion" />
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
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai-powered-customer-support" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Support
              </Link>
              <Link href="/ai-powered-testing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testing
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Data Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent data analysis, business intelligence, predictive analytics, 
            and AI-driven insights with advanced data visualization and automated reporting.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'sources', name: 'Data Sources', icon: '🗄️' },
              { id: 'analyses', name: 'Analyses', icon: '🔍' },
              { id: 'intelligence', name: 'Business Intelligence', icon: '📈' },
              { id: 'analytics', name: 'Analytics', icon: '📉' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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

        {/* Analytics Overview */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {analytics.map((metric) => (
              <div key={metric.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">{metric.current}</div>
                  <p className="text-sm text-gray-400">Target: {metric.target}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+' : ''}{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400">{metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filters */}
        {selectedView === 'sources' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="Search data sources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="database">Database</option>
                  <option value="api">API</option>
                  <option value="file">File</option>
                  <option value="stream">Stream</option>
                  <option value="external">External</option>
                </select>
              </div>
              
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="recent">Sort by Recent</option>
                  <option value="confidence">Sort by AI Enabled</option>
                  <option value="accuracy">Sort by Record Count</option>
                  <option value="impact">Sort by Size</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Data Sources */}
        {selectedView === 'sources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDataSources.map((source) => (
              <div key={source.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getTypeIcon(source.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{source.name}</h3>
                      <p className="text-gray-300 text-sm capitalize">{source.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(source.status)}`}>
                      {source.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${source.aiEnabled ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {source.aiEnabled ? 'AI ENABLED' : 'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Records</p>
                    <p className="text-lg font-semibold text-white">{source.recordCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Size</p>
                    <p className="text-lg font-semibold text-blue-400">{formatFileSize(source.size)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Refresh Rate</p>
                    <p className="text-lg font-semibold text-green-400">{source.refreshRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Schema Fields</p>
                    <p className="text-lg font-semibold text-orange-400">{source.schema.length}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Schema Preview:</p>
                  <div className="space-y-1">
                    {source.schema.slice(0, 3).map((field, index) => (
                      <div key={index} className="text-xs text-gray-300">
                        <span className="text-purple-400">{field.field}</span>
                        <span className="text-gray-500 ml-2">({field.type})</span>
                      </div>
                    ))}
                    {source.schema.length > 3 && (
                      <div className="text-xs text-gray-500">+{source.schema.length - 3} more fields</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Last Sync: {source.lastSync.toLocaleString()}</span>
                  <span>ID: {source.id}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Details
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Sync Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Data Analyses */}
        {selectedView === 'analyses' && (
          <div className="space-y-6">
            {analyses.map((analysis) => (
              <div key={analysis.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{getAnalysisTypeIcon(analysis.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{analysis.name}</h3>
                      <p className="text-gray-300 text-sm">{analysis.dataSource}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                      {analysis.status.toUpperCase()}
                    </span>
                    <div className="mt-2">
                      <span className="text-blue-400 text-sm">AI Confidence: {analysis.aiConfidence}%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Accuracy</p>
                    <p className="text-lg font-semibold text-green-400">{analysis.metrics.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Precision</p>
                    <p className="text-lg font-semibold text-blue-400">{analysis.metrics.precision}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Recall</p>
                    <p className="text-lg font-semibold text-orange-400">{analysis.metrics.recall}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">F1 Score</p>
                    <p className="text-lg font-semibold text-purple-400">{analysis.metrics.f1Score}%</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Insights:</p>
                  <div className="space-y-2">
                    {analysis.insights.map((insight) => (
                      <div key={insight.id} className="bg-white/5 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white">{insight.title}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(insight.impact)} bg-opacity-20`}>
                            {insight.impact.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 mb-2">{insight.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Confidence: {insight.confidence}%</span>
                          <span>{insight.actionable ? '✅ Actionable' : '❌ Not Actionable'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Created: {analysis.createdAt.toLocaleString()}</span>
                  {analysis.completedAt && (
                    <span>Completed: {analysis.completedAt.toLocaleString()}</span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Results
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Export Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Business Intelligence */}
        {selectedView === 'intelligence' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intelligence.map((bi) => (
              <div key={bi.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{bi.name}</h3>
                    <p className="text-gray-300 text-sm">{bi.description}</p>
                    <p className="text-gray-400 text-sm capitalize">{bi.category}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(bi.status)}`}>
                    {bi.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Data Points</p>
                    <p className="text-lg font-semibold text-white">{bi.dataPoints.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">AI Generated</p>
                    <p className="text-lg font-semibold text-blue-400">{bi.aiGenerated ? 'Yes' : 'No'}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Performance Indicators:</p>
                  <div className="space-y-2">
                    {bi.kpis.map((kpi, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                        <div>
                          <p className="text-sm text-white">{kpi.name}</p>
                          <p className="text-xs text-gray-400">
                            {kpi.current.toLocaleString()} / {kpi.target.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm">{getTrendIcon(kpi.trend)}</span>
                            <span className={`text-xs ${kpi.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {kpi.change > 0 ? '+' : ''}{kpi.change.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Last Updated: {bi.lastUpdated.toLocaleString()}</span>
                  <span>ID: {bi.id}</span>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                    View Dashboard
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm">
                    Export Data
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Analyze with AI Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage intelligent data analytics to gain insights with AI-driven 
              analysis, business intelligence, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Create Analysis
              </button>
              <Link href="/service-marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredDataAnalyticsPage 