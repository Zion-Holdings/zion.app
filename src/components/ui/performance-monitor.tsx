import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Button } from './button';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
  timestamp: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showDetails?: boolean;
  className?: string;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export function PerformanceMonitor({ 
  enabled = true,
  showDetails = false,
  className = "",
  onMetricsUpdate
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0,
    timestamp: Date.now()
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceHistory, setPerformanceHistory] = useState<PerformanceMetrics[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance alerts
  const checkPerformanceAlerts = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    
    if (currentMetrics.fps < 30) {
      newAlerts.push(`Low FPS detected: ${currentMetrics.fps} FPS`);
    }
    
    if (currentMetrics.memoryUsage > 100) {
      newAlerts.push(`High memory usage: ${currentMetrics.memoryUsage} MB`);
    }
    
    if (currentMetrics.renderTime > 16.67) {
      newAlerts.push(`Slow render time: ${currentMetrics.renderTime}ms`);
    }
    
    if (currentMetrics.networkLatency > 200) {
      newAlerts.push(`High network latency: ${currentMetrics.networkLatency}ms`);
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts].slice(-5)); // Keep last 5 alerts
    }
  }, []);

  // FPS calculation
  const calculateFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isMonitoring) {
        requestAnimationFrame(countFrame);
      }
    };
    
    if (isMonitoring) {
      requestAnimationFrame(countFrame);
    }
  }, [isMonitoring]);

  // Memory usage monitoring
  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
      const used = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      setMetrics(prev => ({ ...prev, memoryUsage: Math.round(used * 100) / 100 }));
    }
  }, []);

  // Load time measurement
  const measureLoadTime = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    }
  }, []);

  // Render time measurement
  const measureRenderTime = useCallback(() => {
    const start = performance.now();
    requestAnimationFrame(() => {
      const end = performance.now();
      const renderTime = end - start;
      setMetrics(prev => ({ ...prev, renderTime: Math.round(renderTime * 100) / 100 }));
    });
  }, []);

  // Network latency simulation (in real app, this would measure actual API calls)
  const measureNetworkLatency = useCallback(() => {
    const start = performance.now();
    fetch('/api/ping', { method: 'HEAD' })
      .then(() => {
        const end = performance.now();
        const latency = end - start;
        setMetrics(prev => ({ ...prev, networkLatency: Math.round(latency) }));
      })
      .catch(() => {
        // If API is not available, use a simulated value
        setMetrics(prev => ({ ...prev, networkLatency: Math.random() * 100 + 20 }));
      });
  }, []);

  // Update metrics
  const updateMetrics = useCallback(() => {
    if (!enabled || !isMonitoring) return;

    const newMetrics: PerformanceMetrics = {
      ...metrics,
      timestamp: Date.now()
    };

    setMetrics(newMetrics);
    setPerformanceHistory(prev => [...prev.slice(-50), newMetrics]); // Keep last 50 entries
    onMetricsUpdate?.(newMetrics);

    // Check for performance alerts
    checkPerformanceAlerts(newMetrics);
  }, [enabled, isMonitoring, metrics, onMetricsUpdate, checkPerformanceAlerts]);

  // Start/stop monitoring
  const toggleMonitoring = useCallback(() => {
    setIsMonitoring(!isMonitoring);
  }, [isMonitoring]);

  // Clear alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Effects
  useEffect(() => {
    if (enabled && isMonitoring) {
      calculateFPS();
      
      const interval = setInterval(() => {
        getMemoryUsage();
        measureRenderTime();
        measureNetworkLatency();
        updateMetrics();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [enabled, isMonitoring, calculateFPS, getMemoryUsage, measureRenderTime, measureNetworkLatency, updateMetrics]);

  useEffect(() => {
    if (enabled) {
      measureLoadTime();
    }
  }, [enabled, measureLoadTime]);

  if (!enabled) return null;

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fps < 60) score -= 20;
    if (metrics.memoryUsage > 100) score -= 15;
    if (metrics.renderTime > 16.67) score -= 15;
    if (metrics.networkLatency > 100) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <TrendingUp className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  return (
    <div className={`fixed bottom-4 left-4 z-40 ${className}`}>
      {/* Main Performance Indicator */}
      <motion.div
        className="bg-zion-blue-dark/90 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Activity className={`w-5 h-5 ${isMonitoring ? 'text-zion-cyan' : 'text-zinc-400'}`} />
            {isMonitoring && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-zion-cyan rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
          
          <div className="text-right">
            <div className="text-white text-sm font-medium">
              {getScoreColor(getPerformanceScore())} {getScoreIcon(getPerformanceScore())}
            </div>
            <div className="text-zinc-300 text-xs">
              {getPerformanceScore()}/100
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Performance Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-full left-0 mb-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-4 min-w-80"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Performance Monitor</h3>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleMonitoring}
                  className={`text-xs ${isMonitoring ? 'bg-zion-cyan text-zion-blue-dark' : 'text-zinc-400'}`}
                >
                  {isMonitoring ? 'Stop' : 'Start'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsExpanded(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  ×
                </Button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-3 bg-zion-blue/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-zinc-300 text-sm">Performance Score</span>
                <span className={`text-lg font-bold ${getScoreColor(getPerformanceScore())}`}>
                  {getPerformanceScore()}/100
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${getScoreColor(getPerformanceScore()).replace('text-', 'bg-')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${getPerformanceScore()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center p-2 bg-zion-blue/10 rounded">
                <div className="text-white text-lg font-bold">{metrics.fps}</div>
                <div className="text-zinc-400 text-xs">FPS</div>
              </div>
              <div className="text-center p-2 bg-zion-blue/10 rounded">
                <div className="text-white text-lg font-bold">{metrics.memoryUsage}MB</div>
                <div className="text-zinc-400 text-xs">Memory</div>
              </div>
              <div className="text-center p-2 bg-zion-blue/10 rounded">
                <div className="text-white text-lg font-bold">{metrics.renderTime}ms</div>
                <div className="text-zinc-400 text-xs">Render</div>
              </div>
              <div className="text-center p-2 bg-zion-blue/10 rounded">
                <div className="text-white text-lg font-bold">{metrics.networkLatency}ms</div>
                <div className="text-zinc-400 text-xs">Network</div>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-300 text-sm font-medium">Alerts</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={clearAlerts}
                    className="text-zinc-400 hover:text-zion-cyan text-xs"
                  >
                    Clear
                  </Button>
                </div>
                <div className="space-y-1">
                  {alerts.map((alert, index) => (
                    <div key={index} className="text-red-400 text-xs p-2 bg-red-500/10 rounded">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Performance History Chart */}
            {showDetails && performanceHistory.length > 0 && (
              <div className="border-t border-zion-blue-light/20 pt-4">
                <h4 className="text-zinc-300 text-sm font-medium mb-3">Performance History</h4>
                <div className="h-20 flex items-end gap-1">
                  {performanceHistory.slice(-20).map((entry, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-zion-cyan rounded-t"
                      style={{ height: `${(entry.fps / 60) * 100}%` }}
                      title={`FPS: ${entry.fps}, Memory: ${entry.memoryUsage}MB`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}