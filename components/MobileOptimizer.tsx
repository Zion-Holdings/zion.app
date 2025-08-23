import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, 
  MousePointer, RotateCcw, Settings
} from 'lucide-react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  screenSize: { width: number; height: number };
  pixelRatio: number;
  connection?: string;
  batteryLevel?: number;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ 
  children, 
  showDebugInfo = false 
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'portrait',
    touchSupport: false,
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1
  });
  const [showDebug, setShowDebug] = useState(showDebugInfo);
  const [touchGestures, setTouchGestures] = useState({
    enabled: true,
    doubleTapZoom: true,
    pinchZoom: true,
    swipeNavigation: true
  });

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const orientation = window.orientation || 0;
    
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = screen.width <= 768 ? 'mobile' : 'tablet';
    }

    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    setDeviceInfo({
      type,
      orientation: Math.abs(orientation) === 90 ? 'landscape' : 'portrait',
      touchSupport,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1
    });
  }, []);

  // Handle orientation changes
  const handleOrientationChange = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const orientation = window.orientation || 0;
    setDeviceInfo(prev => ({
      ...prev,
      orientation: Math.abs(orientation) === 90 ? 'landscape' : 'portrait'
    }));
  }, []);

  // Handle resize events
  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    setDeviceInfo(prev => ({
      ...prev,
      screenSize: { width: window.innerWidth, height: window.innerHeight }
    }));
  }, []);

  // Touch gesture handlers
      const handleTouchStart = useCallback(() => {
      if (!touchGestures.enabled) return;
      
      // Implement touch gesture logic here
      // This is a placeholder for actual touch gesture handling
    }, [touchGestures.enabled]);

  const handleDoubleTap = useCallback((e: TouchEvent) => {
    if (!touchGestures.doubleTapZoom) return;
    
    // Implement double tap zoom logic
    e.preventDefault();
  }, [touchGestures.doubleTapZoom]);

  // Initialize device detection and event listeners
  useEffect(() => {
    detectDevice();
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    if (deviceInfo.touchSupport) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleDoubleTap);
    }
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleDoubleTap);
    };
  }, [detectDevice, handleOrientationChange, handleResize, handleTouchStart, handleDoubleTap, deviceInfo.touchSupport]);

  // Apply mobile-specific optimizations
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && deviceInfo.type === 'mobile') {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    // Add mobile-specific CSS classes
    document.body.classList.toggle('mobile-device', deviceInfo.type === 'mobile');
    document.body.classList.toggle('tablet-device', deviceInfo.type === 'tablet');
    document.body.classList.toggle('touch-device', deviceInfo.touchSupport);
    document.body.classList.toggle('landscape', deviceInfo.orientation === 'landscape');
    document.body.classList.toggle('portrait', deviceInfo.orientation === 'portrait');
  }, [deviceInfo]);

  // Get device icon
  const getDeviceIcon = () => {
    switch (deviceInfo.type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  // Get orientation icon
  const getOrientationIcon = () => {
    return deviceInfo.orientation === 'landscape' ? 
      <RotateCcw className="w-5 h-5" /> : 
      <RotateCcw className="w-5 h-5 transform rotate-90" />;
  };

  return (
    <>
      {children}
      
      {/* Mobile Debug Panel */}
      {showDebug && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-4 z-50 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 shadow-2xl max-w-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Mobile Optimizer
            </h3>
            <button
              onClick={() => setShowDebug(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3 text-xs">
            {/* Device Info */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Device:</span>
              <div className="flex items-center gap-2 text-white">
                {getDeviceIcon()}
                <span className="capitalize">{deviceInfo.type}</span>
              </div>
            </div>
            
            {/* Orientation */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Orientation:</span>
              <div className="flex items-center gap-2 text-white">
                {getOrientationIcon()}
                <span className="capitalize">{deviceInfo.orientation}</span>
              </div>
            </div>
            
            {/* Touch Support */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Touch:</span>
              <div className="flex items-center gap-2">
                <MousePointer className={`w-4 h-4 ${deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}`} />
                <span className={deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}>
                  {deviceInfo.touchSupport ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
            
            {/* Screen Size */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Screen:</span>
              <span className="text-white">
                {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
              </span>
            </div>
            
            {/* Pixel Ratio */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Pixel Ratio:</span>
              <span className="text-white">{deviceInfo.pixelRatio}x</span>
            </div>
            
            {/* Touch Gestures */}
            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Touch Gestures:</span>
                <button
                  onClick={() => setTouchGestures(prev => ({ ...prev, enabled: !prev.enabled }))}
                  className={`px-2 py-1 rounded text-xs ${touchGestures.enabled ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                >
                  {touchGestures.enabled ? 'Enabled' : 'Disabled'}
                </button>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Double Tap Zoom:</span>
                  <input
                    type="checkbox"
                    checked={touchGestures.doubleTapZoom}
                    onChange={(e) => setTouchGestures(prev => ({ ...prev, doubleTapZoom: e.target.checked }))}
                    className="w-3 h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Pinch Zoom:</span>
                  <input
                    type="checkbox"
                    checked={touchGestures.pinchZoom}
                    onChange={(e) => setTouchGestures(prev => ({ ...prev, pinchZoom: e.target.checked }))}
                    className="w-3 h-3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Swipe Nav:</span>
                  <input
                    type="checkbox"
                    checked={touchGestures.swipeNavigation}
                    onChange={(e) => setTouchGestures(prev => ({ ...prev, swipeNavigation: e.target.checked }))}
                    className="w-3 h-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Mobile Optimization Toggle */}
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="fixed top-4 left-4 z-40 p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-800/90"
        aria-label="Toggle Mobile Optimizer Debug"
      >
        <Smartphone className="w-5 h-5" />
      </button>
    </>
  );
};

export default MobileOptimizer;