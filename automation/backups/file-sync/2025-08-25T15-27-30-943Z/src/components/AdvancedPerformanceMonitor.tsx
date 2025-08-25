import React, { useState, useRef, useEffect } from 'react';
import { 
  Activity, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Server, 
  Database, 
  Network, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Settings, 
  X, 
  Maximize2, 
  Minimize2,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Gauge,
  Target,
  Download,
  Upload,
  Thermometer,
  Battery,
  Monitor
} from 'lucide-react';

interface SystemMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: number;
  category: string;
  lastUpdated: string;
}

interface PerformanceAlert {
  id: string;
  type: 'performance' | 'scalability' | 'resource' | 'network';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  affected: string[];
  recommendations: string[];
  status: 'active' | 'acknowledged' | 'resolved';
}

interface ScalabilityMetric {
  id: string;
  name: string;
  current: number;
  capacity: number;
  utilization: number;
  growth: number;
  prediction: number;
  category: string;
  unit: string;
}

const mockSystemMetrics: SystemMetric[] = [
  {
    id: '1',
    name: 'CPU Usage',
    value: 78.5,
    unit: '%',
    threshold: 85,
    status: 'warning',
    trend: 'up',
    change: 5.2,
    category: 'Processor',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '2',
    name: 'Memory Usage',
    value: 65.3,
    unit: '%',
    threshold: 80,
    status: 'normal',
    trend: 'stable',
    change: 0.8,
    category: 'Memory',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '3',
    name: 'Disk I/O',
    value: 1250,
    unit: 'MB/s',
    threshold: 1500,
    status: 'normal',
    trend: 'down',
    change: -2.1,
    category: 'Storage',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '4',
    name: 'Network Latency',
    value: 45,
    unit: 'ms',
    threshold: 50,
    status: 'normal',
    trend: 'stable',
    change: 0.5,
    category: 'Network',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '5',
    name: 'Database Connections',
    value: 89,
    unit: 'connections',
    threshold: 100,
    status: 'warning',
    trend: 'up',
    change: 8.7,
    category: 'Database',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '6',
    name: 'Response Time',
    value: 180,
    unit: 'ms',
    threshold: 200,
    status: 'normal',
    trend: 'down',
    change: -3.2,
    category: 'Performance',
    lastUpdated: '2024-01-15T10:00:00.000Z'
  }
];

const mockPerformanceAlerts: PerformanceAlert[] = [
  {
    id: '1',
    type: 'performance',
    severity: 'medium',
    title: 'High CPU Usage Detected',
    description: 'CPU usage has exceeded 75% for the last 10 minutes, indicating potential performance degradation.',
    timestamp: '2024-01-15T10:00:00.000Z',
    affected: ['Web Server 1', 'Application Server 2'],
    recommendations: ['Scale horizontally', 'Optimize database queries', 'Review background processes'],
    status: 'active'
  },
  {
    id: '2',
    type: 'scalability',
    severity: 'high',
    title: 'Database Connection Pool Near Capacity',
    description: 'Database connection pool is at 89% capacity, approaching the maximum limit.',
    timestamp: '2024-01-15T09:45:00.000Z',
    affected: ['Database Cluster', 'Application Servers'],
    recommendations: ['Increase connection pool size', 'Implement connection pooling', 'Review connection lifecycle'],
    status: 'acknowledged'
  }
];

const mockScalabilityMetrics: ScalabilityMetric[] = [
  {
    id: '1',
    name: 'User Sessions',
    current: 15420,
    capacity: 20000,
    utilization: 77.1,
    growth: 12.3,
    prediction: 25000,
    category: 'User Load',
    unit: 'sessions'
  },
  {
    id: '2',
    name: 'API Requests',
    current: 1250000,
    capacity: 2000000,
    utilization: 62.5,
    growth: 18.7,
    prediction: 3200000,
    category: 'API Load',
    unit: 'requests/hour'
  },
  {
    id: '3',
    name: 'Data Storage',
    current: 2.8,
    capacity: 5.0,
    utilization: 56.0,
    growth: 8.5,
    prediction: 4.2,
    category: 'Storage',
    unit: 'TB'
  }
];

export function AdvancedPerformanceMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'alerts' | 'scalability' | 'analytics'>('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('1h');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showPredictions, setShowPredictions] = useState(true);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetric[]>(mockSystemMetrics);
  const [performanceAlerts, setPerformanceAlerts] = useState<PerformanceAlert[]>(mockPerformanceAlerts);
  const [scalabilityMetrics, setScalabilityMetrics] = useState<ScalabilityMetric[]>(mockScalabilityMetrics);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['all', 'Processor', 'Memory', 'Storage', 'Network', 'Database', 'Performance'];
  const timeRanges = [
    { value: '15m', label: '15 Minutes' },
    { value: '1h', label: '1 Hour' },
    { value: '6h', label: '6 Hours' },
    { value: '24h', label: '24 Hours' }
  ];

  const filteredMetrics = selectedCategory === 'all' 
    ? systemMetrics 
    : systemMetrics.filter(metric => metric.category === selectedCategory);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-green-500 text-white';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'high':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-green-500 rotate-180" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Processor':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Memory':
        return <HardDrive className="w-5 h-5 text-green-500" />;
      case 'Storage':
        return <HardDrive className="w-5 h-5 text-purple-500" />;
      case 'Network':
        return <Network className="w-5 h-5 text-orange-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 80) return 'text-red-600';
    if (utilization >= 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        title="Open Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Activity className="w-5 h-5 text-zion-blue" />
          <span className="text-sm font-medium text-zion-slate">Performance</span>
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
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Performance & Scalability Monitor</h2>
            <p className="text-sm opacity-90">Real-time System Metrics & Performance Analytics</p>
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
              className="px-4 py-2 bg-zion-blue text-white rounded-lg hover:bg-zion-blue/90 transition-colors disabled:opacity-50 flex items-center gap-2"
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
            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { id: 'overview', label: 'Overview', icon: Activity },
          { id: 'metrics', label: 'System Metrics', icon: BarChart3 },
          { id: 'alerts', label: 'Performance Alerts', icon: AlertTriangle },
          { id: 'scalability', label: 'Scalability', icon: TrendingUp },
          { id: 'analytics', label: 'Analytics', icon: Zap }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-zion-blue text-zion-blue bg-zion-blue/5'
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
            {/* System Health Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemMetrics.slice(0, 6).map(metric => (
                <div
                  key={metric.id}
                  className="p-4 rounded-xl border border-zion-slate-light bg-white dark:bg-zion-slate hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(metric.category)}
                      <h3 className="font-semibold text-zion-slate text-sm">{metric.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-zion-slate mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${
                      metric.trend === 'up' ? 'text-red-600' : 
                      metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {metric.trend === 'up' ? '+' : ''}{metric.change}%
                    </span>
                    <span className="text-zion-slate-light">
                      Threshold: {metric.threshold}{metric.unit}
                    </span>
                  </div>
                  {showPredictions && (
                    <div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                      <div className="text-xs text-zion-slate-light">
                        Predicted: {metric.value * (1 + metric.change / 100)}{metric.unit}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-blue/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-blue" />
                  System Health Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Overall Health</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                      Good
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Active Alerts</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">
                      {performanceAlerts.filter(a => a.status === 'active').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate">Last Updated</span>
                    <span className="text-sm text-zion-slate-light">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-zion-green/10 to-zion-emerald/10 p-6 rounded-xl border border-zion-green/20">
                <h3 className="font-semibold text-zion-slate mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-zion-green" />
                  Scalability Overview
                </h3>
                <div className="space-y-3">
                  {scalabilityMetrics.slice(0, 3).map(metric => (
                    <div key={metric.id} className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate">{metric.name}</span>
                      <span className={`text-sm font-medium ${getUtilizationColor(metric.utilization)}`}>
                        {metric.utilization}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4">
            {filteredMetrics.map(metric => (
              <div
                key={metric.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {getCategoryIcon(metric.category)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Current Value:</span>
                        <div className="font-semibold text-zion-slate">{metric.value}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Threshold:</span>
                        <div className="font-semibold text-zion-slate">{metric.threshold}{metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Change:</span>
                        <div className={`font-semibold ${
                          metric.change > 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Last Updated:</span>
                        <div className="font-semibold text-zion-slate">
                          {new Date(metric.lastUpdated).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-4">
            {performanceAlerts.map(alert => (
              <div
                key={alert.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-zion-orange/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-zion-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{alert.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.status === 'active' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        alert.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{alert.description}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Affected Systems:</h4>
                      <div className="flex flex-wrap gap-2">
                        {alert.affected.map((system, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-orange/10 text-zion-orange rounded-full text-xs border border-zion-orange/20"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-medium text-zion-slate mb-2">Recommendations:</h4>
                      <div className="space-y-1">
                        {alert.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-orange rounded-full"></span>
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Time: {new Date(alert.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'scalability' && (
          <div className="space-y-4">
            {scalabilityMetrics.map(metric => (
              <div
                key={metric.id}
                className="p-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-zion-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-zion-slate">{metric.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUtilizationColor(metric.utilization)}`}>
                        {metric.utilization}% utilized
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Current:</span>
                        <div className="font-semibold text-zion-slate">{metric.current.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Capacity:</span>
                        <div className="font-semibold text-zion-slate">{metric.capacity.toLocaleString()} {metric.unit}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Growth:</span>
                        <div className="font-semibold text-zion-slate">{metric.growth}%</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Prediction:</span>
                        <div className="font-semibold text-zion-slate">{metric.prediction.toLocaleString()} {metric.unit}</div>
                      </div>
                    </div>
                    {showPredictions && (
                      <div className="mt-3 pt-3 border-t border-zion-slate-light/30">
                        <div className="text-xs text-zion-slate-light">
                          Based on current growth rate, capacity will be reached in approximately{' '}
                          {Math.ceil((metric.capacity - metric.current) / (metric.current * metric.growth / 100))} days
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="text-center text-zion-slate-light">
              <Zap className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p>Advanced performance analytics and predictive insights coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}