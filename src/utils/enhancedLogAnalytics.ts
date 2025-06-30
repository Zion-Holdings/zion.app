/**
 * Enhanced Log Analytics System
 * Provides comprehensive analytics and insights for error debugging and system health
 */

import { logInfo, logWarn, logErrorToProduction } from './productionLogger';
import { advancedLogCollector } from './advancedLogCollector';

interface ErrorTrend {
  timestamp: string;
  errorCount: number;
  errorRate: number;
  topErrors: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface SystemHealthMetrics {
  timestamp: string;
  memoryUsage: number;
  responseTime: number;
  errorRate: number;
  activeUsers: number;
  systemLoad: number;
}

interface AlertRule {
  id: string;
  name: string;
  condition: string;
  threshold: number;
  enabled: boolean;
  lastTriggered?: string;
  actions: string[];
}

class EnhancedLogAnalytics {
  private errorTrends: ErrorTrend[] = [];
  private healthMetrics: SystemHealthMetrics[] = [];
  private alertRules: AlertRule[] = [];
  private maxHistorySize = 1000;

  constructor() {
    this.initializeDefaultAlerts();
    this.startPeriodicAnalysis();
  }

  private initializeDefaultAlerts(): void {
    this.alertRules = [
      {
        id: 'high-error-rate',
        name: 'High Error Rate',
        condition: 'errorRate > 10',
        threshold: 10,
        enabled: true,
        actions: ['email', 'slack', 'dashboard']
      },
      {
        id: 'memory-leak',
        name: 'Memory Leak Detection',
        condition: 'memoryTrend = increasing AND memoryUsage > 80',
        threshold: 80,
        enabled: true,
        actions: ['email', 'dashboard']
      },
      {
        id: 'slow-response',
        name: 'Slow Response Times',
        condition: 'averageResponseTime > 3000',
        threshold: 3000,
        enabled: true,
        actions: ['slack', 'dashboard']
      }
    ];
  }

  private startPeriodicAnalysis(): void {
    // Run analytics every 5 minutes
    setInterval(() => {
      this.analyzeErrorTrends();
      this.collectHealthMetrics();
      this.checkAlertRules();
    }, 5 * 60 * 1000);

    logInfo('Enhanced log analytics started', {
      alertRules: this.alertRules.length,
      analysisInterval: '5 minutes'
    });
  }

  public analyzeErrorTrends(): ErrorTrend {
    const analysis = advancedLogCollector.runAnalysis();
    const now = new Date().toISOString();
    
    const trend: ErrorTrend = {
      timestamp: now,
      errorCount: analysis.criticalIssues.length,
      errorRate: analysis.errorRate,
      topErrors: analysis.patterns.slice(0, 5).map(p => p.pattern),
      severity: this.calculateTrendSeverity(analysis.errorRate)
    };

    this.errorTrends.push(trend);
    
    // Keep only recent trends
    if (this.errorTrends.length > this.maxHistorySize) {
      this.errorTrends = this.errorTrends.slice(-Math.floor(this.maxHistorySize * 0.8));
    }

    return trend;
  }

  private calculateTrendSeverity(errorRate: number): 'low' | 'medium' | 'high' | 'critical' {
    if (errorRate > 20) return 'critical';
    if (errorRate > 10) return 'high';
    if (errorRate > 5) return 'medium';
    return 'low';
  }

  private collectHealthMetrics(): void {
    const analysis = advancedLogCollector.runAnalysis();
    const now = new Date().toISOString();

    const metrics: SystemHealthMetrics = {
      timestamp: now,
      memoryUsage: this.getMemoryUsage(),
      responseTime: analysis.performanceInsights.averageResponseTime,
      errorRate: analysis.errorRate,
      activeUsers: this.getActiveUsers(),
      systemLoad: this.getSystemLoad()
    };

    this.healthMetrics.push(metrics);

    // Keep only recent metrics
    if (this.healthMetrics.length > this.maxHistorySize) {
      this.healthMetrics = this.healthMetrics.slice(-Math.floor(this.maxHistorySize * 0.8));
    }
  }

  private getMemoryUsage(): number {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      return (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
    }
    return 0;
  }

  private getActiveUsers(): number {
    // This would be implemented with actual user tracking
    // For now, return a placeholder
    return Math.floor(Math.random() * 100) + 1;
  }

  private getSystemLoad(): number {
    // This would be implemented with actual system monitoring
    // For now, return a calculated load based on error rate
    const latestTrend = this.errorTrends[this.errorTrends.length - 1];
    if (!latestTrend) return 0;
    
    return Math.min(latestTrend.errorRate * 2, 100);
  }

  private checkAlertRules(): void {
    const latestMetrics = this.healthMetrics[this.healthMetrics.length - 1];
    const latestTrend = this.errorTrends[this.errorTrends.length - 1];
    
    if (!latestMetrics || !latestTrend) return;

    this.alertRules.forEach(rule => {
      if (!rule.enabled) return;

      let shouldTrigger = false;

      switch (rule.id) {
        case 'high-error-rate':
          shouldTrigger = latestTrend.errorRate > rule.threshold;
          break;
        case 'memory-leak':
          shouldTrigger = latestMetrics.memoryUsage > rule.threshold;
          break;
        case 'slow-response':
          shouldTrigger = latestMetrics.responseTime > rule.threshold;
          break;
      }

      if (shouldTrigger) {
        this.triggerAlert(rule, latestMetrics, latestTrend);
      }
    });
  }

  private triggerAlert(rule: AlertRule, metrics: SystemHealthMetrics, trend: ErrorTrend): void {
    const now = new Date().toISOString();
    
    // Don't spam alerts - only trigger once per hour
    if (rule.lastTriggered) {
      const lastTriggered = new Date(rule.lastTriggered);
      const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
      if (lastTriggered > hourAgo) return;
    }

    rule.lastTriggered = now;

    const alertData = {
      rule: rule.name,
      severity: trend.severity,
      metrics: {
        errorRate: trend.errorRate,
        memoryUsage: metrics.memoryUsage,
        responseTime: metrics.responseTime
      },
      timestamp: now
    };

    logWarn(`Alert triggered: ${rule.name}`, alertData);

    // Execute alert actions
    rule.actions.forEach(action => {
      this.executeAlertAction(action, alertData);
    });
  }

  private executeAlertAction(action: string, alertData: any): void {
    switch (action) {
      case 'dashboard':
        // Update dashboard notification
        this.updateDashboardAlert(alertData);
        break;
      case 'email':
        // Send email notification
        this.sendEmailAlert(alertData);
        break;
      case 'slack':
        // Send Slack notification
        this.sendSlackAlert(alertData);
        break;
    }
  }

  private updateDashboardAlert(alertData: any): void {
    // Store alert in localStorage for dashboard display
    if (typeof window !== 'undefined') {
      const alerts = JSON.parse(localStorage.getItem('dashboard-alerts') || '[]');
      alerts.unshift(alertData);
      localStorage.setItem('dashboard-alerts', JSON.stringify(alerts.slice(0, 50)));
    }
  }

  private sendEmailAlert(alertData: any): void {
    // Implement email notification
    fetch('/api/alerts/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertData)
    }).catch(error => {
      logErrorToProduction('Failed to send email alert', error);
    });
  }

  private sendSlackAlert(alertData: any): void {
    // Implement Slack notification
    fetch('/api/alerts/slack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alertData)
    }).catch(error => {
      logErrorToProduction('Failed to send Slack alert', error);
    });
  }

  public getErrorTrendsSummary(hours: number = 24): {
    totalErrors: number;
    averageErrorRate: number;
    peakErrorRate: number;
    trendDirection: 'improving' | 'stable' | 'degrading';
    mostCommonErrors: string[];
  } {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
    const recentTrends = this.errorTrends.filter(t => new Date(t.timestamp) > cutoff);

    if (recentTrends.length === 0) {
      return {
        totalErrors: 0,
        averageErrorRate: 0,
        peakErrorRate: 0,
        trendDirection: 'stable',
        mostCommonErrors: []
      };
    }

    const totalErrors = recentTrends.reduce((sum, t) => sum + t.errorCount, 0);
    const averageErrorRate = recentTrends.reduce((sum, t) => sum + t.errorRate, 0) / recentTrends.length;
    const peakErrorRate = Math.max(...recentTrends.map(t => t.errorRate));

    // Calculate trend direction
    const firstHalf = recentTrends.slice(0, Math.floor(recentTrends.length / 2));
    const secondHalf = recentTrends.slice(Math.floor(recentTrends.length / 2));
    
    const firstHalfAvg = firstHalf.reduce((sum, t) => sum + t.errorRate, 0) / firstHalf.length;
    const secondHalfAvg = secondHalf.reduce((sum, t) => sum + t.errorRate, 0) / secondHalf.length;
    
    let trendDirection: 'improving' | 'stable' | 'degrading' = 'stable';
    const diff = secondHalfAvg - firstHalfAvg;
    if (diff > 2) trendDirection = 'degrading';
    else if (diff < -2) trendDirection = 'improving';

    // Get most common errors
    const allErrors = recentTrends.flatMap(t => t.topErrors);
    const errorCounts = allErrors.reduce((acc, error) => {
      acc[error] = (acc[error] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const mostCommonErrors = Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([error]) => error);

    return {
      totalErrors,
      averageErrorRate,
      peakErrorRate,
      trendDirection,
      mostCommonErrors
    };
  }

  public getSystemHealthScore(): {
    score: number;
    grade: 'A' | 'B' | 'C' | 'D' | 'F';
    issues: string[];
    recommendations: string[];
  } {
    const latestMetrics = this.healthMetrics[this.healthMetrics.length - 1];
    const latestTrend = this.errorTrends[this.errorTrends.length - 1];
    
    if (!latestMetrics || !latestTrend) {
      return { score: 0, grade: 'F', issues: ['No data available'], recommendations: [] };
    }

    let score = 100;
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Error rate impact (0-40 points)
    if (latestTrend.errorRate > 20) {
      score -= 40;
      issues.push('Critical error rate');
      recommendations.push('Immediate investigation required');
    } else if (latestTrend.errorRate > 10) {
      score -= 25;
      issues.push('High error rate');
      recommendations.push('Review error patterns and implement fixes');
    } else if (latestTrend.errorRate > 5) {
      score -= 10;
      issues.push('Elevated error rate');
      recommendations.push('Monitor error trends closely');
    }

    // Memory usage impact (0-25 points)
    if (latestMetrics.memoryUsage > 90) {
      score -= 25;
      issues.push('Critical memory usage');
      recommendations.push('Investigate memory leaks immediately');
    } else if (latestMetrics.memoryUsage > 80) {
      score -= 15;
      issues.push('High memory usage');
      recommendations.push('Optimize memory usage');
    } else if (latestMetrics.memoryUsage > 70) {
      score -= 5;
      issues.push('Elevated memory usage');
      recommendations.push('Monitor memory trends');
    }

    // Response time impact (0-20 points)
    if (latestMetrics.responseTime > 5000) {
      score -= 20;
      issues.push('Very slow response times');
      recommendations.push('Optimize performance immediately');
    } else if (latestMetrics.responseTime > 3000) {
      score -= 10;
      issues.push('Slow response times');
      recommendations.push('Investigate performance bottlenecks');
    } else if (latestMetrics.responseTime > 2000) {
      score -= 5;
      issues.push('Suboptimal response times');
      recommendations.push('Consider performance optimizations');
    }

    // System load impact (0-15 points)
    if (latestMetrics.systemLoad > 90) {
      score -= 15;
      issues.push('Critical system load');
      recommendations.push('Scale infrastructure or reduce load');
    } else if (latestMetrics.systemLoad > 70) {
      score -= 10;
      issues.push('High system load');
      recommendations.push('Monitor system resources');
    }

    score = Math.max(0, score);

    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';

    return { score, grade, issues, recommendations };
  }

  public exportAnalytics(): string {
    return JSON.stringify({
      exportedAt: new Date().toISOString(),
      errorTrends: this.errorTrends,
      healthMetrics: this.healthMetrics,
      alertRules: this.alertRules,
      summary: {
        errorTrendsSummary: this.getErrorTrendsSummary(),
        systemHealthScore: this.getSystemHealthScore()
      }
    }, null, 2);
  }

  public getRealtimeStatus(): {
    status: 'healthy' | 'warning' | 'critical';
    errorRate: number;
    memoryUsage: number;
    responseTime: number;
    activeAlerts: number;
  } {
    const latestMetrics = this.healthMetrics[this.healthMetrics.length - 1];
    const latestTrend = this.errorTrends[this.errorTrends.length - 1];
    
    if (!latestMetrics || !latestTrend) {
      return {
        status: 'critical',
        errorRate: 0,
        memoryUsage: 0,
        responseTime: 0,
        activeAlerts: 0
      };
    }

    let status: 'healthy' | 'warning' | 'critical' = 'healthy';
    
    if (latestTrend.errorRate > 10 || latestMetrics.memoryUsage > 90 || latestMetrics.responseTime > 5000) {
      status = 'critical';
    } else if (latestTrend.errorRate > 5 || latestMetrics.memoryUsage > 80 || latestMetrics.responseTime > 3000) {
      status = 'warning';
    }

    const activeAlerts = this.alertRules.filter(rule => {
      if (!rule.lastTriggered) return false;
      const lastTriggered = new Date(rule.lastTriggered);
      const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
      return lastTriggered > hourAgo;
    }).length;

    return {
      status,
      errorRate: latestTrend.errorRate,
      memoryUsage: latestMetrics.memoryUsage,
      responseTime: latestMetrics.responseTime,
      activeAlerts
    };
  }
}

// Global instance
const enhancedLogAnalytics = new EnhancedLogAnalytics();

export { enhancedLogAnalytics, EnhancedLogAnalytics };
export type { ErrorTrend, SystemHealthMetrics, AlertRule }; 