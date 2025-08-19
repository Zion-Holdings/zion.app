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
    
    this.config = {
      netlifyDir: "netlify",
      functionsDir: "netlify/functions",
      manifestFile: "netlify/functions/functions-manifest.json",
      configFile: "netlify/netlify.toml",
      healthCheckInterval: 120000,
      maxFailures: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      enableAutoRegeneration: true,
      enableHealthCheck: true,
      enableDeploymentCheck: true,
      enableMetricsCollection: true,
      functionCategories: [
        "automation",
        "content",
        "monitoring",
        "optimization",
        "security",
        "seo",
        "social"
      ]
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastHealthCheck = null;
    this.deploymentStatus = new Map();
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
      const netlifyDir = path.join(this.workspace, this.config.netlifyDir);
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return { exists: false, functions: false, config: false };
      }

      const functionsDir = path.join(this.workspace, this.config.functionsDir);
      const configFile = path.join(this.workspace, this.config.configFile);
      
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

  async validateFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return { exists: false, valid: false, functions: [], errors: ["Manifest file not found"] };
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      // Validate manifest structure
      const errors = [];
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        errors.push("Invalid manifest structure: functions array missing");
      }
      
      if (!manifest.generatedAt) {
        errors.push("Manifest missing generation timestamp");
      }

      if (errors.length > 0) {
        this.log(`⚠️ Functions manifest has validation errors: ${errors.join(', ')}`, "WARN");
        return { exists: true, valid: false, functions: [], errors };
      }

      const functions = manifest.functions || [];
      this.log(`✅ Functions manifest is valid with ${functions.length} functions`);
      
      return { exists: true, valid: true, functions, errors: [] };
    } catch (error) {
      this.log(`❌ Error validating functions manifest: ${error.message}`, "ERROR");
      return { exists: true, valid: false, functions: [], errors: [error.message] };
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      // Check if function file exists
      const functionPath = path.join(this.workspace, this.config.functionsDir, `${functionName}.js`);
      if (!fs.existsSync(functionPath)) {
        this.log(`❌ Function ${functionName} file not found`, "ERROR");
        return { exists: false, valid: false, errors: ["Function file not found"] };
      }

      // Basic syntax validation
      const functionContent = fs.readFileSync(functionPath, 'utf8');
      const errors = [];

      // Check for basic function structure
      if (!functionContent.includes('exports.handler') && !functionContent.includes('module.exports')) {
        errors.push("Missing handler export");
      }

      // Check for common syntax issues
      if (functionContent.includes('require(') && !functionContent.includes('const') && !functionContent.includes('var') && !functionContent.includes('let')) {
        errors.push("Potential missing variable declaration for require");
      }

      if (errors.length > 0) {
        this.log(`⚠️ Function ${functionName} has validation issues: ${errors.join(', ')}`, "WARN");
        return { exists: true, valid: false, errors };
      }

      this.log(`✅ Function ${functionName} appears valid`);
      return { exists: true, valid: true, errors: [] };
    } catch (error) {
      this.log(`❌ Error checking function ${functionName}: ${error.message}`, "ERROR");
      return { exists: true, valid: false, errors: [error.message] };
    }
  }

  async regenerateFunctionsManifest() {
    if (!this.config.enableAutoRegeneration) {
      this.log("⚠️ Auto-regeneration disabled for functions manifest");
      return false;
    }

    this.log("🔧 Regenerating Netlify functions manifest...");
    
    try {
      const functionsDir = path.join(this.workspace, this.config.functionsDir);
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found, cannot regenerate manifest", "ERROR");
        return false;
      }

      // Scan for function files
      const functionFiles = fs.readdirSync(functionsDir)
        .filter(file => file.endsWith('.js'))
        .map(file => file.replace('.js', ''));

      // Create new manifest
      const newManifest = {
        generatedAt: new Date().toISOString(),
        functions: functionFiles,
        metadata: {
          totalFunctions: functionFiles.length,
          categories: this.categorizeFunctions(functionFiles),
          generatedBy: "enhanced-netlify-functions-redundancy"
        }
      };

      // Write new manifest
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      fs.writeFileSync(manifestPath, JSON.stringify(newManifest, null, 2));
      
      this.log(`✅ Successfully regenerated functions manifest with ${functionFiles.length} functions`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to regenerate functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  categorizeFunctions(functionNames) {
    const categories = {};
    
    for (const functionName of functionNames) {
      for (const category of this.config.functionCategories) {
        if (functionName.toLowerCase().includes(category.toLowerCase())) {
          if (!categories[category]) {
            categories[category] = [];
          }
          categories[category].push(functionName);
          break;
        }
      }
    }
    
    return categories;
  }

  async checkNetlifyConfiguration() {
    try {
      const configPath = path.join(this.workspace, this.config.configFile);
      
      if (!fs.existsSync(configPath)) {
        this.log("⚠️ Netlify configuration file not found", "WARN");
        return { exists: false, valid: false, errors: ["Configuration file not found"] };
      }

      const configContent = fs.readFileSync(configPath, 'utf8');
      const errors = [];

      // Basic TOML validation (simplified)
      if (!configContent.includes('[build]') && !configContent.includes('[functions]')) {
        errors.push("Missing required configuration sections");
      }

      if (errors.length > 0) {
        this.log(`⚠️ Netlify configuration has validation issues: ${errors.join(', ')}`, "WARN");
        return { exists: true, valid: false, errors };
      }

      this.log("✅ Netlify configuration appears valid");
      return { exists: true, valid: true, errors: [] };
    } catch (error) {
      this.log(`❌ Error checking Netlify configuration: ${error.message}`, "ERROR");
      return { exists: true, valid: false, errors: [error.message] };
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive Netlify functions health check...");
    
    const results = {
      directory: {},
      manifest: {},
      configuration: {},
      functions: {},
      summary: {
        totalFunctions: 0,
        healthyFunctions: 0,
        unhealthyFunctions: 0,
        manifestRegenerated: false
      },
      timestamp: new Date().toISOString()
    };

    // Check Netlify directory structure
    results.directory = await this.checkNetlifyDirectory();
    
    // Check functions manifest
    results.manifest = await this.validateFunctionsManifest();
    if (!results.manifest.valid && this.config.enableAutoRegeneration) {
      const regenerated = await this.regenerateFunctionsManifest();
      if (regenerated) {
        results.summary.manifestRegenerated = true;
        // Re-validate after regeneration
        results.manifest = await this.validateFunctionsManifest();
      }
    }

    // Check Netlify configuration
    results.configuration = await this.checkNetlifyConfiguration();

    // Check individual functions
    if (results.manifest.functions && results.manifest.functions.length > 0) {
      results.summary.totalFunctions = results.manifest.functions.length;
      
      for (const functionName of results.manifest.functions) {
        const functionHealth = await this.checkFunctionHealth(functionName);
        results.functions[functionName] = functionHealth;
        
        if (functionHealth.valid) {
          results.summary.healthyFunctions++;
        } else {
          results.summary.unhealthyFunctions++;
        }
      }
    }

    // Generate and log health report
    const healthReport = this.generateHealthReport(results);
    this.log(healthReport);

    // Save health report
    this.saveHealthReport(results);

    this.lastHealthCheck = results;
    return results;
  }

  generateHealthReport(results) {
    const directoryStatus = results.directory.exists ? "✅ EXISTS" : "❌ MISSING";
    const manifestStatus = results.manifest.valid ? "✅ VALID" : "❌ INVALID";
    const configStatus = results.configuration.valid ? "✅ VALID" : "❌ INVALID";
    
    let functionStatus = "";
    if (results.manifest.functions && results.manifest.functions.length > 0) {
      for (const [functionName, health] of Object.entries(results.functions)) {
        const status = health.valid ? "✅" : "❌";
        const details = health.valid ? "HEALTHY" : `UNHEALTHY: ${health.errors.join(', ')}`;
        functionStatus += `${status} ${functionName}: ${details}\n`;
      }
    } else {
      functionStatus = "No functions found in manifest\n";
    }

    return `
📊 ENHANCED NETLIFY FUNCTIONS HEALTH REPORT
============================================
Timestamp: ${results.timestamp}

📁 Directory Structure: ${directoryStatus}
📋 Functions Manifest: ${manifestStatus}
⚙️ Netlify Configuration: ${configStatus}

📊 Functions Health Summary:
Total Functions: ${results.summary.totalFunctions}
Healthy: ${results.summary.healthyFunctions}
Unhealthy: ${results.summary.unhealthyFunctions}
Manifest Regenerated: ${results.summary.manifestRegenerated ? "Yes" : "No"}

🔍 Individual Function Status:
${functionStatus}

${results.summary.healthyFunctions === results.summary.totalFunctions && results.summary.totalFunctions > 0 ? 
  "🎉 All Netlify functions are healthy!" : 
  "⚠️ Some Netlify functions require attention. Check logs for details."}
`;
  }

  saveHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `netlify-functions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📝 Netlify functions health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save Netlify functions health report: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced Netlify functions redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.performComprehensiveHealthCheck();

    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);

    this.log("✅ Enhanced Netlify functions redundancy monitoring started successfully");
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running");
      return;
    }

    this.log("🛑 Stopping enhanced Netlify functions redundancy monitoring...");
    this.monitoring = false;

    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    this.log("✅ Enhanced Netlify functions redundancy monitoring stopped");
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency Netlify functions recovery...");
    
    try {
      // Ensure directories exist
      const netlifyDir = path.join(this.workspace, this.config.netlifyDir);
      const functionsDir = path.join(this.workspace, this.config.functionsDir);
      
      if (!fs.existsSync(netlifyDir)) {
        fs.mkdirSync(netlifyDir, { recursive: true });
        this.log("📁 Created Netlify directory");
      }
      
      if (!fs.existsSync(functionsDir)) {
        fs.mkdirSync(functionsDir, { recursive: true });
        this.log("📁 Created functions directory");
      }

      // Regenerate manifest
      const manifestRegenerated = await this.regenerateFunctionsManifest();
      
      // Create basic netlify.toml if missing
      const configPath = path.join(this.workspace, this.config.configFile);
      if (!fs.existsSync(configPath)) {
        const basicConfig = `[build]
  functions = "netlify/functions"

[functions]
  directory = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat
  status = 200`;
        
        fs.writeFileSync(configPath, basicConfig);
        this.log("✅ Created basic Netlify configuration");
      }

      this.log("✅ Emergency Netlify functions recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency Netlify functions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      lastHealthCheck: this.lastHealthCheck,
      failureCounts: Object.fromEntries(this.failureCounts),
      deploymentStatus: Object.fromEntries(this.deploymentStatus)
    };
  }
}

// Start the enhanced Netlify functions redundancy system
if (require.main === module) {
  const netlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down enhanced Netlify functions redundancy system...');
    await netlifyFunctionsRedundancy.stopMonitoring();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Terminating enhanced Netlify functions redundancy system...');
    await netlifyFunctionsRedundancy.stopMonitoring();
    process.exit(0);
  });

  // Start monitoring
  netlifyFunctionsRedundancy.startMonitoring();
}

module.exports = EnhancedNetlifyFunctionsRedundancy;