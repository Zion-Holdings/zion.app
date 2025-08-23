#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.functionsDir = path.join(process.cwd(), "netlify", "functions");
    this.backupDir = path.join(process.cwd(), "automation", "backups", "netlify-functions");
    this.redundancyDir = path.join(process.cwd(), "automation", "redundancy", "netlify-functions");
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.backupDir, this.redundancyDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] NETLIFY-FUNCTIONS-REDUNDANCY: ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(process.cwd(), "automation", "logs", "netlify-functions-redundancy.log");
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

  getFunctionsManifest() {
    const manifestPath = path.join(this.functionsDir, "functions-manifest.json");
    if (!fs.existsSync(manifestPath)) {
      this.log("Functions manifest not found");
      return null;
    }

    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      return manifest;
    } catch (error) {
      this.log(`Failed to parse functions manifest: ${error.message}`);
      return null;
    }
  }

  backupFunctions() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(this.backupDir, `functions-backup-${timestamp}`);
    
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }

    // Backup functions manifest
    const manifest = this.getFunctionsManifest();
    if (manifest) {
      const manifestBackup = path.join(backupPath, "functions-manifest.json");
      fs.writeFileSync(manifestBackup, JSON.stringify(manifest, null, 2));
      this.log("Functions manifest backed up");
    }

    // Backup individual function files if they exist
    if (manifest && manifest.functions) {
      manifest.functions.forEach(funcName => {
        const funcPath = path.join(this.functionsDir, funcName);
        if (fs.existsSync(funcPath)) {
          const funcBackupPath = path.join(backupPath, funcName);
          try {
            if (fs.statSync(funcPath).isDirectory()) {
              this.copyDirectory(funcPath, funcBackupPath);
            } else {
              fs.copyFileSync(funcPath, funcBackupPath);
            }
            this.log(`Function backed up: ${funcName}`);
          } catch (error) {
            this.log(`Failed to backup function ${funcName}: ${error.message}`);
          }
        }
      });
    }

    this.log(`Functions backup completed to: ${backupPath}`);
    return backupPath;
  }

  copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  createRedundancyFunctions() {
    this.log("Creating redundancy Netlify functions...");

    const manifest = this.getFunctionsManifest();
    if (!manifest || !manifest.functions) {
      this.log("No functions found in manifest");
      return 0;
    }

    let created = 0;
    manifest.functions.forEach(funcName => {
      const redundancyFunc = this.createRedundancyFunction(funcName);
      if (redundancyFunc) {
        created++;
      }
    });

    this.log(`Redundancy functions created: ${created} functions`);
    return created;
  }

  createRedundancyFunction(funcName) {
    const redundancyFuncDir = path.join(this.redundancyDir, funcName);
    
    if (!fs.existsSync(redundancyFuncDir)) {
      fs.mkdirSync(redundancyFuncDir, { recursive: true });
    }

    // Create redundancy function wrapper
    const wrapperContent = `exports.handler = async (event, context) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] Redundancy function \`${funcName}\` triggered\`);
  
  try {
    // Call the original function logic
    const originalFunction = require('../../netlify/functions/${funcName}');
    
    if (typeof originalFunction.handler === 'function') {
      return await originalFunction.handler(event, context);
    } else {
      // If no handler, create a basic response
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: \`Redundancy function \`${funcName}\` executed successfully\`,
          timestamp: timestamp,
          originalFunction: '${funcName}'
        })
      };
    }
  } catch (error) {
    console.error(\`[\${timestamp}] Error in redundancy function \`${funcName}\`: \`, error);
    
    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: \`Redundancy function \`${funcName}\` failed\`,
        error: error.message,
        timestamp: timestamp,
        originalFunction: '${funcName}'
      })
    };
  }
};`;

    const wrapperPath = path.join(redundancyFuncDir, "index.js");
    try {
      fs.writeFileSync(wrapperPath, wrapperContent);
      this.log(`Created redundancy wrapper for function: ${funcName}`);
      return true;
    } catch (error) {
      this.log(`Failed to create redundancy wrapper for ${funcName}: ${error.message}`);
      return false;
    }
  }

  createRedundancyManifest() {
    const manifest = this.getFunctionsManifest();
    if (!manifest) {
      this.log("No original manifest found");
      return null;
    }

    const redundancyManifest = {
      ...manifest,
      generatedAt: new Date().toISOString(),
      redundancy: true,
      originalManifest: manifest.generatedAt,
      functions: manifest.functions.map(func => `${func}-redundant`)
    };

    const redundancyManifestPath = path.join(this.redundancyDir, "functions-manifest-redundancy.json");
    try {
      fs.writeFileSync(redundancyManifestPath, JSON.stringify(redundancyManifest, null, 2));
      this.log(`Redundancy manifest created: ${redundancyManifestPath}`);
      return redundancyManifestPath;
    } catch (error) {
      this.log(`Failed to create redundancy manifest: ${error.message}`);
      return null;
    }
  }

  createFunctionOrchestrator() {
    const orchestratorContent = `#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsOrchestrator {
  constructor() {
    this.functionsDir = path.join(process.cwd(), "netlify", "functions");
    this.redundancyDir = path.join(process.cwd(), "automation", "redundancy", "netlify-functions");
    this.logsDir = path.join(process.cwd(), "automation", "logs");
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] FUNCTIONS-ORCHESTRATOR: \${message}\`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, "netlify-functions-orchestrator.log");
    fs.appendFileSync(logFile, logMessage + "\\n");
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

  getFunctionsStatus() {
    const manifestPath = path.join(this.functionsDir, "functions-manifest.json");
    if (!fs.existsSync(manifestPath)) {
      return { available: 0, functions: [] };
    }

    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      return {
        available: manifest.functions ? manifest.functions.length : 0,
        functions: manifest.functions || []
      };
    } catch (error) {
      this.log(\`Failed to read functions manifest: \${error.message}\`);
      return { available: 0, functions: [] };
    }
  }

  triggerFunction(functionName) {
    this.log(\`Triggering function: \${functionName}\`);
    
    // This would typically trigger the Netlify function
    // For now, we'll simulate by checking if the function exists
    const functionPath = path.join(this.functionsDir, functionName);
    
    if (fs.existsSync(functionPath)) {
      this.log(\`Function \${functionName} exists and would be triggered\`);
      return true;
    } else {
      this.log(\`Function \${functionName} not found\`);
      return false;
    }
  }

  deployRedundancyFunctions() {
    this.log("Deploying redundancy functions to Netlify...");
    
    // This would typically use Netlify CLI or API to deploy
    // For now, we'll simulate the deployment
    const redundancyFunctions = fs.readdirSync(this.redundancyDir);
    let deployed = 0;

    redundancyFunctions.forEach(func => {
      if (fs.statSync(path.join(this.redundancyDir, func)).isDirectory()) {
        this.log(\`Would deploy redundancy function: \${func}\`);
        deployed++;
      }
    });

    this.log(\`Redundancy functions deployment simulation completed: \${deployed} functions\`);
    return deployed;
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "status":
        const status = this.getFunctionsStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      case "trigger":
        const functionName = process.argv[3];
        if (functionName) {
          this.triggerFunction(functionName);
        } else {
          this.log("Please specify function name");
        }
        break;
      case "deploy":
        this.deployRedundancyFunctions();
        break;
      default:
        this.log("Available commands: status, trigger <function>, deploy");
        this.log("Usage: node automation/redundancy/netlify-functions-orchestrator.cjs <command>");
    }
  }
}

if (require.main === module) {
  const orchestrator = new NetlifyFunctionsOrchestrator();
  orchestrator.run();
}

module.exports = NetlifyFunctionsOrchestrator;
`;

    const orchestratorPath = path.join(this.redundancyDir, "functions-orchestrator.cjs");
    try {
      fs.writeFileSync(orchestratorPath, orchestratorContent);
      this.log(`Created functions orchestrator: ${orchestratorPath}`);
      return orchestratorPath;
    } catch (error) {
      this.log(`Failed to create functions orchestrator: ${error.message}`);
      return null;
    }
  }

  createRedundancyDeploymentScript() {
    const deploymentScript = `#!/bin/bash

# Netlify Functions Redundancy Deployment Script
# This script deploys redundancy functions to Netlify

set -e

echo "Starting Netlify functions redundancy deployment..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Navigate to project root
cd "$(dirname "$0")/../.."

# Deploy redundancy functions
echo "Deploying redundancy functions..."
node automation/redundancy/netlify-functions-redundancy-manager.cjs deploy

# Trigger Netlify build
echo "Triggering Netlify build..."
netlify build

# Deploy to Netlify
echo "Deploying to Netlify..."
netlify deploy --prod

echo "Netlify functions redundancy deployment completed!"
`;

    const scriptPath = path.join(this.redundancyDir, "deploy-redundancy.sh");
    try {
      fs.writeFileSync(scriptPath, deploymentScript);
      fs.chmodSync(scriptPath, "755"); // Make executable
      this.log(`Created deployment script: ${scriptPath}`);
      return scriptPath;
    } catch (error) {
      this.log(`Failed to create deployment script: ${error.message}`);
      return null;
    }
  }

  deployRedundancyFunctions() {
    this.log("Deploying redundancy functions...");
    
    // This is a simulation - in practice, this would deploy to Netlify
    const redundancyFunctions = fs.readdirSync(this.redundancyDir);
    let deployed = 0;

    redundancyFunctions.forEach(func => {
      if (fs.statSync(path.join(this.redundancyDir, func)).isDirectory()) {
        this.log(`Simulated deployment of redundancy function: ${func}`);
        deployed++;
      }
    });

    this.log(`Redundancy functions deployment simulation completed: ${deployed} functions`);
    return deployed;
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "backup":
        this.backupFunctions();
        break;
      case "create":
        this.createRedundancyFunctions();
        break;
      case "manifest":
        this.createRedundancyManifest();
        break;
      case "orchestrator":
        this.createFunctionOrchestrator();
        break;
      case "deploy-script":
        this.createRedundancyDeploymentScript();
        break;
      case "deploy":
        this.deployRedundancyFunctions();
        break;
      case "full-setup":
        this.log("Running full redundancy setup...");
        this.backupFunctions();
        this.createRedundancyFunctions();
        this.createRedundancyManifest();
        this.createFunctionOrchestrator();
        this.createRedundancyDeploymentScript();
        this.log("Full redundancy setup completed");
        break;
      default:
        this.log("Available commands: backup, create, manifest, orchestrator, deploy-script, deploy, full-setup");
        this.log("Usage: node automation/redundancy/netlify-functions-redundancy-manager.cjs <command>");
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  manager.run();
}

module.exports = NetlifyFunctionsRedundancyManager;