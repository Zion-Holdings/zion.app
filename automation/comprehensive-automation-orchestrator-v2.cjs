#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveAutomationOrchestratorV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.systems = {
      pm2: {
        name: "PM2 Process Management",
        status: "unknown",
        health: false,
        lastCheck: null,
        processes: [],
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem.redundancy.pm2.cjs"
        ]
      },
      githubActions: {
        name: "GitHub Actions Workflows",
        status: "unknown",
        health: false,
        lastCheck: null,
        workflows: [],
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js",
          "automation/enhanced-git-sync-orchestrator.cjs"
        ]
      },
      netlifyFunctions: {
        name: "Netlify Functions",
        status: "unknown",
        health: false,
        lastCheck: null,
        functions: [],
        manifestFile: "netlify/functions/functions-manifest.json"
      },
      redundancy: {
        name: "Redundancy Systems",
        status: "unknown",
        health: false,
        lastCheck: null,
        systems: [
          "comprehensive-redundancy-automation-v2.cjs",
          "ultimate-redundancy-master.cjs",
          "comprehensive-redundancy-orchestrator.cjs",
          "master-redundancy-orchestrator.cjs"
        ]
      }
    };
    
    this.startTime = Date.now();
    this.logFile = path.join(this.logDir, "comprehensive-automation-orchestrator-v2.log");
    this.monitoringInterval = null;
  }

  ensureLogDirectory() {
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
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  async start() {
    this.log("Starting Comprehensive Automation Orchestrator V2...");
    
    try {
      // Initialize all systems
      await this.initializeAllSystems();
      
      // Start monitoring
      this.startMonitoring();
      
      this.log("Comprehensive Automation Orchestrator V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, "ERROR");
      return false;
    }
  }

  async initializeAllSystems() {
    this.log("Initializing all automation systems...");
    
    // Initialize PM2 systems
    await this.initializePM2Systems();
    
    // Initialize GitHub Actions systems
    await this.initializeGitHubActionsSystems();
    
    // Initialize Netlify Functions systems
    await this.initializeNetlifyFunctionsSystems();
    
    // Initialize Redundancy systems
    await this.initializeRedundancySystems();
    
    this.log("All automation systems initialized");
  }

  async initializePM2Systems() {
    this.log("Initializing PM2 systems...");
    
    try {
      // Check if PM2 is running
      const pm2Status = this.runCommand("pm2 status --json");
      if (pm2Status.error) {
        this.log("PM2 not running, starting PM2...", "WARN");
        this.runCommand("pm2 start ecosystem.comprehensive-redundancy.cjs");
      }
      
      // Check ecosystem files
      for (const file of this.systems.pm2.ecosystemFiles) {
        if (fs.existsSync(file)) {
          this.log(`PM2 ecosystem file ${file} validated`);
        } else {
          this.log(`PM2 ecosystem file ${file} not found`, "WARN");
        }
      }
      
      this.systems.pm2.status = "initialized";
      this.log("PM2 systems initialized");
    } catch (error) {
      this.log(`PM2 systems initialization failed: ${error.message}`, "ERROR");
      this.systems.pm2.status = "failed";
    }
  }

  async initializeGitHubActionsSystems() {
    this.log("Initializing GitHub Actions systems...");
    
    try {
      // Check workflow files
      const workflowsDir = ".github/workflows";
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
        this.systems.githubActions.workflows = workflowFiles.map(f => `${workflowsDir}/${f}`);
        
        for (const workflow of this.systems.githubActions.workflows) {
          this.log(`GitHub Actions workflow ${workflow} validated`);
        }
      } else {
        this.log("GitHub Actions workflows directory not found", "WARN");
      }
      
      // Check fallback scripts
      for (const script of this.systems.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          this.log(`Fallback script ${script} ready`);
        } else {
          this.log(`Fallback script ${script} not found`, "WARN");
        }
      }
      
      this.systems.githubActions.status = "initialized";
      this.log("GitHub Actions systems initialized");
    } catch (error) {
      this.log(`GitHub Actions systems initialization failed: ${error.message}`, "ERROR");
      this.systems.githubActions.status = "failed";
    }
  }

  async initializeNetlifyFunctionsSystems() {
    this.log("Initializing Netlify Functions systems...");
    
    try {
      // Check manifest file
      if (fs.existsSync(this.systems.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.systems.netlifyFunctions.manifestFile, 'utf8'));
        this.systems.netlifyFunctions.functions = manifest.functions || [];
        this.log(`Netlify Functions manifest loaded with ${this.systems.netlifyFunctions.functions.length} functions`);
      } else {
        this.log("Netlify Functions manifest not found", "WARN");
      }
      
      // Check function directories
      for (const func of this.systems.netlifyFunctions.functions) {
        const funcPath = path.join(this.workspace, "netlify/functions", func);
        if (fs.existsSync(funcPath)) {
          this.log(`Netlify Function ${func} validated`);
        } else {
          this.log(`Netlify Function ${func} not found`, "WARN");
        }
      }
      
      this.systems.netlifyFunctions.status = "initialized";
      this.log("Netlify Functions systems initialized");
    } catch (error) {
      this.log(`Netlify Functions systems initialization failed: ${error.message}`, "ERROR");
      this.systems.netlifyFunctions.status = "failed";
    }
  }

  async initializeRedundancySystems() {
    this.log("Initializing Redundancy systems...");
    
    try {
      // Check redundancy system files
      for (const system of this.systems.redundancy.systems) {
        const systemPath = path.join(this.workspace, "automation", system);
        if (fs.existsSync(systemPath)) {
          this.log(`Redundancy system ${system} validated`);
        } else {
          this.log(`Redundancy system ${system} not found`, "WARN");
        }
      }
      
      this.systems.redundancy.status = "initialized";
      this.log("Redundancy systems initialized");
    } catch (error) {
      this.log(`Redundancy systems initialization failed: ${error.message}`, "ERROR");
      this.systems.redundancy.status = "failed";
    }
  }

  startMonitoring() {
    this.log("Starting comprehensive monitoring...");
    
    // Monitor all systems every 30 seconds
    this.monitoringInterval = setInterval(() => {
      this.monitorAllSystems();
    }, 30000);
    
    this.log("Comprehensive monitoring started");
  }

  async monitorAllSystems() {
    this.log("Running comprehensive system monitoring...");
    
    // Monitor PM2 systems
    await this.monitorPM2Systems();
    
    // Monitor GitHub Actions systems
    await this.monitorGitHubActionsSystems();
    
    // Monitor Netlify Functions systems
    await this.monitorNetlifyFunctionsSystems();
    
    // Monitor Redundancy systems
    await this.monitorRedundancySystems();
    
    // Update overall health
    this.updateOverallHealth();
    
    this.log("Comprehensive system monitoring completed");
  }

  async monitorPM2Systems() {
    try {
      const status = this.runCommand("pm2 status --json");
      if (status.error) {
        this.log("PM2 monitoring failed", "ERROR");
        this.systems.pm2.health = false;
        this.systems.pm2.status = "unhealthy";
        return;
      }
      
      try {
        const processes = JSON.parse(status.stdout);
        this.systems.pm2.processes = processes;
        this.systems.pm2.lastCheck = Date.now();
        
        // Check if critical processes are running
        const criticalProcesses = [
          "zion-auto-sync",
          "redundancy-automation-system",
          "master-redundancy-orchestrator"
        ];
        
        let healthyCount = 0;
        for (const process of criticalProcesses) {
          const proc = processes.find(p => p.name === process);
          if (proc && proc.pm2_env?.status === "online") {
            healthyCount++;
          }
        }
        
        this.systems.pm2.health = healthyCount >= criticalProcesses.length * 0.7;
        this.systems.pm2.status = this.systems.pm2.health ? "healthy" : "unhealthy";
        
        if (!this.systems.pm2.health) {
          this.log("PM2 systems health check failed", "WARN");
          await this.recoverPM2Systems();
        }
        
      } catch (parseError) {
        this.log(`Failed to parse PM2 status: ${parseError.message}`, "ERROR");
        this.systems.pm2.health = false;
        this.systems.pm2.status = "error";
      }
      
    } catch (error) {
      this.log(`PM2 monitoring error: ${error.message}`, "ERROR");
      this.systems.pm2.health = false;
      this.systems.pm2.status = "error";
    }
  }

  async monitorGitHubActionsSystems() {
    try {
      // Check workflow files exist
      let healthyWorkflows = 0;
      for (const workflow of this.systems.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          healthyWorkflows++;
        }
      }
      
      this.systems.githubActions.lastCheck = Date.now();
      this.systems.githubActions.health = healthyWorkflows >= this.systems.githubActions.workflows.length * 0.8;
      this.systems.githubActions.status = this.systems.githubActions.health ? "healthy" : "unhealthy";
      
      if (!this.systems.githubActions.health) {
        this.log("GitHub Actions systems health check failed", "WARN");
        await this.recoverGitHubActionsSystems();
      }
      
    } catch (error) {
      this.log(`GitHub Actions monitoring error: ${error.message}`, "ERROR");
      this.systems.githubActions.health = false;
      this.systems.githubActions.status = "error";
    }
  }

  async monitorNetlifyFunctionsSystems() {
    try {
      // Check manifest and functions
      let healthyFunctions = 0;
      if (fs.existsSync(this.systems.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.systems.netlifyFunctions.manifestFile, 'utf8'));
        this.systems.netlifyFunctions.functions = manifest.functions || [];
        
        for (const func of this.systems.netlifyFunctions.functions) {
          const funcPath = path.join(this.workspace, "netlify/functions", func);
          if (fs.existsSync(funcPath)) {
            healthyFunctions++;
          }
        }
      }
      
      this.systems.netlifyFunctions.lastCheck = Date.now();
      this.systems.netlifyFunctions.health = healthyFunctions >= this.systems.netlifyFunctions.functions.length * 0.8;
      this.systems.netlifyFunctions.status = this.systems.netlifyFunctions.health ? "healthy" : "unhealthy";
      
      if (!this.systems.netlifyFunctions.health) {
        this.log("Netlify Functions systems health check failed", "WARN");
        await this.recoverNetlifyFunctionsSystems();
      }
      
    } catch (error) {
      this.log(`Netlify Functions monitoring error: ${error.message}`, "ERROR");
      this.systems.netlifyFunctions.health = false;
      this.systems.netlifyFunctions.status = "error";
    }
  }

  async monitorRedundancySystems() {
    try {
      // Check redundancy system files
      let healthySystems = 0;
      for (const system of this.systems.redundancy.systems) {
        const systemPath = path.join(this.workspace, "automation", system);
        if (fs.existsSync(systemPath)) {
          healthySystems++;
        }
      }
      
      this.systems.redundancy.lastCheck = Date.now();
      this.systems.redundancy.health = healthySystems >= this.systems.redundancy.systems.length * 0.8;
      this.systems.redundancy.status = this.systems.redundancy.health ? "healthy" : "unhealthy";
      
      if (!this.systems.redundancy.health) {
        this.log("Redundancy systems health check failed", "WARN");
        await this.recoverRedundancySystems();
      }
      
    } catch (error) {
      this.log(`Redundancy systems monitoring error: ${error.message}`, "ERROR");
      this.systems.redundancy.health = false;
      this.systems.redundancy.status = "error";
    }
  }

  updateOverallHealth() {
    const healthySystems = Object.values(this.systems).filter(system => system.health).length;
    const totalSystems = Object.keys(this.systems).length;
    
    this.log(`Overall system health: ${healthySystems}/${totalSystems} systems healthy`);
    
    if (healthySystems < totalSystems * 0.7) {
      this.log("Overall system health check failed, triggering emergency recovery", "WARN");
      this.triggerEmergencyRecovery();
    }
  }

  async recoverPM2Systems() {
    this.log("Attempting PM2 systems recovery...");
    
    try {
      // Restart PM2 daemon
      this.runCommand("pm2 kill");
      this.runCommand("pm2 start ecosystem.comprehensive-redundancy.cjs");
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      this.log("PM2 systems recovery completed");
    } catch (error) {
      this.log(`PM2 systems recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActionsSystems() {
    this.log("Attempting GitHub Actions systems recovery...");
    
    try {
      // Run fallback scripts
      for (const script of this.systems.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          this.log(`Running fallback script: ${script}`);
          this.runCommand(`node ${script}`);
        }
      }
      
      // Regenerate workflows if needed
      this.runCommand("npm run netlify:manifest");
      
      this.log("GitHub Actions systems recovery completed");
    } catch (error) {
      this.log(`GitHub Actions systems recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctionsSystems() {
    this.log("Attempting Netlify Functions systems recovery...");
    
    try {
      // Regenerate manifest
      this.runCommand("npm run netlify:manifest");
      
      // Validate functions
      for (const func of this.systems.netlifyFunctions.functions) {
        const funcPath = path.join(this.workspace, "netlify/functions", func);
        if (!fs.existsSync(funcPath)) {
          this.log(`Creating missing function: ${func}`);
          this.createNetlifyFunction(func);
        }
      }
      
      this.log("Netlify Functions systems recovery completed");
    } catch (error) {
      this.log(`Netlify Functions systems recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverRedundancySystems() {
    this.log("Attempting Redundancy systems recovery...");
    
    try {
      // Restart redundancy systems
      this.runCommand("npm run redundancy:comprehensive:restart");
      
      this.log("Redundancy systems recovery completed");
    } catch (error) {
      this.log(`Redundancy systems recovery failed: ${error.message}`, "ERROR");
    }
  }

  createNetlifyFunction(funcName) {
    try {
      const funcDir = path.join(this.workspace, "netlify/functions", funcName);
      if (!fs.existsSync(funcDir)) {
        fs.mkdirSync(funcDir, { recursive: true });
      }
      
      const funcFile = path.join(funcDir, "index.js");
      if (!fs.existsSync(funcFile)) {
        const funcContent = `exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "${funcName} function is working" })
  };
};`;
        fs.writeFileSync(funcFile, funcContent);
        this.log(`Created function: ${funcName}`);
      }
    } catch (error) {
      this.log(`Failed to create function ${funcName}: ${error.message}`, "ERROR");
    }
  }

  triggerEmergencyRecovery() {
    this.log("Triggering emergency recovery for all systems...", "WARN");
    
    try {
      // Restart all systems
      this.runCommand("pm2 restart all");
      this.runCommand("npm run redundancy:comprehensive:restart");
      
      // Wait for systems to stabilize
      setTimeout(() => {
        this.log("Emergency recovery completed");
      }, 30000);
      
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  runCommand(command) {
    try {
      const result = spawnSync(command, { 
        shell: true, 
        cwd: this.workspace,
        encoding: 'utf8'
      });
      
      return {
        stdout: result.stdout,
        stderr: result.stderr,
        error: result.error,
        code: result.status
      };
    } catch (error) {
      return {
        stdout: "",
        stderr: "",
        error: error,
        code: -1
      };
    }
  }

  getStatus() {
    return {
      systems: this.systems,
      uptime: Date.now() - this.startTime,
      version: "2.0.0",
      lastCheck: new Date().toISOString()
    };
  }

  async stop() {
    this.log("Stopping Comprehensive Automation Orchestrator V2...");
    
    try {
      // Stop monitoring
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
      }
      
      this.log("Comprehensive Automation Orchestrator V2 stopped");
      return true;
    } catch (error) {
      this.log(`Failed to stop: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveAutomationOrchestratorV2();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      orchestrator.start();
      break;
    case "stop":
      orchestrator.stop();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "monitor":
      orchestrator.start();
      // Keep running for monitoring
      process.on('SIGINT', () => {
        orchestrator.stop();
        process.exit(0);
      });
      break;
    case "recover":
      orchestrator.recoverPM2Systems();
      orchestrator.recoverGitHubActionsSystems();
      orchestrator.recoverNetlifyFunctionsSystems();
      orchestrator.recoverRedundancySystems();
      break;
    default:
      console.log("Usage: node comprehensive-automation-orchestrator-v2.cjs [start|stop|status|monitor|recover]");
      break;
  }
}

module.exports = ComprehensiveAutomationOrchestratorV2;