#!/usr/bin/env node

/**
 * Ultimate PM2 Redundancy System
 * Comprehensive redundancy for all PM2 automations
 * 
 * This system provides:
 * - PM2 process monitoring and auto-recovery
 * - Ecosystem file validation and management
 * - Process health monitoring
 * - Auto-restart and failover
 * - Comprehensive logging and reporting
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

class UltimatePM2Redundancy {
  constructor() {
    this.config = {
      logLevel: process.env.PM2_REDUNDANCY_LOG_LEVEL || 'INFO',
      checkInterval: parseInt(process.env.PM2_CHECK_INTERVAL) || 30000,
      maxRetries: parseInt(process.env.PM2_MAX_RETRIES) || 3,
      autoRecovery: process.env.PM2_AUTO_RECOVERY === 'true',
      autoRestart: process.env.PM2_AUTO_RESTART === 'true',
      logDir: path.join(__dirname, 'logs'),
      statusFile: path.join(__dirname, 'ultimate-pm2-status.json')
    };
    
    this.status = {
      startTime: new Date().toISOString(),
      lastCheck: null,
      pm2Status: 'unknown',
      processes: [],
      ecosystemFiles: [],
      health: { status: 'unknown', score: 0, issues: [] },
      recoveryAttempts: 0
    };
    
    this.ensureDirectories();
    this.loadStatus();
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
    const logFile = path.join(this.config.logDir, 'ultimate-pm2.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        const data = fs.readFileSync(this.config.statusFile, 'utf8');
        this.status = { ...this.status, ...JSON.parse(data) };
        this.log('INFO', 'Status loaded from file');
      }
    } catch (error) {
      this.log('WARN', 'Could not load status file', error.message);
    }
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log('ERROR', 'Could not save status file', error.message);
    }
    }
  }

  async checkPM2Status() {
    try {
      this.log('INFO', 'Checking PM2 status...');
      
      // Check if PM2 is available
      try {
        const pm2Version = execSync('pm2 --version', { encoding: 'utf8' });
        this.log('INFO', `PM2 version: ${pm2Version.trim()}`);
        
        // Get PM2 status
        const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        const pm2Data = JSON.parse(pm2Status);
        
        this.status.processes = pm2Data.processes || [];
        this.status.pm2Status = 'running';
        
        this.log('INFO', `PM2 is running with ${this.status.processes.length} processes`);
        
        // Analyze process health
        await this.analyzeProcessHealth();
        
      } catch (error) {
        this.log('ERROR', 'PM2 status check failed', error.message);
        this.status.pm2Status = 'error';
        this.status.processes = [];
        
        if (this.config.autoRecovery) {
          await this.recoverPM2System();
        }
      }
      
    } catch (error) {
      this.log('ERROR', 'PM2 status check failed', error.message);
      this.status.pm2Status = 'error';
    }
  }

  async analyzeProcessHealth() {
    this.log('INFO', 'Analyzing PM2 process health...');
    
    const issues = [];
    let healthyCount = 0;
    let warningCount = 0;
    let errorCount = 0;
    
    for (const process of this.status.processes) {
      try {
        const status = process.pm2_env.status;
        const name = process.name;
        const restartCount = process.pm2_env.restart_time || 0;
        
        switch (status) {
          case 'online':
            if (restartCount > 5) {
              warningCount++;
              issues.push(`${name}: High restart count (${restartCount})`);
            } else {
              healthyCount++;
            }
            break;
          case 'stopped':
            errorCount++;
            issues.push(`${name}: Process stopped`);
            break;
          case 'errored':
            errorCount++;
            issues.push(`${name}: Process errored`);
            break;
          case 'stopping':
            warningCount++;
            issues.push(`${name}: Process stopping`);
            break;
          default:
            warningCount++;
            issues.push(`${name}: Unknown status (${status})`);
        }
        
      } catch (error) {
        this.log('ERROR', `Error analyzing process ${process.name}`, error.message);
      }
    }
    
    this.log('INFO', `Process health: ${healthyCount} healthy, ${warningCount} warnings, ${errorCount} errors`);
    
    if (issues.length > 0) {
      this.log('WARN', `Found ${issues.length} process issues:`, issues);
      this.status.health.issues = issues;
    } else {
      this.status.health.issues = [];
    }
  }

  async checkEcosystemFiles() {
    this.log('INFO', 'Checking PM2 ecosystem files...');
    
    try {
      const ecosystemFiles = [];
      const currentDir = process.cwd();
      
      // Look for ecosystem files
      const files = fs.readdirSync(currentDir);
      for (const file of files) {
        if (file.startsWith('ecosystem') && (file.endsWith('.cjs') || file.endsWith('.js'))) {
          try {
            const ecosystemPath = path.join(currentDir, file);
            const ecosystem = require(ecosystemPath);
            
            if (ecosystem && ecosystem.apps && Array.isArray(ecosystem.apps)) {
              ecosystemFiles.push({
                name: file,
                path: ecosystemPath,
                appsCount: ecosystem.apps.length,
                valid: true
              });
              
              this.log('INFO', `✓ ${file} - ${ecosystem.apps.length} apps`);
            } else {
              ecosystemFiles.push({
                name: file,
                path: ecosystemPath,
                appsCount: 0,
                valid: false
              });
              
              this.log('WARN', `✗ ${file} - Invalid structure`);
            }
          } catch (error) {
            ecosystemFiles.push({
              name: file,
              path: path.join(currentDir, file),
              appsCount: 0,
              valid: false,
              error: error.message
            });
            
            this.log('ERROR', `✗ ${file} - Load error: ${error.message}`);
          }
        }
      }
      
      this.status.ecosystemFiles = ecosystemFiles;
      
      if (ecosystemFiles.length === 0) {
        this.log('WARN', 'No ecosystem files found');
      }
      
    } catch (error) {
      this.log('ERROR', 'Ecosystem files check failed', error.message);
    }
  }

  async recoverPM2Processes() {
    this.log('INFO', 'Attempting to recover PM2 processes...');
    
    try {
      const stoppedProcesses = this.status.processes.filter(p => 
        p.pm2_env.status === 'stopped' || p.pm2_env.status === 'errored'
      );
      
      if (stoppedProcesses.length === 0) {
        this.log('INFO', 'No processes need recovery');
        return;
      }
      
      this.log('INFO', `Recovering ${stoppedProcesses.length} processes...`);
      
      for (const process of stoppedProcesses) {
        try {
          if (this.config.autoRestart) {
            execSync(`pm2 restart ${process.name}`);
            this.log('INFO', `Restarted process: ${process.name}`);
          } else {
            this.log('INFO', `Would restart process: ${process.name} (auto-restart disabled)`);
          }
        } catch (error) {
          this.log('ERROR', `Failed to restart process ${process.name}`, error.message);
        }
      }
      
      this.log('INFO', 'Process recovery completed');
      
    } catch (error) {
      this.log('ERROR', 'Process recovery failed', error.message);
    }
  }

  async recoverPM2System() {
    this.log('INFO', 'Attempting to recover PM2 system...');
    
    try {
      this.status.recoveryAttempts++;
      
      // Try to kill PM2 daemon
      try {
        execSync('pm2 kill', { stdio: 'ignore' });
        this.log('INFO', 'PM2 daemon killed');
      } catch (error) {
        this.log('WARN', 'Could not kill PM2 daemon', error.message);
      }
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Try to start with ultimate redundancy ecosystem
      const ecosystemFiles = ['ecosystem.ultimate-redundancy-automation.cjs', 'ecosystem.comprehensive-redundancy.cjs', 'ecosystem.pm2.cjs'];
      
      for (const ecosystemFile of ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            execSync(`pm2 start ${ecosystemFile}`, { stdio: 'inherit' });
            this.log('INFO', `PM2 system recovered using ${ecosystemFile}`);
            return;
          } catch (error) {
            this.log('WARN', `Failed to start with ${ecosystemFile}`, error.message);
          }
        }
      }
      
      // Fallback: try to start PM2 daemon
      try {
        execSync('pm2 start ecosystem.pm2.cjs', { stdio: 'inherit' });
        this.log('INFO', 'PM2 system recovered using fallback ecosystem');
      } catch (error) {
        this.log('ERROR', 'PM2 system recovery failed completely', error.message);
      }
      
    } catch (error) {
      this.log('ERROR', 'PM2 system recovery failed', error.message);
    }
  }

  async performHealthCheck() {
    try {
      this.log('INFO', 'Performing PM2 health check...');
      
      let healthScore = 100;
      const issues = [];
      
      // PM2 daemon health
      if (this.status.pm2Status === 'error') {
        healthScore -= 40;
        issues.push('PM2 daemon not running');
      } else if (this.status.pm2Status === 'unknown') {
        healthScore -= 20;
        issues.push('PM2 status unknown');
      }
      
      // Process health
      if (this.status.processes.length === 0) {
        healthScore -= 30;
        issues.push('No PM2 processes running');
      } else {
        const problematicProcesses = this.status.processes.filter(p => 
          p.pm2_env.status === 'stopped' || p.pm2_env.status === 'errored'
        );
        
        if (problematicProcesses.length > 0) {
          healthScore -= Math.min(30, problematicProcesses.length * 10);
          issues.push(`${problematicProcesses.length} problematic processes`);
        }
      }
      
      // Ecosystem files health
      if (this.status.ecosystemFiles.length === 0) {
        healthScore -= 20;
        issues.push('No ecosystem files found');
      } else {
        const invalidEcosystems = this.status.ecosystemFiles.filter(e => !e.valid);
        if (invalidEcosystems.length > 0) {
          healthScore -= Math.min(20, invalidEcosystems.length * 10);
          issues.push(`${invalidEcosystems.length} invalid ecosystem files`);
        }
      }
      
      // Health issues
      if (this.status.health.issues && this.status.health.issues.length > 0) {
        healthScore -= Math.min(25, this.status.health.issues.length * 5);
        issues.push(`${this.status.health.issues.length} health issues`);
      }
      
      // Ensure health score doesn't go below 0
      healthScore = Math.max(0, healthScore);
      
      this.status.health.score = healthScore;
      this.status.health.status = healthScore >= 80 ? 'healthy' : healthScore >= 50 ? 'warning' : 'critical';
      
      if (issues.length > 0) {
        this.log('WARN', `Health check found ${issues.length} issues:`, issues);
      }
      
      this.log('INFO', `Health check completed: ${this.status.health.status} (Score: ${healthScore}/100)`);
      
    } catch (error) {
      this.log('ERROR', 'Health check failed', error.message);
      this.status.health.status = 'error';
    }
  }

  async runFullCheck() {
    this.log('INFO', 'Starting comprehensive PM2 check...');
    
    try {
      await this.checkPM2Status();
      await this.checkEcosystemFiles();
      await this.performHealthCheck();
      
      // Auto-recovery if enabled
      if (this.config.autoRecovery && this.status.health.status === 'critical') {
        this.log('INFO', 'Health is critical, running recovery...');
        await this.recoverPM2Processes();
        await this.recoverPM2System();
      }
      
      this.status.lastCheck = new Date().toISOString();
      this.saveStatus();
      
      this.log('INFO', 'Comprehensive PM2 check completed');
      
    } catch (error) {
      this.log('ERROR', 'Comprehensive check failed', error.message);
    }
  }

  async runRecovery() {
    this.log('INFO', 'Starting PM2 recovery...');
    
    try {
      await this.recoverPM2Processes();
      await this.recoverPM2System();
      
      // Re-check status
      await this.runFullCheck();
      
      this.log('INFO', 'Recovery completed successfully');
      
    } catch (error) {
      this.log('ERROR', 'Recovery failed', error.message);
    }
  }

  getStatus() {
    return {
      ...this.status,
      uptime: Date.now() - new Date(this.status.startTime).getTime()
    };
  }

  async runOnce() {
    this.log('INFO', 'Running one-time PM2 check...');
    await this.runFullCheck();
    this.log('INFO', 'One-time check completed');
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimatePM2Redundancy();
  const command = process.argv[2];
  
  switch (command) {
    case 'check':
      system.runFullCheck().then(() => process.exit(0));
      break;
    case 'health':
      system.performHealthCheck().then(() => {
        console.log(JSON.stringify(system.status.health, null, 2));
        process.exit(0);
      });
      break;
    case 'recover':
      system.runRecovery().then(() => process.exit(0));
      break;
    case 'processes':
      system.recoverPM2Processes().then(() => process.exit(0));
      break;
    case 'system':
      system.recoverPM2System().then(() => process.exit(0));
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'once':
      system.runOnce().then(() => process.exit(0));
      break;
    default:
      console.log(`
Ultimate PM2 Redundancy System

Usage:
  node ultimate-pm2-redundancy.cjs <command>

Commands:
  check     - Run comprehensive check
  health    - Run health check only
  recover   - Run full recovery
  processes - Recover processes only
  system    - Recover PM2 system only
  status    - Show system status
  once      - Run one-time check

Environment Variables:
  PM2_REDUNDANCY_LOG_LEVEL - Log level (INFO, WARN, ERROR, DEBUG)
  PM2_CHECK_INTERVAL - Check interval in ms (default: 30000)
  PM2_MAX_RETRIES - Maximum recovery attempts (default: 3)
  PM2_AUTO_RECOVERY - Enable auto-recovery (default: true)
  PM2_AUTO_RESTART - Enable auto-restart (default: true)
      `);
      process.exit(1);
  }
}

module.exports = UltimatePM2Redundancy;