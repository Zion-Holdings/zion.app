#!/usr/bin/env node

/**
 * Advanced Chat Reconnection System Monitor
 *
 * This script provides comprehensive monitoring and insights into the
 * automated chat reconnection system performance and health.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  CHAT_SERVER: 'http://localhost:3009',
  LOG_FILE: 'logs/chat-reconnection.log',
  MONITOR_INTERVAL: 30000, // 30 seconds
  ALERT_THRESHOLDS: {
    uptime_minutes: 60,
    memory_mb: 100,
    cpu_percent: 5,
    error_rate: 0.1,
  },
};

class ChatReconnectionMonitor {
  constructor() {
    this.metrics = {
      startTime: Date.now(),
      checks: 0,
      errors: 0,
      alerts: [],
      performance: {
        responseTimes: [],
        memoryUsage: [],
        cpuUsage: [],
      },
    };

    this.alertHistory = [];
    this.isRunning = false;
  }

  async start() {
    console.log('🔍 Starting Chat Reconnection System Monitor...');
    console.log(
      '📊 Monitoring interval:',
      CONFIG.MONITOR_INTERVAL / 1000,
      'seconds',
    );
    console.log('🎯 Alert thresholds:', CONFIG.ALERT_THRESHOLDS);
    console.log('');

    this.isRunning = true;

    // Initial check
    await this.performHealthCheck();

    // Start monitoring loop
    this.monitoringInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, CONFIG.MONITOR_INTERVAL);

    // Start performance monitoring
    this.performanceInterval = setInterval(() => {
      this.collectPerformanceMetrics();
    }, 10000); // Every 10 seconds

    // Start log monitoring
    this.logMonitor = this.monitorLogs();

    console.log('✅ Monitor started successfully');
    console.log('📈 Real-time metrics collection active');
    console.log('🚨 Alert system enabled');
    console.log('');
  }

  async stop() {
    console.log('🛑 Stopping Chat Reconnection System Monitor...');

    this.isRunning = false;

    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }

    if (this.performanceInterval) {
      clearInterval(this.performanceInterval);
    }

    if (this.logMonitor) {
      clearInterval(this.logMonitor);
    }

    console.log('✅ Monitor stopped');
  }

  async performHealthCheck() {
    const startTime = Date.now();
    this.metrics.checks++;

    try {
      // Check system status
      const status = await this.getSystemStatus();
      const responseTime = Date.now() - startTime;

      // Update performance metrics
      this.metrics.performance.responseTimes.push(responseTime);
      if (this.metrics.performance.responseTimes.length > 100) {
        this.metrics.performance.responseTimes.shift();
      }

      // Analyze status
      await this.analyzeSystemStatus(status);

      // Check for alerts
      await this.checkAlerts(status, responseTime);

      // Display status
      this.displayStatus(status, responseTime);
    } catch (error) {
      this.metrics.errors++;
      console.error('❌ Health check failed:', error.message);

      // Create alert
      this.createAlert('HEALTH_CHECK_FAILED', {
        error: error.message,
        timestamp: Date.now(),
      });
    }
  }

  async getSystemStatus() {
    return new Promise((resolve, reject) => {
      const url = new URL('/status', CONFIG.CHAT_SERVER);

      const req = http.request(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error('Invalid JSON response'));
          }
        });
      });

      req.on('error', reject);
      req.setTimeout(5000, () => reject(new Error('Request timeout')));
      req.end();
    });
  }

  async analyzeSystemStatus(status) {
    const analysis = {
      timestamp: Date.now(),
      uptime: status.uptime || 0,
      isMaster: status.isMaster || false,
      isConnected: status.isConnected || false,
      discoveredComputers: status.discoveredComputers || 0,
      activeConnections: status.activeConnections || 0,
      computerId: status.computerId || 'unknown',
    };

    // Check uptime
    const uptimeMinutes = analysis.uptime / 60;
    if (uptimeMinutes < CONFIG.ALERT_THRESHOLDS.uptime_minutes) {
      this.createAlert('LOW_UPTIME', {
        current: uptimeMinutes,
        threshold: CONFIG.ALERT_THRESHOLDS.uptime_minutes,
        unit: 'minutes',
      });
    }

    // Check connectivity
    if (!analysis.isConnected) {
      this.createAlert('DISCONNECTED', {
        computerId: analysis.computerId,
        timestamp: analysis.timestamp,
      });
    }

    // Check discovered computers
    if (analysis.discoveredComputers === 0 && analysis.isMaster) {
      this.createAlert('NO_WORKERS', {
        computerId: analysis.computerId,
        timestamp: analysis.timestamp,
      });
    }

    return analysis;
  }

  async checkAlerts(status, responseTime) {
    // Check response time
    if (responseTime > 1000) {
      this.createAlert('SLOW_RESPONSE', {
        responseTime,
        threshold: 1000,
        unit: 'ms',
      });
    }

    // Check error rate
    const errorRate = this.metrics.errors / this.metrics.checks;
    if (errorRate > CONFIG.ALERT_THRESHOLDS.error_rate) {
      this.createAlert('HIGH_ERROR_RATE', {
        errorRate: errorRate.toFixed(3),
        threshold: CONFIG.ALERT_THRESHOLDS.error_rate,
        errors: this.metrics.errors,
        checks: this.metrics.checks,
      });
    }
  }

  createAlert(type, data) {
    const alert = {
      id: `${type}_${Date.now()}`,
      type,
      severity: this.getAlertSeverity(type),
      message: this.getAlertMessage(type, data),
      data,
      timestamp: Date.now(),
    };

    this.metrics.alerts.push(alert);
    this.alertHistory.push(alert);

    // Keep only last 100 alerts
    if (this.alertHistory.length > 100) {
      this.alertHistory.shift();
    }

    // Display alert
    this.displayAlert(alert);
  }

  getAlertSeverity(type) {
    const severityMap = {
      HEALTH_CHECK_FAILED: 'CRITICAL',
      DISCONNECTED: 'HIGH',
      NO_WORKERS: 'MEDIUM',
      SLOW_RESPONSE: 'MEDIUM',
      HIGH_ERROR_RATE: 'HIGH',
      LOW_UPTIME: 'LOW',
    };

    return severityMap[type] || 'LOW';
  }

  getAlertMessage(type, data) {
    const messages = {
      HEALTH_CHECK_FAILED: `Health check failed: ${data.error}`,
      DISCONNECTED: `Computer ${data.computerId} is disconnected`,
      NO_WORKERS: `Master node has no worker computers connected`,
      SLOW_RESPONSE: `Slow response time: ${data.responseTime}ms`,
      HIGH_ERROR_RATE: `High error rate: ${data.errorRate}`,
      LOW_UPTIME: `Low uptime: ${data.current} minutes`,
    };

    return messages[type] || `Unknown alert: ${type}`;
  }

  displayAlert(alert) {
    const severityColors = {
      CRITICAL: '\x1b[31m', // Red
      HIGH: '\x1b[33m', // Yellow
      MEDIUM: '\x1b[35m', // Magenta
      LOW: '\x1b[36m', // Cyan
    };

    const color = severityColors[alert.severity] || '\x1b[0m';
    const reset = '\x1b[0m';

    console.log(`${color}🚨 [${alert.severity}] ${alert.message}${reset}`);
  }

  displayStatus(status, responseTime) {
    const uptimeMinutes = Math.floor(status.uptime / 60);
    const uptimeHours = Math.floor(uptimeMinutes / 60);

    console.log(
      `📊 Status Check #${this.metrics.checks} - ${new Date().toLocaleTimeString()}`,
    );
    console.log(`   🖥️ Computer: ${status.computerId}`);
    console.log(`   👑 Role: ${status.isMaster ? 'Master' : 'Worker'}`);
    console.log(`   🔗 Connected: ${status.isConnected ? '✅' : '❌'}`);
    console.log(`   🌐 Discovered: ${status.discoveredComputers} computers`);
    console.log(`   🔌 Active: ${status.activeConnections} connections`);
    console.log(`   ⏱️ Uptime: ${uptimeHours}h ${uptimeMinutes % 60}m`);
    console.log(`   ⚡ Response: ${responseTime}ms`);
    console.log(
      `   📈 Errors: ${this.metrics.errors}/${this.metrics.checks} (${((this.metrics.errors / this.metrics.checks) * 100).toFixed(1)}%)`,
    );
    console.log('');
  }

  collectPerformanceMetrics() {
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();

    this.metrics.performance.memoryUsage.push({
      timestamp: Date.now(),
      rss: Math.round(memUsage.rss / 1024 / 1024), // MB
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
    });

    this.metrics.performance.cpuUsage.push({
      timestamp: Date.now(),
      user: cpuUsage.user,
      system: cpuUsage.system,
    });

    // Keep only last 100 entries
    if (this.metrics.performance.memoryUsage.length > 100) {
      this.metrics.performance.memoryUsage.shift();
    }

    if (this.metrics.performance.cpuUsage.length > 100) {
      this.metrics.performance.cpuUsage.shift();
    }
  }

  monitorLogs() {
    return setInterval(() => {
      this.analyzeLogs();
    }, 60000); // Every minute
  }

  async analyzeLogs() {
    try {
      if (!fs.existsSync(CONFIG.LOG_FILE)) {
        return;
      }

      const logContent = fs.readFileSync(CONFIG.LOG_FILE, 'utf8');
      const lines = logContent.split('\n').filter((line) => line.trim());

      // Get last 100 lines
      const recentLines = lines.slice(-100);

      // Analyze for patterns
      const errorCount = recentLines.filter(
        (line) => line.includes('ERROR') || line.includes('❌'),
      ).length;

      const chatCount = recentLines.filter((line) =>
        line.includes('💬 Triggering chat'),
      ).length;

      const cursorCount = recentLines.filter((line) =>
        line.includes('✅ Cursor is running'),
      ).length;

      // Check for unusual patterns
      if (errorCount > 5) {
        this.createAlert('LOG_ERRORS', {
          errorCount,
          timeWindow: '100 lines',
          timestamp: Date.now(),
        });
      }

      if (chatCount === 0) {
        this.createAlert('NO_CHAT_ACTIVITY', {
          timeWindow: '100 lines',
          timestamp: Date.now(),
        });
      }

      // Log analysis summary
      console.log(
        `📋 Log Analysis: ${errorCount} errors, ${chatCount} chats, ${cursorCount} Cursor interactions`,
      );
    } catch (error) {
      console.error('❌ Log analysis failed:', error.message);
    }
  }

  generateReport() {
    const report = {
      timestamp: Date.now(),
      uptime: Date.now() - this.metrics.startTime,
      checks: this.metrics.checks,
      errors: this.metrics.errors,
      errorRate: this.metrics.errors / this.metrics.checks,
      alerts: this.alertHistory.length,
      performance: {
        avgResponseTime: this.calculateAverage(
          this.metrics.performance.responseTimes,
        ),
        maxResponseTime: Math.max(...this.metrics.performance.responseTimes),
        minResponseTime: Math.min(...this.metrics.performance.responseTimes),
      },
    };

    return report;
  }

  calculateAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((sum, val) => sum + val, 0) / array.length;
  }

  displayReport() {
    const report = this.generateReport();
    const uptimeMinutes = Math.floor(report.uptime / 60000);
    const uptimeHours = Math.floor(uptimeMinutes / 60);

    console.log('');
    console.log('📊 Chat Reconnection System Monitor Report');
    console.log('==========================================');
    console.log(`⏱️ Monitor Uptime: ${uptimeHours}h ${uptimeMinutes % 60}m`);
    console.log(`🔍 Health Checks: ${report.checks}`);
    console.log(`❌ Errors: ${report.errors}`);
    console.log(`📈 Error Rate: ${(report.errorRate * 100).toFixed(2)}%`);
    console.log(`🚨 Alerts: ${report.alerts}`);
    console.log(
      `⚡ Avg Response: ${report.performance.avgResponseTime.toFixed(0)}ms`,
    );
    console.log(`⚡ Max Response: ${report.performance.maxResponseTime}ms`);
    console.log(`⚡ Min Response: ${report.performance.minResponseTime}ms`);
    console.log('');
  }
}

// Command line interface
async function main() {
  const monitor = new ChatReconnectionMonitor();

  // Handle command line arguments
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'start':
      await monitor.start();

      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await monitor.stop();
        monitor.displayReport();
        process.exit(0);
      });

      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await monitor.stop();
        monitor.displayReport();
        process.exit(0);
      });
      break;

    case 'report':
      await monitor.start();
      setTimeout(async () => {
        monitor.displayReport();
        await monitor.stop();
        process.exit(0);
      }, 5000);
      break;

    default:
      console.log('Usage: node chat-reconnection-monitor.js [command]');
      console.log('');
      console.log('Commands:');
      console.log('  start   Start continuous monitoring');
      console.log('  report  Generate a quick report (5 seconds)');
      console.log('');
      console.log('Examples:');
      console.log('  node chat-reconnection-monitor.js start');
      console.log('  node chat-reconnection-monitor.js report');
      break;
  }
}

// Run if this script is executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Monitor failed:', error);
    process.exit(1);
  });
}

module.exports = ChatReconnectionMonitor;
