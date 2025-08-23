import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, 
  BarChart3, Gauge, Cpu, HardDrive, Wifi, Smartphone, Monitor,
  ArrowUpRight, RefreshCw, Settings, Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
  tti: number;
  tbt: number;
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceRecommendation {
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [showDetails, setShowDetails] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Performance thresholds based on Core Web Vitals
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, needsImprovement: 3000, poor: 3000 },
    lcp: { good: 2500, needsImprovement: 4000, poor: 4000 },
    fid: { good: 100, needsImprovement: 300, poor: 300 },
    cls: { good: 0.1, needsImprovement: 0.25, poor: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800, poor: 1800 }
  }), []);

  // Calculate performance scores
  const calculateScore = useCallback((metric: number, threshold: any, metricName: string): number => {
    if (metric <= threshold.good) return 100;
    if (metric <= threshold.needsImprovement) {
      const range = threshold.needsImprovement - threshold.good;
      const overage = metric - threshold.good;
      return Math.max(50, 100 - (overage / range) * 50);
    }
    return Math.max(0, 100 - ((metric - threshold.needsImprovement) / threshold.needsImprovement) * 50);
  }, []);

  // Generate performance recommendations
  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];

    // FCP recommendations
    if (metrics.fcp > thresholds.fcp.needsImprovement) {
      recs.push({
        type: 'critical',
        title: 'First Contentful Paint Too Slow',
        description: 'Your page takes too long to show the first content. Users may leave before seeing anything.',
        impact: 'high',
        action: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources'
      });
    }

    // LCP recommendations
    if (metrics.lcp > thresholds.lcp.needsImprovement) {
      recs.push({
        type: 'critical',
        title: 'Largest Contentful Paint Too Slow',
        description: 'The main content of your page loads too slowly, affecting user experience.',
        impact: 'high',
        action: 'Optimize images, use next-gen formats, implement lazy loading, upgrade hosting'
      });
    }

    // FID recommendations
    if (metrics.fid > thresholds.fid.needsImprovement) {
      recs.push({
        type: 'warning',
        title: 'First Input Delay Too High',
        description: 'Users experience delays when interacting with your page.',
        impact: 'medium',
        action: 'Reduce JavaScript execution time, break up long tasks, optimize event handlers'
      });
    }

    // CLS recommendations
    if (metrics.cls > thresholds.cls.needsImprovement) {
      recs.push({
        type: 'warning',
        title: 'Cumulative Layout Shift Issues',
        description: 'Page elements shift during loading, causing poor user experience.',
        impact: 'medium',
        action: 'Set explicit dimensions for images/videos, avoid inserting content above existing content'
      });
    }

    // TTFB recommendations
    if (metrics.ttfb > thresholds.ttfb.needsImprovement) {
      recs.push({
        type: 'warning',
        title: 'Time to First Byte Too Slow',
        description: 'Server response time is too slow, affecting all subsequent metrics.',
        impact: 'medium',
        action: 'Optimize server performance, use CDN, implement caching, upgrade hosting'
      });
    }

    // General optimization recommendations
    if (metrics.fcp < thresholds.fcp.good && metrics.lcp < thresholds.lcp.good) {
      recs.push({
        type: 'info',
        title: 'Performance Optimization Opportunities',
        description: 'Your page performs well, but there are opportunities for further optimization.',
        impact: 'low',
        action: 'Implement advanced caching, use service workers, optimize third-party scripts'
      });
    }

    return recs;
  }, [thresholds]);

  // Monitor performance metrics
  const monitorPerformance = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      setIsMonitoring(true);
      
      // Use Performance Observer for real-time metrics
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const newMetrics: PerformanceMetrics = {
                fcp: 0,
                lcp: 0,
                fid: 0,
                cls: 0,
                ttfb: navEntry.responseStart - navEntry.requestStart,
                fmp: 0,
                si: 0,
                tti: 0,
                tbt: 0
              };

              // Get FCP
              const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
              if (fcpEntry) newMetrics.fcp = fcpEntry.startTime;

              // Get LCP
              const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0];
              if (lcpEntry) newMetrics.lcp = lcpEntry.startTime;

              // Get FID
              const fidEntry = performance.getEntriesByName('first-input-delay')[0];
              if (fidEntry && 'processingStart' in fidEntry) {
                newMetrics.fid = (fidEntry as any).processingStart - fidEntry.startTime;
              }

              // Get CLS
              if ('PerformanceObserver' in window) {
                const clsObserver = new PerformanceObserver((list) => {
                  let clsValue = 0;
                  for (const entry of list.getEntries()) {
                    if (!('hadRecentInput' in entry) || !(entry as any).hadRecentInput) {
                      clsValue += (entry as any).value || 0;
                    }
                  }
                  newMetrics.cls = clsValue;
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
              }

              setMetrics(newMetrics);
              
              // Calculate scores
              const newScore: PerformanceScore = {
                overall: 0,
                fcp: calculateScore(newMetrics.fcp, thresholds.fcp, 'fcp'),
                lcp: calculateScore(newMetrics.lcp, thresholds.lcp, 'lcp'),
                fid: calculateScore(newMetrics.fid, thresholds.fid, 'fid'),
                cls: calculateScore(newMetrics.cls, thresholds.cls, 'cls'),
                ttfb: calculateScore(newMetrics.ttfb, thresholds.ttfb, 'ttfb')
              };
              
              newScore.overall = Math.round(
                (newScore.fcp + newScore.lcp + newScore.fid + newScore.cls + newScore.ttfb) / 5
              );
              
              setScore(newScore);
              setRecommendations(generateRecommendations(newMetrics));
              setLastUpdate(new Date());
            }
          });
        });

        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input'] });
      }

      // Fallback to basic metrics
      if (performance.timing) {
        const timing = performance.timing;
        const newMetrics: PerformanceMetrics = {
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: timing.responseStart - timing.requestStart,
          fmp: 0,
          si: 0,
          tti: 0,
          tbt: 0
        };
        
        setMetrics(newMetrics);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Performance monitoring error:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, [calculateScore, thresholds, generateRecommendations]);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(monitorPerformance, 30000); // Every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh, monitorPerformance]);

  // Initial monitoring
  useEffect(() => {
    monitorPerformance();
  }, [monitorPerformance]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  const getMetricStatus = (metric: number, threshold: any): 'good' | 'needs-improvement' | 'poor' => {
    if (metric <= threshold.good) return 'good';
    if (metric <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Performance Monitor</h3>
            <p className="text-sm text-cyan-400">Real-time performance tracking</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-2 rounded-lg transition-colors ${
              autoRefresh 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
            title={showDetails ? 'Hide details' : 'Show details'}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Overall Score */}
      {score && (
        <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-cyan-400">Overall Performance Score</span>
            {getScoreIcon(score.overall)}
          </div>
          <div className="flex items-center space-x-3">
            <div className={`text-3xl font-bold ${getScoreColor(score.overall)}`}>
              {score.overall}
            </div>
            <div className="text-sm text-gray-400">/ 100</div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        </div>
      )}

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {metrics && Object.entries(thresholds).map(([key, threshold]) => {
          const metricValue = metrics[key as keyof PerformanceMetrics];
          const status = getMetricStatus(metricValue, threshold);
          const statusColor = getStatusColor(status);
          
          return (
            <div key={key} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-400 uppercase">{key}</span>
                <div className={`${statusColor}`}>
                  {getStatusIcon(status)}
                </div>
              </div>
              <div className="text-lg font-bold text-white">
                {typeof metricValue === 'number' ? Math.round(metricValue) : 'N/A'}
              </div>
              <div className="text-xs text-gray-500">
                {key === 'cls' ? '' : 'ms'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Metrics */}
      <AnimatePresence>
        {showDetails && metrics && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="border-t border-gray-700/50 pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Detailed Performance Metrics</h4>
              
              {Object.entries(thresholds).map(([key, threshold]) => {
                const metricValue = metrics[key as keyof PerformanceMetrics];
                const status = getMetricStatus(metricValue, threshold);
                const statusColor = getStatusColor(status);
                
                return (
                  <div key={key} className="mb-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <div className={`flex items-center space-x-2 ${statusColor}`}>
                        {getStatusIcon(status)}
                        <span className="text-sm capitalize">{status.replace('-', ' ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-white">
                        {typeof metricValue === 'number' ? Math.round(metricValue) : 'N/A'}
                        <span className="text-sm text-gray-400 ml-1">
                          {key === 'cls' ? '' : 'ms'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Target: {threshold.good}{key === 'cls' ? '' : 'ms'}
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          status === 'good' ? 'bg-green-500' :
                          status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (metricValue / threshold.needsImprovement) * 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-white mb-4">Optimization Recommendations</h4>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 ${
                  rec.type === 'critical' ? 'border-red-500 bg-red-500/10' :
                  rec.type === 'warning' ? 'border-yellow-500 bg-yellow-500/10' :
                  'border-blue-500 bg-blue-500/10'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`mt-1 ${
                    rec.type === 'critical' ? 'text-red-400' :
                    rec.type === 'warning' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`}>
                    {rec.type === 'critical' ? <AlertTriangle className="w-5 h-5" /> :
                     rec.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                     <Info className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white mb-1">{rec.title}</h5>
                    <p className="text-sm text-gray-300 mb-2">{rec.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        rec.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        rec.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {rec.impact} impact
                      </span>
                      <span className="text-xs text-gray-400">{rec.action}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={monitorPerformance}
          disabled={isMonitoring}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMonitoring ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          <span>{isMonitoring ? 'Monitoring...' : 'Refresh Metrics'}</span>
        </button>
        
        <button
          onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors border border-gray-600/50"
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>PageSpeed Insights</span>
        </button>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;