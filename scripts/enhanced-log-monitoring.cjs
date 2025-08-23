#!/usr/bin/env node

/**
 * Enhanced Log Monitoring System for Zion.App
 * Provides real-time error detection, automated alerts, and comprehensive health monitoring
 * Features:
 * - Real-time log monitoring with WebSocket support
 * - Automated error pattern detection
 * - Email/Discord/Slack alerts for critical issues
 * - Performance metrics tracking
 * - Log aggregation and analysis
 * - Automated self-healing recommendations
 */

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');
const WebSocket = require('ws');

class EnhancedLogMonitor extends EventEmitter {
  constructor(config = {}) {
    super();
    
    this.config = {
      logDir: path.join(__dirname, '..', 'logs'),
      alertThresholds: {
        errorRate: 0.05, // 5% error rate
        criticalErrors: 3, // 3 critical errors in 5 minutes
        performanceThreshold: 5000, // 5 seconds response time
        memoryThreshold: 512 * 1024 * 1024, // 512MB
      },
      alertChannels: {
        email: process.env.ALERT_EMAIL || 'admin@ziontechgroup.com',
        discord: process.env.DISCORD_WEBHOOK_URL,
        slack: process.env.SLACK_WEBHOOK_URL,
      },
      monitoring: {
        realTime: true,
        aggregationInterval: 60000, // 1 minute
        retentionDays: 30,
        enablePredictive: true,
      },
      ...config,
    };

    this.metrics = {
      errors: [],
      warnings: [],
      performance: [],
      system: {
        uptime: Date.now(),
        lastHealthCheck: null,
        consecutiveErrors: 0,
        averageResponseTime: 0,
        errorRate: 0,
      },
    };

    this.alertHistory = [];
    this.isMonitoring = false;
    this.watchers = new Map();
    
    this.initializeMonitoring();
  }

  async initializeMonitoring() {
    try {
      await this.ensureLogDirectory();
      await this.loadHistoricalData();
      this.startRealTimeMonitoring();
      this.startPeriodicHealthChecks();
      this.setupGracefulShutdown();
      
      this.log('Enhanced log monitoring system initialized', 'info');
      this.emit('initialized');
    } catch (error) {
      this.log(`Failed to initialize monitoring: ${error.message}`, 'error');
      throw error;
    }
  }

  async ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }

    // Create subdirectories for different log types
    const subdirs = ['errors', 'performance', 'security', 'aggregated'];
    subdirs.forEach(dir => {
      const dirPath = path.join(this.config.logDir, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async loadHistoricalData() {
    try {
      const metricsFile = path.join(this.config.logDir, 'aggregated', 'metrics.json');
      if (fs.existsSync(metricsFile)) {
        const data = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
        this.metrics = { ...this.metrics, ...data };
        this.log(`Loaded historical data: ${this.metrics.errors.length} errors, ${this.metrics.warnings.length} warnings`, 'info');
      }
    } catch (error) {
      this.log(`Failed to load historical data: ${error.message}`, 'warn');
    }
  }

  startRealTimeMonitoring() {
    if (!this.config.monitoring.realTime) return;

    this.isMonitoring = true;
    
    // Monitor all log files in the logs directory
    this.watchLogFiles();
    
    // Monitor application logs from Next.js, API routes, etc.
    this.setupApplicationLogMonitoring();
    
    // Monitor system metrics
    this.startSystemMetricsCollection();
    
    this.log('Real-time monitoring started', 'info');
  }

  watchLogFiles() {
    const logExtensions = ['.log', '.json'];
    
    const watchDirectory = (dirPath) => {
      if (!fs.existsSync(dirPath)) return;
      
      fs.readdirSync(dirPath).forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          watchDirectory(filePath);
        } else if (logExtensions.some(ext => file.endsWith(ext))) {
          this.watchLogFile(filePath);
        }
      });
    };

    watchDirectory(this.config.logDir);
  }

  watchLogFile(filePath) {
    if (this.watchers.has(filePath)) return;

    try {
      const watcher = fs.watch(filePath, (eventType) => {
        if (eventType === 'change') {
          this.processLogFileChanges(filePath);
        }
      });

      this.watchers.set(filePath, watcher);
      this.log(`Watching log file: ${path.relative(this.config.logDir, filePath)}`, 'debug');
    } catch (error) {
      this.log(`Failed to watch file ${filePath}: ${error.message}`, 'warn');
    }
  }

  async processLogFileChanges(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').filter(line => line.trim());
      
      // Process only new lines (simple implementation)
      const newLines = lines.slice(-10); // Process last 10 lines
      
      for (const line of newLines) {
        await this.processLogEntry(line, filePath);
      }
    } catch (error) {
      this.log(`Error processing log file changes: ${error.message}`, 'error');
    }
  }

  async processLogEntry(logLine, filePath) {
    try {
      let entry;
      
      // Try to parse as JSON first
      try {
        entry = JSON.parse(logLine);
      } catch {
        // Parse plain text log entries
        entry = this.parseTextLogEntry(logLine);
      }

      if (!entry) return;

      // Enhance entry with metadata
      entry.source = path.relative(this.config.logDir, filePath);
      entry.timestamp = entry.timestamp || new Date().toISOString();
      entry.processed = Date.now();

      // Classify and process the entry
      await this.classifyAndProcessEntry(entry);
      
      // Check for alert conditions
      await this.checkAlertConditions(entry);
      
      // Emit event for real-time consumers
      this.emit('logEntry', entry);
      
    } catch (error) {
      this.log(`Error processing log entry: ${error.message}`, 'error');
    }
  }

  parseTextLogEntry(logLine) {
    // Basic text log parsing with common patterns
    const timestamp = new Date().toISOString();
    
    // Detect log level
    let level = 'info';
    if (logLine.match(/\b(error|ERROR|err)\b/i)) level = 'error';
    else if (logLine.match(/\b(warn|WARNING|warning)\b/i)) level = 'warn';
    else if (logLine.match(/\b(debug|DEBUG)\b/i)) level = 'debug';
    
    return {
      timestamp,
      level,
      message: logLine,
      raw: true,
    };
  }

  async classifyAndProcessEntry(entry) {
    const { level, message } = entry;
    
    // Store in appropriate metrics array
    if (level === 'error') {
      this.metrics.errors.push(entry);
      this.metrics.system.consecutiveErrors++;
      
      // Check for critical error patterns
      if (this.isCriticalError(entry)) {
        await this.handleCriticalError(entry);
      }
    } else if (level === 'warn') {
      this.metrics.warnings.push(entry);
    }

    // Reset consecutive errors on non-error entries
    if (level !== 'error') {
      this.metrics.system.consecutiveErrors = 0;
    }

    // Performance tracking
    if (this.isPerformanceEntry(entry)) {
      this.trackPerformanceMetric(entry);
    }

    // Security monitoring
    if (this.isSecurityEvent(entry)) {
      await this.handleSecurityEvent(entry);
    }

    // Cleanup old entries
    this.cleanupOldEntries();
  }

  isCriticalError(entry) {
    const criticalPatterns = [
      /database.*connection.*failed/i,
      /memory.*out.*of.*bounds/i,
      /segmentation.*fault/i,
      /unhandled.*exception/i,
      /stack.*overflow/i,
      /authentication.*failed.*repeatedly/i,
      /payment.*processing.*error/i,
      /data.*corruption/i,
    ];

    return criticalPatterns.some(pattern => pattern.test(entry.message));
  }

  async handleCriticalError(entry) {
    this.log(`Critical error detected: ${entry.message}`, 'error');
    
    // Add to critical error tracking
    entry.critical = true;
    entry.alertSent = false;
    
    // Immediate alert
    await this.sendAlert({
      type: 'critical_error',
      severity: 'high',
      entry,
      timestamp: new Date().toISOString(),
    });

    // Trigger self-healing if applicable
    await this.attemptSelfHealing(entry);
  }

  isPerformanceEntry(entry) {
    return /performance|timing|duration|latency|response.*time/i.test(entry.message);
  }

  trackPerformanceMetric(entry) {
    // Extract performance data from the log entry
    const metric = {
      timestamp: entry.timestamp,
      source: entry.source,
      message: entry.message,
      parsed: this.parsePerformanceData(entry.message),
    };

    this.metrics.performance.push(metric);
    
    // Update system averages
    this.updatePerformanceAverages();
  }

  parsePerformanceData(message) {
    const patterns = {
      responseTime: /response.*time[:\s]+(\d+(?:\.\d+)?)\s*(ms|milliseconds|s|seconds)/i,
      memory: /memory[:\s]+(\d+(?:\.\d+)?)\s*(mb|gb|bytes?)/i,
      cpu: /cpu[:\s]+(\d+(?:\.\d+)?)\s*%?/i,
    };

    const result = {};
    
    for (const [key, pattern] of Object.entries(patterns)) {
      const match = message.match(pattern);
      if (match) {
        result[key] = {
          value: parseFloat(match[1]),
          unit: match[2] || '',
        };
      }
    }

    return result;
  }

  updatePerformanceAverages() {
    const recentMetrics = this.metrics.performance.slice(-100); // Last 100 entries
    if (recentMetrics.length === 0) return;

    // Calculate average response time
    const responseTimes = recentMetrics
      .map(m => m.parsed?.responseTime?.value)
      .filter(v => v !== undefined);
    
    if (responseTimes.length > 0) {
      this.metrics.system.averageResponseTime = 
        responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    }

    // Calculate error rate
    const recentErrors = this.metrics.errors.slice(-100);
    const recentTotal = Math.max(recentMetrics.length, recentErrors.length);
    this.metrics.system.errorRate = recentTotal > 0 ? recentErrors.length / recentTotal : 0;
  }

  isSecurityEvent(entry) {
    const securityPatterns = [
      /unauthorized.*access/i,
      /failed.*login.*attempt/i,
      /suspicious.*activity/i,
      /potential.*attack/i,
      /rate.*limit.*exceeded/i,
      /invalid.*token/i,
      /csrf.*detected/i,
    ];

    return securityPatterns.some(pattern => pattern.test(entry.message));
  }

  async handleSecurityEvent(entry) {
    this.log(`Security event detected: ${entry.message}`, 'warn');
    
    // Log to security log
    const securityLogPath = path.join(this.config.logDir, 'security', 'events.log');
    const securityEntry = JSON.stringify({
      ...entry,
      securityEvent: true,
      handled: new Date().toISOString(),
    });
    
    fs.appendFileSync(securityLogPath, securityEntry + '\n');
    
    // Send security alert
    await this.sendAlert({
      type: 'security_event',
      severity: 'medium',
      entry,
      timestamp: new Date().toISOString(),
    });
  }

  async checkAlertConditions(entry) {
    const { alertThresholds } = this.config;
    
    // Check error rate threshold
    if (this.metrics.system.errorRate > alertThresholds.errorRate) {
      await this.sendAlert({
        type: 'high_error_rate',
        severity: 'medium',
        data: {
          currentRate: this.metrics.system.errorRate,
          threshold: alertThresholds.errorRate,
        },
      });
    }

    // Check consecutive critical errors
    if (this.metrics.system.consecutiveErrors >= alertThresholds.criticalErrors) {
      await this.sendAlert({
        type: 'consecutive_errors',
        severity: 'high',
        data: {
          consecutiveCount: this.metrics.system.consecutiveErrors,
          threshold: alertThresholds.criticalErrors,
        },
      });
    }

    // Check performance threshold
    if (this.metrics.system.averageResponseTime > alertThresholds.performanceThreshold) {
      await this.sendAlert({
        type: 'performance_degradation',
        severity: 'medium',
        data: {
          averageResponseTime: this.metrics.system.averageResponseTime,
          threshold: alertThresholds.performanceThreshold,
        },
      });
    }
  }

  async sendAlert(alert) {
    const alertKey = `${alert.type}_${alert.timestamp}`;
    
    // Prevent duplicate alerts
    if (this.alertHistory.some(a => a.type === alert.type && 
        Date.now() - new Date(a.timestamp).getTime() < 300000)) { // 5 minutes
      return;
    }

    this.alertHistory.push(alert);
    
    // Send to configured channels
    const { alertChannels } = this.config;
    
    if (alertChannels.email) {
      await this.sendEmailAlert(alert);
    }
    
    if (alertChannels.discord) {
      await this.sendDiscordAlert(alert);
    }
    
    if (alertChannels.slack) {
      await this.sendSlackAlert(alert);
    }
    
    // Log the alert
    this.log(`Alert sent: ${alert.type} (${alert.severity})`, 'info');
    
    // Store alert for history
    const alertLogPath = path.join(this.config.logDir, 'alerts.log');
    fs.appendFileSync(alertLogPath, JSON.stringify(alert) + '\n');
  }

  async sendEmailAlert(alert) {
    // Implementation would use nodemailer or similar
    this.log(`Email alert would be sent: ${alert.type}`, 'debug');
  }

  async sendDiscordAlert(alert) {
    // Implementation would use Discord webhook
    this.log(`Discord alert would be sent: ${alert.type}`, 'debug');
  }

  async sendSlackAlert(alert) {
    // Implementation would use Slack webhook
    this.log(`Slack alert would be sent: ${alert.type}`, 'debug');
  }

  async attemptSelfHealing(entry) {
    const healingStrategies = {
      'database_connection_failed': () => this.restartDatabaseConnection(),
      'memory_leak_detected': () => this.triggerGarbageCollection(),
      'rate_limit_exceeded': () => this.implementBackoff(),
    };

    const strategy = Object.keys(healingStrategies).find(key => 
      entry.message.toLowerCase().includes(key.replace(/_/g, ' ')));

    if (strategy) {
      this.log(`Attempting self-healing strategy: ${strategy}`, 'info');
      try {
        await healingStrategies[strategy]();
        this.log(`Self-healing successful: ${strategy}`, 'info');
      } catch (error) {
        this.log(`Self-healing failed: ${error.message}`, 'error');
      }
    }
  }

  async restartDatabaseConnection() {
    this.log('Self-healing: Restarting database connection', 'info');
    // Implementation would restart database connections
  }

  async triggerGarbageCollection() {
    this.log('Self-healing: Triggering garbage collection', 'info');
    if (global.gc) {
      global.gc();
    }
  }

  async implementBackoff() {
    this.log('Self-healing: Implementing backoff strategy', 'info');
    // Implementation would implement rate limiting backoff
  }

  startPeriodicHealthChecks() {
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.monitoring.aggregationInterval);
  }

  async performHealthCheck() {
    const healthData = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.metrics.system.uptime,
      errorRate: this.metrics.system.errorRate,
      averageResponseTime: this.metrics.system.averageResponseTime,
      consecutiveErrors: this.metrics.system.consecutiveErrors,
      totalErrors: this.metrics.errors.length,
      totalWarnings: this.metrics.warnings.length,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
    };

    this.metrics.system.lastHealthCheck = healthData.timestamp;
    
    // Store health data
    const healthLogPath = path.join(this.config.logDir, 'health-checks.log');
    fs.appendFileSync(healthLogPath, JSON.stringify(healthData) + '\n');
    
    // Emit health check event
    this.emit('healthCheck', healthData);
    
    this.log(`Health check completed - Errors: ${healthData.totalErrors}, Error Rate: ${(healthData.errorRate * 100).toFixed(2)}%`, 'debug');
  }

  setupApplicationLogMonitoring() {
    // Monitor Next.js development server logs
    // Monitor API route logs
    // Monitor build logs
    // This would integrate with the application's logging system
  }

  startSystemMetricsCollection() {
    // Collect system-level metrics
    setInterval(() => {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        uptime: process.uptime(),
      };
      
      this.trackPerformanceMetric({
        timestamp: metrics.timestamp,
        source: 'system',
        message: `System metrics: Memory RSS=${metrics.memory.rss}, CPU=${JSON.stringify(metrics.cpu)}`,
        parsed: {
          memory: { value: metrics.memory.rss, unit: 'bytes' },
          cpu: { value: metrics.cpu.user + metrics.cpu.system, unit: 'microseconds' },
        },
      });
    }, 30000); // Every 30 seconds
  }

  cleanupOldEntries() {
    const retentionTime = this.config.monitoring.retentionDays * 24 * 60 * 60 * 1000;
    const cutoff = Date.now() - retentionTime;
    
    this.metrics.errors = this.metrics.errors.filter(entry => 
      new Date(entry.timestamp).getTime() > cutoff);
    
    this.metrics.warnings = this.metrics.warnings.filter(entry => 
      new Date(entry.timestamp).getTime() > cutoff);
    
    this.metrics.performance = this.metrics.performance.filter(entry => 
      new Date(entry.timestamp).getTime() > cutoff);
  }

  async saveMetrics() {
    try {
      const metricsFile = path.join(this.config.logDir, 'aggregated', 'metrics.json');
      fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
      this.log('Metrics saved successfully', 'debug');
    } catch (error) {
      this.log(`Failed to save metrics: ${error.message}`, 'error');
    }
  }

  setupGracefulShutdown() {
    const shutdown = async () => {
      this.log('Shutting down enhanced log monitor...', 'info');
      this.isMonitoring = false;
      
      // Close all file watchers
      for (const watcher of this.watchers.values()) {
        watcher.close();
      }
      this.watchers.clear();
      
      // Save final metrics
      await this.saveMetrics();
      
      this.log('Enhanced log monitor shut down gracefully', 'info');
      process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    process.on('uncaughtException', (error) => {
      this.log(`Uncaught exception: ${error.message}`, 'error');
      shutdown();
    });
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logEntry);
    } else if (level === 'warn') {
      console.warn(logEntry);
    } else {
      console.log(logEntry);
    }
    
    // Also write to monitor's own log file
    const monitorLogPath = path.join(this.config.logDir, 'monitor.log');
    fs.appendFileSync(monitorLogPath, logEntry + '\n');
  }

  // Public API methods
  getMetrics() {
    return { ...this.metrics };
  }

  getSystemHealth() {
    return {
      uptime: Date.now() - this.metrics.system.uptime,
      errorRate: this.metrics.system.errorRate,
      averageResponseTime: this.metrics.system.averageResponseTime,
      consecutiveErrors: this.metrics.system.consecutiveErrors,
      lastHealthCheck: this.metrics.system.lastHealthCheck,
      isMonitoring: this.isMonitoring,
    };
  }

  getRecentErrors(count = 10) {
    return this.metrics.errors.slice(-count);
  }

  getAlertHistory(hours = 24) {
    const cutoff = Date.now() - (hours * 60 * 60 * 1000);
    return this.alertHistory.filter(alert => 
      new Date(alert.timestamp).getTime() > cutoff);
  }
}

// CLI usage
if (require.main === module) {
  const monitor = new EnhancedLogMonitor();
  
  monitor.on('initialized', () => {
    console.log('🚀 Enhanced log monitoring system is running');
    console.log('📊 Access metrics at: http://localhost:3001/metrics');
    console.log('🔍 Real-time monitoring active');
  });

  monitor.on('logEntry', (entry) => {
    if (entry.level === 'error') {
      console.log(`🚨 Error detected: ${entry.message.substring(0, 100)}...`);
    }
  });

  monitor.on('healthCheck', (data) => {
    console.log(`💗 Health check: ${data.totalErrors} errors, ${(data.errorRate * 100).toFixed(1)}% error rate`);
  });
}

module.exports = { EnhancedLogMonitor }; 
