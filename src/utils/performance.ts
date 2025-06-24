/**
 * Performance monitoring utilities for Core Web Vitals
 * Helps track CLS improvements and other performance metrics
 */

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
    callback(lastEntry.startTime);
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
      console.log(`CLS: ${cls.toFixed(4)}`);
      
      // Log warning if CLS is high
      if (cls > 0.1) {
        console.warn(`⚠️ High CLS detected: ${cls.toFixed(4)} (target: <0.1)`);
      } else if (cls > 0.25) {
        console.error(`🔴 Poor CLS: ${cls.toFixed(4)} (target: <0.1)`);
      } else {
        console.log(`✅ Good CLS: ${cls.toFixed(4)}`);
      }
    }
  });

  observeFCP((fcp) => {
    metrics.fcp = fcp;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      console.log(`FCP: ${fcp.toFixed(2)}ms`);
    }
  });

  observeLCP((lcp) => {
    metrics.lcp = lcp;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      console.log(`LCP: ${lcp.toFixed(2)}ms`);
      
      if (lcp > 2500) {
        console.warn(`⚠️ Slow LCP: ${lcp.toFixed(2)}ms (target: <2.5s)`);
      }
    }
  });

  observeFID((fid) => {
    metrics.fid = fid;
    if (process.env.NODE_ENV === 'development' || 
        localStorage.getItem('performance-monitoring') === 'true') {
      console.log(`FID: ${fid.toFixed(2)}ms`);
      
      if (fid > 100) {
        console.warn(`⚠️ Slow FID: ${fid.toFixed(2)}ms (target: <100ms)`);
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
      console.log(`TTFB: ${ttfb}ms`);
    }
  }

  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (process.env.NODE_ENV === 'development' || 
          localStorage.getItem('performance-monitoring') === 'true') {
        console.log('📊 Performance Metrics Summary:', metrics);
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
    console.log(`🔤 Font loading started: ${(event as any).fontface.family}`);
  });

  document.fonts.addEventListener('loadingdone', (event) => {
    console.log(`✅ Font loaded: ${(event as any).fontface.family}`);
  });

  document.fonts.addEventListener('loadingerror', (event) => {
    console.error(`❌ Font loading error: ${(event as any).fontface.family}`);
  });

  // Check if fonts are ready
  document.fonts.ready.then(() => {
    console.log('✅ All fonts loaded');
  });
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    // Add URLs of critical resources
    '/fonts/inter.woff2',
    '/fonts/montserrat.woff2',
  ];

  criticalResources.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
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
} 