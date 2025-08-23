import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, HardDrive, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  metrics: PerformanceMetrics;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ metrics }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Calculate performance score (0-100)
    const loadScore = Math.max(0, 100 - (metrics.loadTime / 10));
    const memoryScore = Math.max(0, 100 - (metrics.memoryUsage / 2));
    const renderScore = Math.max(0, 100 - (metrics.renderTime / 5));
    
    const avgScore = Math.round((loadScore + memoryScore + renderScore) / 3);
    setPerformanceScore(avgScore);

    // Generate recommendations based on metrics
    const newRecommendations: string[] = [];
    if (metrics.loadTime > 1000) {
      newRecommendations.push('Consider implementing code splitting and lazy loading');
    }
    if (metrics.memoryUsage > 50) {
      newRecommendations.push('Optimize memory usage with better cleanup and caching');
    }
    if (metrics.renderTime > 100) {
      newRecommendations.push('Optimize render performance with React.memo and useMemo');
    }
    setRecommendations(newRecommendations);

    setIsVisible(true);
  }, [metrics]);

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Zap className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold text-sm">Performance</span>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label={showDetails ? 'Hide details' : 'Show details'}
          >
            {showDetails ? '−' : '+'}
          </button>
        </div>

        {/* Performance Score */}
        <div className="text-center mb-3">
          <div className={`text-2xl font-bold ${getPerformanceColor(performanceScore)}`}>
            {performanceScore}
          </div>
          <div className="text-xs text-gray-400">Performance Score</div>
          <div className="flex justify-center mt-1">
            {getPerformanceIcon(performanceScore)}
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="text-xs text-gray-400">Load</div>
            <div className="text-sm text-white">{metrics.loadTime}ms</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">Memory</div>
            <div className="text-sm text-white">{metrics.memoryUsage}MB</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">Render</div>
            <div className="text-sm text-white">{metrics.renderTime}ms</div>
          </div>
        </div>

        {/* Detailed View */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-cyan-500/20 pt-3"
            >
              {/* Detailed Metrics */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Load Time:</span>
                  <span className={`font-mono ${metrics.loadTime > 1000 ? 'text-red-400' : 'text-green-400'}`}>
                    {metrics.loadTime}ms
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Memory Usage:</span>
                  <span className={`font-mono ${metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}`}>
                    {metrics.memoryUsage}MB
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Render Time:</span>
                  <span className={`font-mono ${metrics.renderTime > 100 ? 'text-red-400' : 'text-green-400'}`}>
                    {metrics.renderTime}ms
                  </span>
                </div>
              </div>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">Recommendations:</div>
                  <ul className="space-y-1">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="text-xs text-yellow-400 flex items-start gap-2">
                        <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Performance Tips */}
              <div className="text-xs text-gray-400">
                <div className="font-semibold mb-1">Performance Tips:</div>
                <ul className="space-y-1">
                  <li>• Use React.memo for expensive components</li>
                  <li>• Implement lazy loading for routes</li>
                  <li>• Optimize images and assets</li>
                  <li>• Monitor Core Web Vitals</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Indicator */}
        <div className="flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full ${
            performanceScore >= 90 ? 'bg-green-400' : 
            performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
          }`} />
          <span className="text-xs text-gray-400 ml-2">
            {performanceScore >= 90 ? 'Excellent' : 
             performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;