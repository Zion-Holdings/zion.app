import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformance } from '@/hooks/usePerformance';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Activity from 'lucide-react/dist/esm/icons/activity';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Clock from 'lucide-react/dist/esm/icons/clock';
import MousePointer from 'lucide-react/dist/esm/icons/mouse-pointer';
import Eye from 'lucide-react/dist/esm/icons/eye';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import X from 'lucide-react/dist/esm/icons/x';
import Info from 'lucide-react/dist/esm/icons/info';
import { cn } from '@/lib/utils';

interface PerformanceDashboardProps {
  className?: string;
  showDetails?: boolean;
  onClose?: () => void;
}

export function PerformanceDashboard({ 
  className, 
  showDetails = false, 
  onClose 
}: PerformanceDashboardProps) {
  const { metrics, observers, performanceScore, logMetrics } = usePerformance();
  const [isExpanded, setIsExpanded] = useState(showDetails);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 90) return '🚀';
    if (score >= 70) return '⚠️';
    return '🐌';
  };

  const getMetricIcon = (metricName: string) => {
    const icons: Record<string, React.ReactNode> = {
      FCP: <Eye className="w-4 h-4" />,
      LCP: <Eye className="w-4 h-4" />,
      FID: <MousePointer className="w-4 h-4" />,
      CLS: <BarChart3 className="w-4 h-4" />,
      TTFB: <Clock className="w-4 h-4" />,
      DOMLOAD: <Activity className="w-4 h-4" />,
      WINDOWLOAD: <Activity className="w-4 h-4" />
    };
    return icons[metricName] || <Activity className="w-4 h-4" />;
  };

  const getMetricDescription = (metricName: string) => {
    const descriptions: Record<string, string> = {
      FCP: 'First Contentful Paint - Time to first content',
      LCP: 'Largest Contentful Paint - Time to largest content',
      FID: 'First Input Delay - Time to first interaction',
      CLS: 'Cumulative Layout Shift - Visual stability',
      TTFB: 'Time to First Byte - Server response time',
      DOMLOAD: 'DOM Content Loaded - DOM ready time',
      WINDOWLOAD: 'Window Load - Full page load time'
    };
    return descriptions[metricName] || 'Performance metric';
  };

  const formatMetricValue = (metricName: string, value: number) => {
    if (metricName === 'CLS') return value.toFixed(3);
    if (metricName === 'FID') return `${value.toFixed(0)}ms`;
    return `${value.toFixed(0)}ms`;
  };

  return (
    <motion.div
      className={cn(
        'fixed bottom-4 right-4 z-50 max-w-sm',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-zion-blue-dark/95 backdrop-blur-md border-zion-purple/20 text-white shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-zion-cyan" />
              Performance
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 h-8 w-8 text-zion-slate-light hover:text-zion-cyan"
              >
                <TrendingUp className="w-4 h-4" />
              </Button>
              {onClose && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-1 h-8 w-8 text-zion-slate-light hover:text-zion-cyan"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Performance Score */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zion-slate-light">Score:</span>
              <span className={cn('text-2xl font-bold', getScoreColor(performanceScore))}>
                {performanceScore}
              </span>
              <span className="text-lg">{getScoreEmoji(performanceScore)}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logMetrics}
              className="text-zion-cyan hover:text-zion-cyan-light"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-0 space-y-3">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 gap-2">
                  {observers.map(({ name, value, rating }) => (
                    <div
                      key={name}
                      className="flex items-center justify-between p-2 bg-zion-slate-dark/30 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        {getMetricIcon(name)}
                        <div>
                          <div className="text-sm font-medium">{name}</div>
                          <div className="text-xs text-zion-slate-light">
                            {getMetricDescription(name)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono">
                          {formatMetricValue(name, value)}
                        </span>
                        <Badge
                          variant={rating === 'good' ? 'default' : rating === 'needs-improvement' ? 'secondary' : 'destructive'}
                          className={cn(
                            'text-xs',
                            rating === 'good' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            rating === 'needs-improvement' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                            'bg-red-500/20 text-red-400 border-red-500/30'
                          )}
                        >
                          {rating}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance Tips */}
                <div className="p-3 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-zion-purple" />
                    <span className="text-sm font-medium text-zion-purple">Tips</span>
                  </div>
                  <div className="text-xs text-zion-slate-light space-y-1">
                    {performanceScore < 90 && (
                      <>
                        {performanceScore < 70 && (
                          <p>• Optimize images and use lazy loading</p>
                        )}
                        <p>• Minimize JavaScript bundle size</p>
                        <p>• Use CDN for static assets</p>
                      </>
                    )}
                    {performanceScore >= 90 && (
                      <p>Great performance! Keep up the good work! 🎉</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

// Compact performance indicator
export function PerformanceIndicator({ className }: { className?: string }) {
  const { performanceScore } = usePerformance();
  
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'w-2 h-2 rounded-full',
        performanceScore >= 90 ? 'bg-green-500' :
        performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
      )} />
      <span className="text-xs text-zion-slate-light">
        {performanceScore}/100
      </span>
    </div>
  );
}