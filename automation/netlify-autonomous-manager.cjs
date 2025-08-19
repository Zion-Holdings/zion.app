#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');
const { EventEmitter } = require('events');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'autonomous-manager.log');
const PID_FILE = path.join(LOG_DIR, 'autonomous-manager.pid');
const CONFIG_FILE = path.join(__dirname, 'autonomous-config.json');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class NetlifyAutonomousManager extends EventEmitter {
  constructor() {
    super();
    this.projectRoot = path.join(__dirname, '..');
    this.isRunning = false;
    this.processes = new Map();
    this.config = this.loadConfig();
    this.healthCheckInterval = null;
    this.autoRestartInterval = null;
    this.stats = {
      startTime: Date.now(),
      restarts: 0,
      healthChecks: 0,
      optimizations: 0,
      issues: 0,
      lastHealthCheck: null,
      lastOptimization: null
    };
  }

  loadConfig() {
    const defaultConfig = {
      autonomous: {
        enabled: true,
        autoStart: true,
        autoRestart: true,
        healthCheckInterval: 2 * 60 * 1000, // 2 minutes
        autoRestartInterval: 10 * 60 * 1000, // 10 minutes
        maxRestarts: 5,
        restartDelay: 30 * 1000 // 30 seconds
      },
      monitoring: {
        enabled: true,
        interval: 5 * 60 * 1000, // 5 minutes
        autoOptimize: true,
        threshold: 100 * 1024 * 1024 // 100MB
      },
      optimization: {
        enabled: true,
        schedule: '0 */2 * * *', // Every 2 hours
        autoCleanup: true,
        maxArtifactsSize: 200 * 1024 * 1024 // 200MB
      },
      notifications: {
        enabled: true,
        criticalIssues: true,
        optimizationResults: true,
        systemStatus: true
      }
    };

    try {
      if (fs.existsSync(CONFIG_FILE)) {
        const savedConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        return { ...defaultConfig, ...savedConfig };
      }
    } catch (error) {
      log(`Warning: Could not load config, using defaults: ${error.message}`);
    }

    // Save default config
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(defaultConfig, null, 2));
    return defaultConfig;
  }

  async start() {
    if (this.isRunning) {
      log('⚠️ Autonomous manager is already running');
      return false;
    }

    log('🚀 Starting Netlify Autonomous Manager...');
    this.isRunning = true;
    this.stats.startTime = Date.now();

    // Save PID for process management
    fs.writeFileSync(PID_FILE, process.pid.toString());

    try {
      // Start all autonomous processes
      await this.startAutonomousProcesses();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start auto-restart monitoring
      this.startAutoRestartMonitoring();
      
      // Start scheduled optimization
      this.startScheduledOptimization();
      
      // Start continuous monitoring
      await this.startContinuousMonitoring();
      
      log('✅ Autonomous manager started successfully');
      this.emit('started');
      
      // Keep the process alive
      this.keepAlive();
      
      return true;
      
    } catch (error) {
      log(`❌ Failed to start autonomous manager: ${error.message}`);
      this.isRunning = false;
      return false;
    }
  }

  async stop() {
    if (!this.isRunning) {
      log('⚠️ Autonomous manager is not running');
      return false;
    }

    log('🛑 Stopping Netlify Autonomous Manager...');
    
    // Stop all processes
    await this.stopAllProcesses();
    
    // Clear intervals
    if (this.healthCheckInterval) clearInterval(this.healthCheckInterval);
    if (this.autoRestartInterval) clearInterval(this.autoRestartInterval);
    
    this.isRunning = false;
    
    // Remove PID file
    if (fs.existsSync(PID_FILE)) fs.unlinkSync(PID_FILE);
    
    // Generate final report
    const finalReport = await this.generateFinalReport();
    const reportPath = path.join(LOG_DIR, `autonomous-manager-final-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2));
    
    log(`✅ Autonomous manager stopped. Final report saved to: ${reportPath}`);
    this.emit('stopped');
    return true;
  }

  async startAutonomousProcesses() {
    log('🔧 Starting autonomous processes...');
    
    const processes = [
      {
        name: 'continuous-monitor',
        command: 'node',
        args: ['automation/netlify-continuous-monitor.cjs', 'start'],
        cwd: this.projectRoot,
        restartOnFailure: true
      },
      {
        name: 'health-checker',
        command: 'node',
        args: ['automation/netlify-intelligent-build-orchestrator.cjs', 'health'],
        cwd: this.projectRoot,
        restartOnFailure: false
      }
    ];

    for (const processConfig of processes) {
      await this.startProcess(processConfig);
    }
  }

  async startProcess(processConfig) {
    try {
      const childProcess = spawn(processConfig.command, processConfig.args, {
        cwd: processConfig.cwd,
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });

      const processId = `${processConfig.name}-${Date.now()}`;
      
      childProcess.on('error', (error) => {
        log(`❌ Process ${processConfig.name} error: ${error.message}`);
        this.emit('processError', { name: processConfig.name, error });
        
        if (processConfig.restartOnFailure) {
          this.scheduleProcessRestart(processConfig);
        }
      });

      childProcess.on('exit', (code, signal) => {
        log(`📤 Process ${processConfig.name} exited with code ${code} and signal ${signal}`);
        this.emit('processExit', { name: processConfig.name, code, signal });
        
        if (processConfig.restartOnFailure && code !== 0) {
          this.scheduleProcessRestart(processConfig);
        }
      });

      childProcess.stdout.on('data', (data) => {
        log(`📤 ${processConfig.name}: ${data.toString().trim()}`);
      });

      childProcess.stderr.on('data', (data) => {
        log(`❌ ${processConfig.name}: ${data.toString().trim()}`);
      });

      this.processes.set(processId, {
        process: childProcess,
        config: processConfig,
        startTime: Date.now(),
        restarts: 0
      });

      log(`✅ Started process: ${processConfig.name} (PID: ${childProcess.pid})`);
      
    } catch (error) {
      log(`❌ Failed to start process ${processConfig.name}: ${error.message}`);
      throw error;
    }
  }

  scheduleProcessRestart(processConfig) {
    const restartDelay = this.config.autonomous.restartDelay;
    log(`🔄 Scheduling restart of ${processConfig.name} in ${restartDelay/1000}s`);
    
    setTimeout(async () => {
      try {
        await this.startProcess(processConfig);
      } catch (error) {
        log(`❌ Failed to restart ${processConfig.name}: ${error.message}`);
      }
    }, restartDelay);
  }

  async stopAllProcesses() {
    log('🛑 Stopping all autonomous processes...');
    
    for (const [id, processInfo] of this.processes) {
      try {
        processInfo.process.kill('SIGTERM');
        log(`✅ Stopped process: ${processInfo.config.name}`);
      } catch (error) {
        log(`❌ Error stopping ${processInfo.config.name}: ${error.message}`);
      }
    }
    
    this.processes.clear();
  }

  startHealthMonitoring() {
    log('🏥 Starting health monitoring...');
    
    this.healthCheckInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        this.stats.healthChecks++;
        this.stats.lastHealthCheck = Date.now();
      } catch (error) {
        log(`❌ Health check failed: ${error.message}`);
        this.stats.issues++;
      }
    }, this.config.autonomous.healthCheckInterval);
  }

  startAutoRestartMonitoring() {
    log('🔄 Starting auto-restart monitoring...');
    
    this.autoRestartInterval = setInterval(async () => {
      try {
        await this.checkAndRestartProcesses();
      } catch (error) {
        log(`❌ Auto-restart check failed: ${error.message}`);
      }
    }, this.config.autonomous.autoRestartInterval);
  }

  startScheduledOptimization() {
    log('⏰ Starting scheduled optimization...');
    
    // Run optimization every 2 hours
    setInterval(async () => {
      try {
        await this.runScheduledOptimization();
      } catch (error) {
        log(`❌ Scheduled optimization failed: ${error.message}`);
      }
    }, 2 * 60 * 60 * 1000); // 2 hours
  }

  async startContinuousMonitoring() {
    if (!this.config.monitoring.enabled) return;
    
    log('📊 Starting continuous monitoring...');
    
    try {
      const monitor = require('./netlify-continuous-monitor.cjs');
      const monitorInstance = new monitor();
      
      // Start monitoring in background
      monitorInstance.start().then(() => {
        log('✅ Continuous monitoring started');
      }).catch(error => {
        log(`❌ Continuous monitoring failed: ${error.message}`);
      });
      
    } catch (error) {
      log(`❌ Failed to start continuous monitoring: ${error.message}`);
    }
  }

  async performHealthCheck() {
    log('🏥 Performing autonomous health check...');
    
    try {
      // Check system health
      const orchestrator = require('./netlify-intelligent-build-orchestrator.cjs');
      const health = await orchestrator.prototype.runHealthCheck.call({});
      
      // Check build artifacts size
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const analyzer = new artifactOptimizer();
      const analysis = await analyzer.analyzeBuildArtifacts();
      
      // Auto-optimize if needed
      if (this.config.monitoring.autoOptimize && 
          analysis.totalSize > this.config.monitoring.threshold) {
        log('🔧 Auto-optimization triggered by health check');
        await this.runAutoOptimization();
      }
      
      // Check process health
      const processHealth = this.checkProcessHealth();
      
      const healthStatus = {
        timestamp: new Date().toISOString(),
        system: health,
        artifacts: {
          size: analysis.totalSize,
          sizeFormatted: this.formatBytes(analysis.totalSize),
          needsOptimization: analysis.totalSize > this.config.monitoring.threshold
        },
        processes: processHealth,
        overall: this.calculateOverallHealth(health, processHealth)
      };
      
      // Save health status
      const healthPath = path.join(LOG_DIR, `health-check-${Date.now()}.json`);
      fs.writeFileSync(healthPath, JSON.stringify(healthStatus, null, 2));
      
      log(`✅ Health check completed. Status: ${healthStatus.overall}`);
      
      // Emit health status
      this.emit('healthCheck', healthStatus);
      
      return healthStatus;
      
    } catch (error) {
      log(`❌ Health check failed: ${error.message}`);
      throw error;
    }
  }

  checkProcessHealth() {
    const health = {};
    
    for (const [id, processInfo] of this.processes) {
      health[processInfo.config.name] = {
        running: !processInfo.process.killed,
        uptime: Date.now() - processInfo.startTime,
        restarts: processInfo.restarts,
        pid: processInfo.process.pid
      };
    }
    
    return health;
  }

  calculateOverallHealth(systemHealth, processHealth) {
    if (systemHealth.overall === 'poor') return 'poor';
    
    const processCount = Object.keys(processHealth).length;
    const runningProcesses = Object.values(processHealth).filter(p => p.running).length;
    
    if (runningProcesses < processCount) return 'fair';
    if (systemHealth.overall === 'excellent' && runningProcesses === processCount) return 'excellent';
    return 'good';
  }

  async checkAndRestartProcesses() {
    log('🔄 Checking process health and restarting if needed...');
    
    for (const [id, processInfo] of this.processes) {
      if (processInfo.process.killed && processInfo.restarts < this.config.autonomous.maxRestarts) {
        log(`🔄 Restarting ${processInfo.config.name} (restart ${processInfo.restarts + 1}/${this.config.autonomous.maxRestarts})`);
        
        try {
          processInfo.restarts++;
          await this.startProcess(processInfo.config);
        } catch (error) {
          log(`❌ Failed to restart ${processInfo.config.name}: ${error.message}`);
        }
      }
    }
  }

  async runScheduledOptimization() {
    log('⏰ Running scheduled optimization...');
    
    try {
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const optimizer = new artifactOptimizer();
      const result = await optimizer.runFullOptimization();
      
      this.stats.optimizations++;
      this.stats.lastOptimization = Date.now();
      
      log(`✅ Scheduled optimization completed: ${result.summary.totalSavingsFormatted} saved`);
      
      // Emit optimization result
      this.emit('optimization', result);
      
      return result;
      
    } catch (error) {
      log(`❌ Scheduled optimization failed: ${error.message}`);
      throw error;
    }
  }

  async runAutoOptimization() {
    log('🔧 Running auto-optimization...');
    
    try {
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const optimizer = new artifactOptimizer();
      const result = await optimizer.runFullOptimization();
      
      this.stats.optimizations++;
      this.stats.lastOptimization = Date.now();
      
      log(`✅ Auto-optimization completed: ${result.summary.totalSavingsFormatted} saved`);
      
      // Emit optimization result
      this.emit('autoOptimization', result);
      
      return result;
      
    } catch (error) {
      log(`❌ Auto-optimization failed: ${error.message}`);
      throw error;
    }
  }

  async generateFinalReport() {
    const duration = Date.now() - this.stats.startTime;
    
    return {
      timestamp: new Date().toISOString(),
      session: {
        startTime: this.stats.startTime,
        duration: duration,
        durationFormatted: this.formatDuration(duration)
      },
      statistics: {
        ...this.stats,
        uptime: duration,
        uptimeFormatted: this.formatDuration(duration)
      },
      configuration: this.config,
      processes: Array.from(this.processes.keys()),
      summary: {
        totalHealthChecks: this.stats.healthChecks,
        totalOptimizations: this.stats.optimizations,
        totalIssues: this.stats.issues,
        totalRestarts: this.stats.restarts
      }
    };
  }

  async getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: this.stats.startTime ? Date.now() - this.stats.startTime : 0,
      uptimeFormatted: this.formatDuration(this.stats.startTime ? Date.now() - this.stats.startTime : 0),
      stats: this.stats,
      config: this.config,
      processes: Array.from(this.processes.keys()),
      nextHealthCheck: this.healthCheckInterval ? 
        new Date(Date.now() + this.config.autonomous.healthCheckInterval) : null
    };
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGINT', async () => {
      log('🛑 Received SIGINT, shutting down gracefully...');
      await this.stop();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      log('🛑 Received SIGTERM, shutting down gracefully...');
      await this.stop();
      process.exit(0);
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', async (error) => {
      log(`❌ Uncaught exception: ${error.message}`);
      log(`❌ Stack trace: ${error.stack}`);
      
      // Try to restart the manager
      if (this.isRunning) {
        log('🔄 Attempting to restart autonomous manager...');
        await this.stop();
        setTimeout(async () => {
          await this.start();
        }, 5000);
      }
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      log(`❌ Unhandled promise rejection: ${reason}`);
      log(`❌ Promise: ${promise}`);
    });
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyAutonomousManager();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start().then(success => {
        if (success) {
          log('🚀 Autonomous manager started successfully');
          // Keep the process running
        } else {
          log('❌ Failed to start autonomous manager');
          process.exit(1);
        }
      });
      break;
      
    case 'stop':
      manager.stop().then(console.log);
      break;
      
    case 'status':
      manager.getStatus().then(console.log);
      break;
      
    case 'restart':
      manager.stop().then(() => {
        setTimeout(() => manager.start(), 2000);
      });
      break;
      
    default:
      console.log('Usage: node netlify-autonomous-manager.cjs [start|stop|status|restart]');
      break;
  }
}

module.exports = NetlifyAutonomousManager;
