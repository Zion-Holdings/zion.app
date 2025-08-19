#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2UltimateRedundancy {
  constructor() {
    this.config = {
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.redundancy.pm2.cjs"
      ],
      criticalProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor",
        "master-redundancy-orchestrator",
        "enhanced-pm2-redundancy",
        "enhanced-github-actions-redundancy",
        "enhanced-netlify-functions-redundancy",
        "ultimate-redundancy-master",
        "comprehensive-monitoring-dashboard"
      ],
      healthCheckInterval: 10000,
      maxRestartAttempts: 15,
      restartDelay: 2000,
      autoRecovery: true,
      processMonitoring: true,
      logRotation: true,
      loadBalancing: true,
      performanceOptimization: true
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startUltimatePM2Monitoring();
  }

  ensureLogDirectory() {
    const logDir = "automation/logs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `pm2-ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 50,
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

  async checkPM2Installation() {
    try {
      const pm2Version = await this.runCommand("pm2", ["--version"]);
      if (pm2Version.status === 0) {
        this.log(`✅ PM2 installed: ${pm2Version.stdout.trim()}`);
        return true;
      } else {
        this.log("❌ PM2 not installed, attempting to install...", "ERROR");
        await this.installPM2();
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async installPM2() {
    try {
      this.log("🔧 Installing PM2...");
      await this.runCommand("npm", ["install", "-g", "pm2"]);
      this.log("✅ PM2 installed successfully");
    } catch (error) {
      this.log(`❌ Failed to install PM2: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Status() {
    try {
      const pm2Status = await this.runCommand("pm2", ["status"]);
      if (pm2Status.status === 0) {
        return true;
      } else {
        this.log("❌ PM2 not responding", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Ecosystem() {
    this.log("🚀 Starting PM2 ecosystem...");
    
    try {
      // Find available ecosystem file
      let ecosystemFile = null;
      for (const file of this.config.ecosystemFiles) {
        if (fs.existsSync(file)) {
          ecosystemFile = file;
          break;
        }
      }
      
      if (!ecosystemFile) {
        this.log("❌ No ecosystem file found", "ERROR");
        return false;
      }
      
      this.log(`📁 Using ecosystem file: ${ecosystemFile}`);
      
      // Start ecosystem
      const result = await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
      if (result.status === 0) {
        this.log("✅ PM2 ecosystem started successfully");
        return true;
      } else {
        this.log(`❌ Failed to start ecosystem: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Ecosystem startup failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const processInfo = await this.runCommand("pm2", ["show", processName]);
      if (processInfo.status === 0) {
        if (processInfo.stdout.includes("online")) {
          return { healthy: true, status: "online" };
        } else if (processInfo.stdout.includes("errored")) {
          return { healthy: false, status: "errored" };
        } else if (processInfo.stdout.includes("stopped")) {
          return { healthy: false, status: "stopped" };
        } else {
          return { healthy: false, status: "unknown" };
        }
      } else {
        return { healthy: false, status: "not_found" };
      }
    } catch (error) {
      return { healthy: false, status: "error", error: error.message };
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`🔄 Restarting process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`✅ Process ${processName} restarted successfully`);
        return true;
      } else {
        this.log(`❌ Failed to restart ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Process restart failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`🚀 Starting process: ${processName}`);
      
      // Find the script file for this process
      let scriptFile = null;
      const possibleScripts = [
        `automation/${processName}.cjs`,
        `automation/${processName}.js`,
        `${processName}.cjs`,
        `${processName}.js`
      ];
      
      for (const script of possibleScripts) {
        if (fs.existsSync(script)) {
          scriptFile = script;
          break;
        }
      }
      
      if (!scriptFile) {
        this.log(`❌ Script file not found for process: ${processName}`, "ERROR");
        return false;
      }
      
      const result = await this.runCommand("pm2", ["start", scriptFile, "--name", processName]);
      if (result.status === 0) {
        this.log(`✅ Process ${processName} started successfully`);
        return true;
      } else {
        this.log(`❌ Failed to start ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Process start failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performPM2HealthCheck() {
    this.log("🔍 Performing comprehensive PM2 health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      pm2Status: false,
      processes: {},
      overall: false
    };
    
    try {
      // Check PM2 installation and status
      const pm2Installed = await this.checkPM2Installation();
      if (!pm2Installed) {
        this.log("❌ PM2 not available", "ERROR");
        return results;
      }
      
      const pm2Responding = await this.checkPM2Status();
      results.pm2Status = pm2Responding;
      
      if (!pm2Responding) {
        this.log("❌ PM2 not responding", "ERROR");
        return results;
      }
      
      // Check each critical process
      let healthyProcesses = 0;
      let totalProcesses = 0;
      
      for (const processName of this.config.criticalProcesses) {
        const health = await this.checkProcessHealth(processName);
        results.processes[processName] = health;
        
        if (health.healthy) {
          healthyProcesses++;
        } else {
          this.log(`⚠️ Process ${processName} is unhealthy (${health.status})`, "WARN");
          
          // Attempt recovery if auto-recovery is enabled
          if (this.config.autoRecovery) {
            if (health.status === "not_found") {
              await this.startProcess(processName);
            } else {
              await this.restartProcess(processName);
            }
          }
        }
        totalProcesses++;
      }
      
      results.overall = healthyProcesses === totalProcesses;
      this.log(`📊 PM2 Health: ${healthyProcesses}/${totalProcesses} processes healthy`);
      
      // Configure PM2 logrotate if not already configured
      if (results.overall) {
        await this.configurePM2Logrotate();
      }
      
      return results;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return results;
    }
  }

  async configurePM2Logrotate() {
    try {
      this.log("🔧 Configuring PM2 logrotate...");
      
      // Install logrotate if not already installed
      await this.runCommand("pm2", ["install", "pm2-logrotate"]);
      
      // Configure logrotate settings
      const settings = [
        ["pm2-logrotate:max_size", "20M"],
        ["pm2-logrotate:retain", "50"],
        ["pm2-logrotate:compress", "true"],
        ["pm2-logrotate:workerInterval", "30"],
        ["pm2-logrotate:rotateInterval", "0 0 * * *"]
      ];
      
      for (const [key, value] of settings) {
        await this.runCommand("pm2", ["set", key, value]);
      }
      
      this.log("✅ PM2 logrotate configured successfully");
    } catch (error) {
      this.log(`⚠️ Failed to configure PM2 logrotate: ${error.message}`, "WARN");
    }
  }

  async savePM2Configuration() {
    try {
      this.log("💾 Saving PM2 configuration...");
      await this.runCommand("pm2", ["save"]);
      this.log("✅ PM2 configuration saved");
    } catch (error) {
      this.log(`⚠️ Failed to save PM2 configuration: ${error.message}`, "WARN");
    }
  }

  async performPM2Optimization() {
    if (!this.config.performanceOptimization) return;
    
    try {
      this.log("⚡ Performing PM2 performance optimization...");
      
      // Set PM2 performance settings
      const optimizations = [
        ["pm2:max_memory_restart", "1G"],
        ["pm2:node_args", "--max-old-space-size=4096"],
        ["pm2:instances", "max"]
      ];
      
      for (const [key, value] of optimizations) {
        await this.runCommand("pm2", ["set", key, value]);
      }
      
      this.log("✅ PM2 performance optimization completed");
    } catch (error) {
      this.log(`⚠️ PM2 optimization failed: ${error.message}`, "WARN");
    }
  }

  async performLoadBalancing() {
    if (!this.config.loadBalancing) return;
    
    try {
      this.log("⚖️ Performing PM2 load balancing...");
      
      // Get current PM2 processes
      const pm2List = await this.runCommand("pm2", ["jlist"]);
      if (pm2List.status === 0) {
        const processes = JSON.parse(pm2List.stdout);
        
        // Identify processes that could benefit from clustering
        const clusterableProcesses = processes.filter(p => 
          p.pm2_env.instances === 1 && 
          !p.name.includes("cron") &&
          !p.name.includes("monitor")
        );
        
        for (const process of clusterableProcesses) {
          this.log(`🔄 Scaling process ${process.name} to max instances`);
          await this.runCommand("pm2", ["scale", process.name, "max"]);
        }
      }
      
      this.log("✅ PM2 load balancing completed");
    } catch (error) {
      this.log(`⚠️ Load balancing failed: ${error.message}`, "WARN");
    }
  }

  async generateHealthReport(results) {
    try {
      const reportFile = path.join("automation/logs", `pm2-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      this.log(`📄 Health report saved to: ${reportFile}`);
    } catch (error) {
      this.log(`❌ Failed to save health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing PM2 ultimate monitoring system...");
    
    // Set up log rotation
    if (this.config.logRotation) {
      this.setupLogRotation();
    }
  }

  setupLogRotation() {
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // Daily
  }

  rotateLogs() {
    try {
      const logFiles = fs.readdirSync("automation/logs")
        .filter(f => f.startsWith('pm2-ultimate-redundancy-') && f.endsWith('.log'))
        .sort()
        .reverse();

      // Keep only the latest 30 log files
      if (logFiles.length > 30) {
        const filesToDelete = logFiles.slice(30);
        filesToDelete.forEach(file => {
          fs.unlinkSync(path.join("automation/logs", file));
        });
        this.log(`🗑️ Rotated ${filesToDelete.length} old log files`);
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  startUltimatePM2Monitoring() {
    this.log("🚀 Starting ultimate PM2 monitoring system...");
    
    // Initial health check
    this.performPM2HealthCheck();
    
    // Continuous monitoring
    setInterval(async () => {
      const results = await this.performPM2HealthCheck();
      
      // Save health report
      this.generateHealthReport(results);
      
      // Perform optimizations if system is healthy
      if (results.overall) {
        await this.performPM2Optimization();
        await this.performLoadBalancing();
        await this.savePM2Configuration();
      }
    }, this.config.healthCheckInterval);
    
    this.log("✅ Ultimate PM2 monitoring system started");
  }

  async getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastCheck: new Date().toISOString()
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const system = new PM2UltimateRedundancy();
  
  switch (args[0]) {
    case 'start':
      console.log("🚀 PM2 ultimate redundancy system started");
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.performPM2HealthCheck();
      break;
    case 'optimize':
      system.performPM2Optimization();
      break;
    case 'balance':
      system.performLoadBalancing();
      break;
    default:
      console.log("Usage: node pm2-ultimate-redundancy.cjs [start|status|health|optimize|balance]");
  }
}

module.exports = PM2UltimateRedundancy;