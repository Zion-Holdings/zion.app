import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  loadTime: number;
  responseTime: number;
  errors: number;
  uptime: number;
}

export function PerformanceDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    loadTime: 0,
    responseTime: 0,
    errors: 0,
    uptime: 0
  });
  const [startTime] = useState(Date.now());

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let errorCount = 0;

    // FPS monitoring
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Memory monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMemory = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setMetrics(prev => ({ ...prev, memory: usedMemory }));
      }
    };

    // Load time monitoring
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    };

    // Response time monitoring
    const measureResponseTime = () => {
      const start = performance.now();
      fetch('/api/health')
        .then(() => {
          const responseTime = performance.now() - start;
          setMetrics(prev => ({ ...prev, responseTime: Math.round(responseTime) }));
        })
        .catch(() => {
          errorCount++;
          setMetrics(prev => ({ ...prev, errors: errorCount }));
        });
    };

    // Uptime monitoring
    const measureUptime = () => {
      const uptime = Math.round((Date.now() - startTime) / 1000);
      setMetrics(prev => ({ ...prev, uptime }));
    };

    // Error monitoring
    const handleError = () => {
      errorCount++;
      setMetrics(prev => ({ ...prev, errors: errorCount }));
    };

    // Start monitoring
    measureFPS();
    measureMemory();
    measureLoadTime();
    
    const memoryInterval = setInterval(measureMemory, 2000);
    const responseInterval = setInterval(measureResponseTime, 5000);
    const uptimeInterval = setInterval(measureUptime, 1000);
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      clearInterval(memoryInterval);
      clearInterval(responseInterval);
      clearInterval(uptimeInterval);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, [startTime]);

  const getStatusColor = (metric: keyof PerformanceMetrics, value: number) => {
    switch (metric) {
      case 'fps':
        return value >= 50 ? 'text-green-400' : value >= 30 ? 'text-yellow-400' : 'text-red-400';
      case 'memory':
        return value < 100 ? 'text-green-400' : value < 200 ? 'text-yellow-400' : 'text-red-400';
      case 'loadTime':
        return value < 1000 ? 'text-green-400' : value < 3000 ? 'text-yellow-400' : 'text-red-400';
      case 'responseTime':
        return value < 100 ? 'text-green-400' : value < 500 ? 'text-yellow-400' : 'text-red-400';
      case 'errors':
        return value === 0 ? 'text-green-400' : value < 5 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (metric: keyof PerformanceMetrics, value: number) => {
    switch (metric) {
      case 'fps':
        return value >= 50 ? '🟢' : value >= 30 ? '🟡' : '🔴';
      case 'memory':
        return value < 100 ? '🟢' : value < 200 ? '🟡' : '🔴';
      case 'loadTime':
        return value < 1000 ? '🟢' : value < 3000 ? '🟡' : '🔴';
      case 'responseTime':
        return value < 100 ? '🟢' : value < 500 ? '🟡' : '🔴';
      case 'errors':
        return value === 0 ? '🟢' : value < 5 ? '🟡' : '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400">📊</span>
          <span className="hidden sm:inline">Performance</span>
        </div>
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -400, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-20 z-40 bg-gray-900/95 backdrop-blur-md text-white p-6 rounded-xl border border-gray-700 shadow-2xl shadow-black/50 min-w-[320px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-cyan-400">Performance Monitor</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* FPS */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>🎬</span>
                  <span>FPS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('fps', metrics.fps)}`}>
                    {metrics.fps}
                  </span>
                  <span>{getStatusIcon('fps', metrics.fps)}</span>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>💾</span>
                  <span>Memory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('memory', metrics.memory)}`}>
                    {metrics.memory}MB
                  </span>
                  <span>{getStatusIcon('memory', metrics.memory)}</span>
                </div>
              </div>

              {/* Load Time */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Load Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('loadTime', metrics.loadTime)}`}>
                    {metrics.loadTime}ms
                  </span>
                  <span>{getStatusIcon('loadTime', metrics.loadTime)}</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('responseTime', metrics.responseTime)}`}>
                    {metrics.responseTime}ms
                  </span>
                  <span>{getStatusIcon('responseTime', metrics.responseTime)}</span>
                </div>
              </div>

              {/* Errors */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>Errors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('errors', metrics.errors)}`}>
                    {metrics.errors}
                  </span>
                  <span>{getStatusIcon('errors', metrics.errors)}</span>
                </div>
              </div>

              {/* Uptime */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-cyan-400">
                    {Math.floor(metrics.uptime / 60)}m {metrics.uptime % 60}s
                  </span>
                  <span>🟢</span>
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <div className="text-center">
                <span className="text-sm text-gray-400">Overall Status: </span>
                <span className="text-cyan-400 font-semibold">
                  {metrics.errors === 0 && metrics.fps >= 50 ? 'Excellent' : 
                   metrics.errors < 3 && metrics.fps >= 30 ? 'Good' : 'Needs Attention'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}