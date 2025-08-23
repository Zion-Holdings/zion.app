#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class AutomationCoverageAnalyzer {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.coverage = {
      pm2: { covered: [], uncovered: [], total: 0 },
      githubActions: { covered: [], uncovered: [], total: 0 },
      netlifyFunctions: { covered: [], uncovered: [], total: 0 },
      npmScripts: { covered: [], uncovered: [], total: 0 },
      overall: { coverage: 0, total: 0, covered: 0 }
    };
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
    
    const logFile = path.join(this.logDir, `automation-coverage-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async discoverPM2Automations() {
    this.log("Discovering PM2 automations...");
    
    const pm2Automations = [];
    
    // Check ecosystem files
    const ecosystemFiles = [
      "ecosystem.pm2.cjs",
      "ecosystem.redundancy.cjs",
      "ecosystem.comprehensive-redundancy.cjs"
    ];
    
    for (const file of ecosystemFiles) {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const appMatches = content.match(/name:\s*["']([^"']+)["']/g);
          if (appMatches) {
            appMatches.forEach(match => {
              const name = match.match(/name:\s*["']([^"']+)["']/)[1];
              pm2Automations.push({
                name,
                file,
                type: 'ecosystem'
              });
            });
          }
        } catch (error) {
          this.log(`Failed to parse ${file}: ${error.message}`, "WARN");
        }
      }
    }
    
    // Check running PM2 processes
    try {
      const pm2List = execSync("pm2 list", { encoding: 'utf8' });
      const processes = [];
      
      // Parse PM2 list output manually
      const lines = pm2List.split('\n');
      for (const line of lines) {
        if (line.includes('│') && !line.includes('App name')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4) {
            processes.push({
              name: parts[1],
              pm2_env: { status: parts[4] }
            });
          }
        }
      }
      
      processes.forEach(process => {
        if (!pm2Automations.find(p => p.name === process.name)) {
          pm2Automations.push({
            name: process.name,
            file: 'running',
            type: 'process'
          });
        }
      });
    } catch (error) {
      this.log("PM2 not running or accessible", "WARN");
    }
    
    this.coverage.pm2.total = pm2Automations.length;
    this.log(`Found ${pm2Automations.length} PM2 automations`);
    
    return pm2Automations;
  }

  async discoverGitHubActionsAutomations() {
    this.log("Discovering GitHub Actions automations...");
    
    const githubAutomations = [];
    const workflowsDir = ".github/workflows";
    
    if (fs.existsSync(workflowsDir)) {
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      for (const file of workflowFiles) {
        const filePath = path.join(workflowsDir, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const nameMatch = content.match(/^name:\s*(.+)$/m);
          const name = nameMatch ? nameMatch[1].trim() : file;
          
          githubAutomations.push({
            name,
            file,
            path: filePath,
            type: 'workflow'
          });
        } catch (error) {
          this.log(`Failed to read ${filePath}: ${error.message}`, "WARN");
        }
      }
    }
    
    this.coverage.githubActions.total = githubAutomations.length;
    this.log(`Found ${githubAutomations.length} GitHub Actions workflows`);
    
    return githubAutomations;
  }

  async discoverNetlifyFunctionsAutomations() {
    this.log("Discovering Netlify Functions automations...");
    
    const netlifyAutomations = [];
    const functionsDir = "netlify/functions";
    
    if (fs.existsSync(functionsDir)) {
      // Check functions manifest
      const manifestFile = path.join(functionsDir, "functions-manifest.json");
      if (fs.existsSync(manifestFile)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
          if (manifest.functions) {
            manifest.functions.forEach(func => {
              netlifyAutomations.push({
                name: func.name || func.function || 'unknown',
                file: manifestFile,
                type: 'manifest'
              });
            });
          }
        } catch (error) {
          this.log(`Failed to parse Netlify manifest: ${error.message}`, "WARN");
        }
      }
      
      // Check for individual function files
      const functionFiles = fs.readdirSync(functionsDir).filter(file => 
        file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')
      );
      
      functionFiles.forEach(file => {
        if (!netlifyAutomations.find(f => f.name === file.replace(/\.[^/.]+$/, ''))) {
          netlifyAutomations.push({
            name: file.replace(/\.[^/.]+$/, ''),
            file,
            type: 'function'
          });
        }
      });
    }
    
    this.coverage.netlifyFunctions.total = netlifyAutomations.length;
    this.log(`Found ${netlifyAutomations.length} Netlify Functions`);
    
    return netlifyAutomations;
  }

  async discoverNPMScriptsAutomations() {
    this.log("Discovering NPM scripts automations...");
    
    const npmAutomations = [];
    const packageJsonPath = "package.json";
    
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const scripts = packageJson.scripts || {};
        
        Object.keys(scripts).forEach(scriptName => {
          const script = scripts[scriptName];
          
          // Categorize scripts by type
          let type = 'general';
          if (script.includes('pm2') || script.includes('redundancy')) {
            type = 'pm2';
          } else if (script.includes('github') || script.includes('gh:')) {
            type = 'github';
          } else if (script.includes('netlify') || script.includes('functions')) {
            type = 'netlify';
          } else if (script.includes('build') || script.includes('dev') || script.includes('start')) {
            type = 'build';
          } else if (script.includes('automation') || script.includes('ai:') || script.includes('cursor:')) {
            type = 'automation';
          }
          
          npmAutomations.push({
            name: scriptName,
            script,
            type,
            category: this.categorizeNPMScript(scriptName, script)
          });
        });
      } catch (error) {
        this.log(`Failed to parse package.json: ${error.message}`, "ERROR");
      }
    }
    
    this.coverage.npmScripts.total = npmAutomations.length;
    this.log(`Found ${npmAutomations.length} NPM scripts`);
    
    return npmAutomations;
  }

  categorizeNPMScript(name, script) {
    if (name.includes('pm2') || script.includes('pm2')) return 'pm2';
    if (name.includes('redundancy') || script.includes('redundancy')) return 'redundancy';
    if (name.includes('github') || script.includes('gh:')) return 'github';
    if (name.includes('netlify') || script.includes('netlify')) return 'netlify';
    if (name.includes('build') || script.includes('build')) return 'build';
    if (name.includes('automation') || script.includes('automation')) return 'automation';
    if (name.includes('ai:') || script.includes('ai:')) return 'ai';
    if (name.includes('cursor:') || script.includes('cursor:')) return 'cursor';
    if (name.includes('design:') || script.includes('design:')) return 'design';
    if (name.includes('syntax:') || script.includes('syntax:')) return 'syntax';
    if (name.includes('linting:') || script.includes('linting:')) return 'linting';
    if (name.includes('healing:') || script.includes('healing:')) return 'healing';
    if (name.includes('linkedin:') || script.includes('linkedin:')) return 'linkedin';
    if (name.includes('marketing:') || script.includes('marketing:')) return 'marketing';
    return 'other';
  }

  analyzeRedundancyCoverage() {
    this.log("Analyzing redundancy coverage...");
    
    // PM2 Redundancy Coverage
    const pm2RedundancyScripts = [
      "automation/ultimate-redundancy-system.cjs",
      "automation/comprehensive-pm2-redundancy.cjs",
      "automation/enhanced-pm2-redundancy.cjs",
      "automation/pm2-redundancy-monitor.cjs"
    ];
    
    this.coverage.pm2.covered = pm2RedundancyScripts.filter(script => fs.existsSync(script));
    this.coverage.pm2.uncovered = pm2RedundancyScripts.filter(script => !fs.existsSync(script));
    
    // GitHub Actions Redundancy Coverage
    const githubRedundancyScripts = [
      "automation/comprehensive-github-actions-redundancy.cjs",
      "automation/enhanced-github-actions-redundancy.cjs",
      "automation/github-actions-redundancy.cjs"
    ];
    
    this.coverage.githubActions.covered = githubRedundancyScripts.filter(script => fs.existsSync(script));
    this.coverage.githubActions.uncovered = githubRedundancyScripts.filter(script => !fs.existsSync(script));
    
    // Netlify Functions Redundancy Coverage
    const netlifyRedundancyScripts = [
      "automation/comprehensive-netlify-functions-redundancy.cjs",
      "automation/enhanced-netlify-functions-redundancy.cjs",
      "automation/netlify-functions-redundancy.cjs"
    ];
    
    this.coverage.netlifyFunctions.covered = netlifyRedundancyScripts.filter(script => fs.existsSync(script));
    this.coverage.netlifyFunctions.uncovered = netlifyRedundancyScripts.filter(script => !fs.existsSync(script));
    
    // NPM Scripts Redundancy Coverage
    const npmRedundancyScripts = [
      "automation/ultimate-redundancy-system.cjs",
      "automation/comprehensive-redundancy-orchestrator.cjs",
      "automation/master-redundancy-orchestrator.cjs"
    ];
    
    this.coverage.npmScripts.covered = npmRedundancyScripts.filter(script => fs.existsSync(script));
    this.coverage.npmScripts.uncovered = npmRedundancyScripts.filter(script => !fs.existsSync(script));
    
    // Calculate overall coverage
    const totalComponents = this.coverage.pm2.total + this.coverage.githubActions.total + 
                           this.coverage.netlifyFunctions.total + this.coverage.npmScripts.total;
    const totalCovered = this.coverage.pm2.covered.length + this.coverage.githubActions.covered.length + 
                         this.coverage.netlifyFunctions.covered.length + this.coverage.npmScripts.covered.length;
    
    this.coverage.overall = {
      total: totalComponents,
      covered: totalCovered,
      coverage: totalComponents > 0 ? (totalCovered / totalComponents) * 100 : 0
    };
  }

  generateCoverageReport() {
    this.log("Generating coverage report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        overall: this.coverage.overall,
        pm2: {
          total: this.coverage.pm2.total,
          covered: this.coverage.pm2.covered.length,
          uncovered: this.coverage.pm2.uncovered.length,
          coverage: this.coverage.pm2.total > 0 ? (this.coverage.pm2.covered.length / this.coverage.pm2.total) * 100 : 0
        },
        githubActions: {
          total: this.coverage.githubActions.total,
          covered: this.coverage.githubActions.covered.length,
          uncovered: this.coverage.githubActions.uncovered.length,
          coverage: this.coverage.githubActions.total > 0 ? (this.coverage.githubActions.covered.length / this.coverage.githubActions.total) * 100 : 0
        },
        netlifyFunctions: {
          total: this.coverage.netlifyFunctions.total,
          covered: this.coverage.netlifyFunctions.covered.length,
          uncovered: this.coverage.netlifyFunctions.uncovered.length,
          coverage: this.coverage.netlifyFunctions.total > 0 ? (this.coverage.netlifyFunctions.covered.length / this.coverage.netlifyFunctions.total) * 100 : 0
        },
        npmScripts: {
          total: this.coverage.npmScripts.total,
          covered: this.coverage.npmScripts.covered.length,
          uncovered: this.coverage.npmScripts.uncovered.length,
          coverage: this.coverage.npmScripts.total > 0 ? (this.coverage.netlifyFunctions.covered.length / this.coverage.npmScripts.total) * 100 : 0
        }
      },
      details: {
        pm2: {
          covered: this.coverage.pm2.covered,
          uncovered: this.coverage.pm2.uncovered
        },
        githubActions: {
          covered: this.coverage.githubActions.covered,
          covered: this.coverage.githubActions.covered,
          uncovered: this.coverage.githubActions.uncovered
        },
        netlifyFunctions: {
          covered: this.coverage.netlifyFunctions.covered,
          uncovered: this.coverage.netlifyFunctions.uncovered
        },
        npmScripts: {
          covered: this.coverage.npmScripts.covered,
          uncovered: this.coverage.npmScripts.uncovered
        }
      },
      recommendations: this.generateRecommendations()
    };
    
    // Save report to file
    const reportFile = path.join(this.logDir, `automation-coverage-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Coverage report saved to: ${reportFile}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.coverage.pm2.uncovered.length > 0) {
      recommendations.push({
        type: "pm2",
        priority: "high",
        message: `Create redundancy scripts for ${this.coverage.pm2.uncovered.length} uncovered PM2 automations`,
        actions: this.coverage.pm2.uncovered.map(script => `Create ${script}`)
      });
    }
    
    if (this.coverage.githubActions.uncovered.length > 0) {
      recommendations.push({
        type: "github",
        priority: "high",
        message: `Create redundancy scripts for ${this.coverage.githubActions.uncovered.length} uncovered GitHub Actions`,
        actions: this.coverage.githubActions.uncovered.map(script => `Create ${script}`)
      });
    }
    
    if (this.coverage.netlifyFunctions.uncovered.length > 0) {
      recommendations.push({
        type: "netlify",
        priority: "medium",
        message: `Create redundancy scripts for ${this.coverage.netlifyFunctions.uncovered.length} uncovered Netlify Functions`,
        actions: this.coverage.netlifyFunctions.uncovered.map(script => `Create ${script}`)
      });
    }
    
    if (this.coverage.npmScripts.uncovered.length > 0) {
      recommendations.push({
        type: "npm",
        priority: "medium",
        message: `Create redundancy scripts for ${this.coverage.npmScripts.uncovered.length} uncovered NPM scripts`,
        actions: this.coverage.npmScripts.uncovered.map(script => `Create ${script}`)
      });
    }
    
    if (this.coverage.overall.coverage < 80) {
      recommendations.push({
        type: "overall",
        priority: "critical",
        message: `Overall automation coverage is ${this.coverage.overall.coverage.toFixed(1)}%. Target: 80%+`,
        actions: ["Review uncovered automations", "Implement missing redundancy scripts", "Test redundancy coverage"]
      });
    }
    
    return recommendations;
  }

  async runAnalysis() {
    this.log("Starting automation coverage analysis...");
    
    try {
      // Discover all automations
      await this.discoverPM2Automations();
      await this.discoverGitHubActionsAutomations();
      await this.discoverNetlifyFunctionsAutomations();
      await this.discoverNPMScriptsAutomations();
      
      // Analyze redundancy coverage
      this.analyzeRedundancyCoverage();
      
      // Generate report
      const report = this.generateCoverageReport();
      
      // Display summary
      console.log("\n" + "=".repeat(60));
      console.log("AUTOMATION COVERAGE ANALYSIS SUMMARY");
      console.log("=".repeat(60));
      console.log(`Overall Coverage: ${report.summary.overall.coverage.toFixed(1)}%`);
      console.log(`Total Components: ${report.summary.overall.total}`);
      console.log(`Covered: ${report.summary.overall.covered}`);
      console.log("");
      console.log("Component Coverage:");
      console.log(`  PM2: ${report.summary.pm2.coverage.toFixed(1)}% (${report.summary.pm2.covered}/${report.summary.pm2.total})`);
      console.log(`  GitHub Actions: ${report.summary.githubActions.coverage.toFixed(1)}% (${report.summary.githubActions.covered}/${report.summary.githubActions.total})`);
      console.log(`  Netlify Functions: ${report.summary.netlifyFunctions.coverage.toFixed(1)}% (${report.summary.netlifyFunctions.covered}/${report.summary.netlifyFunctions.total})`);
      console.log(`  NPM Scripts: ${report.summary.npmScripts.coverage.toFixed(1)}% (${report.summary.npmScripts.covered}/${report.summary.npmScripts.total})`);
      console.log("");
      
      if (report.recommendations.length > 0) {
        console.log("Recommendations:");
        report.recommendations.forEach((rec, index) => {
          console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
        });
      }
      
      console.log("=".repeat(60));
      
      return report;
    } catch (error) {
      this.log(`Analysis failed: ${error.message}`, "ERROR");
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const analyzer = new AutomationCoverageAnalyzer();
  
  analyzer.runAnalysis().catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
    process.exit(1);
  });
}

module.exports = AutomationCoverageAnalyzer;
