/**
 * Real-time Error Reporting Dashboard
 * Provides comprehensive monitoring, health scoring, and alerting
 */

import { logInfo, logWarn, logErrorToProduction } from './productionLogger';

interface HealthMetrics {
  status: 'healthy' | 'warning' | 'critical';
  score: number; // 0-100
  uptime: number;
  responseTime: number;
  memoryUsage: number;
  errorRate: number;
  criticalErrors: number;
  lastUpdated: string;
}

interface ErrorSummary {
  critical: number;
  high: number;
  medium: number;
  low: number;
  total: number;
}

interface TopError {
  description: string;
  count: number;
  severity: 'critical' | 'high' | 'medium' | 'low';
  lastOccurrence: string;
  pattern?: string;
}

interface SystemRecommendation {
  priority: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  action: string;
  automated?: boolean;
}

interface HealthData {
  metrics: HealthMetrics;
  errors: {
    summary: ErrorSummary;
    topErrors: TopError[];
    trends: {
      hour: number[];
      day: number[];
    };
  };
  recommendations: SystemRecommendation[];
  alerts: string[];
}

class ErrorReportingDashboard {
  private healthData: HealthData;
  private startTime: number;
  private errorBuffer: Map<string, TopError> = new Map();
  private performanceMetrics: number[] = [];
  private memoryReadings: number[] = [];

  constructor() {
    this.startTime = Date.now();
    this.healthData = this.initializeHealthData();
    this.setupPerformanceMonitoring();
  }

  private initializeHealthData(): HealthData {
    return {
      metrics: {
        status: 'healthy',
        score: 100,
        uptime: 0,
        responseTime: 0,
        memoryUsage: 0,
        errorRate: 0,
        criticalErrors: 0,
        lastUpdated: new Date().toISOString()
      },
      errors: {
        summary: {
          critical: 0,
          high: 0,
          medium: 0,
          low: 0,
          total: 0
        },
        topErrors: [],
        trends: {
          hour: new Array(24).fill(0),
          day: new Array(7).fill(0)
        }
      },
      recommendations: [],
      alerts: []
    };
  }

  private setupPerformanceMonitoring(): void {
    // Monitor performance every 30 seconds
    setInterval(() => {
      this.updatePerformanceMetrics();
    }, 30000);

    // Generate health report every 5 minutes
    setInterval(() => {
      this.generateHealthReport();
    }, 300000);
  }

  private updatePerformanceMetrics(): void {
    try {
      // Measure response time simulation
      const start = performance.now();
      setTimeout(() => {
        const responseTime = performance.now() - start;
        this.performanceMetrics.push(responseTime);
        if (this.performanceMetrics.length > 100) {
          this.performanceMetrics = this.performanceMetrics.slice(-50);
        }
      }, 0);

      // Memory usage (if available)
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
        this.memoryReadings.push(memoryUsage);
        if (this.memoryReadings.length > 100) {
          this.memoryReadings = this.memoryReadings.slice(-50);
        }
      }

      this.calculateHealthScore();
    } catch (error) {
      logErrorToProduction('Failed to update performance metrics', error);
    }
  }

  private calculateHealthScore(): void {
    let score = 100;
    const metrics = this.healthData.metrics;

    // Penalize for critical errors
    score -= metrics.criticalErrors * 10;

    // Penalize for high error rate
    if (metrics.errorRate > 5) score -= 20;
    else if (metrics.errorRate > 2) score -= 10;
    else if (metrics.errorRate > 1) score -= 5;

    // Penalize for poor response time
    if (metrics.responseTime > 2000) score -= 15;
    else if (metrics.responseTime > 1000) score -= 10;
    else if (metrics.responseTime > 500) score -= 5;

    // Penalize for high memory usage
    if (metrics.memoryUsage > 90) score -= 15;
    else if (metrics.memoryUsage > 80) score -= 10;
    else if (metrics.memoryUsage > 70) score -= 5;

    score = Math.max(0, Math.min(100, score));
    metrics.score = score;

    // Determine status based on score
    if (score >= 80) metrics.status = 'healthy';
    else if (score >= 60) metrics.status = 'warning';
    else metrics.status = 'critical';
  }

  public reportError(error: Error, severity: 'critical' | 'high' | 'medium' | 'low'): void {
    const errorKey = `${error.name}:${error.message}`;
    const existingError = this.errorBuffer.get(errorKey);

    if (existingError) {
      existingError.count++;
      existingError.lastOccurrence = new Date().toISOString();
    } else {
      this.errorBuffer.set(errorKey, {
        description: `${error.name}: ${error.message}`,
        count: 1,
        severity,
        lastOccurrence: new Date().toISOString(),
        pattern: this.detectErrorPattern(error)
      });
    }

    // Update summary
    this.healthData.errors.summary[severity]++;
    this.healthData.errors.summary.total++;

    if (severity === 'critical') {
      this.healthData.metrics.criticalErrors++;
    }

    // Update error rate
    this.updateErrorRate();

    // Check for alerts
    this.checkAlerts(severity, error);

    // Update recommendations
    this.updateRecommendations();
  }

  private detectErrorPattern(error: Error): string | undefined {
    const message = error.message.toLowerCase();
    
    if (message.includes('network') || message.includes('fetch')) return 'network';
    if (message.includes('auth') || message.includes('unauthorized')) return 'authentication';
    if (message.includes('parse') || message.includes('json')) return 'data-parsing';
    if (message.includes('memory') || message.includes('heap')) return 'memory';
    if (message.includes('timeout')) return 'timeout';
    if (message.includes('import') || message.includes('module')) return 'module-loading';
    
    return undefined;
  }

  private updateErrorRate(): void {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    const recentErrors = Array.from(this.errorBuffer.values())
      .filter(error => new Date(error.lastOccurrence).getTime() > oneHourAgo)
      .reduce((sum, error) => sum + error.count, 0);

    // Simulate request count (in production, this would be real metrics)
    const estimatedRequests = 1000; // This should be replaced with actual request metrics
    this.healthData.metrics.errorRate = (recentErrors / estimatedRequests) * 100;
  }

  private checkAlerts(severity: 'critical' | 'high' | 'medium' | 'low', error: Error): void {
    const alerts = this.healthData.alerts;
    
    if (severity === 'critical') {
      const alert = `🚨 CRITICAL ERROR: ${error.message}`;
      if (!alerts.includes(alert)) {
        alerts.push(alert);
        logErrorToProduction('Critical error alert triggered', error);
      }
    }

    if (this.healthData.metrics.errorRate > 5) {
      const alert = `⚠️ HIGH ERROR RATE: ${this.healthData.metrics.errorRate.toFixed(1)}%`;
      if (!alerts.includes(alert)) {
        alerts.push(alert);
        logWarn('High error rate detected', { errorRate: this.healthData.metrics.errorRate });
      }
    }

    // Keep only last 10 alerts
    if (alerts.length > 10) {
      this.healthData.alerts = alerts.slice(-10);
    }
  }

  private updateRecommendations(): void {
    const recommendations: SystemRecommendation[] = [];
    const metrics = this.healthData.metrics;

    if (metrics.criticalErrors > 0) {
      recommendations.push({
        priority: 'critical',
        title: 'Address Critical Errors',
        description: `${metrics.criticalErrors} critical errors detected`,
        action: 'Review error logs and implement fixes immediately',
        automated: false
      });
    }

    if (metrics.errorRate > 2) {
      recommendations.push({
        priority: 'high',
        title: 'Reduce Error Rate',
        description: `Error rate is ${metrics.errorRate.toFixed(1)}% (target: <1%)`,
        action: 'Investigate common error patterns and implement preventive measures',
        automated: false
      });
    }

    if (metrics.responseTime > 1000) {
      recommendations.push({
        priority: 'medium',
        title: 'Optimize Performance',
        description: `Average response time is ${metrics.responseTime}ms`,
        action: 'Review slow endpoints and optimize database queries',
        automated: false
      });
    }

    if (metrics.memoryUsage > 80) {
      recommendations.push({
        priority: 'high',
        title: 'Memory Usage Alert',
        description: `Memory usage at ${metrics.memoryUsage.toFixed(1)}%`,
        action: 'Check for memory leaks and optimize resource usage',
        automated: false
      });
    }

    // Add automated recommendations
    const topErrors = this.getTopErrors();
    const networkErrors = topErrors.filter(e => e.pattern === 'network').length;
    if (networkErrors > 5) {
      recommendations.push({
        priority: 'medium',
        title: 'Network Error Pattern Detected',
        description: `${networkErrors} network-related errors detected`,
        action: 'Implement retry logic and better network error handling',
        automated: true
      });
    }

    this.healthData.recommendations = recommendations.slice(0, 10);
  }

  private getTopErrors(): TopError[] {
    return Array.from(this.errorBuffer.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }

  private generateHealthReport(): void {
    const uptime = (Date.now() - this.startTime) / 1000;
    const avgResponseTime = this.performanceMetrics.length > 0 
      ? this.performanceMetrics.reduce((a, b) => a + b, 0) / this.performanceMetrics.length 
      : 0;
    const avgMemoryUsage = this.memoryReadings.length > 0
      ? this.memoryReadings.reduce((a, b) => a + b, 0) / this.memoryReadings.length
      : 0;

    this.healthData.metrics.uptime = uptime;
    this.healthData.metrics.responseTime = avgResponseTime;
    this.healthData.metrics.memoryUsage = avgMemoryUsage;
    this.healthData.metrics.lastUpdated = new Date().toISOString();

    this.healthData.errors.topErrors = this.getTopErrors();

    this.calculateHealthScore();

    logInfo('Health report generated', {
      score: this.healthData.metrics.score,
      status: this.healthData.metrics.status,
      errorRate: this.healthData.metrics.errorRate,
      uptime: Math.floor(uptime / 3600) + ' hours'
    });
  }

  public getHealthData(): HealthData {
    this.generateHealthReport();
    return { ...this.healthData };
  }

  public exportHealthReport(): string {
    const data = this.getHealthData();
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      health: data,
      summary: {
        score: data.metrics.score,
        status: data.metrics.status,
        totalErrors: data.errors.summary.total,
        criticalErrors: data.metrics.criticalErrors,
        uptime: `${Math.floor(data.metrics.uptime / 3600)}h ${Math.floor((data.metrics.uptime % 3600) / 60)}m`,
        recommendations: data.recommendations.length
      }
    }, null, 2);
  }

  public clearAlerts(): void {
    this.healthData.alerts = [];
    logInfo('Health alerts cleared');
  }

  public resetMetrics(): void {
    this.errorBuffer.clear();
    this.healthData = this.initializeHealthData();
    this.performanceMetrics = [];
    this.memoryReadings = [];
    logInfo('Health metrics reset');
  }
}

// Global dashboard instance
const errorReportingDashboard = new ErrorReportingDashboard();

export { 
  errorReportingDashboard,
  ErrorReportingDashboard,
  type HealthData,
  type HealthMetrics,
  type TopError,
  type SystemRecommendation
};

// Enhanced error reporting function
export function reportSystemError(
  error: Error, 
  severity: 'critical' | 'high' | 'medium' | 'low' = 'medium',
  context?: Record<string, unknown>
): void {
  // Report to dashboard
  errorReportingDashboard.reportError(error, severity);
  
  // Log with context
  logErrorToProduction(`System error [${severity}]`, error, context);
} 