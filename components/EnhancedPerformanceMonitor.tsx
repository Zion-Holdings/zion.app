import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Clock, Zap, 
  Database, Network, Cpu, HardDrive, AlertTriangle,
  CheckCircle, Info, Settings, RefreshCw, BarChart3
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: number;
  description: string;
}

interface PerformanceData {
  timestamp: Date;
  metrics: PerformanceMetric[];
  overallScore: number;
  recommendations: string[];
}

interface EnhancedPerformanceMonitorProps {
  className?: string;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  className = '',
  autoRefresh = true,
  refreshInterval = 30000
}) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [showDetails, setShowDetails] = useState(false);

  const generateMockPerformanceData = useCallback((): PerformanceData => {
    const baseMetrics: PerformanceMetric[] = [
      {
        name: 'Page Load Time',
        value: Math.random() * 2000 + 500,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 20 - 10,
        description: 'Time to fully load the page'
      },
      {
        name: 'First Contentful Paint',
        value: Math.random() * 1000 + 200,
        unit: 'ms',
        status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 15 - 7.5,
        description: 'Time to first visual content'
      },
      {
        name: 'Largest Contentful Paint',
        value: Math.random() * 2500 + 800,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 25 - 12.5,
        description: 'Time to largest content element'
      },
      {
        name: 'Cumulative Layout Shift',
        value: Math.random() * 0.3,
        unit: '',
        status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 0.1 - 0.05,
        description: 'Visual stability metric'
      },
      {
        name: 'Total Blocking Time',
        value: Math.random() * 300 + 100,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 20 - 10,
        description: 'Time blocking main thread'
      },
      {
        name: 'Speed Index',
        value: Math.random() * 2000 + 800,
        unit: 'ms',
        status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
        trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable',
        change: Math.random() * 25 - 12.5,
        description: 'Visual loading speed'
      }
    ];

    const overallScore = Math.round(
      baseMetrics.reduce((acc, metric) => {
        const score = metric.status === 'good' ? 100 : metric.status === 'warning' ? 70 : 40;
        return acc + score;
      }, 0) / baseMetrics.length
    );

    const recommendations = [
      'Optimize image compression and formats',
      'Implement lazy loading for non-critical resources',
      'Minimize JavaScript bundle size',
      'Use CDN for static assets',
      'Enable HTTP/2 or HTTP/3',
      'Implement service worker for caching'
    ].slice(0, Math.floor(Math.random() * 3) + 2);

    return {
      timestamp: new Date(),
      metrics: baseMetrics,
      overallScore,
      recommendations
    };
  }, []);

  const updatePerformanceData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newData = generateMockPerformanceData();
      setPerformanceData(newData);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Failed to update performance data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockPerformanceData]);

  useEffect(() => {
    updatePerformanceData();
  }, [updatePerformanceData]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(updatePerformanceData, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, updatePerformanceData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'critical': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  const getOverallScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getOverallScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  if (!performanceData) {
    return (
      <div className={`p-4 bg-gray-900 rounded-lg border border-gray-700 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            <div className="h-3 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="p-4 bg-gray-800/50 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Performance Monitor</h3>
              <p className="text-gray-400 text-sm">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={showDetails ? 'Hide details' : 'Show details'}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={updatePerformanceData}
              disabled={isLoading}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Overall Score */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getOverallScoreBg(performanceData.overallScore)} mb-3`}>
            <span className={`text-2xl font-bold ${getOverallScoreColor(performanceData.overallScore)}`}>
              {performanceData.overallScore}
            </span>
          </div>
          <h4 className="text-white font-semibold mb-1">Performance Score</h4>
          <p className="text-gray-400 text-sm">
            {performanceData.overallScore >= 90 ? 'Excellent' : 
             performanceData.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {performanceData.metrics.slice(0, 6).map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-lg border ${getStatusBgColor(metric.status)} border-gray-600/50`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300 font-medium">{metric.name}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="flex items-baseline space-x-2">
                <span className={`text-xl font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value.toFixed(metric.unit ? 0 : 2)}
                </span>
                <span className="text-sm text-gray-400">{metric.unit}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`text-xs ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change >= 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </span>
                <span className="text-xs text-gray-500">vs last check</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-gray-700 pt-4"
          >
            <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
              <Info className="w-4 h-4 text-blue-400" />
              <span>Optimization Recommendations</span>
            </h4>
            <div className="space-y-2">
              {performanceData.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{recommendation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Expandable Details */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-gray-700 pt-4"
          >
            <h4 className="text-white font-semibold mb-3">Detailed Metrics</h4>
            <div className="space-y-3">
              {performanceData.metrics.map((metric, index) => (
                <div key={metric.name} className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{metric.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${getStatusBgColor(metric.status)} ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{metric.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">
                      Current: {metric.value.toFixed(metric.unit ? 0 : 2)} {metric.unit}
                    </span>
                    <span className={`${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change >= 0 ? '+' : ''}{metric.change.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedPerformanceMonitor;