import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
  preload?: boolean;
  priority?: 'low' | 'medium' | 'high';
}

export const PerformanceOptimizer: React.FC<{
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}> = ({ children, threshold = 0.1, rootMargin = '50px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold, rootMargin }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Lazy Image Component for better performance
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: 'low' | 'medium' | 'high';
}

export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

// Preload Component for critical resources
interface PreloadProps {
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const Preload: React.FC<PreloadProps> = ({
  href,
  as = 'fetch',
  type,
  crossOrigin
}) => {
  return (
    <link
      rel="preload"
      href={href}
      as={as}
      type={type}
      crossOrigin={crossOrigin}
    />
  );
};

// Resource Hints Component
interface ResourceHintsProps {
  href: string;
  rel: 'preconnect' | 'dns-prefetch' | 'prefetch' | 'preload';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const ResourceHint: React.FC<ResourceHintsProps> = ({
  href,
  rel,
  crossOrigin
}) => {
  return (
    <link
      rel={rel}
      href={href}
      crossOrigin={crossOrigin}
    />
  );
};

// Performance Monitor Component
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<{
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  }>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics((prev) => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics((prev) => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[0];
        if (fidEntry && 'processingStart' in fidEntry) {
          const fid = (fidEntry as any).processingStart - fidEntry.startTime;
          setMetrics((prev) => ({ ...prev, fid }));
        }
      });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        setMetrics((prev) => ({ ...prev, cls: clsValue }));
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        // Handle browsers that don't support all entry types
        if (process.env.NODE_ENV === 'development') {
          console.warn('Some performance metrics not supported:', error);
        }
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some((v) => v > 0)) {
      // Only log in development
      console.log('Performance Metrics:', {
        FCP: `${metrics.fcp.toFixed(2)}ms`,
        LCP: `${metrics.lcp.toFixed(2)}ms`,
        FID: `${metrics.fid.toFixed(2)}ms`,
        CLS: metrics.cls.toFixed(3),
      });
    }
  }, [metrics]);

  return null;
};

// Code Splitting Wrapper
export const CodeSplit: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Suspense fallback={
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
        <span className="ml-2 text-gray-400">Loading...</span>
      </div>
    }>
      {children}
    </React.Suspense>
  );
};

export default PerformanceOptimizer;