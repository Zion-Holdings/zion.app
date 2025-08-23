import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  Gauge,
  HardDrive,
  Network,
  Monitor
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  overallScore: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  action: string;
}

const PerformanceOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    overallScore: '0',
    grade: 'A'
  });
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const calculateGrade = useCallback((score: number): 'A' | 'B' | 'C' | 'D' | 'F' => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  const generateOptimizationSuggestions = useCallback((currentMetrics: PerformanceMetrics): OptimizationSuggestion[] => {
    const suggestions: OptimizationSuggestion[] = [];

    if (currentMetrics.fcp > 2000) {
      suggestions.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is taking too long, affecting perceived performance',
        priority: 'high',
        impact: 'High impact on user experience',
        action: 'Optimize critical rendering path, reduce blocking resources'
      });
    }

    if (currentMetrics.lcp > 2500) {
      suggestions.push({
        id: 'lcp-optimization',
        title: 'Largest Contentful Paint Optimization',
        description: 'LCP is slow, indicating slow loading of main content',
        priority: 'high',
        impact: 'High impact on Core Web Vitals',
        action: 'Optimize images, implement lazy loading, use CDN'
      });
    }

    if (currentMetrics.cls > 0.1) {
      suggestions.push({
        id: 'cls-optimization',
        title: 'Cumulative Layout Shift Reduction',
        description: 'Layout shifts are causing poor user experience',
        priority: 'medium',
        impact: 'Medium impact on user experience',
        action: 'Set explicit dimensions for images and media elements'
      });
    }

    if (currentMetrics.ttfb > 600) {
      suggestions.push({
        id: 'ttfb-optimization',
        title: 'Time to First Byte Optimization',
        description: 'Server response time is slow',
        priority: 'medium',
        impact: 'Medium impact on performance',
        action: 'Optimize server response, implement caching, use CDN'
      });
    }

    return suggestions;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Simulate performance measurement (in real app, use Web Vitals API)
      const mockMetrics = {
        fcp: Math.random() * 3000 + 500,
        lcp: Math.random() * 4000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.3,
        ttfb: Math.random() * 800 + 200
      };

      const overallScore = Math.max(0, Math.min(100, 
        100 - (mockMetrics.fcp / 30) - (mockMetrics.lcp / 40) - (mockMetrics.cls * 100) - (mockMetrics.ttfb / 10)
      ));

      const newMetrics: PerformanceMetrics = {
        ...mockMetrics,
        overallScore: overallScore.toFixed(1),
        grade: calculateGrade(overallScore)
      };

      setMetrics(newMetrics);
      setSuggestions(generateOptimizationSuggestions(newMetrics));
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }, [calculateGrade, generateOptimizationSuggestions]);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
    const interval = setInterval(measurePerformance, 30000); // Measure every 30 seconds
    return () => clearInterval(interval);
  }, [measurePerformance]);

  useEffect(() => {
    setIsVisible(true);
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Performance Monitor Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Activity className="w-6 h-6" />
          </motion.button>

          {/* Expanded Performance Panel */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-16 right-0 w-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-5 h-5 text-white" />
                      <h3 className="text-white font-semibold">Performance Monitor</h3>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="p-4 space-y-4">
                  {/* Overall Score */}
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getGradeColor(metrics.grade)}`}>
                      {metrics.grade}
                    </div>
                    <div className="text-sm text-gray-400">
                      Score: {metrics.overallScore}/100
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>FCP</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.fcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>LCP</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.lcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Zap className="w-4 h-4" />
                        <span>FID</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.fid.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Monitor className="w-4 h-4" />
                        <span>CLS</span>
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.cls.toFixed(3)}
                      </div>
                    </div>
                  </div>

                  {/* Optimization Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Optimization Suggestions
                      </h4>
                      <div className="space-y-2">
                        {suggestions.map((suggestion) => (
                          <motion.div
                            key={suggestion.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gray-800 p-3 rounded-lg border-l-4 border-cyan-500"
                          >
                            <div className="flex items-start space-x-2">
                              <AlertTriangle className={`w-4 h-4 mt-0.5 ${getPriorityColor(suggestion.priority)}`} />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white">
                                  {suggestion.title}
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {suggestion.description}
                                </div>
                                <div className="text-xs text-cyan-400 mt-1">
                                  {suggestion.action}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                      <span className="text-gray-400">
                        {isMonitoring ? 'Monitoring' : 'Stopped'}
                      </span>
                    </div>
                    <button
                      onClick={measurePerformance}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Refresh
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceOptimizer;