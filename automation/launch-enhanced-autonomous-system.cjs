#!/usr/bin/env node
"use strict";

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class EnhancedAutonomousSystem {
  constructor() {
    this.processes = new Map();
    this.logDir = path.join(__dirname, 'logs');
    this.configFile = path.join(__dirname, 'autonomous-config.json');
    this.ensureLogDir();
    this.loadConfig();
  }

  ensureLogDir() {
    try {
      fs.mkdirSync(this.logDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error.message);
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        this.config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      } else {
        this.config = this.getDefaultConfig();
        this.saveConfig();
      }
    } catch (error) {
      console.error('Failed to load config, using defaults:', error.message);
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      services: {
        'autonomous-system-manager': {
          enabled: true,
          script: 'autonomous-system-manager.cjs',
          interval: 60000,
          maxRestarts: 5,
          restartDelay: 5000
        },
        'ml-link-intelligence': {
          enabled: true,
          script: 'ml-link-intelligence.cjs',
          interval: 120000,
          maxRestarts: 3,
          restartDelay: 10000
        },
        'link-health-scheduler': {
          enabled: true,
          script: 'link-health-scheduler.cjs',
          interval: 600000,
          maxRestarts: 3,
          restartDelay: 15000
        },
        'real-time-performance-monitor': {
          enabled: true,
          script: 'real-time-performance-monitor.cjs',
          interval: 30000,
          maxRestarts: 3,
          restartDelay: 10000
        }
      },
      monitoring: {
        healthCheckInterval: 30000,
        logRotationSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 5
      }
    };
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      console.error('Failed to save config:', error.message);
    }
  }

  log(service, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${service}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `${service}.runtime.log`);
    try {
      fs.appendFileSync(logFile, logMessage + '\n', 'utf8');
    } catch (error) {
      console.error(`Failed to write to log file ${logFile}:`, error.message);
    }
  }

  startService(serviceName, serviceConfig) {
    if (!serviceConfig.enabled) {
      this.log('SYSTEM', `Service ${serviceName} is disabled`);
      return;
    }

    if (this.processes.has(serviceName)) {
      this.log('SYSTEM', `Service ${serviceName} is already running`);
      return;
    }

    const scriptPath = path.join(__dirname, serviceConfig.script);
    if (!fs.existsSync(scriptPath)) {
      this.log('SYSTEM', `Script not found: ${scriptPath}`);
      return;
    }

    this.log('SYSTEM', `Starting service: ${serviceName}`);
    
    const process = spawn('node', [scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: __dirname
    });

    let restartCount = 0;
    let isRestarting = false;

    process.stdout.on('data', (data) => {
      this.log(serviceName, data.toString().trim());
    });

    process.stderr.on('data', (data) => {
      this.log(serviceName, `ERROR: ${data.toString().trim()}`);
    });

    process.on('exit', (code, signal) => {
      this.log('SYSTEM', `Service ${serviceName} exited with code ${code}, signal ${signal}`);
      this.processes.delete(serviceName);
      
      if (restartCount < serviceConfig.maxRestarts && !isRestarting) {
        isRestarting = true;
        restartCount++;
        this.log('SYSTEM', `Restarting ${serviceName} in ${serviceConfig.restartDelay}ms (attempt ${restartCount}/${serviceConfig.maxRestarts})`);
        
        setTimeout(() => {
          isRestarting = false;
          this.startService(serviceName, serviceConfig);
        }, serviceConfig.restartDelay);
      } else if (restartCount >= serviceConfig.maxRestarts) {
        this.log('SYSTEM', `Service ${serviceName} exceeded max restart attempts, disabling`);
        serviceConfig.enabled = false;
        this.saveConfig();
      }
    });

    process.on('error', (error) => {
      this.log('SYSTEM', `Failed to start ${serviceName}: ${error.message}`);
    });

    this.processes.set(serviceName, {
      process,
      config: serviceConfig,
      startTime: Date.now(),
      restartCount: 0
    });

    this.log('SYSTEM', `Service ${serviceName} started successfully`);
  }

  stopService(serviceName) {
    const serviceInfo = this.processes.get(serviceName);
    if (!serviceInfo) {
      this.log('SYSTEM', `Service ${serviceName} is not running`);
      return;
    }

    this.log('SYSTEM', `Stopping service: ${serviceName}`);
    serviceInfo.process.kill('SIGTERM');
    
    // Force kill after 5 seconds if graceful shutdown fails
    setTimeout(() => {
      if (this.processes.has(serviceName)) {
        this.log('SYSTEM', `Force killing service: ${serviceName}`);
        serviceInfo.process.kill('SIGKILL');
      }
    }, 5000);
  }

  startAll() {
    this.log('SYSTEM', 'Starting all enabled services...');
    Object.entries(this.config.services).forEach(([serviceName, serviceConfig]) => {
      this.startService(serviceName, serviceConfig);
    });
  }

  stopAll() {
    this.log('SYSTEM', 'Stopping all services...');
    Array.from(this.processes.keys()).forEach(serviceName => {
      this.stopService(serviceName);
    });
  }

  restartAll() {
    this.log('SYSTEM', 'Restarting all services...');
    this.stopAll();
    setTimeout(() => {
      this.startAll();
    }, 2000);
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      services: {},
      system: {
        platform: os.platform(),
        arch: os.arch(),
        nodeVersion: process.version,
        memory: process.memoryUsage(),
        uptime: process.uptime()
      }
    };

    Object.entries(this.config.services).forEach(([serviceName, serviceConfig]) => {
      const serviceInfo = this.processes.get(serviceName);
      status.services[serviceName] = {
        enabled: serviceConfig.enabled,
        running: !!serviceInfo,
        startTime: serviceInfo ? serviceInfo.startTime : null,
        uptime: serviceInfo ? Date.now() - serviceInfo.startTime : null,
        restartCount: serviceInfo ? serviceInfo.restartCount : 0,
        pid: serviceInfo ? serviceInfo.process.pid : null
      };
    });

    return status;
  }

  printStatus() {
    const status = this.getStatus();
    console.log('\n=== Enhanced Autonomous System Status ===');
    console.log(`Timestamp: ${status.timestamp}`);
    console.log(`Platform: ${status.system.platform} (${status.system.arch})`);
    console.log(`Node Version: ${status.system.nodeVersion}`);
    console.log(`System Uptime: ${Math.floor(status.system.uptime / 60)} minutes`);
    console.log('\nServices:');
    
    Object.entries(status.services).forEach(([serviceName, serviceStatus]) => {
      const statusIcon = serviceStatus.running ? '🟢' : '🔴';
      const uptime = serviceStatus.uptime ? 
        `${Math.floor(serviceStatus.uptime / 1000)}s` : 'N/A';
      
      console.log(`  ${statusIcon} ${serviceName}:`);
      console.log(`    Enabled: ${serviceStatus.enabled}`);
      console.log(`    Running: ${serviceStatus.running}`);
      console.log(`    Uptime: ${uptime}`);
      console.log(`    Restarts: ${serviceStatus.restartCount}`);
      console.log(`    PID: ${serviceStatus.pid || 'N/A'}`);
    });
    console.log('\n==========================================\n');
  }

  async healthCheck() {
    const status = this.getStatus();
    const issues = [];

    Object.entries(status.services).forEach(([serviceName, serviceStatus]) => {
      if (serviceStatus.enabled && !serviceStatus.running) {
        issues.push(`Service ${serviceName} is enabled but not running`);
      }
      if (serviceStatus.restartCount > 3) {
        issues.push(`Service ${serviceName} has restarted ${serviceStatus.restartCount} times`);
      }
    });

    if (issues.length > 0) {
      this.log('HEALTH', `Health check issues found: ${issues.join(', ')}`);
      return false;
    }

    this.log('HEALTH', 'All services healthy');
    return true;
  }

  async runHealthCheckLoop() {
    setInterval(async () => {
      await this.healthCheck();
    }, this.config.monitoring.healthCheckInterval);
  }
}

// CLI interface
async function main() {
  const system = new EnhancedAutonomousSystem();
  const command = process.argv[2] || 'start';

  // Handle graceful shutdown
  const shutdown = () => {
    console.log('\nShutting down Enhanced Autonomous System...');
    system.stopAll();
    setTimeout(() => {
      console.log('Shutdown complete');
      process.exit(0);
    }, 2000);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  try {
    switch (command) {
      case 'start':
        console.log('Starting Enhanced Autonomous System...');
        system.startAll();
        await system.runHealthCheckLoop();
        
        // Keep the process alive
        setInterval(() => {
          // Periodic status update
        }, 60000);
        
        break;
        
      case 'stop':
        console.log('Stopping Enhanced Autonomous System...');
        system.stopAll();
        break;
        
      case 'restart':
        console.log('Restarting Enhanced Autonomous System...');
        system.restartAll();
        break;
        
      case 'status':
        system.printStatus();
        break;
        
      case 'health':
        const isHealthy = await system.healthCheck();
        process.exit(isHealthy ? 0 : 1);
        break;
        
      default:
        console.log('Usage: node launch-enhanced-autonomous-system.js [start|stop|restart|status|health]');
        console.log('  start   - Start all enabled services');
        console.log('  stop    - Stop all running services');
        console.log('  restart - Restart all services');
        console.log('  status  - Show system status');
        console.log('  health  - Run health check');
        process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = EnhancedAutonomousSystem;
