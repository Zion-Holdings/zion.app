#!/usr/bin/env node

/**
 * Enhanced Infinite Improvement Loop Launcher
 * 
 * Provides easy startup, monitoring, and management of the infinite improvement loop
 * with comprehensive health checks, status monitoring, and automated recovery.
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const EnhancedInfiniteImprovementLoop = require('./enhanced-infinite-improvement-loop.js');

class EnhancedInfiniteImprovementLauncher {
  constructor(config = {}) {
    this.config = {
      pidFile: path.join(__dirname, 'infinite-improvement.pid'),
      logFile: path.join(__dirname, 'logs', 'infinite-improvement.log'),
      statusFile: path.join(__dirname, 'infinite-improvement-status.json'),
      healthCheckInterval: 30000, // 30 seconds
      maxRestartAttempts: 5,
      restartDelay: 5000, // 5 seconds
      enableAutoRecovery: true,
      enableHealthMonitoring: true,
      enablePerformanceTracking: true,
      ...config
    };

    this.loop = null;
    this.isRunning = false;
    this.restartAttempts = 0;
    this.healthCheckInterval = null;
    this.startTime = null;
    this.lastHealthCheck = null;
    this.status = {
      isRunning: false,
      startTime: null,
      lastHealthCheck: null,
      restartAttempts: 0,
      health: 'unknown',
      performance: {
        cpu: 0,
        memory: 0,
        uptime: 0
      }
    };
  }

  async initialize() {
    console.log('🚀 Initializing Enhanced Infinite Improvement Launcher...');
    
    try {
      // Ensure log directory exists
      const logDir = path.dirname(this.config.logFile);
      await fs.mkdir(logDir, { recursive: true });
      
      // Load existing status
      await this.loadStatus();
      
      // Initialize the improvement loop
      this.loop = new EnhancedInfiniteImprovementLoop({
        logLevel: 'info',
        enableSelfModification: true,
        enablePredictiveOptimization: true,
        enableAdaptiveLearning: true,
        enableErrorSelfHealing: true,
        enablePerformanceMonitoring: true
      });
      
      console.log('✅ Enhanced Infinite Improvement Launcher initialized');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize launcher:', error);
      throw error;
    }
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️ Infinite improvement loop is already running');
      return;
    }

    console.log('🚀 Starting Enhanced Infinite Improvement Loop...');
    
    try {
      // Initialize if not already done
      if (!this.loop) {
        await this.initialize();
      }
      
      // Start the improvement loop
      await this.loop.start();
      
      // Update status
      this.isRunning = true;
      this.startTime = new Date();
      this.status.isRunning = true;
      this.status.startTime = this.startTime.toISOString();
      this.restartAttempts = 0;
      
      // Save PID
      await this.savePid();
      
      // Start health monitoring
      if (this.config.enableHealthMonitoring) {
        this.startHealthMonitoring();
      }
      
      // Start performance tracking
      if (this.config.enablePerformanceTracking) {
        this.startPerformanceTracking();
      }
      
      await this.saveStatus();
      
      console.log('✅ Enhanced Infinite Improvement Loop started successfully');
      console.log(`📊 PID: ${process.pid}`);
      console.log(`📁 Status file: ${this.config.statusFile}`);
      console.log(`📝 Log file: ${this.config.logFile}`);
      
    } catch (error) {
      console.error('❌ Failed to start infinite improvement loop:', error);
      
      if (this.config.enableAutoRecovery && this.restartAttempts < this.config.maxRestartAttempts) {
        console.log(`🔄 Attempting restart (${this.restartAttempts + 1}/${this.config.maxRestartAttempts})...`);
        await this.restart();
      } else {
        throw error;
      }
    }
  }

  async stop() {
    console.log('🛑 Stopping Enhanced Infinite Improvement Loop...');
    
    try {
      if (this.loop) {
        await this.loop.stop();
      }
      
      // Clear intervals
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
      }
      
      // Update status
      this.isRunning = false;
      this.status.isRunning = false;
      this.status.uptime = this.startTime ? Date.now() - this.startTime.getTime() : 0;
      
      // Remove PID file
      await this.removePid();
      
      await this.saveStatus();
      
      console.log('✅ Enhanced Infinite Improvement Loop stopped');
      
    } catch (error) {
      console.error('❌ Error stopping infinite improvement loop:', error);
      throw error;
    }
  }

  async restart() {
    console.log('🔄 Restarting Enhanced Infinite Improvement Loop...');
    
    try {
      await this.stop();
      
      // Wait before restart
      await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
      
      this.restartAttempts++;
      this.status.restartAttempts = this.restartAttempts;
      
      await this.start();
      
      console.log('✅ Enhanced Infinite Improvement Loop restarted successfully');
      
    } catch (error) {
      console.error('❌ Failed to restart infinite improvement loop:', error);
      throw error;
    }
  }

  startHealthMonitoring() {
    this.healthCheckInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    try {
      this.lastHealthCheck = new Date();
      this.status.lastHealthCheck = this.lastHealthCheck.toISOString();
      
      // Check if the loop is still running
      if (!this.isRunning || !this.loop) {
        this.status.health = 'unhealthy';
        console.log('⚠️ Health check failed: Loop not running');
        
        if (this.config.enableAutoRecovery) {
          await this.restart();
        }
        return;
      }
      
      // Check system resources
      const performance = await this.getSystemPerformance();
      this.status.performance = performance;
      
      // Determine health status
      if (performance.cpu > 90 || performance.memory > 95) {
        this.status.health = 'warning';
        console.log('⚠️ Health check warning: High resource usage');
      } else {
        this.status.health = 'healthy';
      }
      
      await this.saveStatus();
      
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.status.health = 'error';
      await this.saveStatus();
    }
  }

  startPerformanceTracking() {
    setInterval(async () => {
      try {
        const performance = await this.getSystemPerformance();
        this.status.performance = performance;
        await this.saveStatus();
      } catch (error) {
        console.error('❌ Performance tracking failed:', error);
      }
    }, 60000); // Every minute
  }

  async getSystemPerformance() {
    try {
      const usage = process.memoryUsage();
      const uptime = this.startTime ? Date.now() - this.startTime.getTime() : 0;
      
      return {
        cpu: this.getCpuUsage(),
        memory: (usage.heapUsed / usage.heapTotal) * 100,
        uptime: uptime
      };
    } catch (error) {
      return {
        cpu: 0,
        memory: 0,
        uptime: 0
      };
    }
  }

  getCpuUsage() {
    // Simple CPU usage estimation
    const startUsage = process.cpuUsage();
    const startTime = Date.now();
    
    // Small delay to measure CPU usage
    setTimeout(() => {
      const endUsage = process.cpuUsage(startUsage);
      const endTime = Date.now();
      
      const cpuPercent = (endUsage.user + endUsage.system) / (endTime - startTime) * 100;
      return Math.min(100, cpuPercent);
    }, 100);
    
    return 0; // Placeholder
  }

  async getStatus() {
    await this.loadStatus();
    return {
      ...this.status,
      config: {
        pidFile: this.config.pidFile,
        logFile: this.config.logFile,
        statusFile: this.config.statusFile,
        healthCheckInterval: this.config.healthCheckInterval,
        maxRestartAttempts: this.config.maxRestartAttempts,
        enableAutoRecovery: this.config.enableAutoRecovery,
        enableHealthMonitoring: this.config.enableHealthMonitoring,
        enablePerformanceTracking: this.config.enablePerformanceTracking
      }
    };
  }

  async savePid() {
    try {
      await fs.writeFile(this.config.pidFile, process.pid.toString());
    } catch (error) {
      console.error('❌ Failed to save PID file:', error);
    }
  }

  async removePid() {
    try {
      await fs.unlink(this.config.pidFile);
    } catch (error) {
      // PID file might not exist, which is fine
    }
  }

  async loadStatus() {
    try {
      const data = await fs.readFile(this.config.statusFile, 'utf8');
      this.status = { ...this.status, ...JSON.parse(data) };
    } catch (error) {
      // Status file might not exist, use default status
    }
  }

  async saveStatus() {
    try {
      await fs.writeFile(this.config.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      console.error('❌ Failed to save status:', error);
    }
  }

  async generateReport() {
    const status = await this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      status: status,
      improvementStats: this.loop ? this.loop.getImprovementStats() : null,
      systemInfo: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        pid: process.pid,
        uptime: process.uptime()
      }
    };
    
    const reportPath = path.join(__dirname, 'launcher-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  async cleanup() {
    console.log('🧹 Performing cleanup...');
    
    try {
      await this.stop();
      await this.removePid();
      
      console.log('✅ Cleanup completed');
    } catch (error) {
      console.error('❌ Cleanup failed:', error);
    }
  }
}

// Command line interface
async function main() {
  const launcher = new EnhancedInfiniteImprovementLauncher();
  
  const command = process.argv[2] || 'start';
  
  try {
    switch (command) {
      case 'start':
        await launcher.initialize();
        await launcher.start();
        
        // Keep the process running
        process.on('SIGINT', async () => {
          console.log('\n🛑 Received SIGINT, shutting down gracefully...');
          await launcher.stop();
          process.exit(0);
        });
        
        process.on('SIGTERM', async () => {
          console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
          await launcher.stop();
          process.exit(0);
        });
        
        break;
        
      case 'stop':
        await launcher.initialize();
        await launcher.stop();
        break;
        
      case 'restart':
        await launcher.initialize();
        await launcher.restart();
        break;
        
      case 'status':
        await launcher.initialize();
        const status = await launcher.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
        
      case 'report':
        await launcher.initialize();
        await launcher.generateReport();
        break;
        
      case 'cleanup':
        await launcher.cleanup();
        break;
        
      default:
        console.log(`
Enhanced Infinite Improvement Loop Launcher

Usage: node enhanced-infinite-improvement-launcher.js [command]

Commands:
  start     Start the infinite improvement loop
  stop      Stop the infinite improvement loop
  restart   Restart the infinite improvement loop
  status    Show current status
  report    Generate a detailed report
  cleanup   Clean up all files and stop the loop

Examples:
  node enhanced-infinite-improvement-launcher.js start
  node enhanced-infinite-improvement-launcher.js status
  node enhanced-infinite-improvement-launcher.js report
        `);
        break;
    }
  } catch (error) {
    console.error('❌ Command failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = EnhancedInfiniteImprovementLauncher; 