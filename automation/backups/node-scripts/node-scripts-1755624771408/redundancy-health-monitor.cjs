#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class RedundancyHealthMonitor {
  constructor() {
    this.config = {
      healthCheckInterval: parseInt(process.env.HEALTH_CHECK_INTERVAL) || 300000, // 5 minutes
      alertThreshold: parseInt(process.env.ALERT_THRESHOLD) || 3,
      logDir: "automation/logs",
      maxLogSize: 5 * 1024 * 1024, // 5MB
      maxLogFiles: 20
    };
    
    this.healthHistory = [];
    this.failureCount = 0;
    this.lastAlertTime = 0;
    this.alertCooldown = 300000; // 5 minutes between alerts
    
    this.ensureLogDirectory();
    this.startMonitoring();
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
    
    const logFile = path.join(this.config.logDir, `redundancy-health-${new Date().toISOString().split('T')[0]}.log`);
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

  async checkPM2Processes() {
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status !== 0) {
        return { healthy: false, error: "PM2 not accessible" };
      }

      const processes = JSON.parse(result.stdout);
      const redundancyProcesses = processes.filter(p => 
        p.name.includes('redundancy') || p.name.includes('zion-auto-sync')
      );

      const healthyProcesses = redundancyProcesses.filter(p => 
        p.pm2_env.status === "online" && p.pm2_env.restart_time < 10
      );

      return {
        healthy: healthyProcesses.length === redundancyProcesses.length,
        total: redundancyProcesses.length,
        healthy: healthyProcesses.length,
        processes: redundancyProcesses.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          restarts: p.pm2_env.restart_time,
          uptime: p.pm2_env.pm_uptime
        }))
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async checkGitHubActions() {
    try {
      const workflows = [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ];

      const results = [];
      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          const content = fs.readFileSync(workflow, 'utf8');
          const isValid = content.includes('name:') && content.includes('on:') && content.includes('jobs:');
          results.push({ workflow, valid: isValid });
        } else {
          results.push({ workflow, valid: false, error: "File not found" });
        }
      }

      const allValid = results.every(r => r.valid);
      return {
        healthy: allValid,
        workflows: results
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async checkNetlifyFunctions() {
    try {
      const manifestPath = "netlify/functions/functions-manifest.json";
      if (!fs.existsSync(manifestPath)) {
        return { healthy: false, error: "Manifest not found" };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      const isRecent = Date.now() - new Date(manifest.generatedAt).getTime() < 3600000; // 1 hour
      const hasFunctions = manifest.functions && Array.isArray(manifest.functions) && manifest.functions.length > 0;

      return {
        healthy: isRecent && hasFunctions,
        generatedAt: manifest.generatedAt,
        functionCount: manifest.functions ? manifest.functions.length : 0,
        isRecent,
        hasFunctions
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async checkGitStatus() {
    try {
      const status = await this.runCommand("git", ["status", "--porcelain"]);
      const fetch = await this.runCommand("git", ["fetch", "--dry-run"]);
      
      const hasChanges = status.stdout.trim().length > 0;
      const canFetch = fetch.status === 0;

      return {
        healthy: canFetch,
        hasLocalChanges: hasChanges,
        canFetch
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async checkBuildSystem() {
    try {
      if (!fs.existsSync("package.json")) {
        return { healthy: false, error: "package.json not found" };
      }

      const packageJson = JSON.parse(fs.readFileSync("package.json", 'utf8'));
      const hasBuildScript = packageJson.scripts && packageJson.scripts.build;
      const hasDependencies = fs.existsSync("node_modules");

      return {
        healthy: hasBuildScript && hasDependencies,
        hasBuildScript,
        hasDependencies
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("Starting comprehensive health check...");
    
    const startTime = Date.now();
    const results = {};

    try {
      // Run all health checks in parallel
      const [pm2, github, netlify, git, build] = await Promise.all([
        this.checkPM2Processes(),
        this.checkGitHubActions(),
        this.checkNetlifyFunctions(),
        this.checkGitStatus(),
        this.checkBuildSystem()
      ]);

      results.pm2 = pm2;
      results.github = github;
      results.netlify = netlify;
      results.git = git;
      results.build = build;

      // Calculate overall health
      const allHealthy = [pm2, github, netlify, git, build].every(r => r.healthy);
      const checkTime = Date.now() - startTime;

      const healthRecord = {
        timestamp: new Date().toISOString(),
        overall: allHealthy,
        checkTime,
        results,
        failureCount: this.failureCount
      };

      this.healthHistory.push(healthRecord);
      
      // Keep only last 100 records
      if (this.healthHistory.length > 100) {
        this.healthHistory = this.healthHistory.slice(-100);
      }

      // Update failure count
      if (!allHealthy) {
        this.failureCount++;
        this.log(`Health check failed (failure #${this.failureCount})`, "WARN");
        
        // Check if we should send an alert
        if (this.failureCount >= this.config.alertThreshold && 
            Date.now() - this.lastAlertTime > this.alertCooldown) {
          await this.sendAlert(results);
          this.lastAlertTime = Date.now();
        }
      } else {
        this.failureCount = 0;
        this.log("Health check passed", "INFO");
      }

      // Log detailed results
      this.log("Health check results:", "INFO");
      this.log(`  PM2: ${pm2.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  GitHub Actions: ${github.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Netlify Functions: ${netlify.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Git: ${git.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Build: ${build.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Overall: ${allHealthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Check time: ${checkTime}ms`, "INFO");

      return healthRecord;
    } catch (error) {
      this.log(`Health check error: ${error.message}`, "ERROR");
      this.failureCount++;
      return { timestamp: new Date().toISOString(), overall: false, error: error.message };
    }
  }

  async sendAlert(results) {
    this.log("Sending health alert...", "WARN");
    
    try {
      // Create alert summary
      const alert = {
        timestamp: new Date().toISOString(),
        type: "HEALTH_ALERT",
        failureCount: this.failureCount,
        summary: {
          pm2: results.pm2.healthy ? 'OK' : 'FAILED',
          github: results.github.healthy ? 'OK' : 'FAILED',
          netlify: results.netlify.healthy ? 'OK' : 'FAILED',
          git: results.git.healthy ? 'OK' : 'FAILED',
          build: results.build.healthy ? 'OK' : 'FAILED'
        },
        details: results
      };

      // Save alert to file
      const alertFile = path.join(this.config.logDir, `health-alert-${Date.now()}.json`);
      fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));

      // Log alert
      this.log(`Health alert saved to ${alertFile}`, "WARN");
      
      // Here you could add additional alert mechanisms like:
      // - Email notifications
      // - Slack/Discord webhooks
      // - SMS alerts
      // - PagerDuty integration
      
    } catch (error) {
      this.log(`Failed to send alert: ${error.message}`, "ERROR");
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logDir)
        .filter(file => file.startsWith('redundancy-health-') && file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.config.logDir, file),
          stats: fs.statSync(path.join(this.config.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      // Remove old log files
      if (logFiles.length > this.config.maxLogFiles) {
        const filesToRemove = logFiles.slice(this.config.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
          this.log(`Removed old log file: ${file.name}`, "INFO");
        }
      }

      // Check log file sizes
      for (const file of logFiles) {
        if (file.stats.size > this.config.maxLogSize) {
          const backupPath = file.path.replace('.log', `.${Date.now()}.log`);
          fs.renameSync(file.path, backupPath);
          this.log(`Rotated large log file: ${file.name} -> ${path.basename(backupPath)}`, "INFO");
        }
      }
    } catch (error) {
      this.log(`Log rotation error: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    this.log("Starting redundancy health monitor...", "INFO");
    
    // Initial health check
    this.performHealthCheck();
    
    // Set up periodic health checks
    setInterval(async () => {
      try {
        await this.performHealthCheck();
        await this.rotateLogs();
      } catch (error) {
        this.log(`Periodic health check error: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);
    
    this.log(`Health monitor started with ${this.config.healthCheckInterval}ms interval`, "INFO");
  }

  getStatus() {
    return {
      system: "Redundancy Health Monitor",
      version: "1.0.0",
      status: "running",
      uptime: process.uptime(),
      failureCount: this.failureCount,
      lastAlertTime: this.lastAlertTime,
      healthHistory: this.healthHistory.slice(-10), // Last 10 records
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }
}

// Export the class
module.exports = RedundancyHealthMonitor;

// If run directly, start the monitor
if (require.main === module) {
  const monitor = new RedundancyHealthMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    monitor.log("Shutting down health monitor...", "INFO");
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    monitor.log("Shutting down health monitor...", "INFO");
    process.exit(0);
  });
  
  monitor.log("Health monitor started", "INFO");
}