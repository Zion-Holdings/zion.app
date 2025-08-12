// Comprehensive Performance Monitoring System for Zion App
// Tracks Core Web Vitals, User Experience Metrics, and Performance Issues

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  id: string;
  navigationType?: string;
  url?: string;
}

interface PerformanceReport {
  metrics: PerformanceMetric[];
  userAgent: string;
  timestamp: number;
  sessionId: string;
  pageLoadTime: number;
  timeToInteractive: number;
  resourceLoadTimes: { [key: string]: number };
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private sessionId: string;
  private isEnabled: boolean;
  private reportingEndpoint: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = typeof window !== 'undefined' && process.env.NODE_ENV === 'production';
    this.reportingEndpoint = '/api/performance-metrics';
    
    if (this.isEnabled) {
      this.initializeMonitoring();
    }
  }

  private generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  private initializeMonitoring(): void {
    // Core Web Vitals monitoring
    this.initializeCoreWebVitals();
    
    // Custom performance metrics
    this.measurePageLoadTime();
    this.measureResourceLoadTimes();
    this.measureTimeToInteractive();
    
    // User interaction monitoring
    this.monitorUserInteractions();
    
    // Memory usage monitoring
    this.monitorMemoryUsage();
    
    // Error correlation
    this.setupErrorCorrelation();

    // Report metrics periodically
    this.setupPeriodicReporting();
  }

  private async initializeCoreWebVitals(): Promise<void> {
    try {
      const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals');

      onCLS((metric) => this.recordMetric('CLS', metric));
      onFCP((metric) => this.recordMetric('FCP', metric));
      onINP((metric) => this.recordMetric('INP', metric));
      onLCP((metric) => this.recordMetric('LCP', metric));
      onTTFB((metric) => this.recordMetric('TTFB', metric));
    } catch (error) {
      console.warn('Failed to initialize Core Web Vitals:', error);
    }
  }

  private recordMetric(name: string, metric: any): void {
    const performanceMetric: PerformanceMetric = {
      name: metric.name || name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      rating: metric.rating || this.calculateRating(name, metric.value),
      timestamp: Date.now(),
      id: metric.id || this.generateId(),
      navigationType: metric.navigationType,
      url: window.location.href
    };

    this.metrics.push(performanceMetric);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: performanceMetric.value,
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Log significant performance issues
    if (performanceMetric.rating === 'poor') {
      console.warn(`Performance issue detected: ${name} = ${performanceMetric.value}ms`);
    }
  }

  private calculateRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: { [key: string]: [number, number] } = {
      'CLS': [0.1, 0.25],
      'FCP': [1800, 3000],
      'INP': [200, 500],
      'LCP': [2500, 4000],
      'TTFB': [800, 1800]
    };

    const [good, poor] = thresholds[metricName] || [1000, 2000];
    
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private measurePageLoadTime(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        this.recordMetric('PageLoad', {
          name: 'PageLoad',
          value: pageLoadTime,
          id: this.generateId()
        });
      }
    });
  }

  private measureResourceLoadTimes(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const resourceTimes: { [key: string]: number } = {};

      resources.forEach((resource) => {
        const duration = resource.responseEnd - resource.startTime;
        const resourceType = this.getResourceType(resource.name);
        
        if (!resourceTimes[resourceType] || duration > resourceTimes[resourceType]) {
          resourceTimes[resourceType] = duration;
        }
      });

      // Record significant resource load times
      Object.entries(resourceTimes).forEach(([type, duration]) => {
        if (duration > 1000) { // Only record if > 1s
          this.recordMetric(`Resource-${type}`, {
            name: `Resource-${type}`,
            value: duration,
            id: this.generateId()
          });
        }
      });
    });
  }

  private getResourceType(url: string): string {
    if (url.includes('.js')) return 'JavaScript';
    if (url.includes('.css')) return 'CSS';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)/)) return 'Image';
    if (url.includes('.woff') || url.includes('.ttf')) return 'Font';
    return 'Other';
  }

  private measureTimeToInteractive(): void {
    if (typeof window === 'undefined') return;

    // Simple TTI approximation based on long tasks
    let longTaskCount = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          longTaskCount++;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
      
      setTimeout(() => {
        observer.disconnect();
        const tti = performance.now();
        this.recordMetric('TTI', {
          name: 'TTI',
          value: tti,
          id: this.generateId()
        });
      }, 5000);
    } catch (error) {
      // Long task API not supported
    }
  }

  private monitorUserInteractions(): void {
    if (typeof window === 'undefined') return;

    let interactionCount = 0;
    const events = ['click', 'keydown', 'scroll'];

    events.forEach((eventType) => {
      document.addEventListener(eventType, () => {
        interactionCount++;
        
        // Record first interaction time
        if (interactionCount === 1) {
          this.recordMetric('FirstInteraction', {
            name: 'FirstInteraction',
            value: performance.now(),
            id: this.generateId()
          });
        }
      }, { once: eventType !== 'scroll' });
    });
  }

  private monitorMemoryUsage(): void {
    if (typeof window === 'undefined' || !(performance as any).memory) return;

    setInterval(() => {
      const memory = (performance as any).memory;
      const usedMemory = memory.usedJSHeapSize;
      const totalMemory = memory.totalJSHeapSize;
      const memoryUsagePercent = (usedMemory / totalMemory) * 100;

      if (memoryUsagePercent > 80) {
        this.recordMetric('MemoryUsage', {
          name: 'MemoryUsage',
          value: memoryUsagePercent,
          id: this.generateId()
        });
      }
    }, 30000); // Check every 30 seconds
  }

  private setupErrorCorrelation(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.recordMetric('JavaScriptError', {
        name: 'JavaScriptError',
        value: 1,
        id: this.generateId()
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.recordMetric('UnhandledPromiseRejection', {
        name: 'UnhandledPromiseRejection',
        value: 1,
        id: this.generateId()
      });
    });
  }

  private setupPeriodicReporting(): void {
    // Report metrics every 30 seconds
    setInterval(() => {
      this.reportMetrics();
    }, 30000);

    // Report on page visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.reportMetrics();
      }
    });

    // Report on beforeunload
    window.addEventListener('beforeunload', () => {
      this.reportMetrics(true);
    });
  }

  private async reportMetrics(isBeacon: boolean = false): Promise<void> {
    if (this.metrics.length === 0) return;

    const report: PerformanceReport = {
      metrics: [...this.metrics],
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      pageLoadTime: this.getMetricValue('PageLoad'),
      timeToInteractive: this.getMetricValue('TTI'),
      resourceLoadTimes: this.getResourceLoadTimes()
    };

    try {
      if (isBeacon && navigator.sendBeacon) {
        navigator.sendBeacon(this.reportingEndpoint, JSON.stringify(report));
      } else {
        await fetch(this.reportingEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(report)
        });
      }

      // Clear reported metrics
      this.metrics = [];
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  }

  private getMetricValue(metricName: string): number {
    const metric = this.metrics.find(m => m.name === metricName);
    return metric ? metric.value : 0;
  }

  private getResourceLoadTimes(): { [key: string]: number } {
    const resourceMetrics = this.metrics.filter(m => m.name.startsWith('Resource-'));
    const result: { [key: string]: number } = {};
    
    resourceMetrics.forEach(metric => {
      result[metric.name] = metric.value;
    });
    
    return result;
  }

  // Public API
  public markCustomMetric(name: string, value: number): void {
    this.recordMetric(name, {
      name: `Custom-${name}`,
      value,
      id: this.generateId()
    });
  }

  public getSessionMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getPerformanceSummary(): {
    averageLoadTime: number;
    poorMetricsCount: number;
    totalMetrics: number;
  } {
    const totalMetrics = this.metrics.length;
    const poorMetrics = this.metrics.filter(m => m.rating === 'poor').length;
    const loadTimes = this.metrics
      .filter(m => m.name.includes('Load') || m.name.includes('FCP') || m.name.includes('LCP'))
      .map(m => m.value);
    
    const averageLoadTime = loadTimes.length > 0 
      ? loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length 
      : 0;

    return {
      averageLoadTime: Math.round(averageLoadTime),
      poorMetricsCount: poorMetrics,
      totalMetrics
    };
  }
}

// Singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;
export { PerformanceMonitor, type PerformanceMetric, type PerformanceReport };