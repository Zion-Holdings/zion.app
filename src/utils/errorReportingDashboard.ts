/**
 * Error Reporting Dashboard
 * Provides real-time insights into application health and error trends
 */

import { logAnalyzer } from './logAnalyzer';
import { logInfo } from './productionLogger';

interface DashboardMetrics {
  uptime: number;
  errorRate: number;
  criticalErrors: number;
  responseTime: number;
  memoryUsage: number;
  lastUpdated: Date;
}

interface HealthStatus {
  status: 'healthy' | 'warning' | 'critical';
  score: number;
  issues: string[];
  recommendations: string[];
}

class ErrorReportingDashboard {
  private metrics: DashboardMetrics;
  private startTime: Date;
  private errorCount: number = 0;
  private requestCount: number = 0;
  private responseTimes: number[] = [];

  constructor() {
    this.startTime = new Date();
    this.metrics = {
      uptime: 0,
      errorRate: 0,
      criticalErrors: 0,
      responseTime: 0,
      memoryUsage: 0,
      lastUpdated: new Date()
    };

    // Update metrics every minute
    if (typeof window !== 'undefined') {
      setInterval(() => this.updateMetrics(), 60000);
    }
  }

  recordError(severity: 'low' | 'medium' | 'high' | 'critical'): void {
    this.errorCount++;
    if (severity === 'critical') {
      this.metrics.criticalErrors++;
    }
  }

  recordRequest(responseTime: number): void {
    this.requestCount++;
    this.responseTimes.push(responseTime);
    
    // Keep only last 100 response times
    if (this.responseTimes.length > 100) {
      this.responseTimes = this.responseTimes.slice(-100);
    }
  }

  updateMetrics(): void {
    const now = new Date();
    this.metrics.uptime = now.getTime() - this.startTime.getTime();
    
    if (this.requestCount > 0) {
      this.metrics.errorRate = (this.errorCount / this.requestCount) * 100;
    }

    if (this.responseTimes.length > 0) {
      this.metrics.responseTime = this.responseTimes.reduce((a, b) => a + b, 0) / this.responseTimes.length;
    }

    // Memory usage (if available)
    if (typeof performance !== 'undefined' && (performance as any).memory) {
      this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
    }

    this.metrics.lastUpdated = now;
  }

  getHealthStatus(): HealthStatus {
    const errorAnalysis = logAnalyzer.generateReport();
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check error rate
    if (this.metrics.errorRate > 5) {
      issues.push(`High error rate: ${this.metrics.errorRate.toFixed(1)}%`);
      recommendations.push('Investigate and fix frequently occurring errors');
      score -= 20;
    }

    // Check critical errors
    if (this.metrics.criticalErrors > 0) {
      issues.push(`${this.metrics.criticalErrors} critical errors detected`);
      recommendations.push('Address critical errors immediately');
      score -= 30;
    }

    // Check response time
    if (this.metrics.responseTime > 2000) {
      issues.push(`Slow response time: ${this.metrics.responseTime.toFixed(0)}ms`);
      recommendations.push('Optimize performance bottlenecks');
      score -= 15;
    }

    // Check memory usage
    if (this.metrics.memoryUsage > 100) {
      issues.push(`High memory usage: ${this.metrics.memoryUsage.toFixed(1)}MB`);
      recommendations.push('Review memory leaks and optimize resource usage');
      score -= 10;
    }

    // Add analyzer recommendations
    recommendations.push(...errorAnalysis.recommendations);

    const status: HealthStatus['status'] = 
      score >= 80 ? 'healthy' : 
      score >= 60 ? 'warning' : 
      'critical';

    return {
      status,
      score: Math.max(0, score),
      issues,
      recommendations
    };
  }

  getDashboardData() {
    this.updateMetrics();
    const healthStatus = this.getHealthStatus();
    const errorAnalysis = logAnalyzer.generateReport();
    const errorStats = logAnalyzer.getErrorStats();

    return {
      metrics: this.metrics,
      health: healthStatus,
      errorAnalysis,
      errorStats,
      charts: {
        errorsByCategory: errorStats,
        errorTrends: this.getErrorTrends(),
        responseTimeHistory: this.responseTimes.slice(-20),
      }
    };
  }

  private getErrorTrends(): { timestamp: string; errors: number }[] {
    // This would typically come from a time-series database
    // For now, return mock trend data
    const trends = [];
    const now = new Date();
    
    for (let i = 23; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
      trends.push({
        timestamp: timestamp.toISOString(),
        errors: Math.floor(Math.random() * 10) // Mock data
      });
    }
    
    return trends;
  }

  generateHealthReport(): string {
    const data = this.getDashboardData();
    const uptime = Math.floor(data.metrics.uptime / (1000 * 60 * 60)); // hours
    
    let report = `
# Application Health Report
Generated: ${data.metrics.lastUpdated.toISOString()}

## 🏥 Health Status: ${data.health.status.toUpperCase()}
Score: ${data.health.score}/100

## 📊 Key Metrics
- Uptime: ${uptime} hours
- Error Rate: ${data.metrics.errorRate.toFixed(1)}%
- Critical Errors: ${data.metrics.criticalErrors}
- Avg Response Time: ${data.metrics.responseTime.toFixed(0)}ms
- Memory Usage: ${data.metrics.memoryUsage.toFixed(1)}MB

## 🚨 Issues (${data.health.issues.length})
${data.health.issues.map(issue => `- ${issue}`).join('\n') || '- No issues detected'}

## 💡 Recommendations
${data.health.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🔍 Error Analysis
- Total Error Patterns: ${data.errorAnalysis.summary.total}
- Critical: ${data.errorAnalysis.summary.critical}
- High Priority: ${data.errorAnalysis.summary.high}
- Medium Priority: ${data.errorAnalysis.summary.medium}

## 🔝 Top Errors
${data.errorAnalysis.topErrors.map((error, i) => 
  `${i + 1}. ${error.description} (${error.occurrences} occurrences)`
).join('\n') || 'No recurring errors'}
`;

    logInfo('Health report generated', { 
      status: data.health.status, 
      score: data.health.score,
      issueCount: data.health.issues.length 
    });

    return report.trim();
  }

  // Export dashboard data for external monitoring tools
  exportMetrics(): object {
    const data = this.getDashboardData();
    return {
      timestamp: new Date().toISOString(),
      health: {
        status: data.health.status,
        score: data.health.score
      },
      metrics: data.metrics,
      errors: {
        total: data.errorAnalysis.summary.total,
        critical: data.errorAnalysis.summary.critical,
        rate: data.metrics.errorRate
      }
    };
  }

  reset(): void {
    this.errorCount = 0;
    this.requestCount = 0;
    this.responseTimes = [];
    this.metrics.criticalErrors = 0;
    this.startTime = new Date();
    logAnalyzer.clearHistory();
    logInfo('Dashboard metrics reset');
  }
}

// Global dashboard instance
const errorDashboard = new ErrorReportingDashboard();

export { errorDashboard };
export default errorDashboard; 