import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, Wifi, Battery, 
  Hand, RotateCw, ZoomIn, ZoomOut, CheckCircle, AlertTriangle
} from 'lucide-react';

interface MobileOptimizerProps {
  showPanel?: boolean;
  autoOptimize?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  userAgent: string;
}

interface OptimizationResult {
  type: string;
  status: 'success' | 'warning' | 'error';
  message: string;
  applied: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ 
  showPanel = false, 
  autoOptimize = true 
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<OptimizationResult[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [currentOrientation, setCurrentOrientation] = useState<'portrait' | 'landscape'>('portrait');

  // Enhanced device detection
  const detectDevice = useCallback((): DeviceInfo => {
    if (typeof window === 'undefined') {
      return {
        type: 'desktop',
        orientation: 'portrait',
        screenSize: { width: 1920, height: 1080 },
        pixelRatio: 1,
        touchSupport: false,
        userAgent: ''
      };
    }

    const { innerWidth, innerHeight, devicePixelRatio } = window;
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Enhanced device type detection
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
      if (innerWidth <= 768) {
        type = 'mobile';
      } else if (innerWidth <= 1024) {
        type = 'tablet';
      }
    } else if (innerWidth <= 768) {
      type = 'mobile';
    } else if (innerWidth <= 1024) {
      type = 'tablet';
    }

    // Enhanced orientation detection
    const orientation: 'portrait' | 'landscape' = innerWidth > innerHeight ? 'landscape' : 'portrait';
    
    // Enhanced touch support detection
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
      type,
      orientation,
      screenSize: { width: innerWidth, height: innerHeight },
      pixelRatio: devicePixelRatio || 1,
      touchSupport,
      userAgent
    };
  }, []);

  // Enhanced optimization analysis
  const analyzeAndOptimize = useCallback((device: DeviceInfo) => {
    const newOptimizations: OptimizationResult[] = [];
    
    // Touch optimization
    if (device.touchSupport) {
      newOptimizations.push({
        type: 'touch',
        status: 'success',
        message: 'Touch gestures enabled and optimized',
        applied: true
      });
    } else {
      newOptimizations.push({
        type: 'touch',
        status: 'warning',
        message: 'Touch support not detected - consider adding touch gestures',
        applied: false
      });
    }

    // Screen size optimization
    if (device.type === 'mobile' && device.screenSize.width < 375) {
      newOptimizations.push({
        type: 'screen-size',
        status: 'warning',
        message: 'Small screen detected - optimizing layout for better mobile experience',
        applied: true
      });
    }

    // Pixel ratio optimization
    if (device.pixelRatio > 2) {
      newOptimizations.push({
        type: 'pixel-ratio',
        status: 'success',
        message: 'High DPI display detected - using optimized assets',
        applied: true
      });
    }

    // Orientation optimization
    if (device.orientation === 'landscape' && device.type === 'mobile') {
      newOptimizations.push({
        type: 'orientation',
        status: 'warning',
        message: 'Mobile landscape mode - adjusting layout for better usability',
        applied: true
      });
    }

    // Performance optimization for mobile
    if (device.type === 'mobile') {
      newOptimizations.push({
        type: 'performance',
        status: 'success',
        message: 'Mobile performance optimizations applied',
        applied: true
      });
    }

    setOptimizations(newOptimizations);
    
    // Apply optimizations automatically
    if (autoOptimize) {
      applyOptimizations(newOptimizations);
    }
  }, [autoOptimize]);

  // Enhanced optimization application
  const applyOptimizations = useCallback((optimizationList: OptimizationResult[]) => {
    setIsOptimizing(true);
    
    optimizationList.forEach(optimization => {
      if (optimization.applied) {
        switch (optimization.type) {
          case 'touch':
            optimizeTouchGestures();
            break;
          case 'screen-size':
            optimizeLayout();
            break;
          case 'pixel-ratio':
            optimizeAssets();
            break;
          case 'orientation':
            optimizeOrientation();
            break;
          case 'performance':
            optimizePerformance();
            break;
        }
      }
    });
    
    setTimeout(() => setIsOptimizing(false), 2000);
  }, []);

  // Touch gesture optimization
  const optimizeTouchGestures = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add touch gesture support
    const touchElements = document.querySelectorAll('[data-touch]');
    touchElements.forEach(element => {
      let startY = 0;
      let startX = 0;
      
      element.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startY = touch.clientY;
        startX = touch.clientX;
      });
      
      element.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const deltaY = startY - touch.clientY;
        const deltaX = startX - touch.clientX;
        
        // Swipe detection
        if (Math.abs(deltaY) > 50) {
          if (deltaY > 0) {
            // Swipe up
            element.dispatchEvent(new CustomEvent('swipeup'));
          } else {
            // Swipe down
            element.dispatchEvent(new CustomEvent('swipedown'));
          }
        }
        
        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            // Swipe left
            element.dispatchEvent(new CustomEvent('swipeleft'));
          } else {
            // Swipe right
            element.dispatchEvent(new CustomEvent('swiperight'));
          }
        }
      });
    });
  }, []);

  // Layout optimization
  const optimizeLayout = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Adjust font sizes for small screens
    const root = document.documentElement;
    const fontSize = Math.max(14, Math.min(16, window.innerWidth / 25));
    root.style.fontSize = `${fontSize}px`;
    
    // Optimize spacing
    const spacing = Math.max(8, Math.min(16, window.innerWidth / 50));
    root.style.setProperty('--mobile-spacing', `${spacing}px`);
    
    // Add mobile-specific CSS classes
    document.body.classList.add('mobile-optimized');
  }, []);

  // Asset optimization
  const optimizeAssets = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Optimize images for high DPI displays
    const images = document.querySelectorAll('img[data-srcset]');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      const srcset = imgElement.getAttribute('data-srcset');
      if (srcset) {
        imgElement.srcset = srcset;
        imgElement.sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
      }
    });
    
    // Optimize fonts for high DPI
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
    fonts.forEach(font => {
      font.setAttribute('crossorigin', 'anonymous');
    });
  }, []);

  // Orientation optimization
  const optimizeOrientation = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Adjust layout for landscape orientation
    if (window.innerWidth > window.innerHeight) {
      document.body.classList.add('landscape-mode');
      document.body.classList.remove('portrait-mode');
    } else {
      document.body.classList.add('portrait-mode');
      document.body.classList.remove('landscape-mode');
    }
  }, []);

  // Performance optimization
  const optimizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Reduce animations on mobile for better performance
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || deviceInfo?.type === 'mobile') {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }
    
    // Optimize scroll performance
    const scrollElements = document.querySelectorAll('.scroll-container');
    scrollElements.forEach(element => {
      const scrollElement = element as HTMLElement;
      (scrollElement.style as any).webkitOverflowScrolling = 'touch';
      scrollElement.style.overscrollBehavior = 'contain';
    });
  }, [deviceInfo]);

  // Manual optimization trigger
  const triggerOptimization = useCallback(() => {
    if (deviceInfo) {
      analyzeAndOptimize(deviceInfo);
    }
  }, [deviceInfo, analyzeAndOptimize]);

  // Handle orientation change
  const handleOrientationChange = useCallback(() => {
    const newDeviceInfo = detectDevice();
    setDeviceInfo(newDeviceInfo);
    setCurrentOrientation(newDeviceInfo.orientation);
    
    if (autoOptimize) {
      analyzeAndOptimize(newDeviceInfo);
    }
  }, [detectDevice, autoOptimize, analyzeAndOptimize]);

  // Handle resize
  const handleResize = useCallback(() => {
    const newDeviceInfo = detectDevice();
    setDeviceInfo(newDeviceInfo);
    
    if (autoOptimize) {
      analyzeAndOptimize(newDeviceInfo);
    }
  }, [detectDevice, autoOptimize, analyzeAndOptimize]);

  useEffect(() => {
    if (showPanel) {
      setIsVisible(true);
      const device = detectDevice();
      setDeviceInfo(device);
      setCurrentOrientation(device.orientation);
      
      if (autoOptimize) {
        analyzeAndOptimize(device);
      }
    }
  }, [showPanel, detectDevice, autoOptimize, analyzeAndOptimize]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set up event listeners
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    // Set up orientation change detection
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setCurrentOrientation(e.matches ? 'portrait' : 'landscape');
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleOrientationChange, handleResize]);

  if (!showPanel || !isVisible) return null;

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              Mobile Optimizer
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {deviceInfo && (
            <div className="space-y-4">
              {/* Device Info */}
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getDeviceIcon(deviceInfo.type)}
                    <span className="text-white font-medium capitalize">
                      {deviceInfo.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCw className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm capitalize">
                      {currentOrientation}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Screen:</span>
                    <div className="text-white">
                      {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">DPI:</span>
                    <div className="text-white">
                      {deviceInfo.pixelRatio}x
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Touch:</span>
                    <div className="text-white">
                      {deviceInfo.touchSupport ? 'Yes' : 'No'}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Agent:</span>
                    <div className="text-white text-xs truncate">
                      {deviceInfo.userAgent.substring(0, 20)}...
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Optimizations</h4>
                  {optimizations.map((optimization, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-gray-800/30 rounded-lg">
                      {getStatusIcon(optimization.status)}
                      <div className="flex-1">
                        <div className="text-sm text-white">{optimization.message}</div>
                        <div className="text-xs text-gray-400 capitalize">
                          {optimization.type} • {optimization.applied ? 'Applied' : 'Pending'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={triggerOptimization}
                  disabled={isOptimizing}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
                </button>
                <button
                  onClick={() => {
                    const device = detectDevice();
                    setDeviceInfo(device);
                    setCurrentOrientation(device.orientation);
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
          )}

          {!deviceInfo && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-3"></div>
              <p className="text-gray-400 text-sm">Detecting device...</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileOptimizer;