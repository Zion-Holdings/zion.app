import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

/**
 * Production Optimizations
 * Automatically enables performance features and optimizations in production
 */

export class ProductionOptimizer {
  private static instance: ProductionOptimizer;
  private optimizationsApplied = false;

  static getInstance(): ProductionOptimizer {
    if (!ProductionOptimizer.instance) {
      ProductionOptimizer.instance = new ProductionOptimizer();
    }
    return ProductionOptimizer.instance;
  }

  init(): void {
    if (this.optimizationsApplied || typeof window === 'undefined') return;

    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      this.applyProductionOptimizations();
    } else {
      this.applyDevelopmentOptimizations();
    }

    this.optimizationsApplied = true;
  }

  private applyProductionOptimizations(): void {
    logInfo('🚀 Applying production optimizations...');

    // Enable service worker if available
    this.enableServiceWorker();

    // Preload critical resources
    this.preloadCriticalResources();

    // Enable performance monitoring for production issues
    this.enableProductionMonitoring();

    // Setup error reporting
    this.setupErrorReporting();

    // Optimize images
    this.optimizeImages();

    logInfo('✅ Production optimizations applied');
  }

  private applyDevelopmentOptimizations(): void {
    logInfo('🔧 Applying development optimizations...');

    // Enable development tools based on localStorage flags
    this.enableDevelopmentTools();

    logInfo('✅ Development optimizations applied');
  }

  private enableServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          logInfo('Service Worker registered:', { data: registration });
        })
        .catch((error) => {
          logInfo('Service Worker registration failed:', { data: error });
        });
    }
  }

  private preloadCriticalResources(): void {
    const criticalResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
      { href: '/logos/zion-logo.png', as: 'image' },
      { href: '/_next/static/css/app.css', as: 'style' },
    ];

    criticalResources.forEach(({ href, as, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (as === 'font') link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  private enableProductionMonitoring(): void {
    // Enable minimal performance monitoring in production
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP for production monitoring
            if (entry.startTime > 4000) { // LCP > 4s
              logWarn(`Poor LCP detected: ${entry.startTime}ms`);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
  }

  private setupErrorReporting(): void {
    // Enhanced error reporting for production
    window.addEventListener('error', (event) => {
      const errorInfo = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // This would integrate with your error reporting service
      logErrorToProduction('Production Error:', { data: errorInfo });
    });

    window.addEventListener('unhandledrejection', (event) => {
      logErrorToProduction('Unhandled Promise Rejection:', { data: event.reason });
    });
  }

  private optimizeImages(): void {
    // Add intersection observer for lazy loading images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  private enableDevelopmentTools(): void {
    // Check for development tool flags
    const tools = {
      'performance-monitoring': () => {
        logInfo('📊 Performance monitoring enabled');
        // Performance monitoring is handled by the component
      },
      'bundle-analyzer': () => {
        logInfo('📦 Bundle analyzer enabled');
        // Bundle analyzer is handled by the component
      },
      'debug-mode': () => {
        logInfo('🐛 Debug mode enabled');
        (window as any).__ZION_DEBUG__ = true;
      },
    };

    Object.entries(tools).forEach(([key, enableFn]) => {
      if (localStorage.getItem(key) === 'true') {
        enableFn();
      }
    });
  }

  // Public methods for manual optimization control
  enablePerformanceMonitoring(): void {
    localStorage.setItem('performance-monitoring', 'true');
    window.location.reload();
  }

  enableBundleAnalyzer(): void {
    localStorage.setItem('bundle-analyzer', 'true');
    window.location.reload();
  }

  clearAllCaches(): void {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
    localStorage.clear();
    sessionStorage.clear();
    logInfo('🗑️ All caches cleared');
  }

  getPerformanceReport(): PerformanceReport {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const resources = performance.getEntriesByType('resource');

    return {
      timestamp: new Date().toISOString(),
      navigation: {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
      },
      resources: {
        total: resources.length,
        scripts: resources.filter(r => r.name.endsWith('.js')).length,
        styles: resources.filter(r => r.name.endsWith('.css')).length,
        images: resources.filter(r => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(r.name)).length,
      },
      memory: (performance as any).memory || null,
      userAgent: navigator.userAgent,
    };
  }
}

interface PerformanceReport {
  timestamp: string;
  navigation: {
    domContentLoaded: number;
    loadComplete: number;
    firstByte: number;
  };
  resources: {
    total: number;
    scripts: number;
    styles: number;
    images: number;
  };
  memory: any;
  userAgent: string;
}

// Export singleton instance
export const productionOptimizer = ProductionOptimizer.getInstance();

// Auto-initialize on import
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      productionOptimizer.init();
    });
  } else {
    productionOptimizer.init();
  }
} 