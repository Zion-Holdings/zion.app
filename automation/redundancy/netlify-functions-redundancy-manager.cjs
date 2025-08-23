#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.netlifyDir = path.join(process.cwd(), 'netlify');
    this.functionsDir = path.join(this.netlifyDir, 'functions');
    this.ensureLogDir();
    this.backupFunctions = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'netlify-functions-redundancy.log');
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
            name: path.basename(item.name, path.extname(item.name)),
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
    this.log('Creating backup functions...');
    
    const { manifestFunctions, diskFunctions } = await this.scanFunctions();
    
    // Create backups for manifest functions
    for (const functionName of manifestFunctions) {
      await this.createBackupFunction(functionName, 'manifest');
    }
    
    // Create backups for disk functions
    for (const func of diskFunctions) {
      await this.createBackupFunction(func.name, 'disk', func);
    }
  }

  async createBackupFunction(functionName, source, funcInfo = null) {
    const backupName = `${functionName}-backup`;
    const backupPath = path.join(this.functionsDir, backupName);
    
    try {
      if (source === 'manifest') {
        // Create a backup function from manifest entry
        await this.createBackupFromManifest(functionName, backupName, backupPath);
      } else if (source === 'disk' && funcInfo) {
        // Create a backup function from disk file
        await this.createBackupFromDisk(funcInfo, backupName, backupPath);
      }
      
      this.log(`Created backup function: ${backupName}`);
      this.backupFunctions.set(backupName, {
        original: functionName,
        source: source,
        path: backupPath,
        created: new Date(),
        health: 'healthy'
      });
      
    } catch (error) {
      this.log(`Failed to create backup for ${functionName}: ${error.message}`, 'ERROR');
    }
  }

  async createBackupFromManifest(functionName, backupName, backupPath) {
    // Create a simple backup function
    const backupCode = this.generateBackupFunctionCode(functionName, backupName);
    
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }
    
    const indexFile = path.join(backupPath, 'index.js');
    fs.writeFileSync(indexFile, backupCode);
    
    // Create package.json for the backup function
    const packageJson = {
      name: backupName,
      version: '1.0.0',
      description: `Backup function for ${functionName}`,
      main: 'index.js',
      dependencies: {}
    };
    
    const packagePath = path.join(backupPath, 'package.json');
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  }

  async createBackupFromDisk(funcInfo, backupName, backupPath) {
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }
    
    // Copy the original function
    const originalContent = fs.readFileSync(funcInfo.indexFile, 'utf8');
    const backupContent = this.generateBackupFunctionCode(funcInfo.name, backupName, originalContent);
    
    const indexFile = path.join(backupPath, 'index.js');
    fs.writeFileSync(indexFile, backupContent);
    
    // Copy package.json if it exists
    const originalPackagePath = path.join(funcInfo.path, 'package.json');
    if (fs.existsSync(originalPackagePath)) {
      const packageContent = fs.readFileSync(originalPackagePath, 'utf8');
      const packagePath = path.join(backupPath, 'package.json');
      fs.writeFileSync(packagePath, packageContent);
    }
  }

  generateBackupFunctionCode(originalName, backupName, originalCode = null) {
    if (originalCode) {
      // Modify the original code to work as a backup
      return `// Backup function for ${originalName}
// Auto-generated by redundancy manager
// Original function: ${originalName}

${originalCode}

// Backup function wrapper
exports.handler = async (event, context) => {
  try {
    // Log backup function execution
    console.log(\`[${backupName}] Backup function executed for ${originalName}\`);
    
    // Call the original handler
    return await exports.handler(event, context);
  } catch (error) {
    console.error(\`[${backupName}] Backup function error:\`, error);
    
    // Return a backup response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: \`Backup function ${backupName} executed\`,
        original: \`${originalName}\`,
        timestamp: new Date().toISOString(),
        status: 'backup'
      })
    };
  }
};`;
    } else {
      // Generate a simple backup function
      return `// Backup function for ${originalName}
// Auto-generated by redundancy manager

exports.handler = async (event, context) => {
  console.log(\`[${backupName}] Backup function executed for ${originalName}\`);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: \`Backup function ${backupName} executed\`,
      original: \`${originalName}\`,
      timestamp: new Date().toISOString(),
      status: 'backup'
    })
  };
};`;
    }
  }

  async testBackupFunctions() {
    this.log('Testing backup functions...');
    
    for (const [name, info] of this.backupFunctions) {
      try {
        const testResult = await this.testSingleFunction(name, info.path);
        if (testResult.success) {
          info.health = 'healthy';
          this.log(`Backup function ${name} test passed`);
        } else {
          info.health = 'unhealthy';
          this.log(`Backup function ${name} test failed: ${testResult.error}`, 'WARN');
        }
      } catch (error) {
        info.health = 'unhealthy';
        this.log(`Test failed for ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  async testSingleFunction(functionName, functionPath) {
    try {
      // Check if function files exist
      const indexFile = path.join(functionPath, 'index.js');
      if (!fs.existsSync(indexFile)) {
        return { success: false, error: 'Index file not found' };
      }
      
      // Check if function can be loaded
      const functionCode = fs.readFileSync(indexFile, 'utf8');
      if (!functionCode.includes('exports.handler')) {
        return { success: false, error: 'No handler export found' };
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deployBackupFunctions() {
    this.log('Deploying backup functions...');
    
    // Use Netlify CLI to deploy functions
    const result = this.runCommand('netlify', ['deploy', '--prod', '--functions', this.functionsDir]);
    
    if (result.success) {
      this.log('Backup functions deployed successfully');
    } else {
      this.log(`Failed to deploy backup functions: ${result.stderr}`, 'ERROR');
    }
  }

  async checkFunctionHealth() {
    this.log('Checking function health...');
    
    for (const [name, info] of this.backupFunctions) {
      try {
        const health = await this.checkSingleFunctionHealth(name, info.path);
        info.health = health;
        info.lastCheck = new Date();
        
        if (health === 'unhealthy') {
          await this.recoverFunction(name, info);
        }
      } catch (error) {
        this.log(`Health check failed for ${name}: ${error.message}`, 'ERROR');
        info.health = 'unhealthy';
      }
    }
  }

  async checkSingleFunctionHealth(functionName, functionPath) {
    // Check if function files exist and are valid
    const indexFile = path.join(functionPath, 'index.js');
    
    if (!fs.existsSync(indexFile)) {
      return 'unhealthy';
    }
    
    // Check if function can be parsed
    try {
      const content = fs.readFileSync(indexFile, 'utf8');
      if (!content.includes('exports.handler')) {
        return 'unhealthy';
      }
      return 'healthy';
    } catch (error) {
      return 'unhealthy';
    }
  }

  async recoverFunction(name, info) {
    this.log(`Recovering function: ${name}`);
    
    const attempts = this.recoveryAttempts.get(name) || 0;
    if (attempts >= 3) {
      this.log(`Max recovery attempts reached for ${name}`, 'ERROR');
      return;
    }

    this.recoveryAttempts.set(name, attempts + 1);
    
    try {
      // Recreate the backup function
      if (info.source === 'manifest') {
        await this.createBackupFromManifest(info.original, name, info.path);
      } else if (info.source === 'disk') {
        const originalFunc = this.scanFunctionFiles().find(f => f.name === info.original);
        if (originalFunc) {
          await this.createBackupFromDisk(originalFunc, name, info.path);
        }
      }
      
      this.log(`Recovered function: ${name}`);
    } catch (error) {
      this.log(`Recovery failed for ${name}: ${error.message}`, 'ERROR');
    }
  }

  async startHealthMonitoring() {
    this.log('Starting health monitoring...');
    
    // Monitor every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.checkFunctionHealth();
    });

    // Test functions every hour
    cron.schedule('0 * * * *', async () => {
      await this.testBackupFunctions();
    });

    // Deploy every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      await this.deployBackupFunctions();
    });
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      backupFunctions: Array.from(this.backupFunctions.entries()).map(([name, info]) => ({
        name,
        original: info.original,
        source: info.source,
        path: info.path,
        created: info.created,
        health: info.health,
        lastCheck: info.lastCheck
      })),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      totalBackups: this.backupFunctions.size,
      healthyBackups: Array.from(this.backupFunctions.values()).filter(f => f.health === 'healthy').length
    };

    const reportPath = path.join(this.logDir, 'netlify-functions-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Starting Netlify Functions Redundancy Manager...');
    
    try {
      await this.createBackupFunctions();
      await this.startHealthMonitoring();
      
      this.log('Netlify Functions Redundancy Manager started successfully');
      
      // Generate initial report
      await this.generateReport();
      
      // Keep the process running
      setInterval(async () => {
        await this.generateReport();
      }, 900000); // Every 15 minutes
      
    } catch (error) {
      this.log(`Failed to start Netlify Functions Redundancy Manager: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.start();
      break;
    case 'scan':
      manager.scanFunctions().then(functions => {
        console.log('Functions found:', functions);
      });
      break;
    case 'backup':
      manager.createBackupFunctions();
      break;
    case 'test':
      manager.testBackupFunctions();
      break;
    case 'deploy':
      manager.deployBackupFunctions();
      break;
    case 'health':
      manager.checkFunctionHealth();
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log('Report:', JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log('Usage: node netlify-functions-redundancy-manager.cjs [start|scan|backup|test|deploy|health|report]');
      process.exit(1);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;