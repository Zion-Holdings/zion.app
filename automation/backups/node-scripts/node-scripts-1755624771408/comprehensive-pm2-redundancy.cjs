#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensivePM2Redundancy {
  constructor() {
    this.config = {
      ecosystems: [
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
      monitoring: {
        healthCheckInterval: 30000,
        restartDelay: 5000,
        maxRestartAttempts: 5,
        autoRecovery: true,
        processTimeout: 30000
      },
      logging: {
        logDir: "automation/logs",
        logLevel: process.env.PM2_REDUNDANCY_LOG_LEVEL || "INFO"
      }
    };
    
    this.ensureLogDirectory();
    this.processStatus = new Map();
    this.restartAttempts = new Map();
    this.initializeMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [PM2-REDUNDANCY] ${message}`;
    
    if (this.shouldLog(level)) {
      console.log(logEntry);
    }
    
    const logFile = path.join(this.config.logging.logDir, `pm2-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  shouldLog(level) {
    const levels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
    const currentLevel = levels[this.config.logging.logLevel] || 1;
    return levels[level] >= currentLevel;
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: this.config.monitoring.processTimeout,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error,
        timedOut: result.signal === 'SIGTERM'
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

  async getProcessList() {
    try {
      const result = await this.runCommand("pm2", ["jlist", "--no-daemon"]);
      if (result.status === 0) {
        return JSON.parse(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 process list: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log(`Process ${processName} not found in PM2`, "WARN");
        return { status: "not_found", healthy: false };
      }

      // Parse process info
      const processInfo = result.stdout;
      const isOnline = processInfo.includes("status: online");
      const isErrored = processInfo.includes("status: errored");
      const isStopped = processInfo.includes("status: stopped");
      
      let status = "unknown";
      if (isOnline) status = "online";
      else if (isErrored) status = "errored";
      else if (isStopped) status = "stopped";
      
      const healthy = isOnline;
      
      this.processStatus.set(processName, { status, healthy, lastCheck: Date.now() });
      
      return { status, healthy };
    } catch (error) {
      this.log(`Health check failed for ${processName}: ${error.message}`, "ERROR");
      return { status: "error", healthy: false };
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`Restarting process ${processName}...`);
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`Process ${processName} restarted successfully`);
        return true;
      } else {
        this.log(`Failed to restart process ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`Starting process ${processName}...`);
      
      // Try to start from existing ecosystem files
      for (const ecosystem of this.config.ecosystems) {
        if (fs.existsSync(ecosystem)) {
          const result = await this.runCommand("pm2", ["start", ecosystem, "--only", processName]);
          if (result.status === 0) {
            this.log(`Process ${processName} started from ${ecosystem}`);
            return true;
          }
        }
      }
      
      this.log(`Failed to start process ${processName} from any ecosystem`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performProcessRecovery(processName) {
    const attempts = this.restartAttempts.get(processName) || 0;
    
    if (attempts >= this.config.monitoring.maxRestartAttempts) {
      this.log(`Max restart attempts reached for ${processName}, skipping recovery`, "WARN");
      return false;
    }
    
    this.log(`Attempting recovery for ${processName} (attempt ${attempts + 1})`);
    
    // Try restart first
    let recovered = await this.restartProcess(processName);
    
    if (!recovered) {
      // If restart fails, try starting fresh
      recovered = await this.startProcess(processName);
    }
    
    if (recovered) {
      this.restartAttempts.set(processName, 0);
      this.log(`Process ${processName} recovered successfully`);
    } else {
      this.restartAttempts.set(processName, attempts + 1);
      this.log(`Process ${processName} recovery failed`, "ERROR");
    }
    
    return recovered;
  }

  async checkAllProcesses() {
    this.log("Checking all PM2 processes...");
    
    if (!await this.checkPM2Status()) {
      this.log("PM2 is not running, attempting to start...", "WARN");
      await this.startPM2();
      return;
    }
    
    const processList = await this.getProcessList();
    let allHealthy = true;
    
    for (const processName of this.config.processes) {
      const processHealth = await this.checkProcessHealth(processName);
      
      if (!processHealth.healthy) {
        allHealthy = false;
        this.log(`Process ${processName} is unhealthy (${processHealth.status})`, "WARN");
        
        if (this.config.monitoring.autoRecovery) {
          await this.performProcessRecovery(processName);
        }
      } else {
        this.log(`Process ${processName} is healthy`);
      }
    }
    
    if (allHealthy) {
      this.log("All PM2 processes are healthy");
    } else {
      this.log("Some PM2 processes need attention", "WARN");
    }
    
    return allHealthy;
  }

  async startPM2() {
    try {
      this.log("Starting PM2...");
      
      // Try to start from redundancy ecosystem first
      if (fs.existsSync(this.config.ecosystems[1])) {
        const result = await this.runCommand("pm2", ["start", this.config.ecosystems[1]]);
        if (result.status === 0) {
          this.log("PM2 started from redundancy ecosystem");
          return true;
        }
      }
      
      // Fallback to main ecosystem
      if (fs.existsSync(this.config.ecosystems[0])) {
        const result = await this.runCommand("pm2", ["start", this.config.ecosystems[0]]);
        if (result.status === 0) {
          this.log("PM2 started from main ecosystem");
          return true;
        }
      }
      
      this.log("Failed to start PM2 from any ecosystem", "ERROR");
      return false;
    } catch (error) {
      this.log(`Error starting PM2: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performFullRecovery() {
    this.log("Performing full PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      this.log("All PM2 processes killed");
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Start redundancy ecosystem first
      if (fs.existsSync(this.config.ecosystems[1])) {
        await this.runCommand("pm2", ["start", this.config.ecosystems[1]]);
        this.log("Redundancy ecosystem started");
      }
      
      // Start main ecosystem
      if (fs.existsSync(this.config.ecosystems[0])) {
        await this.runCommand("pm2", ["start", this.config.ecosystems[0]]);
        this.log("Main ecosystem started");
      }
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      this.log("PM2 configuration saved");
      
      // Reset restart attempts
      this.restartAttempts.clear();
      
      this.log("Full PM2 recovery completed");
      return true;
    } catch (error) {
      this.log(`Full PM2 recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async savePM2Configuration() {
    try {
      const result = await this.runCommand("pm2", ["save"]);
      if (result.status === 0) {
        this.log("PM2 configuration saved");
        return true;
      } else {
        this.log("Failed to save PM2 configuration", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error saving PM2 configuration: ${error.message}`, "ERROR");
      return false;
    }
  }

  initializeMonitoring() {
    this.log("Initializing PM2 redundancy monitoring...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("Received SIGINT, shutting down gracefully...");
      this.shutdown();
    });
    
    process.on('SIGTERM', () => {
      this.log("Received SIGTERM, shutting down gracefully...");
      this.shutdown();
    });
    
    // Start periodic health checks
    setInterval(() => {
      this.checkAllProcesses();
    }, this.config.monitoring.healthCheckInterval);
    
    // Initial health check
    setTimeout(() => {
      this.checkAllProcesses();
    }, 5000);
  }

  async shutdown() {
    this.log("Shutting down PM2 redundancy system...");
    
    // Save final status
    await this.savePM2Configuration();
    
    this.log("PM2 redundancy system shutdown complete");
    process.exit(0);
  }

  getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      processStatus: Object.fromEntries(this.processStatus),
      restartAttempts: Object.fromEntries(this.restartAttempts),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  async runRecovery() {
    this.log("Running PM2 recovery...");
    return await this.performFullRecovery();
  }
}

// Start the system if this file is run directly
if (require.main === module) {
  const system = new ComprehensivePM2Redundancy();
  
  // Keep the process alive
  process.stdin.resume();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    system.shutdown();
  });
}

module.exports = ComprehensivePM2Redundancy;