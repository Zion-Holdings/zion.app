import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, TrendingUp, Gauge, Database, Image, Code, Cpu, 
  Activity, BarChart3, Settings, RefreshCw, AlertTriangle,
  CheckCircle, Clock, Target, Rocket, Shield, Brain
} from 'lucide-react';

// Add browser API types
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  onMetricsUpdate 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const layoutShiftEntries = performance.getEntriesByType('layout-shift');

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0)
    };

    // Measure LCP if supported
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        newMetrics.largestContentfulPaint = lastEntry.startTime;
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  ]);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Optimize images and resources
  const optimizeResources = useCallback(() => {
    setIsOptimizing(true);
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      document.head.appendChild(link);
    });

    setIsOptimizing(false);
  }, []);

  // Monitor performance
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure initial performance
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Optimize resources after initial load
    const timer = setTimeout(optimizeResources, 1000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearTimeout(timer);
    };
  }, [measurePerformance, optimizeResources]);

  // Performance warning component
  const PerformanceWarning = () => {
    if (!metrics) return null;

    const isSlow = metrics.loadTime > 3000 || metrics.firstContentfulPaint > 2000;
    
    if (!isSlow) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg z-50"
      >
        <div className="text-sm font-medium">Performance Notice</div>
        <div className="text-xs">Page load time: {Math.round(metrics.loadTime)}ms</div>
      </motion.div>
    );
  };

  return (
    <>
      {children}
      <PerformanceWarning />
      
      {/* Performance Debug Panel (only in development) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
        >
          <div className="text-sm font-bold mb-2">Performance Metrics</div>
          <div className="text-xs space-y-1">
            <div>Load Time: {Math.round(metrics.loadTime)}ms</div>
            <div>DOM Ready: {Math.round(metrics.domContentLoaded)}ms</div>
            <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
            <div>LCP: {Math.round(metrics.largestContentfulPaint)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          </div>
          <div className={`text-sm px-3 py-1 rounded-full inline-block ${getScoreBg(performanceScore)}`}>
            Performance Score
          </div>
        </div>
        
        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">{metrics.bundleSize}KB</div>
          <div className="text-sm text-gray-400">Bundle Size</div>
        </div>
        
        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">{metrics.imageCount}</div>
          <div className="text-sm text-gray-400">Images</div>
        </div>
        
        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">{metrics.loadTime}ms</div>
          <div className="text-sm text-gray-400">Load Time</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={autoOptimizeAll}
          className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2"
        >
          <Rocket className="w-5 h-5" />
          <span>Auto-Optimize All</span>
        </button>
        
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="p-4 bg-black/30 border border-gray-700 text-gray-400 hover:text-white hover:bg-black/50 rounded-lg transition-all flex items-center justify-center space-x-2"
        >
          <BarChart3 className="w-5 h-5" />
          <span>Advanced Profiling</span>
        </button>
        
        <button
          onClick={analyzePerformance}
          disabled={isAnalyzing}
          className="p-4 bg-black/30 border border-gray-700 text-gray-400 hover:text-white hover:bg-black/50 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Activity className="w-5 h-5" />
          <span>Real-time Monitor</span>
        </button>
      </div>

      {/* Optimization Suggestions */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">Optimization Suggestions</h3>
        
        {suggestions.map((suggestion) => (
          <motion.div
            key={suggestion.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/30 border border-gray-700 rounded-lg p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-white font-semibold">{suggestion.title}</h4>
                  {getStatusIcon(suggestion.status)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                    {suggestion.impact.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-2">{suggestion.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>Category: {suggestion.category}</span>
                  <span>Estimated Savings: {suggestion.estimatedSavings}</span>
                </div>
              </div>
              
              <div className="ml-4">
                <button
                  onClick={() => autoOptimize(suggestion.id)}
                  disabled={suggestion.status === 'in-progress' || suggestion.status === 'completed'}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {suggestion.status === 'completed' ? 'Completed' : 
                   suggestion.status === 'in-progress' ? 'Optimizing...' : 'Auto-Optimize'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Profiling Panel */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-6 border-t border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Performance Profiling</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <span>System Resources</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory Usage:</span>
                    <span className="text-white">{metrics.memoryUsage} MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU Usage:</span>
                    <span className="text-white">{metrics.cpuUsage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network Requests:</span>
                    <span className="text-white">{metrics.networkRequests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cache Hit Rate:</span>
                    <span className="text-white">{metrics.cacheHitRate}%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span>Performance Targets</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Load Time:</span>
                    <span className="text-white">≤ 2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Bundle Size:</span>
                    <span className="text-white">≤ 300KB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Score:</span>
                    <span className="text-white">≥ 90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Score:</span>
                    <span className={getScoreColor(performanceScore)}>{performanceScore}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerformanceOptimizer;