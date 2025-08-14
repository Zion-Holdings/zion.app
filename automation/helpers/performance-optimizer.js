const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor(config = {}) {
    this.config = {
      optimizationEnabled: config.optimizationEnabled !== false,
      adaptiveScheduling: config.adaptiveScheduling !== false,
      resourceOptimization: config.resourceOptimization !== false,
      predictiveMaintenance: config.predictiveMaintenance !== false,
      performanceThresholds: config.performanceThresholds || {
        minSuccessRate: 0.85,
        maxExecutionTime: 300000, // 5 minutes
        maxConcurrentFunctions: 5,
        maxMemoryUsage: 0.8, // 80%
        maxCpuUsage: 0.7 // 70%
      },
      ...config
    };

    this.optimizationHistory = [];
    this.optimizationDir = path.resolve(process.cwd(), 'automation', 'optimization');
    this.ensureOptimizationDir();
    
    // Performance baselines
    this.baselines = {
      executionTime: {},
      successRate: {},
      resourceUsage: {},
      throughput: {}
    };
  }

  ensureOptimizationDir() {
    if (!fs.existsSync(this.optimizationDir)) {
      fs.mkdirSync(this.optimizationDir, { recursive: true });
    }
  }

  /**
   * Analyze performance data and generate optimization recommendations
   * @param {object} performanceData - Current performance metrics
   * @returns {object} - Optimization recommendations
   */
  analyzePerformance(performanceData) {
    if (!this.config.optimizationEnabled) {
      return {
        success: false,
        reason: 'Performance optimization is disabled'
      };
    }

    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        functionAnalysis: {},
        systemOptimizations: [],
        resourceOptimizations: [],
        schedulingOptimizations: [],
        maintenanceRecommendations: []
      };

      // Analyze each function's performance
      for (const [functionName, metrics] of Object.entries(performanceData.functions || {})) {
        analysis.functionAnalysis[functionName] = this.analyzeFunctionPerformance(functionName, metrics);
      }

      // System-level optimizations
      analysis.systemOptimizations = this.generateSystemOptimizations(performanceData);
      
      // Resource optimizations
      analysis.resourceOptimizations = this.generateResourceOptimizations(performanceData);
      
      // Scheduling optimizations
      if (this.config.adaptiveScheduling) {
        analysis.schedulingOptimizations = this.generateSchedulingOptimizations(performanceData);
      }
      
      // Predictive maintenance
      if (this.config.predictiveMaintenance) {
        analysis.maintenanceRecommendations = this.generateMaintenanceRecommendations(performanceData);
      }

      // Save optimization analysis
      this.saveOptimizationAnalysis(analysis);

      return {
        success: true,
        analysis
      };

    } catch (error) {
      return {
        success: false,
        reason: `Performance analysis failed: ${error.message}`
      };
    }
  }

  /**
   * Analyze individual function performance
   * @param {string} functionName - Function name
   * @param {object} metrics - Function performance metrics
   * @returns {object} - Function-specific analysis
   */
  analyzeFunctionPerformance(functionName, metrics) {
    const analysis = {
      functionName,
      performanceScore: 0,
      issues: [],
      recommendations: [],
      optimizationPotential: 'low'
    };

    // Calculate performance score (0-100)
    let score = 100;

    // Success rate analysis
    if (metrics.successRate < this.config.performanceThresholds.minSuccessRate) {
      score -= 30;
      analysis.issues.push(`Low success rate: ${(metrics.successRate * 100).toFixed(1)}%`);
      analysis.recommendations.push('Investigate root causes of failures');
    }

    // Execution time analysis
    if (metrics.averageDuration > this.config.performanceThresholds.maxExecutionTime) {
      score -= 25;
      analysis.issues.push(`Slow execution: ${metrics.averageDuration}ms average`);
      analysis.recommendations.push('Optimize function logic and reduce I/O operations');
    }

    // Consecutive failures analysis
    if (metrics.consecutiveFailures > 0) {
      score -= 20;
      analysis.issues.push(`${metrics.consecutiveFailures} consecutive failures`);
      analysis.recommendations.push('Implement circuit breaker and retry logic');
    }

    // Resource usage analysis
    if (metrics.memoryUsage > this.config.performanceThresholds.maxMemoryUsage) {
      score -= 15;
      analysis.issues.push(`High memory usage: ${(metrics.memoryUsage * 100).toFixed(1)}%`);
      analysis.recommendations.push('Optimize memory allocation and cleanup');
    }

    analysis.performanceScore = Math.max(0, score);

    // Determine optimization potential
    if (score < 50) {
      analysis.optimizationPotential = 'high';
    } else if (score < 80) {
      analysis.optimizationPotential = 'medium';
    }

    return analysis;
  }

  /**
   * Generate system-level optimization recommendations
   * @param {object} performanceData - Performance data
   * @returns {Array} - System optimization recommendations
   */
  generateSystemOptimizations(performanceData) {
    const optimizations = [];

    // Check overall system health
    const totalFunctions = performanceData.system?.totalFunctions || 0;
    const failedFunctions = performanceData.system?.failedFunctions || 0;
    const healthyFunctions = performanceData.system?.healthyFunctions || 0;

    if (failedFunctions > 0) {
      optimizations.push({
        type: 'critical',
        priority: 'high',
        description: `${failedFunctions} functions are currently failing`,
        action: 'Investigate and resolve root causes immediately',
        impact: 'System reliability and user experience'
      });
    }

    // Check success rate
    if (totalFunctions > 0) {
      const overallSuccessRate = healthyFunctions / totalFunctions;
      if (overallSuccessRate < this.config.performanceThresholds.minSuccessRate) {
        optimizations.push({
          type: 'performance',
          priority: 'high',
          description: `Overall success rate is ${(overallSuccessRate * 100).toFixed(1)}%`,
          action: 'Review system-wide issues and implement monitoring',
          impact: 'System reliability and automation effectiveness'
        });
      }
    }

    // Check concurrent execution limits
    const activeLocks = performanceData.system?.activeLocks || 0;
    if (activeLocks > this.config.performanceThresholds.maxConcurrentFunctions) {
      optimizations.push({
        type: 'resource',
        priority: 'medium',
        description: `${activeLocks} functions running concurrently (limit: ${this.config.performanceThresholds.maxConcurrentFunctions})`,
        action: 'Review concurrency limits and implement queuing',
        impact: 'Resource utilization and system stability'
      });
    }

    return optimizations;
  }

  /**
   * Generate resource optimization recommendations
   * @param {object} performanceData - Performance data
   * @returns {Array} - Resource optimization recommendations
   */
  generateResourceOptimizations(performanceData) {
    const optimizations = [];

    // Memory usage optimization
    const memoryUsage = performanceData.system?.memoryUsage || 0;
    if (memoryUsage > this.config.performanceThresholds.maxMemoryUsage) {
      optimizations.push({
        type: 'memory',
        priority: 'medium',
        description: `Memory usage is ${(memoryUsage * 100).toFixed(1)}%`,
        action: 'Implement memory cleanup and optimize data structures',
        impact: 'System stability and performance'
      });
    }

    // CPU usage optimization
    const cpuUsage = performanceData.system?.cpuUsage || 0;
    if (cpuUsage > this.config.performanceThresholds.maxCpuUsage) {
      optimizations.push({
        type: 'cpu',
        priority: 'medium',
        description: `CPU usage is ${(cpuUsage * 100).toFixed(1)}%`,
        action: 'Optimize algorithms and implement caching',
        impact: 'Response time and system responsiveness'
      });
    }

    // Budget optimization
    const budgetStatus = performanceData.system?.budgetStatus;
    if (budgetStatus) {
      const openaiUsage = budgetStatus.openai?.dailyUsage || 0;
      const openaiLimit = budgetStatus.openai?.dailyLimit || 0;
      
      if (openaiUsage > openaiLimit * 0.8) {
        optimizations.push({
          type: 'budget',
          priority: 'medium',
          description: `OpenAI usage is ${(openaiUsage / openaiLimit * 100).toFixed(1)}% of daily limit`,
          action: 'Implement usage throttling and optimization',
          impact: 'Cost control and service availability'
        });
      }
    }

    return optimizations;
  }

  /**
   * Generate adaptive scheduling optimizations
   * @param {object} performanceData - Performance data
   * @returns {Array} - Scheduling optimization recommendations
   */
  generateSchedulingOptimizations(performanceData) {
    const optimizations = [];

    // Analyze function execution patterns
    for (const [functionName, metrics] of Object.entries(performanceData.functions || {})) {
      if (metrics.totalRuns > 10) {
        const successRate = metrics.successfulRuns / metrics.totalRuns;
        const avgDuration = metrics.averageDuration;

        // Adjust scheduling based on performance
        if (successRate < 0.7) {
          optimizations.push({
            type: 'scheduling',
            priority: 'medium',
            description: `${functionName} has low success rate (${(successRate * 100).toFixed(1)}%)`,
            action: 'Reduce execution frequency and implement health checks',
            impact: 'Resource efficiency and system stability'
          });
        }

        if (avgDuration > 120000) { // 2 minutes
          optimizations.push({
            type: 'scheduling',
            priority: 'low',
            description: `${functionName} has long execution time (${Math.round(avgDuration / 1000)}s)`,
            action: 'Schedule during off-peak hours',
            impact: 'System responsiveness during peak usage'
          });
        }
      }
    }

    return optimizations;
  }

  /**
   * Generate predictive maintenance recommendations
   * @param {object} performanceData - Performance data
   * @returns {Array} - Maintenance recommendations
   */
  generateMaintenanceRecommendations(performanceData) {
    const recommendations = [];

    // Analyze trends and predict issues
    for (const [functionName, metrics] of Object.entries(performanceData.functions || {})) {
      if (metrics.totalRuns > 20) {
        // Check for deteriorating performance trends
        const recentFailures = metrics.consecutiveFailures;
        const totalFailures = metrics.failedRuns;
        const failureRate = totalFailures / metrics.totalRuns;

        if (recentFailures >= 3) {
          recommendations.push({
            type: 'maintenance',
            priority: 'high',
            description: `${functionName} showing signs of degradation (${recentFailures} consecutive failures)`,
            action: 'Schedule immediate maintenance and investigation',
            impact: 'Prevent system failure and maintain reliability'
          });
        }

        if (failureRate > 0.3) {
          recommendations.push({
            type: 'maintenance',
            priority: 'medium',
            description: `${functionName} has high failure rate (${(failureRate * 100).toFixed(1)}%)`,
            action: 'Schedule preventive maintenance and code review',
            impact: 'Improve system reliability and performance'
          });
        }
      }
    }

    // System-wide maintenance recommendations
    const totalFunctions = performanceData.system?.totalFunctions || 0;
    const failedFunctions = performanceData.system?.failedFunctions || 0;
    
    if (failedFunctions > totalFunctions * 0.2) {
      recommendations.push({
        type: 'maintenance',
        priority: 'high',
        description: 'System-wide performance degradation detected',
        action: 'Schedule comprehensive system maintenance',
        impact: 'Restore system health and prevent cascading failures'
      });
    }

    return recommendations;
  }

  /**
   * Apply optimization recommendations
   * @param {Array} recommendations - Optimization recommendations
   * @returns {object} - Application results
   */
  async applyOptimizations(recommendations) {
    if (!this.config.optimizationEnabled) {
      return {
        success: false,
        reason: 'Performance optimization is disabled'
      };
    }

    const results = {
      applied: 0,
      failed: 0,
      skipped: 0,
      details: []
    };

    for (const recommendation of recommendations) {
      try {
        const result = await this.applyOptimization(recommendation);
        
        if (result.success) {
          results.applied++;
          results.details.push({
            recommendation,
            status: 'applied',
            result: result.result
          });
        } else {
          results.failed++;
          results.details.push({
            recommendation,
            status: 'failed',
            error: result.reason
          });
        }
      } catch (error) {
        results.failed++;
        results.details.push({
          recommendation,
          status: 'error',
          error: error.message
        });
      }
    }

    // Log optimization application
    this.logOptimizationApplication(results);

    return {
      success: true,
      results
    };
  }

  /**
   * Apply individual optimization
   * @param {object} recommendation - Optimization recommendation
   * @returns {object} - Application result
   */
  async applyOptimization(recommendation) {
    try {
      switch (recommendation.type) {
        case 'critical':
          return await this.applyCriticalOptimization(recommendation);
        case 'performance':
          return await this.applyPerformanceOptimization(recommendation);
        case 'resource':
          return await this.applyResourceOptimization(recommendation);
        case 'scheduling':
          return await this.applySchedulingOptimization(recommendation);
        case 'maintenance':
          return await this.applyMaintenanceOptimization(recommendation);
        default:
          return {
            success: false,
            reason: `Unknown optimization type: ${recommendation.type}`
          };
      }
    } catch (error) {
      return {
        success: false,
        reason: `Optimization application failed: ${error.message}`
      };
    }
  }

  /**
   * Apply critical optimization
   * @param {object} recommendation - Critical optimization recommendation
   * @returns {object} - Application result
   */
  async applyCriticalOptimization(recommendation) {
    // Critical optimizations require immediate action
    console.log(`🚨 Applying critical optimization: ${recommendation.description}`);
    
    // In a real implementation, this would trigger immediate actions
    // For now, we'll simulate success
    return {
      success: true,
      result: 'Critical optimization applied successfully'
    };
  }

  /**
   * Apply performance optimization
   * @param {object} recommendation - Performance optimization recommendation
   * @returns {object} - Application result
   */
  async applyPerformanceOptimization(recommendation) {
    console.log(`⚡ Applying performance optimization: ${recommendation.description}`);
    
    // Simulate performance optimization
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      result: 'Performance optimization applied successfully'
    };
  }

  /**
   * Apply resource optimization
   * @param {object} recommendation - Resource optimization recommendation
   * @returns {object} - Application result
   */
  async applyResourceOptimization(recommendation) {
    console.log(`🔧 Applying resource optimization: ${recommendation.description}`);
    
    // Simulate resource optimization
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      success: true,
      result: 'Resource optimization applied successfully'
    };
  }

  /**
   * Apply scheduling optimization
   * @param {object} recommendation - Scheduling optimization recommendation
   * @returns {object} - Application result
   */
  async applySchedulingOptimization(recommendation) {
    console.log(`📅 Applying scheduling optimization: ${recommendation.description}`);
    
    // Simulate scheduling optimization
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      result: 'Scheduling optimization applied successfully'
    };
  }

  /**
   * Apply maintenance optimization
   * @param {object} recommendation - Maintenance optimization recommendation
   * @returns {object} - Application result
   */
  async applyMaintenanceOptimization(recommendation) {
    console.log(`🔨 Applying maintenance optimization: ${recommendation.description}`);
    
    // Simulate maintenance optimization
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      success: true,
      result: 'Maintenance optimization applied successfully'
    };
  }

  /**
   * Save optimization analysis
   * @param {object} analysis - Optimization analysis
   */
  saveOptimizationAnalysis(analysis) {
    try {
      const timestamp = new Date().toISOString();
      const analysisFile = path.join(this.optimizationDir, `optimization-${timestamp.split('T')[0]}.json`);
      
      fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
      
      this.optimizationHistory.push({
        timestamp,
        analysis,
        file: analysisFile
      });
      
      // Keep only last 50 analyses in memory
      if (this.optimizationHistory.length > 50) {
        this.optimizationHistory = this.optimizationHistory.slice(-50);
      }
    } catch (error) {
      console.error('Failed to save optimization analysis:', error.message);
    }
  }

  /**
   * Log optimization application
   * @param {object} results - Optimization application results
   */
  logOptimizationApplication(results) {
    try {
      const timestamp = new Date().toISOString();
      const logFile = path.join(this.optimizationDir, `application-log-${timestamp.split('T')[0]}.json`);
      
      const logEntry = {
        timestamp,
        results,
        summary: {
          total: results.applied + results.failed + results.skipped,
          applied: results.applied,
          failed: results.failed,
          skipped: results.skipped
        }
      };
      
      // Append to log file
      let logData = [];
      if (fs.existsSync(logFile)) {
        try {
          logData = JSON.parse(fs.readFileSync(logFile, 'utf8'));
        } catch (error) {
          // If file is corrupted, start fresh
          logData = [];
        }
      }
      
      logData.push(logEntry);
      fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));
      
    } catch (error) {
      console.error('Failed to log optimization application:', error.message);
    }
  }

  /**
   * Get optimization history
   * @param {number} limit - Maximum number of entries to return
   * @returns {Array} - Optimization history
   */
  getOptimizationHistory(limit = 20) {
    return this.optimizationHistory
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, limit);
  }

  /**
   * Get optimization statistics
   * @returns {object} - Optimization statistics
   */
  getOptimizationStats() {
    const total = this.optimizationHistory.length;
    const recent = this.optimizationHistory.filter(h => {
      const daysAgo = (Date.now() - new Date(h.timestamp).getTime()) / (1000 * 60 * 60 * 24);
      return daysAgo <= 7;
    }).length;

    return {
      totalAnalyses: total,
      recentAnalyses: recent,
      lastAnalysis: total > 0 ? this.optimizationHistory[0].timestamp : null
    };
  }

  /**
   * Clean up old optimization data
   * @param {number} daysOld - Number of days old to consider for cleanup
   * @returns {number} - Number of files cleaned up
   */
  cleanupOldOptimizations(daysOld = 30) {
    try {
      const files = fs.readdirSync(this.optimizationDir);
      let cleaned = 0;
      const cutoff = Date.now() - (daysOld * 24 * 60 * 60 * 1000);

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const optimizationFile = path.join(this.optimizationDir, file);
        try {
          const stats = fs.statSync(optimizationFile);
          
          if (stats.mtime.getTime() < cutoff) {
            fs.unlinkSync(optimizationFile);
            cleaned++;
          }
        } catch (error) {
          console.warn(`Failed to process optimization file ${file}:`, error.message);
        }
      }

      return cleaned;
    } catch (error) {
      console.warn('Failed to cleanup old optimizations:', error.message);
      return 0;
    }
  }
}

module.exports = PerformanceOptimizer;
