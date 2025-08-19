#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

class AutomationCoverageAnalyzer {
  constructor() {
    this.workspace = process.cwd();
    this.coverage = {
      pm2: { total: 0, covered: 0, processes: [] },
      githubActions: { total: 0, covered: 0, workflows: [] },
      netlifyFunctions: { total: 0, covered: 0, functions: [] },
      npmScripts: { total: 0, covered: 0, scripts: [] },
      overall: { total: 0, covered: 0, percentage: 0 }
    };
  }

  async analyzePM2Coverage() {
    console.log("🔍 Analyzing PM2 automation coverage...");
    
    // Check ecosystem files
    const ecosystemFiles = [
      "ecosystem.pm2.cjs",
      "ecosystem.redundancy.cjs",
      "ecosystem.comprehensive-redundancy.cjs",
      "ecosystem-redundancy.pm2.cjs"
    ];
    
    const processes = [];
    for (const file of ecosystemFiles) {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, "utf8");
          const processMatches = content.match(/name:\s*"([^"]+)"/g);
          if (processMatches) {
            processMatches.forEach(match => {
              const processName = match.match(/name:\s*"([^"]+)"/)[1];
              processes.push({
                name: processName,
                ecosystemFile: file,
                status: "configured"
              });
            });
          }
        } catch (error) {
          console.log(`⚠️  Error reading ${file}: ${error.message}`);
        }
      }
    }
    
    // Check if processes are actually running
    try {
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      if (pm2Status.status === 0) {
        const output = pm2Status.stdout;
        processes.forEach(process => {
          if (output.includes(process.name)) {
            process.status = "running";
          } else {
            process.status = "stopped";
          }
        });
      }
    } catch (error) {
      console.log("⚠️  PM2 not available or not running");
    }
    
    this.coverage.pm2.processes = processes;
    this.coverage.pm2.total = processes.length;
    this.coverage.pm2.covered = processes.filter(p => p.status === "running").length;
    
    console.log(`📊 PM2 Coverage: ${this.coverage.pm2.covered}/${this.coverage.pm2.total} processes running`);
  }

  async analyzeGitHubActionsCoverage() {
    console.log("🔍 Analyzing GitHub Actions automation coverage...");
    
    const workflowsDir = ".github/workflows";
    const workflows = [];
    
    if (fs.existsSync(workflowsDir)) {
      const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
      
      for (const file of workflowFiles) {
        const filePath = path.join(workflowsDir, file);
        try {
          const content = fs.readFileSync(filePath, "utf8");
          const workflowName = content.match(/name:\s*(.+)$/m)?.[1]?.trim() || file;
          
          // Check for automation triggers
          const hasSchedule = content.includes("schedule:");
          const hasWorkflowDispatch = content.includes("workflow_dispatch:");
          const hasPush = content.includes("push:");
          const hasPullRequest = content.includes("pull_request:");
          
          workflows.push({
            name: workflowName,
            file: file,
            triggers: {
              schedule: hasSchedule,
              manual: hasWorkflowDispatch,
              push: hasPush,
              pullRequest: hasPullRequest
            },
            status: "configured"
          });
        } catch (error) {
          console.log(`⚠️  Error reading ${filePath}: ${error.message}`);
        }
      }
    }
    
    this.coverage.githubActions.workflows = workflows;
    this.coverage.githubActions.total = workflows.length;
    this.coverage.githubActions.covered = workflows.length; // All configured workflows are considered covered
    
    console.log(`📊 GitHub Actions Coverage: ${this.coverage.githubActions.covered}/${this.coverage.githubActions.total} workflows configured`);
  }

  async analyzeNetlifyFunctionsCoverage() {
    console.log("🔍 Analyzing Netlify Functions automation coverage...");
    
    const functions = [];
    
    // Check manifest file
    const manifestPath = "netlify/functions/functions-manifest.json";
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        if (manifest.functions && Array.isArray(manifest.functions)) {
          manifest.functions.forEach(funcName => {
            const funcPath = path.join("netlify/functions", funcName);
            const funcPathJs = funcPath + ".js";
            const funcPathTs = funcPath + ".ts";
            
            let status = "missing";
            if (fs.existsSync(funcPath) || fs.existsSync(funcPathJs) || fs.existsSync(funcPathTs)) {
              status = "exists";
            }
            
            functions.push({
              name: funcName,
              status: status,
              path: funcPath
            });
          });
        }
      } catch (error) {
        console.log(`⚠️  Error reading manifest: ${error.message}`);
      }
    }
    
    // Check for additional functions not in manifest
    const functionsDir = "netlify/functions";
    if (fs.existsSync(functionsDir)) {
      const files = fs.readdirSync(functionsDir);
      files.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.ts')) {
          const funcName = path.basename(file, path.extname(file));
          if (!functions.find(f => f.name === funcName)) {
            functions.push({
              name: funcName,
              status: "exists",
              path: path.join(functionsDir, file)
            });
          }
        }
      });
    }
    
    this.coverage.netlifyFunctions.functions = functions;
    this.coverage.netlifyFunctions.total = functions.length;
    this.coverage.netlifyFunctions.covered = functions.filter(f => f.status === "exists").length;
    
    console.log(`📊 Netlify Functions Coverage: ${this.coverage.netlifyFunctions.covered}/${this.coverage.netlifyFunctions.total} functions exist`);
  }

  async analyzeNPMScriptsCoverage() {
    console.log("🔍 Analyzing NPM scripts automation coverage...");
    
    const packageJsonPath = "package.json";
    if (!fs.existsSync(packageJsonPath)) {
      console.log("⚠️  package.json not found");
      return;
    }
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      const scripts = packageJson.scripts || {};
      
      const scriptCategories = {
        redundancy: [],
        automation: [],
        build: [],
        pm2: [],
        other: []
      };
      
      Object.entries(scripts).forEach(([name, script]) => {
        const scriptStr = String(script);
        
        if (name.includes("redundancy") || scriptStr.includes("redundancy")) {
          scriptCategories.redundancy.push({ name, script: scriptStr, status: "available" });
        } else if (name.includes("automation") || scriptStr.includes("automation")) {
          scriptCategories.automation.push({ name, script: scriptStr, status: "available" });
        } else if (name.includes("build") || scriptStr.includes("build")) {
          scriptCategories.build.push({ name, script: scriptStr, status: "available" });
        } else if (name.includes("pm2") || scriptStr.includes("pm2")) {
          scriptCategories.pm2.push({ name, script: scriptStr, status: "available" });
        } else {
          scriptCategories.other.push({ name, script: scriptStr, status: "available" });
        }
      });
      
      this.coverage.npmScripts.scripts = Object.values(scriptCategories).flat();
      this.coverage.npmScripts.total = this.coverage.npmScripts.scripts.length;
      this.coverage.npmScripts.covered = this.coverage.npmScripts.scripts.length; // All scripts are considered covered
      
      console.log(`📊 NPM Scripts Coverage: ${this.coverage.npmScripts.covered}/${this.coverage.npmScripts.total} scripts available`);
      
      // Log script categories
      Object.entries(scriptCategories).forEach(([category, categoryScripts]) => {
        if (categoryScripts.length > 0) {
          console.log(`  📁 ${category}: ${categoryScripts.length} scripts`);
        }
      });
    } catch (error) {
      console.log(`⚠️  Error reading package.json: ${error.message}`);
    }
  }

  calculateOverallCoverage() {
    const total = this.coverage.pm2.total + this.coverage.githubActions.total + 
                  this.coverage.netlifyFunctions.total + this.coverage.npmScripts.total;
    const covered = this.coverage.pm2.covered + this.coverage.githubActions.covered + 
                    this.coverage.netlifyFunctions.covered + this.coverage.npmScripts.covered;
    
    this.coverage.overall.total = total;
    this.coverage.overall.covered = covered;
    this.coverage.overall.percentage = total > 0 ? Math.round((covered / total) * 100) : 0;
  }

  generateCoverageReport() {
    console.log("\n" + "=".repeat(80));
    console.log("🎯 ULTIMATE AUTOMATION COVERAGE REPORT");
    console.log("=".repeat(80));
    
    // PM2 Coverage
    console.log("\n🔧 PM2 AUTOMATION COVERAGE");
    console.log("-".repeat(40));
    console.log(`Total Processes: ${this.coverage.pm2.total}`);
    console.log(`Running: ${this.coverage.pm2.covered}`);
    console.log(`Coverage: ${this.coverage.pm2.total > 0 ? Math.round((this.coverage.pm2.covered / this.coverage.pm2.total) * 100) : 0}%`);
    
    if (this.coverage.pm2.processes.length > 0) {
      console.log("\nProcesses:");
      this.coverage.pm2.processes.forEach(process => {
        const statusIcon = process.status === "running" ? "🟢" : process.status === "stopped" ? "🟡" : "🔴";
        console.log(`  ${statusIcon} ${process.name} (${process.ecosystemFile}) - ${process.status}`);
      });
    }
    
    // GitHub Actions Coverage
    console.log("\n🚀 GITHUB ACTIONS COVERAGE");
    console.log("-".repeat(40));
    console.log(`Total Workflows: ${this.coverage.githubActions.total}`);
    console.log(`Configured: ${this.coverage.githubActions.covered}`);
    console.log(`Coverage: ${this.coverage.githubActions.total > 0 ? Math.round((this.coverage.githubActions.covered / this.coverage.githubActions.total) * 100) : 0}%`);
    
    if (this.coverage.githubActions.workflows.length > 0) {
      console.log("\nWorkflows:");
      this.coverage.githubActions.workflows.forEach(workflow => {
        const triggers = Object.entries(workflow.triggers)
          .filter(([_, enabled]) => enabled)
          .map(([trigger, _]) => trigger)
          .join(", ");
        console.log(`  📄 ${workflow.name} (${workflow.file}) - Triggers: ${triggers || "none"}`);
      });
    }
    
    // Netlify Functions Coverage
    console.log("\n☁️  NETLIFY FUNCTIONS COVERAGE");
    console.log("-".repeat(40));
    console.log(`Total Functions: ${this.coverage.netlifyFunctions.total}`);
    console.log(`Existing: ${this.coverage.netlifyFunctions.covered}`);
    console.log(`Coverage: ${this.coverage.netlifyFunctions.total > 0 ? Math.round((this.coverage.netlifyFunctions.covered / this.coverage.netlifyFunctions.total) * 100) : 0}%`);
    
    if (this.coverage.netlifyFunctions.functions.length > 0) {
      const missingFunctions = this.coverage.netlifyFunctions.functions.filter(f => f.status === "missing");
      if (missingFunctions.length > 0) {
        console.log("\nMissing Functions:");
        missingFunctions.forEach(func => {
          console.log(`  ❌ ${func.name}`);
        });
      }
    }
    
    // NPM Scripts Coverage
    console.log("\n📦 NPM SCRIPTS COVERAGE");
    console.log("-".repeat(40));
    console.log(`Total Scripts: ${this.coverage.npmScripts.total}`);
    console.log(`Available: ${this.coverage.npmScripts.covered}`);
    console.log(`Coverage: ${this.coverage.npmScripts.total > 0 ? Math.round((this.coverage.npmScripts.covered / this.coverage.npmScripts.total) * 100) : 0}%`);
    
    // Overall Coverage
    console.log("\n🎯 OVERALL AUTOMATION COVERAGE");
    console.log("-".repeat(40));
    console.log(`Total Components: ${this.coverage.overall.total}`);
    console.log(`Covered Components: ${this.coverage.overall.covered}`);
    console.log(`Overall Coverage: ${this.coverage.overall.percentage}%`);
    
    // Coverage Status
    let statusIcon, statusText;
    if (this.coverage.overall.percentage >= 90) {
      statusIcon = "🟢";
      statusText = "EXCELLENT";
    } else if (this.coverage.overall.percentage >= 75) {
      statusIcon = "🟡";
      statusText = "GOOD";
    } else if (this.coverage.overall.percentage >= 50) {
      statusIcon = "🟠";
      statusText = "FAIR";
    } else {
      statusIcon = "🔴";
      statusText = "POOR";
    }
    
    console.log(`\n${statusIcon} Coverage Status: ${statusText}`);
    
    // Recommendations
    console.log("\n💡 RECOMMENDATIONS");
    console.log("-".repeat(40));
    
    if (this.coverage.pm2.covered < this.coverage.pm2.total) {
      console.log("🔧 Start PM2 processes to improve PM2 coverage");
    }
    
    if (this.coverage.netlifyFunctions.covered < this.coverage.netlifyFunctions.total) {
      console.log("☁️  Create missing Netlify functions to improve functions coverage");
    }
    
    if (this.coverage.overall.percentage < 90) {
      console.log("📈 Consider adding more automation scripts to reach 90%+ coverage");
    }
    
    console.log("\n" + "=".repeat(80));
  }

  async runFullAnalysis() {
    console.log("🚀 Starting comprehensive automation coverage analysis...\n");
    
    await this.analyzePM2Coverage();
    await this.analyzeGitHubActionsCoverage();
    await this.analyzeNetlifyFunctionsCoverage();
    await this.analyzeNPMScriptsCoverage();
    
    this.calculateOverallCoverage();
    this.generateCoverageReport();
    
    return this.coverage;
  }
}

// CLI Interface
if (require.main === module) {
  const analyzer = new AutomationCoverageAnalyzer();
  analyzer.runFullAnalysis().catch(console.error);
}

module.exports = AutomationCoverageAnalyzer;