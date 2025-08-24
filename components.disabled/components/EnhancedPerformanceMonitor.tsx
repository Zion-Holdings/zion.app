import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, RefreshCw, BarChart3 } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  ttfb: number;
}

const EnhancedPerformanceMonitor: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const measurePerformance = async () => {
    setIsLoading(true);
    try {
      // Simulate performance measurement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockMetrics: PerformanceMetrics = {
        fcp: 1200,
        lcp: 1800,
        cls: 0.05,
        ttfb: 300
      };
      
      setMetrics(mockMetrics);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 20;
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number): string => {
    if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  useEffect(() => {
    measurePerformance();
  }, []);

  if (!metrics) {
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

  const score = getPerformanceScore(metrics);

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
          <button
            onClick={measurePerformance}
            disabled={isLoading}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
            title="Refresh data"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Overall Score */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBg(score)} mb-3`}>
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}
            </span>
          </div>
          <h4 className="text-white font-semibold mb-1">Performance Score</h4>
          <p className="text-gray-400 text-sm">
            {score >= 90 ? 'Excellent' : score >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        {/* Core Web Vitals */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Core Web Vitals</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">FCP</span>
              <span className={`font-mono ${metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">LCP</span>
              <span className={`font-mono ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">CLS</span>
              <span className={`font-mono ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">TTFB</span>
              <span className={`font-mono ${metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.ttfb.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedPerformanceMonitor;