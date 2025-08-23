import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Wifi, Shield } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('');

  useEffect(() => {
    // Measure initial performance metrics
    measurePerformance();
    
    // Set up performance observer for real-time monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetric('largestContentfulPaint', entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);

  const measurePerformance = () => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      };

      setMetrics(newMetrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }
    }
  };

  const updateMetric = (key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Analyzing performance...');

    // Simulate performance optimization process
    const steps = [
      'Analyzing performance metrics...',
      'Optimizing image loading...',
      'Compressing assets...',
      'Implementing lazy loading...',
      'Optimizing CSS delivery...',
      'Finalizing optimizations...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setOptimizationStatus(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Simulate improved metrics
    const optimizedMetrics = {
      ...metrics,
      loadTime: Math.max(metrics.loadTime * 0.7, 100),
      firstPaint: Math.max(metrics.firstPaint * 0.8, 50),
      firstContentfulPaint: Math.max(metrics.firstContentfulPaint * 0.8, 100)
    };

    setMetrics(optimizedMetrics);
    setOptimizationStatus('Optimization complete!');
    
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizationStatus('');
    }, 2000);
  };

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstPaint > 1000) score -= 15;
    if (metrics.firstContentfulPaint > 1500) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    if (metrics.firstInputDelay > 100) score -= 15;
    
    return Math.max(score, 0);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400', bg: 'bg-orange-500/20' };
    return { grade: 'D', color: 'text-red-400', bg: 'bg-red-500/20' };
  };

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-2xl max-w-sm"
      >
        {/* Performance Score */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-white">Performance</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${grade.bg} ${grade.color}`}>
            {grade.grade}
          </div>
        </div>

        {/* Score Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-2 rounded-full ${
              score >= 90 ? 'bg-green-500' :
              score >= 80 ? 'bg-yellow-500' :
              score >= 70 ? 'bg-orange-500' : 'bg-red-500'
            }`}
          />
        </div>

        {/* Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Load Time:</span>
            <span className="text-white">{Math.round(metrics.loadTime)}ms</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">First Paint:</span>
            <span className="text-white">{Math.round(metrics.firstPaint)}ms</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">FCP:</span>
            <span className="text-white">{Math.round(metrics.firstContentfulPaint)}ms</span>
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOptimizing ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Optimizing...
            </div>
          ) : (
            'Optimize Performance'
          )}
        </button>

        {/* Status Message */}
        {optimizationStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-xs text-center text-cyan-400"
          >
            {optimizationStatus}
          </motion.div>
        )}

        {/* Performance Tips */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Performance Tips:</div>
          <div className="space-y-1 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Battery className="w-3 h-3" />
              <span>Enable lazy loading</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3" />
              <span>Optimize images</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Minimize CSS/JS</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;