export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
  category: 'core-web-vitals' | 'performance' | 'user-experience' | 'resource';
  status: 'good' | 'needs-improvement' | 'poor';
  threshold: {
    good: number;
    poor: number;
  };
}

export interface CoreWebVitals {
  lcp: PerformanceMetric; // Largest Contentful Paint
  fid: PerformanceMetric; // First Input Delay
  cls: PerformanceMetric; // Cumulative Layout Shift
  ttfb: PerformanceMetric; // Time to First Byte
  fcp: PerformanceMetric; // First Contentful Paint
}

export interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'critical';
  message: string;
  metric: PerformanceMetric;
  timestamp: Date;
  resolved: boolean;
  resolution?: string;
}

export interface PerformanceReport {
  id: string;
  timestamp: Date;
  summary: {
    overallScore: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
      ttfb: number;
      fcp: number;
    };
    performanceScore: number;
    accessibilityScore: number;
    bestPracticesScore: number;
    seoScore: number;
  };
  metrics: PerformanceMetric[];
  alerts: PerformanceAlert[];
  recommendations: string[];
}

export interface ResourceTiming {
  name: string;
  initiatorType: string;
  duration: number;
  size: number;
  startTime: number;
  responseEnd: number;
  transferSize: number;
}

export interface ErrorEvent {
  id: string;
  message: string;
  stack?: string;
  url: string;
  timestamp: Date;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  resolved: boolean;
}

class PerformanceMonitorService {
  private metrics: PerformanceMetric[] = [];
  private alerts: PerformanceAlert[] = [];
  private reports: PerformanceReport[] = [];
  private errors: ErrorEvent[] = [];
  private resourceTimings: ResourceTiming[] = [];
  private isMonitoring: boolean = false;
  private monitoringInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.initializeDefaultMetrics();
  }

  private initializeDefaultMetrics() {
    const now = new Date();
    
    // Core Web Vitals thresholds (based on Google's recommendations)
    const defaultMetrics: Omit<PerformanceMetric, 'id'>[] = [
      {
        name: 'Largest Contentful Paint (LCP)',
        value: 0,
        unit: 'ms',
        timestamp: now,
        category: 'core-web-vitals',
        status: 'good',
        threshold: { good: 2500, poor: 4000 }
      },
      {
        name: 'First Input Delay (FID)',
        value: 0,
        unit: 'ms',
        timestamp: now,
        category: 'core-web-vitals',
        status: 'good',
        threshold: { good: 100, poor: 300 }
      },
      {
        name: 'Cumulative Layout Shift (CLS)',
        value: 0,
        unit: '',
        timestamp: now,
        category: 'core-web-vitals',
        status: 'good',
        threshold: { good: 0.1, poor: 0.25 }
      },
      {
        name: 'Time to First Byte (TTFB)',
        value: 0,
        unit: 'ms',
        timestamp: now,
        category: 'core-web-vitals',
        status: 'good',
        threshold: { good: 800, poor: 1800 }
      },
      {
        name: 'First Contentful Paint (FCP)',
        value: 0,
        unit: 'ms',
        timestamp: now,
        category: 'core-web-vitals',
        status: 'good',
        threshold: { good: 1800, poor: 3000 }
      }
    ];

    defaultMetrics.forEach(metric => {
      this.metrics.push({
        ...metric,
        id: `metric_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      });
    });
  }

  async startMonitoring(): Promise<void> {
    if (this.isMonitoring) {
      return;
    }

    this.isMonitoring = true;
    
    // Start monitoring every 30 seconds
    this.monitoringInterval = setInterval(() => {
      this.collectMetrics();
    }, 30000);

    // Initial collection
    this.collectMetrics();
  }

  async stopMonitoring(): Promise<void> {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    this.isMonitoring = false;
  }

  private async collectMetrics(): Promise<void> {
    try {
      // Simulate collecting real performance metrics
      await this.simulateMetricCollection();
      
      // Check for alerts
      this.checkAlerts();
      
      // Generate report if needed
      if (this.shouldGenerateReport()) {
        await this.generatePerformanceReport();
      }
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }

  private async simulateMetricCollection(): Promise<void> {
    const now = new Date();
    
    // Simulate LCP (Largest Contentful Paint)
    const lcpValue = Math.random() * 3000 + 1000; // 1000-4000ms
    await this.updateMetric('Largest Contentful Paint (LCP)', lcpValue, 'ms');
    
    // Simulate FID (First Input Delay)
    const fidValue = Math.random() * 200 + 50; // 50-250ms
    await this.updateMetric('First Input Delay (FID)', fidValue, 'ms');
    
    // Simulate CLS (Cumulative Layout Shift)
    const clsValue = Math.random() * 0.3; // 0-0.3
    await this.updateMetric('Cumulative Layout Shift (CLS)', clsValue, '');
    
    // Simulate TTFB (Time to First Byte)
    const ttfbValue = Math.random() * 1500 + 500; // 500-2000ms
    await this.updateMetric('Time to First Byte (TTFB)', ttfbValue, 'ms');
    
    // Simulate FCP (First Contentful Paint)
    const fcpValue = Math.random() * 2000 + 1000; // 1000-3000ms
    await this.updateMetric('First Contentful Paint (FCP)', fcpValue, 'ms');
    
    // Simulate resource timing
    this.simulateResourceTiming();
  }

  private async updateMetric(name: string, value: number, unit: string): Promise<void> {
    const metric = this.metrics.find(m => m.name === name);
    if (metric) {
      metric.value = Math.round(value * 100) / 100;
      metric.timestamp = new Date();
      metric.status = this.calculateStatus(value, metric.threshold);
    }
  }

  private calculateStatus(value: number, threshold: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  private simulateResourceTiming(): void {
    const resourceTypes = ['script', 'stylesheet', 'image', 'font', 'fetch'];
    const resourceNames = [
      'main.js', 'styles.css', 'hero-image.jpg', 'Inter-Regular.woff2', 'api/users'
    ];

    for (let i = 0; i < 5; i++) {
      const timing: ResourceTiming = {
        name: resourceNames[i],
        initiatorType: resourceTypes[i],
        duration: Math.random() * 1000 + 100,
        size: Math.random() * 1000000 + 10000,
        startTime: Math.random() * 1000,
        responseEnd: Math.random() * 1000 + 500,
        transferSize: Math.random() * 500000 + 5000
      };
      
      this.resourceTimings.push(timing);
    }
  }

  private checkAlerts(): void {
    this.metrics.forEach(metric => {
      if (metric.status === 'poor' && !this.alerts.some(alert => 
        alert.metric.id === metric.id && !alert.resolved
      )) {
        this.createAlert(metric, 'critical');
      } else if (metric.status === 'needs-improvement' && !this.alerts.some(alert => 
        alert.metric.id === metric.id && !alert.resolved
      )) {
        this.createAlert(metric, 'warning');
      }
    });
  }

  private createAlert(metric: PerformanceMetric, type: 'warning' | 'error' | 'critical'): void {
    const alert: PerformanceAlert = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      message: `${metric.name} is ${metric.status} (${metric.value}${metric.unit})`,
      metric,
      timestamp: new Date(),
      resolved: false
    };
    
    this.alerts.push(alert);
  }

  private shouldGenerateReport(): boolean {
    // Generate report every hour
    const lastReport = this.reports[this.reports.length - 1];
    if (!lastReport) return true;
    
    const timeSinceLastReport = Date.now() - lastReport.timestamp.getTime();
    return timeSinceLastReport >= 60 * 60 * 1000; // 1 hour
  }

  async generatePerformanceReport(): Promise<PerformanceReport> {
    const now = new Date();
    
    // Calculate overall score based on Core Web Vitals
    const coreWebVitals = this.getCoreWebVitals();
    const overallScore = this.calculateOverallScore(coreWebVitals);
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(coreWebVitals);
    
    const report: PerformanceReport = {
      id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: now,
      summary: {
        overallScore,
        coreWebVitals: {
          lcp: coreWebVitals.lcp.value,
          fid: coreWebVitals.fid.value,
          cls: coreWebVitals.cls.value,
          ttfb: coreWebVitals.ttfb.value,
          fcp: coreWebVitals.fcp.value
        },
        performanceScore: Math.round(overallScore * 0.4),
        accessibilityScore: Math.round(overallScore * 0.2),
        bestPracticesScore: Math.round(overallScore * 0.2),
        seoScore: Math.round(overallScore * 0.2)
      },
      metrics: [...this.metrics],
      alerts: this.alerts.filter(alert => !alert.resolved),
      recommendations
    };
    
    this.reports.push(report);
    return report;
  }

  private getCoreWebVitals(): CoreWebVitals {
    const lcp = this.metrics.find(m => m.name.includes('LCP'))!;
    const fid = this.metrics.find(m => m.name.includes('FID'))!;
    const cls = this.metrics.find(m => m.name.includes('CLS'))!;
    const ttfb = this.metrics.find(m => m.name.includes('TTFB'))!;
    const fcp = this.metrics.find(m => m.name.includes('FCP'))!;
    
    return { lcp, fid, cls, ttfb, fcp };
  }

  private calculateOverallScore(coreWebVitals: CoreWebVitals): number {
    let score = 100;
    
    // LCP scoring
    if (coreWebVitals.lcp.value > 4000) score -= 25;
    else if (coreWebVitals.lcp.value > 2500) score -= 10;
    
    // FID scoring
    if (coreWebVitals.fid.value > 300) score -= 25;
    else if (coreWebVitals.fid.value > 100) score -= 10;
    
    // CLS scoring
    if (coreWebVitals.cls.value > 0.25) score -= 25;
    else if (coreWebVitals.cls.value > 0.1) score -= 10;
    
    // TTFB scoring
    if (coreWebVitals.ttfb.value > 1800) score -= 15;
    else if (coreWebVitals.ttfb.value > 800) score -= 5;
    
    // FCP scoring
    if (coreWebVitals.fcp.value > 3000) score -= 10;
    else if (coreWebVitals.fcp.value > 1800) score -= 5;
    
    return Math.max(0, score);
  }

  private generateRecommendations(coreWebVitals: CoreWebVitals): string[] {
    const recommendations: string[] = [];
    
    if (coreWebVitals.lcp.value > 2500) {
      recommendations.push('Optimize images and reduce render-blocking resources to improve LCP');
    }
    
    if (coreWebVitals.fid.value > 100) {
      recommendations.push('Break up long tasks and optimize JavaScript execution to improve FID');
    }
    
    if (coreWebVitals.cls.value > 0.1) {
      recommendations.push('Set explicit dimensions for images and avoid inserting content above existing content');
    }
    
    if (coreWebVitals.ttfb.value > 800) {
      recommendations.push('Optimize server response time and consider using a CDN');
    }
    
    if (coreWebVitals.fcp.value > 1800) {
      recommendations.push('Reduce critical rendering path and optimize CSS delivery');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Great job! Your Core Web Vitals are in the green zone');
    }
    
    return recommendations;
  }

  async logError(error: Error, context?: { url?: string; userId?: string; sessionId?: string }): Promise<void> {
    const errorEvent: ErrorEvent = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      message: error.message,
      stack: error.stack,
      url: context?.url || window.location.href,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      userId: context?.userId,
      sessionId: context?.sessionId,
      severity: this.calculateErrorSeverity(error),
      resolved: false
    };
    
    this.errors.push(errorEvent);
    
    // Check if this should trigger an alert
    if (errorEvent.severity === 'critical' || errorEvent.severity === 'high') {
      this.createErrorAlert(errorEvent);
    }
  }

  private calculateErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch')) return 'high';
    if (message.includes('syntax') || message.includes('parsing')) return 'critical';
    if (message.includes('type') || message.includes('undefined')) return 'medium';
    
    return 'low';
  }

  private createErrorAlert(errorEvent: ErrorEvent): void {
    const alert: PerformanceAlert = {
      id: `error_alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: errorEvent.severity === 'critical' ? 'critical' : 'error',
      message: `Error: ${errorEvent.message}`,
      metric: {
        id: `error_metric_${errorEvent.id}`,
        name: 'Error Rate',
        value: 1,
        unit: 'count',
        timestamp: errorEvent.timestamp,
        category: 'performance',
        status: 'poor',
        threshold: { good: 0, poor: 1 }
      },
      timestamp: new Date(),
      resolved: false
    };
    
    this.alerts.push(alert);
  }

  async getMetrics(category?: string): Promise<PerformanceMetric[]> {
    if (category) {
      return this.metrics.filter(m => m.category === category);
    }
    return [...this.metrics];
  }

  async getAlerts(resolved?: boolean): Promise<PerformanceAlert[]> {
    if (resolved !== undefined) {
      return this.alerts.filter(alert => alert.resolved === resolved);
    }
    return [...this.alerts];
  }

  async getReports(limit?: number): Promise<PerformanceReport[]> {
    const reports = [...this.reports].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    if (limit) {
      return reports.slice(0, limit);
    }
    return reports;
  }

  async getErrors(severity?: string): Promise<ErrorEvent[]> {
    if (severity) {
      return this.errors.filter(error => error.severity === severity);
    }
    return [...this.errors];
  }

  async getResourceTimings(): Promise<ResourceTiming[]> {
    return [...this.resourceTimings];
  }

  async resolveAlert(alertId: string, resolution?: string): Promise<boolean> {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      alert.resolution = resolution;
      return true;
    }
    return false;
  }

  async resolveError(errorId: string): Promise<boolean> {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      return true;
    }
    return false;
  }

  async getPerformanceSummary(): Promise<{
    currentScore: number;
    trend: 'improving' | 'stable' | 'declining';
    criticalIssues: number;
    warnings: number;
    lastUpdated: Date;
  }> {
    const coreWebVitals = this.getCoreWebVitals();
    const currentScore = this.calculateOverallScore(coreWebVitals);
    
    // Calculate trend based on last 3 reports
    let trend: 'improving' | 'stable' | 'declining' = 'stable';
    if (this.reports.length >= 3) {
      const recentReports = this.reports.slice(-3);
      const scores = recentReports.map(r => r.summary.overallScore);
      if (scores[2] > scores[0]) trend = 'improving';
      else if (scores[2] < scores[0]) trend = 'declining';
    }
    
    const criticalIssues = this.alerts.filter(a => a.type === 'critical' && !a.resolved).length;
    const warnings = this.alerts.filter(a => a.type === 'warning' && !a.resolved).length;
    
    return {
      currentScore,
      trend,
      criticalIssues,
      warnings,
      lastUpdated: new Date()
    };
  }

  async exportData(format: 'json' | 'csv'): Promise<string> {
    const data = {
      metrics: this.metrics,
      alerts: this.alerts,
      reports: this.reports,
      errors: this.errors,
      resourceTimings: this.resourceTimings,
      exportDate: new Date().toISOString()
    };
    
    if (format === 'json') {
      return JSON.stringify(data, null, 2);
    } else if (format === 'csv') {
      return this.convertToCSV(data);
    }
    
    throw new Error('Unsupported export format');
  }

  private convertToCSV(data: any): string {
    // Simple CSV conversion for metrics
    let csv = 'Name,Value,Unit,Category,Status,Timestamp\n';
    
    data.metrics.forEach((metric: PerformanceMetric) => {
      csv += `${metric.name},${metric.value},${metric.unit},${metric.category},${metric.status},${metric.timestamp.toISOString()}\n`;
    });
    
    return csv;
  }
}

export const performanceMonitorService = new PerformanceMonitorService();