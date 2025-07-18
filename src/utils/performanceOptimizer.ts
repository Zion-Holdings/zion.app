/**;
 * Advanced Performance Optimizer;
 * Handles code splitting, lazy loading, bundle optimization, and performance monitoring;
 */;
import type {;
  PerformanceMetrics,;
  BundleAnalysis as _BundleAnalysis,;
<<<<<<< HEAD
} from '@/types/common;
import {'
  logInfo,;
  logWarn,;
  logErrorToProduction,'
  logPerformance,;
} from './productionLogger;
'
interface OptimizationConfig {
  enableCodeSplitting: "boolean"
  enableImageOptimization: boolean,"
  enablePreloading: "boolean"
  enableServiceWorker: boolean,"
  enableCaching: "boolean"
  bundleSizeLimit: number // in KB,"
  performanceThresholds: {
    fcp: number // First Contentful Paint,"
    lcp: "number // Largest Contentful Paint"
    fid: number // First Input Delay,"
    cls: "number // Cumulative Layout Shift"
  }
};"
;";"
class PerformanceOptimizer {;"
  private config: OptimizationConfig;"
  private performanceObserver: PerformanceObserver | null = null;"
  private metrics: "Partial<PerformanceMetrics> = {"};"
  private optimizationApplied = false;";"
;"
  constructor(config?: Partial<OptimizationConfig>) {;"
    this.config = {;"
      enableCodeSplitting: "true"
      enableImageOptimization: "true"
      enablePreloading: "true"
      enableServiceWorker: process.env.NODE_ENV === 'production',;
      enableCaching: "true"
      bundleSizeLimit: 244, // 244KB recommended by Google;"
      performanceThresholds: {
        fcp: 1800, // 1.8s;"
        lcp: 2500, // 2.5s;"
        fid: 100, // 100ms;"
        cls: 0.1, // 0.1;
=======
} from '@/types/common;';
import {;''
  logInfo,;
  logWarn,;
  logErrorToProduction,;''
  logPerformance,;;
} from './productionLogger;'
;''
interface OptimizationConfig {;;
  enableCodeSplitting: "boolean;",;";";";";""
  enableImageOptimization: "boolean;",";";";";""
  enablePreloading: "boolean;",;";";";";""
  enableServiceWorker: "boolean;",";";";";""
  enableCaching: "boolean;",;";";";";""
  bundleSizeLimit: "number; // in KB;",";";";";""
  performanceThresholds: "{;",;";";";";""
    fcp: "number; // First Contentful Paint;",";";";";""
    lcp: "number; // Largest Contentful Paint;",;";";";";""
    fid: "number; // First Input Delay;",";";";";""
    cls: "number; // Cumulative Layout Shift;";"
  };
};""
;";"";
class PerformanceOptimizer {;";";""
  private config: OptimizationConfig;";";";""
  private performanceObserver: PerformanceObserver | null = null;";";";";""
  private metrics: "Partial<PerformanceMetrics> = {"};""
  private optimizationApplied = false;";""
;";";""
  constructor(config?: Partial<OptimizationConfig>) {;";";";""
    this.config = {;";";";";""
      enableCodeSplitting: "true",;";";";";""
      enableImageOptimization: "true",;";";";";""
      enablePreloading: "true",;";";";";""
      enableServiceWorker: process.env.NODE_ENV === 'production',;;'
      enableCaching: "true",;";";";";""
      bundleSizeLimit: "244", // 244KB recommended by Google;";";";";""
      performanceThresholds: "{;",;";";";";""
        fcp: "1800", // 1.8s;";";";";""
        lcp: "2500", // 2.5s;";";";";""
        fid: "100", // 100ms;";";";";""
        cls: "0.1", // 0.1;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      },;
      ...config,;
    };
    this.initializePerformanceMonitoring();
<<<<<<< HEAD
  };"
  /**;";"
   * Initialize comprehensive performance monitoring;"
   */;"
  private initializePerformanceMonitoring(): void {;"
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {;
=======
  };
;""
  /**;";""
   * Initialize comprehensive performance monitoring;";";""
   */;";";";""
  private initializePerformanceMonitoring(): void {;";";";";""
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      return;
    };
    try {;
      // Monitor Core Web Vitals;
      this.performanceObserver = new PerformanceObserver((list) => {;
        for (const entry of list.getEntries()) {;
          this.processPerformanceEntry(entry);
<<<<<<< HEAD
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}'
      });
      // Observe multiple entry types'
      const entryTypes = [;
        'navigation',;
        'paint',;
        'largest-contentful-paint',;
        'first-input',;
        'layout-shift',;
        'resource',;
      ]'
;
      entryTypes.forEach((type) => {;
        try {'
          if (this.performanceObserver) {;
            this.performanceObserver.observe({ entryTypes: "[type] "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
          };"
        } catch {;"
          logWarn('Failed to observe ${type} performance entries', {;
            data: "{ data: { error "} },;"
          });";"
        };"
      });"
;"
      logInfo('Performance monitoring initialized')'
    } catch {;
      logErrorToProduction('Failed to initialize performance monitoring', {;
        data: error,;
      });
    };
  };
  /**;"
   * Process individual performance entries;";"
   */;"
  private processPerformanceEntry(entry: PerformanceEntry): void {;"
    switch (entry.entryType) {;"
      case 'navigation':;
        this.processNavigationEntry(entry as PerformanceNavigationTiming)'
        break;
      case 'paint':;
        this.processPaintEntry(entry)'
        break;
      case 'largest-contentful-paint':;
        this.processLCPEntry(entry)'
        break;
      case 'first-input':;
        this.processFIDEntry(entry)'
        break;
      case 'layout-shift':;
        this.processCLSEntry(entry)'
        break;
      case 'resource':;
=======
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};''
      });
;
      // Observe multiple entry types;''
      const entryTypes: unknown = [;;
        'navigation',;;'
        'paint',;;'
        'largest-contentful-paint',;;'
        'first-input',;;'
        'layout-shift',;;'
        'resource',;'
      ];''
;
      entryTypes.forEach((type) => {;
        try {;''
          if (this.performanceObserver) {;;
            this.performanceObserver.observe({ entryTypes: "[type] "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});";";""
          };";";";""
        } catch {;";";";";""
          logWarn('Failed to observe ${type} performance entries', {;;'
            data: "{ data: { error "} },;""
          });";""
        };";";""
      });";";";""
;";";";";""
      logInfo('Performance monitoring initialized');''
    } catch {;;
      logErrorToProduction('Failed to initialize performance monitoring', {;;'
        data: "error",;"
      });
    };
  };
;
  /**;""
   * Process individual performance entries;";""
   */;";";""
  private processPerformanceEntry(entry: PerformanceEntry): void {;";";";""
    switch (entry.entryType) {;";";";";""
      case 'navigation':;'
        this.processNavigationEntry(entry as PerformanceNavigationTiming);''
        break;;
      case 'paint':;'
        this.processPaintEntry(entry);''
        break;;
      case 'largest-contentful-paint':;'
        this.processLCPEntry(entry);''
        break;;
      case 'first-input':;'
        this.processFIDEntry(entry);''
        break;;
      case 'layout-shift':;'
        this.processCLSEntry(entry);''
        break;;
      case 'resource':;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        this.processResourceEntry(entry as PerformanceResourceTiming);
        break;
    };
  };
<<<<<<< HEAD
'
  private processNavigationEntry(entry: PerformanceNavigationTiming): void {;
    this.metrics.pageLoadTime = entry.loadEventEnd - entry.fetchStart;
    this.metrics.timeToInteractive = entry.loadEventEnd'
;
    logPerformance('Page Load Time', this.metrics.pageLoadTime);
'
    if (this.metrics.pageLoadTime > 3000) {;
      logWarn('Slow page load detected', {;
        loadTime: "this.metrics.pageLoadTime"
        recommendation: 'Consider code splitting and lazy loading',;
      })'
    };
  };
'
  private processPaintEntry(entry: PerformanceEntry): void {;
    if (entry.name === 'first-contentful-paint') {'
      this.metrics.firstContentfulPaint = entry.startTime;
      logPerformance('First Contentful Paint', entry.startTime);
'
      if (entry.startTime > this.config.performanceThresholds.fcp) {;
        logWarn('Slow First Contentful Paint', {;
          fcp: "entry.startTime"
          threshold: this.config.performanceThresholds.fcp,;
        });
      };
    };"
  };";"
;"
  private processLCPEntry(entry: PerformanceEntry): void {;"
    this.metrics.largestContentfulPaint = entry.startTime;"
    logPerformance('Largest Contentful Paint', entry.startTime);
'
    if (entry.startTime > this.config.performanceThresholds.lcp) {;
      logWarn('Slow Largest Contentful Paint', {;
        lcp: "entry.startTime"
        threshold: this.config.performanceThresholds.lcp,;
      });
    };"
  };";"
;"
  private processFIDEntry(entry: PerformanceEntry): void {;"
    if (;"
      'processingStart' in entry &&;
      typeof (entry as { processingStart: "number "}).processingStart === 'number;
    ) {;
      const fidEntry = entry as { processingStart: "number "};"
      this.metrics.firstInputDelay = fidEntry.processingStart - entry.startTime;"
      logPerformance('First Input Delay', this.metrics.firstInputDelay)'
;
      if (;
        this.metrics.firstInputDelay > this.config.performanceThresholds.fid'
      ) {;
        logWarn('High First Input Delay', {;
          fid: "this.metrics.firstInputDelay"
          threshold: this.config.performanceThresholds.fid,;
        });
      };
    };"
  };";"
;"
  private processCLSEntry(entry: PerformanceEntry): void {;"
    if (;"
      'hadRecentInput' in entry &&;
      typeof (entry as { hadRecentInput: "boolean "}).hadRecentInput ===;"
        'boolean' &&;
      'value' in entry &&;
      typeof (entry as { value: "number "}).value === 'number;
    ) {;
      const clsEntry = entry as { hadRecentInput: "boolean; value: number "};
      if (!clsEntry.hadRecentInput) {;
        this.metrics.cumulativeLayoutShift =;
          (this.metrics.cumulativeLayoutShift || 0) + clsEntry.value;
        if (;"
          this.metrics.cumulativeLayoutShift &&;";"
          this.metrics.cumulativeLayoutShift >;"
            this.config.performanceThresholds.cls;"
        ) {;"
          logWarn('High Cumulative Layout Shift', {;
            cls: "this.metrics.cumulativeLayoutShift"
            threshold: this.config.performanceThresholds.cls,;
=======
;''
  private processNavigationEntry(entry: PerformanceNavigationTiming): void {;
    this.metrics.pageLoadTime = entry.loadEventEnd - entry.fetchStart;
    this.metrics.timeToInteractive = entry.loadEventEnd;''
;;
    logPerformance('Page Load Time', this.metrics.pageLoadTime);'
;''
    if (this.metrics.pageLoadTime > 3000) {;;
      logWarn('Slow page load detected', {;;'
        loadTime: "this.metrics.pageLoadTime",;";";";";""
        recommendation: 'Consider code splitting and lazy loading',;'
      });''
    };
  };
;''
  private processPaintEntry(entry: PerformanceEntry): void {;;
    if (entry.name === 'first-contentful-paint') {;''
      this.metrics.firstContentfulPaint = entry.startTime;;
      logPerformance('First Contentful Paint', entry.startTime);'
;''
      if (entry.startTime > this.config.performanceThresholds.fcp) {;;
        logWarn('Slow First Contentful Paint', {;;'
          fcp: "entry.startTime",;";";";";""
          threshold: "this.config.performanceThresholds.fcp",;"
        });
      };
    };""
  };";""
;";";""
  private processLCPEntry(entry: PerformanceEntry): void {;";";";""
    this.metrics.largestContentfulPaint = entry.startTime;";";";";""
    logPerformance('Largest Contentful Paint', entry.startTime);'
;''
    if (entry.startTime > this.config.performanceThresholds.lcp) {;;
      logWarn('Slow Largest Contentful Paint', {;;'
        lcp: "entry.startTime",;";";";";""
        threshold: "this.config.performanceThresholds.lcp",;"
      });
    };""
  };";""
;";";""
  private processFIDEntry(entry: PerformanceEntry): void {;";";";""
    if (;";";";";""
      'processingStart' in entry &&;;'
      typeof (entry as { processingStart: "number "}).processingStart === 'number;'
    ) {;;
      const fidEntry: unknown = entry as { processingStart: "number "};";";";""
      this.metrics.firstInputDelay = fidEntry.processingStart - entry.startTime;";";";";""
      logPerformance('First Input Delay', this.metrics.firstInputDelay);''
;
      if (;
        this.metrics.firstInputDelay > this.config.performanceThresholds.fid;''
      ) {;;
        logWarn('High First Input Delay', {;;'
          fid: "this.metrics.firstInputDelay",;";";";";""
          threshold: "this.config.performanceThresholds.fid",;"
        });
      };
    };""
  };";""
;";";""
  private processCLSEntry(entry: PerformanceEntry): void {;";";";""
    if (;";";";";""
      'hadRecentInput' in entry &&;;'
      typeof (entry as { hadRecentInput: "boolean "}).hadRecentInput ===;";";";";""
        'boolean' &&;;'
      'value' in entry &&;;'
      typeof (entry as { value: "number "}).value === 'number;'
    ) {;;
      const clsEntry: unknown = entry as { hadRecentInput: "boolean; value: number "};"
      if (!clsEntry.hadRecentInput) {;
        this.metrics.cumulativeLayoutShift =;
          (this.metrics.cumulativeLayoutShift || 0) + clsEntry.value;
;
        if (;""
          this.metrics.cumulativeLayoutShift &&;";""
          this.metrics.cumulativeLayoutShift >;";";""
            this.config.performanceThresholds.cls;";";";""
        ) {;";";";";""
          logWarn('High Cumulative Layout Shift', {;;'
            cls: "this.metrics.cumulativeLayoutShift",;";";";";""
            threshold: "this.config.performanceThresholds.cls",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          });
        };
      };
    };
  };
  private processResourceEntry(entry: PerformanceResourceTiming): void {;
<<<<<<< HEAD
    const size = entry.transferSize || 0;
    const duration = entry.responseEnd - entry.requestStart;"
;";"
    // Monitor large resources;"
    if (size > 100 * 1024) {;"
      // 100KB;"
      logWarn('Large resource detected', {;
        url: "entry.name"
        size: "`${(size / 1024).toFixed(2)"}KB`,;"
        duration: "`${duration.toFixed(2)"}ms`,;
      });
    };"
;";"
    // Monitor slow resources;"
    if (duration > 1000) {;"
      // 1 second;"
      logWarn('Slow resource loading', {;
        url: "entry.name"
        duration: "`${duration.toFixed(2)"}ms`,;"
        size: "size ? `${(size / 1024).toFixed(2)"}KB` : 'unknown',;
=======
    const size: unknown = entry.transferSize || 0;
    const duration: unknown = entry.responseEnd - entry.requestStart;""
;";""
    // Monitor large resources;";";""
    if (size > 100 * 1024) {;";";";""
      // 100KB;";";";";""
      logWarn('Large resource detected', {;;'
        url: "entry.name",;";";";";""
        size: "`${(size / 1024).toFixed(2)"}KB`,;";";";";""
        duration: "`${duration.toFixed(2)"}ms`,;"
      });
    };""
;";""
    // Monitor slow resources;";";""
    if (duration > 1000) {;";";";""
      // 1 second;";";";";""
      logWarn('Slow resource loading', {;;'
        url: "entry.name",;";";";";""
        duration: "`${duration.toFixed(2)"}ms`,;";";";";""
        size: "size ? `${(size / 1024).toFixed(2)"}KB` : 'unknown',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    };
  };
  /**;
<<<<<<< HEAD
   * Apply comprehensive performance optimizations'
   */;
  public applyOptimizations(): void {;
    if (this.optimizationApplied) return'
=======
   * Apply comprehensive performance optimizations;''
   */;
  public applyOptimizations(): void {;
    if (this.optimizationApplied) return;''
;;
    logInfo('Applying performance optimizations...');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
;
    logInfo('Applying performance optimizations...');
    try {;
      if (this.config.enableServiceWorker) {;
        this.enableServiceWorker();
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      if (this.config.enablePreloading) {;
        this.enableResourcePreloading();
      };
      if (this.config.enableImageOptimization) {;
        this.optimizeImages();
      };
      if (this.config.enableCaching) {;
        this.enableAdvancedCaching();
      };
<<<<<<< HEAD
      this.optimizeCodeSplitting()'
      this.enableResourceHints();
      this.optimizeWebFonts();
'
      this.optimizationApplied = true;
      logInfo('Performance optimizations applied successfully')'
    } catch {;
      logErrorToProduction('Failed to apply performance optimizations', {;
        data: error,;
      });
    };
  };"
  /**;";"
   * Enable service worker for caching and offline support;"
   */;"
  private enableServiceWorker(): void {;"
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {'
      return;
    };
'
    navigator.serviceWorker;
      .register('/sw.js')'
      .then((registration) => {;
        logInfo('Service Worker registered', {;
          data: "{ data: { scope: registration.scope "} },;"
        });"
      });"
      .catch((error) => {;"
        logWarn('Service Worker registration failed', {;
          data: "{ data: { error "} },;
        });
      });
  };"
  /**;";"
   * Preload critical resources;"
   */;"
  private enableResourcePreloading(): void {;"
    if (typeof document === 'undefined') return;
'
    const criticalResources = [;
      '/fonts/inter-var.woff2',;
      '/api/config',;
      '/images/logo.webp',;
    ];
'
    criticalResources.forEach((resource) => {;
      const link = document.createElement('link');
      link.rel = 'preload;
      link.href = resource'
;
      if (resource.includes('.woff2')) {;
        link.as = 'font'
        link.crossOrigin = 'anonymous'
      } else if (resource.includes('/api/')) {;
        link.as = 'fetch'
        link.crossOrigin = 'anonymous'
      } else if (resource.includes('.webp') || resource.includes('.png')) {;
        link.as = 'image;
      }'
;
      document.head.appendChild(link);
    })'
;
    logInfo('Critical resources preloaded');
  };
'
  /**;
   * Optimize images with lazy loading and WebP support;
   */'
  private optimizeImages(): void {;
    if (typeof document === 'undefined') return;
'
    // Enable native lazy loading for images;
    const images = document.querySelectorAll('img[data-src]')'
;
    if ('loading' in HTMLImageElement.prototype) {;
      images.forEach((img) => {'
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || 
        imgElement.loading = 'lazy'
        imgElement.removeAttribute('data-src');
      });
    } else {'
      // Fallback to Intersection Observer;
      this.implementLazyLoading();
    }'
;
    logInfo('Image optimization enabled');
  };
'
  /**;
   * Implement lazy loading with Intersection Observer;
   */'
  private implementLazyLoading(): void {;
    if (!('IntersectionObserver' in window)) return;
'
    const imageObserver = new IntersectionObserver((entries) => {;
      entries.forEach((entry) => {;
        if (entry.isIntersecting) {'
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || 
          img.removeAttribute('data-src');
          imageObserver.unobserve(img)'
        };
      });
    })'
;
    document.querySelectorAll('img[data-src]').forEach((img) => {;
      imageObserver.observe(img);
    });
  };
'
  /**;
   * Enable advanced caching strategies;
   */'
  private enableAdvancedCaching(): void {;
    if (typeof window === 'undefined') return;
'
    // Cache API responses;
    if ('caches' in window) {;
      const cacheNames = ['api-cache-v1', 'static-cache-v1'];
      cacheNames.forEach((cacheName) => {'
        caches.open(cacheName).catch((error) => {;
          logWarn('Failed to open cache: "${cacheName"}', {;
            data: "{ data: { error "} },;
          });
        });
      });
    };"
;";"
    // Enable localStorage caching for non-sensitive data;"
    try {;"
      const cacheData = {;";,"
        timestamp: "Date.now()"
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0','
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      localStorage.setItem('app-cache-info', JSON.stringify(cacheData))'
    } catch {;
      logWarn('Failed to set localStorage cache', {;
        data: "{ data: { error "} },;"
      });"
    };"
;"
    logInfo('Advanced caching enabled');
=======
;
      this.optimizeCodeSplitting();''
      this.enableResourceHints();
      this.optimizeWebFonts();
;''
      this.optimizationApplied = true;;
      logInfo('Performance optimizations applied successfully');''
    } catch {;;
      logErrorToProduction('Failed to apply performance optimizations', {;;'
        data: "error",;"
      });
    };
  };
;""
  /**;";""
   * Enable service worker for caching and offline support;";";""
   */;";";";""
  private enableServiceWorker(): void {;";";";";""
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {;''
      return;
    };
;''
    navigator.serviceWorker;;
      .register('/sw.js');''
      .then((registration) => {;;
        logInfo('Service Worker registered', {;;'
          data: "{ data: { scope: registration.scope "} },;";""
        });";";""
      });";";";""
      .catch((error) => {;";";";";""
        logWarn('Service Worker registration failed', {;;'
          data: "{ data: { error "} },;"
        });
      });
  };
;""
  /**;";""
   * Preload critical resources;";";""
   */;";";";""
  private enableResourcePreloading(): void {;";";";";""
    if (typeof document === 'undefined') return;'
;''
    const criticalResources: unknown = [;;
      '/fonts/inter-var.woff2',;;'
      '/api/config',;;'
      '/images/logo.webp',;'
    ];
;''
    criticalResources.forEach((resource) => {;;
      const link: unknown = document.createElement('link');;'
      link.rel = 'preload;'
      link.href = resource;''
;;
      if (resource.includes('.woff2')) {;;'
        link.as = 'font;''
        link.crossOrigin = 'anonymous;''
      } else if (resource.includes('/api/')) {;;'
        link.as = 'fetch;''
        link.crossOrigin = 'anonymous;''
      } else if (resource.includes('.webp') || resource.includes('.png')) {;;'
        link.as = 'image;'
      };''
;
      document.head.appendChild(link);
    });''
;;
    logInfo('Critical resources preloaded');'
  };
;''
  /**;
   * Optimize images with lazy loading and WebP support;
   */;''
  private optimizeImages(): void {;;
    if (typeof document === 'undefined') return;'
;''
    // Enable native lazy loading for images;;
    const images: unknown = document.querySelectorAll('img[data-src]');''
;;
    if ('loading' in HTMLImageElement.prototype) {;'
      images.forEach((img) => {;''
        const imgElement: unknown = img as HTMLImageElement;;
        imgElement.src = imgElement.dataset.src || 
        imgElement.loading = 'lazy;''
        imgElement.removeAttribute('data-src');'
      });
    } else {;''
      // Fallback to Intersection Observer;
      this.implementLazyLoading();
    };''
;;
    logInfo('Image optimization enabled');'
  };
;''
  /**;
   * Implement lazy loading with Intersection Observer;
   */;''
  private implementLazyLoading(): void {;;
    if (!('IntersectionObserver' in window)) return;'
;''
    const imageObserver: unknown = new IntersectionObserver((entries) => {;
      entries.forEach((entry) => {;
        if (entry.isIntersecting) {;''
          const img: unknown = entry.target as HTMLImageElement;;
          img.src = img.dataset.src || 
          img.removeAttribute('data-src');'
          imageObserver.unobserve(img);''
        };
      });
    });''
;;
    document.querySelectorAll('img[data-src]').forEach((img) => {;'
      imageObserver.observe(img);
    });
  };
;''
  /**;
   * Enable advanced caching strategies;
   */;''
  private enableAdvancedCaching(): void {;;
    if (typeof window === 'undefined') return;'
;''
    // Cache API responses;;
    if ('caches' in window) {;;'
      const cacheNames: unknown = ['api-cache-v1', 'static-cache-v1'];'
;
      cacheNames.forEach((cacheName) => {;''
        caches.open(cacheName).catch((error) => {;;
          logWarn('Failed to open cache: "${cacheName"}', {;;'
            data: "{ data: { error "} },;"
          });
        });
      });
    };""
;";""
    // Enable localStorage caching for non-sensitive data;";";""
    try {;";";";""
      const cacheData: unknown = {;";,";";";""
        timestamp: "Date.now()",;";";";";""
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',;''
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};;
      localStorage.setItem('app-cache-info', JSON.stringify(cacheData));''
    } catch {;;
      logWarn('Failed to set localStorage cache', {;;'
        data: "{ data: { error "} },;";""
      });";";""
    };";";";""
;";";";";""
    logInfo('Advanced caching enabled');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
  /**;
   * Optimize code splitting;
<<<<<<< HEAD
   */'
  private optimizeCodeSplitting(): void {;
    if (!this.config.enableCodeSplitting) return;
'
    // Report bundle size if available;
    if (typeof window !== 'undefined') {'
      const bundleSize: (window as unknown as { __BUNDLE_SIZE__?: number "});"
        .__BUNDLE_SIZE__;
      if (typeof bundleSize === 'number') {;
        logPerformance('Bundle Size', bundleSize)'
        if (bundleSize > this.config.bundleSizeLimit * 1024) {;
          logWarn('Large bundle size detected', {;
            data: {
              size: "`${(bundleSize / 1024).toFixed(2)"}KB`,;"
              limit: "`${this.config.bundleSizeLimit"}KB`,;"
              recommendation:;"
                'Consider implementing more aggressive code splitting',;
            },;
          })'
        };
      };
    }'
;
    logInfo('Code splitting optimization checked');
  };
'
  /**;
   * Add resource hints for better loading performance;
   */'
  private enableResourceHints(): void {;
    if (typeof document === 'undefined') return;
'
    const hints = [;
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },;
      { rel: 'dns-prefetch', href: '//api.zion.app' },'
      {;
        rel: 'preconnect',;
        href: 'https://fonts.gstatic.com',;
        crossOrigin: 'anonymous','
      },;
    ];
'
    hints.forEach((hint) => {;
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {;
        link.crossOrigin = hint.crossOrigin'
      };
      document.head.appendChild(link);
    })'
;
    logInfo('Resource hints added');
  };
'
  /**;
   * Optimize web font loading;
   */'
  private optimizeWebFonts(): void {;
    if (typeof document === 'undefined') return;
'
    // Add font-display: swap to improve perceived performance;
    const style = document.createElement('style');
    style.textContent = `'
      @font-face {;
        font-family: 'Inter'
        font-display: "swap;"
      };";"
    `;"
    document.head.appendChild(style);"
;"
    logInfo('Web font optimization applied');
=======
   */;''
  private optimizeCodeSplitting(): void {;
    if (!this.config.enableCodeSplitting) return;
;''
    // Report bundle size if available;;
    if (typeof window !== 'undefined') {;''
      const bundleSize: unknown "unknown = (window as unknown as { __BUNDLE_SIZE__?: number "});";";";""
        .__BUNDLE_SIZE__;;
      if (typeof bundleSize === 'number') {;;'
        logPerformance('Bundle Size', bundleSize);''
        if (bundleSize > this.config.bundleSizeLimit * 1024) {;;
          logWarn('Large bundle size detected', {;;'
            data: "{;",;";";";";""
              size: "`${(bundleSize / 1024).toFixed(2)"}KB`,;";";";";""
              limit: "`${this.config.bundleSizeLimit"}KB`,;";";";""
              recommendation:;";";";";""
                'Consider implementing more aggressive code splitting',;'
            },;
          });''
        };
      };
    };''
;;
    logInfo('Code splitting optimization checked');'
  };
;''
  /**;
   * Add resource hints for better loading performance;
   */;''
  private enableResourceHints(): void {;;
    if (typeof document === 'undefined') return;'
;''
    const hints: unknown = [;;
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },;;'
      { rel: 'dns-prefetch', href: '//api.zion.app' },;''
      {;;
        rel: 'preconnect',;;'
        href: 'https://fonts.gstatic.com',;;'
        crossOrigin: 'anonymous',;''
      },;
    ];
;''
    hints.forEach((hint) => {;;
      const link: unknown = document.createElement('link');'
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {;
        link.crossOrigin = hint.crossOrigin;''
      };
      document.head.appendChild(link);
    });''
;;
    logInfo('Resource hints added');'
  };
;''
  /**;
   * Optimize web font loading;
   */;''
  private optimizeWebFonts(): void {;;
    if (typeof document === 'undefined') return;'
;''
    // Add font-display: swap to improve perceived performance;;
    const style: unknown = document.createElement('style');'
    style.textContent = `;''
      @font-face {;;
        font-family: 'Inter;''
        font-display: "swap;";""
      };";""
    `;";";""
    document.head.appendChild(style);";";";""
;";";";";""
    logInfo('Web font optimization applied');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
  /**;
   * Get current performance metrics;
   */;
  public getMetrics(): Partial<PerformanceMetrics> {;
    return { ...this.metrics };
  };
<<<<<<< HEAD
  /**'
   * Generate performance report;
   */;
  public generateReport(): string {'
    const report: {;",;"
      timestamp: "new Date().toISOString()"
      metrics: "this.metrics"
      thresholds: "this.config.performanceThresholds"
      optimizationsApplied: this.optimizationApplied,;
=======
;
  /**;''
   * Generate performance report;
   */;
  public generateReport(): string {;''
    const report: unknown "unknown = {;",;""
      timestamp: "new Date().toISOString()",;";";";";""
      metrics: "this.metrics",;";";";";""
      thresholds: "this.config.performanceThresholds",;";";";";""
      optimizationsApplied: "this.optimizationApplied",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
    return JSON.stringify(report, null, 2);
  };
  /**;
   * Cleanup;
   */;
  public destroy(): void {;
    if (this.performanceObserver) {;
      this.performanceObserver.disconnect();
    };
  };
<<<<<<< HEAD
};"
// Create and export singleton instance;";"
const performanceOptimizer = new PerformanceOptimizer();"
;"
// Auto-apply optimizations in production;"
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {;
=======
};
;""
// Create and export singleton instance;";"";
const performanceOptimizer: unknown = new PerformanceOptimizer();";";""
;";";";""
// Auto-apply optimizations in production;";";";";""
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  // Delay to ensure DOM is ready;
  setTimeout(() => {;
    performanceOptimizer.applyOptimizations();
  }, 100);
<<<<<<< HEAD
}'
;
export { PerformanceOptimizer };
export default performanceOptimizer'
'''''
=======
};''
;
export { PerformanceOptimizer };
export default performanceOptimizer;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
