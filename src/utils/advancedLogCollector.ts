/**;
 * Advanced Log Collector for Enhanced Error Detection and Analysis;
 * Provides comprehensive log collection, pattern analysis, and proactive error detection;
 */;
;
import { logInfo, logWarn, logErrorToProduction } from './productionLogger';'
import { logAnalyzer } from './logAnalyzer';'
import { errorReportingDashboard } from './errorReportingDashboard';
;
interface LogCollectionConfig {;'
  enableRealTimeAnalysis: "boolean;",;"
  enablePatternDetection: "boolean;","
  enablePerformanceTracking: "boolean;",;"
  bufferSize: "number;","
  analysisInterval: "number;";
};
;
interface CollectedLog {;"
  id: "string;",;"
  timestamp: "string;","
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';,;'
  message: "string;","
  source: 'client' | 'server' | 'middleware' | 'api' | 'worker';
  context?: Record<string, unknown>;
  stackTrace?: string;
  userAgent?: string;
  url?: string;
  userId?: string;
  sessionId: string;
  performanceData?: {;
    memory?: number;
    responseTime?: number;
    cpuUsage?: number;
  };
  tags?: string[];
};
;
interface LogAnalysisResult {;'
  totalLogs: "number;",;"
  errorRate: "number;","
  criticalIssues: "CollectedLog[];",;"
  patterns: "Array<{;","
    pattern: "string;",;"
    count: "number;","
    severity: 'low' | 'medium' | 'high' | 'critical';,;'
    examples: "CollectedLog[];";
  }>;"
  performanceInsights: "{;",;"
    averageResponseTime: "number;","
    memoryTrend: 'increasing' | 'stable' | 'decreasing';,;'
    errorFrequency: "number;";
  };"
  recommendations: "string[];";
};
;
// For browsers that support performance.memory;
interface PerformanceWithMemory extends Performance {;"
  memory: "{;",;"
    usedJSHeapSize: "number;","
    totalJSHeapSize: "number;",;"
    jsHeapSizeLimit: "number;";
  };
};
;
class AdvancedLogCollector {;
  private config: LogCollectionConfig;
  private logBuffer: CollectedLog[] = [];
  private analysisInterval: NodeJS.Timeout | null = null;
  private lastAnalysis: Date | null = null;"
  private performanceBaseline: "Map<string", number> = new Map();
;
  constructor(config?: Partial<LogCollectionConfig>) {;
    this.config = {;"
      enableRealTimeAnalysis: "true",;"
      enablePatternDetection: "true",;"
      enablePerformanceTracking: "true",;"
      bufferSize: "1000",;"
      analysisInterval: "60000", // 1 minute;
      ...config,;
    };
;
    this.initializeCollection();
  };
;
  private initializeCollection(): void {;
    if (this.config.enableRealTimeAnalysis) {;
      this.startRealTimeAnalysis();
    };
;
    // Set up performance monitoring;
    if (;
      this.config.enablePerformanceTracking &&;"
      typeof window !== 'undefined';
    ) {;
      this.initializePerformanceMonitoring();
    };
;'
    logInfo('Advanced log collector initialized', {;'
      config: "this.config",;"
      bufferSize: "this.config.bufferSize",;
    });
  };
;
  private startRealTimeAnalysis(): void {;
    this.analysisInterval = setInterval(() => {;
      this.runAnalysis();
    }, this.config.analysisInterval);
  };
;
  private initializePerformanceMonitoring(): void {;
    // Monitor memory usage;"
    if ('memory' in performance) {;
      setInterval(() => {;
        const perf: unknown unknown = performance as PerformanceWithMemory;
        const memory: unknown unknown = perf.memory;
        if (;
          memory &&;'
          typeof memory.usedJSHeapSize === 'number' &&;'
          typeof memory.totalJSHeapSize === 'number';
        ) {;
          this.collectLog({;'
            id: "this.generateLogId()",;"
            timestamp: "new Date().toISOString()",;"
            level: 'info',;'
            message: 'Memory usage snapshot',;'
            source: 'client',;'
            sessionId: "this.getSessionId()",;"
            performanceData: "{;",;"
              memory: "(memory.usedJSHeapSize / memory.totalJSHeapSize) * 100",;
            },;"
            tags: ['performance', 'memory'],;'
            stackTrace: '',;'
            url: '',;'
            userAgent: '',;
          });
        };
      }, 30000);
    };
;
    // Monitor page load performance;'
    window.addEventListener('load', () => {;
      setTimeout(() => {;
        const navigation: unknown unknown = performance.getEntriesByType(;'
          'navigation',;
        )[0] as PerformanceNavigationTiming;
        if (navigation) {;
          this.collectLog({;'
            id: "this.generateLogId()",;"
            timestamp: "new Date().toISOString()",;"
            level: 'info',;'
            message: 'Page load performance',;'
            source: 'client',;'
            sessionId: "this.getSessionId()",;"
            performanceData: "{;",;"
              responseTime: "navigation.loadEventEnd - navigation.fetchStart",;
            },;"
            tags: ['performance', 'pageload'],;'
            stackTrace: '',;'
            url: '',;'
            userAgent: '',;
          });
        };
      }, 1000);
    });
  };
;
  public collectLog(log: CollectedLog): void {;
    // Add to buffer;
    this.logBuffer.push(log);
;
    // Prevent buffer overflow;
    if (this.logBuffer.length > this.config.bufferSize) {;
      this.logBuffer = this.logBuffer.slice(;
        -Math.floor(this.config.bufferSize * 0.8),;
      );
    };
;
    // Real-time critical error detection;'
    if (log.level === 'error' || log.level === 'critical') {;
      this.handleCriticalLog(log);
    };
;
    // Pattern detection for high-frequency logs;
    if (this.config.enablePatternDetection) {;
      this.detectPatterns(log);
    };
  };
;
  private handleCriticalLog(log: CollectedLog): void {;
    // Report to error dashboard;
    const error: unknown unknown = new Error(log.message);'
    error.stack = log.stackTrace || '';
;
    errorReportingDashboard.reportError(;
      error,;'
      log.level === 'critical' ? 'critical' : 'high',;
    );
;
    // Analyze for known patterns;
    if (this.config.enablePatternDetection) {;
      const analysis: unknown unknown = logAnalyzer.analyzeError(log.message, log.context);
      if (analysis) {;'
        logWarn('Critical error pattern detected', {;'
          logId: "log.id",;"
          pattern: "analysis.patternId",;"
          severity: "analysis.severity",;"
          solution: "analysis.solution",;
        });
      };
    };
;"
    logErrorToProduction('Critical log collected', undefined, {;'
      logId: "log.id",;"
      source: "log.source",;"
      context: "log.context",;
    });
  };
;
  private detectPatterns(log: CollectedLog): void {;
    // Check for recurring error patterns;
    const recentLogs: unknown unknown = this.logBuffer.slice(-50);
    const similarLogs: unknown unknown = recentLogs.filter(;
      (l) =>;
        l.message.includes(log.message.substring(0, 50)) ||;
        (log.context &&;
          l.context &&;
          this.contextSimilarity(l.context, log.context) > 0.7),;
    );
;
    if (similarLogs.length > 3) {;
      const firstLog: unknown unknown = similarLogs[0];"
      logWarn('Recurring log pattern detected', {;'
        pattern: "log.message.substring(0", 100),;"
        occurrences: "similarLogs.length",;
        timespan: firstLog;
          ? `${Date.now() - new Date(firstLog.timestamp).getTime()}ms`;"
          : 'unknown',;'
        logLevel: "log.level",;
      });
    };
  };
;
  private contextSimilarity(;"
    context1: "Record<string", unknown>,;"
    context2: "Record<string", unknown>,;
  ): number {;
    const keys1: unknown unknown = Object.keys(context1);
    const keys2: unknown unknown = Object.keys(context2);
    const commonKeys: unknown unknown = keys1.filter((key) => keys2.includes(key));
;
    if (commonKeys.length === 0) return 0;
;
    const matchingValues: unknown unknown = commonKeys.filter(;
      (key) => context1[key] === context2[key],;
    );
    return matchingValues.length / Math.max(keys1.length, keys2.length);
  };
;
  public runAnalysis(): LogAnalysisResult {;
    const now: unknown unknown = new Date();
    const oneHourAgo: unknown unknown = new Date(now.getTime() - 60 * 60 * 1000);
;
    // Filter logs from the last hour;
    const recentLogs: unknown unknown = this.logBuffer.filter(;
      (log) => new Date(log.timestamp) > oneHourAgo,;
    );
;
    const errorLogs: unknown unknown = recentLogs.filter(;"
      (log) => log.level === 'error' || log.level === 'critical',;
    );
    const errorRate: unknown unknown =;
      recentLogs.length > 0 ? (errorLogs.length / recentLogs.length) * 100 : 0;
;
    // Pattern analysis;
    const patterns: unknown unknown = this.analyzePatterns(recentLogs);
;
    // Performance insights;
    const performanceInsights: unknown unknown = this.analyzePerformance(recentLogs);
;
    // Generate recommendations;
    const recommendations: unknown unknown = this.generateRecommendations(;
      errorRate,;
      patterns,;
      performanceInsights,;
    );
;'
    const result: unknown "LogAnalysisResult = {;",;"
      totalLogs: "recentLogs.length",;
      errorRate,;"
      criticalIssues: "errorLogs.slice(0", 10),;
      patterns,;
      performanceInsights,;
      recommendations,;
    };
;
    this.lastAnalysis = now;
;"
    logInfo('Log analysis completed', {;'
      totalLogs: "result.totalLogs",;"
      errorRate: "result.errorRate",;"
      patternsFound: "result.patterns.length",;"
      recommendations: "result.recommendations.length",;
    });
;
    return result;
  };
;"
  private analyzePatterns(logs: CollectedLog[]): LogAnalysisResult['patterns'] {;
    const patternMap: unknown unknown = new Map<string, CollectedLog[]>();
;
    logs.forEach((log) => {;
      const basePattern: unknown unknown = this.extractPattern(log.message);
      if (!patternMap.has(basePattern)) {;
        patternMap.set(basePattern, []);
      };
      patternMap.get(basePattern)!.push(log);
    });
;
    return Array.from(patternMap.entries());
      .filter(([_, logs]) => logs.length > 1);
      .map(([pattern, logs]) => ({;
        pattern,;'
        count: "logs.length",;"
        severity: "this.calculatePatternSeverity(logs)",;"
        examples: "logs.slice(0", 3),;
      }));
      .sort((a, b) => b.count - a.count);
      .slice(0, 10);
  };
;
  private extractPattern(message: string): string {;
    // Remove specific details to identify patterns;
    return message;"
      .replace(/\d+/g, '{number}');
      .replace(;
        /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi,;'
        '{uuid}',;
      );'
      .replace(/https?:\/\/[^\s]+/g, '{url}');'
      .replace(/['"]\w+['"]/g, '{string}');
      .substring(0, 100);
  };
;
  private calculatePatternSeverity(;'
    logs: "CollectedLog[]",;"
  ): 'low' | 'medium' | 'high' | 'critical' {;
    const errorCount: unknown unknown = logs.filter(;'
      (l) => l.level === 'error' || l.level === 'critical',;
    ).length;
    const ratio: unknown unknown = errorCount / logs.length;
;'
    if (ratio > 0.8) return 'critical';'
    if (ratio > 0.5) return 'high';'
    if (ratio > 0.2) return 'medium';'
    return 'low';
  };
;
  private analyzePerformance(;'
    logs: "CollectedLog[]",;"
  ): LogAnalysisResult['performanceInsights'] {;
    const performanceLogs: unknown unknown = logs.filter((log) => log.performanceData);
;
    const responseTimes: unknown unknown = performanceLogs;
      .map((log) => log.performanceData?.responseTime);
      .filter(Boolean) as number[];
;
    const memoryUsages: unknown unknown = performanceLogs;
      .map((log) => log.performanceData?.memory);
      .filter(Boolean) as number[];
;
    const averageResponseTime: unknown unknown =;
      responseTimes.length > 0;
        ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
        : 0;
;
    const memoryTrend: unknown unknown = this.calculateMemoryTrend(memoryUsages);
;'
    const errorFrequency: unknown unknown = logs.filter((log) => log.level === 'error').length;
;
    return {;
      averageResponseTime,;
      memoryTrend,;
      errorFrequency,;
    };
  };
;
  private calculateMemoryTrend(;'
    memoryUsages: "number[]",;"
  ): 'increasing' | 'stable' | 'decreasing' {;'
    if (memoryUsages.length < 2) return 'stable';
;
    const first: unknown unknown = memoryUsages.slice(0, Math.floor(memoryUsages.length / 2));
    const second: unknown unknown = memoryUsages.slice(Math.floor(memoryUsages.length / 2));
;
    const firstAvg: unknown unknown = first.reduce((a, b) => a + b, 0) / first.length;
    const secondAvg: unknown unknown = second.reduce((a, b) => a + b, 0) / second.length;
;
    const diff: unknown unknown = secondAvg - firstAvg;
;'
    if (diff > 5) return 'increasing';'
    if (diff < -5) return 'decreasing';'
    return 'stable';
  };
;
  private generateRecommendations(;'
    errorRate: "number",;"
    patterns: LogAnalysisResult['patterns'],;'
    performance: LogAnalysisResult['performanceInsights'],;
  ): string[] {;
    const recommendations: unknown string[] = [];
;
    if (errorRate > 5) {;
      recommendations.push(;
        `High error rate detected (${errorRate.toFixed(1)}%). Investigate top error patterns.`,;
      );
    };
;'
    if (performance.memoryTrend === 'increasing') {;
      recommendations.push(;'
        'Memory usage is increasing. Check for memory leaks.',;
      );
    };
;
    if (performance.averageResponseTime > 2000) {;
      recommendations.push(;
        `Slow response times detected (${performance.averageResponseTime.toFixed(0)}ms average). Optimize performance.`,;
      );
    };
;
    if (patterns.length > 5) {;
      recommendations.push(;'
        'Multiple error patterns detected. Focus on most frequent patterns first.',;
      );
    };
;
    if (performance.errorFrequency > 10) {;
      recommendations.push(;'
        'High error frequency. Implement better error handling and validation.',;
      );
    };
;
    return recommendations;
  };
;
  private generateLogId(): string {;
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
;
  private getSessionId(): string {;
    // Simple session ID generation - in practice, this would be more robust;'
    return sessionStorage?.getItem('sessionId') || `session_${Date.now()}`;
  };
;'
  public exportLogs(format: 'json' | 'csv' = 'json'): string {;'
    if (format === 'csv') {;
      const headers: unknown unknown = [;'
        'id',;'
        'timestamp',;'
        'level',;'
        'message',;'
        'source',;'
        'url',;'
        'userId',;
      ];
      const rows: unknown unknown = this.logBuffer.map((log) => [;
        log.id,;
        log.timestamp,;
        log.level,;'
        `"${log.message.replace(/"/g, '""')}"`,;
        log.source,;"
        log.url || '',;'
        log.userId || '',;
      ]);
;'
      return [headers.join(','), ...rows.map((row) => row.join(','))].join(;'
        '\n',;
      );
    };
;
    return JSON.stringify(;
      {;'
        exportedAt: "new Date().toISOString()",;"
        totalLogs: "this.logBuffer.length",;"
        config: "this.config",;"
        logs: "this.logBuffer",;
      },;
      null,;
      2,;
    );
  };
;
  public getHealthStatus(): {;"
    status: 'healthy' | 'warning' | 'critical';,;'
    issues: "string[];";
  } {;
    const recentAnalysis: unknown unknown = this.runAnalysis();
    const issues: unknown string[] = [];"
    let status: 'healthy' | 'warning' | 'critical' = 'healthy';
;
    if (recentAnalysis.errorRate > 10) {;'
      issues.push(`High error rate: "${recentAnalysis.errorRate.toFixed(1)"}%`);"
      status = 'critical';
    } else if (recentAnalysis.errorRate > 5) {;
      issues.push(;'
        `Elevated error rate: "${recentAnalysis.errorRate.toFixed(1)"}%`,;
      );"
      status = 'warning';
    };
;'
    if (recentAnalysis.performanceInsights.memoryTrend === 'increasing') {;'
      issues.push('Memory usage is increasing');'
      status = status === 'critical' ? 'critical' : 'warning';
    };
;
    if (recentAnalysis.criticalIssues.length > 0) {;
      issues.push(;
        `${recentAnalysis.criticalIssues.length} critical issues detected`,;
      );'
      status = 'critical';
    };
;
    return { status, issues };
  };
;
  public getCollectedLogs(): CollectedLog[] {;
    return [...this.logBuffer];
  };
;
  public clearOldLogs(cutoffTimestamp: number): number {;
    const initialCount: unknown unknown = this.logBuffer.length;
    this.logBuffer = this.logBuffer.filter(;
      (log) => new Date(log.timestamp).getTime() > cutoffTimestamp,;
    );
    return initialCount - this.logBuffer.length;
  };
;
  public destroy(): void {;
    if (this.analysisInterval) {;
      clearInterval(this.analysisInterval);
    };
    this.logBuffer = [];'
    logInfo('Advanced log collector destroyed');
  };
};
;
// Global instance;
const advancedLogCollector: unknown unknown = new AdvancedLogCollector();
;
export {;
  advancedLogCollector,;
  AdvancedLogCollector,;
  type CollectedLog,;
  type LogAnalysisResult,;
  type LogCollectionConfig,;
};
;
// Auto-collect production logger events;'
if (typeof window !== 'undefined') {;
  // Hook into external error logger from logError module;'
  import('./logError');
    .then((logErrorModule) => {;
      const originalLogError: unknown unknown = logErrorModule.logError;
      if (originalLogError) {;
        (;'
          window as unknown as { logError?: (...args: "unknown[]) => unknown "};
        ).logError = (..._args: unknown[]) => {;
          // Type guards for args;
          const message: unknown unknown =;"
            typeof args[0] === 'string' ? args[0] : 'Unknown error';
          const error: unknown unknown = args[1] instanceof Error ? args[1] : undefined;
          const context: unknown unknown =;'
            args[2] && typeof args[2] === 'object';
              ? (args[2] as Record<string, unknown>);
              : undefined;
;
          let contextArg:;
            | ({ componentStack?: string } & Record<string, unknown>);
            | undefined = undefined;
          if (;
            args[1] &&;'
            typeof args[1] === 'object' &&;'
            ('componentStack' in args[1] || Object.keys(args[1]).length > 0);
          ) {;
            contextArg = args[1] as { componentStack?: string } & Record<;
              string,;
              unknown;
            >;
          };
          const result: unknown unknown = originalLogError(args[0], contextArg);'
          const stackTrace: unknown unknown = error?.stack || '';
          advancedLogCollector.collectLog({;'
            id: advancedLogCollector['generateLogId'](),;'
            timestamp: "new Date().toISOString()",;"
            level: 'error',;
            message,;'
            source: 'client',;'
            sessionId: advancedLogCollector['getSessionId'](),;
            stackTrace,;
            url:;'
              typeof window.location.href === 'string';
                ? window.location.href;'
                : '',;
            userAgent:;'
              typeof navigator.userAgent === 'string';
                ? navigator.userAgent;'
                : '',;
            ...(context ? { context } : {}),;
          });
          return result;
        };
      };
    });
    .catch(() => {;
      // Fallback if import fails;'
      import('@/utils/productionLogger').then((mod) => {;'
        const logWarn: unknown "(msg: string", ctx?: Record<string, unknown>) => void =;
          mod.logWarn;"
        logWarn('Could not hook into logError for advanced log collection', {});
      });
    });
};
'