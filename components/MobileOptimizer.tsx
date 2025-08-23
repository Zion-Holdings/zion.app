import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, Battery, 
  Zap, MousePointer, Hand, RotateCcw, Settings,
  X, CheckCircle, AlertTriangle, Info
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  batteryLevel?: number;
  connectionType?: string;
  memory?: number;
}

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
  enableTouchGestures?: boolean;
  optimizeImages?: boolean;
  enablePWA?: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  showDebugInfo = false,
  enableTouchGestures = true,
  optimizeImages = true,
  enablePWA = true
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const [touchGestures, setTouchGestures] = useState<string[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    batteryLevel: 0,
    connectionSpeed: 'unknown'
  });

  // Detect device information
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (width <= 768) type = 'mobile';
      else if (width <= 1024) type = 'tablet';

      const deviceInfo: DeviceInfo = {
        type,
        width,
        height,
        pixelRatio: window.devicePixelRatio || 1,
        orientation: width > height ? 'landscape' : 'portrait',
        touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        batteryLevel: undefined,
        connectionType: undefined,
        memory: undefined
      };

      // Get battery information if available
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          deviceInfo.batteryLevel = Math.round(battery.level * 100);
          setDeviceInfo({ ...deviceInfo });
        });
      }

      // Get connection information if available
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        deviceInfo.connectionType = connection.effectiveType || connection.type;
        setDeviceInfo({ ...deviceInfo });
      }

      // Get memory information if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        deviceInfo.memory = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setDeviceInfo({ ...deviceInfo });
      }

      setDeviceInfo(deviceInfo);
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        setPerformanceMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime)
        }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => window.removeEventListener('load', measurePerformance);
  }, []);

  // Touch gesture handling
  useEffect(() => {
    if (!enableTouchGestures || !deviceInfo?.touchSupport) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;
      
      // Detect swipe gestures
      if (deltaTime < 500) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (Math.abs(deltaX) > 50) {
            const gesture = deltaX > 0 ? 'Swipe Right' : 'Swipe Left';
            setTouchGestures(prev => [...prev.slice(-4), gesture]);
          }
        } else {
          if (Math.abs(deltaY) > 50) {
            const gesture = deltaY > 0 ? 'Swipe Down' : 'Swipe Up';
            setTouchGestures(prev => [...prev.slice(-4), gesture]);
          }
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enableTouchGestures, deviceInfo?.touchSupport]);

  // Image optimization
  useEffect(() => {
    if (!optimizeImages) return;

    const optimizeImagesForDevice = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.includes('data:') && !src.includes('blob:')) {
          // Add loading="lazy" for better performance
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
          
          // Add alt text if missing
          if (!img.alt) {
            img.alt = 'Image';
          }
        }
      });
    };

    // Run after images are loaded
    if (document.readyState === 'complete') {
      optimizeImagesForDevice();
    } else {
      window.addEventListener('load', optimizeImagesForDevice);
    }

    return () => window.removeEventListener('load', optimizeImagesForDevice);
  }, [optimizeImages]);

  // PWA enhancements
  useEffect(() => {
    if (!enablePWA) return;

    // Add viewport meta tag for better mobile experience
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no');
      document.head.appendChild(viewport);
    }

    // Add mobile-specific meta tags
    const mobileMetaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
    ];

    mobileMetaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // Add touch icons
    const touchIcons = [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ];

    touchIcons.forEach(icon => {
      let linkTag = document.querySelector(`link[rel="${icon.rel}"][sizes="${icon.sizes}"]`);
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', icon.rel);
        linkTag.setAttribute('sizes', icon.sizes);
        linkTag.setAttribute('href', icon.href);
        document.head.appendChild(linkTag);
      }
    });
  }, [enablePWA]);

  // Add mobile-specific CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Mobile-specific optimizations */
      @media (max-width: 768px) {
        /* Improve touch targets */
        button, a, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Optimize scrolling */
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Improve text readability */
        body {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        /* Optimize images */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Better form elements */
        input, select, textarea {
          font-size: 16px; /* Prevents zoom on iOS */
        }
      }
      
      /* Tablet optimizations */
      @media (min-width: 769px) and (max-width: 1024px) {
        .container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
      
      /* High DPI display optimizations */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .high-dpi-image {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      }
      
      /* Landscape orientation adjustments */
      @media (orientation: landscape) and (max-height: 500px) {
        .mobile-header {
          padding: 0.5rem 1rem;
        }
        
        .mobile-content {
          padding-top: 60px;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Get device icon
  const getDeviceIcon = () => {
    if (!deviceInfo) return <Monitor className="w-5 h-5" />;
    
    switch (deviceInfo.type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  // Get device color
  const getDeviceColor = () => {
    if (!deviceInfo) return 'text-gray-400';
    
    switch (deviceInfo.type) {
      case 'mobile': return 'text-blue-400';
      case 'tablet': return 'text-purple-400';
      default: return 'text-green-400';
    }
  };

  if (!showDebugInfo) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Mobile Debug Button */}
      <button
        onClick={() => setIsDebugOpen(!isDebugOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
        aria-label="Mobile Debug Info"
        aria-expanded={isDebugOpen}
      >
        {getDeviceIcon()}
      </button>

      {/* Mobile Debug Panel */}
      <AnimatePresence>
        {isDebugOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className={getDeviceColor()}>
                  {getDeviceIcon()}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Mobile Debug Info
                </h3>
              </div>
              <button
                onClick={() => setIsDebugOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close debug panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Device Information */}
            {deviceInfo && (
              <div className="p-4 space-y-4">
                {/* Device Type */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={getDeviceColor()}>
                      {getDeviceIcon()}
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Device Type</div>
                      <div className="text-xs text-gray-400 capitalize">{deviceInfo.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white">{deviceInfo.width} × {deviceInfo.height}</div>
                    <div className="text-xs text-gray-400">{deviceInfo.orientation}</div>
                  </div>
                </div>

                {/* Touch Support */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-300">Touch Support</div>
                      <div className="text-xs text-gray-400">Multi-touch enabled</div>
                    </div>
                  </div>
                  <div className={`text-sm ${deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}`}>
                    {deviceInfo.touchSupport ? 'Yes' : 'No'}
                  </div>
                </div>

                {/* Pixel Ratio */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-300">Pixel Ratio</div>
                      <div className="text-xs text-gray-400">Display density</div>
                    </div>
                  </div>
                  <div className="text-sm text-white">{deviceInfo.pixelRatio}x</div>
                </div>

                {/* Battery Level */}
                {deviceInfo.batteryLevel !== undefined && (
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Battery className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm text-gray-300">Battery Level</div>
                        <div className="text-xs text-gray-400">Device battery</div>
                      </div>
                    </div>
                    <div className="text-sm text-white">{deviceInfo.batteryLevel}%</div>
                  </div>
                )}

                {/* Connection Type */}
                {deviceInfo.connectionType && (
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Wifi className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-sm text-gray-300">Connection</div>
                        <div className="text-xs text-gray-400">Network type</div>
                      </div>
                    </div>
                    <div className="text-sm text-white capitalize">{deviceInfo.connectionType}</div>
                  </div>
                )}

                {/* Memory Usage */}
                {deviceInfo.memory && (
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-pink-400" />
                      <div>
                        <div className="text-sm text-gray-300">Memory Usage</div>
                        <div className="text-xs text-gray-400">JS heap size</div>
                      </div>
                    </div>
                    <div className="text-sm text-white">{deviceInfo.memory} MB</div>
                  </div>
                )}

                {/* Performance Metrics */}
                <div className="p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-white">Performance</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>Load Time:</span>
                      <span>{performanceMetrics.loadTime}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Connection:</span>
                      <span className="capitalize">{performanceMetrics.connectionSpeed}</span>
                    </div>
                  </div>
                </div>

                {/* Touch Gestures */}
                {touchGestures.length > 0 && (
                  <div className="p-3 bg-gray-800/50 rounded-xl">
                                      <div className="flex items-center gap-2 mb-3">
                    <Hand className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-white">Recent Gestures</span>
                  </div>
                    <div className="space-y-1">
                      {touchGestures.map((gesture, index) => (
                        <div key={index} className="text-xs text-green-300 bg-green-400/10 p-2 rounded-lg">
                          {gesture}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optimization Status */}
                <div className="p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Optimizations</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Touch Gestures:</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Image Optimization:</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">PWA Support:</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                Mobile optimizations are automatically applied
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileOptimizer;