import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChartColumn, Zap, Clock, HardDrive, 
  Wifi, Cpu, Database, Activity,
  TrendingUp, TrendingDown, AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  logToConsole?: boolean;
  showUI?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  logToConsole = false,
  showUI = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Performance optimization: Memoized metric calculation
  const calculateMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    return {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: Math.round(navigation.responseStart - navigation.requestStart),
      domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      windowLoad: Math.round(navigation.loadEventEnd - navigation.fetchStart)
    };
  }, []);

  // Performance optimization: Efficient observer setup
  const setupObservers = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Input Delay observer
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as any; // Type assertion for first-input entries
            const fid = Math.round((firstInputEntry.processingStart || 0) - entry.startTime);
            setMetrics(prev => prev ? { ...prev, fid } : null);
          }
        });
      });
      
      observerRef.current.observe({ entryTypes: ['first-input'] });

      // Layout Shift observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Largest Contentful Paint observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = Math.round(lastEntry.startTime);
          setMetrics(prev => prev ? { ...prev, lcp } : null);
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    } catch (error) {
      if (logToConsole) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  }, [enabled, logToConsole]);

  // Performance optimization: Cleanup observers
  const cleanupObservers = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  // Performance optimization: Initial metrics collection
  useEffect(() => {
    if (!enabled) return;

    // Wait for page to fully load before collecting metrics
    const collectMetrics = () => {
      const initialMetrics = calculateMetrics();
      setMetrics(initialMetrics);
      
      if (logToConsole) {
        console.log('🚀 Performance Metrics:', initialMetrics);
      }
    };

    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics, { once: true });
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, [enabled, logToConsole, calculateMetrics]);

  // Performance optimization: Observer lifecycle
  useEffect(() => {
    setupObservers();
    return cleanupObservers;
  }, [setupObservers, cleanupObservers]);

  // Performance optimization: UI visibility toggle
  useEffect(() => {
    if (!showUI) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showUI]);

  // Performance optimization: Auto-hide UI after inactivity
  useEffect(() => {
    if (!showUI || !isVisible) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showUI, isVisible]);

  // Performance optimization: Metric quality assessment
  const getMetricQuality = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 },
      domLoad: { good: 2000, needsImprovement: 4000 },
      windowLoad: { good: 3000, needsImprovement: 6000 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  if (!enabled || !showUI || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-cyan-500/20 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      {metrics && (
        <div className="space-y-2 text-xs">
          {Object.entries(metrics).map(([key, value]) => {
            const quality = getMetricQuality(key as keyof PerformanceMetrics, value);
            const qualityColors = {
              good: 'text-green-400',
              'needs-improvement': 'text-yellow-400',
              poor: 'text-red-400',
              unknown: 'text-gray-400'
            };
            
            return (
              <div key={key} className="flex justify-between items-center">
                <span className="text-gray-300 capitalize">{key}:</span>
                <span className={`font-mono ${qualityColors[quality]}`}>
                  {key === 'cls' ? value.toFixed(3) : `${value}ms`}
                </span>
                <span className={`w-2 h-2 rounded-full ${
                  quality === 'good' ? 'bg-green-400' :
                  quality === 'needs-improvement' ? 'bg-yellow-400' :
                  quality === 'poor' ? 'bg-red-400' : 'bg-gray-400'
                }`} />
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-3 pt-2 border-t border-gray-700 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle • Auto-hides in 10s
      </div>
    </div>
  );
};

export default PerformanceMonitor;