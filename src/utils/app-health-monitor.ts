// Application Health Monitor
// Comprehensive monitoring system for application health, performance, and reliability

interface HealthMetric {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  threshold: {
    warning: number;
    critical: number;
  };
  timestamp: number;
}

interface HealthCheck {
  name: string;
  status: 'pass' | 'fail' | 'warn';
  message: string;
  duration: number;
  timestamp: number;
  details?: Record<string, unknown>;
}

interface HealthReport {
  status: 'healthy' | 'degraded' | 'unhealthy';
  score: number;
  timestamp: number;
  uptime: number;
  checks: HealthCheck[];
  metrics: HealthMetric[];
  recommendations: string[];
  version: string;
  environment: string;
}

class AppHealthMonitor {
  private checks: Map<string, () => Promise<HealthCheck>> = new Map();
  private metrics: Map<string, HealthMetric> = new Map();
  private startTime: number = Date.now();
  private isClient: boolean;

  constructor() {
    this.isClient = typeof window !== 'undefined';
    this.setupDefaultChecks();
    this.setupDefaultMetrics();
    
    // Start monitoring if on client side
    if (this.isClient) {
      this.startContinuousMonitoring();
    }
  }

  private setupDefaultChecks(): void {
    // Memory health check
    this.addHealthCheck('memory', async () => {
      const startTime = performance.now();
      
      try {
        let memoryUsage = 0;
        let status: 'pass' | 'warn' | 'fail' = 'pass';
        let message = 'Memory usage is normal';

        if ('memory' in performance) {
          const memory = (performance as any).memory;
          memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
          
          if (memoryUsage > 100) {
            status = 'fail';
            message = `High memory usage: ${memoryUsage.toFixed(2)}MB`;
          } else if (memoryUsage > 50) {
            status = 'warn';
            message = `Elevated memory usage: ${memoryUsage.toFixed(2)}MB`;
          }
        }

        return {
          name: 'memory',
          status,
          message,
          duration: performance.now() - startTime,
          timestamp: Date.now(),
          details: { memoryUsageMB: memoryUsage }
        };
      } catch (error) {
        return {
          name: 'memory',
          status: 'fail',
          message: `Memory check failed: ${error}`,
          duration: performance.now() - startTime,
          timestamp: Date.now()
        };
      }
    });

    // Performance health check
    this.addHealthCheck('performance', async () => {
      const startTime = performance.now();
      
      try {
        const entries = performance.getEntriesByType('navigation');
        const navEntry = entries[0] as PerformanceNavigationTiming;
        
        let status: 'pass' | 'warn' | 'fail' = 'pass';
        let message = 'Page performance is good';
        
        if (navEntry) {
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
          
          if (loadTime > 3000) {
            status = 'fail';
            message = `Slow page load: ${loadTime}ms`;
          } else if (loadTime > 1000) {
            status = 'warn';
            message = `Moderate page load: ${loadTime}ms`;
          }

          return {
            name: 'performance',
            status,
            message,
            duration: performance.now() - startTime,
            timestamp: Date.now(),
            details: {
              loadTime,
              domContentLoaded,
              firstContentfulPaint: navEntry.responseEnd - navEntry.requestStart
            }
          };
        }

        return {
          name: 'performance',
          status: 'pass',
          message: 'Performance metrics not available',
          duration: performance.now() - startTime,
          timestamp: Date.now()
        };
      } catch (error) {
        return {
          name: 'performance',
          status: 'fail',
          message: `Performance check failed: ${error}`,
          duration: performance.now() - startTime,
          timestamp: Date.now()
        };
      }
    });

    // Error rate health check
    this.addHealthCheck('errors', async () => {
      const startTime = performance.now();
      
      try {
        // Check if enhanced error logger is available
        const errorCount = this.getRecentErrorCount();
        
        let status: 'pass' | 'warn' | 'fail' = 'pass';
        let message = 'Error rate is normal';

        if (errorCount > 10) {
          status = 'fail';
          message = `High error rate: ${errorCount} errors in last 5 minutes`;
        } else if (errorCount > 3) {
          status = 'warn';
          message = `Elevated error rate: ${errorCount} errors in last 5 minutes`;
        }

        return {
          name: 'errors',
          status,
          message,
          duration: performance.now() - startTime,
          timestamp: Date.now(),
          details: { recentErrorCount: errorCount }
        };
      } catch (error) {
        return {
          name: 'errors',
          status: 'fail',
          message: `Error rate check failed: ${error}`,
          duration: performance.now() - startTime,
          timestamp: Date.now()
        };
      }
    });

    // Connectivity health check
    this.addHealthCheck('connectivity', async () => {
      const startTime = performance.now();
      
      try {
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          const effectiveType = connection.effectiveType;
          
          let status: 'pass' | 'warn' | 'fail' = 'pass';
          let message = `Connection: ${effectiveType}`;

          if (effectiveType === 'slow-2g') {
            status = 'fail';
            message = 'Very slow connection detected';
          } else if (effectiveType === '2g') {
            status = 'warn';
            message = 'Slow connection detected';
          }

          return {
            name: 'connectivity',
            status,
            message,
            duration: performance.now() - startTime,
            timestamp: Date.now(),
            details: {
              effectiveType,
              downlink: connection.downlink,
              rtt: connection.rtt
            }
          };
        }

        // Fallback connectivity test
        const testStart = performance.now();
        await fetch('/api/health', { method: 'HEAD' });
        const pingTime = performance.now() - testStart;

        let status: 'pass' | 'warn' | 'fail' = 'pass';
        let message = `API responsive in ${pingTime.toFixed(0)}ms`;

        if (pingTime > 2000) {
          status = 'fail';
          message = `API slow response: ${pingTime.toFixed(0)}ms`;
        } else if (pingTime > 500) {
          status = 'warn';
          message = `API moderate response: ${pingTime.toFixed(0)}ms`;
        }

        return {
          name: 'connectivity',
          status,
          message,
          duration: performance.now() - startTime,
          timestamp: Date.now(),
          details: { apiPingTime: pingTime }
        };
      } catch (error) {
        return {
          name: 'connectivity',
          status: 'fail',
          message: `Connectivity check failed: ${error}`,
          duration: performance.now() - startTime,
          timestamp: Date.now()
        };
      }
    });
  }

  private setupDefaultMetrics(): void {
    // Memory usage metric
    this.addMetric('memoryUsage', {
      name: 'Memory Usage',
      value: 0,
      unit: 'MB',
      status: 'healthy',
      threshold: { warning: 50, critical: 100 },
      timestamp: Date.now()
    });

    // Error rate metric
    this.addMetric('errorRate', {
      name: 'Error Rate',
      value: 0,
      unit: 'errors/min',
      status: 'healthy',
      threshold: { warning: 3, critical: 10 },
      timestamp: Date.now()
    });

    // Page load time metric
    this.addMetric('pageLoadTime', {
      name: 'Page Load Time',
      value: 0,
      unit: 'ms',
      status: 'healthy',
      threshold: { warning: 1000, critical: 3000 },
      timestamp: Date.now()
    });
  }

  public addHealthCheck(name: string, check: () => Promise<HealthCheck>): void {
    this.checks.set(name, check);
  }

  public addMetric(name: string, metric: HealthMetric): void {
    this.metrics.set(name, metric);
  }

  public updateMetric(name: string, value: number): void {
    const metric = this.metrics.get(name);
    if (metric) {
      metric.value = value;
      metric.timestamp = Date.now();
      
      // Update status based on thresholds
      if (value >= metric.threshold.critical) {
        metric.status = 'critical';
      } else if (value >= metric.threshold.warning) {
        metric.status = 'warning';
      } else {
        metric.status = 'healthy';
      }
    }
  }

  public async performHealthCheck(): Promise<HealthReport> {
    const checkResults: HealthCheck[] = [];
    
    // Run all health checks
    for (const [name, checkFn] of this.checks) {
      try {
        const result = await checkFn();
        checkResults.push(result);
      } catch (error) {
        checkResults.push({
          name,
          status: 'fail',
          message: `Health check failed: ${error}`,
          duration: 0,
          timestamp: Date.now()
        });
      }
    }

    // Update metrics based on current state
    this.updateMetricsFromChecks(checkResults);

    // Calculate overall health status
    const overallStatus = this.calculateOverallStatus(checkResults);
    const healthScore = this.calculateHealthScore(checkResults);

    // Generate recommendations
    const recommendations = this.generateRecommendations(checkResults);

    return {
      status: overallStatus,
      score: healthScore,
      timestamp: Date.now(),
      uptime: Date.now() - this.startTime,
      checks: checkResults,
      metrics: Array.from(this.metrics.values()),
      recommendations,
      version: process.env.npm_package_version || 'unknown',
      environment: process.env.NODE_ENV || 'unknown'
    };
  }

  private updateMetricsFromChecks(checks: HealthCheck[]): void {
    // Update memory metric
    const memoryCheck = checks.find(c => c.name === 'memory');
    if (memoryCheck?.details?.memoryUsageMB) {
      this.updateMetric('memoryUsage', memoryCheck.details.memoryUsageMB as number);
    }

    // Update error rate metric
    const errorCount = this.getRecentErrorCount();
    this.updateMetric('errorRate', errorCount);

    // Update page load time metric
    const perfCheck = checks.find(c => c.name === 'performance');
    if (perfCheck?.details?.loadTime) {
      this.updateMetric('pageLoadTime', perfCheck.details.loadTime as number);
    }
  }

  private calculateOverallStatus(checks: HealthCheck[]): 'healthy' | 'degraded' | 'unhealthy' {
    const failedChecks = checks.filter(c => c.status === 'fail').length;
    const warningChecks = checks.filter(c => c.status === 'warn').length;

    if (failedChecks > 0) return 'unhealthy';
    if (warningChecks > 1) return 'degraded';
    return 'healthy';
  }

  private calculateHealthScore(checks: HealthCheck[]): number {
    let score = 100;
    
    checks.forEach(check => {
      if (check.status === 'fail') score -= 25;
      else if (check.status === 'warn') score -= 10;
    });

    return Math.max(0, score);
  }

  private generateRecommendations(checks: HealthCheck[]): string[] {
    const recommendations: string[] = [];

    checks.forEach(check => {
      if (check.status === 'fail') {
        switch (check.name) {
          case 'memory':
            recommendations.push('🧠 High memory usage detected. Check for memory leaks and optimize component rendering.');
            break;
          case 'performance':
            recommendations.push('⚡ Slow page load detected. Optimize bundle size and implement lazy loading.');
            break;
          case 'errors':
            recommendations.push('🚨 High error rate detected. Review error logs and fix critical issues.');
            break;
          case 'connectivity':
            recommendations.push('🌐 Connectivity issues detected. Implement offline support and retry mechanisms.');
            break;
        }
      }
    });

    if (recommendations.length === 0) {
      recommendations.push('✅ All health checks passing. Continue monitoring for optimal performance.');
    }

    return recommendations;
  }

  private getRecentErrorCount(): number {
    // Try to get error count from enhanced error logger if available
    try {
      if (typeof window !== 'undefined' && (window as any).enhancedErrorLogger) {
        const errorLogger = (window as any).enhancedErrorLogger;
        const errors = errorLogger.getErrors();
        const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
        return errors.filter((error: any) => error.lastSeen > fiveMinutesAgo).length;
      }
    } catch {
      // Fallback to simple error counting
    }
    
    return 0;
  }

  private startContinuousMonitoring(): void {
    // Update metrics every 30 seconds
    setInterval(() => {
      this.performHealthCheck().then(report => {
        // Store latest report for quick access
        (window as any).latestHealthReport = report;
        
        // Log warnings and critical issues
        if (report.status !== 'healthy') {
          console.warn('🏥 Health issue detected:', report);
        }
      }).catch(error => {
        console.error('Health monitoring error:', error);
      });
    }, 30000);

    // Expose health monitor globally for debugging
    (window as any).appHealthMonitor = this;
  }

  public getLatestReport(): HealthReport | null {
    if (typeof window !== 'undefined') {
      return (window as any).latestHealthReport || null;
    }
    return null;
  }

  // Static method for quick health check
  public static async quickHealthCheck(): Promise<{ status: string; issues: string[] }> {
    const monitor = new AppHealthMonitor();
    const report = await monitor.performHealthCheck();
    
    const issues = report.checks
      .filter(check => check.status !== 'pass')
      .map(check => `${check.name}: ${check.message}`);

    return {
      status: report.status,
      issues
    };
  }
}

// Create singleton instance
const appHealthMonitor = new AppHealthMonitor();

export default appHealthMonitor;
export { AppHealthMonitor, type HealthReport, type HealthCheck, type HealthMetric };