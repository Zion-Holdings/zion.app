import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, 
  Cpu, HardDrive, Wifi, Server, Database, Globe, BarChart3,
  RefreshCw, Settings, Eye, EyeOff, X
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  responseTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorRate: number;
  uptime: number;
  activeConnections: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    responseTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    uptime: 0,
    activeConnections: 0
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  const [showAlerts, setShowAlerts] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Simulate performance metrics
  const generateMockMetrics = useCallback((): PerformanceMetrics => {
    const baseLoadTime = 120 + Math.random() * 80;
    const baseResponseTime = 45 + Math.random() * 30;
    const baseMemoryUsage = 65 + Math.random() * 20;
    const baseCpuUsage = 40 + Math.random() * 35;
    const baseNetworkLatency = 15 + Math.random() * 25;
    const baseErrorRate = Math.random() * 2;
    const uptime = Date.now() - startTimeRef.current;
    const activeConnections = 150 + Math.random() * 100;

    return {
      loadTime: Math.round(baseLoadTime),
      responseTime: Math.round(baseResponseTime),
      memoryUsage: Math.round(baseMemoryUsage),
      cpuUsage: Math.round(baseCpuUsage),
      networkLatency: Math.round(baseNetworkLatency),
      errorRate: Math.round(baseErrorRate * 100) / 100,
      uptime: Math.floor(uptime / 1000),
      activeConnections: Math.round(activeConnections)
    };
  }, []);

  // Generate performance alerts
  const generateAlerts = useCallback((currentMetrics: PerformanceMetrics): PerformanceAlert[] => {
    const newAlerts: PerformanceAlert[] = [];
    const now = new Date();

    if (currentMetrics.loadTime > 180) {
      newAlerts.push({
        id: `load-${Date.now()}`,
        type: 'warning',
        message: `High load time detected: ${currentMetrics.loadTime}ms`,
        timestamp: now,
        severity: currentMetrics.loadTime > 250 ? 'high' : 'medium'
      });
    }

    if (currentMetrics.memoryUsage > 80) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `High memory usage: ${currentMetrics.memoryUsage}%`,
        timestamp: now,
        severity: currentMetrics.memoryUsage > 90 ? 'high' : 'medium'
      });
    }

    if (currentMetrics.cpuUsage > 75) {
      newAlerts.push({
        id: `cpu-${Date.now()}`,
        message: `High CPU usage: ${currentMetrics.cpuUsage}%`,
        timestamp: now,
        severity: currentMetrics.cpuUsage > 90 ? 'high' : 'medium',
        type: 'warning'
      });
    }

    if (currentMetrics.errorRate > 1.5) {
      newAlerts.push({
        id: `error-${Date.now()}`,
        type: 'error',
        message: `High error rate: ${currentMetrics.errorRate}%`,
        timestamp: now,
        severity: 'high'
      });
    }

    return newAlerts;
  }, []);

  // Update metrics
  const updateMetrics = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const newMetrics = generateMockMetrics();
      setMetrics(newMetrics);
      
      // Generate and add new alerts
      const newAlerts = generateAlerts(newMetrics);
      if (newAlerts.length > 0) {
        setAlerts(prev => [...newAlerts, ...prev].slice(0, 10)); // Keep last 10 alerts
      }
    } catch (error) {
      console.error('Failed to update metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockMetrics, generateAlerts]);

  // Initialize metrics
  useEffect(() => {
    updateMetrics();
    setIsVisible(true);
  }, [updateMetrics]);

  // Auto-refresh setup
  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(updateMetrics, refreshInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, refreshInterval, updateMetrics]);

  // Format uptime
  const formatUptime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get status color
  const getStatusColor = (value: number, thresholds: { warning: number; critical: number }): string => {
    if (value >= thresholds.critical) return 'text-red-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-green-400';
  };

  // Get status icon
  const getStatusIcon = (value: number, thresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return <AlertTriangle className="w-4 h-4 text-red-400" />;
    if (value >= thresholds.warning) return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    return <CheckCircle className="w-4 h-4 text-green-400" />;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50"
        >
          {/* Compact View */}
          {!isExpanded && (
            <motion.button
              onClick={() => setIsExpanded(true)}
              className="group bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  {alerts.some(alert => alert.severity === 'high') && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  )}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">Performance</div>
                  <div className="text-xs text-gray-400">Monitoring Active</div>
                </div>
                <Settings className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.button>
          )}

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 w-80 max-h-96 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-medium">Performance Monitor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowAlerts(!showAlerts)}
                      className="p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                      title={showAlerts ? 'Hide alerts' : 'Show alerts'}
                    >
                      {showAlerts ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                      title="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Load Time</span>
                        {getStatusIcon(metrics.loadTime, { warning: 180, critical: 250 })}
                      </div>
                      <div className={`text-lg font-bold ${getStatusColor(metrics.loadTime, { warning: 180, critical: 250 })}`}>
                        {metrics.loadTime}ms
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Response</span>
                        {getStatusIcon(metrics.responseTime, { warning: 60, critical: 100 })}
                      </div>
                      <div className={`text-lg font-bold ${getStatusColor(metrics.responseTime, { warning: 60, critical: 100 })}`}>
                        {metrics.responseTime}ms
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Memory</span>
                        {getStatusIcon(metrics.memoryUsage, { warning: 80, critical: 90 })}
                      </div>
                      <div className={`text-lg font-bold ${getStatusColor(metrics.memoryUsage, { warning: 80, critical: 90 })}`}>
                        {metrics.memoryUsage}%
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">CPU</span>
                        {getStatusIcon(metrics.cpuUsage, { warning: 75, critical: 90 })}
                      </div>
                      <div className={`text-lg font-bold ${getStatusColor(metrics.cpuUsage, { warning: 75, critical: 90 })}`}>
                        {metrics.cpuUsage}%
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Network Latency</span>
                      <span className="text-white">{metrics.networkLatency}ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Error Rate</span>
                      <span className="text-white">{metrics.errorRate}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white">{formatUptime(metrics.uptime)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Active Connections</span>
                      <span className="text-white">{metrics.activeConnections}</span>
                    </div>
                  </div>

                  {/* Alerts */}
                  {showAlerts && alerts.length > 0 && (
                    <div className="border-t border-cyan-500/20 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-white">Recent Alerts</span>
                        <span className="text-xs text-gray-400">{alerts.length}</span>
                      </div>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {alerts.slice(0, 5).map((alert) => (
                          <div
                            key={alert.id}
                            className={`p-2 rounded-lg text-xs ${
                              alert.type === 'error' ? 'bg-red-500/20 border border-red-500/30' :
                              alert.type === 'warning' ? 'bg-yellow-500/20 border border-yellow-500/30' :
                              'bg-blue-500/20 border border-blue-500/30'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`font-medium ${
                                alert.type === 'error' ? 'text-red-300' :
                                alert.type === 'warning' ? 'text-yellow-300' :
                                'text-blue-300'
                              }`}>
                                {alert.message}
                              </span>
                              <span className="text-gray-400">
                                {alert.timestamp.toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-cyan-500/20 bg-gray-900/50">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="autoRefresh"
                      checked={autoRefresh}
                      onChange={(e) => setAutoRefresh(e.target.checked)}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <label htmlFor="autoRefresh" className="text-xs text-gray-400">
                      Auto-refresh
                    </label>
                  </div>
                  
                  <button
                    onClick={updateMetrics}
                    disabled={isLoading}
                    className="flex items-center space-x-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                    <span className="text-xs">Refresh</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedPerformanceMonitor;