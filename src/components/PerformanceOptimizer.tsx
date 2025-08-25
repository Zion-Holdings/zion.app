import React, { useEffect, useState, useCallback } from 'react';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Loader2
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  bundleSize: number;
  lighthouseScore: number;
}

interface PerformanceOptimizerProps {
  onOptimize?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onOptimize,
  showMetrics = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Measure page load time
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
        return loadTime;
      }
    }
    return 0;
  }, []);

  // Measure memory usage
  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
      setMetrics(prev => ({ ...prev, memoryUsage }));
      return memoryUsage;
    }
    return 0;
  }, []);

  // Estimate bundle size
  const estimateBundleSize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('dist/js/')) {
          // Estimate size based on common patterns
          totalSize += 50; // KB estimate
        }
      });
      
      setMetrics(prev => ({ ...prev, bundleSize: totalSize }));
      return totalSize;
    }
    return 0;
  }, []);

  // Calculate Lighthouse-like score
  const calculateLighthouseScore = useCallback((loadTime: number, memoryUsage: number, bundleSize: number) => {
    let score = 100;
    
    // Deduct points for slow load time
    if (loadTime > 3000) score -= 30;
    else if (loadTime > 2000) score -= 20;
    else if (loadTime > 1000) score -= 10;
    
    // Deduct points for high memory usage
    if (memoryUsage > 100) score -= 25;
    else if (memoryUsage > 50) score -= 15;
    else if (memoryUsage > 25) score -= 5;
    
    // Deduct points for large bundle size
    if (bundleSize > 500) score -= 25;
    else if (bundleSize > 300) score -= 15;
    else if (bundleSize > 100) score -= 5;
    
    return Math.max(0, score);
  }, []);

  // Run performance analysis
  const runPerformanceAnalysis = useCallback(async () => {
    setIsOptimizing(true);
    
    // Measure metrics
    const loadTime = measureLoadTime();
    const memoryUsage = measureMemoryUsage();
    const bundleSize = estimateBundleSize();
    
    // Calculate score
    const lighthouseScore = calculateLighthouseScore(loadTime, memoryUsage, bundleSize);
    
    const newMetrics = { loadTime, memoryUsage, bundleSize, lighthouseScore };
    setMetrics(newMetrics);
    
    // Generate optimization suggestions
    const suggestions: string[] = [];
    
    if (loadTime > 2000) {
      suggestions.push('Implement lazy loading for images and components');
      suggestions.push('Optimize bundle splitting and code splitting');
    }
    
    if (memoryUsage > 50) {
      suggestions.push('Implement proper cleanup in useEffect hooks');
      suggestions.push('Use React.memo for expensive components');
    }
    
    if (bundleSize > 300) {
      suggestions.push('Enable tree shaking and dead code elimination');
      suggestions.push('Use dynamic imports for large dependencies');
    }
    
    if (lighthouseScore < 70) {
      suggestions.push('Optimize critical rendering path');
      suggestions.push('Implement service worker for caching');
    }
    
    setOptimizations(suggestions);
    
    // Call callback if provided
    if (onOptimize) {
      onOptimize(newMetrics);
    }
    
    setIsOptimizing(false);
  }, [measureLoadTime, measureMemoryUsage, estimateBundleSize, calculateLighthouseScore, onOptimize]);

  // Auto-run analysis on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      runPerformanceAnalysis();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [runPerformanceAnalysis]);

  // Periodic memory monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      measureMemoryUsage();
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [measureMemoryUsage]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    return <AlertCircle className="w-5 h-5 text-red-400" />;
  };

  if (!showMetrics) {
    return (
      <button
        onClick={runPerformanceAnalysis}
        disabled={isOptimizing}
        className="fixed bottom-4 right-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        title="Performance Optimizer"
      >
        {isOptimizing ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <Zap className="w-6 h-6" />
        )}
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Performance</span>
          </h3>
          <button
            onClick={runPerformanceAnalysis}
            disabled={isOptimizing}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isOptimizing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">Load Time</span>
            </div>
            <div className="text-white font-semibold">
              {metrics.loadTime > 0 ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs text-gray-400">Memory</span>
            </div>
            <div className="text-white font-semibold">
              {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : 'N/A'}
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-400">Bundle</span>
            </div>
            <div className="text-white font-semibold">
              {metrics.bundleSize > 0 ? `${metrics.bundleSize}KB` : 'N/A'}
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              {getScoreIcon(metrics.lighthouseScore)}
              <span className="text-xs text-gray-400">Score</span>
            </div>
            <div className={`font-semibold ${getScoreColor(metrics.lighthouseScore)}`}>
              {metrics.lighthouseScore > 0 ? metrics.lighthouseScore : 'N/A'}
            </div>
          </div>
        </div>

        {/* Optimizations */}
        {optimizations.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Optimizations</h4>
            <div className="space-y-2">
              {optimizations.map((optimization, index) => (
                <div key={index} className="text-xs text-gray-300 bg-gray-800/30 rounded p-2">
                  • {optimization}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Status */}
        <div className="text-xs text-gray-400 text-center">
          {isOptimizing ? 'Analyzing...' : 'Auto-monitoring enabled'}
        </div>
      </div>
    </div>
  );
};