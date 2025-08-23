#!/usr/bin/env node
"use strict";

const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

class PM2RedundancyManager {
  constructor() {
    this.config = {
      appName: "zion-redundancy-sync",
      cronAppName: "zion-redundancy-cron",
      scriptPath: path.join(__dirname, "pm2-redundancy-sync.cjs"),
      logDir: path.join(__dirname, "../logs"),
      maxRestarts: 15,
      restartDelay: 1000,
      healthCheckInterval: 30000, // 30 seconds
      gitSyncInterval: 600000, // 10 minutes
      backupRetention: 7 // days
    };
    
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.config.logDir, "pm2-redundancy.log");
    fs.appendFileSync(logFile, logMessage + "\n");
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
      stderr: (result.stderr || "").trim()
    };
  }

  checkPM2Status() {
    const result = this.runCommand("pm2", ["status"]);
    return result.status === 0;
  }

  installPM2() {
    this.log("Installing PM2 globally...");
    const result = this.runCommand("npm", ["install", "-g", "pm2"]);
    if (result.status === 0) {
      this.log("PM2 installed successfully");
      return true;
    } else {
      this.log(`Failed to install PM2: ${result.stderr}`, "ERROR");
      return false;
    }
  }

  createEcosystemConfig() {
    const ecosystemConfig = {
      apps: [
        {
          name: this.config.appName,
          script: this.config.scriptPath,
          interpreter: "node",
          cwd: process.cwd(),
          watch: false,
          autorestart: true,
          max_restarts: this.config.maxRestarts,
          exp_backoff_restart_delay: this.config.restartDelay,
          env: {
            NODE_ENV: "production",
            AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
            AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
            AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
            AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
            AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
            REDUNDANCY_MODE: "true"
          },
          log_date_format: "YYYY-MM-DD HH:mm:ss Z",
          error_file: path.join(this.config.logDir, "redundancy-sync-error.log"),
          out_file: path.join(this.config.logDir, "redundancy-sync-out.log"),
          time: true
        },
        {
          name: this.config.cronAppName,
          script: this.config.scriptPath,
          interpreter: "node",
          cwd: process.cwd(),
          watch: false,
          autorestart: false,
          instances: 1,
          cron_restart: "*/15 * * * *", // every 15 minutes
          env: {
            NODE_ENV: "production",
            AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
            AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
            AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
            AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "0",
            AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
            REDUNDANCY_MODE: "true"
          },
          log_date_format: "YYYY-MM-DD HH:mm:ss Z",
          error_file: path.join(this.config.logDir, "redundancy-cron-error.log"),
          out_file: path.join(this.config.logDir, "redundancy-cron-out.log"),
          time: true
        }
      ]
    };

    const configPath = path.join(process.cwd(), "ecosystem.redundancy.pm2.cjs");
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(ecosystemConfig, null, 2)};`);
    this.log(`Ecosystem config created at: ${configPath}`);
    return configPath;
  }

  startServices() {
    this.log("Starting PM2 redundancy services...");
    
    if (!this.checkPM2Status()) {
      this.log("PM2 not available, attempting to install...");
      if (!this.installPM2()) {
        this.log("Failed to install PM2, cannot start services", "ERROR");
        return false;
      }
    }

    const configPath = this.createEcosystemConfig();
    const result = this.runCommand("pm2", ["start", configPath, "--update-env"]);
    
    if (result.status === 0) {
      this.log("PM2 redundancy services started successfully");
      this.setupLogRotation();
      return true;
    } else {
      this.log(`Failed to start services: ${result.stderr}`, "ERROR");
      return false;
    }
  }

  stopServices() {
    this.log("Stopping PM2 redundancy services...");
    const result = this.runCommand("pm2", ["stop", this.config.appName, this.config.cronAppName]);
    
    if (result.status === 0) {
      this.log("PM2 redundancy services stopped");
      return true;
    } else {
      this.log(`Failed to stop services: ${result.stderr}`, "WARN");
      return false;
    }
  }

  restartServices() {
    this.log("Restarting PM2 redundancy services...");
    const result = this.runCommand("pm2", ["restart", this.config.appName, this.config.cronAppName]);
    
    if (result.status === 0) {
      this.log("PM2 redundancy services restarted");
      return true;
    } else {
      this.log(`Failed to restart services: ${result.stderr}`, "WARN");
      return false;
    }
  }

  setupLogRotation() {
    this.log("Setting up PM2 log rotation...");
    const result = this.runCommand("pm2", ["install", "pm2-logrotate"]);
    
    if (result.status === 0) {
      this.runCommand("pm2", ["set", "pm2-logrotate:max_size", "15M"]);
      this.runCommand("pm2", ["set", "pm2-logrotate:retain", "30"]);
      this.runCommand("pm2", ["set", "pm2-logrotate:compress", "true"]);
      this.runCommand("pm2", ["set", "pm2-logrotate:workerInterval", "60"]);
      this.runCommand("pm2", ["set", "pm2-logrotate:rotateInterval", "0 0 * * *"]);
      this.log("Log rotation configured successfully");
    } else {
      this.log("Failed to setup log rotation", "WARN");
    }
  }

  getStatus() {
    const result = this.runCommand("pm2", ["status"]);
    if (result.status === 0) {
      return {
        status: "running",
        output: result.stdout,
        services: [this.config.appName, this.config.cronAppName]
      };
    } else {
      return {
        status: "error",
        error: result.stderr
      };
    }
  }

  showLogs(lines = 100) {
    this.log(`Showing last ${lines} lines of logs...`);
    const result = this.runCommand("pm2", ["logs", "--lines", lines.toString()]);
    if (result.status === 0) {
      console.log(result.stdout);
    } else {
      this.log(`Failed to show logs: ${result.stderr}`, "ERROR");
    }
  }

  cleanupOldLogs() {
    this.log("Cleaning up old log files...");
    const logFiles = fs.readdirSync(this.config.logDir);
    const now = Date.now();
    const retentionMs = this.config.backupRetention * 24 * 60 * 60 * 1000;
    
    let cleanedCount = 0;
    logFiles.forEach(file => {
      const filePath = path.join(this.config.logDir, file);
      const stats = fs.statSync(filePath);
      if (now - stats.mtime.getTime() > retentionMs) {
        fs.unlinkSync(filePath);
        cleanedCount++;
      }
    });
    
    this.log(`Cleaned up ${cleanedCount} old log files`);
  }

  healthCheck() {
    this.log("Performing health check...");
    
    const status = this.getStatus();
    if (status.status === "running") {
      this.log("Health check passed - services are running");
      return true;
    } else {
      this.log("Health check failed - attempting recovery", "WARN");
      this.restartServices();
      return false;
    }
  }

  startHealthMonitor() {
    this.log("Starting health monitor...");
    
    const monitor = setInterval(() => {
      this.healthCheck();
    }, this.config.healthCheckInterval);
    
    // Store interval reference for cleanup
    this.healthMonitor = monitor;
    
    this.log("Health monitor started");
  }

  stopHealthMonitor() {
    if (this.healthMonitor) {
      clearInterval(this.healthMonitor);
      this.healthMonitor = null;
      this.log("Health monitor stopped");
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.startServices();
      break;
    case "stop":
      manager.stopServices();
      break;
    case "restart":
      manager.restartServices();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "logs":
      manager.showLogs(process.argv[3] || 100);
      break;
    case "health":
      manager.healthCheck();
      break;
    case "monitor":
      manager.startHealthMonitor();
      // Keep process alive
      process.on("SIGINT", () => {
        manager.stopHealthMonitor();
        process.exit(0);
      });
      break;
    case "cleanup":
      manager.cleanupOldLogs();
      break;
    default:
      console.log(`
PM2 Redundancy Manager - Usage:
  node pm2-redundancy-manager.cjs [command]

Commands:
  start     - Start redundancy services
  stop      - Stop redundancy services
  restart   - Restart redundancy services
  status    - Show service status
  logs [n]  - Show last n lines of logs (default: 100)
  health    - Perform health check
  monitor   - Start continuous health monitoring
  cleanup   - Clean up old log files

Examples:
  node pm2-redundancy-manager.cjs start
  node pm2-redundancy-manager.cjs status
  node pm2-redundancy-manager.cjs logs 50
      `);
  }
}

module.exports = PM2RedundancyManager;