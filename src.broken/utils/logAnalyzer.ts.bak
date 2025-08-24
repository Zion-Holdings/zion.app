/**
 * Advanced Log Analyzer for Error Pattern Detection
 * Provides intelligent error analysis, pattern recognition, and automated solutions
 */

import { logInfo, logWarn, logErrorToProduction } from './productionLogger';

interface LogPattern {
  id: string;
  pattern: RegExp;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  solution: string;
  category: 'build' | 'runtime' | 'network' | 'auth' | 'database' | 'ui' | 'performance';
  autoFix?: () => Promise<boolean>;
}

interface ErrorAnalysis {
  patternId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  solution: string;
  category: string;
  occurrences: number;
  lastSeen: Date;
  trend: 'increasing' | 'stable' | 'decreasing';
  impact: 'low' | 'medium' | 'high';
}

interface AnalysisReport {
  summary: {
    totalPatterns: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  topErrors: ErrorAnalysis[];
  recommendations: string[];
  categories: { [key: string]: number };
  healthScore: number;
}

class LogAnalyzer {
  private patterns: LogPattern[] = [
    // Build-time errors
    {
      id: 'circular-import',
      pattern: /circular.*dependency|import.*circle|Cannot resolve dependency/i,
      severity: 'high',
      description: 'Circular dependency detected in imports',
      solution: 'Review import structure and use dependency injection or move shared code to a common module',
      category: 'build'
    },
    {
      id: 'type-error',
      pattern: /Type.*error|not assignable to parameter|Property.*does not exist/i,
      severity: 'high',
      description: 'TypeScript type mismatch',
      solution: 'Check function signatures and ensure types match expected parameters',
      category: 'build'
    },
    {
      id: 'missing-export',
      pattern: /Module.*has no exported member|export.*was not found/i,
      severity: 'medium',
      description: 'Missing export from module',
      solution: 'Add the missing export or check import spelling',
      category: 'build'
    },
    {
      id: 'webpack-error',
      pattern: /webpack.*error|Module not found|Can't resolve/i,
      severity: 'high',
      description: 'Webpack module resolution error',
      solution: 'Check file paths and ensure modules are properly installed',
      category: 'build'
    },

    // Runtime errors
    {
      id: 'unhandled-promise',
      pattern: /unhandled.*promise.*rejection|Promise.*rejected/i,
      severity: 'critical',
      description: 'Unhandled promise rejection',
      solution: 'Add proper error handling with try-catch or .catch() blocks',
      category: 'runtime'
    },
    {
      id: 'null-reference',
      pattern: /cannot read.*property.*null|null.*undefined|TypeError.*null/i,
      severity: 'high',
      description: 'Null or undefined reference error',
      solution: 'Add null checks and use optional chaining (?.) operator',
      category: 'runtime'
    },
    {
      id: 'memory-leak',
      pattern: /memory.*leak|heap.*out.*memory|Maximum call stack/i,
      severity: 'critical',
      description: 'Memory-related error detected',
      solution: 'Review event listeners, timers, and object references for cleanup',
      category: 'performance'
    },

    // Network errors
    {
      id: 'network-error',
      pattern: /fetch.*failed|network.*error|connection.*refused|ECONNREFUSED/i,
      severity: 'medium',
      description: 'Network request failure',
      solution: 'Check API endpoints, add retry logic, and handle offline scenarios',
      category: 'network'
    },
    {
      id: 'cors-error',
      pattern: /CORS.*error|Cross-Origin.*blocked|Access-Control-Allow/i,
      severity: 'medium',
      description: 'CORS policy violation',
      solution: 'Configure server CORS headers or use proxy for development',
      category: 'network'
    },
    {
      id: 'timeout-error',
      pattern: /timeout|request.*timed.*out|ETIMEDOUT/i,
      severity: 'medium',
      description: 'Request timeout error',
      solution: 'Increase timeout values or optimize slow endpoints',
      category: 'network'
    },

    // Authentication errors
    {
      id: 'auth-error',
      pattern: /unauthorized|authentication.*failed|token.*expired|401.*Unauthorized/i,
      severity: 'medium',
      description: 'Authentication failure',
      solution: 'Refresh auth tokens, redirect to login, or check credentials',
      category: 'auth'
    },
    {
      id: 'permission-error',
      pattern: /forbidden|access.*denied|403.*Forbidden|permission.*denied/i,
      severity: 'medium',
      description: 'Permission or authorization error',
      solution: 'Check user roles and permissions, verify access rights',
      category: 'auth'
    },

    // Database errors
    {
      id: 'database-connection',
      pattern: /database.*connection|connection.*lost|db.*error|SQL.*error/i,
      severity: 'critical',
      description: 'Database connection or query error',
      solution: 'Check database connectivity, connection pool, and query syntax',
      category: 'database'
    },
    {
      id: 'query-timeout',
      pattern: /query.*timeout|database.*timeout|slow.*query/i,
      severity: 'high',
      description: 'Database query performance issue',
      solution: 'Optimize queries, add indexes, or implement query caching',
      category: 'database'
    },

    // UI/UX errors
    {
      id: 'hydration-mismatch',
      pattern: /hydration.*mismatch|server.*client.*mismatch|Text content did not match/i,
      severity: 'medium',
      description: 'React hydration mismatch',
      solution: 'Ensure server and client render the same content initially',
      category: 'ui'
    },
    {
      id: 'component-error',
      pattern: /Component.*failed|render.*error|React.*error boundary/i,
      severity: 'high',
      description: 'React component rendering error',
      solution: 'Add error boundaries and validate component props',
      category: 'ui'
    }
  ];

  private errorHistory: Map<string, ErrorAnalysis> = new Map();
  private analysisCache: Map<string, ErrorAnalysis | null> = new Map();

  constructor() {
    // Setup periodic analysis cleanup
    this.setupPeriodicCleanup();
  }

  private setupPeriodicCleanup(): void {
    // Clean old analysis data every hour
    setInterval(() => {
      this.cleanupOldAnalysis();
    }, 3600000);
  }

  private cleanupOldAnalysis(): void {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    for (const [key, analysis] of this.errorHistory.entries()) {
      if (analysis.lastSeen < oneWeekAgo) {
        this.errorHistory.delete(key);
      }
    }

    // Clear analysis cache
    this.analysisCache.clear();
  }

  public analyzeError(errorMessage: string, context?: Record<string, unknown>): ErrorAnalysis | null {
    // Check cache first
    const cacheKey = `${errorMessage}:${JSON.stringify(context)}`;
    if (this.analysisCache.has(cacheKey)) {
      return this.analysisCache.get(cacheKey) || null;
    }

    const matchedPattern = this.patterns.find(pattern => 
      pattern.pattern.test(errorMessage)
    );

    if (!matchedPattern) {
      this.analysisCache.set(cacheKey, null);
      return null;
    }

    const existingAnalysis = this.errorHistory.get(matchedPattern.id);
    const now = new Date();
    
    // Calculate trend
    let trend: 'increasing' | 'stable' | 'decreasing' = 'stable';
    if (existingAnalysis) {
      const timeDiff = now.getTime() - existingAnalysis.lastSeen.getTime();
      const hoursSince = timeDiff / (1000 * 60 * 60);
      
      if (hoursSince < 1 && existingAnalysis.occurrences > 5) {
        trend = 'increasing';
      } else if (hoursSince > 24) {
        trend = 'decreasing';
      }
    }

    // Calculate impact based on severity and frequency
    let impact: 'low' | 'medium' | 'high' = 'low';
    const occurrences = existingAnalysis ? existingAnalysis.occurrences + 1 : 1;
    
    if (matchedPattern.severity === 'critical' || occurrences >= 10) {
      impact = 'high';
    } else if (matchedPattern.severity === 'high' || occurrences >= 5) {
      impact = 'medium';
    }

    const analysis: ErrorAnalysis = {
      patternId: matchedPattern.id,
      severity: matchedPattern.severity,
      description: matchedPattern.description,
      solution: matchedPattern.solution,
      category: matchedPattern.category,
      occurrences,
      lastSeen: now,
      trend,
      impact
    };

    this.errorHistory.set(matchedPattern.id, analysis);
    this.analysisCache.set(cacheKey, analysis);

    // Log analysis results based on severity
    this.logAnalysisResult(analysis, context);

    // Try auto-fix if available
    if (matchedPattern.autoFix && analysis.severity === 'critical') {
      this.attemptAutoFix(matchedPattern, analysis);
    }

    return analysis;
  }

  private logAnalysisResult(analysis: ErrorAnalysis, context?: Record<string, unknown>): void {
    const logContext = {
      ...context,
      pattern: analysis.patternId,
      occurrences: analysis.occurrences,
      trend: analysis.trend,
      impact: analysis.impact,
      solution: analysis.solution
    };

    if (analysis.severity === 'critical' || analysis.impact === 'high') {
      logErrorToProduction('Critical error pattern detected', null, logContext);
    } else if (analysis.severity === 'high' || analysis.occurrences >= 5) {
      logWarn('High-priority error pattern detected', logContext);
    } else {
      logInfo('Error pattern analyzed', logContext);
    }
  }

  private async attemptAutoFix(pattern: LogPattern, analysis: ErrorAnalysis): Promise<void> {
    if (!pattern.autoFix) return;

    try {
      logInfo('Attempting automatic fix', { pattern: pattern.id });
      const success = await pattern.autoFix();
      
      if (success) {
        logInfo('Automatic fix applied successfully', { pattern: pattern.id });
      } else {
        logWarn('Automatic fix failed', { pattern: pattern.id });
      }
    } catch (error) {
      logErrorToProduction('Error during automatic fix attempt', error, { pattern: pattern.id });
    }
  }

  public generateReport(): AnalysisReport {
    const analyses = Array.from(this.errorHistory.values());
    
    const summary = {
      totalPatterns: analyses.length,
      critical: analyses.filter(a => a.severity === 'critical').length,
      high: analyses.filter(a => a.severity === 'high').length,
      medium: analyses.filter(a => a.severity === 'medium').length,
      low: analyses.filter(a => a.severity === 'low').length
    };

    const topErrors = analyses
      .sort((a, b) => {
        // Sort by severity first, then by occurrences
        const severityWeight = { critical: 4, high: 3, medium: 2, low: 1 };
        const aSeverity = severityWeight[a.severity];
        const bSeverity = severityWeight[b.severity];
        
        if (aSeverity !== bSeverity) {
          return bSeverity - aSeverity;
        }
        
        return b.occurrences - a.occurrences;
      })
      .slice(0, 10);

    const categories: { [key: string]: number } = {};
    analyses.forEach(analysis => {
      categories[analysis.category] = (categories[analysis.category] || 0) + analysis.occurrences;
    });

    // Calculate health score (0-100)
    let healthScore = 100;
    healthScore -= summary.critical * 15;
    healthScore -= summary.high * 10;
    healthScore -= summary.medium * 5;
    healthScore -= summary.low * 2;
    
    // Penalize for high occurrence rates
    const totalOccurrences = analyses.reduce((sum, a) => sum + a.occurrences, 0);
    if (totalOccurrences > 50) healthScore -= 20;
    else if (totalOccurrences > 20) healthScore -= 10;
    
    healthScore = Math.max(0, healthScore);

    const recommendations = this.generateRecommendations(analyses);

    return {
      summary,
      topErrors,
      recommendations,
      categories,
      healthScore
    };
  }

  private generateRecommendations(analyses: ErrorAnalysis[]): string[] {
    const recommendations: string[] = [];
    
    // Critical issues
    const criticalIssues = analyses.filter(a => a.severity === 'critical');
    if (criticalIssues.length > 0) {
      recommendations.push(`🚨 Address ${criticalIssues.length} critical errors immediately`);
    }

    // Trending issues
    const increasingErrors = analyses.filter(a => a.trend === 'increasing');
    if (increasingErrors.length > 0) {
      recommendations.push(`📈 Monitor ${increasingErrors.length} increasing error trends`);
    }

    // Category-specific recommendations
    const networkErrors = analyses.filter(a => a.category === 'network').length;
    if (networkErrors > 3) {
      recommendations.push('🌐 Review network error handling and implement retry logic');
    }

    const performanceErrors = analyses.filter(a => a.category === 'performance').length;
    if (performanceErrors > 2) {
      recommendations.push('⚡ Investigate performance issues and memory usage');
    }

    const authErrors = analyses.filter(a => a.category === 'auth').length;
    if (authErrors > 2) {
      recommendations.push('🔐 Review authentication and authorization logic');
    }

    // High occurrence patterns
    const highOccurrenceErrors = analyses.filter(a => a.occurrences >= 10);
    if (highOccurrenceErrors.length > 0) {
      recommendations.push(`🔄 Address ${highOccurrenceErrors.length} recurring error patterns`);
    }

    return recommendations.slice(0, 8); // Limit to top 8 recommendations
  }

  public getPatternById(patternId: string): LogPattern | undefined {
    return this.patterns.find(p => p.id === patternId);
  }

  public addCustomPattern(pattern: LogPattern): void {
    this.patterns.push(pattern);
    logInfo('Custom error pattern added', { patternId: pattern.id });
  }

  public getErrorHistory(): ErrorAnalysis[] {
    return Array.from(this.errorHistory.values());
  }

  public clearHistory(): void {
    this.errorHistory.clear();
    this.analysisCache.clear();
    logInfo('Error analysis history cleared');
  }

  public exportAnalysis(): string {
    const report = this.generateReport();
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      report,
      patterns: this.patterns.map(p => ({
        id: p.id,
        severity: p.severity,
        category: p.category,
        description: p.description
      })),
      history: this.getErrorHistory()
    }, null, 2);
  }
}

// Global analyzer instance
const logAnalyzer = new LogAnalyzer();

// Enhanced error logging function that includes analysis
export function logErrorWithAnalysis(
  message: string, 
  error?: Error | unknown, 
  context?: Record<string, unknown>
): ErrorAnalysis | null {
  // Log the error normally
  logErrorToProduction(message, error, context);

  // Analyze the error for patterns
  const errorText = error instanceof Error ? error.message : String(error || message);
  const analysis = logAnalyzer.analyzeError(errorText, context);

  if (analysis) {
    logInfo('Error analysis completed', {
      pattern: analysis.patternId,
      severity: analysis.severity,
      occurrences: analysis.occurrences,
      trend: analysis.trend,
      impact: analysis.impact,
      solution: analysis.solution
    });
  }

  return analysis;
}

export { 
  logAnalyzer, 
  LogAnalyzer, 
  type LogPattern, 
  type ErrorAnalysis, 
  type AnalysisReport 
}; 