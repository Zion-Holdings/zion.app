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
        "ecosystem.redundancy.cjs",
        "ecosystem.config.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      processPatterns: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor",
        "fast-ads",
        "cron"
      ],
      healthCheckInterval: 30000, // 30 seconds
      maxRestartAttempts: 5,
      restartDelay: 5000,
      autoDiscovery: true,
      processRecovery: true,
      loadBalancing: true,
      performanceMonitoring: true
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.processRegistry = new Map();
    this.healthMetrics = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
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

  async discoverPM2Processes() {
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("PM2 status check failed", "ERROR");
        return [];
      }

      const lines = statusResult.stdout.split('\n');
      const processes = [];
      
      for (const line of lines) {
        if (line.trim() && !line.includes('┌─') && !line.includes('└─') && !line.includes('─') && !line.includes('│')) {
          const parts = line.trim().split(/\s+/);
          if (parts.length >= 4) {
            processes.push({
              name: parts[0],
              status: parts[1],
              cpu: parts[2],
              memory: parts[3],
              uptime: parts[4] || 'N/A'
            });
          }
        }
      }
      
      return processes;
    } catch (error) {
      this.log(`Error discovering PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      const showResult = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (showResult.status !== 0) {
        return { healthy: false, error: "Process not found" };
      }

      const output = showResult.stdout;
      const isOnline = output.includes("online");
      const isErrored = output.includes("errored");
      const isStopped = output.includes("stopped");
      
      // Extract memory and CPU usage
      const memoryMatch = output.match(/memory\s+(\d+)/);
      const cpuMatch = output.match(/cpu\s+(\d+)/);
      
      const memory = memoryMatch ? parseInt(memoryMatch[1]) : 0;
      const cpu = cpuMatch ? parseInt(cpuMatch[1]) : 0;
      
      return {
        healthy: isOnline && !isErrored && !isStopped,
        status: isOnline ? "online" : isErrored ? "errored" : "stopped",
        memory,
        cpu,
        timestamp: Date.now()
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`, "WARN");
      
      const restartResult = await this.runCommand("pm2", ["restart", processName]);
      
      if (restartResult.status === 0) {
        this.log(`Successfully restarted ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to restart ${processName}: ${restartResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcessFromEcosystem(ecosystemFile) {
    try {
      this.log(`Starting processes from ecosystem file: ${ecosystemFile}`, "INFO");
      
      const startResult = await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
      
      if (startResult.status === 0) {
        this.log(`Successfully started processes from ${ecosystemFile}`, "INFO");
        return true;
      } else {
        this.log(`Failed to start processes from ${ecosystemFile}: ${startResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting processes from ${ecosystemFile}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverFailedProcesses() {
    try {
      const processes = await this.discoverPM2Processes();
      let recoveredCount = 0;
      
      for (const process of processes) {
        if (process.status === "errored" || process.status === "stopped") {
          this.log(`Attempting to recover failed process: ${process.name}`, "WARN");
          
          const recoverySuccess = await this.restartProcess(process.name);
          if (recoverySuccess) {
            recoveredCount++;
          }
          
          // Wait before next recovery attempt
          await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
        }
      }
      
      if (recoveredCount > 0) {
        this.log(`Recovered ${recoveredCount} failed processes`, "INFO");
      }
      
      return recoveredCount;
    } catch (error) {
      this.log(`Error during process recovery: ${error.message}`, "ERROR");
      return 0;
    }
  }

  async checkEcosystemFiles() {
    try {
      const missingFiles = [];
      
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (!fs.existsSync(ecosystemFile)) {
          missingFiles.push(ecosystemFile);
        }
      }
      
      if (missingFiles.length > 0) {
        this.log(`Missing ecosystem files: ${missingFiles.join(', ')}`, "WARN");
      }
      
      return missingFiles.length === 0;
    } catch (error) {
      this.log(`Error checking ecosystem files: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performHealthCheck() {
    try {
      this.log("Performing comprehensive PM2 health check...", "INFO");
      
      // Check ecosystem files
      const ecosystemHealthy = await this.checkEcosystemFiles();
      
      // Discover and check all processes
      const processes = await this.discoverPM2Processes();
      let healthyProcesses = 0;
      let totalProcesses = processes.length;
      
      for (const process of processes) {
        const health = await this.checkProcessHealth(process.name);
        this.healthMetrics.set(process.name, health);
        
        if (health.healthy) {
          healthyProcesses++;
        } else {
          this.log(`Unhealthy process detected: ${process.name} - ${health.status || health.error}`, "WARN");
        }
      }
      
      // Calculate health percentage
      const healthPercentage = totalProcesses > 0 ? (healthyProcesses / totalProcesses) * 100 : 100;
      
      this.log(`Health check complete: ${healthyProcesses}/${totalProcesses} processes healthy (${healthPercentage.toFixed(1)}%)`, "INFO");
      
      // Trigger recovery if needed
      if (healthPercentage < 80) {
        this.log("Health threshold breached, initiating recovery...", "WARN");
        await this.recoverFailedProcesses();
      }
      
      return {
        healthy: healthPercentage >= 80,
        percentage: healthPercentage,
        totalProcesses,
        healthyProcesses,
        ecosystemHealthy
      };
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }
    
    this.log("Starting enhanced PM2 redundancy monitoring...", "INFO");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`Monitoring cycle error: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);
    
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

  async emergencyRestart() {
    try {
      this.log("Initiating emergency PM2 restart...", "WARN");
      
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start from primary ecosystem file
      const primaryEcosystem = this.config.ecosystemFiles[0];
      if (fs.existsSync(primaryEcosystem)) {
        await this.startProcessFromEcosystem(primaryEcosystem);
      }
      
      this.log("Emergency restart completed", "INFO");
      return true;
    } catch (error) {
      this.log(`Emergency restart failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      healthMetrics: Object.fromEntries(this.healthMetrics),
      config: this.config,
      uptime: process.uptime()
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
      redundancy.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "recover":
      redundancy.recoverFailedProcesses().then(count => {
        console.log(`Recovered ${count} processes`);
        process.exit(0);
      });
      break;
    case "emergency":
      redundancy.emergencyRestart().then(success => {
        console.log(`Emergency restart ${success ? 'succeeded' : 'failed'}`);
        process.exit(success ? 0 : 1);
      });
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|stop|health|recover|emergency|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedPM2Redundancy };