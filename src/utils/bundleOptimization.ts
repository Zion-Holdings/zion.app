/**
 * Bundle optimization utilities for improved performance
 */

// Critical resource preloader
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical font files
  const criticalFonts = [
    '/fonts/inter-var.woff2',
    '/fonts/inter-regular.woff2',
    '/fonts/inter-medium.woff2',
  ];

  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical API endpoints
  const criticalEndpoints = [
    '/api/marketplace/overview',
    '/api/categories',
  ];

  criticalEndpoints.forEach(endpoint => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = endpoint;
    document.head.appendChild(link);
  });
};

// Optimize image loading
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Enable lazy loading for all images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
  });

  // Add intersection observer for progressive image enhancement
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

// Performance monitoring
export const monitorBundlePerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor loading performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = perfData.loadEventEnd - perfData.fetchStart;
    
    // Log performance metrics
    console.log('Bundle Performance Metrics:', {
      loadTime: `${loadTime}ms`,
      domContentLoaded: `${perfData.domContentLoadedEventEnd - perfData.fetchStart}ms`,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 'N/A',
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
    });

    // Report to analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_load_time', {
        event_category: 'Performance',
        value: Math.round(loadTime)
      });
    }
  });

  // Monitor resource loading
  const resourceObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries() as PerformanceResourceTiming[];
    const largeResources = entries.filter(entry => 
      entry.transferSize && entry.transferSize > 100000 // Resources > 100KB
    );

    if (largeResources.length > 0) {
      console.warn('Large resources detected:', largeResources.map(r => ({
        name: r.name,
        size: `${Math.round(r.transferSize / 1024)}KB`,
        loadTime: `${Math.round(r.duration)}ms`
      })));
    }
  });

  if ('PerformanceObserver' in window) {
    resourceObserver.observe({ entryTypes: ['resource'] });
  }
};

// Implement virtual scrolling optimization
export const optimizeListRendering = (container: HTMLElement, itemHeight: number) => {
  if (!container) return;

  const items = Array.from(container.children);
  const visibleHeight = container.clientHeight;
  const visibleItems = Math.ceil(visibleHeight / itemHeight) + 2; // Buffer

  let scrollTop = 0;
  const updateVisibleItems = () => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + visibleItems, items.length);

    items.forEach((item, index) => {
      const element = item as HTMLElement;
      if (index >= startIndex && index < endIndex) {
        element.style.display = '';
        element.style.transform = `translateY(${index * itemHeight}px)`;
      } else {
        element.style.display = 'none';
      }
    });
  };

  container.addEventListener('scroll', () => {
    scrollTop = container.scrollTop;
    requestAnimationFrame(updateVisibleItems);
  });

  updateVisibleItems();
};

// Memory optimization
export const optimizeMemoryUsage = () => {
  if (typeof window === 'undefined') return;

  // Clear unused event listeners
  let eventListeners: Array<{ element: Element; event: string; handler: EventListener }> = [];

  const addOptimizedEventListener = (
    element: Element, 
    event: string, 
    handler: EventListener, 
    options?: AddEventListenerOptions
  ) => {
    element.addEventListener(event, handler, options);
    eventListeners.push({ element, event, handler });
  };

  const cleanupEventListeners = () => {
    eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    eventListeners = [];
  };

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanupEventListeners);

  // Periodic memory cleanup
  setInterval(() => {
    if ((performance as any).memory) {
      const memInfo = (performance as any).memory;
      const usageRatio = memInfo.usedJSHeapSize / memInfo.jsHeapSizeLimit;
      
      if (usageRatio > 0.8) {
        console.warn('High memory usage detected, triggering cleanup');
        // Force garbage collection if available
        if ((window as any).gc) {
          (window as any).gc();
        }
      }
    }
  }, 30000); // Check every 30 seconds

  return { addOptimizedEventListener, cleanupEventListeners };
};

// Initialize all optimizations
export const initializeBundleOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeImageLoading();
      monitorBundlePerformance();
      optimizeMemoryUsage();
    });
  } else {
    preloadCriticalResources();
    optimizeImageLoading();
    monitorBundlePerformance();
    optimizeMemoryUsage();
  }
};

// Export for use in _app.tsx
export default {
  preloadCriticalResources,
  optimizeImageLoading,
  monitorBundlePerformance,
  optimizeListRendering,
  optimizeMemoryUsage,
  initializeBundleOptimizations
};