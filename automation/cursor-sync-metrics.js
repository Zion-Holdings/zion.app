#!/usr/bin/env node

/**
 * Cursor Sync Metrics Collection Script
 * Collects and stores metrics about cursor sync automation
 */

const fs = require('fs');
const path = require('path');

class CursorSyncMetrics {
  constructor() {
    this.projectRoot = process.cwd();
    this.metricsDir = path.join(__dirname, 'metrics');
    this.logFile = path.join(__dirname, 'logs', 'cursor-sync-cron.log');
    this.metricsFile = path.join(this.metricsDir, 'cursor-sync-metrics.json');
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
      lastSync: null,
      averageSyncTime: 0,
      errors: [],
      dailyStats: {}
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
      return { syncs: 0, errors: 0, lastSync: null };
    }

    try {
      const logContent = fs.readFileSync(this.logFile, 'utf8');
      const lines = logContent.split('\n');
      
      let syncs = 0;
      let errors = 0;
      let lastSync = null;

      for (const line of lines) {
        if (line.includes('Cursor sync completed successfully')) {
          syncs++;
          const timestamp = line.match(/\[(.*?)\]/);
          if (timestamp) {
            lastSync = timestamp[1];
          }
        } else if (line.includes('ERROR') || line.includes('FAILED')) {
          errors++;
        }
      }

      return { syncs, errors, lastSync };
    } catch (error) {
      console.error('Error analyzing log file:', error.message);
      return { syncs: 0, errors: 0, lastSync: null };
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

    // Update daily stats
    if (!metrics.dailyStats[today]) {
      metrics.dailyStats[today] = {
        syncs: 0,
        errors: 0,
        timestamp: new Date().toISOString()
      };
    }
    
    metrics.dailyStats[today].syncs += logAnalysis.syncs;
    metrics.dailyStats[today].errors += logAnalysis.errors;

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
    
    console.log(`📊 Metrics updated: ${logAnalysis.syncs} syncs, ${logAnalysis.errors} errors`);
    console.log(`📈 Success rate: ${metrics.successRate}%`);
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
        lastSync: metrics.lastSync
      },
      dailyStats: metrics.dailyStats,
      recommendations: this.generateRecommendations(metrics)
    };

    const reportFile = path.join(this.metricsDir, `cursor-sync-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report generated: ${reportFile}`);
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
    
    return recommendations;
  }
}

// Main execution
const metrics = new CursorSyncMetrics();
metrics.updateMetrics();
metrics.generateReport(); 