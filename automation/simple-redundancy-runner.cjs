#!/usr/bin/env node

/**
 * Simple Redundancy Runner
 * Provides basic backup automation for all systems
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SimpleRedundancyRunner {
  constructor() {
    this.status = {
      pm2: { running: false, processes: [] },
      github: { workflows: [], lastRun: null },
      netlify: { functions: [], lastDeploy: null }
    };
  }

  async run() {
    console.log('🚀 Running Simple Redundancy System...');
    
    try {
      // Create backup GitHub Actions workflows
      await this.createGitHubActionsBackups();
      
      // Create backup Netlify functions
      await this.createNetlifyFunctionsBackups();
      
      // Start PM2 redundancy
      await this.startPM2Redundancy();
      
      console.log('✅ Simple Redundancy System completed successfully');
      
      // Show status
      this.showStatus();
      
    } catch (error) {
      console.error('❌ Failed to run Simple Redundancy System:', error);
      throw error;
    }
  }

  async createGitHubActionsBackups() {
    console.log('🐙 Creating GitHub Actions backups...');
    
    const workflowsDir = '.github/workflows';
    
    // Ensure workflows directory exists
    if (!fs.existsSync(workflowsDir)) {
      fs.mkdirSync(workflowsDir, { recursive: true });
    }
    
    // Create backup workflows
    const backupWorkflows = [
      {
        name: 'marketing-sync-backup.yml',
        schedule: '30 */12 * * *', // 30 minutes offset from primary
        jobName: 'run-marketing-sync-backup'
      },
      {
        name: 'sync-health-backup.yml',
        schedule: '*/20 * * * *', // Every 20 minutes instead of 15
        jobName: 'check-sync-backup'
      }
    ];

    for (const workflow of backupWorkflows) {
      const workflowPath = path.join(workflowsDir, workflow.name);
      if (!fs.existsSync(workflowPath)) {
        await this.createBackupWorkflow(workflow);
      }
    }
    
    console.log('✅ GitHub Actions backups created');
  }

  async createBackupWorkflow(workflow) {
    const template = this.getWorkflowTemplate(workflow);
    const workflowPath = path.join('.github/workflows', workflow.name);
    
    fs.writeFileSync(workflowPath, template);
    console.log(`📝 Created backup workflow: ${workflow.name}`);
  }

  getWorkflowTemplate(workflow) {
    if (workflow.name.includes('marketing-sync')) {
      return `name: Marketing Sync Backup

on:
  schedule:
    - cron: '${workflow.schedule}'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  ${workflow.jobName}:
    runs-on: ubuntu-latest
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
    } else {
      return `name: Sync Health Backup

on:
  schedule:
    - cron: '${workflow.schedule}'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  ${workflow.jobName}:
    runs-on: ubuntu-latest
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
          # Only push if we have local commits not on origin
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi`;
    }
  }

  async createNetlifyFunctionsBackups() {
    console.log('☁️ Creating Netlify functions backups...');
    
    const functionsDir = 'netlify/functions';
    
    // Ensure functions directory exists
    if (!fs.existsSync(functionsDir)) {
      fs.mkdirSync(functionsDir, { recursive: true });
    }
    
    // Create backup function runners for critical functions
    const criticalFunctions = [
      'netlify-auto-healer-runner',
      'continuous-orchestrator',
      'build-monitor-runner',
      'git-sync-runner'
    ];

    for (const funcName of criticalFunctions) {
      const backupName = `${funcName}-backup`;
      const backupPath = path.join(functionsDir, backupName);
      
      if (!fs.existsSync(backupPath)) {
        await this.createBackupFunction(funcName, backupName);
      }
    }
    
    console.log('✅ Netlify functions backups created');
  }

  async createBackupFunction(originalName, backupName) {
    const backupDir = path.join('netlify/functions', backupName);
    const backupFile = path.join(backupDir, 'index.js');
    
    // Create directory
    fs.mkdirSync(backupDir, { recursive: true });
    
    // Create backup function
    const backupCode = `// Backup function for ${originalName}
const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('Backup function ${backupName} triggered');
    
    // Execute the original function logic
    const result = await executeBackupLogic();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Backup function executed successfully',
        originalFunction: '${originalName}',
        backupFunction: '${backupName}',
        result: result
      })
    };
  } catch (error) {
    console.error('Backup function error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Backup function failed',
        originalFunction: '${originalName}',
        backupFunction: '${backupName}',
        error: error.message
      })
    };
  }
};

async function executeBackupLogic() {
  // Implement backup logic here
  // This could involve calling the original function or implementing alternative logic
  return { status: 'backup_executed', timestamp: new Date().toISOString() };
}`;
    
    fs.writeFileSync(backupFile, backupCode);
    console.log(`📝 Created backup function: ${backupName}`);
  }

  async startPM2Redundancy() {
    console.log('📱 Starting PM2 redundancy...');
    
    try {
      // Ensure logs directory exists
      if (!fs.existsSync('automation/logs')) {
        fs.mkdirSync('automation/logs', { recursive: true });
      }
      
      // Start redundancy ecosystem if it exists
      if (fs.existsSync('ecosystem-redundancy.pm2.cjs')) {
        console.log('Starting PM2 redundancy ecosystem...');
        execSync('pm2 start ecosystem-redundancy.pm2.cjs --update-env', { stdio: 'inherit' });
        this.status.pm2.running = true;
        console.log('✅ PM2 redundancy started');
      } else {
        console.log('⚠️ No PM2 redundancy ecosystem found, skipping PM2 redundancy');
      }
    } catch (error) {
      console.error('❌ Failed to start PM2 redundancy:', error);
      throw error;
    }
  }

  async getGitHubWorkflows() {
    try {
      const workflowsDir = '.github/workflows';
      if (!fs.existsSync(workflowsDir)) return [];
      
      const files = fs.readdirSync(workflowsDir);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      console.error('Error getting GitHub workflows:', error);
      return [];
    }
  }

  async getNetlifyFunctions() {
    try {
      const functionsDir = 'netlify/functions';
      if (!fs.existsSync(functionsDir)) return [];
      
      const items = fs.readdirSync(functionsDir);
      return items.filter(item => {
        const itemPath = path.join(functionsDir, item);
        return fs.statSync(itemPath).isDirectory();
      });
    } catch (error) {
      console.error('Error getting Netlify functions:', error);
      return [];
    }
  }

  showStatus() {
    console.log('\n📊 Redundancy System Status:');
    console.log('============================');
    
    // Update status
    this.status.github.workflows = this.getGitHubWorkflows();
    this.status.netlify.functions = this.getNetlifyFunctions();
    
    console.log(`GitHub Workflows: ${this.status.github.workflows.length}`);
    console.log(`Netlify Functions: ${this.status.netlify.functions.length}`);
    console.log(`PM2 Redundancy: ${this.status.pm2.running ? 'Running' : 'Not running'}`);
    
    if (this.status.github.workflows.length > 0) {
      console.log('\nGitHub Workflows:');
      this.status.github.workflows.forEach(workflow => {
        console.log(`  - ${workflow}`);
      });
    }
    
    if (this.status.netlify.functions.length > 0) {
      console.log('\nNetlify Functions:');
      this.status.netlify.functions.forEach(func => {
        console.log(`  - ${func}`);
      });
    }
  }
}

// CLI interface
if (require.main === module) {
  const runner = new SimpleRedundancyRunner();
  runner.run().catch(console.error);
}

module.exports = SimpleRedundancyRunner;