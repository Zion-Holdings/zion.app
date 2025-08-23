import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, X, Settings, RefreshCw, BarChart3,
  Cpu, HardDrive, Wifi, Battery, Thermometer, Gauge,
  Target, Rocket, Shield, Star
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage in MB
  networkSpeed?: number; // Network speed in Mbps
  batteryLevel?: number; // Battery level percentage
  cpuUsage?: number; // CPU usage percentage
  responseTime?: number; // API response time
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

const PerformanceMetrics: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 }
  };

  const getMetricStatus = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    if (!thresholds[metric as keyof PerformanceThresholds]) return 'unknown';
    
    const threshold = thresholds[metric as keyof PerformanceThresholds];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, [thresholds]);

  const getMetricColor = useCallback((status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  const getMetricIcon = useCallback((status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  }, []);

  const getMetricBackground = useCallback((status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500/10 border-green-500/20';
      case 'needs-improvement': return 'bg-yellow-500/10 border-yellow-500/20';
      case 'poor': return 'bg-red-500/10 border-red-500/20';
      default: return 'bg-gray-500/10 border-gray-500/20';
    }
  }, []);

  const measurePerformance = useCallback(async () => {
    setIsMonitoring(true);
    
    try {
      // Simulate performance measurement for demo purposes
      // In a real application, you would use the Web Performance API
      const mockMetrics: PerformanceMetrics = {
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 800,
        fid: Math.random() * 200 + 50,
        cls: Math.random() * 0.3,
        ttfb: Math.random() * 1000 + 200,
        domLoad: Math.random() * 2000 + 1000,
        windowLoad: Math.random() * 3000 + 2000,
        memoryUsage: Math.random() * 100 + 50,
        networkSpeed: Math.random() * 100 + 10,
        batteryLevel: Math.random() * 100,
        cpuUsage: Math.random() * 50 + 10,
        responseTime: Math.random() * 500 + 100
      };

      setMetrics(mockMetrics);
      setLastUpdate(new Date());
      
      // Generate optimization suggestions based on metrics
      const suggestions: string[] = [];
      
      if (mockMetrics.fcp > thresholds.fcp.needsImprovement) {
        suggestions.push('Optimize critical rendering path for faster FCP');
      }
      if (mockMetrics.lcp > thresholds.lcp.needsImprovement) {
        suggestions.push('Optimize largest contentful paint elements');
      }
      if (mockMetrics.cls > thresholds.cls.needsImprovement) {
        suggestions.push('Fix layout shifts to improve visual stability');
      }
      if (mockMetrics.ttfb > thresholds.ttfb.needsImprovement) {
        suggestions.push('Optimize server response time and CDN');
      }
      
      if (suggestions.length === 0) {
        suggestions.push('Performance is excellent! Keep monitoring for any regressions.');
      }
      
      setOptimizationSuggestions(suggestions);
      
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, [thresholds]);

  const formatMetricValue = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fcp' || metric === 'lcp' || metric === 'fid' || metric === 'ttfb' || metric === 'domLoad' || metric === 'windowLoad' || metric === 'responseTime') {
      return `${Math.round(value)}ms`;
    }
    if (metric === 'memoryUsage') return `${Math.round(value)}MB`;
    if (metric === 'networkSpeed') return `${Math.round(value)}Mbps`;
    if (metric === 'batteryLevel' || metric === 'cpuUsage') return `${Math.round(value)}%`;
    return value.toString();
  }, []);

  const getMetricLabel = useCallback((metric: keyof PerformanceMetrics) => {
    const labels: Record<keyof PerformanceMetrics, string> = {
      fcp: 'First Contentful Paint',
      lcp: 'Largest Contentful Paint',
      fid: 'First Input Delay',
      cls: 'Cumulative Layout Shift',
      ttfb: 'Time to First Byte',
      domLoad: 'DOM Load Time',
      windowLoad: 'Window Load Time',
      memoryUsage: 'Memory Usage',
      networkSpeed: 'Network Speed',
      batteryLevel: 'Battery Level',
      cpuUsage: 'CPU Usage',
      responseTime: 'Response Time'
    };
    return labels[metric] || metric;
  }, []);

  const getMetricDescription = useCallback((metric: keyof PerformanceMetrics) => {
    const descriptions: Record<keyof PerformanceMetrics, string> = {
      fcp: 'Time until the first content is painted on screen',
      lcp: 'Time until the largest content element is visible',
      fid: 'Time from user interaction to browser response',
      cls: 'Measure of visual stability during page load',
      ttfb: 'Time for the server to respond with first byte',
      domLoad: 'Time for DOM content to be fully loaded',
      windowLoad: 'Time for all page resources to load',
      memoryUsage: 'Current memory consumption by the application',
      networkSpeed: 'Current network connection speed',
      batteryLevel: 'Device battery level percentage',
      cpuUsage: 'Current CPU utilization percentage',
      responseTime: 'Average API response time'
    };
    return descriptions[metric] || 'Performance metric measurement';
  }, []);

  useEffect(() => {
    // Start monitoring on component mount
    measurePerformance();
    
    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  const coreWebVitals = useMemo(() => {
    if (!metrics) return [];
    
    return [
      { key: 'fcp', value: metrics.fcp, label: 'FCP' },
      { key: 'lcp', value: metrics.lcp, label: 'LCP' },
      { key: 'fid', value: metrics.fid, label: 'FID' },
      { key: 'cls', value: metrics.cls, label: 'CLS' },
      { key: 'ttfb', value: metrics.ttfb, label: 'TTFB' }
    ];
  }, [metrics]);

  const systemMetrics = useMemo(() => {
    if (!metrics) return [];
    
    return [
      { key: 'memoryUsage', value: metrics.memoryUsage, label: 'Memory' },
      { key: 'networkSpeed', value: metrics.networkSpeed, label: 'Network' },
      { key: 'batteryLevel', value: metrics.batteryLevel, label: 'Battery' },
      { key: 'cpuUsage', value: metrics.cpuUsage, label: 'CPU' }
    ].filter(metric => metric.value !== undefined);
  }, [metrics]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <Gauge className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Performance Metrics</h3>
            <p className="text-gray-400 text-sm">Real-time performance monitoring</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors flex items-center gap-2"
            aria-label={showDetails ? 'Hide detailed metrics' : 'Show detailed metrics'}
          >
            <BarChart3 className="w-4 h-4" />
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          
          <button
            onClick={measurePerformance}
            disabled={isMonitoring}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            aria-label="Refresh performance metrics"
          >
            <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-400" />
          Core Web Vitals
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {coreWebVitals.map((metric) => {
            const status = getMetricStatus(metric.key as keyof PerformanceMetrics, metric.value);
            const color = getMetricColor(status);
            const background = getMetricBackground(status);
            const icon = getMetricIcon(status);
            
            return (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-4 rounded-xl border ${background} relative overflow-hidden`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">{metric.label}</span>
                  {icon}
                </div>
                
                <div className={`text-2xl font-bold ${color} mb-1`}>
                  {formatMetricValue(metric.key as keyof PerformanceMetrics, metric.value)}
                </div>
                
                <div className="text-xs text-gray-400 capitalize">
                  {status.replace('-', ' ')}
                </div>
                
                {/* Status indicator bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      status === 'good' ? 'bg-green-500' : 
                      status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (metric.value / (thresholds[metric.key as keyof PerformanceThresholds]?.needsImprovement || 1000)) * 100)}%` 
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* System Metrics */}
      {showDetails && systemMetrics.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-400" />
            System Metrics
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemMetrics.map((metric) => (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-300">{metric.label}</span>
                </div>
                
                <div className="text-xl font-bold text-blue-400">
                  {formatMetricValue(metric.key as keyof PerformanceMetrics, metric.value!)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Optimization Suggestions */}
      {optimizationSuggestions.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-purple-400" />
            Optimization Suggestions
          </h4>
          
          <div className="space-y-3">
            {optimizationSuggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-purple-200 text-sm leading-relaxed">{suggestion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Last Update */}
      <div className="text-center text-gray-500 text-sm">
        Last updated: {lastUpdate.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default PerformanceMetrics;