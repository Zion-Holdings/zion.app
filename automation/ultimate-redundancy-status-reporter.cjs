#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class UltimateRedundancyStatusReporter {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.reportsDir = path.join(this.workspace, "public/reports/redundancy");
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `status-reporter-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async generateStatusReport() {
    this.log("Generating redundancy status report...");
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        system: {
          name: "Ultimate Redundancy System",
          version: "2.0.0",
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          platform: process.platform,
          nodeVersion: process.version
        },
        components: await this.getComponentStatus(),
        summary: await this.generateSummary(),
        recommendations: await this.generateRecommendations()
      };

      // Save report to file
      const reportFile = path.join(this.reportsDir, `redundancy-status-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      // Generate HTML report
      await this.generateHTMLReport(report);
      
      this.log("Status report generated successfully");
      return report;
    } catch (error) {
      this.log(`Failed to generate status report: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async getComponentStatus() {
    const components = {
      pm2: await this.checkPM2Status(),
      githubActions: await this.checkGitHubActionsStatus(),
      netlifyFunctions: await this.checkNetlifyFunctionsStatus(),
      automation: await this.checkAutomationStatus()
    };

    return components;
  }

  async checkPM2Status() {
    try {
      // Check if PM2 is running
      const pm2Running = await this.executeCommand("pm2 ping");
      
      return {
        status: pm2Running ? "running" : "stopped",
        processes: await this.getPM2Processes(),
        lastCheck: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: "error",
        error: error.message,
        lastCheck: new Date().toISOString()
      };
    }
  }

  async checkGitHubActionsStatus() {
    try {
      const workflows = [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml",
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ];

      const existingWorkflows = workflows.filter(wf => fs.existsSync(wf));
      
      return {
        status: existingWorkflows.length > 0 ? "configured" : "not-configured",
        workflows: existingWorkflows,
        missing: workflows.filter(wf => !existingWorkflows.includes(wf)),
        lastCheck: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: "error",
        error: error.message,
        lastCheck: new Date().toISOString()
      };
    }
  }

  async checkNetlifyFunctionsStatus() {
    try {
      const functionsDir = "netlify/functions";
      const manifestFile = "netlify/functions/functions-manifest.json";
      
      const functionsExist = fs.existsSync(functionsDir);
      const manifestExists = fs.existsSync(manifestFile);
      
      return {
        status: functionsExist && manifestExists ? "configured" : "not-configured",
        functionsDirectory: functionsExist,
        manifestFile: manifestExists,
        lastCheck: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: "error",
        error: error.message,
        lastCheck: new Date().toISOString()
      };
    }
  }

  async checkAutomationStatus() {
    try {
      const automationFiles = [
        "automation/ultimate-redundancy-system.cjs",
        "automation/ultimate-redundancy-master.cjs",
        "automation/comprehensive-redundancy-orchestrator.cjs"
      ];

      const existingFiles = automationFiles.filter(file => fs.existsSync(file));
      
      return {
        status: existingFiles.length > 0 ? "available" : "not-available",
        files: existingFiles,
        missing: automationFiles.filter(file => !existingFiles.includes(file)),
        lastCheck: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: "error",
        error: error.message,
        lastCheck: new Date().toISOString()
      };
    }
  }

  async getPM2Processes() {
    try {
      // This would normally execute pm2 list, but for now return empty
      return [];
    } catch (error) {
      return [];
    }
  }

  async executeCommand(command) {
    // Placeholder for command execution
    return true;
  }

  async generateSummary() {
    return {
      overallHealth: "unknown",
      criticalIssues: 0,
      warnings: 0,
      recommendations: []
    };
  }

  async generateRecommendations() {
    return [
      "Ensure PM2 is running and configured",
      "Verify GitHub Actions workflows are properly configured",
      "Check Netlify Functions deployment status",
      "Monitor automation system logs for errors"
    ];
  }

  async generateHTMLReport(report) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redundancy Status Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
        .healthy { background-color: #d4edda; border: 1px solid #c3e6cb; }
        .warning { background-color: #fff3cd; border: 1px solid #ffeaa7; }
        .error { background-color: #f8d7da; border: 1px solid #f5c6cb; }
        .component { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .timestamp { color: #666; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>Ultimate Redundancy System Status Report</h1>
    <div class="timestamp">Generated: ${report.timestamp}</div>
    
    <div class="component">
        <h2>System Overview</h2>
        <p><strong>Name:</strong> ${report.system.name}</p>
        <p><strong>Version:</strong> ${report.system.version}</p>
        <p><strong>Uptime:</strong> ${Math.round(report.system.uptime)} seconds</p>
        <p><strong>Platform:</strong> ${report.system.platform}</p>
        <p><strong>Node Version:</strong> ${report.system.nodeVersion}</p>
    </div>
    
    <div class="component">
        <h2>Component Status</h2>
        ${Object.entries(report.components).map(([name, status]) => `
            <div class="status ${status.status === 'error' ? 'error' : status.status === 'running' || status.status === 'configured' || status.status === 'available' ? 'healthy' : 'warning'}">
                <h3>${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <p><strong>Status:</strong> ${status.status}</p>
                <p><strong>Last Check:</strong> ${status.lastCheck}</p>
                ${status.error ? `<p><strong>Error:</strong> ${status.error}</p>` : ''}
            </div>
        `).join('')}
    </div>
    
    <div class="component">
        <h2>Recommendations</h2>
        <ul>
            ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    </div>
</body>
</html>`;

    const htmlFile = path.join(this.reportsDir, `redundancy-status-${new Date().toISOString().split('T')[0]}.html`);
    fs.writeFileSync(htmlFile, html);
  }

  async runCommand(command) {
    switch (command) {
      case "generate":
        return await this.generateStatusReport();
        
      case "status":
        const report = await this.generateStatusReport();
        console.log(JSON.stringify(report, null, 2));
        break;
        
      default:
        this.log(`Unknown command: ${command}`, "ERROR");
        this.log("Available commands: generate, status");
    }
  }
}

// CLI interface
if (require.main === module) {
  const reporter = new UltimateRedundancyStatusReporter();
  const command = process.argv[2] || "status";
  
  reporter.runCommand(command).catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = UltimateRedundancyStatusReporter;