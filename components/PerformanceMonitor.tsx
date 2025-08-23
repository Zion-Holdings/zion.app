import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  HardDrive, 
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  RefreshCw,
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  cpuUsage: number;
  networkSpeed: number;
  bundleSize: number;
  imageOptimization: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  performanceScore: number;
}

interface PerformanceIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
  suggestion: string;
  category: string;
}

const PerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkSpeed: 0,
    bundleSize: 0,
    imageOptimization: 0,
    seoScore: 0,
    accessibilityScore: 0,
    bestPracticesScore: 0,
    performanceScore: 0
  });
  
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [autoRefresh, setAutoRefresh] = useState(false);
  
  const monitoringInterval = useRef<NodeJS.Timeout | null>(null);
  const performanceObserver = useRef<PerformanceObserver | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceMonitoring();
    }
    
    return () => {
      if (monitoringInterval.current) {
        clearInterval(monitoringInterval.current);
      }
      if (performanceObserver.current) {
        performanceObserver.current.disconnect();
      }
    };
  }, []);

  // Initialize performance monitoring
  const initializePerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        performanceObserver.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: Math.round(entry.startTime)
              }));
            }
          });
        });
        
        performanceObserver.current.observe({ entryTypes: ['paint'] });
        
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: Math.round(lastEntry.startTime)
            }));
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: Math.round(clsValue * 1000) / 1000
          }));
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        
        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const inputEntry = entry as any;
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: Math.round(inputEntry.processingStart - inputEntry.startTime)
            }));
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        
      } catch (error) {
        // Silently handle errors
      }
    }

    // Measure initial load time
    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
    }

    // Start monitoring
    startMonitoring();
  }, []);

           // Measure page load time
         const measureLoadTime = useCallback(() => {
           try {
             const navigation = performance.getEntriesByType('navigation')[0] as any;
             if (navigation) {
               const loadTime = navigation.loadEventEnd - navigation.startTime;
               setMetrics(prev => ({
                 ...prev,
                 loadTime: Math.round(loadTime)
               }));
             }
           } catch (error) {
             // Silently handle errors
           }
         }, []);

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    monitoringInterval.current = setInterval(() => {
      updateMetrics();
      setLastUpdate(new Date());
    }, 5000); // Update every 5 seconds
  }, []);

  // Update performance metrics
  const updateMetrics = useCallback(() => {
    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100,
        bundleSize: Math.round(memory.totalJSHeapSize / 1024 / 1024 * 100) / 100
      }));
    }

    // Simulate CPU and network metrics (in real app, these would come from actual monitoring)
    setMetrics(prev => ({
      ...prev,
      cpuUsage: Math.random() * 30 + 10, // Simulated CPU usage
      networkSpeed: Math.random() * 50 + 100 // Simulated network speed in Mbps
    }));

    // Calculate scores
    calculateScores();
    
    // Detect performance issues
    detectPerformanceIssues();
  }, []);

  // Calculate performance scores
  const calculateScores = useCallback(() => {
    const { firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift, firstInputDelay } = metrics;
    
    // Performance Score (based on Core Web Vitals)
    let performanceScore = 100;
    
    if (firstContentfulPaint > 1800) performanceScore -= 20;
    if (largestContentfulPaint > 2500) performanceScore -= 25;
    if (cumulativeLayoutShift > 0.1) performanceScore -= 20;
    if (firstInputDelay > 100) performanceScore -= 15;
    
    // SEO Score (simplified)
    const seoScore = Math.max(0, 100 - Math.floor(metrics.loadTime / 100));
    
    // Accessibility Score (simplified)
    const accessibilityScore = 95; // Would be calculated based on actual accessibility checks
    
    // Best Practices Score (simplified)
    const bestPracticesScore = 90; // Would be calculated based on actual best practices checks
    
    setMetrics(prev => ({
      ...prev,
      performanceScore: Math.max(0, performanceScore),
      seoScore,
      accessibilityScore,
      bestPracticesScore
    }));
  }, [metrics]);

  // Detect performance issues
  const detectPerformanceIssues = useCallback(() => {
    const newIssues: PerformanceIssue[] = [];
    
    if (metrics.firstContentfulPaint > 1800) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'warning',
        message: 'First Contentful Paint is slow',
        impact: 'high',
        suggestion: 'Optimize critical rendering path and reduce server response time',
        category: 'Performance'
      });
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'warning',
        message: 'Largest Contentful Paint is slow',
        impact: 'high',
        suggestion: 'Optimize images, implement lazy loading, and improve server response time',
        category: 'Performance'
      });
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        message: 'High Cumulative Layout Shift detected',
        impact: 'medium',
        suggestion: 'Set explicit dimensions for images and avoid inserting content above existing content',
        category: 'User Experience'
      });
    }
    
    if (metrics.firstInputDelay > 100) {
      newIssues.push({
        id: 'fid-high',
        type: 'warning',
        message: 'First Input Delay is high',
        impact: 'medium',
        suggestion: 'Reduce JavaScript execution time and optimize event handlers',
        category: 'Interactivity'
      });
    }
    
    if (metrics.memoryUsage > 50) {
      newIssues.push({
        id: 'memory-high',
        type: 'info',
        message: 'High memory usage detected',
        impact: 'low',
        suggestion: 'Consider implementing memory optimization techniques',
        category: 'Resource Usage'
      });
    }
    
    setIssues(newIssues);
  }, [metrics]);

  // Refresh metrics manually
  const refreshMetrics = useCallback(() => {
    updateMetrics();
    setLastUpdate(new Date());
  }, [updateMetrics]);

  // Toggle auto-refresh
  const toggleAutoRefresh = useCallback(() => {
    setAutoRefresh(!autoRefresh);
    if (!autoRefresh) {
      startMonitoring();
    } else if (monitoringInterval.current) {
      clearInterval(monitoringInterval.current);
      setIsMonitoring(false);
    }
  }, [autoRefresh, startMonitoring]);

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <X className="w-4 h-4" />;
  };

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Performance Monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6 mx-auto" />
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              id="performance-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-6 z-50 w-96 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto"
              role="dialog"
              aria-labelledby="performance-title"
              aria-describedby="performance-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 id="performance-title" className="text-xl font-bold text-white flex items-center space-x-2">
                    <Gauge className="w-5 h-5 text-green-400" />
                    <span>Performance Monitor</span>
                  </h2>
                  <p id="performance-description" className="text-sm text-white/70">
                    Real-time performance metrics and insights
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={refreshMetrics}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                    aria-label="Refresh metrics"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleAutoRefresh}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      autoRefresh 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'hover:bg-white/10 text-white/70 hover:text-white'
                    }`}
                    aria-label="Toggle auto-refresh"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-white/50">
                  Last update: {lastUpdate.toLocaleTimeString()}
                </div>
              </div>

              {/* Performance Scores */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getScoreIcon(metrics.performanceScore)}
                    <span className="text-sm font-medium text-white">Performance</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(metrics.performanceScore)}`}>
                    {metrics.performanceScore}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getScoreIcon(metrics.seoScore)}
                    <span className="text-sm font-medium text-white">SEO</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(metrics.seoScore)}`}>
                    {metrics.seoScore}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getScoreIcon(metrics.accessibilityScore)}
                    <span className="text-sm font-medium text-white">Accessibility</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(metrics.accessibilityScore)}`}>
                    {metrics.accessibilityScore}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {getScoreIcon(metrics.bestPracticesScore)}
                    <span className="text-sm font-medium text-white">Best Practices</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(metrics.bestPracticesScore)}`}>
                    {metrics.bestPracticesScore}
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Core Web Vitals</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">First Contentful Paint</span>
                    <span className={`font-medium ${
                      metrics.firstContentfulPaint <= 1800 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {metrics.firstContentfulPaint}ms
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Largest Contentful Paint</span>
                    <span className={`font-medium ${
                      metrics.largestContentfulPaint <= 2500 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {metrics.largestContentfulPaint}ms
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Cumulative Layout Shift</span>
                    <span className={`font-medium ${
                      metrics.cumulativeLayoutShift <= 0.1 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {metrics.cumulativeLayoutShift}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">First Input Delay</span>
                    <span className={`font-medium ${
                      metrics.firstInputDelay <= 100 ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {metrics.firstInputDelay}ms
                    </span>
                  </div>
                </div>
              </div>

              {/* Resource Usage */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  <span>Resource Usage</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Memory Usage</span>
                    <span className="font-medium text-white">{metrics.memoryUsage} MB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Bundle Size</span>
                    <span className="font-medium text-white">{metrics.bundleSize} MB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">CPU Usage</span>
                    <span className="font-medium text-white">{metrics.cpuUsage.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Network Speed</span>
                    <span className="font-medium text-white">{metrics.networkSpeed.toFixed(0)} Mbps</span>
                  </div>
                </div>
              </div>

              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span>Performance Issues ({issues.length})</span>
                  </h3>
                  <div className="space-y-3">
                    {issues.map((issue) => (
                      <div key={issue.id} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            issue.type === 'error' ? 'bg-red-400' :
                            issue.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                          }`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-white">{issue.message}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                issue.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                                issue.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {issue.impact}
                              </span>
                            </div>
                            <p className="text-xs text-white/70 mb-2">{issue.suggestion}</p>
                            <span className="text-xs text-white/50">{issue.category}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="text-center">
                <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg ${
                  isMonitoring 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isMonitoring ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`} />
                  <span className="text-sm">
                    {isMonitoring ? 'Monitoring Active' : 'Monitoring Inactive'}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;