import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  overall: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (import.meta.env.DEV || localStorage.getItem('showPerformance') === 'true') {
      setIsVisible(true);
      measurePerformance();
    }
  }, []);

  const measurePerformance = () => {
    if ('PerformanceObserver' in window) {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics('lcp', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            updateMetrics('fid', firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      // Measure other metrics
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          updateMetrics('ttfb', navigation.responseStart - navigation.requestStart);
        }
      }, 1000);
    }
  };

  const updateMetrics = (key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      if (!prev) return null;
      const newMetrics = { ...prev, [key]: value };
      
      // Calculate overall score
      const scores = [
        newMetrics.fcp < 1800 ? 100 : Math.max(0, 100 - (newMetrics.fcp - 1800) / 10),
        newMetrics.lcp < 2500 ? 100 : Math.max(0, 100 - (newMetrics.lcp - 2500) / 25),
        newMetrics.fid < 100 ? 100 : Math.max(0, 100 - (newMetrics.fid - 100) / 2),
        newMetrics.cls < 0.1 ? 100 : Math.max(0, 100 - newMetrics.cls * 1000),
        newMetrics.ttfb < 800 ? 100 : Math.max(0, 100 - (newMetrics.ttfb - 800) / 8)
      ];
      
      newMetrics.overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      
      return newMetrics;
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (score >= 70) return <Clock className="h-4 w-4 text-yellow-500" />;
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  };

  if (!isVisible || !metrics) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Zap className="h-4 w-4 text-zion-cyan" />
          Performance Monitor
          <Badge variant="outline" className="ml-auto">
            {metrics.overall}/100
          </Badge>
        </CardTitle>
        <CardDescription className="text-xs">
          Core Web Vitals & Performance Metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>First Contentful Paint</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.fcp / 1800) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Largest Contentful Paint</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.lcp / 2500) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>First Input Delay</span>
            <span className="font-mono">{Math.round(metrics.fid)}ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.fid / 100) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Cumulative Layout Shift</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
          <Progress value={Math.min(100, (metrics.cls / 0.1) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Time to First Byte</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.ttfb / 800) * 100)} className="h-1" />
        </div>
        
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Overall Score</span>
            <div className="flex items-center gap-2">
              {getScoreIcon(metrics.overall)}
              <span className={`text-sm font-bold ${getScoreColor(metrics.overall).replace('bg-', 'text-')}`}>
                {metrics.overall}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}