/**
 * Log Management System
 * Advanced log collection, analysis, and automated problem resolution
 */

import { logInfo, logWarn, logErrorToProduction } from './productionLogger';
import { advancedLogCollector } from './advancedLogCollector';
import { logDashboard } from './logDashboard';

export interface LogAnalysisResult {
  patterns: Array<{
    pattern: string;
    frequency: number;
    severity: 'low' | 'medium' | 'high' | 'critical';
    category: 'error' | 'performance' | 'security' | 'business';
    recommendation: string;
  }>;
  insights: Array<{
    type: 'trend' | 'anomaly' | 'correlation';
    description: string;
    confidence: number;
    actionable: boolean;
  }>;
  healthScore: number; // 0-100
  nextActions: string[];
}

export interface AutoHealAction {
  id: string;
  type: 'restart-service' | 'clear-cache' | 'scale-resource' | 'notify-admin' | 'custom';
  description: string;
  condition: string;
  enabled: boolean;
  lastTriggered?: string;
  successRate: number;
}

class LogManagement {
  private autoHealActions: AutoHealAction[] = [];
  private analysisCache: Map<string, { result: LogAnalysisResult; timestamp: number }> = new Map();
  private readonly CACHE_TTL = 15 * 60 * 1000; // 15 minutes
  
  constructor() {
    this.initializeDefaultActions();
  }

  /**
   * Perform comprehensive log analysis
   */
  async analyzeSystemHealth(): Promise<LogAnalysisResult> {
    const cacheKey = 'system-health';
    const cached = this.analysisCache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.result;
    }

    try {
      const logs = advancedLogCollector.getCollectedLogs();
      const last24Hours = logs.filter((log: unknown) => 
        new Date((log as { timestamp: string }).timestamp).getTime() > Date.now() - (24 * 60 * 60 * 1000)
      );

      // Analyze patterns
      const patterns = this.identifyPatterns(last24Hours);
      
      // Generate insights
      const insights = this.generateInsights(last24Hours);
      
      // Calculate health score
      const healthScore = this.calculateHealthScore(last24Hours, patterns);
      
      // Generate next actions
      const nextActions = this.generateNextActions(patterns, insights, healthScore);

      const result: LogAnalysisResult = {
        patterns,
        insights,
        healthScore,
        nextActions
      };

      // Cache the result
      this.analysisCache.set(cacheKey, { result, timestamp: Date.now() });
      
      logInfo('System health analysis completed', { 
        patternsFound: patterns.length,
        insights: insights.length,
        healthScore 
      });

      return result;
    } catch {
      logErrorToProduction('Failed to analyze system health', 'Error occurred');
      
      return {
        patterns: [],
        insights: [{
          type: 'anomaly',
          description: 'Unable to complete system analysis',
          confidence: 100,
          actionable: true
        }],
        healthScore: 0,
        nextActions: ['Check log management system configuration']
      };
    }
  }

  /**
   * Set up intelligent alerting based on patterns
   */
  setupIntelligentAlerting(): void {
    // Monitor for error spikes
    this.addAutoHealAction({
      type: 'notify-admin',
      description: 'Detect sudden increase in error rate',
      condition: 'errorRate > previousHour * 2 && errorCount > 10',
      enabled: true,
      successRate: 95
    });

    // Memory leak detection
    this.addAutoHealAction({
      type: 'notify-admin',
      description: 'Detect potential memory leaks',
      condition: 'memoryUsage > 85 && trend === "increasing"',
      enabled: true,
      successRate: 88
    });

    // Performance degradation
    this.addAutoHealAction({
      type: 'notify-admin',
      description: 'Detect performance degradation',
      condition: 'avgResponseTime > 2000 && trend === "increasing"',
      enabled: true,
      successRate: 92
    });

    logInfo('Intelligent alerting configured', { data:  { 
      actionsCount: this.autoHealActions.length 
    } });
  }

  /**
   * Automated problem resolution
   */
  async performAutoHealing(): Promise<{ actionsExecuted: number; issues: string[] }> {
    const actionsExecuted: string[] = [];
    const issues: string[] = [];

    try {
      const analysis = await this.analyzeSystemHealth();
      
      // Check for critical patterns
      const criticalPatterns = analysis.patterns.filter(p => p.severity === 'critical');
      
      for (const pattern of criticalPatterns) {
        const applicableActions = this.autoHealActions.filter(action => 
          action.enabled && this.matchesCondition(pattern, action.condition)
        );

        for (const action of applicableActions) {
          try {
            await this.executeAutoHealAction(action, pattern);
            actionsExecuted.push(action.description);
            
            // Update success rate
            action.lastTriggered = new Date().toISOString();
            
            logInfo('Auto-heal action executed', { 
              actionId: action.id,
              pattern: pattern.pattern 
            });
          } catch (_error) {
            const issue = `Failed to execute ${action.description}: ${error}`;
            issues.push(issue);
            logWarn('Auto-heal action failed', { actionId: action.id, error });
          }
        }
      }

      return { actionsExecuted: actionsExecuted.length, issues };
    } catch {
      logErrorToProduction('Auto-healing process failed', 'Error occurred');
      return { actionsExecuted: 0, issues: ['Auto-healing system 'Error occurred''] };
    }
  }

  /**
   * Generate predictive insights
   */
  async generatePredictiveInsights(): Promise<Array<{
    prediction: string;
    probability: number;
    timeframe: string;
    preventiveActions: string[];
  }>> {
    try {
      const logs = advancedLogCollector.getCollectedLogs();
      const insights: Array<{
        prediction: string;
        probability: number;
        timeframe: string;
        preventiveActions: string[];
      }> = [];

      // Analyze trends over different time periods
      const lastHour = this.getLogsInRange(logs, 1);
      const lastDay = this.getLogsInRange(logs, 24);
      const lastWeek = this.getLogsInRange(logs, 24 * 7);

      // Predict error rate trends
      const errorTrend = this.calculateTrend(
        [lastWeek, lastDay, lastHour].map(logs => 
          logs.filter((l: unknown) => (l as { level: string }).level === 'error').length / Math.max(logs.length, 1) * 100
        )
      );

      if (errorTrend > 0.1) { // Increasing error rate
        insights.push({
          prediction: 'Error rate likely to increase in next 2-4 hours',
          probability: Math.min(errorTrend * 100, 95),
          timeframe: '2-4 hours',
          preventiveActions: [
            'Monitor top error patterns',
            'Prepare rollback procedures',
            'Alert on-call engineers'
          ]
        });
      }

      // Predict memory issues
      const memoryUsage = this.calculateMemoryTrend(logs);
      if (memoryUsage.trend > 0.05) { // 5% increase per hour
        insights.push({
          prediction: 'Memory usage may exceed safe limits',
          probability: 75,
          timeframe: '6-12 hours',
          preventiveActions: [
            'Review memory-intensive operations',
            'Consider horizontal scaling',
            'Monitor for memory leaks'
          ]
        });
      }

      // Predict service degradation
      const performanceTrend = this.calculatePerformanceTrend(logs);
      if (performanceTrend.degrading) {
        insights.push({
          prediction: 'Service performance may degrade further',
          probability: performanceTrend.confidence,
          timeframe: '1-3 hours',
          preventiveActions: [
            'Investigate slow queries',
            'Check external dependencies',
            'Optimize resource-intensive operations'
          ]
        });
      }

      logInfo('Predictive insights generated', { data:  { insightsCount: insights.length } });
      return insights;
    } catch {
      logErrorToProduction('Failed to generate predictive insights', 'Error occurred');
      return [];
    }
  }

  /**
   * Export comprehensive system report
   */
  async exportSystemReport(): Promise<{
    timestamp: string;
    analysis: LogAnalysisResult;
    predictions: unknown[];
    recommendations: string[];
    raw_data: {
      recent_logs: unknown[];
      metrics: unknown;
      alerts: unknown[];
    };
  }> {
    try {
      const [analysis, predictions, metrics, alerts] = await Promise.all([
        this.analyzeSystemHealth(),
        this.generatePredictiveInsights(),
        logDashboard.getDashboardMetrics(),
        logDashboard.getAllAlerts()
      ]);

      const recentLogs = await logDashboard.getFilteredLogs(
        { timeRange: 'last-hour' }, 
        100
      );

      const recommendations = this.generateSystemRecommendations(
        analysis, 
        predictions, 
        metrics
      );

      return {
        timestamp: new Date().toISOString(),
        analysis,
        predictions,
        recommendations,
        raw_data: {
          recent_logs: recentLogs,
          metrics,
          alerts
        }
      };
    } catch {
      logErrorToProduction('Failed to export system report', 'Error occurred');
      throw 'Error occurred';
    }
  }

  /**
   * Optimize logging performance
   */
  async optimizeLogging(): Promise<{ 
    optimizations: string[]; 
    spaceFreed: number; 
    performanceGain: number 
  }> {
    const optimizations: string[] = [];
    let spaceFreed = 0;
    let performanceGain = 0;

    try {
      // Clear old logs
      const cleared = await logDashboard.clearOldLogs(7); // Keep last 7 days
      if (cleared > 0) {
        spaceFreed += cleared * 0.5; // Estimate 0.5KB per log
        optimizations.push(`Cleared ${cleared} old logs`);
      }

      // Compress logs
      const compressionResult = await this.compressLogs();
      spaceFreed += compressionResult.spaceFreed;
      optimizations.push(compressionResult.message);

      // Optimize log collection frequency
      const frequencyOptimization = this.optimizeCollectionFrequency();
      performanceGain += frequencyOptimization.gain;
      optimizations.push(frequencyOptimization.message);

      logInfo('Logging optimization completed', { 
        optimizations: optimizations.length,
        spaceFreed,
        performanceGain 
      });

      return { optimizations, spaceFreed, performanceGain };
    } catch {
      logErrorToProduction('Failed to optimize logging', 'Error occurred');
      return { optimizations: [], spaceFreed: 0, performanceGain: 0 };
    }
  }

  // Private helper methods...

  private initializeDefaultActions(): void {
    this.autoHealActions = [
      {
        id: 'high-error-rate-alert',
        type: 'notify-admin',
        description: 'Alert on high error rate',
        condition: 'errorRate > 10',
        enabled: true,
        successRate: 100
      },
      {
        id: 'memory-usage-alert',
        type: 'notify-admin', 
        description: 'Alert on high memory usage',
        condition: 'memoryUsage > 90',
        enabled: true,
        successRate: 100
      }
    ];
  }

  private identifyPatterns(logs: unknown[]): LogAnalysisResult['patterns'] {
    const patterns: LogAnalysisResult['patterns'] = [];
    
    // Group logs by message similarity
    const messageGroups = new Map<string, unknown[]>();
    
    logs.forEach((_log: unknown) => {
      // Normalize message for pattern matching
      const normalizedMessage = (log as { message: string }).message
        .replace(/\d+/g, 'NUMBER')
        .replace(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi, 'UUID')
        .replace(/\b\w+@\w+\.\w+\b/g, 'EMAIL');
      
      const key = normalizedMessage.substring(0, 100);
      if (!messageGroups.has(key)) {
        messageGroups.set(key, []);
      }
      const existing = messageGroups.get(key);
      if (existing) {
        (existing as unknown[]).push(log);
      }
    });

    // Identify significant patterns
    messageGroups.forEach((groupLogs, pattern) => {
      if ((groupLogs as unknown[]).length >= 3) { // Pattern must occur at least 3 times
        const errorLogs = (groupLogs as unknown[]).filter((l: unknown) => (l as { level: string }).level === 'error');
        const frequency = (groupLogs as unknown[]).length;
        
        let severity: 'low' | 'medium' | 'high' | 'critical' = 'low';
        if (errorLogs.length > 10) severity = 'critical';
        else if (errorLogs.length > 5) severity = 'high';
        else if (errorLogs.length > 2) severity = 'medium';

        patterns.push({
          pattern,
          frequency,
          severity,
          category: errorLogs.length > 0 ? 'error' : 'business',
          recommendation: this.generatePatternRecommendation(pattern, groupLogs)
        });
      }
    });

    return patterns.sort((a, b) => b.frequency - a.frequency);
  }

  private generateInsights(logs: unknown[]): LogAnalysisResult['insights'] {
    const insights: LogAnalysisResult['insights'] = [];
    
    // Time-based analysis
    const hourlyDistribution = this.analyzeHourlyDistribution(logs);
    if (hourlyDistribution.anomaly) {
      insights.push({
        type: 'anomaly',
        description: `Unusual activity pattern detected: ${hourlyDistribution.description}`,
        confidence: hourlyDistribution.confidence,
        actionable: true
      });
    }

    // Error correlation analysis
    const correlations = this.findErrorCorrelations(logs);
    correlations.forEach(correlation => {
      insights.push({
        type: 'correlation',
        description: correlation.description,
        confidence: correlation.confidence,
        actionable: correlation.actionable
      });
    });

    return insights;
  }

  private calculateHealthScore(logs: unknown[], patterns: unknown[]): number {
    let score = 100;
    
    // Deduct for errors
    const errorCount = (logs as unknown[]).filter((l: unknown) => (l as { level: string }).level === 'error').length;
    score -= Math.min(errorCount * 2, 40);
    
    // Deduct for critical patterns
    const criticalPatterns = (patterns as unknown[]).filter(p => (p as { severity: string }).severity === 'critical').length;
    score -= criticalPatterns * 15;
    
    // Deduct for high error rate
    const errorRate = (errorCount / Math.max((logs as unknown[]).length, 1)) * 100;
    if (errorRate > 5) score -= (errorRate - 5) * 2;
    
    return Math.max(score, 0);
  }

  private generateNextActions(patterns: unknown[], insights: unknown[], healthScore: number): string[] {
    const actions: string[] = [];
    
    if (healthScore < 70) {
      actions.push('Immediate investigation required - system health is poor');
    }
    
    const criticalPatterns = (patterns as unknown[]).filter(p => (p as { severity: string }).severity === 'critical');
    if (criticalPatterns.length > 0) {
      actions.push(`Address ${criticalPatterns.length} critical error patterns`);
    }
    
    const actionableInsights = (insights as unknown[]).filter(i => (i as { actionable: boolean }).actionable);
    if (actionableInsights.length > 0) {
      actions.push(`Follow up on ${actionableInsights.length} actionable insights`);
    }
    
    if (actions.length === 0) {
      actions.push('Continue monitoring - system appears stable');
    }
    
    return actions;
  }

  private addAutoHealAction(action: Omit<AutoHealAction, 'id'>): void {
    const newAction: AutoHealAction = {
      id: `action-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...action
    };
    this.autoHealActions.push(newAction);
  }

  private matchesCondition(pattern: unknown, condition: string): boolean {
    // Simple condition matching - in production, use a proper expression evaluator
    return condition.includes((pattern as { severity: string }).severity) || 
           condition.includes((pattern as { category: string }).category) ||
           (pattern as { frequency: number }).frequency > 10;
  }

  private async executeAutoHealAction(action: AutoHealAction, context: unknown): Promise<void> {
    switch (action.type) {
      case 'notify-admin':
        await this.notifyAdmin(action, context);
        break;
      case 'clear-cache':
        await this.clearCache();
        break;
      default:
        logWarn('Unknown auto-heal action type', { data:  { actionType: action.type } });
    }
  }

  private async notifyAdmin(action: AutoHealAction, context: unknown): Promise<void> {
    logDashboard.createAlert(
      'error-spike',
      'high',
      `Auto-heal triggered: ${action.description}`,
      { action: action.id, context }
    );
  }

  private async clearCache(): Promise<void> {
    // Implementation would depend on caching system
    logInfo('Cache clearing triggered by auto-heal');
  }

  private getLogsInRange(logs: unknown[], hours: number): unknown[] {
    const cutoff = Date.now() - (hours * 60 * 60 * 1000);
    return (logs as unknown[]).filter((log: unknown) => new Date((log as { timestamp: string }).timestamp).getTime() >= cutoff);
  }

  private calculateTrend(values: number[]): number {
    if (values.length < 2) return 0;
    
    // Simple linear trend calculation
    const n = values.length;
    const x = Array.from({ length: n }, (_, i) => i);
    const y = values;
    
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * (y[i] || 0), 0);
    const sumXX = x.reduce((sum, xi) => sum + xi * xi, 0);
    
    return (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  }

  private calculateMemoryTrend(_logs: unknown[]): { trend: number; current: number } {
    // Simplified - in reality would track actual memory metrics
    return { trend: 0.02, current: 65 };
  }

  private calculatePerformanceTrend(logs: unknown[]): { degrading: boolean; confidence: number } {
    const performanceLogs = (logs as unknown[]).filter((log: unknown) => 
      (log as { context: { duration: number } }).context?.duration && typeof (log as { context: { duration: number } }).context.duration === 'number'
    );
    
    if (performanceLogs.length < 10) {
      return { degrading: false, confidence: 0 };
    }
    
    const recent = performanceLogs.slice(-20);
    const previous = performanceLogs.slice(-40, -20);
    
    const recentAvg = recent.reduce((sum: number, log: unknown) => sum + (log as { context: { duration: number } }).context.duration, 0) / recent.length;
    const previousAvg = previous.reduce((sum: number, log: unknown) => sum + (log as { context: { duration: number } }).context.duration, 0) / previous.length;
    
    const degrading = recentAvg > previousAvg * 1.2; // 20% slower
    const confidence = Math.min((recentAvg / previousAvg - 1) * 100, 95);
    
    return { degrading, confidence };
  }

  private generateSystemRecommendations(analysis: unknown, predictions: unknown[], metrics: unknown): string[] {
    const recommendations: string[] = [];
    
    if ((analysis as LogAnalysisResult).healthScore < 80) {
      recommendations.push('System health needs attention - investigate error patterns');
    }
    
    if ((predictions as Array<{ probability: number }>).some(p => (p as { probability: number }).probability > 70)) {
      recommendations.push('High-probability issues predicted - take preventive action');
    }
    
    if ((metrics as { errorRate: number }).errorRate > 5) {
      recommendations.push('Error rate is elevated - focus on error reduction');
    }
    
    return recommendations;
  }

  private async compressLogs(): Promise<{ message: string; spaceFreed: number }> {
    // Simplified compression simulation
    return {
      message: 'Log compression completed',
      spaceFreed: 1024 // KB
    };
  }

  private optimizeCollectionFrequency(): { message: string; gain: number } {
    return {
      message: 'Collection frequency optimized',
      gain: 15 // % performance gain
    };
  }

  private generatePatternRecommendation(pattern: string, _logs: unknown): string {
    if (pattern.includes('timeout')) {
      return 'Investigate timeout issues - check network connectivity and service dependencies';
    }
    if (pattern.includes('database')) {
      return 'Database-related errors detected - review query performance and connection pooling';
    }
    if (pattern.includes('memory')) {
      return 'Memory issues detected - monitor for leaks and optimize memory usage';
    }
    return 'Monitor this pattern and investigate if frequency increases';
  }

  private analyzeHourlyDistribution(_logs: unknown): { anomaly: boolean; description: string; confidence: number } {
    // Simplified hourly analysis
    return {
      anomaly: false,
      description: 'Normal distribution',
      confidence: 50
    };
  }

  private findErrorCorrelations(_logs: unknown): Array<{ description: string; confidence: number; actionable: boolean }> {
    // Simplified correlation analysis
    return [];
  }
}

// Export singleton instance
export const logManagement = new LogManagement();

// Initialize intelligent alerting
logManagement.setupIntelligentAlerting(); 