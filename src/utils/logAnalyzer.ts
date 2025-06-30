/**
 * Log Analyzer Utility
 * Provides advanced error pattern detection and analysis to help identify and fix issues
 */

import { logInfo, logWarn, logError } from './productionLogger';

interface LogPattern {
  id: string;
  pattern: RegExp;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  solution?: string;
  category: 'build' | 'runtime' | 'network' | 'auth' | 'database' | 'ui';
}

interface ErrorAnalysis {
  patternId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  solution?: string;
  category: string;
  occurrences: number;
  lastSeen: Date;
}

class LogAnalyzer {
  private patterns: LogPattern[] = [
    // Build-time errors
    {
      id: 'circular-import',
      pattern: /circular.*dependency|import.*circle/i,
      severity: 'high',
      description: 'Circular dependency detected in imports',
      solution: 'Review import structure and use dependency injection or move shared code to a common module',
      category: 'build'
    },
    {
      id: 'type-error',
      pattern: /Type.*error|not assignable to parameter/i,
      severity: 'high',
      description: 'TypeScript type mismatch',
      solution: 'Check function signatures and ensure types match expected parameters',
      category: 'build'
    },
    {
      id: 'missing-export',
      pattern: /Module.*has no exported member/i,
      severity: 'medium',
      description: 'Missing export from module',
      solution: 'Add the missing export or check import spelling',
      category: 'build'
    },

    // Runtime errors
    {
      id: 'unhandled-promise',
      pattern: /unhandled.*promise.*rejection/i,
      severity: 'critical',
      description: 'Unhandled promise rejection',
      solution: 'Add proper error handling with try-catch or .catch() blocks',
      category: 'runtime'
    },
    {
      id: 'network-error',
      pattern: /fetch.*failed|network.*error|connection.*refused/i,
      severity: 'medium',
      description: 'Network request failure',
      solution: 'Check API endpoints, add retry logic, and handle offline scenarios',
      category: 'network'
    },
    {
      id: 'auth-error',
      pattern: /unauthorized|authentication.*failed|token.*expired/i,
      severity: 'medium',
      description: 'Authentication failure',
      solution: 'Refresh auth tokens, redirect to login, or check credentials',
      category: 'auth'
    },

    // Database errors
    {
      id: 'db-connection',
      pattern: /database.*connection|db.*error|sql.*error/i,
      severity: 'critical',
      description: 'Database connection or query error',
      solution: 'Check database connectivity, review queries, and verify credentials',
      category: 'database'
    },

    // UI errors
    {
      id: 'hydration-error',
      pattern: /hydration.*mismatch|hydration.*failed/i,
      severity: 'medium',
      description: 'React hydration mismatch',
      solution: 'Ensure server and client render the same content, avoid document/window usage during SSR',
      category: 'ui'
    },
    {
      id: 'component-error',
      pattern: /cannot.*read.*property.*undefined|cannot.*access.*before.*initialization/i,
      severity: 'medium',
      description: 'Component property access error',
      solution: 'Add null checks, use optional chaining, or ensure proper initialization',
      category: 'ui'
    }
  ];

  private errorHistory: Map<string, ErrorAnalysis> = new Map();

  analyzeError(errorMessage: string, context?: Record<string, unknown>): ErrorAnalysis | null {
    const matchedPattern = this.patterns.find(pattern => 
      pattern.pattern.test(errorMessage)
    );

    if (!matchedPattern) {
      return null;
    }

    const existingAnalysis = this.errorHistory.get(matchedPattern.id);
    const analysis: ErrorAnalysis = {
      patternId: matchedPattern.id,
      severity: matchedPattern.severity,
      description: matchedPattern.description,
      solution: matchedPattern.solution,
      category: matchedPattern.category,
      occurrences: existingAnalysis ? existingAnalysis.occurrences + 1 : 1,
      lastSeen: new Date()
    };

    this.errorHistory.set(matchedPattern.id, analysis);

    // Log analysis results
    if (analysis.severity === 'critical' || analysis.occurrences >= 5) {
      logError('Critical error pattern detected', null, {
        pattern: matchedPattern.id,
        occurrences: analysis.occurrences,
        solution: analysis.solution
      });
    } else if (analysis.severity === 'high' || analysis.occurrences >= 3) {
      logWarn('High-priority error pattern detected', {
        pattern: matchedPattern.id,
        occurrences: analysis.occurrences,
        solution: analysis.solution
      });
    }

    return analysis;
  }

  generateReport(): {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;
      low: number;
    };
    topErrors: ErrorAnalysis[];
    recommendations: string[];
  } {
    const analyses = Array.from(this.errorHistory.values());
    
    const summary = {
      total: analyses.length,
      critical: analyses.filter(a => a.severity === 'critical').length,
      high: analyses.filter(a => a.severity === 'high').length,
      medium: analyses.filter(a => a.severity === 'medium').length,
      low: analyses.filter(a => a.severity === 'low').length
    };

    const topErrors = analyses
      .sort((a, b) => b.occurrences - a.occurrences)
      .slice(0, 5);

    const recommendations = this.generateRecommendations(analyses);

    logInfo('Log analysis report generated', { summary, topErrorsCount: topErrors.length });

    return { summary, topErrors, recommendations };
  }

  private generateRecommendations(analyses: ErrorAnalysis[]): string[] {
    const recommendations: string[] = [];

    const criticalErrors = analyses.filter(a => a.severity === 'critical');
    if (criticalErrors.length > 0) {
      recommendations.push('🚨 Address critical errors immediately to prevent system instability');
    }

    const buildErrors = analyses.filter(a => a.category === 'build');
    if (buildErrors.length > 2) {
      recommendations.push('🔧 Review build configuration and type definitions');
    }

    const networkErrors = analyses.filter(a => a.category === 'network');
    if (networkErrors.length > 0) {
      recommendations.push('🌐 Implement better network error handling and retry mechanisms');
    }

    const frequentErrors = analyses.filter(a => a.occurrences >= 5);
    if (frequentErrors.length > 0) {
      recommendations.push('🔄 Focus on fixing frequently occurring errors for maximum impact');
    }

    if (analyses.length === 0) {
      recommendations.push('✅ No significant error patterns detected - system is healthy');
    }

    return recommendations;
  }

  clearHistory(): void {
    this.errorHistory.clear();
    logInfo('Error analysis history cleared');
  }

  getErrorStats(): { [category: string]: number } {
    const stats: { [category: string]: number } = {};
    
    for (const analysis of this.errorHistory.values()) {
      stats[analysis.category] = (stats[analysis.category] || 0) + analysis.occurrences;
    }

    return stats;
  }
}

// Global analyzer instance
const logAnalyzer = new LogAnalyzer();

// Enhanced error logging function that includes analysis
export function logErrorWithAnalysis(
  message: string, 
  error?: Error | unknown, 
  context?: Record<string, unknown>
): void {
  // Log the error normally
  logError(message, error, context);

  // Analyze the error for patterns
  const errorText = error instanceof Error ? error.message : String(error || message);
  const analysis = logAnalyzer.analyzeError(errorText, context);

  if (analysis) {
    logInfo('Error analysis completed', {
      pattern: analysis.patternId,
      severity: analysis.severity,
      occurrences: analysis.occurrences,
      solution: analysis.solution
    });
  }
}

export { logAnalyzer };
export default logAnalyzer; 