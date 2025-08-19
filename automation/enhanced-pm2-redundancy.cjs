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
      checkInterval: 30000, // 30 seconds
      maxRestartAttempts: 5,
      restartDelay: 5000,
      healthCheckTimeout: 10000,
      backupInterval: 300000, // 5 minutes
      maxLogSize: 10 * 1024 * 1024, // 10MB
      processes: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor"
      ],
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      monitoring: false,
      checkInterval: null
    };
    
    this.processStates = new Map();
    this.restartCounts = new Map();
    this.lastBackup = Date.now();
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
      if (stats.size > this.config.maxLogSize) {
        const backupFile = `${this.logFile}.${Date.now()}`;
        fs.renameSync(this.logFile, backupFile);
        this.log("Log file rotated", "INFO");
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
        timeout: options.timeout || this.config.healthCheckTimeout,
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
        const statusMatch = output.match(/status\s*:\s*(\w+)/);
        const pmIdMatch = output.match(/pm id\s*:\s*(\d+)/);
        const memoryMatch = output.match(/memory\s*:\s*([\d.]+)/);
        const cpuMatch = output.match(/cpu\s*:\s*([\d.]+)/);
        
        return {
          name: processName,
          status: statusMatch ? statusMatch[1] : "unknown",
          pmId: pmIdMatch ? pmIdMatch[1] : null,
          memory: memoryMatch ? parseFloat(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseFloat(cpuMatch[1]) : 0,
          healthy: statusMatch ? ["online", "launching"].includes(statusMatch[1]) : false
        };
      }
      return null;
    } catch (error) {
      this.log(`Failed to get process info for ${processName}: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startProcess(processName, ecosystemFile = null) {
    try {
      let command = ["start", processName];
      if (ecosystemFile) {
        command = ["start", ecosystemFile, "--only", processName];
      }
      
      const result = await this.runCommand("pm2", command);
      if (result.status === 0) {
        this.log(`Successfully started process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to start process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to restart process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopProcess(processName) {
    try {
      const result = await this.runCommand("pm2", ["stop", processName]);
      if (result.status === 0) {
        this.log(`Successfully stopped process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to stop process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error stopping process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deleteProcess(processName) {
    try {
      const result = await this.runCommand("pm2", ["delete", processName]);
      if (result.status === 0) {
        this.log(`Successfully deleted process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to delete process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error deleting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async backupEcosystemFiles() {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/pm2");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      for (const ecosystemFile of this.config.ecosystemFiles) {
        const sourcePath = path.join(this.workspace, ecosystemFile);
        if (fs.existsSync(sourcePath)) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const backupPath = path.join(backupDir, `${path.basename(ecosystemFile)}.${timestamp}`);
          fs.copyFileSync(sourcePath, backupPath);
          this.log(`Backed up ${ecosystemFile} to ${backupPath}`, "INFO");
        }
      }
      
      this.lastBackup = Date.now();
    } catch (error) {
      this.log(`Failed to backup ecosystem files: ${error.message}`, "ERROR");
    }
  }

  async restoreFromBackup(ecosystemFile) {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/pm2");
      if (!fs.existsSync(backupDir)) {
        this.log("No backup directory found", "WARN");
        return false;
      }

      const backups = fs.readdirSync(backupDir)
        .filter(file => file.startsWith(path.basename(ecosystemFile)))
        .sort()
        .reverse();

      if (backups.length === 0) {
        this.log(`No backups found for ${ecosystemFile}`, "WARN");
        return false;
      }

      const latestBackup = path.join(backupDir, backups[0]);
      const targetPath = path.join(this.workspace, ecosystemFile);
      
      fs.copyFileSync(latestBackup, targetPath);
      this.log(`Restored ${ecosystemFile} from backup`, "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to restore from backup: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const processInfo = await this.getProcessInfo(processName);
      if (!processInfo) {
        return { healthy: false, reason: "Process not found" };
      }

      // Check if process is consuming excessive resources
      const memoryThreshold = 500; // 500MB
      const cpuThreshold = 80; // 80%

      if (processInfo.memory > memoryThreshold) {
        return { healthy: false, reason: `High memory usage: ${processInfo.memory}MB` };
      }

      if (processInfo.cpu > cpuThreshold) {
        return { healthy: false, reason: `High CPU usage: ${processInfo.cpu}%` };
      }

      return { healthy: processInfo.healthy, reason: processInfo.healthy ? "OK" : "Process not online" };
    } catch (error) {
      return { healthy: false, reason: `Health check failed: ${error.message}` };
    }
  }

  async recoverProcess(processName) {
    try {
      const restartCount = this.restartCounts.get(processName) || 0;
      
      if (restartCount >= this.config.maxRestartAttempts) {
        this.log(`Process ${processName} exceeded restart limit, attempting full recovery`, "WARN");
        
        // Stop and delete the process
        await this.stopProcess(processName);
        await this.deleteProcess(processName);
        
        // Wait before restarting
        await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
        
        // Try to restart from ecosystem file
        for (const ecosystemFile of this.config.ecosystemFiles) {
          if (await this.startProcess(processName, ecosystemFile)) {
            this.restartCounts.set(processName, 0);
            this.log(`Successfully recovered process ${processName}`, "INFO");
            return true;
          }
        }
        
        this.log(`Failed to recover process ${processName}`, "ERROR");
        return false;
      } else {
        // Normal restart
        if (await this.restartProcess(processName)) {
          this.restartCounts.set(processName, restartCount + 1);
          return true;
        }
        return false;
      }
    } catch (error) {
      this.log(`Error during process recovery: ${error.message}`, "ERROR");
      return false;
    }
  }

  async monitorAllProcesses() {
    this.log("Starting PM2 process monitoring...", "INFO");
    
    for (const processName of this.config.processes) {
      try {
        const health = await this.checkProcessHealth(processName);
        
        if (!health.healthy) {
          this.log(`Process ${processName} unhealthy: ${health.reason}`, "WARN");
          
          if (await this.recoverProcess(processName)) {
            this.log(`Successfully recovered process ${processName}`, "INFO");
          } else {
            this.log(`Failed to recover process ${processName}`, "ERROR");
          }
        } else {
          this.log(`Process ${processName} healthy`, "INFO");
          // Reset restart count for healthy processes
          this.restartCounts.set(processName, 0);
        }
        
        // Store process state
        this.processStates.set(processName, health);
        
      } catch (error) {
        this.log(`Error monitoring process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        pm2Status: await this.checkPM2Status(),
        processes: {},
        summary: {
          total: this.config.processes.length,
          healthy: 0,
          unhealthy: 0,
          recovering: 0
        }
      };

      for (const processName of this.config.processes) {
        const state = this.processStates.get(processName);
        const health = await this.checkProcessHealth(processName);
        
        report.processes[processName] = {
          health: health.healthy,
          reason: health.reason,
          restartCount: this.restartCounts.get(processName) || 0,
          lastCheck: new Date().toISOString()
        };

        if (health.healthy) {
          report.summary.healthy++;
        } else {
          report.summary.unhealthy++;
        }
      }

      // Save report
      const reportPath = path.join(this.logDir, "pm2-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Health report generated: ${reportPath}`, "INFO");
      return report;
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced PM2 redundancy monitoring", "INFO");

    // Initial backup
    await this.backupEcosystemFiles();

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.monitorAllProcesses();
        
        // Backup ecosystem files periodically
        if (Date.now() - this.lastBackup > this.config.backupInterval) {
          await this.backupEcosystemFiles();
        }
        
        // Generate health report every 5 minutes
        if (Date.now() % 300000 < this.config.checkInterval) {
          await this.generateHealthReport();
        }
        
      } catch (error) {
        this.log(`Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("Enhanced PM2 redundancy monitoring started", "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced PM2 redundancy monitoring stopped", "INFO");
  }

  async emergencyRecovery() {
    this.log("Starting emergency PM2 recovery", "WARN");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2 daemon
      await this.runCommand("pm2", ["start"]);
      
      // Wait for daemon to be ready
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Start all processes from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        await this.runCommand("pm2", ["start", ecosystemFile]);
      }
      
      this.log("Emergency PM2 recovery completed", "INFO");
      return true;
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
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
    case "status":
      redundancy.monitorAllProcesses();
      break;
    case "report":
      redundancy.generateHealthReport();
      break;
    case "recovery":
      redundancy.emergencyRecovery();
      break;
    case "backup":
      redundancy.backupEcosystemFiles();
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|stop|status|report|recovery|backup]");
      process.exit(1);
  }
}

module.exports = EnhancedPM2Redundancy;