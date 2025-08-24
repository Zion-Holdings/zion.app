#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class MasterAutomationOrchestrator {
  constructor() {
    this.config = {
      systems: {
        pm2: {
          name: "PM2 Automation System",
          status: "unknown",
          health: "unknown",
          lastCheck: null
        },
        githubActions: {
          name: "GitHub Actions Automation",
          status: "unknown",
          health: "unknown",
          lastCheck: null
        },
        netlifyFunctions: {
          name: "Netlify Functions Automation",
          status: "unknown",
          health: "unknown",
          lastCheck: null
        },
        ultimateRedundancy: {
          name: "Ultimate Redundancy System",
          status: "unknown",
          health: "unknown",
          lastCheck: null
        }
      },
      monitoring: {
        enabled: true,
        interval: 60000, // 1 minute
        autoRecovery: true,
        maxRecoveryAttempts: 3
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `master-orchestrator-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  async checkPM2System() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status === 0) {
        this.config.systems.pm2.status = "running";
        this.config.systems.pm2.health = "healthy";
        this.config.systems.pm2.lastCheck = new Date().toISOString();
        return true;
      } else {
        this.config.systems.pm2.status = "stopped";
        this.config.systems.pm2.health = "unhealthy";
        this.config.systems.pm2.lastCheck = new Date().toISOString();
        return false;
      }
    } catch (error) {
      this.config.systems.pm2.status = "error";
      this.config.systems.pm2.health = "error";
      this.config.systems.pm2.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async checkGitHubActionsSystem() {
    try {
      const workflows = [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ];
      
      let healthyWorkflows = 0;
      
      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, 'utf8');
            if (content.includes('name:') && content.includes('on:')) {
              healthyWorkflows++;
            }
          } catch (error) {
            // Workflow file exists but can't be read
          }
        }
      }
      
      if (healthyWorkflows === workflows.length) {
        this.config.systems.githubActions.status = "running";
        this.config.systems.githubActions.health = "healthy";
        this.config.systems.githubActions.lastCheck = new Date().toISOString();
        return true;
      } else {
        this.config.systems.githubActions.status = "partial";
        this.config.systems.githubActions.health = "degraded";
        this.config.systems.githubActions.lastCheck = new Date().toISOString();
        return false;
      }
    } catch (error) {
      this.config.systems.githubActions.status = "error";
      this.config.systems.githubActions.health = "error";
      this.config.systems.githubActions.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async checkNetlifyFunctionsSystem() {
    try {
      const manifestFile = "netlify/functions/functions-manifest.json";
      
      if (!fs.existsSync(manifestFile)) {
        this.config.systems.netlifyFunctions.status = "missing";
        this.config.systems.netlifyFunctions.health = "unhealthy";
        this.config.systems.netlifyFunctions.lastCheck = new Date().toISOString();
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      if (functions.length > 0) {
        this.config.systems.netlifyFunctions.status = "running";
        this.config.systems.netlifyFunctions.health = "healthy";
        this.config.systems.netlifyFunctions.lastCheck = new Date().toISOString();
        return true;
      } else {
        this.config.systems.netlifyFunctions.status = "empty";
        this.config.systems.netlifyFunctions.health = "unhealthy";
        this.config.systems.netlifyFunctions.lastCheck = new Date().toISOString();
        return false;
      }
    } catch (error) {
      this.config.systems.netlifyFunctions.status = "error";
      this.config.systems.netlifyFunctions.health = "error";
      this.config.systems.netlifyFunctions.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async checkUltimateRedundancySystem() {
    try {
      const result = await this.runCommand("node", ["automation/ultimate-redundancy-automation-system.cjs", "status"]);
      
      if (result.status === 0) {
        this.config.systems.ultimateRedundancy.status = "running";
        this.config.systems.ultimateRedundancy.health = "healthy";
        this.config.systems.ultimateRedundancy.lastCheck = new Date().toISOString();
        return true;
      } else {
        this.config.systems.ultimateRedundancy.status = "stopped";
        this.config.systems.ultimateRedundancy.health = "unhealthy";
        this.config.systems.ultimateRedundancy.lastCheck = new Date().toISOString();
        return false;
      }
    } catch (error) {
      this.config.systems.ultimateRedundancy.status = "error";
      this.config.systems.ultimateRedundancy.health = "error";
      this.config.systems.ultimateRedundancy.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = await Promise.all([
      this.checkPM2System(),
      this.checkGitHubActionsSystem(),
      this.checkNetlifyFunctionsSystem(),
      this.checkUltimateRedundancySystem()
    ]);
    
    const overallHealth = results.every(result => result);
    
    this.log(`📊 Overall System Health: ${overallHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
    
    // Log individual system statuses
    Object.entries(this.config.systems).forEach(([key, system]) => {
      const statusIcon = system.health === 'healthy' ? '✅' : system.health === 'degraded' ? '⚠️' : '❌';
      this.log(`${statusIcon} ${system.name}: ${system.status} (${system.health})`);
    });
    
    return overallHealth;
  }

  async startAllSystems() {
    this.log("🚀 Starting all automation systems...");
    
    try {
      // Start ultimate redundancy system
      this.log("🔄 Starting Ultimate Redundancy System...");
      await this.runCommand("bash", ["automation/start-ultimate-redundancy.sh", "start"]);
      
      // Start PM2 ecosystem
      this.log("🔄 Starting PM2 ecosystem...");
      await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs", "--update-env"]);
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      
      this.log("✅ All systems started successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start all systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopAllSystems() {
    this.log("🛑 Stopping all automation systems...");
    
    try {
      // Stop ultimate redundancy system
      this.log("🛑 Stopping Ultimate Redundancy System...");
      await this.runCommand("bash", ["automation/start-ultimate-redundancy.sh", "stop"]);
      
      // Stop PM2 processes
      this.log("🛑 Stopping PM2 processes...");
      await this.runCommand("pm2", ["stop", "all"]);
      await this.runCommand("pm2", ["delete", "all"]);
      
      this.log("✅ All systems stopped successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to stop all systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartAllSystems() {
    this.log("🔄 Restarting all automation systems...");
    
    await this.stopAllSystems();
    
    // Wait a moment before restarting
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    await this.startAllSystems();
  }

  async performSystemRecovery() {
    this.log("🔄 Performing system recovery...");
    
    try {
      // Perform recovery for each system
      const recoveryResults = await Promise.all([
        this.runCommand("bash", ["automation/start-ultimate-redundancy.sh", "recover"]),
        this.runCommand("pm2", ["resurrect"]),
        this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"])
      ]);
      
      const allRecovered = recoveryResults.every(result => result.status === 0);
      
      if (allRecovered) {
        this.log("✅ System recovery completed successfully");
        return true;
      } else {
        this.log("⚠️ Some recovery operations failed", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ System recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getSystemStatus() {
    return {
      timestamp: new Date().toISOString(),
      systems: this.config.systems,
      monitoring: {
        enabled: this.config.monitoring.enabled,
        interval: this.config.monitoring.interval,
        autoRecovery: this.config.monitoring.autoRecovery
      },
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }

  initializeMonitoring() {
    this.log("🔧 Initializing master automation orchestrator...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("🛑 Shutting down master orchestrator...");
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log("🛑 Shutting down master orchestrator...");
      process.exit(0);
    });
    
    // Set up error handling
    process.on('uncaughtException', (error) => {
      this.log(`❌ Uncaught exception: ${error.message}`, "ERROR");
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`❌ Unhandled rejection at: ${promise}, reason: ${reason}`, "ERROR");
    });
  }

  startMonitoring() {
    this.log("🚀 Starting master automation monitoring...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    this.log("✅ Master automation monitoring started");
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('start')) {
    orchestrator.startAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('stop')) {
    orchestrator.stopAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('restart')) {
    orchestrator.restartAllSystems().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('status')) {
    const status = orchestrator.getSystemStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
  } else if (args.includes('health-check')) {
    orchestrator.performComprehensiveHealthCheck().then(health => {
      process.exit(health ? 0 : 1);
    });
  } else if (args.includes('recover')) {
    orchestrator.performSystemRecovery().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('monitor')) {
    orchestrator.startMonitoring();
  } else {
    // Default: show help
    console.log("🚀 Master Automation Orchestrator");
    console.log("Usage: node automation/master-automation-orchestrator.cjs {start|stop|restart|status|health-check|recover|monitor}");
    console.log("");
    console.log("Commands:");
    console.log("  start         Start all automation systems");
    console.log("  stop          Stop all automation systems");
    console.log("  restart       Restart all automation systems");
    console.log("  status        Show system status");
    console.log("  health-check  Perform comprehensive health check");
    console.log("  recover       Perform system recovery");
    console.log("  monitor       Start continuous monitoring");
  }
}

module.exports = MasterAutomationOrchestrator;