#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class GitHubActionsUltimateRedundancy {
  constructor() {
    this.config = {
      workflows: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml",
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ],
      backupWorkflows: [
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ],
      healthCheckInterval: 20000,
      maxFailureThreshold: 7,
      autoTrigger: true,
      backupTriggers: true,
      workflowValidation: true,
      apiHealthCheck: true,
      autoHealing: true,
      conflictResolution: true,
      backupRestoration: true,
      performanceOptimization: true
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startUltimateGitHubActionsMonitoring();
  }

  ensureLogDirectory() {
    const logDir = "automation/logs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `github-actions-ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 50,
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

  async checkGitRepository() {
    try {
      const gitStatus = await this.runCommand("git", ["status"]);
      if (gitStatus.status === 0) {
        this.log("✅ Git repository accessible");
        return true;
      } else {
        this.log("❌ Git repository not accessible", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Git repository check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitRemote() {
    try {
      const remoteStatus = await this.runCommand("git", ["remote", "-v"]);
      if (remoteStatus.status === 0) {
        const remotes = remoteStatus.stdout.trim().split('\n');
        const originRemote = remotes.find(r => r.includes('origin'));
        if (originRemote) {
          this.log(`✅ Git remote origin configured: ${originRemote.split('\t')[1]}`);
          return true;
        } else {
          this.log("⚠️ Git remote origin not configured", "WARN");
          return false;
        }
      } else {
        this.log("❌ Failed to get git remotes", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Git remote check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkWorkflowFiles() {
    this.log("🔍 Checking GitHub Actions workflow files...");
    
    const results = {
      workflows: {},
      missingWorkflows: [],
      invalidWorkflows: [],
      overall: true
    };
    
    for (const workflow of this.config.workflows) {
      if (fs.existsSync(workflow)) {
        const stats = fs.statSync(workflow);
        const content = fs.readFileSync(workflow, 'utf8');
        
        // Validate workflow syntax
        const isValid = this.validateWorkflowSyntax(content);
        
        results.workflows[workflow] = {
          exists: true,
          lastModified: stats.mtime,
          size: stats.size,
          valid: isValid
        };
        
        if (!isValid) {
          results.invalidWorkflows.push(workflow);
          results.overall = false;
        }
      } else {
        results.workflows[workflow] = {
          exists: false,
          lastModified: null,
          size: 0,
          valid: false
        };
        results.missingWorkflows.push(workflow);
        results.overall = false;
      }
    }
    
    // Log results
    for (const [workflow, info] of Object.entries(results.workflows)) {
      if (info.exists) {
        if (info.valid) {
          this.log(`✅ Workflow ${workflow}: Valid (${info.size} bytes)`);
        } else {
          this.log(`⚠️ Workflow ${workflow}: Invalid syntax`, "WARN");
        }
      } else {
        this.log(`❌ Workflow ${workflow}: Missing`, "ERROR");
      }
    }
    
    return results;
  }

  validateWorkflowSyntax(content) {
    try {
      // Basic workflow validation
      const requiredSections = ['name:', 'on:', 'jobs:'];
      const hasRequiredSections = requiredSections.every(section => 
        content.includes(section)
      );
      
      if (!hasRequiredSections) {
        return false;
      }
      
      // Check for valid YAML structure (basic)
      const lines = content.split('\n');
      let indentLevel = 0;
      let isValid = true;
      
      for (const line of lines) {
        if (line.trim() === '') continue;
        
        const currentIndent = line.search(/\S/);
        if (currentIndent === -1) continue;
        
        if (currentIndent > indentLevel + 2) {
          isValid = false;
          break;
        }
        
        indentLevel = currentIndent;
      }
      
      return isValid;
    } catch (error) {
      return false;
    }
  }

  async checkGitHubAPIHealth() {
    if (!process.env.GITHUB_TOKEN) {
      this.log("⚠️ GITHUB_TOKEN not available, skipping API health check", "WARN");
      return { healthy: false, reason: "no_token" };
    }
    
    try {
      const response = await fetch('https://api.github.com/rate_limit', {
        headers: { 'Authorization': `token ${process.env.GITHUB_TOKEN}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        const rateLimit = data.resources.core;
        
        if (rateLimit.remaining > 0) {
          this.log(`✅ GitHub API healthy: ${rateLimit.remaining}/${rateLimit.limit} requests remaining`);
          return { healthy: true, remaining: rateLimit.remaining, limit: rateLimit.limit };
        } else {
          this.log(`⚠️ GitHub API rate limit exceeded: resets at ${new Date(rateLimit.reset * 1000)}`, "WARN");
          return { healthy: false, reason: "rate_limit_exceeded", resetTime: rateLimit.reset };
        }
      } else {
        this.log(`⚠️ GitHub API health check failed: ${response.status}`, "WARN");
        return { healthy: false, reason: "api_error", status: response.status };
      }
    } catch (error) {
      this.log(`❌ GitHub API health check error: ${error.message}`, "ERROR");
      return { healthy: false, reason: "network_error", error: error.message };
    }
  }

  async checkWorkflowTriggers() {
    this.log("🔍 Checking workflow trigger configurations...");
    
    const results = {
      manualTriggers: [],
      scheduledTriggers: [],
      pushTriggers: [],
      pullRequestTriggers: [],
      overall: true
    };
    
    for (const workflow of this.config.workflows) {
      if (!fs.existsSync(workflow)) continue;
      
      const content = fs.readFileSync(workflow, 'utf8');
      
      // Check trigger types
      if (content.includes('workflow_dispatch:')) {
        results.manualTriggers.push(workflow);
      }
      
      if (content.includes('schedule:')) {
        results.scheduledTriggers.push(workflow);
      }
      
      if (content.includes('push:')) {
        results.pushTriggers.push(workflow);
      }
      
      if (content.includes('pull_request:')) {
        results.pullRequestTriggers.push(workflow);
      }
    }
    
    // Log results
    this.log(`📋 Manual triggers: ${results.manualTriggers.length}`);
    this.log(`📋 Scheduled triggers: ${results.scheduledTriggers.length}`);
    this.log(`📋 Push triggers: ${results.scheduledTriggers.length}`);
    this.log(`📋 Pull request triggers: ${results.pullRequestTriggers.length}`);
    
    return results;
  }

  async restoreMissingWorkflows() {
    this.log("🔄 Restoring missing workflow files...");
    
    let restoredCount = 0;
    
    for (const workflow of this.config.workflows) {
      if (!fs.existsSync(workflow)) {
        // Try to restore from backup
        const backupWorkflow = workflow.replace('.yml', '-backup.yml');
        
        if (fs.existsSync(backupWorkflow)) {
          try {
            fs.copyFileSync(backupWorkflow, workflow);
            this.log(`✅ Restored ${workflow} from backup`);
            restoredCount++;
          } catch (error) {
            this.log(`❌ Failed to restore ${workflow}: ${error.message}`, "ERROR");
          }
        } else {
          // Create a basic workflow template
          const template = this.generateWorkflowTemplate(workflow);
          try {
            fs.writeFileSync(workflow, template);
            this.log(`✅ Created new workflow template: ${workflow}`);
            restoredCount++;
          } catch (error) {
            this.log(`❌ Failed to create ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
    }
    
    this.log(`✅ Workflow restoration completed: ${restoredCount} workflows restored/created`);
    return restoredCount;
  }

  generateWorkflowTemplate(workflowPath) {
    const workflowName = path.basename(workflowPath, '.yml');
    
    if (workflowName.includes('marketing-sync')) {
      return `name: Marketing Sync

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
    } else if (workflowName.includes('sync-health')) {
      return `name: Sync Health

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
    } else {
      return `name: ${workflowName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-${workflowName}:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run ${workflowName}
        run: echo "Workflow ${workflowName} executed successfully"`;
    }
  }

  async fixInvalidWorkflows() {
    this.log("🔧 Fixing invalid workflow files...");
    
    let fixedCount = 0;
    
    for (const workflow of this.config.workflows) {
      if (!fs.existsSync(workflow)) continue;
      
      const content = fs.readFileSync(workflow, 'utf8');
      if (!this.validateWorkflowSyntax(content)) {
        try {
          // Try to fix common issues
          let fixedContent = content;
          
          // Fix common YAML issues
          fixedContent = fixedContent.replace(/\t/g, '  '); // Replace tabs with spaces
          fixedContent = fixedContent.replace(/\r\n/g, '\n'); // Normalize line endings
          
          // Ensure proper indentation
          const lines = fixedContent.split('\n');
          const fixedLines = [];
          let indentLevel = 0;
          
          for (const line of lines) {
            if (line.trim() === '') {
              fixedLines.push('');
              continue;
            }
            
            const currentIndent = line.search(/\S/);
            if (currentIndent === -1) {
              fixedLines.push('');
              continue;
            }
            
            // Normalize indentation
            const normalizedIndent = '  '.repeat(Math.floor(currentIndent / 2));
            fixedLines.push(normalizedIndent + line.trim());
          }
          
          fixedContent = fixedLines.join('\n');
          
          // Write fixed content
          fs.writeFileSync(workflow, fixedContent);
          this.log(`✅ Fixed workflow: ${workflow}`);
          fixedCount++;
          
        } catch (error) {
          this.log(`❌ Failed to fix ${workflow}: ${error.message}`, "ERROR");
        }
      }
    }
    
    this.log(`✅ Workflow fixing completed: ${fixedCount} workflows fixed`);
    return fixedCount;
  }

  async createBackupWorkflows() {
    this.log("💾 Creating backup workflow files...");
    
    let backupCount = 0;
    
    for (const workflow of this.config.workflows) {
      if (fs.existsSync(workflow)) {
        const backupPath = workflow.replace('.yml', '-backup.yml');
        
        if (!fs.existsSync(backupPath)) {
          try {
            fs.copyFileSync(workflow, backupPath);
            this.log(`✅ Created backup: ${backupPath}`);
            backupCount++;
          } catch (error) {
            this.log(`❌ Failed to create backup for ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
    }
    
    this.log(`✅ Backup creation completed: ${backupCount} backups created`);
    return backupCount;
  }

  async performGitHubActionsHealthCheck() {
    this.log("🔍 Performing comprehensive GitHub Actions health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      gitRepository: false,
      gitRemote: false,
      workflowFiles: {},
      apiHealth: {},
      workflowTriggers: {},
      overall: false
    };
    
    try {
      // Check Git repository
      results.gitRepository = await this.checkGitRepository();
      
      // Check Git remote
      results.gitRemote = await this.checkGitRemote();
      
      // Check workflow files
      results.workflowFiles = await this.checkWorkflowFiles();
      
      // Check GitHub API health
      results.apiHealth = await this.checkGitHubAPIHealth();
      
      // Check workflow triggers
      results.workflowTriggers = await this.checkWorkflowTriggers();
      
      // Determine overall health
      results.overall = results.gitRepository && 
                       results.gitRemote && 
                       results.workflowFiles.overall && 
                       results.apiHealth.healthy;
      
      this.log(`📊 GitHub Actions Health: ${results.overall ? 'Healthy' : 'Issues detected'}`);
      
      // Perform auto-healing if enabled
      if (this.config.autoHealing && !results.overall) {
        this.log("🔄 Performing auto-healing...");
        
        if (!results.workflowFiles.overall) {
          await this.restoreMissingWorkflows();
          await this.fixInvalidWorkflows();
        }
        
        if (!results.workflowFiles.overall) {
          await this.createBackupWorkflows();
        }
      }
      
      return results;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return results;
    }
  }

  async generateHealthReport(results) {
    try {
      const reportFile = path.join("automation/logs", `github-actions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      this.log(`📄 Health report saved to: ${reportFile}`);
    } catch (error) {
      this.log(`❌ Failed to save health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing GitHub Actions ultimate monitoring system...");
    
    // Set up log rotation
    this.setupLogRotation();
  }

  setupLogRotation() {
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // Daily
  }

  rotateLogs() {
    try {
      const logFiles = fs.readdirSync("automation/logs")
        .filter(f => f.startsWith('github-actions-ultimate-redundancy-') && f.endsWith('.log'))
        .sort()
        .reverse();

      // Keep only the latest 30 log files
      if (logFiles.length > 30) {
        const filesToDelete = logFiles.slice(30);
        filesToDelete.forEach(file => {
          fs.unlinkSync(path.join("automation/logs", file));
        });
        this.log(`🗑️ Rotated ${filesToDelete.length} old log files`);
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  startUltimateGitHubActionsMonitoring() {
    this.log("🚀 Starting ultimate GitHub Actions monitoring system...");
    
    // Initial health check
    this.performGitHubActionsHealthCheck();
    
    // Continuous monitoring
    setInterval(async () => {
      const results = await this.performGitHubActionsHealthCheck();
      
      // Save health report
      this.generateHealthReport(results);
      
      // Log summary
      if (!results.overall) {
        this.log("⚠️ GitHub Actions system has issues, check logs for details", "WARN");
      }
    }, this.config.healthCheckInterval);
    
    this.log("✅ Ultimate GitHub Actions monitoring system started");
  }

  async getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastCheck: new Date().toISOString()
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const system = new GitHubActionsUltimateRedundancy();
  
  switch (args[0]) {
    case 'start':
      console.log("🚀 GitHub Actions ultimate redundancy system started");
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.performGitHubActionsHealthCheck();
      break;
    case 'restore':
      system.restoreMissingWorkflows();
      break;
    case 'fix':
      system.fixInvalidWorkflows();
      break;
    case 'backup':
      system.createBackupWorkflows();
      break;
    default:
      console.log("Usage: node github-actions-ultimate-redundancy.cjs [start|status|health|restore|fix|backup]");
  }
}

module.exports = GitHubActionsUltimateRedundancy;