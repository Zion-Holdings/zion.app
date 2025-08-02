import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface BusinessReport {
  id: string;
  name: string;
  type: 'financial' | 'operational' | 'marketing' | 'sales' | 'customer' | 'custom';
  category: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annual' | 'real-time';
  status: 'draft' | 'published' | 'archived' | 'scheduled';
  description: string;
  metrics: ReportMetric[];
  insights: BusinessInsight[];
  lastGenerated: Date;
  nextScheduled?: Date;
  aiAnalysis: AIReportAnalysis;
}

interface ReportMetric {
  id: string;
  name: string;
  value: number;
  previousValue: number;
  change: number;
  changePercent: number;
  target: number;
  status: 'on-track' | 'above-target' | 'below-target' | 'critical';
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

interface BusinessInsight {
  id: string;
  title: string;
  description: string;
  type: 'opportunity' | 'risk' | 'trend' | 'anomaly' | 'recommendation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  impact: 'positive' | 'negative' | 'neutral';
  recommendations: string[];
}

interface AIReportAnalysis {
  id: string;
  overallScore: number;
  accuracy: number;
  confidence: number;
  keyFindings: string[];
  predictions: Prediction[];
  recommendations: string[];
}

interface Prediction {
  id: string;
  metric: string;
  predictedValue: number;
  confidence: number;
  timeframe: string;
  factors: string[];
}

interface KPIDashboard {
  id: string;
  name: string;
  category: 'financial' | 'operational' | 'customer' | 'growth';
  kpis: KPIMetric[];
  lastUpdated: Date;
  aiOptimization: AIKPIOptimization;
}

interface KPIMetric {
  id: string;
  name: string;
  currentValue: number;
  targetValue: number;
  previousValue: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  trend: 'improving' | 'declining' | 'stable';
  unit: string;
  description: string;
}

interface AIKPIOptimization {
  id: string;
  optimizationScore: number;
  improvementOpportunities: string[];
  riskFactors: string[];
  recommendations: string[];
}

interface BusinessIntelligenceAnalytics {
  totalReports: number;
  activeKPIs: number;
  insightsGenerated: number;
  predictionAccuracy: number;
  topCategories: string[];
  aiInsights: BusinessIntelligenceInsight[];
}

interface BusinessIntelligenceInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  recommendations: string[];
}

const AIPoweredBusinessIntelligencePage: NextPage = () => {
  const [businessReports, setBusinessReports] = useState<BusinessReport[]>([])
  const [kpiDashboards, setKpiDashboards] = useState<KPIDashboard[]>([])
  const [analytics, setAnalytics] = useState<BusinessIntelligenceAnalytics | null>(null)
  const [activeTab, setActiveTab] = useState<'reports' | 'kpis' | 'analytics'>('reports')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data
  const mockBusinessReports: BusinessReport[] = [
    {
      id: '1',
      name: 'Monthly Financial Performance Report',
      type: 'financial',
      category: 'monthly',
      status: 'published',
      description: 'Comprehensive financial performance analysis with AI-powered insights',
      metrics: [
        {
          id: '1',
          name: 'Revenue Growth',
          value: 1250000,
          previousValue: 1100000,
          change: 150000,
          changePercent: 13.6,
          target: 1200000,
          status: 'above-target',
          trend: 'up',
          unit: 'USD'
        },
        {
          id: '2',
          name: 'Customer Acquisition Cost',
          value: 45,
          previousValue: 52,
          change: -7,
          changePercent: -13.5,
          target: 50,
          status: 'above-target',
          trend: 'up',
          unit: 'USD'
        }
      ],
      insights: [
        {
          id: '1',
          title: 'Strong Revenue Growth',
          description: 'Revenue exceeded targets by 4.2% with strong customer retention',
          type: 'opportunity',
          severity: 'low',
          confidence: 0.95,
          impact: 'positive',
          recommendations: ['Increase marketing budget', 'Expand to new markets']
        }
      ],
      lastGenerated: new Date('2024-01-20T10:00:00'),
      nextScheduled: new Date('2024-02-20T10:00:00'),
      aiAnalysis: {
        id: '1',
        overallScore: 92,
        accuracy: 94,
        confidence: 0.91,
        keyFindings: ['Revenue growth exceeds expectations', 'Customer retention improved'],
        predictions: [
          {
            id: '1',
            metric: 'Revenue',
            predictedValue: 1350000,
            confidence: 0.88,
            timeframe: 'Next Quarter',
            factors: ['Market expansion', 'Product launches']
          }
        ],
        recommendations: ['Increase marketing investment', 'Launch new product line']
      }
    },
    {
      id: '2',
      name: 'Customer Behavior Analysis',
      type: 'customer',
      category: 'weekly',
      status: 'published',
      description: 'AI-powered customer behavior insights and engagement metrics',
      metrics: [
        {
          id: '3',
          name: 'Customer Satisfaction',
          value: 4.8,
          previousValue: 4.6,
          change: 0.2,
          changePercent: 4.3,
          target: 4.5,
          status: 'above-target',
          trend: 'up',
          unit: 'Score'
        },
        {
          id: '4',
          name: 'Customer Lifetime Value',
          value: 1250,
          previousValue: 1180,
          change: 70,
          changePercent: 5.9,
          target: 1200,
          status: 'above-target',
          trend: 'up',
          unit: 'USD'
        }
      ],
      insights: [
        {
          id: '2',
          title: 'High Customer Satisfaction',
          description: 'Customer satisfaction improved significantly with new features',
          type: 'trend',
          severity: 'low',
          confidence: 0.92,
          impact: 'positive',
          recommendations: ['Continue feature development', 'Enhance support system']
        }
      ],
      lastGenerated: new Date('2024-01-19T15:00:00'),
      nextScheduled: new Date('2024-01-26T15:00:00'),
      aiAnalysis: {
        id: '2',
        overallScore: 89,
        accuracy: 91,
        confidence: 0.88,
        keyFindings: ['Customer satisfaction improved', 'Lifetime value increasing'],
        predictions: [
          {
            id: '2',
            metric: 'Customer Satisfaction',
            predictedValue: 4.9,
            confidence: 0.85,
            timeframe: 'Next Month',
            factors: ['Feature improvements', 'Support enhancements']
          }
        ],
        recommendations: ['Invest in customer support', 'Develop new features']
      }
    }
  ]

  const mockKpiDashboards: KPIDashboard[] = [
    {
      id: '1',
      name: 'Financial Performance KPIs',
      category: 'financial',
      kpis: [
        {
          id: '1',
          name: 'Monthly Recurring Revenue',
          currentValue: 1250000,
          targetValue: 1200000,
          previousValue: 1100000,
          status: 'excellent',
          trend: 'improving',
          unit: 'USD',
          description: 'Total monthly recurring revenue from all subscriptions'
        },
        {
          id: '2',
          name: 'Gross Margin',
          currentValue: 78,
          targetValue: 75,
          previousValue: 76,
          status: 'excellent',
          trend: 'improving',
          unit: '%',
          description: 'Gross profit margin percentage'
        }
      ],
      lastUpdated: new Date('2024-01-20T12:00:00'),
      aiOptimization: {
        id: '1',
        optimizationScore: 94,
        improvementOpportunities: ['Expand to new markets', 'Optimize pricing strategy'],
        riskFactors: ['Market competition', 'Economic uncertainty'],
        recommendations: ['Increase marketing budget', 'Launch premium tier']
      }
    },
    {
      id: '2',
      name: 'Operational Efficiency KPIs',
      category: 'operational',
      kpis: [
        {
          id: '3',
          name: 'Customer Acquisition Cost',
          currentValue: 45,
          targetValue: 50,
          previousValue: 52,
          status: 'excellent',
          trend: 'improving',
          unit: 'USD',
          description: 'Average cost to acquire a new customer'
        },
        {
          id: '4',
          name: 'Customer Lifetime Value',
          currentValue: 1250,
          targetValue: 1200,
          previousValue: 1180,
          status: 'excellent',
          trend: 'improving',
          unit: 'USD',
          description: 'Average customer lifetime value'
        }
      ],
      lastUpdated: new Date('2024-01-20T12:00:00'),
      aiOptimization: {
        id: '2',
        optimizationScore: 91,
        improvementOpportunities: ['Optimize marketing channels', 'Enhance customer retention'],
        riskFactors: ['Customer churn', 'Marketing costs'],
        recommendations: ['Improve onboarding process', 'Implement loyalty program']
      }
    }
  ]

  const mockAnalytics: BusinessIntelligenceAnalytics = {
    totalReports: 156,
    activeKPIs: 24,
    insightsGenerated: 89,
    predictionAccuracy: 94,
    topCategories: ['Financial', 'Customer', 'Operational', 'Marketing'],
    aiInsights: [
      {
        id: '1',
        title: 'Strong Financial Performance',
        description: 'All financial KPIs are exceeding targets with consistent growth trends',
        impact: 'positive',
        confidence: 0.95,
        recommendations: ['Increase investment in growth areas', 'Expand market presence']
      },
      {
        id: '2',
        title: 'Customer Satisfaction Improvement',
        description: 'Customer metrics show significant improvement across all touchpoints',
        impact: 'positive',
        confidence: 0.92,
        recommendations: ['Continue feature development', 'Enhance support systems']
      }
    ]
  }

  useEffect(() => {
    setTimeout(() => {
      setBusinessReports(mockBusinessReports)
      setKpiDashboards(mockKpiDashboards)
      setAnalytics(mockAnalytics)
      setIsLoading(false)
    }, 1000)
  }, [mockBusinessReports, mockKpiDashboards, mockAnalytics])

  const filteredReports = useMemo(() => {
    let filtered = businessReports

    if (selectedType !== 'all') {
      filtered = filtered.filter(report => report.type === selectedType)
    }

    return filtered
  }, [businessReports, selectedType])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-300'
      case 'draft': return 'bg-yellow-500/20 text-yellow-300'
      case 'archived': return 'bg-gray-500/20 text-gray-300'
      case 'scheduled': return 'bg-blue-500/20 text-blue-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500/20 text-green-300'
      case 'good': return 'bg-blue-500/20 text-blue-300'
      case 'warning': return 'bg-yellow-500/20 text-yellow-300'
      case 'critical': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400'
      case 'down': return 'text-red-400'
      case 'stable': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  const getInsightTypeColor = (type: string) => {
    switch (type) {
      case 'opportunity': return 'bg-green-500/20 text-green-300'
      case 'risk': return 'bg-red-500/20 text-red-300'
      case 'trend': return 'bg-blue-500/20 text-blue-300'
      case 'anomaly': return 'bg-yellow-500/20 text-yellow-300'
      case 'recommendation': return 'bg-purple-500/20 text-purple-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Business Intelligence & Reporting System | Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence, custom reporting, KPI tracking, and predictive analytics powered by AI." />
        <meta name="keywords" content="business intelligence, reporting, KPI, analytics, insights, AI reporting" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Business Intelligence & Reporting System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced business intelligence, custom reporting, KPI tracking, 
              and predictive analytics powered by AI for data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📊 Business Intelligence</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">📈 Custom Reporting</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎯 KPI Tracking</span>
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
                onClick={() => setActiveTab('reports')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'reports'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Business Reports ({businessReports.length})
              </button>
              <button
                onClick={() => setActiveTab('kpis')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'kpis'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                KPI Dashboards ({kpiDashboards.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Business Analytics
              </button>
            </div>

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div className="space-y-8">
                {/* Controls */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all" className="bg-slate-800">All Types</option>
                        <option value="financial" className="bg-slate-800">Financial</option>
                        <option value="operational" className="bg-slate-800">Operational</option>
                        <option value="marketing" className="bg-slate-800">Marketing</option>
                        <option value="sales" className="bg-slate-800">Sales</option>
                        <option value="customer" className="bg-slate-800">Customer</option>
                        <option value="custom" className="bg-slate-800">Custom</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      Create Report
                    </button>
                  </div>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredReports.map((report) => (
                    <div key={report.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{report.name}</h3>
                          <p className="text-gray-300 text-sm capitalize">{report.type} • {report.category}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300 text-sm">{report.description}</p>
                      </div>

                      {/* Key Metrics */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                        <div className="space-y-2">
                          {report.metrics.slice(0, 2).map((metric) => (
                            <div key={metric.id} className="bg-white/5 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-white font-semibold text-sm">{metric.name}</div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMetricStatusColor(metric.status)}`}>
                                  {metric.status}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-2xl font-bold text-white">
                                  {metric.value.toLocaleString()}
                                </div>
                                <div className={`text-sm font-semibold ${getTrendColor(metric.trend)}`}>
                                  {metric.changePercent > 0 ? '+' : ''}{metric.changePercent}%
                                </div>
                              </div>
                              <div className="text-gray-400 text-xs mt-1">
                                Target: {metric.target.toLocaleString()} {metric.unit}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Analysis</h4>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Overall Score</div>
                              <div className="text-white font-semibold">{report.aiAnalysis.overallScore}/100</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">AI Confidence</div>
                              <div className="text-white font-semibold">{Math.round(report.aiAnalysis.confidence * 100)}%</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-medium text-gray-400 mb-1">Key Findings:</div>
                            <ul className="text-xs text-gray-300 space-y-1">
                              {report.aiAnalysis.keyFindings.slice(0, 2).map((finding, index) => (
                                <li key={index}>• {finding}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Insights */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">AI Insights</h4>
                        <div className="space-y-2">
                          {report.insights.slice(0, 1).map((insight) => (
                            <div key={insight.id} className="bg-white/5 rounded-lg p-3">
                              <div className="flex items-start justify-between mb-2">
                                <div className="text-white font-semibold text-sm">{insight.title}</div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInsightTypeColor(insight.type)}`}>
                                  {insight.type}
                                </span>
                              </div>
                              <p className="text-gray-300 text-xs mb-2">{insight.description}</p>
                              <div className="text-xs text-gray-400">
                                Confidence: {Math.round(insight.confidence * 100)}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          View Report
                        </button>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300">
                          Export
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* KPIs Tab */}
            {activeTab === 'kpis' && (
              <div className="space-y-8">
                {kpiDashboards.map((dashboard) => (
                  <div key={dashboard.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{dashboard.name}</h3>
                        <p className="text-gray-300 text-sm capitalize">{dashboard.category} Performance</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Last Updated</div>
                        <div className="text-white font-semibold">{dashboard.lastUpdated.toLocaleDateString()}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {dashboard.kpis.map((kpi) => (
                        <div key={kpi.id} className="bg-white/5 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="text-white font-semibold">{kpi.name}</div>
                              <div className="text-gray-400 text-sm">{kpi.description}</div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMetricStatusColor(kpi.status)}`}>
                              {kpi.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Current</div>
                              <div className="text-2xl font-bold text-white">
                                {kpi.currentValue.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Target</div>
                              <div className="text-xl font-semibold text-white">
                                {kpi.targetValue.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">Trend</span>
                              <span className={`font-semibold ${getTrendColor(kpi.trend)}`}>
                                {kpi.trend === 'improving' ? '↗' : kpi.trend === 'declining' ? '↘' : '→'} {kpi.trend}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI Optimization */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">AI Optimization</h4>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 mb-1">Optimization Score</div>
                            <div className="text-white font-semibold">{dashboard.aiOptimization.optimizationScore}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400 mb-1">Improvement Opportunities</div>
                            <div className="text-white font-semibold">{dashboard.aiOptimization.improvementOpportunities.length}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-400 mb-1">Recommendations:</div>
                          <div className="text-xs text-gray-300">
                            {dashboard.aiOptimization.recommendations.join(', ')}
                          </div>
                        </div>
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
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalReports.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Reports</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.activeKPIs.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Active KPIs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.insightsGenerated.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Insights Generated</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">{analytics.predictionAccuracy}%</div>
                    <div className="text-gray-400 text-sm">Prediction Accuracy</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Report Accuracy</span>
                          <span className="text-white">94%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: '94%' }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">AI Confidence</span>
                          <span className="text-white">91%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                            style={{ width: '91%' }}
                          ></div>
                        </div>
                      </div>
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
              Ready to Make Data-Driven Decisions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your business intelligence journey with our AI-powered reporting system 
              and unlock insights that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-service-matcher" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Start Reporting
              </Link>
              <Link href="/talent-directory" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredBusinessIntelligencePage 