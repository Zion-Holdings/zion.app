import React, { useState, useRef, useEffect } from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Brain, 
  Zap, 
  Target, 
  AlertTriangle, 
  Download, 
  RefreshCw, 
  Settings, 
  X, 
  Maximize2, 
  Minimize2,
  Eye,
  EyeOff,
  Filter,
  Search,
  Calendar,
  DollarSign,
  Users,
  Activity
} from 'lucide-react';

interface BusinessMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  category: string;
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
}

interface AIInsight {
  id: string;
  type: 'prediction' | 'anomaly' | 'opportunity' | 'risk';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  category: string;
  timestamp: string;
  actionable: boolean;
  actions: string[];
}

interface PredictiveModel {
  id: string;
  name: string;
  accuracy: number;
  lastTrained: string;
  status: 'active' | 'training' | 'needs_update';
  predictions: number;
  category: string;
}

const mockMetrics: BusinessMetric[] = [
  {
    id: 'revenue',
    name: 'Monthly Revenue',
    value: 2847500,
    target: 3000000,
    unit: 'USD',
    trend: 'up',
    change: 8.5,
    category: 'Financial',
    priority: 'high',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: 'customers',
    name: 'Active Customers',
    value: 15420,
    target: 15000,
    unit: 'Users',
    trend: 'up',
    change: 12.3,
    category: 'Customer',
    priority: 'high',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: 'satisfaction',
    name: 'Customer Satisfaction',
    value: 94.2,
    target: 90,
    unit: '%',
    trend: 'up',
    change: 2.1,
    category: 'Customer',
    priority: 'medium',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: 'efficiency',
    name: 'Operational Efficiency',
    value: 87.5,
    target: 85,
    unit: '%',
    trend: 'up',
    change: 1.8,
    category: 'Operations',
    priority: 'medium',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: 'costs',
    name: 'Operating Costs',
    value: 1250000,
    target: 1200000,
    unit: 'USD',
    trend: 'down',
    change: -3.2,
    category: 'Financial',
    priority: 'high',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  }
];

const mockInsights: AIInsight[] = [
  {
    id: 'insight-1',
    type: 'prediction',
    title: 'Revenue Growth Prediction',
    description: 'Based on current trends, monthly revenue is predicted to reach $3.2M by Q2 2024, representing a 15% increase.',
    confidence: 87,
    impact: 'high',
    category: 'Financial',
    timestamp: '2024-01-15T10:00:00.000Z',
    actionable: true,
    actions: ['Increase marketing budget', 'Optimize pricing strategy', 'Expand sales team']
  },
  {
    id: 'insight-2',
    type: 'anomaly',
    title: 'Customer Churn Anomaly',
    description: 'Unusual spike in customer churn rate detected in the SaaS segment. 23% higher than historical average.',
    confidence: 92,
    impact: 'high',
    category: 'Customer',
    timestamp: '2024-01-15T09:30:00.000Z',
    actionable: true,
    actions: ['Investigate customer feedback', 'Review product updates', 'Enhance support response']
  },
  {
    id: 'insight-3',
    type: 'opportunity',
    title: 'Market Expansion Opportunity',
    description: 'AI analysis suggests high potential for expansion into the APAC region with estimated 40% market opportunity.',
    confidence: 78,
    impact: 'medium',
    category: 'Growth',
    timestamp: '2024-01-15T08:45:00.000Z',
    actionable: true,
    actions: ['Conduct market research', 'Develop localization strategy', 'Establish partnerships']
  }
];

const mockModels: PredictiveModel[] = [
  {
    id: 'model-1',
    name: 'Customer Lifetime Value Predictor',
    accuracy: 94.2,
    lastTrained: '2024-01-10T00:00:00.000Z',
    status: 'active',
    predictions: 15420,
    category: 'Customer Analytics'
  },
  {
    id: 'model-2',
    name: 'Revenue Forecasting Model',
    accuracy: 89.7,
    lastTrained: '2024-01-08T00:00:00.000Z',
    status: 'active',
    predictions: 2847500,
    category: 'Financial Analytics'
  },
  {
    id: 'model-3',
    name: 'Churn Prediction Model',
    accuracy: 91.5,
    lastTrained: '2024-01-12T00:00:00.000Z',
    status: 'training',
    predictions: 15420,
    category: 'Customer Analytics'
  }
];

export function AdvancedBusinessIntelligence() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'models' | 'analytics'>('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showPredictions, setShowPredictions] = useState(true);
  const [data, setData] = useState<BusinessMetric[]>(mockMetrics);
  const [insights, setInsights] = useState<AIInsight[]>(mockInsights);
  const [models, setModels] = useState<PredictiveModel[]>(mockModels);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'Financial', 'Customer', 'Operations', 'Growth'];
  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const filteredMetrics = selectedCategory === 'all' 
    ? data 
    : data.filter(metric => metric.category === selectedCategory);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'prediction':
        return <Brain className="w-5 h-5 text-blue-500" />;
      case 'anomaly':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'opportunity':
        return <Target className="w-5 h-5 text-green-500" />;
      case 'risk':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Zap className="w-5 h-5 text-purple-500" />;
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
    }
    if (unit === '%') {
      return `${value.toFixed(1)}%`;
    }
    return new Intl.NumberFormat('en-US').format(value);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        title="Open Business Intelligence Dashboard"
      >
        <Brain className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Brain className="w-5 h-5 text-zion-purple" />
          <span className="text-sm font-medium text-zion-slate">BI Dashboard</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1200px] h-[800px]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Business Intelligence</h2>
            <p className="text-sm opacity-90">AI-Powered Insights & Analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-2 rounded-lg transition-colors ${
              autoRefresh ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate"
            >
              {timeRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-zion-slate">
              <input
                type="checkbox"
                checked={showPredictions}
                onChange={(e) => setShowPredictions(e.target.checked)}
                className="rounded"
              />
              Show Predictions
            </label>
            <button className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'insights', label: 'AI Insights', icon: Brain },
          { id: 'models', label: 'ML Models', icon: Zap },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zion-purple text-zion-purple bg-zion-purple/5'
                  : 'border-transparent text-zion-slate-light hover:text-zion-slate hover:bg-zion-slate-light/20'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto h-[calc(100%-200px)]">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMetrics.map(metric => (
                <div
                  key={metric.id}
                  className={`p-4 rounded-xl border-2 ${getPriorityColor(metric.priority)} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {formatValue(metric.value, metric.unit)}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Target: {formatValue(metric.target, metric.unit)}
                    </span>
                  </div>
                  {showPredictions && (
                    <div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                      <div className="text-xs text-zion-slate-light">
                        AI Prediction: {formatValue(metric.value * (1 + metric.change / 100), metric.unit)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 p-4 rounded-xl border border-zion-cyan/20">
              <h3 className="font-semibold text-zion-slate mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-zion-cyan" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Generate Report', icon: Download, action: () => {} },
                  { label: 'Schedule Review', icon: Calendar, action: () => {} },
                  { label: 'Set Alerts', icon: AlertTriangle, action: () => {} },
                  { label: 'Export Data', icon: Download, action: () => {} }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className="p-3 bg-white dark:bg-zion-slate rounded-lg border border-zion-slate-light hover:border-zion-cyan transition-colors text-sm font-medium text-zion-slate hover:text-zion-cyan"
                    >
                      <Icon className="w-4 h-4 mx-auto mb-2" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-4">
            {insights.map(insight => (
              <div
                key={insight.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{insight.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        insight.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {insight.impact} Impact
                      </span>
                      <span className="text-sm text-zion-slate-light">
                        {insight.confidence}% confidence
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{insight.description}</p>
                    {insight.actionable && (
                      <div>
                        <h4 className="font-medium text-zion-slate mb-2">Recommended Actions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {insight.actions.map((action, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm border border-zion-cyan/20"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'models' && (
          <div className="space-y-4">
            {models.map(model => (
              <div
                key={model.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-zion-slate">{model.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    model.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                    model.status === 'training' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {model.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Accuracy:</span>
                    <div className="font-semibold text-zion-slate">{model.accuracy}%</div>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Category:</span>
                    <div className="font-semibold text-zion-slate">{model.category}</div>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Last Trained:</span>
                    <div className="font-semibold text-zion-slate">
                      {new Date(model.lastTrained).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Predictions:</span>
                    <div className="font-semibold text-zion-slate">
                      {new Intl.NumberFormat('en-US').format(model.predictions)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p>Detailed analytics and custom reports coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}