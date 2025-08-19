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
      processes: [
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
      memoryThreshold: 80, // 80% memory usage
      cpuThreshold: 90, // 90% CPU usage
      logRotation: {
        maxSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 30,
        compress: true
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

  async getProcessInfo(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        const memoryMatch = output.match(/memory\s+(\d+)/);
        const cpuMatch = output.match(/cpu\s+(\d+)/);
        const statusMatch = output.match(/status\s+(\w+)/);
        
        return {
          name: processName,
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          exists: true
        };
      }
      return { name: processName, exists: false };
    } catch (error) {
      this.log(`Failed to get process info for ${processName}: ${error.message}`, "ERROR");
      return { name: processName, exists: false };
    }
  }

  async checkProcessHealth(processName) {
    const processInfo = await this.getProcessInfo(processName);
    
    if (!processInfo.exists) {
      this.log(`Process ${processName} not found, attempting to start...`, "WARN");
      return await this.startProcess(processName);
    }

    if (processInfo.status !== "online") {
      this.log(`Process ${processName} status: ${processInfo.status}, restarting...`, "WARN");
      return await this.restartProcess(processName);
    }

    // Check resource usage
    if (processInfo.memory > this.config.memoryThreshold) {
      this.log(`Process ${processName} memory usage high: ${processInfo.memory}%, restarting...`, "WARN");
      return await this.restartProcess(processName);
    }

    if (processInfo.cpu > this.config.cpuThreshold) {
      this.log(`Process ${processName} CPU usage high: ${processInfo.cpu}%, restarting...`, "WARN");
      return await this.restartProcess(processName);
    }

    this.log(`Process ${processName} healthy - Status: ${processInfo.status}, Memory: ${processInfo.memory}%, CPU: ${processInfo.cpu}%`);
    return true;
  }

  async startProcess(processName) {
    try {
      // Try to start from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
          if (result.status === 0) {
            this.log(`Successfully started ${processName} from ${ecosystemFile}`);
            return true;
          }
        }
      }
      
      // If ecosystem files don't work, try direct start
      const result = await this.runCommand("pm2", ["start", processName]);
      if (result.status === 0) {
        this.log(`Successfully started ${processName} directly`);
        return true;
      }
      
      this.log(`Failed to start ${processName}`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error starting ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      const restartCount = this.restartCounts.get(processName) || 0;
      
      if (restartCount >= this.config.maxRestartAttempts) {
        this.log(`Process ${processName} exceeded max restart attempts (${this.config.maxRestartAttempts}), stopping...`, "ERROR");
        await this.runCommand("pm2", ["stop", processName]);
        this.restartCounts.set(processName, 0);
        return false;
      }

      this.log(`Restarting process ${processName} (attempt ${restartCount + 1}/${this.config.maxRestartAttempts})`);
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted ${processName}`);
        this.restartCounts.set(processName, restartCount + 1);
        
        // Wait before next health check
        await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
        return true;
      }
      
      this.log(`Failed to restart ${processName}`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error restarting ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllProcesses() {
    this.log("Starting comprehensive PM2 process health check...");
    
    let healthyCount = 0;
    const totalProcesses = this.config.processes.length;
    
    for (const processName of this.config.processes) {
      const isHealthy = await this.checkProcessHealth(processName);
      if (isHealthy) {
        healthyCount++;
      }
      
      // Small delay between checks
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.log(`PM2 health check complete: ${healthyCount}/${totalProcesses} processes healthy`);
    
    // Reset restart counts for healthy processes
    for (const processName of this.config.processes) {
      const processInfo = await this.getProcessInfo(processName);
      if (processInfo.exists && processInfo.status === "online") {
        this.restartCounts.set(processName, 0);
      }
    }
    
    return healthyCount === totalProcesses;
  }

  async setupLogRotation() {
    try {
      this.log("Setting up PM2 log rotation...");
      
      // Install pm2-logrotate if not already installed
      const installResult = await this.runCommand("pm2", ["install", "pm2-logrotate"]);
      
      if (installResult.status === 0) {
        // Configure log rotation
        await this.runCommand("pm2", ["set", "pm2-logrotate:max_size", `${this.config.logRotation.maxSize}`]);
        await this.runCommand("pm2", ["set", "pm2-logrotate:retain", `${this.config.logRotation.maxFiles}`]);
        await this.runCommand("pm2", ["set", "pm2-logrotate:compress", `${this.config.logRotation.compress}`]);
        await this.runCommand("pm2", ["set", "pm2-logrotate:workerInterval", "60"]);
        await this.runCommand("pm2", ["set", "pm2-logrotate:rotateInterval", "0 0 * * *"]);
        
        this.log("PM2 log rotation configured successfully");
      }
    } catch (error) {
      this.log(`Failed to setup log rotation: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }
    
    this.log("Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;
    
    // Setup log rotation
    await this.setupLogRotation();
    
    // Initial health check
    await this.checkAllProcesses();
    
    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.checkAllProcesses();
      } catch (error) {
        this.log(`Error during health check: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);
    
    this.log("Enhanced PM2 redundancy monitoring started");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced PM2 redundancy monitoring stopped");
  }

  async emergencyRestart() {
    this.log("Performing emergency PM2 restart...");
    
    try {
      // Stop all processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Start from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`Starting processes from ${ecosystemFile}...`);
          await this.runCommand("pm2", ["start", ecosystemFile]);
        }
      }
      
      this.log("Emergency restart completed");
      return true;
    } catch (error) {
      this.log(`Emergency restart failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      processes: this.config.processes,
      restartCounts: Object.fromEntries(this.restartCounts),
      config: this.config
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
    case "check":
      redundancy.checkAllProcesses();
      break;
    case "restart":
      redundancy.emergencyRestart();
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|stop|check|restart|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedPM2Redundancy };