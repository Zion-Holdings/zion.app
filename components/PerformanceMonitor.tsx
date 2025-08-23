import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, AlertTriangle, CheckCircle, Clock, 
  Zap, Database, Network, Cpu, HardDrive, X
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  tti: number;
  fid: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceIssue {
  type: 'warning' | 'error' | 'info';
  message: string;
  suggestion: string;
  priority: 'low' | 'medium' | 'high';
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show performance monitor after page load
    const timer = setTimeout(() => setIsVisible(true), 5000);
    
    // Measure performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, lcp } : null);
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, fcp } : null);
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }

    // Measure bundle size and load time
    const measureBundleSize = () => {
      const loadTime = performance.now();
      const bundleSize = performance.memory?.usedJSHeapSize || 0;
      
      setMetrics(prev => ({
        fcp: prev?.fcp || 0,
        lcp: prev?.lcp || 0,
        cls: prev?.cls || 0,
        tti: prev?.tti || 0,
        fid: prev?.fid || 0,
        ttfb: prev?.ttfb || 0,
        bundleSize,
        loadTime
      }));
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measureBundleSize();
    } else {
      window.addEventListener('load', measureBundleSize);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', measureBundleSize);
    };
  }, []);

  // Analyze performance and generate suggestions
  useEffect(() => {
    if (!metrics) return;

    const newIssues: PerformanceIssue[] = [];

    // FCP analysis
    if (metrics.fcp > 1500) {
      newIssues.push({
        type: 'warning',
        message: 'First Contentful Paint is slow',
        suggestion: 'Optimize critical rendering path, reduce server response time',
        priority: 'high'
      });
    }

    // LCP analysis
    if (metrics.lcp > 2500) {
      newIssues.push({
        type: 'error',
        message: 'Largest Contentful Paint exceeds target',
        suggestion: 'Optimize images, implement lazy loading, use CDN',
        priority: 'high'
      });
    }

    // Bundle size analysis
    if (metrics.bundleSize > 5000000) { // 5MB
      newIssues.push({
        type: 'warning',
        message: 'Bundle size is large',
        suggestion: 'Implement code splitting, tree shaking, and bundle analysis',
        priority: 'medium'
      });
    }

    // Load time analysis
    if (metrics.loadTime > 3000) {
      newIssues.push({
        type: 'info',
        message: 'Page load time could be improved',
        suggestion: 'Enable compression, optimize images, use caching',
        priority: 'low'
      });
    }

    setIssues(newIssues);
  }, [metrics]);

  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;
    
    let score = 100;
    
    if (metrics.fcp > 1500) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.bundleSize > 5000000) score -= 10;
    if (metrics.loadTime > 3000) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Performance Monitor
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Performance Score */}
          {metrics && (
            <div className="p-4">
              <div className="text-center mb-4">
                <div className={`text-3xl font-bold ${getScoreColor(getPerformanceScore())}`}>
                  {getPerformanceScore()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Performance Score
                </div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">FCP</span>
                  <span className={metrics.fcp > 1500 ? 'text-red-500' : 'text-green-500'}>
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">LCP</span>
                  <span className={metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Bundle Size</span>
                  <span className={metrics.bundleSize > 5000000 ? 'text-yellow-500' : 'text-green-500'}>
                    {(metrics.bundleSize / 1000000).toFixed(1)}MB
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Issues */}
          {issues.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Optimization Suggestions
                </h4>
                <div className="space-y-3">
                  {issues.slice(0, 3).map((issue, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className={`mt-1 w-2 h-2 rounded-full ${
                        issue.type === 'error' ? 'bg-red-500' :
                        issue.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {issue.message}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {issue.suggestion}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Expand Button */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full text-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;