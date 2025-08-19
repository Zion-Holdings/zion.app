#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.redundancySystems = new Map();
    this.systemStatus = new Map();
    this.overallHealth = "UNKNOWN";
    this.lastCheckTime = null;
    this.alertThreshold = 3;
    this.alertCount = 0;
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
        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        return config.master || {};
      } catch (error) {
        this.log(`Error loading master config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 60000, // 1 minute
      maxFailures: 3,
      alertThreshold: 3,
      autoRecovery: true,
      systems: {
        pm2: {
          enabled: true,
          priority: "HIGH",
          checkInterval: 30000,
          maxRestartAttempts: 5
        },
        githubActions: {
          enabled: true,
          priority: "MEDIUM",
          checkInterval: 60000,
          maxRetries: 3
        },
        netlifyFunctions: {
          enabled: true,
          priority: "MEDIUM",
          checkInterval: 120000,
          maxRetries: 3
        }
      },
      monitoring: {
        healthChecks: true,
        resourceMonitoring: true,
        alerting: true,
        reporting: true,
        autoEscalation: true
      },
      escalation: {
        levels: ["WARN", "ERROR", "CRITICAL"],
        timeouts: [300000, 600000, 1800000], // 5min, 10min, 30min
        actions: ["restart", "redeploy", "emergency"]
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

  async initializeRedundancySystems() {
    this.log("Initializing redundancy systems...", "INFO");
    
    try {
      // Initialize PM2 redundancy
      if (this.config.systems.pm2.enabled) {
        const { EnhancedPM2Redundancy } = require("./enhanced-pm2-redundancy.cjs");
        const pm2Redundancy = new EnhancedPM2Redundancy();
        this.redundancySystems.set("pm2", pm2Redundancy);
        this.log("PM2 redundancy system initialized", "INFO");
      }

      // Initialize GitHub Actions redundancy
      if (this.config.systems.githubActions.enabled) {
        const { EnhancedGitHubActionsRedundancy } = require("./enhanced-github-actions-redundancy.cjs");
        const githubRedundancy = new EnhancedGitHubActionsRedundancy();
        this.redundancySystems.set("githubActions", githubRedundancy);
        this.log("GitHub Actions redundancy system initialized", "INFO");
      }

      // Initialize Netlify Functions redundancy
      if (this.config.systems.netlifyFunctions.enabled) {
        const { EnhancedNetlifyFunctionsRedundancy } = require("./enhanced-netlify-functions-redundancy.cjs");
        const netlifyRedundancy = new EnhancedNetlifyFunctionsRedundancy();
        this.redundancySystems.set("netlifyFunctions", netlifyRedundancy);
        this.log("Netlify Functions redundancy system initialized", "INFO");
      }

      this.log(`Initialized ${this.redundancySystems.size} redundancy systems`, "INFO");
      return true;
    } catch (error) {
      this.log(`Error initializing redundancy systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth(systemName) {
    try {
      const system = this.redundancySystems.get(systemName);
      if (!system) {
        return { healthy: false, reason: "System not initialized" };
      }

      let healthResult;
      switch (systemName) {
        case "pm2":
          healthResult = await system.checkAllProcesses();
          break;
        case "githubActions":
          healthResult = await system.checkAllWorkflows();
          break;
        case "netlifyFunctions":
          healthResult = await system.checkAllFunctions();
          break;
        default:
          return { healthy: false, reason: "Unknown system" };
      }

      const healthy = healthResult === 0;
      this.systemStatus.set(systemName, {
        healthy,
        lastCheck: new Date().toISOString(),
        issues: healthy ? 0 : healthResult,
        status: healthy ? "HEALTHY" : "ISSUES"
      });

      return { healthy, issues: healthResult };
    } catch (error) {
      this.log(`Error checking ${systemName} health: ${error.message}`, "ERROR");
      this.systemStatus.set(systemName, {
        healthy: false,
        lastCheck: new Date().toISOString(),
        issues: 1,
        status: "ERROR"
      });
      return { healthy: false, reason: error.message };
    }
  }

  async checkAllSystems() {
    this.log("Starting comprehensive system health check...", "INFO");
    
    const results = new Map();
    let totalIssues = 0;
    let criticalIssues = 0;

    for (const [systemName, system] of this.redundancySystems) {
      try {
        const health = await this.checkSystemHealth(systemName);
        results.set(systemName, health);
        
        if (!health.healthy) {
          totalIssues += health.issues || 1;
          
          // Check if this is a critical system
          const systemConfig = this.config.systems[systemName];
          if (systemConfig && systemConfig.priority === "HIGH") {
            criticalIssues++;
          }
        }
      } catch (error) {
        this.log(`Error checking ${systemName}: ${error.message}`, "ERROR");
        results.set(systemName, { healthy: false, reason: error.message });
        totalIssues++;
      }
    }

    // Determine overall health
    if (criticalIssues > 0) {
      this.overallHealth = "CRITICAL";
    } else if (totalIssues > this.alertThreshold) {
      this.overallHealth = "WARNING";
    } else if (totalIssues === 0) {
      this.overallHealth = "HEALTHY";
    } else {
      this.overallHealth = "DEGRADED";
    }

    this.lastCheckTime = new Date().toISOString();
    this.log(`System health check completed. Overall: ${this.overallHealth}, Issues: ${totalIssues}`, "INFO");

    // Handle alerts and escalation
    if (totalIssues > 0) {
      await this.handleAlerts(totalIssues, criticalIssues);
    }

    return {
      overallHealth: this.overallHealth,
      totalIssues,
      criticalIssues,
      systemResults: results,
      timestamp: this.lastCheckTime
    };
  }

  async handleAlerts(totalIssues, criticalIssues) {
    this.alertCount++;
    
    if (criticalIssues > 0) {
      this.log(`🚨 CRITICAL ALERT: ${criticalIssues} critical system(s) down`, "CRITICAL");
      await this.escalateAlert("CRITICAL", criticalIssues);
    } else if (totalIssues > this.alertThreshold) {
      this.log(`⚠️  WARNING ALERT: ${totalIssues} total issues detected`, "WARN");
      await this.escalateAlert("WARNING", totalIssues);
    }

    // Auto-recovery if enabled
    if (this.config.autoRecovery && this.alertCount >= 2) {
      this.log("Initiating automatic recovery procedures", "INFO");
      await this.autoRecovery();
      this.alertCount = 0;
    }
  }

  async escalateAlert(level, issueCount) {
    try {
      const escalationConfig = this.config.escalation;
      const levelIndex = escalationConfig.levels.indexOf(level);
      
      if (levelIndex === -1) return;

      const timeout = escalationConfig.timeouts[levelIndex];
      const action = escalationConfig.actions[levelIndex];

      this.log(`Escalating to level ${level} with action: ${action}`, "WARN");

      // Wait for timeout before taking action
      await new Promise(resolve => setTimeout(resolve, timeout));

      // Take escalation action
      switch (action) {
        case "restart":
          await this.emergencyRestart();
          break;
        case "redeploy":
          await this.emergencyRedeploy();
          break;
        case "emergency":
          await this.emergencyProcedures();
          break;
      }
    } catch (error) {
      this.log(`Error during alert escalation: ${error.message}`, "ERROR");
    }
  }

  async autoRecovery() {
    this.log("Starting automatic recovery procedures", "INFO");
    
    try {
      // Restart all systems
      for (const [systemName, system] of this.redundancySystems) {
        try {
          if (systemName === "pm2") {
            await system.emergencyRestart();
          } else if (systemName === "netlifyFunctions") {
            await system.deployFunctions();
          }
          this.log(`Recovered ${systemName} system`, "INFO");
        } catch (error) {
          this.log(`Failed to recover ${systemName}: ${error.message}`, "ERROR");
        }
      }

      // Wait for systems to stabilize
      await new Promise(resolve => setTimeout(resolve, 30000));
      
      // Re-check health
      await this.checkAllSystems();
      
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
    }
  }

  async emergencyRestart() {
    this.log("🚨 EMERGENCY RESTART INITIATED", "CRITICAL");
    
    try {
      // Stop all monitoring
      await this.stopMonitoring();
      
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart from ecosystem files
      const ecosystemFiles = ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"];
      for (const file of ecosystemFiles) {
        if (fs.existsSync(file)) {
          await this.runCommand("pm2", ["start", file]);
          break;
        }
      }
      
      // Restart monitoring
      await this.startMonitoring();
      
      this.log("Emergency restart completed", "INFO");
    } catch (error) {
      this.log(`Emergency restart failed: ${error.message}`, "ERROR");
    }
  }

  async emergencyRedeploy() {
    this.log("🚨 EMERGENCY REDEPLOY INITIATED", "CRITICAL");
    
    try {
      // Redeploy Netlify functions
      const netlifySystem = this.redundancySystems.get("netlifyFunctions");
      if (netlifySystem) {
        await netlifySystem.deployFunctions();
      }
      
      // Regenerate manifests
      await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      this.log("Emergency redeploy completed", "INFO");
    } catch (error) {
      this.log(`Emergency redeploy failed: ${error.message}`, "ERROR");
    }
  }

  async emergencyProcedures() {
    this.log("🚨 EMERGENCY PROCEDURES INITIATED", "CRITICAL");
    
    try {
      // Full system reset
      await this.emergencyRestart();
      await this.emergencyRedeploy();
      
      // Force health check
      await this.checkAllSystems();
      
      this.log("Emergency procedures completed", "INFO");
    } catch (error) {
      this.log(`Emergency procedures failed: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }

    // Initialize systems first
    const initialized = await this.initializeRedundancySystems();
    if (!initialized) {
      this.log("Failed to initialize redundancy systems", "ERROR");
      return;
    }

    this.monitoring = true;
    this.log("Starting master redundancy orchestration monitoring", "INFO");

    const monitor = async () => {
      if (!this.monitoring) return;
      
      try {
        await this.checkAllSystems();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }

      this.checkInterval = setTimeout(monitor, this.config.checkInterval);
    };

    await monitor();
  }

  async stopMonitoring() {
    this.monitoring = false;
    if (this.checkInterval) {
      clearTimeout(this.checkInterval);
      this.checkInterval = null;
    }
    
    // Stop all system monitoring
    for (const [systemName, system] of this.redundancySystems) {
      try {
        if (system.stopMonitoring) {
          await system.stopMonitoring();
        }
      } catch (error) {
        this.log(`Error stopping ${systemName} monitoring: ${error.message}`, "ERROR");
      }
    }
    
    this.log("Stopped master redundancy orchestration monitoring", "INFO");
  }

  async generateComprehensiveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: this.overallHealth,
      lastCheckTime: this.lastCheckTime,
      alertCount: this.alertCount,
      systems: {},
      recommendations: []
    };

    // Gather reports from all systems
    for (const [systemName, system] of this.redundancySystems) {
      try {
        if (system.generateHealthReport) {
          const systemReport = await system.generateHealthReport();
          report.systems[systemName] = systemReport;
        } else {
          report.systems[systemName] = this.systemStatus.get(systemName) || { status: "UNKNOWN" };
        }
      } catch (error) {
        report.systems[systemName] = { status: "ERROR", error: error.message };
      }
    }

    // Generate recommendations
    if (this.overallHealth === "CRITICAL") {
      report.recommendations.push("Immediate intervention required");
      report.recommendations.push("Check system resources and dependencies");
      report.recommendations.push("Consider emergency procedures");
    } else if (this.overallHealth === "WARNING") {
      report.recommendations.push("Monitor system closely");
      report.recommendations.push("Check logs for specific issues");
      report.recommendations.push("Consider preventive maintenance");
    } else if (this.overallHealth === "HEALTHY") {
      report.recommendations.push("All systems operating normally");
      report.recommendations.push("Continue regular monitoring");
    }

    return report;
  }

  async getSystemStatus() {
    return {
      monitoring: this.monitoring,
      overallHealth: this.overallHealth,
      lastCheckTime: this.lastCheckTime,
      alertCount: this.alertCount,
      systemStatus: Object.fromEntries(this.systemStatus),
      config: this.config
    };
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  const command = process.argv[2];

  switch (command) {
    case "start":
      orchestrator.startMonitoring();
      break;
    case "stop":
      orchestrator.stopMonitoring();
      break;
    case "check":
      orchestrator.checkAllSystems();
      break;
    case "restart":
      orchestrator.emergencyRestart();
      break;
    case "redeploy":
      orchestrator.emergencyRedeploy();
      break;
    case "emergency":
      orchestrator.emergencyProcedures();
      break;
    case "recovery":
      orchestrator.autoRecovery();
      break;
    case "status":
      orchestrator.getSystemStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case "report":
      orchestrator.generateComprehensiveReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log("Usage: node master-redundancy-orchestrator.cjs [start|stop|check|restart|redeploy|emergency|recovery|status|report]");
      process.exit(1);
  }
}

module.exports = { MasterRedundancyOrchestrator };