#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class EnhancedNetlifyFunctionsRedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.netlifyDir = path.join(process.cwd(), 'netlify');
    this.functionsDir = path.join(this.netlifyDir, 'functions');
    this.ensureLogDir();
    this.backupFunctions = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.monitoringActive = false;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-NETLIFY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-netlify-functions-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      success: result.status === 0
    };
  }

  async scanFunctions() {
    this.log('Scanning Netlify functions...');
    
    if (!fs.existsSync(this.functionsDir)) {
      this.log('Functions directory not found, creating...', 'WARN');
      fs.mkdirSync(this.functionsDir, { recursive: true });
    }

    // Check functions manifest
    const manifestPath = path.join(this.netlifyDir, 'functions', 'functions-manifest.json');
    let functions = [];
    
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        functions = manifest.functions || [];
        this.log(`Found ${functions.length} functions in manifest`);
      } catch (error) {
        this.log(`Failed to parse functions manifest: ${error.message}`, 'ERROR');
      }
    }

    // Also scan for actual function files
    const functionFiles = this.scanFunctionFiles();
    this.log(`Found ${functionFiles.length} function files on disk`);
    
    return { manifestFunctions: functions, diskFunctions: functionFiles };
  }

  scanFunctionFiles() {
    const functionFiles = [];
    
    if (fs.existsSync(this.functionsDir)) {
      const items = fs.readdirSync(this.functionsDir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          const functionPath = path.join(this.functionsDir, item.name);
          const indexFile = path.join(functionPath, 'index.js');
          
          if (fs.existsSync(indexFile)) {
            functionFiles.push({
              name: item.name,
              path: functionPath,
              indexFile: indexFile,
              type: 'directory'
            });
          }
        } else if (item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.ts'))) {
          functionFiles.push({
            name: item.name.replace(/\.(js|ts)$/, ''),
            path: path.join(this.functionsDir, item.name),
            indexFile: path.join(this.functionsDir, item.name),
            type: 'file'
          });
        }
      }
    }
    
    return functionFiles;
  }

  async createBackupFunctions() {
    this.log('Creating enhanced backup functions...');
    
    try {
      const { manifestFunctions, diskFunctions } = await this.scanFunctions();
      
      // Create backups for manifest functions
      for (const functionName of manifestFunctions) {
        await this.createBackupFunction(functionName, 'manifest');
      }
      
      // Create backups for disk functions
      for (const functionInfo of diskFunctions) {
        await this.createBackupFunction(functionInfo.name, 'disk', functionInfo);
      }
      
      this.log('All enhanced backup functions created successfully');
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup functions: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async createBackupFunction(functionName, source, functionInfo = null) {
    const backupName = `${functionName}-enhanced-backup`;
    const backupPath = path.join(this.functionsDir, backupName);
    
    try {
      // Create backup directory
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }
      
      // Create enhanced backup function
      const backupContent = this.generateEnhancedBackupFunction(functionName, source, functionInfo);
      const backupIndexPath = path.join(backupPath, 'index.js');
      
      fs.writeFileSync(backupIndexPath, backupContent);
      
      // Create package.json for the backup function
      const packageJson = this.generateBackupPackageJson(backupName);
      const packagePath = path.join(backupPath, 'package.json');
      fs.writeFileSync(packagePath, packageJson);
      
      // Create README for the backup function
      const readme = this.generateBackupReadme(backupName, functionName, source);
      const readmePath = path.join(backupPath, 'README.md');
      fs.writeFileSync(readmePath, readme);
      
      this.log(`Created enhanced backup function: ${backupName}`);
      this.backupFunctions.set(backupName, {
        original: functionName,
        path: backupPath,
        source: source,
        created: new Date(),
        health: 'healthy',
        type: 'enhanced-backup',
        lastCheck: null,
        lastDeploy: null
      });
      
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup for ${functionName}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateEnhancedBackupFunction(functionName, source, functionInfo) {
    const timestamp = new Date().toISOString();
    
    return `// Enhanced Backup Function for ${functionName}
// Created by Enhanced Netlify Functions Redundancy Manager
// Source: ${source}
// Created: ${timestamp}

const handler = async (event, context) => {
  const startTime = Date.now();
  const requestId = context.awsRequestId || Math.random().toString(36).substr(2, 9);
  
  // Enhanced backup logging
  console.log(\`[ENHANCED-BACKUP] \${functionName} backup function called\`);
  console.log(\`[ENHANCED-BACKUP] Request ID: \${requestId}\`);
  console.log(\`[ENHANCED-BACKUP] Source: \${source}\`);
  console.log(\`[ENHANCED-BACKUP] Timestamp: \${timestamp}\`);
  
  try {
    // Try to call the original function if it exists
    let originalResult = null;
    
    try {
      // Import and call original function if available
      const originalFunctionPath = \`../\${functionName}/index.js\`;
      if (require.resolve(originalFunctionPath)) {
        const originalFunction = require(originalFunctionPath);
        if (typeof originalFunction.handler === 'function') {
          console.log(\`[ENHANCED-BACKUP] Calling original function: \${functionName}\`);
          originalResult = await originalFunction.handler(event, context);
        }
      }
    } catch (originalError) {
      console.log(\`[ENHANCED-BACKUP] Original function not available: \${originalError.message}\`);
    }
    
    // If original function succeeded, return its result
    if (originalResult) {
      console.log(\`[ENHANCED-BACKUP] Original function succeeded\`);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Enhanced-Backup': 'true',
          'X-Original-Function': functionName,
          'X-Request-ID': requestId
        },
        body: JSON.stringify({
          success: true,
          message: 'Enhanced backup function executed successfully',
          originalResult: originalResult,
          backupInfo: {
            functionName: functionName,
            source: source,
            timestamp: timestamp,
            requestId: requestId,
            executionTime: Date.now() - startTime
          }
        })
      };
    }
    
    // Fallback response if original function is not available
    console.log(\`[ENHANCED-BACKUP] Using fallback response\`);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-Enhanced-Backup': 'true',
        'X-Original-Function': functionName,
        'X-Request-ID': requestId,
        'X-Fallback-Response': 'true'
      },
      body: JSON.stringify({
        success: true,
        message: 'Enhanced backup function executed with fallback response',
        backupInfo: {
          functionName: functionName,
          source: source,
          timestamp: timestamp,
          requestId: requestId,
          executionTime: Date.now() - startTime,
          fallback: true
        },
        note: 'Original function is not available, this is a backup response'
      })
    };
    
  } catch (error) {
    console.error(\`[ENHANCED-BACKUP] Error in backup function: \${error.message}\`);
    
    // Return error response
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'X-Enhanced-Backup': 'true',
        'X-Original-Function': functionName,
        'X-Request-ID': requestId,
        'X-Error': 'true'
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
        backupInfo: {
          functionName: functionName,
          source: source,
          timestamp: timestamp,
          requestId: requestId,
          executionTime: Date.now() - startTime
        }
      })
    };
  }
};

// Export the handler
exports.handler = handler;

// Enhanced backup function metadata
exports.metadata = {
  type: 'enhanced-backup',
  originalFunction: functionName,
  source: source,
  created: timestamp,
  version: '1.0.0',
  description: 'Enhanced backup function for ${functionName}'
};`;
  }

  generateBackupPackageJson(backupName) {
    return JSON.stringify({
      name: backupName,
      version: "1.0.0",
      description: "Enhanced backup function created by Enhanced Netlify Functions Redundancy Manager",
      main: "index.js",
      scripts: {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      keywords: ["netlify", "function", "backup", "redundancy"],
      author: "Enhanced Netlify Functions Redundancy Manager",
      license: "MIT",
      dependencies: {},
      devDependencies: {}
    }, null, 2);
  }

  generateBackupReadme(backupName, originalName, source) {
    return `# ${backupName}

This is an enhanced backup function for the original Netlify function: **${originalName}**

## Overview

- **Type**: Enhanced Backup Function
- **Original Function**: ${originalName}
- **Source**: ${source}
- **Created**: ${new Date().toISOString()}
- **Manager**: Enhanced Netlify Functions Redundancy Manager

## Purpose

This function provides redundancy and backup capabilities for the original function. It will:

1. Attempt to call the original function if available
2. Provide a fallback response if the original function is not accessible
3. Include comprehensive logging and monitoring
4. Maintain the same interface as the original function

## Usage

The backup function can be called exactly like the original function. It will automatically:

- Detect if the original function is available
- Execute the original function if possible
- Fall back to a backup response if needed
- Provide detailed logging and monitoring

## Monitoring

This function includes enhanced monitoring capabilities:

- Request ID tracking
- Execution time measurement
- Comprehensive error handling
- Backup function metadata

## Recovery

If the original function becomes available again, this backup function will automatically use it.

## Maintenance

This backup function is automatically managed by the Enhanced Netlify Functions Redundancy Manager.

---

**Note**: This is an automatically generated backup function. Do not modify manually unless absolutely necessary.`;
  }

  async createEmergencyBackupFunctions() {
    this.log('Creating emergency backup functions...');
    
    const { manifestFunctions, diskFunctions } = await this.scanFunctions();
    
    // Create emergency backups for manifest functions
    for (const functionName of manifestFunctions) {
      await this.createEmergencyBackupFunction(functionName, 'manifest');
    }
    
    // Create emergency backups for disk functions
    for (const functionInfo of diskFunctions) {
      await this.createEmergencyBackupFunction(functionInfo.name, 'disk', functionInfo);
    }
  }

  async createEmergencyBackupFunction(functionName, source, functionInfo = null) {
    const emergencyName = `${functionName}-emergency-backup`;
    const emergencyPath = path.join(this.functionsDir, emergencyName);
    
    try {
      // Create emergency backup directory
      if (!fs.existsSync(emergencyPath)) {
        fs.mkdirSync(emergencyPath, { recursive: true });
      }
      
      // Create emergency backup function
      const emergencyContent = this.generateEmergencyBackupFunction(functionName, source, functionInfo);
      const emergencyIndexPath = path.join(emergencyPath, 'index.js');
      
      fs.writeFileSync(emergencyIndexPath, emergencyContent);
      
      // Create package.json for the emergency backup function
      const packageJson = this.generateEmergencyBackupPackageJson(emergencyName);
      const packagePath = path.join(emergencyPath, 'package.json');
      fs.writeFileSync(packagePath, packageJson);
      
      this.log(`Created emergency backup function: ${emergencyName}`);
      this.backupFunctions.set(emergencyName, {
        original: functionName,
        path: emergencyPath,
        source: source,
        created: new Date(),
        health: 'healthy',
        type: 'emergency-backup',
        lastCheck: null,
        lastDeploy: null
      });
      
    } catch (error) {
      this.log(`Failed to create emergency backup for ${functionName}: ${error.message}`, 'ERROR');
    }
  }

  generateEmergencyBackupFunction(functionName, source, functionInfo) {
    const timestamp = new Date().toISOString();
    
    return `// Emergency Backup Function for ${functionName}
// Created by Enhanced Netlify Functions Redundancy Manager
// Source: ${source}
// Created: ${timestamp}
// EMERGENCY USE ONLY

const handler = async (event, context) => {
  const startTime = Date.now();
  const requestId = context.awsRequestId || Math.random().toString(36).substr(2, 9);
  
  // Emergency backup logging
  console.log(\`[EMERGENCY-BACKUP] \${functionName} emergency backup function called\`);
  console.log(\`[EMERGENCY-BACKUP] Request ID: \${requestId}\`);
  console.log(\`[EMERGENCY-BACKUP] Source: \${source}\`);
  console.log(\`[EMERGENCY-BACKUP] Timestamp: \${timestamp}\`);
  console.log(\`[EMERGENCY-BACKUP] WARNING: This is an emergency backup function\`);
  
  try {
    // Emergency response - minimal functionality
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-Emergency-Backup': 'true',
        'X-Original-Function': functionName,
        'X-Request-ID': requestId,
        'X-Emergency-Response': 'true'
      },
      body: JSON.stringify({
        success: true,
        message: 'Emergency backup function executed',
        emergency: true,
        backupInfo: {
          functionName: functionName,
          source: source,
          timestamp: timestamp,
          requestId: requestId,
          executionTime: Date.now() - startTime,
          emergency: true
        },
        note: 'This is an emergency backup response. Original function is not available.',
        instructions: 'Contact system administrator for immediate assistance.'
      })
    };
    
  } catch (error) {
    console.error(\`[EMERGENCY-BACKUP] Error in emergency backup function: \${error.message}\`);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'X-Emergency-Backup': 'true',
        'X-Original-Function': functionName,
        'X-Request-ID': requestId,
        'X-Error': 'true'
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
        emergency: true,
        backupInfo: {
          functionName: functionName,
          source: source,
          timestamp: timestamp,
          requestId: requestId,
          executionTime: Date.now() - startTime
        }
      })
    };
  }
};

// Export the handler
exports.handler = handler;

// Emergency backup function metadata
exports.metadata = {
  type: 'emergency-backup',
  originalFunction: functionName,
  source: source,
  created: timestamp,
  version: '1.0.0',
  description: 'Emergency backup function for ${functionName} - USE ONLY IN EMERGENCIES'
};`;
  }

  generateEmergencyBackupPackageJson(emergencyName) {
    return JSON.stringify({
      name: emergencyName,
      version: "1.0.0",
      description: "Emergency backup function created by Enhanced Netlify Functions Redundancy Manager",
      main: "index.js",
      scripts: {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      keywords: ["netlify", "function", "emergency", "backup", "redundancy"],
      author: "Enhanced Netlify Functions Redundancy Manager",
      license: "MIT",
      dependencies: {},
      devDependencies: {},
      emergency: true
    }, null, 2);
  }

  async createHealthCheckFunctions() {
    this.log('Creating health check functions...');
    
    const { manifestFunctions, diskFunctions } = await this.scanFunctions();
    
    // Create health check functions for all functions
    const allFunctions = [...manifestFunctions, ...diskFunctions.map(f => f.name)];
    
    for (const functionName of allFunctions) {
      await this.createHealthCheckFunction(functionName);
    }
  }

  async createHealthCheckFunction(functionName) {
    const healthCheckName = `${functionName}-health-check`;
    const healthCheckPath = path.join(this.functionsDir, healthCheckName);
    
    try {
      // Create health check directory
      if (!fs.existsSync(healthCheckPath)) {
        fs.mkdirSync(healthCheckPath, { recursive: true });
      }
      
      // Create health check function
      const healthCheckContent = this.generateHealthCheckFunction(functionName);
      const healthCheckIndexPath = path.join(healthCheckPath, 'index.js');
      
      fs.writeFileSync(healthCheckIndexPath, healthCheckContent);
      
      // Create package.json for the health check function
      const packageJson = this.generateHealthCheckPackageJson(healthCheckName);
      const packagePath = path.join(healthCheckPath, 'package.json');
      fs.writeFileSync(packagePath, packageJson);
      
      this.log(`Created health check function: ${healthCheckName}`);
      this.backupFunctions.set(healthCheckName, {
        original: functionName,
        path: healthCheckPath,
        source: 'health-check',
        created: new Date(),
        health: 'healthy',
        type: 'health-check',
        lastCheck: null,
        lastDeploy: null
      });
      
    } catch (error) {
      this.log(`Failed to create health check for ${functionName}: ${error.message}`, 'ERROR');
    }
  }

  generateHealthCheckFunction(functionName) {
    const timestamp = new Date().toISOString();
    
    return `// Health Check Function for ${functionName}
// Created by Enhanced Netlify Functions Redundancy Manager
// Created: ${timestamp}

const handler = async (event, context) => {
  const startTime = Date.now();
  const requestId = context.awsRequestId || Math.random().toString(36).substr(2, 9);
  
  // Health check logging
  console.log(\`[HEALTH-CHECK] \${functionName} health check function called\`);
  console.log(\`[HEALTH-CHECK] Request ID: \${requestId}\`);
  console.log(\`[HEALTH-CHECK] Timestamp: \${timestamp}\`);
  
  try {
    // Check if original function exists
    let originalFunctionExists = false;
    let originalFunctionHealthy = false;
    let backupFunctionExists = false;
    let backupFunctionHealthy = false;
    let emergencyFunctionExists = false;
    let emergencyFunctionHealthy = false;
    
    try {
      // Check original function
      const originalFunctionPath = \`../\${functionName}/index.js\`;
      if (require.resolve(originalFunctionPath)) {
        originalFunctionExists = true;
        const originalFunction = require(originalFunctionPath);
        if (typeof originalFunction.handler === 'function') {
          originalFunctionHealthy = true;
        }
      }
    } catch (error) {
      console.log(\`[HEALTH-CHECK] Original function not available: \${error.message}\`);
    }
    
    // Check backup functions
    try {
      const backupFunctionPath = \`../\${functionName}-enhanced-backup/index.js\`;
      if (require.resolve(backupFunctionPath)) {
        backupFunctionExists = true;
        const backupFunction = require(backupFunctionPath);
        if (typeof backupFunction.handler === 'function') {
          backupFunctionHealthy = true;
        }
      }
    } catch (error) {
      console.log(\`[HEALTH-CHECK] Backup function not available: \${error.message}\`);
    }
    
    try {
      const emergencyFunctionPath = \`../\${functionName}-emergency-backup/index.js\`;
      if (require.resolve(emergencyFunctionPath)) {
        emergencyFunctionExists = true;
        const emergencyFunction = require(emergencyFunctionPath);
        if (typeof emergencyFunction.handler === 'function') {
          emergencyFunctionHealthy = true;
        }
      }
    } catch (error) {
      console.log(\`[HEALTH-CHECK] Emergency function not available: \${error.message}\`);
    }
    
    // Generate health report
    const healthReport = {
      functionName: functionName,
      timestamp: timestamp,
      requestId: requestId,
      overallHealth: 'unknown',
      functions: {
        original: {
          exists: originalFunctionExists,
          healthy: originalFunctionHealthy,
          status: originalFunctionExists ? (originalFunctionHealthy ? 'healthy' : 'unhealthy') : 'missing'
        },
        backup: {
          exists: backupFunctionExists,
          healthy: backupFunctionHealthy,
          status: backupFunctionExists ? (backupFunctionHealthy ? 'healthy' : 'unhealthy') : 'missing'
        },
        emergency: {
          exists: emergencyFunctionExists,
          healthy: emergencyFunctionHealthy,
          status: emergencyFunctionExists ? (emergencyFunctionHealthy ? 'healthy' : 'unhealthy') : 'missing'
        }
      }
    };
    
    // Determine overall health
    if (originalFunctionHealthy) {
      healthReport.overallHealth = 'excellent';
    } else if (backupFunctionHealthy) {
      healthReport.overallHealth = 'good';
    } else if (emergencyFunctionHealthy) {
      healthReport.overallHealth = 'degraded';
    } else {
      healthReport.overallHealth = 'critical';
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-Health-Check': 'true',
        'X-Function': functionName,
        'X-Request-ID': requestId,
        'X-Overall-Health': healthReport.overallHealth
      },
      body: JSON.stringify({
        success: true,
        message: 'Health check completed successfully',
        healthReport: healthReport,
        executionTime: Date.now() - startTime
      })
    };
    
  } catch (error) {
    console.error(\`[HEALTH-CHECK] Error in health check function: \${error.message}\`);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'X-Health-Check': 'true',
        'X-Function': functionName,
        'X-Request-ID': requestId,
        'X-Error': 'true'
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
        executionTime: Date.now() - startTime
      })
    };
  }
};

// Export the handler
exports.handler = handler;

// Health check function metadata
exports.metadata = {
  type: 'health-check',
  targetFunction: functionName,
  created: timestamp,
  version: '1.0.0',
  description: 'Health check function for ${functionName}'
};`;
  }

  generateHealthCheckPackageJson(healthCheckName) {
    return JSON.stringify({
      name: healthCheckName,
      version: "1.0.0",
      description: "Health check function created by Enhanced Netlify Functions Redundancy Manager",
      main: "index.js",
      scripts: {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      keywords: ["netlify", "function", "health-check", "monitoring"],
      author: "Enhanced Netlify Functions Redundancy Manager",
      license: "MIT",
      dependencies: {},
      devDependencies: {}
    }, null, 2);
  }

  async startHealthMonitoring() {
    if (this.monitoringActive) {
      this.log('Health monitoring already active');
      return;
    }

    this.log('Starting enhanced health monitoring...');
    this.monitoringActive = true;

    // Monitor function health every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.checkAllFunctionHealth();
    });

    // Comprehensive health check every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.comprehensiveHealthCheck();
    });

    // Recovery attempt every hour
    cron.schedule('0 * * * *', async () => {
      await this.attemptRecovery();
    });

    this.log('Enhanced health monitoring started');
  }

  async checkAllFunctionHealth() {
    this.log('Checking all backup function health...');
    
    for (const [functionName, functionInfo] of this.backupFunctions) {
      const health = await this.checkFunctionHealth(functionName, functionInfo);
      functionInfo.health = health;
      functionInfo.lastCheck = new Date();
      
      if (health === 'failed') {
        this.log(`Function ${functionName} health check failed`, 'WARN');
        this.healthChecks.set(functionName, {
          status: 'failed',
          timestamp: new Date(),
          attempts: (this.healthChecks.get(functionName)?.attempts || 0) + 1
        });
      }
    }
  }

  async checkFunctionHealth(functionName, functionInfo) {
    try {
      // Check if backup function file exists
      if (!fs.existsSync(functionInfo.path)) {
        return 'failed';
      }

      // Check if backup function index file exists and is readable
      const indexFile = path.join(functionInfo.path, 'index.js');
      if (!fs.existsSync(indexFile)) {
        return 'failed';
      }

      const content = fs.readFileSync(indexFile, 'utf8');
      if (!content || content.length === 0) {
        return 'failed';
      }

      // Basic validation
      if (!content.includes('exports.handler') || !content.includes('functionName')) {
        return 'unhealthy';
      }

      return 'healthy';
      
    } catch (error) {
      this.log(`Health check failed for ${functionName}: ${error.message}`, 'ERROR');
      return 'failed';
    }
  }

  async comprehensiveHealthCheck() {
    this.log('Running comprehensive health check...');
    
    const { manifestFunctions, diskFunctions } = await this.scanFunctions();
    if (!manifestFunctions || manifestFunctions.length === 0) {
      this.log('Comprehensive health check failed', 'ERROR');
      return;
    }

    let healthyCount = 0;
    let totalCount = 0;

    for (const [functionName, functionInfo] of this.backupFunctions) {
      totalCount++;
      if (functionInfo.health === 'healthy') {
        healthyCount++;
      }
    }

    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    this.log(`Comprehensive health: ${healthPercentage.toFixed(1)}% (${healthyCount}/${totalCount})`);

    if (healthPercentage < 70) {
      this.log('System health below 70%, initiating emergency recovery', 'WARN');
      await this.emergencyRecovery();
    }
  }

  async attemptRecovery() {
    this.log('Attempting recovery for failed functions...');
    
    for (const [functionName, functionInfo] of this.backupFunctions) {
      if (functionInfo.health === 'failed') {
        const attempts = this.recoveryAttempts.get(functionName) || 0;
        
        if (attempts < 3) {
          this.log(`Attempting recovery for ${functionName} (attempt ${attempts + 1})`);
          
          const recovered = await this.recoverFunction(functionName, functionInfo);
          if (recovered) {
            this.log(`Successfully recovered ${functionName}`);
            this.recoveryAttempts.set(functionName, 0);
          } else {
            this.recoveryAttempts.set(functionName, attempts + 1);
          }
        } else {
          this.log(`Max recovery attempts reached for ${functionName}`, 'ERROR');
        }
      }
    }
  }

  async recoverFunction(functionName, functionInfo) {
    this.log(`Recovering function: ${functionName} (${functionInfo.type || 'unknown'})`);
    
    try {
      // Delete the corrupted backup function
      if (fs.existsSync(functionInfo.path)) {
        fs.rmSync(functionInfo.path, { recursive: true, force: true });
      }
      
      // Recreate based on type
      let success = false;
      
      if (functionInfo.type === 'emergency-backup') {
        success = await this.createEmergencyBackupFunction(
          functionInfo.original,
          functionInfo.source
        );
      } else if (functionInfo.type === 'health-check') {
        success = await this.createHealthCheckFunction(functionInfo.original);
      } else {
        success = await this.createBackupFunction(
          functionInfo.original,
          functionInfo.source
        );
      }
      
      if (success) {
        functionInfo.health = 'healthy';
        functionInfo.lastCheck = new Date();
      }
      
      return success;
      
    } catch (error) {
      this.log(`Recovery failed for ${functionName}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery...');
    
    // Delete all backup functions
    for (const [functionName, functionInfo] of this.backupFunctions) {
      if (fs.existsSync(functionInfo.path)) {
        fs.rmSync(functionInfo.path, { recursive: true, force: true });
      }
    }
    
    // Clear tracking
    this.backupFunctions.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    
    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Recreate all functions
    await this.createBackupFunctions();
    await this.createEmergencyBackupFunctions();
    await this.createHealthCheckFunctions();
    
    this.log('Emergency recovery completed');
  }

  async stopAllBackupFunctions() {
    this.log('Stopping all enhanced backup functions...');
    
    // Delete all backup function directories
    for (const [functionName, functionInfo] of this.backupFunctions) {
      if (fs.existsSync(functionInfo.path)) {
        fs.rmSync(functionInfo.path, { recursive: true, force: true });
      }
    }
    
    this.backupFunctions.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    this.monitoringActive = false;
    
    this.log('All enhanced backup functions stopped');
  }

  async getStatus() {
    const status = {
      manager: 'Enhanced Netlify Functions Redundancy Manager',
      status: this.monitoringActive ? 'active' : 'inactive',
      functions: Array.from(this.backupFunctions.entries()).map(([name, info]) => ({
        name,
        original: info.original,
        type: info.type,
        source: info.source,
        health: info.health,
        created: info.created,
        lastCheck: info.lastCheck,
        lastDeploy: info.lastDeploy
      })),
      healthChecks: Array.from(this.healthChecks.entries()).map(([name, info]) => ({
        name,
        status: info.status,
        timestamp: info.timestamp,
        attempts: info.attempts
      })),
      recoveryAttempts: Array.from(this.recoveryAttempts.entries()).map(([name, attempts]) => ({
        name,
        attempts
      }))
    };
    
    return status;
  }

  async generateReport() {
    const status = await this.getStatus();
    const reportPath = path.join(this.logDir, 'enhanced-netlify-functions-redundancy-report.json');
    
    fs.writeFileSync(reportPath, JSON.stringify(status, null, 2));
    this.log(`Report generated: ${reportPath}`);
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedNetlifyFunctionsRedundancyManager();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.createBackupFunctions().then(() => {
        manager.createEmergencyBackupFunctions();
        manager.createHealthCheckFunctions();
        manager.startHealthMonitoring();
      });
      break;
    case 'stop':
      manager.stopAllBackupFunctions();
      break;
    case 'status':
      manager.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'health':
      manager.checkAllFunctionHealth();
      break;
    case 'recovery':
      manager.attemptRecovery();
      break;
    case 'emergency':
      manager.emergencyRecovery();
      break;
    default:
      console.log('Usage: node enhanced-netlify-functions-redundancy-manager.cjs [start|stop|status|report|health|recovery|emergency]');
  }
}

module.exports = EnhancedNetlifyFunctionsRedundancyManager;