import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChartColumn, Zap, Clock, HardDrive, 
  Wifi, Cpu, Database, Activity,
  TrendingUp, TrendingDown, AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  fps: number;
  domSize: number;
  resourceCount: number;
  timestamp: number;
}

interface PerformanceMonitorProps {
  showUI?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showUI = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    fps: 0,
    domSize: 0,
    resourceCount: 0,
    timestamp: Date.now()
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance monitoring functions
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        return navigation.loadEventEnd - navigation.loadEventStart;
      }
    }
    return 0;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && (performance as any).memory) {
      const memory = (performance as any).memory;
      return Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
    }
    return 0;
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      return Math.round(end - start);
    } catch {
      return 0;
    }
  }, []);



  const measureDOMSize = useCallback(() => {
    if (typeof document !== 'undefined') {
      return document.getElementsByTagName('*').length;
    }
    return 0;
  }, []);

  const measureResourceCount = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance) {
      return performance.getEntriesByType('resource').length;
    }
    return 0;
  }, []);

  const updateMetrics = useCallback(async () => {
    const newMetrics: PerformanceMetrics = {
      loadTime: measureLoadTime(),
      memoryUsage: measureMemoryUsage(),
      cpuUsage: Math.random() * 30 + 10, // Simulated CPU usage
      networkLatency: await measureNetworkLatency(),
      fps: 60, // Simulated FPS
      domSize: measureDOMSize(),
      resourceCount: measureResourceCount(),
      timestamp: Date.now()
    };

    setMetrics(newMetrics);

    // Check for performance alerts
    const newAlerts: string[] = [];
    if (newMetrics.loadTime > 3000) {
      newAlerts.push('Page load time is slow (>3s)');
    }
    if (newMetrics.memoryUsage > 80) {
      newAlerts.push('High memory usage detected');
    }
    if (newMetrics.networkLatency > 500) {
      newAlerts.push('Network latency is high');
    }

    setAlerts(newAlerts);
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, measureDOMSize, measureResourceCount]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(updateMetrics, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, updateMetrics]);

  useEffect(() => {
    // Initial measurement
    updateMetrics();
    setIsMonitoring(true);
  }, [updateMetrics]);

  const getPerformanceColor = (value: number, threshold: number, reverse = false) => {
    const percentage = reverse ? (threshold - value) / threshold : value / threshold;
    if (percentage > 0.8) return 'text-green-400';
    if (percentage > 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceIcon = (value: number, threshold: number, reverse = false) => {
    const percentage = reverse ? (threshold - value) / threshold : value / threshold;
    if (percentage > 0.8) return <TrendingUp className="w-4 h-4" />;
    if (percentage > 0.6) return <Activity className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  if (!showUI) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Performance Monitor"
        aria-expanded={isOpen}
      >
        <ChartColumn className="w-6 h-6" />
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <ChartColumn className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 space-y-4">
              {/* Load Time */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-300">Load Time</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.loadTime}ms
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.loadTime, 3000, true)}`}>
                  {getPerformanceIcon(metrics.loadTime, 3000, true)}
                </div>
              </div>

              {/* Memory Usage */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-300">Memory</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.memoryUsage}%
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.memoryUsage, 80)}`}>
                  {getPerformanceIcon(metrics.memoryUsage, 80)}
                </div>
              </div>

              {/* Network Latency */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-300">Network</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.networkLatency}ms
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.networkLatency, 500, true)}`}>
                  {getPerformanceIcon(metrics.networkLatency, 500, true)}
                </div>
              </div>

              {/* FPS */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="text-sm text-gray-300">FPS</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.fps}
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.fps, 30)}`}>
                  {getPerformanceIcon(metrics.fps, 30)}
                </div>
              </div>

              {/* DOM Size */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-300">DOM Elements</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.domSize.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.domSize, 1000, true)}`}>
                  {getPerformanceIcon(metrics.domSize, 1000, true)}
                </div>
              </div>

              {/* Resource Count */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="text-sm text-gray-300">Resources</div>
                    <div className="text-lg font-semibold text-white">
                      {metrics.resourceCount}
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${getPerformanceColor(metrics.resourceCount, 50, true)}`}>
                  {getPerformanceIcon(metrics.resourceCount, 50, true)}
                </div>
              </div>
            </div>

            {/* Alerts Section */}
            {alerts.length > 0 && (
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-sm font-semibold text-white">Performance Alerts</h4>
                </div>
                <div className="space-y-2">
                  {alerts.map((alert, index) => (
                    <div key={index} className="text-xs text-yellow-300 bg-yellow-400/10 p-2 rounded-lg">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;