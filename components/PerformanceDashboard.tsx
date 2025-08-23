import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  domContentLoaded: number;
  domComplete: number;
}

interface PerformanceScore {
  overall: string;
  fcp: string;
  lcp: string;
  cls: string;
  fid: string;
  tti: string;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [scores, setScores] = useState<PerformanceScore | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [historicalData, setHistoricalData] = useState<PerformanceMetrics[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Calculate performance scores
  const calculateScores = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const getScore = (value: number, thresholds: { good: number; needsImprovement: number }): string => {
      if (value <= thresholds.good) return 'A';
      if (value <= thresholds.needsImprovement) return 'B';
      return 'C';
    };

    return {
      overall: 'A', // Will be calculated based on all metrics
      fcp: getScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }),
      lcp: getScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }),
      cls: getScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }),
      fid: getScore(metrics.firstInputDelay, { good: 100, needsImprovement: 300 }),
      tti: getScore(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })
    };
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: navigation.domInteractive - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        domComplete: navigation.domComplete - navigation.fetchStart
      };

      // Measure LCP
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.largestContentfulPaint = lastEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure CLS
      let clsValue = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (layoutShiftEntry.hadRecentInput === false) {
              clsValue += layoutShiftEntry.value || 0;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        newMetrics.cumulativeLayoutShift = clsValue;
      }

      setMetrics(newMetrics);
      setScores(calculateScores(newMetrics));
      
      // Store historical data
      setHistoricalData(prev => [...prev.slice(-9), newMetrics]);
      
      // Generate recommendations
      generateRecommendations(newMetrics);
    }
  }, [calculateScores]);

  // Generate performance recommendations
  const generateRecommendations = useCallback((metrics: PerformanceMetrics) => {
    const recs: string[] = [];
    
    if (metrics.firstContentfulPaint > 1500) {
      recs.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      recs.push('Optimize images and implement lazy loading for better LCP');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recs.push('Fix layout shifts by setting explicit dimensions for images and ads');
    }
    
    if (metrics.timeToInteractive > 5000) {
      recs.push('Reduce JavaScript bundle size and implement code splitting');
    }
    
    if (metrics.loadTime > 3000) {
      recs.push('Implement resource preloading and optimize server response times');
    }
    
    setRecommendations(recs);
  }, []);

  // Monitor performance continuously
  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  if (!metrics || !scores) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4 shadow-2xl z-50">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Activity className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-medium">Loading Performance Data...</span>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-yellow-400';
      case 'C': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreBg = (score: string) => {
    switch (score) {
      case 'A': return 'bg-green-500/20';
      case 'B': return 'bg-yellow-500/20';
      case 'C': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl z-50 max-w-sm"
    >
      {/* Header */}
      <div className="p-4 border-b border-cyan-400/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Performance</span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>
      </div>

      {/* Quick Metrics */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor(scores.overall)}`}>
              {scores.overall}
            </div>
            <div className="text-xs text-gray-400">Overall</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">
              {Math.round(metrics.loadTime)}ms
            </div>
            <div className="text-xs text-gray-400">Load Time</div>
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">FCP</span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreBg(scores.fcp)} ${getScoreColor(scores.fcp)}`}>
                {scores.fcp}
              </span>
              <span className="text-white">{Math.round(metrics.firstContentfulPaint)}ms</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">LCP</span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreBg(scores.lcp)} ${getScoreColor(scores.lcp)}`}>
                {scores.lcp}
              </span>
              <span className="text-white">{Math.round(metrics.largestContentfulPaint)}ms</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">CLS</span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreBg(scores.cls)} ${getScoreColor(scores.cls)}`}>
                {scores.cls}
              </span>
              <span className="text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-cyan-400/20 pt-4"
          >
            {/* Additional Metrics */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">TTI</span>
                <span className="text-white">{Math.round(metrics.timeToInteractive)}ms</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">FID</span>
                <span className="text-white">{Math.round(metrics.firstInputDelay)}ms</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">DOM Ready</span>
                <span className="text-white">{Math.round(metrics.domContentLoaded)}ms</span>
              </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 flex items-center space-x-2">
                  <Info className="w-4 h-4" />
                  <span>Recommendations</span>
                </div>
                <div className="space-y-1">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="text-xs text-gray-300 bg-gray-800/50 p-2 rounded">
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Historical Trend */}
            {historicalData.length > 1 && (
              <div className="mt-4">
                <div className="text-sm font-medium text-cyan-400 mb-2">Performance Trend</div>
                <div className="flex items-end space-x-1 h-16">
                  {historicalData.map((data, index) => {
                    const height = Math.max(10, Math.min(60, (data.loadTime / 5000) * 60));
                    return (
                      <div
                        key={index}
                        className="flex-1 bg-cyan-400/30 rounded-t"
                        style={{ height: `${height}px` }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceDashboard;