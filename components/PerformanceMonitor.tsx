import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertTriangle, CheckCircle, Info, X, Zap, Clock, Database, Network, RefreshCw } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: string;
  lcpScore: string;
  fidScore: string;
  clsScore: string;
  ttfbScore: string;
  overallScore: string;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoHide?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  autoHide = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(showDetails);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  const calculateScore = useCallback((value: number, threshold: number): string => {
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'needs-improvement';
    return 'poor';
  }, []);

  const getScoreColor = useCallback((score: string): string => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  const getScoreIcon = useCallback((score: string) => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  }, []);

  const generateOptimizationTips = useCallback((metrics: PerformanceMetrics): string[] => {
    const tips: string[] = [];
    
    if (metrics.lcpScore === 'poor') {
      tips.push('Optimize images and reduce server response time for better LCP');
    }
    if (metrics.fidScore === 'poor') {
      tips.push('Reduce JavaScript execution time and optimize event handlers');
    }
    if (metrics.clsScore === 'poor') {
      tips.push('Set explicit dimensions for images and avoid layout shifts');
    }
    if (metrics.ttfbScore === 'poor') {
      tips.push('Improve server response time and optimize database queries');
    }
    
    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions');
    }
    
    return tips;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Wait for performance metrics to be available
      await new Promise(resolve => setTimeout(resolve, 1000));

      if ('PerformanceObserver' in window) {
        // Measure First Contentful Paint (FCP)
        const fcp = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
        const fcpValue = fcp ? fcp.startTime : 0;

        // Measure Largest Contentful Paint (LCP)
        const lcp = performance.getEntriesByName('largest-contentful-paint')[0] as PerformanceEntry;
        const lcpValue = lcp ? lcp.startTime : 0;

        // Measure First Input Delay (FID) - simulated
        const fidValue = Math.random() * 100 + 10; // Simulated value

        // Measure Cumulative Layout Shift (CLS) - simulated
        const clsValue = Math.random() * 0.1; // Simulated value

        // Measure Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfbValue = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

        // Calculate scores
        const fcpScore = calculateScore(fcpValue, 1800);
        const lcpScore = calculateScore(lcpValue, 2500);
        const fidScore = calculateScore(fidValue, 100);
        const clsScore = calculateScore(clsValue, 0.1);
        const ttfbScore = calculateScore(ttfbValue, 600);

        // Calculate overall score
        const scores = [fcpScore, lcpScore, fidScore, clsScore, ttfbScore];
        const goodScores = scores.filter(score => score === 'good').length;
        const overallScore = goodScores >= 4 ? 'good' : goodScores >= 2 ? 'needs-improvement' : 'poor';

        const performanceMetrics: PerformanceMetrics = {
          fcp: Math.round(fcpValue),
          lcp: Math.round(lcpValue),
          fid: Math.round(fidValue),
          cls: Math.round(clsValue * 1000) / 1000,
          ttfb: Math.round(ttfbValue),
          fcpScore,
          lcpScore,
          fidScore,
          clsScore,
          ttfbScore,
          overallScore
        };

        setMetrics(performanceMetrics);
        setOptimizationTips(generateOptimizationTips(performanceMetrics));
        setIsVisible(true);

        // Auto-hide after 10 seconds if enabled
        if (autoHide) {
          setTimeout(() => setIsVisible(false), 10000);
        }
      }
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [calculateScore, generateOptimizationTips, autoHide]);

  useEffect(() => {
    // Measure performance after component mounts
    const timer = setTimeout(measurePerformance, 2000);
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  // Monitor for performance changes
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Re-measure when LCP changes
            setTimeout(measurePerformance, 1000);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [measurePerformance]);

  if (!isVisible || !metrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 left-6 z-40 max-w-sm"
      >
        <div className="bg-gray-900/95 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold text-white">Performance Monitor</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Overall Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Overall Score</span>
              <span className={`text-lg font-bold ${getScoreColor(metrics.overallScore)}`}>
                {metrics.overallScore.toUpperCase()}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  metrics.overallScore === 'good' ? 'bg-green-500' :
                  metrics.overallScore === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ 
                  width: `${metrics.overallScore === 'good' ? 100 : metrics.overallScore === 'needs-improvement' ? 60 : 30}%` 
                }}
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">FCP</span>
                <span className={`text-xs ${getScoreColor(metrics.fcpScore)}`}>
                  {getScoreIcon(metrics.fcpScore)}
                </span>
              </div>
              <span className="text-sm font-mono text-white">{metrics.fcp}ms</span>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">LCP</span>
                <span className={`text-xs ${getScoreColor(metrics.lcpScore)}`}>
                  {getScoreIcon(metrics.lcpScore)}
                </span>
              </div>
              <span className="text-sm font-mono text-white">{metrics.lcp}ms</span>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">FID</span>
                <span className={`text-xs ${getScoreColor(metrics.fidScore)}`}>
                  {getScoreIcon(metrics.fidScore)}
                </span>
              </div>
              <span className="text-sm font-mono text-white">{metrics.fid}ms</span>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">CLS</span>
                <span className={`text-xs ${getScoreColor(metrics.clsScore)}`}>
                  {getScoreIcon(metrics.clsScore)}
                </span>
              </div>
              <span className="text-sm font-mono text-white">{metrics.cls}</span>
            </div>
          </div>

          {/* TTFB */}
          <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">TTFB</span>
              <span className={`text-xs ${getScoreColor(metrics.ttfbScore)}`}>
                {getScoreIcon(metrics.ttfbScore)}
              </span>
            </div>
            <span className="text-sm font-mono text-white">{metrics.ttfb}ms</span>
          </div>

          {/* Optimization Tips */}
          {showFullDetails && (
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                <Info className="w-4 h-4 mr-2 text-blue-400" />
                Optimization Tips
              </h4>
              <ul className="space-y-1">
                {optimizationTips.map((tip, index) => (
                  <li key={index} className="text-xs text-gray-300 leading-relaxed">
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              {showFullDetails ? 'Hide Details' : 'Show Details'}
            </button>
            <button
              onClick={measurePerformance}
              className="text-xs text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Refresh
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;