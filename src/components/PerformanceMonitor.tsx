import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  errorCount: number;
  successRate: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    errorCount: 0,
    successRate: 100
  });
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      const newMetrics = {
        loadTime: Math.random() * 2000 + 500,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 50,
        networkLatency: Math.random() * 100 + 20,
        errorCount: Math.floor(Math.random() * 5),
        successRate: 95 + Math.random() * 5
      };
      
      setMetrics(newMetrics);
      
      // Generate alerts for poor performance
      if (newMetrics.loadTime > 1500) {
        setAlerts(prev => [...prev.slice(-2), `Slow load time: ${Math.round(newMetrics.loadTime)}ms`]);
      }
      if (newMetrics.memoryUsage > 80) {
        setAlerts(prev => [...prev.slice(-2), `High memory usage: ${Math.round(newMetrics.memoryUsage)}%`]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPerformanceColor = (value: number, threshold: number, reverse = false) => {
    const percentage = reverse ? (100 - value) : value;
    if (percentage > 80) return 'text-green-500';
    if (percentage > 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceIcon = (value: number, threshold: number, reverse = false) => {
    const percentage = reverse ? (100 - value) : value;
    if (percentage > 80) return <CheckCircle className="w-4 h-4" />;
    if (percentage > 60) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 p-3 bg-zion-blue-dark hover:bg-zion-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-white dark:bg-zion-slate border border-zion-blue-light rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-zion-blue-light">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zion-blue-dark dark:text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-cyan" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-slate-light hover:text-zion-slate transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Load Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zion-cyan" />
            <span className="text-sm text-zion-slate">Load Time</span>
          </div>
          <div className="flex items-center gap-2">
            {getPerformanceIcon(metrics.loadTime, 1500, true)}
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.loadTime, 1500, true)}`}>
              {Math.round(metrics.loadTime)}ms
            </span>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-zion-purple" />
            <span className="text-sm text-zion-slate">Memory</span>
          </div>
          <div className="flex items-center gap-2">
            {getPerformanceIcon(metrics.memoryUsage, 80)}
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.memoryUsage, 80)}`}>
              {Math.round(metrics.memoryUsage)}%
            </span>
          </div>
        </div>

        {/* CPU Usage */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-zion-emerald" />
            <span className="text-sm text-zion-slate">CPU</span>
          </div>
          <div className="flex items-center gap-2">
            {getPerformanceIcon(metrics.cpuUsage, 50)}
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.cpuUsage, 50)}`}>
              {Math.round(metrics.cpuUsage)}%
            </span>
          </div>
        </div>

        {/* Network Latency */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-zion-gold" />
            <span className="text-sm text-zion-slate">Network</span>
          </div>
          <div className="flex items-center gap-2">
            {getPerformanceIcon(metrics.networkLatency, 80, true)}
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.networkLatency, 80, true)}`}>
              {Math.round(metrics.networkLatency)}ms
            </span>
          </div>
        </div>

        {/* Success Rate */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-zion-emerald" />
            <span className="text-sm text-zion-slate">Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            {getPerformanceIcon(metrics.successRate, 95)}
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.successRate, 95)}`}>
              {Math.round(metrics.successRate)}%
            </span>
          </div>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">Recent Alerts</h4>
            <div className="space-y-1">
              {alerts.map((alert, index) => (
                <div key={index} className="text-xs text-red-700 dark:text-red-300">
                  • {alert}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}