import React, { useEffect, useState, useRef, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Clock, Database, Network, Cpu, 
  HardDrive, Memory, Battery, Wifi, 
  TrendingUp, TrendingDown, Activity
} from 'lucide-react';

// Lazy load components for better performance
const LazyChart = lazy(() => import('./LazyChart'));
const LazyDataTable = lazy(() => import('./LazyDataTable'));

interface PerformanceMetrics {
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  cpu: {
    usage: number;
    cores: number;
  };
  network: {
    download: number;
    upload: number;
    latency: number;
  };
  storage: {
    used: number;
    total: number;
    percentage: number;
  };
  battery: {
    level: number;
    charging: boolean;
  };
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enableCaching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enableImageOptimization = true,
  enableCaching = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memory: { used: 0, total: 0, percentage: 0 },
    cpu: { usage: 0, cores: 0 },
    network: { download: 0, upload: 0, latency: 0 },
    storage: { used: 0, total: 0, percentage: 0 },
    battery: { level: 0, charging: false }
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // Monitor performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      monitorPerformance();
      monitorNetwork();
      monitorBattery();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (performanceObserverRef.current) {
        performanceObserverRef.current.disconnect();
      }
    };
  }, []);

  const monitorPerformance = () => {
    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
          percentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100)
        }
      }));
    }

    // CPU cores
    if ('hardwareConcurrency' in navigator) {
      setMetrics(prev => ({
        ...prev,
        cpu: { ...prev.cpu, cores: navigator.hardwareConcurrency }
      }));
    }

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry);
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        performanceObserverRef.current = longTaskObserver;
      } catch (e) {
        console.warn('Long task observer failed:', e);
      }
    }
  };

  const monitorNetwork = () => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      // Monitor network changes
      connection.addEventListener('change', () => {
        setMetrics(prev => ({
          ...prev,
          network: {
            ...prev.network,
            download: connection.downlink || 0,
            latency: connection.rtt || 0
          }
        }));
      });

      // Initial values
      setMetrics(prev => ({
        ...prev,
        network: {
          download: connection.downlink || 0,
          upload: connection.uplink || 0,
          latency: connection.rtt || 0
        }
      }));
    }
  };

  const monitorBattery = async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        
        const updateBatteryInfo = () => {
          setMetrics(prev => ({
            ...prev,
            battery: {
              level: Math.round(battery.level * 100),
              charging: battery.charging
            }
          }));
        };

        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);
        updateBatteryInfo();
      } catch (e) {
        console.warn('Battery monitoring failed:', e);
      }
    }
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined') {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observerRef.current?.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      // Observe all lazy images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observerRef.current?.observe(img));

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [enableLazyLoading]);

  // Performance optimization functions
  const optimizeImages = useCallback(async () => {
    if (!enableImageOptimization) return;

    setIsOptimizing(true);
    setOptimizationStatus('Optimizing images...');

    try {
      const images = document.querySelectorAll('img');
      const promises = Array.from(images).map(async (img) => {
        const imgElement = img as HTMLImageElement;
        
        // Lazy load images
        if (imgElement.dataset.src) {
          imgElement.src = imgElement.dataset.src;
          imgElement.removeAttribute('data-src');
        }

        // Optimize image loading
        if (imgElement.loading !== 'lazy') {
          imgElement.loading = 'lazy';
        }

        // Add error handling
        imgElement.onerror = () => {
          imgElement.src = '/placeholder-image.jpg';
        };
      });

      await Promise.all(promises);
      setOptimizationStatus('Images optimized successfully!');
    } catch (error) {
      setOptimizationStatus('Image optimization failed');
      console.error('Image optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableImageOptimization]);

  const optimizeCodeSplitting = useCallback(async () => {
    if (!enableCodeSplitting) return;

    setIsOptimizing(true);
    setOptimizationStatus('Optimizing code splitting...');

    try {
      // Preload critical resources
      const criticalResources = [
        '/api/critical-data',
        '/api/user-preferences'
      ];

      const preloadPromises = criticalResources.map(url => 
        fetch(url, { method: 'HEAD' })
      );

      await Promise.all(preloadPromises);
      setOptimizationStatus('Code splitting optimized!');
    } catch (error) {
      setOptimizationStatus('Code splitting optimization failed');
      console.error('Code splitting error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableCodeSplitting]);

  const optimizeCaching = useCallback(async () => {
    if (!enableCaching) return;

    setIsOptimizing(true);
    setOptimizationStatus('Optimizing caching...');

    try {
      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      }

      // Cache API optimization
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => 
          name.startsWith('zion-cache-') && 
          name !== 'zion-cache-v1'
        );
        
        await Promise.all(oldCaches.map(name => caches.delete(name)));
      }

      setOptimizationStatus('Caching optimized!');
    } catch (error) {
      setOptimizationStatus('Caching optimization failed');
      console.error('Caching error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableCaching]);

  const runFullOptimization = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Running full optimization...');

    try {
      await Promise.all([
        optimizeImages(),
        optimizeCodeSplitting(),
        optimizeCaching()
      ]);

      setOptimizationStatus('Full optimization completed!');
      
      // Auto-hide status after 3 seconds
      setTimeout(() => {
        setOptimizationStatus('');
      }, 3000);
    } catch (error) {
      setOptimizationStatus('Optimization failed');
      console.error('Full optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, optimizeCodeSplitting, optimizeCaching]);

  // Auto-optimization on performance degradation
  useEffect(() => {
    const checkPerformance = () => {
      if (metrics.memory.percentage > 80 || metrics.network.latency > 100) {
        console.warn('Performance degradation detected, running optimization...');
        runFullOptimization();
      }
    };

    const interval = setInterval(checkPerformance, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [metrics, runFullOptimization]);

  return (
    <>
      {/* Performance Metrics Display */}
      <div className="fixed top-4 right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-80">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Performance Monitor
          </h3>
          <button
            onClick={runFullOptimization}
            disabled={isOptimizing}
            className="text-xs bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-2 py-1 rounded transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {/* Status */}
        {optimizationStatus && (
          <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-xs text-blue-700 dark:text-blue-300">
            {optimizationStatus}
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          {/* Memory */}
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Memory className="w-3 h-3 text-blue-600" />
              <span className="font-medium">Memory</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {metrics.memory.used}MB / {metrics.memory.total}MB
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
              <div 
                className={`h-1 rounded-full transition-all ${
                  metrics.memory.percentage > 80 ? 'bg-red-500' :
                  metrics.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${metrics.memory.percentage}%` }}
              />
            </div>
          </div>

          {/* CPU */}
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Cpu className="w-3 h-3 text-green-600" />
              <span className="font-medium">CPU</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {metrics.cpu.cores} cores
            </div>
          </div>

          {/* Network */}
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Network className="w-3 h-3 text-purple-600" />
              <span className="font-medium">Network</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {metrics.network.download}Mbps
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {metrics.network.latency}ms
            </div>
          </div>

          {/* Battery */}
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Battery className="w-3 h-3 text-orange-600" />
              <span className="font-medium">Battery</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {metrics.battery.level}%
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {metrics.battery.charging ? 'Charging' : 'Discharging'}
            </div>
          </div>
        </div>
      </div>

      {/* Lazy Loading Wrapper */}
      {enableLazyLoading ? (
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading...</span>
          </div>
        }>
          {children}
        </Suspense>
      ) : (
        children
      )}
    </>
  );
};

export default PerformanceOptimizer;