#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cron = require('node-cron');

class EnhancedGitHubActionsRedundancyManager {
  constructor() {
    // Use a more robust path resolution
    this.baseDir = process.cwd() || '.';
    this.logDir = path.resolve(this.baseDir, 'automation', 'logs');
    this.workflowsDir = path.resolve(this.baseDir, '.github', 'workflows');
    this.backupWorkflowsDir = path.resolve(this.baseDir, '.github', 'workflows', 'backup');
    
    this.ensureLogDir();
    
    this.primaryWorkflows = [
      'marketing-sync.yml',
      'sync-health.yml'
    ];
    
    this.backupWorkflows = [
      'marketing-sync-backup.yml',
      'sync-health-backup.yml'
    ];
    
    this.workflowTriggers = new Map([
      ['marketing-sync', { cron: '0 */12 * * *', schedule: 'every 12 hours' }],
      ['sync-health', { cron: '*/15 * * * *', schedule: 'every 15 minutes' }]
    ]);
    
    this.healthStatus = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
  }

  ensureLogDir() {
    try {
      console.log('Debug: logDir =', this.logDir);
      console.log('Debug: backupWorkflowsDir =', this.backupWorkflowsDir);
      
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }
      
      if (!fs.existsSync(this.backupWorkflowsDir)) {
        fs.mkdirSync(this.backupWorkflowsDir, { recursive: true });
      }
    } catch (error) {
      console.error('Error in ensureLogDir:', error.message);
      throw error;
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [GITHUB-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'github-actions-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workflowsDir, workflowName);
      const backupPath = path.join(this.backupWorkflowsDir, workflowName.replace('.yml', '-backup.yml'));
      
      if (!fs.existsSync(workflowPath)) {
        return { status: 'not_found', health: 'unhealthy' };
      }
      
      // Check if workflow file is valid YAML
      const workflowContent = fs.readFileSync(workflowPath, 'utf8');
      
      const health = {
        status: 'exists',
        health: 'healthy',
        size: workflowContent.length,
        lastModified: fs.statSync(workflowPath).mtime,
        hasValidStructure: this.validateWorkflowStructure(workflowContent)
      };
      
      // Check if backup exists
      if (fs.existsSync(backupPath)) {
        health.hasBackup = true;
        health.backupSize = fs.readFileSync(backupPath, 'utf8').length;
      } else {
        health.hasBackup = false;
        health.health = 'degraded';
      }
      
      // Validate workflow structure
      if (!health.hasValidStructure) {
        health.health = 'unhealthy';
      }
      
      return health;
    } catch (error) {
      this.log(`Failed to check health for workflow ${workflowName}: ${error.message}`, 'ERROR');
      return { status: 'error', health: 'unhealthy', error: error.message };
    }
  }

  validateWorkflowStructure(content) {
    try {
      // Basic YAML structure validation
      const requiredSections = ['name:', 'on:', 'jobs:'];
      const hasRequiredSections = requiredSections.every(section => content.includes(section));
      
      if (!hasRequiredSections) {
        return false;
      }
      
      // Check for valid triggers
      const hasValidTriggers = content.includes('schedule:') || content.includes('workflow_dispatch:');
      
      return hasValidTriggers;
    } catch (error) {
      return false;
    }
  }

  async createBackupWorkflows() {
    this.log('Creating backup GitHub Actions workflows...');
    
    for (const workflowName of this.primaryWorkflows) {
      try {
        const sourcePath = path.join(this.workflowsDir, workflowName);
        const backupName = workflowName.replace('.yml', '-backup.yml');
        const backupPath = path.join(this.backupWorkflowsDir, backupName);
        
        if (!fs.existsSync(sourcePath)) {
          this.log(`Source workflow ${workflowName} not found, skipping backup`, 'WARN');
          continue;
        }
        
        if (fs.existsSync(backupPath)) {
          this.log(`Backup workflow ${backupName} already exists`);
          continue;
        }
        
        // Read source workflow
        let workflowContent = fs.readFileSync(sourcePath, 'utf8');
        
        // Modify backup workflow with different schedules and enhanced reliability
        workflowContent = this.enhanceWorkflowForBackup(workflowContent, workflowName);
        
        // Write backup workflow
        fs.writeFileSync(backupPath, workflowContent);
        
        this.log(`Successfully created backup workflow: ${backupName}`);
        
      } catch (error) {
        this.log(`Failed to create backup workflow for ${workflowName}: ${error.message}`, 'ERROR');
      }
    }
  }

  enhanceWorkflowForBackup(content, workflowName) {
    try {
      let enhancedContent = content;
      
      // Add backup identifier to name
      enhancedContent = enhancedContent.replace(
        /name:\s*([^\n]+)/,
        'name: $1 (Backup)'
      );
      
      // Modify schedule to run at different times (avoid conflicts)
      if (workflowName.includes('marketing-sync')) {
        // Run 6 hours offset from primary (6 AM and 6 PM)
        enhancedContent = enhancedContent.replace(
          /cron:\s*'0 \*\/12 \* \* \*'/,
          "cron: '0 6,18 * * *'"
        );
      } else if (workflowName.includes('sync-health')) {
        // Run 7.5 minutes offset from primary (every 15 minutes, offset by 7.5)
        enhancedContent = enhancedContent.replace(
          /cron:\s*'\*\/15 \* \* \* \*'/,
          "cron: '7,22,37,52 * * * *'"
        );
      }
      
      // Add enhanced error handling and retry logic
      if (!enhancedContent.includes('continue-on-error')) {
        enhancedContent = enhancedContent.replace(
          /jobs:/,
          'jobs:'
        );
        
        // Add retry logic to the job
        const jobName = this.extractJobName(enhancedContent);
        if (jobName) {
          enhancedContent = enhancedContent.replace(
            new RegExp(`(${jobName}:\\s*\\n\\s*runs-on:)`, 'g'),
            `$1\n    strategy:\n      max-parallel: 1\n      fail-fast: false\n    continue-on-error: true`
          );
        }
      }
      
      // Add backup workflow specific environment variables
      if (!enhancedContent.includes('BACKUP_MODE')) {
        enhancedContent = enhancedContent.replace(
          /env:/,
          'env:\n          BACKUP_MODE: "true"'
        );
      }
      
      return enhancedContent;
    } catch (error) {
      this.log(`Error enhancing workflow ${workflowName}: ${error.message}`, 'ERROR');
      return content; // Return original if enhancement fails
    }
  }

  extractJobName(content) {
    const match = content.match(/jobs:\s*\n\s*(\w+):/);
    return match ? match[1] : null;
  }

  async createEnhancedWorkflows() {
    this.log('Creating enhanced GitHub Actions workflows...');
    
    for (const workflowName of this.primaryWorkflows) {
      try {
        const sourcePath = path.join(this.workflowsDir, workflowName);
        const enhancedName = workflowName.replace('.yml', '-enhanced.yml');
        const enhancedPath = path.join(this.workflowsDir, enhancedName);
        
        if (!fs.existsSync(sourcePath)) {
          this.log(`Source workflow ${workflowName} not found, skipping enhancement`, 'WARN');
          continue;
        }
        
        if (fs.existsSync(enhancedPath)) {
          this.log(`Enhanced workflow ${enhancedName} already exists`);
          continue;
        }
        
        // Read source workflow
        let workflowContent = fs.readFileSync(sourcePath, 'utf8');
        
        // Enhance with additional reliability features
        workflowContent = this.enhanceWorkflowWithReliability(workflowContent, workflowName);
        
        // Write enhanced workflow
        fs.writeFileSync(enhancedPath, workflowContent);
        
        this.log(`Successfully created enhanced workflow: ${enhancedName}`);
        
      } catch (error) {
        this.log(`Failed to create enhanced workflow for ${workflowName}: ${error.message}`, 'ERROR');
      }
    }
  }

  enhanceWorkflowWithReliability(content, workflowName) {
    try {
      let enhancedContent = content;
      
      // Add enhanced identifier to name
      enhancedContent = enhancedContent.replace(
        /name:\s*([^\n]+)/,
        'name: $1 (Enhanced)'
      );
      
      // Add timeout and retry logic
      if (!enhancedContent.includes('timeout-minutes')) {
        enhancedContent = enhancedContent.replace(
          /runs-on:/,
          'runs-on: ubuntu-latest\n    timeout-minutes: 30'
        );
      }
      
      // Add concurrency control to prevent multiple runs
      if (!enhancedContent.includes('concurrency:')) {
        enhancedContent = enhancedContent.replace(
          /on:/,
          'on:\n  concurrency:\n    group: ${{ github.workflow }}-${{ github.ref }}\n    cancel-in-progress: true'
        );
      }
      
      // Add enhanced error handling
      if (!enhancedContent.includes('continue-on-error')) {
        enhancedContent = enhancedContent.replace(
          /jobs:/,
          'jobs:'
        );
        
        const jobName = this.extractJobName(enhancedContent);
        if (jobName) {
          enhancedContent = enhancedContent.replace(
            new RegExp(`(${jobName}:\\s*\\n\\s*runs-on:)`, 'g'),
            `$1\n    strategy:\n      max-parallel: 1\n      fail-fast: false\n    continue-on-error: false`
          );
        }
      }
      
      return enhancedContent;
    } catch (error) {
      this.log(`Error enhancing workflow ${workflowName}: ${error.message}`, 'ERROR');
      return content;
    }
  }

  async monitorAndRecover() {
    this.log('Starting GitHub Actions redundancy monitoring and recovery...');
    
    // Monitor workflows every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.performHealthCheck();
    });
    
    // Full system recovery check every hour
    cron.schedule('0 * * * *', async () => {
      await this.performFullRecovery();
    });
  }

  async performHealthCheck() {
    this.log('Performing health check on all GitHub Actions workflows...');
    
    for (const workflowName of this.primaryWorkflows) {
      try {
        const health = await this.checkWorkflowHealth(workflowName);
        this.healthStatus.set(workflowName, health);
        
        if (health.health === 'unhealthy') {
          this.log(`Workflow ${workflowName} is unhealthy, attempting recovery...`);
          await this.attemptRecovery(workflowName);
        }
      } catch (error) {
        this.log(`Error checking health for workflow ${workflowName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async attemptRecovery(workflowName) {
    const attempts = this.recoveryAttempts.get(workflowName) || 0;
    
    if (attempts >= this.maxRecoveryAttempts) {
      this.log(`Max recovery attempts reached for ${workflowName}, escalating...`, 'WARN');
      await this.escalateRecovery(workflowName);
      return;
    }
    
    this.log(`Attempting recovery for workflow ${workflowName} (attempt ${attempts + 1}/${this.maxRecoveryAttempts})`);
    
    try {
      // Try to recreate the workflow from backup
      const backupPath = path.join(this.backupWorkflowsDir, workflowName.replace('.yml', '-backup.yml'));
      
      if (fs.existsSync(backupPath)) {
        const backupContent = fs.readFileSync(backupPath, 'utf8');
        const workflowPath = path.join(this.workflowsDir, workflowName);
        
        // Restore from backup
        fs.writeFileSync(workflowPath, backupContent);
        
        this.log(`Successfully restored workflow ${workflowName} from backup`);
        this.recoveryAttempts.set(workflowName, 0);
      } else {
        this.log(`No backup found for workflow ${workflowName}`, 'ERROR');
        this.recoveryAttempts.set(workflowName, attempts + 1);
      }
    } catch (error) {
      this.log(`Error during recovery for workflow ${workflowName}: ${error.message}`, 'ERROR');
      this.recoveryAttempts.set(workflowName, attempts + 1);
    }
  }

  async escalateRecovery(workflowName) {
    this.log(`Escalating recovery for workflow ${workflowName}...`);
    
    try {
      // Create a completely new workflow with basic functionality
      const basicWorkflow = this.createBasicWorkflow(workflowName);
      const workflowPath = path.join(this.workflowsDir, workflowName);
      
      fs.writeFileSync(workflowPath, basicWorkflow);
      
      this.log(`Successfully created basic workflow for ${workflowName}`);
      this.recoveryAttempts.set(workflowName, 0);
    } catch (error) {
      this.log(`Error during escalated recovery for workflow ${workflowName}: ${error.message}`, 'ERROR');
    }
  }

  createBasicWorkflow(workflowName) {
    if (workflowName.includes('marketing-sync')) {
      return `name: Marketing Sync (Recovery)

on:
  schedule:
    - cron: '0 */12 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-marketing-sync:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run marketing-sync
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
            git commit -m "chore(marketing): update marketing-sync report (recovery)"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`;
    } else if (workflowName.includes('sync-health')) {
      return `name: Sync Health (Recovery)

on:
  schedule:
    - cron: '*/15 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  check-sync:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run pm2-auto-sync (safe mode)
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
    
    return `name: Basic Recovery Workflow

on:
  workflow_dispatch:

jobs:
  recovery:
    runs-on: ubuntu-latest
    steps:
      - name: Recovery
        run: echo "Recovery workflow placeholder"`;
  }

  async performFullRecovery() {
    this.log('Performing full system recovery check...');
    
    // Check if any workflows are missing or corrupted
    for (const workflowName of this.primaryWorkflows) {
      const health = await this.checkWorkflowHealth(workflowName);
      
      if (health.status === 'not_found' || health.health === 'unhealthy') {
        this.log(`Workflow ${workflowName} needs recovery, recreating...`);
        await this.escalateRecovery(workflowName);
      }
    }
  }

  async getSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      overallHealth: 'healthy',
      workflows: {},
      recoveryStats: {
        totalAttempts: 0,
        successfulRecoveries: 0,
        failedRecoveries: 0
      }
    };
    
    // Get status for all workflows
    for (const workflowName of this.primaryWorkflows) {
      const health = await this.checkWorkflowHealth(workflowName);
      status.workflows[workflowName] = health;
      
      if (health.health === 'unhealthy') {
        status.overallHealth = 'degraded';
      }
    }
    
    // Calculate recovery stats
    for (const [workflowName, attempts] of this.recoveryAttempts) {
      status.recoveryStats.totalAttempts += attempts;
      if (attempts === 0) {
        status.recoveryStats.successfulRecoveries++;
      } else {
        status.recoveryStats.failedRecoveries++;
      }
    }
    
    return status;
  }

  async start() {
    this.log('Starting Enhanced GitHub Actions Redundancy Manager...');
    
    try {
      // Create backup workflows
      await this.createBackupWorkflows();
      
      // Create enhanced workflows
      await this.createEnhancedWorkflows();
      
      // Start monitoring
      await this.monitorAndRecover();
      
      this.log('Enhanced GitHub Actions Redundancy Manager started successfully');
      
      // Keep the process alive
      setInterval(() => {
        // Heartbeat
      }, 60000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced GitHub Actions Redundancy Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Export for use in other modules
module.exports = { EnhancedGitHubActionsRedundancyManager };

// If run directly, start the manager
if (require.main === module) {
  const manager = new EnhancedGitHubActionsRedundancyManager();
  manager.start().catch(error => {
    console.error('Failed to start Enhanced GitHub Actions Redundancy Manager:', error);
    process.exit(1);
  });
}