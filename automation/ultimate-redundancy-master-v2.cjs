#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

class UltimateRedundancyMasterV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.ultimate-redundancy-v2.pm2.cjs",
          "ecosystem.ultimate-redundancy.pm2.cjs",
          "ecosystem.comprehensive-redundancy.pm2.cjs"
        ],
        processes: [
          "ultimate-pm2-redundancy-manager",
          "ultimate-github-redundancy-manager",
          "ultimate-netlify-redundancy-manager",
          "ultimate-redundancy-master",
          "comprehensive-redundancy-orchestrator"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true
      },
      monitoring: {
        enabled: true,
        interval: 60000,
        autoHealing: true,
        healthScoreThreshold: 80
      }
    };
    
    this.status = {
      healthy: false,
      lastCheck: null,
      components: {},
      uptime: 0
    };
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `ultimate-master-v2-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async start() {
    this.log("Starting Ultimate Redundancy Master V2...");
    
    try {
      // Start PM2 processes
      await this.startPM2Processes();
      
      // Start monitoring
      if (this.config.monitoring.enabled) {
        this.startMonitoring();
      }
      
      this.log("Ultimate Redundancy Master V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Processes() {
    this.log("Starting PM2 processes...");
    
    for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
      if (fs.existsSync(ecosystemFile)) {
        try {
          await this.executeCommand(`pm2 start ${ecosystemFile} --update-env`);
          this.log(`Started ${ecosystemFile}`);
        } catch (error) {
          this.log(`Failed to start ${ecosystemFile}: ${error.message}`, "WARN");
        }
      }
    }
    
    await this.executeCommand("pm2 save");
    this.log("PM2 processes started");
  }

  async executeCommand(command) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, [], {
        shell: true,
        cwd: this.workspace,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  startMonitoring() {
    this.log("Starting monitoring...");
    
    const monitorInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.monitoring.interval);
    
    this.log("Monitoring started");
  }

  async performHealthCheck() {
    this.log("Performing health check...");
    
    try {
      const pm2Status = await this.executeCommand("pm2 ping");
      const pm2List = await this.executeCommand("pm2 list");
      
      this.status.healthy = pm2Status.code === 0;
      this.status.lastCheck = new Date();
      this.status.uptime = process.uptime();
      
      this.log(`Health check completed: ${this.status.healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      return this.status.healthy;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
      this.status.healthy = false;
      return false;
    }
  }

  getStatus() {
    return this.status;
  }

  async runCommand(command) {
    switch (command) {
      case "start":
        return await this.start();
        
      case "health":
        return await this.performHealthCheck();
        
      case "status":
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
        
      default:
        this.log(`Unknown command: ${command}`, "ERROR");
        this.log("Available commands: start, health, status");
    }
  }
}

// CLI interface
if (require.main === module) {
  const master = new UltimateRedundancyMasterV2();
  const command = process.argv[2] || "status";
  
  master.runCommand(command).catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = UltimateRedundancyMasterV2;
