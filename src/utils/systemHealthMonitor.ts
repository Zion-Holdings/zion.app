/**
 * Advanced System Health Monitor
 * Real-time monitoring, analysis, and automated issue detection
 */

import { logInfo, logWarn, logErrorToProduction } from './productionLogger';
import { logDashboard } from './logDashboard';
import { logManagement } from './logManagement';
import { advancedLogCollector } from './advancedLogCollector';

export interface SystemHealth {
  overall: 'excellent' | 'good' | 'warning' | 'critical';
  score: number; // 0-100
  components: {
    logging: HealthComponent;
    performance: HealthComponent;
    errors: HealthComponent;
    memory: HealthComponent;
    build: HealthComponent;
  };
  alerts: SystemAlert[];
  recommendations: string[];
  lastUpdated: string;
}

export interface HealthComponent {
  status: 'healthy' | 'warning' | 'critical';
  score: number;
  details: string[];
  metrics: Record<string, number>;
}

export interface SystemAlert {
  id: string;
  type: 'performance' | 'error' | 'memory' | 'build' | 'security';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  resolved: boolean;
  context?: Record<string, unknown>;
}

class SystemHealthMonitor {
  private alerts: SystemAlert[] = [];
  private healthHistory: Array<{ timestamp: string; score: number }> = [];
  private monitoring = false;
  private monitoringInterval?: NodeJS.Timeout;

  /**
   * Start continuous health monitoring
   */
  startMonitoring(intervalMs = 60000): void {
    if (this.monitoring) {
      logWarn('Health monitoring is already running');
      return;
    }

    this.monitoring = true;
    this.monitoringInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        logErrorToProduction('Error during health monitoring', error);
      }
    }, intervalMs);

    logInfo('System health monitoring started', { intervalMs });
  }

  /**
   * Stop health monitoring
   */
  stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = undefined;
    }
    this.monitoring = false;
    logInfo('System health monitoring stopped');
  }

  /**
   * Perform comprehensive health check
   */
  async performHealthCheck(): Promise<SystemHealth> {
    const timestamp = new Date().toISOString();
    
    try {
      // Gather component health data
      const [
        loggingHealth,
        performanceHealth,
        errorHealth,
        memoryHealth,
        buildHealth
      ] = await Promise.all([
        this.checkLoggingHealth(),
        this.checkPerformanceHealth(),
        this.checkErrorHealth(),
        this.checkMemoryHealth(),
        this.checkBuildHealth()
      ]);

      // Calculate overall score
      const componentScores = [
        loggingHealth.score,
        performanceHealth.score,
        errorHealth.score,
        memoryHealth.score,
        buildHealth.score
      ];
      const overallScore = componentScores.reduce((sum, score) => sum + score, 0) / componentScores.length;

      // Determine overall status
      let overallStatus: SystemHealth['overall'] = 'excellent';
      if (overallScore < 60) overallStatus = 'critical';
      else if (overallScore < 75) overallStatus = 'warning';
      else if (overallScore < 90) overallStatus = 'good';

      // Generate recommendations
      const recommendations = this.generateRecommendations({
        logging: loggingHealth,
        performance: performanceHealth,
        errors: errorHealth,
        memory: memoryHealth,
        build: buildHealth
      });

      // Store health history
      this.healthHistory.push({ timestamp, score: overallScore });
      if (this.healthHistory.length > 100) {
        this.healthHistory = this.healthHistory.slice(-100);
      }

      const health: SystemHealth = {
        overall: overallStatus,
        score: Math.round(overallScore),
        components: {
          logging: loggingHealth,
          performance: performanceHealth,
          errors: errorHealth,
          memory: memoryHealth,
          build: buildHealth
        },
        alerts: this.getActiveAlerts(),
        recommendations,
        lastUpdated: timestamp
      };

      // Check for new alerts
      await this.checkForAlerts(health);

      logInfo('Health check completed', { 
        score: health.score, 
        status: health.overall,
        alertCount: health.alerts.length 
      });

      return health;
    } catch (error) {
      logErrorToProduction('Failed to perform health check', error);
      throw error;
    }
  }

  /**
   * Get current system health status
   */
  async getHealthStatus(): Promise<SystemHealth> {
    return this.performHealthCheck();
  }

  /**
   * Get health trends over time
   */
  getHealthTrends(): Array<{ timestamp: string; score: number }> {
    return [...this.healthHistory];
  }

  /**
   * Create a new alert
   */
  createAlert(
    type: SystemAlert['type'],
    severity: SystemAlert['severity'],
    message: string,
    context?: Record<string, unknown>
  ): string {
    const alert: SystemAlert = {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      severity,
      message,
      timestamp: new Date().toISOString(),
      resolved: false,
      context
    };

    this.alerts.unshift(alert);
    
    // Keep only last 50 alerts
    if (this.alerts.length > 50) {
      this.alerts = this.alerts.slice(0, 50);
    }

    logWarn(`System alert created: ${message}`, { 
      alertId: alert.id, 
      type, 
      severity,
      context 
    });

    return alert.id;
  }

  /**
   * Resolve an alert
   */
  resolveAlert(alertId: string): boolean {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      logInfo(`Alert resolved: ${alert.message}`, { alertId });
      return true;
    }
    return false;
  }

  /**
   * Get active (unresolved) alerts
   */
  getActiveAlerts(): SystemAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  /**
   * Generate system health report
   */
  async generateHealthReport(): Promise<string> {
    const health = await this.getHealthStatus();
    const trends = this.getHealthTrends();
    
    let trendText = 'Insufficient data';
    if (trends.length > 5) {
      const latest = trends[trends.length - 1];
      const earlier = trends[trends.length - 6];
      if (latest && earlier) {
        trendText = `Trending ${latest.score > earlier.score ? '↗ Up' : '↘ Down'}`;
      } else {
        trendText = 'Trend data incomplete';
      }
    }

    return `
# 🏥 System Health Report
Generated: ${new Date().toISOString()}

## 📊 Overall Status: ${health.overall.toUpperCase()} (${health.score}/100)
${trendText}

## 🔧 Component Health
- 📝 **Logging**: ${health.components.logging.status} (${health.components.logging.score}/100)
- ⚡ **Performance**: ${health.components.performance.status} (${health.components.performance.score}/100)
- 🚨 **Error Rate**: ${health.components.errors.status} (${health.components.errors.score}/100)
- 💾 **Memory**: ${health.components.memory.status} (${health.components.memory.score}/100)
- 🏗️ **Build**: ${health.components.build.status} (${health.components.build.score}/100)

## 🚨 Active Alerts (${health.alerts.length})
${health.alerts.map(alert => 
  `- [${alert.severity.toUpperCase()}] ${alert.message} (${alert.timestamp})`
).join('\n') || 'No active alerts'}

## 💡 Recommendations
${health.recommendations.map(rec => `- ${rec}`).join('\n') || 'No recommendations at this time'}

## 📈 Recent Performance
${trends.slice(-5).map(t => 
  `- ${new Date(t.timestamp).toLocaleTimeString()}: ${t.score}/100`
).join('\n') || 'No trend data available'}

---
*Report generated by Advanced System Health Monitor*
    `.trim();
  }

  // Private methods for health checks

  private async checkLoggingHealth(): Promise<HealthComponent> {
    try {
      const metrics = await logDashboard.getDashboardMetrics();
      const logs = advancedLogCollector.getCollectedLogs();
      
      let score = 100;
      const details: string[] = [];
      
      // Check error rate
      if (metrics.errorRate > 10) {
        score -= 30;
        details.push(`High error rate: ${metrics.errorRate.toFixed(2)}%`);
      } else if (metrics.errorRate > 5) {
        score -= 15;
        details.push(`Elevated error rate: ${metrics.errorRate.toFixed(2)}%`);
      }
      
      // Check log volume
      if (metrics.logVelocity > 1000) {
        score -= 20;
        details.push(`Very high log volume: ${metrics.logVelocity} logs/min`);
      }
      
      // Check system health
      if (metrics.systemHealth === 'critical') {
        score -= 40;
        details.push('System marked as critical');
      } else if (metrics.systemHealth === 'warning') {
        score -= 20;
        details.push('System has warnings');
      }

      return {
        status: score >= 80 ? 'healthy' : score >= 60 ? 'warning' : 'critical',
        score,
        details,
        metrics: {
          errorRate: metrics.errorRate,
          logVelocity: metrics.logVelocity,
          totalLogs: logs.length
        }
      };
    } catch (error) {
      return {
        status: 'critical',
        score: 0,
        details: ['Failed to check logging health'],
        metrics: {}
      };
    }
  }

  private async checkPerformanceHealth(): Promise<HealthComponent> {
    try {
      const metrics = await logDashboard.getDashboardMetrics();
      
      let score = 100;
      const details: string[] = [];
      
      // Check response time
      if (metrics.avgResponseTime > 2000) {
        score -= 30;
        details.push(`Slow response time: ${metrics.avgResponseTime.toFixed(0)}ms`);
      } else if (metrics.avgResponseTime > 1000) {
        score -= 15;
        details.push(`Elevated response time: ${metrics.avgResponseTime.toFixed(0)}ms`);
      }

      return {
        status: score >= 80 ? 'healthy' : score >= 60 ? 'warning' : 'critical',
        score,
        details,
        metrics: {
          avgResponseTime: metrics.avgResponseTime
        }
      };
    } catch (error) {
      return {
        status: 'warning',
        score: 70,
        details: ['Performance metrics unavailable'],
        metrics: {}
      };
    }
  }

  private async checkErrorHealth(): Promise<HealthComponent> {
    try {
      const metrics = await logDashboard.getDashboardMetrics();
      
      let score = 100;
      const details: string[] = [];
      
      // Check error count and rate
      if (metrics.errorCount > 50) {
        score -= 40;
        details.push(`High error count: ${metrics.errorCount}`);
      } else if (metrics.errorCount > 20) {
        score -= 20;
        details.push(`Elevated error count: ${metrics.errorCount}`);
      }

      return {
        status: score >= 80 ? 'healthy' : score >= 60 ? 'warning' : 'critical',
        score,
        details,
        metrics: {
          errorCount: metrics.errorCount,
          errorRate: metrics.errorRate
        }
      };
    } catch (error) {
      return {
        status: 'critical',
        score: 0,
        details: ['Failed to check error health'],
        metrics: {}
      };
    }
  }

  private async checkMemoryHealth(): Promise<HealthComponent> {
    try {
      const metrics = await logDashboard.getDashboardMetrics();
      
      let score = 100;
      const details: string[] = [];
      
      // Check memory usage
      if (metrics.memoryUsage > 90) {
        score -= 40;
        details.push(`Critical memory usage: ${metrics.memoryUsage.toFixed(1)}%`);
      } else if (metrics.memoryUsage > 80) {
        score -= 20;
        details.push(`High memory usage: ${metrics.memoryUsage.toFixed(1)}%`);
      } else if (metrics.memoryUsage > 70) {
        score -= 10;
        details.push(`Elevated memory usage: ${metrics.memoryUsage.toFixed(1)}%`);
      }

      return {
        status: score >= 80 ? 'healthy' : score >= 60 ? 'warning' : 'critical',
        score,
        details,
        metrics: {
          memoryUsage: metrics.memoryUsage
        }
      };
    } catch (error) {
      return {
        status: 'warning',
        score: 75,
        details: ['Memory metrics unavailable'],
        metrics: {}
      };
    }
  }

  private async checkBuildHealth(): Promise<HealthComponent> {
    try {
      // Check if build files exist and are recent
      const fs = await import('fs').then(m => m.promises);
      
      let score = 100;
      const details: string[] = [];
      
      try {
        const buildStat = await fs.stat('.next');
        const buildAge = Date.now() - buildStat.mtime.getTime();
        const hoursOld = buildAge / (1000 * 60 * 60);
        
        if (hoursOld > 24) {
          score -= 20;
          details.push(`Build is ${hoursOld.toFixed(1)} hours old`);
        }
        
        details.push('Build files present and accessible');
      } catch {
        score -= 50;
        details.push('Build files not found or inaccessible');
      }

      return {
        status: score >= 80 ? 'healthy' : score >= 60 ? 'warning' : 'critical',
        score,
        details,
        metrics: {}
      };
    } catch (error) {
      return {
        status: 'warning',
        score: 70,
        details: ['Build health check unavailable'],
        metrics: {}
      };
    }
  }

  private generateRecommendations(components: SystemHealth['components']): string[] {
    const recommendations: string[] = [];

    if (components.errors.score < 80) {
      recommendations.push('🚨 Investigate and resolve error patterns');
    }

    if (components.performance.score < 80) {
      recommendations.push('⚡ Optimize performance bottlenecks');
    }

    if (components.memory.score < 80) {
      recommendations.push('💾 Review memory usage and optimize');
    }

    if (components.logging.score < 80) {
      recommendations.push('📝 Review logging configuration and volume');
    }

    if (components.build.score < 80) {
      recommendations.push('🏗️ Check build process and update if needed');
    }

    if (recommendations.length === 0) {
      recommendations.push('✅ System is performing optimally');
    }

    return recommendations;
  }

  private async checkForAlerts(health: SystemHealth): Promise<void> {
    // Create alerts for critical issues
    if (health.score < 60 && !this.hasActiveAlert('critical-health')) {
      this.createAlert(
        'performance',
        'critical',
        `System health is critical: ${health.score}/100`,
        { healthScore: health.score }
      );
    }

    // Alert on component failures
    for (const [component, data] of Object.entries(health.components)) {
      if (data.status === 'critical' && !this.hasActiveAlert(`${component}-critical`)) {
        this.createAlert(
          component as SystemAlert['type'],
          'high',
          `${component} component is critical: ${data.score}/100`,
          { component, score: data.score, details: data.details }
        );
      }
    }
  }

  private hasActiveAlert(pattern: string): boolean {
    return this.getActiveAlerts().some(alert => 
      alert.message.toLowerCase().includes(pattern.toLowerCase())
    );
  }
}

// Export singleton instance
export const systemHealthMonitor = new SystemHealthMonitor();

// Auto-start monitoring in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  systemHealthMonitor.startMonitoring(120000); // Check every 2 minutes in production
} 