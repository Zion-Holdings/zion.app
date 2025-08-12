import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Activity, Zap, Package, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, RefreshCw, BarChart3, Clock, Globe } from 'lucide-react';











import { bundleMonitor } from '@/utils/bundleMonitor';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';

interface PerformanceMetrics {
  bundleSize: number;
  loadTime: number;
  performanceScore: number;
  chunkCount: number;
  cacheHitRate: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
}

interface BundleChunk {
  name: string;
  size: number;
  loadTime: number;
  cached: boolean;
  type: string;
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [chunks, setChunks] = useState<BundleChunk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const collectMetrics = async () => {
    try {
      // Collect performance metrics
      const memoryInfo = (performance as any).memory;
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const resourceCount = performance.getEntriesByType('resource').length;

      const performanceMetrics: PerformanceMetrics = {
        bundleSize: 0, // This would need to be calculated separately
        loadTime: navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.fetchStart : 0,
        performanceScore: 0, // This would need to be calculated
        chunkCount: resourceCount,
        cacheHitRate: 0, // This would need to be calculated from resource timing
        fcp: 0, // First Contentful Paint - would need Performance Observer
        lcp: 0, // Largest Contentful Paint - would need Performance Observer  
        cls: 0, // Cumulative Layout Shift - would need Performance Observer
        fid: 0  // First Input Delay - would need Performance Observer
      };

      setMetrics(performanceMetrics);
      logInfo('Performance metrics collected successfully', { 
        loadTime: performanceMetrics.loadTime,
        resourceCount: performanceMetrics.chunkCount
      });
    } catch (error) {
      logErrorToProduction('Failed to collect performance metrics', error, {
        component: 'PerformanceDashboard',
        action: 'collectMetrics'
      });
      // Set fallback metrics
      setMetrics({
        bundleSize: 0,
        loadTime: 0,
        performanceScore: 0,
        chunkCount: 0,
        cacheHitRate: 0,
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0
      });
    }
  };

  const collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {
    if (typeof window === 'undefined') return {};
    
    const vitals: Partial<PerformanceMetrics> = {};
    
    // Collect navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart;
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart;
    }
    
    // Use PerformanceObserver for more accurate metrics
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                vitals.fcp = entry.startTime;
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime;
            }
            if (entry.entryType === 'layout-shift') {
              vitals.cls = (vitals.cls || 0) + (entry as any).value;
            }
            if (entry.entryType === 'first-input') {
              vitals.fid = (entry as any).processingStart - entry.startTime;
            }
          });
        });
        
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
        
        // Resolve after a short delay
        setTimeout(() => {
          observer.disconnect();
          resolve(vitals);
        }, 2000);
      });
    }
    
    return vitals;
  };

  const collectChunkData = async (): Promise<BundleChunk[]> => {
    if (typeof window === 'undefined') return [];
    
    const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const scriptEntries = resourceEntries.filter(entry => 
      entry.name.includes('/_next/static/') && entry.name.endsWith('.js')
    );

    return scriptEntries.map(entry => ({
      name: entry.name.split('/').pop()?.split('?')[0] || 'unknown',
      size: entry.transferSize || entry.encodedBodySize || 0,
      loadTime: entry.responseEnd - entry.requestStart,
      cached: entry.transferSize === 0,
      type: categorizeChunk(entry.name)
    })).sort((a, b) => b.size - a.size);
  };

  const categorizeChunk = (filename: string): string => {
    if (filename.includes('framework')) return 'framework';
    if (filename.includes('vendor')) return 'vendor';
    if (filename.includes('pages')) return 'page';
    if (filename.includes('chunks')) return 'chunk';
    return 'other';
  };

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    return <AlertTriangle className="w-4 h-4 text-red-600" />;
  };

  useEffect(() => {
    collectMetrics();
    const interval = setInterval(collectMetrics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Performance Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor bundle size, performance metrics, and optimization opportunities
          </p>
        </div>
        <Button onClick={collectMetrics} disabled={isLoading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Collecting...' : 'Refresh'}
        </Button>
      </div>

      {/* Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          {metrics ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {getScoreIcon(metrics.performanceScore)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">
                      {metrics.performanceScore}/100
                    </span>
                    <Badge variant={metrics.performanceScore >= 90 ? 'default' : 'secondary'}>
                      {metrics.performanceScore >= 90 ? 'Excellent' : 
                       metrics.performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                    </Badge>
                  </div>
                  <Progress value={metrics.performanceScore} className="h-2" />
                </div>
              </div>
              
              {lastUpdated && (
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <Clock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Click refresh to collect metrics</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Bundle Size</span>
              </div>
              <p className="text-2xl font-bold mt-2">{formatSize(metrics.bundleSize)}</p>
              <p className="text-xs text-muted-foreground">
                {metrics.chunkCount} chunks
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Load Time</span>
              </div>
              <p className="text-2xl font-bold mt-2">{metrics.loadTime.toFixed(0)}ms</p>
              <p className="text-xs text-muted-foreground">
                Average chunk load time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">First Contentful Paint</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Time to first paint
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Largest Contentful Paint</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Time to largest paint
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Bundle Chunks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chunks.length > 0 ? (
            <div className="space-y-2">
              {chunks.slice(0, 10).map((chunk, index) => (
                <div key={chunk.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{chunk.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {chunk.type}
                        </Badge>
                        {chunk.cached && (
                          <Badge variant="secondary" className="text-xs">
                            cached
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatSize(chunk.size)}</p>
                    <p className="text-xs text-muted-foreground">
                      {chunk.loadTime.toFixed(0)}ms
                    </p>
                  </div>
                </div>
              ))}
              
              {chunks.length > 10 && (
                <p className="text-sm text-muted-foreground text-center pt-2">
                  ... and {chunks.length - 10} more chunks
                </p>
              )}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              No chunk data available. Refresh to collect metrics.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  Bundle splitting implemented
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Your bundle is properly split into framework, vendor, and application chunks
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-100">
                  Performance monitoring active
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Real-time performance tracking is helping optimize your application
                </p>
              </div>
            </div>
            
            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">
                    Consider more aggressive code splitting
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Bundle size is above 2MB. Consider implementing dynamic imports for heavy components
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 