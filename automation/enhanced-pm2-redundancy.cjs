#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedPM2Redundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-pm2-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.healthMetrics = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      restarts: 0,
      lastCheck: null,
      uptime: Date.now()
    };
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
        return JSON.parse(fs.readFileSync(configPath, "utf8"));
      } catch (error) {
        this.log(`Error loading config: ${error.message}`);
      }
    }
    
    return {
      pm2: {
        enabled: true,
        checkInterval: 30000,
        maxRestarts: 5,
        healthCheckTimeout: 10000,
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron"
        ],
        autoRestart: true,
        restartDelay: 5000,
        memoryThreshold: 80,
        cpuThreshold: 90
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

  async checkPM2Health() {
    this.log("🔍 Starting enhanced PM2 health check...");
    this.healthMetrics.totalChecks++;
    this.healthMetrics.lastCheck = Date.now();
    
    try {
      // Check if PM2 is running
      const pm2Status = await this.runCommand("pm2", ["status"]);
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 is not running, attempting to start...", "ERROR");
        await this.startPM2Services();
        this.healthMetrics.failedChecks++;
        return false;
      }

      // Get detailed PM2 process information
      const processes = await this.getPM2Processes();
      let healthy = true;
      let criticalIssues = 0;

      for (const process of processes) {
        const processHealth = await this.analyzeProcessHealth(process);
        if (!processHealth.healthy) {
          this.log(`⚠️ Process ${process.name} has issues: ${processHealth.issues.join(", ")}`, "WARN");
          healthy = false;
          
          if (processHealth.critical) {
            criticalIssues++;
            await this.handleCriticalProcess(process, processHealth);
          } else {
            await this.handleNonCriticalProcess(process, processHealth);
          }
        }
      }

      // Check system resources
      const systemHealth = await this.checkSystemResources();
      if (!systemHealth.healthy) {
        this.log(`⚠️ System resource issues: ${systemHealth.issues.join(", ")}`, "WARN");
        healthy = false;
        await this.handleSystemResourceIssues(systemHealth);
      }

      // Check PM2 logs for errors
      const logHealth = await this.checkPM2Logs();
      if (!logHealth.healthy) {
        this.log(`⚠️ PM2 log issues detected: ${logHealth.issues.join(", ")}`, "WARN");
        healthy = false;
      }

      if (healthy) {
        this.healthMetrics.successfulChecks++;
        this.log("✅ Enhanced PM2 health check completed successfully");
      } else {
        this.healthMetrics.failedChecks++;
        this.log(`⚠️ PM2 health check completed with ${criticalIssues} critical issues`, "WARN");
      }

      return healthy;
    } catch (error) {
      this.log(`❌ Enhanced PM2 health check failed: ${error.message}`, "ERROR");
      this.healthMetrics.failedChecks++;
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status === 0) {
        return JSON.parse(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Error getting PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async analyzeProcessHealth(process) {
    const issues = [];
    let critical = false;

    // Check process status
    if (process.pm2_env.status !== "online") {
      issues.push(`Status: ${process.pm2_env.status}`);
      critical = true;
    }

    // Check restart count
    if (process.pm2_env.restart_time > this.config.pm2.maxRestarts) {
      issues.push(`High restart count: ${process.pm2_env.restart_time}`);
      critical = true;
    }

    // Check memory usage
    if (process.monit && process.monit.memory > 0) {
      const memoryMB = process.monit.memory / 1024 / 1024;
      if (memoryMB > 500) { // 500MB threshold
        issues.push(`High memory usage: ${memoryMB.toFixed(2)}MB`);
      }
    }

    // Check CPU usage
    if (process.monit && process.monit.cpu > this.config.pm2.cpuThreshold) {
      issues.push(`High CPU usage: ${process.monit.cpu}%`);
    }

    // Check uptime
    if (process.pm2_env.pm_uptime < 60000) { // Less than 1 minute
      issues.push("Recently restarted");
    }

    return {
      healthy: issues.length === 0,
      critical,
      issues
    };
  }

  async checkSystemResources() {
    const issues = [];
    let healthy = true;

    try {
      // Check available memory
      const memInfo = await this.runCommand("free", ["-m"]);
      if (memInfo.status === 0) {
        const lines = memInfo.stdout.split('\n');
        const memLine = lines[1];
        const memValues = memLine.split(/\s+/);
        const totalMem = parseInt(memValues[1]);
        const usedMem = parseInt(memValues[2]);
        const memUsage = (usedMem / totalMem) * 100;
        
        if (memUsage > this.config.pm2.memoryThreshold) {
          issues.push(`High memory usage: ${memUsage.toFixed(2)}%`);
          healthy = false;
        }
      }

      // Check disk space
      const diskInfo = await this.runCommand("df", ["-h", "."]);
      if (diskInfo.status === 0) {
        const lines = diskInfo.stdout.split('\n');
        const diskLine = lines[1];
        const diskValues = diskLine.split(/\s+/);
        const usagePercent = parseInt(diskValues[4].replace('%', ''));
        
        if (usagePercent > 90) {
          issues.push(`Low disk space: ${usagePercent}% used`);
          healthy = false;
        }
      }

      // Check load average
      const loadInfo = await this.runCommand("uptime");
      if (loadInfo.status === 0) {
        const loadMatch = loadInfo.stdout.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
        if (loadMatch) {
          const load1 = parseFloat(loadMatch[1]);
          const load5 = parseFloat(loadMatch[2]);
          const load15 = parseFloat(loadMatch[3]);
          
          if (load1 > 5 || load5 > 3 || load15 > 2) {
            issues.push(`High system load: ${load1.toFixed(2)}, ${load5.toFixed(2)}, ${load15.toFixed(2)}`);
            healthy = false;
          }
        }
      }
    } catch (error) {
      this.log(`Error checking system resources: ${error.message}`, "ERROR");
    }

    return { healthy, issues };
  }

  async checkPM2Logs() {
    const issues = [];
    let healthy = true;

    try {
      // Check recent error logs
      const errorLogs = await this.runCommand("pm2", ["logs", "--err", "--lines", "50"]);
      if (errorLogs.status === 0 && errorLogs.stdout) {
        const errorCount = (errorLogs.stdout.match(/ERROR|CRITICAL|FATAL/g) || []).length;
        if (errorCount > 10) {
          issues.push(`High error count in recent logs: ${errorCount}`);
          healthy = false;
        }
      }

      // Check for specific error patterns
      const criticalErrors = await this.runCommand("pm2", ["logs", "--err", "--lines", "100"]);
      if (criticalErrors.status === 0 && criticalErrors.stdout) {
        const criticalPatterns = [
          /out of memory/i,
          /segmentation fault/i,
          /connection refused/i,
          /timeout/i
        ];
        
        for (const pattern of criticalPatterns) {
          if (pattern.test(criticalErrors.stdout)) {
            issues.push(`Critical error pattern detected: ${pattern.source}`);
            healthy = false;
          }
        }
      }
    } catch (error) {
      this.log(`Error checking PM2 logs: ${error.message}`, "ERROR");
    }

    return { healthy, issues };
  }

  async handleCriticalProcess(process, health) {
    this.log(`🚨 Handling critical process: ${process.name}`, "ERROR");
    
    try {
      // Force restart the process
      await this.runCommand("pm2", ["restart", process.name, "--force"]);
      this.healthMetrics.restarts++;
      this.log(`✅ Force restarted critical process: ${process.name}`);
      
      // Wait for process to stabilize
      await this.sleep(5000);
      
      // Check if restart was successful
      const newStatus = await this.runCommand("pm2", ["show", process.name]);
      if (newStatus.status === 0) {
        this.log(`✅ Process ${process.name} restarted successfully`);
      } else {
        this.log(`❌ Process ${process.name} restart failed`, "ERROR");
        await this.escalateProcessIssue(process);
      }
    } catch (error) {
      this.log(`❌ Failed to handle critical process ${process.name}: ${error.message}`, "ERROR");
      await this.escalateProcessIssue(process);
    }
  }

  async handleNonCriticalProcess(process, health) {
    this.log(`⚠️ Handling non-critical process: ${process.name}`, "WARN");
    
    try {
      // Gentle restart
      await this.runCommand("pm2", ["restart", process.name]);
      this.healthMetrics.restarts++;
      this.log(`✅ Restarted process: ${process.name}`);
    } catch (error) {
      this.log(`❌ Failed to restart process ${process.name}: ${error.message}`, "ERROR");
    }
  }

  async handleSystemResourceIssues(health) {
    this.log("⚠️ Handling system resource issues", "WARN");
    
    try {
      // Attempt to free up memory
      await this.runCommand("pm2", ["gc"]);
      this.log("✅ Triggered PM2 garbage collection");
      
      // Restart processes with high resource usage
      const processes = await this.getPM2Processes();
      for (const process of processes) {
        if (process.monit && process.monit.memory > 0) {
          const memoryMB = process.monit.memory / 1024 / 1024;
          if (memoryMB > 1000) { // 1GB threshold
            this.log(`🔄 Restarting high-memory process: ${process.name} (${memoryMB.toFixed(2)}MB)`);
            await this.runCommand("pm2", ["restart", process.name]);
            this.healthMetrics.restarts++;
          }
        }
      }
    } catch (error) {
      this.log(`❌ Failed to handle system resource issues: ${error.message}`, "ERROR");
    }
  }

  async escalateProcessIssue(process) {
    this.log(`🚨 Escalating process issue: ${process.name}`, "ERROR");
    
    try {
      // Send alert (placeholder for notification system)
      this.log(`ALERT: Process ${process.name} requires manual intervention`, "ERROR");
      
      // Create incident report
      const incidentReport = {
        timestamp: new Date().toISOString(),
        process: process.name,
        status: process.pm2_env.status,
        restartCount: process.pm2_env.restart_time,
        uptime: process.pm2_env.pm_uptime,
        memory: process.monit?.memory || 0,
        cpu: process.monit?.cpu || 0
      };
      
      const reportPath = path.join(this.logDir, `incident-${process.name}-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(incidentReport, null, 2));
      this.log(`📋 Incident report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to escalate process issue: ${error.message}`, "ERROR");
    }
  }

  async startPM2Services() {
    this.log("🚀 Starting PM2 services...");
    
    try {
      // Start the main ecosystem
      await this.runCommand("npm", ["run", "pm2:start"]);
      
      // Start cron services
      await this.runCommand("npm", ["run", "pm2:cron:start"]);
      
      // Wait for services to start
      await this.sleep(10000);
      
      // Verify services are running
      const status = await this.runCommand("pm2", ["status"]);
      if (status.status === 0) {
        this.log("✅ PM2 services started successfully");
        return true;
      } else {
        this.log("❌ PM2 services failed to start", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to start PM2 services: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getHealthMetrics() {
    const uptime = Date.now() - this.healthMetrics.uptime;
    const successRate = this.healthMetrics.totalChecks > 0 
      ? (this.healthMetrics.successfulChecks / this.healthMetrics.totalChecks) * 100 
      : 0;
    
    return {
      ...this.healthMetrics,
      uptime,
      successRate: successRate.toFixed(2),
      healthStatus: successRate > 80 ? "HEALTHY" : successRate > 60 ? "DEGRADED" : "CRITICAL"
    };
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startMonitoring() {
    this.log("🚀 Starting enhanced PM2 redundancy monitoring...");
    
    const interval = this.config.pm2.checkInterval || 30000;
    
    setInterval(async () => {
      await this.checkPM2Health();
    }, interval);
    
    // Initial health check
    await this.checkPM2Health();
    
    this.log(`✅ Enhanced PM2 redundancy monitoring started (interval: ${interval}ms)`);
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
    case "check":
      redundancy.checkPM2Health().then(() => process.exit(0));
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getHealthMetrics(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-pm2-redundancy.cjs [start|check|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedPM2Redundancy };