#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cron = require('node-cron');

class EnhancedPM2RedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    this.backupProcesses = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 5;
    
    // Enhanced backup process configurations
    this.backupConfigs = [
      {
        name: 'zion-auto-sync-backup',
        script: 'automation/pm2-auto-sync.js',
        maxRestarts: 20,
        cronRestart: '*/15 * * * *', // Every 15 minutes
        env: {
          NODE_ENV: 'production',
          AUTO_SYNC_REMOTE: 'origin',
          AUTO_SYNC_BRANCH: 'main',
          AUTO_SYNC_STRATEGY: 'hardreset',
          AUTO_SYNC_CLEAN: '1',
          AUTO_SYNC_GC: '0',
          IS_BACKUP_PROCESS: 'true'
        }
      },
      {
        name: 'zion-auto-sync-cron-backup',
        script: 'automation/pm2-auto-sync.js',
        maxRestarts: 15,
        cronRestart: '*/20 * * * *', // Every 20 minutes
        env: {
          NODE_ENV: 'production',
          AUTO_SYNC_REMOTE: 'origin',
          AUTO_SYNC_BRANCH: 'main',
          AUTO_SYNC_STRATEGY: 'hardreset',
          AUTO_SYNC_CLEAN: '0',
          AUTO_SYNC_GC: '1',
          IS_BACKUP_PROCESS: 'true'
        }
      },
      {
        name: 'zion-monitoring-backup',
        script: 'automation/continuous-build-monitor.cjs',
        maxRestarts: 25,
        cronRestart: '*/10 * * * *', // Every 10 minutes
        env: {
          NODE_ENV: 'production',
          IS_BACKUP_PROCESS: 'true'
        }
      },
      {
        name: 'zion-git-sync-backup',
        script: 'automation/enhanced-git-sync-orchestrator.cjs',
        maxRestarts: 18,
        cronRestart: '*/25 * * * *', // Every 25 minutes
        env: {
          NODE_ENV: 'production',
          IS_BACKUP_PROCESS: 'true'
        }
      },
      {
        name: 'zion-build-recovery-backup',
        script: 'automation/build-failure-recovery.cjs',
        maxRestarts: 12,
        cronRestart: '*/30 * * * *', // Every 30 minutes
        env: {
          NODE_ENV: 'production',
          IS_BACKUP_PROCESS: 'true'
        }
      },
      {
        name: 'zion-netlify-healer-backup',
        script: 'automation/enhanced-netlify-healer.cjs',
        maxRestarts: 16,
        cronRestart: '*/35 * * * *', // Every 35 minutes
        env: {
          NODE_ENV: 'production',
          IS_BACKUP_PROCESS: 'true'
        }
      }
    ];
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-PM2-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-pm2-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async checkPM2Installation() {
    try {
      execSync('pm2 --version', { stdio: 'pipe' });
      return true;
    } catch (error) {
      this.log('PM2 not installed, installing now...', 'WARN');
      try {
        execSync('npm install -g pm2', { stdio: 'pipe' });
        this.log('PM2 installed successfully', 'INFO');
        return true;
      } catch (installError) {
        this.log(`Failed to install PM2: ${installError.message}`, 'ERROR');
        return false;
      }
    }
  }

  async createBackupProcesses() {
    this.log('Creating enhanced PM2 backup processes...');
    
    if (!(await this.checkPM2Installation())) {
      throw new Error('PM2 installation failed');
    }

    for (const config of this.backupConfigs) {
      try {
        await this.createSingleBackupProcess(config);
      } catch (error) {
        this.log(`Failed to create backup process ${config.name}: ${error.message}`, 'ERROR');
      }
    }
    
    this.log('Enhanced PM2 backup processes creation completed');
  }

  async createSingleBackupProcess(config) {
    const ecosystemPath = path.join(process.cwd(), 'ecosystem.enhanced.pm2.cjs');
    
    // Create enhanced ecosystem file for this backup process
    const ecosystemContent = this.generateEcosystemContent(config);
    fs.writeFileSync(ecosystemPath, ecosystemContent);
    
    // Start the backup process
    try {
      execSync(`pm2 start ${ecosystemPath}`, { stdio: 'pipe' });
      
      this.backupProcesses.set(config.name, {
        config,
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restartCount: 0
      });
      
      this.log(`Backup process ${config.name} started successfully`);
      
    } catch (error) {
      this.log(`Failed to start backup process ${config.name}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  generateEcosystemContent(config) {
    return `module.exports = {
  apps: [
    {
      name: "${config.name}",
      script: "${config.script}",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: ${config.maxRestarts},
      exp_backoff_restart_delay: 1000,
      cron_restart: "${config.cronRestart}",
      env: ${JSON.stringify(config.env, null, 2)},
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/${config.name}-error.log",
      out_file: "logs/${config.name}-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ]
};`;
  }

  async startHealthMonitoring() {
    this.log('Starting enhanced health monitoring...');
    
    // Monitor backup process health every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.checkAllBackupProcessHealth();
    });

    // Comprehensive health check every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.comprehensiveHealthCheck();
    });

    // Recovery attempt every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.attemptRecovery();
    });
  }

  async checkAllBackupProcessHealth() {
    this.log('Checking backup process health...');
    
    for (const [name, processInfo] of this.backupProcesses) {
      try {
        const status = await this.checkProcessStatus(name);
        await this.updateProcessHealth(name, status);
      } catch (error) {
        this.log(`Health check failed for ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkProcessStatus(processName) {
    try {
      const output = execSync(`pm2 show ${processName}`, { stdio: 'pipe' }).toString();
      
      if (output.includes('online')) {
        return 'online';
      } else if (output.includes('stopped')) {
        return 'stopped';
      } else if (output.includes('errored')) {
        return 'errored';
      } else {
        return 'unknown';
      }
    } catch (error) {
      return 'not_found';
    }
  }

  async updateProcessHealth(processName, status) {
    const processInfo = this.backupProcesses.get(processName);
    if (!processInfo) return;

    let health = 'healthy';
    if (status === 'errored' || status === 'not_found') {
      health = 'unhealthy';
    } else if (status === 'stopped') {
      health = 'stopped';
    }

    processInfo.status = status;
    processInfo.health = health;
    processInfo.lastCheck = new Date();

    this.backupProcesses.set(processName, processInfo);
  }

  async comprehensiveHealthCheck() {
    this.log('Running comprehensive health check...');
    
    let healthyCount = 0;
    let totalCount = 0;
    
    for (const [name, processInfo] of this.backupProcesses) {
      totalCount++;
      if (processInfo.health === 'healthy') {
        healthyCount++;
      }
    }
    
    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    
    this.log(`Health check complete: ${healthyCount}/${totalCount} processes healthy (${healthPercentage.toFixed(1)}%)`);
    
    // Generate health report
    await this.generateHealthReport();
  }

  async attemptRecovery() {
    this.log('Attempting recovery for unhealthy processes...');
    
    for (const [name, processInfo] of this.backupProcesses) {
      if (processInfo.health === 'unhealthy' && processInfo.restartCount < this.maxRecoveryAttempts) {
        try {
          await this.recoverProcess(name);
        } catch (error) {
          this.log(`Recovery failed for ${name}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async recoverProcess(processName) {
    const processInfo = this.backupProcesses.get(processName);
    if (!processInfo) return;

    this.log(`Attempting recovery for ${processName}...`);
    
    try {
      // Stop the process
      execSync(`pm2 stop ${processName}`, { stdio: 'pipe' });
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start the process
      execSync(`pm2 start ${processName}`, { stdio: 'pipe' });
      
      // Update process info
      processInfo.restartCount++;
      processInfo.lastRecovery = new Date();
      processInfo.health = 'healthy';
      
      this.backupProcesses.set(processName, processInfo);
      
      this.log(`Recovery successful for ${processName}`);
      
    } catch (error) {
      this.log(`Recovery failed for ${processName}: ${error.message}`, 'ERROR');
      processInfo.health = 'failed';
      this.backupProcesses.set(processName, processInfo);
    }
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalProcesses: this.backupProcesses.size,
      healthyProcesses: 0,
      unhealthyProcesses: 0,
      stoppedProcesses: 0,
      failedProcesses: 0,
      processes: []
    };

    for (const [name, processInfo] of this.backupProcesses) {
      report.processes.push({
        name,
        status: processInfo.status,
        health: processInfo.health,
        started: processInfo.started,
        lastCheck: processInfo.lastCheck,
        restartCount: processInfo.restartCount,
        lastRecovery: processInfo.lastRecovery
      });

      switch (processInfo.health) {
        case 'healthy':
          report.healthyProcesses++;
          break;
        case 'unhealthy':
          report.unhealthyProcesses++;
          break;
        case 'stopped':
          report.stoppedProcesses++;
          break;
        case 'failed':
          report.failedProcesses++;
          break;
      }
    }

    const reportPath = path.join(this.logDir, 'enhanced-pm2-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Starting Enhanced PM2 Redundancy Manager...');
    
    try {
      await this.createBackupProcesses();
      await this.startHealthMonitoring();
      
      this.log('Enhanced PM2 Redundancy Manager started successfully');
      
      // Initial health check
      setTimeout(async () => {
        await this.comprehensiveHealthCheck();
      }, 10000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced PM2 Redundancy Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stop() {
    this.log('Stopping Enhanced PM2 Redundancy Manager...');
    
    for (const [name] of this.backupProcesses) {
      try {
        execSync(`pm2 stop ${name}`, { stdio: 'pipe' });
        execSync(`pm2 delete ${name}`, { stdio: 'pipe' });
        this.log(`Stopped and deleted ${name}`);
      } catch (error) {
        this.log(`Failed to stop ${name}: ${error.message}`, 'WARN');
      }
    }
    
    this.backupProcesses.clear();
    this.log('Enhanced PM2 Redundancy Manager stopped');
  }

  async status() {
    const report = await this.generateHealthReport();
    console.log('\n=== Enhanced PM2 Redundancy Manager Status ===');
    console.log(`Total Processes: ${report.totalProcesses}`);
    console.log(`Healthy: ${report.healthyProcesses}`);
    console.log(`Unhealthy: ${report.unhealthyProcesses}`);
    console.log(`Stopped: ${report.stoppedProcesses}`);
    console.log(`Failed: ${report.failedProcesses}`);
    console.log(`Health: ${((report.healthyProcesses / report.totalProcesses) * 100).toFixed(1)}%`);
    console.log('==============================================\n');
    
    return report;
  }

  async restart() {
    this.log('Restarting Enhanced PM2 Redundancy Manager...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.start();
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedPM2RedundancyManager();
  const command = process.argv[2] || 'start';
  
  (async () => {
    try {
      switch (command) {
        case 'start':
          await manager.start();
          break;
        case 'stop':
          await manager.stop();
          break;
        case 'status':
          await manager.status();
          break;
        case 'restart':
          await manager.restart();
          break;
        case 'report':
          await manager.generateHealthReport();
          break;
        default:
          console.log('Usage: node enhanced-pm2-redundancy-manager.cjs [start|stop|status|restart|report]');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  })();
}

module.exports = EnhancedPM2RedundancyManager;