#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class EnhancedPM2Redundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-pm2-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      criticalProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor"
      ],
      healthCheckInterval: 30000, // 30 seconds
      maxRestartAttempts: 5,
      restartDelay: 5000,
      memoryThreshold: 80, // 80% memory usage threshold
      cpuThreshold: 90, // 90% CPU usage threshold
      logRotation: {
        maxSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 30
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartCounts = new Map();
    this.healthHistory = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
      this.rotateLogs();
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  rotateLogs() {
    try {
      const stats = fs.statSync(this.logFile);
      if (stats.size > this.config.logRotation.maxSize) {
        const backupFile = `${this.logFile}.${new Date().toISOString().split('T')[0]}`;
        fs.renameSync(this.logFile, backupFile);
        
        // Clean up old log files
        const logFiles = fs.readdirSync(this.logDir)
          .filter(file => file.startsWith("enhanced-pm2-redundancy.log."))
          .sort()
          .reverse();
        
        if (logFiles.length > this.config.logRotation.maxFiles) {
          logFiles.slice(this.config.logRotation.maxFiles).forEach(file => {
            fs.unlinkSync(path.join(this.logDir, file));
          });
        }
      }
    } catch (error) {
      // Ignore rotation errors
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const result = await this.runCommand("pm2", ["jlist", "--no-daemon"]);
      if (result.status === 0) {
        return JSON.parse(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status !== 0) {
        return { healthy: false, reason: "Process not found" };
      }

      const output = result.stdout;
      const memoryMatch = output.match(/memory\s+(\d+)/);
      const cpuMatch = output.match(/cpu\s+(\d+)/);
      const statusMatch = output.match(/status\s+(\w+)/);

      if (!statusMatch || statusMatch[1] !== "online") {
        return { healthy: false, reason: "Process not online" };
      }

      const memory = memoryMatch ? parseInt(memoryMatch[1]) : 0;
      const cpu = cpuMatch ? parseInt(cpuMatch[1]) : 0;

      if (memory > this.config.memoryThreshold || cpu > this.config.cpuThreshold) {
        return { 
          healthy: false, 
          reason: `Resource usage high (Memory: ${memory}%, CPU: ${cpu}%)` 
        };
      }

      return { healthy: true, memory, cpu };
    } catch (error) {
      return { healthy: false, reason: `Error: ${error.message}` };
    }
  }

  async restartProcess(processName) {
    const restartCount = this.restartCounts.get(processName) || 0;
    
    if (restartCount >= this.config.maxRestartAttempts) {
      this.log(`Process ${processName} exceeded max restart attempts, attempting full restart`, "WARN");
      await this.fullRestartProcess(processName);
      this.restartCounts.set(processName, 0);
    } else {
      this.log(`Restarting process ${processName} (attempt ${restartCount + 1})`, "WARN");
      await this.runCommand("pm2", ["restart", processName]);
      this.restartCounts.set(processName, restartCount + 1);
    }
  }

  async fullRestartProcess(processName) {
    try {
      this.log(`Performing full restart of ${processName}`, "WARN");
      
      // Stop the process
      await this.runCommand("pm2", ["stop", processName]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start the process
      await this.runCommand("pm2", ["start", processName]);
      
      this.log(`Full restart completed for ${processName}`, "INFO");
    } catch (error) {
      this.log(`Full restart failed for ${processName}: ${error.message}`, "ERROR");
    }
  }

  async restartPM2Daemon() {
    try {
      this.log("Restarting PM2 daemon", "WARN");
      await this.runCommand("pm2", ["kill"]);
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Start all ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`Starting ecosystem file: ${ecosystemFile}`, "INFO");
          await this.runCommand("pm2", ["start", ecosystemFile]);
        }
      }
      
      this.log("PM2 daemon restart completed", "INFO");
    } catch (error) {
      this.log(`PM2 daemon restart failed: ${error.message}`, "ERROR");
    }
  }

  async checkEcosystemFiles() {
    for (const ecosystemFile of this.config.ecosystemFiles) {
      if (!fs.existsSync(ecosystemFile)) {
        this.log(`Ecosystem file not found: ${ecosystemFile}`, "ERROR");
        continue;
      }

      try {
        const content = fs.readFileSync(ecosystemFile, "utf8");
        const config = eval(`(${content})`);
        
        if (!config.apps || !Array.isArray(config.apps)) {
          this.log(`Invalid ecosystem file format: ${ecosystemFile}`, "ERROR");
          continue;
        }

        this.log(`Validated ecosystem file: ${ecosystemFile} (${config.apps.length} apps)`, "INFO");
      } catch (error) {
        this.log(`Error parsing ecosystem file ${ecosystemFile}: ${error.message}`, "ERROR");
      }
    }
  }

  async performHealthCheck() {
    this.log("Starting enhanced PM2 health check...");
    
    // Check PM2 daemon status
    const pm2Healthy = await this.checkPM2Status();
    if (!pm2Healthy) {
      this.log("PM2 daemon unhealthy, attempting restart", "WARN");
      await this.restartPM2Daemon();
      return;
    }

    // Check ecosystem files
    await this.checkEcosystemFiles();

    // Check all critical processes
    const processes = await this.getPM2Processes();
    let unhealthyCount = 0;

    for (const processName of this.config.criticalProcesses) {
      const health = await this.checkProcessHealth(processName);
      
      if (!health.healthy) {
        this.log(`Process ${processName} unhealthy: ${health.reason}`, "WARN");
        unhealthyCount++;
        await this.restartProcess(processName);
      } else {
        this.log(`Process ${processName} healthy (Memory: ${health.memory}%, CPU: ${health.cpu}%)`, "INFO");
        this.restartCounts.set(processName, 0); // Reset restart count for healthy process
      }

      // Store health history
      this.healthHistory.set(processName, {
        timestamp: new Date().toISOString(),
        healthy: health.healthy,
        details: health
      });
    }

    if (unhealthyCount > 0) {
      this.log(`Health check completed: ${unhealthyCount} unhealthy processes`, "WARN");
    } else {
      this.log("Health check completed: All processes healthy", "INFO");
    }

    // Generate health report
    await this.generateHealthReport();
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        pm2Status: await this.checkPM2Status(),
        processes: {},
        summary: {
          total: this.config.criticalProcesses.length,
          healthy: 0,
          unhealthy: 0
        }
      };

      for (const processName of this.config.criticalProcesses) {
        const health = this.healthHistory.get(processName);
        if (health) {
          report.processes[processName] = health;
          if (health.healthy) {
            report.summary.healthy++;
          } else {
            report.summary.unhealthy++;
          }
        }
      }

      const reportFile = path.join(this.logDir, `pm2-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Health report generated: ${reportFile}`, "INFO");
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }

    this.log("Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.performHealthCheck();

    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);

    this.log(`Monitoring started with ${this.config.healthCheckInterval}ms intervals`, "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Monitoring stopped", "INFO");
  }

  async emergencyRecovery() {
    this.log("Initiating emergency recovery procedure", "WARN");
    
    try {
      // Stop all processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2 daemon
      await this.runCommand("pm2", ["start"]);
      
      // Start all ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile]);
        }
      }
      
      this.log("Emergency recovery completed", "INFO");
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      lastHealthCheck: this.healthHistory.size > 0 ? 
        Array.from(this.healthHistory.values()).pop().timestamp : null,
      restartCounts: Object.fromEntries(this.restartCounts),
      healthSummary: {
        total: this.config.criticalProcesses.length,
        healthy: Array.from(this.healthHistory.values()).filter(h => h.healthy).length,
        unhealthy: Array.from(this.healthHistory.values()).filter(h => !h.healthy).length
      }
    };
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new EnhancedPM2Redundancy();
  const command = process.argv[2];

  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "stop":
      redundancy.stopMonitoring();
      break;
    case "health":
      redundancy.performHealthCheck();
      break;
    case "recovery":
      redundancy.emergencyRecovery();
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|stop|health|recovery|status]");
      process.exit(1);
  }
}

module.exports = EnhancedPM2Redundancy;