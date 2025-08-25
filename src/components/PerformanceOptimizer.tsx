import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enablePreloading?: boolean;
  enableLazyLoading?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreloading = true,
  enableLazyLoading = true,
  enablePerformanceMonitoring = true
}) => {
  
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Lazy load images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;
    
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, [enableLazyLoading]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring) return;
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input-delay') {
              const fidEntry = entry as PerformanceEventTiming;
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as any;
              console.log('CLS:', clsEntry.value);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance monitoring not supported');
      }
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log('Page Load Time:', loadTime + 'ms');
    });
  }, [enablePerformanceMonitoring]);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    if (!enablePreloading) return;
    
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  useEffect(() => {
    preloadCriticalResources();
    setupLazyLoading();
    setupPerformanceMonitoring();
    addResourceHints();
  }, [preloadCriticalResources, setupLazyLoading, setupPerformanceMonitoring, addResourceHints]);

  // Service Worker registration for PWA capabilities
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null; // This component doesn't render anything
};