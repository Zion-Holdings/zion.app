import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  interactions: number;
}

interface PerformanceOptions {
  enableMemoryTracking?: boolean;
  enableFPSTracking?: boolean;
  enableInteractionTracking?: boolean;
}

export const usePerformance = (options: PerformanceOptions = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    interactions: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Measure initial load time
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        }));
      }
    }
  }, []);

  // FPS tracking
  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }, []);

  // Memory tracking
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    if (options.enableFPSTracking) {
      measureFPS();
    }
    
    if (options.enableMemoryTracking) {
      const memoryInterval = setInterval(measureMemory, 5000);
      return () => clearInterval(memoryInterval);
    }
  }, [options.enableFPSTracking, options.enableMemoryTracking, measureFPS, measureMemory]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Track render time
  const trackRender = useCallback((componentName: string) => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      setMetrics(prev => ({
        ...prev,
        renderTime: Math.max(prev.renderTime, renderTime)
      }));
      
      // Log slow renders
      if (renderTime > 16) { // 60fps threshold
        console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }
    };
  }, []);

  // Track user interactions
  const trackInteraction = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      interactions: prev.interactions + 1
    }));
  }, []);

  // Get performance score
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for slow load times
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;
    
    // Deduct points for slow renders
    if (metrics.renderTime > 16) score -= 15;
    else if (metrics.renderTime > 8) score -= 5;
    
    // Deduct points for low FPS
    if (metrics.fps < 30) score -= 25;
    else if (metrics.fps < 50) score -= 10;
    
    // Deduct points for high memory usage
    if (metrics.memoryUsage && metrics.memoryUsage > 100) score -= 20;
    else if (metrics.memoryUsage && metrics.memoryUsage > 50) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    trackRender,
    trackInteraction,
    getPerformanceScore
  };
};