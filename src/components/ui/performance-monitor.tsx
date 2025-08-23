import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function PerformanceMonitor() {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {
    return null;
  }

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    const show =
      process.env.NODE_ENV === 'development' ||
      localStorage.getItem('performance-monitoring') === 'true';

    setShouldShow(show);

    if (!show) return;

    setIsVisible(true);

    const collectMetrics = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
      };

      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.firstContentfulPaint = entry.startTime;
        }
      });

      // Get LCP
      if ('LargestContentfulPaint' in window) {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.largestContentfulPaint = lastEntry.startTime;
            setMetrics({ ...newMetrics });
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Get CLS
      if ('LayoutShift' in window) {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          newMetrics.cumulativeLayoutShift = clsValue;
          setMetrics({ ...newMetrics });
        }).observe({ entryTypes: ['layout-shift'] });
      }

      setMetrics(newMetrics);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  const getScoreColor = (value: number, good: number, poor: number) => {
    if (value <= good) return 'bg-green-500';
    if (value <= poor) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const toggleMonitoring = () => {
    const current = localStorage.getItem('performance-monitoring') === 'true';
    localStorage.setItem('performance-monitoring', (!current).toString());
    setIsVisible(!current);
    if (!current) {
      window.location.reload(); // Reload to start monitoring
    }
  };

  if (!shouldShow) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMonitoring}
          className="bg-background/80 backdrop-blur-sm"
        >
          📊 Enable Performance Monitor
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Performance Monitor</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMonitoring}
              className="h-6 w-6 p-0"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          {metrics ? (
            <>
              <div className="flex justify-between items-center">
                <span className="text-xs">Load Time</span>
                <Badge className={getScoreColor(metrics.loadTime, 1500, 3000)}>
                  {metrics.loadTime.toFixed(0)}ms
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">FCP</span>
                <Badge className={getScoreColor(metrics.firstContentfulPaint, 1800, 3000)}>
                  {metrics.firstContentfulPaint.toFixed(0)}ms
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">LCP</span>
                <Badge className={getScoreColor(metrics.largestContentfulPaint, 2500, 4000)}>
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">CLS</span>
                <Badge className={getScoreColor(metrics.cumulativeLayoutShift * 1000, 100, 250)}>
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </Badge>
              </div>
            </>
          ) : (
            <div className="text-xs text-muted-foreground">Collecting metrics...</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 