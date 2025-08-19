#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedGitHubActionsRedundancy {
  constructor() {
    this.config = {
      workflows: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      backupDir: "automation/backups/github-actions",
      healthCheckInterval: 60000,
      maxFailureThreshold: 3,
      retryDelay: 30000,
      autoTrigger: true,
      backupTriggers: true,
      workflowValidation: true,
      apiHealthCheck: true,
      logRotation: true,
      maxLogSize: 10 * 1024 * 1024, // 10MB
      maxLogFiles: 30
    };
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    // Ensure backup directory exists
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
    
    // Ensure logs directory exists
    const logsDir = "automation/logs";
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `enhanced-github-actions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
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

  async backupWorkflowFiles() {
    this.log("💾 Creating backup of GitHub Actions workflow files...");
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    for (const workflowFile of this.config.workflows) {
      if (fs.existsSync(workflowFile)) {
        try {
          const backupPath = path.join(this.config.backupDir, `${path.basename(workflowFile)}.${timestamp}.backup`);
          fs.copyFileSync(workflowFile, backupPath);
          this.log(`✅ Backed up ${workflowFile} to ${backupPath}`);
          
          // Clean up old backups (keep last 10)
          await this.cleanupOldBackups(path.basename(workflowFile));
        } catch (error) {
          this.log(`❌ Failed to backup ${workflowFile}: ${error.message}`, "ERROR");
        }
      }
    }
  }

  async cleanupOldBackups(workflowFileName) {
    try {
      const files = fs.readdirSync(this.config.backupDir)
        .filter(file => file.startsWith(workflowFileName) && file.endsWith('.backup'))
        .sort()
        .reverse();
      
      if (files.length > 10) {
        const filesToDelete = files.slice(10);
        for (const file of filesToDelete) {
          fs.unlinkSync(path.join(this.config.backupDir, file));
          this.log(`🗑️ Cleaned up old backup: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not cleanup old backups: ${error.message}`, "WARN");
    }
  }

  async validateWorkflowFile(workflowPath) {
    try {
      this.log(`🔍 Validating workflow file: ${workflowPath}`);
      
      // Check if file exists
      if (!fs.existsSync(workflowPath)) {
        this.log(`❌ Workflow file ${workflowPath} not found`, "ERROR");
        return false;
      }
      
      // Check file syntax
      try {
        const yaml = require('js-yaml');
        const workflowContent = fs.readFileSync(workflowPath, 'utf8');
        const workflow = yaml.load(workflowContent);
        
        // Basic validation
        if (!workflow.name) {
          this.log(`❌ Workflow ${workflowPath} missing name`, "ERROR");
          return false;
        }
        
        if (!workflow.on) {
          this.log(`❌ Workflow ${workflowPath} missing triggers`, "ERROR");
          return false;
        }
        
        if (!workflow.jobs) {
          this.log(`❌ Workflow ${workflowPath} missing jobs`, "ERROR");
          return false;
        }
        
        this.log(`✅ Workflow ${workflowPath} is valid`);
        return true;
      } catch (error) {
        this.log(`❌ Workflow ${workflowPath} has syntax errors: ${error.message}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Validation failed for ${workflowPath}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = ".github/workflows";
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files in ${workflowsDir}`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async checkGitHubAPIStatus() {
    if (!this.config.apiHealthCheck) {
      return true;
    }
    
    try {
      this.log("🔍 Checking GitHub API status...");
      
      const options = {
        hostname: 'api.github.com',
        path: '/status',
        method: 'GET',
        headers: {
          'User-Agent': 'Enhanced-GitHub-Actions-Redundancy',
          'Accept': 'application/vnd.github.v3+json'
        }
      };

      if (process.env.GITHUB_TOKEN) {
        options.headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      }

      return new Promise((resolve) => {
        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => data += chunk);
          res.on('end', () => {
            try {
              const status = JSON.parse(data);
              if (status.status && status.status.indicator !== 'none') {
                this.log(`⚠️ GitHub API status: ${status.status.description}`, "WARN");
                resolve(false);
              } else {
                this.log("✅ GitHub API is healthy");
                resolve(true);
              }
            } catch (error) {
              this.log(`⚠️ Could not parse GitHub API status: ${error.message}`, "WARN");
              resolve(false);
            }
          });
        });

        req.on('error', (error) => {
          this.log(`⚠️ GitHub API check failed: ${error.message}`, "WARN");
          resolve(false);
        });

        req.setTimeout(10000);
        req.end();
      });
    } catch (error) {
      this.log(`⚠️ GitHub API status check failed: ${error.message}`, "WARN");
      return false;
    }
  }

  async checkRecentWorkflowRuns() {
    try {
      this.log("🔍 Checking recent workflow activity...");
      
      // Check git log for recent workflow-related commits
      const gitResult = await this.runCommand("git", ["log", "--since", "1 hour ago", "--oneline"]);
      
      if (gitResult.status === 0) {
        const commits = gitResult.stdout;
        let workflowActivity = false;
        
        // Check for workflow-related commits
        const workflowPatterns = [
          /workflow/i,
          /github.actions/i,
          /ci.cd/i,
          /automation/i
        ];
        
        for (const pattern of workflowPatterns) {
          if (pattern.test(commits)) {
            workflowActivity = true;
            break;
          }
        }
        
        if (workflowActivity) {
          this.log("📊 Recent workflow activity detected");
        } else {
          this.log("📊 No recent workflow activity");
        }
        
        return workflowActivity;
      } else {
        this.log("⚠️ Could not check recent workflow runs", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`⚠️ Could not check recent workflow runs: ${error.message}`, "WARN");
      return false;
    }
  }

  async checkWorkflowTriggers() {
    try {
      this.log("🔍 Checking workflow trigger configurations...");
      
      let allValid = true;
      
      for (const workflowFile of this.config.workflows) {
        if (fs.existsSync(workflowFile)) {
          try {
            const yaml = require('js-yaml');
            const workflowContent = fs.readFileSync(workflowFile, 'utf8');
            const workflow = yaml.load(workflowContent);
            
            // Check for valid triggers
            if (workflow.on) {
              const triggers = Object.keys(workflow.on);
              this.log(`📋 Workflow ${path.basename(workflowFile)} has triggers: ${triggers.join(', ')}`);
              
              // Validate specific trigger types
              if (workflow.on.schedule) {
                for (const schedule of workflow.on.schedule) {
                  if (schedule.cron) {
                    this.log(`⏰ Cron schedule: ${schedule.cron}`);
                  }
                }
              }
              
              if (workflow.on.workflow_dispatch) {
                this.log("✅ Manual trigger enabled");
              }
            } else {
              this.log(`⚠️ Workflow ${path.basename(workflowFile)} has no triggers`, "WARN");
              allValid = false;
            }
          } catch (error) {
            this.log(`❌ Could not parse workflow ${workflowFile}: ${error.message}`, "ERROR");
            allValid = false;
          }
        }
      }
      
      return allValid;
    } catch (error) {
      this.log(`❌ Workflow trigger check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkRepositoryStatus() {
    try {
      this.log("🔍 Checking repository status...");
      
      // Check git status
      const statusResult = await this.runCommand("git", ["status", "--porcelain"]);
      
      if (statusResult.status === 0) {
        if (statusResult.stdout.trim()) {
          this.log("⚠️ Repository has uncommitted changes", "WARN");
          return false;
        } else {
          this.log("✅ Repository is clean");
          return true;
        }
      } else {
        this.log("⚠️ Could not check repository status", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Repository status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkRemoteStatus() {
    try {
      this.log("🔍 Checking remote repository status...");
      
      // Check if we're up to date with remote
      const fetchResult = await this.runCommand("git", ["fetch", "origin"]);
      
      if (fetchResult.status === 0) {
        const statusResult = await this.runCommand("git", ["status", "-uno"]);
        
        if (statusResult.status === 0) {
          if (statusResult.stdout.includes('Your branch is up to date')) {
            this.log("✅ Repository is up to date with remote");
            return true;
          } else if (statusResult.stdout.includes('Your branch is behind')) {
            this.log("⚠️ Repository is behind remote", "WARN");
            return false;
          } else if (statusResult.stdout.includes('Your branch is ahead')) {
            this.log("⚠️ Repository is ahead of remote", "WARN");
            return false;
          } else {
            this.log("⚠️ Repository status unclear", "WARN");
            return false;
          }
        }
      } else {
        this.log("⚠️ Could not fetch from remote", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Remote status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflowRecovery() {
    try {
      this.log("🔄 Triggering workflow recovery...");
      
      // Backup workflow files
      await this.backupWorkflowFiles();
      
      // Check if we need to sync with remote
      const remoteStatus = await this.checkRemoteStatus();
      if (!remoteStatus) {
        this.log("🔄 Syncing with remote repository...");
        await this.runCommand("git", ["pull", "origin", "main"]);
      }
      
      // Validate all workflows
      let allValid = true;
      for (const workflowFile of this.config.workflows) {
        const isValid = await this.validateWorkflowFile(workflowFile);
        if (!isValid) {
          allValid = false;
        }
      }
      
      if (!allValid) {
        this.log("⚠️ Some workflows are invalid, attempting to restore from backup...", "WARN");
        await this.restoreWorkflowsFromBackup();
      }
      
      // Trigger a manual workflow run if needed
      if (this.config.autoTrigger) {
        this.log("🔄 Triggering manual workflow run...");
        await this.runCommand("git", ["push", "origin", "HEAD:main"]);
      }
      
      this.log("✅ Workflow recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Workflow recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreWorkflowsFromBackup() {
    try {
      this.log("🔄 Restoring workflows from backup...");
      
      // Find the most recent backup for each workflow
      for (const workflowFile of this.config.workflows) {
        const workflowName = path.basename(workflowFile);
        const backupFiles = fs.readdirSync(this.config.backupDir)
          .filter(file => file.startsWith(workflowName) && file.endsWith('.backup'))
          .sort()
          .reverse();
        
        if (backupFiles.length > 0) {
          const latestBackup = backupFiles[0];
          const backupPath = path.join(this.config.backupDir, latestBackup);
          
          this.log(`🔄 Restoring ${workflowFile} from ${latestBackup}`);
          fs.copyFileSync(backupPath, workflowFile);
        }
      }
      
      this.log("✅ Workflows restored from backup");
    } catch (error) {
      this.log(`❌ Failed to restore workflows from backup: ${error.message}`, "ERROR");
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive GitHub Actions health check...");
    
    const results = {
      workflowsDirectory: false,
      workflowFiles: [],
      apiStatus: false,
      recentActivity: false,
      triggers: false,
      repositoryStatus: false,
      remoteStatus: false,
      timestamp: new Date().toISOString()
    };
    
    try {
      // Check workflows directory
      const dirCheck = await this.checkWorkflowsDirectory();
      results.workflowsDirectory = dirCheck.exists;
      
      // Check each workflow file
      for (const workflowFile of this.config.workflows) {
        const isValid = await this.validateWorkflowFile(workflowFile);
        results.workflowFiles.push({
          file: workflowFile,
          valid: isValid
        });
      }
      
      // Check GitHub API status
      results.apiStatus = await this.checkGitHubAPIStatus();
      
      // Check recent workflow activity
      results.recentActivity = await this.checkRecentWorkflowRuns();
      
      // Check workflow triggers
      results.triggers = await this.checkWorkflowTriggers();
      
      // Check repository status
      results.repositoryStatus = await this.checkRepositoryStatus();
      
      // Check remote status
      results.remoteStatus = await this.checkRemoteStatus();
      
      // Log results
      this.log("📊 GitHub Actions Health Check Results:");
      this.log(`  Workflows Directory: ${results.workflowsDirectory ? '✅' : '❌'}`);
      this.log(`  Workflow Files: ${results.workflowFiles.filter(f => f.valid).length}/${results.workflowFiles.length} valid`);
      this.log(`  GitHub API: ${results.apiStatus ? '✅' : '❌'}`);
      this.log(`  Recent Activity: ${results.recentActivity ? '✅' : '❌'}`);
      this.log(`  Triggers: ${results.triggers ? '✅' : '❌'}`);
      this.log(`  Repository Status: ${results.repositoryStatus ? '✅' : '❌'}`);
      this.log(`  Remote Status: ${results.remoteStatus ? '✅' : '❌'}`);
      
      // Save results
      this.saveHealthCheckResults(results);
      
      // Trigger recovery if needed
      if (!results.workflowsDirectory || results.workflowFiles.some(f => !f.valid) || 
          !results.triggers || !results.repositoryStatus || !results.remoteStatus) {
        await this.triggerWorkflowRecovery();
      }
      
      return results;
    } catch (error) {
      this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
      return results;
    }
  }

  saveHealthCheckResults(results) {
    try {
      const resultsFile = path.join("automation/logs", "github-actions-health-check-results.json");
      const existingResults = fs.existsSync(resultsFile) ? 
        JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : [];
      
      existingResults.push(results);
      
      // Keep only last 100 results
      if (existingResults.length > 100) {
        existingResults.splice(0, existingResults.length - 100);
      }
      
      fs.writeFileSync(resultsFile, JSON.stringify(existingResults, null, 2));
    } catch (error) {
      this.log(`⚠️ Could not save health check results: ${error.message}`, "WARN");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing enhanced GitHub Actions monitoring...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log("✅ Enhanced GitHub Actions monitoring initialized");
  }

  async gracefulShutdown() {
    this.log("🔄 Shutting down enhanced GitHub Actions redundancy system...");
    
    // Backup workflow files before shutdown
    await this.backupWorkflowFiles();
    
    this.log("✅ Enhanced GitHub Actions redundancy system shut down gracefully");
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  if (global.enhancedGitHubActionsRedundancy) {
    global.enhancedGitHubActionsRedundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  if (global.enhancedGitHubActionsRedundancy) {
    global.enhancedGitHubActionsRedundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

// Start the system
if (require.main === module) {
  global.enhancedGitHubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = EnhancedGitHubActionsRedundancy;