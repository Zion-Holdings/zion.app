import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, TrendingDown, CheckCircle, AlertCircle, XCircle, Settings, RefreshCw, Target, Lightbulb, ArrowRight } from 'lucide-react';

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'seo' | 'accessibility' | 'security';
  status: 'pending' | 'applied' | 'failed';
  estimatedImprovement: string;
  action: string;
}

const PerformanceOptimizer: React.FC = () => {
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([
    {
      id: '1',
      title: 'Enable Image Optimization',
      description: 'Implement next/image for automatic image optimization and lazy loading',
      impact: 'high',
      category: 'performance',
      status: 'pending',
      estimatedImprovement: '+15% LCP',
      action: 'Apply Optimization'
    },
    {
      id: '2',
      title: 'Implement Code Splitting',
      description: 'Use dynamic imports to split code into smaller chunks',
      impact: 'high',
      category: 'performance',
      status: 'pending',
      estimatedImprovement: '+20% Bundle Size',
      action: 'Apply Optimization'
    },
    {
      id: '3',
      title: 'Add Service Worker',
      description: 'Implement service worker for offline functionality and caching',
      impact: 'medium',
      category: 'performance',
      status: 'pending',
      estimatedImprovement: '+25% Offline Support',
      action: 'Apply Optimization'
    },
    {
      id: '4',
      title: 'Optimize Font Loading',
      description: 'Use font-display: swap and preload critical fonts',
      impact: 'medium',
      category: 'performance',
      status: 'pending',
      estimatedImprovement: '+10% FID',
      action: 'Apply Optimization'
    },
    {
      id: '5',
      title: 'Add Meta Tags',
      description: 'Implement comprehensive meta tags for better SEO',
      impact: 'medium',
      category: 'seo',
      status: 'pending',
      estimatedImprovement: '+30% SEO Score',
      action: 'Apply Optimization'
    },
    {
      id: '6',
      title: 'Enable Compression',
      description: 'Implement gzip/brotli compression for static assets',
      impact: 'high',
      category: 'performance',
      status: 'pending',
      estimatedImprovement: '+40% Load Time',
      action: 'Apply Optimization'
    }
  ]);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentMetrics, setCurrentMetrics] = useState({
    lcp: 2.1,
    fid: 85,
    cls: 0.12,
    ttfb: 320,
    seo: 78,
    accessibility: 85,
    performance: 72
  });

  const [optimizedMetrics, setOptimizedMetrics] = useState({
    lcp: 2.1,
    fid: 85,
    cls: 0.12,
    ttfb: 320,
    seo: 78,
    accessibility: 85,
    performance: 72
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'medium':
        return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      default:
        return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance':
        return <Zap className="w-4 h-4" />;
      case 'seo':
        return <Target className="w-4 h-4" />;
      case 'accessibility':
        return <CheckCircle className="w-4 h-4" />;
      case 'security':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    }
  };

  const applyOptimization = useCallback((id: string) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === id 
          ? { ...suggestion, status: 'applied' as const }
          : suggestion
      )
    );

    // Simulate metric improvement
    setTimeout(() => {
      setOptimizedMetrics(prev => ({
        ...prev,
        lcp: Math.max(prev.lcp - 0.3, 0.5),
        fid: Math.max(prev.fid - 15, 20),
        cls: Math.max(prev.cls - 0.02, 0.01),
        ttfb: Math.max(prev.ttfb - 50, 100),
        seo: Math.min(prev.seo + 5, 100),
        accessibility: Math.min(prev.accessibility + 3, 100),
        performance: Math.min(prev.performance + 8, 100)
      }));
    }, 1000);
  }, []);

  const runAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Simulate finding new suggestions
      const newSuggestion: OptimizationSuggestion = {
        id: Date.now().toString(),
        title: 'Enable HTTP/2 Push',
        description: 'Implement HTTP/2 server push for critical resources',
        impact: 'medium',
        category: 'performance',
        status: 'pending',
        estimatedImprovement: '+12% Load Time',
        action: 'Apply Optimization'
      };
      setSuggestions(prev => [...prev, newSuggestion]);
    }, 2000);
  }, []);

  const getMetricColor = (value: number, threshold: number, reverse: boolean = false) => {
    const isGood = reverse ? value <= threshold : value >= threshold;
    return isGood ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Performance Optimizer</h3>
            <p className="text-sm text-gray-400">Real-time optimization suggestions</p>
          </div>
        </div>
        
        <button
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Run Analysis</span>
            </>
          )}
        </button>
      </div>

      {/* Current vs Optimized Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Metrics */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Current Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={getMetricColor(currentMetrics.lcp, 2.5, true)}>
                {currentMetrics.lcp}s
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">FID:</span>
              <span className={getMetricColor(currentMetrics.fid, 100, true)}>
                {currentMetrics.fid}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={getMetricColor(currentMetrics.cls, 0.1, true)}>
                {currentMetrics.cls}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className={getMetricColor(currentMetrics.ttfb, 600, true)}>
                {currentMetrics.ttfb}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">SEO Score:</span>
              <span className={getMetricColor(currentMetrics.seo, 80)}>
                {currentMetrics.seo}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Performance:</span>
              <span className={getMetricColor(currentMetrics.performance, 80)}>
                {currentMetrics.performance}%
              </span>
            </div>
          </div>
        </div>

        {/* Optimized Metrics */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Optimized Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={getMetricColor(optimizedMetrics.lcp, 2.5, true)}>
                {optimizedMetrics.lcp.toFixed(1)}s
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">FID:</span>
              <span className={getMetricColor(optimizedMetrics.fid, 100, true)}>
                {optimizedMetrics.fid}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={getMetricColor(optimizedMetrics.cls, 0.1, true)}>
                {optimizedMetrics.cls.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className={getMetricColor(optimizedMetrics.ttfb, 600, true)}>
                {optimizedMetrics.ttfb}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">SEO Score:</span>
              <span className={getMetricColor(optimizedMetrics.seo, 80)}>
                {optimizedMetrics.seo}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Performance:</span>
              <span className={getMetricColor(optimizedMetrics.performance, 80)}>
                {optimizedMetrics.performance}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-white">Optimization Suggestions</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Lightbulb className="w-4 h-4" />
            <span>{suggestions.filter(s => s.status === 'pending').length} pending</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestions.map((suggestion) => (
            <motion.div
              key={suggestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Status Icon */}
              <div className="absolute top-4 right-4">
                {getStatusIcon(suggestion.status)}
              </div>

              {/* Header */}
              <div className="flex items-start space-x-3 mb-3 pr-12">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {getCategoryIcon(suggestion.category)}
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">{suggestion.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {suggestion.description}
                  </p>
                </div>
              </div>

              {/* Impact and Improvement */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full border ${getImpactColor(suggestion.impact)}`}>
                  {suggestion.impact} impact
                </span>
                <span className="text-cyan-400 text-sm font-medium">
                  {suggestion.estimatedImprovement}
                </span>
              </div>

              {/* Action Button */}
              {suggestion.status === 'pending' && (
                <button
                  onClick={() => applyOptimization(suggestion.id)}
                  className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{suggestion.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {suggestion.status === 'applied' && (
                <div className="text-center text-green-400 text-sm font-medium py-2">
                  ✓ Optimization Applied
                </div>
              )}

              {suggestion.status === 'failed' && (
                <div className="text-center text-red-400 text-sm font-medium py-2">
                  ✗ Optimization Failed
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 text-left">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <h5 className="text-white font-medium mb-1">Run Lighthouse</h5>
            <p className="text-gray-400 text-sm">Generate comprehensive performance report</p>
          </button>

          <button className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 text-left">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
              <RefreshCw className="w-4 h-4 text-white" />
            </div>
            <h5 className="text-white font-medium mb-1">Clear Cache</h5>
            <p className="text-gray-400 text-sm">Remove cached resources and data</p>
          </button>

          <button className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 text-left">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h5 className="text-white font-medium mb-1">Auto-Optimize</h5>
            <p className="text-gray-400 text-sm">Apply all safe optimizations automatically</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;