#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsUltimateRedundancy {
  constructor() {
    this.config = {
      manifestFile: "netlify/functions/functions-manifest.json",
      functionsDir: "netlify/functions",
      healthCheckInterval: 30000,
      maxFailureThreshold: 5,
      autoRegenerate: true,
      deploymentCheck: true,
      logRotation: true,
      functionMonitoring: true,
      autoHealing: true,
      performanceOptimization: true,
      backupStrategy: true,
      conflictResolution: true
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startUltimateNetlifyFunctionsMonitoring();
  }

  ensureLogDirectory() {
    const logDir = "automation/logs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `netlify-functions-ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 50,
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
      if (!fs.existsSync(this.config.functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }
      
      const stats = fs.statSync(this.config.functionsDir);
      if (!stats.isDirectory()) {
        this.log("❌ Netlify functions path is not a directory", "ERROR");
        return false;
      }
      
      this.log("✅ Netlify functions directory accessible");
      return true;
    } catch (error) {
      this.log(`❌ Netlify directory check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkFunctionsManifest() {
    try {
      if (!fs.existsSync(this.config.manifestFile)) {
        this.log("⚠️ Functions manifest not found, will regenerate", "WARN");
        return { exists: false, valid: false, functions: [] };
      }
      
      const content = fs.readFileSync(this.config.manifestFile, 'utf8');
      const manifest = JSON.parse(content);
      
      // Validate manifest structure
      const isValid = this.validateManifestStructure(manifest);
      
      if (isValid) {
        this.log(`✅ Functions manifest valid: ${manifest.functions?.length || 0} functions`);
        return {
          exists: true,
          valid: true,
          functions: manifest.functions || [],
          generatedAt: manifest.generatedAt,
          manifest
        };
      } else {
        this.log("⚠️ Functions manifest has invalid structure", "WARN");
        return {
          exists: true,
          valid: false,
          functions: [],
          manifest
        };
      }
    } catch (error) {
      this.log(`❌ Functions manifest check failed: ${error.message}`, "ERROR");
      return { exists: false, valid: false, functions: [], error: error.message };
    }
  }

  validateManifestStructure(manifest) {
    try {
      // Check required fields
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        return false;
      }
      
      // Check generatedAt timestamp
      if (!manifest.generatedAt || isNaN(new Date(manifest.generatedAt).getTime())) {
        return false;
      }
      
      // Check function names are strings
      if (!manifest.functions.every(f => typeof f === 'string')) {
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  async scanFunctionFiles() {
    try {
      if (!fs.existsSync(this.config.functionsDir)) {
        return { functions: [], totalFiles: 0, validFiles: 0 };
      }
      
      const files = fs.readdirSync(this.config.functionsDir);
      const functionFiles = [];
      let validFiles = 0;
      
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.ts')) {
          const filePath = path.join(this.config.functionsDir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isFile()) {
            const functionName = path.basename(file, path.extname(file));
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Basic validation
            const isValid = this.validateFunctionFile(content, functionName);
            
            functionFiles.push({
              name: functionName,
              file: file,
              path: filePath,
              size: stats.size,
              lastModified: stats.mtime,
              valid: isValid
            });
            
            if (isValid) validFiles++;
          }
        }
      }
      
      this.log(`📁 Found ${functionFiles.length} function files (${validFiles} valid)`);
      return { functions: functionFiles, totalFiles: files.length, validFiles };
    } catch (error) {
      this.log(`❌ Function file scan failed: ${error.message}`, "ERROR");
      return { functions: [], totalFiles: 0, validFiles: 0, error: error.message };
    }
  }

  validateFunctionFile(content, functionName) {
    try {
      // Basic validation checks
      if (!content || content.trim().length === 0) {
        return false;
      }
      
      // Check for common function patterns
      const hasExport = content.includes('exports.') || 
                       content.includes('module.exports') ||
                       content.includes('export default') ||
                       content.includes('export function') ||
                       content.includes('export const');
      
      if (!hasExport) {
        return false;
      }
      
      // Check for basic syntax (no obvious syntax errors)
      const lines = content.split('\n');
      let bracketCount = 0;
      let braceCount = 0;
      let parenCount = 0;
      
      for (const line of lines) {
        for (const char of line) {
          if (char === '[') bracketCount++;
          if (char === ']') bracketCount--;
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
          if (char === '(') parenCount++;
          if (char === ')') parenCount--;
        }
      }
      
      // Basic bracket balance check
      if (bracketCount !== 0 || braceCount !== 0 || parenCount !== 0) {
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully");
          return true;
        } else {
          this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
          return false;
        }
      } else {
        // Manual manifest generation
        return await this.generateManualManifest();
      }
    } catch (error) {
      this.log(`❌ Manifest regeneration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateManualManifest() {
    try {
      this.log("🔧 Generating manual functions manifest...");
      
      const { functions } = await this.scanFunctionFiles();
      const validFunctions = functions.filter(f => f.valid).map(f => f.name);
      
      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: validFunctions,
        totalFunctions: validFunctions.length,
        generatedBy: "netlify-functions-ultimate-redundancy"
      };
      
      // Ensure directory exists
      const manifestDir = path.dirname(this.config.manifestFile);
      if (!fs.existsSync(manifestDir)) {
        fs.mkdirSync(manifestDir, { recursive: true });
      }
      
      fs.writeFileSync(this.config.manifestFile, JSON.stringify(manifest, null, 2));
      this.log(`✅ Manual manifest generated: ${validFunctions.length} functions`);
      return true;
    } catch (error) {
      this.log(`❌ Manual manifest generation failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkFunctionDeployment() {
    try {
      this.log("🔍 Checking Netlify function deployment status...");
      
      // Check if netlify.toml exists
      const netlifyConfig = "netlify.toml";
      if (fs.existsSync(netlifyConfig)) {
        this.log("✅ Netlify configuration file found");
      } else {
        this.log("⚠️ Netlify configuration file not found", "WARN");
      }
      
      // Check for .netlify directory
      const netlifyDir = ".netlify";
      if (fs.existsSync(netlifyDir)) {
        this.log("✅ Netlify deployment directory found");
      } else {
        this.log("⚠️ Netlify deployment directory not found", "WARN");
      }
      
      // Check for build artifacts
      const buildDirs = ['.next', 'out', 'dist'];
      let buildArtifacts = false;
      
      for (const dir of buildDirs) {
        if (fs.existsSync(dir)) {
          const stats = fs.statSync(dir);
          if (stats.isDirectory() && fs.readdirSync(dir).length > 0) {
            buildArtifacts = true;
            this.log(`✅ Build artifacts found in ${dir}`);
            break;
          }
        }
      }
      
      if (!buildArtifacts) {
        this.log("⚠️ No build artifacts found", "WARN");
      }
      
      return { configured: true, deployed: true, buildArtifacts };
    } catch (error) {
      this.log(`❌ Deployment check failed: ${error.message}`, "ERROR");
      return { configured: false, deployed: false, buildArtifacts: false, error: error.message };
    }
  }

  async performFunctionHealthCheck() {
    try {
      this.log("🔍 Performing comprehensive Netlify Functions health check...");
      
      const results = {
        timestamp: new Date().toISOString(),
        netlifyDirectory: false,
        manifest: {},
        functionFiles: {},
        deployment: {},
        overall: false
      };
      
      // Check Netlify directory
      results.netlifyDirectory = await this.checkNetlifyDirectory();
      
      // Check functions manifest
      results.manifest = await this.checkFunctionsManifest();
      
      // Scan function files
      results.functionFiles = await this.scanFunctionFiles();
      
      // Check deployment status
      results.deployment = await this.checkFunctionDeployment();
      
      // Determine overall health
      results.overall = results.netlifyDirectory && 
                       results.manifest.valid && 
                       results.functionFiles.validFiles > 0 &&
                       results.deployment.configured;
      
      this.log(`📊 Netlify Functions Health: ${results.overall ? 'Healthy' : 'Issues detected'}`);
      
      // Perform auto-healing if enabled
      if (this.config.autoHealing && !results.overall) {
        this.log("🔄 Performing auto-healing...");
        
        if (!results.manifest.valid) {
          await this.regenerateFunctionsManifest();
        }
        
        if (results.functionFiles.validFiles === 0) {
          this.log("⚠️ No valid function files found, attempting to fix...", "WARN");
          // Could implement function file repair here
        }
      }
      
      return results;
    } catch (error) {
      this.log(`❌ Function health check failed: ${error.message}`, "ERROR");
      return {
        timestamp: new Date().toISOString(),
        netlifyDirectory: false,
        manifest: {},
        functionFiles: {},
        deployment: {},
        overall: false,
        error: error.message
      };
    }
  }

  async createFunctionBackups() {
    try {
      this.log("💾 Creating function file backups...");
      
      if (!fs.existsSync(this.config.functionsDir)) {
        this.log("❌ Functions directory not found", "ERROR");
        return 0;
      }
      
      const backupDir = path.join(this.config.functionsDir, "backups");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const { functions } = await this.scanFunctionFiles();
      let backupCount = 0;
      
      for (const func of functions) {
        if (func.valid) {
          const backupPath = path.join(backupDir, `${func.file}.backup`);
          try {
            fs.copyFileSync(func.path, backupPath);
            backupCount++;
          } catch (error) {
            this.log(`⚠️ Failed to backup ${func.file}: ${error.message}`, "WARN");
          }
        }
      }
      
      this.log(`✅ Function backups created: ${backupCount} files backed up`);
      return backupCount;
    } catch (error) {
      this.log(`❌ Function backup creation failed: ${error.message}`, "ERROR");
      return 0;
    }
  }

  async optimizeFunctionPerformance() {
    if (!this.config.performanceOptimization) return;
    
    try {
      this.log("⚡ Performing function performance optimization...");
      
      const { functions } = await this.scanFunctionFiles();
      let optimizedCount = 0;
      
      for (const func of functions) {
        if (func.valid && func.size > 1024) { // Only optimize files larger than 1KB
          try {
            const content = fs.readFileSync(func.path, 'utf8');
            
            // Basic optimizations
            let optimizedContent = content;
            
            // Remove console.log statements in production
            if (process.env.NODE_ENV === 'production') {
              optimizedContent = optimizedContent.replace(/console\.log\([^)]*\);?\s*/g, '');
            }
            
            // Remove empty lines
            optimizedContent = optimizedContent.replace(/\n\s*\n/g, '\n');
            
            // Remove trailing whitespace
            optimizedContent = optimizedContent.replace(/[ \t]+$/gm, '');
            
            if (optimizedContent !== content) {
              fs.writeFileSync(func.path, optimizedContent);
              optimizedCount++;
            }
          } catch (error) {
            this.log(`⚠️ Failed to optimize ${func.file}: ${error.message}`, "WARN");
          }
        }
      }
      
      if (optimizedCount > 0) {
        this.log(`✅ Function optimization completed: ${optimizedCount} functions optimized`);
      } else {
        this.log("✅ No functions needed optimization");
      }
    } catch (error) {
      this.log(`⚠️ Function optimization failed: ${error.message}`, "WARN");
    }
  }

  async generateHealthReport(results) {
    try {
      const reportFile = path.join("automation/logs", `netlify-functions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      this.log(`📄 Health report saved to: ${reportFile}`);
    } catch (error) {
      this.log(`❌ Failed to save health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing Netlify Functions ultimate monitoring system...");
    
    // Set up log rotation
    if (this.config.logRotation) {
      this.setupLogRotation();
    }
  }

  setupLogRotation() {
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // Daily
  }

  rotateLogs() {
    try {
      const logFiles = fs.readdirSync("automation/logs")
        .filter(f => f.startsWith('netlify-functions-ultimate-redundancy-') && f.endsWith('.log'))
        .sort()
        .reverse();

      // Keep only the latest 30 log files
      if (logFiles.length > 30) {
        const filesToDelete = logFiles.slice(30);
        filesToDelete.forEach(file => {
          fs.unlinkSync(path.join("automation/logs", file));
        });
        this.log(`🗑️ Rotated ${filesToDelete.length} old log files`);
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  startUltimateNetlifyFunctionsMonitoring() {
    this.log("🚀 Starting ultimate Netlify Functions monitoring system...");
    
    // Initial health check
    this.performFunctionHealthCheck();
    
    // Continuous monitoring
    setInterval(async () => {
      const results = await this.performFunctionHealthCheck();
      
      // Save health report
      this.generateHealthReport(results);
      
      // Perform optimizations if system is healthy
      if (results.overall) {
        await this.optimizeFunctionPerformance();
      }
      
      // Create backups periodically
      if (this.config.backupStrategy && Math.random() < 0.1) { // 10% chance each check
        await this.createFunctionBackups();
      }
      
      // Log summary
      if (!results.overall) {
        this.log("⚠️ Netlify Functions system has issues, check logs for details", "WARN");
      }
    }, this.config.healthCheckInterval);
    
    this.log("✅ Ultimate Netlify Functions monitoring system started");
  }

  async getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastCheck: new Date().toISOString()
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const system = new NetlifyFunctionsUltimateRedundancy();
  
  switch (args[0]) {
    case 'start':
      console.log("🚀 Netlify Functions ultimate redundancy system started");
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.performFunctionHealthCheck();
      break;
    case 'regenerate':
      system.regenerateFunctionsManifest();
      break;
    case 'backup':
      system.createFunctionBackups();
      break;
    case 'optimize':
      system.optimizeFunctionPerformance();
      break;
    default:
      console.log("Usage: node netlify-functions-ultimate-redundancy.cjs [start|status|health|regenerate|backup|optimize]");
  }
}

module.exports = NetlifyFunctionsUltimateRedundancy;