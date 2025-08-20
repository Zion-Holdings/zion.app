#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedGitHubActionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      workflowPaths: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      healthCheckInterval: 60000,
      maxFailures: 3,
      retryDelay: 30000,
      autoTrigger: true,
      backupTriggers: true,
      enableWorkflowValidation: true,
      enableAutoRecovery: true,
      enableMetricsCollection: true,
      workflowTemplates: {
        "marketing-sync.yml": this.getMarketingSyncTemplate(),
        "sync-health.yml": this.getSyncHealthTemplate()
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastHealthCheck = null;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  getMarketingSyncTemplate() {
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
  }

  getSyncHealthTemplate() {
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
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
      // Fallback to console if file logging fails
      console.log(logMessage);
    }
  }

  logError(message, error) {
    this.log(`ERROR: ${message} - ${error?.message || error}`, "ERROR");
    if (error?.stack) {
      this.log(`Stack trace: ${error.stack}`, "ERROR");
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || 30000,
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML structure validation
      const requiredSections = ['on:', 'jobs:'];
      const hasRequiredSections = requiredSections.every(section => content.includes(section));
      
      if (!hasRequiredSections) {
        this.log(`⚠️ Workflow ${path.basename(workflowPath)} missing required sections`, "WARN");
        return { valid: false, errors: ["Missing required YAML sections"] };
      }

      // Check for common syntax issues
      const syntaxIssues = [];
      
      // Check for proper indentation
      const lines = content.split('\n');
      let indentLevel = 0;
      let hasIndentationIssues = false;
      
      for (const line of lines) {
        if (line.trim() === '') continue;
        
        const currentIndent = line.search(/\S/);
        if (currentIndent < 0) continue;
        
        if (currentIndent < indentLevel && currentIndent !== 0) {
          hasIndentationIssues = true;
          break;
        }
        indentLevel = currentIndent;
      }
      
      if (hasIndentationIssues) {
        syntaxIssues.push("Potential indentation issues");
      }

      // Check for unclosed quotes or brackets
      const quoteCount = (content.match(/"/g) || []).length;
      if (quoteCount % 2 !== 0) {
        syntaxIssues.push("Unclosed quotes detected");
      }

      const bracketCount = (content.match(/\{/g) || []).length;
      const closeBracketCount = (content.match(/\}/g) || []).length;
      if (bracketCount !== closeBracketCount) {
        syntaxIssues.push("Unclosed brackets detected");
      }

      if (syntaxIssues.length > 0) {
        this.log(`⚠️ Workflow ${path.basename(workflowPath)} has syntax issues: ${syntaxIssues.join(', ')}`, "WARN");
        return { valid: false, errors: syntaxIssues };
      }

      this.log(`✅ Workflow ${path.basename(workflowPath)} is valid`);
      return { valid: true, errors: [] };
    } catch (error) {
      this.log(`❌ Error validating workflow ${path.basename(workflowPath)}: ${error.message}`, "ERROR");
      return { valid: false, errors: [error.message] };
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (!fs.existsSync(workflowPath)) {
        this.log(`❌ Workflow ${workflowName} not found`, "ERROR");
        return { exists: false, valid: false, errors: ["Workflow file not found"] };
      }

      const validation = await this.validateWorkflow(workflowPath);
      
      return {
        exists: true,
        valid: validation.valid,
        errors: validation.errors,
        path: workflowPath
      };
    } catch (error) {
      this.log(`❌ Error checking workflow ${workflowName}: ${error.message}`, "ERROR");
      return { exists: false, valid: false, errors: [error.message] };
    }
  }

  async restoreWorkflow(workflowName) {
    this.log(`🔧 Attempting to restore workflow: ${workflowName}`);
    
    try {
      const template = this.config.workflowTemplates[workflowName];
      if (!template) {
        this.log(`❌ No template available for workflow: ${workflowName}`, "ERROR");
        return false;
      }

      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      const workflowsDir = path.dirname(workflowPath);
      
      // Ensure workflows directory exists
      if (!fs.existsSync(workflowsDir)) {
        fs.mkdirSync(workflowsDir, { recursive: true });
        this.log(`📁 Created workflows directory: ${workflowsDir}`);
      }

      // Write the workflow file
      fs.writeFileSync(workflowPath, template);
      this.log(`✅ Successfully restored workflow: ${workflowName}`);
      
      // Commit the restored workflow
      await this.commitWorkflowRestoration(workflowName);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to restore workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async commitWorkflowRestoration(workflowName) {
    try {
      // Add the restored workflow
      const addResult = await this.runCommand("git", ["add", `.github/workflows/${workflowName}`]);
      if (addResult.status !== 0) {
        this.log(`⚠️ Failed to add restored workflow to git: ${workflowName}`, "WARN");
        return false;
      }

      // Commit the restoration
      const commitResult = await this.runCommand("git", [
        "commit", 
        "-m", 
        `fix(workflows): restore missing workflow ${workflowName}`
      ]);
      
      if (commitResult.status !== 0) {
        this.log(`⚠️ Failed to commit workflow restoration: ${workflowName}`, "WARN");
        return false;
      }

      this.log(`✅ Committed workflow restoration: ${workflowName}`);
      return true;
    } catch (error) {
      this.log(`❌ Error committing workflow restoration: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflow(workflowName) {
    if (!this.config.autoTrigger) {
      this.log(`⚠️ Auto-triggering disabled for workflow: ${workflowName}`);
      return false;
    }

    this.log(`🚀 Triggering workflow: ${workflowName}`);
    
    try {
      // This would typically use GitHub API to trigger workflows
      // For now, we'll simulate by checking if the workflow can be triggered manually
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (fs.existsSync(workflowPath)) {
        const content = fs.readFileSync(workflowPath, 'utf8');
        if (content.includes('workflow_dispatch:')) {
          this.log(`✅ Workflow ${workflowName} supports manual triggering`);
          return true;
        } else {
          this.log(`⚠️ Workflow ${workflowName} does not support manual triggering`);
          return false;
        }
      } else {
        this.log(`❌ Workflow ${workflowName} not found for triggering`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error triggering workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive GitHub Actions health check...");
    
    const results = {
      workflows: {},
      summary: {
        total: this.config.workflows.length,
        healthy: 0,
        unhealthy: 0,
        restored: 0,
        triggered: 0
      },
      timestamp: new Date().toISOString()
    };

    // Check workflows directory
    const workflowsDir = await this.checkWorkflowsDirectory();
    if (!workflowsDir.exists) {
      this.log("❌ Workflows directory not found, attempting to create...", "ERROR");
      fs.mkdirSync(path.join(this.workspace, ".github/workflows"), { recursive: true });
    }

    // Check each workflow
    for (const workflowName of this.config.workflows) {
      const workflowHealth = await this.checkWorkflowHealth(workflowName);
      results.workflows[workflowName] = workflowHealth;
      
      if (workflowHealth.exists && workflowHealth.valid) {
        results.summary.healthy++;
        this.log(`✅ Workflow ${workflowName} is healthy`);
      } else {
        results.summary.unhealthy++;
        this.log(`❌ Workflow ${workflowName} is unhealthy`);
        
        if (this.config.enableAutoRecovery) {
          const restored = await this.restoreWorkflow(workflowName);
          if (restored) {
            results.summary.restored++;
            this.log(`✅ Successfully restored workflow: ${workflowName}`);
          }
        }
      }
    }

    // Generate and log health report
    const healthReport = this.generateHealthReport(results);
    this.log(healthReport);

    // Save health report
    this.saveHealthReport(results);

    this.lastHealthCheck = results;
    return results;
  }

  generateHealthReport(results) {
    let workflowStatus = "";
    for (const [workflowName, health] of Object.entries(results.workflows)) {
      const status = health.exists && health.valid ? "✅" : "❌";
      const details = health.exists ? health.valid ? "HEALTHY" : `UNHEALTHY: ${health.errors.join(', ')}` : "MISSING";
      workflowStatus += `${status} ${workflowName}: ${details}\n`;
    }

    return `
📊 ENHANCED GITHUB ACTIONS HEALTH REPORT
=========================================
Timestamp: ${results.timestamp}

📋 Workflow Health Summary:
Total Workflows: ${results.summary.total}
Healthy: ${results.summary.healthy}
Unhealthy: ${results.summary.unhealthy}
Restored: ${results.summary.restored}
Triggered: ${results.summary.triggered}

🔍 Individual Workflow Status:
${workflowStatus}

${results.summary.healthy === results.summary.total ? 
  "🎉 All GitHub Actions workflows are healthy!" : 
  "⚠️ Some GitHub Actions workflows require attention. Check logs for details."}
`;
  }

  saveHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `github-actions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📝 GitHub Actions health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save GitHub Actions health report: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.performComprehensiveHealthCheck();

    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);

    this.log("✅ Enhanced GitHub Actions redundancy monitoring started successfully");
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running");
      return;
    }

    this.log("🛑 Stopping enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = false;

    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    this.log("✅ Enhanced GitHub Actions redundancy monitoring stopped");
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency GitHub Actions recovery...");
    
    try {
      // Ensure workflows directory exists
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        fs.mkdirSync(workflowsDir, { recursive: true });
      }

      // Restore all missing workflows
      let restoredCount = 0;
      for (const workflowName of this.config.workflows) {
        const workflowPath = path.join(workflowsDir, workflowName);
        if (!fs.existsSync(workflowPath)) {
          const restored = await this.restoreWorkflow(workflowName);
          if (restored) restoredCount++;
        }
      }

      this.log(`✅ Emergency GitHub Actions recovery completed. Restored ${restoredCount} workflows.`);
      return true;
    } catch (error) {
      this.log(`❌ Emergency GitHub Actions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      lastHealthCheck: this.lastHealthCheck,
      failureCounts: Object.fromEntries(this.failureCounts)
    };
  }
}

// Start the enhanced GitHub Actions redundancy system
if (require.main === module) {
  const githubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down enhanced GitHub Actions redundancy system...');
    await githubActionsRedundancy.stopMonitoring();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Terminating enhanced GitHub Actions redundancy system...');
    await githubActionsRedundancy.stopMonitoring();
    process.exit(0);
  });

  // Start monitoring
  githubActionsRedundancy.startMonitoring();
}

module.exports = EnhancedGitHubActionsRedundancy;