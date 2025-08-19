#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveGitHubActionsRedundancy {
  constructor() {
    this.config = {
      workflowsDir: ".github/workflows",
      primaryWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      backupWorkflows: [
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      criticalWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      healthCheckInterval: 60000,
      maxFailureThreshold: 5,
      logDir: "automation/logs",
      gitConfig: {
        userName: "github-actions[bot]",
        userEmail: "41898282+github-actions[bot]@users.noreply.github.com"
      }
    };
    
    this.stats = {
      totalFailures: 0,
      workflowFailures: {},
      lastHealthCheck: null,
      lastRecovery: null,
      systemHealth: "healthy"
    };
    
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logDir, `github-actions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: 30000,
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

  async checkGitStatus() {
    try {
      const result = await this.runCommand("git", ["status", "--porcelain"]);
      return result.status === 0;
    } catch (error) {
      return false;
    }
  }

  async checkWorkflowFile(workflowFile) {
    const fullPath = path.join(this.config.workflowsDir, workflowFile);
    
    if (!fs.existsSync(fullPath)) {
      return { exists: false, valid: false, error: "File not found" };
    }

    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { exists: true, valid: false, error: "Invalid workflow syntax" };
      }

      // Check for required sections
      const requiredSections = ['name', 'on', 'jobs'];
      const missingSections = requiredSections.filter(section => !content.includes(`${section}:`));
      
      if (missingSections.length > 0) {
        return { exists: true, valid: false, error: `Missing required sections: ${missingSections.join(', ')}` };
      }

      return { exists: true, valid: true, error: null };
    } catch (error) {
      return { exists: true, valid: false, error: error.message };
    }
  }

  async validateWorkflow(workflowFile) {
    this.log(`🔍 Validating workflow: ${workflowFile}`);
    
    const validation = await this.checkWorkflowFile(workflowFile);
    
    if (!validation.exists) {
      this.log(`❌ Workflow file not found: ${workflowFile}`, "ERROR");
      return false;
    }

    if (!validation.valid) {
      this.log(`⚠️ Workflow validation failed: ${workflowFile} - ${validation.error}`, "WARN");
      return false;
    }

    this.log(`✅ Workflow validation passed: ${workflowFile}`);
    return true;
  }

  async createBackupWorkflow(workflowFile) {
    const sourcePath = path.join(this.config.workflowsDir, workflowFile);
    const backupPath = path.join(this.config.workflowsDir, workflowFile.replace('.yml', '-backup.yml'));
    
    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, backupPath);
        this.log(`✅ Created backup workflow: ${backupPath}`);
        return true;
      } else {
        this.log(`⚠️ Source workflow not found for backup: ${sourcePath}`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to create backup workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreWorkflowFromBackup(workflowFile) {
    const backupPath = path.join(this.config.workflowsDir, workflowFile.replace('.yml', '-backup.yml'));
    const targetPath = path.join(this.config.workflowsDir, workflowFile);
    
    try {
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, targetPath);
        this.log(`✅ Restored workflow from backup: ${workflowFile}`);
        return true;
      } else {
        this.log(`⚠️ Backup workflow not found: ${backupPath}`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to restore workflow from backup: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateWorkflow(workflowFile) {
    this.log(`🔄 Attempting to regenerate workflow: ${workflowFile}`);
    
    try {
      // Try to restore from backup first
      const restored = await this.restoreWorkflowFromBackup(workflowFile);
      
      if (restored) {
        // Validate the restored workflow
        const valid = await this.validateWorkflow(workflowFile);
        if (valid) {
          this.log(`✅ Successfully regenerated workflow: ${workflowFile}`);
          return true;
        }
      }

      // If backup restoration failed, try to create a basic workflow
      return await this.createBasicWorkflow(workflowFile);
    } catch (error) {
      this.log(`❌ Error regenerating workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createBasicWorkflow(workflowFile) {
    this.log(`🔄 Creating basic workflow: ${workflowFile}`);
    
    let workflowContent = '';
    
    if (workflowFile === 'marketing-sync.yml') {
      workflowContent = `name: Marketing Sync

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
          fi`;
    } else if (workflowFile === 'sync-health.yml') {
      workflowContent = `name: Sync Health

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
          fi`;
    }

    if (workflowContent) {
      try {
        const workflowPath = path.join(this.config.workflowsDir, workflowFile);
        fs.writeFileSync(workflowPath, workflowContent);
        this.log(`✅ Created basic workflow: ${workflowFile}`);
        return true;
      } catch (error) {
        this.log(`❌ Failed to create basic workflow: ${error.message}`, "ERROR");
        return false;
      }
    }

    return false;
  }

  async performHealthCheck() {
    this.log("🔍 Performing comprehensive GitHub Actions health check...");
    
    let allHealthy = true;
    const failedWorkflows = [];
    const allWorkflows = [...this.config.primaryWorkflows, ...this.config.backupWorkflows];

    // Check if workflows directory exists
    if (!fs.existsSync(this.config.workflowsDir)) {
      this.log(`⚠️ Workflows directory not found: ${this.config.workflowsDir}`, "WARN");
      fs.mkdirSync(this.config.workflowsDir, { recursive: true });
      this.log(`✅ Created workflows directory: ${this.config.workflowsDir}`);
    }

    // Validate all workflows
    for (const workflow of allWorkflows) {
      const valid = await this.validateWorkflow(workflow);
      
      if (!valid) {
        failedWorkflows.push(workflow);
        allHealthy = false;
        
        // Track failures
        this.stats.workflowFailures[workflow] = (this.stats.workflowFailures[workflow] || 0) + 1;
        this.stats.totalFailures++;
      }
    }

    // Check critical workflows specifically
    for (const workflow of this.config.criticalWorkflows) {
      const valid = await this.validateWorkflow(workflow);
      
      if (!valid) {
        this.log(`🚨 Critical workflow failed: ${workflow}`, "ERROR");
        
        // Attempt immediate recovery for critical workflows
        const recovered = await this.regenerateWorkflow(workflow);
        if (recovered) {
          this.log(`✅ Successfully recovered critical workflow: ${workflow}`);
        } else {
          this.log(`❌ Failed to recover critical workflow: ${workflow}`, "ERROR");
        }
      }
    }

    if (failedWorkflows.length > 0) {
      this.log(`🔄 Found ${failedWorkflows.length} failed workflows: ${failedWorkflows.join(", ")}`, "WARN");
      
      // Attempt recovery for non-critical workflows
      for (const workflow of failedWorkflows) {
        if (!this.config.criticalWorkflows.includes(workflow)) {
          const recovered = await this.regenerateWorkflow(workflow);
          if (recovered) {
            this.log(`✅ Successfully recovered workflow: ${workflow}`);
          }
        }
      }
    }

    this.stats.lastHealthCheck = new Date().toISOString();
    this.updateSystemHealth();
    
    return allHealthy;
  }

  async performRecovery() {
    this.log("🚨 Performing GitHub Actions recovery actions...");
    
    try {
      // Ensure all backup workflows exist
      for (const workflow of this.config.primaryWorkflows) {
        await this.createBackupWorkflow(workflow);
      }

      // Attempt to restore all failed workflows
      const allWorkflows = [...this.config.primaryWorkflows, ...this.config.backupWorkflows];
      let recoveryCount = 0;

      for (const workflow of allWorkflows) {
        const validation = await this.checkWorkflowFile(workflow);
        
        if (!validation.valid) {
          const recovered = await this.regenerateWorkflow(workflow);
          if (recovered) recoveryCount++;
        }
      }

      this.stats.lastRecovery = new Date().toISOString();
      this.log(`✅ Recovery completed. Recovered ${recoveryCount} workflows.`);
      
      return recoveryCount;
    } catch (error) {
      this.log(`❌ Recovery failed: ${error.message}`, "ERROR");
      return 0;
    }
  }

  async commitAndPushChanges() {
    try {
      const gitStatus = await this.runCommand("git", ["status", "--porcelain"]);
      
      if (gitStatus.stdout.trim()) {
        this.log("📝 Committing workflow changes...");
        
        // Configure git
        await this.runCommand("git", ["config", "user.name", this.config.gitConfig.userName]);
        await this.runCommand("git", ["config", "user.email", this.config.gitConfig.userEmail]);
        
        // Add and commit changes
        await this.runCommand("git", ["add", this.config.workflowsDir]);
        await this.runCommand("git", ["commit", "-m", "ci(workflows): restore and regenerate workflows [skip ci]"]);
        
        // Push changes
        const pushResult = await this.runCommand("git", ["push", "origin", "HEAD:main"]);
        
        if (pushResult.status === 0) {
          this.log("✅ Successfully pushed workflow changes");
          return true;
        } else {
          this.log(`⚠️ Failed to push changes: ${pushResult.stderr}`, "WARN");
          return false;
        }
      } else {
        this.log("ℹ️ No workflow changes to commit");
        return true;
      }
    } catch (error) {
      this.log(`❌ Error committing changes: ${error.message}`, "ERROR");
      return false;
    }
  }

  updateSystemHealth() {
    if (this.stats.totalFailures === 0) {
      this.stats.systemHealth = "healthy";
    } else if (this.stats.totalFailures <= this.config.maxFailureThreshold) {
      this.stats.systemHealth = "warning";
    } else {
      this.stats.systemHealth = "critical";
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: this.stats.systemHealth,
      stats: this.stats,
      config: {
        primaryWorkflows: this.config.primaryWorkflows.length,
        backupWorkflows: this.config.backupWorkflows.length,
        criticalWorkflows: this.config.criticalWorkflows.length
      }
    };

    const reportFile = path.join(this.config.logDir, `github-actions-redundancy-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    return report;
  }

  async startMonitoring() {
    this.log("🚀 Starting comprehensive GitHub Actions redundancy monitoring...");
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    setInterval(async () => {
      await this.performHealthCheck();
      await this.generateReport();
    }, this.config.healthCheckInterval);
    
    this.log("✅ GitHub Actions redundancy monitoring started");
  }

  async getStatus() {
    const status = {
      workflowsDir: this.config.workflowsDir,
      primaryWorkflows: this.config.primaryWorkflows,
      backupWorkflows: this.config.backupWorkflows,
      criticalWorkflows: this.config.criticalWorkflows,
      stats: this.stats
    };
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new ComprehensiveGitHubActionsRedundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.startMonitoring();
      break;
    case 'health':
      manager.performHealthCheck().then(healthy => {
        console.log(`System health: ${healthy ? '✅ Healthy' : '❌ Unhealthy'}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case 'recovery':
      manager.performRecovery().then(count => {
        console.log(`Recovery completed. Recovered ${count} workflows.`);
        process.exit(0);
      });
      break;
    case 'validate':
      Promise.all(manager.config.primaryWorkflows.map(w => manager.validateWorkflow(w)))
        .then(results => {
          const valid = results.every(r => r);
          console.log(`Validation result: ${valid ? '✅ All valid' : '❌ Some invalid'}`);
          process.exit(valid ? 0 : 1);
        });
      break;
    case 'backup':
      Promise.all(manager.config.primaryWorkflows.map(w => manager.createBackupWorkflow(w)))
        .then(results => {
          const success = results.every(r => r);
          console.log(`Backup result: ${success ? '✅ All backed up' : '❌ Some failed'}`);
          process.exit(success ? 0 : 1);
        });
      break;
    case 'status':
      manager.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node comprehensive-github-actions-redundancy.cjs [start|health|recovery|validate|backup|status]');
      process.exit(1);
  }
}

module.exports = ComprehensiveGitHubActionsRedundancy;