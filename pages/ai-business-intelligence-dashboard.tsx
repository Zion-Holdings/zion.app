import { useState, useEffect } from 'react';
import Head from 'next/head';

interface KPI {
  id: string;
  name: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
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
  type: 'positive' | 'negative' | 'neutral' | 'warning';
  title: string;
  description: string;
  impact: string;
  recommendation: string;
  timestamp: string;
}

interface Report {
  id: string;
  name: string;
  type: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  status: 'generated' | 'pending' | 'failed';
  lastGenerated: string;
  nextScheduled: string;
}

const BusinessIntelligenceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [reports, setReports] = useState<Report[]>([]);

  // Mock KPI data
  const kpis: KPI[] = [
    {
      id: '1',
      name: 'Revenue',
      value: 1250000,
      change: 12.5,
      trend: 'up',
      target: 1500000,
      unit: '$'
    },
    {
      id: '2',
      name: 'Customer Acquisition',
      value: 1250,
      change: -2.3,
      trend: 'down',
      target: 1500,
      unit: ''
    },
    {
      id: '3',
      name: 'Conversion Rate',
      value: 3.2,
      change: 0.8,
      trend: 'up',
      target: 4.0,
      unit: '%'
    },
    {
      id: '4',
      name: 'Customer Satisfaction',
      value: 4.6,
      change: 0.2,
      trend: 'up',
      target: 4.8,
      unit: '/5'
    },
    {
      id: '5',
      name: 'Churn Rate',
      value: 2.1,
      change: -0.5,
      trend: 'down',
      target: 1.5,
      unit: '%'
    },
    {
      id: '6',
      name: 'Average Order Value',
      value: 85.50,
      change: 5.2,
      trend: 'up',
      target: 100.00,
      unit: '$'
    }
  ];

  // Mock chart data
  const revenueChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [850000, 920000, 980000, 1050000, 1150000, 1250000],
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 1)'
      }
    ]
  };

  const customerChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Customers',
        data: [1200, 1350, 1420, 1380, 1450, 1250],
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 1)'
      },
      {
        label: 'Returning Customers',
        data: [800, 920, 980, 1050, 1150, 1250],
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 1)'
      }
    ]
  };

  // Mock insights
  const mockInsights: Insight[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Revenue Growth Exceeds Target',
      description: 'Revenue has grown 12.5% this month, exceeding the target of 10%. This is primarily driven by increased customer acquisition and higher average order values.',
      impact: 'High',
      recommendation: 'Consider expanding marketing campaigns to capitalize on current momentum.',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Customer Acquisition Declining',
      description: 'New customer acquisition has decreased by 2.3% this month. This may be due to increased competition or changes in marketing strategy.',
      impact: 'Medium',
      recommendation: 'Review marketing channels and consider A/B testing new campaigns.',
      timestamp: '2024-01-14T14:20:00Z'
    },
    {
      id: '3',
      type: 'positive',
      title: 'Conversion Rate Improving',
      description: 'Website conversion rate has improved by 0.8% this month. This suggests recent UX improvements are having a positive impact.',
      impact: 'Medium',
      recommendation: 'Continue monitoring and consider implementing similar improvements across other touchpoints.',
      timestamp: '2024-01-13T09:15:00Z'
    },
    {
      id: '4',
      type: 'neutral',
      title: 'Customer Satisfaction Stable',
      description: 'Customer satisfaction score remains stable at 4.6/5. While this is good, there\'s room for improvement to reach the target of 4.8.',
      impact: 'Low',
      recommendation: 'Analyze customer feedback to identify areas for improvement.',
      timestamp: '2024-01-12T16:45:00Z'
    }
  ];

  // Mock reports
  const mockReports: Report[] = [
    {
      id: '1',
      name: 'Daily Sales Report',
      type: 'daily',
      status: 'generated',
      lastGenerated: '2024-01-15T06:00:00Z',
      nextScheduled: '2024-01-16T06:00:00Z'
    },
    {
      id: '2',
      name: 'Weekly Performance Report',
      type: 'weekly',
      status: 'generated',
      lastGenerated: '2024-01-14T08:00:00Z',
      nextScheduled: '2024-01-21T08:00:00Z'
    },
    {
      id: '3',
      name: 'Monthly Business Review',
      type: 'monthly',
      status: 'pending',
      lastGenerated: '2023-12-15T10:00:00Z',
      nextScheduled: '2024-01-15T10:00:00Z'
    },
    {
      id: '4',
      name: 'Quarterly Financial Analysis',
      type: 'quarterly',
      status: 'generated',
      lastGenerated: '2023-12-31T12:00:00Z',
      nextScheduled: '2024-03-31T12:00:00Z'
    }
  ];

  useEffect(() => {
    setInsights(mockInsights);
    setReports(mockReports);
  }, []);

  const generateReport = async (reportId: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const exportData = (format: 'pdf' | 'csv' | 'excel') => {
    // Simulate export functionality
    console.log(`Exporting data in ${format} format`);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'insights', label: 'AI Insights', icon: '🤖' },
    { id: 'reports', label: 'Reports', icon: '📋' },
    { id: 'alerts', label: 'Alerts', icon: '🔔' }
  ];

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  return (
    <>
      <Head>
        <title>AI Business Intelligence Dashboard - Zion Marketplace</title>
        <meta name="description" content="Real-time business intelligence, predictive analytics, and AI-powered insights" />
      </Head>

      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  AI Business Intelligence Dashboard
                </h1>
                <p className="text-xl text-gray-300">
                  Real-time insights, predictive analytics, and AI-powered decision making
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {timeframes.map((tf) => (
                    <option key={tf.value} value={tf.value}>
                      {tf.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => exportData('pdf')}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kpis.map((kpi) => (
                  <div key={kpi.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-semibold">{kpi.name}</h3>
                      <div className={`flex items-center space-x-1 ${
                        kpi.trend === 'up' ? 'text-green-400' : 
                        kpi.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        <span>{kpi.trend === 'up' ? '↗' : kpi.trend === 'down' ? '↘' : '→'}</span>
                        <span className="text-sm">{Math.abs(kpi.change)}%</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-white">
                        {kpi.unit}{kpi.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        Target: {kpi.unit}{kpi.target.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((kpi.value / kpi.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Revenue Trend</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📈</div>
                      <p>Interactive Revenue Chart</p>
                      <p className="text-sm">Real-time data visualization</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Customer Growth</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">👥</div>
                      <p>Interactive Customer Chart</p>
                      <p className="text-sm">New vs Returning customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Sales Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Sales</span>
                      <span className="text-white font-semibold">$1,250,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Growth Rate</span>
                      <span className="text-green-400">+12.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Top Product</span>
                      <span className="text-white">Premium Package</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Customer Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Customers</span>
                      <span className="text-white font-semibold">12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">New This Month</span>
                      <span className="text-green-400">+1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Churn Rate</span>
                      <span className="text-red-400">2.1%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-white font-semibold">3.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Order Value</span>
                      <span className="text-white">$85.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Customer Lifetime Value</span>
                      <span className="text-white">$1,250</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Predictive Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-300 mb-2">Revenue Forecast</h4>
                    <div className="text-2xl font-bold text-white mb-2">$1,450,000</div>
                    <div className="text-green-400 text-sm">+16% predicted growth</div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-2">Customer Growth</h4>
                    <div className="text-2xl font-bold text-white mb-2">14,200</div>
                    <div className="text-green-400 text-sm">+14% predicted growth</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Insights Tab */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">AI-Powered Insights</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Generate New Insights
                </button>
              </div>

              <div className="space-y-4">
                {insights.map((insight) => (
                  <div key={insight.id} className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 ${
                    insight.type === 'positive' ? 'border-green-500/20' :
                    insight.type === 'negative' ? 'border-red-500/20' :
                    insight.type === 'warning' ? 'border-yellow-500/20' :
                    'border-blue-500/20'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          insight.type === 'positive' ? 'bg-green-400' :
                          insight.type === 'negative' ? 'bg-red-400' :
                          insight.type === 'warning' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></div>
                        <h3 className="text-white font-semibold">{insight.title}</h3>
                      </div>
                      <div className="text-sm text-gray-400">
                        {new Date(insight.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{insight.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-400">Impact: <span className="text-white">{insight.impact}</span></span>
                        <span className="text-sm text-gray-400">Recommendation: <span className="text-white">{insight.recommendation}</span></span>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Automated Reports</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Create New Report
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report) => (
                  <div key={report.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold">{report.name}</h3>
                        <p className="text-gray-400 text-sm capitalize">{report.type} Report</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        report.status === 'generated' ? 'bg-green-500/20 text-green-400' :
                        report.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {report.status}
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Last Generated:</span>
                        <span className="text-white">{new Date(report.lastGenerated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Next Scheduled:</span>
                        <span className="text-white">{new Date(report.nextScheduled).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => generateReport(report.id)}
                        disabled={loading}
                        className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                      >
                        {loading ? 'Generating...' : 'Generate Now'}
                      </button>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Smart Alerts</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Configure Alerts
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <h3 className="text-white font-semibold">High Priority Alert</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Customer acquisition rate has dropped below threshold for 3 consecutive days.</p>
                  <div className="text-sm text-gray-400">Triggered 2 hours ago</div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <h3 className="text-white font-semibold">Medium Priority Alert</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Average order value is trending downward this week.</p>
                  <div className="text-sm text-gray-400">Triggered 1 day ago</div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <h3 className="text-white font-semibold">Positive Alert</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Revenue growth exceeds target by 15% this month.</p>
                  <div className="text-sm text-gray-400">Triggered 3 days ago</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BusinessIntelligenceDashboard; 