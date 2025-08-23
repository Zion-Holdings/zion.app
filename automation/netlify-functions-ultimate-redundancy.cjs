#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsUltimateRedundancy {
  constructor() {
    this.config = {
      functionsDir: "netlify/functions",
      backupDir: "netlify/functions/backups",
      manifestFile: "netlify/functions/functions-manifest.json",
      healthCheckInterval: 120000, // 2 minutes
      backupInterval: 600000, // 10 minutes
      maxBackups: 10,
      autoRepair: true,
      autoRegenerate: true,
      logLevel: "INFO"
    };
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.functionsDir)) {
      fs.mkdirSync(this.config.functionsDir, { recursive: true });
    }
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logDir = "automation/logs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const logFile = path.join(logDir, `netlify-functions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
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

  async validateFunctionFile(functionPath) {
    try {
      if (!fs.existsSync(functionPath)) {
        return { valid: false, error: "File does not exist" };
      }

      const content = fs.readFileSync(functionPath, 'utf8');
      
      // Basic validation for different file types
      const ext = path.extname(functionPath);
      
      if (ext === '.js' || ext === '.cjs') {
        // Validate JavaScript/CommonJS
        if (!content.includes('exports.handler') && !content.includes('module.exports')) {
          return { valid: false, error: "Missing handler export" };
        }
      } else if (ext === '.mjs') {
        // Validate ES modules
        if (!content.includes('export const handler')) {
          return { valid: false, error: "Missing handler export" };
        }
      } else if (ext === '.ts') {
        // Validate TypeScript
        if (!content.includes('export const handler') && !content.includes('exports.handler')) {
          return { valid: false, error: "Missing handler export" };
        }
      }

      // Check for basic syntax
      if (content.includes('function(') && !content.includes(')')) {
        return { valid: false, error: "Unclosed function parentheses" };
      }

      if (content.includes('{') && !content.includes('}')) {
        return { valid: false, error: "Unclosed braces" };
      }

      return { valid: true, content };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async validateManifest() {
    try {
      if (!fs.existsSync(this.config.manifestFile)) {
        return { valid: false, error: "Manifest file does not exist" };
      }

      const manifestContent = fs.readFileSync(this.config.manifestFile, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        return { valid: false, error: "Invalid manifest structure" };
      }

      if (manifest.functions.length === 0) {
        return { valid: false, error: "No functions listed in manifest" };
      }

      // Validate each function in manifest
      const validationResults = {};
      let allValid = true;

      for (const functionName of manifest.functions) {
        const functionPath = path.join(this.config.functionsDir, `${functionName}.js`);
        const validation = await this.validateFunctionFile(functionPath);
        validationResults[functionName] = validation;
        
        if (!validation.valid) {
          allValid = false;
        }
      }

      return { 
        valid: allValid, 
        manifest, 
        validationResults,
        totalFunctions: manifest.functions.length
      };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async createFunctionBackup(functionPath) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = path.basename(functionPath);
      const backupPath = path.join(this.config.backupDir, `${filename}.backup.${timestamp}`);
      
      fs.copyFileSync(functionPath, backupPath);
      this.log(`✅ Created backup: ${backupPath}`);
      
      // Clean up old backups
      await this.cleanupOldBackups(filename);
      
      return backupPath;
    } catch (error) {
      this.log(`❌ Failed to create backup: ${error.message}`, "ERROR");
      return null;
    }
  }

  async cleanupOldBackups(functionName) {
    try {
      const files = fs.readdirSync(this.config.backupDir);
      const backups = files
        .filter(file => file.startsWith(functionName) && file.includes('.backup.'))
        .map(file => ({
          name: file,
          path: path.join(this.config.backupDir, file),
          time: fs.statSync(path.join(this.config.backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);

      if (backups.length > this.config.maxBackups) {
        const toDelete = backups.slice(this.config.maxBackups);
        for (const backup of toDelete) {
          fs.unlinkSync(backup.path);
          this.log(`🗑️ Removed old backup: ${backup.name}`);
        }
      }
    } catch (error) {
      this.log(`❌ Failed to cleanup backups: ${error.message}`, "ERROR");
    }
  }

  async restoreFunctionFromBackup(functionPath) {
    try {
      const filename = path.basename(functionPath);
      const files = fs.readdirSync(this.config.backupDir);
      const backups = files
        .filter(file => file.startsWith(filename) && file.includes('.backup.'))
        .map(file => ({
          name: file,
          path: path.join(this.config.backupDir, file),
          time: fs.statSync(path.join(this.config.backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);

      if (backups.length > 0) {
        const latestBackup = backups[0];
        fs.copyFileSync(latestBackup.path, functionPath);
        this.log(`✅ Restored function from backup: ${latestBackup.name}`);
        return true;
      } else {
        this.log(`⚠️ No backup found for: ${filename}`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to restore function: ${error.message}`, "ERROR");
      return false;
    }
  }

  async repairFunction(functionPath) {
    try {
      this.log(`🔧 Attempting to repair function: ${functionPath}`);
      
      // Try to restore from backup first
      if (await this.restoreFunctionFromBackup(functionPath)) {
        return true;
      }

      // If no backup, try to recreate basic function
      const filename = path.basename(functionPath, path.extname(functionPath));
      const ext = path.extname(functionPath);
      const basicFunction = this.generateBasicFunction(filename, ext);
      
      fs.writeFileSync(functionPath, basicFunction);
      this.log(`✅ Recreated basic function: ${functionPath}`);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to repair function: ${error.message}`, "ERROR");
      return false;
    }
  }

  generateBasicFunction(functionName, extension) {
    const templates = {
      '.js': `// Basic Netlify Function: ${functionName}
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Function ${functionName} is running",
        timestamp: new Date().toISOString(),
        event: event
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};`,

      '.cjs': `// Basic Netlify Function: ${functionName}
module.exports = {
  handler: async (event, context) => {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Function ${functionName} is running",
          timestamp: new Date().toISOString(),
          event: event
        })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message
        })
      };
    }
  }
};`,

      '.mjs': `// Basic Netlify Function: ${functionName}
export const handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Function ${functionName} is running",
        timestamp: new Date().toISOString(),
        event: event
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};`,

      '.ts': `// Basic Netlify Function: ${functionName}
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Function ${functionName} is running",
        timestamp: new Date().toISOString(),
        event: event
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};`
    };

    return templates[extension] || templates['.js'];
  }

  async regenerateManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
        if (result.status === 0) {
          this.log("✅ Manifest regenerated successfully");
          return true;
        } else {
          this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
          return false;
        }
      } else {
        // Create basic manifest if script doesn't exist
        const functions = this.scanFunctionsDirectory();
        const manifest = {
          generatedAt: new Date().toISOString(),
          functions: functions,
          totalFunctions: functions.length
        };
        
        fs.writeFileSync(this.config.manifestFile, JSON.stringify(manifest, null, 2));
        this.log("✅ Created basic manifest");
        return true;
      }
    } catch (error) {
      this.log(`❌ Failed to regenerate manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  scanFunctionsDirectory() {
    try {
      if (!fs.existsSync(this.config.functionsDir)) {
        return [];
      }

      const files = fs.readdirSync(this.config.functionsDir);
      const functions = files
        .filter(file => {
          const ext = path.extname(file);
          return ['.js', '.cjs', '.mjs', '.ts'].includes(ext);
        })
        .map(file => path.basename(file, path.extname(file)));

      return functions;
    } catch (error) {
      this.log(`❌ Failed to scan functions directory: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkAllFunctions() {
    this.log("🔍 Checking all Netlify Functions...");
    
    // First validate manifest
    const manifestValidation = await this.validateManifest();
    
    if (!manifestValidation.valid) {
      this.log(`❌ Manifest validation failed: ${manifestValidation.error}`, "ERROR");
      
      if (this.config.autoRepair) {
        this.log("🔧 Attempting to repair manifest...");
        await this.regenerateManifest();
      }
      
      return { allHealthy: false, manifest: manifestValidation };
    }

    // Validate individual functions
    const functionValidations = {};
    let allFunctionsHealthy = true;

    for (const functionName of manifestValidation.manifest.functions) {
      const functionPath = path.join(this.config.functionsDir, `${functionName}.js`);
      const validation = await this.validateFunctionFile(functionPath);
      
      functionValidations[functionName] = validation;
      
      if (!validation.valid) {
        allFunctionsHealthy = false;
        this.log(`❌ Function ${functionName} is invalid: ${validation.error}`, "ERROR");
        
        if (this.config.autoRepair) {
          this.log(`🔧 Attempting to repair function ${functionName}...`);
          await this.repairFunction(functionPath);
        }
      } else {
        this.log(`✅ Function ${functionName} is valid`);
      }
    }

    const overallHealth = manifestValidation.valid && allFunctionsHealthy;
    
    return {
      allHealthy: overallHealth,
      manifest: manifestValidation,
      functions: functionValidations
    };
  }

  async createAllBackups() {
    this.log("💾 Creating backups for all functions...");
    
    const backupResults = {};
    
    // Get all function files
    const functions = this.scanFunctionsDirectory();
    
    for (const functionName of functions) {
      const functionPath = path.join(this.config.functionsDir, `${functionName}.js`);
      if (fs.existsSync(functionPath)) {
        const backupPath = await this.createFunctionBackup(functionPath);
        backupResults[functionName] = backupPath;
      } else {
        this.log(`⚠️ Function file not found: ${functionName}`, "WARN");
        backupResults[functionName] = null;
      }
    }

    // Also backup manifest
    if (fs.existsSync(this.config.manifestFile)) {
      const manifestBackup = await this.createFunctionBackup(this.config.manifestFile);
      backupResults['manifest'] = manifestBackup;
    }

    return backupResults;
  }

  async generateHealthReport() {
    try {
      const functionCheck = await this.checkAllFunctions();
      const backupResults = await this.createAllBackups();
      
      const report = {
        timestamp: new Date().toISOString(),
        functions: {
          status: functionCheck.allHealthy,
          manifest: functionCheck.manifest,
          individual: functionCheck.functions
        },
        backups: backupResults,
        system: {
          functionsDir: this.config.functionsDir,
          backupDir: this.config.backupDir,
          manifestFile: this.config.manifestFile,
          autoRepair: this.config.autoRepair,
          autoRegenerate: this.config.autoRegenerate
        }
      };

      const logDir = "automation/logs";
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const reportFile = path.join(logDir, `netlify-functions-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("📊 Netlify Functions health report generated");
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async initializeMonitoring() {
    this.log("🚀 Starting Netlify Functions Ultimate Redundancy System...");
    
    // Initial health check
    await this.checkAllFunctions();
    
    // Create initial backups
    await this.createAllBackups();
    
    // Set up monitoring intervals
    setInterval(async () => {
      try {
        await this.checkAllFunctions();
      } catch (error) {
        this.log(`❌ Function health check failed: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    setInterval(async () => {
      try {
        await this.createAllBackups();
      } catch (error) {
        this.log(`❌ Backup creation failed: ${error.message}`, "ERROR");
      }
    }, this.config.backupInterval);

    this.log("✅ Netlify Functions Ultimate Redundancy System started successfully");
  }

  async stop() {
    this.log("🛑 Stopping Netlify Functions Ultimate Redundancy System...");
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the system if this file is run directly
if (require.main === module) {
  const system = new NetlifyFunctionsUltimateRedundancy();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = NetlifyFunctionsUltimateRedundancy;