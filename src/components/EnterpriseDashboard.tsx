import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Server, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3,
  PieChart,
  LineChart,
  TrendingDown,
  Clock3,
  RefreshCw,
  Loader2
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface SystemMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  trend: 'up' | 'down' | 'stable';
  change: number;
  threshold: {
    warning: number;
    critical: number;
  };
  lastUpdated: Date;
}

interface ServiceStatus {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'degraded' | 'maintenance';
  uptime: number;
  responseTime: number;
  errorRate: number;
  lastIncident?: {
    type: string;
    timestamp: Date;
    resolved: boolean;
  };
}

interface SecurityAlert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'intrusion' | 'malware' | 'data_breach' | 'access_violation' | 'anomaly';
  title: string;
  description: string;
  timestamp: Date;
  status: 'new' | 'investigating' | 'resolved' | 'false_positive';
  affected: string[];
  source: string;
}

interface UserActivity {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  status: 'success' | 'failure' | 'pending';
}

export const EnterpriseDashboard: React.FC = () => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'security' | 'users' | 'services' | 'analytics'>('overview');
  const [refreshInterval, setRefreshInterval] = useState(30000); // 30 seconds
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dateRange, setDateRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock data - in production, this would come from real-time APIs
  const [systemMetrics] = useState<SystemMetric[]>([
    {
      id: 'cpu',
      name: 'CPU Usage',
      value: 45,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      change: 2,
      threshold: { warning: 70, critical: 90 },
      lastUpdated: new Date()
    },
    {
      id: 'memory',
      name: 'Memory Usage',
      value: 78,
      unit: '%',
      status: 'warning',
      trend: 'up',
      change: 8,
      threshold: { warning: 75, critical: 90 },
      lastUpdated: new Date()
    },
    {
      id: 'disk',
      name: 'Disk Usage',
      value: 65,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      change: 1,
      threshold: { warning: 80, critical: 95 },
      lastUpdated: new Date()
    },
    {
      id: 'network',
      name: 'Network Load',
      value: 32,
      unit: 'Mbps',
      status: 'healthy',
      trend: 'down',
      change: -5,
      threshold: { warning: 100, critical: 150 },
      lastUpdated: new Date()
    }
  ]);

  const [serviceStatuses] = useState<ServiceStatus[]>([
    {
      id: 'web-server',
      name: 'Web Server',
      status: 'online',
      uptime: 99.98,
      responseTime: 45,
      errorRate: 0.02
    },
    {
      id: 'database',
      name: 'Database',
      status: 'online',
      uptime: 99.95,
      responseTime: 12,
      errorRate: 0.01
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      status: 'degraded',
      uptime: 99.87,
      responseTime: 89,
      errorRate: 0.15
    },
    {
      id: 'cache-server',
      name: 'Cache Server',
      status: 'online',
      uptime: 99.99,
      responseTime: 2,
      errorRate: 0.001
    }
  ]);

  const [securityAlerts] = useState<SecurityAlert[]>([
    {
      id: 'alert-1',
      severity: 'medium',
      type: 'anomaly',
      title: 'Unusual Login Pattern Detected',
      description: 'Multiple login attempts from different locations within short time frame',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      status: 'investigating',
      affected: ['user-123', 'user-456'],
      source: 'Security Monitoring System'
    },
    {
      id: 'alert-2',
      severity: 'low',
      type: 'access_violation',
      title: 'Failed Authentication Attempt',
      description: 'User attempted to access restricted resource without proper permissions',
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      status: 'resolved',
      affected: ['user-789'],
      source: 'Access Control System'
    }
  ]);

  const [userActivities] = useState<UserActivity[]>([
    {
      id: 'activity-1',
      userId: 'user-123',
      userName: 'John Doe',
      action: 'login',
      resource: 'dashboard',
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome/91.0.4472.124',
      status: 'success'
    },
    {
      id: 'activity-2',
      userId: 'user-456',
      userName: 'Jane Smith',
      action: 'data_export',
      resource: 'reports',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      ipAddress: '192.168.1.101',
      userAgent: 'Firefox/89.0.2',
      status: 'success'
    }
  ]);

  // Refresh data
  const refreshData = useCallback(async () => {
    setIsRefreshing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update timestamps (simplified for demo)
      const now = new Date();
      console.log('Data refreshed at:', now.toLocaleTimeString());
      
      trackEvent('enterprise_dashboard', 'data_refreshed', 'manual', undefined, { 
        tab: activeTab,
        dateRange 
      });
      
    } catch (error) {
      console.error('Failed to refresh data:', error);
      trackEvent('enterprise_dashboard', 'refresh_failed', 'error', undefined, { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    } finally {
      setIsRefreshing(false);
    }
  }, [activeTab, dateRange, trackEvent]);

  // Auto-refresh effect
  useEffect(() => {
    const interval = setInterval(refreshData, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval, refreshData]);

  // Filtered data
  const filteredSecurityAlerts = useMemo(() => {
    let filtered = securityAlerts;
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(alert => alert.status === filterStatus);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(alert => 
        alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [securityAlerts, filterStatus, searchQuery]);

  const filteredUserActivities = useMemo(() => {
    let filtered = userActivities;
    
    if (searchQuery) {
      filtered = filtered.filter(activity => 
        activity.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.resource.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [userActivities, searchQuery]);

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'online':
      case 'success':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'warning':
      case 'degraded':
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'critical':
      case 'offline':
      case 'failure':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      case 'maintenance':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      case 'high':
        return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'low':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Activity className="w-8 h-8" />
            Enterprise Dashboard
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Server className="w-4 h-4" />
              Production
            </div>
          </h2>
          
          <div className="flex items-center gap-3">
            <select
              value={refreshInterval / 1000}
              onChange={(e) => setRefreshInterval(Number(e.target.value) * 1000)}
              className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors"
            >
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>1m</option>
              <option value={300}>5m</option>
            </select>
            
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {isRefreshing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8 px-6">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'performance', label: 'Performance', icon: TrendingUp },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'services', label: 'Services', icon: Server },
            { id: 'analytics', label: 'Analytics', icon: PieChart }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === id
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* System Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {systemMetrics.map((metric) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {metric.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                    </div>
                    
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {metric.value}{metric.unit}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`flex items-center gap-1 ${
                        metric.trend === 'up' ? 'text-red-600' :
                        metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> :
                         metric.trend === 'down' ? <TrendingDown className="w-4 h-4" /> :
                         <Clock3 className="w-4 h-4" />}
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                      <span className="text-gray-500">
                        {metric.lastUpdated.toLocaleTimeString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service Status Overview */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Service Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceStatuses.map((service) => (
                    <div key={service.id} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'online' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' :
                        service.status === 'offline' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {service.uptime}% uptime
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {service.responseTime}ms
                        </div>
                        <div className="text-xs text-gray-500">
                          {service.errorRate}% errors
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Security Alerts */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Security Alerts
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {securityAlerts.filter(a => a.status === 'new').length} new
                  </span>
                </div>
                <div className="space-y-3">
                  {securityAlerts.slice(0, 3).map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'critical' ? 'bg-red-500' :
                        alert.severity === 'high' ? 'bg-orange-500' :
                        alert.severity === 'medium' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {alert.title}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {alert.description}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{alert.timestamp.toLocaleTimeString()}</span>
                          <span>{alert.source}</span>
                          <span className={`px-2 py-1 rounded ${getStatusColor(alert.status)}`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Performance Monitoring
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Real-time performance metrics and system health monitoring
                </p>
              </div>

              {/* Performance Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">CPU & Memory Usage</h4>
                  <div className="h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Response Time & Throughput</h4>
                  <div className="h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Performance Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Security Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search security alerts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="investigating">Investigating</option>
                  <option value="resolved">Resolved</option>
                  <option value="false_positive">False Positive</option>
                </select>
              </div>

              {/* Security Alerts */}
              <div className="space-y-4">
                {filteredSecurityAlerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-sm rounded-full ${getSeverityColor(alert.severity)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                        <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                          {alert.type.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {alert.timestamp.toLocaleString()}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {alert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {alert.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Source:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{alert.source}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Affected:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{alert.affected.length} items</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Time:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">
                          {Math.round((Date.now() - alert.timestamp.getTime()) / (1000 * 60))}m ago
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* User Activity Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search user activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="1h">Last Hour</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
              </div>

              {/* User Activities */}
              <div className="space-y-4">
                {filteredUserActivities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {activity.userName}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {activity.action} • {activity.resource}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          {activity.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div>
                        <span className="font-medium">IP:</span> {activity.ipAddress}
                      </div>
                      <div>
                        <span className="font-medium">Browser:</span> {activity.userAgent.split('/')[0]}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {activity.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <Server className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Service Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monitor and manage all system services
                </p>
              </div>

              {/* Service Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceStatuses.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.name}
                      </h4>
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Uptime</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {service.uptime}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Response Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {service.responseTime}ms
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Error Rate</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {service.errorRate}%
                        </span>
                      </div>
                    </div>
                    
                    {service.lastIncident && (
                      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                          Last Incident
                        </div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300">
                          {service.lastIncident.type} - {service.lastIncident.timestamp.toLocaleDateString()}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-8">
                <PieChart className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive analytics and business intelligence
                </p>
              </div>

              {/* Analytics Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">System Health Overview</h4>
                  <div className="h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <PieChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Trend Analysis</h4>
                  <div className="h-64 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-2" />
                      <p>Analytics Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};