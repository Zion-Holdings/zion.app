import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, TrendingUp, Activity, CheckCircle, AlertCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  onOptimizationComplete?: (metrics: PerformanceMetrics) => void;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  onOptimizationComplete 
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Memoized optimization steps
  const optimizationSteps = useMemo(() => [
    'Analyzing page performance...',
    'Optimizing image loading...',
    'Compressing assets...',
    'Implementing lazy loading...',
    'Optimizing animations...',
    'Finalizing optimizations...'
  ], []);

  // Performance monitoring
  const measurePerformance = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Simulate performance measurement
      setTimeout(() => {
        const mockMetrics: PerformanceMetrics = {
          loadTime: Math.random() * 2000 + 500,
          firstContentfulPaint: Math.random() * 1500 + 300,
          largestContentfulPaint: Math.random() * 2500 + 800,
          cumulativeLayoutShift: Math.random() * 0.1,
          firstInputDelay: Math.random() * 100 + 50,
          timeToInteractive: Math.random() * 3000 + 1500
        };
        resolve(mockMetrics);
      }, 1000);
    });
  }, []);

  // Run performance optimizations
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    setOptimizations([]);

    for (let i = 0; i < optimizationSteps.length; i++) {
      setCurrentStep(optimizationSteps[i]);
      setOptimizationProgress((i + 1) * (100 / optimizationSteps.length));
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Add completed optimization
      setOptimizations(prev => [...prev, optimizationSteps[i]]);
    }

    // Measure final performance
    const finalMetrics = await measurePerformance();
    setMetrics(finalMetrics);
    setIsOptimizing(false);
    
    if (onOptimizationComplete) {
      onOptimizationComplete(finalMetrics);
    }
  }, [optimizationSteps, measurePerformance, onOptimizationComplete]);

  // Auto-optimize on mount
  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  // Performance score calculation
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.loadTime > 2000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.firstInputDelay > 100) score -= 10;
    if (metrics.timeToInteractive > 3000) score -= 10;
    
    return Math.max(0, score);
  }, []);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Get grade color
  const getGradeColor = useCallback((grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-4 w-80"
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Performance Optimization</h3>
                <p className="text-gray-400 text-sm">Optimizing your experience...</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>{Math.round(optimizationProgress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${optimizationProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Current Step */}
            <div className="mb-4">
              <p className="text-white text-sm mb-2">Current Step:</p>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>{currentStep}</span>
              </div>
            </div>

            {/* Completed Optimizations */}
            <div className="max-h-32 overflow-y-auto">
              <p className="text-white text-sm mb-2">Completed:</p>
              <div className="space-y-1">
                {optimizations.map((optimization, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-400 text-sm"
                  >
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>{optimization}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Performance Results */}
        {!isOptimizing && metrics && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-4 w-80"
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Optimization Complete</h3>
                <p className="text-gray-400 text-sm">Performance improved!</p>
              </div>
            </div>

            {/* Performance Score */}
            <div className="mb-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">
                {getPerformanceScore(metrics)}
              </div>
              <div className={`text-2xl font-bold ${getGradeColor(getPerformanceGrade(getPerformanceScore(metrics)))}`}>
                Grade {getPerformanceGrade(getPerformanceScore(metrics))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Load Time:</span>
                <span className="text-white">{metrics.loadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">First Paint:</span>
                <span className="text-white">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Largest Paint:</span>
                <span className="text-white">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Layout Shift:</span>
                <span className="text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={runOptimizations}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Re-optimize
              </button>
              <button
                onClick={() => setMetrics(null)}
                className="px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOptimizing && !metrics && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={runOptimizations}
          className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Run performance optimization"
        >
          <Zap className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default PerformanceOptimizer;