import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  BarChart3,
  Wifi,
  RefreshCw,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

// Extended interfaces for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
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

      // Get performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const resourceEntries = performance.getEntriesByType('resource');

      // Calculate metrics
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      // Calculate FID (First Input Delay) - simplified
      let fid = 0;
      if ('firstInputDelay' in navigation) {
        fid = (navigation as any).firstInputDelay;
      }

      // Calculate CLS (Cumulative Layout Shift) - simplified
      let cls = 0;
      if ('layoutShift' in window) {
        const observer = new (window as any).PerformanceObserver((list: any) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fmp: fcp, // Simplified
        si: lcp, // Simplified
        tti: lcp + 100 // Simplified
      };

      setMetrics(newMetrics);
      setLastUpdate(new Date());
      
      // Generate optimization suggestions
      const suggestions: string[] = [];
      if (fcp > 1800) suggestions.push('First Contentful Paint is slow. Optimize critical rendering path.');
      if (lcp > 2500) suggestions.push('Largest Contentful Paint is slow. Optimize images and fonts.');
      if (fid > 100) suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
      if (cls > 0.1) suggestions.push('Cumulative Layout Shift is high. Avoid layout shifts.');
      if (ttfb > 600) suggestions.push('Time to First Byte is slow. Optimize server response time.');
      
      setOptimizationSuggestions(suggestions);
      
    } catch (error) {
      console.error('Error measuring performance:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, []);

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && isVisible) {
      intervalRef.current = setInterval(measurePerformance, 30000); // 30 seconds
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoRefresh, isVisible, measurePerformance]);

  // Initial measurement
  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible, measurePerformance]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-2xl z-50 max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-white font-semibold">Performance Monitor</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-1 rounded ${autoRefresh ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'}`}
            title="Auto-refresh"
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-gray-400 hover:text-white rounded"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onToggle?.(false)}
            className="p-1 text-gray-400 hover:text-white rounded"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {isMonitoring ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : metrics ? (
          <div className="space-y-4">
            {/* Core Web Vitals */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Core Web Vitals</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-800/50 rounded p-2">
                  <div className="text-xs text-gray-400">FCP</div>
                  <div className="text-sm text-white">{metrics.fcp.toFixed(0)}ms</div>
                </div>
                <div className="bg-gray-800/50 rounded p-2">
                  <div className="text-xs text-gray-400">LCP</div>
                  <div className="text-sm text-white">{metrics.lcp.toFixed(0)}ms</div>
                </div>
                <div className="bg-gray-800/50 rounded p-2">
                  <div className="text-xs text-gray-400">FID</div>
                  <div className="text-sm text-white">{metrics.fid.toFixed(0)}ms</div>
                </div>
                <div className="bg-gray-800/50 rounded p-2">
                  <div className="text-xs text-gray-400">CLS</div>
                  <div className="text-sm text-white">{metrics.cls.toFixed(3)}</div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Additional Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">TTFB:</span>
                  <span className="text-white">{metrics.ttfb.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">FMP:</span>
                  <span className="text-white">{metrics.fmp.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Speed Index:</span>
                  <span className="text-white">{metrics.si.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">TTI:</span>
                  <span className="text-white">{metrics.tti.toFixed(0)}ms</span>
                </div>
              </div>
            </div>

            {/* Optimization Suggestions */}
            {optimizationSuggestions.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Optimization Suggestions</h4>
                <div className="space-y-2">
                  {optimizationSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-amber-300">
                      <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-700">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <p>No performance data available</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={measurePerformance}
            disabled={isMonitoring}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
          >
            {isMonitoring ? 'Measuring...' : 'Measure Now'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;