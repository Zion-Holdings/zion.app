#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

class ComprehensiveAutomationDashboardV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.systems = {
      pm2: { name: "PM2 Process Management", status: "unknown", health: false },
      githubActions: { name: "GitHub Actions Workflows", status: "unknown", health: false },
      netlifyFunctions: { name: "Netlify Functions", status: "unknown", health: false },
      redundancy: { name: "Redundancy Systems", status: "unknown", health: false }
    };
    
    this.startTime = Date.now();
    this.logFile = path.join(this.logDir, "comprehensive-automation-dashboard-v2.log");
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
    this.log("Starting Comprehensive Automation Dashboard V2...");
    
    try {
      // Initialize dashboard
      await this.initializeDashboard();
      
      // Start monitoring
      this.startMonitoring();
      
      // Show main menu
      this.showMainMenu();
      
      this.log("Comprehensive Automation Dashboard V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, "ERROR");
      return false;
    }
  }

  async initializeDashboard() {
    this.log("Initializing dashboard...");
    
    // Check system status
    await this.checkAllSystems();
    
    this.log("Dashboard initialized");
  }

  async checkAllSystems() {
    this.log("Checking all automation systems...");
    
    // Check PM2 systems
    await this.checkPM2Systems();
    
    // Check GitHub Actions systems
    await this.checkGitHubActionsSystems();
    
    // Check Netlify Functions systems
    await this.checkNetlifyFunctionsSystems();
    
    // Check Redundancy systems
    await this.checkRedundancySystems();
    
    this.log("All systems checked");
  }

  async checkPM2Systems() {
    try {
      const status = this.runCommand("pm2 status --json");
      if (status.error) {
        this.systems.pm2.status = "error";
        this.systems.pm2.health = false;
        return;
      }
      
      try {
        const processes = JSON.parse(status.stdout);
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
        
      } catch (parseError) {
        this.systems.pm2.status = "error";
        this.systems.pm2.health = false;
      }
      
    } catch (error) {
      this.systems.pm2.status = "error";
      this.systems.pm2.health = false;
    }
  }

  async checkGitHubActionsSystems() {
    try {
      const workflowsDir = ".github/workflows";
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
        this.systems.githubActions.health = workflowFiles.length > 0;
        this.systems.githubActions.status = this.systems.githubActions.health ? "healthy" : "unhealthy";
      } else {
        this.systems.githubActions.status = "unhealthy";
        this.systems.githubActions.health = false;
      }
    } catch (error) {
      this.systems.githubActions.status = "error";
      this.systems.githubActions.health = false;
    }
  }

  async checkNetlifyFunctionsSystems() {
    try {
      const manifestFile = "netlify/functions/functions-manifest.json";
      if (fs.existsSync(manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
        this.systems.netlifyFunctions.health = manifest.functions && manifest.functions.length > 0;
        this.systems.netlifyFunctions.status = this.systems.netlifyFunctions.health ? "healthy" : "unhealthy";
      } else {
        this.systems.netlifyFunctions.status = "unhealthy";
        this.systems.netlifyFunctions.health = false;
      }
    } catch (error) {
      this.systems.netlifyFunctions.status = "error";
      this.systems.netlifyFunctions.health = false;
    }
  }

  async checkRedundancySystems() {
    try {
      const redundancySystems = [
        "comprehensive-redundancy-automation-v2.cjs",
        "ultimate-redundancy-master.cjs",
        "comprehensive-redundancy-orchestrator.cjs"
      ];
      
      let healthyCount = 0;
      for (const system of redundancySystems) {
        const systemPath = path.join(this.workspace, "automation", system);
        if (fs.existsSync(systemPath)) {
          healthyCount++;
        }
      }
      
      this.systems.redundancy.health = healthyCount >= redundancySystems.length * 0.8;
      this.systems.redundancy.status = this.systems.redundancy.health ? "healthy" : "unhealthy";
      
    } catch (error) {
      this.systems.redundancy.status = "error";
      this.systems.redundancy.health = false;
    }
  }

  startMonitoring() {
    this.log("Starting system monitoring...");
    
    // Monitor all systems every 30 seconds
    this.monitoringInterval = setInterval(() => {
      this.checkAllSystems();
    }, 30000);
    
    this.log("System monitoring started");
  }

  showMainMenu() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║           COMPREHENSIVE AUTOMATION DASHBOARD V2              ║");
    console.log("╠══════════════════════════════════════════════════════════════╣");
    console.log("║                                                              ║");
    
    // Show system status
    Object.entries(this.systems).forEach(([key, system]) => {
      const statusIcon = system.health ? "🟢" : "🔴";
      const statusText = system.status.toUpperCase();
      console.log(`║ ${statusIcon} ${system.name.padEnd(35)} ${statusText.padStart(15)} ║`);
    });
    
    console.log("║                                                              ║");
    console.log("╠══════════════════════════════════════════════════════════════╣");
    console.log("║                        MAIN MENU                            ║");
    console.log("╠══════════════════════════════════════════════════════════════╣");
    console.log("║  1. System Status Overview                                  ║");
    console.log("║  2. PM2 Process Management                                  ║");
    console.log("║  3. GitHub Actions Management                               ║");
    console.log("║  4. Netlify Functions Management                            ║");
    console.log("║  5. Redundancy Systems Management                           ║");
    console.log("║  6. Comprehensive Health Check                              ║");
    console.log("║  7. Emergency Recovery                                      ║");
    console.log("║  8. View Logs                                               ║");
    console.log("║  9. Refresh Status                                          ║");
    console.log("║  0. Exit                                                    ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    this.rl.question("Select an option (0-9): ", (answer) => {
      this.handleMenuSelection(answer);
    });
  }

  async handleMenuSelection(selection) {
    switch (selection) {
      case "1":
        await this.showSystemStatusOverview();
        break;
      case "2":
        await this.showPM2Management();
        break;
      case "3":
        await this.showGitHubActionsManagement();
        break;
      case "4":
        await this.showNetlifyFunctionsManagement();
        break;
      case "5":
        await this.showRedundancySystemsManagement();
        break;
      case "6":
        await this.runComprehensiveHealthCheck();
        break;
      case "7":
        await this.runEmergencyRecovery();
        break;
      case "8":
        await this.showLogs();
        break;
      case "9":
        await this.refreshStatus();
        break;
      case "0":
        await this.exit();
        break;
      default:
        console.log("Invalid selection. Please try again.");
        setTimeout(() => this.showMainMenu(), 1000);
        break;
    }
  }

  async showSystemStatusOverview() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                   SYSTEM STATUS OVERVIEW                    ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    Object.entries(this.systems).forEach(([key, system]) => {
      const statusIcon = system.health ? "🟢" : "🔴";
      const statusText = system.status.toUpperCase();
      console.log(`${statusIcon} ${system.name}`);
      console.log(`   Status: ${statusText}`);
      console.log(`   Health: ${system.health ? "Healthy" : "Unhealthy"}`);
      console.log("");
    });
    
    console.log("Uptime:", this.formatUptime(Date.now() - this.startTime));
    console.log("");
    
    this.rl.question("Press Enter to return to main menu...", () => {
      this.showMainMenu();
    });
  }

  async showPM2Management() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                    PM2 PROCESS MANAGEMENT                   ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    try {
      const status = this.runCommand("pm2 status");
      console.log(status.stdout || "No PM2 processes running");
    } catch (error) {
      console.log("Failed to get PM2 status:", error.message);
    }
    
    console.log("");
    console.log("1. Start PM2");
    console.log("2. Stop PM2");
    console.log("3. Restart PM2");
    console.log("4. View PM2 Logs");
    console.log("5. Return to Main Menu");
    console.log("");
    
    this.rl.question("Select an option (1-5): ", (answer) => {
      this.handlePM2Selection(answer);
    });
  }

  async handlePM2Selection(selection) {
    switch (selection) {
      case "1":
        this.runCommand("pm2 start ecosystem.comprehensive-redundancy.cjs");
        console.log("PM2 started");
        break;
      case "2":
        this.runCommand("pm2 stop all");
        console.log("PM2 stopped");
        break;
      case "3":
        this.runCommand("pm2 restart all");
        console.log("PM2 restarted");
        break;
      case "4":
        this.runCommand("pm2 logs --lines 20");
        break;
      case "5":
        this.showMainMenu();
        return;
      default:
        console.log("Invalid selection");
        break;
    }
    
    setTimeout(() => this.showPM2Management(), 2000);
  }

  async showGitHubActionsManagement() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                  GITHUB ACTIONS MANAGEMENT                  ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    try {
      const workflowsDir = ".github/workflows";
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
        console.log("Available Workflows:");
        workflowFiles.forEach(workflow => {
          console.log(`  - ${workflow}`);
        });
      } else {
        console.log("No GitHub Actions workflows found");
      }
    } catch (error) {
      console.log("Failed to read workflows:", error.message);
    }
    
    console.log("");
    console.log("1. Run Marketing Sync");
    console.log("2. Run Sync Health");
    console.log("3. Validate Workflows");
    console.log("4. Return to Main Menu");
    console.log("");
    
    this.rl.question("Select an option (1-4): ", (answer) => {
      this.handleGitHubActionsSelection(answer);
    });
  }

  async handleGitHubActionsSelection(selection) {
    switch (selection) {
      case "1":
        this.runCommand("node automation/marketing-sync.js");
        console.log("Marketing sync started");
        break;
      case "2":
        this.runCommand("node automation/pm2-auto-sync.js");
        console.log("Sync health check started");
        break;
      case "3":
        console.log("Validating workflows...");
        // Add workflow validation logic
        break;
      case "4":
        this.showMainMenu();
        return;
      default:
        console.log("Invalid selection");
        break;
    }
    
    setTimeout(() => this.showGitHubActionsManagement(), 2000);
  }

  async showNetlifyFunctionsManagement() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                  NETLIFY FUNCTIONS MANAGEMENT               ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    try {
      const manifestFile = "netlify/functions/functions-manifest.json";
      if (fs.existsSync(manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
        console.log(`Total Functions: ${manifest.functions?.length || 0}`);
        console.log("");
        console.log("Available Functions:");
        (manifest.functions || []).slice(0, 20).forEach(func => {
          console.log(`  - ${func}`);
        });
        if ((manifest.functions || []).length > 20) {
          console.log(`  ... and ${(manifest.functions || []).length - 20} more`);
        }
      } else {
        console.log("No Netlify Functions manifest found");
      }
    } catch (error) {
      console.log("Failed to read functions:", error.message);
    }
    
    console.log("");
    console.log("1. Regenerate Manifest");
    console.log("2. Validate Functions");
    console.log("3. Return to Main Menu");
    console.log("");
    
    this.rl.question("Select an option (1-3): ", (answer) => {
      this.handleNetlifyFunctionsSelection(answer);
    });
  }

  async handleNetlifyFunctionsSelection(selection) {
    switch (selection) {
      case "1":
        this.runCommand("npm run netlify:manifest");
        console.log("Manifest regeneration started");
        break;
      case "2":
        console.log("Validating functions...");
        // Add function validation logic
        break;
      case "3":
        this.showMainMenu();
        return;
      default:
        console.log("Invalid selection");
        break;
    }
    
    setTimeout(() => this.showNetlifyFunctionsManagement(), 2000);
  }

  async showRedundancySystemsManagement() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                REDUNDANCY SYSTEMS MANAGEMENT                ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    console.log("Redundancy Systems:");
    console.log("  - Comprehensive Redundancy Automation V2");
    console.log("  - Ultimate Redundancy Master");
    console.log("  - Comprehensive Redundancy Orchestrator");
    console.log("");
    
    console.log("1. Start All Redundancy Systems");
    console.log("2. Stop All Redundancy Systems");
    console.log("3. Check Redundancy Health");
    console.log("4. Return to Main Menu");
    console.log("");
    
    this.rl.question("Select an option (1-4): ", (answer) => {
      this.handleRedundancySelection(answer);
    });
  }

  async handleRedundancySelection(selection) {
    switch (selection) {
      case "1":
        this.runCommand("npm run redundancy:v2:start");
        console.log("Redundancy systems started");
        break;
      case "2":
        this.runCommand("npm run redundancy:v2:stop");
        console.log("Redundancy systems stopped");
        break;
      case "3":
        this.runCommand("npm run redundancy:v2:health");
        break;
      case "4":
        this.showMainMenu();
        return;
      default:
        console.log("Invalid selection");
        break;
    }
    
    setTimeout(() => this.showRedundancySystemsManagement(), 2000);
  }

  async runComprehensiveHealthCheck() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                 COMPREHENSIVE HEALTH CHECK                  ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    console.log("Running comprehensive health check...");
    
    // Check all systems
    await this.checkAllSystems();
    
    // Show results
    console.log("Health Check Results:");
    console.log("");
    
    Object.entries(this.systems).forEach(([key, system]) => {
      const statusIcon = system.health ? "🟢" : "🔴";
      console.log(`${statusIcon} ${system.name}: ${system.status.toUpperCase()}`);
    });
    
    console.log("");
    console.log("Health Check completed");
    
    this.rl.question("Press Enter to return to main menu...", () => {
      this.showMainMenu();
    });
  }

  async runEmergencyRecovery() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                    EMERGENCY RECOVERY                       ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    console.log("⚠️  WARNING: This will restart all automation systems!");
    console.log("");
    
    this.rl.question("Are you sure you want to continue? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Starting emergency recovery...");
        
        // Restart all systems
        this.runCommand("pm2 restart all");
        this.runCommand("npm run redundancy:comprehensive:restart");
        
        console.log("Emergency recovery completed");
        
        setTimeout(() => {
          this.showMainMenu();
        }, 3000);
      } else {
        this.showMainMenu();
      }
    });
  }

  async showLogs() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════════════╗");
    console.log("║                         VIEW LOGS                           ║");
    console.log("╚══════════════════════════════════════════════════════════════╝");
    console.log("");
    
    try {
      if (fs.existsSync(this.logFile)) {
        const logContent = fs.readFileSync(this.logFile, 'utf8');
        const lines = logContent.split('\n');
        const recentLines = lines.slice(-20);
        
        console.log("Recent Log Entries:");
        console.log("");
        recentLines.forEach(line => {
          if (line.trim()) {
            console.log(line);
          }
        });
      } else {
        console.log("No log file found");
      }
    } catch (error) {
      console.log("Failed to read logs:", error.message);
    }
    
    console.log("");
    this.rl.question("Press Enter to return to main menu...", () => {
      this.showMainMenu();
    });
  }

  async refreshStatus() {
    console.log("Refreshing system status...");
    await this.checkAllSystems();
    console.log("Status refreshed");
    
    setTimeout(() => this.showMainMenu(), 1000);
  }

  async exit() {
    console.log("Shutting down dashboard...");
    
    // Stop monitoring
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    
    // Close readline interface
    this.rl.close();
    
    console.log("Dashboard shutdown complete");
    process.exit(0);
  }

  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
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
}

// CLI interface
if (require.main === module) {
  const dashboard = new ComprehensiveAutomationDashboardV2();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      dashboard.start();
      break;
    case "status":
      dashboard.checkAllSystems().then(() => {
        console.log(JSON.stringify(dashboard.systems, null, 2));
        process.exit(0);
      });
      break;
    default:
      dashboard.start();
      break;
  }
}

module.exports = ComprehensiveAutomationDashboardV2;