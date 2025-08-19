#!/usr/bin/env node

/**
 * Ultimate Redundancy System
 * Provides comprehensive backup coverage for all automation systems:
 * - PM2 automations
 * - GitHub Actions automations  
 * - Netlify Functions automations
 * - Local cron jobs
 * - Health monitoring
 * - Auto-recovery
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancySystem {
  constructor() {
    this.config = {
      logDir: path.join(__dirname, 'logs'),
      pidFile: path.join(__dirname, 'ultimate-redundancy.pid'),
      lockFile: path.join(__dirname, 'ultimate-redundancy.lock'),
      healthCheckInterval: 30000, // 30 seconds
      recoveryAttempts: 3,
      maxRestartDelay: 60000, // 1 minute
      services: {
        pm2: {
          name: 'PM2 Redundancy',
          checkCommand: 'pm2 status',
          startCommand: 'npm run redundancy:pm2',
          stopCommand: 'pm2 stop all',
          restartCommand: 'npm run redundancy:restart',
          healthCheck: 'pm2 ping'
        },
        github: {
          name: 'GitHub Actions Redundancy',
          checkCommand: 'gh workflow list',
          startCommand: 'npm run redundancy:github',
          stopCommand: 'npm run redundancy:stop',
          restartCommand: 'npm run redundancy:restart',
          healthCheck: 'gh auth status'
        },
        netlify: {
          name: 'Netlify Functions Redundancy',
          checkCommand: 'netlify functions:list',
          startCommand: 'npm run redundancy:netlify',
          stopCommand: 'npm run redundancy:stop',
          restartCommand: 'npm run redundancy:restart',
          healthCheck: 'netlify status'
        },
        cron: {
          name: 'Cron Jobs Redundancy',
          checkCommand: 'crontab -l',
          startCommand: 'npm run redundancy:cron:start',
          stopCommand: 'npm run redundancy:cron:stop',
          restartCommand: 'npm run redundancy:cron:restart',
          healthCheck: 'ps aux | grep cron'
        }
      }
    };
    
    this.status = {
      running: false,
      services: {},
      lastHealthCheck: null,
      recoveryAttempts: 0,
      totalRecoveries: 0
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    console.log(`[${timestamp}] [${level}] ${message}`);
    
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
    
    // Write to log file
    const logFile = path.join(this.config.logDir, 'ultimate-redundancy.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        timeout: options.timeout || 30000,
        ...options
      });
      return { success: true, output: result.trim() };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        code: error.code,
        output: error.stdout?.toString() || ''
      };
    }
  }

  async checkServiceHealth(serviceKey) {
    const service = this.config.services[serviceKey];
    if (!service) {
      this.log('ERROR', `Unknown service: ${serviceKey}`);
      return false;
    }

    try {
      const result = await this.executeCommand(service.healthCheck);
      const isHealthy = result.success;
      
      this.status.services[serviceKey] = {
        name: service.name,
        healthy: isHealthy,
        lastCheck: new Date(),
        lastOutput: result.output,
        error: result.error
      };
      
      this.log('INFO', `${service.name} health check: ${isHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      
      if (!isHealthy) {
        this.log('WARN', `${service.name} health check failed:`, result.error);
      }
      
      return isHealthy;
    } catch (error) {
      this.log('ERROR', `Error checking ${service.name} health:`, error);
      this.status.services[serviceKey] = {
        name: service.name,
        healthy: false,
        lastCheck: new Date(),
        error: error.message
      };
      return false;
    }
  }

  async startService(serviceKey) {
    const service = this.config.services[serviceKey];
    if (!service) {
      this.log('ERROR', `Unknown service: ${serviceKey}`);
      return false;
    }

    try {
      this.log('INFO', `Starting ${service.name}...`);
      const result = await this.executeCommand(service.startCommand);
      
      if (result.success) {
        this.log('SUCCESS', `${service.name} started successfully`);
        return true;
      } else {
        this.log('ERROR', `Failed to start ${service.name}:`, result.error);
        return false;
      }
    } catch (error) {
      this.log('ERROR', `Error starting ${service.name}:`, error);
      return false;
    }
  }

  async stopService(serviceKey) {
    const service = this.config.services[serviceKey];
    if (!service) {
      this.log('ERROR', `Unknown service: ${serviceKey}`);
      return false;
    }

    try {
      this.log('INFO', `Stopping ${service.name}...`);
      const result = await this.executeCommand(service.stopCommand);
      
      if (result.success) {
        this.log('SUCCESS', `${service.name} stopped successfully`);
        return true;
      } else {
        this.log('ERROR', `Failed to stop ${service.name}:`, result.error);
        return false;
      }
    } catch (error) {
      this.log('ERROR', `Error stopping ${service.name}:`, error);
      return false;
    }
  }

  async restartService(serviceKey) {
    const service = this.config.services[serviceKey];
    if (!service) {
      this.log('ERROR', `Unknown service: ${serviceKey}`);
      return false;
    }

    try {
      this.log('INFO', `Restarting ${service.name}...`);
      const result = await this.executeCommand(service.restartCommand);
      
      if (result.success) {
        this.log('SUCCESS', `${service.name} restarted successfully`);
        return true;
      } else {
        this.log('ERROR', `Failed to restart ${service.name}:`, result.error);
        return false;
      }
    } catch (error) {
      this.log('ERROR', `Error restarting ${service.name}:`, error);
      return false;
    }
  }

  async recoverService(serviceKey) {
    const service = this.config.services[serviceKey];
    if (!service) {
      this.log('ERROR', `Unknown service: ${serviceKey}`);
      return false;
    }

    this.log('WARN', `Attempting to recover ${service.name}...`);
    
    try {
      // Stop the service first
      await this.stopService(serviceKey);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Start the service
      const success = await this.startService(serviceKey);
      
      if (success) {
        this.log('SUCCESS', `${service.name} recovered successfully`);
        this.status.totalRecoveries++;
        return true;
      } else {
        this.log('ERROR', `Failed to recover ${service.name}`);
        return false;
      }
    } catch (error) {
      this.log('ERROR', `Error during recovery of ${service.name}:`, error);
      return false;
    }
  }

  async performHealthCheck() {
    this.log('INFO', 'Performing comprehensive health check...');
    this.status.lastHealthCheck = new Date();
    
    const healthResults = {};
    let overallHealth = true;
    
    for (const serviceKey of Object.keys(this.config.services)) {
      const isHealthy = await this.checkServiceHealth(serviceKey);
      healthResults[serviceKey] = isHealthy;
      
      if (!isHealthy) {
        overallHealth = false;
      }
    }
    
    this.log('INFO', 'Health check completed', { healthResults, overallHealth });
    
    // Attempt recovery for unhealthy services
    if (!overallHealth) {
      await this.attemptRecovery(healthResults);
    }
    
    return overallHealth;
  }

  async attemptRecovery(healthResults) {
    this.log('WARN', 'Attempting to recover unhealthy services...');
    
    for (const [serviceKey, isHealthy] of Object.entries(healthResults)) {
      if (!isHealthy && this.status.recoveryAttempts < this.config.recoveryAttempts) {
        this.log('WARN', `Attempting recovery for ${serviceKey} (attempt ${this.status.recoveryAttempts + 1})`);
        
        const recovered = await this.recoverService(serviceKey);
        
        if (recovered) {
          this.log('SUCCESS', `${serviceKey} recovered successfully`);
          this.status.recoveryAttempts = 0; // Reset counter on success
        } else {
          this.status.recoveryAttempts++;
          this.log('ERROR', `${serviceKey} recovery failed (${this.status.recoveryAttempts}/${this.config.recoveryAttempts})`);
        }
        
        // Wait before next recovery attempt
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
  }

  async start() {
    if (this.status.running) {
      this.log('WARN', 'Ultimate redundancy system is already running');
      return;
    }

    this.log('INFO', 'Starting Ultimate Redundancy System...');
    
    try {
      // Write PID file
      fs.writeFileSync(this.config.pidFile, process.pid.toString());
      
      // Start all services
      for (const serviceKey of Object.keys(this.config.services)) {
        await this.startService(serviceKey);
      }
      
      // Perform initial health check
      await this.performHealthCheck();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      this.status.running = true;
      this.log('SUCCESS', 'Ultimate Redundancy System started successfully');
      
      // Keep the process alive
      this.keepAlive();
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Ultimate Redundancy System:', error);
      throw error;
    }
  }

  async stop() {
    if (!this.status.running) {
      this.log('WARN', 'Ultimate redundancy system is not running');
      return;
    }

    this.log('INFO', 'Stopping Ultimate Redundancy System...');
    
    try {
      // Stop all services
      for (const serviceKey of Object.keys(this.config.services)) {
        await this.stopService(serviceKey);
      }
      
      // Remove PID file
      if (fs.existsSync(this.config.pidFile)) {
        fs.unlinkSync(this.config.pidFile);
      }
      
      this.status.running = false;
      this.log('SUCCESS', 'Ultimate Redundancy System stopped successfully');
      
      process.exit(0);
      
    } catch (error) {
      this.log('ERROR', 'Failed to stop Ultimate Redundancy System:', error);
      throw error;
    }
  }

  startHealthMonitoring() {
    // Health check every 30 seconds
    setInterval(async () => {
      if (this.status.running) {
        await this.performHealthCheck();
      }
    }, this.config.healthCheckInterval);
    
    // Comprehensive health check every 5 minutes
    setInterval(async () => {
      if (this.status.running) {
        this.log('INFO', 'Performing comprehensive system health check...');
        await this.performHealthCheck();
      }
    }, 5 * 60 * 1000);
    
    this.log('INFO', 'Health monitoring started');
  }

  keepAlive() {
    // Keep the process alive
    process.stdin.resume();
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      this.log('INFO', 'Received SIGINT, shutting down gracefully...');
      await this.stop();
    });
    
    process.on('SIGTERM', async () => {
      this.log('INFO', 'Received SIGTERM, shutting down gracefully...');
      await this.stop();
    });
    
    process.on('uncaughtException', (error) => {
      this.log('ERROR', 'Uncaught exception:', error);
      // Don't exit, try to recover
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log('ERROR', 'Unhandled rejection:', { reason, promise });
      // Don't exit, try to recover
    });
  }

  getStatus() {
    return {
      running: this.status.running,
      services: this.status.services,
      lastHealthCheck: this.status.lastHealthCheck,
      recoveryAttempts: this.status.recoveryAttempts,
      totalRecoveries: this.status.totalRecoveries,
      uptime: this.status.running ? Date.now() - (this.status.lastHealthCheck || Date.now()) : 0
    };
  }

  async runCommand(command) {
    switch (command) {
      case 'start':
        await this.start();
        break;
      case 'stop':
        await this.stop();
        break;
      case 'restart':
        await this.stop();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.start();
        break;
      case 'status':
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'health':
        await this.performHealthCheck();
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      default:
        console.log('Usage: node ultimate-redundancy-system.cjs [start|stop|restart|status|health]');
        process.exit(1);
    }
  }
}

// Main execution
if (require.main === module) {
  const command = process.argv[2] || 'start';
  const system = new UltimateRedundancySystem();
  
  system.runCommand(command).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = UltimateRedundancySystem;