import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, Zap, Clock, Target } from 'lucide-react';
import { usePerformance } from '../hooks/usePerformance';

export const PerformanceDashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const performance = usePerformance();

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Target className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value}${unit}`;
  };

  const getMetricColor = (value: number | null, good: number, poor: number) => {
    if (value === null) return 'text-gray-400';
    if (value <= good) return 'text-green-400';
    if (value <= poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 z-50"
    >
      {/* Collapsed View */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-medium text-sm">Performance</span>
        </div>
        
        {/* Score Indicator */}
        <div className="mt-2 text-center">
          <div className={`text-2xl font-bold ${getScoreColor(performance.overallScore)}`}>
            {performance.overallScore}
          </div>
          <div className="text-xs text-gray-400">Score</div>
        </div>
      </motion.button>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Performance Dashboard
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              <p className="text-cyan-100 text-sm mt-1">
                Real-time performance monitoring
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Overall Score */}
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getScoreIcon(performance.overallScore)}
                  <span className="text-white font-medium">Overall Score</span>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(performance.overallScore)}`}>
                  {performance.overallScore}
                </div>
                <div className="text-gray-400 text-sm">out of 100</div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="text-white font-medium text-sm">Core Web Vitals</h4>
                
                {/* FCP */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">FCP</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.fcp, 1800, 3000)}`}>
                    {formatMetric(performance.fcp)}
                  </div>
                </div>

                {/* LCP */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">LCP</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.lcp, 2500, 4000)}`}>
                    {formatMetric(performance.lcp)}
                  </div>
                </div>

                {/* FID */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">FID</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.fid, 100, 300)}`}>
                    {formatMetric(performance.fid)}
                  </div>
                </div>

                {/* CLS */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">CLS</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.cls, 0.1, 0.25)}`}>
                    {performance.cls ? performance.cls.toFixed(3) : 'N/A'}
                  </div>
                </div>

                {/* TTFB */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">TTFB</span>
                  </div>
                  <div className={`font-mono ${getMetricColor(performance.ttfb, 800, 1800)}`}>
                    {formatMetric(performance.ttfb)}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-gray-400 text-xs mb-1">Status</div>
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${performance.isLoaded ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                  <span className="text-white text-sm">
                    {performance.isLoaded ? 'Monitoring Active' : 'Initializing...'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};