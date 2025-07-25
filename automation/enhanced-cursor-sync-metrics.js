#!/usr/bin/env node

/**
 * Enhanced Cursor Sync Metrics Collection Script
 * Collects and stores comprehensive metrics about enhanced cursor sync automation
 */

const fs = require('fs');
const path = require('path');

class EnhancedCursorSyncMetrics {
  constructor() {
    this.projectRoot = process.cwd();
    this.metricsDir = path.join(__dirname, 'metrics');
    this.logFile = path.join(__dirname, 'logs', 'enhanced-cursor-sync-cron.log');
    this.metricsFile = path.join(this.metricsDir, 'enhanced-sync-metrics.json');
    this.ensureMetricsDirectory();
  }

  ensureMetricsDirectory() {
    if (!fs.existsSync(this.metricsDir)) {
      fs.mkdirSync(this.metricsDir, { recursive: true });
    }
  }

  loadMetrics() {
    if (fs.existsSync(this.metricsFile)) {
      try {
        return JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'));
      } catch (error) {
        console.error('Error loading metrics:', error.message);
      }
    }
    return {
      totalSyncs: 0,
      successfulSyncs: 0,
      failedSyncs: 0,
      totalDuration: 0,
      averageDuration: 0,
      totalFiles: 0,
      lastSync: null,
      computerStats: {},
      dailyStats: {},
      errorStats: {},
      performanceStats: {
        fastestSync: null,
        slowestSync: null,
        averageFilesPerSync: 0
      }
    };
  }

  saveMetrics(metrics) {
    try {
      fs.writeFileSync(this.metricsFile, JSON.stringify(metrics, null, 2));
    } catch (error) {
      console.error('Error saving metrics:', error.message);
    }
  }

  analyzeLogFile() {
    if (!fs.existsSync(this.logFile)) {
      return { syncs: 0, errors: 0, lastSync: null, durations: [], fileCounts: [] };
    }

    try {
      const logContent = fs.readFileSync(this.logFile, 'utf8');
      const lines = logContent.split('\n');
      
      let syncs = 0;
      let errors = 0;
      let lastSync = null;
      let durations = [];
      let fileCounts = [];

      for (const line of lines) {
        if (line.includes('Enhanced cursor sync completed successfully')) {
          syncs++;
          const timestamp = line.match(/\[(.*?)\]/);
          if (timestamp) {
            lastSync = timestamp[1];
          }
          
          // Extract duration
          const durationMatch = line.match(/(\d+)ms/);
          if (durationMatch) {
            durations.push(parseInt(durationMatch[1]));
          }
          
          // Extract file count
          const fileMatch = line.match(/(\d+) files to sync/);
          if (fileMatch) {
            fileCounts.push(parseInt(fileMatch[1]));
          }
        } else if (line.includes('ERROR') || line.includes('FAILED')) {
          errors++;
        }
      }

      return { syncs, errors, lastSync, durations, fileCounts };
    } catch (error) {
      console.error('Error analyzing log file:', error.message);
      return { syncs: 0, errors: 0, lastSync: null, durations: [], fileCounts: [] };
    }
  }

  updateMetrics() {
    const metrics = this.loadMetrics();
    const logAnalysis = this.analyzeLogFile();
    const today = new Date().toISOString().split('T')[0];

    // Update basic metrics
    metrics.totalSyncs += logAnalysis.syncs;
    metrics.successfulSyncs += logAnalysis.syncs;
    metrics.failedSyncs += logAnalysis.errors;
    
    if (logAnalysis.lastSync) {
      metrics.lastSync = logAnalysis.lastSync;
    }

    // Update duration metrics
    if (logAnalysis.durations.length > 0) {
      const totalDuration = logAnalysis.durations.reduce((sum, duration) => sum + duration, 0);
      metrics.totalDuration += totalDuration;
      metrics.averageDuration = metrics.totalDuration / metrics.totalSyncs;
      
      // Update performance stats
      const minDuration = Math.min(...logAnalysis.durations);
      const maxDuration = Math.max(...logAnalysis.durations);
      
      if (!metrics.performanceStats.fastestSync || minDuration < metrics.performanceStats.fastestSync) {
        metrics.performanceStats.fastestSync = minDuration;
      }
      
      if (!metrics.performanceStats.slowestSync || maxDuration > metrics.performanceStats.slowestSync) {
        metrics.performanceStats.slowestSync = maxDuration;
      }
    }

    // Update file count metrics
    if (logAnalysis.fileCounts.length > 0) {
      const totalFiles = logAnalysis.fileCounts.reduce((sum, count) => sum + count, 0);
      metrics.totalFiles += totalFiles;
      metrics.performanceStats.averageFilesPerSync = metrics.totalFiles / metrics.totalSyncs;
    }

    // Update daily stats
    if (!metrics.dailyStats[today]) {
      metrics.dailyStats[today] = {
        syncs: 0,
        errors: 0,
        totalDuration: 0,
        totalFiles: 0,
        timestamp: new Date().toISOString()
      };
    }
    
    metrics.dailyStats[today].syncs += logAnalysis.syncs;
    metrics.dailyStats[today].errors += logAnalysis.errors;
    metrics.dailyStats[today].totalDuration += logAnalysis.durations.reduce((sum, duration) => sum + duration, 0);
    metrics.dailyStats[today].totalFiles += logAnalysis.fileCounts.reduce((sum, count) => sum + count, 0);

    // Calculate success rate
    const totalAttempts = metrics.successfulSyncs + metrics.failedSyncs;
    metrics.successRate = totalAttempts > 0 ? (metrics.successfulSyncs / totalAttempts * 100).toFixed(2) : 0;

    // Keep only last 30 days of daily stats
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    Object.keys(metrics.dailyStats).forEach(date => {
      if (new Date(date) < thirtyDaysAgo) {
        delete metrics.dailyStats[date];
      }
    });

    this.saveMetrics(metrics);
    
    console.log(`📊 Enhanced metrics updated: ${logAnalysis.syncs} syncs, ${logAnalysis.errors} errors`);
    console.log(`📈 Success rate: ${metrics.successRate}%`);
    console.log(`⏱️ Average duration: ${metrics.averageDuration.toFixed(2)}ms`);
  }

  generateReport() {
    const metrics = this.loadMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSyncs: metrics.totalSyncs,
        successfulSyncs: metrics.successfulSyncs,
        failedSyncs: metrics.failedSyncs,
        successRate: metrics.successRate + '%',
        lastSync: metrics.lastSync,
        averageDuration: metrics.averageDuration.toFixed(2) + 'ms',
        totalFiles: metrics.totalFiles,
        averageFilesPerSync: metrics.performanceStats.averageFilesPerSync.toFixed(2)
      },
      performance: {
        fastestSync: metrics.performanceStats.fastestSync ? metrics.performanceStats.fastestSync + 'ms' : 'N/A',
        slowestSync: metrics.performanceStats.slowestSync ? metrics.performanceStats.slowestSync + 'ms' : 'N/A',
        averageDuration: metrics.averageDuration.toFixed(2) + 'ms'
      },
      dailyStats: metrics.dailyStats,
      computerStats: metrics.computerStats,
      recommendations: this.generateRecommendations(metrics)
    };

    const reportFile = path.join(this.metricsDir, `enhanced-sync-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📄 Enhanced report generated: ${reportFile}`);
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    if (metrics.successRate < 90) {
      recommendations.push('Consider increasing retry attempts or adjusting sync interval');
    }
    
    if (metrics.failedSyncs > metrics.successfulSyncs * 0.1) {
      recommendations.push('High failure rate detected - check network connectivity and git configuration');
    }
    
    if (!metrics.lastSync) {
      recommendations.push('No recent syncs detected - check if automation is running');
    }
    
    if (metrics.averageDuration > 30000) {
      recommendations.push('Sync duration is high - consider optimizing file filtering or reducing sync frequency');
    }
    
    if (metrics.performanceStats.averageFilesPerSync > 50) {
      recommendations.push('Large number of files per sync - consider more frequent smaller commits');
    }
    
    return recommendations;
  }

  generateDashboard() {
    const metrics = this.loadMetrics();
    const dashboard = {
      title: 'Enhanced Cursor Sync Dashboard',
      timestamp: new Date().toISOString(),
      stats: {
        totalSyncs: metrics.totalSyncs,
        successRate: metrics.successRate + '%',
        averageDuration: metrics.averageDuration.toFixed(2) + 'ms',
        totalFiles: metrics.totalFiles
      },
      recentActivity: this.getRecentActivity(),
      performance: {
        fastest: metrics.performanceStats.fastestSync ? metrics.performanceStats.fastestSync + 'ms' : 'N/A',
        slowest: metrics.performanceStats.slowestSync ? metrics.performanceStats.slowestSync + 'ms' : 'N/A',
        average: metrics.averageDuration.toFixed(2) + 'ms'
      }
    };

    const dashboardFile = path.join(this.metricsDir, 'enhanced-sync-dashboard.json');
    fs.writeFileSync(dashboardFile, JSON.stringify(dashboard, null, 2));
    
    console.log(`📊 Enhanced dashboard generated: ${dashboardFile}`);
  }

  getRecentActivity() {
    const logFile = path.join(__dirname, 'logs', 'enhanced-cursor-sync.log');
    if (!fs.existsSync(logFile)) {
      return [];
    }

    try {
      const logContent = fs.readFileSync(logFile, 'utf8');
      const lines = logContent.split('\n').slice(-20); // Last 20 lines
      return lines.filter(line => line.trim().length > 0);
    } catch (error) {
      return [];
    }
  }
}

// Main execution
const metrics = new EnhancedCursorSyncMetrics();
metrics.updateMetrics();
metrics.generateReport();
metrics.generateDashboard(); 