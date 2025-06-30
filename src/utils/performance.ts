import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

/**
 * Performance monitoring utilities for Core Web Vitals
 * Helps track CLS improvements and other performance metrics
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export interface PerformanceMetrics {
  cls: number;
  fcp: number;
  lcp: number;
  fid: number;
  ttfb: number;
}

export interface CLSEntry {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  value: number;
  hadRecentInput: boolean;
}

/**
 * Observes and reports Cumulative Layout Shift (CLS)
 */
export function observeCLS(callback: (cls: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  let clsValue = 0;
  const clsEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const layoutShiftEntry = entry as any;
      // Only count layout shifts without recent user input
      if (layoutShiftEntry.hadRecentInput) continue;

      clsValue += layoutShiftEntry.value;
      clsEntries.push(entry);
    }
    
    callback(clsValue);
  });

  observer.observe({ entryTypes: ['layout-shift'] });
}

/**
 * Observes First Contentful Paint (FCP)
 */
export function observeFCP(callback: (fcp: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        callback(entry.startTime);
        observer.disconnect();
      }
    }
  });

  observer.observe({ entryTypes: ['paint'] });
}

/**
 * Observes Largest Contentful Paint (LCP)
 */
export function observeLCP(callback: (lcp: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    if (lastEntry) {
      callback(lastEntry.startTime);
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

/**
 * Observes First Input Delay (FID)
 */
export function observeFID(callback: (fid: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // Only report FID for the first input
      callback((entry as any).processingStart - entry.startTime);
      observer.disconnect();
    }
  });

  observer.observe({ entryTypes: ['first-input'] });
}

/**
 * Comprehensive performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') return;

  const metrics: Partial<PerformanceMetrics> = {};

  observeCLS((cls) => {
    metrics.cls = cls;
    
    // Only log in development or when performance monitoring is explicitly enabled
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      logInfo(`CLS: ${cls.toFixed(4)}`);
      
      // Log warning if CLS is high
      if (cls > 0.1) {
        logWarn(`⚠️ High CLS detected: ${cls.toFixed(4)} (target: <0.1)`);
      } else if (cls > 0.25) {
        logErrorToProduction(`🔴 Poor CLS: ${cls.toFixed(4)} (target: <0.1)`);
      } else {
        logInfo(`✅ Good CLS: ${cls.toFixed(4)}`);
      }
    }
  });

  observeFCP((fcp) => {
    metrics.fcp = fcp;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      logInfo(`FCP: ${fcp.toFixed(2)}ms`);
    }
  });

  observeLCP((lcp) => {
    metrics.lcp = lcp;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      logInfo(`LCP: ${lcp.toFixed(2)}ms`);
      
      if (lcp > 2500) {
        logWarn(`⚠️ Slow LCP: ${lcp.toFixed(2)}ms (target: <2.5s)`);
      }
    }
  });

  observeFID((fid) => {
    metrics.fid = fid;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      logInfo(`FID: ${fid.toFixed(2)}ms`);
      
      if (fid > 100) {
        logWarn(`⚠️ Slow FID: ${fid.toFixed(2)}ms (target: <100ms)`);
      }
    }
  });

  // Report TTFB
  if ('performance' in window && 'timing' in performance) {
    const timing = performance.timing;
    const ttfb = timing.responseStart - timing.requestStart;
    metrics.ttfb = ttfb;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      logInfo(`TTFB: ${ttfb}ms`);
    }
  }

  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (process.env.NODE_ENV === 'development' || 
          localStorage.getItem('performance-monitoring') === 'true') {
        logInfo('📊 Performance Metrics Summary:', { data: metrics });
      }
    }, 5000); // Wait 5 seconds for metrics to stabilize
  });
}

/**
 * Report performance metrics to analytics
 */
export function reportPerformanceMetrics(metrics: Partial<PerformanceMetrics>): void {
  // Only report in production
  if (process.env.NODE_ENV !== 'production') return;

  // Report to your analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'web_vitals', {
      custom_parameter_cls: metrics.cls,
      custom_parameter_fcp: metrics.fcp,
      custom_parameter_lcp: metrics.lcp,
      custom_parameter_fid: metrics.fid,
      custom_parameter_ttfb: metrics.ttfb,
    });
  }
}

/**
 * Font loading performance observer
 */
export function observeFontLoading(): void {
  if (typeof window === 'undefined' || !('fonts' in document)) {
    return;
  }

  // Only monitor font loading in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && 
      localStorage.getItem('performance-monitoring') !== 'true') {
    return;
  }

  // Monitor font loading
  document.fonts.addEventListener('loadingstart', (event) => {
    logInfo(`🔤 Font loading started: ${(event as any).fontface.family}`);
  });

  document.fonts.addEventListener('loadingdone', (event) => {
    logInfo(`✅ Font loaded: ${(event as any).fontface.family}`);
  });

  document.fonts.addEventListener('loadingerror', (event) => {
    logErrorToProduction(`❌ Font loading error: ${(event as any).fontface.family}`);
  });

  // Check if fonts are ready
  document.fonts.ready.then(() => {
    logInfo('✅ All fonts loaded');
  });
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;

  const criticalResources: string[] = [
    // Critical assets only - fonts are handled by Next.js font optimization
    // Add other critical resources like critical CSS or images here if needed
  ];

  criticalResources.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    // Determine asset type from URL
    if (url.includes('.woff2') || url.includes('.woff')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (url.includes('.css')) {
      link.as = 'style';
    } else if (url.includes('.js')) {
      link.as = 'script';
    } else {
      link.as = 'fetch';
    }
    
    document.head.appendChild(link);
  });
}

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations(): void {
  if (typeof window === 'undefined') return;

  // Only run in development or when explicitly enabled
  if (process.env.NODE_ENV === 'development' || 
      localStorage.getItem('performance-monitoring') === 'true') {
    initPerformanceMonitoring();
  }

  observeFontLoading();
  preloadCriticalResources();
}

export function calculateCLS(): number {
  const clsValue = 0;
  const clsEntries: PerformanceEntry[] = [];
  // ... rest of the function ...
  return clsValue;
}

// Performance monitoring and optimization utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Record<string, number> = {};
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Initialize Core Web Vitals monitoring
  initializeWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Measure and report Core Web Vitals
    onCLS((metric) => this.reportMetric('CLS', metric.value));
    onINP((metric) => this.reportMetric('INP', metric.value));
    onFCP((metric) => this.reportMetric('FCP', metric.value));
    onLCP((metric) => this.reportMetric('LCP', metric.value));
    onTTFB((metric) => this.reportMetric('TTFB', metric.value));
  }

  // Report performance metrics
  private reportMetric(name: string, value: number): void {
    this.metrics[name] = value;
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Report to analytics service
      this.sendToAnalytics(name, value);
    }
    
    logInfo(`[Performance] ${name}: ${value}`);
  }

  private sendToAnalytics(name: string, value: number): void {
    // Send to your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }

  // Get current metrics
  getMetrics(): Record<string, number> {
    return { ...this.metrics };
  }

  // Measure custom performance timing
  startTiming(label: string): () => number {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      this.reportMetric(label, duration);
      return duration;
    };
  }

  // Performance observer for long tasks
  observeLongTasks(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            logWarn(`Long task detected: ${entry.duration}ms`);
            this.reportMetric('LongTask', entry.duration);
          }
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch (error) {
      logWarn('Long task observer not supported');
    }
  }

  // Clean up observers
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Image optimization utilities
export const imageOptimization = {
  // Generate srcSet for responsive images
  generateSrcSet(baseUrl: string, sizes: number[] = [400, 800, 1200, 1600]): string {
    return sizes
      .map(size => `${baseUrl}?w=${size}&q=75 ${size}w`)
      .join(', ');
  },

  // Generate optimized image URL
  optimizeUrl(url: string, width?: number, quality = 75): string {
    if (!url) return '';
    
    // For Unsplash images
    if (url.includes('unsplash.com')) {
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      params.set('q', quality.toString());
      params.set('auto', 'format');
      params.set('fit', 'crop');
      
      return `${url}&${params.toString()}`;
    }
    
    return url;
  },

  // Preload critical images
  preloadImage(src: string, as: 'image' | 'fetch' = 'image'): void {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    document.head.appendChild(link);
  }
};

// Bundle optimization utilities
export const bundleOptimization = {
  // Dynamic import with error handling
  async dynamicImport<T>(importFn: () => Promise<T>): Promise<T> {
    try {
      return await importFn();
    } catch (error) {
      logErrorToProduction('Dynamic import failed:', { data: error });
      throw new Error('Failed to load component');
    }
  },

  // Preload route
  preloadRoute(route: string): void {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  }
};

// Memory optimization utilities
export const memoryOptimization = {
  // Debounce function calls
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function calls
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Check if user prefers reduced motion
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};

// Resource hint utilities
export const resourceHints = {
  // Add DNS prefetch
  addDnsPrefetch(domain: string): void {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  },

  // Add preconnect
  addPreconnect(origin: string): void {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    document.head.appendChild(link);
  }
};

// Initialize performance monitoring
export const initializePerformance = (): PerformanceMonitor => {
  const monitor = PerformanceMonitor.getInstance();
  
  if (typeof window !== 'undefined') {
    monitor.initializeWebVitals();
    monitor.observeLongTasks();
    
    // Add common resource hints
    resourceHints.addDnsPrefetch('//images.unsplash.com');
    resourceHints.addPreconnect('https://fonts.googleapis.com');
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      monitor.disconnect();
    });
  }
  
  return monitor;
};

// Export default instance
export default PerformanceMonitor.getInstance(); 