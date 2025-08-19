#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class EnhancedPM2RedundancyManager {
  constructor() {
    // Use a more robust path resolution
    this.baseDir = process.cwd() || '.';
    this.logDir = path.resolve(this.baseDir, 'automation', 'logs');
    
    this.primaryProcesses = [
      'zion-auto-sync',
      'zion-auto-sync-cron'
    ];
    
    this.backupProcesses = [
      'zion-auto-sync-backup',
      'zion-auto-sync-cron-backup'
    ];
    
    this.redundancyProcesses = [
      'redundancy-master-orchestrator',
      'redundancy-pm2-manager',
      'redundancy-github-manager',
      'redundancy-netlify-manager'
    ];
    
    this.allProcesses = [
      ...this.primaryProcesses,
      ...this.backupProcesses,
      ...this.redundancyProcesses
    ];
    
    this.healthStatus = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 5;
    
    this.ensureLogDir();
  }

  ensureLogDir() {
    try {
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }
    } catch (error) {
      console.error('Failed to create log directory:', error.message);
      // Fallback to current directory
      this.logDir = path.resolve('.', 'logs');
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [PM2-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'pm2-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async getPM2Status() {
    try {
      const result = await this.executeCommand('pm2 jlist');
      if (result.success) {
        return JSON.parse(result.output);
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      const status = await this.getPM2Status();
      const process = status.find(p => p.name === processName);
      
      if (!process) {
        return { status: 'not_found', health: 'unhealthy' };
      }
      
      const health = {
        status: process.pm2_env?.status || 'unknown',
        health: 'healthy',
        uptime: process.pm2_env?.pm_uptime || 0,
        restarts: process.pm2_env?.restart_time || 0,
        memory: process.monit?.memory || 0,
        cpu: process.monit?.cpu || 0
      };
      
      // Determine health based on status and metrics
      if (health.status === 'online' && health.restarts < 10) {
        health.health = 'healthy';
      } else if (health.status === 'online' && health.restarts < 20) {
        health.health = 'degraded';
      } else {
        health.health = 'unhealthy';
      }
      
      return health;
    } catch (error) {
      this.log(`Failed to check health for ${processName}: ${error.message}`, 'ERROR');
      return { status: 'error', health: 'unhealthy', error: error.message };
    }
  }

  async startBackupProcesses() {
    this.log('Starting backup PM2 processes...');
    
    for (const processName of this.backupProcesses) {
      try {
        const health = await this.checkProcessHealth(processName);
        
        if (health.status === 'not_found' || health.health === 'unhealthy') {
          this.log(`Starting backup process: ${processName}`);
          
          // Start the process using ecosystem file
          const result = await this.executeCommand(`pm2 start ecosystem-redundancy.pm2.cjs --only ${processName}`);
          
          if (result.success) {
            this.log(`Successfully started backup process: ${processName}`);
          } else {
            this.log(`Failed to start backup process ${processName}: ${result.error}`, 'ERROR');
          }
        } else {
          this.log(`Backup process ${processName} is already running and healthy`);
        }
      } catch (error) {
        this.log(`Error starting backup process ${processName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async startRedundancyProcesses() {
    this.log('Starting redundancy management processes...');
    
    for (const processName of this.redundancyProcesses) {
      try {
        const health = await this.checkProcessHealth(processName);
        
        if (health.status === 'not_found' || health.health === 'unhealthy') {
          this.log(`Starting redundancy process: ${processName}`);
          
          const result = await this.executeCommand(`pm2 start ecosystem-redundancy.pm2.cjs --only ${processName}`);
          
          if (result.success) {
            this.log(`Successfully started redundancy process: ${processName}`);
          } else {
            this.log(`Failed to start redundancy process ${processName}: ${result.error}`, 'ERROR');
          }
        } else {
          this.log(`Redundancy process ${processName} is already running and healthy`);
        }
      } catch (error) {
        this.log(`Error starting redundancy process ${processName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async monitorAndRecover() {
    this.log('Starting PM2 redundancy monitoring and recovery...');
    
    // Monitor all processes every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
      await this.performHealthCheck();
    });
    
    // Full system recovery check every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
      await this.performFullRecovery();
    });
  }

  async performHealthCheck() {
    this.log('Performing health check on all PM2 processes...');
    
    for (const processName of this.allProcesses) {
      try {
        const health = await this.checkProcessHealth(processName);
        this.healthStatus.set(processName, health);
        
        if (health.health === 'unhealthy') {
          this.log(`Process ${processName} is unhealthy, attempting recovery...`);
          await this.attemptRecovery(processName);
        }
      } catch (error) {
        this.log(`Error checking health for ${processName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async attemptRecovery(processName) {
    const attempts = this.recoveryAttempts.get(processName) || 0;
    
    if (attempts >= this.maxRecoveryAttempts) {
      this.log(`Max recovery attempts reached for ${processName}, escalating...`, 'WARN');
      await this.escalateRecovery(processName);
      return;
    }
    
    this.log(`Attempting recovery for ${processName} (attempt ${attempts + 1}/${this.maxRecoveryAttempts})`);
    
    try {
      // Try to restart the process
      const result = await this.executeCommand(`pm2 restart ${processName}`);
      
      if (result.success) {
        this.log(`Successfully restarted ${processName}`);
        this.recoveryAttempts.set(processName, 0); // Reset attempts on success
      } else {
        this.log(`Failed to restart ${processName}: ${result.error}`, 'ERROR');
        this.recoveryAttempts.set(processName, attempts + 1);
      }
    } catch (error) {
      this.log(`Error during recovery for ${processName}: ${error.message}`, 'ERROR');
      this.recoveryAttempts.set(processName, attempts + 1);
    }
  }

  async escalateRecovery(processName) {
    this.log(`Escalating recovery for ${processName}...`);
    
    try {
      // Stop the problematic process
      await this.executeCommand(`pm2 stop ${processName}`);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Start it fresh
      const result = await this.executeCommand(`pm2 start ecosystem-redundancy.pm2.cjs --only ${processName}`);
      
      if (result.success) {
        this.log(`Successfully escalated recovery for ${processName}`);
        this.recoveryAttempts.set(processName, 0);
      } else {
        this.log(`Failed escalated recovery for ${processName}: ${result.error}`, 'ERROR');
      }
    } catch (error) {
      this.log(`Error during escalated recovery for ${processName}: ${error.message}`, 'ERROR');
    }
  }

  async performFullRecovery() {
    this.log('Performing full system recovery check...');
    
    // Check if any critical processes are down
    const criticalProcesses = ['redundancy-master-orchestrator', 'redundancy-pm2-manager'];
    
    for (const processName of criticalProcesses) {
      const health = await this.checkProcessHealth(processName);
      
      if (health.status === 'not_found' || health.health === 'unhealthy') {
        this.log(`Critical process ${processName} needs recovery, restarting system...`);
        await this.restartRedundancySystem();
        break;
      }
    }
  }

  async restartRedundancySystem() {
    this.log('Restarting entire redundancy system...');
    
    try {
      // Stop all redundancy processes
      for (const processName of this.redundancyProcesses) {
        await this.executeCommand(`pm2 stop ${processName}`);
      }
      
      // Wait for processes to stop
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Start all redundancy processes
      await this.startRedundancyProcesses();
      
      this.log('Redundancy system restart completed');
    } catch (error) {
      this.log(`Error restarting redundancy system: ${error.message}`, 'ERROR');
    }
  }

  async getSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      overallHealth: 'healthy',
      processes: {},
      recoveryStats: {
        totalAttempts: 0,
        successfulRecoveries: 0,
        failedRecoveries: 0
      }
    };
    
    // Get status for all processes
    for (const processName of this.allProcesses) {
      const health = await this.checkProcessHealth(processName);
      status.processes[processName] = health;
      
      if (health.health === 'unhealthy') {
        status.overallHealth = 'degraded';
      }
    }
    
    // Calculate recovery stats
    for (const [processName, attempts] of this.recoveryAttempts) {
      status.recoveryStats.totalAttempts += attempts;
      if (attempts === 0) {
        status.recoveryStats.successfulRecoveries++;
      } else {
        status.recoveryStats.failedRecoveries++;
      }
    }
    
    return status;
  }

  async start() {
    this.log('Starting Enhanced PM2 Redundancy Manager...');
    
    try {
      // Start backup processes
      await this.startBackupProcesses();
      
      // Start redundancy processes
      await this.startRedundancyProcesses();
      
      // Start monitoring
      await this.monitorAndRecover();
      
      this.log('Enhanced PM2 Redundancy Manager started successfully');
      
      // Keep the process alive
      setInterval(() => {
        // Heartbeat
      }, 60000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced PM2 Redundancy Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Export for use in other modules
module.exports = { EnhancedPM2RedundancyManager };

// If run directly, start the manager
if (require.main === module) {
  const manager = new EnhancedPM2RedundancyManager();
  manager.start().catch(error => {
    console.error('Failed to start Enhanced PM2 Redundancy Manager:', error);
    process.exit(1);
  });
}