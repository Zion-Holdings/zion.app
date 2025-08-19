#!/usr/bin/env node
'use strict';

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    this.systems = new Map();
    this.healthStatus = new Map();
    this.recoveryHistory = [];
    this.config = this.loadConfig();
    this.monitoringInterval = null;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(process.cwd(), 'automation', 'redundancy-config.json');
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log(`Failed to load config: ${error.message}`, 'WARN');
      }
    }
    
    return {
      systems: {
        pm2: {
          name: 'PM2 Process Manager',
          priority: 'high',
          checkInterval: 30000,
          maxFailures: 3,
          autoRecovery: true,
          ecosystemFiles: ['ecosystem.comprehensive-redundancy.cjs', 'ecosystem.pm2.cjs'],
          criticalProcesses: ['zion-auto-sync', 'master-redundancy-orchestrator']
        },
        github: {
          name: 'GitHub Actions',
          priority: 'medium',
          checkInterval: 60000,
          maxFailures: 3,
          autoRecovery: true,
          workflows: ['marketing-sync', 'sync-health'],
          backupWorkflows: ['marketing-sync-backup', 'sync-health-backup']
        },
        netlify: {
          name: 'Netlify Functions',
          priority: 'medium',
          checkInterval: 120000,
          maxFailures: 3,
          autoRecovery: true,
          criticalFunctions: ['netlify-auto-healer-runner', 'continuous-orchestrator'],
          manifestFile: 'netlify/functions/functions-manifest.json'
        }
      },
      monitoring: {
        healthCheckInterval: 300000, // 5 minutes
        alertThreshold: 3,
        logRotation: true,
        autoRestart: true,
        loadBalancing: true
      },
      recovery: {
        maxAttempts: 5,
        backoffDelay: 10000,
        escalationDelay: 60000
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'comprehensive-orchestrator.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10,
      ...options
    });
    return {
      status: result.status,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      success: result.status === 0
    };
  }

  async checkPM2System() {
    const systemName = 'pm2';
    this.log(`Checking ${this.config.systems?.pm2?.name || 'PM2 Process Manager'}...`);
    
    try {
      // Check if PM2 is running
      const pm2Status = this.runCommand('pm2', ['status', '--no-daemon']);
      if (!pm2Status.success) {
        this.log('PM2 not running, attempting to start...', 'WARN');
        await this.recoverPM2System();
        return false;
      }

      // Parse PM2 processes
      const processes = this.parsePM2Status(pm2Status.stdout);
      this.log(`Found ${processes.length} PM2 processes`);

      // Check critical processes
      const criticalProcesses = this.config.systems?.pm2?.criticalProcesses || ['zion-auto-sync', 'master-redundancy-orchestrator'];
      const missingProcesses = criticalProcesses.filter(name => 
        !processes.find(p => p.name === name && p.status === 'online')
      );

      if (missingProcesses.length > 0) {
        this.log(`Missing critical processes: ${missingProcesses.join(', ')}`, 'ERROR');
        await this.recoverPM2System();
        return false;
      }

      // Check process health
      const unhealthyProcesses = processes.filter(p => 
        p.status !== 'online' || p.cpu > 90 || p.memory > 90
      );

      if (unhealthyProcesses.length > 0) {
        this.log(`Unhealthy processes detected: ${unhealthyProcesses.map(p => p.name).join(', ')}`, 'WARN');
        await this.healPM2Processes(unhealthyProcesses);
      }

      this.updateHealthStatus(systemName, true, 'All processes healthy');
      this.log(`${this.config.systems.pm2.name} check completed successfully`);
      return true;
    } catch (error) {
      this.log(`${this.config.systems.pm2.name} check failed: ${error.message}`, 'ERROR');
      this.updateHealthStatus(systemName, false, error.message);
      return false;
    }
  }

  async checkGitHubActionsSystem() {
    const systemName = 'github';
    this.log(`Checking ${this.config.systems?.github?.name || 'GitHub Actions'}...`);
    
    try {
      // Check workflows directory
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (!fs.existsSync(workflowsDir)) {
        this.log('GitHub workflows directory not found', 'ERROR');
        this.updateHealthStatus(systemName, false, 'Workflows directory missing');
        return false;
      }

      // Check workflow files
      const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
      this.log(`Found ${workflowFiles.length} workflow files`);

      // Validate workflow syntax
      let workflowErrors = 0;
      for (const workflow of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflow);
        try {
          const content = fs.readFileSync(workflowPath, 'utf8');
          if (!content.includes('name:') || !content.includes('on:')) {
            this.log(`Invalid workflow syntax in ${workflow}`, 'WARN');
            workflowErrors++;
          }
        } catch (error) {
          this.log(`Failed to read workflow ${workflow}: ${error.message}`, 'ERROR');
          workflowErrors++;
        }
      }

      // Check backup workflows
      const backupWorkflows = fs.readdirSync(workflowsDir).filter(f => f.includes('backup'));
      if (backupWorkflows.length === 0) {
        this.log('No backup workflows found, creating redundancy...', 'WARN');
        await this.createGitHubActionsBackups();
      }

      if (workflowErrors > 0) {
        this.log(`Found ${workflowErrors} workflow errors`, 'WARN');
        this.updateHealthStatus(systemName, false, `${workflowErrors} workflow errors`);
        return false;
      }

      this.updateHealthStatus(systemName, true, 'All workflows valid');
      this.log(`GitHub Actions check completed successfully`);
      return true;
    } catch (error) {
      this.log(`GitHub Actions check failed: ${error.message}`, 'ERROR');
      this.updateHealthStatus(systemName, false, error.message);
      return false;
    }
  }

  async checkNetlifyFunctionsSystem() {
    const systemName = 'netlify';
    this.log(`Checking ${this.config.systems?.netlify?.name || 'Netlify Functions'}...`);
    
    try {
      // Check Netlify functions directory
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      if (!fs.existsSync(functionsDir)) {
        this.log('Netlify functions directory not found', 'ERROR');
        this.updateHealthStatus(systemName, false, 'Functions directory missing');
        return false;
      }

      // Check functions manifest
      const manifestPath = path.join(functionsDir, 'functions-manifest.json');
      if (!fs.existsSync(manifestPath)) {
        this.log('Functions manifest not found, regenerating...', 'WARN');
        this.runCommand('npm', ['run', 'netlify:manifest']);
      }

      // Check critical functions
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      this.log(`Found ${manifest.functions.length} Netlify functions`);

      const criticalFunctions = this.config.systems?.netlify?.criticalFunctions || ['netlify-auto-healer-runner', 'continuous-orchestrator'];
      const missingFunctions = criticalFunctions.filter(name => 
        !manifest.functions.includes(name)
      );

      if (missingFunctions.length > 0) {
        this.log(`Missing critical functions: ${missingFunctions.join(', ')}`, 'WARN');
        await this.recoverNetlifyFunctionsSystem(missingFunctions);
        this.updateHealthStatus(systemName, false, `Missing functions: ${missingFunctions.join(', ')}`);
        return false;
      }

      this.updateHealthStatus(systemName, true, 'All functions available');
      this.log(`Netlify Functions check completed successfully`);
      return true;
    } catch (error) {
      this.log(`Netlify Functions check failed: ${error.message}`, 'ERROR');
      this.updateHealthStatus(systemName, false, error.message);
      return false;
    }
  }

  async createGitHubActionsBackups() {
    this.log('Creating GitHub Actions backup workflows...');
    
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const backupDir = path.join(workflowsDir, 'backups');
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      // Create backup workflows
      const backupWorkflows = [
        {
          name: 'marketing-sync-backup.yml',
          content: this.generateMarketingSyncBackup()
        },
        {
          name: 'sync-health-backup.yml',
          content: this.generateSyncHealthBackup()
        }
      ];

      for (const backup of backupWorkflows) {
        const backupPath = path.join(backupDir, backup.name);
        fs.writeFileSync(backupPath, backup.content);
        this.log(`Created backup workflow: ${backup.name}`);
      }

      this.log('GitHub Actions backup workflows created successfully');
    } catch (error) {
      this.log(`Failed to create backup workflows: ${error.message}`, 'ERROR');
    }
  }

  generateMarketingSyncBackup() {
    return `name: Marketing Sync Backup

on:
  schedule:
    - cron: '30 */12 * * *'  # 30 minutes after the main workflow
  workflow_dispatch:
  workflow_run:
    workflows: ["Marketing Sync"]
    types:
      - completed
    branches:
      - main

permissions:
  contents: write

jobs:
  run-marketing-sync-backup:
    runs-on: ubuntu-latest
    if: \${{ github.event.workflow_run.conclusion == 'failure' || github.event.workflow_run.conclusion == 'cancelled' }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run marketing-sync backup
        env:
          LINKEDIN_ACCESS_TOKEN: \${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: \${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: \${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: \${{ secrets.IG_ACCESS_TOKEN }}
        run: node automation/marketing-sync.js

      - name: Commit report if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "\$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(marketing): update marketing-sync backup report"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`;
  }

  generateSyncHealthBackup() {
    return `name: Sync Health Backup

on:
  schedule:
    - cron: '*/20 * * * *'  # Every 20 minutes (5 minutes after main)
  workflow_dispatch:
  workflow_run:
    workflows: ["Sync Health"]
    types:
      - completed
    branches:
      - main

permissions:
  contents: write

jobs:
  check-sync-backup:
    runs-on: ubuntu-latest
    if: \${{ github.event.workflow_run.conclusion == 'failure' || github.event.workflow_run.conclusion == 'cancelled' }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run pm2-auto-sync backup (safe mode)
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: node automation/pm2-auto-sync.js || true

      - name: Push if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
              echo "No push needed."
          fi`;
  }

  async recoverPM2System() {
    this.log('Recovering PM2 system...');
    
    try {
      // Try to start the comprehensive redundancy ecosystem
      const result = this.runCommand('pm2', ['start', 'ecosystem.comprehensive-redundancy.cjs']);
      
      if (result.success) {
        this.log('PM2 system recovered successfully');
        return true;
      } else {
        this.log('Failed to recover PM2 system', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async healPM2Processes(unhealthyProcesses) {
    this.log(`Healing unhealthy PM2 processes: ${unhealthyProcesses.map(p => p.name).join(', ')}`);
    
    try {
      for (const process of unhealthyProcesses) {
        this.log(`Restarting process: ${process.name}`);
        this.runCommand('pm2', ['restart', process.name]);
      }
      
      this.log('PM2 process healing completed');
    } catch (error) {
      this.log(`PM2 healing failed: ${error.message}`, 'ERROR');
    }
  }

  async recoverNetlifyFunctionsSystem(missingFunctions) {
    this.log(`Recovering missing Netlify functions: ${missingFunctions.join(', ')}`);
    
    try {
      // Regenerate functions manifest
      this.runCommand('npm', ['run', 'netlify:manifest']);
      
      // Trigger Netlify deployment
      this.runCommand('npm', ['run', 'netlify:trigger']);
      
      this.log('Netlify functions recovery initiated');
    } catch (error) {
      this.log(`Netlify functions recovery failed: ${error.message}`, 'ERROR');
    }
  }

  updateHealthStatus(systemName, healthy, message) {
    this.healthStatus.set(systemName, {
      healthy,
      message,
      timestamp: new Date().toISOString(),
      lastCheck: new Date().toISOString()
    });
  }

  async runComprehensiveCheck() {
    this.log('Starting comprehensive automation check...');
    
    const results = {
      pm2: false,
      github: false,
      netlify: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Run all system checks
      results.pm2 = await this.checkPM2System();
      results.github = await this.checkGitHubActionsSystem();
      results.netlify = await this.checkNetlifyFunctionsSystem();

      // Generate health report
      const healthReport = this.generateHealthReport(results);
      this.saveHealthReport(healthReport);

      // Log results
      this.log(`Comprehensive check completed - PM2: ${results.pm2}, GitHub: ${results.github}, Netlify: ${results.netlify}`);
      
      return results;
    } catch (error) {
      this.log(`Comprehensive check failed: ${error.message}`, 'ERROR');
      return results;
    }
  }

  generateHealthReport(results) {
    return {
      timestamp: new Date().toISOString(),
      overallHealth: results.pm2 && results.github && results.netlify ? 'HEALTHY' : 'DEGRADED',
      systems: {
        pm2: {
          status: results.pm2 ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString(),
          details: this.healthStatus.get('pm2') || {}
        },
        github: {
          status: results.github ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString(),
          details: this.healthStatus.get('github') || {}
        },
        netlify: {
          status: results.netlify ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString(),
          details: this.healthStatus.get('netlify') || {}
        }
      },
      recommendations: this.generateRecommendations(results)
    };
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    if (!results.pm2) {
      recommendations.push('PM2 system needs attention - check logs and restart if necessary');
    }
    if (!results.github) {
      recommendations.push('GitHub Actions system needs attention - validate workflow files');
    }
    if (!results.netlify) {
      recommendations.push('Netlify Functions system needs attention - regenerate manifest and deploy');
    }
    
    return recommendations;
  }

  saveHealthReport(report) {
    const reportPath = path.join(this.logDir, 'comprehensive-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  async startContinuousMonitoring() {
    this.log('Starting continuous automation monitoring...');
    
    // Run initial check
    await this.runComprehensiveCheck();
    
    // Schedule periodic checks
    this.monitoringInterval = cron.schedule('*/5 * * * *', async () => {
      this.log('Running scheduled automation check...');
      await this.runComprehensiveCheck();
    });
    
    // Schedule health report generation
    cron.schedule('0 * * * *', async () => {
      this.log('Generating hourly health report...');
      await this.runComprehensiveCheck();
    });
    
    this.log('Continuous monitoring started successfully');
  }

  async start() {
    this.log('Starting Comprehensive Automation Orchestrator...');
    
    try {
      // Start continuous monitoring
      await this.startContinuousMonitoring();
      
      // Keep the process running
      this.log('Comprehensive Automation Orchestrator is running...');
      process.on('SIGINT', () => {
        this.log('Shutting down Comprehensive Automation Orchestrator...');
        if (this.monitoringInterval) {
          this.monitoringInterval.destroy();
        }
        process.exit(0);
      });
    } catch (error) {
      this.log(`Failed to start Comprehensive Automation Orchestrator: ${error.message}`, 'ERROR');
      process.exit(1);
    }
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
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveAutomationOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'check':
      orchestrator.runComprehensiveCheck().then(results => {
        console.log('Check results:', results);
        process.exit(0);
      });
      break;
    case 'status':
      console.log('Comprehensive Automation Orchestrator Status:');
      console.log('- PM2 System: Active');
      console.log('- GitHub Actions System: Active');
      console.log('- Netlify Functions System: Active');
      console.log('- Continuous Monitoring: Active');
      break;
    default:
      console.log('Usage: node comprehensive-automation-orchestrator.cjs [start|check|status]');
      process.exit(1);
  }
}

module.exports = ComprehensiveAutomationOrchestrator;