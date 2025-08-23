#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

class MasterRedundancyOrchestrator {
  constructor() {
    this.config = {
      systems: {
        pm2: {
          name: "PM2 Redundancy",
          manager: path.join(__dirname, "pm2-redundancy-manager.cjs"),
          enabled: true,
          autoStart: true,
          healthCheckInterval: 300000, // 5 minutes
          restartOnFailure: true
        },
        githubActions: {
          name: "GitHub Actions Redundancy",
          manager: path.join(__dirname, "github-actions-redundancy.cjs"),
          enabled: true,
          autoStart: true,
          healthCheckInterval: 600000, // 10 minutes
          restartOnFailure: true
        },
        netlifyFunctions: {
          name: "Netlify Functions Redundancy",
          manager: path.join(__dirname, "netlify-functions-redundancy.cjs"),
          enabled: true,
          autoStart: true,
          healthCheckInterval: 900000, // 15 minutes
          restartOnFailure: true
        }
      },
      logDir: path.join(__dirname, "../logs"),
      reportDir: path.join(__dirname, "reports"),
      backupDir: path.join(__dirname, "backups"),
      healthCheckInterval: 120000, // 2 minutes
      maxRestartAttempts: 3,
      restartCooldown: 300000 // 5 minutes
    };
    
    this.systemProcesses = new Map();
    this.systemHealth = new Map();
    this.restartAttempts = new Map();
    this.lastRestart = new Map();
    this.healthMonitor = null;
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.config.logDir, this.config.reportDir, this.config.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.log = (message, level = "INFO") => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] [MASTER] ${message}`;
      
      console.log(logMessage);
      
      // Write to log file
      const logFile = path.join(this.config.logDir, "master-redundancy-orchestrator.log");
      try {
        fs.appendFileSync(logFile, logMessage + "\n");
      } catch (error) {
        console.error(`Failed to write to log file: ${error.message}`);
      }
    };
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
      stderr: (result.stderr || "").trim(),
      success: (result.status || 0) === 0
    };
  }

  async startSystem(systemName, systemConfig) {
    if (!systemConfig.enabled) {
      this.log(`System ${systemName} is disabled, skipping`);
      return { success: false, skipped: true };
    }

    if (!fs.existsSync(systemConfig.manager)) {
      this.log(`System manager not found: ${systemConfig.manager}`, "ERROR");
      return { success: false, error: "Manager not found" };
    }

    this.log(`Starting system: ${systemName}`);
    
    try {
      // Start the system manager
      const process = spawn("node", [systemConfig.manager, "start"], {
        cwd: process.cwd(),
        env: process.env,
        stdio: ["pipe", "pipe", "pipe"]
      });

      // Store process reference
      this.systemProcesses.set(systemName, {
        process,
        startTime: new Date(),
        status: "starting",
        config: systemConfig
      });

      // Monitor process output
      process.stdout.on("data", (data) => {
        this.log(`[${systemName}] ${data.toString().trim()}`);
      });

      process.stderr.on("data", (data) => {
        this.log(`[${systemName}] ERROR: ${data.toString().trim()}`, "ERROR");
      });

      // Handle process exit
      process.on("exit", (code, signal) => {
        this.log(`System ${systemName} exited with code ${code} and signal ${signal}`);
        
        const systemInfo = this.systemProcesses.get(systemName);
        if (systemInfo) {
          systemInfo.status = "stopped";
          systemInfo.exitCode = code;
          systemInfo.exitSignal = signal;
          systemInfo.endTime = new Date();
        }

        // Attempt restart if enabled
        if (systemConfig.restartOnFailure && code !== 0) {
          this.scheduleSystemRestart(systemName);
        }
      });

      // Wait a moment for startup
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if process is still running
      if (process.exitCode === null) {
        this.systemProcesses.get(systemName).status = "running";
        this.log(`System ${systemName} started successfully`);
        return { success: true, pid: process.pid };
      } else {
        this.log(`System ${systemName} failed to start`, "ERROR");
        return { success: false, error: "Process exited during startup" };
      }

    } catch (error) {
      this.log(`Failed to start system ${systemName}: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  async stopSystem(systemName) {
    const systemInfo = this.systemProcesses.get(systemName);
    if (!systemInfo) {
      this.log(`System ${systemName} not found`);
      return { success: false, error: "System not found" };
    }

    this.log(`Stopping system: ${systemName}`);
    
    try {
      // Send SIGTERM first
      systemInfo.process.kill("SIGTERM");
      
      // Wait for graceful shutdown
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Force kill if still running
      if (systemInfo.process.exitCode === null) {
        systemInfo.process.kill("SIGKILL");
      }
      
      systemInfo.status = "stopped";
      systemInfo.endTime = new Date();
      
      this.log(`System ${systemName} stopped`);
      return { success: true };
      
    } catch (error) {
      this.log(`Failed to stop system ${systemName}: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  async restartSystem(systemName) {
    this.log(`Restarting system: ${systemName}`);
    
    const stopResult = await this.stopSystem(systemName);
    if (!stopResult.success) {
      this.log(`Failed to stop system ${systemName} for restart`, "WARN");
    }
    
    // Wait a moment before restarting
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const systemConfig = this.config.systems[systemName];
    const startResult = await this.startSystem(systemName, systemConfig);
    
    if (startResult.success) {
      this.log(`System ${systemName} restarted successfully`);
      // Reset restart attempts on successful restart
      this.restartAttempts.set(systemName, 0);
    } else {
      this.log(`Failed to restart system ${systemName}`, "ERROR");
    }
    
    return startResult;
  }

  scheduleSystemRestart(systemName) {
    const attempts = this.restartAttempts.get(systemName) || 0;
    const lastRestart = this.lastRestart.get(systemName) || 0;
    const now = Date.now();
    
    if (attempts >= this.config.maxRestartAttempts) {
      this.log(`Max restart attempts reached for system ${systemName}`, "ERROR");
      return;
    }
    
    if (now - lastRestart < this.config.restartCooldown) {
      this.log(`Restart cooldown active for system ${systemName}, skipping restart`, "WARN");
      return;
    }
    
    this.log(`Scheduling restart for system ${systemName} (attempt ${attempts + 1})`);
    
    this.restartAttempts.set(systemName, attempts + 1);
    this.lastRestart.set(systemName, now);
    
    // Schedule restart after cooldown
    setTimeout(async () => {
      await this.restartSystem(systemName);
    }, this.config.restartCooldown);
  }

  async checkSystemHealth(systemName) {
    const systemInfo = this.systemProcesses.get(systemName);
    if (!systemInfo) {
      return { healthy: false, reason: "System not running" };
    }

    const systemConfig = this.config.systems[systemName];
    
    try {
      // Check if process is still alive
      if (systemInfo.process.exitCode !== null) {
        return { healthy: false, reason: "Process exited" };
      }

      // Run health check command
      const result = this.runCommand("node", [systemConfig.manager, "status"]);
      
      if (result.success) {
        return { healthy: true, status: result.stdout };
      } else {
        return { healthy: false, reason: "Health check failed", error: result.stderr };
      }
      
    } catch (error) {
      return { healthy: false, reason: "Health check error", error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("Performing master health check...");
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: "healthy",
      systems: {},
      issues: []
    };

    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (!systemConfig.enabled) continue;
      
      const health = await this.checkSystemHealth(systemName);
      healthStatus.systems[systemName] = health;
      
      if (!health.healthy) {
        healthStatus.overall = "degraded";
        healthStatus.issues.push(`${systemName}: ${health.reason}`);
        
        // Attempt recovery if restart is enabled
        if (systemConfig.restartOnFailure) {
          this.scheduleSystemRestart(systemName);
        }
      }
    }

    // Update system health tracking
    this.systemHealth.set(Date.now(), healthStatus);

    // Log health status
    if (healthStatus.overall === "healthy") {
      this.log("Master health check passed");
    } else {
      this.log(`Master health check issues: ${healthStatus.issues.join(", ")}`, "WARN");
    }

    // Generate health report
    const healthReportPath = path.join(this.config.reportDir, `master-health-check-${Date.now()}.json`);
    try {
      fs.writeFileSync(healthReportPath, JSON.stringify(healthStatus, null, 2));
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "WARN");
    }

    return healthStatus;
  }

  startHealthMonitoring() {
    this.log("Starting master health monitoring...");
    
    this.healthMonitor = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log("Master health monitoring started");
  }

  stopHealthMonitoring() {
    if (this.healthMonitor) {
      clearInterval(this.healthMonitor);
      this.healthMonitor = null;
      this.log("Master health monitoring stopped");
    }
  }

  async startAllSystems() {
    this.log("Starting all redundancy systems...");
    
    const results = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled && systemConfig.autoStart) {
        results[systemName] = await this.startSystem(systemName, systemConfig);
      }
    }
    
    const successCount = Object.values(results).filter(r => r.success).length;
    const totalCount = Object.keys(results).length;
    
    this.log(`Started ${successCount}/${totalCount} systems successfully`);
    
    return results;
  }

  async stopAllSystems() {
    this.log("Stopping all redundancy systems...");
    
    const results = {};
    
    for (const systemName of this.systemProcesses.keys()) {
      results[systemName] = await this.stopSystem(systemName);
    }
    
    this.log("All systems stopped");
    return results;
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      systems: {},
      overall: {
        totalSystems: Object.keys(this.config.systems).length,
        enabledSystems: Object.values(this.config.systems).filter(s => s.enabled).length,
        runningSystems: 0,
        stoppedSystems: 0,
        failedSystems: 0
      }
    };

    for (const [systemName, systemInfo] of this.systemProcesses) {
      const systemConfig = this.config.systems[systemName];
      status.systems[systemName] = {
        name: systemConfig.name,
        status: systemInfo.status,
        startTime: systemInfo.startTime,
        endTime: systemInfo.endTime,
        pid: systemInfo.process?.pid,
        exitCode: systemInfo.exitCode,
        exitSignal: systemInfo.exitSignal,
        restartAttempts: this.restartAttempts.get(systemName) || 0,
        lastRestart: this.lastRestart.get(systemName) || null
      };

      // Update overall counts
      if (systemInfo.status === "running") {
        status.overall.runningSystems++;
      } else if (systemInfo.status === "stopped") {
        status.overall.stoppedSystems++;
      } else if (systemInfo.status === "failed") {
        status.overall.failedSystems++;
      }
    }

    return status;
  }

  generateStatusReport() {
    const status = this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      status,
      health: {
        lastHealthCheck: Array.from(this.systemHealth.keys()).pop() || null,
        healthHistory: Array.from(this.systemHealth.entries()).slice(-10) // Last 10 health checks
      }
    };

    const reportPath = path.join(this.config.reportDir, "master-status-report.json");
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Master status report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate status report: ${error.message}`, "WARN");
    }

    return report;
  }

  start() {
    this.log("Starting Master Redundancy Orchestrator...");
    
    try {
      this.startHealthMonitoring();
      this.startAllSystems();
      this.log("Master Redundancy Orchestrator started successfully");
      
      // Generate initial status report
      this.generateStatusReport();
      
      // Generate status report every 30 minutes
      setInterval(() => {
        this.generateStatusReport();
      }, 30 * 60 * 1000);
      
    } catch (error) {
      this.log(`Failed to start orchestrator: ${error.message}`, "ERROR");
      throw error;
    }
  }

  stop() {
    this.log("Stopping Master Redundancy Orchestrator...");
    
    this.stopHealthMonitoring();
    this.stopAllSystems();
    
    this.log("Master Redundancy Orchestrator stopped");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.start();
      // Keep process alive
      process.on("SIGINT", () => {
        orchestrator.stop();
        process.exit(0);
      });
      break;
    case "stop":
      orchestrator.stop();
      break;
    case "restart":
      orchestrator.stop();
      setTimeout(() => orchestrator.start(), 2000);
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(orchestrator.generateStatusReport(), null, 2));
      break;
    case "health":
      orchestrator.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case "start-system":
      const systemName = process.argv[3];
      if (!systemName) {
        console.error("Please specify system name: node master-redundancy-orchestrator.cjs start-system <system-name>");
        process.exit(1);
      }
      const systemConfig = orchestrator.config.systems[systemName];
      if (!systemConfig) {
        console.error(`System ${systemName} not found`);
        process.exit(1);
      }
      orchestrator.startSystem(systemName, systemConfig).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "stop-system":
      const stopSystemName = process.argv[3];
      if (!stopSystemName) {
        console.error("Please specify system name: node master-redundancy-orchestrator.cjs stop-system <system-name>");
        process.exit(1);
      }
      orchestrator.stopSystem(stopSystemName).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "list":
      console.log("Available systems:");
      Object.entries(orchestrator.config.systems).forEach(([name, config]) => {
        console.log(`  ${name}: ${config.enabled ? "enabled" : "disabled"} - ${config.name}`);
      });
      break;
    default:
      console.log(`
Master Redundancy Orchestrator - Usage:
  node master-redundancy-orchestrator.cjs [command]

Commands:
  start                    - Start the orchestrator and all systems
  stop                     - Stop the orchestrator and all systems
  restart                  - Restart the orchestrator
  status                   - Show current status
  report                   - Generate status report
  health                   - Perform health check
  start-system <system>    - Start a specific system
  stop-system <system>     - Stop a specific system
  list                     - List available systems

Examples:
  node master-redundancy-orchestrator.cjs start
  node master-redundancy-orchestrator.cjs status
  node master-redundancy-orchestrator.cjs start-system pm2
      `);
  }
}

module.exports = MasterRedundancyOrchestrator;