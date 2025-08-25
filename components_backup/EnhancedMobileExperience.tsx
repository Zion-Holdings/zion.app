import React, { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, Battery,
  Hand, Settings
} from 'lucide-react';



interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  touchSupport: boolean;
  batteryLevel?: number;
  connectionType?: string;
}

const EnhancedMobileExperience: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'portrait',
    screenSize: { width: 0, height: 0 },
    touchSupport: false
  });
  const [isOptimized, setIsOptimized] = useState(false);
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useTransform(y, [-100, 100], [0.8, 1.2]);

  useEffect(() => {
    detectDevice();
    setupTouchGestures();
    setupOrientationChange();
    setupBatteryAPI();
    setupConnectionAPI();
  }, []);

  const detectDevice = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (width <= 768) type = 'mobile';
    else if (width <= 1024) type = 'tablet';
    
    const orientation: 'portrait' | 'landscape' = width > height ? 'landscape' : 'portrait';
    
    setDeviceInfo({
      type,
      orientation,
      screenSize: { width, height },
      touchSupport
    });
  };

  const setupTouchGestures = () => {
    if (!containerRef.current) return;

    let startX = 0;
    let startY = 0;
    let startDistance = 0;


    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        startDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );

      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 50) {
            addGesture('Swipe Right');
          } else if (deltaX < -50) {
            addGesture('Swipe Left');
          }
        } else {
          if (deltaY > 50) {
            addGesture('Swipe Down');
          } else if (deltaY < -50) {
            addGesture('Swipe Up');
          }
        }
      } else if (e.touches.length === 2) {
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        
        if (Math.abs(currentDistance - startDistance) > 20) {
          if (currentDistance > startDistance) {
            addGesture('Pinch Out');
          } else {
            addGesture('Pinch In');
          }
        }
      }
    };

    const element = containerRef.current;
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  };

  const setupOrientationChange = () => {
    const handleOrientationChange = () => {
      setTimeout(detectDevice, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', detectDevice);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', detectDevice);
    };
  };

  const setupBatteryAPI = async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        const updateBatteryInfo = () => {
          setDeviceInfo(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100)
          }));
        };
        
        battery.addEventListener('levelchange', updateBatteryInfo);
        updateBatteryInfo();
      } catch {
        // Battery API not supported
      }
    }
  };

  const setupConnectionAPI = () => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const updateConnectionInfo = () => {
        setDeviceInfo(prev => ({
          ...prev,
          connectionType: connection.effectiveType || 'unknown'
        }));
      };
      
      connection.addEventListener('change', updateConnectionInfo);
      updateConnectionInfo();
    }
  };

  const addGesture = (gesture: string) => {
    setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
  };



  const optimizeForDevice = () => {
    setIsOptimized(true);
    
    // Apply device-specific optimizations
    if (deviceInfo.type === 'mobile') {
      // Mobile-specific optimizations
      document.documentElement.style.setProperty('--touch-target-size', '44px');
      document.documentElement.style.setProperty('--font-size-base', '16px');
    } else if (deviceInfo.type === 'tablet') {
      // Tablet-specific optimizations
      document.documentElement.style.setProperty('--touch-target-size', '48px');
      document.documentElement.style.setProperty('--font-size-base', '18px');
    }
    
    // Add mobile-friendly CSS classes
    document.body.classList.add('mobile-optimized');
    
    setTimeout(() => setIsOptimized(false), 2000);
  };

  const handlePan = (_event: unknown, info: PanInfo) => {
    x.set(info.offset.x);
    y.set(info.offset.y);
  };

  const handlePanEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        ref={containerRef}
        className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 text-white w-72"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Device Info Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {deviceInfo.type === 'mobile' && <Smartphone className="w-5 h-5 text-cyan-400" />}
            {deviceInfo.type === 'tablet' && <Tablet className="w-5 h-5 text-cyan-400" />}
            {deviceInfo.type === 'desktop' && <Monitor className="w-5 h-5 text-cyan-400" />}
            <span className="text-sm font-medium capitalize">{deviceInfo.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            {deviceInfo.connectionType && (
              <div className="flex items-center space-x-1">
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">{deviceInfo.connectionType}</span>
              </div>
            )}
            {deviceInfo.batteryLevel !== undefined && (
              <div className="flex items-center space-x-1">
                <Battery className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">{deviceInfo.batteryLevel}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Device Details */}
        <div className="space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Orientation:</span>
            <span className="capitalize">{deviceInfo.orientation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Screen:</span>
            <span>{deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Touch Support:</span>
            <span className={deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}>
              {deviceInfo.touchSupport ? 'Yes' : 'No'}
            </span>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
          <div className="text-xs text-gray-400 mb-2">Touch Demo</div>
          <motion.div
            className="w-full h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
            style={{ rotate, scale }}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Hand className="w-6 h-6 mr-2" />
            Touch & Pan
          </motion.div>
        </div>

        {/* Gesture History */}
        {gestureHistory.length > 0 && (
          <div className="mt-4">
            <div className="text-xs text-gray-400 mb-2">Recent Gestures</div>
            <div className="space-y-1">
              {gestureHistory.map((gesture, index) => (
                <div key={index} className="text-xs bg-gray-700/50 px-2 py-1 rounded">
                  {gesture}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optimization Button */}
        <button
          onClick={optimizeForDevice}
          disabled={isOptimized}
          className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          <Settings className="w-4 h-4" />
          <span>{isOptimized ? 'Optimized!' : 'Optimize for Device'}</span>
        </button>

        {/* Mobile Tips */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Mobile Tips</div>
          <div className="text-xs text-gray-500 space-y-1">
            <div>• Swipe gestures for navigation</div>
            <div>• Pinch to zoom content</div>
            <div>• Touch targets are 44px+</div>
            <div>• Optimized for portrait mode</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedMobileExperience;