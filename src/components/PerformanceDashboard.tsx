import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Activity, Zap, Clock, HardDrive, TrendingUp, AlertTriangle, Wifi, WifiOff, RefreshCw, Trash2 } from 'lucide-react';
import { usePerformance } from '../hooks/usePerformance';
import { useServiceWorker } from '../hooks/useServiceWorker';

interface PerformanceDashboardProps {
  className?: string;
  autoRefresh?: boolean;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  className = '',
  autoRefresh = true
}) => {
  const { metrics, isMonitoring, startMonitoring, stopMonitoring, getPerformanceScore } = usePerformance();
  const { 
    isSupported: swSupported, 
    isInstalled: swInstalled, 
    isUpdated: swUpdated, 
    isOnline, 
    getVersion, 
    getCacheInfo, 
    clearAllCaches,
    skipWaiting
  } = useServiceWorker();
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);
  const [swVersion, setSwVersion] = useState<string | null>(null);
  const [cacheInfo, setCacheInfo] = useState<any[] | null>(null);

  useEffect(() => {
    if (autoRefresh && isMonitoring) {
      const interval = setInterval(() => {
        setRefreshInterval(interval);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [autoRefresh, isMonitoring]);

  useEffect(() => {
    // Start monitoring when component mounts
    startMonitoring();
    
    return () => {
      stopMonitoring();
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, []);

  // Get service worker version
  useEffect(() => {
    if (swInstalled) {
      getVersion().then(setSwVersion);
    }
  }, [swInstalled, getVersion]);

  // Get cache information
  useEffect(() => {
    if (swInstalled) {
      getCacheInfo().then(setCacheInfo);
    }
  }, [swInstalled, getCacheInfo]);

  const performanceScore = getPerformanceScore();
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <TrendingUp className="w-4 h-4" />;
    if (score >= 60) return <Activity className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  const formatMetric = (value: number, unit: string) => {
    if (value === 0) return 'N/A';
    return `${value.toFixed(1)} ${unit}`;
  };

  const handleClearCaches = async () => {
    const success = await clearAllCaches();
    if (success) {
      setCacheInfo([]);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Performance Monitor
          </h3>
          <div className="flex items-center gap-2">
            {/* Online Status */}
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isOnline ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
            }`}>
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              {isOnline ? 'Online' : 'Offline'}
            </div>
            
            {/* Service Worker Status */}
            {swSupported && (
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                swInstalled ? 'bg-green-500/20 text-green-100' : 'bg-yellow-500/20 text-yellow-100'
              }`}>
                <div className={`w-2 h-2 rounded-full ${swInstalled ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                {swInstalled ? 'SW Active' : 'SW Inactive'}
              </div>
            )}
            
            <div className={`flex items-center gap-1 px-2 py-1 text-xs font-medium ${
              isMonitoring ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
              {isMonitoring ? 'Active' : 'Inactive'}
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label={isExpanded ? 'Collapse dashboard' : 'Expand dashboard'}
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>
      </div>

      {/* Performance Score */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Score</span>
          <div className={`flex items-center gap-1 ${getScoreColor(performanceScore)}`}>
            {getScoreIcon(performanceScore)}
            <span className="font-bold">{performanceScore}/100</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 80 ? 'bg-green-500' : performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Load Time */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatMetric(metrics.loadTime, 'ms')}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Load Time</div>
          </div>

          {/* FPS */}
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {metrics.fps || 'N/A'}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">FPS</div>
          </div>
        </div>

        {/* Memory Usage */}
        {metrics.memoryUsage && (
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <HardDrive className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatMetric(metrics.memoryUsage, 'MB')}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Memory Usage</div>
          </div>
        )}

        {/* Interactions */}
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Activity className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {metrics.interactions}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">User Interactions</div>
        </div>
      </div>

      {/* Detailed Metrics */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Detailed Metrics</h4>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Render Time:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {formatMetric(metrics.renderTime, 'ms')}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Monitoring Status:</span>
              <span className={`font-medium ${isMonitoring ? 'text-green-600' : 'text-red-600'}`}>
                {isMonitoring ? 'Active' : 'Inactive'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Auto Refresh:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {autoRefresh ? 'Enabled' : 'Disabled'}
              </span>
            </div>

            {/* Service Worker Info */}
            {swSupported && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Service Worker:</span>
                  <span className={`font-medium ${swInstalled ? 'text-green-600' : 'text-yellow-600'}`}>
                    {swInstalled ? 'Active' : 'Inactive'}
                  </span>
                </div>
                
                {swVersion && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">SW Version:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{swVersion}</span>
                  </div>
                )}
                
                {swUpdated && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Update Available:</span>
                    <span className="font-medium text-yellow-600">Yes</span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Cache Information */}
          {cacheInfo && cacheInfo.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Cache Status</h5>
              <div className="space-y-2 text-xs text-blue-700 dark:text-blue-300">
                {cacheInfo.map((cache, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{cache.name}:</span>
                    <span>{cache.size} items</span>
                  </div>
                ))}
                <button
                  onClick={handleClearCaches}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear All Caches
                </button>
              </div>
            </div>
          )}

          {/* Performance Tips */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Performance Tips</h5>
            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
              {performanceScore < 80 && (
                <>
                  {metrics.loadTime > 1000 && (
                    <li>• Consider optimizing initial bundle size</li>
                  )}
                  {metrics.renderTime > 16 && (
                    <li>• Optimize component rendering with React.memo</li>
                  )}
                  {metrics.fps < 50 && (
                    <li>• Reduce animation complexity or use CSS transforms</li>
                  )}
                  {metrics.memoryUsage && metrics.memoryUsage > 50 && (
                    <li>• Check for memory leaks in event listeners</li>
                  )}
                </>
              )}
              {performanceScore >= 80 && (
                <li>• Great performance! Keep up the good work</li>
              )}
              {!isOnline && (
                <li>• You're offline. Some features may be limited</li>
              )}
              {swUpdated && (
                <li>• Service Worker update available. Refresh to apply</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex gap-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isMonitoring
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          </button>
          
          {swSupported && swUpdated && (
            <button
              onClick={skipWaiting}
              className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};