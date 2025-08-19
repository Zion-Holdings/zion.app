#!/usr/bin/env node
'use strict';

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class EnhancedPM2RedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    this.backupProcesses = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.monitoringActive = false;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-PM2] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-pm2-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      success: result.status === 0
    };
  }

  async checkPM2Status() {
    this.log('Checking PM2 status...');
    const result = this.runCommand('pm2', ['status', '--no-daemon']);
    
    if (!result.success) {
      this.log(`PM2 status check failed: ${result.stderr}`, 'ERROR');
      return false;
    }

    const processes = this.parsePM2Status(result.stdout);
    this.log(`Found ${processes.length} PM2 processes`);
    return processes;
  }

  parsePM2Status(output) {
    const lines = output.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('App name')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          processes.push({
            name: parts[0],
            status: parts[1],
            cpu: parts[2],
            memory: parts[3],
            uptime: parts[4] || 'N/A'
          });
        }
      }
    }
    
    return processes;
  }

  async startBackupProcesses() {
    this.log('Starting enhanced backup PM2 processes...');
    
    try {
      // Start backup auto-sync process
      await this.startBackupAutoSync();
      
      // Start backup cron process
      await this.startBackupCron();
      
      // Start backup monitoring process
      await this.startBackupMonitoring();
      
      // Start backup build orchestrator
      await this.startBackupBuildOrchestrator();
      
      // Start backup git sync orchestrator
      await this.startBackupGitSyncOrchestrator();
      
      // Start backup continuous build monitor
      await this.startBackupContinuousBuildMonitor();
      
      this.log('All enhanced backup PM2 processes started successfully');
      return true;
      
    } catch (error) {
      this.log(`Failed to start backup processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async startBackupAutoSync() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('PM2 auto-sync script not found, skipping', 'WARN');
      return false;
    }

    const processName = 'zion-auto-sync-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Start enhanced backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '20',
      '--exp-backoff-restart-delay', '1000',
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=1',
      '--env', 'AUTO_SYNC_GC=0',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup auto-sync process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'auto-sync',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup auto-sync: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupCron() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('PM2 auto-sync script not found, skipping cron backup', 'WARN');
      return false;
    }

    const processName = 'zion-auto-sync-cron-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Start enhanced cron backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'false',
      '--instances', '1',
      '--cron-restart', '*/15 * * * *', // Every 15 minutes
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=1',
      '--env', 'AUTO_SYNC_GC=0',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup cron process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'cron',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup cron: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupMonitoring() {
    const processName = 'zion-monitoring-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Create monitoring script content
    const monitoringScript = `
      const cron = require('node-cron');
      const fs = require('fs');
      const path = require('path');
      
      console.log('Enhanced PM2 monitoring backup started');
      
      // Monitor PM2 processes every 5 minutes
      cron.schedule('*/5 * * * *', () => {
        console.log('Checking PM2 process health...');
        // Add monitoring logic here
      });
      
      // Keep process alive
      setInterval(() => {}, 60000);
    `;
    
    const scriptPath = path.join(this.logDir, 'enhanced-monitoring-backup.js');
    fs.writeFileSync(scriptPath, monitoringScript);
    
    // Start enhanced monitoring backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '15',
      '--exp-backoff-restart-delay', '2000',
      '--env', 'NODE_ENV=production',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup monitoring process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'monitoring',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup monitoring: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupBuildOrchestrator() {
    const scriptPath = path.join(process.cwd(), 'automation', 'master-build-orchestrator.cjs');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('Master build orchestrator script not found, skipping', 'WARN');
      return false;
    }

    const processName = 'zion-build-orchestrator-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Start enhanced build orchestrator backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '18',
      '--exp-backoff-restart-delay', '1500',
      '--env', 'NODE_ENV=production',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup build orchestrator process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'build-orchestrator',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup build orchestrator: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupGitSyncOrchestrator() {
    const scriptPath = path.join(process.cwd(), 'automation', 'enhanced-git-sync-orchestrator.cjs');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('Enhanced git sync orchestrator script not found, skipping', 'WARN');
      return false;
    }

    const processName = 'zion-git-sync-orchestrator-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Start enhanced git sync orchestrator backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '16',
      '--exp-backoff-restart-delay', '1200',
      '--env', 'NODE_ENV=production',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup git sync orchestrator process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'git-sync-orchestrator',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup git sync orchestrator: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupContinuousBuildMonitor() {
    const scriptPath = path.join(process.cwd(), 'automation', 'continuous-build-monitor.cjs');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('Continuous build monitor script not found, skipping', 'WARN');
      return false;
    }

    const processName = 'zion-continuous-build-monitor-enhanced-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Start enhanced continuous build monitor backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '17',
      '--exp-backoff-restart-delay', '1300',
      '--env', 'NODE_ENV=production',
      '--log-date-format', 'YYYY-MM-DD HH:mm:ss Z',
      '--error', `logs/${processName}-error.log`,
      '--out', `logs/${processName}-out.log`,
      '--time'
    ]);

    if (result.success) {
      this.log(`Enhanced backup continuous build monitor process started: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'continuous-build-monitor',
        status: 'running',
        started: new Date(),
        health: 'healthy',
        restarts: 0
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup continuous build monitor: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startHealthMonitoring() {
    if (this.monitoringActive) {
      this.log('Health monitoring already active');
      return;
    }

    this.log('Starting enhanced health monitoring...');
    this.monitoringActive = true;

    // Monitor process health every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.checkAllProcessHealth();
    });

    // Comprehensive health check every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.comprehensiveHealthCheck();
    });

    // Recovery attempt every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
      await this.attemptRecovery();
    });

    this.log('Enhanced health monitoring started');
  }

  async checkAllProcessHealth() {
    this.log('Checking all backup process health...');
    
    for (const [processName, processInfo] of this.backupProcesses) {
      const health = await this.checkProcessHealth(processName);
      processInfo.health = health;
      processInfo.lastCheck = new Date();
      
      if (health === 'failed') {
        this.log(`Process ${processName} health check failed`, 'WARN');
        this.healthChecks.set(processName, {
          status: 'failed',
          timestamp: new Date(),
          attempts: (this.healthChecks.get(processName)?.attempts || 0) + 1
        });
      }
    }
  }

  async checkProcessHealth(processName) {
    const result = this.runCommand('pm2', ['show', processName]);
    
    if (!result.success) {
      return 'failed';
    }

    const output = result.stdout;
    
    if (output.includes('status: online')) {
      return 'healthy';
    } else if (output.includes('status: errored') || output.includes('status: stopped')) {
      return 'failed';
    } else {
      return 'unhealthy';
    }
  }

  async comprehensiveHealthCheck() {
    this.log('Running comprehensive health check...');
    
    const processes = await this.checkPM2Status();
    if (!processes) {
      this.log('Comprehensive health check failed', 'ERROR');
      return;
    }

    let healthyCount = 0;
    let totalCount = 0;

    for (const [processName, processInfo] of this.backupProcesses) {
      totalCount++;
      if (processInfo.health === 'healthy') {
        healthyCount++;
      }
    }

    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    this.log(`Comprehensive health: ${healthPercentage.toFixed(1)}% (${healthyCount}/${totalCount})`);

    if (healthPercentage < 50) {
      this.log('System health below 50%, initiating emergency recovery', 'WARN');
      await this.emergencyRecovery();
    }
  }

  async attemptRecovery() {
    this.log('Attempting recovery for failed processes...');
    
    for (const [processName, processInfo] of this.backupProcesses) {
      if (processInfo.health === 'failed') {
        const attempts = this.recoveryAttempts.get(processName) || 0;
        
        if (attempts < 3) {
          this.log(`Attempting recovery for ${processName} (attempt ${attempts + 1})`);
          
          const recovered = await this.recoverProcess(processName, processInfo.type);
          if (recovered) {
            this.log(`Successfully recovered ${processName}`);
            this.recoveryAttempts.set(processName, 0);
          } else {
            this.recoveryAttempts.set(processName, attempts + 1);
          }
        } else {
          this.log(`Max recovery attempts reached for ${processName}`, 'ERROR');
        }
      }
    }
  }

  async recoverProcess(processName, processType) {
    this.log(`Recovering process: ${processName} (${processType})`);
    
    // Stop and delete the failed process
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);
    
    // Restart based on type
    let success = false;
    
    switch (processType) {
      case 'auto-sync':
        success = await this.startBackupAutoSync();
        break;
      case 'cron':
        success = await this.startBackupCron();
        break;
      case 'monitoring':
        success = await this.startBackupMonitoring();
        break;
      case 'build-orchestrator':
        success = await this.startBackupBuildOrchestrator();
        break;
      case 'git-sync-orchestrator':
        success = await this.startBackupGitSyncOrchestrator();
        break;
      case 'continuous-build-monitor':
        success = await this.startBackupContinuousBuildMonitor();
        break;
      default:
        this.log(`Unknown process type: ${processType}`, 'ERROR');
        return false;
    }
    
    if (success) {
      this.backupProcesses.get(processName).health = 'healthy';
      this.backupProcesses.get(processName).status = 'running';
      this.backupProcesses.get(processName).restarts++;
    }
    
    return success;
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery...');
    
    // Stop all backup processes
    for (const [processName] of this.backupProcesses) {
      this.runCommand('pm2', ['stop', processName]);
      this.runCommand('pm2', ['delete', processName]);
    }
    
    // Clear tracking
    this.backupProcesses.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    
    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Restart all processes
    await this.startBackupProcesses();
    
    this.log('Emergency recovery completed');
  }

  async stopAllBackupProcesses() {
    this.log('Stopping all enhanced backup processes...');
    
    for (const [processName] of this.backupProcesses) {
      this.runCommand('pm2', ['stop', processName]);
      this.runCommand('pm2', ['delete', processName]);
    }
    
    this.backupProcesses.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    this.monitoringActive = false;
    
    this.log('All enhanced backup processes stopped');
  }

  async getStatus() {
    const status = {
      manager: 'Enhanced PM2 Redundancy Manager',
      status: this.monitoringActive ? 'active' : 'inactive',
      processes: Array.from(this.backupProcesses.entries()).map(([name, info]) => ({
        name,
        type: info.type,
        status: info.status,
        health: info.health,
        started: info.started,
        restarts: info.restarts,
        lastCheck: info.lastCheck
      })),
      healthChecks: Array.from(this.healthChecks.entries()).map(([name, info]) => ({
        name,
        status: info.status,
        timestamp: info.timestamp,
        attempts: info.attempts
      })),
      recoveryAttempts: Array.from(this.recoveryAttempts.entries()).map(([name, attempts]) => ({
        name,
        attempts
      }))
    };
    
    return status;
  }

  async generateReport() {
    const status = await this.getStatus();
    const reportPath = path.join(this.logDir, 'enhanced-pm2-redundancy-report.json');
    
    fs.writeFileSync(reportPath, JSON.stringify(status, null, 2));
    this.log(`Report generated: ${reportPath}`);
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedPM2RedundancyManager();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.startBackupProcesses().then(() => {
        manager.startHealthMonitoring();
      });
      break;
    case 'stop':
      manager.stopAllBackupProcesses();
      break;
    case 'status':
      manager.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'health':
      manager.checkAllProcessHealth();
      break;
    case 'recovery':
      manager.attemptRecovery();
      break;
    default:
      console.log('Usage: node enhanced-pm2-redundancy-manager.cjs [start|stop|status|report|health|recovery]');
  }
}

module.exports = EnhancedPM2RedundancyManager;