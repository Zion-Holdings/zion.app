import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity
} from 'lucide-react';

interface Metric {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  change: number;
  status: 'good' | 'warning' | 'critical';
  icon: React.ComponentType<any>;
  description: string;
  trend: 'up' | 'down' | 'stable';
}

const PerformanceMetrics: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Memoize metrics data for better performance
  const metrics = useMemo((): Metric[] => [
    {
      id: 'uptime',
      name: 'System Uptime',
      value: '99.99',
      unit: '%',
      change: 0.01,
      status: 'good',
      icon: CheckCircle,
      description: 'Current system availability',
      trend: 'up'
    },
    {
      id: 'response',
      name: 'Response Time',
      value: '12',
      unit: 'ms',
      change: -2,
      status: 'good',
      icon: Zap,
      description: 'Average API response time',
      trend: 'up'
    },
    {
      id: 'throughput',
      name: 'Throughput',
      value: '2.4',
      unit: 'M req/s',
      change: 0.3,
      status: 'good',
      icon: TrendingUp,
      description: 'Requests processed per second',
      trend: 'up'
    },
    {
      id: 'security',
      name: 'Security Score',
      value: '98.5',
      unit: '/100',
      change: 1.2,
      status: 'good',
      icon: Shield,
      description: 'Overall security rating',
      trend: 'up'
    },
    {
      id: 'latency',
      name: 'Global Latency',
      value: '45',
      unit: 'ms',
      change: -5,
      status: 'good',
      icon: Globe,
      description: 'Average global response time',
      trend: 'up'
    },
    {
      id: 'cpu',
      name: 'CPU Usage',
      value: '23',
      unit: '%',
      change: -2,
      status: 'good',
      icon: Cpu,
      description: 'Current CPU utilization',
      trend: 'down'
    },
    {
      id: 'memory',
      name: 'Memory Usage',
      value: '67',
      unit: '%',
      change: 3,
      status: 'warning',
      icon: Database,
      description: 'Current memory utilization',
      trend: 'up'
    },
    {
      id: 'network',
      name: 'Network I/O',
      value: '1.8',
      unit: 'GB/s',
      change: 0.2,
      status: 'good',
      icon: Network,
      description: 'Network throughput',
      trend: 'up'
    }
  ], []);

  // Memoize status colors
  const getStatusColor = useCallback((status: Metric['status']) => {
    const colors = {
      good: 'text-green-400',
      warning: 'text-yellow-400',
      critical: 'text-red-400'
    };
    return colors[status];
  }, []);

  // Memoize trend colors
  const getTrendColor = useCallback((trend: Metric['trend']) => {
    const colors = {
      up: 'text-green-400',
      down: 'text-blue-400',
      stable: 'text-gray-400'
    };
    return colors[trend];
  }, []);

  // Memoize trend icons
  const getTrendIcon = useCallback((trend: Metric['trend']) => {
    const icons = {
      up: TrendingUp,
      down: TrendingUp,
      stable: Activity
    };
    return icons[trend];
  }, []);

  // Handle metric selection
  const handleMetricClick = useCallback((metricId: string) => {
    setSelectedMetric(selectedMetric === metricId ? null : metricId);
  }, [selectedMetric]);

  // Memoize selected metric data
  const selectedMetricData = useMemo(() => {
    if (!selectedMetric) return null;
    return metrics.find(m => m.id === selectedMetric);
  }, [selectedMetric, metrics]);

  // Calculate overall health score
  const overallHealth = useMemo(() => {
    const goodMetrics = metrics.filter(m => m.status === 'good').length;
    const totalMetrics = metrics.length;
    return Math.round((goodMetrics / totalMetrics) * 100);
  }, [metrics]);

  // Get health status
  const healthStatus = useMemo(() => {
    if (overallHealth >= 95) return { status: 'excellent', color: 'text-green-400', icon: CheckCircle };
    if (overallHealth >= 85) return { status: 'good', color: 'text-blue-400', icon: CheckCircle };
    if (overallHealth >= 70) return { status: 'fair', color: 'text-yellow-400', icon: AlertTriangle };
    return { status: 'poor', color: 'text-red-400', icon: AlertTriangle };
  }, [overallHealth]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Performance Metrics</h3>
        <p className="text-gray-400">Real-time system performance monitoring</p>
        
        {/* Overall Health Score */}
        <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <healthStatus.icon className={`w-6 h-6 ${healthStatus.color}`} />
            <span className="text-lg font-semibold text-white">Overall Health</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{overallHealth}%</div>
          <div className={`text-sm font-medium ${healthStatus.color} capitalize`}>
            {healthStatus.status}
          </div>
        </div>
      </div>

      {/* Current Time */}
      <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
        <div className="text-sm text-gray-400 mb-1">Last Updated</div>
        <div className="text-lg font-mono text-white">
          {currentTime.toLocaleTimeString()}
        </div>
        <div className="text-xs text-gray-500">
          {currentTime.toLocaleDateString()}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const TrendIcon = getTrendIcon(metric.trend);
          const isSelected = selectedMetric === metric.id;
          
          return (
            <motion.div
              key={metric.id}
              className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected 
                  ? 'border-cyan-500/50 bg-cyan-500/10' 
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50 hover:bg-gray-800/50'
              }`}
              onClick={() => handleMetricClick(metric.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              tabIndex={0}
              aria-label={`${metric.name}: ${metric.value}${metric.unit}`}
              aria-pressed={isSelected}
            >
              {/* Metric Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`w-5 h-5 ${getStatusColor(metric.status)}`} aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-300">{metric.name}</span>
                </div>
                
                {/* Trend Indicator */}
                <div className="flex items-center space-x-1">
                  <TrendIcon 
                    className={`w-4 h-4 ${getTrendColor(metric.trend)} ${
                      metric.trend === 'down' ? 'rotate-180' : ''
                    }`} 
                    aria-hidden="true" 
                  />
                  <span className={`text-xs font-medium ${getTrendColor(metric.trend)}`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}
                  </span>
                </div>
              </div>

              {/* Metric Value */}
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
                <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
              </div>

              {/* Metric Description */}
              <div className="text-xs text-gray-400">{metric.description}</div>

              {/* Selection Indicator */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Metric View */}
      <AnimatePresence>
        {selectedMetricData && (
          <motion.div
            className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">{selectedMetricData.name}</h4>
              <button
                onClick={() => setSelectedMetric(null)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close detailed view"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current Value:</span>
                <span className="text-white font-medium">
                  {selectedMetricData.value}{selectedMetricData.unit}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Change:</span>
                <span className={`font-medium ${getTrendColor(selectedMetricData.trend)}`}>
                  {selectedMetricData.change > 0 ? '+' : ''}{selectedMetricData.change}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={`font-medium ${getStatusColor(selectedMetricData.status)} capitalize`}>
                  {selectedMetricData.status}
                </span>
              </div>
              
              <div className="pt-2 border-t border-gray-700/30">
                <span className="text-sm text-gray-400">{selectedMetricData.description}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Tips */}
      <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Performance Tips</h4>
        <ul className="text-xs text-gray-300 space-y-1">
          <li>• Monitor response times for optimal user experience</li>
          <li>• Keep CPU usage below 80% for best performance</li>
          <li>• Regular security updates maintain high security scores</li>
          <li>• Network optimization reduces global latency</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMetrics;