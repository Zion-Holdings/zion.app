<<<<<<< HEAD
import { logInfo, logWarn, logErrorToProduction } from './productionLogger;;
'
interface BundleMetrics {
  timestamp: "number"
  totalBundleSize: number,"
  initialChunkSize: "number"
  chunkCount: number,"
  loadTime: "number"
  performanceScore: number,"
  recommendations: "string[]"
}"
;"
interface PerformanceThresholds {"
  maxBundleSize: "number // 2MB"
  maxInitialChunk: number // 400KB,"
  maxLoadTime: "number // 3000ms"
  maxChunkCount: "number // 50"
}";"
;"
class BundleMonitor {;"
  private metrics: BundleMetrics[] = [];"
  private thresholds: "PerformanceThresholds = {;"
    maxBundleSize: 2 * 1024 * 1024, // 2MB;"
    maxInitialChunk: 400 * 1024, // 400KB;"
    maxLoadTime: 3000, // 3 seconds;"
    maxChunkCount: 50,;"
  };"
;"
  constructor() {;"
    if (typeof window !== 'undefined') {;
      this.initializeMonitoring();
    }'
  };
  private initializeMonitoring(): void {'
    // Monitor when page loads;
    window.addEventListener('load', () => {'
      this.collectMetrics();
    });
'
    // Monitor performance entries;
    if ('PerformanceObserver' in window) {'
      const observer = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach((entry) => {'
          if (;
            entry.entryType === 'resource' &&;
            entry.name.includes('/_next/static/');
          ) {;
            this.trackResourceLoad(entry as PerformanceResourceTiming)'
          };
        });
      })'
;
      observer.observe({ entryTypes: ['resource'] })'
    };
  };
'
  private collectMetrics(): void {;
    if (typeof window === 'undefined') return;
    try {'
      const resourceEntries = performance.getEntriesByType(;
        'resource',;
      ) as PerformanceResourceTiming[];
      const jsEntries = resourceEntries.filter('
        (entry) =>;
          entry.name.includes('/_next/static/') && entry.name.endsWith('.js'),;
=======
import { logInfo, logWarn, logErrorToProduction } from './productionLogger;'
;''
interface BundleMetrics {;;
  timestamp: "number;",;";";";";""
  totalBundleSize: "number;",";";";";""
  initialChunkSize: "number;",;";";";";""
  chunkCount: "number;",";";";";""
  loadTime: "number;",;";";";";""
  performanceScore: "number;",";";";";""
  recommendations: "string[];";";""
};";";""
;";";";""
interface PerformanceThresholds {;";";";";""
  maxBundleSize: "number; // 2MB;",;";";";";""
  maxInitialChunk: "number; // 400KB;",";";";";""
  maxLoadTime: "number; // 3000ms;",;";";";";""
  maxChunkCount: "number; // 50;";""
};";""
;";";"";
class BundleMonitor {;";";";""
  private metrics: BundleMetrics[] = [];";";";";""
  private thresholds: "PerformanceThresholds = {;",;";";";";""
    maxBundleSize: "2 * 1024 * 1024", // 2MB;";";";";""
    maxInitialChunk: "400 * 1024", // 400KB;";";";";""
    maxLoadTime: "3000", // 3 seconds;";";";";""
    maxChunkCount: "50",;";""
  };";";""
;";";";""
  constructor() {;";";";";""
    if (typeof window !== 'undefined') {;'
      this.initializeMonitoring();
    };''
  };
;
  private initializeMonitoring(): void {;''
    // Monitor when page loads;;
    window.addEventListener('load', () => {;''
      this.collectMetrics();
    });
;''
    // Monitor performance entries;;
    if ('PerformanceObserver' in window) {;''
      const observer: unknown = new PerformanceObserver((list) => {;
        const entries: unknown = list.getEntries();
        entries.forEach((entry) => {;''
          if (;;
            entry.entryType === 'resource' &&;;'
            entry.name.includes('/_next/static/');'
          ) {;
            this.trackResourceLoad(entry as PerformanceResourceTiming);''
          };
        });
      });''
;;
      observer.observe({ entryTypes: ['resource'] });''
    };
  };
;''
  private collectMetrics(): void {;;
    if (typeof window === 'undefined') return;'
;
    try {;''
      const resourceEntries: unknown = performance.getEntriesByType(;;
        'resource',;'
      ) as PerformanceResourceTiming[];
      const jsEntries: unknown = resourceEntries.filter(;''
        (entry) =>;;
          entry.name.includes('/_next/static/') && entry.name.endsWith('.js'),;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      );
      let totalSize = 0;
      let initialChunkSize = 0;
      let totalLoadTime = 0;
      jsEntries.forEach((entry) => {;
<<<<<<< HEAD
        const size = entry.transferSize || entry.encodedBodySize || 0'
        totalSize += size;
        totalLoadTime += entry.responseEnd - entry.requestStart;
'
        // Identify initial chunk (usually the largest or framework chunk);
        if (entry.name.includes('framework') || entry.name.includes('main')) {'
          initialChunkSize = Math.max(initialChunkSize, size);
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      })'
;
      const metrics: unknown "BundleMetrics = {;"
        timestamp: "Date.now()"
        totalBundleSize: totalSize,;"
        initialChunkSize,;"
        chunkCount: "jsEntries.length"
        loadTime: totalLoadTime / jsEntries.length || 0,;
=======
        const size: unknown = entry.transferSize || entry.encodedBodySize || 0;''
        totalSize += size;
        totalLoadTime += entry.responseEnd - entry.requestStart;
;''
        // Identify initial chunk (usually the largest or framework chunk);;
        if (entry.name.includes('framework') || entry.name.includes('main')) {;''
          initialChunkSize = Math.max(initialChunkSize, size);
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      });''
;;
      const metrics: unknown "BundleMetrics = {;",;";";";";""
        timestamp: "Date.now()",;";";";";""
        totalBundleSize: "totalSize",;";";";""
        initialChunkSize,;";";";";""
        chunkCount: "jsEntries.length",;";";";";""
        loadTime: "totalLoadTime / jsEntries.length || 0",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        performanceScore: this.calculatePerformanceScore(;
          totalSize,;
          initialChunkSize,;
          totalLoadTime / jsEntries.length,;
          jsEntries.length,;
        ),;
        recommendations: this.generateRecommendations(;
          totalSize,;
          initialChunkSize,;
          totalLoadTime / jsEntries.length,;
          jsEntries.length,;
        ),;
<<<<<<< HEAD
      };"
      this.metrics.push(metrics);";"
      this.analyzeMetrics(metrics);"
;"
      // Store in localStorage for debugging;"
      if (process.env.NODE_ENV === 'development') {;
        localStorage.setItem('bundleMetrics', JSON.stringify(metrics));
      }'
    } catch {;
      logErrorToProduction('Failed to collect bundle metrics:', {;
        data: error,;
=======
      };
;""
      this.metrics.push(metrics);";""
      this.analyzeMetrics(metrics);";";""
;";";";""
      // Store in localStorage for debugging;";";";";""
      if (process.env.NODE_ENV === 'development') {;;'
        localStorage.setItem('bundleMetrics', JSON.stringify(metrics));'
      };''
    } catch {;;
      logErrorToProduction('Failed to collect bundle metrics:', {;;'
        data: "error",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    };
  };
  private trackResourceLoad(entry: PerformanceResourceTiming): void {;
<<<<<<< HEAD
    const size = entry.transferSize || entry.encodedBodySize || 0;
    const loadTime = entry.responseEnd - entry.requestStart;"
;";"
    // Log slow or large resources;"
    if (size > 500 * 1024) {;"
      // > 500KB;"
      logWarn('Large bundle chunk detected:', {;
        url: "entry.name"
        size: "`${(size / 1024).toFixed(2)"}KB`,;"
        loadTime: "`${loadTime.toFixed(2)"}ms`,;
      });"
    };";"
;"
    if (loadTime > 2000) {;"
      // > 2 seconds;"
      logWarn('Slow bundle chunk loading:', {;
        url: "entry.name"
        loadTime: "`${loadTime.toFixed(2)"}ms`,;"
        size: "size ? `${(size / 1024).toFixed(2)"}KB` : 'unknown',;
      })'
    };
  };
'
  private calculatePerformanceScore(;
    totalSize: "number"
    initialSize: "number"
    avgLoadTime: "number"
    chunkCount: number,;
=======
    const size: unknown = entry.transferSize || entry.encodedBodySize || 0;
    const loadTime: unknown = entry.responseEnd - entry.requestStart;""
;";""
    // Log slow or large resources;";";""
    if (size > 500 * 1024) {;";";";""
      // > 500KB;";";";";""
      logWarn('Large bundle chunk detected:', {;;'
        url: "entry.name",;";";";";""
        size: "`${(size / 1024).toFixed(2)"}KB`,;";";";";""
        loadTime: "`${loadTime.toFixed(2)"}ms`,;"
      });""
    };";""
;";";""
    if (loadTime > 2000) {;";";";""
      // > 2 seconds;";";";";""
      logWarn('Slow bundle chunk loading:', {;;'
        url: "entry.name",;";";";";""
        loadTime: "`${loadTime.toFixed(2)"}ms`,;";";";";""
        size: "size ? `${(size / 1024).toFixed(2)"}KB` : 'unknown',;'
      });''
    };
  };
;''
  private calculatePerformanceScore(;;
    totalSize: "number",;";";";";""
    initialSize: "number",;";";";";""
    avgLoadTime: "number",;";";";";""
    chunkCount: "number",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  ): number {;
    let score = 100;
    // Size penalties;
    if (totalSize > this.thresholds.maxBundleSize) {;
      score -= Math.min(;
        30,;
        ((totalSize - this.thresholds.maxBundleSize) /;
          this.thresholds.maxBundleSize) *;
          30,;
      );
    };
    if (initialSize > this.thresholds.maxInitialChunk) {;
      score -= Math.min(;
        25,;
        ((initialSize - this.thresholds.maxInitialChunk) /;
          this.thresholds.maxInitialChunk) *;
          25,;
      );
    };
    // Load time penalties;
    if (avgLoadTime > this.thresholds.maxLoadTime) {;
      score -= Math.min(;
        25,;
        ((avgLoadTime - this.thresholds.maxLoadTime) /;
          this.thresholds.maxLoadTime) *;
          25,;
      );
    };
    // Chunk count penalties (too many or too few chunks);
    if (chunkCount > this.thresholds.maxChunkCount) {;
      score -= Math.min(;
        10,;
        ((chunkCount - this.thresholds.maxChunkCount) /;
          this.thresholds.maxChunkCount) *;
          10,;
      );
    } else if (chunkCount < 5) {;
      score -= (5 - chunkCount) * 2; // Penalty for too few chunks;
<<<<<<< HEAD
    };"
    return Math.max(0, Math.round(score));";"
  };"
;"
  private generateRecommendations(;"
    totalSize: "number"
    initialSize: "number"
    avgLoadTime: "number"
    chunkCount: number,;
  ): string[] {;"
    const recommendations: unknown string[] = [];";"
;"
    if (totalSize > this.thresholds.maxBundleSize) {;"
      recommendations.push(;"
        'Total bundle size exceeds 2MB. Consider implementing more aggressive code splitting.',;
      )'
    };
    if (initialSize > this.thresholds.maxInitialChunk) {'
      recommendations.push(;
        'Initial chunk is too large. Move non-critical code to dynamic imports.',;
      )'
    };
    if (avgLoadTime > this.thresholds.maxLoadTime) {'
      recommendations.push(;
        'Bundle chunks are loading slowly. Check network conditions and consider CDN.',;
      )'
    };
    if (chunkCount > this.thresholds.maxChunkCount) {'
      recommendations.push(;
        'Too many chunks detected. Consider consolidating smaller chunks.',;
      )'
    };
    if (chunkCount < 5) {'
      recommendations.push(;
        'Too few chunks. Better code splitting could improve load performance.','
      );
    };
'
    if (recommendations.length === 0) {;
      recommendations.push('Bundle performance is optimized!');
=======
    };
;""
    return Math.max(0, Math.round(score));";""
  };";";""
;";";";""
  private generateRecommendations(;";";";";""
    totalSize: "number",;";";";";""
    initialSize: "number",;";";";";""
    avgLoadTime: "number",;";";";";""
    chunkCount: "number",;"
  ): string[] {;""
    const recommendations: unknown string[] = [];";""
;";";""
    if (totalSize > this.thresholds.maxBundleSize) {;";";";""
      recommendations.push(;";";";";""
        'Total bundle size exceeds 2MB. Consider implementing more aggressive code splitting.',;'
      );''
    };
;
    if (initialSize > this.thresholds.maxInitialChunk) {;''
      recommendations.push(;;
        'Initial chunk is too large. Move non-critical code to dynamic imports.',;'
      );''
    };
;
    if (avgLoadTime > this.thresholds.maxLoadTime) {;''
      recommendations.push(;;
        'Bundle chunks are loading slowly. Check network conditions and consider CDN.',;'
      );''
    };
;
    if (chunkCount > this.thresholds.maxChunkCount) {;''
      recommendations.push(;;
        'Too many chunks detected. Consider consolidating smaller chunks.',;'
      );''
    };
;
    if (chunkCount < 5) {;''
      recommendations.push(;;
        'Too few chunks. Better code splitting could improve load performance.',;''
      );
    };
;''
    if (recommendations.length === 0) {;;
      recommendations.push('Bundle performance is optimized!');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
    return recommendations;
  };
  private analyzeMetrics(current: BundleMetrics): void {;
    if (this.metrics.length < 2) return;
    const previous = this.metrics[this.metrics.length - 2];
    if (!previous) return;
<<<<<<< HEAD
    const sizeChange = current.totalBundleSize - previous.totalBundleSize;
    const scoreChange = current.performanceScore - previous.performanceScore'
;
    // Log significant changes;
    if (Math.abs(sizeChange) > 50 * 1024) {'
      // > 50KB change;
//       const _changeType = sizeChange > 0 ? 'increased' : 'decreased'
      logInfo('Bundle size ${_changeType}:', {;
        data: {
          change: "`${(Math.abs(sizeChange) / 1024).toFixed(2)"}KB`,;"
          current: "`${(current.totalBundleSize / 1024).toFixed(2)"}KB`,;"
          score: current.performanceScore,;
        },;"
      });";"
    };"
;"
    if (Math.abs(scoreChange) > 5) {;"
//       const _changeType = scoreChange > 0 ? 'improved' : 'declined;
      logInfo(`Performance score ${_changeType}:`, {;
        change: "scoreChange"
        current: "current.performanceScore"
        recommendations: current.recommendations,;
=======
;
    const sizeChange: unknown = current.totalBundleSize - previous.totalBundleSize;
    const scoreChange: unknown = current.performanceScore - previous.performanceScore;''
;
    // Log significant changes;
    if (Math.abs(sizeChange) > 50 * 1024) {;''
      // > 50KB change;;
//       const _changeType: unknown = sizeChange > 0 ? 'increased' : 'decreased;''
      logInfo('Bundle size ${_changeType}:', {;;'
        data: "{;",;";";";";""
          change: "`${(Math.abs(sizeChange) / 1024).toFixed(2)"}KB`,;";";";";""
          current: "`${(current.totalBundleSize / 1024).toFixed(2)"}KB`,;";";";";""
          score: "current.performanceScore",;"
        },;""
      });";""
    };";";""
;";";";""
    if (Math.abs(scoreChange) > 5) {;";";";";""
//       const _changeType: unknown = scoreChange > 0 ? 'improved' : 'declined;'
      logInfo(`Performance score ${_changeType}:`, {;;
        change: "scoreChange",;";";";";""
        current: "current.performanceScore",;";";";";""
        recommendations: "current.recommendations",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    };
  };
  // Public methods;
  public getLatestMetrics(): BundleMetrics | null {;
    if (this.metrics.length === 0) return null;
    const latest = this.metrics[this.metrics.length - 1];
    return latest ?? null;
  };
<<<<<<< HEAD
  public getAllMetrics(): BundleMetrics[] {;"
    return [...this.metrics];";"
  };"
;"
  public getPerformanceReport(): {;"
    current: "BundleMetrics | null;"
    trend: 'improving' | 'stable' | 'declining,;
    recommendations: "string[];";
  } {;"
    const current = this.getLatestMetrics();";"
;"
    if (!current || this.metrics.length < 2) {;"
      return {;"
        current: "current as BundleMetrics | null"
        trend: 'stable',;
        recommendations: current?.recommendations || [],;
      };
    };"
    const previous = this.metrics[this.metrics.length - 2];";"
    if (!previous) {;"
      return {;"
        current,;"
        trend: 'stable',;
        recommendations: current.recommendations,;
      };"
    };";"
;"
    const scoreDiff = current.performanceScore - previous.performanceScore;"
;"
    let trend: 'improving' | 'stable' | 'declining' = 'stable'
    if (scoreDiff > 2) trend = 'improving'
    else if (scoreDiff < -2) trend = 'declining'
;
    return {;
      current,'
      trend,;
      recommendations: current.recommendations,;
=======
;
  public getAllMetrics(): BundleMetrics[] {;""
    return [...this.metrics];";""
  };";";""
;";";";""
  public getPerformanceReport(): {;";";";";""
    current: "BundleMetrics | null;",;";";";";""
    trend: 'improving' | 'stable' | 'declining,;'
    recommendations: "string[];";"
  } {;""
    const current: unknown = this.getLatestMetrics();";""
;";";""
    if (!current || this.metrics.length < 2) {;";";";""
      return {;";";";";""
        current: "current as BundleMetrics | null",;";";";";""
        trend: 'stable',;;'
        recommendations: "current?.recommendations || []",;"
      };
    };
;""
    const previous: unknown = this.metrics[this.metrics.length - 2];";""
    if (!previous) {;";";""
      return {;";";";""
        current,;";";";";""
        trend: 'stable',;;'
        recommendations: "current.recommendations",;"
      };""
    };";""
;";";""
    const scoreDiff: unknown = current.performanceScore - previous.performanceScore;";";";""
;";";";";""
    let trend: 'improving' | 'stable' | 'declining' = 'stable;''
    if (scoreDiff > 2) trend = 'improving;''
    else if (scoreDiff < -2) trend = 'declining;''
;
    return {;
      current,;''
      trend,;;
      recommendations: "current.recommendations",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  };
  // Force collection (for testing);
  public forceCollect(): void {;
    this.collectMetrics();
  };
};
// Singleton instance;
<<<<<<< HEAD
const bundleMonitor = new BundleMonitor();"
;";"
export { bundleMonitor, BundleMonitor };"
export type { BundleMetrics, PerformanceThresholds };"
"""""
=======
const bundleMonitor: unknown = new BundleMonitor();""
;";"";
export { bundleMonitor, BundleMonitor };";";"";
export type { BundleMetrics, PerformanceThresholds };";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
