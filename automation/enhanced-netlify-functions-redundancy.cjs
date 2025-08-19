#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      checkInterval: 120000, // 2 minutes
      maxFailures: 3,
      retryDelay: 30000,
      healthCheckTimeout: 15000,
      backupInterval: 600000, // 10 minutes
      maxLogSize: 10 * 1024 * 1024, // 10MB
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        backupFunctions: true
      },
      netlifyConfig: {
        siteId: process.env.NETLIFY_SITE_ID,
        accessToken: process.env.NETLIFY_ACCESS_TOKEN,
        deployTimeout: 300000 // 5 minutes
      },
      monitoring: false,
      checkInterval: null
    };
    
    this.functionStates = new Map();
    this.failureCounts = new Map();
    this.lastBackup = Date.now();
    this.functionsManifest = null;
  }

  ensureLogDir() {
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
      this.rotateLogs();
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  rotateLogs() {
    try {
      const stats = fs.statSync(this.logFile);
      if (stats.size > this.config.maxLogSize) {
        const backupFile = `${this.logFile}.${Date.now()}`;
        fs.renameSync(this.logFile, backupFile);
        this.log("Log file rotated", "INFO");
      }
    } catch (error) {
      // Ignore rotation errors
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || this.config.healthCheckTimeout,
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

  async checkNetlifyDirectory() {
    try {
      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return { exists: false, functions: false, config: false };
      }

      const functionsDir = path.join(netlifyDir, "functions");
      const configFile = path.join(netlifyDir, "netlify.toml");
      
      return {
        exists: true,
        functions: fs.existsSync(functionsDir),
        config: fs.existsSync(configFile)
      };
    } catch (error) {
      this.log(`❌ Error checking Netlify directory: ${error.message}`, "ERROR");
      return { exists: false, functions: false, config: false };
    }
  }

  async loadFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("Functions manifest not found, attempting to generate", "WARN");
        await this.generateFunctionsManifest();
        return;
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      this.functionsManifest = JSON.parse(manifestContent);
      
      this.log(`📋 Loaded functions manifest with ${this.functionsManifest.functions.length} functions`);
      return this.functionsManifest;
    } catch (error) {
      this.log(`Failed to load functions manifest: ${error.message}`, "ERROR");
      return null;
    }
  }

  async generateFunctionsManifest() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("No functions directory found", "WARN");
        return false;
      }

      const functionFiles = fs.readdirSync(functionsDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        .map(file => file.replace(/\.(js|ts)$/, ''));

      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: functionFiles
      };

      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      
      this.functionsManifest = manifest;
      this.log(`Generated functions manifest with ${functionFiles.length} functions`, "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to generate functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async backupFunctions() {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/netlify-functions");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("No Netlify directory to backup", "WARN");
        return false;
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `functions-${timestamp}`);
      fs.mkdirSync(backupPath, { recursive: true });

      // Backup functions directory
      const functionsDir = path.join(netlifyDir, "functions");
      if (fs.existsSync(functionsDir)) {
        await this.runCommand("cp", ["-r", functionsDir, backupPath]);
      }

      // Backup netlify.toml
      const netlifyToml = path.join(netlifyDir, "netlify.toml");
      if (fs.existsSync(netlifyToml)) {
        fs.copyFileSync(netlifyToml, path.join(backupPath, "netlify.toml"));
      }

      // Backup .netlify directory
      const netlifyConfigDir = path.join(this.workspace, ".netlify");
      if (fs.existsSync(netlifyConfigDir)) {
        await this.runCommand("cp", ["-r", netlifyConfigDir, backupPath]);
      }

      this.log(`Netlify functions backed up to ${backupPath}`, "INFO");
      this.lastBackup = Date.now();
      return true;
    } catch (error) {
      this.log(`Failed to backup Netlify functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreFunctionsFromBackup(backupTimestamp = null) {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/netlify-functions");
      if (!fs.existsSync(backupDir)) {
        this.log("No backup directory found", "WARN");
        return false;
      }

      let backupPath;
      if (backupTimestamp) {
        backupPath = path.join(backupDir, `functions-${backupTimestamp}`);
      } else {
        // Find the latest backup
        const backups = fs.readdirSync(backupDir)
          .filter(dir => dir.startsWith('functions-'))
          .sort()
          .reverse();
        
        if (backups.length === 0) {
          this.log("No function backups found", "WARN");
          return false;
        }
        
        backupPath = path.join(backupDir, backups[0]);
      }

      if (!fs.existsSync(backupPath)) {
        this.log(`Backup path not found: ${backupPath}`, "ERROR");
        return false;
      }

      const netlifyDir = path.join(this.workspace, "netlify");
      
      // Restore functions directory
      const functionsBackup = path.join(backupPath, "functions");
      if (fs.existsSync(functionsBackup)) {
        const functionsDir = path.join(netlifyDir, "functions");
        if (fs.existsSync(functionsDir)) {
          fs.rmSync(functionsDir, { recursive: true, force: true });
        }
        await this.runCommand("cp", ["-r", functionsBackup, netlifyDir]);
      }

      // Restore netlify.toml
      const netlifyTomlBackup = path.join(backupPath, "netlify.toml");
      if (fs.existsSync(netlifyTomlBackup)) {
        const netlifyToml = path.join(netlifyDir, "netlify.toml");
        fs.copyFileSync(netlifyTomlBackup, netlifyToml);
      }

      // Restore .netlify directory
      const netlifyConfigBackup = path.join(backupPath, ".netlify");
      if (fs.existsSync(netlifyConfigBackup)) {
        const netlifyConfigDir = path.join(this.workspace, ".netlify");
        if (fs.existsSync(netlifyConfigDir)) {
          fs.rmSync(netlifyConfigDir, { recursive: true, force: true });
        }
        await this.runCommand("cp", ["-r", netlifyConfigBackup, this.workspace]);
      }

      this.log("Netlify functions restored from backup", "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to restore functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateFunction(functionName) {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      const functionPath = path.join(functionsDir, `${functionName}.js`);
      const functionPathTs = path.join(functionsDir, `${functionName}.ts`);

      let functionFile = null;
      if (fs.existsSync(functionPath)) {
        functionFile = functionPath;
      } else if (fs.existsSync(functionPathTs)) {
        functionFile = functionPathTs;
      } else {
        return { valid: false, error: "Function file not found" };
      }

      const content = fs.readFileSync(functionFile, 'utf8');
      
      // Basic validation checks
      if (!content.includes('exports.handler') && !content.includes('export const handler')) {
        return { valid: false, error: "Missing handler export" };
      }

      if (content.includes('exports.handler') && !content.includes('function')) {
        return { valid: false, error: "Invalid handler function" };
      }

      // Check for common syntax issues
      if (content.includes('{{') && !content.includes('}}')) {
        return { valid: false, error: "Unclosed template expression" };
      }

      return { valid: true, error: null };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      // Validate function syntax
      const validation = await this.validateFunction(functionName);
      if (!validation.valid) {
        return { healthy: false, reason: `Validation failed: ${validation.error}` };
      }

      // Check if function file exists and is readable
      const functionsDir = path.join(this.workspace, "netlify/functions");
      const functionPath = path.join(functionsDir, `${functionName}.js`);
      const functionPathTs = path.join(functionsDir, `${functionName}.ts`);

      if (!fs.existsSync(functionPath) && !fs.existsSync(functionPathTs)) {
        return { healthy: false, reason: "Function file not found" };
      }

      // Check file size (shouldn't be empty)
      const functionFile = fs.existsSync(functionPath) ? functionPath : functionPathTs;
      const stats = fs.statSync(functionFile);
      if (stats.size === 0) {
        return { healthy: false, reason: "Function file is empty" };
      }

      return { healthy: true, reason: "OK" };
    } catch (error) {
      return { healthy: false, reason: `Health check failed: ${error.message}` };
    }
  }

  async deployFunctions() {
    try {
      if (!this.config.netlifyConfig.siteId || !this.config.netlifyConfig.accessToken) {
        this.log("Netlify credentials not configured, attempting local build", "WARN");
        return await this.buildFunctionsLocally();
      }

      this.log("Deploying functions to Netlify", "INFO");
      
      // Use Netlify CLI if available
      const netlifyResult = await this.runCommand("netlify", ["deploy", "--prod", "--functions"]);
      if (netlifyResult.status === 0) {
        this.log("Successfully deployed functions to Netlify", "INFO");
        return true;
      }

      // Fallback: use git push if connected to Netlify
      this.log("Netlify CLI failed, attempting git deployment", "WARN");
      return await this.deployViaGit();
    } catch (error) {
      this.log(`Failed to deploy functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async buildFunctionsLocally() {
    try {
      this.log("Building functions locally", "INFO");
      
      // Check if there's a build script
      const packageJson = path.join(this.workspace, "package.json");
      if (fs.existsSync(packageJson)) {
        const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
        if (pkg.scripts && pkg.scripts.build) {
          const buildResult = await this.runCommand("npm", ["run", "build"]);
          if (buildResult.status === 0) {
            this.log("Functions built successfully", "INFO");
            return true;
          }
        }
      }

      // Try to build functions directory
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (fs.existsSync(functionsDir)) {
        // Check if functions need compilation
        const functionFiles = fs.readdirSync(functionsDir).filter(file => file.endsWith('.ts'));
        if (functionFiles.length > 0) {
          // Try to compile TypeScript functions
          const tscResult = await this.runCommand("npx", ["tsc", "--project", "tsconfig.json"]);
          if (tscResult.status === 0) {
            this.log("TypeScript functions compiled successfully", "INFO");
            return true;
          }
        }
      }

      this.log("No build process found, functions may not be ready", "WARN");
      return false;
    } catch (error) {
      this.log(`Failed to build functions locally: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deployViaGit() {
    try {
      // Check git status
      const gitStatus = await this.runCommand("git", ["status", "--porcelain"]);
      if (gitStatus.status !== 0) {
        this.log("Git status check failed", "ERROR");
        return false;
      }

      // Add and commit changes
      await this.runCommand("git", ["add", "netlify/"]);
      await this.runCommand("git", ["commit", "-m", "chore: update Netlify functions"]);
      
      // Push to trigger Netlify deployment
      const pushResult = await this.runCommand("git", ["push", "origin", "main"]);
      if (pushResult.status === 0) {
        this.log("Functions deployed via git push", "INFO");
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Failed to deploy via git: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverFunction(functionName) {
    try {
      const failureCount = this.failureCounts.get(functionName) || 0;
      
      if (failureCount >= this.config.maxFailures) {
        this.log(`Function ${functionName} exceeded failure limit, attempting recovery`, "WARN");
        
        // Try to restore from backup
        if (await this.restoreFunctionsFromBackup()) {
          this.failureCounts.set(functionName, 0);
          this.log(`Successfully recovered function ${functionName} from backup`, "INFO");
          return true;
        }
        
        // If backup restoration fails, try to regenerate manifest
        if (await this.generateFunctionsManifest()) {
          this.failureCounts.set(functionName, 0);
          this.log(`Successfully regenerated functions manifest`, "INFO");
          return true;
        }
        
        this.log(`Failed to recover function ${functionName}`, "ERROR");
        return false;
      } else {
        // Try to redeploy functions
        if (await this.deployFunctions()) {
          this.failureCounts.set(functionName, 0);
          return true;
        } else {
          this.failureCounts.set(functionName, failureCount + 1);
          return false;
        }
      }
    } catch (error) {
      this.log(`Error during function recovery: ${error.message}`, "ERROR");
      return false;
    }
  }

  async monitorAllFunctions() {
    this.log("Starting Netlify functions monitoring...", "INFO");
    
    if (!this.functionsManifest) {
      await this.loadFunctionsManifest();
    }
    
    if (!this.functionsManifest || !this.functionsManifest.functions) {
      this.log("No functions manifest available", "ERROR");
      return;
    }
    
    for (const functionName of this.functionsManifest.functions) {
      try {
        const health = await this.checkFunctionHealth(functionName);
        
        if (!health.healthy) {
          this.log(`Function ${functionName} unhealthy: ${health.reason}`, "WARN");
          
          if (await this.recoverFunction(functionName)) {
            this.log(`Successfully recovered function ${functionName}`, "INFO");
          } else {
            this.log(`Failed to recover function ${functionName}`, "ERROR");
          }
        } else {
          this.log(`Function ${functionName} healthy`, "INFO");
          // Reset failure count for healthy functions
          this.failureCounts.set(functionName, 0);
        }
        
        // Store function state
        this.functionStates.set(functionName, health);
        
      } catch (error) {
        this.log(`Error monitoring function ${functionName}: ${error.message}`, "ERROR");
      }
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        netlifyDirectory: await this.checkNetlifyDirectory(),
        functionsManifest: this.functionsManifest,
        functions: {},
        summary: {
          total: this.functionsManifest ? this.functionsManifest.functions.length : 0,
          healthy: 0,
          unhealthy: 0,
          recovering: 0
        }
      };

      if (this.functionsManifest && this.functionsManifest.functions) {
        for (const functionName of this.functionsManifest.functions) {
          const state = this.functionStates.get(functionName);
          const health = await this.checkFunctionHealth(functionName);
          
          report.functions[functionName] = {
            health: health.healthy,
            reason: health.reason,
            failureCount: this.failureCounts.get(functionName) || 0,
            lastCheck: new Date().toISOString()
          };

          if (health.healthy) {
            report.summary.healthy++;
          } else {
            report.summary.unhealthy++;
          }
        }
      }

      // Save report
      const reportPath = path.join(this.logDir, "netlify-functions-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Health report generated: ${reportPath}`, "INFO");
      return report;
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced Netlify functions redundancy monitoring", "INFO");

    // Load functions manifest
    await this.loadFunctionsManifest();

    // Initial backup
    if (this.config.functions.backupFunctions) {
      await this.backupFunctions();
    }

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.monitorAllFunctions();
        
        // Backup functions periodically
        if (this.config.functions.backupFunctions && Date.now() - this.lastBackup > this.config.backupInterval) {
          await this.backupFunctions();
        }
        
        // Generate health report every 10 minutes
        if (Date.now() % 600000 < this.config.checkInterval) {
          await this.generateHealthReport();
        }
        
      } catch (error) {
        this.log(`Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("Enhanced Netlify functions redundancy monitoring started", "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced Netlify functions redundancy monitoring stopped", "INFO");
  }

  async emergencyRecovery() {
    this.log("Starting emergency Netlify functions recovery", "WARN");
    
    try {
      // Backup current state
      await this.backupFunctions();
      
      // Restore from latest backup
      if (await this.restoreFunctionsFromBackup()) {
        this.log("Emergency recovery completed", "INFO");
        return true;
      } else {
        this.log("Emergency recovery failed", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new EnhancedNetlifyFunctionsRedundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "stop":
      redundancy.stopMonitoring();
      break;
    case "status":
      redundancy.monitorAllFunctions();
      break;
    case "report":
      redundancy.generateHealthReport();
      break;
    case "recovery":
      redundancy.emergencyRecovery();
      break;
    case "backup":
      redundancy.backupFunctions();
      break;
    case "restore":
      redundancy.restoreFunctionsFromBackup();
      break;
    case "deploy":
      redundancy.deployFunctions();
      break;
    case "manifest":
      redundancy.generateFunctionsManifest();
      break;
    default:
      console.log("Usage: node enhanced-netlify-functions-redundancy.cjs [start|stop|status|report|recovery|backup|restore|deploy|manifest]");
      process.exit(1);
  }
}

module.exports = EnhancedNetlifyFunctionsRedundancy;