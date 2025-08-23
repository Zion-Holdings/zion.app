/**
 * Enhanced Error Collection System
 * Provides comprehensive error tracking, categorization, and debugging information
 * for better future debugging and system monitoring
 */

import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { reportErrorToServices } from '@/utils/logError';
import { generateTraceId } from '@/utils/generateTraceId';

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  route?: string;
  component?: string;
  action?: string;
  userAgent?: string;
  timestamp?: string;
  buildVersion?: string;
  feature?: string;
  experimentId?: string;
  [key: string]: unknown;
}

export interface ErrorDetails {
  id: string;
  message: string;
  stack?: string;
  name?: string;
  cause?: unknown;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'user' | 'system' | 'network' | 'validation' | 'auth' | 'payment' | 'performance' | 'security';
  tags: string[];
  context: ErrorContext;
  timestamp: string;
  traceId: string;
  fingerprint?: string;
  reproductionSteps?: string[];
  resolution?: string;
  occurrenceCount: number;
  firstSeen: string;
  lastSeen: string;
}

export interface PerformanceContext {
  memoryUsage?: number;
  cpuUsage?: number;
  networkLatency?: number;
  renderTime?: number;
  bundleSize?: number;
  cacheHits?: number;
  cacheMisses?: number;
}

export interface SystemHealthMetrics {
  uptime: number;
  errorRate: number;
  performanceScore: number;
  memoryPressure: number;
  networkStatus: 'online' | 'offline' | 'slow';
  lastHealthCheck: string;
}

class EnhancedErrorCollector {
  private errors: Map<string, ErrorDetails> = new Map();
  private sessionId: string;
  private performanceObserver?: PerformanceObserver;
  private healthMetrics: SystemHealthMetrics;
  private isInitialized = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.healthMetrics = this.initializeHealthMetrics();
    this.initialize();
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeHealthMetrics(): SystemHealthMetrics {
    return {
      uptime: Date.now(),
      errorRate: 0,
      performanceScore: 100,
      memoryPressure: 0,
      networkStatus: navigator?.onLine ? 'online' : 'offline',
      lastHealthCheck: new Date().toISOString(),
    };
  }

  private initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.setupPerformanceMonitoring();
    this.setupNetworkMonitoring();
    this.setupMemoryMonitoring();
    this.startHealthChecks();
    
    this.isInitialized = true;
    logInfo('Enhanced Error Collector initialized', { sessionId: this.sessionId });
  }

  private setupPerformanceMonitoring(): void {
    if (typeof PerformanceObserver === 'undefined') return;

    try {
      this.performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            if (navEntry.loadEventEnd - navEntry.fetchStart > 5000) {
              this.collectError(
                new Error('Slow page load detected'),
                {
                  severity: 'medium',
                  category: 'performance',
                  tags: ['slow-load', 'performance'],
                  context: {
                    loadTime: navEntry.loadEventEnd - navEntry.fetchStart,
                    route: window.location.pathname,
                  },
                }
              );
            }
          }
        }
      });

      this.performanceObserver.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (error) {
      logWarn('Failed to setup performance monitoring:', { data: error });
    }
  }

  private setupNetworkMonitoring(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('online', () => {
      this.healthMetrics.networkStatus = 'online';
      logInfo('Network status: online');
    });

    window.addEventListener('offline', () => {
      this.healthMetrics.networkStatus = 'offline';
      this.collectError(
        new Error('Network disconnected'),
        {
          severity: 'medium',
          category: 'network',
          tags: ['offline', 'connectivity'],
          context: { event: 'network-offline' },
        }
      );
    });
  }

  private setupMemoryMonitoring(): void {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    setInterval(() => {
      const memory = (performance as any).memory;
      if (memory) {
        const memoryPressure = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        this.healthMetrics.memoryPressure = memoryPressure;

        if (memoryPressure > 0.9) {
          this.collectError(
            new Error('High memory usage detected'),
            {
              severity: 'high',
              category: 'performance',
              tags: ['memory-pressure', 'performance'],
              context: {
                memoryUsage: memory.usedJSHeapSize,
                memoryLimit: memory.jsHeapSizeLimit,
                memoryPressure,
              },
            }
          );
        }
      }
    }, 30000); // Check every 30 seconds
  }

  private startHealthChecks(): void {
    setInterval(() => {
      this.updateHealthMetrics();
    }, 60000); // Update every minute
  }

  private updateHealthMetrics(): void {
    const now = Date.now();
    const uptime = now - this.healthMetrics.uptime;
    const errorCount = Array.from(this.errors.values()).length;
    const errorRate = errorCount / (uptime / 1000 / 60); // errors per minute

    this.healthMetrics = {
      ...this.healthMetrics,
      uptime,
      errorRate,
      lastHealthCheck: new Date().toISOString(),
    };

    // Log health summary
    logInfo('System health check', {
      uptime: Math.round(uptime / 1000 / 60), // minutes
      errorRate: Math.round(errorRate * 100) / 100,
      errorCount,
      memoryPressure: Math.round(this.healthMetrics.memoryPressure * 100),
      networkStatus: this.healthMetrics.networkStatus,
    });
  }

  private generateFingerprint(error: Error, context: ErrorContext): string {
    const key = `${error.name}-${error.message}-${context.component || 'unknown'}-${context.route || 'unknown'}`;
    return btoa(key).replace(/[/+=]/g, '').substring(0, 16);
  }

  private categorizeError(error: Error, context: ErrorContext): {
    severity: ErrorDetails['severity'];
    category: ErrorDetails['category'];
    tags: string[];
  } {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    // Determine severity
    let severity: ErrorDetails['severity'] = 'medium';
    if (message.includes('critical') || message.includes('fatal') || error.name === 'SecurityError') {
      severity = 'critical';
    } else if (message.includes('warning') || message.includes('deprecated')) {
      severity = 'low';
    } else if (message.includes('timeout') || message.includes('failed') || message.includes('cannot')) {
      severity = 'high';
    }

    // Determine category
    let category: ErrorDetails['category'] = 'system';
    if (message.includes('network') || message.includes('fetch') || message.includes('connection')) {
      category = 'network';
    } else if (message.includes('auth') || message.includes('permission') || message.includes('unauthorized')) {
      category = 'auth';
    } else if (message.includes('validation') || message.includes('invalid') || message.includes('required')) {
      category = 'validation';
    } else if (message.includes('payment') || message.includes('stripe') || message.includes('billing')) {
      category = 'payment';
    } else if (message.includes('performance') || message.includes('memory') || message.includes('slow')) {
      category = 'performance';
    } else if (message.includes('security') || message.includes('xss') || message.includes('csrf')) {
      category = 'security';
    } else if (context.component && message.includes('user')) {
      category = 'user';
    }

    // Generate tags
    const tags = [];
    if (context.component) tags.push(`component:${context.component}`);
    if (context.route) tags.push(`route:${context.route}`);
    if (context.feature) tags.push(`feature:${context.feature}`);
    if (error.name !== 'Error') tags.push(`type:${error.name}`);
    tags.push(`category:${category}`);
    tags.push(`severity:${severity}`);

    return { severity, category, tags };
  }

  public collectError(
    error: Error | string,
    options: {
      severity?: ErrorDetails['severity'];
      category?: ErrorDetails['category'];
      tags?: string[];
      context?: ErrorContext;
      reproductionSteps?: string[];
    } = {}
  ): string {
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    const traceId = generateTraceId();
    const timestamp = new Date().toISOString();
    
    const context: ErrorContext = {
      sessionId: this.sessionId,
      route: typeof window !== 'undefined' ? window.location.pathname : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      timestamp,
      buildVersion: process.env.NEXT_PUBLIC_BUILD_VERSION || 'unknown',
      ...options.context,
    };

    const categorization = this.categorizeError(errorObj, context);
    const fingerprint = this.generateFingerprint(errorObj, context);

    let errorDetails: ErrorDetails;
    const existingError = this.errors.get(fingerprint);

    if (existingError) {
      // Update existing error
      errorDetails = {
        ...existingError,
        occurrenceCount: existingError.occurrenceCount + 1,
        lastSeen: timestamp,
        context: { ...existingError.context, ...context },
      };
    } else {
      // Create new error
      errorDetails = {
        id: traceId,
        message: errorObj.message,
        stack: errorObj.stack,
        name: errorObj.name,
        cause: errorObj.cause,
        severity: options.severity || categorization.severity,
        category: options.category || categorization.category,
        tags: [...(options.tags || []), ...categorization.tags],
        context,
        timestamp,
        traceId,
        fingerprint,
        reproductionSteps: options.reproductionSteps || [],
        occurrenceCount: 1,
        firstSeen: timestamp,
        lastSeen: timestamp,
      };
    }

    this.errors.set(fingerprint, errorDetails);

    // Log to existing systems
    logErrorToProduction(errorObj.message, errorObj, context);
    reportErrorToServices(errorObj, context);

    // Create detailed log entry for debugging
    logInfo('Enhanced error collected', {
      errorId: errorDetails.id,
      fingerprint,
      severity: errorDetails.severity,
      category: errorDetails.category,
      occurrences: errorDetails.occurrenceCount,
      tags: errorDetails.tags,
      isNewError: !existingError,
    });

    return traceId;
  }

  public getErrorReport(): {
    summary: {
      totalErrors: number;
      criticalErrors: number;
      recentErrors: number;
      topCategories: { category: string; count: number }[];
      topComponents: { component: string; count: number }[];
    };
    healthMetrics: SystemHealthMetrics;
    recentErrors: ErrorDetails[];
    errorsByCategory: Record<string, ErrorDetails[]>;
  } {
    const errors = Array.from(this.errors.values());
    const oneHourAgo = Date.now() - 60 * 60 * 1000;

    // Calculate summary
    const criticalErrors = errors.filter(e => e.severity === 'critical').length;
    const recentErrors = errors.filter(e => new Date(e.lastSeen).getTime() > oneHourAgo).length;

    // Top categories
    const categoryCount = new Map<string, number>();
    const componentCount = new Map<string, number>();

    errors.forEach(error => {
      categoryCount.set(error.category, (categoryCount.get(error.category) || 0) + error.occurrenceCount);
      
      const component = error.context.component || 'unknown';
      componentCount.set(component, (componentCount.get(component) || 0) + error.occurrenceCount);
    });

    const topCategories = Array.from(categoryCount.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const topComponents = Array.from(componentCount.entries())
      .map(([component, count]) => ({ component, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Group errors by category
    const errorsByCategory: Record<string, ErrorDetails[]> = {};
    errors.forEach(error => {
      if (!errorsByCategory[error.category]) {
        errorsByCategory[error.category] = [];
      }
      errorsByCategory[error.category]!.push(error);
    });

    return {
      summary: {
        totalErrors: errors.length,
        criticalErrors,
        recentErrors,
        topCategories,
        topComponents,
      },
      healthMetrics: this.healthMetrics,
      recentErrors: errors
        .filter(e => new Date(e.lastSeen).getTime() > oneHourAgo)
        .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime())
        .slice(0, 10),
      errorsByCategory,
    };
  }

  public exportErrorData(): string {
    const report = this.getErrorReport();
    return JSON.stringify({
      exportTimestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      ...report,
      allErrors: Array.from(this.errors.values()),
    }, null, 2);
  }

  public clearErrors(): void {
    this.errors.clear();
    logInfo('Error collection cleared', { sessionId: this.sessionId });
  }

  public getHealthScore(): number {
    const errors = Array.from(this.errors.values());
    const criticalCount = errors.filter(e => e.severity === 'critical').length;
    const highCount = errors.filter(e => e.severity === 'high').length;
    const mediumCount = errors.filter(e => e.severity === 'medium').length;

    // Calculate score based on error severity and frequency
    const penalty = (criticalCount * 20) + (highCount * 10) + (mediumCount * 5);
    const memoryPenalty = this.healthMetrics.memoryPressure * 10;
    const networkPenalty = this.healthMetrics.networkStatus === 'offline' ? 15 : 0;

    const score = Math.max(0, 100 - penalty - memoryPenalty - networkPenalty);
    return Math.round(score);
  }

  public destroy(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    this.isInitialized = false;
    logInfo('Enhanced Error Collector destroyed', { sessionId: this.sessionId });
  }
}

// Create singleton instance
export const enhancedErrorCollector = new EnhancedErrorCollector();

// Utility functions
export function reportEnhancedError(
  error: Error | string,
  options?: {
    severity?: ErrorDetails['severity'];
    category?: ErrorDetails['category'];
    tags?: string[];
    context?: ErrorContext;
    reproductionSteps?: string[];
  }
): string {
  return enhancedErrorCollector.collectError(error, options);
}

export function getSystemHealthReport() {
  return enhancedErrorCollector.getErrorReport();
}

export function getSystemHealthScore(): number {
  return enhancedErrorCollector.getHealthScore();
}

export function exportSystemLogs(): string {
  return enhancedErrorCollector.exportErrorData();
}

// Auto-initialize in browser
if (typeof window !== 'undefined') {
  // Hook into unhandled errors
  window.addEventListener('error', (event) => {
    enhancedErrorCollector.collectError(event.error || new Error(event.message), {
      category: 'system',
      tags: ['unhandled', 'global'],
      context: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        route: window.location.pathname,
      },
    });
  });

  // Hook into unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
    enhancedErrorCollector.collectError(error, {
      category: 'system',
      tags: ['unhandled', 'promise'],
      context: {
        route: window.location.pathname,
        type: 'unhandledrejection',
      },
    });
  });

  logInfo('Enhanced error collection system initialized');
}
