import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, Zap, Clock, Target, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface Metric {
  name: string;
  value: string;
  unit: string;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: string;
  target: string;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      name: 'LCP (Largest Contentful Paint)',
      value: '1.2',
      unit: 's',
      status: 'excellent',
      trend: 'up',
      change: '+0.3s',
      target: '< 2.5s'
    },
    {
      name: 'FID (First Input Delay)',
      value: '45',
      unit: 'ms',
      status: 'good',
      trend: 'down',
      change: '-12ms',
      target: '< 100ms'
    },
    {
      name: 'CLS (Cumulative Layout Shift)',
      value: '0.08',
      unit: '',
      status: 'good',
      trend: 'stable',
      change: '0.00',
      target: '< 0.1'
    },
    {
      name: 'TTFB (Time to First Byte)',
      value: '180',
      unit: 'ms',
      status: 'excellent',
      trend: 'up',
      change: '+25ms',
      target: '< 600ms'
    }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: Metric['status']) => {
    switch (status) {
      case 'excellent':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'good':
        return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'warning':
        return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'critical':
        return 'text-red-400 border-red-400/30 bg-red-400/10';
      default:
        return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  const getStatusIcon = (status: Metric['status']) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'good':
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getTrendIcon = (trend: Metric['trend']) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable':
        return <Activity className="w-4 h-4 text-blue-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendColor = (trend: Metric['trend']) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      case 'stable':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Core Web Vitals</h3>
            <p className="text-sm text-gray-400">Real-time performance monitoring</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Updated just now</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              {getStatusIcon(metric.status)}
            </div>

            {/* Metric Name */}
            <h4 className="text-lg font-semibold text-white mb-4 pr-16">
              {metric.name}
            </h4>

            {/* Metric Value */}
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-3xl font-bold text-white">
                {metric.value}
              </span>
              <span className="text-lg text-gray-400">
                {metric.unit}
              </span>
            </div>

            {/* Trend and Change */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getTrendIcon(metric.trend)}
                <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {metric.change}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Target className="w-4 h-4" />
                <span>Target: {metric.target}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700/50 rounded-full h-2 mb-4">
              <motion.div
                className={`h-2 rounded-full ${
                  metric.status === 'excellent' ? 'bg-green-500' :
                  metric.status === 'good' ? 'bg-blue-500' :
                  metric.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (parseFloat(metric.value) / parseFloat(metric.target.replace(/[^\d.]/g, ''))) * 100)}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>

            {/* Status Text */}
            <div className="flex items-center justify-between">
              <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(metric.status)}`}>
                {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
              </span>
              
              <span className="text-xs text-gray-500">
                Last updated: 2 min ago
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Performance Summary</h4>
            <p className="text-gray-400 text-sm">
              Your application is performing excellently with all Core Web Vitals in the green zone.
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-green-400">95%</div>
            <div className="text-sm text-gray-400">Performance Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;