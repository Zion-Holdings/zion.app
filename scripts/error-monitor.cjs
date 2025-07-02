#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  logsDir: path.join(__dirname, '..', 'logs'),
  maxLogEntries: 1000,
  retentionDays: 30,
  criticalKeywords: [
    'ECONNRESET',
    'TIMEOUT',
    'MEMORY',
    'CRASH',
    'FATAL',
    'CRITICAL',
    'SECURITY',
    'UNAUTHORIZED',
    'PERMISSION DENIED',
    'DATABASE ERROR',
    'COMPILATION ERROR'
  ],
  performanceThresholds: {
    responseTime: 5000, // 5 seconds
    memoryUsage: 512 * 1024 * 1024, // 512MB
    errorRate: 0.05 // 5%
  }
};

class ErrorMonitor {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.performance = [];
    this.summary = {
      totalEntries: 0,
      errorCount: 0,
      warningCount: 0,
      criticalCount: 0,
      timeRange: null
    };
  }

  /**
   * Initialize monitoring by ensuring logs directory exists
   */
  init() {
    try {
      if (!fs.existsSync(CONFIG.logsDir)) {
        fs.mkdirSync(CONFIG.logsDir, { recursive: true });
        console.log('📁 Created logs directory');
      }
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize error monitor:', error.message);
      return false;
    }
  }

  /**
   * Read and parse all log files
   */
  async readLogs() {
    try {
      const files = fs.readdirSync(CONFIG.logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));
      
      console.log(`📋 Found ${logFiles.length} log files`);
      
      for (const file of logFiles) {
        const filePath = path.join(CONFIG.logsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          try {
            const entry = JSON.parse(line);
            this.processLogEntry(entry);
          } catch (parseError) {
            // Handle non-JSON log entries
            this.processPlainTextLog(line, file);
          }
        }
      }
      
      // Sort by timestamp
      this.errors.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
      this.warnings.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
      
    } catch (error) {
      console.error('❌ Error reading logs:', error.message);
    }
  }

  /**
   * Process a structured log entry
   */
  processLogEntry(entry) {
    this.summary.totalEntries++;
    
    // Update time range
    if (entry.timestamp) {
      const timestamp = new Date(entry.timestamp);
      if (!this.summary.timeRange) {
        this.summary.timeRange = { start: timestamp, end: timestamp };
      } else {
        if (timestamp < this.summary.timeRange.start) {
          this.summary.timeRange.start = timestamp;
        }
        if (timestamp > this.summary.timeRange.end) {
          this.summary.timeRange.end = timestamp;
        }
      }
    }

    // Categorize by level
    if (entry.level === 'error' || entry.level === 'critical') {
      this.errors.push(entry);
      this.summary.errorCount++;
      
      if (entry.level === 'critical') {
        this.summary.criticalCount++;
      }
    } else if (entry.level === 'warn') {
      this.warnings.push(entry);
      this.summary.warningCount++;
    }

    // Check for critical keywords
    if (this.containsCriticalKeyword(entry.message)) {
      this.summary.criticalCount++;
    }

    // Track performance metrics
    if (entry.performance) {
      this.performance.push({
        timestamp: entry.timestamp,
        memory: entry.performance.memory,
        timing: entry.performance.timing,
        category: entry.category
      });
    }
  }

  /**
   * Process plain text log entries (fallback)
   */
  processPlainTextLog(line, filename) {
    this.summary.totalEntries++;
    
    const entry = {
      message: line,
      timestamp: new Date().toISOString(),
      source: filename,
      level: this.detectLogLevel(line)
    };

    if (entry.level === 'error') {
      this.errors.push(entry);
      this.summary.errorCount++;
    } else if (entry.level === 'warn') {
      this.warnings.push(entry);
      this.summary.warningCount++;
    }
  }

  /**
   * Detect log level from plain text
   */
  detectLogLevel(text) {
    const upperText = text.toUpperCase();
    
    // Enhanced success indicators (these override error/fail keywords)
    const successIndicators = [
      '✅', '✓', 'FIXED:', 'RESOLVED:', 'SUCCESS', 'COMPLETE', 'PASSED',
      'ERROR FIXED', 'BUILD ERROR FIXED', 'CRITICAL BUILD ERROR FIXED',
      'ISSUE RESOLVED', 'PROBLEM FIXED', 'SUCCESSFULLY', 'ACCOMPLISHED',
      'RESULT:', 'IMPROVEMENTS', 'ENHANCED', 'OPERATIONAL', 'AVAILABLE',
      'WORKING CORRECTLY', 'NOW ACTIVE', 'READY', 'OPTIMAL', 'FIXED',
      'SOLVING', 'COMPLETED', 'RESOLVED', 'WORKING', 'ENABLED', 'ACTIVE',
      'SUCCESSFUL', 'PERFECT', 'CLEAN', 'MAINTAINED', 'BUILT', 'GENERATED',
      'CREATED', 'ADDED', 'IMPROVED', 'UPDATED', 'DEPLOYED', 'INSTALLED',
      '===', 'ACCOMPLISHED', 'PROGRESS', 'ACHIEVEMENT', 'MILESTONE',
      'COMPILATION SUCCESSFUL', 'BUILD SUCCESSFUL', 'TESTS PASSED',
      'NO ISSUES', 'ALL CLEAR', 'HEALTH CHECK PASSED', 'VALIDATION PASSED'
    ];
    
    // Check for success context first
    if (successIndicators.some(indicator => upperText.includes(indicator))) {
      return 'info';
    }
    
    // Check for session headers and summaries (these are usually info)
    if (upperText.includes('===') || upperText.includes('SUMMARY') || 
        upperText.includes('SESSION') || upperText.includes('REPORT')) {
      return 'info';
    }
    
    // Check for actual errors and failures (more specific patterns)
    const criticalErrorIndicators = [
      'FATAL ERROR', 'CRITICAL ERROR', 'SYSTEM CRASH', 'COMPILATION FAILED',
      'BUILD FAILED', 'TEST FAILED', 'DEPLOYMENT FAILED', 'CONNECTION FAILED'
    ];
    
    if (criticalErrorIndicators.some(indicator => upperText.includes(indicator))) {
      return 'error';
    }
    
    // Check for specific error patterns (but not in success context)
    const errorPatterns = [
      /^ERROR:\s/,           // Lines starting with "ERROR: "
      /\bEXCEPTION\b/,      // Exception mentions
      /\bCRASH\b/,          // Crash mentions
      /\bFATAL\b/,          // Fatal errors
      /TIMEOUT.*ERROR/,      // Timeout errors
      /PERMISSION DENIED/,   // Permission errors
      /FILE NOT FOUND.*ERROR/, // File not found errors
    ];
    
    // Only flag as error if it matches error patterns and doesn't contain success context
    const hasErrorPattern = errorPatterns.some(pattern => pattern.test(upperText));
    const hasSuccessContext = upperText.includes('FIX') || upperText.includes('RESOLV') || 
                             upperText.includes('SUCCESS') || upperText.includes('COMPLET');
    
    if (hasErrorPattern && !hasSuccessContext) {
      return 'error';
    }
    
    // Check for warnings
    const warningIndicators = [
      'WARNING:', 'WARN:', 'DEPRECATED', 'OUTDATED', 'SLOW PERFORMANCE',
      'MEMORY USAGE HIGH', 'POTENTIAL ISSUE'
    ];
    
    if (warningIndicators.some(indicator => upperText.includes(indicator))) {
      return 'warn';
    }
    
    // Default to info for everything else
    return 'info';
  }

  /**
   * Check if message contains critical keywords
   */
  containsCriticalKeyword(message) {
    const upperMessage = message.toUpperCase();
    return CONFIG.criticalKeywords.some(keyword => 
      upperMessage.includes(keyword.toUpperCase())
    );
  }

  /**
   * Analyze patterns in errors and warnings
   */
  analyzePatterns() {
    const patterns = {};
    
    // Analyze error patterns
    this.errors.forEach(error => {
      const pattern = this.extractPattern(error.message);
      if (!patterns[pattern]) {
        patterns[pattern] = { count: 0, level: 'error', examples: [] };
      }
      patterns[pattern].count++;
      if (patterns[pattern].examples.length < 3) {
        patterns[pattern].examples.push(error.message);
      }
    });

    // Analyze warning patterns
    this.warnings.forEach(warning => {
      const pattern = this.extractPattern(warning.message);
      if (!patterns[pattern]) {
        patterns[pattern] = { count: 0, level: 'warning', examples: [] };
      }
      patterns[pattern].count++;
      if (patterns[pattern].examples.length < 3) {
        patterns[pattern].examples.push(warning.message);
      }
    });

    return Object.entries(patterns)
      .sort(([,a], [,b]) => b.count - a.count)
      .slice(0, 10); // Top 10 patterns
  }

  /**
   * Extract pattern from error message
   */
  extractPattern(message) {
    // Simple pattern extraction - remove specific values
    return message
      .replace(/\d+/g, 'N') // Replace numbers
      .replace(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi, 'UUID') // Replace UUIDs
      .replace(/https?:\/\/[^\s]+/g, 'URL') // Replace URLs
      .replace(/\/[^\s]+/g, 'PATH') // Replace file paths
      .substring(0, 100); // Limit length
  }

  /**
   * Generate performance insights
   */
  analyzePerformance() {
    if (this.performance.length === 0) {
      return null;
    }

    const insights = {
      memoryUsage: {
        avg: 0,
        max: 0,
        min: Infinity,
        alerts: []
      },
      responseTime: {
        avg: 0,
        max: 0,
        min: Infinity,
        alerts: []
      }
    };

    let totalMemory = 0;
    let totalTiming = 0;
    let timingCount = 0;

    this.performance.forEach(metric => {
      if (metric.memory) {
        totalMemory += metric.memory;
        insights.memoryUsage.max = Math.max(insights.memoryUsage.max, metric.memory);
        insights.memoryUsage.min = Math.min(insights.memoryUsage.min, metric.memory);
        
        if (metric.memory > CONFIG.performanceThresholds.memoryUsage) {
          insights.memoryUsage.alerts.push({
            timestamp: metric.timestamp,
            value: metric.memory,
            category: metric.category
          });
        }
      }

      if (metric.timing) {
        totalTiming += metric.timing;
        timingCount++;
        insights.responseTime.max = Math.max(insights.responseTime.max, metric.timing);
        insights.responseTime.min = Math.min(insights.responseTime.min, metric.timing);
        
        if (metric.timing > CONFIG.performanceThresholds.responseTime) {
          insights.responseTime.alerts.push({
            timestamp: metric.timestamp,
            value: metric.timing,
            category: metric.category
          });
        }
      }
    });

    insights.memoryUsage.avg = totalMemory / this.performance.length;
    insights.responseTime.avg = timingCount > 0 ? totalTiming / timingCount : 0;

    return insights;
  }

  /**
   * Generate recommendations based on analysis
   */
  generateRecommendations() {
    const recommendations = [];

    // Error rate recommendations
    const errorRate = this.summary.errorCount / this.summary.totalEntries;
    if (errorRate > CONFIG.performanceThresholds.errorRate) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Error Rate',
        issue: `High error rate detected: ${(errorRate * 100).toFixed(2)}%`,
        recommendation: 'Investigate and fix the most common error patterns',
        action: 'Review top error patterns and implement fixes'
      });
    }

    // Critical errors
    if (this.summary.criticalCount > 0) {
      recommendations.push({
        priority: 'CRITICAL',
        category: 'Critical Errors',
        issue: `${this.summary.criticalCount} critical errors found`,
        recommendation: 'Immediately investigate critical errors',
        action: 'Check logs for critical keywords and system failures'
      });
    }

    // Performance recommendations
    const perfInsights = this.analyzePerformance();
    if (perfInsights) {
      if (perfInsights.memoryUsage.alerts.length > 0) {
        recommendations.push({
          priority: 'MEDIUM',
          category: 'Memory Usage',
          issue: `${perfInsights.memoryUsage.alerts.length} memory usage alerts`,
          recommendation: 'Optimize memory usage in affected components',
          action: 'Profile memory usage and implement optimizations'
        });
      }

      if (perfInsights.responseTime.alerts.length > 0) {
        recommendations.push({
          priority: 'MEDIUM',
          category: 'Response Time',
          issue: `${perfInsights.responseTime.alerts.length} slow response alerts`,
          recommendation: 'Optimize slow operations and API calls',
          action: 'Implement caching and optimize database queries'
        });
      }
    }

    return recommendations.sort((a, b) => {
      const priorityOrder = { 'CRITICAL': 3, 'HIGH': 2, 'MEDIUM': 1, 'LOW': 0 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  /**
   * Generate and display comprehensive report
   */
  generateReport() {
    console.log('\n🔍 ERROR MONITORING REPORT');
    console.log('=' .repeat(50));
    
    // Summary
    console.log('\n📊 SUMMARY');
    console.log('-'.repeat(20));
    console.log(`Total Log Entries: ${this.summary.totalEntries}`);
    console.log(`Errors: ${this.summary.errorCount}`);
    console.log(`Warnings: ${this.summary.warningCount}`);
    console.log(`Critical Issues: ${this.summary.criticalCount}`);
    
    if (this.summary.timeRange) {
      console.log(`Time Range: ${this.summary.timeRange.start.toISOString()} to ${this.summary.timeRange.end.toISOString()}`);
    }

    // Recent critical errors
    if (this.errors.length > 0) {
      console.log('\n🚨 RECENT ERRORS (Top 5)');
      console.log('-'.repeat(20));
      this.errors.slice(0, 5).forEach((error, index) => {
        console.log(`${index + 1}. [${error.timestamp || 'Unknown'}] ${error.message}`);
        if (error.category) console.log(`   Category: ${error.category}`);
        if (error.component) console.log(`   Component: ${error.component}`);
      });
    }

    // Error patterns
    const patterns = this.analyzePatterns();
    if (patterns.length > 0) {
      console.log('\n📈 ERROR PATTERNS (Top 5)');
      console.log('-'.repeat(20));
      patterns.slice(0, 5).forEach(([pattern, data], index) => {
        console.log(`${index + 1}. Count: ${data.count} | Level: ${data.level}`);
        console.log(`   Pattern: ${pattern}`);
        console.log(`   Example: ${data.examples[0]}`);
        console.log('');
      });
    }

    // Performance insights
    const perfInsights = this.analyzePerformance();
    if (perfInsights) {
      console.log('\n⚡ PERFORMANCE INSIGHTS');
      console.log('-'.repeat(20));
      console.log(`Average Memory Usage: ${(perfInsights.memoryUsage.avg / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Peak Memory Usage: ${(perfInsights.memoryUsage.max / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Average Response Time: ${perfInsights.responseTime.avg.toFixed(2)} ms`);
      console.log(`Max Response Time: ${perfInsights.responseTime.max.toFixed(2)} ms`);
      
      if (perfInsights.memoryUsage.alerts.length > 0) {
        console.log(`Memory Alerts: ${perfInsights.memoryUsage.alerts.length}`);
      }
      if (perfInsights.responseTime.alerts.length > 0) {
        console.log(`Performance Alerts: ${perfInsights.responseTime.alerts.length}`);
      }
    }

    // Recommendations
    const recommendations = this.generateRecommendations();
    if (recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS');
      console.log('-'.repeat(20));
      recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority}] ${rec.category}`);
        console.log(`   Issue: ${rec.issue}`);
        console.log(`   Recommendation: ${rec.recommendation}`);
        console.log(`   Action: ${rec.action}`);
        console.log('');
      });
    }

    // Health score
    const healthScore = this.calculateHealthScore();
    console.log('\n🏥 SYSTEM HEALTH SCORE');
    console.log('-'.repeat(20));
    console.log(`Score: ${healthScore.score}/100 (${healthScore.grade})`);
    console.log(`Status: ${healthScore.status}`);
    
    console.log('\n' + '='.repeat(50));
    console.log('Report generated at:', new Date().toISOString());
  }

  /**
   * Calculate system health score
   */
  calculateHealthScore() {
    let score = 100;
    
    // Deduct points for errors
    const errorRate = this.summary.errorCount / Math.max(this.summary.totalEntries, 1);
    score -= Math.min(errorRate * 100 * 2, 50); // Max 50 points deduction
    
    // Deduct points for critical issues
    score -= Math.min(this.summary.criticalCount * 10, 30); // Max 30 points deduction
    
    // Deduct points for warnings
    const warningRate = this.summary.warningCount / Math.max(this.summary.totalEntries, 1);
    score -= Math.min(warningRate * 100, 20); // Max 20 points deduction
    
    score = Math.max(0, Math.round(score));
    
    let grade, status;
    if (score >= 90) {
      grade = 'A';
      status = 'Excellent';
    } else if (score >= 80) {
      grade = 'B';
      status = 'Good';
    } else if (score >= 70) {
      grade = 'C';
      status = 'Fair';
    } else if (score >= 60) {
      grade = 'D';
      status = 'Poor';
    } else {
      grade = 'F';
      status = 'Critical';
    }
    
    return { score, grade, status };
  }

  /**
   * Export report to file
   */
  exportReport(filename) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.summary,
      recentErrors: this.errors.slice(0, 10),
      patterns: this.analyzePatterns(),
      performance: this.analyzePerformance(),
      recommendations: this.generateRecommendations(),
      healthScore: this.calculateHealthScore()
    };
    
    const reportPath = path.join(CONFIG.logsDir, filename || 'error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Report exported to: ${reportPath}`);
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Error Monitor...\n');
  
  const monitor = new ErrorMonitor();
  
  if (!monitor.init()) {
    process.exit(1);
  }
  
  await monitor.readLogs();
  monitor.generateReport();
  
  // Export report if requested
  if (process.argv.includes('--export')) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    monitor.exportReport(`error-report-${timestamp}.json`);
  }
  
  // Exit with appropriate code based on health score
  const healthScore = monitor.calculateHealthScore();
  if (healthScore.score < 70) {
    console.log('\n⚠️  System health is below acceptable threshold');
    process.exit(1);
  } else {
    console.log('\n✅ System health is acceptable');
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error monitor failed:', error);
    process.exit(1);
  });
}

module.exports = { ErrorMonitor, CONFIG }; 
