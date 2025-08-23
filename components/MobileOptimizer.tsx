import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, Battery, Zap, Settings, 
  RotateCcw, Maximize2, Minimize2, Eye, EyeOff,
  Smartphone as MobileIcon, Tablet as TabletIcon, Monitor as DesktopIcon, X
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  connection: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  } | null;
  battery: {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
  } | null;
}

interface MobileOptimizerProps {
  isVisible?: boolean;
  onToggle?: (visible: boolean) => void;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ 
  isVisible = false, 
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [touchGestures, setTouchGestures] = useState({
    enabled: true,
    sensitivity: 'medium',
    hapticFeedback: true
  });
  const [performanceMode, setPerformanceMode] = useState<'balanced' | 'performance' | 'battery'>('balanced');
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureHistoryRef = useRef<Array<{ type: string; timestamp: number }>>([]);

  // Detect device information
  const detectDevice = useCallback(() => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (width <= 768) {
      type = 'mobile';
    } else if (width <= 1024) {
      type = 'tablet';
    }

    const orientation = width > height ? 'landscape' : 'portrait';
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Get connection information
    let connection = null;
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      connection = {
        effectiveType: conn.effectiveType || 'unknown',
        downlink: conn.downlink || 0,
        rtt: conn.rtt || 0,
        saveData: conn.saveData || false
      };
    }

    // Get battery information
    let battery = null;
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((batt: any) => {
        battery = {
          level: batt.level,
          charging: batt.charging,
          chargingTime: batt.chargingTime,
          dischargingTime: batt.dischargingTime
        };
        setDeviceInfo(prev => prev ? { ...prev, battery } : null);
      });
    }

    const info: DeviceInfo = {
      type,
      width,
      height,
      pixelRatio,
      orientation,
      touchSupport,
      connection,
      battery
    };

    setDeviceInfo(info);
    return info;
  }, []);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((device: DeviceInfo) => {
    const suggestions: string[] = [];

    if (device.type === 'mobile') {
      if (device.connection?.effectiveType === 'slow-2g' || device.connection?.effectiveType === '2g') {
        suggestions.push('Enable data saving mode for slow connections');
      }
      if (device.connection?.saveData) {
        suggestions.push('Data saver is enabled - optimize image loading');
      }
      if (device.pixelRatio > 2) {
        suggestions.push('High DPI display detected - use optimized images');
      }
      if (!device.touchSupport) {
        suggestions.push('Touch support not detected - optimize for mouse input');
      }
    }

    if (device.orientation === 'landscape' && device.type === 'mobile') {
      suggestions.push('Landscape mode - adjust layout for better mobile experience');
    }

    if (device.battery && device.battery.level < 0.2) {
      suggestions.push('Low battery - enable power saving optimizations');
    }

    if (device.connection?.rtt > 100) {
      suggestions.push('High latency connection - optimize for slower networks');
    }

    return suggestions;
  }, []);

  // Apply mobile optimizations
  const applyOptimizations = useCallback(async () => {
    if (!deviceInfo) return;

    setIsOptimizing(true);
    
    try {
      const optimizations = generateOptimizations(deviceInfo);
      setOptimizations(optimizations);

      // Apply performance optimizations based on device type
      if (deviceInfo.type === 'mobile') {
        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.dataset.mobileSrc) {
            img.src = img.dataset.mobileSrc;
          }
        });

        // Enable touch-friendly interactions
        document.body.classList.add('mobile-optimized');
        
        // Optimize animations for mobile
        if (deviceInfo.connection?.effectiveType === 'slow-2g' || deviceInfo.connection?.effectiveType === '2g') {
          document.body.classList.add('low-bandwidth');
        }
      }

      // Apply performance mode settings
      switch (performanceMode) {
        case 'performance':
          document.body.classList.add('performance-mode');
          document.body.classList.remove('battery-saver');
          break;
        case 'battery':
          document.body.classList.add('battery-saver');
          document.body.classList.remove('performance-mode');
          break;
        default:
          document.body.classList.remove('performance-mode', 'battery-saver');
      }

      setLastUpdate(new Date());
    } catch (error) {
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [deviceInfo, generateOptimizations, performanceMode]);

  // Touch gesture handling
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!touchGestures.enabled) return;

    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, [touchGestures.enabled]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current || !touchGestures.enabled) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Detect gestures
    if (distance > 50 && deltaTime < 300) {
      let gestureType = '';
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          gestureType = 'swipe-right';
        } else {
          gestureType = 'swipe-left';
        }
      } else {
        if (deltaY > 0) {
          gestureType = 'swipe-down';
        } else {
          gestureType = 'swipe-up';
        }
      }

      // Record gesture
      gestureHistoryRef.current.push({
        type: gestureType,
        timestamp: Date.now()
      });

      // Keep only last 10 gestures
      if (gestureHistoryRef.current.length > 10) {
        gestureHistoryRef.current.shift();
      }

      // Handle gesture actions
      handleGesture(gestureType);
    }

    touchStartRef.current = null;
  }, [touchGestures.enabled]);

  // Handle detected gestures
  const handleGesture = useCallback((gestureType: string) => {
    switch (gestureType) {
      case 'swipe-left':
        // Navigate forward
        if (window.history.length > 1) {
          window.history.forward();
        }
        break;
      case 'swipe-right':
        // Navigate back
        if (window.history.length > 1) {
          window.history.back();
        }
        break;
      case 'swipe-up':
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'swipe-down':
        // Refresh page
        window.location.reload();
        break;
    }

    // Haptic feedback
    if (touchGestures.hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }, [touchGestures.hapticFeedback]);

  // Initialize device detection and event listeners
  useEffect(() => {
    if (isVisible) {
      const device = detectDevice();
      if (device) {
        generateOptimizations(device);
      }

      // Add touch event listeners
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);

      // Add resize listener for orientation changes
      const handleResize = () => {
        const device = detectDevice();
        if (device) {
          generateOptimizations(device);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isVisible, detectDevice, generateOptimizations, handleTouchStart, handleTouchEnd]);

  // Auto-optimize when device info changes
  useEffect(() => {
    if (deviceInfo) {
      applyOptimizations();
    }
  }, [deviceInfo, applyOptimizations]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleTouchGestures = () => setTouchGestures(prev => ({ ...prev, enabled: !prev.enabled }));

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/25 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
            <h3 className="text-white font-semibold text-sm">Mobile Optimizer</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTouchGestures}
              className={`p-1.5 rounded-lg transition-colors ${
                touchGestures.enabled 
                  ? 'bg-purple-500/20 text-purple-400' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
              title={touchGestures.enabled ? 'Disable touch gestures' : 'Enable touch gestures'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onToggle?.(false)}
              className="p-1.5 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-64'}`}>
          <div className="p-4 space-y-4">
            {/* Device Information */}
            {deviceInfo && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  {deviceInfo.type === 'mobile' && <MobileIcon className="w-5 h-5 text-purple-400" />}
                  {deviceInfo.type === 'tablet' && <TabletIcon className="w-5 h-5 text-purple-400" />}
                  {deviceInfo.type === 'desktop' && <DesktopIcon className="w-5 h-5 text-purple-400" />}
                  <span className="text-white font-medium capitalize">{deviceInfo.type}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/60 mb-1">Resolution</div>
                    <div className="text-white font-medium">
                      {deviceInfo.width} × {deviceInfo.height}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/60 mb-1">Pixel Ratio</div>
                    <div className="text-white font-medium">{deviceInfo.pixelRatio}x</div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Orientation:</span>
                    <span className="text-white font-medium capitalize">{deviceInfo.orientation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Touch Support:</span>
                    <span className={`font-medium ${deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}`}>
                      {deviceInfo.touchSupport ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Connection Information */}
            {deviceInfo?.connection && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-blue-400" />
                  Connection
                </h4>
                <div className="bg-white/5 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Type:</span>
                    <span className="text-white font-medium">{deviceInfo.connection.effectiveType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Speed:</span>
                    <span className="text-white font-medium">{deviceInfo.connection.downlink} Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Latency:</span>
                    <span className="text-white font-medium">{deviceInfo.connection.rtt}ms</span>
                  </div>
                  {deviceInfo.connection.saveData && (
                    <div className="text-yellow-400 text-xs">Data saver enabled</div>
                  )}
                </div>
              </div>
            )}

            {/* Battery Information */}
            {deviceInfo?.battery && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Battery className="w-4 h-4 text-green-400" />
                  Battery
                </h4>
                <div className="bg-white/5 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Level:</span>
                    <span className={`font-medium ${
                      deviceInfo.battery.level > 0.5 ? 'text-green-400' : 
                      deviceInfo.battery.level > 0.2 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {Math.round(deviceInfo.battery.level * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Status:</span>
                    <span className={`font-medium ${deviceInfo.battery.charging ? 'text-green-400' : 'text-white'}`}>
                      {deviceInfo.battery.charging ? 'Charging' : 'Discharging'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Performance Mode Selection */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Performance Mode
              </h4>
              <div className="flex gap-2">
                {(['balanced', 'performance', 'battery'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPerformanceMode(mode)}
                    className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                      performanceMode === mode
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Optimization Suggestions */}
            {optimizations.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Optimizations Applied</h4>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {optimizations.map((optimization, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs">
                      <Zap className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 leading-relaxed">{optimization}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="text-center text-xs text-white/40">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-purple-500/20 bg-white/5">
          <button
            onClick={applyOptimizations}
            disabled={isOptimizing}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isOptimizing ? (
              <>
                <Settings className="w-4 h-4 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Apply Optimizations
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileOptimizer;