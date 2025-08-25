#!/usr/bin/env node
"use strict";

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const EnhancedGitSync = require('./enhanced-git-sync.cjs');

class SyncAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/sync-orchestrator.log');
    this.ensureLogDir();
    this.syncSystems = new Map();
    this.config = {
      syncInterval: 300000, // 5 minutes
      maxConcurrentSyncs: 2,
      retryAttempts: 3,
      healthCheckInterval: 60000, // 1 minute
      autoResolveConflicts: true,
      backupBeforeSync: true
    };
    this.loadConfiguration();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadConfiguration() {
    try {
      const configPath = path.join(__dirname, 'autonomous-config.json');
      if (fs.existsSync(configPath)) {
        const configData = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configData);
        this.config = { ...this.config, ...config.sync };
      }
    } catch (error) {
      this.log(`Failed to load configuration: ${error.message}`, 'WARN');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [SYNC-ORCHESTRATOR] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async initializeSyncSystems() {
    this.log('Initializing sync systems...');
    
    // Initialize git sync
    const gitSync = new EnhancedGitSync();
    this.syncSystems.set('git-sync', {
      instance: gitSync,
      status: 'idle',
      lastRun: null,
      nextRun: null,
      errorCount: 0,
      enabled: true
    });

    // Initialize other sync systems
    const syncSystems = [
      { name: 'file-sync', script: 'file-sync-manager.cjs', enabled: true },
      { name: 'data-sync', script: 'data-sync-manager.cjs', enabled: true },
      { name: 'config-sync', script: 'config-sync-manager.cjs', enabled: true }
    ];

    for (const system of syncSystems) {
      if (system.enabled) {
        this.syncSystems.set(system.name, {
          instance: null,
          script: system.script,
          status: 'idle',
          lastRun: null,
          nextRun: null,
          errorCount: 0,
          enabled: true
        });
      }
    }

    this.log(`Initialized ${this.syncSystems.size} sync systems`);
  }

  async runGitSync() {
    const gitSync = this.syncSystems.get('git-sync');
    if (!gitSync || !gitSync.enabled) return false;

    try {
      this.log('Starting git sync...');
      gitSync.status = 'running';
      gitSync.lastRun = new Date();
      
      const success = await gitSync.instance.run();
      
      if (success) {
        gitSync.status = 'completed';
        gitSync.errorCount = 0;
        this.log('Git sync completed successfully');
      } else {
        gitSync.status = 'failed';
        gitSync.errorCount++;
        this.log('Git sync failed', 'ERROR');
      }
      
      return success;
    } catch (error) {
      gitSync.status = 'failed';
      gitSync.errorCount++;
      this.log(`Git sync error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runFileSync() {
    const fileSync = this.syncSystems.get('file-sync');
    if (!fileSync || !fileSync.enabled) return false;

    try {
      this.log('Starting file sync...');
      fileSync.status = 'running';
      fileSync.lastRun = new Date();
      
      // Run file sync script
      const success = await this.runSyncScript(fileSync.script);
      
      if (success) {
        fileSync.status = 'completed';
        fileSync.errorCount = 0;
        this.log('File sync completed successfully');
      } else {
        fileSync.status = 'failed';
        fileSync.errorCount++;
        this.log('File sync failed', 'ERROR');
      }
      
      return success;
    } catch (error) {
      fileSync.status = 'failed';
      fileSync.errorCount++;
      this.log(`File sync error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runDataSync() {
    const dataSync = this.syncSystems.get('data-sync');
    if (!dataSync || !dataSync.enabled) return false;

    try {
      this.log('Starting data sync...');
      dataSync.status = 'running';
      dataSync.lastRun = new Date();
      
      // Run data sync script
      const success = await this.runSyncScript(dataSync.script);
      
      if (success) {
        dataSync.status = 'completed';
        dataSync.errorCount = 0;
        this.log('Data sync completed successfully');
      } else {
        dataSync.status = 'failed';
        dataSync.errorCount++;
        this.log('Data sync failed', 'ERROR');
      }
      
      return success;
    } catch (error) {
      dataSync.status = 'failed';
      dataSync.errorCount++;
      this.log(`Data sync error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runConfigSync() {
    const configSync = this.syncSystems.get('config-sync');
    if (!configSync || !configSync.enabled) return false;

    try {
      this.log('Starting config sync...');
      configSync.status = 'running';
      configSync.lastRun = new Date();
      
      // Run config sync script
      const success = await this.runSyncScript(configSync.script);
      
      if (success) {
        configSync.status = 'completed';
        configSync.errorCount = 0;
        this.log('Config sync completed successfully');
      } else {
        configSync.status = 'failed';
        configSync.errorCount++;
        this.log('Config sync failed', 'ERROR');
      }
      
      return success;
    } catch (error) {
      configSync.status = 'failed';
      configSync.errorCount++;
      this.log(`Config sync error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runSyncScript(scriptName) {
    return new Promise((resolve) => {
      const scriptPath = path.join(__dirname, scriptName);
      
      if (!fs.existsSync(scriptPath)) {
        this.log(`Script not found: ${scriptName}`, 'WARN');
        resolve(false);
        return;
      }

      const child = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: this.projectRoot
      });

      let output = '';
      let errorOutput = '';

      child.stdout.on('data', (data) => {
        output += data.toString();
      });

      child.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          this.log(`Script ${scriptName} completed successfully`);
          resolve(true);
        } else {
          this.log(`Script ${scriptName} failed with code ${code}`, 'ERROR');
          if (errorOutput) {
            this.log(`Script error output: ${errorOutput}`, 'ERROR');
          }
          resolve(false);
        }
      });

      child.on('error', (error) => {
        this.log(`Script ${scriptName} error: ${error.message}`, 'ERROR');
        resolve(false);
      });

      // Set timeout
      setTimeout(() => {
        child.kill('SIGTERM');
        this.log(`Script ${scriptName} timed out`, 'WARN');
        resolve(false);
      }, 300000); // 5 minutes timeout
    });
  }

  async runAllSyncs() {
    this.log('Running all sync operations...');
    
    const syncPromises = [
      this.runGitSync(),
      this.runFileSync(),
      this.runDataSync(),
      this.runConfigSync()
    ];

    try {
      const results = await Promise.allSettled(syncPromises);
      const successCount = results.filter(result => result.status === 'fulfilled' && result.value).length;
      
      this.log(`Sync operations completed: ${successCount}/${results.length} successful`);
      
      // Schedule next run
      this.scheduleNextSync();
      
      return successCount === results.length;
    } catch (error) {
      this.log(`Error running sync operations: ${error.message}`, 'ERROR');
      return false;
    }
  }

  scheduleNextSync() {
    const nextRun = new Date(Date.now() + this.config.syncInterval);
    
    for (const [name, system] of this.syncSystems) {
      if (system.enabled) {
        system.nextRun = nextRun;
      }
    }
    
    this.log(`Next sync scheduled for: ${nextRun.toISOString()}`);
  }

  async startContinuousSync() {
    this.log('Starting continuous sync mode...');
    
    // Initial sync
    await this.runAllSyncs();
    
    // Set up interval
    this.syncInterval = setInterval(async () => {
      await this.runAllSyncs();
    }, this.config.syncInterval);
    
    // Set up health monitoring
    this.healthCheckInterval = setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log('Continuous sync mode started');
  }

  async stopContinuousSync() {
    this.log('Stopping continuous sync mode...');
    
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    this.log('Continuous sync mode stopped');
  }

  performHealthCheck() {
    this.log('Performing health check...');
    
    let healthySystems = 0;
    let totalSystems = 0;
    
    for (const [name, system] of this.syncSystems) {
      if (system.enabled) {
        totalSystems++;
        
        if (system.status === 'completed' && system.errorCount === 0) {
          healthySystems++;
        }
        
        // Check if system needs attention
        if (system.errorCount >= this.config.retryAttempts) {
          this.log(`System ${name} has exceeded error threshold`, 'WARN');
          system.enabled = false;
        }
      }
    }
    
    const healthPercentage = totalSystems > 0 ? (healthySystems / totalSystems) * 100 : 0;
    this.log(`Health check: ${healthySystems}/${totalSystems} systems healthy (${healthPercentage.toFixed(1)}%)`);
    
    if (healthPercentage < 50) {
      this.log('System health below 50%, initiating recovery...', 'WARN');
      this.initiateRecovery();
    }
  }

  async initiateRecovery() {
    this.log('Initiating system recovery...');
    
    // Restart failed systems
    for (const [name, system] of this.syncSystems) {
      if (!system.enabled && system.errorCount > 0) {
        this.log(`Attempting to recover system: ${name}`);
        system.enabled = true;
        system.errorCount = 0;
        system.status = 'idle';
      }
    }
    
    // Run emergency sync
    await this.runAllSyncs();
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      orchestrator: 'running',
      systems: {}
    };
    
    for (const [name, system] of this.syncSystems) {
      status.systems[name] = {
        enabled: system.enabled,
        status: system.status,
        lastRun: system.lastRun?.toISOString(),
        nextRun: system.nextRun?.toISOString(),
        errorCount: system.errorCount
      };
    }
    
    return status;
  }

  async start() {
    this.log('Starting Sync Automation Orchestrator...');
    
    try {
      await this.initializeSyncSystems();
      await this.startContinuousSync();
      
      this.log('Sync Automation Orchestrator started successfully');
      return true;
    } catch (error) {
      this.log(`Failed to start orchestrator: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async stop() {
    this.log('Stopping Sync Automation Orchestrator...');
    
    try {
      await this.stopContinuousSync();
      this.log('Sync Automation Orchestrator stopped successfully');
      return true;
    } catch (error) {
      this.log(`Failed to stop orchestrator: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new SyncAutomationOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.start().then((success) => {
        process.exit(success ? 0 : 1);
      });
      break;
    case 'stop':
      orchestrator.stop().then((success) => {
        process.exit(success ? 0 : 1);
      });
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'sync':
      orchestrator.runAllSyncs().then((success) => {
        process.exit(success ? 0 : 1);
      });
      break;
    default:
      console.log('Usage: node sync-automation-orchestrator.cjs [start|stop|status|sync]');
      process.exit(1);
  }
}

module.exports = SyncAutomationOrchestrator;
