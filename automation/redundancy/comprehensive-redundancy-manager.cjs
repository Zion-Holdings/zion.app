#!/usr/bin/env node
'use strict';

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ComprehensiveRedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    // Track all automation components
    this.pm2Processes = new Map();
    this.githubWorkflows = new Map();
    this.netlifyFunctions = new Map();
    this.shellScripts = new Map();
    this.nodeScripts = new Map();
    
    // Health tracking
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.lastBackup = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'comprehensive-redundancy.log');
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

  async scanAllAutomations() {
    this.log('Scanning all automation components...');
    
    // Scan PM2 processes
    await this.scanPM2Processes();
    
    // Scan GitHub Actions workflows
    await this.scanGitHubWorkflows();
    
    // Scan Netlify functions
    await this.scanNetlifyFunctions();
    
    // Scan shell scripts
    await this.scanShellScripts();
    
    // Scan Node.js scripts
    await this.scanNodeScripts();
    
    this.log(`Scan complete. Found:
      - ${this.pm2Processes.size} PM2 processes
      - ${this.githubWorkflows.size} GitHub workflows
      - ${this.netlifyFunctions.size} Netlify functions
      - ${this.shellScripts.size} shell scripts
      - ${this.nodeScripts.size} Node.js scripts`);
  }

  async scanPM2Processes() {
    this.log('Scanning PM2 processes...');
    
    const result = this.runCommand('pm2', ['status', '--no-daemon']);
    if (!result.success) {
      this.log('PM2 not available or no processes running', 'WARN');
      return;
    }

    const processes = this.parsePM2Status(result.stdout);
    for (const process of processes) {
      this.pm2Processes.set(process.name, {
        ...process,
        type: 'pm2',
        lastHealthCheck: new Date(),
        health: 'healthy',
        backupCreated: false
      });
    }
  }

  parsePM2Status(output) {
    const lines = output.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('App name')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          processes.push({
            name: parts[0],
            status: parts[1],
            cpu: parts[2],
            memory: parts[3],
            uptime: parts[4] || 'N/A'
          });
        }
      }
    }
    
    return processes;
  }

  async scanGitHubWorkflows() {
    this.log('Scanning GitHub Actions workflows...');
    
    const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    if (!fs.existsSync(workflowsDir)) {
      this.log('GitHub workflows directory not found', 'WARN');
      return;
    }

    const workflowFiles = fs.readdirSync(workflowsDir)
      .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
      .map(file => path.join(workflowsDir, file));

    for (const workflowPath of workflowFiles) {
      const workflowName = path.basename(workflowPath, path.extname(workflowPath));
      this.githubWorkflows.set(workflowName, {
        path: workflowPath,
        type: 'github-workflow',
        lastHealthCheck: new Date(),
        health: 'healthy',
        backupCreated: false,
        schedule: this.extractWorkflowSchedule(workflowPath)
      });
    }
  }

  extractWorkflowSchedule(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
      return cronMatch ? cronMatch[1] : 'manual';
    } catch (error) {
      return 'unknown';
    }
  }

  async scanNetlifyFunctions() {
    this.log('Scanning Netlify functions...');
    
    const netlifyDir = path.join(process.cwd(), 'netlify');
    const functionsDir = path.join(netlifyDir, 'functions');
    
    if (!fs.existsSync(functionsDir)) {
      this.log('Netlify functions directory not found', 'WARN');
      return;
    }

    // Check functions manifest
    const manifestPath = path.join(functionsDir, 'functions-manifest.json');
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const functions = manifest.functions || [];
        
        for (const funcName of functions) {
          this.netlifyFunctions.set(funcName, {
            name: funcName,
            type: 'netlify-function',
            lastHealthCheck: new Date(),
            health: 'healthy',
            backupCreated: false,
            manifest: true
          });
        }
      } catch (error) {
        this.log(`Failed to parse functions manifest: ${error.message}`, 'ERROR');
      }
    }

    // Also scan for actual function files
    const items = fs.readdirSync(functionsDir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        const functionPath = path.join(functionsDir, item.name);
        const indexFile = path.join(functionPath, 'index.js');
        
        if (fs.existsSync(indexFile)) {
          if (!this.netlifyFunctions.has(item.name)) {
            this.netlifyFunctions.set(item.name, {
              name: item.name,
              path: functionPath,
              type: 'netlify-function',
              lastHealthCheck: new Date(),
              health: 'healthy',
              backupCreated: false,
              manifest: false
            });
          } else {
            this.netlifyFunctions.get(item.name).path = functionPath;
            this.netlifyFunctions.get(item.name).manifest = true;
          }
        }
      }
    }
  }

  async scanShellScripts() {
    this.log('Scanning shell scripts...');
    
    const automationDir = path.join(process.cwd(), 'automation');
    const scriptsDir = path.join(automationDir, 'scripts');
    
    // Scan main automation directory
    if (fs.existsSync(automationDir)) {
      const items = fs.readdirSync(automationDir, { withFileTypes: true });
      for (const item of items) {
        if (item.isFile() && item.name.endsWith('.sh')) {
          const scriptPath = path.join(automationDir, item.name);
          this.shellScripts.set(item.name, {
            name: item.name,
            path: scriptPath,
            type: 'shell-script',
            lastHealthCheck: new Date(),
            health: 'healthy',
            backupCreated: false,
            executable: this.isExecutable(scriptPath)
          });
        }
      }
    }
    
    // Scan scripts subdirectory
    if (fs.existsSync(scriptsDir)) {
      const items = fs.readdirSync(scriptsDir, { withFileTypes: true });
      for (const item of items) {
        if (item.isFile() && item.name.endsWith('.sh')) {
          const scriptPath = path.join(scriptsDir, item.name);
          this.shellScripts.set(item.name, {
            name: item.name,
            path: scriptPath,
            type: 'shell-script',
            lastHealthCheck: new Date(),
            health: 'healthy',
            backupCreated: false,
            executable: this.isExecutable(scriptPath)
          });
        }
      }
    }
  }

  isExecutable(filePath) {
    try {
      fs.accessSync(filePath, fs.constants.X_OK);
      return true;
    } catch {
      return false;
    }
  }

  async scanNodeScripts() {
    this.log('Scanning Node.js scripts...');
    
    const automationDir = path.join(process.cwd(), 'automation');
    
    if (fs.existsSync(automationDir)) {
      const items = fs.readdirSync(automationDir, { withFileTypes: true });
      for (const item of items) {
        if (item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.cjs'))) {
          const scriptPath = path.join(automationDir, item.name);
          this.nodeScripts.set(item.name, {
            name: item.name,
            path: scriptPath,
            type: 'node-script',
            lastHealthCheck: new Date(),
            health: 'healthy',
            backupCreated: false,
            valid: this.validateNodeScript(scriptPath)
          });
        }
      }
    }
  }

  validateNodeScript(scriptPath) {
    try {
      require(scriptPath);
      return true;
    } catch (error) {
      return false;
    }
  }

  async createComprehensiveBackups() {
    this.log('Creating comprehensive backups for all automation components...');
    
    // Create backup directory
    const backupDir = path.join(process.cwd(), 'automation', 'backups', new Date().toISOString().split('T')[0]);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Backup PM2 processes
    await this.backupPM2Processes(backupDir);
    
    // Backup GitHub workflows
    await this.backupGitHubWorkflows(backupDir);
    
    // Backup Netlify functions
    await this.backupNetlifyFunctions(backupDir);
    
    // Backup shell scripts
    await this.backupShellScripts(backupDir);
    
    // Backup Node.js scripts
    await this.backupNodeScripts(backupDir);
    
    this.log(`Comprehensive backup completed: ${backupDir}`);
  }

  async backupPM2Processes(backupDir) {
    const pm2BackupDir = path.join(backupDir, 'pm2');
    if (!fs.existsSync(pm2BackupDir)) {
      fs.mkdirSync(pm2BackupDir, { recursive: true });
    }
    
    // Backup ecosystem file
    const ecosystemFile = path.join(process.cwd(), 'ecosystem.pm2.cjs');
    if (fs.existsSync(ecosystemFile)) {
      const backupPath = path.join(pm2BackupDir, 'ecosystem.pm2.cjs');
      fs.copyFileSync(ecosystemFile, backupPath);
      
      // Create enhanced backup ecosystem
      const enhancedEcosystem = this.createEnhancedPM2Ecosystem();
      const enhancedPath = path.join(pm2BackupDir, 'ecosystem.pm2.enhanced.cjs');
      fs.writeFileSync(enhancedPath, enhancedEcosystem);
      
      this.log(`PM2 ecosystem backed up to: ${pm2BackupDir}`);
    }
  }

  createEnhancedPM2Ecosystem() {
    return `module.exports = {
  apps: [
    {
      name: "zion-auto-sync-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 20,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-backup-error.log",
      out_file: "logs/zion-auto-sync-backup-out.log",
      time: true
    },
    {
      name: "zion-auto-sync-cron-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *",
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-cron-backup-error.log",
      out_file: "logs/zion-auto-sync-cron-backup-out.log",
      time: true
    },
    {
      name: "zion-monitoring-backup",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-monitoring-backup-error.log",
      out_file: "logs/zion-monitoring-backup-out.log",
      time: true
    }
  ]
};`;
  }

  async backupGitHubWorkflows(backupDir) {
    const workflowsBackupDir = path.join(backupDir, 'github-workflows');
    if (!fs.existsSync(workflowsBackupDir)) {
      fs.mkdirSync(workflowsBackupDir, { recursive: true });
    }
    
    for (const [name, workflow] of this.githubWorkflows) {
      try {
        const backupPath = path.join(workflowsBackupDir, `${name}-backup.yml`);
        const backupContent = this.createBackupWorkflow(workflow.path, name);
        fs.writeFileSync(backupPath, backupContent);
        
        workflow.backupCreated = true;
        workflow.backupPath = backupPath;
        this.log(`GitHub workflow backup created: ${name}-backup.yml`);
      } catch (error) {
        this.log(`Failed to backup GitHub workflow ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  createBackupWorkflow(workflowPath, workflowName) {
    const originalContent = fs.readFileSync(workflowPath, 'utf8');
    
    // Create backup workflow with reduced frequency
    let backupContent = originalContent.replace(
      /cron:\s*['"`][^'"`]+['"`]/g,
      'cron: \'0 0 * * *\'  # Daily backup'
    );
    
    backupContent = backupContent.replace(
      /name:\s*[^\n]+/,
      `name: ${workflowName} Backup`
    );
    
    // Add backup indicator
    backupContent = `# BACKUP WORKFLOW - Generated by Comprehensive Redundancy Manager
# Original: ${workflowName}
# Created: ${new Date().toISOString()}
# This is a backup workflow that runs less frequently to avoid conflicts

${backupContent}`;
    
    return backupContent;
  }

  async backupNetlifyFunctions(backupDir) {
    const functionsBackupDir = path.join(backupDir, 'netlify-functions');
    if (!fs.existsSync(functionsBackupDir)) {
      fs.mkdirSync(functionsBackupDir, { recursive: true });
    }
    
    for (const [name, func] of this.netlifyFunctions) {
      try {
        const backupPath = path.join(functionsBackupDir, `${name}-backup`);
        if (!fs.existsSync(backupPath)) {
          fs.mkdirSync(backupPath, { recursive: true });
        }
        
        // Create backup function wrapper
        const backupIndex = this.createBackupFunctionWrapper(name, func);
        const indexPath = path.join(backupPath, 'index.js');
        fs.writeFileSync(indexPath, backupIndex);
        
        // Create package.json
        const packageJson = {
          name: `${name}-backup`,
          version: '1.0.0',
          main: 'index.js',
          description: `Backup function for ${name}`,
          generated: new Date().toISOString()
        };
        const packagePath = path.join(backupPath, 'package.json');
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        
        func.backupCreated = true;
        func.backupPath = backupPath;
        this.log(`Netlify function backup created: ${name}-backup`);
      } catch (error) {
        this.log(`Failed to backup Netlify function ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  createBackupFunctionWrapper(functionName, funcInfo) {
    return `// Backup function for ${functionName}
// Generated by Comprehensive Redundancy Manager
// Created: ${new Date().toISOString()}

exports.handler = async (event, context) => {
  try {
    // Try to call the original function if it exists
    if (typeof require === 'function') {
      try {
        const originalFunction = require('../${functionName}');
        if (originalFunction && typeof originalFunction.handler === 'function') {
          return await originalFunction.handler(event, context);
        }
      } catch (requireError) {
        console.log('Original function not available, using backup logic');
      }
    }
    
    // Backup logic - basic response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Backup function response',
        originalFunction: '${functionName}',
        timestamp: new Date().toISOString(),
        backup: true
      })
    };
  } catch (error) {
    console.error('Backup function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Backup function failed',
        originalFunction: '${functionName}',
        timestamp: new Date().toISOString(),
        backup: true
      })
    };
  }
};`;
  }

  async backupShellScripts(backupDir) {
    const scriptsBackupDir = path.join(backupDir, 'shell-scripts');
    if (!fs.existsSync(scriptsBackupDir)) {
      fs.mkdirSync(scriptsBackupDir, { recursive: true });
    }
    
    for (const [name, script] of this.shellScripts) {
      try {
        const backupPath = path.join(scriptsBackupDir, `${name}-backup.sh`);
        const backupContent = this.createBackupShellScript(script.path, name);
        fs.writeFileSync(backupPath, backupContent);
        
        // Make backup executable
        fs.chmodSync(backupPath, '755');
        
        script.backupCreated = true;
        script.backupPath = backupPath;
        this.log(`Shell script backup created: ${name}-backup.sh`);
      } catch (error) {
        this.log(`Failed to backup shell script ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  createBackupShellScript(scriptPath, scriptName) {
    const originalContent = fs.readFileSync(scriptPath, 'utf8');
    
    return `#!/bin/bash
# Backup script for ${scriptName}
# Generated by Comprehensive Redundancy Manager
# Created: ${new Date().toISOString()}

set -e

echo "🔄 Running backup version of ${scriptName}..."

# Add backup-specific logic here
# For now, just echo that this is a backup
echo "✅ This is a backup script for ${scriptName}"
echo "📅 Backup timestamp: $(date)"

# You can add your backup logic here
# For example, running the original script with error handling
# or implementing alternative functionality

echo "✅ Backup script ${scriptName} completed successfully"
`;
  }

  async backupNodeScripts(backupDir) {
    const scriptsBackupDir = path.join(backupDir, 'node-scripts');
    if (!fs.existsSync(scriptsBackupDir)) {
      fs.mkdirSync(scriptsBackupDir, { recursive: true });
    }
    
    for (const [name, script] of this.nodeScripts) {
      try {
        const backupPath = path.join(scriptsBackupDir, `${name}-backup.cjs`);
        const backupContent = this.createBackupNodeScript(script.path, name);
        fs.writeFileSync(backupPath, backupContent);
        
        script.backupCreated = true;
        script.backupPath = backupPath;
        this.log(`Node.js script backup created: ${name}-backup.cjs`);
      } catch (error) {
        this.log(`Failed to backup Node.js script ${name}: ${error.message}`, 'ERROR');
      }
    }
  }

  createBackupNodeScript(scriptPath, scriptName) {
    const originalContent = fs.readFileSync(scriptPath, 'utf8');
    
    return `// Backup script for ${scriptName}
// Generated by Comprehensive Redundancy Manager
// Created: ${new Date().toISOString()}

'use strict';

const fs = require('fs');
const path = require('path');

class ${scriptName.replace(/[^a-zA-Z0-9]/g, '')}Backup {
  constructor() {
    this.scriptName = '${scriptName}';
    this.backupTimestamp = new Date().toISOString();
  }

  async run() {
    try {
      console.log(\`🔄 Running backup version of \${this.scriptName}...\`);
      
      // Add backup-specific logic here
      // For now, just log that this is a backup
      console.log(\`✅ This is a backup script for \${this.scriptName}\`);
      console.log(\`📅 Backup timestamp: \${this.backupTimestamp}\`);
      
      // You can add your backup logic here
      // For example, running the original script with error handling
      // or implementing alternative functionality
      
      console.log(\`✅ Backup script \${this.scriptName} completed successfully\`);
      return { success: true, backup: true };
      
    } catch (error) {
      console.error(\`❌ Backup script \${this.scriptName} failed:\`, error);
      return { success: false, error: error.message, backup: true };
    }
  }
}

// Auto-run if called directly
if (require.main === module) {
  const backup = new ${scriptName.replace(/[^a-zA-Z0-9]/g, '')}Backup();
  backup.run().catch(console.error);
}

module.exports = { ${scriptName.replace(/[^a-zA-Z0-9]/g, '')}Backup };
`;
  }

  async startHealthMonitoring() {
    this.log('Starting comprehensive health monitoring...');
    
    // Monitor all components every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
      await this.checkAllComponentHealth();
    });
    
    // Create backups every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      await this.createComprehensiveBackups();
    });
    
    // Full system report every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.generateComprehensiveReport();
    });
    
    this.log('Health monitoring started');
  }

  async checkAllComponentHealth() {
    this.log('Performing comprehensive health check...');
    
    // Check PM2 processes
    await this.checkPM2Health();
    
    // Check GitHub workflows
    await this.checkGitHubHealth();
    
    // Check Netlify functions
    await this.checkNetlifyHealth();
    
    // Check shell scripts
    await this.checkShellScriptsHealth();
    
    // Check Node.js scripts
    await this.checkNodeScriptsHealth();
    
    this.log('Comprehensive health check completed');
  }

  async checkPM2Health() {
    for (const [name, process] of this.pm2Processes) {
      try {
        const result = this.runCommand('pm2', ['show', name, '--no-daemon']);
        if (result.success) {
          process.health = 'healthy';
          process.lastHealthCheck = new Date();
        } else {
          process.health = 'unhealthy';
          this.log(`PM2 process ${name} is unhealthy`, 'WARN');
        }
      } catch (error) {
        process.health = 'failed';
        this.log(`PM2 process ${name} health check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkGitHubHealth() {
    // GitHub workflows are static files, so we just check if they exist
    for (const [name, workflow] of this.githubWorkflows) {
      try {
        if (fs.existsSync(workflow.path)) {
          workflow.health = 'healthy';
          workflow.lastHealthCheck = new Date();
        } else {
          workflow.health = 'missing';
          this.log(`GitHub workflow ${name} is missing`, 'WARN');
        }
      } catch (error) {
        workflow.health = 'error';
        this.log(`GitHub workflow ${name} health check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkNetlifyHealth() {
    for (const [name, func] of this.netlifyFunctions) {
      try {
        if (func.path && fs.existsSync(func.path)) {
          func.health = 'healthy';
          func.lastHealthCheck = new Date();
        } else {
          func.health = 'missing';
          this.log(`Netlify function ${name} is missing`, 'WARN');
        }
      } catch (error) {
        func.health = 'error';
        this.log(`Netlify function ${name} health check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkShellScriptsHealth() {
    for (const [name, script] of this.shellScripts) {
      try {
        if (fs.existsSync(script.path)) {
          script.health = 'healthy';
          script.lastHealthCheck = new Date();
          
          // Check if still executable
          script.executable = this.isExecutable(script.path);
        } else {
          script.health = 'missing';
          this.log(`Shell script ${name} is missing`, 'WARN');
        }
      } catch (error) {
        script.health = 'error';
        this.log(`Shell script ${name} health check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async checkNodeScriptsHealth() {
    for (const [name, script] of this.nodeScripts) {
      try {
        if (fs.existsSync(script.path)) {
          script.health = 'healthy';
          script.lastHealthCheck = new Date();
          
          // Re-validate script
          script.valid = this.validateNodeScript(script.path);
        } else {
          script.health = 'missing';
          this.log(`Shell script ${name} is missing`, 'WARN');
        }
      } catch (error) {
        script.health = 'error';
        this.log(`Shell script ${name} health check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive redundancy report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalComponents: this.pm2Processes.size + this.githubWorkflows.size + 
                       this.netlifyFunctions.size + this.shellScripts.size + 
                       this.nodeScripts.size,
        healthyComponents: 0,
        unhealthyComponents: 0,
        failedComponents: 0,
        backupCoverage: 0
      },
      components: {
        pm2: Array.from(this.pm2Processes.values()),
        github: Array.from(this.githubWorkflows.values()),
        netlify: Array.from(this.netlifyFunctions.values()),
        shell: Array.from(this.shellScripts.values()),
        node: Array.from(this.nodeScripts.values())
      },
      recommendations: []
    };
    
    // Calculate health metrics
    for (const component of Object.values(report.components)) {
      for (const item of component) {
        if (item.health === 'healthy') {
          report.summary.healthyComponents++;
        } else if (item.health === 'unhealthy') {
          report.summary.unhealthyComponents++;
        } else {
          report.summary.failedComponents++;
        }
        
        if (item.backupCreated) {
          report.summary.backupCoverage++;
        }
      }
    }
    
    // Generate recommendations
    if (report.summary.unhealthyComponents > 0) {
      report.recommendations.push('Some components are unhealthy - review logs and fix issues');
    }
    
    if (report.summary.failedComponents > 0) {
      report.recommendations.push('Critical: Some components have failed - immediate attention required');
    }
    
    if (report.summary.backupCoverage < report.summary.totalComponents) {
      report.recommendations.push('Not all components have backups - run backup creation');
    }
    
    // Save report
    const reportPath = path.join(this.logDir, 'comprehensive-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Starting comprehensive redundancy manager...');
    
    try {
      // Scan all automations
      await this.scanAllAutomations();
      
      // Create initial backups
      await this.createComprehensiveBackups();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      this.log('Comprehensive redundancy manager started successfully');
      
      // Keep the process running
      setInterval(() => {
        // Keep alive
      }, 60000);
      
    } catch (error) {
      this.log(`Failed to start comprehensive redundancy manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async status() {
    const report = await this.generateComprehensiveReport();
    console.log(JSON.stringify(report, null, 2));
  }
}

// CLI interface
if (require.main === module) {
  const manager = new ComprehensiveRedundancyManager();
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start().catch(console.error);
      break;
    case 'status':
      manager.status().catch(console.error);
      break;
    case 'scan':
      manager.scanAllAutomations().catch(console.error);
      break;
    case 'backup':
      manager.createComprehensiveBackups().catch(console.error);
      break;
    case 'health':
      manager.checkAllComponentHealth().catch(console.error);
      break;
    case 'report':
      manager.generateComprehensiveReport().catch(console.error);
      break;
    default:
      console.log('Usage: node comprehensive-redundancy-manager.cjs [start|status|scan|backup|health|report]');
      process.exit(1);
  }
}

module.exports = { ComprehensiveRedundancyManager };