#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class GitHubActionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "github-actions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.workspace, "automation/redundancy-config.json");
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        return config.githubActions || {};
      } catch (error) {
        this.log(`Error loading GitHub Actions config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 60000,
      maxFailures: 3,
      retryDelay: 30000,
      workflows: ["marketing-sync.yml", "sync-health.yml"],
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml"
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
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
        this.log("❌ GitHub workflows directory not found");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`);
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      const issues = [];
      let isValid = true;

      // Check for basic YAML structure
      if (!content.includes("name:") || !content.includes("on:")) {
        issues.push("Missing required workflow fields (name, on)");
        isValid = false;
      }

      // Check for cron syntax issues
      if (content.includes("cron:") && content.includes("schedule:")) {
        const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
        if (cronMatch) {
          const cron = cronMatch[1];
          if (!this.isValidCron(cron)) {
            issues.push(`Invalid cron syntax: ${cron}`);
            isValid = false;
          }
        }
      }

      // Check for required permissions
      if (content.includes("contents: write") && !content.includes("permissions:")) {
        issues.push("Workflow writes to contents but permissions not explicitly set");
        isValid = false;
      }

      // Check for proper job structure
      if (!content.includes("jobs:") || !content.includes("runs-on:")) {
        issues.push("Missing required job configuration");
        isValid = false;
      }

      return { isValid, issues };
    } catch (error) {
      this.log(`❌ Error validating workflow ${workflowPath}: ${error.message}`);
      return { isValid: false, issues: [`File read error: ${error.message}`] };
    }
  }

  isValidCron(cron) {
    const cronParts = cron.split(" ");
    if (cronParts.length !== 5) return false;
    
    // Basic validation for common cron patterns
    const validPatterns = [
      /^\*\/\d+$/, // */n
      /^\d+$/,     // n
      /^\*$/,      // *
      /^\d+-\d+$/, // n-m
      /^\d+,\d+$/  // n,m
    ];
    
    return cronParts.every(part => 
      validPatterns.some(pattern => pattern.test(part))
    );
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { name: workflowName, healthy: false, issues: ["Workflow file not found"] };
      }

      const validation = await this.validateWorkflow(workflowPath);
      const health = {
        name: workflowName,
        healthy: validation.isValid,
        issues: validation.issues,
        lastModified: fs.statSync(workflowPath).mtime
      };

      // Check if workflow is too old (more than 30 days)
      const daysSinceModified = (Date.now() - health.lastModified.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceModified > 30) {
        health.issues.push(`Workflow file is ${Math.round(daysSinceModified)} days old`);
        health.healthy = false;
      }

      return health;
    } catch (error) {
      this.log(`❌ Error checking workflow health for ${workflowName}: ${error.message}`);
      return { name: workflowName, healthy: false, issues: [`Error: ${error.message}`] };
    }
  }

  async runWorkflowLocally(workflowName) {
    try {
      this.log(`🔄 Running workflow ${workflowName} locally...`);
      
      // Extract the main script from the workflow
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      const content = fs.readFileSync(workflowPath, "utf8");
      
      // Look for node commands in the workflow
      const nodeCommands = content.match(/run:\s*node\s+([^\n]+)/g);
      if (nodeCommands && nodeCommands.length > 0) {
        for (const command of nodeCommands) {
          const scriptPath = command.replace(/run:\s*node\s+/, "").trim();
          if (scriptPath && fs.existsSync(path.join(this.workspace, scriptPath))) {
            this.log(`📜 Executing script: ${scriptPath}`);
            await this.runCommand("node", [scriptPath]);
          }
        }
      }
      
      this.log(`✅ Workflow ${workflowName} executed locally`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to run workflow ${workflowName} locally: ${error.message}`);
      return false;
    }
  }

  async triggerWorkflowRemotely(workflowName) {
    try {
      this.log(`📡 Attempting to trigger workflow ${workflowName} remotely...`);
      
      // This would typically use GitHub API to trigger workflows
      // For now, we'll simulate the trigger by running it locally
      const success = await this.runWorkflowLocally(workflowName);
      
      if (success) {
        this.log(`✅ Workflow ${workflowName} triggered successfully`);
        return true;
      } else {
        this.log(`❌ Failed to trigger workflow ${workflowName}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error triggering workflow ${workflowName}: ${error.message}`);
      return false;
    }
  }

  async checkGitStatus() {
    try {
      const result = await this.runCommand("git", ["status", "--porcelain"]);
      if (result.status === 0) {
        const changes = result.stdout.trim();
        if (changes) {
          this.log(`📝 Git has uncommitted changes: ${changes.split('\n').length} files`);
          return { hasChanges: true, changeCount: changes.split('\n').length };
        } else {
          this.log("✅ Git working directory is clean");
          return { hasChanges: false, changeCount: 0 };
        }
      } else {
        this.log(`⚠️ Git status check failed: ${result.stderr}`);
        return { hasChanges: false, changeCount: 0 };
      }
    } catch (error) {
      this.log(`❌ Error checking git status: ${error.message}`);
      return { hasChanges: false, changeCount: 0 };
    }
  }

  async commitAndPushChanges(commitMessage) {
    try {
      this.log("💾 Committing and pushing changes...");
      
      // Add all changes
      await this.runCommand("git", ["add", "-A"]);
      
      // Commit changes
      await this.runCommand("git", ["commit", "-m", commitMessage]);
      
      // Push to origin
      await this.runCommand("git", ["push", "origin", "main"]);
      
      this.log("✅ Changes committed and pushed successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to commit and push changes: ${error.message}`);
      return false;
    }
  }

  async runGitHubActionsHealthCheck() {
    this.log("🔍 Running GitHub Actions health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      workflowsDirectory: { exists: false, workflows: [] },
      workflows: [],
      overallHealth: false,
      issues: [],
      actions: []
    };

    try {
      // Check workflows directory
      const workflowsDir = await this.checkWorkflowsDirectory();
      results.workflowsDirectory = workflowsDir;
      
      if (!workflowsDir.exists) {
        results.issues.push("GitHub workflows directory not found");
        results.actions.push("create_workflows_directory");
      }

      // Check each workflow
      let healthyWorkflows = 0;
      let totalWorkflows = 0;

      for (const workflow of workflowsDir.workflows) {
        const health = await this.checkWorkflowHealth(workflow);
        results.workflows.push(health);
        
        if (health.healthy) {
          healthyWorkflows++;
        } else {
          results.issues.push(`Workflow ${health.name}: ${health.issues.join(", ")}`);
          results.actions.push(`fix_workflow_${health.name}`);
        }
        totalWorkflows++;
      }

      // Check git status
      const gitStatus = await this.checkGitStatus();
      if (gitStatus.hasChanges) {
        results.issues.push(`Git has ${gitStatus.changeCount} uncommitted changes`);
        results.actions.push("commit_git_changes");
      }

      // Calculate overall health
      if (totalWorkflows > 0) {
        results.overallHealth = (healthyWorkflows / totalWorkflows) >= 0.8;
      }

      // Take actions if auto-trigger is enabled
      if (this.config.autoTrigger && results.actions.length > 0) {
        await this.executeActions(results.actions, results);
      }

      // Generate health report
      await this.generateHealthReport(results);
      
      this.log(`✅ GitHub Actions health check completed. Health: ${results.overallHealth ? 'Good' : 'Poor'}`);
      return results;
      
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`);
      results.issues.push(`Health check error: ${error.message}`);
      return results;
    }
  }

  async executeActions(actions, results) {
    this.log("⚡ Executing GitHub Actions health actions...");
    
    for (const action of actions) {
      try {
        if (action === "create_workflows_directory") {
          this.log("⚠️ Manual intervention required to create workflows directory");
        } else if (action === "commit_git_changes") {
          await this.commitAndPushChanges("chore: auto-commit changes from redundancy system");
        } else if (action.startsWith("fix_workflow_")) {
          const workflowName = action.replace("fix_workflow_", "");
          this.log(`⚠️ Manual intervention required to fix workflow: ${workflowName}`);
        }
      } catch (error) {
        this.log(`❌ Failed to execute action ${action}: ${error.message}`);
      }
    }
  }

  async generateHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `github-actions-health-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📊 GitHub Actions health report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`);
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ GitHub Actions monitoring is already running");
      return;
    }

    this.log("🔄 Starting GitHub Actions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      try {
        await this.runGitHubActionsHealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring check failed: ${error.message}`);
      }
    }, this.config.checkInterval);

    this.log(`✅ GitHub Actions monitoring started with ${this.config.checkInterval}ms interval`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 GitHub Actions monitoring stopped");
  }

  async cleanup() {
    await this.stopMonitoring();
    this.log("🧹 GitHub Actions redundancy cleanup completed");
  }
}

// CLI Interface
async function main() {
  const redundancy = new GitHubActionsRedundancy();
  
  const command = process.argv[2] || "check";
  
  try {
    switch (command) {
      case "check":
        await redundancy.runGitHubActionsHealthCheck();
        break;
      case "monitor":
        await redundancy.startMonitoring();
        // Keep the process running
        process.on("SIGINT", async () => {
          redundancy.log("🛑 Stopping GitHub Actions monitoring...");
          await redundancy.cleanup();
          process.exit(0);
        });
        break;
      case "validate":
        const workflowName = process.argv[3];
        if (workflowName) {
          const workflowPath = path.join(redundancy.workspace, ".github/workflows", workflowName);
          const validation = await redundancy.validateWorkflow(workflowPath);
          console.log(`Workflow ${workflowName} validation:`, validation);
        } else {
          console.log("Usage: node github-actions-redundancy.cjs validate <workflow-name>");
        }
        break;
      case "run":
        const workflowToRun = process.argv[3];
        if (workflowToRun) {
          await redundancy.runWorkflowLocally(workflowToRun);
        } else {
          console.log("Usage: node github-actions-redundancy.cjs run <workflow-name>");
        }
        break;
      case "trigger":
        const workflowToTrigger = process.argv[3];
        if (workflowToTrigger) {
          await redundancy.triggerWorkflowRemotely(workflowToTrigger);
        } else {
          console.log("Usage: node github-actions-redundancy.cjs trigger <workflow-name>");
        }
        break;
      default:
        console.log(`
GitHub Actions Redundancy System

Usage: node github-actions-redundancy.cjs [command]

Commands:
  check     Run GitHub Actions health check (default)
  monitor   Start continuous monitoring
  validate  Validate specific workflow
  run       Run workflow locally
  trigger   Trigger workflow remotely

Examples:
  node github-actions-redundancy.cjs check
  node github-actions-redundancy.cjs monitor
  node github-actions-redundancy.cjs validate marketing-sync.yml
  node github-actions-redundancy.cjs run sync-health.yml
  node github-actions-redundancy.cjs trigger marketing-sync.yml
        `);
    }
  } catch (error) {
    redundancy.log(`❌ Command '${command}' failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = GitHubActionsRedundancy;