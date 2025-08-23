import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Database, Image, Code, Wifi, TrendingUp, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  imageSize: number;
  jsSize: number;
  cssSize: number;
  requests: number;
  loadTime: number;
  score: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'images' | 'code' | 'caching' | 'network';
  icon: React.ComponentType<any>;
  action: string;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  // Analyze current performance
  const analyzePerformance = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      // Get performance timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;

      // Analyze resources
      const resources = performance.getEntriesByType('resource');
      let imageSize = 0;
      let jsSize = 0;
      let cssSize = 0;

      resources.forEach((resource: any) => {
        const size = resource.transferSize || 0;
        if (resource.name.includes('.jpg') || resource.name.includes('.png') || resource.name.includes('.webp')) {
          imageSize += size;
        } else if (resource.name.includes('.js')) {
          jsSize += size;
        } else if (resource.name.includes('.css')) {
          cssSize += size;
        }
      });

      const newMetrics: PerformanceMetrics = {
        imageSize,
        jsSize,
        cssSize,
        requests: resources.length,
        loadTime,
        score: calculateScore({ imageSize, jsSize, cssSize, requests: resources.length, loadTime, score: 0 })
      };

      setMetrics(newMetrics);
      generateSuggestions(newMetrics);
    } catch (error) {
      console.error('Performance analysis failed:', error);
    }
  }, []);

  // Calculate performance score
  const calculateScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // Image size penalty
    if (metrics.imageSize > 1000000) score -= 20;
    else if (metrics.imageSize > 500000) score -= 10;

    // JavaScript size penalty
    if (metrics.jsSize > 500000) score -= 20;
    else if (metrics.jsSize > 250000) score -= 10;

    // Request count penalty
    if (metrics.requests > 50) score -= 15;
    else if (metrics.requests > 30) score -= 8;

    // Load time penalty
    if (metrics.loadTime > 3000) score -= 25;
    else if (metrics.loadTime > 2000) score -= 15;

    return Math.max(0, score);
  };

  // Generate optimization suggestions
  const generateSuggestions = (metrics: PerformanceMetrics) => {
    const newSuggestions: OptimizationSuggestion[] = [];

    // Image optimization suggestions
    if (metrics.imageSize > 500000) {
      newSuggestions.push({
        id: 'image-optimization',
        title: 'Image Optimization',
        description: 'Convert images to WebP format and implement lazy loading',
        impact: 'high',
        category: 'images',
        icon: Image,
        action: 'Implement WebP conversion and lazy loading'
      });
    }

    // Code splitting suggestions
    if (metrics.jsSize > 300000) {
      newSuggestions.push({
        id: 'code-splitting',
        title: 'Code Splitting',
        description: 'Implement dynamic imports and route-based code splitting',
        impact: 'high',
        category: 'code',
        icon: Code,
        action: 'Add dynamic imports for routes and components'
      });
    }

    // Caching suggestions
    if (metrics.requests > 40) {
      newSuggestions.push({
        id: 'caching-strategy',
        title: 'Caching Strategy',
        description: 'Implement service worker and aggressive caching',
        impact: 'medium',
        category: 'caching',
        icon: Database,
        action: 'Add service worker with caching strategies'
      });
    }

    // Network optimization
    if (metrics.loadTime > 2500) {
      newSuggestions.push({
        id: 'network-optimization',
        title: 'Network Optimization',
        description: 'Use CDN and implement HTTP/2 server push',
        impact: 'medium',
        category: 'network',
        icon: Wifi,
        action: 'Configure CDN and enable HTTP/2 push'
      });
    }

    setSuggestions(newSuggestions);
  };

  // Apply optimizations
  const applyOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);

    // Simulate optimization process
    for (let i = 0; i <= 100; i += 10) {
      setOptimizationProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Re-analyze performance
    await analyzePerformance();
    setIsOptimizing(false);
  }, [analyzePerformance]);

  useEffect(() => {
    analyzePerformance();
  }, [analyzePerformance]);

  if (!metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Performance Optimizer</h3>
          <p className="text-sm text-gray-400">AI-powered performance analysis and optimization</p>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-300">Performance Score</span>
          <span className={`text-lg font-bold ${
            metrics.score >= 90 ? 'text-green-400' : 
            metrics.score >= 70 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <motion.div
            className={`h-3 rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' : 
              metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${metrics.score}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/50 p-3 rounded-lg text-center">
          <Image className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-sm text-gray-400">Images</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.imageSize / 1024 / 1024).toFixed(1)}MB
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-3 rounded-lg text-center">
          <Code className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-sm text-gray-400">JavaScript</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.jsSize / 1024 / 1024).toFixed(1)}MB
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-3 rounded-lg text-center">
          <Database className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-sm text-gray-400">CSS</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.cssSize / 1024).toFixed(0)}KB
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-3 rounded-lg text-center">
          <Wifi className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-sm text-gray-400">Requests</div>
          <div className="text-lg font-semibold text-white">
            {metrics.requests}
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      {suggestions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-4">Optimization Suggestions</h4>
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    suggestion.impact === 'high' ? 'bg-red-500/20' :
                    suggestion.impact === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                  }`}>
                    <suggestion.icon className={`w-5 h-5 ${
                      suggestion.impact === 'high' ? 'text-red-400' :
                      suggestion.impact === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-semibold text-white">{suggestion.title}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggestion.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        suggestion.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {suggestion.impact} impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{suggestion.description}</p>
                    <div className="text-xs text-cyan-400 font-mono">{suggestion.action}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Optimization Button */}
      <div className="text-center">
        <button
          onClick={applyOptimizations}
          disabled={isOptimizing}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOptimizing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Optimizing... {optimizationProgress}%
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Apply Optimizations
            </div>
          )}
        </button>
      </div>

      {/* Performance Tips */}
      <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">Pro Tips</span>
        </div>
        <ul className="text-xs text-gray-300 space-y-1">
          <li>• Use Next.js Image component for automatic optimization</li>
          <li>• Implement dynamic imports for route-based code splitting</li>
          <li>• Enable gzip compression on your server</li>
          <li>• Use a CDN for static assets</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default PerformanceOptimizer;