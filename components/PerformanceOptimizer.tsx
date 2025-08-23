import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Add browser API types
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}


interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setPerformanceMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Simplified performance monitoring
      const updateMetrics = () => {
        if (typeof window !== 'undefined' && 'performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            setPerformanceMetrics(prev => ({
              ...prev,
              fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              lcp: navigation.loadEventEnd - navigation.fetchStart,
              fid: 0, // Simplified
              cls: 0  // Simplified
            }));
          }
        }
      };

      // Update metrics after page load
      if (document.readyState === 'complete') {
        updateMetrics();
      } else {
        window.addEventListener('load', updateMetrics);
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        window.removeEventListener('load', updateMetrics);
      };
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter-var.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/zion-tech-group-og.jpg',
        '/images/zion-tech-group-logo.png'
      ];

      criticalImages.forEach(src => {
        const imgLink = document.createElement('link');
        imgLink.rel = 'preload';
        imgLink.href = src;
        imgLink.as = 'image';
        document.head.appendChild(imgLink);
      });

      // DNS prefetch for external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      externalDomains.forEach(domain => {
        const dnsLink = document.createElement('link');
        dnsLink.rel = 'dns-prefetch';
        dnsLink.href = domain;
        document.head.appendChild(dnsLink);
      });
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const imageObserver = new (window as any).IntersectionObserver((entries: any[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as any;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all lazy images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));

      return () => imageObserver.disconnect();
    }
  }, []);

  // Service Worker registration for PWA capabilities
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Service worker registered successfully
        })
        .catch(registrationError => {
          // Service worker registration failed
        });
    }
  }, []);

  // Memory management
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, reduce memory usage
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            // Clean up non-critical resources
            const nonCriticalImages = document.querySelectorAll('img[data-critical="false"]');
            nonCriticalImages.forEach(img => {
              if (img instanceof (window as any).HTMLImageElement) {
                img.src = '';
              }
            });
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Error boundary for performance monitoring
  useEffect(() => {
    const handleError = (event: any) => {
      // Log performance-related errors
      if (event.error && event.error.message.includes('performance')) {
        // Performance error detected
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_error', {
            error_message: event.error.message,
            error_stack: event.error.stack
          });
        }
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div ref={ref} className="performance-optimizer">
      {/* Performance monitoring overlay (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50 font-mono">
          <div>FCP: {performanceMetrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {performanceMetrics.lcp.toFixed(0)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(0)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(3)}</div>
        </div>
      )}

      {/* Conditional rendering based on visibility */}
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-cyan-400 text-lg font-semibold">Optimizing Performance...</p>
          </div>
        </div>
      )}

      {/* Performance optimization scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Critical CSS inlining
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                // Optimize critical rendering path
                const criticalElements = document.querySelectorAll('[data-critical="true"]');
                criticalElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.display = 'block';
                  }
                });
              });
            }

            // Preload critical resources
            function preloadResource(href, as) {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.href = href;
              link.as = as;
              document.head.appendChild(link);
            }

            // Optimize images
            function optimizeImages() {
              const images = document.querySelectorAll('img[data-src]');
              images.forEach(img => {
                if (img instanceof HTMLImageElement) {
                  const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                      }
                    });
                  });
                  observer.observe(img);
                }
              });
            }

            // Initialize optimizations
            if (document.readyState === 'complete') {
              optimizeImages();
            } else {
              window.addEventListener('load', optimizeImages);
            }
          `
        }}
      />
    </div>
  );
};

export default PerformanceOptimizer;

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