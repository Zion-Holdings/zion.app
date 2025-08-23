import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  MousePointer, 
  Wifi, 
  Battery, 
  WifiOff,
  BatteryCharging,
  Signal,
  SignalHigh,
  SignalLow
} from 'lucide-react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [touchSupported, setTouchSupported] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('unknown');
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean | null>(null);
  const [showMobileIndicator, setShowMobileIndicator] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const tablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsLandscape(window.innerWidth > window.innerHeight);
      setTouchSupported('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    const checkConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setConnectionType(connection.effectiveType || connection.type || 'unknown');
      }
    };

    const checkBattery = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          setBatteryLevel(battery.level * 100);
          setIsCharging(battery.charging);
          
          battery.addEventListener('levelchange', () => {
            setBatteryLevel(battery.level * 100);
          });
          
          battery.addEventListener('chargingchange', () => {
            setIsCharging(battery.charging);
          });
        } catch (error) {
          console.log('Battery API not supported');
        }
      }
    };

    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }, 100);
    };

    checkDevice();
    checkConnection();
    checkBattery();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Show mobile indicator briefly on mobile devices
    if (isMobile || isTablet) {
      setShowMobileIndicator(true);
      setTimeout(() => setShowMobileIndicator(false), 3000);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobile, isTablet]);

  // Enhanced touch interactions for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (touchSupported) {
      // Add touch feedback
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(0.98)';
      target.style.transition = 'transform 0.1s ease';
    }
  }, [touchSupported]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchSupported) {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(1)';
    }
  }, [touchSupported]);

  // Performance optimizations for mobile
  useEffect(() => {
    if (isMobile || isTablet) {
      // Reduce motion for mobile devices
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
      
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.dataset.mobileSrc) {
          img.src = img.dataset.mobileSrc;
        }
      });
    }
  }, [isMobile, isTablet]);

  // Connection-aware loading
  const shouldShowLowQuality = connectionType === 'slow-2g' || connectionType === '2g';
  
  if (shouldShowLowQuality) {
    // Apply low-quality optimizations
    document.documentElement.style.setProperty('--image-quality', 'low');
  }

  return (
    <>
      {/* Mobile Status Indicator */}
      <AnimatePresence>
        {showMobileIndicator && (isMobile || isTablet) && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2 text-white text-sm"
          >
            <div className="flex items-center gap-2">
              {isMobile ? <Smartphone className="w-4 h-4" /> : <Tablet className="w-4 h-4" />}
              <span>Mobile Optimized</span>
              {touchSupported && <MousePointer className="w-4 h-4 text-cyan-400" />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connection Status */}
      {isMobile && connectionType !== 'unknown' && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2">
          {connectionType === '4g' || connectionType === '5g' ? (
            <SignalHigh className="w-4 h-4 text-green-400" />
          ) : connectionType === '3g' ? (
            <Signal className="w-4 h-4 text-yellow-400" />
          ) : (
            <SignalLow className="w-4 h-4 text-red-400" />
          )}
          <span className="text-white text-xs">{connectionType.toUpperCase()}</span>
        </div>
      )}

      {/* Battery Status */}
      {isMobile && batteryLevel !== null && (
        <div className="fixed top-16 right-4 z-50 flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2">
          {isCharging ? (
            <BatteryCharging className="w-4 h-4 text-green-400" />
          ) : (
            <Battery className="w-4 h-4 text-white" />
          )}
          <span className="text-white text-xs">{Math.round(batteryLevel)}%</span>
        </div>
      )}

      {/* Enhanced Mobile Content */}
      <div 
        className={`mobile-optimized ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isLandscape ? 'landscape' : 'portrait'}`}
        style={{
          '--touch-supported': touchSupported ? '1' : '0',
          '--connection-type': connectionType,
          '--battery-level': batteryLevel || 0,
          '--is-charging': isCharging ? '1' : '0'
        } as React.CSSProperties}
      >
        {/* Apply touch handlers to interactive elements */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="touch-optimized"
        >
          {children}
        </div>
      </div>

      {/* Mobile Performance Monitor */}
      {isMobile && (
        <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 text-white text-xs">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>Mobile Mode</span>
          </div>
          <div className="text-white/60 mt-1">
            {touchSupported ? 'Touch' : 'No Touch'} • {connectionType}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileOptimizer;