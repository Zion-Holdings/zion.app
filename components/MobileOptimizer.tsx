import React, { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, 
  Battery, Zap, Eye
} from 'lucide-react';

interface MobileOptimizerProps {
  children: ReactNode;
  showDebugInfo?: boolean;
  enableTouchGestures?: boolean;
  optimizeImages?: boolean;
  enablePWA?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  battery?: {
    level: number;
    charging: boolean;
  };
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  showDebugInfo = false,
  enableTouchGestures = true,
  optimizeImages = true,
  enablePWA = true
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'landscape',
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    touchSupport: false
  });

  const [showLocalDebugInfo, setShowLocalDebugInfo] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    batteryLevel: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detect device information
      const detectDevice = () => {
        const userAgent = navigator.userAgent;
        const screen = window.screen;
        const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
        
        let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
          type = screen.width <= 768 ? 'mobile' : 'tablet';
        }

        const deviceInfo: DeviceInfo = {
          type,
          orientation,
          screenSize: { width: screen.width, height: screen.height },
          pixelRatio: window.devicePixelRatio || 1,
          touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0
        };

        // Get network information if available
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          deviceInfo.connection = {
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 0,
            rtt: connection.rtt || 0
          };
        }

        // Get battery information if available
        if ('getBattery' in navigator) {
          (navigator as any).getBattery().then((battery: any) => {
            deviceInfo.battery = {
              level: battery.level,
              charging: battery.charging
            };
            setDeviceInfo(prev => prev ? { ...prev, battery: deviceInfo.battery } : null);
          });
        }

        setDeviceInfo(deviceInfo);
      };

      // Initial detection
      detectDevice();

      // Listen for orientation changes
      const handleOrientationChange = () => {
        setTimeout(detectDevice, 100);
      };

      // Listen for resize events
      const handleResize = () => {
        detectDevice();
      };

      window.addEventListener('orientationchange', handleOrientationChange);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Performance monitoring
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setPerformanceMetrics(prev => ({ ...prev, loadTime }));
        }

        // Memory usage (if available)
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
          setPerformanceMetrics(prev => ({ ...prev, memoryUsage }));
        }

        // Network speed
        if (deviceInfo?.connection) {
          setPerformanceMetrics(prev => ({ 
            ...prev, 
            networkSpeed: deviceInfo.connection!.downlink 
          }));
        }

        // Battery level
        if (deviceInfo?.battery) {
          setPerformanceMetrics(prev => ({ 
            ...prev, 
            batteryLevel: deviceInfo.battery!.level * 100 
          }));
        }
      };

      // Measure after page load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
        return () => window.removeEventListener('load', measurePerformance);
      }
    }
  }, [deviceInfo]);

  useEffect(() => {
    if (!enableTouchGestures) return;
    
    // Touch gesture handling
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    
    const handleTouchStart = (e: React.TouchEvent) => {
      if (!enableTouchGestures) return;
      
      const touch = e.touches[0];
      if (touch) {
        startX = touch.clientX;
        startY = touch.clientY;
        startTime = Date.now();
      }
    };
    
    const handleTouchEnd = (e: React.TouchEvent) => {
      if (!enableTouchGestures) return;
      
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;
        const endTime = Date.now();
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const deltaTime = endTime - startTime;
        
        // Swipe detection
        if (deltaTime < 300 && Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            // Swipe right - could trigger back navigation
          } else {
            // Swipe left - could trigger forward navigation
          }
        }
        
        // Pull to refresh detection
        if (deltaY > 100 && startY < 50 && deltaTime < 500) {
          // Pull to refresh detected
        }
      }
    };
    
    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart as any);
    document.addEventListener('touchend', handleTouchEnd as any);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart as any);
      document.removeEventListener('touchend', handleTouchEnd as any);
    };
  }, [enableTouchGestures]);

  useEffect(() => {
    const optimizeImages = () => {
      if (!optimizeImages || typeof window === 'undefined') return;
      
      try {
        // Use Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
          const imageObserver = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as window.HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                  imageObserver.unobserve(img);
                }
              }
            });
          });
          
          // Observe all lazy images
          document.querySelectorAll('img[data-src]').forEach((img) => {
            imageObserver.observe(img);
          });
        }
      } catch {
        // Image optimization error
      }
    };

    optimizeImages();
  }, [optimizeImages]);

  useEffect(() => {
    if (typeof window !== 'undefined' && enablePWA) {
      // PWA enhancements
      if ('serviceWorker' in navigator) {
        // Register service worker for offline support
        navigator.serviceWorker.register('/sw.js').catch(console.error);
      }

      // Add to home screen prompt
      // let deferredPrompt: any;
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        // deferredPrompt = e;
        // Could show custom install prompt here
      });
    }
  }, [enablePWA]);

  // Apply mobile-specific optimizations
  useEffect(() => {
    if (deviceInfo?.type === 'mobile') {
      // Optimize for mobile
      document.documentElement.style.setProperty('--touch-target-size', '44px');
      document.documentElement.style.setProperty('--mobile-spacing', '16px');
      
      // Reduce animations on mobile for better performance
      if (deviceInfo.connection?.effectiveType === 'slow-2g' || deviceInfo.connection?.effectiveType === '2g') {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }
    } else {
      // Reset for desktop
      document.documentElement.style.removeProperty('--touch-target-size');
      document.documentElement.style.removeProperty('--mobile-spacing');
      document.documentElement.style.removeProperty('--animation-duration');
    }
  }, [deviceInfo]);

  if (!deviceInfo) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Debug Panel */}
      <AnimatePresence>
        {showLocalDebugInfo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 z-50 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl max-w-sm"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Mobile Debug</h3>
                <button
                  onClick={() => setShowLocalDebugInfo(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Device Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-white">
                  {deviceInfo.type === 'mobile' && <Smartphone className="w-4 h-4 text-blue-400" />}
                  {deviceInfo.type === 'tablet' && <Tablet className="w-4 h-4 text-green-400" />}
                  {deviceInfo.type === 'desktop' && <Monitor className="w-4 h-4 text-purple-400" />}
                  <span className="text-sm capitalize">{deviceInfo.type}</span>
                </div>

                <div className="text-gray-300 text-xs">
                  <div>Screen: {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}</div>
                  <div>Orientation: {deviceInfo.orientation}</div>
                  <div>Pixel Ratio: {deviceInfo.pixelRatio}</div>
                  <div>Touch: {deviceInfo.touchSupport ? 'Yes' : 'No'}</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-2 mb-4">
                <h4 className="text-white font-medium text-sm">Performance</h4>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>Load Time: {performanceMetrics.loadTime.toFixed(0)}ms</div>
                  <div>Memory: {performanceMetrics.memoryUsage.toFixed(1)}%</div>
                  <div>Battery: {performanceMetrics.batteryLevel.toFixed(0)}%</div>
                  <div>Network: {performanceMetrics.networkSpeed.toFixed(1)}Mbps</div>
                </div>
              </div>

              {/* Network Info */}
              {deviceInfo.connection && (
                <div className="space-y-2 mb-4">
                  <h4 className="text-white font-medium text-sm">Network</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-3 h-3" />
                      <span>{deviceInfo.connection.effectiveType}</span>
                    </div>
                    <div>Downlink: {deviceInfo.connection.downlink}Mbps</div>
                    <div>RTT: {deviceInfo.connection.rtt}ms</div>
                  </div>
                </div>
              )}

              {/* Battery Info */}
              {deviceInfo.battery && (
                <div className="space-y-2 mb-4">
                  <h4 className="text-white font-medium text-sm">Battery</h4>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div className="flex items-center space-x-2">
                      <Battery className="w-3 h-3" />
                      <span>{deviceInfo.battery.level * 100}%</span>
                    </div>
                    <div>Charging: {deviceInfo.battery.charging ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="space-y-2">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Zap className="w-3 h-3" />
                  <span>Refresh</span>
                </button>
                
                <button
                  onClick={() => setShowLocalDebugInfo(false)}
                  className="w-full p-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-3 h-3" />
                  <span>Hide Debug</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Debug Toggle Button */}
      {!showLocalDebugInfo && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setShowLocalDebugInfo(true)}
          className="fixed bottom-4 left-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Show mobile debug panel"
        >
          <Smartphone className="w-5 h-5" />
        </motion.button>
      )}

      {/* Mobile-specific CSS variables */}
      <style jsx global>{`
        :root {
          --touch-target-size: 44px;
          --mobile-spacing: 16px;
          --animation-duration: 0.3s;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          button, a, input, select, textarea {
            min-height: var(--touch-target-size);
            min-width: var(--touch-target-size);
          }
          
          .mobile-spacing {
            padding: var(--mobile-spacing);
            margin: var(--mobile-spacing);
          }
          
          /* Reduce motion on slow connections */
          .reduce-motion * {
            animation-duration: var(--animation-duration) !important;
            transition-duration: var(--animation-duration) !important;
          }
        }

        /* Touch-friendly interactions */
        @media (hover: none) and (pointer: coarse) {
          .touch-target {
            min-height: var(--touch-target-size);
            min-width: var(--touch-target-size);
          }
        }

        /* Lazy loading styles */
        .lazy {
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .lazy.loaded {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default MobileOptimizer;