#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class GitHubActionsUltimateRedundancy {
  constructor() {
    this.config = {
      workflowsDir: ".github/workflows",
      backupDir: ".github/workflows/backups",
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      healthCheckInterval: 60000, // 1 minute
      backupInterval: 300000, // 5 minutes
      maxBackups: 10,
      autoRepair: true,
      logLevel: "INFO"
    };
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.workflowsDir)) {
      fs.mkdirSync(this.config.workflowsDir, { recursive: true });
    }
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logDir = "automation/logs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const logFile = path.join(logDir, `github-actions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error
      });
    });
  }

  async validateWorkflow(workflowPath) {
    try {
      if (!fs.existsSync(workflowPath)) {
        return { valid: false, error: "File does not exist" };
      }

      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { valid: false, error: "Missing required YAML fields" };
      }

      // Check for common syntax issues
      if (content.includes('{{') && !content.includes('}}')) {
        return { valid: false, error: "Unclosed template expression" };
      }

      // Validate cron syntax if present
      const cronMatches = content.match(/cron:\s*['"`]([^'"`]+)['"`]/g);
      if (cronMatches) {
        for (const match of cronMatches) {
          const cron = match.match(/cron:\s*['"`]([^'"`]+)['"`]/)[1];
          if (!this.isValidCron(cron)) {
            return { valid: false, error: `Invalid cron syntax: ${cron}` };
          }
        }
      }

      return { valid: true, content };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  isValidCron(cron) {
    // Basic cron validation
    const parts = cron.split(' ');
    if (parts.length !== 5) return false;
    
    // Check if parts are valid
    for (let i = 0; i < 5; i++) {
      const part = parts[i];
      if (part === '*' || part === '?') continue;
      
      if (i === 0 && !/^(\*|[0-5]?[0-9](-[0-5]?[0-9])?(,\d+)*|\*\/\d+)$/.test(part)) return false; // minute
      if (i === 1 && !/^(\*|[0-1]?[0-9](-[0-1]?[0-9])?(,\d+)*|\*\/\d+)$/.test(part)) return false; // hour
      if (i === 2 && !/^(\*|[1-9]|[12][0-9]|3[01](-[1-9]|[12][0-9]|3[01])?(,\d+)*|\*\/\d+)$/.test(part)) return false; // day
      if (i === 3 && !/^(\*|[1-9]|1[0-2](-[1-9]|1[0-2])?(,\d+)*|\*\/\d+)$/.test(part)) return false; // month
      if (i === 4 && !/^(\*|[0-6](-[0-6])?(,\d+)*|\*\/\d+)$/.test(part)) return false; // day of week
    }
    
    return true;
  }

  async createWorkflowBackup(workflowPath) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = path.basename(workflowPath, '.yml');
      const backupPath = path.join(this.config.backupDir, `${filename}.backup.${timestamp}.yml`);
      
      fs.copyFileSync(workflowPath, backupPath);
      this.log(`✅ Created backup: ${backupPath}`);
      
      // Clean up old backups
      await this.cleanupOldBackups(filename);
      
      return backupPath;
    } catch (error) {
      this.log(`❌ Failed to create backup: ${error.message}`, "ERROR");
      return null;
    }
  }

  async cleanupOldBackups(workflowName) {
    try {
      const files = fs.readdirSync(this.config.backupDir);
      const backups = files
        .filter(file => file.startsWith(workflowName) && file.includes('.backup.'))
        .map(file => ({
          name: file,
          path: path.join(this.config.backupDir, file),
          time: fs.statSync(path.join(this.config.backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);

      if (backups.length > this.config.maxBackups) {
        const toDelete = backups.slice(this.config.maxBackups);
        for (const backup of toDelete) {
          fs.unlinkSync(backup.path);
          this.log(`🗑️ Removed old backup: ${backup.name}`);
        }
      }
    } catch (error) {
      this.log(`❌ Failed to cleanup backups: ${error.message}`, "ERROR");
    }
  }

  async restoreWorkflowFromBackup(workflowPath) {
    try {
      const filename = path.basename(workflowPath, '.yml');
      const files = fs.readdirSync(this.config.backupDir);
      const backups = files
        .filter(file => file.startsWith(filename) && file.includes('.backup.'))
        .map(file => ({
          name: file,
          path: path.join(this.config.backupDir, file),
          time: fs.statSync(path.join(this.config.backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);

      if (backups.length > 0) {
        const latestBackup = backups[0];
        fs.copyFileSync(latestBackup.path, workflowPath);
        this.log(`✅ Restored workflow from backup: ${latestBackup.name}`);
        return true;
      } else {
        this.log(`⚠️ No backup found for: ${filename}`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to restore workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async repairWorkflow(workflowPath) {
    try {
      this.log(`🔧 Attempting to repair workflow: ${workflowPath}`);
      
      // Try to restore from backup first
      if (await this.restoreWorkflowFromBackup(workflowPath)) {
        return true;
      }

      // If no backup, try to recreate basic workflow
      const filename = path.basename(workflowPath, '.yml');
      const basicWorkflow = this.generateBasicWorkflow(filename);
      
      fs.writeFileSync(workflowPath, basicWorkflow);
      this.log(`✅ Recreated basic workflow: ${workflowPath}`);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to repair workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  generateBasicWorkflow(workflowName) {
    const workflows = {
      'marketing-sync': `name: Marketing Sync

on:
  schedule:
    - cron: '0 */12 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-marketing-sync:
    runs-on: ubuntu-latest
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
            git commit -m "chore(marketing): update marketing-sync report"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`,

      'sync-health': `name: Sync Health

on:
  schedule:
    - cron: '*/15 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  check-sync:
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
          fi`,

      'marketing-sync-backup': `name: Marketing Sync Backup

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-marketing-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Create backup
        run: |
          mkdir -p .github/workflows/backups
          cp .github/workflows/marketing-sync.yml .github/workflows/backups/marketing-sync.backup.\$(date +%Y%m%d-%H%M%S).yml

      - name: Commit backup
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add .github/workflows/backups/
          git commit -m "chore(backup): marketing-sync workflow backup" || true`,

      'sync-health-backup': `name: Sync Health Backup

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-sync-health:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Create backup
        run: |
          mkdir -p .github/workflows/backups
          cp .github/workflows/sync-health.yml .github/workflows/backups/sync-health.backup.\$(date +%Y%m%d-%H%M%S).yml

      - name: Commit backup
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add .github/workflows/backups/
          git commit -m "chore(backup): sync-health workflow backup" || true`
    };

    return workflows[workflowName] || `name: ${workflowName}

on:
  workflow_dispatch:

jobs:
  default-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Default step
        run: echo "Workflow ${workflowName} is running"`;
  }

  async checkAllWorkflows() {
    this.log("🔍 Checking all GitHub Actions workflows...");
    
    let allHealthy = true;
    const results = {};

    for (const workflow of this.config.workflows) {
      const workflowPath = path.join(this.config.workflowsDir, workflow);
      const validation = await this.validateWorkflow(workflowPath);
      
      results[workflow] = validation;
      
      if (!validation.valid) {
        allHealthy = false;
        this.log(`❌ Workflow ${workflow} is invalid: ${validation.error}`, "ERROR");
        
        if (this.config.autoRepair) {
          this.log(`🔧 Attempting to repair ${workflow}...`);
          await this.repairWorkflow(workflowPath);
        }
      } else {
        this.log(`✅ Workflow ${workflow} is valid`);
      }
    }

    return { allHealthy, results };
  }

  async createAllBackups() {
    this.log("💾 Creating backups for all workflows...");
    
    const backupResults = {};
    
    for (const workflow of this.config.workflows) {
      const workflowPath = path.join(this.config.workflowsDir, workflow);
      if (fs.existsSync(workflowPath)) {
        const backupPath = await this.createWorkflowBackup(workflowPath);
        backupResults[workflow] = backupPath;
      } else {
        this.log(`⚠️ Workflow not found: ${workflow}`, "WARN");
        backupResults[workflow] = null;
      }
    }

    return backupResults;
  }

  async generateHealthReport() {
    try {
      const workflowCheck = await this.checkAllWorkflows();
      const backupResults = await this.createAllBackups();
      
      const report = {
        timestamp: new Date().toISOString(),
        workflows: {
          status: workflowCheck.allHealthy,
          details: workflowCheck.results
        },
        backups: backupResults,
        system: {
          workflowsDir: this.config.workflowsDir,
          backupDir: this.config.backupDir,
          totalWorkflows: this.config.workflows.length,
          autoRepair: this.config.autoRepair
        }
      };

      const logDir = "automation/logs";
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const reportFile = path.join(logDir, `github-actions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("📊 GitHub Actions health report generated");
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async initializeMonitoring() {
    this.log("🚀 Starting GitHub Actions Ultimate Redundancy System...");
    
    // Initial health check
    await this.checkAllWorkflows();
    
    // Create initial backups
    await this.createAllBackups();
    
    // Set up monitoring intervals
    setInterval(async () => {
      try {
        await this.checkAllWorkflows();
      } catch (error) {
        this.log(`❌ Workflow health check failed: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    setInterval(async () => {
      try {
        await this.createAllBackups();
      } catch (error) {
        this.log(`❌ Backup creation failed: ${error.message}`, "ERROR");
      }
    }, this.config.backupInterval);

    this.log("✅ GitHub Actions Ultimate Redundancy System started successfully");
  }

  async stop() {
    this.log("🛑 Stopping GitHub Actions Ultimate Redundancy System...");
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the system if this file is run directly
if (require.main === module) {
  const system = new GitHubActionsUltimateRedundancy();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = GitHubActionsUltimateRedundancy;