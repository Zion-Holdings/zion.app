#!/usr/bin/env node

/**
 * Ultimate Redundancy Automation System
 * Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations
 * 
 * This system provides:
 * - PM2 process monitoring and auto-recovery
 * - GitHub Actions workflow monitoring and backup triggers
 * - Netlify Functions monitoring and regeneration
 * - Cross-system health monitoring
 * - Automated failover and recovery
 * - Comprehensive logging and reporting
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancyAutomationSystem {
  constructor() {
    this.config = {
      logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO',
      checkInterval: parseInt(process.env.REDUNDANCY_CHECK_INTERVAL) || 30000,
      maxRetries: parseInt(process.env.REDUNDANCY_MAX_RETRIES) || 3,
      autoRecovery: process.env.REDUNDANCY_AUTO_RECOVERY === 'true',
      healthCheckInterval: parseInt(process.env.HEALTH_CHECK_INTERVAL) || 60000,
      logDir: path.join(__dirname, 'logs'),
      pidFile: path.join(__dirname, 'logs', 'ultimate-redundancy.pid'),
      statusFile: path.join(__dirname, 'ultimate-redundancy-status.json')
    };
    
    this.status = {
      startTime: new Date().toISOString(),
      lastCheck: null,
      pm2: { status: 'unknown', processes: [], lastCheck: null },
      github: { status: 'unknown', workflows: [], lastCheck: null },
      netlify: { status: 'unknown', functions: [], lastCheck: null },
      health: { status: 'unknown', score: 0, lastCheck: null },
      errors: [],
      recoveryAttempts: 0
    };
    
    this.running = false;
    this.timers = new Map();
    
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
    const logFile = path.join(this.config.logDir, 'ultimate-redundancy.log');
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

  async checkPM2Status() {
    try {
      this.log('INFO', 'Checking PM2 status...');
      
      // Check if PM2 is running
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const pm2Data = JSON.parse(pm2Status);
      
      this.status.pm2.processes = pm2Data.processes || [];
      this.status.pm2.status = 'healthy';
      this.status.pm2.lastCheck = new Date().toISOString();
      
      // Check for any stopped or errored processes
      const problematicProcesses = this.status.pm2.processes.filter(p => 
        p.pm2_env.status === 'stopped' || p.pm2_env.status === 'errored'
      );
      
      if (problematicProcesses.length > 0) {
        this.log('WARN', `Found ${problematicProcesses.length} problematic PM2 processes`);
        this.status.pm2.status = 'warning';
        
        if (this.config.autoRecovery) {
          await this.recoverPM2Processes(problematicProcesses);
        }
      }
      
      this.log('INFO', `PM2 status: ${this.status.pm2.status} (${this.status.pm2.processes.length} processes)`);
      
    } catch (error) {
      this.log('ERROR', 'PM2 status check failed', error.message);
      this.status.pm2.status = 'error';
      this.status.pm2.lastCheck = new Date().toISOString();
      
      if (this.config.autoRecovery) {
        await this.recoverPM2System();
      }
    }
  }

  async recoverPM2Processes(processes) {
    this.log('INFO', `Attempting to recover ${processes.length} PM2 processes...`);
    
    for (const process of processes) {
      try {
        if (process.pm2_env.status === 'stopped') {
          execSync(`pm2 start ${process.pm2_env.pm_cwd}/${process.pm2_env.script} --name ${process.name}`);
          this.log('INFO', `Restarted stopped process: ${process.name}`);
        } else if (process.pm2_env.status === 'errored') {
          execSync(`pm2 restart ${process.name}`);
          this.log('INFO', `Restarted errored process: ${process.name}`);
        }
      } catch (error) {
        this.log('ERROR', `Failed to recover process ${process.name}`, error.message);
      }
    }
  }

  async recoverPM2System() {
    this.log('INFO', 'Attempting to recover PM2 system...');
    
    try {
      // Try to restart PM2 daemon
      execSync('pm2 kill');
      execSync('pm2 start ecosystem.comprehensive-redundancy.cjs');
      this.log('INFO', 'PM2 system recovered');
    } catch (error) {
      this.log('ERROR', 'PM2 system recovery failed', error.message);
    }
  }

  async checkGitHubActionsStatus() {
    try {
      this.log('INFO', 'Checking GitHub Actions status...');
      
      // Check if we can access GitHub API
      const workflowFiles = fs.readdirSync(path.join(process.cwd(), '.github', 'workflows'))
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      this.status.github.workflows = workflowFiles;
      this.status.github.status = 'healthy';
      this.status.github.lastCheck = new Date().toISOString();
      
      // Check for backup workflows
      const backupWorkflows = workflowFiles.filter(file => file.includes('backup'));
      if (backupWorkflows.length === 0) {
        this.log('WARN', 'No backup workflows found');
        this.status.github.status = 'warning';
        
        if (this.config.autoRecovery) {
          await this.createGitHubActionsBackups();
        }
      }
      
      this.log('INFO', `GitHub Actions status: ${this.status.github.status} (${workflowFiles.length} workflows)`);
      
    } catch (error) {
      this.log('ERROR', 'GitHub Actions status check failed', error.message);
      this.status.github.status = 'error';
      this.status.github.lastCheck = new Date().toISOString();
    }
  }

  async createGitHubActionsBackups() {
    this.log('INFO', 'Creating GitHub Actions backups...');
    
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const workflowFiles = fs.readdirSync(workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .filter(file => !file.includes('backup'));
      
      for (const workflow of workflowFiles) {
        const backupName = workflow.replace('.yml', '-backup.yml').replace('.yaml', '-backup.yaml');
        const backupPath = path.join(workflowsDir, backupName);
        
        if (!fs.existsSync(backupPath)) {
          const workflowContent = fs.readFileSync(path.join(workflowsDir, workflow), 'utf8');
          fs.writeFileSync(backupPath, workflowContent);
          this.log('INFO', `Created backup: ${backupName}`);
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to create GitHub Actions backups', error.message);
    }
  }

  async checkNetlifyFunctionsStatus() {
    try {
      this.log('INFO', 'Checking Netlify Functions status...');
      
      const netlifyDir = path.join(process.cwd(), 'netlify');
      const functionsDir = path.join(netlifyDir, 'functions');
      
      if (!fs.existsSync(functionsDir)) {
        this.status.netlify.status = 'unknown';
        this.status.netlify.lastCheck = new Date().toISOString();
        return;
      }
      
      // Check functions manifest
      const manifestPath = path.join(functionsDir, 'functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        this.status.netlify.functions = manifest.functions || [];
        this.status.netlify.status = 'healthy';
      } else {
        this.status.netlify.functions = [];
        this.status.netlify.status = 'warning';
        
        if (this.config.autoRecovery) {
          await this.regenerateNetlifyFunctionsManifest();
        }
      }
      
      this.status.netlify.lastCheck = new Date().toISOString();
      this.log('INFO', `Netlify Functions status: ${this.status.netlify.status} (${this.status.netlify.functions.length} functions)`);
      
    } catch (error) {
      this.log('ERROR', 'Netlify Functions status check failed', error.message);
      this.status.netlify.status = 'error';
      this.status.netlify.lastCheck = new Date().toISOString();
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log('INFO', 'Regenerating Netlify Functions manifest...');
    
    try {
      execSync('npm run netlify:manifest', { stdio: 'inherit' });
      this.log('INFO', 'Netlify Functions manifest regenerated');
    } catch (error) {
      this.log('ERROR', 'Failed to regenerate Netlify Functions manifest', error.message);
    }
  }

  async performHealthCheck() {
    try {
      this.log('INFO', 'Performing comprehensive health check...');
      
      let healthScore = 100;
      const issues = [];
      
      // PM2 Health
      if (this.status.pm2.status === 'error') {
        healthScore -= 30;
        issues.push('PM2 system has errors');
      } else if (this.status.pm2.status === 'warning') {
        healthScore -= 15;
        issues.push('PM2 system has warnings');
      }
      
      // GitHub Actions Health
      if (this.status.github.status === 'error') {
        healthScore -= 25;
        issues.push('GitHub Actions has errors');
      } else if (this.status.github.status === 'warning') {
        healthScore -= 10;
        issues.push('GitHub Actions has warnings');
      }
      
      // Netlify Functions Health
      if (this.status.netlify.status === 'error') {
        healthScore -= 20;
        issues.push('Netlify Functions has errors');
      } else if (this.status.netlify.status === 'warning') {
        healthScore -= 10;
        issues.push('Netlify Functions has warnings');
      }
      
      // Ensure health score doesn't go below 0
      healthScore = Math.max(0, healthScore);
      
      this.status.health.score = healthScore;
      this.status.health.status = healthScore >= 80 ? 'healthy' : healthScore >= 50 ? 'warning' : 'critical';
      this.status.health.lastCheck = new Date().toISOString();
      
      if (issues.length > 0) {
        this.log('WARN', `Health check found ${issues.length} issues:`, issues);
      }
      
      this.log('INFO', `Health check completed: ${this.status.health.status} (Score: ${healthScore}/100)`);
      
    } catch (error) {
      this.log('ERROR', 'Health check failed', error.message);
      this.status.health.status = 'error';
      this.status.health.lastCheck = new Date().toISOString();
    }
  }

  async runFullCheck() {
    this.log('INFO', 'Starting comprehensive redundancy check...');
    
    try {
      await Promise.all([
        this.checkPM2Status(),
        this.checkGitHubActionsStatus(),
        this.checkNetlifyFunctionsStatus()
      ]);
      
      await this.performHealthCheck();
      
      this.status.lastCheck = new Date().toISOString();
      this.saveStatus();
      
      this.log('INFO', 'Comprehensive redundancy check completed');
      
    } catch (error) {
      this.log('ERROR', 'Comprehensive redundancy check failed', error.message);
      this.status.errors.push({
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack
      });
    }
  }

  start() {
    if (this.running) {
      this.log('WARN', 'System is already running');
      return;
    }
    
    this.log('INFO', 'Starting Ultimate Redundancy Automation System...');
    
    // Write PID file
    fs.writeFileSync(this.config.pidFile, process.pid.toString());
    
    // Start periodic checks
    this.timers.set('main', setInterval(() => {
      this.runFullCheck();
    }, this.config.checkInterval));
    
    // Start health monitoring
    this.timers.set('health', setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval));
    
    // Run initial check
    this.runFullCheck();
    
    this.running = true;
    this.log('INFO', 'Ultimate Redundancy Automation System started successfully');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => this.stop());
    process.on('SIGTERM', () => this.stop());
  }

  stop() {
    if (!this.running) {
      this.log('WARN', 'System is not running');
      return;
    }
    
    this.log('INFO', 'Stopping Ultimate Redundancy Automation System...');
    
    // Clear all timers
    for (const [name, timer] of this.timers) {
      clearInterval(timer);
      this.timers.delete(name);
    }
    
    // Remove PID file
    if (fs.existsSync(this.config.pidFile)) {
      fs.unlinkSync(this.config.pidFile);
    }
    
    this.running = false;
    this.log('INFO', 'Ultimate Redundancy Automation System stopped');
    
    process.exit(0);
  }

  getStatus() {
    return {
      ...this.status,
      running: this.running,
      uptime: this.running ? Date.now() - new Date(this.status.startTime).getTime() : 0
    };
  }

  async runOnce() {
    this.log('INFO', 'Running one-time redundancy check...');
    await this.runFullCheck();
    this.log('INFO', 'One-time redundancy check completed');
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      system.start();
      break;
    case 'stop':
      system.stop();
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'once':
      system.runOnce().then(() => process.exit(0));
      break;
    case 'health':
      system.performHealthCheck().then(() => {
        console.log(JSON.stringify(system.status.health, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log(`
Ultimate Redundancy Automation System

Usage:
  node ultimate-redundancy-automation-system.cjs <command>

Commands:
  start   - Start the redundancy system
  stop    - Stop the redundancy system
  status  - Show system status
  once    - Run one-time check
  health  - Run health check only

Environment Variables:
  REDUNDANCY_LOG_LEVEL - Log level (INFO, WARN, ERROR, DEBUG)
  REDUNDANCY_CHECK_INTERVAL - Main check interval in ms (default: 30000)
  REDUNDANCY_MAX_RETRIES - Maximum recovery attempts (default: 3)
  REDUNDANCY_AUTO_RECOVERY - Enable auto-recovery (default: true)
  HEALTH_CHECK_INTERVAL - Health check interval in ms (default: 60000)
      `);
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomationSystem;