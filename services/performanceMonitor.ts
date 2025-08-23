export interface PerformanceMetrics {
  timestamp: number;
  url: string;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number;
}

export interface PerformanceReport {
  url: string;
  averageMetrics: PerformanceMetrics;
  trends: PerformanceTrend[];
  recommendations: string[];
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  lastUpdated: number;
}

export interface PerformanceTrend {
  metric: keyof PerformanceMetrics;
  trend: 'improving' | 'declining' | 'stable';
  change: number;
  period: 'day' | 'week' | 'month';
}

export interface MonitoringConfig {
  urls: string[];
  frequency: 'hourly' | 'daily' | 'weekly';
  alertThresholds: {
    loadTime: number;
    performanceScore: number;
    accessibilityScore: number;
  };
}

class PerformanceMonitorService {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private config: MonitoringConfig = {
    urls: [],
    frequency: 'daily',
    alertThresholds: {
      loadTime: 3000,
      performanceScore: 80,
      accessibilityScore: 90
    }
  };

  async monitorPerformance(url: string): Promise<PerformanceMetrics> {
    try {
      // In a real implementation, this would use Lighthouse, WebPageTest, or similar tools
      const metrics = await this.simulatePerformanceMeasurement(url);
      
      // Store metrics
      if (!this.metrics.has(url)) {
        this.metrics.set(url, []);
      }
      this.metrics.get(url)!.push(metrics);
      
      // Keep only last 30 measurements
      const urlMetrics = this.metrics.get(url)!;
      if (urlMetrics.length > 30) {
        this.metrics.set(url, urlMetrics.slice(-30));
      }
      
      return metrics;
    } catch (error) {
      console.error('Performance monitoring failed:', error);
      throw new Error('Failed to monitor performance. Please try again.');
    }
  }

  private async simulatePerformanceMeasurement(url: string): Promise<PerformanceMetrics> {
    // Simulate network delay and measurement time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    const baseLoadTime = 800 + Math.random() * 2000;
    const performanceScore = Math.max(50, 100 - Math.random() * 30);
    
    return {
      timestamp: Date.now(),
      url,
      loadTime: Math.round(baseLoadTime),
      firstContentfulPaint: Math.round(baseLoadTime * 0.6),
      largestContentfulPaint: Math.round(baseLoadTime * 0.8),
      cumulativeLayoutShift: Math.random() * 0.1,
      firstInputDelay: Math.random() * 100,
      timeToInteractive: Math.round(baseLoadTime * 1.2),
      totalBlockingTime: Math.random() * 200,
      speedIndex: Math.round(baseLoadTime * 0.7),
      performanceScore: Math.round(performanceScore),
      accessibilityScore: Math.max(80, 100 - Math.random() * 15),
      bestPracticesScore: Math.max(85, 100 - Math.random() * 10),
      seoScore: Math.max(90, 100 - Math.random() * 8)
    };
  }

  async generateReport(url: string): Promise<PerformanceReport> {
    const urlMetrics = this.metrics.get(url) || [];
    
    if (urlMetrics.length === 0) {
      throw new Error('No performance data available for this URL');
    }
    
    const averageMetrics = this.calculateAverageMetrics(urlMetrics);
    const trends = this.analyzeTrends(urlMetrics);
    const recommendations = this.generateRecommendations(averageMetrics);
    const grade = this.calculateGrade(averageMetrics.performanceScore);
    
    return {
      url,
      averageMetrics,
      trends,
      recommendations,
      grade,
      lastUpdated: Date.now()
    };
  }

  private calculateAverageMetrics(metrics: PerformanceMetrics[]): PerformanceMetrics {
    const sum = metrics.reduce((acc, metric) => ({
      timestamp: Date.now(),
      url: metric.url,
      loadTime: acc.loadTime + metric.loadTime,
      firstContentfulPaint: acc.firstContentfulPaint + metric.firstContentfulPaint,
      largestContentfulPaint: acc.largestContentfulPaint + metric.largestContentfulPaint,
      cumulativeLayoutShift: acc.cumulativeLayoutShift + metric.cumulativeLayoutShift,
      firstInputDelay: acc.firstInputDelay + metric.firstInputDelay,
      timeToInteractive: acc.timeToInteractive + metric.timeToInteractive,
      totalBlockingTime: acc.totalBlockingTime + metric.totalBlockingTime,
      speedIndex: acc.speedIndex + metric.speedIndex,
      performanceScore: acc.performanceScore + metric.performanceScore,
      accessibilityScore: acc.accessibilityScore + metric.accessibilityScore,
      bestPracticesScore: acc.bestPracticesScore + metric.bestPracticesScore,
      seoScore: acc.seoScore + metric.seoScore
    }), {
      timestamp: 0,
      url: '',
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0,
      speedIndex: 0,
      performanceScore: 0,
      accessibilityScore: 0,
      bestPracticesScore: 0,
      seoScore: 0
    });
    
    const count = metrics.length;
    
    return {
      timestamp: Date.now(),
      url: metrics[0].url,
      loadTime: Math.round(sum.loadTime / count),
      firstContentfulPaint: Math.round(sum.firstContentfulPaint / count),
      largestContentfulPaint: Math.round(sum.largestContentfulPaint / count),
      cumulativeLayoutShift: Math.round((sum.cumulativeLayoutShift / count) * 1000) / 1000,
      firstInputDelay: Math.round(sum.firstInputDelay / count),
      timeToInteractive: Math.round(sum.timeToInteractive / count),
      totalBlockingTime: Math.round(sum.totalBlockingTime / count),
      speedIndex: Math.round(sum.speedIndex / count),
      performanceScore: Math.round(sum.performanceScore / count),
      accessibilityScore: Math.round(sum.accessibilityScore / count),
      bestPracticesScore: Math.round(sum.bestPracticesScore / count),
      seoScore: Math.round(sum.seoScore / count)
    };
  }

  private analyzeTrends(metrics: PerformanceMetrics[]): PerformanceTrend[] {
    if (metrics.length < 2) return [];
    
    const trends: PerformanceTrend[] = [];
    const recentMetrics = metrics.slice(-7); // Last 7 measurements
    const olderMetrics = metrics.slice(0, -7);
    
    if (olderMetrics.length === 0) return trends;
    
    const metricKeys: (keyof PerformanceMetrics)[] = [
      'loadTime', 'performanceScore', 'accessibilityScore', 'bestPracticesScore', 'seoScore'
    ];
    
    metricKeys.forEach(key => {
      if (typeof recentMetrics[0][key] === 'number') {
        const recentAvg = this.calculateAverage(recentMetrics.map(m => m[key] as number));
        const olderAvg = this.calculateAverage(olderMetrics.map(m => m[key] as number));
        const change = recentAvg - olderAvg;
        
        let trend: 'improving' | 'declining' | 'stable' = 'stable';
        if (key === 'loadTime') {
          trend = change < -100 ? 'improving' : change > 100 ? 'declining' : 'stable';
        } else {
          trend = change > 2 ? 'improving' : change < -2 ? 'declining' : 'stable';
        }
        
        trends.push({
          metric: key,
          trend,
          change: Math.round(change * 100) / 100,
          period: 'week'
        });
      }
    });
    
    return trends;
  }

  private calculateAverage(values: number[]): number {
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  }

  private generateRecommendations(metrics: PerformanceMetrics): string[] {
    const recommendations: string[] = [];
    
    if (metrics.loadTime > 3000) {
      recommendations.push('Optimize image sizes and implement lazy loading to reduce load time');
    }
    
    if (metrics.performanceScore < 80) {
      recommendations.push('Minimize JavaScript bundles and implement code splitting');
      recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    
    if (metrics.accessibilityScore < 90) {
      recommendations.push('Add proper ARIA labels and ensure keyboard navigation works');
      recommendations.push('Improve color contrast and provide alternative text for images');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Set explicit dimensions for images and avoid inserting content above existing content');
    }
    
    if (metrics.totalBlockingTime > 200) {
      recommendations.push('Break up long tasks and optimize JavaScript execution');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance looks great! Keep monitoring for any regressions.');
    }
    
    return recommendations;
  }

  private calculateGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  async getHistoricalData(url: string, days: number = 30): Promise<PerformanceMetrics[]> {
    const urlMetrics = this.metrics.get(url) || [];
    const cutoff = Date.now() - (days * 24 * 60 * 60 * 1000);
    
    return urlMetrics.filter(metric => metric.timestamp >= cutoff);
  }

  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {
    this.config = { ...config };
  }

  async getMonitoringConfig(): Promise<MonitoringConfig> {
    return { ...this.config };
  }

  async addUrlToMonitoring(url: string): Promise<void> {
    if (!this.config.urls.includes(url)) {
      this.config.urls.push(url);
    }
  }

  async removeUrlFromMonitoring(url: string): Promise<void> {
    this.config.urls = this.config.urls.filter(u => u !== url);
    this.metrics.delete(url);
  }

  async getMonitoredUrls(): Promise<string[]> {
    return [...this.config.urls];
  }

  async checkAlerts(): Promise<{ url: string; alerts: string[] }[]> {
    const alerts: { url: string; alerts: string[] }[] = [];
    
    for (const url of this.config.urls) {
      const urlMetrics = this.metrics.get(url);
      if (!urlMetrics || urlMetrics.length === 0) continue;
      
      const latestMetrics = urlMetrics[urlMetrics.length - 1];
      const urlAlerts: string[] = [];
      
      if (latestMetrics.loadTime > this.config.alertThresholds.loadTime) {
        urlAlerts.push(`Load time (${latestMetrics.loadTime}ms) exceeds threshold (${this.config.alertThresholds.loadTime}ms)`);
      }
      
      if (latestMetrics.performanceScore < this.config.alertThresholds.performanceScore) {
        urlAlerts.push(`Performance score (${latestMetrics.performanceScore}) below threshold (${this.config.alertThresholds.performanceScore})`);
      }
      
      if (latestMetrics.accessibilityScore < this.config.alertThresholds.accessibilityScore) {
        urlAlerts.push(`Accessibility score (${latestMetrics.accessibilityScore}) below threshold (${this.config.alertThresholds.accessibilityScore})`);
      }
      
      if (urlAlerts.length > 0) {
        alerts.push({ url, alerts: urlAlerts });
      }
    }
    
    return alerts;
  }
}

export default PerformanceMonitorService;