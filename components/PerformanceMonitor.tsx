'use client';

import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Monitor memory usage
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100,
        }));
      };

      updateMemoryUsage();
      const memoryInterval = setInterval(updateMemoryUsage, 5000);
      return () => clearInterval(memoryInterval);
    }
  }, []);

  // Simulate CPU usage monitoring
  useEffect(() => {
    const updateCPUUsage = () => {
      setMetrics(prev => ({
        ...prev,
        cpuUsage: Math.random() * 100,
      }));
    };

    const cpuInterval = setInterval(updateCPUUsage, 3000);
    return () => clearInterval(cpuInterval);
  }, []);

  // Simulate network latency
  useEffect(() => {
    const updateNetworkLatency = () => {
      setMetrics(prev => ({
        ...prev,
        networkLatency: Math.random() * 200 + 50,
      }));
    };

    const networkInterval = setInterval(updateNetworkLatency, 4000);
    return () => clearInterval(networkInterval);
  }, []);

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-500';
    if (value <= threshold * 1.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Load Time</span>
              </div>
              <span className={`font-mono text-sm ${getPerformanceColor(metrics.loadTime, 1000)}`}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Memory</span>
              </div>
              <span className={`font-mono text-sm ${getPerformanceColor(metrics.memoryUsage, 50)}`}>
                {metrics.memoryUsage}MB
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">CPU</span>
              </div>
              <span className={`font-mono text-sm ${getPerformanceColor(metrics.cpuUsage, 70)}`}>
                {metrics.cpuUsage.toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Network</span>
              </div>
              <span className={`font-mono text-sm ${getPerformanceColor(metrics.networkLatency, 100)}`}>
                {metrics.networkLatency.toFixed(0)}ms
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;