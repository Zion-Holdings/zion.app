#!/usr/bin/env node
'use strict';

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class UltimateRedundancySystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: ['ecosystem.pm2.cjs', 'ecosystem.redundancy.cjs'],
        processPatterns: ['zion-auto-sync', 'redundancy-', 'continuous-', 'enhanced-'],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000
      },
      githubActions: {
        workflowsDir: '.github/workflows',
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        backupDir: 'automation/backups/github-actions'
      },
      netlifyFunctions: {
        manifestFile: 'netlify/functions/functions-manifest.json',
        functionsDir: 'netlify/functions',
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        backupDir: 'automation/backups/netlify-functions'
      },
      shellScripts: {
        patterns: ['*.sh', 'start-*.sh', 'stop-*.sh'],
        healthCheckInterval: 180000,
        backupDir: 'automation/backups/shell-scripts'
      },
      nodeScripts: {
        patterns: ['*.cjs', '*.js'],
        healthCheckInterval: 240000,
        backupDir: 'automation/backups/node-scripts'
      },
      logging: {
        logDir: 'automation/logs',
        maxLogSize: 20 * 1024 * 1024, // 20MB
        maxLogFiles: 50,
        logLevel: process.env.LOG_LEVEL || 'INFO'
      },
      monitoring: {
        fullHealthCheckInterval: 5 * 60 * 1000, // 5 minutes
        emergencyRecoveryThreshold: 3,
        backupRetentionDays: 7
      }
    };
    
    this.healthStatus = new Map();
    this.recoveryAttempts = new Map();
    this.lastBackup = new Map();
    this.emergencyMode = false;
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    const dirs = [
      this.config.logging.logDir,
      this.config.githubActions.backupDir,
      this.config.netlifyFunctions.backupDir,
      this.config.shellScripts.backupDir,
      this.config.nodeScripts.backupDir
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ULTIMATE-REDUNDANCY] ${message}`;
    
    if (level === 'ERROR' || level === 'WARN' || this.config.logging.logLevel === 'DEBUG') {
      console.log(logMessage);
    }
    
    const logFile = path.join(this.config.logging.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + '\n');
    
    // Rotate logs if needed
    this.rotateLogs();
  }

  runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 20,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || '',
        stderr: result.stderr || '',
        success: result.status === 0,
        error: result.error
      });
    });
  }

  async scanAllAutomations() {
    this.log('Starting comprehensive automation scan...');
    
    try {
      await Promise.all([
        this.scanPM2Processes(),
        this.scanGitHubWorkflows(),
        this.scanNetlifyFunctions(),
        this.scanShellScripts(),
        this.scanNodeScripts()
      ]);
      
      this.log(`Scan complete. Found:
        - PM2: ${this.healthStatus.get('pm2')?.processes?.length || 0} processes
        - GitHub Actions: ${this.healthStatus.get('github')?.workflows?.length || 0} workflows
        - Netlify Functions: ${this.healthStatus.get('netlify')?.functions?.length || 0} functions
        - Shell Scripts: ${this.healthStatus.get('shell')?.scripts?.length || 0} scripts
        - Node Scripts: ${this.healthStatus.get('node')?.scripts?.length || 0} scripts`);
        
    } catch (error) {
      this.log(`Scan error: ${error.message}`, 'ERROR');
    }
  }

  async scanPM2Processes() {
    this.log('Scanning PM2 processes...');
    
    try {
      const statusResult = await this.runCommand('pm2', ['status', '--no-daemon']);
      if (!statusResult.success) {
        this.log('PM2 not available', 'WARN');
        this.healthStatus.set('pm2', { status: 'unavailable', processes: [] });
        return;
      }

      const processes = this.parsePM2Status(statusResult.stdout);
      const healthyProcesses = [];
      const unhealthyProcesses = [];

      for (const process of processes) {
        if (this.config.pm2.processPatterns.some(pattern => process.name.includes(pattern))) {
          if (process.status === 'online') {
            healthyProcesses.push(process);
          } else {
            unhealthyProcesses.push(process);
          }
        }
      }

      this.healthStatus.set('pm2', {
        status: unhealthyProcesses.length === 0 ? 'healthy' : 'degraded',
        processes: [...healthyProcesses, ...unhealthyProcesses],
        healthy: healthyProcesses.length,
        unhealthy: unhealthyProcesses.length,
        lastCheck: new Date()
      });

      // Create backup of PM2 ecosystem files
      await this.backupPM2Ecosystems();
      
    } catch (error) {
      this.log(`PM2 scan error: ${error.message}`, 'ERROR');
      this.healthStatus.set('pm2', { status: 'error', processes: [], error: error.message });
    }
  }

  async scanGitHubWorkflows() {
    this.log('Scanning GitHub Actions workflows...');
    
    try {
      const workflowsDir = this.config.githubActions.workflowsDir;
      if (!fs.existsSync(workflowsDir)) {
        this.log('GitHub workflows directory not found', 'WARN');
        this.healthStatus.set('github', { status: 'unavailable', workflows: [] });
        return;
      }

      const workflowFiles = fs.readdirSync(workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .map(file => path.join(workflowsDir, file));

      const workflows = [];
      for (const workflowFile of workflowFiles) {
        try {
          const content = fs.readFileSync(workflowFile, 'utf8');
          const isValid = this.validateGitHubWorkflow(content);
          workflows.push({
            file: workflowFile,
            name: path.basename(workflowFile),
            valid: isValid,
            lastModified: fs.statSync(workflowFile).mtime
          });
        } catch (error) {
          workflows.push({
            file: workflowFile,
            name: path.basename(workflowFile),
            valid: false,
            error: error.message
          });
        }
      }

      const validWorkflows = workflows.filter(w => w.valid);
      const invalidWorkflows = workflows.filter(w => !w.valid);

      this.healthStatus.set('github', {
        status: invalidWorkflows.length === 0 ? 'healthy' : 'degraded',
        workflows: workflows,
        valid: validWorkflows.length,
        invalid: invalidWorkflows.length,
        lastCheck: new Date()
      });

      // Create backup of workflows
      await this.backupGitHubWorkflows();
      
    } catch (error) {
      this.log(`GitHub workflows scan error: ${error.message}`, 'ERROR');
      this.healthStatus.set('github', { status: 'error', workflows: [], error: error.message });
    }
  }

  async scanNetlifyFunctions() {
    this.log('Scanning Netlify functions...');
    
    try {
      const manifestFile = this.config.netlifyFunctions.manifestFile;
      if (!fs.existsSync(manifestFile)) {
        this.log('Netlify functions manifest not found', 'WARN');
        this.healthStatus.set('netlify', { status: 'unavailable', functions: [] });
        return;
      }

      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      // Check if manifest is recent
      const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
      const isStale = manifestAge > 3600000; // 1 hour

      this.healthStatus.set('netlify', {
        status: isStale ? 'degraded' : 'healthy',
        functions: functions,
        count: functions.length,
        manifestAge: manifestAge,
        isStale: isStale,
        lastCheck: new Date()
      });

      // Create backup of functions manifest
      await this.backupNetlifyFunctions();
      
    } catch (error) {
      this.log(`Netlify functions scan error: ${error.message}`, 'ERROR');
      this.healthStatus.set('netlify', { status: 'error', functions: [], error: error.message });
    }
  }

  async scanShellScripts() {
    this.log('Scanning shell scripts...');
    
    try {
      const scripts = [];
      const automationDir = 'automation';
      
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir, { recursive: true });
        
        for (const file of files) {
          if (typeof file === 'string' && this.config.shellScripts.patterns.some(pattern => 
            file.includes(pattern.replace('*', '')) || file.endsWith('.sh'))) {
            
            const filePath = path.join(automationDir, file);
            try {
              const stats = fs.statSync(filePath);
              scripts.push({
                file: filePath,
                name: file,
                size: stats.size,
                lastModified: stats.mtime,
                executable: (stats.mode & 0o111) !== 0
              });
            } catch (error) {
              scripts.push({
                file: filePath,
                name: file,
                error: error.message
              });
            }
          }
        }
      }

      this.healthStatus.set('shell', {
        status: 'healthy',
        scripts: scripts,
        count: scripts.length,
        lastCheck: new Date()
      });

      // Create backup of shell scripts
      await this.backupShellScripts();
      
    } catch (error) {
      this.log(`Shell scripts scan error: ${error.message}`, 'ERROR');
      this.healthStatus.set('shell', { status: 'error', scripts: [], error: error.message });
    }
  }

  async scanNodeScripts() {
    this.log('Scanning Node.js scripts...');
    
    try {
      const scripts = [];
      const automationDir = 'automation';
      
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir, { recursive: true });
        
        for (const file of files) {
          if (typeof file === 'string' && this.config.nodeScripts.patterns.some(pattern => 
            file.includes(pattern.replace('*', '')) || file.endsWith('.cjs') || file.endsWith('.js'))) {
            
            const filePath = path.join(automationDir, file);
            try {
              const stats = fs.statSync(filePath);
              const content = fs.readFileSync(filePath, 'utf8');
              scripts.push({
                file: filePath,
                name: file,
                size: stats.size,
                lastModified: stats.mtime,
                hasShebang: content.startsWith('#!/'),
                isValid: this.validateNodeScript(content)
              });
            } catch (error) {
              scripts.push({
                file: filePath,
                name: file,
                error: error.message
              });
            }
          }
        }
      }

      this.healthStatus.set('node', {
        status: 'healthy',
        scripts: scripts,
        count: scripts.length,
        lastCheck: new Date()
      });

      // Create backup of Node.js scripts
      await this.backupNodeScripts();
      
    } catch (error) {
      this.log(`Node.js scripts scan error: ${error.message}`, 'ERROR');
      this.healthStatus.set('node', { status: 'error', scripts: [], error: error.message });
    }
  }

  parsePM2Status(statusOutput) {
    try {
      const lines = statusOutput.split('\n');
      const processes = [];
      
      for (const line of lines) {
        if (line.includes('│') && !line.includes('App name')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4) {
            processes.push({
              name: parts[0],
              status: parts[1],
              cpu: parts[2],
              memory: parts[3]
            });
          }
        }
      }
      
      return processes;
    } catch (error) {
      this.log(`PM2 status parsing error: ${error.message}`, 'ERROR');
      return [];
    }
  }

  validateGitHubWorkflow(content) {
    return content.includes('name:') && 
           content.includes('on:') && 
           content.includes('jobs:') &&
           !content.includes('syntax error');
  }

  validateNodeScript(content) {
    try {
      // Basic validation - check if it's valid JavaScript/Node.js
      return content.includes('require(') || 
             content.includes('import ') || 
             content.includes('module.exports') ||
             content.includes('#!/usr/bin/env node');
    } catch (error) {
      return false;
    }
  }

  async backupPM2Ecosystems() {
    try {
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const backupPath = path.join(this.config.shellScripts.backupDir, 
            `ecosystem-${path.basename(ecosystemFile)}-${Date.now()}.backup`);
          fs.copyFileSync(ecosystemFile, backupPath);
          this.log(`Backed up PM2 ecosystem: ${ecosystemFile}`);
        }
      }
    } catch (error) {
      this.log(`PM2 ecosystem backup error: ${error.message}`, 'ERROR');
    }
  }

  async backupGitHubWorkflows() {
    try {
      const workflowsDir = this.config.githubActions.workflowsDir;
      if (fs.existsSync(workflowsDir)) {
        const backupDir = path.join(this.config.githubActions.backupDir, `workflows-${Date.now()}`);
        fs.mkdirSync(backupDir, { recursive: true });
        
        const workflowFiles = fs.readdirSync(workflowsDir)
          .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
        
        for (const file of workflowFiles) {
          const sourcePath = path.join(workflowsDir, file);
          const backupPath = path.join(backupDir, file);
          fs.copyFileSync(sourcePath, backupPath);
        }
        
        this.log(`Backed up GitHub workflows to: ${backupDir}`);
      }
    } catch (error) {
      this.log(`GitHub workflows backup error: ${error.message}`, 'ERROR');
    }
  }

  async backupNetlifyFunctions() {
    try {
      const manifestFile = this.config.netlifyFunctions.manifestFile;
      if (fs.existsSync(manifestFile)) {
        const backupPath = path.join(this.config.netlifyFunctions.backupDir, 
          `functions-manifest-${Date.now()}.backup`);
        fs.copyFileSync(manifestFile, backupPath);
        this.log(`Backed up Netlify functions manifest`);
      }
    } catch (error) {
      this.log(`Netlify functions backup error: ${error.message}`, 'ERROR');
    }
  }

  async backupShellScripts() {
    try {
      const scripts = this.healthStatus.get('shell')?.scripts || [];
      if (scripts.length > 0) {
        const backupDir = path.join(this.config.shellScripts.backupDir, `shell-scripts-${Date.now()}`);
        fs.mkdirSync(backupDir, { recursive: true });
        
        for (const script of scripts) {
          if (script.file && fs.existsSync(script.file)) {
            const backupPath = path.join(backupDir, script.name);
            fs.copyFileSync(script.file, backupPath);
          }
        }
        
        this.log(`Backed up shell scripts to: ${backupDir}`);
      }
    } catch (error) {
      this.log(`Shell scripts backup error: ${error.message}`, 'ERROR');
    }
  }

  async backupNodeScripts() {
    try {
      const scripts = this.healthStatus.get('node')?.scripts || [];
      if (scripts.length > 0) {
        const backupDir = path.join(this.config.nodeScripts.backupDir, `node-scripts-${Date.now()}`);
        fs.mkdirSync(backupDir, { recursive: true });
        
        for (const script of scripts) {
          if (script.file && fs.existsSync(script.file)) {
            const backupPath = path.join(backupDir, script.name);
            fs.copyFileSync(script.file, backupPath);
          }
        }
        
        this.log(`Backed up Node.js scripts to: ${backupDir}`);
      }
    } catch (error) {
      this.log(`Node.js scripts backup error: ${error.message}`, 'ERROR');
    }
  }

  async performHealthChecks() {
    this.log('Performing comprehensive health checks...');
    
    try {
      await this.scanAllAutomations();
      
      // Check PM2 health
      const pm2Status = this.healthStatus.get('pm2');
      if (pm2Status && pm2Status.status !== 'healthy') {
        await this.recoverPM2Processes();
      }
      
      // Check GitHub Actions health
      const githubStatus = this.healthStatus.get('github');
      if (githubStatus && githubStatus.status !== 'healthy') {
        await this.recoverGitHubWorkflows();
      }
      
      // Check Netlify functions health
      const netlifyStatus = this.healthStatus.get('netlify');
      if (netlifyStatus && netlifyStatus.status !== 'healthy') {
        await this.recoverNetlifyFunctions();
      }
      
      // Check shell scripts health
      const shellStatus = this.healthStatus.get('shell');
      if (shellStatus && shellStatus.status !== 'healthy') {
        await this.recoverShellScripts();
      }
      
      // Check Node.js scripts health
      const nodeStatus = this.healthStatus.get('node');
      if (nodeStatus && nodeStatus.status !== 'healthy') {
        await this.recoverNodeScripts();
      }
      
      this.log('Health checks completed');
      
    } catch (error) {
      this.log(`Health checks error: ${error.message}`, 'ERROR');
    }
  }

  async recoverPM2Processes() {
    this.log('Recovering PM2 processes...');
    
    try {
      const pm2Status = this.healthStatus.get('pm2');
      if (!pm2Status || !pm2Status.processes) return;
      
      const unhealthyProcesses = pm2Status.processes.filter(p => p.status !== 'online');
      
      for (const process of unhealthyProcesses) {
        this.log(`Attempting to restart PM2 process: ${process.name}`);
        
        // Try to restart the process
        const restartResult = await this.runCommand('pm2', ['restart', process.name]);
        if (!restartResult.success) {
          // If restart fails, try to start it
          await this.runCommand('pm2', ['start', process.name]);
        }
        
        // Wait a bit before next restart
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      // If still unhealthy, try ecosystem restart
      if (unhealthyProcesses.length > 0) {
        this.log('Attempting ecosystem restart...');
        for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            await this.runCommand('pm2', ['start', ecosystemFile]);
          }
        }
      }
      
    } catch (error) {
      this.log(`PM2 recovery error: ${error.message}`, 'ERROR');
    }
  }

  async recoverGitHubWorkflows() {
    this.log('Recovering GitHub workflows...');
    
    try {
      const githubStatus = this.healthStatus.get('github');
      if (!githubStatus || !githubStatus.workflows) return;
      
      const invalidWorkflows = githubStatus.workflows.filter(w => !w.valid);
      
      for (const workflow of invalidWorkflows) {
        this.log(`Attempting to fix GitHub workflow: ${workflow.name}`);
        
        // Try to restore from backup
        const backupFiles = fs.readdirSync(this.config.githubActions.backupDir)
          .filter(file => file.includes('workflows-'))
          .sort()
          .reverse();
        
        if (backupFiles.length > 0) {
          const latestBackup = path.join(this.config.githubActions.backupDir, backupFiles[0]);
          const workflowFile = path.join(latestBackup, workflow.name);
          
          if (fs.existsSync(workflowFile)) {
            const targetPath = workflow.file;
            fs.copyFileSync(workflowFile, targetPath);
            this.log(`Restored workflow from backup: ${workflow.name}`);
          }
        }
      }
      
    } catch (error) {
      this.log(`GitHub workflows recovery error: ${error.message}`, 'ERROR');
    }
  }

  async recoverNetlifyFunctions() {
    this.log('Recovering Netlify functions...');
    
    try {
      const netlifyStatus = this.healthStatus.get('netlify');
      if (!netlifyStatus || !netlifyStatus.isStale) return;
      
      this.log('Regenerating Netlify functions manifest...');
      
      // Try to regenerate the manifest
      if (fs.existsSync('scripts/generate-netlify-functions-manifest.cjs')) {
        const result = await this.runCommand('node', ['scripts/generate-netlify-functions-manifest.cjs']);
        if (result.success) {
          this.log('Netlify functions manifest regenerated successfully');
        } else {
          this.log('Failed to regenerate Netlify functions manifest', 'WARN');
        }
      }
      
    } catch (error) {
      this.log(`Netlify functions recovery error: ${error.message}`, 'ERROR');
    }
  }

  async recoverShellScripts() {
    this.log('Recovering shell scripts...');
    
    try {
      const shellStatus = this.healthStatus.get('shell');
      if (!shellStatus || !shellStatus.scripts) return;
      
      const brokenScripts = shellStatus.scripts.filter(s => s.error);
      
      for (const script of brokenScripts) {
        this.log(`Attempting to fix shell script: ${script.name}`);
        
        // Try to restore from backup
        const backupFiles = fs.readdirSync(this.config.shellScripts.backupDir)
          .filter(file => file.includes('shell-scripts-'))
          .sort()
          .reverse();
        
        if (backupFiles.length > 0) {
          const latestBackup = path.join(this.config.shellScripts.backupDir, backupFiles[0]);
          const scriptFile = path.join(latestBackup, script.name);
          
          if (fs.existsSync(scriptFile)) {
            const targetPath = script.file;
            fs.copyFileSync(scriptFile, targetPath);
            this.log(`Restored shell script from backup: ${script.name}`);
          }
        }
      }
      
    } catch (error) {
      this.log(`Shell scripts recovery error: ${error.message}`, 'ERROR');
    }
  }

  async recoverNodeScripts() {
    this.log('Recovering Node.js scripts...');
    
    try {
      const nodeStatus = this.healthStatus.get('node');
      if (!nodeStatus || !nodeStatus.scripts) return;
      
      const brokenScripts = nodeStatus.scripts.filter(s => s.error);
      
      for (const script of brokenScripts) {
        this.log(`Attempting to fix Node.js script: ${script.name}`);
        
        // Try to restore from backup
        const backupFiles = fs.readdirSync(this.config.nodeScripts.backupDir)
          .filter(file => file.includes('node-scripts-'))
          .sort()
          .reverse();
        
        if (backupFiles.length > 0) {
          const latestBackup = path.join(this.config.nodeScripts.backupDir, backupFiles[0]);
          const scriptFile = path.join(latestBackup, script.name);
          
          if (fs.existsSync(scriptFile)) {
            const targetPath = script.file;
            fs.copyFileSync(scriptFile, targetPath);
            this.log(`Restored Node.js script from backup: ${script.name}`);
          }
        }
      }
      
    } catch (error) {
      this.log(`Node.js scripts recovery error: ${error.message}`, 'ERROR');
    }
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery procedures...', 'WARN');
    this.emergencyMode = true;
    
    try {
      // Kill all PM2 processes
      await this.runCommand('pm2', ['kill']);
      
      // Clear PM2 logs
      await this.runCommand('pm2', ['flush']);
      
      // Restart PM2 processes from ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand('pm2', ['start', ecosystemFile]);
        }
      }
      
      // Regenerate Netlify functions manifest
      if (fs.existsSync('scripts/generate-netlify-functions-manifest.cjs')) {
        await this.runCommand('node', ['scripts/generate-netlify-functions-manifest.cjs']);
      }
      
      // Force Git sync
      await this.performGitSync();
      
      this.log('Emergency recovery completed', 'INFO');
      this.emergencyMode = false;
      return true;
      
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, 'ERROR');
      this.emergencyMode = false;
      return false;
    }
  }

  async performGitSync() {
    this.log('Performing Git synchronization...');
    
    try {
      // Check if we're in a git repository
      const gitStatus = await this.runCommand('git', ['status']);
      if (!gitStatus.success) {
        this.log('Not in a git repository', 'ERROR');
        return false;
      }

      // Fetch latest changes
      const fetchResult = await this.runCommand('git', ['fetch', '--prune', 'origin']);
      if (!fetchResult.success) {
        this.log('Git fetch failed', 'ERROR');
        return false;
      }

      // Check if we're behind origin/main
      const behindCheck = await this.runCommand('git', ['rev-list', '--left-right', '--count', 'HEAD...origin/main']);
      if (behindCheck.success) {
        const [ahead, behind] = behindCheck.stdout.trim().split('\t').map(Number);
        
        if (behind > 0) {
          this.log(`Repository is ${behind} commits behind origin/main, pulling...`, 'INFO');
          
          // Stash any local changes
          await this.runCommand('git', ['stash', 'push', '-u', '-m', `emergency-sync-${Date.now()}`]);
          
          // Pull latest changes
          const pullResult = await this.runCommand('git', ['pull', 'origin', 'main']);
          if (!pullResult.success) {
            this.log('Git pull failed', 'ERROR');
            return false;
          }
          
          this.log('Successfully pulled latest changes', 'INFO');
        }
      }

      return true;
    } catch (error) {
      this.log(`Git sync error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logging.logDir)
        .filter(file => file.startsWith('ultimate-redundancy-') && file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.config.logging.logDir, file),
          stats: fs.statSync(path.join(this.config.logging.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      // Remove old log files
      if (logFiles.length > this.config.logging.maxLogFiles) {
        const filesToRemove = logFiles.slice(this.config.logging.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
        }
      }

      // Check log file sizes
      for (const file of logFiles) {
        if (file.stats.size > this.config.logging.maxLogSize) {
          const newPath = file.path.replace('.log', `-${Date.now()}.log`);
          fs.renameSync(file.path, newPath);
        }
      }
    } catch (error) {
      // Log rotation errors are not critical
    }
  }

  cleanupOldBackups() {
    try {
      const backupDirs = [
        this.config.githubActions.backupDir,
        this.config.netlifyFunctions.backupDir,
        this.config.shellScripts.backupDir,
        this.config.nodeScripts.backupDir
      ];
      
      const cutoffTime = Date.now() - (this.config.monitoring.backupRetentionDays * 24 * 60 * 60 * 1000);
      
      for (const backupDir of backupDirs) {
        if (fs.existsSync(backupDir)) {
          const items = fs.readdirSync(backupDir);
          for (const item of items) {
            const itemPath = path.join(backupDir, item);
            const stats = fs.statSync(itemPath);
            
            if (stats.mtime.getTime() < cutoffTime) {
              if (stats.isDirectory()) {
                fs.rmSync(itemPath, { recursive: true, force: true });
              } else {
                fs.unlinkSync(itemPath);
              }
            }
          }
        }
      }
    } catch (error) {
      this.log(`Backup cleanup error: ${error.message}`, 'WARN');
    }
  }

  initializeMonitoring() {
    // Start periodic health checks
    setInterval(async () => {
      await this.performHealthChecks();
    }, this.config.monitoring.fullHealthCheckInterval);

    // Start PM2 monitoring
    setInterval(async () => {
      if (!this.emergencyMode) {
        await this.scanPM2Processes();
      }
    }, this.config.pm2.healthCheckInterval);

    // Start GitHub Actions monitoring
    setInterval(async () => {
      if (!this.emergencyMode) {
        await this.scanGitHubWorkflows();
      }
    }, this.config.githubActions.healthCheckInterval);

    // Start Netlify functions monitoring
    setInterval(async () => {
      if (!this.emergencyMode) {
        await this.scanNetlifyFunctions();
      }
    }, this.config.netlifyFunctions.healthCheckInterval);

    // Start shell scripts monitoring
    setInterval(async () => {
      if (!this.emergencyMode) {
        await this.scanShellScripts();
      }
    }, this.config.shellScripts.healthCheckInterval);

    // Start Node.js scripts monitoring
    setInterval(async () => {
      if (!this.emergencyMode) {
        await this.scanNodeScripts();
      }
    }, this.config.nodeScripts.healthCheckInterval);

    // Start backup cleanup
    setInterval(() => {
      this.cleanupOldBackups();
    }, 24 * 60 * 60 * 1000); // Daily

    this.log('Monitoring initialized');
  }

  getStatus() {
    return {
      system: 'Ultimate Redundancy System',
      version: '2.0.0',
      status: this.emergencyMode ? 'emergency-recovery' : 'running',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      health: Object.fromEntries(this.healthStatus),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  async shutdown() {
    this.log('Shutting down ultimate redundancy system...', 'INFO');
    
    // Perform final health check
    await this.performHealthChecks();
    
    // Save final status
    const finalStatus = this.getStatus();
    const statusFile = path.join(this.config.logging.logDir, 'final-status.json');
    fs.writeFileSync(statusFile, JSON.stringify(finalStatus, null, 2));
    
    this.log('Shutdown complete');
  }
}

// Export the class
module.exports = UltimateRedundancySystem;

// If run directly, start the system
if (require.main === module) {
  const system = new UltimateRedundancySystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await system.shutdown();
    process.exit(0);
  });
  
  // Handle uncaught errors
  process.on('uncaughtException', async (error) => {
    system.log(`Uncaught exception: ${error.message}`, 'ERROR');
    await system.emergencyRecovery();
  });
  
  process.on('unhandledRejection', async (reason, promise) => {
    system.log(`Unhandled rejection: ${reason}`, 'ERROR');
    await system.emergencyRecovery();
  });
  
  system.log('Ultimate redundancy system started', 'INFO');
  
  // Initial scan
  system.scanAllAutomations();
}