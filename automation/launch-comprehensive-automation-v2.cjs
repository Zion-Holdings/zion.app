#!/usr/bin/env node
"use strict";

const { spawn } = require("child_process");
const path = require("path");

class ComprehensiveAutomationV2Launcher {
  constructor() {
    this.workspace = process.cwd();
    this.processes = new Map();
    this.logDir = path.join(this.workspace, "automation/logs");
    
    this.systems = {
      redundancy: {
        name: "Comprehensive Redundancy Automation V2",
        script: path.join(this.workspace, "automation/comprehensive-redundancy-automation-v2.cjs"),
        args: ["start"],
        logFile: path.join(this.logDir, "redundancy-v2-launcher.log")
      },
      orchestrator: {
        name: "Comprehensive Automation Orchestrator V2",
        script: path.join(this.workspace, "automation/comprehensive-automation-orchestrator-v2.cjs"),
        args: ["start"],
        logFile: path.join(this.logDir, "orchestrator-v2-launcher.log")
      }
    };
  }

  async start() {
    console.log("🚀 Launching Comprehensive Automation V2 Systems...");
    console.log("=" * 60);
    
    try {
      // Start redundancy system
      await this.startSystem("redundancy");
      
      // Wait a moment for redundancy to initialize
      await this.sleep(3000);
      
      // Start orchestrator system
      await this.startSystem("orchestrator");
      
      console.log("✅ All Comprehensive Automation V2 systems launched successfully!");
      console.log("📊 Use 'npm run orchestrator:v2:status' to check system status");
      console.log("🔍 Use 'npm run orchestrator:v2:health' to check system health");
      
      return true;
    } catch (error) {
      console.error("❌ Failed to launch automation systems:", error.message);
      return false;
    }
  }

  async startSystem(systemKey) {
    const system = this.systems[systemKey];
    
    if (!system) {
      throw new Error(`Unknown system: ${systemKey}`);
    }
    
    console.log(`🚀 Starting ${system.name}...`);
    
    try {
      const process = spawn("node", [system.script, ...system.args], {
        cwd: this.workspace,
        stdio: ["pipe", "pipe", "pipe"],
        detached: false
      });
      
      // Store process reference
      this.processes.set(systemKey, process);
      
      // Handle process events
      process.stdout.on("data", (data) => {
        console.log(`[${systemKey.toUpperCase()}] ${data.toString().trim()}`);
      });
      
      process.stderr.on("data", (data) => {
        console.error(`[${systemKey.toUpperCase()}] ERROR: ${data.toString().trim()}`);
      });
      
      process.on("close", (code) => {
        console.log(`[${systemKey.toUpperCase()}] Process exited with code ${code}`);
        this.processes.delete(systemKey);
      });
      
      process.on("error", (error) => {
        console.error(`[${systemKey.toUpperCase()}] Process error:`, error.message);
        this.processes.delete(systemKey);
      });
      
      // Wait for process to start
      await this.waitForProcessStart(process, systemKey);
      
      console.log(`✅ ${system.name} started successfully`);
      
    } catch (error) {
      throw new Error(`Failed to start ${system.name}: ${error.message}`);
    }
  }

  async waitForProcessStart(process, systemKey) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Timeout waiting for ${systemKey} to start`));
      }, 10000);
      
      // Check if process is still running after a short delay
      setTimeout(() => {
        if (process.exitCode === null && !process.killed) {
          clearTimeout(timeout);
          resolve();
        }
      }, 2000);
      
      process.on("close", (code) => {
        clearTimeout(timeout);
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`${systemKey} exited with code ${code}`));
        }
      });
      
      process.on("error", (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  async stop() {
    console.log("🛑 Stopping Comprehensive Automation V2 Systems...");
    
    try {
      for (const [systemKey, process] of this.processes) {
        console.log(`🛑 Stopping ${this.systems[systemKey].name}...`);
        process.kill("SIGTERM");
      }
      
      // Wait for processes to stop
      await this.sleep(2000);
      
      // Force kill if still running
      for (const [systemKey, process] of this.processes) {
        if (!process.killed) {
          console.log(`🔨 Force killing ${this.systems[systemKey].name}...`);
          process.kill("SIGKILL");
        }
      }
      
      this.processes.clear();
      console.log("✅ All automation systems stopped");
      
      return true;
    } catch (error) {
      console.error("❌ Failed to stop automation systems:", error.message);
      return false;
    }
  }

  async restart() {
    console.log("🔄 Restarting Comprehensive Automation V2 Systems...");
    
    try {
      await this.stop();
      await this.sleep(2000);
      await this.start();
      
      return true;
    } catch (error) {
      console.error("❌ Failed to restart automation systems:", error.message);
      return false;
    }
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      systems: {}
    };
    
    for (const [systemKey, system] of Object.entries(this.systems)) {
      const process = this.processes.get(systemKey);
      status.systems[systemKey] = {
        name: system.name,
        running: process && !process.killed,
        pid: process ? process.pid : null,
        exitCode: process ? process.exitCode : null
      };
    }
    
    return status;
  }

  showStatus() {
    const status = this.getStatus();
    
    console.log("📊 Comprehensive Automation V2 Status");
    console.log("=" * 50);
    console.log(`Timestamp: ${status.timestamp}`);
    console.log("");
    
    for (const [systemKey, systemStatus] of Object.entries(status.systems)) {
      const statusIcon = systemStatus.running ? "🟢" : "🔴";
      console.log(`${statusIcon} ${systemStatus.name}`);
      console.log(`   Status: ${systemStatus.running ? "RUNNING" : "STOPPED"}`);
      if (systemStatus.running && systemStatus.pid) {
        console.log(`   PID: ${systemStatus.pid}`);
      }
      console.log("");
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI interface
if (require.main === module) {
  const launcher = new ComprehensiveAutomationV2Launcher();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      launcher.start().then(success => {
        if (success) {
          console.log("Launcher completed successfully");
          process.exit(0);
        } else {
          console.error("Launcher failed");
          process.exit(1);
        }
      });
      break;
      
    case "stop":
      launcher.stop().then(success => {
        if (success) {
          console.log("Systems stopped successfully");
          process.exit(0);
        } else {
          console.error("Failed to stop systems");
          process.exit(1);
        }
      });
      break;
      
    case "restart":
      launcher.restart().then(success => {
        if (success) {
          console.log("Systems restarted successfully");
          process.exit(0);
        } else {
          console.error("Failed to restart systems");
          process.exit(1);
        }
      });
      break;
      
    case "status":
      launcher.showStatus();
      break;
      
    default:
      console.log("Comprehensive Automation V2 Launcher");
      console.log("");
      console.log("Usage: node launch-comprehensive-automation-v2.cjs [COMMAND]");
      console.log("");
      console.log("Commands:");
      console.log("  start     Start all automation systems");
      console.log("  stop      Stop all automation systems");
      console.log("  restart   Restart all automation systems");
      console.log("  status    Show system status");
      console.log("");
      console.log("Examples:");
      console.log("  node launch-comprehensive-automation-v2.cjs start");
      console.log("  node launch-comprehensive-automation-v2.cjs status");
      process.exit(1);
  }
}

module.exports = ComprehensiveAutomationV2Launcher;