import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Cpu, 
  HardDrive,
  Database,
  Network,
  Battery,
  Settings,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  cpuUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  targetFPS?: number;
  enableOptimizations?: boolean;
  showMetrics?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  targetFPS = 60,
  enableOptimizations = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0
  });
  
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationLevel, setOptimizationLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const [showMetricsState, setShowMetricsState] = useState(showMetrics);
  const [performanceIssues, setPerformanceIssues] = useState<string[]>([]);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number | undefined>(undefined);
  const metricsIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // FPS Counter
  const measureFPS = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }
    
    animationFrameRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Memory Usage Monitor
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Load Time Monitor
  const measureLoadTime = useCallback(() => {
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  // Network Performance Monitor
  const measureNetworkPerformance = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/ping', { method: 'HEAD' });
      const end = performance.now();
      const networkLatency = end - start;
      setMetrics(prev => ({ ...prev, networkLatency }));
    } catch (error) {
      // Fallback to navigation timing
      if (performance.timing) {
        const networkLatency = performance.timing.responseEnd - performance.timing.requestStart;
        setMetrics(prev => ({ ...prev, networkLatency }));
      }
    }
  }, []);

  // Performance Issue Detection
  const detectPerformanceIssues = useCallback(() => {
    const issues: string[] = [];
    
    if (metrics.fps < targetFPS * 0.8) {
      issues.push(`Low FPS: ${metrics.fps} (target: ${targetFPS})`);
    }
    
    if (metrics.memoryUsage > 80) {
      issues.push(`High memory usage: ${metrics.memoryUsage}%`);
    }
    
    if (metrics.loadTime > 3000) {
      issues.push(`Slow load time: ${Math.round(metrics.loadTime)}ms`);
    }
    
    if (metrics.networkLatency > 1000) {
      issues.push(`High network latency: ${Math.round(metrics.networkLatency)}ms`);
    }
    
    setPerformanceIssues(issues);
  }, [metrics, targetFPS]);

  // Performance Optimizations
  const applyOptimizations = useCallback(() => {
    const newOptimizations: string[] = [];
    
    if (metrics.fps < targetFPS * 0.8) {
      // Reduce motion and animations
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
      newOptimizations.push('Reduced motion for better FPS');
    }
    
    if (metrics.memoryUsage > 80) {
      // Trigger garbage collection if possible
      if ('gc' in window) {
        (window as any).gc();
        newOptimizations.push('Triggered garbage collection');
      }
      
      // Reduce image quality
      document.documentElement.style.setProperty('--image-quality', 'low');
      newOptimizations.push('Reduced image quality');
    }
    
    if (metrics.loadTime > 3000) {
      // Preload critical resources
      const criticalResources = document.querySelectorAll('link[rel="preload"]');
      criticalResources.forEach(link => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'style');
      });
      newOptimizations.push('Preloaded critical resources');
    }
    
    if (metrics.networkLatency > 1000) {
      // Enable offline caching
      document.documentElement.style.setProperty('--offline-mode', 'enabled');
      newOptimizations.push('Enabled offline caching');
    }
    
    setOptimizations(newOptimizations);
  }, [metrics, targetFPS]);

  // Auto-optimization
  useEffect(() => {
    if (enableOptimizations && performanceIssues.length > 0) {
      const timer = setTimeout(() => {
        setIsOptimizing(true);
        applyOptimizations();
        setTimeout(() => setIsOptimizing(false), 1000);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [performanceIssues, enableOptimizations, applyOptimizations]);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Start FPS monitoring
    measureFPS();
    
    // Start metrics collection
    metricsIntervalRef.current = setInterval(() => {
      measureMemory();
      measureNetworkPerformance();
    }, 1000);
    
    // Measure load time after page load
    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
    }
    
    // Performance Observer for navigation timing
    if ('PerformanceObserver' in window) {
      performanceObserverRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const renderTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            setMetrics(prev => ({ ...prev, renderTime }));
          }
        }
      });
      
      performanceObserverRef.current.observe({ entryTypes: ['navigation'] });
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (metricsIntervalRef.current) {
        clearInterval(metricsIntervalRef.current);
      }
      if (performanceObserverRef.current) {
        performanceObserverRef.current.disconnect();
      }
      window.removeEventListener('load', measureLoadTime);
    };
  }, [measureFPS, measureMemory, measureNetworkPerformance, measureLoadTime]);

  // Detect performance issues
  useEffect(() => {
    detectPerformanceIssues();
  }, [detectPerformanceIssues]);

  // Get performance status
  const getPerformanceStatus = () => {
    if (metrics.fps >= targetFPS * 0.9 && metrics.memoryUsage < 70 && metrics.loadTime < 2000) {
      return { status: 'excellent', color: 'text-green-400', icon: CheckCircle };
    } else if (metrics.fps >= targetFPS * 0.7 && metrics.memoryUsage < 85 && metrics.loadTime < 4000) {
      return { status: 'good', color: 'text-yellow-400', icon: TrendingUp };
    } else {
      return { status: 'needs-attention', color: 'text-red-400', icon: AlertTriangle };
    }
  };

  const performanceStatus = getPerformanceStatus();
  const StatusIcon = performanceStatus.icon;

  return (
    <>
      {/* Performance Status Indicator */}
      {showMetricsState && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <StatusIcon className={`w-5 h-5 ${performanceStatus.color}`} />
            <span className="text-sm font-semibold">Performance</span>
            <button
              onClick={() => setShowDebugPanel(!showDebugPanel)}
              className="ml-auto p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              {showDebugPanel ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          
          {/* Quick Metrics */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-white/70">FPS:</span>
              <span className={metrics.fps >= targetFPS * 0.8 ? 'text-green-400' : 'text-red-400'}>
                {metrics.fps}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Memory:</span>
              <span className={metrics.memoryUsage < 80 ? 'text-green-400' : 'text-red-400'}>
                {metrics.memoryUsage}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Load:</span>
              <span className={metrics.loadTime < 3000 ? 'text-green-400' : 'text-red-400'}>
                {Math.round(metrics.loadTime)}ms
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Debug Panel */}
      <AnimatePresence>
        {showDebugPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-20 left-4 z-50 bg-black/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Performance Debug
              </h3>
              <button
                onClick={() => setShowDebugPanel(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Detailed Metrics */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white/90">System Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>CPU: {metrics.cpuUsage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-3 h-3 text-purple-400" />
                    <span>RAM: {metrics.memoryUsage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-3 h-3 text-green-400" />
                    <span>Load: {Math.round(metrics.loadTime)}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="w-3 h-3 text-yellow-400" />
                    <span>Net: {Math.round(metrics.networkLatency)}ms</span>
                  </div>
                </div>
              </div>
              
              {/* Performance Issues */}
              {performanceIssues.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-red-400">Issues Detected</h4>
                  <div className="space-y-1">
                    {performanceIssues.map((issue, index) => (
                      <div key={index} className="text-xs text-red-300 bg-red-500/10 p-2 rounded-lg">
                        {issue}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Applied Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-400">Optimizations Applied</h4>
                  <div className="space-y-1">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="text-xs text-green-300 bg-green-500/10 p-2 rounded-lg">
                        {optimization}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Manual Controls */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Optimization Level:</span>
                  <select
                    value={optimizationLevel}
                    onChange={(e) => setOptimizationLevel(e.target.value as 'low' | 'medium' | 'high')}
                    className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-xs text-white"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                
                <button
                  onClick={() => {
                    setIsOptimizing(true);
                    applyOptimizations();
                    setTimeout(() => setIsOptimizing(false), 1000);
                  }}
                  disabled={isOptimizing}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50"
                >
                  {isOptimizing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  {isOptimizing ? 'Optimizing...' : 'Apply Optimizations'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <button
        onClick={() => setShowMetricsState(!showMetricsState)}
        className="fixed top-4 right-4 z-40 p-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
        aria-label="Toggle Performance Monitor"
      >
        <Gauge className="w-5 h-5" />
      </button>

      {/* Optimized Content */}
      <div 
        className={`performance-optimized ${optimizationLevel}`}
        style={{
          '--target-fps': targetFPS,
          '--reduced-motion': metrics.fps < targetFPS * 0.8 ? 'reduce' : 'no-preference',
          '--image-quality': metrics.memoryUsage > 80 ? 'low' : 'high',
          '--offline-mode': metrics.networkLatency > 1000 ? 'enabled' : 'disabled'
        } as React.CSSProperties}
      >
        {children}
      </div>
    </>
  );
};

export default PerformanceOptimizer;