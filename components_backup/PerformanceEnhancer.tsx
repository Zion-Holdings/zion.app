import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Extend global types for browser APIs
declare global {
  interface Window {
    IntersectionObserver: any;
  }
}

interface PerformanceEnhancerProps {
  children: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

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
    };

          // Implement intersection observer for lazy loading
      const setupLazyLoading = () => {
        if ('IntersectionObserver' in window) {
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
          document.querySelectorAll('img[data-src]').forEach((img) => {
            imageObserver.observe(img);
          });
        }
      };

    // Optimize animations for reduced motion preference
    const optimizeAnimations = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        document.documentElement.style.setProperty('--transition-duration', '0.1s');
        
        // Disable all animations
        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to external domains
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect);
    };

          // Implement service worker for caching
      const setupServiceWorker = async () => {
        if ('serviceWorker' in navigator) {
          try {
            await navigator.serviceWorker.register('/sw.js');
            // Service Worker registered successfully
          } catch {
            // Service Worker registration failed
          }
        }
      };

    // Initialize all optimizations
    preloadCriticalResources();
    setupLazyLoading();
    optimizeAnimations();
    addResourceHints();
    setupServiceWorker();

    // Cleanup function
    return () => {
      // Cleanup any observers or event listeners if needed
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Log LCP for performance monitoring
            // console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            // Log FID for performance monitoring
            // console.log('FID:', entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            // Log CLS for performance monitoring
            // console.log('CLS:', (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PerformanceEnhancer;