#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class EnhancedPM2Redundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-pm2-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      primaryEcosystem: "ecosystem.pm2.cjs",
      redundancyEcosystem: "ecosystem.redundancy.cjs",
      processes: {
        primary: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ]
      },
      healthCheckInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 5000,
      autoRecovery: true,
      backupProcesses: true
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartAttempts = new Map();
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

  async checkPM2Daemon() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`Error checking PM2 daemon: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`Error checking process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getProcessInfo(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        return this.parsePM2ProcessInfo(result.stdout);
      }
      return null;
    } catch (error) {
      this.log(`Error getting process info for ${processName}: ${error.message}`, "ERROR");
      return null;
    }
  }

  parsePM2ProcessInfo(output) {
    const info = {};
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes(':')) {
        const [key, value] = line.split(':').map(s => s.trim());
        if (key && value) {
          info[key] = value;
        }
      }
    }
    
    return info;
  }

  async restartProcess(processName) {
    try {
      this.log(`🔄 Restarting process: ${processName}`);
      
      // Check if process exists
      const exists = await this.checkProcessHealth(processName);
      if (!exists) {
        // Process doesn't exist, start it
        this.log(`📝 Process ${processName} doesn't exist, starting it...`);
        
        if (this.config.processes.primary.includes(processName)) {
          await this.runCommand("pm2", ["start", this.config.primaryEcosystem]);
        } else if (this.config.processes.redundancy.includes(processName)) {
          await this.runCommand("pm2", ["start", this.config.redundancyEcosystem]);
        }
      } else {
        // Process exists, restart it
        await this.runCommand("pm2", ["restart", processName]);
      }
      
      // Wait for restart
      await this.sleep(this.config.restartDelay);
      
      // Verify restart
      const isHealthy = await this.checkProcessHealth(processName);
      if (isHealthy) {
        this.log(`✅ Process ${processName} restarted successfully`);
        this.restartAttempts.set(processName, 0);
        return true;
      } else {
        this.log(`❌ Process ${processName} restart failed`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`📝 Starting process: ${processName}`);
      
      if (this.config.processes.primary.includes(processName)) {
        await this.runCommand("pm2", ["start", this.config.primaryEcosystem]);
      } else if (this.config.processes.redundancy.includes(processName)) {
        await this.runCommand("pm2", ["start", this.config.redundancyEcosystem]);
      }
      
      // Wait for start
      await this.sleep(this.config.restartDelay);
      
      // Verify start
      const isHealthy = await this.checkProcessHealth(processName);
      if (isHealthy) {
        this.log(`✅ Process ${processName} started successfully`);
        return true;
      } else {
        this.log(`❌ Process ${processName} start failed`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createBackupProcesses() {
    if (!this.config.backupProcesses) {
      return;
    }

    this.log("🔄 Creating backup PM2 processes...");
    
    try {
      // Create backup ecosystem file
      const backupEcosystem = this.generateBackupEcosystem();
      const backupPath = path.join(this.workspace, "ecosystem.backup.pm2.cjs");
      
      fs.writeFileSync(backupPath, backupEcosystem);
      this.log(`✅ Created backup ecosystem file: ${backupPath}`);
      
      // Start backup processes
      await this.runCommand("pm2", ["start", backupPath]);
      this.log("✅ Backup PM2 processes started");
      
    } catch (error) {
      this.log(`❌ Error creating backup processes: ${error.message}`, "ERROR");
    }
  }

  generateBackupEcosystem() {
    return `module.exports = {
  apps: [
    {
      name: "backup-zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/backup-zion-auto-sync-error.log",
      out_file: "automation/logs/backup-zion-auto-sync-out.log",
      time: true
    },
    {
      name: "backup-redundancy-system",
      script: "automation/comprehensive-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/backup-redundancy-system-error.log",
      out_file: "automation/logs/backup-redundancy-system-out.log",
      time: true
    }
  ]
};`;
  }

  async performHealthCheck() {
    this.log("🔍 Performing enhanced PM2 health check...");
    
    const results = {
      daemon: false,
      primary: {},
      redundancy: {},
      backup: {},
      timestamp: new Date().toISOString()
    };

    // Check PM2 daemon
    results.daemon = await this.checkPM2Daemon();
    if (!results.daemon) {
      this.log("❌ PM2 daemon is not running, attempting to start...", "ERROR");
      await this.runCommand("pm2", ["start"]);
      results.daemon = await this.checkPM2Daemon();
    }

    // Check primary processes
    for (const processName of this.config.processes.primary) {
      const isHealthy = await this.checkProcessHealth(processName);
      results.primary[processName] = isHealthy;
      
      if (!isHealthy) {
        this.log(`⚠️ Primary process ${processName} is unhealthy`, "WARN");
        if (this.config.autoRecovery) {
          await this.handleProcessFailure(processName, "primary");
        }
      }
    }

    // Check redundancy processes
    for (const processName of this.config.processes.redundancy) {
      const isHealthy = await this.checkProcessHealth(processName);
      results.redundancy[processName] = isHealthy;
      
      if (!isHealthy) {
        this.log(`⚠️ Redundancy process ${processName} is unhealthy`, "WARN");
        if (this.config.autoRecovery) {
          await this.handleProcessFailure(processName, "redundancy");
        }
      }
    }

    // Log results
    this.log(`📊 Health Check Results:
    - PM2 Daemon: ${results.daemon ? '✅ Running' : '❌ Not Running'}
    - Primary Processes: ${Object.values(results.primary).filter(Boolean).length}/${Object.keys(results.primary).length} Healthy
    - Redundancy Processes: ${Object.values(results.redundancy).filter(Boolean).length}/${Object.keys(results.redundancy).length} Healthy`);

    // Save health check results
    const healthCheckFile = path.join(this.logDir, `pm2-health-check-${new Date().toISOString().split('T')[0]}.json`);
    try {
      fs.writeFileSync(healthCheckFile, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save health check results: ${error.message}`, "ERROR");
    }

    return results;
  }

  async handleProcessFailure(processName, processType) {
    const attempts = this.restartAttempts.get(processName) || 0;
    
    if (attempts >= this.config.maxRestartAttempts) {
      this.log(`🚨 Process ${processName} has exceeded max restart attempts (${this.config.maxRestartAttempts})`, "ERROR");
      
      if (processType === "primary") {
        // Try to start redundancy process as backup
        this.log(`🔄 Attempting to start redundancy process as backup for ${processName}`);
        await this.startProcess("redundancy-automation-system");
      }
      
      return false;
    }

    this.log(`🔄 Attempting to restart ${processName} (attempt ${attempts + 1}/${this.config.maxRestartAttempts})`);
    this.restartAttempts.set(processName, attempts + 1);
    
    const success = await this.restartProcess(processName);
    if (success) {
      this.restartAttempts.set(processName, 0);
    }
    
    return success;
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      this.log("🔄 Killed all PM2 processes");
      
      // Wait for cleanup
      await this.sleep(5000);
      
      // Start primary ecosystem
      await this.runCommand("pm2", ["start", this.config.primaryEcosystem]);
      this.log("🔄 Started primary ecosystem");
      
      // Wait for startup
      await this.sleep(10000);
      
      // Start redundancy ecosystem
      await this.runCommand("pm2", ["start", this.config.redundancyEcosystem]);
      this.log("🔄 Started redundancy ecosystem");
      
      // Create backup processes
      await this.createBackupProcesses();
      
      // Perform health check
      await this.performHealthCheck();
      
      this.log("✅ Emergency PM2 recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency PM2 recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.performHealthCheck();

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`❌ Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    this.log(`✅ Enhanced PM2 redundancy monitoring started with ${this.config.healthCheckInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("🛑 Enhanced PM2 redundancy monitoring stopped");
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async cleanup() {
    this.log("🧹 Cleaning up enhanced PM2 redundancy system...");
    
    try {
      await this.stopMonitoring();
      
      // Remove backup ecosystem file if it exists
      const backupPath = path.join(this.workspace, "ecosystem.backup.pm2.cjs");
      if (fs.existsSync(backupPath)) {
        fs.unlinkSync(backupPath);
        this.log("🗑️ Removed backup ecosystem file");
      }
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Error during cleanup: ${error.message}`, "ERROR");
    }
  }
}

// Start the enhanced PM2 redundancy system
if (require.main === module) {
  const system = new EnhancedPM2Redundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    system.log("🛑 Shutting down enhanced PM2 redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    system.log("🛑 Shutting down enhanced PM2 redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  system.startMonitoring();
}

module.exports = EnhancedPM2Redundancy;