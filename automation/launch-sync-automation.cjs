#!/usr/bin/env node
"use strict";

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const SyncAutomationOrchestrator = require('./sync-automation-orchestrator.cjs');

class SyncAutomationLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/sync-launcher.log');
    this.ensureLogDir();
    this.orchestrator = null;
    this.processes = new Map();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [SYNC-LAUNCHER] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async startOrchestrator() {
    this.log('Starting sync automation orchestrator...');
    
    try {
      this.orchestrator = new SyncAutomationOrchestrator();
      const success = await this.orchestrator.start();
      
      if (success) {
        this.log('Sync automation orchestrator started successfully');
        return true;
      } else {
        this.log('Failed to start sync automation orchestrator', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Error starting orchestrator: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async stopOrchestrator() {
    if (!this.orchestrator) {
      this.log('No orchestrator running');
      return true;
    }
    
    this.log('Stopping sync automation orchestrator...');
    
    try {
      const success = await this.orchestrator.stop();
      
      if (success) {
        this.log('Sync automation orchestrator stopped successfully');
        this.orchestrator = null;
        return true;
      } else {
        this.log('Failed to stop sync automation orchestrator', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Error stopping orchestrator: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runGitSync() {
    this.log('Running git sync...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('node automation/enhanced-git-sync.cjs', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      this.log('Git sync completed successfully');
      return true;
    } catch (error) {
      this.log(`Git sync failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runFileSync() {
    this.log('Running file sync...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('node automation/file-sync-manager.cjs', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      this.log('File sync completed successfully');
      return true;
    } catch (error) {
      this.log(`File sync failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runDataSync() {
    this.log('Running data sync...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('node automation/data-sync-manager.cjs', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      this.log('Data sync completed successfully');
      return true;
    } catch (error) {
      this.log(`Data sync failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runConfigSync() {
    this.log('Running config sync...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('node automation/config-sync-manager.cjs', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      this.log('Config sync completed successfully');
      return true;
    } catch (error) {
      this.log(`Config sync failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runAllSyncs() {
    this.log('Running all sync operations...');
    
    try {
      const results = await Promise.allSettled([
        this.runGitSync(),
        this.runFileSync(),
        this.runDataSync(),
        this.runConfigSync()
      ]);
      
      const successCount = results.filter(result => result.status === 'fulfilled' && result.value).length;
      const totalCount = results.length;
      
      this.log(`Sync operations completed: ${successCount}/${totalCount} successful`);
      
      if (successCount === totalCount) {
        this.log('All sync operations completed successfully');
        return true;
      } else {
        this.log(`${totalCount - successCount} sync operations failed`, 'WARN');
        return false;
      }
    } catch (error) {
      this.log(`Error running sync operations: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async startContinuousSync() {
    this.log('Starting continuous sync mode...');
    
    try {
      const success = await this.startOrchestrator();
      
      if (success) {
        this.log('Continuous sync mode started successfully');
        return true;
      } else {
        this.log('Failed to start continuous sync mode', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Error starting continuous sync: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async stopContinuousSync() {
    this.log('Stopping continuous sync mode...');
    
    try {
      const success = await this.stopOrchestrator();
      
      if (success) {
        this.log('Continuous sync mode stopped successfully');
        return true;
      } else {
        this.log('Failed to stop continuous sync mode', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Error stopping continuous sync: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      launcher: 'running',
      orchestrator: this.orchestrator ? 'running' : 'stopped',
      processes: {}
    };
    
    if (this.orchestrator) {
      status.orchestratorStatus = this.orchestrator.getStatus();
    }
    
    return status;
  }

  async runCommand(command) {
    switch (command) {
      case 'start':
        return await this.startContinuousSync();
        
      case 'stop':
        return await this.stopContinuousSync();
        
      case 'restart':
        await this.stopContinuousSync();
        await new Promise(resolve => setTimeout(resolve, 2000));
        return await this.startContinuousSync();
        
      case 'git':
        return await this.runGitSync();
        
      case 'file':
        return await this.runFileSync();
        
      case 'data':
        return await this.runDataSync();
        
      case 'config':
        return await this.runConfigSync();
        
      case 'all':
        return await this.runAllSyncs();
        
      case 'status':
        console.log(JSON.stringify(this.getStatus(), null, 2));
        return true;
        
      case 'help':
        this.showHelp();
        return true;
        
      default:
        this.log(`Unknown command: ${command}`, 'ERROR');
        this.showHelp();
        return false;
    }
  }

  showHelp() {
    console.log(`
Sync Automation Launcher - Available Commands:

  start     - Start continuous sync mode
  stop      - Stop continuous sync mode
  restart   - Restart continuous sync mode
  git       - Run git sync only
  file      - Run file sync only
  data      - Run data sync only
  config    - Run config sync only
  all       - Run all sync operations once
  status    - Show current status
  help      - Show this help message

Examples:
  node automation/launch-sync-automation.cjs start
  node automation/launch-sync-automation.cjs git
  node automation/launch-sync-automation.cjs all
    `);
  }

  async run() {
    const command = process.argv[2] || 'help';
    
    try {
      const success = await this.runCommand(command);
      process.exit(success ? 0 : 1);
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const launcher = new SyncAutomationLauncher();
  launcher.run().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = SyncAutomationLauncher;
