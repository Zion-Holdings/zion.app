import React, { useState, useEffect, useCallback } from 'react';
import { 
  Activity, 
  Clock, 
  HardDrive, 
  Wifi, 
  Cpu, 
  MemoryStick,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkLatency: number;
  cpuUsage: number;
  timestamp: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Performance thresholds
  const thresholds = {
    loadTime: { warning: 3000, error: 5000 },
    firstContentfulPaint: { warning: 1500, error: 2500 },
    largestContentfulPaint: { warning: 2500, error: 4000 },
    cumulativeLayoutShift: { warning: 0.1, error: 0.25 },
    firstInputDelay: { warning: 100, error: 300 },
    timeToInteractive: { warning: 3500, error: 5000 }
  };

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const largestContentfulPaint = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Get memory info if available
    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100 : 0;
    
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint,
      largestContentfulPaint,
      cumulativeLayoutShift: 0, // Would need to be calculated from LayoutShift API
      firstInputDelay: 0, // Would need to be calculated from FirstInput API
      timeToInteractive: navigation.domInteractive - navigation.fetchStart,
      memoryUsage,
      networkLatency: navigation.responseEnd - navigation.requestStart,
      cpuUsage: 0, // Would need to be calculated from Performance API
      timestamp: Date.now()
    };
  }, []);

  // Check for performance issues
  const checkPerformanceIssues = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];
    
    if (metrics.loadTime > thresholds.loadTime.error) {
      newAlerts.push({
        id: `load-${Date.now()}`,
        type: 'error',
        message: `Page load time is very slow: ${Math.round(metrics.loadTime)}ms`,
        timestamp: Date.now()
      });
    } else if (metrics.loadTime > thresholds.loadTime.warning) {
      newAlerts.push({
        id: `load-${Date.now()}`,
        type: 'warning',
        message: `Page load time is slow: ${Math.round(metrics.loadTime)}ms`,
        timestamp: Date.now()
      });
    }
    
    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.error) {
      newAlerts.push({
        id: `fcp-${Date.now()}`,
        type: 'error',
        message: `First Contentful Paint is very slow: ${Math.round(metrics.firstContentfulPaint)}ms`,
        timestamp: Date.now()
      });
    }
    
    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.error) {
      newAlerts.push({
        id: `lcp-${Date.now()}`,
        type: 'error',
        message: `Largest Contentful Paint is very slow: ${Math.round(metrics.largestContentfulPaint)}ms`,
        timestamp: Date.now()
      });
    }
    
    if (metrics.memoryUsage > 80) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `High memory usage: ${Math.round(metrics.memoryUsage)}%`,
        timestamp: Date.now()
      });
    }
    
    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, []);

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Initial metrics
    const initialMetrics = getPerformanceMetrics();
    setMetrics(initialMetrics);
    checkPerformanceIssues(initialMetrics);
    
    // Monitor performance continuously
    const interval = setInterval(() => {
      const currentMetrics = getPerformanceMetrics();
      setMetrics(currentMetrics);
      checkPerformanceIssues(currentMetrics);
    }, 5000); // Check every 5 seconds
    
    return () => clearInterval(interval);
  }, [getPerformanceMetrics, checkPerformanceIssues]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Clear alerts
  const clearAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  // Clear all alerts
  const clearAllAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.loadTime > thresholds.loadTime.error) score -= 20;
    else if (metrics.loadTime > thresholds.loadTime.warning) score -= 10;
    
    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.error) score -= 20;
    else if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.warning) score -= 10;
    
    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.error) score -= 20;
    else if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.warning) score -= 10;
    
    if (metrics.memoryUsage > 80) score -= 10;
    
    return Math.max(0, score);
  }, []);

  // Get score color
  const getScoreColor = useCallback((score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  // Get score icon
  const getScoreIcon = useCallback((score: number) => {
    if (score >= 90) return <CheckCircle size={20} className="text-green-500" />;
    if (score >= 70) return <AlertTriangle size={20} className="text-yellow-500" />;
    return <AlertTriangle size={20} className="text-red-500" />;
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      return startMonitoring();
    }
  }, [isMonitoring, startMonitoring]);

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        aria-label="Open performance monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Activity size={24} />
      </button>

      {/* Performance Monitor Panel */}
      {isOpen && (
        <div 
          id="performance-panel"
          className="fixed top-20 left-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96 max-h-[80vh] overflow-y-auto"
          role="dialog"
          aria-labelledby="performance-title"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="performance-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Activity size={20} />
              Performance Monitor
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close performance monitor"
            >
              <X size={20} />
            </button>
          </div>

          {/* Monitoring Controls */}
          <div className="mb-4 flex gap-2">
            <button
              onClick={startMonitoring}
              disabled={isMonitoring}
              className="px-3 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded text-sm font-medium transition-colors"
            >
              Start Monitoring
            </button>
            <button
              onClick={stopMonitoring}
              disabled={!isMonitoring}
              className="px-3 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded text-sm font-medium transition-colors"
            >
              Stop Monitoring
            </button>
          </div>

          {/* Performance Score */}
          {metrics && (
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Score</span>
                {getScoreIcon(getPerformanceScore(metrics))}
              </div>
              <div className={`text-2xl font-bold ${getScoreColor(getPerformanceScore(metrics))}`}>
                {getPerformanceScore(metrics)}/100
              </div>
            </div>
          )}

          {/* Performance Metrics */}
          {metrics && (
            <div className="space-y-3 mb-4">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">Core Metrics</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Load Time</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {Math.round(metrics.loadTime)}ms
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {Math.round(metrics.firstContentfulPaint)}ms
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {Math.round(metrics.largestContentfulPaint)}ms
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <MemoryStick size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Memory</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {Math.round(metrics.memoryUsage)}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Alerts */}
          {alerts.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Alerts</h3>
                <button
                  onClick={clearAllAlerts}
                  className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Clear All
                </button>
              </div>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {alerts.slice(-5).map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded text-sm ${
                      alert.type === 'error' 
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200' 
                        : alert.type === 'warning'
                        ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
                        : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span>{alert.message}</span>
                      <button
                        onClick={() => clearAlert(alert.id)}
                        className="ml-2 text-xs opacity-70 hover:opacity-100"
                        aria-label="Clear alert"
                      >
                        ×
                      </button>
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Last Updated */}
          {metrics && (
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;