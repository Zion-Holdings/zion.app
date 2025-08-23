import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Add proper types for browser APIs
declare global {
  interface EventTarget {
    addEventListener(type: string, listener: EventListener): void;
    removeEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: Event): boolean;
  }
  
  interface Event {
    readonly type: string;
    readonly target: EventTarget | null;
  }
  
  interface EventListener {
    (event: Event): void;
  }
  
  interface Element {
    addEventListener(type: string, listener: EventListener): void;
    removeEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: Event): boolean;
  }
  
  interface DOMStringMap {
    [key: string]: string;
  }
  
  interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
  }
  
  interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }
  
  interface IntersectionObserver {
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
  }
  
  interface IntersectionObserverEntry {
    readonly isIntersecting: boolean;
    readonly target: Element;
  }
  
  interface CSSStyleDeclaration {
    setProperty(property: string, value: string): void;
  }
  
  interface DOMTokenList {
    add(...tokens: string[]): void;
    remove(...tokens: string[]): void;
    contains(token: string): boolean;
  }
  
  interface HTMLElement extends Element {
    style: CSSStyleDeclaration;
    classList: DOMTokenList;
  }
  
  interface HTMLImageElement extends HTMLElement {
    dataset: DOMStringMap;
    src: string;
  }
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
  
  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
  };
  
  var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(): IntersectionObserverEntry;
  };
  
  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
  };
}



// Add browser API types
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}



interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/og-image.jpg',
        '/favicon.ico',
        '/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalFonts.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimize animations for reduced motion preference
    const optimizeAnimations = () => {
      if (typeof window !== 'undefined') {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
          document.documentElement.style.setProperty('--animation-duration', '0.1s');
          document.documentElement.style.setProperty('--transition-duration', '0.1s');
        }
      }
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    lazyLoadImages();
    optimizeAnimations();

    // Cleanup function
    return () => {
      // Cleanup any observers or event listeners if needed
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="performance-optimized"
    >
      {children}
    </motion.div>
  );
}

// Performance monitoring utilities
export const performanceUtils = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Log performance metrics (only in development)
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('Performance Metrics:', {
            pageLoadTime: `${loadTime}ms`,
            domContentLoaded: `${domContentLoaded}ms`,
            totalTime: `${navigation.loadEventEnd - navigation.fetchStart}ms`
          });
        }

        // Send to analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'page_load',
            value: Math.round(loadTime),
            event_category: 'performance'
          });
        }
      }
    }
  },

  // Measure component render time
  measureRenderTime: (componentName: string) => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Log render time (only in development)
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'component_render',
          value: Math.round(renderTime),
          event_category: 'performance',
          custom_parameter: componentName
        });
      }
    };
  },

  // Optimize images based on viewport
  optimizeImageSrc: (src: string, width: number) => {
    if (src.includes('placeholder.com') || src.startsWith('data:')) {
      return src;
    }

    // Add width parameter for responsive images
    const url = new URL(src, window.location.origin);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', '80'); // Quality parameter
    
    return url.toString();
  },

  // Debounce function for performance
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Performance monitoring hook
export const usePerformanceMonitoring = (componentName: string) => {
  useEffect(() => {
    const endMeasure = performanceUtils.measureRenderTime(componentName);
    
    return () => {
      endMeasure();
    };
  }, [componentName]);
};