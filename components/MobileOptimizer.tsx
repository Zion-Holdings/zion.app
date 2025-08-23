import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Zap,
  Hand,
  MousePointer,
  Eye,
  Shield,
  Settings,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface MobileOptimizerProps {
  onOptimizationComplete?: (optimizations: string[]) => void;
  showOptimizer?: boolean;
}

interface OptimizationResult {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'optimizing' | 'completed' | 'failed';
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  estimatedTime: number;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  onOptimizationComplete,
  showOptimizer = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [currentOptimization, setCurrentOptimization] = useState<string>('');
  const [optimizations, setOptimizations] = useState<OptimizationResult[]>([]);
  const [progress, setProgress] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState<any>({});
  const [touchCapabilities, setTouchCapabilities] = useState<any>({});
  const [networkInfo, setNetworkInfo] = useState<any>({});
  const [batteryInfo, setBatteryInfo] = useState<any>({});
  const optimizationRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize device detection and capabilities
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Device detection
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet,
        userAgent,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
        orientation: window.screen.orientation?.type || 'unknown'
      });

      // Touch capabilities
      setTouchCapabilities({
        maxTouchPoints: navigator.maxTouchPoints || 0,
        touchSupport: 'ontouchstart' in window,
        pointerSupport: 'onpointerdown' in window,
        gestureSupport: 'ongesturestart' in window
      });

      // Network information
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setNetworkInfo({
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false
        });
      }

      // Battery information
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setBatteryInfo({
            level: battery.level,
            charging: battery.charging,
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime
          });
        });
      }
    }
  }, []);

  // Initialize optimizations list
  useEffect(() => {
    const initialOptimizations: OptimizationResult[] = [
      {
        id: 'touch-optimization',
        name: 'Touch Interaction Optimization',
        description: 'Optimizing touch targets and gesture recognition for mobile devices',
        status: 'pending',
        priority: 'high',
        impact: 'high',
        estimatedTime: 2000
      },
      {
        id: 'performance-tuning',
        name: 'Performance Tuning',
        description: 'Adjusting animations and transitions for mobile performance',
        status: 'pending',
        priority: 'high',
        impact: 'high',
        estimatedTime: 3000
      },
      {
        id: 'responsive-layout',
        name: 'Responsive Layout Optimization',
        description: 'Optimizing layout and spacing for mobile screens',
        status: 'pending',
        priority: 'medium',
        impact: 'medium',
        estimatedTime: 2500
      },
      {
        id: 'network-optimization',
        name: 'Network Optimization',
        description: 'Optimizing for mobile network conditions',
        status: 'pending',
        priority: 'medium',
        impact: 'medium',
        estimatedTime: 1500
      },
      {
        id: 'battery-optimization',
        name: 'Battery Life Optimization',
        description: 'Reducing power consumption for mobile devices',
        status: 'pending',
        priority: 'low',
        impact: 'low',
        estimatedTime: 1000
      }
    ];
    setOptimizations(initialOptimizations);
  }, []);

  // Start optimization process
  const startOptimization = useCallback(async () => {
    setIsOptimizing(true);
    setProgress(0);
    
    for (let i = 0; i < optimizations.length; i++) {
      const optimization = optimizations[i];
      setCurrentOptimization(optimization.name);
      
      // Update status to optimizing
      setOptimizations(prev => prev.map(opt => 
        opt.id === optimization.id 
          ? { ...opt, status: 'optimizing' }
          : opt
      ));

      // Simulate optimization process
      await new Promise(resolve => {
        const duration = optimization.estimatedTime;
        const startTime = Date.now();
        
        const updateProgress = () => {
          const elapsed = Date.now() - startTime;
          const progressPercent = Math.min((elapsed / duration) * 100, 100);
          
          setProgress(progressPercent);
          
          if (elapsed < duration) {
            optimizationRef.current = setTimeout(updateProgress, 50);
          } else {
            resolve(true);
          }
        };
        
        updateProgress();
      });

      // Update status to completed
      setOptimizations(prev => prev.map(opt => 
        opt.id === optimization.id 
          ? { ...opt, status: 'completed' }
          : opt
      ));

      // Update overall progress
      setProgress(((i + 1) / optimizations.length) * 100);
    }

    setIsOptimizing(false);
    setCurrentOptimization('');
    
    // Call completion callback
    if (onOptimizationComplete) {
      const completedOptimizations = optimizations
        .filter(opt => opt.status === 'completed')
        .map(opt => opt.name);
      onOptimizationComplete(completedOptimizations);
    }
  }, [optimizations, onOptimizationComplete]);

  // Get optimization status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'optimizing':
        return <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />;
      case 'failed':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <Settings className="w-5 h-5 text-gray-400" />;
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-500/20 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 border-yellow-500/30';
      case 'low':
        return 'bg-green-500/20 border-green-500/30';
      default:
        return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  // Show optimizer after delay
  useEffect(() => {
    if (showOptimizer) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [showOptimizer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (optimizationRef.current) {
        clearTimeout(optimizationRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 right-4 z-50 max-w-sm"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Mobile Optimizer</h3>
                <p className="text-xs text-gray-400">Performance & UX</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Device Information */}
          <div className="p-4 border-b border-gray-700/50">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Device Info</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                {deviceInfo.isMobile ? (
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                ) : deviceInfo.isTablet ? (
                  <Tablet className="w-4 h-4 text-blue-400" />
                ) : (
                  <Monitor className="w-4 h-4 text-purple-400" />
                )}
                <span className="text-gray-400">
                  {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Hand className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">
                  {touchCapabilities.maxTouchPoints || 0} touch points
                </span>
              </div>
              
              {networkInfo.effectiveType && (
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">
                    {networkInfo.effectiveType} network
                  </span>
                </div>
              )}
              
              {batteryInfo.level !== undefined && (
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-400">
                    {Math.round(batteryInfo.level * 100)}% battery
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Optimization Progress */}
          {isOptimizing && (
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                <span>Optimizing...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              
              <div className="w-full bg-gray-800/50 rounded-full h-2 border border-gray-700/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                />
              </div>
              
              {currentOptimization && (
                <p className="text-xs text-gray-400 mt-2 text-center">
                  {currentOptimization}
                </p>
              )}
            </div>
          )}

          {/* Optimizations List */}
          <div className="p-4 border-b border-gray-700/50">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Optimizations</h4>
            <div className="space-y-2">
              {optimizations.map((optimization) => (
                <div
                  key={optimization.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-gray-800/30"
                >
                  <div className="flex items-center gap-2">
                    {getStatusIcon(optimization.status)}
                    <div>
                      <div className="text-xs text-white font-medium">
                        {optimization.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {optimization.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${getPriorityColor(optimization.priority)}`}>
                      {optimization.priority}
                    </span>
                    <div className={`px-2 py-1 rounded text-xs border ${getImpactColor(optimization.impact)}`}>
                      {optimization.impact} impact
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-4">
            <button
              onClick={startOptimization}
              disabled={isOptimizing}
              className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOptimizing ? 'Optimizing...' : 'Start Optimization'}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileOptimizer;