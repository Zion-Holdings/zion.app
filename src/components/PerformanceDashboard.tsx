import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformance } from '@/hooks/use-performance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Zap, Clock, Target, RefreshCw, Eye, EyeOff } from 'lucide-react';

export function PerformanceDashboard() {
  const { metrics, score, grade, resetMetrics, isSupported } = usePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isSupported) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-500';
      case 'B': return 'bg-yellow-500';
      case 'C': return 'bg-orange-500';
      case 'D': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatMetric = (value: number | null, unit: string) => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)} ${unit}`;
  };

  const getMetricStatus = (metric: string, value: number | null) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 }
    };

    if (value === null) return 'unknown';
    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✓';
      case 'needs-improvement': return '⚠';
      case 'poor': return '✗';
      default: return '?';
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-50 bg-zion-blue-dark/90 backdrop-blur-sm border border-zion-blue-light/20 rounded-lg p-3 text-zion-cyan hover:bg-zion-blue-light/10 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </motion.button>

      {/* Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-40 w-80 max-h-[80vh] overflow-y-auto"
          >
            <Card className="bg-zion-blue-dark/95 backdrop-blur-md border-zion-blue-light/20 text-white">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-zion-cyan" />
                    Performance
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getGradeColor(grade)} text-white`}>
                      Grade {grade}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-zion-slate-light hover:text-zion-cyan"
                    >
                      {isExpanded ? '−' : '+'}
                    </Button>
                  </div>
                </div>
                
                {/* Overall Score */}
                <div className="text-center py-4">
                  <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                    {score}
                  </div>
                  <div className="text-sm text-zion-slate-light">Performance Score</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Core Web Vitals */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Core Web Vitals
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">FCP</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('fcp', metrics.fcp))}>
                          {getStatusIcon(getMetricStatus('fcp', metrics.fcp))}
                        </span>
                        <span>{formatMetric(metrics.fcp, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">LCP</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('lcp', metrics.lcp))}>
                          {getStatusIcon(getMetricStatus('lcp', metrics.lcp))}
                        </span>
                        <span>{formatMetric(metrics.lcp, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">FID</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('fid', metrics.fid))}>
                          {getStatusIcon(getMetricStatus('fid', metrics.fid))}
                        </span>
                        <span>{formatMetric(metrics.fid, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">CLS</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('cls', metrics.cls))}>
                          {getStatusIcon(getMetricStatus('cls', metrics.cls))}
                        </span>
                        <span>{formatMetric(metrics.cls, '')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 pt-3 border-t border-zion-blue-light/20"
                  >
                    <h4 className="text-sm font-semibold text-zion-cyan flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Additional Metrics
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">TTFB</span>
                        <span>{formatMetric(metrics.ttfb, 'ms')}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Actions */}
                <div className="pt-3 border-t border-zion-blue-light/20">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={resetMetrics}
                      className="flex-1 border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/10"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsVisible(false)}
                      className="flex-1 border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/10"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}