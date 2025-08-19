#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveRedundancyManager {
  constructor() {
    this.rootDir = process.cwd();
    this.logDir = path.join(this.rootDir, 'automation', 'logs');
    this.ensureLogDir();
    
    // Initialize all automation categories
    this.pm2Automations = new Map();
    this.githubActions = new Map();
    this.netlifyFunctions = new Map();
    this.cronScripts = new Map();
    this.nodeScripts = new Map();
    
    this.healthStatus = new Map();
    this.recoveryAttempts = new Map();
    this.lastHealthCheck = new Date();
    
    this.initializeAutomationRegistry();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'comprehensive-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  initializeAutomationRegistry() {
    this.log('Initializing comprehensive automation registry...');
    
    // PM2 Automations
    this.pm2Automations.set('zion-auto-sync', {
      script: 'automation/pm2-auto-sync.js',
      ecosystem: 'ecosystem.pm2.cjs',
      backupName: 'zion-auto-sync-backup',
      healthCheck: () => this.checkPM2Process('zion-auto-sync'),
      recovery: () => this.recoverPM2Process('zion-auto-sync')
    });
    
    this.pm2Automations.set('zion-auto-sync-cron', {
      script: 'automation/pm2-auto-sync.js',
      ecosystem: 'ecosystem.pm2.cjs',
      backupName: 'zion-auto-sync-cron-backup',
      healthCheck: () => this.checkPM2Process('zion-auto-sync-cron'),
      recovery: () => this.recoverPM2Process('zion-auto-sync-cron')
    });

    // GitHub Actions
    this.githubActions.set('marketing-sync', {
      workflow: '.github/workflows/marketing-sync.yml',
      backupWorkflow: '.github/workflows/marketing-sync-backup.yml',
      schedule: '0 */12 * * *',
      healthCheck: () => this.checkGitHubWorkflow('marketing-sync'),
      recovery: () => this.recoverGitHubWorkflow('marketing-sync')
    });
    
    this.githubActions.set('sync-health', {
      workflow: '.github/workflows/sync-health.yml',
      backupWorkflow: '.github/workflows/sync-health-backup.yml',
      schedule: '*/15 * * * *',
      healthCheck: () => this.checkGitHubWorkflow('sync-health'),
      recovery: () => this.recoverGitHubWorkflow('sync-health')
    });

    // Netlify Functions
    this.netlifyFunctions.set('functions-manifest', {
      manifest: 'netlify/functions/functions-manifest.json',
      backupDir: 'netlify/functions/backup',
      healthCheck: () => this.checkNetlifyFunctions(),
      recovery: () => this.recoverNetlifyFunctions()
    });

    // Cron Scripts
    this.cronScripts.set('git-sync-cron', {
      script: 'automation/git-sync-cron.sh',
      pidFile: 'automation/git-sync-cron.pid',
      interval: 300, // 5 minutes
      healthCheck: () => this.checkCronScript('git-sync-cron'),
      recovery: () => this.recoverCronScript('git-sync-cron')
    });

    // Node Scripts
    this.nodeScripts.set('marketing-sync', {
      script: 'automation/marketing-sync.js',
      backupScript: 'automation/marketing-sync-backup.js',
      healthCheck: () => this.checkNodeScript('marketing/marketing-sync.js'),
      recovery: () => this.recoverNodeScript('marketing/marketing-sync.js')
    });

    this.nodeScripts.set('pm2-auto-sync', {
      script: 'automation/pm2-auto-sync.js',
      backupScript: 'automation/pm2-auto-sync-backup.js',
      healthCheck: () => this.checkNodeScript('automation/pm2-auto-sync.js'),
      recovery: () => this.recoverNodeScript('automation/pm2-auto-sync.js')
    });

    this.log(`Registry initialized with ${this.pm2Automations.size} PM2, ${this.githubActions.size} GitHub Actions, ${this.netlifyFunctions.size} Netlify Functions, ${this.cronScripts.size} cron scripts, and ${this.nodeScripts.size} node scripts`);
  }

  async startComprehensiveRedundancy() {
    this.log('Starting comprehensive redundancy system...');
    
    try {
      // Start PM2 redundancy
      await this.startPM2Redundancy();
      
      // Start GitHub Actions redundancy
      await this.startGitHubActionsRedundancy();
      
      // Start Netlify Functions redundancy
      await this.startNetlifyFunctionsRedundancy();
      
      // Start cron scripts redundancy
      await this.startCronScriptsRedundancy();
      
      // Start node scripts redundancy
      await this.startNodeScriptsRedundancy();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      this.log('Comprehensive redundancy system started successfully');
      
    } catch (error) {
      this.log(`Failed to start comprehensive redundancy system: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async startPM2Redundancy() {
    this.log('Starting PM2 redundancy...');
    
    for (const [name, config] of this.pm2Automations) {
      try {
        // Check if main process is running
        const isRunning = await config.healthCheck();
        
        if (!isRunning) {
          this.log(`Main PM2 process ${name} is not running, starting backup...`);
          await this.startPM2BackupProcess(name, config);
        } else {
          this.log(`Main PM2 process ${name} is running, creating backup...`);
          await this.createPM2BackupProcess(name, config);
        }
        
        this.healthStatus.set(`pm2-${name}`, { status: 'healthy', lastCheck: new Date() });
        
      } catch (error) {
        this.log(`Failed to start PM2 redundancy for ${name}: ${error.message}`, 'ERROR');
        this.healthStatus.set(`pm2-${name}`, { status: 'unhealthy', lastCheck: new Date(), error: error.message });
      }
    }
  }

  async startGitHubActionsRedundancy() {
    this.log('Starting GitHub Actions redundancy...');
    
    for (const [name, config] of this.githubActions) {
      try {
        // Create backup workflow
        await this.createGitHubActionsBackup(name, config);
        this.healthStatus.set(`github-${name}`, { status: 'healthy', lastCheck: new Date() });
        
      } catch (error) {
        this.log(`Failed to start GitHub Actions redundancy for ${name}: ${error.message}`, 'ERROR');
        this.healthStatus.set(`github-${name}`, { status: 'unhealthy', lastCheck: new Date(), error: error.message });
      }
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log('Starting Netlify Functions redundancy...');
    
    for (const [name, config] of this.netlifyFunctions) {
      try {
        // Create backup functions
        await this.createNetlifyFunctionsBackup(name, config);
        this.healthStatus.set(`netlify-${name}`, { status: 'healthy', lastCheck: new Date() });
        
      } catch (error) {
        this.log(`Failed to start Netlify Functions redundancy for ${name}: ${error.message}`, 'ERROR');
        this.healthStatus.set(`netlify-${name}`, { status: 'unhealthy', lastCheck: new Date(), error: error.message });
      }
    }
  }

  async startCronScriptsRedundancy() {
    this.log('Starting cron scripts redundancy...');
    
    for (const [name, config] of this.cronScripts) {
      try {
        // Check if cron script is running
        const isRunning = await config.healthCheck();
        
        if (!isRunning) {
          this.log(`Cron script ${name} is not running, starting backup...`);
          await this.startCronScriptBackup(name, config);
        } else {
          this.log(`Cron script ${name} is running, creating backup...`);
          await this.createCronScriptBackup(name, config);
        }
        
        this.healthStatus.set(`cron-${name}`, { status: 'healthy', lastCheck: new Date() });
        
      } catch (error) {
        this.log(`Failed to start cron script redundancy for ${name}: ${error.message}`, 'ERROR');
        this.healthStatus.set(`cron-${name}`, { status: 'unhealthy', lastCheck: new Date(), error: error.message });
      }
    }
  }

  async startNodeScriptsRedundancy() {
    this.log('Starting node scripts redundancy...');
    
    for (const [name, config] of this.nodeScripts) {
      try {
        // Create backup scripts
        await this.createNodeScriptBackup(name, config);
        this.healthStatus.set(`node-${name}`, { status: 'healthy', lastCheck: new Date() });
        
      } catch (error) {
        this.log(`Failed to start node script redundancy for ${name}: ${error.message}`, 'ERROR');
        this.healthStatus.set(`node-${name}`, { status: 'unhealthy', lastCheck: new Date(), error: error.message });
      }
    }
  }

  async startPM2BackupProcess(name, config) {
    try {
      // Create backup ecosystem config
      const backupEcosystem = this.createPM2BackupEcosystem(name, config);
      const backupPath = path.join(this.rootDir, `ecosystem.${name}-backup.pm2.cjs`);
      fs.writeFileSync(backupPath, backupEcosystem);
      
      // Start backup process
      const result = spawnSync('pm2', ['start', backupPath], {
        cwd: this.rootDir,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      if (result.status === 0) {
        this.log(`PM2 backup process ${config.backupName} started successfully`);
      } else {
        throw new Error(`Failed to start PM2 backup process: ${result.stderr}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to start PM2 backup process: ${error.message}`);
    }
  }

  async createPM2BackupProcess(name, config) {
    try {
      // Create backup ecosystem config
      const backupEcosystem = this.createPM2BackupEcosystem(name, config);
      const backupPath = path.join(this.rootDir, `ecosystem.${name}-backup.pm2.cjs`);
      fs.writeFileSync(backupPath, backupEcosystem);
      
      this.log(`PM2 backup ecosystem created for ${name} at ${backupPath}`);
      
    } catch (error) {
      throw new Error(`Failed to create PM2 backup ecosystem: ${error.message}`);
    }
  }

  createPM2BackupEcosystem(name, config) {
    const backupName = config.backupName;
    const script = config.script;
    
    return `module.exports = {
  apps: [
    {
      name: "${backupName}",
      script: "${script}",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
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
      error_file: "logs/${backupName}-error.log",
      out_file: "logs/${backupName}-out.log",
      time: true
    }
  ]
};`;
  }

  async createGitHubActionsBackup(name, config) {
    try {
      const workflowPath = path.join(this.rootDir, config.workflow);
      const backupPath = path.join(this.rootDir, config.backupWorkflow);
      
      if (fs.existsSync(workflowPath)) {
        let workflowContent = fs.readFileSync(workflowPath, 'utf8');
        
        // Modify schedule to run less frequently (daily backup)
        workflowContent = workflowContent.replace(
          /cron: '.*'/,
          "cron: '0 0 * * *'"
        );
        
        // Add backup indicator to name
        workflowContent = workflowContent.replace(
          /name: .*/,
          `name: ${name.charAt(0).toUpperCase() + name.slice(1)} Backup`
        );
        
        // Add backup indicator to commit message
        workflowContent = workflowContent.replace(
          /chore\(marketing\): update marketing-sync report/,
          'chore(backup): update backup marketing-sync report'
        );
        
        fs.writeFileSync(backupPath, workflowContent);
        this.log(`GitHub Actions backup workflow created for ${name} at ${backupPath}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to create GitHub Actions backup: ${error.message}`);
    }
  }

  async createNetlifyFunctionsBackup(name, config) {
    try {
      const manifestPath = path.join(this.rootDir, config.manifest);
      const backupDir = path.join(this.rootDir, config.backupDir);
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        
        // Create backup manifest
        const backupManifest = {
          ...manifest,
          generatedAt: new Date().toISOString(),
          backup: true,
          originalManifest: manifestPath
        };
        
        const backupManifestPath = path.join(backupDir, 'functions-manifest-backup.json');
        fs.writeFileSync(backupManifestPath, JSON.stringify(backupManifest, null, 2));
        
        this.log(`Netlify Functions backup manifest created at ${backupManifestPath}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to create Netlify Functions backup: ${error.message}`);
    }
  }

  async startCronScriptBackup(name, config) {
    try {
      const backupScript = this.createCronScriptBackup(name, config);
      const backupPath = path.join(this.rootDir, `${config.script}.backup`);
      fs.writeFileSync(backupPath, backupScript);
      
      // Make executable and start
      fs.chmodSync(backupPath, '755');
      
      const result = spawnSync('bash', [backupPath, 'start'], {
        cwd: this.rootDir,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      if (result.status === 0) {
        this.log(`Cron script backup ${name} started successfully`);
      } else {
        throw new Error(`Failed to start cron script backup: ${result.stderr}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to start cron script backup: ${error.message}`);
    }
  }

  async createCronScriptBackup(name, config) {
    try {
      const scriptPath = path.join(this.rootDir, config.script);
      const backupPath = path.join(this.rootDir, `${config.script}.backup`);
      
      if (fs.existsSync(scriptPath)) {
        let scriptContent = fs.readFileSync(scriptPath, 'utf8');
        
        // Modify interval to be less frequent (backup mode)
        scriptContent = scriptContent.replace(
          /INTERVAL_SECONDS=\d+/,
          'INTERVAL_SECONDS=1800' // 30 minutes instead of 5
        );
        
        // Add backup indicator
        scriptContent = scriptContent.replace(
          /# Simple cron-like loop/,
          '# Backup cron-like loop (redundancy mode)'
        );
        
        fs.writeFileSync(backupPath, scriptContent);
        this.log(`Cron script backup created for ${name} at ${backupPath}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to create cron script backup: ${error.message}`);
    }
  }

  async createNodeScriptBackup(name, config) {
    try {
      const scriptPath = path.join(this.rootDir, config.script);
      const backupPath = path.join(this.rootDir, config.backupScript);
      
      if (fs.existsSync(scriptPath)) {
        let scriptContent = fs.readFileSync(scriptPath, 'utf8');
        
        // Add backup wrapper with error handling
        const backupWrapper = `#!/usr/bin/env node
"use strict";

// Backup wrapper for ${name} - Comprehensive Redundancy System
const originalScript = require('./${path.basename(config.script, '.js')}');

// Enhanced error handling and logging
process.on('uncaughtException', (error) => {
  console.error(\`[BACKUP-${name.toUpperCase()}] Uncaught Exception: \${error.message}\`);
  console.error(error.stack);
  // Attempt recovery
  setTimeout(() => {
    console.log(\`[BACKUP-${name.toUpperCase()}] Attempting recovery...\`);
    try {
      if (typeof originalScript === 'function') {
        originalScript();
      }
    } catch (recoveryError) {
      console.error(\`[BACKUP-${name.toUpperCase()}] Recovery failed: \${recoveryError.message}\`);
    }
  }, 5000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(\`[BACKUP-${name.toUpperCase()}] Unhandled Rejection at: \${promise}, reason: \${reason}\`);
});

// Execute original script with backup context
console.log(\`[BACKUP-${name.toUpperCase()}] Starting backup execution...\`);
try {
  if (typeof originalScript === 'function') {
    originalScript();
  } else {
    console.log(\`[BACKUP-${name.toUpperCase()}] Original script is not a function, executing directly\`);
  }
} catch (error) {
  console.error(\`[BACKUP-${name.toUpperCase()}] Execution failed: \${error.message}\`);
  process.exit(1);
}`;
        
        fs.writeFileSync(backupPath, backupWrapper);
        this.log(`Node script backup created for ${name} at ${backupPath}`);
      }
      
    } catch (error) {
      throw new Error(`Failed to create node script backup: ${error.message}`);
    }
  }

  startHealthMonitoring() {
    this.log('Starting comprehensive health monitoring...');
    
    // Monitor all automations every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.performComprehensiveHealthCheck();
    });
    
    // Full system health check every hour
    cron.schedule('0 * * * *', async () => {
      await this.performFullSystemHealthCheck();
    });
    
    // Recovery attempt every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.attemptRecovery();
    });
    
    this.log('Health monitoring started');
  }

  async performComprehensiveHealthCheck() {
    this.log('Performing comprehensive health check...');
    
    for (const [name, config] of this.pm2Automations) {
      try {
        const isHealthy = await config.healthCheck();
        this.healthStatus.set(`pm2-${name}`, {
          status: isHealthy ? 'healthy' : 'unhealthy',
          lastCheck: new Date()
        });
      } catch (error) {
        this.healthStatus.set(`pm2-${name}`, {
          status: 'error',
          lastCheck: new Date(),
          error: error.message
        });
      }
    }
    
    for (const [name, config] of this.githubActions) {
      try {
        const isHealthy = await config.healthCheck();
        this.healthStatus.set(`github-${name}`, {
          status: isHealthy ? 'healthy' : 'unhealthy',
          lastCheck: new Date()
        });
      } catch (error) {
        this.healthStatus.set(`github-${name}`, {
          status: 'error',
          lastCheck: new Date(),
          error: error.message
        });
      }
    }
    
    for (const [name, config] of this.netlifyFunctions) {
      try {
        const isHealthy = await config.healthCheck();
        this.healthStatus.set(`netlify-${name}`, {
          status: isHealthy ? 'healthy' : 'unhealthy',
          lastCheck: new Date()
        });
      } catch (error) {
        this.healthStatus.set(`netlify-${name}`, {
          status: 'error',
          lastCheck: new Date(),
          error: error.message
        });
      }
    }
    
    for (const [name, config] of this.cronScripts) {
      try {
        const isHealthy = await config.healthCheck();
        this.healthStatus.set(`cron-${name}`, {
          status: isHealthy ? 'healthy' : 'unhealthy',
          lastCheck: new Date()
        });
      } catch (error) {
        this.healthStatus.set(`cron-${name}`, {
          status: 'error',
          lastCheck: new Date(),
          error: error.message
        });
      }
    }
    
    for (const [name, config] of this.nodeScripts) {
      try {
        const isHealthy = await config.healthCheck();
        this.healthStatus.set(`node-${name}`, {
          status: isHealthy ? 'healthy' : 'unhealthy',
          lastCheck: new Date()
        });
      } catch (error) {
        this.healthStatus.set(`node-${name}`, {
          status: 'error',
          lastCheck: new Date(),
          error: error.message
        });
      }
    }
    
    this.lastHealthCheck = new Date();
    this.log('Comprehensive health check completed');
  }

  async performFullSystemHealthCheck() {
    this.log('Performing full system health check...');
    
    const healthyCount = Array.from(this.healthStatus.values()).filter(h => h.status === 'healthy').length;
    const totalCount = this.healthStatus.size;
    
    this.log(`System Health: ${healthyCount}/${totalCount} automations healthy`);
    
    // Generate health report
    const healthReport = {
      timestamp: new Date().toISOString(),
      overallHealth: healthyCount / totalCount,
      healthyCount,
      totalCount,
      details: Object.fromEntries(this.healthStatus)
    };
    
    const reportPath = path.join(this.logDir, 'comprehensive-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    
    this.log(`Health report saved to ${reportPath}`);
  }

  async attemptRecovery() {
    this.log('Attempting recovery for unhealthy automations...');
    
    for (const [key, status] of this.healthStatus) {
      if (status.status === 'unhealthy' || status.status === 'error') {
        const [category, name] = key.split('-');
        
        try {
          this.log(`Attempting recovery for ${category} automation: ${name}`);
          
          if (category === 'pm2') {
            const config = this.pm2Automations.get(name);
            if (config) await config.recovery();
          } else if (category === 'github') {
            const config = this.githubActions.get(name);
            if (config) await config.recovery();
          } else if (category === 'netlify') {
            const config = this.netlifyFunctions.get(name);
            if (config) await config.recovery();
          } else if (category === 'cron') {
            const config = this.cronScripts.get(name);
            if (config) await config.recovery();
          } else if (category === 'node') {
            const config = this.nodeScripts.get(name);
            if (config) await config.recovery();
          }
          
          this.log(`Recovery attempted for ${key}`);
          
        } catch (error) {
          this.log(`Recovery failed for ${key}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  // Health check methods
  async checkPM2Process(name) {
    try {
      const result = spawnSync('pm2', ['jlist'], { encoding: 'utf8' });
      if (result.status === 0) {
        const processes = JSON.parse(result.stdout);
        return processes.some(p => p.name === name && p.pm2_env.status === 'online');
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async checkGitHubWorkflow(name) {
    try {
      const workflowPath = path.join(this.rootDir, `.github/workflows/${name}.yml`);
      return fs.existsSync(workflowPath);
    } catch (error) {
      return false;
    }
  }

  async checkNetlifyFunctions() {
    try {
      const manifestPath = path.join(this.rootDir, 'netlify/functions/functions-manifest.json');
      return fs.existsSync(manifestPath);
    } catch (error) {
      return false;
    }
  }

  async checkCronScript(name) {
    try {
      const config = this.cronScripts.get(name);
      if (!config) return false;
      
      const pidFile = path.join(this.rootDir, config.pidFile);
      if (!fs.existsSync(pidFile)) return false;
      
      const pid = fs.readFileSync(pidFile, 'utf8').trim();
      if (!pid) return false;
      
      // Check if process is running
      try {
        process.kill(parseInt(pid), 0);
        return true;
      } catch (error) {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async checkNodeScript(name) {
    try {
      const config = this.nodeScripts.get(name);
      if (!config) return false;
      
      const scriptPath = path.join(this.rootDir, config.script);
      return fs.existsSync(scriptPath);
    } catch (error) {
      return false;
    }
  }

  // Recovery methods
  async recoverPM2Process(name) {
    try {
      const config = this.pm2Automations.get(name);
      if (!config) return;
      
      // Restart the process
      const result = spawnSync('pm2', ['restart', name], { encoding: 'utf8' });
      if (result.status === 0) {
        this.log(`PM2 process ${name} recovered successfully`);
      } else {
        // Try starting backup process
        await this.startPM2BackupProcess(name, config);
      }
    } catch (error) {
      this.log(`Failed to recover PM2 process ${name}: ${error.message}`, 'ERROR');
    }
  }

  async recoverGitHubWorkflow(name) {
    try {
      const config = this.githubActions.get(name);
      if (!config) return;
      
      // Recreate backup workflow
      await this.createGitHubActionsBackup(name, config);
      this.log(`GitHub workflow ${name} recovered successfully`);
    } catch (error) {
      this.log(`Failed to recover GitHub workflow ${name}: ${error.message}`, 'ERROR');
    }
  }

  async recoverNetlifyFunctions() {
    try {
      const config = this.netlifyFunctions.get('functions-manifest');
      if (!config) return;
      
      // Recreate backup functions
      await this.createNetlifyFunctionsBackup('functions-manifest', config);
      this.log('Netlify functions recovered successfully');
    } catch (error) {
      this.log(`Failed to recover Netlify functions: ${error.message}`, 'ERROR');
    }
  }

  async recoverCronScript(name) {
    try {
      const config = this.cronScripts.get(name);
      if (!config) return;
      
      // Restart the cron script
      await this.startCronScriptBackup(name, config);
      this.log(`Cron script ${name} recovered successfully`);
    } catch (error) {
      this.log(`Failed to recover cron script ${name}: ${error.message}`, 'ERROR');
    }
  }

  async recoverNodeScript(name) {
    try {
      const config = this.nodeScripts.get(name);
      if (!config) return;
      
      // Recreate backup script
      await this.createNodeScriptBackup(name, config);
      this.log(`Node script ${name} recovered successfully`);
    } catch (error) {
      this.log(`Failed to recover node script ${name}: ${error.message}`, 'ERROR');
    }
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      lastHealthCheck: this.lastHealthCheck.toISOString(),
      healthStatus: Object.fromEntries(this.healthStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      automationCounts: {
        pm2: this.pm2Automations.size,
        github: this.githubActions.size,
        netlify: this.netlifyFunctions.size,
        cron: this.cronScripts.size,
        node: this.nodeScripts.size
      }
    };
  }

  async stop() {
    this.log('Stopping comprehensive redundancy system...');
    
    // Stop all backup processes
    for (const [name, config] of this.pm2Automations) {
      try {
        spawnSync('pm2', ['stop', config.backupName], { stdio: 'ignore' });
        spawnSync('pm2', ['delete', config.backupName], { stdio: 'ignore' });
      } catch (error) {
        // Ignore errors when stopping
      }
    }
    
    this.log('Comprehensive redundancy system stopped');
  }
}

// Export for use in other modules
module.exports = ComprehensiveRedundancyManager;

// If run directly, start the system
if (require.main === module) {
  const manager = new ComprehensiveRedundancyManager();
  
  process.on('SIGINT', async () => {
    console.log('\nReceived SIGINT, shutting down...');
    await manager.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\nReceived SIGTERM, shutting down...');
    await manager.stop();
    process.exit(0);
  });
  
  manager.startComprehensiveRedundancy().catch(error => {
    console.error('Failed to start comprehensive redundancy system:', error);
    process.exit(1);
  });
}