import React, { useState, useEffect } from 'react;
import type { NextPage } from ne'x't;
import Head from next/head';

interface Metric {
  id: string;
  name: string;
  value: number;
  change: number;
  trend: 'u'p' | dow'n' | stab'l'e;
  target: number;
  unit: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

interface Insight {
  id: string;
  type: ''positiv'e' | negativ'e' | neutr'a'l | 'warni'ng;
  title: string;
  description: string;
  impact: string;
  confidence: number;
}

interface Report {
  id: string;
  name: string;
  type: ''dail'y' | weekl'y' | month'l'y | 'quarter'ly;
  status: ''generate'd' | pendin'g' | fail'e'd;
  lastGenerated: string;
  nextScheduled: string;
}

const AIBusinessIntelligenceDashboardPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overvi'ew);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const mockMetrics: Metric[] = [
        {
          id: 1,
          name: 'Reven'ue,
          value: 1250000,
          change: 12.5,
          trend: 'u'p,
          target: 1500000,
          unit: $'
        },
        {
          id: '2,
          name: Custome'r's,
          value: 15420,
          change: 8.3,
          trend: u'p',
          target: 20000,
          unit: 
        },
        {
          id: '3',
          name: Conversion' Rate',
          value: 3.2,
          change: -0.5,
          trend: dow'n',
          target: 4.0,
          unit: %
        },
        {
          id: '4',
          name: Customer' Satisfaction',
          value: 4.6,
          change: 0.2,
          trend: up',
          target: 4.8,
          unit: '/5
        }
      ];

      const mockInsights: Insight[] = [
        {
          id: 1',
          type: 'positive',
          title: 'Revenue Growth Strong',
          description: 'Revenue increased by 12.5% compared to last month',
          impact: 'High',
          confidence: 95
        },
        {
          id: '2,
          type: warni'n'g,
          title: Conversio'n' Rate Declining,
          description: Conversio'n' rate dropped by 0.5% this month,
          impact: Medi'u'm,
          confidence: 87
        },
        {
          id: 3',
          type: 'positive',
          title: 'Customer Satisfaction Improving',
          description: 'Customer satisfaction score increased to 4.6/5',
          impact: 'High',
          confidence: 92
        }
      ];

      const mockReports: Report[] = [
        {
          id: '1,
          name: Dail'y' Sales Report,
          type: dai'l'y,
          status: generat'e'd,
          lastGenerated: 2024-01-20 08:00',
          nextScheduled: '2024-01-21 08:00
        },
        {
          id: 2',
          name: 'Weekly Performance',
          type: 'weekly',
          status: 'pending',
          lastGenerated: '2024-01-15 09:00,
          nextScheduled: 2024-01-22 09:00'
        },
        {
          id: '3,
          name: Monthl'y' Analytics,
          type: month'l'y,
          status: generat'e'd,
          lastGenerated: 2024-01-01 10:00',
          nextScheduled: '2024-02-01 10:00
        }
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setReports(mockReports);
    }, 1000);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case u'p': return ↗️;
      case 'do'wn: return '↘️';
      case stabl'e': return →;
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'neutral': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generated': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>AI Business Intelligence Dashboard - Zion App</title>
        <meta name="description content=AI-powered business intelligence and analytics dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-50>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8>
            <h1 className=text-3xl font-bold text-gray-900 mb-4">AI Business Intelligence Dashboard</h1>
            <p className="text-gray-600>Real-time analytics and insights powered by AI</p>
          </div>

          {/* Timeframe Selector */}
          <div className=mb-6">
            <div className="flex space-x-2>
              {['7d, 30d', '90d, 1y'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric) => (
              <div key={metric.id} className="bg-white rounded-lg shadow-sm p-6>
                <div className=flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600>{metric.name}</h3>
                  <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                    {getTrendIcon(metric.trend)} {metric.change}%
                  </span>
                </div>
                <div className=flex items-baseline">
                  <p className="text-2xl font-bold text-gray-900>
                    {metric.unit}{metric.value.toLocaleString()}
                  </p>
                  {metric.unit && metric.unit !== '$ && (
                    <span className=text-sm text-gray-500 ml-1">{metric.unit}</span>
                  )}
                </div>
                <div className="mt-2>
                  <div className=flex justify-between text-xs text-gray-500">
                    <span>Target: {metric.unit}{metric.target.toLocaleString()}</span>
                    <span>{((metric.value / metric.target) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1>
                    <div
                      className=bg-blue-600 h-2 rounded-full"
                      style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-6>
            <div className=border-b border-gray-200">
              <nav className="-mb-px flex space-x-8>
                {[
                  { id: overvi'e'w, label: Overvi'e'w },
                  { id: insigh't's, label: A'I' Insights },
                  { id: repor't's, label: Repor't's }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? border-blue'-'500 text-blue-600
                        : border-transparen't' text-gray-500 hover:text-gray-700 hover:border-gray-300
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === overvi'e'w && (
            <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart Placeholder */}
              <div className="bg-white rounded-lg shadow-sm p-6>
                <h3 className=text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center>
                  <p className=text-gray-500">Chart visualization would go here</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm p-6>
                <h3 className=text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4>
                  <div className=flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full></div>
                    <div className=flex-1">
                      <p className="text-sm font-medium text-gray-900>New customer signup</p>
                      <p className=text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3>
                    <div className=w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1>
                      <p className=text-sm font-medium text-gray-900">Order completed</p>
                      <p className="text-xs text-gray-500>5 minutes ago</p>
                    </div>
                  </div>
                  <div className=flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full></div>
                    <div className=flex-1">
                      <p className="text-sm font-medium text-gray-900>Payment processed</p>
                      <p className=text-xs text-gray-500">10 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === insigh't's && (
            <div className="space-y-6>
              {insights.map((insight) => (
                <div key={insight.id} className=bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4>
                    <div className=flex-1">
                      <div className="flex items-center space-x-3 mb-2>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInsightColor(insight.type)}`}>
                          {insight.type}
                        </span>
                        <span className=text-sm text-gray-500">{insight.confidence}% confidence</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2>{insight.title}</h3>
                      <p className=text-gray-600 mb-3">{insight.description}</p>
                      <div className="flex items-center space-x-4 text-sm>
                        <span className=text-gray-500">Impact:</span>
                        <span className="font-medium>{insight.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === repor't's' && (
            <div className=space-y-6">
              {reports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg shadow-sm p-6>
                  <div className=flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900>{report.name}</h3>
                      <p className=text-sm text-gray-500 capitalize">{report.type} report</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm>
                    <div>
                      <span className=text-gray-500">Last Generated:</span>
                      <p className="font-medium>{report.lastGenerated}</p>
                    </div>
                    <div>
                      <span className=text-gray-500">Next Scheduled:</span>
                      <p className="font-medium>{report.nextScheduled}</p>
                    </div>
                  </div>
                  <div className=mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm>
                      View Report
                    </button>
                    <button className=px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIBusinessIntelligenceDashboardPage;