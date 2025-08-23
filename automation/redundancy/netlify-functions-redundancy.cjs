#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

class NetlifyFunctionsRedundancy {
  constructor() {
    this.config = {
      functions: {
        a11yAltText: {
          name: "a11y-alt-text-runner-redundancy",
          schedule: "0 */6 * * *", // Every 6 hours
          script: path.join(__dirname, "a11y-alt-text-redundancy.cjs"),
          enabled: true,
          category: "accessibility"
        },
        adaptiveOrchestrator: {
          name: "adaptive-orchestrator-redundancy",
          schedule: "*/30 * * * *", // Every 30 minutes
          script: path.join(__dirname, "adaptive-orchestrator-redundancy.cjs"),
          enabled: true,
          category: "orchestration"
        },
        aiChangelog: {
          name: "ai-changelog-runner-redundancy",
          schedule: "0 */4 * * *", // Every 4 hours
          script: path.join(__dirname, "ai-changelog-redundancy.cjs"),
          enabled: true,
          category: "ai"
        },
        aiTrendsRadar: {
          name: "ai-trends-radar-redundancy",
          schedule: "0 */8 * * *", // Every 8 hours
          script: path.join(__dirname, "ai-trends-radar-redundancy.cjs"),
          enabled: true,
          category: "ai"
        },
        autoDiscovery: {
          name: "auto-discovery-runner-redundancy",
          schedule: "0 */12 * * *", // Every 12 hours
          script: path.join(__dirname, "auto-discovery-redundancy.cjs"),
          enabled: true,
          category: "discovery"
        },
        autoScheduler: {
          name: "auto-scheduler-redundancy",
          schedule: "*/15 * * * *", // Every 15 minutes
          script: path.join(__dirname, "auto-scheduler-redundancy.cjs"),
          enabled: true,
          category: "scheduling"
        },
        buildMonitor: {
          name: "build-monitor-redundancy",
          schedule: "*/10 * * * *", // Every 10 minutes
          script: path.join(__dirname, "build-monitor-redundancy.cjs"),
          enabled: true,
          category: "monitoring"
        },
        contentQuality: {
          name: "content-quality-redundancy",
          schedule: "0 */3 * * *", // Every 3 hours
          script: path.join(__dirname, "content-quality-redundancy.cjs"),
          enabled: true,
          category: "content"
        },
        deadCodeAudit: {
          name: "dead-code-audit-redundancy",
          schedule: "0 1 * * *", // Daily at 1 AM
          script: path.join(__dirname, "dead-code-audit-redundancy.cjs"),
          enabled: true,
          category: "audit"
        },
        dependencyCheck: {
          name: "dependency-check-redundancy",
          schedule: "0 5 * * *", // Daily at 5 AM
          script: path.join(__dirname, "dependency-check-redundancy.cjs"),
          enabled: true,
          category: "dependencies"
        },
        imageOptimizer: {
          name: "image-optimizer-redundancy",
          schedule: "0 */2 * * *", // Every 2 hours
          script: path.join(__dirname, "image-optimizer-redundancy.cjs"),
          enabled: true,
          category: "optimization"
        },
        linkHealth: {
          name: "link-health-redundancy",
          schedule: "0 */4 * * *", // Every 4 hours
          script: path.join(__dirname, "link-health-redundancy.cjs"),
          enabled: true,
          category: "health"
        },
        seoAudit: {
          name: "seo-audit-redundancy",
          schedule: "0 3 * * *", // Daily at 3 AM
          script: path.join(__dirname, "seo-audit-redundancy.cjs"),
          enabled: true,
          category: "seo"
        },
        securityAudit: {
          name: "security-audit-redundancy",
          schedule: "0 4 * * *", // Daily at 4 AM
          script: path.join(__dirname, "security-audit-redundancy.cjs"),
          enabled: true,
          category: "security"
        },
        siteCrawler: {
          name: "site-crawler-redundancy",
          schedule: "0 */6 * * *", // Every 6 hours
          script: path.join(__dirname, "site-crawler-redundancy.cjs"),
          enabled: true,
          category: "crawling"
        },
        sitemapGenerator: {
          name: "sitemap-generator-redundancy",
          schedule: "0 0 * * *", // Daily at midnight
          script: path.join(__dirname, "sitemap-generator-redundancy.cjs"),
          enabled: true,
          category: "sitemap"
        }
      },
      logDir: path.join(__dirname, "../logs"),
      reportDir: path.join(__dirname, "reports"),
      backupDir: path.join(__dirname, "backups"),
      maxConcurrent: 5,
      retryAttempts: 3,
      retryDelay: 10000,
      healthCheckInterval: 60000 // 1 minute
    };
    
    this.activeJobs = new Map();
    this.jobQueue = [];
    this.isRunning = false;
    this.healthMonitor = null;
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.config.logDir, this.config.reportDir, this.config.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.log = (message, level = "INFO") => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      
      console.log(logMessage);
      
      // Write to log file
      const logFile = path.join(this.config.logDir, "netlify-functions-redundancy.log");
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

  async executeFunction(functionName, functionConfig) {
    if (!functionConfig.enabled) {
      this.log(`Function ${functionName} is disabled, skipping`);
      return { success: false, skipped: true };
    }

    if (!fs.existsSync(functionConfig.script)) {
      this.log(`Function script not found: ${functionConfig.script}`, "ERROR");
      return { success: false, error: "Script not found" };
    }

    this.log(`Executing function: ${functionName}`);
    
    const jobId = `${functionName}-${Date.now()}`;
    this.activeJobs.set(jobId, {
      name: functionName,
      category: functionConfig.category,
      startTime: new Date(),
      status: "running"
    });

    try {
      const result = this.runCommand("node", [functionConfig.script]);
      
      const job = this.activeJobs.get(jobId);
      job.status = result.success ? "completed" : "failed";
      job.endTime = new Date();
      job.duration = job.endTime - job.startTime;
      job.result = result;

      if (result.success) {
        this.log(`Function ${functionName} completed successfully`);
        this.generateFunctionReport(functionName, job);
        return { success: true, jobId, result };
      } else {
        this.log(`Function ${functionName} failed: ${result.stderr}`, "ERROR");
        this.generateFunctionReport(functionName, job);
        return { success: false, jobId, error: result.stderr };
      }

    } catch (error) {
      const job = this.activeJobs.get(jobId);
      job.status = "error";
      job.endTime = new Date();
      job.duration = job.endTime - job.startTime;
      job.error = error.message;

      this.log(`Function ${functionName} error: ${error.message}`, "ERROR");
      this.generateFunctionReport(functionName, job);
      return { success: false, jobId, error: error.message };
    } finally {
      // Clean up completed jobs after 2 hours
      setTimeout(() => {
        this.activeJobs.delete(jobId);
      }, 2 * 60 * 60 * 1000);
    }
  }

  generateFunctionReport(functionName, job) {
    const report = {
      function: functionName,
      timestamp: new Date().toISOString(),
      jobId: Object.keys(this.activeJobs).find(id => this.activeJobs.get(id) === job),
      execution: {
        startTime: job.startTime,
        endTime: job.endTime,
        duration: job.duration,
        status: job.status,
        category: job.category
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

    const reportPath = path.join(this.config.reportDir, `${functionName}-${Date.now()}.json`);
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Function report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "WARN");
    }

    return report;
  }

  scheduleFunctions() {
    this.log("Scheduling Netlify Functions redundancy...");
    
    Object.entries(this.config.functions).forEach(([name, config]) => {
      if (!config.enabled) return;
      
      this.log(`Scheduling function: ${name} with cron: ${config.schedule}`);
      
      cron.schedule(config.schedule, async () => {
        await this.queueFunction(name, config);
      }, {
        scheduled: true,
        timezone: "UTC"
      });
    });
    
    this.log("All functions scheduled successfully");
  }

  async queueFunction(functionName, functionConfig) {
    this.log(`Queueing function: ${functionName}`);
    
    this.jobQueue.push({
      name: functionName,
      config: functionConfig,
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
        await this.executeFunction(job.name, job.config);
      } catch (error) {
        this.log(`Function execution error: ${error.message}`, "ERROR");
        
        // Retry logic
        if (job.retries < this.config.retryAttempts) {
          job.retries++;
          this.log(`Retrying function ${job.name} (attempt ${job.retries})`);
          
          setTimeout(() => {
            this.jobQueue.unshift(job);
            this.processQueue();
          }, this.config.retryDelay * job.retries);
        } else {
          this.log(`Max retries reached for function ${job.name}`, "ERROR");
        }
      }
    }
    
    this.isRunning = false;
    
    // Process remaining queue if any
    if (this.jobQueue.length > 0) {
      setTimeout(() => this.processQueue(), 1000);
    }
  }

  async runFunctionNow(functionName) {
    const functionConfig = this.config.functions[functionName];
    if (!functionConfig) {
      throw new Error(`Function ${functionName} not found`);
    }
    
    return await this.executeFunction(functionName, functionConfig);
  }

  getStatus() {
    return {
      activeJobs: Array.from(this.activeJobs.entries()).map(([id, job]) => ({
        id,
        name: job.name,
        category: job.category,
        status: job.status,
        startTime: job.startTime,
        duration: job.duration
      })),
      queueLength: this.jobQueue.length,
      isRunning: this.isRunning,
      functions: Object.entries(this.config.functions).map(([name, config]) => ({
        name,
        category: config.category,
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
        totalFunctions: Object.keys(this.config.functions).length,
        enabledFunctions: Object.values(this.config.functions).filter(f => f.enabled).length,
        activeJobs: status.activeJobs.length,
        queuedJobs: status.queueLength,
        categories: [...new Set(status.functions.map(f => f.category))]
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

  startHealthMonitoring() {
    this.log("Starting health monitoring...");
    
    this.healthMonitor = setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log("Health monitoring started");
  }

  stopHealthMonitoring() {
    if (this.healthMonitor) {
      clearInterval(this.healthMonitor);
      this.healthMonitor = null;
      this.log("Health monitoring stopped");
    }
  }

  async performHealthCheck() {
    this.log("Performing health check...");
    
    const status = this.getStatus();
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: "healthy",
      issues: []
    };

    // Check for stuck jobs
    const stuckJobs = status.activeJobs.filter(job => {
      const duration = Date.now() - job.startTime.getTime();
      return duration > 30 * 60 * 1000; // 30 minutes
    });

    if (stuckJobs.length > 0) {
      healthStatus.overall = "degraded";
      healthStatus.issues.push(`Found ${stuckJobs.length} stuck jobs`);
      
      // Attempt to recover stuck jobs
      stuckJobs.forEach(job => {
        this.log(`Recovering stuck job: ${job.name}`, "WARN");
        this.activeJobs.delete(job.id);
      });
    }

    // Check queue health
    if (status.queueLength > 20) {
      healthStatus.overall = "degraded";
      healthStatus.issues.push(`Queue length is high: ${status.queueLength}`);
    }

    // Check if system is responsive
    if (status.isRunning && status.activeJobs.length === 0 && status.queueLength === 0) {
      healthStatus.overall = "healthy";
    }

    // Log health status
    if (healthStatus.overall === "healthy") {
      this.log("Health check passed");
    } else {
      this.log(`Health check issues: ${healthStatus.issues.join(", ")}`, "WARN");
    }

    // Generate health report
    const healthReportPath = path.join(this.config.reportDir, `health-check-${Date.now()}.json`);
    try {
      fs.writeFileSync(healthReportPath, JSON.stringify(healthStatus, null, 2));
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "WARN");
    }

    return healthStatus;
  }

  start() {
    this.log("Starting Netlify Functions Redundancy Manager...");
    
    try {
      this.scheduleFunctions();
      this.startHealthMonitoring();
      this.log("Netlify Functions Redundancy Manager started successfully");
      
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
    this.log("Stopping Netlify Functions Redundancy Manager...");
    
    // Stop all cron jobs
    cron.getTasks().forEach(task => task.stop());
    
    // Stop health monitoring
    this.stopHealthMonitoring();
    
    this.log("Netlify Functions Redundancy Manager stopped");
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancy();
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
    case "health":
      manager.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case "run":
      const functionName = process.argv[3];
      if (!functionName) {
        console.error("Please specify function name: node netlify-functions-redundancy.cjs run <function-name>");
        process.exit(1);
      }
      manager.runFunctionNow(functionName).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "list":
      console.log("Available functions:");
      Object.entries(manager.config.functions).forEach(([name, config]) => {
        console.log(`  ${name}: ${config.enabled ? "enabled" : "disabled"} (${config.category}) - ${config.schedule}`);
      });
      break;
    default:
      console.log(`
Netlify Functions Redundancy Manager - Usage:
  node netlify-functions-redundancy.cjs [command]

Commands:
  start           - Start the redundancy manager
  status          - Show current status
  report          - Generate status report
  health          - Perform health check
  run <function>  - Run a specific function immediately
  list            - List available functions

Examples:
  node netlify-functions-redundancy.cjs start
  node netlify-functions-redundancy.cjs status
  node netlify-functions-redundancy.cjs run a11yAltText
      `);
  }
}

module.exports = NetlifyFunctionsRedundancy;