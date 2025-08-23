import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  RotateCcw, 
  Wifi, 
  WifiOff,
  Hand
} from 'lucide-react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ 
  children, 
  showDebugInfo = false 
}) => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupport, setTouchSupport] = useState(false);
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const [networkInfo, setNetworkInfo] = useState({
    effectiveType: 'unknown',
    downlink: 0,
    rtt: 0
  });

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Check for touch support
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setTouchSupport(hasTouch);
      
      // Determine device type
      if (screenWidth < 768) {
        setDeviceType('mobile');
      } else if (screenWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
      
      // Determine orientation
      setOrientation(screenWidth > screenHeight ? 'landscape' : 'portrait');
    };

    // Initial detection
    detectDevice();
    
    // Listen for resize events
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);
    
    // Network information
    if ('connection' in navigator) {
      const connection = (navigator as { connection: { effectiveType?: string; downlink?: number; rtt?: number; addEventListener: (event: string, handler: () => void) => void; removeEventListener: (event: string, handler: () => void) => void } }).connection;
      const updateNetworkInfo = () => {
        setNetworkInfo({
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        });
      };
      
      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);
      
      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    }
    
    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Apply mobile-specific optimizations
  useEffect(() => {
    const root = document.documentElement;
    
    // Add device-specific classes
    root.classList.remove('mobile-device', 'tablet-device', 'desktop-device');
    root.classList.add(`${deviceType}-device`);
    
    // Add orientation classes
    root.classList.remove('portrait', 'landscape');
    root.classList.add(orientation);
    
    // Add touch support classes
    if (touchSupport) {
      root.classList.add('touch-device');
    } else {
      root.classList.remove('touch-device');
    }
    
    // Apply mobile-specific CSS variables
    if (deviceType === 'mobile') {
      root.style.setProperty('--mobile-padding', '1rem');
      root.style.setProperty('--mobile-font-size', '0.875rem');
      root.style.setProperty('--mobile-button-height', '3rem');
    } else if (deviceType === 'tablet') {
      root.style.setProperty('--tablet-padding', '1.5rem');
      root.style.setProperty('--tablet-font-size', '1rem');
      root.style.setProperty('--tablet-button-height', '3.5rem');
    } else {
      root.style.setProperty('--desktop-padding', '2rem');
      root.style.setProperty('--desktop-font-size', '1.125rem');
      root.style.setProperty('--desktop-button-height', '4rem');
    }
  }, [deviceType, orientation, touchSupport]);

  // Touch gesture handling
  useEffect(() => {
    if (!touchSupport) return;

    let startY = 0;
    let startX = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) {
        const deltaY = Math.abs(e.touches[0].clientY - startY);
        const deltaX = Math.abs(e.touches[0].clientX - startX);
        
        if (deltaY > deltaX && deltaY > 10) {
          isScrolling = true;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isScrolling) {
        const deltaY = e.changedTouches[0].clientY - startY;
        const deltaX = e.changedTouches[0].clientX - startX;
        
        // Swipe up gesture
        if (deltaY < -50 && Math.abs(deltaX) < 100) {
          // Handle swipe up
          document.dispatchEvent(new Event('swipeUp'));
        }
        
        // Swipe down gesture
        if (deltaY > 50 && Math.abs(deltaX) < 100) {
          // Handle swipe down
          document.dispatchEvent(new Event('swipeDown'));
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchSupport]);

  // Performance optimizations for mobile
  useEffect(() => {
    if (deviceType === 'mobile') {
      // Reduce motion on mobile for better performance
      const root = document.documentElement;
      root.classList.add('mobile-optimized');
      
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.dataset.mobileSrc) {
          img.src = img.dataset.mobileSrc;
        }
      });
    }
  }, [deviceType]);

  if (!showDebugInfo) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Mobile Debug Toggle Button */}
      <button
        onClick={() => setShowDebugPanel(!showDebugPanel)}
        className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
        aria-label="Mobile Debug Info"
        aria-expanded={showDebugPanel}
      >
        <Smartphone className="w-6 h-6" />
      </button>

      {/* Mobile Debug Panel */}
      <AnimatePresence>
        {showDebugPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-20 z-50 w-80 bg-black/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 border-b border-blue-400/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Mobile Debug
                </h3>
                <button
                  onClick={() => setShowDebugPanel(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close debug panel"
                >
                  <RotateCcw className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Device Info */}
            <div className="p-4 space-y-4">
              {/* Device Type */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-white" />}
                    {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-white" />}
                    {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Device Type</div>
                    <div className="text-gray-400 text-xs capitalize">{deviceType}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-400 font-medium capitalize">{deviceType}</div>
                </div>
              </div>

              {/* Orientation */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Orientation</div>
                    <div className="text-gray-400 text-xs capitalize">{orientation}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-400 font-medium capitalize">{orientation}</div>
                </div>
              </div>

              {/* Touch Support */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    {touchSupport ? <Hand className="w-4 h-4 text-white" /> : <WifiOff className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Input Method</div>
                    <div className="text-gray-400 text-xs">
                      {touchSupport ? 'Touch Enabled' : 'Mouse/Keyboard'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${touchSupport ? 'text-green-400' : 'text-blue-400'}`}>
                    {touchSupport ? 'Touch' : 'Mouse'}
                  </div>
                </div>
              </div>

              {/* Network Info */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Network</div>
                    <div className="text-gray-400 text-xs">
                      {networkInfo.effectiveType} • {networkInfo.downlink}Mbps
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-purple-400 font-medium">
                    {networkInfo.effectiveType}
                  </div>
                  <div className="text-xs text-gray-400">
                    {networkInfo.rtt}ms RTT
                  </div>
                </div>
              </div>

              {/* Screen Info */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Screen</div>
                    <div className="text-gray-400 text-xs">
                      {window.innerWidth} × {window.innerHeight}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-cyan-400 font-medium">
                    {window.innerWidth}×{window.innerHeight}
                  </div>
                  <div className="text-xs text-gray-400">
                    {window.devicePixelRatio}x DPR
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 border-t border-blue-400/30">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Real-time monitoring</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Live
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Mobile Styles */}
      <style jsx global>{`
        .mobile-device {
          --device-padding: var(--mobile-padding, 1rem);
          --device-font-size: var(--mobile-font-size, 0.875rem);
          --device-button-height: var(--mobile-button-height, 3rem);
        }

        .tablet-device {
          --device-padding: var(--tablet-padding, 1.5rem);
          --device-font-size: var(--tablet-font-size, 1rem);
          --device-button-height: var(--tablet-button-height, 3.5rem);
        }

        .desktop-device {
          --device-padding: var(--desktop-padding, 2rem);
          --device-font-size: var(--desktop-font-size, 1.125rem);
          --device-button-height: var(--desktop-button-height, 4rem);
        }

        .touch-device button,
        .touch-device [role="button"] {
          min-height: 44px;
          min-width: 44px;
        }

        .touch-device input,
        .touch-device select,
        .touch-device textarea {
          font-size: 16px; /* Prevents zoom on iOS */
        }

        .mobile-optimized * {
          will-change: auto;
        }

        .mobile-optimized .animate-pulse {
          animation-duration: 2s;
        }

        @media (max-width: 768px) {
          .mobile-device .container {
            padding-left: var(--device-padding);
            padding-right: var(--device-padding);
          }
          
          .mobile-device h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          .mobile-device h2 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-device .grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .tablet-device .container {
            padding-left: var(--device-padding);
            padding-right: var(--device-padding);
          }
        }

        .portrait .landscape-only {
          display: none !important;
        }

        .landscape .portrait-only {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default MobileOptimizer;