import React, { useEffect, useState, ReactNode } from 'react';



interface MobileOptimizerProps {
  children: ReactNode;
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

  // const [showLocalDebugInfo, setShowLocalDebugInfo] = useState(false);


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
                const img = entry.target as any;
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