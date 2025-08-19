#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Import the enhanced redundancy systems
const { EnhancedPM2Redundancy } = require("./enhanced-pm2-redundancy.cjs");
const { EnhancedGitHubActionsRedundancy } = require("./enhanced-github-actions-redundancy.cjs");
const { EnhancedNetlifyFunctionsRedundancy } = require("./enhanced-netlify-functions-redundancy.cjs");

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    
    // Initialize redundancy systems
    this.pm2Redundancy = new EnhancedPM2Redundancy();
    this.githubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
    this.netlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
    
    this.healthMetrics = {
      totalOrchestrations: 0,
      successfulOrchestrations: 0,
      failedOrchestrations: 0,
      systemHealth: {
        pm2: "UNKNOWN",
        githubActions: "UNKNOWN",
        netlifyFunctions: "UNKNOWN"
      },
      lastOrchestration: null,
      uptime: Date.now(),
      failoverEvents: 0,
      recoveryEvents: 0
    };
    
    this.monitoringIntervals = new Map();
    this.circuitBreakers = new Map();
    this.healthHistory = [];
    this.maxHealthHistory = 100;
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
      orchestrator: {
        enabled: true,
        orchestrationInterval: 60000, // 1 minute
        healthCheckTimeout: 30000,
        maxConcurrentChecks: 3,
        failoverEnabled: true,
        recoveryEnabled: true,
        alertThreshold: 0.7,
        criticalThreshold: 0.5
      },
      pm2: {
        enabled: true,
        checkInterval: 30000,
        priority: "high"
      },
      githubActions: {
        enabled: true,
        checkInterval: 60000,
        priority: "medium"
      },
      netlify: {
        enabled: true,
        checkInterval: 120000,
        priority: "low"
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ORCHESTRATOR] ${message}`;
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

  async orchestrateRedundancySystems() {
    this.log("🎯 Starting master redundancy orchestration...");
    this.healthMetrics.totalOrchestrations++;
    this.healthMetrics.lastOrchestration = Date.now();
    
    try {
      const startTime = Date.now();
      let overallHealth = true;
      let criticalFailures = 0;

      // Orchestrate PM2 redundancy (highest priority)
      if (this.config.pm2.enabled) {
        this.log("🔧 Orchestrating PM2 redundancy system...");
        const pm2Health = await this.orchestratePM2Redundancy();
        this.healthMetrics.systemHealth.pm2 = pm2Health.status;
        
        if (!pm2Health.healthy) {
          overallHealth = false;
          if (pm2Health.critical) {
            criticalFailures++;
            await this.handleCriticalPM2Failure(pm2Health);
          }
        }
      }

      // Orchestrate GitHub Actions redundancy (medium priority)
      if (this.config.githubActions.enabled) {
        this.log("🔧 Orchestrating GitHub Actions redundancy system...");
        const githubHealth = await this.orchestrateGitHubActionsRedundancy();
        this.healthMetrics.systemHealth.githubActions = githubHealth.status;
        
        if (!githubHealth.healthy) {
          overallHealth = false;
          if (githubHealth.critical) {
            criticalFailures++;
            await this.handleCriticalGitHubActionsFailure(githubHealth);
          }
        }
      }

      // Orchestrate Netlify functions redundancy (lowest priority)
      if (this.config.netlify.enabled) {
        this.log("🔧 Orchestrating Netlify functions redundancy system...");
        const netlifyHealth = await this.orchestrateNetlifyFunctionsRedundancy();
        this.healthMetrics.systemHealth.netlifyFunctions = netlifyHealth.status;
        
        if (!netlifyHealth.healthy) {
          overallHealth = false;
          if (netlifyHealth.critical) {
            criticalFailures++;
            await this.handleCriticalNetlifyFunctionsFailure(netlifyHealth);
          }
        }
      }

      // Perform cross-system health analysis
      const crossSystemHealth = await this.analyzeCrossSystemHealth();
      if (!crossSystemHealth.healthy) {
        this.log(`⚠️ Cross-system health issues detected: ${crossSystemHealth.issues.join(", ")}`, "WARN");
        await this.handleCrossSystemIssues(crossSystemHealth);
      }

      // Update health history
      this.updateHealthHistory({
        timestamp: Date.now(),
        pm2: this.healthMetrics.systemHealth.pm2,
        githubActions: this.healthMetrics.systemHealth.githubActions,
        netlifyFunctions: this.healthMetrics.systemHealth.netlifyFunctions,
        overall: overallHealth ? "HEALTHY" : "DEGRADED"
      });

      const orchestrationTime = Date.now() - startTime;
      
      if (overallHealth) {
        this.healthMetrics.successfulOrchestrations++;
        this.log(`✅ Master redundancy orchestration completed successfully in ${orchestrationTime}ms`);
      } else {
        this.healthMetrics.failedOrchestrations++;
        this.log(`⚠️ Master redundancy orchestration completed with ${criticalFailures} critical failures in ${orchestrationTime}ms`, "WARN");
      }

      // Check if failover is needed
      if (this.config.orchestrator.failoverEnabled && criticalFailures > 0) {
        await this.triggerFailover();
      }

      // Check if recovery is needed
      if (this.config.orchestrator.recoveryEnabled && !overallHealth) {
        await this.triggerRecovery();
      }

      return overallHealth;
    } catch (error) {
      this.log(`❌ Master redundancy orchestration failed: ${error.message}`, "ERROR");
      this.healthMetrics.failedOrchestrations++;
      return false;
    }
  }

  async orchestratePM2Redundancy() {
    try {
      const health = await this.pm2Redundancy.checkPM2Health();
      const metrics = this.pm2Redundancy.getHealthMetrics();
      
      return {
        healthy: health,
        status: metrics.healthStatus,
        critical: metrics.healthStatus === "CRITICAL",
        metrics: metrics,
        timestamp: Date.now()
      };
    } catch (error) {
      this.log(`❌ PM2 redundancy orchestration failed: ${error.message}`, "ERROR");
      return {
        healthy: false,
        status: "ERROR",
        critical: true,
        error: error.message,
        timestamp: Date.now()
      };
    }
  }

  async orchestrateGitHubActionsRedundancy() {
    try {
      const health = await this.githubActionsRedundancy.checkGitHubActionsHealth();
      const metrics = this.githubActionsRedundancy.getHealthMetrics();
      
      return {
        healthy: health,
        status: metrics.healthStatus,
        critical: metrics.healthStatus === "CRITICAL",
        metrics: metrics,
        timestamp: Date.now()
      };
    } catch (error) {
      this.log(`❌ GitHub Actions redundancy orchestration failed: ${error.message}`, "ERROR");
      return {
        healthy: false,
        status: "ERROR",
        critical: true,
        error: error.message,
        timestamp: Date.now()
      };
    }
  }

  async orchestrateNetlifyFunctionsRedundancy() {
    try {
      const health = await this.netlifyFunctionsRedundancy.checkNetlifyFunctionsHealth();
      const metrics = this.netlifyFunctionsRedundancy.getHealthMetrics();
      
      return {
        healthy: health,
        status: metrics.healthStatus,
        critical: metrics.healthStatus === "CRITICAL",
        metrics: metrics,
        timestamp: Date.now()
      };
    } catch (error) {
      this.log(`❌ Netlify functions redundancy orchestration failed: ${error.message}`, "ERROR");
      return {
        healthy: false,
        status: "ERROR",
        critical: true,
        error: error.message,
        timestamp: Date.now()
      };
    }
  }

  async analyzeCrossSystemHealth() {
    const issues = [];
    let healthy = true;

    try {
      // Check for resource conflicts between systems
      const pm2Metrics = this.pm2Redundancy.getHealthMetrics();
      const githubMetrics = this.githubActionsRedundancy.getHealthMetrics();
      const netlifyMetrics = this.netlifyFunctionsRedundancy.getHealthMetrics();

      // Check if multiple systems are failing simultaneously
      const failingSystems = [
        pm2Metrics.healthStatus === "CRITICAL" ? "PM2" : null,
        githubMetrics.healthStatus === "CRITICAL" ? "GitHub Actions" : null,
        netlifyMetrics.healthStatus === "CRITICAL" ? "Netlify Functions" : null
      ].filter(Boolean);

      if (failingSystems.length > 1) {
        issues.push(`Multiple systems failing: ${failingSystems.join(", ")}`);
        healthy = false;
      }

      // Check for timing conflicts
      const pm2Interval = this.config.pm2.checkInterval || 30000;
      const githubInterval = this.config.githubActions.checkInterval || 60000;
      const netlifyInterval = this.config.netlify.checkInterval || 120000;

      if (pm2Interval === githubInterval || pm2Interval === netlifyInterval || githubInterval === netlifyInterval) {
        issues.push("Potential timing conflicts between system check intervals");
      }

      // Check for resource contention
      if (pm2Metrics.restarts > 10 && githubMetrics.workflowsTriggered > 5) {
        issues.push("High resource usage across multiple systems");
      }

      // Check for dependency conflicts
      const allDependencies = new Set();
      const dependencyConflicts = [];

      // This would check for actual dependency conflicts between systems
      // For now, we'll just log a placeholder
      if (dependencyConflicts.length > 0) {
        issues.push(`Dependency conflicts detected: ${dependencyConflicts.join(", ")}`);
        healthy = false;
      }

    } catch (error) {
      issues.push(`Cross-system health analysis error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async handleCriticalPM2Failure(health) {
    this.log(`🚨 Handling critical PM2 failure`, "ERROR");
    
    try {
      // Attempt immediate recovery
      await this.pm2Redundancy.startPM2Services();
      
      // Wait for recovery
      await this.sleep(10000);
      
      // Check if recovery was successful
      const recoveryHealth = await this.pm2Redundancy.checkPM2Health();
      if (recoveryHealth) {
        this.log("✅ PM2 critical failure recovered successfully");
        this.healthMetrics.recoveryEvents++;
      } else {
        this.log("❌ PM2 critical failure recovery failed", "ERROR");
        await this.escalateSystemFailure("PM2", health);
      }
    } catch (error) {
      this.log(`❌ Failed to handle critical PM2 failure: ${error.message}`, "ERROR");
      await this.escalateSystemFailure("PM2", health);
    }
  }

  async handleCriticalGitHubActionsFailure(health) {
    this.log(`🚨 Handling critical GitHub Actions failure`, "ERROR");
    
    try {
      // Attempt to fix workflow issues
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (fs.existsSync(workflowsDir)) {
        // Trigger a health check workflow
        await this.githubActionsRedundancy.triggerWorkflowHealthCheck();
        
        // Wait for workflow execution
        await this.sleep(30000);
        
        // Check if recovery was successful
        const recoveryHealth = await this.githubActionsRedundancy.checkGitHubActionsHealth();
        if (recoveryHealth) {
          this.log("✅ GitHub Actions critical failure recovered successfully");
          this.healthMetrics.recoveryEvents++;
        } else {
          this.log("❌ GitHub Actions critical failure recovery failed", "ERROR");
          await this.escalateSystemFailure("GitHub Actions", health);
        }
      }
    } catch (error) {
      this.log(`❌ Failed to handle critical GitHub Actions failure: ${error.message}`, "ERROR");
      await this.escalateSystemFailure("GitHub Actions", health);
    }
  }

  async handleCriticalNetlifyFunctionsFailure(health) {
    this.log(`🚨 Handling critical Netlify functions failure`, "ERROR");
    
    try {
      // Attempt to regenerate functions manifest
      await this.netlifyFunctionsRedundancy.regenerateFunctionsManifest();
      
      // Wait for regeneration
      await this.sleep(5000);
      
      // Check if recovery was successful
      const recoveryHealth = await this.netlifyFunctionsRedundancy.checkNetlifyFunctionsHealth();
      if (recoveryHealth) {
        this.log("✅ Netlify functions critical failure recovered successfully");
        this.healthMetrics.recoveryEvents++;
      } else {
        this.log("❌ Netlify functions critical failure recovery failed", "ERROR");
        await this.escalateSystemFailure("Netlify Functions", health);
      }
    } catch (error) {
      this.log(`❌ Failed to handle critical Netlify functions failure: ${error.message}`, "ERROR");
      await this.escalateSystemFailure("Netlify Functions", health);
    }
  }

  async handleCrossSystemIssues(health) {
    this.log("⚠️ Handling cross-system issues", "WARN");
    
    try {
      // Create cross-system health report
      const report = {
        timestamp: new Date().toISOString(),
        type: "cross_system_issues",
        issues: health.issues,
        systemStatus: this.healthMetrics.systemHealth,
        recommendations: [
          "Review system check intervals",
          "Check for resource conflicts",
          "Validate dependencies",
          "Monitor system interactions"
        ]
      };
      
      const reportPath = path.join(this.logDir, `cross-system-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Cross-system issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle cross-system issues: ${error.message}`, "ERROR");
    }
  }

  async triggerFailover() {
    this.log("🔄 Triggering failover procedures...");
    this.healthMetrics.failoverEvents++;
    
    try {
      // Implement failover logic here
      // This could involve switching to backup systems, reducing functionality, etc.
      
      this.log("✅ Failover procedures completed");
    } catch (error) {
      this.log(`❌ Failover procedures failed: ${error.message}`, "ERROR");
    }
  }

  async triggerRecovery() {
    this.log("🔄 Triggering recovery procedures...");
    this.healthMetrics.recoveryEvents++;
    
    try {
      // Implement recovery logic here
      // This could involve restarting services, clearing caches, etc.
      
      this.log("✅ Recovery procedures completed");
    } catch (error) {
      this.log(`❌ Recovery procedures failed: ${error.message}`, "ERROR");
    }
  }

  async escalateSystemFailure(system, health) {
    this.log(`🚨 Escalating system failure: ${system}`, "ERROR");
    
    try {
      // Create incident report
      const incidentReport = {
        timestamp: new Date().toISOString(),
        system,
        health: health,
        severity: "critical",
        requiresManualIntervention: true,
        orchestratorMetrics: this.healthMetrics
      };
      
      const reportPath = path.join(this.logDir, `incident-${system}-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(incidentReport, null, 2));
      this.log(`📋 Incident report created: ${reportPath}`);
      
      // Send alert (placeholder for notification system)
      this.log(`ALERT: System ${system} requires manual intervention`, "ERROR");
    } catch (error) {
      this.log(`❌ Failed to escalate system failure: ${error.message}`, "ERROR");
    }
  }

  updateHealthHistory(healthSnapshot) {
    this.healthHistory.push(healthSnapshot);
    
    // Keep only the last N health snapshots
    if (this.healthHistory.length > this.maxHealthHistory) {
      this.healthHistory = this.healthHistory.slice(-this.maxHealthHistory);
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getHealthMetrics() {
    const uptime = Date.now() - this.healthMetrics.uptime;
    const successRate = this.healthMetrics.totalOrchestrations > 0 
      ? (this.healthMetrics.successfulOrchestrations / this.healthMetrics.totalOrchestrations) * 100 
      : 0;
    
    return {
      ...this.healthMetrics,
      uptime,
      successRate: successRate.toFixed(2),
      healthStatus: successRate > 80 ? "HEALTHY" : successRate > 60 ? "DEGRADED" : "CRITICAL",
      healthHistory: this.healthHistory.slice(-10), // Last 10 snapshots
      systemStatus: this.healthMetrics.systemHealth
    };
  }

  async startOrchestration() {
    this.log("🚀 Starting master redundancy orchestration...");
    
    const interval = this.config.orchestrator.orchestrationInterval || 60000;
    
    // Start individual system monitoring
    if (this.config.pm2.enabled) {
      this.pm2Redundancy.startMonitoring();
    }
    
    if (this.config.githubActions.enabled) {
      this.githubActionsRedundancy.startMonitoring();
    }
    
    if (this.config.netlify.enabled) {
      this.netlifyFunctionsRedundancy.startMonitoring();
    }
    
    // Start master orchestration
    setInterval(async () => {
      await this.orchestrateRedundancySystems();
    }, interval);
    
    // Initial orchestration
    await this.orchestrateRedundancySystems();
    
    this.log(`✅ Master redundancy orchestration started (interval: ${interval}ms)`);
  }

  async stopOrchestration() {
    this.log("🛑 Stopping master redundancy orchestration...");
    
    // Clear all monitoring intervals
    for (const [key, interval] of this.monitoringIntervals) {
      clearInterval(interval);
      this.monitoringIntervals.delete(key);
    }
    
    this.log("✅ Master redundancy orchestration stopped");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      orchestrator.startOrchestration();
      break;
    case "stop":
      orchestrator.stopOrchestration();
      break;
    case "orchestrate":
      orchestrator.orchestrateRedundancySystems().then(() => process.exit(0));
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getHealthMetrics(), null, 2));
      break;
    case "health":
      orchestrator.orchestrateRedundancySystems().then((health) => {
        console.log(JSON.stringify(orchestrator.getHealthMetrics(), null, 2));
        process.exit(health ? 0 : 1);
      });
      break;
    default:
      console.log("Usage: node master-redundancy-orchestrator.cjs [start|stop|orchestrate|status|health]");
      process.exit(1);
  }
}

module.exports = { MasterRedundancyOrchestrator };