import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableResourceHints?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableResourceHints = true,
  enablePerformanceMonitoring = true
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Lazy loading for images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          const srcset = img.dataset.srcset;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
          }
          
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all lazy images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));

    observerRef.current = imageObserver;
  }, [enableLazyLoading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'Image';
      }
    });
  }, [enableImageOptimization]);

  // Resource hints for performance
  const setupResourceHints = useCallback(() => {
    if (!enableResourceHints) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com',
      'www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring || !('performance' in window)) return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcp = lastEntry.startTime;
          
          if (lcp > 2500) {
            console.warn('LCP is too slow:', lcp + 'ms');
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const fid = entry.processingStart - entry.startTime;
            if (fid > 100) {
              console.warn('FID is too slow:', fid + 'ms');
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          
          if (clsValue > 0.1) {
            console.warn('CLS is too high:', clsValue);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry.duration + 'ms');
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Long task monitoring not supported');
      }
    }
  }, [enablePerformanceMonitoring]);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Add will-change property to animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
    animatedElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.willChange = 'transform, opacity';
      }
    });

    // Optimize scroll performance
    const scrollElements = document.querySelectorAll('.scroll-container, [data-scroll]');
    scrollElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.willChange = 'transform';
        element.style.transform = 'translateZ(0)'; // Force hardware acceleration
      }
    });
  }, []);

  // Setup performance optimizations
  useEffect(() => {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setupLazyLoading();
        optimizeImages();
        setupResourceHints();
        setupPerformanceMonitoring();
        optimizeAnimations();
      });
    } else {
      setupLazyLoading();
      optimizeImages();
      setupResourceHints();
      setupPerformanceMonitoring();
      optimizeAnimations();
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading, optimizeImages, setupResourceHints, setupPerformanceMonitoring, optimizeAnimations]);

  // Monitor for new images and optimize them
  useEffect(() => {
    if (!enableImageOptimization) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const images = element.querySelectorAll('img');
            images.forEach(img => {
              if (!img.loading) img.loading = 'lazy';
              if (!img.decoding) img.decoding = 'async';
              if (!img.alt) img.alt = 'Image';
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enableImageOptimization]);

  // Return null as this is a utility component
  return null;
};

export default PerformanceOptimizer;