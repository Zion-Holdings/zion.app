#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.functionIssues = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.workspace, "automation/redundancy-config.json");
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        return config.netlify || {};
      } catch (error) {
        this.log(`Error loading Netlify config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 120000,
      maxFailures: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        validation: true
      },
      manifestFile: "netlify/functions/functions-manifest.json",
      backupManifest: true,
      autoFix: true
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
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
        timeout: options.timeout || this.config.healthCheckTimeout || 15000,
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
        this.log("❌ Netlify directory not found");
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
      this.log(`❌ Error checking Netlify directory: ${error.message}`);
      return { exists: false, functions: false, config: false };
    }
  }

  async checkFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found");
        return { exists: false, valid: false, functions: [], error: "Manifest file missing" };
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("⚠️ Invalid manifest structure: missing or invalid functions array");
        return { exists: true, valid: false, functions: [], error: "Invalid manifest structure" };
      }

      // Check if manifest is recent (within last hour)
      if (manifest.generatedAt) {
        const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
        if (manifestAge > 3600000) { // 1 hour
          this.log("⚠️ Functions manifest is stale (older than 1 hour)");
        }
      }

      this.log(`📋 Found ${manifest.functions.length} functions in manifest`);
      
      return {
        exists: true,
        valid: true,
        functions: manifest.functions,
        generatedAt: manifest.generatedAt,
        manifest: manifest
      };
    } catch (error) {
      this.log(`❌ Error checking functions manifest: ${error.message}`);
      return { exists: false, valid: false, functions: [], error: error.message };
    }
  }

  async validateFunctionFiles(functions) {
    const validationResults = {
      total: functions.length,
      valid: 0,
      invalid: 0,
      missing: 0,
      details: {}
    };

    for (const functionName of functions) {
      const functionPath = path.join(this.workspace, "netlify/functions", functionName);
      const validation = await this.validateFunction(functionPath, functionName);
      
      validationResults.details[functionName] = validation;
      
      if (validation.valid) {
        validationResults.valid++;
      } else if (validation.exists) {
        validationResults.invalid++;
      } else {
        validationResults.missing++;
      }
    }

    return validationResults;
  }

  async validateFunction(functionPath, functionName) {
    try {
      if (!fs.existsSync(functionPath)) {
        return {
          exists: false,
          valid: false,
          issues: ["Function directory not found"],
          type: "missing"
        };
      }

      const stats = fs.statSync(functionPath);
      const issues = [];
      
      if (stats.isDirectory()) {
        // Check for index.js or index.ts
        const indexFiles = ["index.js", "index.ts", "index.mjs"];
        const hasIndex = indexFiles.some(file => 
          fs.existsSync(path.join(functionPath, file))
        );
        
        if (!hasIndex) {
          issues.push("Missing index file (index.js, index.ts, or index.mjs)");
        }
        
        // Check for package.json
        const packagePath = path.join(functionPath, "package.json");
        if (fs.existsSync(packagePath)) {
          try {
            const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
            if (!packageJson.main && !packageJson.exports) {
              issues.push("package.json missing main or exports field");
            }
          } catch (parseError) {
            issues.push("Invalid package.json");
          }
        }
        
        return {
          exists: true,
          valid: issues.length === 0,
          issues: issues,
          type: "directory",
          hasIndex: hasIndex
        };
      } else if (stats.isFile()) {
        // Single file function
        const ext = path.extname(functionPath);
        if (!['.js', '.ts', '.mjs'].includes(ext)) {
          issues.push(`Invalid file extension: ${ext}`);
        }
        
        return {
          exists: true,
          valid: issues.length === 0,
          issues: issues,
          type: "file",
          extension: ext
        };
      }
      
      return {
        exists: true,
        valid: false,
        issues: ["Unknown function type"],
        type: "unknown"
      };
      
    } catch (error) {
      return {
        exists: false,
        valid: false,
        issues: [`Error validating function: ${error.message}`],
        type: "error"
      };
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      const scriptPath = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand("node", [scriptPath]);
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully");
          return true;
        } else {
          this.log(`⚠️ Failed to regenerate manifest: ${result.stderr}`);
          return false;
        }
      } else {
        this.log("⚠️ Manifest generator script not found, creating basic manifest");
        return await this.createBasicManifest();
      }
    } catch (error) {
      this.log(`❌ Failed to regenerate functions manifest: ${error.message}`);
      return false;
    }
  }

  async createBasicManifest() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found, cannot create manifest");
        return false;
      }

      const functionDirs = fs.readdirSync(functionsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: functionDirs,
        note: "Auto-generated basic manifest"
      };

      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      const manifestDir = path.dirname(manifestPath);
      
      if (!fs.existsSync(manifestDir)) {
        fs.mkdirSync(manifestDir, { recursive: true });
      }

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      this.log(`✅ Created basic manifest with ${functionDirs.length} functions`);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to create basic manifest: ${error.message}`);
      return false;
    }
  }

  async backupManifest() {
    if (!this.config.backupManifest) {
      return null;
    }

    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      if (!fs.existsSync(manifestPath)) {
        return null;
      }

      const backupDir = path.join(this.workspace, "netlify/functions/backup");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `functions-manifest.backup.${timestamp}.json`);
      
      fs.copyFileSync(manifestPath, backupPath);
      this.log(`✅ Backed up manifest to ${backupPath}`);
      
      return backupPath;
    } catch (error) {
      this.log(`❌ Failed to backup manifest: ${error.message}`);
      return null;
    }
  }

  async checkNetlifyDeployment() {
    try {
      this.log("🔍 Checking Netlify deployment status...");
      
      // Check if netlify CLI is available
      const netlifyResult = await this.runCommand("netlify", ["status"]);
      if (netlifyResult.status === 0) {
        this.log("✅ Netlify CLI available");
        
        // Get deployment status
        const deployResult = await this.runCommand("netlify", ["api", "listSiteDeploys"]);
        if (deployResult.status === 0) {
          try {
            const deployments = JSON.parse(deployResult.stdout);
            if (deployments.length > 0) {
              const latestDeploy = deployments[0];
              this.log(`📊 Latest deployment: ${latestDeploy.status} (${latestDeploy.created_at})`);
              return {
                available: true,
                latestDeploy: latestDeploy,
                status: latestDeploy.status
              };
            }
          } catch (parseError) {
            this.log(`⚠️ Failed to parse deployment data: ${parseError.message}`);
          }
        }
      } else {
        this.log("⚠️ Netlify CLI not available");
      }
      
      return { available: false, status: "unknown" };
    } catch (error) {
      this.log(`❌ Error checking Netlify deployment: ${error.message}`);
      return { available: false, status: "error", error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("🚀 Starting Netlify functions health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      netlifyDirectory: false,
      functionsManifest: false,
      functionValidation: null,
      deployment: null,
      overall: false
    };

    // Check Netlify directory structure
    const netlifyStatus = await this.checkNetlifyDirectory();
    results.netlifyDirectory = netlifyStatus.exists;
    
    if (!netlifyStatus.exists) {
      this.log("❌ Netlify directory not found");
      results.overall = false;
      return results;
    }

    // Check functions manifest
    const manifestStatus = await this.checkFunctionsManifest();
    results.functionsManifest = manifestStatus.valid;
    
    if (!manifestStatus.valid) {
      this.log("⚠️ Functions manifest has issues, attempting to regenerate...");
      if (manifestStatus.exists) {
        await this.backupManifest();
      }
      await this.regenerateFunctionsManifest();
      
      // Re-check manifest
      const recheckStatus = await this.checkFunctionsManifest();
      results.functionsManifest = recheckStatus.valid;
    }

    // Validate function files
    if (manifestStatus.valid && manifestStatus.functions.length > 0) {
      results.functionValidation = await this.validateFunctionFiles(manifestStatus.functions);
    }

    // Check deployment status
    if (this.config.functions.deploymentCheck) {
      results.deployment = await this.checkNetlifyDeployment();
    }

    // Overall health
    results.overall = results.netlifyDirectory && results.functionsManifest;
    
    this.log(`📊 Health Check Results: Directory: ${results.netlifyDirectory ? '✅' : '❌'}, Manifest: ${results.functionsManifest ? '✅' : '❌'}`);
    
    // Save health check results
    this.saveHealthResults(results);
    
    return results;
  }

  async saveHealthResults(results) {
    try {
      const healthFile = path.join(this.logDir, `netlify-functions-health-${new Date().toISOString().split('T')[0]}.json`);
      const existingData = fs.existsSync(healthFile) ? JSON.parse(fs.readFileSync(healthFile, "utf8")) : [];
      existingData.push(results);
      
      // Keep only last 100 results
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      fs.writeFileSync(healthFile, JSON.stringify(existingData, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save health results: ${error.message}`);
    }
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency Netlify functions recovery...");
    
    try {
      // Backup current manifest if it exists
      await this.backupManifest();
      
      // Regenerate manifest
      const manifestRegenerated = await this.regenerateFunctionsManifest();
      
      // Validate functions
      const manifestStatus = await this.checkFunctionsManifest();
      let validationResults = null;
      
      if (manifestStatus.valid && manifestStatus.functions.length > 0) {
        validationResults = await this.validateFunctionFiles(manifestStatus.functions);
      }
      
      // Check deployment
      const deploymentStatus = await this.checkNetlifyDeployment();
      
      this.log("✅ Emergency recovery completed");
      
      return {
        manifestRegenerated,
        manifestStatus,
        validationResults,
        deploymentStatus
      };
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`);
      return null;
    }
  }

  async generateFunctionsReport() {
    try {
      this.log("📊 Generating Netlify functions report...");
      
      const report = {
        timestamp: new Date().toISOString(),
        netlifyStatus: await this.checkNetlifyDirectory(),
        manifestStatus: await this.checkFunctionsManifest(),
        deploymentStatus: await this.checkNetlifyDeployment(),
        recommendations: []
      };
      
      // Generate recommendations
      if (!report.netlifyStatus.exists) {
        report.recommendations.push("Create netlify directory structure");
      }
      
      if (!report.manifestStatus.valid) {
        report.recommendations.push("Regenerate functions manifest");
      }
      
      if (report.manifestStatus.valid && report.manifestStatus.functions.length > 0) {
        const validation = await this.validateFunctionFiles(report.manifestStatus.functions);
        report.functionValidation = validation;
        
        if (validation.invalid > 0 || validation.missing > 0) {
          report.recommendations.push(`Fix ${validation.invalid} invalid and ${validation.missing} missing functions`);
        }
      }
      
      // Save report
      const reportFile = path.join(this.logDir, `netlify-functions-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("✅ Functions report generated and saved");
      
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate functions report: ${error.message}`);
      return null;
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring already started");
      return;
    }
    
    this.log("🚀 Starting Netlify functions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.checkInterval);
    
    // Initial health check
    setTimeout(async () => {
      await this.performHealthCheck();
    }, 5000);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 Netlify functions redundancy monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up Netlify functions redundancy monitor...");
    this.stopMonitoring();
    this.functionIssues.clear();
    this.recoveryAttempts.clear();
  }
}

// Handle command line arguments
if (require.main === module) {
  const monitor = new EnhancedNetlifyFunctionsRedundancy();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--health-check')) {
    monitor.performHealthCheck().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--emergency-recovery')) {
    monitor.emergencyRecovery().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--report')) {
    monitor.generateFunctionsReport().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--regenerate-manifest')) {
    monitor.regenerateFunctionsManifest().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--start')) {
    monitor.startMonitoring();
  } else if (args.includes('--stop')) {
    monitor.stopMonitoring();
    process.exit(0);
  } else {
    // Default: start monitoring
    monitor.startMonitoring();
    
    // Handle shutdown signals
    process.on('SIGTERM', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
    
    process.on('SIGINT', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
  }
}

module.exports = EnhancedNetlifyFunctionsRedundancy;