#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { execSync } = require('child_process');

// Import the redundancy managers
const PM2RedundancyManager = require('./pm2-redundancy-manager.cjs');
const GitHubActionsRedundancyManager = require('./github-actions-redundancy-manager.cjs');
const NetlifyFunctionsRedundancyManager = require('./netlify-functions-redundancy-manager.cjs');

class EnhancedMasterRedundancyOrchestrator {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    // Initialize managers
    this.pm2Manager = new PM2RedundancyManager();
    this.githubManager = new GitHubActionsRedundancyManager();
    this.netlifyManager = new NetlifyFunctionsRedundancyManager();
    
    this.managers = new Map([
      ['pm2', this.pm2Manager],
      ['github', this.githubManager],
      ['netlify', this.netlifyManager]
    ]);
    
    this.managerStatus = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.automationCoverage = new Map();
    
    // Track all automation types
    this.automationTypes = [
      'pm2-processes',
      'github-workflows', 
      'netlify-functions',
      'build-automation',
      'content-automation',
      'marketing-automation',
      'monitoring-automation',
      'deployment-automation'
    ];
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-MASTER] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-master-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllManagers() {
    this.log('Starting all enhanced redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting ${name} manager...`);
        
        // Start the manager in a controlled way
        if (name === 'pm2') {
          await manager.startBackupProcesses();
          await this.ensurePM2Redundancy();
        } else if (name === 'github') {
          await manager.createBackupWorkflows();
          await this.ensureGitHubActionsRedundancy();
        } else if (name === 'netlify') {
          await manager.createBackupFunctions();
          await this.ensureNetlifyFunctionsRedundancy();
        }
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy'
        });
        
        this.log(`${name} manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message
        });
      }
    }
    
    this.log('All enhanced managers startup completed');
  }

  async ensurePM2Redundancy() {
    this.log('Ensuring comprehensive PM2 redundancy...');
    
    try {
      // Check current PM2 processes
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      // Ensure all required processes are running with redundancy
      const requiredProcesses = [
        'zion-auto-sync',
        'zion-auto-sync-cron',
        'zion-auto-sync-backup',
        'zion-auto-sync-cron-backup',
        'redundancy-master-orchestrator',
        'redundancy-pm2-manager',
        'redundancy-github-manager',
        'redundancy-netlify-manager',
        'build-monitor-backup',
        'git-sync-backup',
        'netlify-healer-backup'
      ];
      
      for (const processName of requiredProcesses) {
        const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== 'online') {
          this.log(`Starting missing PM2 process: ${processName}`);
          execSync(`pm2 start ecosystem-redundancy.pm2.cjs --only ${processName}`, { stdio: 'inherit' });
        }
      }
      
      this.log('PM2 redundancy verification completed');
      
    } catch (error) {
      this.log(`Error ensuring PM2 redundancy: ${error.message}`, 'ERROR');
    }
  }

  async ensureGitHubActionsRedundancy() {
    this.log('Ensuring comprehensive GitHub Actions redundancy...');
    
    try {
      // Check if backup workflows exist and are properly configured
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const workflowFiles = fs.readdirSync(workflowsDir);
      
      // Ensure backup workflows exist for all primary workflows
      const primaryWorkflows = ['marketing-sync.yml', 'sync-health.yml'];
      const backupWorkflows = ['marketing-sync-backup.yml', 'sync-health-backup.yml'];
      
      for (let i = 0; i < primaryWorkflows.length; i++) {
        const primary = primaryWorkflows[i];
        const backup = backupWorkflows[i];
        
        if (!workflowFiles.includes(backup)) {
          this.log(`Creating backup workflow: ${backup}`);
          await this.createBackupWorkflow(primary, backup);
        }
      }
      
      this.log('GitHub Actions redundancy verification completed');
      
    } catch (error) {
      this.log(`Error ensuring GitHub Actions redundancy: ${error.message}`, 'ERROR');
    }
  }

  async createBackupWorkflow(primaryWorkflow, backupWorkflow) {
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const primaryPath = path.join(workflowsDir, primaryWorkflow);
      const backupPath = path.join(workflowsDir, backupWorkflow);
      
      if (fs.existsSync(primaryPath)) {
        let content = fs.readFileSync(primaryPath, 'utf8');
        
        // Modify the backup workflow to run on different schedule
        content = content.replace(
          /cron: '0 \*\/12 \* \* \*'/,
          "cron: '30 */12 * * *'" // Offset by 30 minutes
        );
        content = content.replace(
          /cron: '\*\/15 \* \* \* \*'/,
          "cron: '*/20 * * * *'" // Different interval
        );
        
        // Add backup identifier
        content = content.replace(
          /name: /,
          'name: [BACKUP] '
        );
        
        fs.writeFileSync(backupPath, content);
        this.log(`Created backup workflow: ${backupWorkflow}`);
      }
    } catch (error) {
      this.log(`Error creating backup workflow: ${error.message}`, 'ERROR');
    }
  }

  async ensureNetlifyFunctionsRedundancy() {
    this.log('Ensuring comprehensive Netlify functions redundancy...');
    
    try {
      // Check Netlify functions manifest
      const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        
        // Ensure all functions have backup versions
        if (manifest.functions && manifest.functions.length > 0) {
          this.log(`Found ${manifest.functions.length} Netlify functions, ensuring redundancy`);
          
          // Create backup functions manifest
          const backupManifest = {
            ...manifest,
            generatedAt: new Date().toISOString(),
            redundancyMode: 'backup',
            backupFunctions: manifest.functions.map(fn => `${fn}-backup`)
          };
          
          const backupPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-backup-manifest.json');
          fs.writeFileSync(backupPath, JSON.stringify(backupManifest, null, 2));
          
          this.log('Netlify functions backup manifest created');
        }
      }
      
      this.log('Netlify functions redundancy verification completed');
      
    } catch (error) {
      this.log(`Error ensuring Netlify functions redundancy: ${error.message}`, 'ERROR');
    }
  }

  async startHealthMonitoring() {
    this.log('Starting enhanced health monitoring for all managers...');
    
    // Monitor manager health every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.checkAllManagerHealth();
    });

    // Full system health check every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.fullSystemHealthCheck();
    });

    // Comprehensive automation coverage check every hour
    cron.schedule('0 * * * *', async () => {
      await this.checkAutomationCoverage();
    });

    // Recovery attempt every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.attemptRecovery();
    });
  }

  async checkAllManagerHealth() {
    this.log('Checking health of all managers...');
    
    for (const [name, manager] of this.managers) {
      try {
        const health = await manager.checkHealth();
        this.healthChecks.set(name, {
          timestamp: new Date(),
          status: health.status,
          details: health.details
        });
        
        if (health.status !== 'healthy') {
          this.log(`Manager ${name} health check failed: ${health.details}`, 'WARN');
        }
      } catch (error) {
        this.log(`Health check failed for ${name}: ${error.message}`, 'ERROR');
        this.healthChecks.set(name, {
          timestamp: new Date(),
          status: 'error',
          details: error.message
        });
      }
    }
  }

  async fullSystemHealthCheck() {
    this.log('Performing full system health check...');
    
    try {
      // Check PM2 status
      const pm2Status = execSync('pm2 list --json', { encoding: 'utf8' });
      const pm2Processes = JSON.parse(pm2Status);
      
      // Check GitHub Actions status
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const workflowFiles = fs.readdirSync(workflowsDir);
      
      // Check Netlify functions
      const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
      const netlifyStatus = fs.existsSync(manifestPath);
      
      // Generate health report
      const healthReport = {
        timestamp: new Date().toISOString(),
        pm2: {
          totalProcesses: pm2Processes.length,
          onlineProcesses: pm2Processes.filter(p => p.pm2_env.status === 'online').length,
          offlineProcesses: pm2Processes.filter(p => p.pm2_env.status !== 'online').length
        },
        githubActions: {
          totalWorkflows: workflowFiles.length,
          primaryWorkflows: workflowFiles.filter(f => !f.includes('backup')).length,
          backupWorkflows: workflowFiles.filter(f => f.includes('backup')).length
        },
        netlify: {
          manifestExists: netlifyStatus,
          backupManifestExists: fs.existsSync(path.join(process.cwd(), 'netlify', 'functions', 'functions-backup-manifest.json'))
        }
      };
      
      // Save health report
      const reportPath = path.join(this.logDir, 'system-health-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      this.log('Full system health check completed');
      
    } catch (error) {
      this.log(`Full system health check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkAutomationCoverage() {
    this.log('Checking automation coverage...');
    
    try {
      const coverage = {};
      
      // Check PM2 automation coverage
      coverage.pm2 = await this.checkPM2AutomationCoverage();
      
      // Check GitHub Actions coverage
      coverage.github = await this.checkGitHubActionsCoverage();
      
      // Check Netlify functions coverage
      coverage.netlify = await this.checkNetlifyFunctionsCoverage();
      
      // Check build automation coverage
      coverage.build = await this.checkBuildAutomationCoverage();
      
      // Check content automation coverage
      coverage.content = await this.checkContentAutomationCoverage();
      
      this.automationCoverage.set(new Date(), coverage);
      
      // Save coverage report
      const coveragePath = path.join(this.logDir, 'automation-coverage-report.json');
      fs.writeFileSync(coveragePath, JSON.stringify(coverage, null, 2));
      
      this.log('Automation coverage check completed');
      
    } catch (error) {
      this.log(`Automation coverage check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkPM2AutomationCoverage() {
    try {
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      const coverage = {
        total: processes.length,
        primary: processes.filter(p => !p.name.includes('backup') && !p.name.includes('redundancy')).length,
        backup: processes.filter(p => p.name.includes('backup')).length,
        redundancy: processes.filter(p => p.name.includes('redundancy')).length,
        online: processes.filter(p => p.pm2_env.status === 'online').length
      };
      
      return coverage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkGitHubActionsCoverage() {
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const workflowFiles = fs.readdirSync(workflowsDir);
      
      const coverage = {
        total: workflowFiles.length,
        primary: workflowFiles.filter(f => !f.includes('backup')).length,
        backup: workflowFiles.filter(f => f.includes('backup')).length,
        marketing: workflowFiles.filter(f => f.includes('marketing')).length,
        sync: workflowFiles.filter(f => f.includes('sync')).length
      };
      
      return coverage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkNetlifyFunctionsCoverage() {
    try {
      const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
      const backupPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-backup-manifest.json');
      
      const coverage = {
        primaryManifest: fs.existsSync(manifestPath),
        backupManifest: fs.existsSync(backupPath),
        primaryFunctions: 0,
        backupFunctions: 0
      };
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        coverage.primaryFunctions = manifest.functions ? manifest.functions.length : 0;
      }
      
      if (fs.existsSync(backupPath)) {
        const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        coverage.backupFunctions = backup.backupFunctions ? backup.backupFunctions.length : 0;
      }
      
      return coverage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkBuildAutomationCoverage() {
    try {
      const buildScripts = [
        'automation/pre-build-health-check.cjs',
        'automation/nextjs-page-validator.cjs',
        'automation/build-failure-recovery.cjs',
        'automation/continuous-build-monitor.cjs',
        'automation/master-build-orchestrator.cjs'
      ];
      
      const coverage = {
        total: buildScripts.length,
        exists: 0,
        executable: 0
      };
      
      for (const script of buildScripts) {
        const scriptPath = path.join(process.cwd(), script);
        if (fs.existsSync(scriptPath)) {
          coverage.exists++;
          if (fs.statSync(scriptPath).mode & 0o111) {
            coverage.executable++;
          }
        }
      }
      
      return coverage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkContentAutomationCoverage() {
    try {
      const contentScripts = [
        'automation/marketing-sync.js',
        'automation/content-quality-fixer.cjs',
        'automation/content-quality-analyzer.cjs',
        'automation/front-index-advertiser.cjs',
        'automation/ai-content-factory.cjs'
      ];
      
      const coverage = {
        total: contentScripts.length,
        exists: 0,
        executable: 0
      };
      
      for (const script of contentScripts) {
        const scriptPath = path.join(process.cwd(), script);
        if (fs.existsSync(scriptPath)) {
          coverage.exists++;
          if (fs.statSync(scriptPath).mode & 0o111) {
            coverage.executable++;
          }
        }
      }
      
      return coverage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async attemptRecovery() {
    this.log('Attempting recovery for failed components...');
    
    for (const [name, status] of this.managerStatus) {
      if (status.health === 'unhealthy') {
        this.log(`Attempting recovery for ${name}...`);
        
        try {
          const manager = this.managers.get(name);
          if (manager && typeof manager.recover === 'function') {
            await manager.recover();
            this.log(`${name} recovery completed`);
          }
        } catch (error) {
          this.log(`Recovery failed for ${name}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async start() {
    this.log('Starting Enhanced Master Redundancy Orchestrator...');
    
    try {
      await this.startAllManagers();
      await this.startHealthMonitoring();
      
      this.log('Enhanced Master Redundancy Orchestrator started successfully');
      
      // Keep the process running
      process.on('SIGINT', () => {
        this.log('Shutting down Enhanced Master Redundancy Orchestrator...');
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`Failed to start Enhanced Master Redundancy Orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      managerStatus: Object.fromEntries(this.managerStatus),
      healthChecks: Object.fromEntries(this.healthChecks),
      automationCoverage: Object.fromEntries(this.automationCoverage),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts)
    };
  }
}

// Export the class
module.exports = EnhancedMasterRedundancyOrchestrator;

// If run directly, start the orchestrator
if (require.main === module) {
  const orchestrator = new EnhancedMasterRedundancyOrchestrator();
  orchestrator.start().catch(error => {
    console.error('Failed to start Enhanced Master Redundancy Orchestrator:', error);
    process.exit(1);
  });
}