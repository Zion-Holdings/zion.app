import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  lazyLoad?: boolean;
  preload?: boolean;
}

// Performance entry type definitions
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

// IntersectionObserver polyfill check
const getIntersectionObserver = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return window.IntersectionObserver;
  }
  // Return a mock observer for SSR
  return class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
};

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  lazyLoad = true,
  preload = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazyLoad) {
      setIsVisible(true);
      setIsLoaded(true);
      return;
    }

    const IntersectionObserver = getIntersectionObserver();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Add a small delay for smooth animation
            setTimeout(() => {
              setIsLoaded(true);
            }, 100);
            
            // Once visible, disconnect the observer
            if (containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
        root: null
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lazyLoad, threshold, rootMargin]);

  // Preload critical resources
  useEffect(() => {
    if (preload && isVisible) {
      // Preload critical images
      const criticalImages = [
        '/images/zion-tech-group-logo.png',
        '/images/zion-tech-group-og.jpg'
      ];

      criticalImages.forEach((src) => {
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

      criticalFonts.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, [preload, isVisible]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // Log LCP for development only
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('LCP:', entry.startTime);
            }
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as FirstInputEntry;
            if (firstInputEntry.processingStart) {
              // Log FID for development only
              if (process.env.NODE_ENV === 'development') {
                // eslint-disable-next-line no-console
                console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
              }
            }
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            // Log CLS for development only
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.log('CLS:', layoutShiftEntry.value);
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        // Log warning for development only
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('PerformanceObserver not supported:', error);
        }
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  if (!lazyLoad) {
    return <div className="performance-optimized">{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`performance-optimized transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      {isLoaded ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <div className="w-full h-full border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
            <div className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group</div>
            <div className="text-gray-500 text-sm mt-2">Pioneering the Future</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;