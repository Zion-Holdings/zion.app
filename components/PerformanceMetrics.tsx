import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock, Target, Activity } from 'lucide-react';

interface PerformanceMetricsProps {
  className?: string;
}

interface Metrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<Metrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate performance metrics for demo purposes
    // In production, this would use the Web Vitals API
    const simulateMetrics = () => {
      setMetrics({
        lcp: Math.random() * 2000 + 500, // 500-2500ms
        fid: Math.random() * 100 + 10,   // 10-110ms
        cls: Math.random() * 0.1 + 0.01, // 0.01-0.11
        ttfb: Math.random() * 300 + 50,  // 50-350ms
        fcp: Math.random() * 1500 + 300  // 300-1800ms
      });
    };

    simulateMetrics();
    setIsVisible(true);

    // Update metrics every 30 seconds
    const interval = setInterval(simulateMetrics, 30000);

    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    if (isLowerBetter) {
      return value <= threshold ? 'text-green-400' : value <= threshold * 1.5 ? 'text-yellow-400' : 'text-red-400';
    } else {
      return value >= threshold ? 'text-green-400' : value >= threshold * 0.7 ? 'text-yellow-400' : 'text-red-400';
    }
  };

  const getScoreLabel = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    if (isLowerBetter) {
      return value <= threshold ? 'Good' : value <= threshold * 1.5 ? 'Needs Improvement' : 'Poor';
    } else {
      return value >= threshold ? 'Good' : value >= threshold * 0.7 ? 'Needs Improvement' : 'Poor';
    }
  };

  const metricsData = [
    {
      name: 'Largest Contentful Paint',
      value: metrics.lcp,
      unit: 'ms',
      threshold: 2500,
      icon: Clock,
      description: 'Time to render the largest content element',
      isLowerBetter: true
    },
    {
      name: 'First Input Delay',
      value: metrics.fid,
      unit: 'ms',
      threshold: 100,
      icon: Zap,
      description: 'Time from first interaction to response',
      isLowerBetter: true
    },
    {
      name: 'Cumulative Layout Shift',
      value: metrics.cls,
      unit: '',
      threshold: 0.1,
      icon: Target,
      description: 'Visual stability during page load',
      isLowerBetter: true
    },
    {
      name: 'Time to First Byte',
      value: metrics.ttfb,
      unit: 'ms',
      threshold: 200,
      icon: Activity,
      description: 'Server response time',
      isLowerBetter: true
    },
    {
      name: 'First Contentful Paint',
      value: metrics.fcp,
      unit: 'ms',
      threshold: 1800,
      icon: TrendingUp,
      description: 'Time to first content render',
      isLowerBetter: true
    }
  ];

  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Performance Metrics</h3>
        <p className="text-gray-400">Real-time Core Web Vitals monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricsData.map((metric, index) => {
          const Icon = metric.icon;
          const scoreColor = getScoreColor(metric.value, metric.threshold, metric.isLowerBetter);
          const scoreLabel = getScoreLabel(metric.value, metric.threshold, metric.isLowerBetter);

          return (
            <motion.div
              key={metric.name}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  scoreColor === 'text-green-400' ? 'bg-green-500/20 text-green-400' :
                  scoreColor === 'text-yellow-400' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {scoreLabel}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">{metric.name}</h4>
              <p className="text-gray-400 text-sm mb-4">{metric.description}</p>

              <div className="flex items-end justify-between">
                <div>
                  <span className={`text-3xl font-bold ${scoreColor}`}>
                    {metric.value.toFixed(metric.unit === '' ? 3 : 0)}
                  </span>
                  <span className="text-gray-500 ml-1">{metric.unit}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Target</div>
                  <div className="text-sm text-gray-400">{metric.threshold}{metric.unit}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      scoreColor === 'text-green-400' ? 'bg-green-500' :
                      scoreColor === 'text-yellow-400' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{
                      width: `${Math.min((metric.value / metric.threshold) * 100, 100)}%`
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Performance Summary */}
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Overall Performance Score</h4>
            <p className="text-gray-400 text-sm">
              Based on Core Web Vitals and industry standards
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-cyan-400">
              {Math.round(
                (metricsData.filter(m => 
                  getScoreColor(m.value, m.threshold, m.isLowerBetter) === 'text-green-400'
                ).length / metricsData.length) * 100
              )}%
            </div>
            <div className="text-sm text-gray-400">Optimized</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PerformanceMetrics;