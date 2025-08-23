#!/usr/bin/env node

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor(config = {}) {
    this.config = {
      interval: 60000, // 1 minute
      logFile: path.join(__dirname, 'performance.log'),
      reportFile: path.join(__dirname, 'performance-report.json'),
      thresholds: {
        memory: 100 * 1024 * 1024, // 100MB
        cpu: 80, // 80%
        responseTime: 2000, // 2 seconds
      },
      ...config,
    };

    this.isMonitoring = false;
    this.history = [];
  }

  async start() {
    if (this.isMonitoring) {
      logger.info('⚠️ Performance monitor is already running');
      return;
    }

    this.isMonitoring = true;
    logger.info('📊 Performance monitor started');

    // Start monitoring loop
    this.interval = setInterval(async () => {
      await this.collectMetrics();
    }, this.config.interval);

    // Initial collection
    await this.collectMetrics();
  }

  async stop() {
    if (!this.isMonitoring) {
      logger.info('⚠️ Performance monitor is not running');
      return;
    }

    this.isMonitoring = false;
    clearInterval(this.interval);
    logger.info('🛑 Performance monitor stopped');
  }

  async collectMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: await this.getMemoryUsage(),
        cpu: await this.getCPUUsage(),
        responseTime: await this.getResponseTime(),
        bundleSize: await this.getBundleMetrics(),
        alerts: [],
      };

      // Check thresholds and generate alerts
      if (metrics.memory > this.config.thresholds.memory) {
        metrics.alerts.push({
          type: 'performance',
          priority: 'high',
          message:
            'High memory usage detected. Consider optimizing memory usage.',
          action:
            'Review memory-intensive operations and implement memory optimization strategies.',
        });
      }

      if (metrics.cpu > this.config.thresholds.cpu) {
        metrics.alerts.push({
          type: 'performance',
          priority: 'medium',
          message: 'High CPU usage detected.',
          action: 'Review CPU-intensive operations and consider optimization.',
        });
      }

      if (metrics.responseTime > this.config.thresholds.responseTime) {
        metrics.alerts.push({
          type: 'performance',
          priority: 'high',
          message: 'Slow response time detected.',
          action:
            'Investigate performance bottlenecks and optimize critical paths.',
        });
      }

      this.history.push(metrics);

      // Keep only last 100 entries
      if (this.history.length > 100) {
        this.history = this.history.slice(-100);
      }

      // Save to file
      await this.saveMetrics(metrics);

      // Log alerts
      if (metrics.alerts.length > 0) {
        logger.warn(
          `Performance alerts: ${metrics.alerts.length} issues detected`,
        );
        metrics.alerts.forEach((alert) => {
          logger.warn(`${alert.type.toUpperCase()}: ${alert.message}`);
        });
      }
    } catch (error) {
      logger.error('❌ Error collecting metrics:', error);
    }
  }

  async getMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      return usage.heapUsed;
    } catch (error) {
      logger.error('Failed to get memory usage:', error.message);
      return 0;
    }
  }

  async getCPUUsage() {
    try {
      const startUsage = process.cpuUsage();
      await new Promise((resolve) => setTimeout(resolve, 100));
      const endUsage = process.cpuUsage(startUsage);
      return (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
    } catch (error) {
      logger.error('Failed to get CPU usage:', error.message);
      return 0;
    }
  }

  async getResponseTime() {
    try {
      const start = Date.now();
      // Simulate a request
      await new Promise((resolve) => setTimeout(resolve, 100));
      return Date.now() - start;
    } catch (error) {
      logger.error('Failed to get response time:', error.message);
      return 0;
    }
  }

  async getBundleMetrics() {
    try {
      const output = execSync('npm run bundle:analyze', { stdio: 'pipe' });
      return this.parseBundleAnalysis(output);
    } catch (error) {
      logger.error('Failed to get bundle metrics:', error.message);
      return null;
    }
  }

  parseBundleAnalysis(output) {
    try {
      // Parse bundle analysis output
      const lines = output.toString().split('\n');
      const sizeMatch = lines.find((line) => line.includes('Bundle Size:'));
      if (sizeMatch) {
        const size = sizeMatch.match(/Bundle Size: (\d+\.?\d*) KB/);
        return size ? parseFloat(size[1]) : 0;
      }
      return 0;
    } catch (error) {
      logger.error('Failed to parse bundle analysis:', error.message);
      return 0;
    }
  }

  async saveMetrics(metrics) {
    try {
      await fs.writeFile(
        this.config.logFile,
        JSON.stringify(metrics, null, 2) + '\n',
        { flag: 'a' },
      );
    } catch (error) {
      logger.error('Failed to save metrics:', error.message);
    }
  }

  async generateReport() {
    try {
      const report = {
        generated: new Date().toISOString(),
        summary: {
          totalAlerts: this.history.reduce(
            (sum, m) => sum + m.alerts.length,
            0,
          ),
          averageMemory:
            this.history.reduce((sum, m) => sum + m.memory, 0) /
            this.history.length,
          averageCPU:
            this.history.reduce((sum, m) => sum + m.cpu, 0) /
            this.history.length,
          averageResponseTime:
            this.history.reduce((sum, m) => sum + m.responseTime, 0) /
            this.history.length,
        },
        history: this.history,
      };

      await fs.writeFile(
        this.config.reportFile,
        JSON.stringify(report, null, 2),
      );

      logger.info('📊 Performance report generated');
      return report;
    } catch (error) {
      logger.error('Failed to generate report:', error.message);
      return null;
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      monitor.start();
      break;
    case 'stop':
      monitor.stop();
      break;
    case 'report':
      monitor.generateReport();
      break;
    default:
      logger.info('Usage: node monitor.js [start|stop|report]');
  }
}

module.exports = PerformanceMonitor;
