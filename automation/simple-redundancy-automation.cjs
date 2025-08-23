#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SimpleRedundancyAutomation {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "simple-redundancy.log");
    this.ensureLogDir();
    
    this.monitoring = false;
    this.healthCheckInterval = null;
    this.systems = new Map();
    
    this.initializeSystems();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [SIMPLE-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  initializeSystems() {
    this.log("Initializing simple redundancy automation system...");
    
    this.systems.set("pm2", {
      name: "PM2 Process Management",
      status: "stopped",
      health: 100,
      lastCheck: null
    });

    this.systems.set("githubActions", {
      name: "GitHub Actions Workflows",
      status: "stopped",
      health: 100,
      lastCheck: null
    });

    this.systems.set("netlifyFunctions", {
      name: "Netlify Functions",
      status: "stopped",
      health: 100,
      lastCheck: null
    });

    this.systems.set("buildSystem", {
      name: "Build System",
      status: "stopped",
      health: 100,
      lastCheck: null
    });

    this.log("✅ All redundancy systems initialized");
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }

    this.log("Starting simple redundancy monitoring...");
    this.monitoring = true;

    // Start health check loop
    this.healthCheckInterval = setInterval(() => {
      this.performHealthChecks();
    }, 60000); // Check every minute

    // Perform initial health check
    await this.performHealthChecks();

    this.log("✅ Simple redundancy monitoring started");
  }

  async performHealthChecks() {
    this.log("Performing health checks...");
    
    for (const [systemName, system] of this.systems) {
      try {
        switch (systemName) {
          case "pm2":
            await this.checkPM2Health(system);
            break;
          case "githubActions":
            await this.checkGitHubActionsHealth(system);
            break;
          case "netlifyFunctions":
            await this.checkNetlifyFunctionsHealth(system);
            break;
          case "buildSystem":
            await this.checkBuildSystemHealth(system);
            break;
        }
      } catch (error) {
        this.log(`Health check failed for ${systemName}: ${error.message}`, "ERROR");
      }
    }
    
    this.log("Health checks completed");
  }

  async checkPM2Health(system) {
    try {
      const output = execSync("pm2 jlist", { encoding: "utf8" });
      const processes = JSON.parse(output);
      
      let healthyProcesses = 0;
      let totalProcesses = 0;
      
      for (const process of processes) {
        totalProcesses++;
        if (process.pm2_env.status === "online") {
          healthyProcesses++;
        }
      }
      
      system.health = totalProcesses > 0 ? (healthyProcesses / totalProcesses) * 100 : 0;
      system.status = system.health >= 80 ? "running" : "degraded";
      system.lastCheck = new Date();
      
      this.log(`PM2 health: ${system.health.toFixed(1)}% (${healthyProcesses}/${totalProcesses} processes healthy)`);
    } catch (error) {
      this.log(`Failed to check PM2 health: ${error.message}`, "ERROR");
      system.health = 0;
      system.status = "failed";
    }
  }

  async checkGitHubActionsHealth(system) {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      
      if (fs.existsSync(workflowsDir)) {
        const files = fs.readdirSync(workflowsDir);
        const workflowFiles = files.filter(f => f.endsWith(".yml") || f.endsWith(".yaml"));
        
        system.health = workflowFiles.length > 0 ? 100 : 0;
        system.status = system.health >= 80 ? "running" : "degraded";
        system.lastCheck = new Date();
        
        this.log(`GitHub Actions health: ${system.health.toFixed(1)}% (${workflowFiles.length} workflows found)`);
      } else {
        system.health = 0;
        system.status = "failed";
        this.log("GitHub Actions workflows directory not found", "WARN");
      }
    } catch (error) {
      this.log(`Failed to check GitHub Actions health: ${error.message}`, "ERROR");
      system.health = 0;
      system.status = "failed";
    }
  }

  async checkNetlifyFunctionsHealth(system) {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      
      if (fs.existsSync(functionsDir)) {
        const files = fs.readdirSync(functionsDir);
        const functionFiles = files.filter(f => f.endsWith(".js") || f.endsWith(".ts"));
        
        system.health = functionFiles.length > 0 ? 100 : 0;
        system.status = system.health >= 80 ? "running" : "degraded";
        system.lastCheck = new Date();
        
        this.log(`Netlify Functions health: ${system.health.toFixed(1)}% (${functionFiles.length} functions found)`);
      } else {
        system.health = 0;
        system.status = "failed";
        this.log("Netlify functions directory not found", "WARN");
      }
    } catch (error) {
      this.log(`Failed to check Netlify Functions health: ${error.message}`, "ERROR");
      system.health = 0;
      system.status = "failed";
    }
  }

  async checkBuildSystemHealth(system) {
    try {
      // Check if package.json exists and has build script
      const packageJsonPath = path.join(this.workspace, "package.json");
      
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        if (packageJson.scripts && packageJson.scripts.build) {
          system.health = 100;
          system.status = "running";
          system.lastCheck = new Date();
          
          this.log(`Build System health: ${system.health.toFixed(1)}% (build script found)`);
        } else {
          system.health = 50;
          system.status = "degraded";
          this.log("Build script not found in package.json", "WARN");
        }
      } else {
        system.health = 0;
        system.status = "failed";
        this.log("package.json not found", "WARN");
      }
    } catch (error) {
      this.log(`Failed to check Build System health: ${error.message}`, "ERROR");
      system.health = 0;
      system.status = "failed";
    }
  }

  async runBuild() {
    try {
      this.log("Running build process...");
      
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
      return false;
    }
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      overall: {
        monitoring: this.monitoring,
        systems: this.systems.size,
        running: 0,
        degraded: 0,
        failed: 0,
        health: 0
      },
      systems: {}
    };
    
    let totalHealth = 0;
    let runningCount = 0;
    let degradedCount = 0;
    let failedCount = 0;
    
    for (const [systemName, system] of this.systems) {
      status.systems[systemName] = {
        name: system.name,
        status: system.status,
        health: system.health,
        lastCheck: system.lastCheck
      };
      
      if (system.status === "running") {
        runningCount++;
        totalHealth += system.health;
      } else if (system.status === "degraded") {
        degradedCount++;
        totalHealth += system.health;
      } else if (system.status === "failed") {
        failedCount++;
      }
    }
    
    status.overall.running = runningCount;
    status.overall.degraded = degradedCount;
    status.overall.failed = failedCount;
    status.overall.health = (runningCount + degradedCount) > 0 ? totalHealth / (runningCount + degradedCount) : 0;
    
    return status;
  }

  async stopMonitoring() {
    this.log("Stopping simple redundancy monitoring...");
    
    this.monitoring = false;
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    this.log("✅ Simple redundancy monitoring stopped");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new SimpleRedundancyAutomation();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.startMonitoring();
      // Keep the process running
      process.on('SIGINT', async () => {
        console.log('\nReceived SIGINT, shutting down gracefully...');
        await orchestrator.stopMonitoring();
        process.exit(0);
      });
      process.on('SIGTERM', async () => {
        console.log('\nReceived SIGTERM, shutting down gracefully...');
        await orchestrator.stopMonitoring();
        process.exit(0);
      });
      break;
    case "stop":
      orchestrator.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "build":
      orchestrator.runBuild();
      break;
    case "health":
      orchestrator.performHealthChecks();
      break;
    default:
      console.log("Usage: node simple-redundancy-automation.cjs [start|stop|status|build|health]");
  }
}

module.exports = { SimpleRedundancyAutomation };