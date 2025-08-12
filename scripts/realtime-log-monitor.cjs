#!/usr/bin/env node

/**
 * Real-time Log Monitor
 * Provides live monitoring of logs with real-time alerts and health scoring
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configuration
const CONFIG = {
  logsDir: path.join(__dirname, '..', 'logs'),
  monitorInterval: 2000, // 2 seconds
  alertThresholds: {
    errorRate: 0.10, // 10% error rate
    criticalErrors: 3,
    responseTime: 5000, // 5 seconds
    memoryUsage: 1024 * 1024 * 1024, // 1GB
  },
  maxLogLines: 1000,
  dashboardRefreshRate: 1000, // 1 second
};

class RealtimeLogMonitor {
  constructor() {
    this.stats = {
      totalEntries: 0,
      errors: 0,
      warnings: 0,
      critical: 0,
      lastUpdate: new Date(),
      recentEntries: [],
      alerts: [],
      healthScore: 100,
    };
    
    this.watchers = new Map();
    this.isRunning = false;
    this.dashboardInterval = null;
  }

  /**
   * Start monitoring
   */
  async start() {
    console.log('🚀 Starting Real-time Log Monitor...\n');
    
    // Ensure logs directory exists
    if (!fs.existsSync(CONFIG.logsDir)) {
      fs.mkdirSync(CONFIG.logsDir, { recursive: true });
      console.log('📁 Created logs directory');
    }

    this.isRunning = true;
    this.setupFileWatchers();
    this.startDashboard();
    this.setupGracefulShutdown();
    
    console.log('📊 Real-time monitoring active. Press Ctrl+C to stop.\n');
  }

  /**
   * Setup file watchers for all log files
   */
  setupFileWatchers() {
    // Watch log directory for new files
    if (fs.existsSync(CONFIG.logsDir)) {
      const watcher = fs.watch(CONFIG.logsDir, (eventType, filename) => {
        if (eventType === 'rename' && filename && filename.endsWith('.log')) {
          this.watchLogFile(path.join(CONFIG.logsDir, filename));
        }
      });
      
      this.watchers.set('directory', watcher);
      
      // Watch existing log files
      const files = fs.readdirSync(CONFIG.logsDir);
      files.filter(f => f.endsWith('.log')).forEach(file => {
        this.watchLogFile(path.join(CONFIG.logsDir, file));
      });
    }
  }

  /**
   * Watch individual log file
   */
  watchLogFile(filePath) {
    if (this.watchers.has(filePath)) return; // Already watching
    
    let lastSize = 0;
    try {
      lastSize = fs.statSync(filePath).size;
    } catch (error) {
      return; // File doesn't exist
    }

    const watcher = fs.watchFile(filePath, { interval: CONFIG.monitorInterval }, (curr, prev) => {
      if (curr.size > prev.size) {
        this.processNewLogData(filePath, prev.size, curr.size);
      }
    });

    this.watchers.set(filePath, watcher);
    console.log(`👁️  Watching: ${path.basename(filePath)}`);
  }

  /**
   * Process new log data
   */
  processNewLogData(filePath, oldSize, newSize) {
    try {
      const fd = fs.openSync(filePath, 'r');
      const buffer = Buffer.alloc(newSize - oldSize);
      fs.readSync(fd, buffer, 0, buffer.length, oldSize);
      fs.closeSync(fd);
      
      const newData = buffer.toString();
      const lines = newData.split('\n').filter(line => line.trim());
      
      lines.forEach(line => this.processLogLine(line, path.basename(filePath)));
      
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error.message);
    }
  }

  /**
   * Process individual log line
   */
  processLogLine(line, filename) {
    try {
      // Try to parse as JSON first
      const entry = JSON.parse(line);
      this.processStructuredEntry(entry, filename);
    } catch (error) {
      // Handle plain text logs
      this.processPlainTextEntry(line, filename);
    }
  }

  /**
   * Process structured log entry
   */
  processStructuredEntry(entry, filename) {
    this.stats.totalEntries++;
    
    const logEntry = {
      timestamp: entry.timestamp || new Date().toISOString(),
      level: entry.level || 'info',
      message: entry.message || line,
      category: entry.category || 'unknown',
      source: filename,
      metadata: entry.metadata || {},
    };

    this.categorizeEntry(logEntry);
    this.addToRecentEntries(logEntry);
    this.checkAlerts(logEntry);
    this.updateHealthScore();
  }

  /**
   * Process plain text log entry
   */
  processPlainTextEntry(line, filename) {
    this.stats.totalEntries++;
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: this.detectLogLevel(line),
      message: line,
      category: 'system',
      source: filename,
      metadata: {},
    };

    this.categorizeEntry(logEntry);
    this.addToRecentEntries(logEntry);
    this.checkAlerts(logEntry);
    this.updateHealthScore();
  }

  /**
   * Detect log level from plain text (improved version)
   */
  detectLogLevel(text) {
    const upperText = text.toUpperCase();
    
    // Success indicators
    const successIndicators = [
      '✅', '✓', 'SUCCESS', 'COMPLETE', 'FIXED', 'RESOLVED', 'WORKING',
      'BUILT', 'DEPLOYED', 'HEALTHY', 'READY', 'ACTIVE', 'OPERATIONAL'
    ];
    
    if (successIndicators.some(indicator => upperText.includes(indicator))) {
      return 'info';
    }
    
    // Critical errors
    if (upperText.includes('CRITICAL') || upperText.includes('FATAL') || 
        upperText.includes('CRASH') || upperText.includes('EXCEPTION')) {
      return 'critical';
    }
    
    // Errors
    if (upperText.match(/^ERROR:/) || upperText.includes('FAILED') || 
        upperText.includes('TIMEOUT') || upperText.includes('PERMISSION DENIED')) {
      return 'error';
    }
    
    // Warnings
    if (upperText.includes('WARN') || upperText.includes('DEPRECATED') || 
        upperText.includes('SLOW')) {
      return 'warn';
    }
    
    return 'info';
  }

  /**
   * Categorize log entry
   */
  categorizeEntry(entry) {
    switch (entry.level) {
      case 'critical':
        this.stats.critical++;
        break;
      case 'error':
        this.stats.errors++;
        break;
      case 'warn':
        this.stats.warnings++;
        break;
    }
    
    this.stats.lastUpdate = new Date();
  }

  /**
   * Add to recent entries buffer
   */
  addToRecentEntries(entry) {
    this.stats.recentEntries.unshift(entry);
    if (this.stats.recentEntries.length > CONFIG.maxLogLines) {
      this.stats.recentEntries = this.stats.recentEntries.slice(0, CONFIG.maxLogLines);
    }
  }

  /**
   * Check for alerts
   */
  checkAlerts(entry) {
    const now = new Date();
    
    // Critical error alert
    if (entry.level === 'critical') {
      this.addAlert('CRITICAL', `Critical error detected: ${entry.message}`, now);
    }
    
    // Error rate alert
    const recentEntries = this.stats.recentEntries.slice(0, 100);
    const errorCount = recentEntries.filter(e => e.level === 'error' || e.level === 'critical').length;
    const errorRate = errorCount / Math.max(recentEntries.length, 1);
    
    if (errorRate > CONFIG.alertThresholds.errorRate) {
      this.addAlert('HIGH', `High error rate: ${(errorRate * 100).toFixed(1)}%`, now);
    }
    
    // Performance alerts
    if (entry.metadata && entry.metadata.duration && 
        entry.metadata.duration > CONFIG.alertThresholds.responseTime) {
      this.addAlert('MEDIUM', `Slow response: ${entry.metadata.duration}ms`, now);
    }
    
    if (entry.metadata && entry.metadata.memoryUsage && 
        entry.metadata.memoryUsage > CONFIG.alertThresholds.memoryUsage) {
      this.addAlert('MEDIUM', `High memory usage: ${(entry.metadata.memoryUsage / 1024 / 1024).toFixed(1)}MB`, now);
    }
  }

  /**
   * Add alert
   */
  addAlert(severity, message, timestamp) {
    const alert = { severity, message, timestamp };
    this.stats.alerts.unshift(alert);
    
    // Keep only recent alerts
    if (this.stats.alerts.length > 10) {
      this.stats.alerts = this.stats.alerts.slice(0, 10);
    }
    
    // Console alert for critical issues
    if (severity === 'CRITICAL') {
      console.log(`\n🚨 ${severity}: ${message}\n`);
    }
  }

  /**
   * Update health score
   */
  updateHealthScore() {
    let score = 100;
    
    const recentCount = Math.min(this.stats.recentEntries.length, 100);
    const criticalCount = this.stats.recentEntries.slice(0, recentCount)
      .filter(e => e.level === 'critical').length;
    const errorCount = this.stats.recentEntries.slice(0, recentCount)
      .filter(e => e.level === 'error').length;
    const warningCount = this.stats.recentEntries.slice(0, recentCount)
      .filter(e => e.level === 'warn').length;
    
    // Deduct points for issues
    score -= criticalCount * 20; // 20 points per critical
    score -= errorCount * 10;    // 10 points per error
    score -= warningCount * 5;   // 5 points per warning
    
    this.stats.healthScore = Math.max(0, score);
  }

  /**
   * Start dashboard display
   */
  startDashboard() {
    this.dashboardInterval = setInterval(() => {
      this.renderDashboard();
    }, CONFIG.dashboardRefreshRate);
  }

  /**
   * Render dashboard
   */
  renderDashboard() {
    // Clear screen
    process.stdout.write('\x1Bc');
    
    const now = new Date();
    const uptime = Math.floor((now - this.startTime) / 1000);
    
    console.log('═'.repeat(80));
    console.log('🔥 ZION APP - REAL-TIME LOG MONITOR');
    console.log('═'.repeat(80));
    console.log(`📊 Health Score: ${this.getHealthIndicator()} ${this.stats.healthScore}/100`);
    console.log(`⏰ Uptime: ${uptime}s | Last Update: ${this.stats.lastUpdate.toLocaleTimeString()}`);
    console.log(`📈 Total Entries: ${this.stats.totalEntries} | Errors: ${this.stats.errors} | Warnings: ${this.stats.warnings} | Critical: ${this.stats.critical}`);
    
    // Recent alerts
    if (this.stats.alerts.length > 0) {
      console.log('\n🚨 RECENT ALERTS:');
      console.log('─'.repeat(50));
      this.stats.alerts.slice(0, 5).forEach(alert => {
        const icon = alert.severity === 'CRITICAL' ? '🔴' : alert.severity === 'HIGH' ? '🟠' : '🟡';
        console.log(`${icon} [${alert.timestamp.toLocaleTimeString()}] ${alert.message}`);
      });
    }
    
    // Recent log entries
    console.log('\n📝 RECENT LOG ENTRIES:');
    console.log('─'.repeat(50));
    this.stats.recentEntries.slice(0, 10).forEach(entry => {
      const icon = this.getLevelIcon(entry.level);
      const time = new Date(entry.timestamp).toLocaleTimeString();
      const message = entry.message.length > 60 ? entry.message.substring(0, 60) + '...' : entry.message;
      console.log(`${icon} [${time}] [${entry.category}] ${message}`);
    });
    
    // Performance metrics
    console.log('\n⚡ PERFORMANCE METRICS:');
    console.log('─'.repeat(50));
    const recentEntries = this.stats.recentEntries.slice(0, 100);
    const avgMemory = this.calculateAverageMemory(recentEntries);
    const avgDuration = this.calculateAverageDuration(recentEntries);
    
    console.log(`📊 Avg Memory: ${avgMemory}MB | Avg Response: ${avgDuration}ms`);
    console.log(`📊 Error Rate: ${this.calculateErrorRate(recentEntries)}%`);
    
    console.log('\n═'.repeat(80));
    console.log('Press Ctrl+C to stop monitoring');
  }

  /**
   * Get health indicator
   */
  getHealthIndicator() {
    if (this.stats.healthScore >= 90) return '🟢';
    if (this.stats.healthScore >= 70) return '🟡';
    if (this.stats.healthScore >= 50) return '🟠';
    return '🔴';
  }

  /**
   * Get level icon
   */
  getLevelIcon(level) {
    const icons = {
      debug: '🔍',
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
      critical: '🔥',
    };
    return icons[level] || 'ℹ️';
  }

  /**
   * Calculate average memory usage
   */
  calculateAverageMemory(entries) {
    const memoryEntries = entries.filter(e => e.metadata && e.metadata.memoryUsage);
    if (memoryEntries.length === 0) return 0;
    
    const total = memoryEntries.reduce((sum, e) => sum + e.metadata.memoryUsage, 0);
    return (total / memoryEntries.length / 1024 / 1024).toFixed(1);
  }

  /**
   * Calculate average duration
   */
  calculateAverageDuration(entries) {
    const durationEntries = entries.filter(e => e.metadata && e.metadata.duration);
    if (durationEntries.length === 0) return 0;
    
    const total = durationEntries.reduce((sum, e) => sum + e.metadata.duration, 0);
    return (total / durationEntries.length).toFixed(1);
  }

  /**
   * Calculate error rate
   */
  calculateErrorRate(entries) {
    if (entries.length === 0) return 0;
    
    const errorCount = entries.filter(e => e.level === 'error' || e.level === 'critical').length;
    return ((errorCount / entries.length) * 100).toFixed(1);
  }

  /**
   * Setup graceful shutdown
   */
  setupGracefulShutdown() {
    this.startTime = new Date();
    
    process.on('SIGINT', () => {
      console.log('\n\n🛑 Stopping monitor...');
      this.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      console.log('\n\n🛑 Stopping monitor...');
      this.stop();
      process.exit(0);
    });
  }

  /**
   * Stop monitoring
   */
  stop() {
    this.isRunning = false;
    
    // Stop dashboard
    if (this.dashboardInterval) {
      clearInterval(this.dashboardInterval);
    }
    
    // Stop file watchers
    this.watchers.forEach((watcher, filePath) => {
      if (filePath === 'directory') {
        watcher.close();
      } else {
        fs.unwatchFile(filePath);
      }
    });
    
    this.watchers.clear();
    
    // Final summary
    console.log('\n📊 MONITORING SUMMARY');
    console.log('─'.repeat(30));
    console.log(`Total Entries: ${this.stats.totalEntries}`);
    console.log(`Errors: ${this.stats.errors}`);
    console.log(`Warnings: ${this.stats.warnings}`);
    console.log(`Critical: ${this.stats.critical}`);
    console.log(`Final Health Score: ${this.stats.healthScore}/100`);
    console.log('\n✅ Monitor stopped');
  }
}

// Main execution
async function main() {
  const monitor = new RealtimeLogMonitor();
  await monitor.start();
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Monitor failed:', error);
    process.exit(1);
  });
}

module.exports = { RealtimeLogMonitor }; 
