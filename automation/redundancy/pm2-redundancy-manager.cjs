#!/usr/bin/env node
'use strict';

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class PM2RedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    this.backupProcesses = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'pm2-redundancy.log');
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
    this.log('Starting backup PM2 processes...');
    
    // Start backup auto-sync process
    await this.startBackupAutoSync();
    
    // Start backup cron process
    await this.startBackupCron();
    
    // Start backup monitoring process
    await this.startBackupMonitoring();
  }

  async startBackupAutoSync() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('PM2 auto-sync script not found, skipping backup', 'WARN');
      return;
    }

    const processName = 'zion-auto-sync-backup';
    
    // Stop existing backup if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Start new backup process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '15',
      '--exp-backoff-restart-delay', '1000'
    ]);

    if (result.success) {
      this.log(`Started backup auto-sync process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'auto-sync',
        started: new Date(),
        health: 'healthy'
      });
    } else {
      this.log(`Failed to start backup auto-sync: ${result.stderr}`, 'ERROR');
    }
  }

  async startBackupCron() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log('PM2 auto-sync script not found, skipping backup cron', 'WARN');
      return;
    }

    const processName = 'zion-auto-sync-cron-backup';
    
    // Stop existing backup if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Start new backup cron process
    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'false',
      '--instances', '1',
      '--cron-restart', '*/15 * * * *' // every 15 minutes
    ]);

    if (result.success) {
      this.log(`Started backup cron process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'cron',
        started: new Date(),
        health: 'healthy'
      });
    } else {
      this.log(`Failed to start backup cron: ${result.stderr}`, 'ERROR');
    }
  }

  async startBackupMonitoring() {
    const processName = 'zion-monitoring-backup';
    
    // Stop existing backup if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Start monitoring script
    const result = this.runCommand('pm2', [
      'start', 'node',
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '20',
      '--exp-backoff-restart-delelay', '2000'
    ]);

    if (result.success) {
      this.log(`Started backup monitoring process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'monitoring',
        started: new Date(),
        health: 'healthy'
      });
    } else {
      this.log(`Failed to start backup monitoring: ${result.stderr}`, 'ERROR');
    }
  }

  async monitorBackupProcesses() {
    this.log('Monitoring backup processes...');
    
    for (const [name, info] of this.backupProcesses) {
      const status = this.runCommand('pm2', ['status', name, '--no-daemon']);
      
      if (!status.success || status.stdout.includes('stopped') || status.stdout.includes('errored')) {
        this.log(`Backup process ${name} is unhealthy, attempting recovery`, 'WARN');
        await this.recoverProcess(name, info.type);
      } else {
        this.log(`Backup process ${name} is healthy`);
        info.health = 'healthy';
        info.lastCheck = new Date();
      }
    }
  }

  async recoverProcess(name, type) {
    this.log(`Recovering process: ${name} (${type})`);
    
    const attempts = this.recoveryAttempts.get(name) || 0;
    if (attempts >= 3) {
      this.log(`Max recovery attempts reached for ${name}, skipping`, 'ERROR');
      return;
    }

    this.recoveryAttempts.set(name, attempts + 1);
    
    // Stop and delete the process
    this.runCommand('pm2', ['stop', name]);
    this.runCommand('pm2', ['delete', name]);

    // Restart based on type
    switch (type) {
      case 'auto-sync':
        await this.startBackupAutoSync();
        break;
      case 'cron':
        await this.startBackupCron();
        break;
      case 'monitoring':
        await this.startBackupMonitoring();
        break;
    }
  }

  async startHealthMonitoring() {
    this.log('Starting health monitoring...');
    
    // Monitor every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.monitorBackupProcesses();
    });

    // Full health check every hour
    cron.schedule('0 * * * *', async () => {
      await this.fullHealthCheck();
    });
  }

  async fullHealthCheck() {
    this.log('Running full health check...');
    
    const processes = await this.checkPM2Status();
    if (!processes) {
      this.log('PM2 health check failed, attempting PM2 restart', 'WARN');
      this.runCommand('pm2', ['kill']);
      this.runCommand('pm2', ['resurrect']);
      await this.startBackupProcesses();
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      backupProcesses: Array.from(this.backupProcesses.entries()).map(([name, info]) => ({
        name,
        type: info.type,
        started: info.started,
        health: info.health,
        lastCheck: info.lastCheck
      })),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      pm2Status: await this.checkPM2Status()
    };

    const reportPath = path.join(this.logDir, 'pm2-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Starting PM2 Redundancy Manager...');
    
    try {
      await this.startBackupProcesses();
      await this.startHealthMonitoring();
      
      this.log('PM2 Redundancy Manager started successfully');
      
      // Generate initial report
      await this.generateReport();
      
      // Keep the process running
      setInterval(async () => {
        await this.generateReport();
      }, 300000); // Every 5 minutes
      
    } catch (error) {
      this.log(`Failed to start PM2 Redundancy Manager: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.start();
      break;
    case 'status':
      manager.checkPM2Status().then(processes => {
        console.log('PM2 Status:', processes);
      });
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log('Report:', JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log('Usage: node pm2-redundancy-manager.cjs [start|status|report]');
      process.exit(1);
  }
}

module.exports = PM2RedundancyManager;