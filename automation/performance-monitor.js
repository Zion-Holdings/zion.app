const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'performance-monitor' },
  transports: [
    new winston.transports.File({ filename: 'logs/performance-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/performance.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class PerformanceMonitor {
  constructor(config = {}) {
    this.config = {
      checkInterval: 300000, // 5 minutes
      metricsFile: path.join(__dirname, 'performance-metrics.json'),
      ...config
    };
    
    this.isRunning = false;
    this.metrics = [];
  }

  async start() {
    try {
      logger.info('📊 Starting Performance Monitor');
      this.isRunning = true;
      
      // Start monitoring loop
      this.monitoringLoop();
      
      logger.info('✅ Performance Monitor started');
      return true;
    } catch (error) {
      logger.error('❌ Failed to start Performance Monitor:', error);
      return false;
    }
  }

  async monitoringLoop() {
    while (this.isRunning) {
      try {
        await this.collectMetrics();
        await this.sleep(this.config.checkInterval);
      } catch (error) {
        logger.error('Error in monitoring loop:', error);
        await this.sleep(5000); // Wait 5 seconds before retrying
      }
    }
  }

  async collectMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: await this.getMemoryUsage(),
        cpu: await this.getCpuUsage(),
        bundle: await this.getBundleMetrics(),
        build: await this.getBuildMetrics()
      };

      this.metrics.push(metrics);
      
      // Keep only last 100 metrics
      if (this.metrics.length > 100) {
        this.metrics = this.metrics.slice(-100);
      }

      // Save metrics
      this.saveMetrics();
      
      logger.info('📊 Metrics collected successfully');
    } catch (error) {
      logger.error('Error collecting metrics:', error);
    }
  }

  async getMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      return {
        rss: usage.rss,
        heapTotal: usage.heapTotal,
        heapUsed: usage.heapUsed,
        external: usage.external
      };
    } catch (error) {
      logger.error('Error getting memory usage:', error);
      return {};
    }
  }

  async getCpuUsage() {
    try {
      const usage = process.cpuUsage();
      return {
        user: usage.user,
        system: usage.system
      };
    } catch (error) {
      logger.error('Error getting CPU usage:', error);
      return {};
    }
  }

  
  async getBundleMetrics() {
    try {
      // Add proper error handling for bundle analysis
      const bundleStats = await this.analyzeBundle();
      
      if (!bundleStats) {
        this.log('Warning: Could not analyze bundle, returning default metrics', 'warn');
        return {
          totalSize: 0,
          chunkCount: 0,
          largestChunk: 0,
          timestamp: new Date().toISOString()
        };
      }
      
      return bundleStats;
    } catch (error) {
      this.log(`Error getting bundle metrics: ${error.message}`, 'error');
      return {
        totalSize: 0,
        chunkCount: 0,
        largestChunk: 0,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async analyzeBundle() {
    try {
      // Basic bundle analysis - extend as needed
      const nextDir = path.join(process.cwd(), '.next');
      
      if (!fs.existsSync(nextDir)) {
        return null;
      }

      // This is a simplified bundle analysis
      // In a real implementation, you'd analyze the actual bundle files
      return {
        totalSize: 0,
        chunkCount: 0,
        largestChunk: 0,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      logger.error('Error analyzing bundle:', error);
      return null;
    }
  }

  async getBuildMetrics() {
    try {
      // Basic build metrics
      return {
        buildTime: 0,
        buildSize: 0,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      logger.error('Error getting build metrics:', error);
      return {};
    }
  }

  saveMetrics() {
    try {
      fs.writeFileSync(this.config.metricsFile, JSON.stringify(this.metrics, null, 2));
    } catch (error) {
      logger.error('Error saving metrics:', error);
    }
  }

  async healthCheck() {
    return {
      status: this.isRunning ? 'healthy' : 'stopped',
      timestamp: new Date().toISOString(),
      metricsCount: this.metrics.length
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    logger.info('🛑 Stopping Performance Monitor');
    this.isRunning = false;
  }
}

module.exports = PerformanceMonitor;