import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, TrendingUp, TrendingDown, Zap, AlertTriangle, CheckCircle, 
  Clock, Database, Cpu, HardDrive, Wifi, Gauge, Target, BarChart3,
  RefreshCw, Settings, Eye, EyeOff, Maximize2, Minimize2, X
} from 'lucide-react';

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

interface ResourceMetrics {
  jsSize: number;
  cssSize: number;
  imageSize: number;
  fontSize: number;
  totalSize: number;
  requests: number;
  domains: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
  onToggle?: (visible: boolean) => void;
}



const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  isVisible = false, 
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [autoRefresh, setAutoRefresh] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced performance monitoring with Core Web Vitals
  const measurePerformance = useCallback(async () => {
    if (!('performance' in window)) return;

    try {
      setIsMonitoring(true);
      
      // Wait for page to fully load
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }

      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const resources = performance.getEntriesByType('resource');

      // Calculate metrics
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = await getLCP();
      const fid = await getFID();
      const cls = await getCLS();
      const ttfb = navigation.responseStart - navigation.requestStart;

      // Calculate scores
      const fcpScore = getFCPScore(fcp);
      const lcpScore = getLCPScore(lcp);
      const fidScore = getFIDScore(fid);
      const clsScore = getCLSScore(cls);
      const ttfbScore = getTTFBScore(ttfb);
      const overallScore = calculateOverallScore([fcpScore, lcpScore, fidScore, clsScore, ttfbScore]);

      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fcpScore,
        lcpScore,
        fidScore,
        clsScore,
        ttfbScore,
        overallScore
      });

      // Calculate resource metrics
      const jsResources = resources.filter(r => r.name.includes('.js'));
      const cssResources = resources.filter(r => r.name.includes('.css'));
      const imageResources = resources.filter(r => 
        r.name.includes('.jpg') || r.name.includes('.png') || r.name.includes('.webp') || r.name.includes('.svg')
      );
      const fontResources = resources.filter(r => 
        r.name.includes('.woff') || r.name.includes('.woff2') || r.name.includes('.ttf')
      );

      const jsSize = jsResources.reduce((sum, r) => sum + ((r as any).transferSize || 0), 0);
      const cssSize = cssResources.reduce((sum, r) => sum + ((r as any).transferSize || 0), 0);
      const imageSize = imageResources.reduce((sum, r) => sum + ((r as any).transferSize || 0), 0);
      const fontSize = fontResources.reduce((sum, r) => sum + ((r as any).transferSize || 0), 0);
      const totalSize = jsSize + cssSize + imageSize + fontSize;
      const requests = resources.length;
      const domains = new Set(resources.map(r => new URL(r.name).hostname)).size;

      setResourceMetrics({
        jsSize,
        cssSize,
        imageSize,
        fontSize,
        totalSize,
        requests,
        domains
      });

      // Generate optimization suggestions
      const suggestions = generateOptimizationSuggestions({
        fcp, lcp, fid, cls, ttfb,
        jsSize, cssSize, imageSize, fontSize, totalSize, requests, domains
      });
      setOptimizationSuggestions(suggestions);

      setLastUpdate(new Date());
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, []);

  // Get Largest Contentful Paint
  const getLCP = async (): Promise<number> => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    }
    return 0;
  };

  // Get First Input Delay
  const getFID = async (): Promise<number> => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0] as any;
          resolve(firstEntry.processingStart - firstEntry.startTime);
        });
        observer.observe({ entryTypes: ['first-input'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    }
    return 0;
  };

  // Get Cumulative Layout Shift
  const getCLS = async (): Promise<number> => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Fallback timeout
        setTimeout(() => resolve(clsValue), 5000);
      });
    }
    return 0;
  };

  // Score calculations
  const getFCPScore = (fcp: number): string => {
    if (fcp < 1800) return 'Good';
    if (fcp < 3000) return 'Needs Improvement';
    return 'Poor';
  };

  const getLCPScore = (lcp: number): string => {
    if (lcp < 2500) return 'Good';
    if (lcp < 4000) return 'Needs Improvement';
    return 'Poor';
  };

  const getFIDScore = (fid: number): string => {
    if (fid < 100) return 'Good';
    if (fid < 300) return 'Needs Improvement';
    return 'Poor';
  };

  const getCLSScore = (cls: number): string => {
    if (cls < 0.1) return 'Good';
    if (cls < 0.25) return 'Needs Improvement';
    return 'Poor';
  };

  const getTTFBScore = (ttfb: number): string => {
    if (ttfb < 800) return 'Good';
    if (ttfb < 1800) return 'Needs Improvement';
    return 'Poor';
  };

  const calculateOverallScore = (scores: string[]): string => {
    const goodCount = scores.filter(s => s === 'Good').length;
    const total = scores.length;
    const percentage = (goodCount / total) * 100;
    
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Needs Improvement';
    return 'Poor';
  };

  // Generate optimization suggestions
  const generateOptimizationSuggestions = (data: any): string[] => {
    const suggestions: string[] = [];

    if (data.lcp > 4000) {
      suggestions.push('Optimize images and reduce render-blocking resources for better LCP');
    }
    if (data.fid > 300) {
      suggestions.push('Reduce JavaScript execution time and optimize event handlers');
    }
    if (data.cls > 0.25) {
      suggestions.push('Fix layout shifts by setting explicit dimensions for images and ads');
    }
    if (data.ttfb > 1800) {
      suggestions.push('Improve server response time and optimize database queries');
    }
    if (data.jsSize > 500000) {
      suggestions.push('Implement code splitting and lazy loading for JavaScript bundles');
    }
    if (data.imageSize > 1000000) {
      suggestions.push('Use WebP format and implement responsive images');
    }
    if (data.requests > 50) {
      suggestions.push('Consolidate HTTP requests and implement resource bundling');
    }

    return suggestions.slice(0, 5); // Limit to top 5 suggestions
  };

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && isVisible) {
      intervalRef.current = setInterval(measurePerformance, 30000); // Every 30 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, isVisible, measurePerformance]);

  // Initial measurement
  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible, measurePerformance]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleAutoRefresh = () => setAutoRefresh(!autoRefresh);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/25 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
            <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoRefresh}
              className={`p-1.5 rounded-lg transition-colors ${
                autoRefresh 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
              title={autoRefresh ? 'Disable auto-refresh' : 'Enable auto-refresh'}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggle?.(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-64'}`}>
          <div className="p-4 space-y-4">
            {/* Overall Score */}
            {metrics && (
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {metrics.overallScore}
                </div>
                <div className="text-xs text-white/60">
                  Overall Performance Score
                </div>
              </div>
            )}

            {/* Core Web Vitals */}
            {metrics && (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-white/60">FCP</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {Math.round(metrics.fcp)}ms
                  </div>
                  <div className={`text-xs ${getScoreColor(metrics.fcpScore)}`}>
                    {metrics.fcpScore}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-white/60">LCP</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {Math.round(metrics.lcp)}ms
                  </div>
                  <div className={`text-xs ${getScoreColor(metrics.lcpScore)}`}>
                    {metrics.lcpScore}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-white/60">FID</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {Math.round(metrics.fid)}ms
                  </div>
                  <div className={`text-xs ${getScoreColor(metrics.fidScore)}`}>
                    {metrics.fidScore}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-white/60">CLS</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.cls.toFixed(3)}
                  </div>
                  <div className={`text-xs ${getScoreColor(metrics.clsScore)}`}>
                    {metrics.clsScore}
                  </div>
                </div>
              </div>
            )}

            {/* Resource Metrics */}
            {resourceMetrics && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Total Size:</span>
                  <span className="text-white font-medium">
                    {(resourceMetrics.totalSize / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Requests:</span>
                  <span className="text-white font-medium">{resourceMetrics.requests}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Domains:</span>
                  <span className="text-white font-medium">{resourceMetrics.domains}</span>
                </div>
              </div>
            )}

            {/* Optimization Suggestions */}
            {optimizationSuggestions.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Optimization Suggestions</h4>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {optimizationSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs">
                      <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 leading-relaxed">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="text-center text-xs text-white/40">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-cyan-500/20 bg-white/5">
          <button
            onClick={measurePerformance}
            disabled={isMonitoring}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isMonitoring ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Measuring...
              </>
            ) : (
              <>
                <Activity className="w-4 h-4" />
                Measure Performance
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to get score colors
const getScoreColor = (score: string): string => {
  switch (score) {
    case 'Good':
    case 'Excellent':
      return 'text-green-400';
    case 'Needs Improvement':
      return 'text-yellow-400';
    case 'Poor':
      return 'text-red-400';
    default:
      return 'text-white/60';
  }
};

export default PerformanceMonitor;