#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

class GitHubActionsRedundancy {
  constructor() {
    this.config = {
      workflows: {
        marketingSync: {
          name: "marketing-sync-redundancy",
          schedule: "0 */12 * * *", // Every 12 hours
          script: path.join(__dirname, "marketing-sync-redundancy.cjs"),
          enabled: true
        },
        syncHealth: {
          name: "sync-health-redundancy",
          schedule: "*/15 * * * *", // Every 15 minutes
          script: path.join(__dirname, "sync-health-redundancy.cjs"),
          enabled: true
        },
        buildMonitor: {
          name: "build-monitor-redundancy",
          schedule: "*/30 * * * *", // Every 30 minutes
          script: path.join(__dirname, "build-monitor-redundancy.cjs"),
          enabled: true
        },
        securityScan: {
          name: "security-scan-redundancy",
          schedule: "0 2 * * *", // Daily at 2 AM
          script: path.join(__dirname, "security-scan-redundancy.cjs"),
          enabled: true
        },
        dependencyCheck: {
          name: "dependency-check-redundancy",
          schedule: "0 6 * * *", // Daily at 6 AM
          script: path.join(__dirname, "dependency-check-redundancy.cjs"),
          enabled: true
        }
      },
      logDir: path.join(__dirname, "../logs"),
      reportDir: path.join(__dirname, "reports"),
      maxConcurrent: 3,
      retryAttempts: 3,
      retryDelay: 5000
    };
    
    this.activeJobs = new Map();
    this.jobQueue = [];
    this.isRunning = false;
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  setupLogging() {
    this.log = (message, level = "INFO") => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      
      console.log(logMessage);
      
      // Write to log file
      const logFile = path.join(this.config.logDir, "github-actions-redundancy.log");
      try {
        fs.appendFileSync(logFile, logMessage + "\n");
      } catch (error) {
        console.error(`Failed to write to log file: ${error.message}`);
      }
    };
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 20,
      ...options
    });
    
    return {
      status: result.status || 0,
      stdout: (result.stdout || "").trim(),
      stderr: (result.stderr || "").trim(),
      success: (result.status || 0) === 0
    };
  }

  runGit(args, options = {}) {
    return this.runCommand("git", args, options);
  }

  async executeWorkflow(workflowName, workflowConfig) {
    if (!workflowConfig.enabled) {
      this.log(`Workflow ${workflowName} is disabled, skipping`);
      return { success: false, skipped: true };
    }

    if (!fs.existsSync(workflowConfig.script)) {
      this.log(`Workflow script not found: ${workflowConfig.script}`, "ERROR");
      return { success: false, error: "Script not found" };
    }

    this.log(`Executing workflow: ${workflowName}`);
    
    const jobId = `${workflowName}-${Date.now()}`;
    this.activeJobs.set(jobId, {
      name: workflowName,
      startTime: new Date(),
      status: "running"
    });

    try {
      const result = this.runCommand("node", [workflowConfig.script]);
      
      const job = this.activeJobs.get(jobId);
      job.status = result.success ? "completed" : "failed";
      job.endTime = new Date();
      job.duration = job.endTime - job.startTime;
      job.result = result;

      if (result.success) {
        this.log(`Workflow ${workflowName} completed successfully`);
        this.generateWorkflowReport(workflowName, job);
        return { success: true, jobId, result };
      } else {
        this.log(`Workflow ${workflowName} failed: ${result.stderr}`, "ERROR");
        this.generateWorkflowReport(workflowName, job);
        return { success: false, jobId, error: result.stderr };
      }

    } catch (error) {
      const job = this.activeJobs.get(jobId);
      job.status = "error";
      job.endTime = new Date();
      job.duration = job.endTime - job.startTime;
      job.error = error.message;

      this.log(`Workflow ${workflowName} error: ${error.message}`, "ERROR");
      this.generateWorkflowReport(workflowName, job);
      return { success: false, jobId, error: error.message };
    } finally {
      // Clean up completed jobs after 1 hour
      setTimeout(() => {
        this.activeJobs.delete(jobId);
      }, 60 * 60 * 1000);
    }
  }

  generateWorkflowReport(workflowName, job) {
    const report = {
      workflow: workflowName,
      timestamp: new Date().toISOString(),
      jobId: Object.keys(this.activeJobs).find(id => this.activeJobs.get(id) === job),
      execution: {
        startTime: job.startTime,
        endTime: job.endTime,
        duration: job.duration,
        status: job.status
      },
      result: job.result || null,
      error: job.error || null,
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        cwd: process.cwd()
      }
    };

    const reportPath = path.join(this.config.reportDir, `${workflowName}-${Date.now()}.json`);
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Workflow report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "WARN");
    }

    return report;
  }

  scheduleWorkflows() {
    this.log("Scheduling GitHub Actions redundancy workflows...");
    
    Object.entries(this.config.workflows).forEach(([name, config]) => {
      if (!config.enabled) return;
      
      this.log(`Scheduling workflow: ${name} with cron: ${config.schedule}`);
      
      cron.schedule(config.schedule, async () => {
        await this.queueWorkflow(name, config);
      }, {
        scheduled: true,
        timezone: "UTC"
      });
    });
    
    this.log("All workflows scheduled successfully");
  }

  async queueWorkflow(workflowName, workflowConfig) {
    this.log(`Queueing workflow: ${workflowName}`);
    
    this.jobQueue.push({
      name: workflowName,
      config: workflowConfig,
      timestamp: new Date(),
      retries: 0
    });
    
    this.processQueue();
  }

  async processQueue() {
    if (this.isRunning || this.jobQueue.length === 0) {
      return;
    }

    this.isRunning = true;
    
    while (this.jobQueue.length > 0 && this.activeJobs.size < this.config.maxConcurrent) {
      const job = this.jobQueue.shift();
      
      try {
        await this.executeWorkflow(job.name, job.config);
      } catch (error) {
        this.log(`Workflow execution error: ${error.message}`, "ERROR");
        
        // Retry logic
        if (job.retries < this.config.retryAttempts) {
          job.retries++;
          this.log(`Retrying workflow ${job.name} (attempt ${job.retries})`);
          
          setTimeout(() => {
            this.jobQueue.unshift(job);
            this.processQueue();
          }, this.config.retryDelay * job.retries);
        } else {
          this.log(`Max retries reached for workflow ${job.name}`, "ERROR");
        }
      }
    }
    
    this.isRunning = false;
    
    // Process remaining queue if any
    if (this.jobQueue.length > 0) {
      setTimeout(() => this.processQueue(), 1000);
    }
  }

  async runWorkflowNow(workflowName) {
    const workflow = this.config.workflows[workflowName];
    if (!workflow) {
      throw new Error(`Workflow ${workflowName} not found`);
    }
    
    return await this.executeWorkflow(workflowName, workflow);
  }

  getStatus() {
    return {
      activeJobs: Array.from(this.activeJobs.entries()).map(([id, job]) => ({
        id,
        name: job.name,
        status: job.status,
        startTime: job.startTime,
        duration: job.duration
      })),
      queueLength: this.jobQueue.length,
      isRunning: this.isRunning,
      workflows: Object.entries(this.config.workflows).map(([name, config]) => ({
        name,
        enabled: config.enabled,
        schedule: config.schedule,
        script: config.script
      }))
    };
  }

  generateStatusReport() {
    const status = this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      status,
      summary: {
        totalWorkflows: Object.keys(this.config.workflows).length,
        enabledWorkflows: Object.values(this.config.workflows).filter(w => w.enabled).length,
        activeJobs: status.activeJobs.length,
        queuedJobs: status.queueLength
      }
    };

    const reportPath = path.join(this.config.reportDir, "status-report.json");
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Status report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate status report: ${error.message}`, "WARN");
    }

    return report;
  }

  start() {
    this.log("Starting GitHub Actions Redundancy Manager...");
    
    try {
      this.scheduleWorkflows();
      this.log("GitHub Actions Redundancy Manager started successfully");
      
      // Generate initial status report
      this.generateStatusReport();
      
      // Generate status report every hour
      setInterval(() => {
        this.generateStatusReport();
      }, 60 * 60 * 1000);
      
    } catch (error) {
      this.log(`Failed to start manager: ${error.message}`, "ERROR");
      throw error;
    }
  }

  stop() {
    this.log("Stopping GitHub Actions Redundancy Manager...");
    
    // Stop all cron jobs
    cron.getTasks().forEach(task => task.stop());
    
    this.log("GitHub Actions Redundancy Manager stopped");
  }
}

// CLI interface
if (require.main === module) {
  const manager = new GitHubActionsRedundancy();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.start();
      // Keep process alive
      process.on("SIGINT", () => {
        manager.stop();
        process.exit(0);
      });
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(manager.generateStatusReport(), null, 2));
      break;
    case "run":
      const workflowName = process.argv[3];
      if (!workflowName) {
        console.error("Please specify workflow name: node github-actions-redundancy.cjs run <workflow-name>");
        process.exit(1);
      }
      manager.runWorkflowNow(workflowName).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "list":
      console.log("Available workflows:");
      Object.entries(manager.config.workflows).forEach(([name, config]) => {
        console.log(`  ${name}: ${config.enabled ? "enabled" : "disabled"} (${config.schedule})`);
      });
      break;
    default:
      console.log(`
GitHub Actions Redundancy Manager - Usage:
  node github-actions-redundancy.cjs [command]

Commands:
  start           - Start the redundancy manager
  status          - Show current status
  report          - Generate status report
  run <workflow>  - Run a specific workflow immediately
  list            - List available workflows

Examples:
  node github-actions-redundancy.cjs start
  node github-actions-redundancy.cjs status
  node github-actions-redundancy.cjs run marketingSync
      `);
  }
}

module.exports = GitHubActionsRedundancy;