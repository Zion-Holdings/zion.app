import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  BarChart3,
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  solution: string;
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience';
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];

    // FCP recommendations
    if (metrics.fcp > 2000) {
      recs.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above the recommended 2-second threshold',
        priority: 'high',
        impact: 'High impact on user perception of site speed',
        solution: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources',
        category: 'performance'
      });
    }

    // LCP recommendations
    if (metrics.lcp > 2500) {
      recs.push({
        id: 'lcp-optimization',
        title: 'Largest Contentful Paint Optimization',
        description: 'LCP is above the recommended 2.5-second threshold',
        priority: 'high',
        impact: 'High impact on user experience and Core Web Vitals',
        solution: 'Optimize images, implement lazy loading, use CDN, optimize server response time',
        category: 'performance'
      });
    }

    // CLS recommendations
    if (metrics.cls > 0.1) {
      recs.push({
        id: 'cls-optimization',
        title: 'Cumulative Layout Shift Reduction',
        description: 'CLS is above the recommended 0.1 threshold',
        priority: 'medium',
        impact: 'Medium impact on user experience and visual stability',
        solution: 'Set explicit dimensions for images and videos, avoid inserting content above existing content',
        category: 'user-experience'
      });
    }

    // Memory usage recommendations
    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {
      recs.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'JavaScript heap usage is above 50MB',
        priority: 'medium',
        impact: 'Medium impact on long-term performance and stability',
        solution: 'Implement memory cleanup, optimize component lifecycle, use React.memo and useMemo',
        category: 'performance'
      });
    }

    // Network recommendations
    if (metrics.networkInfo && metrics.networkInfo.effectiveType === 'slow-2g') {
      recs.push({
        id: 'network-optimization',
        title: 'Network Performance Optimization',
        description: 'Network connection is slow, affecting user experience',
        priority: 'high',
        impact: 'High impact on all performance metrics',
        solution: 'Implement service workers, optimize bundle size, use progressive loading',
        category: 'performance'
      });
    }

    return recs;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      setIsMonitoring(true);
      
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }

      // Wait a bit more for any async operations
      await new Promise(resolve => setTimeout(resolve, 1000));

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = await new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        } else {
          resolve(0);
        }
      });

      const metrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid: 0, // Would need user interaction to measure
        cls: 0, // Would need PerformanceObserver for CLS
        ttfb: navigation.responseStart - navigation.requestStart,
        domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
        memoryUsage: 'memory' in performance ? (performance as any).memory : undefined,
        networkInfo: 'connection' in navigator ? (navigator as any).connection : undefined
      };

      setMetrics(metrics);
      setRecommendations(generateRecommendations(metrics));
      setLastUpdate(new Date());
    } catch {
      // Performance measurement failed
    } finally {
      setIsMonitoring(false);
    }
  }, [generateRecommendations]);

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getOverallScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  if (!performanceData) {
    return (
      <div className={`p-4 bg-gray-900 rounded-lg border border-gray-700 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            <div className="h-3 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="p-4 bg-gray-800/50 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Performance Monitor</h3>
              <p className="text-gray-400 text-sm">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={showDetails ? 'Hide details' : 'Show details'}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={updatePerformanceData}
              disabled={isLoading}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Overall Score */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getOverallScoreBg(performanceData.overallScore)} mb-3`}>
            <span className={`text-2xl font-bold ${getOverallScoreColor(performanceData.overallScore)}`}>
              {performanceData.overallScore}
            </span>
          </div>
          <h4 className="text-white font-semibold mb-1">Performance Score</h4>
          <p className="text-gray-400 text-sm">
            {performanceData.overallScore >= 90 ? 'Excellent' : 
             performanceData.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

              {/* Metrics */}
              {metrics && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Core Web Vitals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">FCP</span>
                      <span className={`font-mono ${metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.fcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">LCP</span>
                      <span className={`font-mono ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.lcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">CLS</span>
                      <span className={`font-mono ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.cls.toFixed(3)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">TTFB</span>
                      <span className={`font-mono ${metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.ttfb.toFixed(0)}ms
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Memory Usage */}
              {metrics?.memoryUsage && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Memory Usage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Used</span>
                      <span className="font-mono text-cyan-400">
                        {(metrics.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total</span>
                      <span className="font-mono text-blue-400">
                        {(metrics.memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Network Info */}
              {metrics?.networkInfo && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Network</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Type</span>
                      <span className="font-mono text-green-400 capitalize">
                        {metrics.networkInfo.effectiveType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Speed</span>
                      <span className="font-mono text-blue-400">
                        {metrics.networkInfo.downlink.toFixed(1)}Mbps
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">RTT</span>
                      <span className="font-mono text-purple-400">
                        {metrics.networkInfo.rtt}ms
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                  <div className="space-y-3">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="border-l-4 border-cyan-500 pl-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-white text-sm">{rec.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            rec.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{rec.description}</p>
                        <p className="text-cyan-400 text-xs mt-1">{rec.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={measurePerformance}
                  disabled={isMonitoring}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isMonitoring ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <BarChart3 className="w-4 h-4" />
                  )}
                  <span>{isMonitoring ? 'Measuring...' : 'Measure Performance'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceMonitor;