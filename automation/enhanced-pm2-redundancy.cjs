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
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
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
        return config.pm2 || {};
      } catch (error) {
        this.log(`Error loading PM2 config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 5000,
      healthCheckTimeout: 15000,
      autoRecovery: true,
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
      monitoring: {
        memoryThreshold: 80, // 80% memory usage
        cpuThreshold: 90,    // 90% CPU usage
        restartThreshold: 3, // restart after 3 failures
        logRotation: true
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
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
        timeout: options.timeout || this.config.healthCheckTimeout || 15000,
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
      const isOnline = output.includes("online");
      const isErrored = output.includes("errored");
      const isStopped = output.includes("stopped");

      if (isErrored || isStopped) {
        return { healthy: false, reason: isErrored ? "Process errored" : "Process stopped" };
      }

      if (!isOnline) {
        return { healthy: false, reason: "Process not online" };
      }

      // Check memory and CPU usage
      const memoryMatch = output.match(/memory\s+(\d+)/);
      const cpuMatch = output.match(/cpu\s+(\d+)/);
      
      if (memoryMatch && cpuMatch) {
        const memory = parseInt(memoryMatch[1]);
        const cpu = parseInt(cpuMatch[1]);
        
        if (memory > this.config.monitoring.memoryThreshold || cpu > this.config.monitoring.cpuThreshold) {
          return { 
            healthy: false, 
            reason: `High resource usage: Memory ${memory}%, CPU ${cpu}%` 
          };
        }
      }

      return { healthy: true };
    } catch (error) {
      this.log(`Health check failed for ${processName}: ${error.message}`, "ERROR");
      return { healthy: false, reason: "Health check error" };
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`, "WARN");
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to restart ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`, "WARN");
      
      // Try to start from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
          if (result.status === 0) {
            this.log(`Successfully started ${processName} from ${ecosystemFile}`, "INFO");
            return true;
          }
        }
      }
      
      this.log(`Failed to start ${processName} from any ecosystem file`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error starting ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverProcess(processName) {
    const attempts = this.recoveryAttempts.get(processName) || 0;
    
    if (attempts >= this.config.maxRestartAttempts) {
      this.log(`Max recovery attempts reached for ${processName}, trying full restart`, "WARN");
      
      // Kill and restart the process completely
      await this.runCommand("pm2", ["delete", processName]);
      await this.startProcess(processName);
      
      this.recoveryAttempts.set(processName, 0);
      return;
    }

    this.recoveryAttempts.set(processName, attempts + 1);
    
    if (attempts === 0) {
      // First attempt: simple restart
      await this.restartProcess(processName);
    } else {
      // Subsequent attempts: wait and restart
      await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
      await this.restartProcess(processName);
    }
  }

  async checkAllProcesses() {
    this.log("Starting comprehensive PM2 health check...", "INFO");
    
    if (!(await this.checkPM2Status())) {
      this.log("PM2 daemon is not running, attempting to start", "WARN");
      await this.runCommand("pm2", ["start"]);
      return;
    }

    const processes = await this.getPM2Processes();
    const criticalProcesses = this.config.criticalProcesses;
    let issuesFound = 0;

    for (const processName of criticalProcesses) {
      const process = processes.find(p => p.name === processName);
      
      if (!process) {
        this.log(`Critical process ${processName} not found, attempting to start`, "WARN");
        await this.startProcess(processName);
        issuesFound++;
        continue;
      }

      const health = await this.checkProcessHealth(processName);
      if (!health.healthy) {
        this.log(`Process ${processName} unhealthy: ${health.reason}`, "WARN");
        await this.recoverProcess(processName);
        issuesFound++;
      } else {
        this.log(`Process ${processName} is healthy`, "INFO");
        this.recoveryAttempts.set(processName, 0);
      }
    }

    // Check for orphaned processes
    for (const process of processes) {
      if (!criticalProcesses.includes(process.name)) {
        this.log(`Found non-critical process: ${process.name}`, "INFO");
      }
    }

    if (issuesFound === 0) {
      this.log("All critical PM2 processes are healthy", "INFO");
    } else {
      this.log(`Found ${issuesFound} issues, recovery attempts initiated`, "WARN");
    }

    return issuesFound;
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced PM2 redundancy monitoring", "INFO");

    const monitor = async () => {
      if (!this.monitoring) return;
      
      try {
        await this.checkAllProcesses();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }

      this.checkInterval = setTimeout(monitor, this.config.checkInterval);
    };

    await monitor();
  }

  async stopMonitoring() {
    this.monitoring = false;
    if (this.checkInterval) {
      clearTimeout(this.checkInterval);
      this.checkInterval = null;
    }
    this.log("Stopped enhanced PM2 redundancy monitoring", "INFO");
  }

  async emergencyRestart() {
    this.log("Initiating emergency PM2 restart", "WARN");
    
    try {
      await this.runCommand("pm2", ["kill"]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile]);
          break;
        }
      }
      
      this.log("Emergency restart completed", "INFO");
    } catch (error) {
      this.log(`Emergency restart failed: ${error.message}`, "ERROR");
    }
  }

  async generateHealthReport() {
    const processes = await this.getPM2Processes();
    const report = {
      timestamp: new Date().toISOString(),
      pm2Status: await this.checkPM2Status(),
      totalProcesses: processes.length,
      criticalProcesses: {},
      issues: [],
      recommendations: []
    };

    for (const processName of this.config.criticalProcesses) {
      const process = processes.find(p => p.name === processName);
      const health = await this.checkProcessHealth(processName);
      
      report.criticalProcesses[processName] = {
        exists: !!process,
        healthy: health.healthy,
        reason: health.reason || null,
        recoveryAttempts: this.recoveryAttempts.get(processName) || 0
      };

      if (!health.healthy) {
        report.issues.push(`${processName}: ${health.reason}`);
      }
    }

    if (report.issues.length > 0) {
      report.recommendations.push("Run emergency restart if issues persist");
      report.recommendations.push("Check system resources and logs");
    }

    return report;
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
    case "check":
      redundancy.checkAllProcesses();
      break;
    case "restart":
      redundancy.emergencyRestart();
      break;
    case "report":
      redundancy.generateHealthReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|stop|check|restart|report]");
      process.exit(1);
  }
}

module.exports = { EnhancedPM2Redundancy };