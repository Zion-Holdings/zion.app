#!/usr/bin/env node
"use strict";

const { ComprehensiveRedundancyAutomation } = require("./comprehensive-redundancy-automation.cjs");
const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveAutomationLauncher {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-automation-launcher.log");
    this.ensureLogDir();
    
    this.systems = new Map();
    this.running = false;
    this.startupTime = null;
    
    this.initializeSystems();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE-LAUNCHER] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  initializeSystems() {
    this.log("Initializing comprehensive automation launcher...");
    
    // Initialize all automation systems
    this.systems.set("comprehensiveRedundancy", {
      name: "Comprehensive Redundancy Automation",
      type: "node",
      script: "automation/comprehensive-redundancy-automation.cjs",
      priority: "CRITICAL",
      status: "stopped",
      process: null,
      startTime: null,
      restartCount: 0,
      maxRestarts: 5
    });

    this.systems.set("pm2Processes", {
      name: "PM2 Process Management",
      type: "pm2",
      ecosystem: "ecosystem.comprehensive-redundancy.cjs",
      priority: "CRITICAL",
      status: "stopped",
      process: null,
      startTime: null,
      restartCount: 0,
      maxRestarts: 3
    });

    this.systems.set("gitHubActions", {
      name: "GitHub Actions Monitoring",
      type: "workflow",
      workflows: [".github/workflows/marketing-sync.yml", ".github/workflows/sync-health.yml"],
      priority: "HIGH",
      status: "stopped",
      process: null,
      startTime: null,
      restartCount: 0,
      maxRestarts: 3
    });

    this.systems.set("netlifyFunctions", {
      name: "Netlify Functions Monitoring",
      type: "function",
      functionsDir: "netlify/functions",
      priority: "MEDIUM",
      status: "stopped",
      process: null,
      startTime: null,
      restartCount: 0,
      maxRestarts: 3
    });

    this.systems.set("buildSystem", {
      name: "Build System Monitoring",
      type: "build",
      buildCommand: "npm run build",
      priority: "CRITICAL",
      status: "stopped",
      process: null,
      startTime: null,
      restartCount: 0,
      maxRestarts: 3
    });

    this.log("✅ All automation systems initialized");
  }

  async startAll() {
    if (this.running) {
      this.log("Comprehensive automation is already running");
      return;
    }

    this.log("🚀 Starting comprehensive automation system...");
    this.running = true;
    this.startupTime = new Date();

    try {
      // Start systems in priority order
      const priorityOrder = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
      
      for (const priority of priorityOrder) {
        const systemsToStart = Array.from(this.systems.values())
          .filter(system => system.priority === priority);
        
        for (const system of systemsToStart) {
          await this.startSystem(system);
          // Small delay between system starts
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      this.log("✅ All automation systems started successfully");
      this.log(`📊 System status: ${this.getSystemStatusSummary()}`);
      
      // Start monitoring loop
      this.startMonitoring();
      
    } catch (error) {
      this.log(`❌ Failed to start comprehensive automation: ${error.message}`, "ERROR");
      this.running = false;
      throw error;
    }
  }

  async startSystem(system) {
    try {
      this.log(`Starting ${system.name}...`);
      
      switch (system.type) {
        case "node":
          await this.startNodeSystem(system);
          break;
        case "pm2":
          await this.startPM2System(system);
          break;
        case "workflow":
          await this.startWorkflowSystem(system);
          break;
        case "function":
          await this.startFunctionSystem(system);
          break;
        case "build":
          await this.startBuildSystem(system);
          break;
        default:
          this.log(`Unknown system type: ${system.type}`, "ERROR");
          return;
      }

      system.status = "running";
      system.startTime = new Date();
      system.restartCount = 0;
      this.log(`✅ ${system.name} started successfully`);
      
    } catch (error) {
      this.log(`❌ Failed to start ${system.name}: ${error.message}`, "ERROR");
      system.status = "failed";
      system.restartCount++;
      
      if (system.restartCount < system.maxRestarts) {
        this.log(`Scheduling restart for ${system.name} (attempt ${system.restartCount + 1})`);
        setTimeout(() => this.startSystem(system), 5000 * system.restartCount);
      } else {
        this.log(`Max restart attempts reached for ${system.name}`, "ERROR");
      }
    }
  }

  async startNodeSystem(system) {
    // Start the comprehensive redundancy automation system
    const redundancySystem = new ComprehensiveRedundancyAutomation();
    await redundancySystem.startMonitoring();
    
    system.process = redundancySystem;
    system.status = "running";
  }

  async startPM2System(system) {
    try {
      // Start PM2 ecosystem
      execSync(`pm2 start ${system.ecosystem} --update-env`, {
        cwd: this.workspace,
        stdio: "pipe"
      });
      
      // Wait for PM2 to start
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check PM2 status
      const status = execSync("pm2 status", {
        cwd: this.workspace,
        encoding: "utf8"
      });
      
      if (status.includes("online")) {
        system.status = "running";
      } else {
        throw new Error("PM2 processes not online");
      }
      
    } catch (error) {
      throw new Error(`PM2 start failed: ${error.message}`);
    }
  }

  async startWorkflowSystem(system) {
    try {
      // Check if workflows exist
      for (const workflow of system.workflows) {
        if (!fs.existsSync(workflow)) {
          throw new Error(`Workflow not found: ${workflow}`);
        }
      }
      
      // For now, just mark as running since we can't directly trigger workflows
      // In a real implementation, you might want to check workflow health
      system.status = "running";
      
    } catch (error) {
      throw new Error(`Workflow start failed: ${error.message}`);
    }
  }

  async startFunctionSystem(system) {
    try {
      // Check if functions directory exists
      if (!fs.existsSync(system.functionsDir)) {
        throw new Error(`Functions directory not found: ${system.functionsDir}`);
      }
      
      // Check if manifest exists
      const manifestPath = path.join(system.functionsDir, "functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        throw new Error(`Functions manifest not found: ${manifestPath}`);
      }
      
      system.status = "running";
      
    } catch (error) {
      throw new Error(`Function system start failed: ${error.message}`);
    }
  }

  async startBuildSystem(system) {
    try {
      // For now, just mark as running
      // The actual build monitoring will be handled by the comprehensive redundancy system
      system.status = "running";
      
    } catch (error) {
      throw new Error(`Build system start failed: ${error.message}`);
    }
  }

  async stopAll() {
    if (!this.running) {
      this.log("Comprehensive automation is not running");
      return;
    }

    this.log("🛑 Stopping comprehensive automation system...");
    this.running = false;

    try {
      // Stop all systems
      for (const [systemName, system] of this.systems) {
        await this.stopSystem(system);
      }

      this.log("✅ All automation systems stopped");
      
    } catch (error) {
      this.log(`❌ Error stopping automation systems: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async stopSystem(system) {
    try {
      this.log(`Stopping ${system.name}...`);
      
      switch (system.type) {
        case "node":
          if (system.process) {
            await system.process.stopMonitoring();
          }
          break;
        case "pm2":
          try {
            execSync(`pm2 stop ${system.ecosystem}`, {
              cwd: this.workspace,
              stdio: "pipe"
            });
          } catch (error) {
            // Ignore errors if PM2 is not running
          }
          break;
        default:
          // For other system types, just mark as stopped
          break;
      }

      system.status = "stopped";
      system.startTime = null;
      this.log(`✅ ${system.name} stopped`);
      
    } catch (error) {
      this.log(`❌ Error stopping ${system.name}: ${error.message}`, "ERROR");
    }
  }

  async restartAll() {
    this.log("🔄 Restarting comprehensive automation system...");
    await this.stopAll();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.startAll();
  }

  async restartSystem(systemName) {
    const system = this.systems.get(systemName);
    if (!system) {
      this.log(`System not found: ${systemName}`, "ERROR");
      return;
    }

    this.log(`🔄 Restarting ${system.name}...`);
    await this.stopSystem(system);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.startSystem(system);
  }

  startMonitoring() {
    if (!this.running) return;

    // Monitor systems every 30 seconds
    setInterval(async () => {
      if (!this.running) return;
      
      await this.checkSystemHealth();
    }, 30000);

    this.log("📊 System monitoring started");
  }

  async checkSystemHealth() {
    this.log("🔍 Checking system health...");
    
    let healthySystems = 0;
    let totalSystems = 0;
    
    for (const [systemName, system] of this.systems) {
      totalSystems++;
      
      try {
        switch (system.type) {
          case "node":
            if (system.process && system.process.monitoring) {
              system.status = "running";
              healthySystems++;
            } else {
              system.status = "failed";
            }
            break;
          case "pm2":
            try {
              const status = execSync("pm2 status", {
                cwd: this.workspace,
                encoding: "utf8"
              });
              if (status.includes("online")) {
                system.status = "running";
                healthySystems++;
              } else {
                system.status = "failed";
              }
            } catch (error) {
              system.status = "failed";
            }
            break;
          default:
            // For other systems, assume they're healthy if status is running
            if (system.status === "running") {
              healthySystems++;
            }
            break;
        }
      } catch (error) {
        this.log(`Health check failed for ${system.name}: ${error.message}`, "ERROR");
        system.status = "failed";
      }
    }
    
    const healthPercentage = totalSystems > 0 ? (healthySystems / totalSystems) * 100 : 0;
    
    if (healthPercentage < 80) {
      this.log(`⚠️ System health degraded: ${healthPercentage.toFixed(1)}%`, "WARN");
      
      // Attempt to restart failed systems
      for (const [systemName, system] of this.systems) {
        if (system.status === "failed" && system.restartCount < system.maxRestarts) {
          this.log(`Attempting to restart failed system: ${system.name}`);
          setTimeout(() => this.startSystem(system), 5000);
        }
      }
    } else {
      this.log(`✅ System health: ${healthPercentage.toFixed(1)}%`);
    }
  }

  getSystemStatusSummary() {
    const statusCounts = {
      running: 0,
      stopped: 0,
      failed: 0
    };
    
    for (const system of this.systems.values()) {
      statusCounts[system.status]++;
    }
    
    return `Running: ${statusCounts.running}, Stopped: ${statusCounts.stopped}, Failed: ${statusCounts.failed}`;
  }

  getDetailedStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      running: this.running,
      startupTime: this.startupTime,
      systems: {}
    };
    
    for (const [systemName, system] of this.systems) {
      status.systems[systemName] = {
        name: system.name,
        type: system.type,
        priority: system.priority,
        status: system.status,
        startTime: system.startTime,
        restartCount: system.restartCount,
        maxRestarts: system.maxRestarts
      };
    }
    
    return status;
  }

  async runBuild() {
    this.log("🏗️ Running build process with comprehensive automation...");
    
    try {
      // Ensure systems are running
      if (!this.running) {
        this.log("Starting automation systems for build...");
        await this.startAll();
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      
      // Run build
      const startTime = Date.now();
      execSync("npm run build", {
        cwd: this.workspace,
        stdio: "inherit",
        timeout: 600000 // 10 minutes
      });
      
      const buildTime = Date.now() - startTime;
      this.log(`✅ Build completed successfully in ${(buildTime / 1000).toFixed(1)}s`);
      
      return true;
      
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, "ERROR");
      
      // Try to recover
      this.log("Attempting build recovery...");
      try {
        execSync("npm run fix:all", {
          cwd: this.workspace,
          stdio: "inherit",
          timeout: 120000
        });
        
        // Try build again
        execSync("npm run build", {
          cwd: this.workspace,
          stdio: "inherit",
          timeout: 600000
        });
        
        this.log("✅ Build succeeded after recovery");
        return true;
        
      } catch (recoveryError) {
        this.log(`❌ Build recovery failed: ${recoveryError.message}`, "ERROR");
        return false;
      }
    }
  }
}

// CLI interface
if (require.main === module) {
  const launcher = new ComprehensiveAutomationLauncher();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      launcher.startAll();
      break;
    case "stop":
      launcher.stopAll();
      break;
    case "restart":
      launcher.restartAll();
      break;
    case "status":
      console.log(JSON.stringify(launcher.getDetailedStatus(), null, 2));
      break;
    case "health":
      launcher.checkSystemHealth();
      break;
    case "build":
      launcher.runBuild();
      break;
    default:
      console.log("Usage: node launch-comprehensive-automation.cjs [start|stop|restart|status|health|build]");
  }
}

module.exports = { ComprehensiveAutomationLauncher };