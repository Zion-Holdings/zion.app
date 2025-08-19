#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class MasterRedundancyOrchestrator {
  constructor() {
    this.logsDir = path.join(process.cwd(), "automation", "logs");
    this.redundancyDir = path.join(process.cwd(), "automation", "redundancy");
    this.ensureDirectories();
    
    // Import redundancy managers
    this.pm2Manager = null;
    this.githubActionsManager = null;
    this.netlifyFunctionsManager = null;
    
    this.loadManagers();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadManagers() {
    try {
      const pm2ManagerPath = path.join(this.redundancyDir, "pm2-redundancy-manager.cjs");
      const githubActionsManagerPath = path.join(this.redundancyDir, "github-actions-redundancy-manager.cjs");
      const netlifyFunctionsManagerPath = path.join(this.redundancyDir, "netlify-functions-redundancy-manager.cjs");

      if (fs.existsSync(pm2ManagerPath)) {
        this.pm2Manager = require(pm2ManagerPath);
      }
      if (fs.existsSync(githubActionsManagerPath)) {
        this.githubActionsManager = require(githubActionsManagerPath);
      }
      if (fs.existsSync(netlifyFunctionsManagerPath)) {
        this.netlifyFunctionsManager = require(netlifyFunctionsManagerPath);
      }
    } catch (error) {
      this.log(`Failed to load redundancy managers: ${error.message}`);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] MASTER-REDUNDANCY: ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, "master-redundancy-orchestrator.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  runCommand(command, args = []) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  async setupPM2Redundancy() {
    this.log("Setting up PM2 redundancy...");
    
    if (!this.pm2Manager) {
      this.log("PM2 manager not available, running setup directly...");
      const result = this.runCommand("node", [
        "automation/redundancy/pm2-redundancy-manager.cjs",
        "full-setup"
      ]);
      
      if (result.success) {
        this.log("PM2 redundancy setup completed");
        return true;
      } else {
        this.log(`PM2 redundancy setup failed: ${result.stderr}`);
        return false;
      }
    }

    try {
      const manager = new this.pm2Manager();
      manager.backupPM2Configuration();
      manager.createRedundancyEcosystem();
      manager.startRedundancyProcesses();
      this.log("PM2 redundancy setup completed");
      return true;
    } catch (error) {
      this.log(`PM2 redundancy setup failed: ${error.message}`);
      return false;
    }
  }

  async setupGitHubActionsRedundancy() {
    this.log("Setting up GitHub Actions redundancy...");
    
    if (!this.githubActionsManager) {
      this.log("GitHub Actions manager not available, running setup directly...");
      const result = this.runCommand("node", [
        "automation/redundancy/github-actions-redundancy-manager.cjs",
        "full-setup"
      ]);
      
      if (result.success) {
        this.log("GitHub Actions redundancy setup completed");
        return true;
      } else {
        this.log(`GitHub Actions redundancy setup failed: ${result.stderr}`);
        return false;
      }
    }

    try {
      const manager = new this.githubActionsManager();
      manager.backupWorkflows();
      manager.createRedundancyWorkflows();
      manager.createWorkflowOrchestrator();
      this.log("GitHub Actions redundancy setup completed");
      return true;
    } catch (error) {
      this.log(`GitHub Actions redundancy setup failed: ${error.message}`);
      return false;
    }
  }

  async setupNetlifyFunctionsRedundancy() {
    this.log("Setting up Netlify Functions redundancy...");
    
    if (!this.netlifyFunctionsManager) {
      this.log("Netlify Functions manager not available, running setup directly...");
      const result = this.runCommand("node", [
        "automation/redundancy/netlify-functions-redundancy-manager.cjs",
        "full-setup"
      ]);
      
      if (result.success) {
        this.log("Netlify Functions redundancy setup completed");
        return true;
      } else {
        this.log(`Netlify Functions redundancy setup failed: ${result.stderr}`);
        return false;
      }
    }

    try {
      const manager = new this.netlifyFunctionsManager();
      manager.backupFunctions();
      manager.createRedundancyFunctions();
      manager.createRedundancyManifest();
      manager.createFunctionOrchestrator();
      manager.createRedundancyDeploymentScript();
      this.log("Netlify Functions redundancy setup completed");
      return true;
    } catch (error) {
      this.log(`Netlify Functions redundancy setup failed: ${error.message}`);
      return false;
    }
  }

  async setupAllRedundancy() {
    this.log("Setting up complete redundancy system...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false
    };

    // Setup PM2 redundancy
    try {
      results.pm2 = await this.setupPM2Redundancy();
    } catch (error) {
      this.log(`PM2 redundancy setup error: ${error.message}`);
    }

    // Setup GitHub Actions redundancy
    try {
      results.githubActions = await this.setupGitHubActionsRedundancy();
    } catch (error) {
      this.log(`GitHub Actions redundancy setup error: ${error.message}`);
    }

    // Setup Netlify Functions redundancy
    try {
      results.netlifyFunctions = await this.setupNetlifyFunctionsRedundancy();
    } catch (error) {
      this.log(`Netlify Functions redundancy setup error: ${error.message}`);
    }

    // Generate setup report
    const setupReport = {
      timestamp: new Date().toISOString(),
      results: results,
      overall: Object.values(results).every(r => r),
      summary: {
        pm2: results.pm2 ? "Success" : "Failed",
        githubActions: results.githubActions ? "Success" : "Failed",
        netlifyFunctions: results.netlifyFunctions ? "Success" : "Failed"
      }
    };

    // Save setup report
    const reportPath = path.join(this.redundancyDir, "redundancy-setup-report.json");
    try {
      fs.writeFileSync(reportPath, JSON.stringify(setupReport, null, 2));
      this.log(`Setup report saved to: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to save setup report: ${error.message}`);
    }

    // Log results
    this.log("Redundancy setup results:");
    this.log(`  PM2: ${results.pm2 ? "SUCCESS" : "FAILED"}`);
    this.log(`  GitHub Actions: ${results.githubActions ? "SUCCESS" : "FAILED"}`);
    this.log(`  Netlify Functions: ${results.netlifyFunctions ? "SUCCESS" : "FAILED"}`);
    this.log(`  Overall: ${setupReport.overall ? "SUCCESS" : "FAILED"}`);

    return setupReport;
  }

  async monitorRedundancy() {
    this.log("Starting redundancy monitoring...");
    
    const monitoring = true;
    while (monitoring) {
      try {
        // Check PM2 health
        if (this.pm2Manager) {
          const pm2Result = this.runCommand("node", [
            "automation/pm2-health-monitor.cjs",
            "check"
          ]);
          
          if (pm2Result.success) {
            this.log("PM2 health check passed");
          } else {
            this.log("PM2 health check failed, attempting recovery...");
            this.runCommand("node", [
              "automation/pm2-health-monitor.cjs",
              "recover"
            ]);
          }
        }

        // Check GitHub Actions status
        const workflowsDir = path.join(process.cwd(), ".github", "workflows");
        if (fs.existsSync(workflowsDir)) {
          const workflows = fs.readdirSync(workflowsDir);
          const redundancyWorkflows = workflows.filter(w => w.includes('redundancy'));
          this.log(`Found ${redundancyWorkflows.length} redundancy workflows`);
        }

        // Check Netlify Functions status
        const functionsDir = path.join(process.cwd(), "netlify", "functions");
        if (fs.existsSync(functionsDir)) {
          const manifestPath = path.join(functionsDir, "functions-manifest.json");
          if (fs.existsSync(manifestPath)) {
            try {
              const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
              this.log(`Netlify functions available: ${manifest.functions ? manifest.functions.length : 0}`);
            } catch (error) {
              this.log(`Failed to read Netlify functions manifest: ${error.message}`);
            }
          }
        }

        // Wait before next check
        await new Promise(resolve => setTimeout(resolve, 60000)); // 1 minute

      } catch (error) {
        this.log(`Monitoring error: ${error.message}`);
        await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds on error
      }
    }
  }

  generateRedundancyReport() {
    this.log("Generating redundancy report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      systems: {
        pm2: {
          status: "unknown",
          processes: [],
          health: null
        },
        githubActions: {
          status: "unknown",
          workflows: [],
          redundancyWorkflows: []
        },
        netlifyFunctions: {
          status: "unknown",
          functions: [],
          redundancyFunctions: []
        }
      },
      recommendations: []
    };

    // Check PM2 status
    try {
      const pm2Status = this.runCommand("pm2", ["jlist"]);
      if (pm2Status.success) {
        const processes = JSON.parse(pm2Status.stdout);
        report.systems.pm2.status = "operational";
        report.systems.pm2.processes = processes.map(p => ({
          name: p.name,
          status: p.pm2_env?.status,
          restarts: p.pm2_env?.restart_time || 0
        }));
        
        // Check for redundancy processes
        const redundancyProcesses = processes.filter(p => 
          p.name.includes('redundant') || p.name.includes('backup')
        );
        if (redundancyProcesses.length === 0) {
          report.recommendations.push("PM2: No redundancy processes found, consider setting up redundancy");
        }
      } else {
        report.systems.pm2.status = "failed";
        report.recommendations.push("PM2: Failed to get status");
      }
    } catch (error) {
      report.systems.pm2.status = "error";
      report.systems.pm2.processes = [];
    }

    // Check GitHub Actions status
    const workflowsDir = path.join(process.cwd(), ".github", "workflows");
    if (fs.existsSync(workflowsDir)) {
      const workflows = fs.readdirSync(workflowsDir);
      report.systems.githubActions.workflows = workflows;
      report.systems.githubActions.redundancyWorkflows = workflows.filter(w => 
        w.includes('redundancy') || w.includes('backup')
      );
      report.systems.githubActions.status = "operational";
      
      if (report.systems.githubActions.redundancyWorkflows.length === 0) {
        report.recommendations.push("GitHub Actions: No redundancy workflows found, consider setting up redundancy");
      }
    } else {
      report.systems.githubActions.status = "not_found";
      report.recommendations.push("GitHub Actions: Workflows directory not found");
    }

    // Check Netlify Functions status
    const functionsDir = path.join(process.cwd(), "netlify", "functions");
    if (fs.existsSync(functionsDir)) {
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
          report.systems.netlifyFunctions.functions = manifest.functions || [];
          report.systems.netlifyFunctions.status = "operational";
          
          // Check for redundancy functions
          const redundancyDir = path.join(this.redundancyDir, "netlify-functions");
          if (fs.existsSync(redundancyDir)) {
            const redundancyFunctions = fs.readdirSync(redundancyDir);
            report.systems.netlifyFunctions.redundancyFunctions = redundancyFunctions;
            
            if (redundancyFunctions.length === 0) {
              report.recommendations.push("Netlify Functions: No redundancy functions found, consider setting up redundancy");
            }
          }
        } catch (error) {
          report.systems.netlifyFunctions.status = "error";
          report.recommendations.push(`Netlify Functions: Failed to parse manifest: ${error.message}`);
        }
      } else {
        report.systems.netlifyFunctions.status = "no_manifest";
        report.recommendations.push("Netlify Functions: No functions manifest found");
      }
    } else {
      report.systems.netlifyFunctions.status = "not_found";
      report.recommendations.push("Netlify Functions: Functions directory not found");
    }

    // Save report
    const reportPath = path.join(this.redundancyDir, "redundancy-status-report.json");
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Redundancy report saved to: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to save redundancy report: ${error.message}`);
    }

    return report;
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "setup":
        this.setupAllRedundancy();
        break;
      case "setup-pm2":
        this.setupPM2Redundancy();
        break;
      case "setup-github":
        this.setupGitHubActionsRedundancy();
        break;
      case "setup-netlify":
        this.setupNetlifyFunctionsRedundancy();
        break;
      case "monitor":
        this.monitorRedundancy();
        break;
      case "report":
        const report = this.generateRedundancyReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case "status":
        const status = this.generateRedundancyReport();
        console.log("Redundancy System Status:");
        console.log(`  PM2: ${status.systems.pm2.status}`);
        console.log(`  GitHub Actions: ${status.systems.githubActions.status}`);
        console.log(`  Netlify Functions: ${status.systems.netlifyFunctions.status}`);
        break;
      default:
        this.log("Available commands: setup, setup-pm2, setup-github, setup-netlify, monitor, report, status");
        this.log("Usage: node automation/redundancy/master-redundancy-orchestrator.cjs <command>");
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  orchestrator.run();
}

module.exports = MasterRedundancyOrchestrator;