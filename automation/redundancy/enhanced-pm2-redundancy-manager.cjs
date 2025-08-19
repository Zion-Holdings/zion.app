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
    this.primaryProcesses = [
      'zion-auto-sync',
      'zion-auto-sync-cron'
    ];
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

  async startAllBackupProcesses() {
    this.log('Starting all enhanced backup PM2 processes...');
    
    // Start backup auto-sync processes
    await this.startBackupAutoSync();
    await this.startBackupAutoSyncEnhanced();
    
    // Start backup cron processes
    await this.startBackupCron();
    await this.startBackupCronEnhanced();
    
    // Start backup monitoring processes
    await this.startBackupMonitoring();
    await this.startBackupMonitoringEnhanced();
    
    // Start backup build processes
    await this.startBackupBuildProcesses();
    
    // Start backup git sync processes
    await this.startBackupGitSync();
    
    // Start backup marketing sync processes
    await this.startBackupMarketingSync();
  }

  async startBackupAutoSync() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-auto-sync-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '15',
      '--exp-backoff-restart-delay', '1000',
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=1',
      '--env', 'AUTO_SYNC_GC=0'
    ]);

    if (result.success) {
      this.log(`Started backup auto-sync process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'auto-sync',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup auto-sync: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupAutoSyncEnhanced() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-auto-sync-backup-enhanced';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '20',
      '--exp-backoff-restart-delay', '2000',
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=1',
      '--env', 'AUTO_SYNC_GC=1'
    ]);

    if (result.success) {
      this.log(`Started enhanced backup auto-sync process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'auto-sync-enhanced',
        started: new Date(),
        status: 'running'
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
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-auto-sync-cron-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'false',
      '--instances', '1',
      '--cron-restart', '*/15 * * * *',
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=0',
      '--env', 'AUTO_SYNC_GC=0'
    ]);

    if (result.success) {
      this.log(`Started backup cron process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'cron',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup cron: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupCronEnhanced() {
    const scriptPath = path.join(process.cwd(), 'automation', 'pm2-auto-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-auto-sync-cron-backup-enhanced';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'false',
      '--instances', '1',
      '--cron-restart', '*/20 * * * *',
      '--env', 'NODE_ENV=production',
      '--env', 'AUTO_SYNC_REMOTE=origin',
      '--env', 'AUTO_SYNC_BRANCH=main',
      '--env', 'AUTO_SYNC_STRATEGY=hardreset',
      '--env', 'AUTO_SYNC_CLEAN=0',
      '--env', 'AUTO_SYNC_GC=1'
    ]);

    if (result.success) {
      this.log(`Started enhanced backup cron process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'cron-enhanced',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup cron: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupMonitoring() {
    const processName = 'zion-monitoring-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Create a simple monitoring script
    const monitoringScript = `
#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [MONITORING] \${message}\`);
}

function checkProcessHealth() {
  const result = spawnSync('pm2', ['status', '--no-daemon'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  
  if (result.status === 0) {
    log('PM2 processes health check completed');
  } else {
    log('PM2 health check failed');
  }
}

// Run health check every 5 minutes
setInterval(checkProcessHealth, 5 * 60 * 1000);
checkProcessHealth(); // Initial check

log('Backup monitoring process started');
`;

    const scriptPath = path.join(process.cwd(), 'automation', 'backup-monitoring.js');
    fs.writeFileSync(scriptPath, monitoringScript);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '10'
    ]);

    if (result.success) {
      this.log(`Started backup monitoring process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'monitoring',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup monitoring: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupMonitoringEnhanced() {
    const processName = 'zion-monitoring-backup-enhanced';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Create an enhanced monitoring script
    const enhancedMonitoringScript = `
#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [ENHANCED-MONITORING] \${message}\`);
}

function checkProcessHealth() {
  const result = spawnSync('pm2', ['status', '--no-daemon'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  
  if (result.status === 0) {
    log('Enhanced PM2 processes health check completed');
    
    // Check for failed processes and restart them
    const output = result.stdout;
    const lines = output.split('\\n');
    
    for (const line of lines) {
      if (line.includes('│') && line.includes('errored')) {
        const processName = line.split('│')[0].trim();
        log(\`Found errored process: \${processName}, attempting restart\`);
        spawnSync('pm2', ['restart', processName], { cwd: process.cwd() });
      }
    }
  } else {
    log('Enhanced PM2 health check failed');
  }
}

// Run health check every 3 minutes
setInterval(checkProcessHealth, 3 * 60 * 1000);
checkProcessHealth(); // Initial check

log('Enhanced backup monitoring process started');
`;

    const scriptPath = path.join(process.cwd(), 'automation', 'enhanced-backup-monitoring.js');
    fs.writeFileSync(scriptPath, enhancedMonitoringScript);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '15'
    ]);

    if (result.success) {
      this.log(`Started enhanced backup monitoring process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'monitoring-enhanced',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start enhanced backup monitoring: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupBuildProcesses() {
    const processName = 'zion-build-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    // Create a build monitoring script
    const buildScript = `
#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [BUILD-BACKUP] \${message}\`);
}

function checkBuildHealth() {
  log('Checking build health...');
  
  // Check if build artifacts exist
  const nextDir = path.join(process.cwd(), '.next');
  const outDir = path.join(process.cwd(), 'out');
  
  if (!fs.existsSync(nextDir) && !fs.existsSync(outDir)) {
    log('No build artifacts found, triggering build health check');
    try {
      spawnSync('npm', ['run', 'build:health-check'], {
        cwd: process.cwd(),
        stdio: 'inherit'
      });
    } catch (error) {
      log(\`Build health check failed: \${error.message}\`);
    }
  } else {
    log('Build artifacts found, build health OK');
  }
}

// Run build health check every 30 minutes
setInterval(checkBuildHealth, 30 * 60 * 1000);
checkBuildHealth(); // Initial check

log('Backup build process started');
`;

    const scriptPath = path.join(process.cwd(), 'automation', 'backup-build.js');
    fs.writeFileSync(scriptPath, buildScript);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '8'
    ]);

    if (result.success) {
      this.log(`Started backup build process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'build',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup build process: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupGitSync() {
    const scriptPath = path.join(process.cwd(), 'automation', 'git-sync.cjs');
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-git-sync-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '12',
      '--cron-restart', '*/25 * * * *'
    ]);

    if (result.success) {
      this.log(`Started backup git sync process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'git-sync',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup git sync: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startBackupMarketingSync() {
    const scriptPath = path.join(process.cwd(), 'automation', 'marketing-sync.js');
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return false;
    }

    const processName = 'zion-marketing-sync-backup';
    
    // Stop existing backup process if running
    this.runCommand('pm2', ['stop', processName]);
    this.runCommand('pm2', ['delete', processName]);

    const result = this.runCommand('pm2', [
      'start', scriptPath,
      '--name', processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '10',
      '--cron-restart', '0 */6 * * *'
    ]);

    if (result.success) {
      this.log(`Started backup marketing sync process: ${processName}`);
      this.backupProcesses.set(processName, {
        type: 'marketing-sync',
        started: new Date(),
        status: 'running'
      });
      return true;
    } else {
      this.log(`Failed to start backup marketing sync: ${result.stderr}`, 'ERROR');
      return false;
    }
  }

  async startHealthMonitoring() {
    this.log('Starting health monitoring for backup processes...');
    
    // Monitor process health every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.checkBackupProcessHealth();
    });

    // Full health check every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.fullHealthCheck();
    });
  }

  async checkBackupProcessHealth() {
    const processes = await this.checkPM2Status();
    if (!processes) return;

    for (const process of processes) {
      if (process.name.includes('backup') || process.name.includes('enhanced')) {
        if (process.status === 'errored' || process.status === 'stopped') {
          this.log(`Backup process ${process.name} is ${process.status}, attempting recovery`, 'WARN');
          await this.recoverProcess(process.name);
        }
      }
    }
  }

  async recoverProcess(processName) {
    this.log(`Attempting to recover process: ${processName}`);
    
    const recoveryCount = this.recoveryAttempts.get(processName) || 0;
    if (recoveryCount >= 3) {
      this.log(`Max recovery attempts reached for ${processName}`, 'ERROR');
      return false;
    }

    this.recoveryAttempts.set(processName, recoveryCount + 1);
    
    // Restart the process
    const result = this.runCommand('pm2', ['restart', processName]);
    if (result.success) {
      this.log(`Successfully recovered process: ${processName}`);
      this.recoveryAttempts.set(processName, 0); // Reset counter
      return true;
    } else {
      this.log(`Failed to recover process: ${processName}`, 'ERROR');
      return false;
    }
  }

  async fullHealthCheck() {
    this.log('Running full health check...');
    
    const processes = await this.checkPM2Status();
    if (!processes) return;

    let healthyCount = 0;
    let totalCount = 0;

    for (const process of processes) {
      if (process.name.includes('backup') || process.name.includes('enhanced')) {
        totalCount++;
        if (process.status === 'online') {
          healthyCount++;
        }
      }
    }

    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    this.log(`Backup processes health: ${healthyCount}/${totalCount} (${healthPercentage.toFixed(1)}%)`);

    if (healthPercentage < 80) {
      this.log('Backup processes health below threshold, triggering recovery', 'WARN');
      await this.triggerRecovery();
    }
  }

  async triggerRecovery() {
    this.log('Triggering comprehensive recovery...');
    
    // Restart all backup processes
    for (const [name, info] of this.backupProcesses) {
      if (info.status !== 'running') {
        this.log(`Restarting ${name}...`);
        this.runCommand('pm2', ['restart', name]);
      }
    }
  }

  async getStatus() {
    const processes = await this.checkPM2Status();
    if (!processes) return { error: 'Failed to get PM2 status' };

    const backupProcesses = processes.filter(p => 
      p.name.includes('backup') || p.name.includes('enhanced')
    );

    return {
      totalBackupProcesses: backupProcesses.length,
      healthyProcesses: backupProcesses.filter(p => p.status === 'online').length,
      processes: backupProcesses,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      lastHealthCheck: new Date().toISOString()
    };
  }

  async stopAllBackupProcesses() {
    this.log('Stopping all backup processes...');
    
    for (const [name, info] of this.backupProcesses) {
      this.log(`Stopping ${name}...`);
      this.runCommand('pm2', ['stop', name]);
      this.runCommand('pm2', ['delete', name]);
    }
    
    this.backupProcesses.clear();
    this.log('All backup processes stopped');
  }
}

module.exports = EnhancedPM2RedundancyManager;