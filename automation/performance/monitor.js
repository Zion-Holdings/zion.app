
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
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
        responseTime: 2000 // 2 seconds
      },
      ...config
    };

    this.isMonitoring = false;
    this.history = [];
    this.alerts = [];
  }

  async start() {
    if (this.isMonitoring) {
      logger.info('⚠️ Performance monitor is already running');
      return;
    }

    this.isMonitoring = true;
    logger.info('📊 Performance monitor started');

    // Start monitoring loop
    this.interval = setInterval(() => {
      this.collectMetrics();
    }, 60000); // Collect metrics every minute
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
        memory: this.getMemoryUsage(),
        cpu: this.getCPUUsage(),
        disk: await this.getDiskUsage(),
        network: await this.getNetworkUsage(),
        build: await this.getBuildMetrics(),
        bundle: await this.getBundleMetrics()
      };

      this.metrics = metrics;
      this.history.push(metrics);

      // Keep only last 1000 entries
      if (this.history.length > 1000) {
        this.history = this.history.slice(-1000);
      }

      // Check thresholds and generate alerts
      this.checkThresholds(metrics);

      // Log metrics
      await this.logMetrics(metrics);

    } catch (error) {
      logger.error('❌ Error collecting metrics:', error);
    }
  }

  getMemoryUsage() {
    const usage = process.memoryUsage();
    return {
      heapUsed: usage.heapUsed,
      heapTotal: usage.heapTotal,
      external: usage.external,
      rss: usage.rss
    };
  }

  getCPUUsage() {
    const usage = process.cpuUsage();
    return {
      user: usage.user,
      system: usage.system
    };
  }

  async getDiskUsage() {
    try {
      const output = execSync('df -h .', { encoding: 'utf8' });
      const lines = output.split('\n');
      const data = lines[1].split(/\s+/);
      
      return {
        total: data[1],
        used: data[2],
        available: data[3],
        usagePercent: data[4]
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getNetworkUsage() {
    // This would require more complex monitoring
    return {
      connections: 0,
      bytesIn: 0,
      bytesOut: 0
    };
  }

  async getBuildMetrics() {
    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      return {
        status: 'success',
        buildTime,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async getBundleMetrics() {
    try {
      const output = execSync('npm run bundle:analyze', { stdio: 'pipe' });
      return this.parseBundleAnalysis(output);
    } catch (error) {
      return { error: error.message };
    }
  }

  parseBundleAnalysis(output) {
    try {
      const lines = output.split('\n');
      const bundleInfo = {};
      
      for (const line of lines) {
        if (line.includes('Bundle size:')) {
          bundleInfo.size = line.split(':')[1].trim();
        } else if (line.includes('Chunks:')) {
          bundleInfo.chunks = parseInt(line.split(':')[1].trim());
        }
      }
      
      return bundleInfo;
    } catch (error) {
      return { error: error.message };
    }
  }

  checkThresholds(metrics) {
    const alerts = [];

    // Memory threshold
    if (metrics.memory.heapUsed > this.config.thresholds.memory) {
      alerts.push({
        type: 'memory',
        severity: 'warning',
        message: `High memory usage: ${Math.round(metrics.memory.heapUsed / 1024 / 1024)}MB`,
        timestamp: metrics.timestamp
      });
    }

    // Build time threshold
    if (metrics.build.status === 'success' && metrics.build.buildTime > this.config.thresholds.responseTime) {
      alerts.push({
        type: 'build',
        severity: 'warning',
        message: `Slow build time: ${metrics.build.buildTime}ms`,
        timestamp: metrics.timestamp
      });
    }

    // Add alerts to history
    this.alerts.push(...alerts);

    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }

    return alerts;
  }

  async logMetrics(metrics) {
    const logEntry = JSON.stringify(metrics);
    await fs.appendFile(this.config.logFile, logEntry + '\n');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalMetrics: this.history.length,
        totalAlerts: this.alerts.length,
        averageMemory: this.calculateAverageMemory(),
        averageCPU: this.calculateAverageCPU()
      },
      recentMetrics: this.history.slice(-10),
      recentAlerts: this.alerts.slice(-10),
      recommendations: this.generateRecommendations()
    };

    await fs.writeFile(this.config.reportFile, JSON.stringify(report, null, 2));
    return report;
  }

  calculateAverageMemory() {
    if (this.history.length === 0) return 0;
    const totalMemory = this.history.reduce((sum, entry) => {
      return sum + entry.memory.heapUsed;
    }, 0);
    return totalMemory / this.history.length;
  }

  calculateAverageCPU() {
    if (this.history.length === 0) return 0;
    const totalCPU = this.history.reduce((sum, entry) => {
      return sum + entry.cpu.user + entry.cpu.system;
    }, 0);
    return totalCPU / this.history.length;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.calculateAverageMemory() > 100 * 1024 * 1024) { // 100MB
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: 'High memory usage detected. Consider optimizing memory usage.',
        action: 'Review memory-intensive operations and implement memory optimization strategies.'
      });
    }

    if (this.alerts.length > 10) {
      recommendations.push({
        type: 'reliability',
        priority: 'high',
        message: 'High alert rate detected. Review system performance.',
        action: 'Investigate performance bottlenecks and optimize critical paths.'
      });
    }

    return recommendations;
  }
}

module.exports = PerformanceMonitor;