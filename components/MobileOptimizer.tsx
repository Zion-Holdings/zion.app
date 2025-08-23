import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, WifiOff, Battery, 
  BatteryCharging, Volume2, VolumeX, RotateCcw, Settings,
  Hand, MousePointer, ArrowUp, ArrowDown, ArrowLeft, ArrowRight
} from 'lucide-react';

interface MobileOptimizerProps {
  onMobileOptimizationChange?: (settings: MobileOptimizationSettings) => void;
}

interface MobileOptimizationSettings {
  touchOptimization: boolean;
  gestureNavigation: boolean;
  mobileLayout: boolean;
  batteryOptimization: boolean;
  dataOptimization: boolean;
  hapticFeedback: boolean;
  swipeNavigation: boolean;
  mobileFirst: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  onMobileOptimizationChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: '',
    screenSize: '',
    touchSupport: false,
    batteryLevel: 0,
    isCharging: false,
    connectionType: '',
    memoryInfo: null as any
  });
  const [settings, setSettings] = useState<MobileOptimizationSettings>({
    touchOptimization: true,
    gestureNavigation: true,
    mobileLayout: true,
    batteryOptimization: true,
    dataOptimization: true,
    hapticFeedback: true,
    swipeNavigation: true,
    mobileFirst: true
  });

  // Detect device type and capabilities
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Device type detection
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const tablet = /iPad|Android.*Mobile|tablet|ipad|playbook|android(?!.*mobi)/i.test(userAgent);
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      // Touch support detection
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Screen size
      const screenSize = `${screenWidth}x${screenHeight}`;
      
      // Connection type
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const connectionType = connection ? connection.effectiveType || connection.type : 'unknown';
      
      // Memory info
      const memoryInfo = (performance as any).memory;
      
      setDeviceInfo({
        userAgent,
        screenSize,
        touchSupport,
        batteryLevel: 0,
        isCharging: false,
        connectionType,
        memoryInfo
      });
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Battery API support
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBatteryInfo = () => {
          setDeviceInfo(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100),
            isCharging: battery.charging
          }));
        };
        
        updateBatteryInfo();
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);
        
        return () => {
          battery.removeEventListener('levelchange', updateBatteryInfo);
          battery.removeEventListener('chargingchange', updateBatteryInfo);
        };
      });
    }
  }, []);

  // Apply mobile optimizations
  useEffect(() => {
    const root = document.documentElement;
    
    // Touch optimization
    if (settings.touchOptimization) {
      root.style.setProperty('--touch-target-size', '44px');
      root.style.setProperty('--touch-spacing', '8px');
    } else {
      root.style.setProperty('--touch-target-size', 'auto');
      root.style.setProperty('--touch-spacing', 'auto');
    }
    
    // Gesture navigation
    if (settings.gestureNavigation) {
      root.classList.add('gesture-enabled');
    } else {
      root.classList.remove('gesture-enabled');
    }
    
    // Mobile layout
    if (settings.mobileLayout) {
      root.classList.add('mobile-layout');
    } else {
      root.classList.remove('mobile-layout');
    }
    
    // Battery optimization
    if (settings.batteryOptimization) {
      root.style.setProperty('--animation-reduce', '0.5');
      root.style.setProperty('--transition-reduce', '0.5');
    } else {
      root.style.setProperty('--animation-reduce', '1');
      root.style.setProperty('--transition-reduce', '1');
    }
    
    // Data optimization
    if (settings.dataOptimization) {
      root.classList.add('data-optimized');
    } else {
      root.classList.remove('data-optimized');
    }
    
    // Haptic feedback
    if (settings.hapticFeedback && 'vibrate' in navigator) {
      root.classList.add('haptic-enabled');
    } else {
      root.classList.remove('haptic-enabled');
    }
    
    // Swipe navigation
    if (settings.swipeNavigation) {
      root.classList.add('swipe-enabled');
    } else {
      root.classList.remove('swipe-enabled');
    }
    
    // Mobile first approach
    if (settings.mobileFirst) {
      root.classList.add('mobile-first');
    } else {
      root.classList.remove('mobile-first');
    }
    
    // Notify parent component
    onMobileOptimizationChange?.(settings);
  }, [settings, onMobileOptimizationChange]);

  // Touch gesture handling
  useEffect(() => {
    if (!settings.gestureNavigation) return;
    
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
      
      // Minimum swipe distance and time
      const minDistance = 50;
      const maxTime = 500;
      
      if (deltaTime < maxTime) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minDistance) {
          // Horizontal swipe
          if (deltaX > 0) {
            handleSwipeRight();
          } else {
            handleSwipeLeft();
          }
        } else if (Math.abs(deltaY) > minDistance) {
          // Vertical swipe
          if (deltaY > 0) {
            handleSwipeDown();
          } else {
            handleSwipeUp();
          }
        }
      }
    };
    
    const handleSwipeLeft = () => {
      // Navigate to next page/section
      if (settings.hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(50);
      }
      console.log('Swipe Left - Next');
    };
    
    const handleSwipeRight = () => {
      // Navigate to previous page/section
      if (settings.hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(50);
      }
      console.log('Swipe Right - Previous');
    };
    
    const handleSwipeUp = () => {
      // Scroll up or show more content
      if (settings.hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(30);
      }
      console.log('Swipe Up - Scroll Up');
    };
    
    const handleSwipeDown = () => {
      // Scroll down or hide content
      if (settings.hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(30);
      }
      console.log('Swipe Down - Scroll Down');
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [settings.gestureNavigation, settings.hapticFeedback]);

  // Performance monitoring for mobile
  useEffect(() => {
    if (!settings.batteryOptimization) return;
    
    const monitorPerformance = () => {
      // Monitor frame rate
      let frameCount = 0;
      let lastTime = performance.now();
      
      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          
          if (fps < 30) {
            // Reduce animations for better performance
            document.documentElement.style.setProperty('--animation-reduce', '0.3');
          }
          
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
      };
      
      requestAnimationFrame(countFrames);
    };
    
    monitorPerformance();
  }, [settings.batteryOptimization]);

  // Reset all settings
  const handleReset = useCallback(() => {
    setSettings({
      touchOptimization: true,
      gestureNavigation: true,
      mobileLayout: true,
      batteryOptimization: true,
      dataOptimization: true,
      hapticFeedback: true,
      swipeNavigation: true,
      mobileFirst: true
    });
  }, []);

  // Auto-optimize based on device capabilities
  const handleAutoOptimize = useCallback(() => {
    const newSettings = { ...settings };
    
    // Auto-optimize based on device info
    if (deviceInfo.batteryLevel < 20) {
      newSettings.batteryOptimization = true;
    }
    
    if (deviceInfo.connectionType === 'slow-2g' || deviceInfo.connectionType === '2g') {
      newSettings.dataOptimization = true;
    }
    
    if (!deviceInfo.touchSupport) {
      newSettings.touchOptimization = false;
      newSettings.gestureNavigation = false;
      newSettings.swipeNavigation = false;
    }
    
    setSettings(newSettings);
  }, [settings, deviceInfo]);

  return (
    <>
      {/* Mobile optimization toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
          isMobile 
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
        }`}
        aria-label="Open mobile optimization settings"
        aria-expanded={isOpen}
        aria-controls="mobile-optimization-panel"
      >
        {isMobile ? <Smartphone className="w-7 h-7 mx-auto" /> : <Monitor className="w-7 h-7 mx-auto" />}
      </button>

      {/* Mobile optimization panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
            id="mobile-optimization-panel"
            role="dialog"
            aria-labelledby="mobile-optimization-title"
            aria-describedby="mobile-optimization-description"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="mobile-optimization-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Mobile Optimization
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close mobile optimization settings"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
              
              <p id="mobile-optimization-description" className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Optimize your experience for {isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'} devices.
              </p>

              {/* Device Information */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Device Information
                </h3>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>Device:</span>
                    <span className="flex items-center space-x-1">
                      {isMobile ? <Smartphone className="w-3 h-3" /> : isTablet ? <Tablet className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                      <span>{isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Screen:</span>
                    <span>{deviceInfo.screenSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Touch:</span>
                    <span className="flex items-center space-x-1">
                                             {deviceInfo.touchSupport ? <Hand className="w-3 h-3 text-green-500" /> : <Hand className="w-3 h-3 text-red-500" />}
                      <span>{deviceInfo.touchSupport ? 'Supported' : 'Not Supported'}</span>
                    </span>
                  </div>
                  {deviceInfo.batteryLevel > 0 && (
                    <div className="flex items-center justify-between">
                      <span>Battery:</span>
                      <span className="flex items-center space-x-1">
                        {deviceInfo.isCharging ? <BatteryCharging className="w-3 h-3 text-green-500" /> : <Battery className="w-3 h-3" />}
                        <span>{deviceInfo.batteryLevel}%</span>
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span>Connection:</span>
                    <span className="flex items-center space-x-1">
                      {deviceInfo.connectionType.includes('slow') ? <WifiOff className="w-3 h-3 text-red-500" /> : <Wifi className="w-3 h-3 text-green-500" />}
                      <span>{deviceInfo.connectionType}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Optimization Options */}
              <div className="space-y-4 mb-6">
                {[
                                     { key: 'touchOptimization', label: 'Touch Optimization', icon: Hand, description: 'Optimize touch targets and spacing' },
                                     { key: 'gestureNavigation', label: 'Gesture Navigation', icon: MousePointer, description: 'Enable gesture-based navigation' },
                  { key: 'mobileLayout', label: 'Mobile Layout', icon: Smartphone, description: 'Use mobile-optimized layouts' },
                  { key: 'batteryOptimization', label: 'Battery Optimization', icon: Battery, description: 'Reduce animations for better battery life' },
                  { key: 'dataOptimization', label: 'Data Optimization', icon: Wifi, description: 'Optimize for slower connections' },
                  { key: 'hapticFeedback', label: 'Haptic Feedback', icon: Volume2, description: 'Enable vibration feedback' },
                                     { key: 'swipeNavigation', label: 'Swipe Navigation', icon: ArrowLeft, description: 'Enable swipe gestures' },
                  { key: 'mobileFirst', label: 'Mobile First', icon: Settings, description: 'Prioritize mobile experience' }
                ].map(({ key, label, icon: Icon, description }) => (
                  <div key={key} className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id={key}
                      checked={settings[key as keyof MobileOptimizationSettings] as boolean}
                      onChange={(e) => setSettings(prev => ({ ...prev, [key]: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2 mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor={key} className="flex items-center space-x-2 cursor-pointer">
                        <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleAutoOptimize}
                  className="flex-1 py-2 px-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  aria-label="Auto-optimize based on device capabilities"
                >
                  <Settings className="w-4 h-4" />
                  <span>Auto-Optimize</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  aria-label="Reset all mobile optimization settings to default"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileOptimizer;