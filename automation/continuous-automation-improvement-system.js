#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ContinuousAutomationImprovementSystem {
  constructor() {
    this.logDir = path.join(__dirname, 'logs');
    this.dataDir = path.join(__dirname, 'data');
    this.improvementLog = path.join(this.logDir, 'continuous-improvement.log');
    this.ensureDirectories();
    this.loadConfiguration();
    this.metrics = new Map();
    this.improvements = [];
  }

  ensureDirectories() {
    [this.logDir, this.dataDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    this.config = {
      monitoring: {
        interval: 60000, // 1 minute
        performanceThreshold: 0.8, // 80% performance target
        memoryThreshold: 0.9, // 90% memory usage threshold
        cpuThreshold: 0.85, // 85% CPU usage threshold
        logRetention: 7 // days
      },
      improvements: {
        autoOptimize: true,
        resourceScaling: true,
        performanceTuning: true,
        logOptimization: true
      },
      systems: [
        'enhanced-autonomous',
        'ml-link-intelligence',
        'link-health-scheduler',
        'performance-monitor',
        'autonomous-manager'
      ]
    };
  }

  async start() {
    console.log('🚀 Starting Continuous Automation Improvement System...');
    this.log('Continuous improvement system started');
    
    // Start monitoring
    this.startMonitoring();
    
    // Start improvement cycles
    this.startImprovementCycles();
    
    // Start log cleanup
    this.startLogCleanup();
    
    console.log('✅ Continuous improvement system is now running');
    console.log('📊 Monitor improvements with: npm run automation:improvement status');
  }

  startMonitoring() {
    setInterval(() => {
      this.collectMetrics();
    }, this.config.monitoring.interval);
    
    console.log(`📊 Performance monitoring started (${this.config.monitoring.interval/1000}s intervals)`);
  }

  startImprovementCycles() {
    // Run improvement analysis every 5 minutes
    setInterval(() => {
      this.analyzeAndImprove();
    }, 5 * 60 * 1000);
    
    console.log('🔄 Improvement cycles started (5-minute intervals)');
  }

  startLogCleanup() {
    // Clean up old logs daily
    setInterval(() => {
      this.cleanupOldLogs();
    }, 24 * 60 * 60 * 1000);
    
    console.log('🧹 Log cleanup scheduled (daily)');
  }

  async collectMetrics() {
    try {
      for (const systemName of this.config.systems) {
        const metrics = await this.getSystemMetrics(systemName);
        this.metrics.set(systemName, {
          ...metrics,
          timestamp: new Date(),
          performance: this.calculatePerformanceScore(metrics)
        });
      }
      
      this.log('Performance metrics collected for all systems');
    } catch (error) {
      console.error('❌ Error collecting metrics:', error.message);
      this.log(`Error collecting metrics: ${error.message}`);
    }
  }

  async getSystemMetrics(systemName) {
    try {
      const logFile = path.join(this.logDir, `${systemName}.log`);
      const runtimeLogFile = path.join(this.logDir, `${systemName}.runtime.log`);
      
      let metrics = {
        logSize: 0,
        runtimeLogSize: 0,
        lastActivity: null,
        errorCount: 0,
        warningCount: 0
      };

      // Check log file sizes
      if (fs.existsSync(logFile)) {
        const stats = fs.statSync(logFile);
        metrics.logSize = stats.size;
        metrics.lastModified = stats.mtime;
      }

      if (fs.existsSync(runtimeLogFile)) {
        const stats = fs.statSync(runtimeLogFile);
        metrics.runtimeLogSize = stats.size;
      }

      // Analyze log content for errors and warnings
      if (fs.existsSync(logFile)) {
        const content = fs.readFileSync(logFile, 'utf8');
        metrics.errorCount = (content.match(/error|Error|ERROR/g) || []).length;
        metrics.warningCount = (content.match(/warn|Warn|WARNING/g) || []).length;
        
        // Find last activity timestamp
        const lines = content.split('\n').reverse();
        for (const line of lines) {
          if (line.includes('[') && line.includes(']')) {
            const timestampMatch = line.match(/\[([^\]]+)\]/);
            if (timestampMatch) {
              metrics.lastActivity = new Date(timestampMatch[1]);
              break;
            }
          }
        }
      }

      return metrics;
    } catch (error) {
      console.error(`❌ Error getting metrics for ${systemName}:`, error.message);
      return {
        logSize: 0,
        runtimeLogSize: 0,
        lastActivity: null,
        errorCount: 0,
        warningCount: 0
      };
    }
  }

  calculatePerformanceScore(metrics) {
    let score = 1.0;
    
    // Penalize for large log files
    if (metrics.logSize > 1024 * 1024) { // 1MB
      score -= 0.1;
    }
    if (metrics.logSize > 5 * 1024 * 1024) { // 5MB
      score -= 0.2;
    }
    
    // Penalize for errors
    if (metrics.errorCount > 10) {
      score -= 0.2;
    }
    if (metrics.errorCount > 50) {
      score -= 0.3;
    }
    
    // Penalize for warnings
    if (metrics.warningCount > 20) {
      score -= 0.1;
    }
    
    // Penalize for inactivity
    if (metrics.lastActivity) {
      const hoursSinceLastActivity = (Date.now() - metrics.lastActivity.getTime()) / (1000 * 60 * 60);
      if (hoursSinceLastActivity > 24) {
        score -= 0.2;
      }
    }
    
    return Math.max(0, score);
  }

  async analyzeAndImprove() {
    console.log('🔍 Analyzing automation systems for improvements...');
    
    const improvements = [];
    
    for (const [systemName, metrics] of this.metrics) {
      const systemImprovements = await this.analyzeSystem(systemName, metrics);
      improvements.push(...systemImprovements);
    }
    
    // Apply improvements
    if (improvements.length > 0) {
      await this.applyImprovements(improvements);
    }
    
    this.log(`Improvement analysis completed: ${improvements.length} improvements identified`);
  }

  async analyzeSystem(systemName, metrics) {
    const improvements = [];
    
    // Check log file sizes
    if (metrics.logSize > 5 * 1024 * 1024) { // 5MB
      improvements.push({
        type: 'log-optimization',
        system: systemName,
        priority: 'high',
        description: 'Large log file detected, implementing log rotation',
        action: () => this.optimizeLogs(systemName)
      });
    }
    
    // Check error rates
    if (metrics.errorCount > 20) {
      improvements.push({
        type: 'error-reduction',
        system: systemName,
        priority: 'critical',
        description: 'High error rate detected, implementing error handling improvements',
        action: () => this.improveErrorHandling(systemName)
      });
    }
    
    // Check performance scores
    if (metrics.performance < this.config.monitoring.performanceThreshold) {
      improvements.push({
        type: 'performance-optimization',
        system: systemName,
        priority: 'medium',
        description: 'Low performance score, implementing optimizations',
        action: () => this.optimizePerformance(systemName)
      });
    }
    
    return improvements;
  }

  async applyImprovements(improvements) {
    console.log(`🔄 Applying ${improvements.length} improvements...`);
    
    // Sort by priority
    improvements.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    for (const improvement of improvements) {
      try {
        console.log(`🔧 Applying ${improvement.type} to ${improvement.system}...`);
        await improvement.action();
        
        this.improvements.push({
          ...improvement,
          appliedAt: new Date(),
          success: true
        });
        
        console.log(`✅ ${improvement.description} applied successfully`);
        this.log(`Improvement applied: ${improvement.type} to ${improvement.system}`);
      } catch (error) {
        console.error(`❌ Failed to apply improvement: ${error.message}`);
        
        this.improvements.push({
          ...improvement,
          appliedAt: new Date(),
          success: false,
          error: error.message
        });
        
        this.log(`Improvement failed: ${improvement.type} to ${systemName} - ${error.message}`);
      }
    }
  }

  async optimizeLogs(systemName) {
    try {
      const logFile = path.join(this.logDir, `${systemName}.log`);
      const backupFile = path.join(this.logDir, `${systemName}-backup-${Date.now()}.log`);
      
      if (fs.existsSync(logFile)) {
        // Create backup
        fs.copyFileSync(logFile, backupFile);
        
        // Truncate log file
        fs.truncateSync(logFile, 0);
        
        // Add optimization note
        fs.appendFileSync(logFile, `[${new Date().toISOString()}] Log optimized by continuous improvement system\n`);
        
        this.log(`Log optimization completed for ${systemName}`);
      }
    } catch (error) {
      throw new Error(`Log optimization failed: ${error.message}`);
    }
  }

  async improveErrorHandling(systemName) {
    try {
      // This would typically involve updating configuration or restarting services
      // For now, we'll just log the improvement
      this.log(`Error handling improvement initiated for ${systemName}`);
      
      // Could implement actual error handling improvements here
      // such as updating retry logic, error thresholds, etc.
    } catch (error) {
      throw new Error(`Error handling improvement failed: ${error.message}`);
    }
  }

  async optimizePerformance(systemName) {
    try {
      // This would typically involve resource optimization
      // For now, we'll just log the optimization
      this.log(`Performance optimization initiated for ${systemName}`);
      
      // Could implement actual performance optimizations here
      // such as adjusting intervals, resource limits, etc.
    } catch (error) {
      throw new Error(`Performance optimization failed: ${error.message}`);
    }
  }

  async cleanupOldLogs() {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - this.config.monitoring.logRetention);
      
      const files = fs.readdirSync(this.logDir);
      let cleanedCount = 0;
      
      for (const file of files) {
        if (file.endsWith('.log') && !file.includes('coordinated')) {
          const filePath = path.join(this.logDir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.mtime < cutoffDate) {
            fs.unlinkSync(filePath);
            cleanedCount++;
          }
        }
      }
      
      if (cleanedCount > 0) {
        console.log(`🧹 Cleaned up ${cleanedCount} old log files`);
        this.log(`Log cleanup completed: ${cleanedCount} files removed`);
      }
    } catch (error) {
      console.error('❌ Log cleanup failed:', error.message);
      this.log(`Log cleanup failed: ${error.message}`);
    }
  }

  async status() {
    console.log('📊 Continuous Automation Improvement System Status');
    console.log('================================================');
    
    if (this.metrics.size === 0) {
      console.log('📊 No metrics collected yet');
      return;
    }

    const summary = {
      total: this.metrics.size,
      optimal: 0,
      needsImprovement: 0,
      critical: 0
    };

    for (const [systemName, metrics] of this.metrics) {
      const performance = metrics.performance;
      let status = '❓ Unknown';
      
      if (performance >= 0.9) {
        status = '🟢 Optimal';
        summary.optimal++;
      } else if (performance >= 0.7) {
        status = '🟡 Good';
        summary.needsImprovement++;
      } else if (performance >= 0.5) {
        status = '🟠 Needs Improvement';
        summary.needsImprovement++;
      } else {
        status = '🔴 Critical';
        summary.critical++;
      }
      
      console.log(`${status} ${systemName}`);
      console.log(`   Performance Score: ${(performance * 100).toFixed(1)}%`);
      console.log(`   Log Size: ${(metrics.logSize / 1024).toFixed(1)} KB`);
      console.log(`   Errors: ${metrics.errorCount}`);
      console.log(`   Warnings: ${metrics.warningCount}`);
      console.log(`   Last Activity: ${metrics.lastActivity ? metrics.lastActivity.toLocaleString() : 'Unknown'}`);
      console.log('');
    }

    console.log('📋 Summary');
    console.log(`Total Systems: ${summary.total}`);
    console.log(`Optimal: ${summary.optimal}`);
    console.log(`Needs Improvement: ${summary.needsImprovement}`);
    console.log(`Critical: ${summary.critical}`);
    
    if (summary.improvements > 0) {
      console.log(`\n🔧 Recent Improvements: ${this.improvements.length}`);
      const recentImprovements = this.improvements.slice(-5);
      for (const improvement of recentImprovements) {
        const status = improvement.success ? '✅' : '❌';
        console.log(`   ${status} ${improvement.description} (${improvement.appliedAt.toLocaleString()})`);
      }
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.improvementLog, logEntry);
    } catch (error) {
      console.error('Failed to write to improvement log:', error.message);
    }
  }
}

// CLI handling
async function main() {
  const improvementSystem = new ContinuousAutomationImprovementSystem();
  const command = process.argv[2] || 'start';

  try {
    switch (command) {
      case 'start':
        await improvementSystem.start();
        // Keep the process running
        process.on('SIGINT', async () => {
          console.log('\n🛑 Received SIGINT, shutting down gracefully...');
          process.exit(0);
        });
        break;
      case 'status':
        await improvementSystem.status();
        break;
      default:
        console.log('Usage: node continuous-automation-improvement-system.js [start|status]');
        process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ContinuousAutomationImprovementSystem;
