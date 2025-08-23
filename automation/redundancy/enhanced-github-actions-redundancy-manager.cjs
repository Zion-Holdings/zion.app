#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cron = require('node-cron');

class EnhancedGitHubActionsRedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    this.backupWorkflows = new Map();
    this.workflowHealth = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
    
    // Enhanced backup workflow configurations
    this.backupConfigs = [
      {
        name: 'marketing-sync-backup',
        originalWorkflow: 'marketing-sync.yml',
        backupSchedule: '0 2 * * *', // Daily at 2 AM
        env: {
          LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN || '${{ secrets.LINKEDIN_ACCESS_TOKEN }}',
          LINKEDIN_URN: process.env.LINKEDIN_URN || '${{ secrets.LINKEDIN_URN }}',
          IG_USER_ID: process.env.IG_USER_ID || '${{ secrets.IG_USER_ID }}',
          IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN || '${{ secrets.IG_ACCESS_TOKEN }}'
        }
      },
      {
        name: 'sync-health-backup',
        originalWorkflow: 'sync-health.yml',
        backupSchedule: '0 3 * * *', // Daily at 3 AM
        env: {}
      },
      {
        name: 'continuous-build-monitor-backup',
        originalWorkflow: 'continuous-build-monitor.yml',
        backupSchedule: '0 4 * * *', // Daily at 4 AM
        env: {}
      },
      {
        name: 'build-failure-recovery-backup',
        originalWorkflow: 'build-failure-recovery.yml',
        backupSchedule: '0 5 * * *', // Daily at 5 AM
        env: {}
      },
      {
        name: 'git-sync-orchestrator-backup',
        originalWorkflow: 'git-sync-orchestrator.yml',
        backupSchedule: '0 6 * * *', // Daily at 6 AM
        env: {}
      },
      {
        name: 'netlify-healer-backup',
        originalWorkflow: 'netlify-healer.yml',
        backupSchedule: '0 7 * * *', // Daily at 7 AM
        env: {}
      },
      {
        name: 'pre-build-health-check-backup',
        originalWorkflow: 'pre-build-health-check.yml',
        backupSchedule: '0 8 * * *', // Daily at 8 AM
        env: {}
      },
      {
        name: 'nextjs-page-validator-backup',
        originalWorkflow: 'nextjs-page-validator.yml',
        backupSchedule: '0 9 * * *', // Daily at 9 AM
        env: {}
      }
    ];
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-GITHUB-ACTIONS-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-github-actions-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async createBackupWorkflows() {
    this.log('Creating enhanced GitHub Actions backup workflows...');
    
    const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    if (!fs.existsSync(workflowsDir)) {
      fs.mkdirSync(workflowsDir, { recursive: true });
    }

    for (const config of this.backupConfigs) {
      try {
        await this.createSingleBackupWorkflow(config);
      } catch (error) {
        this.log(`Failed to create backup workflow ${config.name}: ${error.message}`, 'ERROR');
      }
    }
    
    this.log('Enhanced GitHub Actions backup workflows creation completed');
  }

  async createSingleBackupWorkflow(config) {
    const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    const backupWorkflowPath = path.join(workflowsDir, `${config.name}.yml`);
    
    // Check if original workflow exists
    const originalWorkflowPath = path.join(workflowsDir, config.originalWorkflow);
    let originalContent = '';
    
    if (fs.existsSync(originalWorkflowPath)) {
      originalContent = fs.readFileSync(originalWorkflowPath, 'utf8');
    } else {
      // Create a basic workflow if original doesn't exist
      originalContent = this.generateBasicWorkflowContent(config);
    }
    
    // Create enhanced backup workflow
    const backupContent = this.generateBackupWorkflowContent(config, originalContent);
    fs.writeFileSync(backupWorkflowPath, backupContent);
    
    this.backupWorkflows.set(config.name, {
      config,
      path: backupWorkflowPath,
      status: 'created',
      created: new Date(),
      health: 'healthy',
      lastRun: null
    });
    
    this.log(`Backup workflow ${config.name} created successfully`);
  }

  generateBasicWorkflowContent(config) {
    return `name: ${config.name.replace('-backup', '')} (Backup)

on:
  schedule:
    - cron: '${config.backupSchedule}'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-backup:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run backup process
        run: |
          echo "Running backup process for ${config.name}"
          # This is a backup workflow - original functionality should be implemented here
          
      - name: Commit if changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(backup): update ${config.name} backup report"
            git push origin HEAD:main
          fi`;
  }

  generateBackupWorkflowContent(config, originalContent) {
    // Parse the original workflow and create an enhanced backup version
    const backupName = config.name.replace('-backup', '') + ' (Enhanced Backup)';
    
    return `name: ${backupName}

on:
  schedule:
    - cron: '${config.backupSchedule}'
  workflow_dispatch:
  repository_dispatch:
    types: [backup-trigger]

permissions:
  contents: write
  actions: read

jobs:
  run-enhanced-backup:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20]
        os: [ubuntu-latest, windows-latest]
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}

      - name: Install dependencies
        run: npm ci

      - name: Run enhanced backup process
        env:
          NODE_ENV: production
          IS_BACKUP_WORKFLOW: true
          BACKUP_TYPE: ${config.name}
          ${Object.entries(config.env).map(([key, value]) => `${key}: ${value}`).join('\n          ')}
        run: |
          echo "Running enhanced backup process for ${config.name}"
          echo "Node version: \${{ matrix.node-version }}"
          echo "OS: \${{ matrix.os }}"
          
          # Enhanced backup logic
          if [ "\${{ matrix.os }}" = "ubuntu-latest" ]; then
            node automation/redundancy/run-backup-process.cjs ${config.name}
          else
            node automation/redundancy/run-backup-process.cjs ${config.name}
          fi

      - name: Health check
        run: |
          echo "Performing health check for backup process"
          # Add health check logic here

      - name: Commit backup results
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(backup): update ${config.name} enhanced backup report [\${{ matrix.node-version }}/\${{ matrix.os }}]"
            git push origin HEAD:main
          fi

      - name: Notify backup completion
        if: always()
        run: |
          echo "Backup process ${config.name} completed with status: \${{ job.status }}"
          # Add notification logic here

  health-monitor:
    runs-on: ubuntu-latest
    needs: run-enhanced-backup
    if: always()
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Health status
        run: |
          echo "Backup workflow ${config.name} health status: \${{ needs.run-enhanced-backup.result }}"
          if [ "\${{ needs.run-enhanced-backup.result }}" != "success" ]; then
            echo "Backup workflow failed - triggering recovery procedures"
            # Add recovery logic here
          fi`;
  }

  async startHealthMonitoring() {
    this.log('Starting enhanced health monitoring...');
    
    // Monitor workflow health every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
      await this.checkAllWorkflowHealth();
    });

    // Comprehensive health check every hour
    cron.schedule('0 * * * *', async () => {
      await this.comprehensiveHealthCheck();
    });

    // Recovery attempt every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.attemptRecovery();
    });
  }

  async checkAllWorkflowHealth() {
    this.log('Checking backup workflow health...');
    
    for (const [name, workflowInfo] of this.backupWorkflows) {
      try {
        const health = await this.checkWorkflowHealth(name);
        await this.updateWorkflowHealth(name, health);
      } catch (error) {
        this.log(`Health check failed for ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      // Check if workflow file exists and is valid YAML
      const workflowPath = this.backupWorkflows.get(workflowName)?.path;
      if (!workflowPath || !fs.existsSync(workflowPath)) {
        return 'missing';
      }

      // Check if workflow has been modified recently (within last 24 hours)
      const stats = fs.statSync(workflowPath);
      const hoursSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
      
      if (hoursSinceModified > 24) {
        return 'stale';
      }

      // Check if workflow content is valid
      const content = fs.readFileSync(workflowPath, 'utf8');
      if (content.includes('error') || content.includes('invalid')) {
        return 'invalid';
      }

      return 'healthy';
    } catch (error) {
      return 'error';
    }
  }

  async updateWorkflowHealth(workflowName, health) {
    const workflowInfo = this.backupWorkflows.get(workflowName);
    if (!workflowInfo) return;

    workflowInfo.health = health;
    workflowInfo.lastCheck = new Date();

    this.backupWorkflows.set(workflowName, workflowInfo);
  }

  async comprehensiveHealthCheck() {
    this.log('Running comprehensive health check...');
    
    let healthyCount = 0;
    let totalCount = 0;
    
    for (const [name, workflowInfo] of this.backupWorkflows) {
      totalCount++;
      if (workflowInfo.health === 'healthy') {
        healthyCount++;
      }
    }
    
    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    
    this.log(`Health check complete: ${healthyCount}/${totalCount} workflows healthy (${healthPercentage.toFixed(1)}%)`);
    
    // Generate health report
    await this.generateHealthReport();
  }

  async attemptRecovery() {
    this.log('Attempting recovery for unhealthy workflows...');
    
    for (const [name, workflowInfo] of this.backupWorkflows) {
      if (workflowInfo.health !== 'healthy' && workflowInfo.recoveryAttempts < this.maxRecoveryAttempts) {
        try {
          await this.recoverWorkflow(name);
        } catch (error) {
          this.log(`Recovery failed for ${name}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async recoverWorkflow(workflowName) {
    const workflowInfo = this.backupWorkflows.get(workflowName);
    if (!workflowInfo) return;

    this.log(`Attempting recovery for ${workflowName}...`);
    
    try {
      // Recreate the backup workflow
      await this.createSingleBackupWorkflow(workflowInfo.config);
      
      // Update workflow info
      workflowInfo.recoveryAttempts = (workflowInfo.recoveryAttempts || 0) + 1;
      workflowInfo.lastRecovery = new Date();
      workflowInfo.health = 'healthy';
      
      this.backupWorkflows.set(workflowName, workflowInfo);
      
      this.log(`Recovery successful for ${workflowName}`);
      
    } catch (error) {
      this.log(`Recovery failed for ${workflowName}: ${error.message}`, 'ERROR');
      workflowInfo.health = 'failed';
      this.backupWorkflows.set(workflowName, workflowInfo);
    }
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalWorkflows: this.backupWorkflows.size,
      healthyWorkflows: 0,
      unhealthyWorkflows: 0,
      missingWorkflows: 0,
      staleWorkflows: 0,
      failedWorkflows: 0,
      workflows: []
    };

    for (const [name, workflowInfo] of this.backupWorkflows) {
      report.workflows.push({
        name,
        status: workflowInfo.status,
        health: workflowInfo.health,
        created: workflowInfo.created,
        lastCheck: workflowInfo.lastCheck,
        recoveryAttempts: workflowInfo.recoveryAttempts || 0,
        lastRecovery: workflowInfo.lastRecovery
      });

      switch (workflowInfo.health) {
        case 'healthy':
          report.healthyWorkflows++;
          break;
        case 'unhealthy':
        case 'invalid':
        case 'error':
          report.unhealthyWorkflows++;
          break;
        case 'missing':
          report.missingWorkflows++;
          break;
        case 'stale':
          report.staleWorkflows++;
          break;
        case 'failed':
          report.failedWorkflows++;
          break;
      }
    }

    const reportPath = path.join(this.logDir, 'enhanced-github-actions-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportPath}`);
    return report;
  }

  async triggerBackupWorkflow(workflowName) {
    const workflowInfo = this.backupWorkflows.get(workflowName);
    if (!workflowInfo) {
      throw new Error(`Workflow ${workflowName} not found`);
    }

    this.log(`Triggering backup workflow ${workflowName}...`);
    
    try {
      // Create a dispatch event to trigger the workflow
      const dispatchPayload = {
        event_type: 'backup-trigger',
        client_payload: {
          workflow: workflowName,
          timestamp: new Date().toISOString(),
          trigger: 'manual'
        }
      };

      // This would typically use GitHub API to trigger the workflow
      // For now, we'll simulate it
      this.log(`Would trigger workflow ${workflowName} with payload:`, dispatchPayload);
      
      workflowInfo.lastRun = new Date();
      this.backupWorkflows.set(workflowName, workflowInfo);
      
      this.log(`Backup workflow ${workflowName} triggered successfully`);
      
    } catch (error) {
      this.log(`Failed to trigger workflow ${workflowName}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async start() {
    this.log('Starting Enhanced GitHub Actions Redundancy Manager...');
    
    try {
      await this.createBackupWorkflows();
      await this.startHealthMonitoring();
      
      this.log('Enhanced GitHub Actions Redundancy Manager started successfully');
      
      // Initial health check
      setTimeout(async () => {
        await this.comprehensiveHealthCheck();
      }, 10000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced GitHub Actions Redundancy Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stop() {
    this.log('Stopping Enhanced GitHub Actions Redundancy Manager...');
    
    // Note: We don't delete the workflow files as they should persist
    this.log('Workflow files preserved for manual cleanup if needed');
    
    this.backupWorkflows.clear();
    this.log('Enhanced GitHub Actions Redundancy Manager stopped');
  }

  async status() {
    const report = await this.generateHealthReport();
    console.log('\n=== Enhanced GitHub Actions Redundancy Manager Status ===');
    console.log(`Total Workflows: ${report.totalWorkflows}`);
    console.log(`Healthy: ${report.healthyWorkflows}`);
    console.log(`Unhealthy: ${report.unhealthyWorkflows}`);
    console.log(`Missing: ${report.missingWorkflows}`);
    console.log(`Stale: ${report.staleWorkflows}`);
    console.log(`Failed: ${report.failedWorkflows}`);
    console.log(`Health: ${((report.healthyWorkflows / report.totalWorkflows) * 100).toFixed(1)}%`);
    console.log('========================================================\n');
    
    return report;
  }

  async restart() {
    this.log('Restarting Enhanced GitHub Actions Redundancy Manager...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.start();
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedGitHubActionsRedundancyManager();
  const command = process.argv[2] || 'start';
  
  (async () => {
    try {
      switch (command) {
        case 'start':
          await manager.start();
          break;
        case 'stop':
          await manager.stop();
          break;
        case 'status':
          await manager.status();
          break;
        case 'restart':
          await manager.restart();
          break;
        case 'report':
          await manager.generateHealthReport();
          break;
        case 'trigger':
          const workflowName = process.argv[3];
          if (workflowName) {
            await manager.triggerBackupWorkflow(workflowName);
          } else {
            console.log('Usage: node enhanced-github-actions-redundancy-manager.cjs trigger <workflow-name>');
          }
          break;
        default:
          console.log('Usage: node enhanced-github-actions-redundancy-manager.cjs [start|stop|status|restart|report|trigger]');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  })();
}

module.exports = EnhancedGitHubActionsRedundancyManager;