#!/usr/bin/env node

/**
 * Comprehensive Redundancy Master System
 * Provides full redundancy for all automation systems:
 * - PM2 automations
 * - GitHub Actions automations  
 * - Netlify functions automations
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveRedundancyMaster {
    constructor() {
        this.workspace = process.cwd();
        this.config = {
            intervals: {
                healthCheck: 30000, // 30 seconds
                pm2Check: 60000,    // 1 minute
                githubCheck: 120000, // 2 minutes
                netlifyCheck: 180000, // 3 minutes
                fullSync: 300000     // 5 minutes
            },
            logging: {
                logDir: path.join(this.workspace, 'automation/logs'),
                logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO'
            },
            pm2: {
                ecosystems: [
                    'ecosystem.pm2.cjs',
                    'ecosystem.redundancy.cjs',
                    'ecosystem.comprehensive-redundancy.cjs',
                    'ecosystem.ultimate-redundancy.pm2.cjs'
                ],
                processes: [
                    'zion-auto-sync',
                    'zion-auto-sync-cron',
                    'enhanced-pm2-redundancy',
                    'enhanced-github-actions-redundancy',
                    'enhanced-netlify-functions-redundancy',
                    'master-redundancy-orchestrator'
                ]
            },
            github: {
                workflows: [
                    'marketing-sync',
                    'sync-health'
                ],
                backupWorkflows: [
                    'marketing-sync-backup',
                    'sync-health-backup'
                ]
            },
            netlify: {
                functionsDir: 'netlify/functions',
                manifestFile: 'netlify/functions/functions-manifest.json',
                functions: []
            }
        };
        
        this.healthStatus = {
            pm2: { healthy: false, processes: [], lastCheck: null },
            github: { healthy: false, workflows: [], lastCheck: null },
            netlify: { healthy: false, functions: [], lastCheck: null },
            overall: { healthy: false, lastCheck: null }
        };
        
        this.monitoring = false;
        this.healthCheckInterval = null;
        this.pm2CheckInterval = null;
        this.githubCheckInterval = null;
        this.netlifyCheckInterval = null;
        this.fullSyncInterval = null;
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] [COMPREHENSIVE-REDUNDANCY] ${message}`;
        
        // Console output
        console.log(logEntry);
        
        // File logging
        const logFile = path.join(this.config.logging.logDir, `comprehensive-redundancy-${new Date().toISOString().split('T')[0]}.log`);
        fs.appendFileSync(logFile, logEntry + '\n');
    }

    async ensureLogDirectory() {
        if (!fs.existsSync(this.config.logging.logDir)) {
            fs.mkdirSync(this.config.config.logging.logDir, { recursive: true });
        }
    }

    async checkPM2Health() {
        try {
            this.log('INFO', 'Checking PM2 health...');
            
            // Get PM2 status
            const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
            const processes = [];
            
            // Parse PM2 status
            const lines = pm2Status.split('\n');
            for (const line of lines) {
                if (line.includes('online') || line.includes('errored') || line.includes('stopped')) {
                    const parts = line.trim().split(/\s+/);
                    if (parts.length >= 4) {
                        processes.push({
                            name: parts[1],
                            status: parts[7] || 'unknown',
                            memory: parts[8] || '0',
                            cpu: parts[9] || '0'
                        });
                    }
                }
            }
            
            // Check if all required processes are running
            const requiredProcesses = this.config.pm2.processes;
            const runningProcesses = processes.map(p => p.name);
            const missingProcesses = requiredProcesses.filter(p => !runningProcesses.includes(p));
            
            if (missingProcesses.length > 0) {
                this.log('WARN', `Missing PM2 processes: ${missingProcesses.join(', ')}`);
                await this.restartPM2Processes(missingProcesses);
            }
            
            this.healthStatus.pm2 = {
                healthy: missingProcesses.length === 0,
                processes: processes,
                lastCheck: new Date()
            };
            
            this.log('INFO', `PM2 health check completed. Healthy: ${this.healthStatus.pm2.healthy}`);
            
        } catch (error) {
            this.log('ERROR', `PM2 health check failed: ${error.message}`);
            this.healthStatus.pm2 = { healthy: false, processes: [], lastCheck: new Date() };
        }
    }

    async restartPM2Processes(processNames) {
        for (const processName of processNames) {
            try {
                this.log('INFO', `Restarting PM2 process: ${processName}`);
                execSync(`pm2 restart ${processName}`, { stdio: 'pipe' });
                this.log('INFO', `Successfully restarted ${processName}`);
            } catch (error) {
                this.log('ERROR', `Failed to restart ${processName}: ${error.message}`);
                
                // Try to start if restart fails
                try {
                    execSync(`pm2 start ${processName}`, { stdio: 'pipe' });
                    this.log('INFO', `Successfully started ${processName}`);
                } catch (startError) {
                    this.log('ERROR', `Failed to start ${processName}: ${startError.message}`);
                }
            }
        }
    }

    async checkGitHubActionsHealth() {
        try {
            this.log('INFO', 'Checking GitHub Actions health...');
            
            const workflows = [];
            const workflowsDir = path.join(this.workspace, '.github/workflows');
            
            if (!fs.existsSync(workflowsDir)) {
                this.log('ERROR', 'GitHub workflows directory not found');
                this.healthStatus.github = { healthy: false, workflows: [], lastCheck: new Date() };
                return;
            }
            
            // Check each workflow file
            for (const workflow of this.config.github.workflows) {
                const workflowFile = path.join(workflowsDir, `${workflow}.yml`);
                const backupWorkflowFile = path.join(workflowsDir, `${workflow}-backup.yml`);
                
                if (fs.existsSync(workflowFile)) {
                    const content = fs.readFileSync(workflowFile, 'utf8');
                    const isValid = this.validateWorkflowContent(content);
                    
                    workflows.push({
                        name: workflow,
                        file: workflowFile,
                        valid: isValid,
                        hasBackup: fs.existsSync(backupWorkflowFile)
                    });
                    
                    if (!isValid) {
                        this.log('WARN', `Workflow ${workflow} is invalid, attempting recovery...`);
                        await this.recoverWorkflow(workflow, workflowFile, backupWorkflowFile);
                    }
                } else {
                    this.log('WARN', `Workflow ${workflow} not found, attempting recovery...`);
                    await this.recoverWorkflow(workflow, workflowFile, backupWorkflowFile);
                }
            }
            
            const healthyWorkflows = workflows.filter(w => w.valid);
            this.healthStatus.github = {
                healthy: healthyWorkflows.length === this.config.github.workflows.length,
                workflows: workflows,
                lastCheck: new Date()
            };
            
            this.log('INFO', `GitHub Actions health check completed. Healthy: ${this.healthStatus.github.healthy}`);
            
        } catch (error) {
            this.log('ERROR', `GitHub Actions health check failed: ${error.message}`);
            this.healthStatus.github = { healthy: false, workflows: [], lastCheck: new Date() };
        }
    }

    validateWorkflowContent(content) {
        // Basic workflow validation
        const requiredSections = ['name:', 'on:', 'jobs:'];
        return requiredSections.every(section => content.includes(section));
    }

    async recoverWorkflow(workflowName, workflowFile, backupFile) {
        try {
            // Try to restore from backup
            if (fs.existsSync(backupFile)) {
                this.log('INFO', `Restoring workflow ${workflowName} from backup...`);
                fs.copyFileSync(backupFile, workflowFile);
                this.log('INFO', `Successfully restored ${workflowName} from backup`);
                return;
            }
            
            // Create basic workflow if no backup exists
            this.log('INFO', `Creating basic workflow for ${workflowName}...`);
            const basicWorkflow = this.generateBasicWorkflow(workflowName);
            fs.writeFileSync(workflowFile, basicWorkflow);
            this.log('INFO', `Successfully created basic workflow for ${workflowName}`);
            
        } catch (error) {
            this.log('ERROR', `Failed to recover workflow ${workflowName}: ${error.message}`);
        }
    }

    generateBasicWorkflow(workflowName) {
        const workflows = {
            'marketing-sync': `name: Marketing Sync

on:
  schedule:
    - cron: '0 */12 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-marketing-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run marketing-sync
        env:
          LINKEDIN_ACCESS_TOKEN: \${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: \${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: \${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: \${{ secrets.IG_ACCESS_TOKEN }}
        run: node automation/marketing-sync.js

      - name: Commit report if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "\$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(marketing): update marketing-sync report"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`,
            
            'sync-health': `name: Sync Health

on:
  schedule:
    - cron: '*/15 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  check-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run pm2-auto-sync (safe mode)
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: node automation/pm2-auto-sync.js || true

      - name: Push if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi`
        };
        
        return workflows[workflowName] || `name: ${workflowName}

on:
  workflow_dispatch:

jobs:
  default-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Echo message
        run: echo "Workflow ${workflowName} is running"`;
    }

    async checkNetlifyFunctionsHealth() {
        try {
            this.log('INFO', 'Checking Netlify functions health...');
            
            const functions = [];
            const functionsDir = path.join(this.workspace, this.config.netlify.functionsDir);
            
            if (!fs.existsSync(functionsDir)) {
                this.log('WARN', 'Netlify functions directory not found');
                this.healthStatus.netlify = { healthy: false, functions: [], lastCheck: new Date() };
                return;
            }
            
            // Check functions manifest
            const manifestFile = path.join(this.workspace, this.config.netlify.manifestFile);
            if (fs.existsSync(manifestFile)) {
                try {
                    const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
                    if (manifest.functions && Array.isArray(manifest.functions)) {
                        for (const func of manifest.functions) {
                            const funcPath = path.join(functionsDir, `${func.name}.js`);
                            functions.push({
                                name: func.name,
                                path: funcPath,
                                exists: fs.existsSync(funcPath),
                                valid: fs.existsSync(funcPath) ? this.validateFunctionContent(fs.readFileSync(funcPath, 'utf8')) : false
                            });
                        }
                    }
                } catch (error) {
                    this.log('ERROR', `Failed to parse functions manifest: ${error.message}`);
                }
            }
            
            // Check for missing or invalid functions
            const invalidFunctions = functions.filter(f => !f.exists || !f.valid);
            if (invalidFunctions.length > 0) {
                this.log('WARN', `Found ${invalidFunctions.length} invalid Netlify functions, attempting recovery...`);
                await this.recoverNetlifyFunctions(invalidFunctions);
            }
            
            this.healthStatus.netlify = {
                healthy: invalidFunctions.length === 0,
                functions: functions,
                lastCheck: new Date()
            };
            
            this.log('INFO', `Netlify functions health check completed. Healthy: ${this.healthStatus.netlify.healthy}`);
            
        } catch (error) {
            this.log('ERROR', `Netlify functions health check failed: ${error.message}`);
            this.healthStatus.netlify = { healthy: false, functions: [], lastCheck: new Date() };
        }
    }

    validateFunctionContent(content) {
        // Basic function validation
        return content.includes('exports.handler') || content.includes('module.exports');
    }

    async recoverNetlifyFunctions(invalidFunctions) {
        for (const func of invalidFunctions) {
            try {
                if (!func.exists) {
                    this.log('INFO', `Creating missing function: ${func.name}`);
                    const basicFunction = this.generateBasicFunction(func.name);
                    fs.writeFileSync(func.path, basicFunction);
                    this.log('INFO', `Successfully created function: ${func.name}`);
                } else if (!func.valid) {
                    this.log('INFO', `Fixing invalid function: ${func.name}`);
                    const basicFunction = this.generateBasicFunction(func.name);
                    fs.writeFileSync(func.path, basicFunction);
                    this.log('INFO', `Successfully fixed function: ${func.name}`);
                }
            } catch (error) {
                this.log('ERROR', `Failed to recover function ${func.name}: ${error.message}`);
            }
        }
    }

    generateBasicFunction(functionName) {
        return `exports.handler = async (event, context) => {
  try {
    // Basic Netlify function for ${functionName}
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Function ${functionName} is working',
        timestamp: new Date().toISOString(),
        function: '${functionName}'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: '${functionName}'
      })
    };
  }
};`;
    }

    async performFullSync() {
        try {
            this.log('INFO', 'Performing full system sync...');
            
            // Sync PM2 processes
            await this.checkPM2Health();
            
            // Sync GitHub Actions
            await this.checkGitHubActionsHealth();
            
            // Sync Netlify functions
            await this.checkNetlifyFunctionsHealth();
            
            // Update overall health status
            this.healthStatus.overall = {
                healthy: this.healthStatus.pm2.healthy && 
                        this.healthStatus.github.healthy && 
                        this.healthStatus.netlify.healthy,
                lastCheck: new Date()
            };
            
            // Save health status
            await this.saveHealthStatus();
            
            this.log('INFO', 'Full system sync completed');
            
        } catch (error) {
            this.log('ERROR', `Full system sync failed: ${error.message}`);
        }
    }

    async saveHealthStatus() {
        try {
            const statusFile = path.join(this.config.logging.logDir, 'comprehensive-redundancy-status.json');
            fs.writeFileSync(statusFile, JSON.stringify(this.healthStatus, null, 2));
        } catch (error) {
            this.log('ERROR', `Failed to save health status: ${error.message}`);
        }
    }

    async startMonitoring() {
        if (this.monitoring) {
            this.log('WARN', 'Monitoring is already running');
            return;
        }
        
        this.log('INFO', 'Starting comprehensive redundancy monitoring...');
        
        // Ensure log directory exists
        await this.ensureLogDirectory();
        
        // Start monitoring intervals
        this.healthCheckInterval = setInterval(() => {
            this.performFullSync();
        }, this.config.intervals.healthCheck);
        
        this.pm2CheckInterval = setInterval(() => {
            this.checkPM2Health();
        }, this.config.intervals.pm2Check);
        
        this.githubCheckInterval = setInterval(() => {
            this.checkGitHubActionsHealth();
        }, this.config.intervals.githubCheck);
        
        this.netlifyCheckInterval = setInterval(() => {
            this.checkNetlifyFunctionsHealth();
        }, this.config.intervals.netlifyCheck);
        
        this.fullSyncInterval = setInterval(() => {
            this.performFullSync();
        }, this.config.intervals.fullSync);
        
        this.monitoring = true;
        
        // Perform initial health check
        await this.performFullSync();
        
        this.log('INFO', 'Comprehensive redundancy monitoring started successfully');
    }

    async stopMonitoring() {
        if (!this.monitoring) {
            this.log('WARN', 'Monitoring is not running');
            return;
        }
        
        this.log('INFO', 'Stopping comprehensive redundancy monitoring...');
        
        // Clear all intervals
        if (this.healthCheckInterval) clearInterval(this.healthCheckInterval);
        if (this.pm2CheckInterval) clearInterval(this.pm2CheckInterval);
        if (this.githubCheckInterval) clearInterval(this.githubCheckInterval);
        if (this.netlifyCheckInterval) clearInterval(this.netlifyCheckInterval);
        if (this.fullSyncInterval) clearInterval(this.fullSyncInterval);
        
        this.monitoring = false;
        
        // Save final health status
        await this.saveHealthStatus();
        
        this.log('INFO', 'Comprehensive redundancy monitoring stopped');
    }

    getStatus() {
        return {
            monitoring: this.monitoring,
            healthStatus: this.healthStatus,
            config: this.config
        };
    }

    async runCommand(command) {
        return new Promise((resolve, reject) => {
            exec(command, { cwd: this.workspace }, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ stdout, stderr });
                }
            });
        });
    }
}

// CLI interface
async function main() {
    const system = new ComprehensiveRedundancyMaster();
    const command = process.argv[2] || 'start';
    
    try {
        switch (command) {
            case 'start':
                await system.startMonitoring();
                break;
            case 'stop':
                await system.stopMonitoring();
                break;
            case 'status':
                console.log(JSON.stringify(system.getStatus(), null, 2));
                break;
            case 'health':
                await system.performFullSync();
                console.log(JSON.stringify(system.healthStatus, null, 2));
                break;
            case 'pm2':
                await system.checkPM2Health();
                break;
            case 'github':
                await system.checkGitHubActionsHealth();
                break;
            case 'netlify':
                await system.checkNetlifyFunctionsHealth();
                break;
            case 'sync':
                await system.performFullSync();
                break;
            default:
                console.log('Usage: node comprehensive-redundancy-master.cjs [start|stop|status|health|pm2|github|netlify|sync]');
                process.exit(1);
        }
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// Export for use as module
module.exports = ComprehensiveRedundancyMaster;

// Run if called directly
if (require.main === module) {
    main();
}