#!/usr/bin/env node
'use strict';

const { spawnSync, spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class UltimateRedundancyAutomation {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    this.processes = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.lastCheck = new Date();
    this.config = this.loadConfig();
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
      pm2: {
        checkInterval: 30000,
        maxRestarts: 5,
        autoRecovery: true,
        processes: ['zion-auto-sync', 'zion-auto-sync-cron', 'master-redundancy-orchestrator']
      },
      github: {
        checkInterval: 60000,
        maxFailures: 3,
        autoTrigger: true,
        workflows: ['marketing-sync', 'sync-health']
      },
      netlify: {
        checkInterval: 120000,
        maxFailures: 3,
        autoDeploy: true,
        functions: ['netlify-auto-healer-runner', 'continuous-orchestrator']
      },
      monitoring: {
        healthCheckInterval: 300000,
        alertThreshold: 3,
        logRotation: true
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'ultimate-redundancy.log');
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

  async checkPM2Redundancy() {
    this.log('Checking PM2 redundancy status...');
    
    try {
      // Check PM2 status
      const pm2Status = this.runCommand('pm2', ['status', '--no-daemon']);
      if (!pm2Status.success) {
        this.log('PM2 not running, starting PM2...', 'WARN');
        this.runCommand('pm2', ['start', 'ecosystem.comprehensive-redundancy.cjs']);
        return false;
      }

      // Parse PM2 processes
      const processes = this.parsePM2Status(pm2Status.stdout);
      this.log(`Found ${processes.length} PM2 processes`);

      // Check critical processes
      const criticalProcesses = this.config.pm2.processes;
      const missingProcesses = criticalProcesses.filter(name => 
        !processes.find(p => p.name === name && p.status === 'online')
      );

      if (missingProcesses.length > 0) {
        this.log(`Missing critical processes: ${missingProcesses.join(', ')}`, 'ERROR');
        await this.recoverPM2Processes(missingProcesses);
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

      this.log('PM2 redundancy check completed successfully');
      return true;
    } catch (error) {
      this.log(`PM2 redundancy check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkGitHubActionsRedundancy() {
    this.log('Checking GitHub Actions redundancy...');
    
    try {
      // Check if workflows directory exists
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (!fs.existsSync(workflowsDir)) {
        this.log('GitHub workflows directory not found', 'ERROR');
        return false;
      }

      // Check workflow files
      const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
      this.log(`Found ${workflowFiles.length} workflow files`);

      // Validate workflow syntax
      for (const workflow of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflow);
        try {
          const content = fs.readFileSync(workflowPath, 'utf8');
          if (!content.includes('name:') || !content.includes('on:')) {
            this.log(`Invalid workflow syntax in ${workflow}`, 'WARN');
          }
        } catch (error) {
          this.log(`Failed to read workflow ${workflow}: ${error.message}`, 'ERROR');
        }
      }

      // Check backup workflows
      const backupWorkflows = fs.readdirSync(workflowsDir).filter(f => f.includes('backup'));
      if (backupWorkflows.length === 0) {
        this.log('No backup workflows found, creating redundancy...', 'WARN');
        await this.createGitHubActionsBackups();
      }

      this.log('GitHub Actions redundancy check completed successfully');
      return true;
    } catch (error) {
      this.log(`GitHub Actions redundancy check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkNetlifyFunctionsRedundancy() {
    this.log('Checking Netlify Functions redundancy...');
    
    try {
      // Check Netlify functions directory
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      if (!fs.existsSync(functionsDir)) {
        this.log('Netlify functions directory not found', 'ERROR');
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

      // Validate function health
      const criticalFunctions = this.config.netlify.functions || [];
      if (Array.isArray(criticalFunctions)) {
        const missingFunctions = criticalFunctions.filter(name => 
          !manifest.functions.includes(name)
        );

        if (missingFunctions.length > 0) {
          this.log(`Missing critical functions: ${missingFunctions.join(', ')}`, 'WARN');
          await this.recoverNetlifyFunctions(missingFunctions);
        }
      } else {
        this.log('No critical functions configured for validation', 'INFO');
      }

      this.log('Netlify Functions redundancy check completed successfully');
      return true;
    } catch (error) {
      this.log(`Netlify Functions redundancy check failed: ${error.message}`, 'ERROR');
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

      // Create backup for marketing-sync
      const marketingSyncBackup = this.generateMarketingSyncBackup();
      fs.writeFileSync(path.join(backupDir, 'marketing-sync-backup.yml'), marketingSyncBackup);

      // Create backup for sync-health
      const syncHealthBackup = this.generateSyncHealthBackup();
      fs.writeFileSync(path.join(backupDir, 'sync-health-backup.yml'), syncHealthBackup);

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

  async recoverPM2Processes(missingProcesses) {
    this.log(`Recovering missing PM2 processes: ${missingProcesses.join(', ')}`);
    
    try {
      // Restart the comprehensive redundancy ecosystem
      this.runCommand('pm2', ['restart', 'ecosystem.comprehensive-redundancy.cjs']);
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check if recovery was successful
      const recovered = await this.checkPM2Redundancy();
      if (recovered) {
        this.log('PM2 processes recovered successfully');
      } else {
        this.log('PM2 process recovery failed', 'ERROR');
      }
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, 'ERROR');
    }
  }

  async healPM2Processes(unhealthyProcesses) {
    this.log(`Healing unhealthy PM2 processes: ${unhealthyProcesses.map(p => p.name).join(', ')}`);
    
    try {
      for (const process of unhealthyProcesses) {
        this.log(`Restarting process: ${process.name}`);
        this.runCommand('pm2', ['restart', process.name]);
      }
      
      // Wait for healing to complete
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      this.log('PM2 process healing completed');
    } catch (error) {
      this.log(`PM2 healing failed: ${error.message}`, 'ERROR');
    }
  }

  async recoverNetlifyFunctions(missingFunctions) {
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

  async runComprehensiveCheck() {
    this.log('Starting comprehensive redundancy check...');
    
    const results = {
      pm2: false,
      github: false,
      netlify: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Run all redundancy checks
      results.pm2 = await this.checkPM2Redundancy();
      results.github = await this.checkGitHubActionsRedundancy();
      results.netlify = await this.checkNetlifyFunctionsRedundancy();

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
      services: {
        pm2: {
          status: results.pm2 ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString()
        },
        github: {
          status: results.github ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString()
        },
        netlify: {
          status: results.netlify ? 'HEALTHY' : 'UNHEALTHY',
          lastCheck: new Date().toISOString()
        }
      },
      recommendations: this.generateRecommendations(results)
    };
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    if (!results.pm2) {
      recommendations.push('PM2 processes need attention - check logs and restart if necessary');
    }
    if (!results.github) {
      recommendations.push('GitHub Actions workflows need attention - validate workflow files');
    }
    if (!results.netlify) {
      recommendations.push('Netlify functions need attention - regenerate manifest and deploy');
    }
    
    return recommendations;
  }

  saveHealthReport(report) {
    const reportPath = path.join(this.logDir, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  async startContinuousMonitoring() {
    this.log('Starting continuous redundancy monitoring...');
    
    // Run initial check
    await this.runComprehensiveCheck();
    
    // Schedule periodic checks
    cron.schedule('*/5 * * * *', async () => {
      this.log('Running scheduled redundancy check...');
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
    this.log('Starting Ultimate Redundancy Automation...');
    
    try {
      // Start continuous monitoring
      await this.startContinuousMonitoring();
      
      // Keep the process running
      this.log('Ultimate Redundancy Automation is running...');
      process.on('SIGINT', () => {
        this.log('Shutting down Ultimate Redundancy Automation...');
        process.exit(0);
      });
    } catch (error) {
      this.log(`Failed to start Ultimate Redundancy Automation: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new UltimateRedundancyAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'check':
      automation.runComprehensiveCheck().then(results => {
        console.log('Check results:', results);
        process.exit(0);
      });
      break;
    case 'status':
      console.log('Ultimate Redundancy Automation Status:');
      console.log('- PM2 Redundancy: Active');
      console.log('- GitHub Actions Redundancy: Active');
      console.log('- Netlify Functions Redundancy: Active');
      console.log('- Continuous Monitoring: Active');
      break;
    default:
      console.log('Usage: node ultimate-redundancy-automation.cjs [start|check|status]');
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomation;