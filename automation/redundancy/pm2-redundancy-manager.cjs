#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyManager {
  constructor() {
    this.logsDir = path.join(process.cwd(), "automation", "logs");
    this.backupDir = path.join(process.cwd(), "automation", "backups");
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] PM2-REDUNDANCY: ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, "pm2-redundancy.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  runCommand(command, args = []) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  getPM2Status() {
    const result = this.runCommand("pm2", ["status", "--no-daemon"]);
    if (!result.success) {
      this.log(`Failed to get PM2 status: ${result.stderr}`);
      return null;
    }
    return result.stdout;
  }

  getPM2Processes() {
    const result = this.runCommand("pm2", ["jlist"]);
    if (!result.success) {
      this.log(`Failed to get PM2 processes: ${result.stderr}`);
      return [];
    }
    
    try {
      return JSON.parse(result.stdout);
    } catch (error) {
      this.log(`Failed to parse PM2 processes: ${error.message}`);
      return [];
    }
  }

  backupPM2Configuration() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupFile = path.join(this.backupDir, `pm2-config-${timestamp}.json`);
    
    try {
      const processes = this.getPM2Processes();
      const config = {
        timestamp: new Date().toISOString(),
        processes: processes,
        ecosystem: fs.existsSync("ecosystem.pm2.cjs") ? 
          fs.readFileSync("ecosystem.pm2.cjs", "utf8") : null
      };
      
      fs.writeFileSync(backupFile, JSON.stringify(config, null, 2));
      this.log(`PM2 configuration backed up to: ${backupFile}`);
      return backupFile;
    } catch (error) {
      this.log(`Failed to backup PM2 configuration: ${error.message}`);
      return null;
    }
  }

  restorePM2Configuration(backupFile) {
    if (!fs.existsSync(backupFile)) {
      this.log(`Backup file not found: ${backupFile}`);
      return false;
    }

    try {
      const backup = JSON.parse(fs.readFileSync(backupFile, "utf8"));
      
      // Stop all current processes
      this.runCommand("pm2", ["stop", "all"]);
      this.runCommand("pm2", ["delete", "all"]);
      
      // Restore ecosystem file if it exists
      if (backup.ecosystem) {
        fs.writeFileSync("ecosystem.pm2.cjs", backup.ecosystem);
        this.log("Ecosystem file restored");
      }
      
      // Restart processes
      if (fs.existsSync("ecosystem.pm2.cjs")) {
        this.runCommand("pm2", ["start", "ecosystem.pm2.cjs"]);
        this.log("PM2 processes restored from backup");
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Failed to restore PM2 configuration: ${error.message}`);
      return false;
    }
  }

  startRedundancyProcesses() {
    this.log("Starting PM2 redundancy processes...");
    
    // Start the main auto-sync process
    const autoSyncResult = this.runCommand("pm2", [
      "start", "automation/pm2-auto-sync.js",
      "--name", "zion-auto-sync-redundant",
      "--interpreter", "node",
      "--cwd", process.cwd(),
      "--watch", "false",
      "--autorestart", "true",
      "--max-restarts", "15",
      "--exp-backoff-restart-delay", "1000"
    ]);
    
    if (autoSyncResult.success) {
      this.log("Redundant auto-sync process started");
    } else {
      this.log(`Failed to start redundant auto-sync: ${autoSyncResult.stderr}`);
    }
    
    // Start a backup cron process
    const cronResult = this.runCommand("pm2", [
      "start", "automation/pm2-auto-sync.js",
      "--name", "zion-auto-sync-cron-redundant",
      "--interpreter", "node",
      "--cwd", process.cwd(),
      "--watch", "false",
      "--autorestart", "false",
      "--cron-restart", "*/5 * * * *"
    ]);
    
    if (cronResult.success) {
      this.log("Redundant cron process started");
    } else {
      this.log(`Failed to start redundant cron: ${cronResult.stderr}`);
    }
    
    // Start a health monitor process
    const healthResult = this.runCommand("pm2", [
      "start", "automation/pm2-health-monitor.cjs",
      "--name", "zion-pm2-health-monitor",
      "--interpreter", "node",
      "--cwd", process.cwd(),
      "--watch", "false",
      "--autorestart", "true",
      "--max-restarts", "10"
    ]);
    
    if (healthResult.success) {
      this.log("PM2 health monitor started");
    } else {
      this.log(`Failed to start health monitor: ${healthResult.stderr}`);
    }
  }

  monitorAndRecover() {
    this.log("Monitoring PM2 processes for failures...");
    
    const processes = this.getPM2Processes();
    let needsRecovery = false;
    
    processes.forEach(process => {
      if (process.pm2_env && process.pm2_env.status === "errored") {
        this.log(`Process ${process.name} is in error state, attempting recovery...`);
        needsRecovery = true;
        
        // Try to restart the failed process
        this.runCommand("pm2", ["restart", process.name]);
      }
    });
    
    if (needsRecovery) {
      this.log("Recovery actions completed");
    }
    
    return needsRecovery;
  }

  createRedundancyEcosystem() {
    const redundancyConfig = {
      apps: [
        {
          name: "zion-auto-sync-redundant",
          script: "automation/pm2-auto-sync.js",
          interpreter: "node",
          cwd: __dirname,
          watch: false,
          autorestart: true,
          max_restarts: 15,
          exp_backoff_restart_delay: 1000,
          env: {
            NODE_ENV: "production",
            AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
            AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
            AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
            AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
            AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
          },
          log_date_format: "YYYY-MM-DD HH:mm:ss Z",
          error_file: "automation/logs/zion-auto-sync-redundant-error.log",
          out_file: "automation/logs/zion-auto-sync-redundant-out.log",
          time: true
        },
        {
          name: "zion-auto-sync-cron-redundant",
          script: "automation/pm2-auto-sync.js",
          interpreter: "node",
          cwd: __dirname,
          watch: false,
          autorestart: false,
          instances: 1,
          cron_restart: "*/5 * * * *",
          env: {
            NODE_ENV: "production",
            AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
            AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
            AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
            AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "0",
            AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
          },
          log_date_format: "YYYY-MM-DD HH:mm:ss Z",
          error_file: "automation/logs/zion-auto-sync-cron-redundant-error.log",
          out_file: "automation/logs/zion-auto-sync-cron-redundant-out.log",
          time: true
        },
        {
          name: "zion-pm2-health-monitor",
          script: "automation/pm2-health-monitor.cjs",
          interpreter: "node",
          cwd: __dirname,
          watch: false,
          autorestart: true,
          max_restarts: 10,
          env: {
            NODE_ENV: "production"
          },
          log_date_format: "YYYY-MM-DD HH:mm:ss Z",
          error_file: "automation/logs/zion-pm2-health-monitor-error.log",
          out_file: "automation/logs/zion-pm2-health-monitor-out.log",
          time: true
        }
      ]
    };
    
    const configPath = path.join(process.cwd(), "ecosystem.redundancy.pm2.cjs");
    fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(redundancyConfig, null, 2)};`);
    this.log(`Redundancy ecosystem file created: ${configPath}`);
    return configPath;
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "start":
        this.startRedundancyProcesses();
        break;
      case "backup":
        this.backupPM2Configuration();
        break;
      case "restore":
        const backupFile = process.argv[3];
        if (backupFile) {
          this.restorePM2Configuration(backupFile);
        } else {
          this.log("Please specify backup file path");
        }
        break;
      case "monitor":
        this.monitorAndRecover();
        break;
      case "create-config":
        this.createRedundancyEcosystem();
        break;
      case "status":
        const status = this.getPM2Status();
        if (status) {
          console.log(status);
        }
        break;
      default:
        this.log("Available commands: start, backup, restore <file>, monitor, create-config, status");
        this.log("Usage: node automation/redundancy/pm2-redundancy-manager.cjs <command>");
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  manager.run();
}

module.exports = PM2RedundancyManager;