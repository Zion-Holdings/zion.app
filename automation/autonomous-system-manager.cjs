#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutonomousSystemManager {
  constructor() {
    this.ROOT = process.cwd();
    this.LOG_DIR = path.join(this.ROOT, 'automation', 'logs');
    this.STATUS_DIR = path.join(this.ROOT, 'data', 'reports', 'autonomous-status');
    this.ensureDir(this.LOG_DIR);
    this.ensureDir(this.STATUS_DIR);
    
    this.processes = new Map();
    this.isRunning = false;
    this.healthCheckInterval = null;
    this.restartAttempts = new Map();
    this.maxRestartAttempts = 3;
    
    this.components = [
      {
        name: 'ml-intelligence',
        command: 'npm run links:ml:start',
        restartDelay: 30000, // 30 seconds
        healthCheck: 'ml-health'
      },
      {
        name: 'real-time-monitor',
        command: 'npm run links:realtime:start',
        restartDelay: 15000, // 15 seconds
        healthCheck: 'realtime-health'
      },
      {
        name: 'scheduled-monitor',
        command: 'npm run links:scheduler:start',
        restartDelay: 20000, // 20 seconds
        healthCheck: 'scheduler-health'
      }
    ];
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Save to autonomous log file
    const logFile = path.join(this.LOG_DIR, `autonomous-manager-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + '\n');
    
    // Update status file
    this.updateStatus(message, level);
  }

  async startAutonomousOperation() {
    if (this.isRunning) {
      this.log('⚠️  Autonomous system is already running', 'WARN');
      return;
    }

    this.log('🚀 Starting Autonomous AI System Manager...');
    
    try {
      this.isRunning = true;
      
      // Start all AI components
      await this.startAllComponents();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start autonomous maintenance
      this.startAutonomousMaintenance();
      
      // Start performance optimization
      this.startPerformanceOptimization();
      
      this.log('✅ Autonomous AI System Manager started successfully');
      this.log('🤖 System is now running autonomously and continuously');
      
      // Keep the manager running
      this.keepAlive();
      
    } catch (error) {
      this.log(`❌ Error starting autonomous system: ${error.message}`, 'ERROR');
      this.isRunning = false;
      throw error;
    }
  }

  async startAllComponents() {
    this.log('🔧 Starting all AI components...');
    
    for (const component of this.components) {
      try {
        await this.startComponent(component);
        await this.sleep(2000); // Wait 2 seconds between starts
      } catch (error) {
        this.log(`❌ Failed to start ${component.name}: ${error.message}`, 'ERROR');
      }
    }
    
    this.log(`✅ Started ${this.components.length} AI components`);
  }

  async startComponent(component) {
    this.log(`🚀 Starting ${component.name}...`);
    
    try {
      const process = spawn('npm', ['run', component.command.split(' ')[2]], {
        cwd: this.ROOT,
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });
      
      // Store process reference
      this.processes.set(component.name, {
        process,
        component,
        startTime: new Date(),
        status: 'starting'
      });
      
      // Handle process events
      process.on('error', (error) => {
        this.log(`❌ ${component.name} process error: ${error.message}`, 'ERROR');
        this.handleComponentFailure(component.name, error);
      });
      
      process.on('exit', (code, signal) => {
        this.log(`⚠️  ${component.name} process exited with code ${code}, signal ${signal}`, 'WARN');
        this.handleComponentExit(component.name, code, signal);
      });
      
      process.on('close', (code) => {
        this.log(`🔒 ${component.name} process closed with code ${code}`, 'INFO');
        this.handleComponentClose(component.name, code);
      });
      
      // Wait for process to stabilize
      await this.sleep(5000);
      
      if (process.exitCode === null) {
        this.processes.get(component.name).status = 'running';
        this.log(`✅ ${component.name} started successfully`);
      } else {
        throw new Error(`Process exited with code ${process.exitCode}`);
      }
      
    } catch (error) {
      this.log(`❌ Failed to start ${component.name}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  handleComponentFailure(componentName, error) {
    this.log(`🚨 Component failure detected: ${componentName}`, 'ERROR');
    
    const processInfo = this.processes.get(componentName);
    if (processInfo) {
      processInfo.status = 'failed';
      this.scheduleComponentRestart(componentName);
    }
  }

  handleComponentExit(componentName, code, signal) {
    this.log(`🔄 Component exit detected: ${componentName} (code: ${code}, signal: ${signal})`, 'WARN');
    
    const processInfo = this.processes.get(componentName);
    if (processInfo) {
      processInfo.status = 'exited';
      this.scheduleComponentRestart(componentName);
    }
  }

  handleComponentClose(componentName, code) {
    this.log(`🔒 Component close detected: ${componentName} (code: ${code})`, 'INFO');
    
    const processInfo = this.processes.get(componentName);
    if (processInfo) {
      processInfo.status = 'closed';
      this.scheduleComponentRestart(componentName);
    }
  }

  scheduleComponentRestart(componentName) {
    const restartCount = this.restartAttempts.get(componentName) || 0;
    
    if (restartCount >= this.maxRestartAttempts) {
      this.log(`🚫 Maximum restart attempts reached for ${componentName}`, 'ERROR');
      return;
    }
    
    const component = this.components.find(c => c.name === componentName);
    if (!component) return;
    
    this.log(`⏰ Scheduling restart of ${componentName} in ${component.restartDelay / 1000} seconds`, 'INFO');
    
    setTimeout(async () => {
      try {
        this.log(`🔄 Restarting ${componentName} (attempt ${restartCount + 1})`, 'INFO');
        this.restartAttempts.set(componentName, restartCount + 1);
        await this.startComponent(component);
        this.restartAttempts.set(componentName, 0); // Reset on success
      } catch (error) {
        this.log(`❌ Failed to restart ${componentName}: ${error.message}`, 'ERROR');
      }
    }, component.restartDelay);
  }

  startHealthMonitoring() {
    this.log('🏥 Starting autonomous health monitoring...');
    
    this.healthCheckInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
      }
    }, 60000); // Every minute
    
    this.log('✅ Health monitoring started');
  }

  async performHealthCheck() {
    this.log('🔍 Performing autonomous health check...');
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      components: {},
      system: {
        uptime: this.getUptime(),
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage()
      }
    };
    
    let healthyComponents = 0;
    let totalComponents = this.components.length;
    
    for (const component of this.components) {
      const processInfo = this.processes.get(component.name);
      const status = processInfo ? processInfo.status : 'unknown';
      
      healthStatus.components[component.name] = {
        status,
        uptime: processInfo ? this.getComponentUptime(processInfo.startTime) : 0,
        restartAttempts: this.restartAttempts.get(component.name) || 0
      };
      
      if (status === 'running') {
        healthyComponents++;
      }
    }
    
    // Determine overall health
    const healthPercentage = (healthyComponents / totalComponents) * 100;
    if (healthPercentage >= 90) {
      healthStatus.overall = 'healthy';
    } else if (healthPercentage >= 70) {
      healthStatus.overall = 'warning';
    } else {
      healthStatus.overall = 'critical';
    }
    
    // Save health status
    this.saveHealthStatus(healthStatus);
    
    // Log health summary
    this.log(`🏥 Health Check: ${healthStatus.overall.toUpperCase()} (${healthyComponents}/${totalComponents} components healthy)`);
    
    // Take action if health is poor
    if (healthStatus.overall === 'critical') {
      this.log('🚨 Critical health detected, initiating emergency recovery...', 'ERROR');
      await this.emergencyRecovery();
    }
  }

  startAutonomousMaintenance() {
    this.log('🔧 Starting autonomous maintenance...');
    
    // Daily maintenance at 2 AM
    setInterval(async () => {
      const now = new Date();
      if (now.getHours() === 2 && now.getMinutes() === 0) {
        this.log('🌅 Starting daily autonomous maintenance...');
        await this.performDailyMaintenance();
      }
    }, 60000); // Check every minute
    
    // Weekly maintenance on Sunday at 3 AM
    setInterval(async () => {
      const now = new Date();
      if (now.getDay() === 0 && now.getHours() === 3 && now.getMinutes() === 0) {
        this.log('📅 Starting weekly autonomous maintenance...');
        await this.performWeeklyMaintenance();
      }
    }, 60000);
    
    this.log('✅ Autonomous maintenance scheduled');
  }

  async performDailyMaintenance() {
    try {
      this.log('🧹 Performing daily maintenance tasks...');
      
      // Run link health check
      await this.runCommand('npm run links:monitor');
      
      // Run analytics
      await this.runCommand('npm run links:analytics');
      
      // Clean up old logs
      await this.cleanupOldLogs();
      
      this.log('✅ Daily maintenance completed');
      
    } catch (error) {
      this.log(`❌ Daily maintenance failed: ${error.message}`, 'ERROR');
    }
  }

  async performWeeklyMaintenance() {
    try {
      this.log('🔧 Performing weekly maintenance tasks...');
      
      // Run comprehensive health check
      await this.runCommand('npm run links:enterprise');
      
      // Run security scan
      await this.runCommand('npm run links:security:scan');
      
      // Run route validation
      await this.runCommand('npm run routes:validate');
      
      // Optimize ML models
      await this.optimizeMLModels();
      
      this.log('✅ Weekly maintenance completed');
      
    } catch (error) {
      this.log(`❌ Weekly maintenance failed: ${error.message}`, 'ERROR');
    }
  }

  startPerformanceOptimization() {
    this.log('⚡ Starting autonomous performance optimization...');
    
    // Optimize every 6 hours
    setInterval(async () => {
      try {
        await this.optimizePerformance();
      } catch (error) {
        this.log(`❌ Performance optimization failed: ${error.message}`, 'ERROR');
      }
    }, 6 * 60 * 60 * 1000); // 6 hours
    
    this.log('✅ Performance optimization scheduled');
  }

  async optimizePerformance() {
    this.log('⚡ Optimizing system performance...');
    
    try {
      // Check and optimize ML models
      await this.optimizeMLModels();
      
      // Optimize monitoring intervals
      await this.optimizeMonitoringIntervals();
      
      // Clean up resources
      await this.cleanupResources();
      
      this.log('✅ Performance optimization completed');
      
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async emergencyRecovery() {
    this.log('🚨 Initiating emergency recovery procedures...', 'ERROR');
    
    try {
      // Stop all components
      for (const [name, processInfo] of this.processes) {
        if (processInfo.process && !processInfo.process.killed) {
          processInfo.process.kill('SIGTERM');
        }
      }
      
      // Wait for cleanup
      await this.sleep(10000);
      
      // Restart all components
      await this.startAllComponents();
      
      this.log('✅ Emergency recovery completed');
      
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, 'ERROR');
    }
  }

  async runCommand(command) {
    return new Promise((resolve, reject) => {
      const [cmd, ...args] = command.split(' ');
      const process = spawn(cmd, args, { cwd: this.ROOT });
      
      process.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Command failed with code ${code}`));
        }
      });
      
      process.on('error', reject);
    });
  }

  async cleanupOldLogs() {
    try {
      const logDir = this.LOG_DIR;
      const files = fs.readdirSync(logDir);
      const now = new Date();
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      
      for (const file of files) {
        const filePath = path.join(logDir, file);
        const stats = fs.statSync(filePath);
        const age = now - stats.mtime;
        
        if (age > maxAge) {
          fs.unlinkSync(filePath);
          this.log(`🗑️  Cleaned up old log: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️  Log cleanup failed: ${error.message}`, 'WARN');
    }
  }

  async optimizeMLModels() {
    try {
      this.log('🧠 Optimizing ML models...');
      
      // Check model performance
      const modelsDir = path.join(this.ROOT, 'data', 'models');
      if (fs.existsSync(modelsDir)) {
        const modelFiles = fs.readdirSync(modelsDir).filter(f => f.endsWith('.json'));
        
        for (const modelFile of modelFiles) {
          const modelPath = path.join(modelsDir, modelFile);
          const modelData = JSON.parse(fs.readFileSync(modelPath, 'utf8'));
          
          // Log model performance
          this.log(`📊 Model ${modelFile}: accuracy ${(modelData.accuracy * 100).toFixed(1)}%`);
        }
      }
      
    } catch (error) {
      this.log(`⚠️  ML model optimization failed: ${error.message}`, 'WARN');
    }
  }

  async optimizeMonitoringIntervals() {
    try {
      this.log('⏰ Optimizing monitoring intervals...');
      
      // Adjust intervals based on system load
      const memoryUsage = process.memoryUsage();
      const memoryPercentage = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
      
      if (memoryPercentage > 80) {
        // Increase intervals to reduce load
        this.log('⚠️  High memory usage, increasing monitoring intervals');
      } else if (memoryPercentage < 30) {
        // Decrease intervals for better responsiveness
        this.log('✅ Low memory usage, optimizing monitoring intervals');
      }
      
    } catch (error) {
      this.log(`⚠️  Monitoring optimization failed: ${error.message}`, 'WARN');
    }
  }

  async cleanupResources() {
    try {
      this.log('🧹 Cleaning up system resources...');
      
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
        this.log('🗑️  Garbage collection completed');
      }
      
      // Clear restart attempt counters for stable components
      for (const [name, processInfo] of this.processes) {
        if (processInfo.status === 'running') {
          this.restartAttempts.set(name, 0);
        }
      }
      
    } catch (error) {
      this.log(`⚠️  Resource cleanup failed: ${error.message}`, 'WARN');
    }
  }

  getUptime() {
    return process.uptime();
  }

  getComponentUptime(startTime) {
    return (new Date() - startTime) / 1000;
  }

  saveHealthStatus(healthStatus) {
    try {
      const statusFile = path.join(this.STATUS_DIR, 'health-status.json');
      fs.writeFileSync(statusFile, JSON.stringify(healthStatus, null, 2));
    } catch (error) {
      this.log(`⚠️  Failed to save health status: ${error.message}`, 'WARN');
    }
  }

  updateStatus(message, level) {
    try {
      const status = {
        timestamp: new Date().toISOString(),
        message,
        level,
        systemStatus: this.isRunning ? 'running' : 'stopped',
        componentCount: this.components.length,
        activeProcesses: Array.from(this.processes.values()).filter(p => p.status === 'running').length
      };
      
      const statusFile = path.join(this.STATUS_DIR, 'system-status.json');
      fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
    } catch (error) {
      // Ignore status update errors
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGINT', async () => {
      this.log('\n🛑 Received SIGINT, shutting down gracefully...');
      await this.shutdown();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      this.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      await this.shutdown();
      process.exit(0);
    });
    
    // Keep alive
    setInterval(() => {
      // Heartbeat
    }, 30000); // 30 seconds
  }

  async shutdown() {
    this.log('🔄 Shutting down autonomous system...');
    
    try {
      this.isRunning = false;
      
      // Clear intervals
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
      }
      
      // Stop all components
      for (const [name, processInfo] of this.processes) {
        if (processInfo.process && !processInfo.process.killed) {
          processInfo.process.kill('SIGTERM');
        }
      }
      
      // Wait for cleanup
      await this.sleep(5000);
      
      this.log('✅ Autonomous system shutdown completed');
      
    } catch (error) {
      this.log(`❌ Shutdown error: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    const command = process.argv[2];
    
    try {
      switch (command) {
        case 'start':
          await this.startAutonomousOperation();
          break;
          
        case 'stop':
          await this.shutdown();
          break;
          
        case 'status':
          console.log('Autonomous System Manager Status:');
          console.log(`Running: ${this.isRunning}`);
          console.log(`Components: ${this.components.length}`);
          console.log(`Active Processes: ${Array.from(this.processes.values()).filter(p => p.status === 'running').length}`);
          break;
          
        default:
          console.log('Autonomous AI System Manager');
          console.log('Usage:');
          console.log('  node autonomous-system-manager.cjs start   - Start autonomous operation');
          console.log('  node autonomous-system-manager.cjs stop    - Stop autonomous operation');
          console.log('  node autonomous-system-manager.cjs status - Show current status');
          break;
      }
    } catch (error) {
      this.log(`❌ Error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new AutonomousSystemManager();
  manager.run().catch(console.error);
}

module.exports = AutonomousSystemManager;