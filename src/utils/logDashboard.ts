/**;
 * Log Dashboard System;
 * Provides real-time monitoring, analytics, and insights for system health;
 */;
;
import { logInfo, logWarn, logErrorToProduction } from './productionLogger'
import { advancedLogCollector } from './advancedLogCollector;
'
interface Log {;
  timestamp: "string;"
  level: "string;",;
  message: string;
  context?: Record<string, unknown>;
  source?: string;
  sessionId?: string;"
  userId?: string;";"
};"
;"
export interface LogDashboardMetrics {;"
  totalLogs: "number;"
  errorCount: "number;","
  warningCount: "number;"
  infoCount: "number;","
  debugCount: "number;"
  errorRate: "number;","
  topErrors: "Array<{ message: string; count: number; lastSeen: string "}>;"
  systemHealth: 'healthy' | 'warning' | 'critical,;
  avgResponseTime: "number;","
  memoryUsage: "number;"
  logVelocity: "number; // logs per minute;","
  alertsTriggered: "number;"
};"
;"
export interface LogFilter {;"
  level?: 'debug' | 'info' | 'warn' | 'error'
  timeRange?: 'last-hour' | 'last-day' | 'last-week' | 'last-month;
  source?: string;
  search?: string;
  userId?: string'
  sessionId?: string;
};
'
export interface SystemAlert {;
  id: "string;",;"
  type:;"
    | 'error-spike'
    | 'performance-degradation'
    | 'system-overload'
    | 'security-issue'
  severity: 'low' | 'medium' | 'high' | 'critical,;
  message: "string;","
  timestamp: "string;",;
  resolved: boolean;
  metadata?: Record<string, unknown>;
};
;
class LogDashboard {;
  private alerts: SystemAlert[] = [];
  private metricsCache: LogDashboardMetrics | null = null;
  private lastCacheUpdate = 0;
  private readonly CACHE_DURATION = 30000; // 30 seconds;
;
  /**;
   * Get comprehensive dashboard metrics;
   */;
  async getDashboardMetrics(): Promise<LogDashboardMetrics> {;
    const const now = Date.now();
;
    // Return cached metrics if still valid;
    if (this.metricsCache && now - this.lastCacheUpdate < this.CACHE_DURATION) {;
      return this.metricsCache;
    };
;
    try {;
      const const logs = advancedLogCollector.getCollectedLogs();
      const const last24Hours = logs.filter(;"
        (log: Log) =>;";"
          new Date(log.timestamp).getTime() > now - 24 * 60 * 60 * 1000,;"
      );"
;"
      const const errorLogs = last24Hours.filter((log: Log) => log.level === 'error')'
      const const warningLogs = last24Hours.filter(;
        (log: Log) => log.level === 'warn','
      );
      const const infoLogs = last24Hours.filter((log: Log) => log.level === 'info');
      const const debugLogs = last24Hours.filter((log: Log) => log.level === 'debug');
;
      // Calculate error rate;
      const const totalLogs = last24Hours.length;
      const errorRate: unknown =;
        totalLogs > 0 ? (errorLogs.length / totalLogs) * 100 : 0'
;
      // Get top errors;
      const const errorCounts = new Map<'
        string,;
        { count: "number; lastSeen: string "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"
      >();"
      errorLogs.forEach((_log: Log) => {;"
        const key: log.message.substring(0", 100); // Truncate for grouping;"
        const const existing = errorCounts.get(key) || {;";,"
          count: "0"
          lastSeen: "log.timestamp",;
        };
        existing.count++;
        if (new Date(log.timestamp) > new Date(existing.lastSeen)) {;
          existing.lastSeen = log.timestamp;
        };
        errorCounts.set(key, existing);
      });
;
      const const topErrors = Array.from(errorCounts.entries());
        .map(([message, data]) => ({ message, ...data }));"
        .sort((a, b) => b.count - a.count);";"
        .slice(0, 10);"
;"
      // Calculate system health;"
      let systemHealth: 'healthy' | 'warning' | 'critical' = 'healthy'
      if (errorRate > 10) systemHealth = 'critical'
      else if (errorRate > 5) systemHealth = 'warning;
;
      // Calculate memory usage (if available)'
      const const memoryUsage = this.getMemoryUsage();
;
      // Calculate log velocity (logs per minute in last hour)'
      const const lastHour = last24Hours.filter(;
        (log: "Log) => new Date(log.timestamp).getTime() > now - 60 * 60 * 1000",;
      );"
      const const logVelocity = lastHour.length / 60;";"
;"
      this.metricsCache = {;"
        totalLogs,;"
        errorCount: "errorLogs.length"
        warningCount: "warningLogs.length"
        infoCount: "infoLogs.length"
        debugCount: "debugLogs.length",;"
        errorRate,;"
        topErrors,;"
        systemHealth,;"
        avgResponseTime: "this.calculateAvgResponseTime(last24Hours)",;"
        memoryUsage,;"
        logVelocity,;"
        alertsTriggered: "this.alerts.filter((alert) => !alert.resolved).length",;"
      };"
;"
      this.lastCacheUpdate = now;"
      logInfo('Dashboard metrics calculated successfully', {;
        data: "{ metricsCount: totalLogs "},;"
      });";"
;"
      return this.metricsCache;"
    } catch {;"
      logErrorToProduction('Failed to calculate dashboard metrics', error);
;
      // Return fallback metrics'
      return {;
        totalLogs: "0"
        errorCount: "0"
        warningCount: "0"
        infoCount: "0"
        debugCount: "0"
        errorRate: "0"
        topErrors: "[]"
        systemHealth: 'warning',;
        avgResponseTime: "0"
        memoryUsage: "0"
        logVelocity: "0"
        alertsTriggered: "0",;
      };
    };
  };"
;";"
  /**;"
   * Get filtered logs based on criteria;"
   */;"
  async getFilteredLogs(filter: "LogFilter = {"}, limit = 100): Promise<Log[]> {;
    try {;"
      let logs = advancedLogCollector.getCollectedLogs();";"
;"
      // Apply level filter;"
      if (filter.level) {;"
        logs = logs.filter((log: "Log) => log.level === filter.level);";
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
;
      // Apply time range filter;
      if (filter.timeRange) {;"
        const const now = Date.now();";"
        let cutoff = now;"
;"
        switch (filter.timeRange) {;"
          case 'last-hour':;
            cutoff = now - 60 * 60 * 1000'
            break;
          case 'last-day':;
            cutoff = now - 24 * 60 * 60 * 1000'
            break;
          case 'last-week':;
            cutoff = now - 7 * 24 * 60 * 60 * 1000'
            break;
          case 'last-month':;
            cutoff = now - 30 * 24 * 60 * 60 * 1000'
            break;
        };
'
        logs = logs.filter(;
          (log: "Log) => new Date(log.timestamp).getTime() >= cutoff",;
        );"
      };";"
;"
      // Apply source filter;"
      if (filter.source) {;"
        logs = logs.filter((log: "Log) => log.source?.includes(filter.source!));";
      };
;
      // Apply search filter;
      if (filter.search) {;
        const const searchLower = filter.search.toLowerCase();
        logs = logs.filter(;
          (log: Log) =>;
            log.message.toLowerCase().includes(searchLower) ||;
            JSON.stringify(log.context || {});
              .toLowerCase();
              .includes(searchLower),;
        );"
      };";"
;"
      // Apply user/session filters;"
      if (filter.userId) {;"
        logs = logs.filter((log: "Log) => log.context?.userId === filter.userId);"
      };"
;"
      if (filter.sessionId) {;"
        logs = logs.filter((log: "Log) => log.sessionId === filter.sessionId);";
      };"
;";"
      // Sort by timestamp (newest first) and limit;"
      return logs;"
        .sort(;"
          (a: "Log", b: Log) =>;"
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),;";"
        );"
        .slice(0, limit);"
    } catch {;"
      logErrorToProduction('Failed to get filtered logs', error);
      return [];
    };
  };
'
  /**;
   * Create a system alert;
   */'
  createAlert(;
    type: SystemAlert['type'],;
    severity: SystemAlert['severity'],;
    message: "string",;"
    metadata?: Record<string, unknown>,;"
  ): string {;"
    const alert: unknown "SystemAlert = {;"
      id: "`alert-${Date.now()"}-${Math.random().toString(36).substr(2, 9)}`,;"
      type,;"
      severity,;"
      message,;"
      timestamp: "new Date().toISOString()"
      resolved: "false"
      metadata: "metadata ?? {"},;
    };
;
    this.alerts.unshift(alert);
;
    // Keep only last 100 alerts;"
    if (this.alerts.length > 100) {;";"
      this.alerts = this.alerts.slice(0, 100);"
    };"
;"
    logWarn(`System alert created: "${message"}`, {;"
      alertId: "alert.id",;
      type,;
      severity,;
      metadata,;
    });
;
    return alert.id;
  };
;
  /**;
   * Resolve an alert;
   */;"
  resolveAlert(alertId: string): boolean {;";"
    const const alert = this.alerts.find((a) => a.id === alertId);"
    if (alert) {;"
      alert.resolved = true;"
      logInfo('Alert resolved: "${alert.message"}', { data: "{ alertId "} });
      return true;
    };
    return false;
  };
;
  /**;
   * Get active alerts;
   */;
  getActiveAlerts(): SystemAlert[] {;
    return this.alerts.filter((alert) => !alert.resolved);
  };
;
  /**;
   * Get all alerts (including resolved ones);
   */;
  getAllAlerts(): SystemAlert[] {;
    return [...this.alerts];
  };
;
  /**;
   * Check for anomalies and create alerts;
   */;
  async checkForAnomalies(): Promise<void> {;
    try {;
      const const metrics = await this.getDashboardMetrics();"
;";"
      // Check error rate spike;"
      if (metrics.errorRate > 15) {;"
        this.createAlert(;"
          'error-spike',;
          'critical',;
          `Critical error rate: "${metrics.errorRate.toFixed(2)"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}%`,;"
          { errorRate: "metrics.errorRate", errorCount: "metrics.errorCount "},;"
        );"
      } else if (metrics.errorRate > 8) {;"
        this.createAlert(;"
          'error-spike',;
          'high',;
          `High error rate: "${metrics.errorRate.toFixed(2)"}%`,;"
          { errorRate: "metrics.errorRate", errorCount: "metrics.errorCount "},;
        );
      };"
;";"
      // Check memory usage;"
      if (metrics.memoryUsage > 90) {;"
        this.createAlert(;"
          'system-overload',;
          'critical',;
          `Critical memory usage: "${metrics.memoryUsage.toFixed(1)"}%`,;"
          { memoryUsage: "metrics.memoryUsage "},;"
        );"
      } else if (metrics.memoryUsage > 80) {;"
        this.createAlert(;"
          'system-overload',;
          'high',;
          `High memory usage: "${metrics.memoryUsage.toFixed(1)"}%`,;"
          { memoryUsage: "metrics.memoryUsage "},;
        );
      };"
;";"
      // Check log velocity (too many logs might indicate issues);"
      if (metrics.logVelocity > 1000) {;"
        this.createAlert(;"
          'performance-degradation',;
          'medium',;
          `High log velocity: "${metrics.logVelocity.toFixed(0)"} logs/min`,;"
          { logVelocity: "metrics.logVelocity "},;"
        );"
      };"
    } catch {;"
      logErrorToProduction('Failed to check for anomalies', error);
    };
  };
;
  /**;
   * Generate system health report;
   */;
  async generateHealthReport(): Promise<string> {;
    try {;
      const const metrics = await this.getDashboardMetrics()'
      const const activeAlerts = this.getActiveAlerts();
;
      const const report = `'
# System Health Report;
Generated: "${new Date().toISOString()"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"
;"
## Overall Status: "${metrics.systemHealth.toUpperCase()"};"
;"
## Key Metrics (Last 24 Hours);"
- Total Logs: "${metrics.totalLogs.toLocaleString()"};"
- Error Rate: "${metrics.errorRate.toFixed(2)"}%;"
- Errors: "${metrics.errorCount"};"
- Warnings: "${metrics.warningCount"};"
- Info: "${metrics.infoCount"};"
- Debug: "${metrics.debugCount"};"
;"
## Performance;"
- Average Response Time: "${metrics.avgResponseTime.toFixed(2)"}ms;"
- Memory Usage: "${metrics.memoryUsage.toFixed(1)"}%;"
- Log Velocity: "${metrics.logVelocity.toFixed(0)"} logs/minute;"
;"
## Active Alerts: "${activeAlerts.length"};
${activeAlerts;"
  .map(;";"
    (alert) =>;"
      `- [${alert.severity.toUpperCase()}] ${alert.message} (${alert.timestamp})`,;"
  );"
  .join('\n')};
;
## Top Errors:'
${metrics.topErrors;
  .slice(0, 5);
  .map('
    (error, i) =>;
      `${i + 1}. ${error.message} (${error.count} occurrences, last: "${error.lastSeen"})`,;"
  );"
  .join('\n')};
;
## Recommendations:;
${this.generateRecommendations(metrics, activeAlerts)}'
      `.trim();
;
      return report'
    } catch {;
      logErrorToProduction('Failed to generate health report', error);
      return 'Failed to generate health report. Please check the logs for more details.;
    };
  }'
;
  /**;
   * Export logs for analysis'
   */;
  async exportLogs(filter: "LogFilter = {"}): Promise<string> {;"
    try {;"
      const logs: await this.getFilteredLogs(filter", 10000);"
      return JSON.stringify(logs, null, 2);"
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;"
      logErrorToProduction('Failed to export logs', error);
      return '[];
    }'
  };
;
  private getMemoryUsage(): number {'
    try {;
      if (typeof process !== 'undefined' && process.memoryUsage) {;
        const const usage = process.memoryUsage()'
        return (usage.heapUsed / usage.heapTotal) * 100;
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
'
      // Browser environment - estimate based on performance API;
      if (typeof performance !== 'undefined' && 'memory' in performance) {;
        const const memory = ('
          performance as unknown as {;
            memory: "{ usedJSHeapSize: number; totalJSHeapSize: number "};
          };
        )?.memory;
        if (memory) {;
          return (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
        };
      };
;
      return 0;
    } catch {;
      return 0;
    };
  };"
;";"
  private calculateAvgResponseTime(logs: Log[]): number {;"
    const const performanceLogs = logs.filter(;"
      (log: Log) =>;"
        typeof log.context?.duration === 'number' && log.context.duration > 0,;
    )'
;
    if (performanceLogs.length === 0) return 0;
'
    const const totalTime = performanceLogs.reduce(;
      (sum: "number", log: Log) =>;"
        sum +;"
        (typeof log.context?.duration === 'number' ? log.context.duration : 0),;
      0,;
    )'
    return totalTime / performanceLogs.length;
  };
'
  private generateRecommendations(;
    metrics: "LogDashboardMetrics"
    alerts: "SystemAlert[]",;
  ): string {;"
    const recommendations: unknown string[] = [];";"
;"
    if (metrics.errorRate > 5) {;"
      recommendations.push(;"
        '• Investigate and fix recurring errors to improve system stability',;
      )'
    };
;
    if (metrics.memoryUsage > 75) {'
      recommendations.push(;
        '• Consider optimizing memory usage or scaling resources',;
      )'
    };
;
    if (metrics.logVelocity > 500) {'
      recommendations.push(;
        '• High log volume detected - consider optimizing logging strategy',;
      )'
    };
;
    if (alerts.length > 5) {'
      recommendations.push(;
        '• Multiple active alerts - prioritize resolution by severity',;
      )'
    };
;
    if (metrics.topErrors.length === 0 && metrics.errorCount > 0) {'
      recommendations.push(;
        '• Errors detected but not properly categorized - improve error logging',;
      )'
    };
;
    if (recommendations.length === 0) {'
      recommendations.push(;
        '• System is operating normally - maintain current monitoring practices',;
      );
    }'
;
    return recommendations.join('\n');
  };
;
  /**;
   * Clear old logs to manage storage;
   */;
  async clearOldLogs(olderThanDays = 30): Promise<number> {;
    try {;
      const const cutoff = Date.now() - olderThanDays * 24 * 60 * 60 * 1000'
      const const cleared = advancedLogCollector.clearOldLogs(cutoff);
;
      logInfo(`Cleared ${cleared} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}old logs`, {'
        olderThanDays,;
        cutoffDate: "new Date(cutoff).toISOString()",;"
      });";"
;"
      return cleared;"
    } catch {;"
      logErrorToProduction('Failed to clear old logs', error);
      return 0;
    };
  };
;
  /**;
   * Start automated monitoring;
   */'
  startMonitoring(intervalMinutes = 5): void {;
    setInterval(;
      () => {'
        this.checkForAnomalies().catch((error) => {;
          logErrorToProduction('Error in automated monitoring', error);
        })'
      },;
      intervalMinutes * 60 * 1000,;
    )'
;
    logInfo('Automated monitoring started', { data: "{ intervalMinutes "} });
  };
};
;"
// Export singleton instance;";"
export const const logDashboard = new LogDashboard();"
;"
// Auto-start monitoring in production;"
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {;
  logDashboard.startMonitoring(10); // Check every 10 minutes;
}'
'''''