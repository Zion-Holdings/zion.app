import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Clock,
  Server,
  Network
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: string | number;
  unit?: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
}

interface SystemStatus {
  uptime: string;
  responseTime: number;
  errorRate: number;
  throughput: number;
  lastUpdated: Date;
}

const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    uptime: '99.99%',
    responseTime: 45,
    errorRate: 0.01,
    throughput: 1250,
    lastUpdated: new Date()
  });

  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: 'System Uptime',
      value: '99.99%',
      status: 'healthy',
      trend: 'stable',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      name: 'Response Time',
      value: 45,
      unit: 'ms',
      status: 'healthy',
      trend: 'down',
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: 'Error Rate',
      value: 0.01,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'Throughput',
      value: 1250,
      unit: 'req/s',
      status: 'healthy',
      trend: 'up',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      name: 'CPU Usage',
      value: 23,
      unit: '%',
      status: 'healthy',
      trend: 'stable',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      name: 'Memory Usage',
      value: 67,
      unit: '%',
      status: 'warning',
      trend: 'up',
      icon: <Database className="w-5 h-5" />
    },
    {
      name: 'Network Latency',
      value: 12,
      unit: 'ms',
      status: 'healthy',
      trend: 'down',
      icon: <Network className="w-5 h-5" />
    },
    {
      name: 'Active Connections',
      value: 847,
      status: 'healthy',
      trend: 'up',
      icon: <Server className="w-5 h-5" />
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => ({
          ...metric,
          value: metric.name === 'Response Time' 
            ? Math.max(20, Math.min(80, metric.value as number + (Math.random() - 0.5) * 10))
            : metric.name === 'CPU Usage'
            ? Math.max(15, Math.min(35, metric.value as number + (Math.random() - 0.5) * 5))
            : metric.name === 'Memory Usage'
            ? Math.max(60, Math.min(75, metric.value as number + (Math.random() - 0.5) * 3))
            : metric.value,
          status: getStatusForMetric(metric.name, metric.value as number),
          trend: getTrendForMetric(metric.name, metric.value as number)
        }))
      );
      
      setSystemStatus(prev => ({
        ...prev,
        responseTime: Math.max(20, Math.min(80, prev.responseTime + (Math.random() - 0.5) * 10)),
        errorRate: Math.max(0.001, Math.min(0.05, prev.errorRate + (Math.random() - 0.5) * 0.01)),
        throughput: Math.max(1000, Math.min(1500, prev.throughput + (Math.random() - 0.5) * 100)),
        lastUpdated: new Date()
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusForMetric = (_name: string, value: number): 'healthy' | 'warning' | 'critical' => {
    if (value < 50) return 'healthy';
    if (value < 70) return 'warning';
    return 'critical';
  };

  const getTrendForMetric = (_name: string, _value: number): 'up' | 'down' | 'stable' => {
    // This would normally compare with previous values
    return Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-blue-400';
      case 'stable': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4" />;
      case 'down': return <TrendingUp className="w-4 h-4 transform rotate-180" />;
      case 'stable': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Collapsed View */}
      {!isExpanded && (
        <motion.button
          onClick={() => setIsExpanded(true)}
          className="group p-4 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Activity className="w-6 h-6 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">System Health</p>
              <p className="text-xs text-gray-400">All systems operational</p>
            </div>
          </div>
        </motion.button>
      )}

      {/* Expanded Dashboard */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-96 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Performance Dashboard</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <span className="text-gray-400 hover:text-white">×</span>
                </button>
              </div>
              
              {/* System Status Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                  <p className="text-2xl font-bold text-green-400">{systemStatus.uptime}</p>
                  <p className="text-xs text-gray-400">Uptime</p>
                </div>
                <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-400">{systemStatus.responseTime}ms</p>
                  <p className="text-xs text-gray-400">Response Time</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.slice(0, 8).map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${getStatusColor(metric.status)}`}>
                        {metric.icon}
                      </div>
                      <div className={`flex items-center space-x-1 ${getTrendColor(metric.trend)}`}>
                        {getTrendIcon(metric.trend)}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-white mb-1">{metric.name}</p>
                    <p className="text-lg font-bold text-gray-200">
                      {typeof metric.value === 'number' && metric.value < 1 
                        ? metric.value.toFixed(3) 
                        : metric.value}
                      {metric.unit && <span className="text-sm text-gray-400 ml-1">{metric.unit}</span>}
                    </p>
                    <div className={`mt-2 text-xs ${getStatusColor(metric.status)}`}>
                      {metric.status === 'healthy' && '✓ Optimal'}
                      {metric.status === 'warning' && '⚠ Warning'}
                      {metric.status === 'critical' && '✗ Critical'}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Last Updated */}
              <div className="text-center text-xs text-gray-500">
                Last updated: {systemStatus.lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PerformanceDashboard;