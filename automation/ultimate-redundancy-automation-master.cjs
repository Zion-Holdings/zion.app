#!/usr/bin/env node

/**
 * Ultimate Redundancy Automation Master
 * Provides comprehensive redundancy for all automation systems:
 * - PM2 automations
 * - GitHub Actions automations
 * - Netlify functions automations
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancyAutomationMaster {
    constructor() {
        this.workspaceDir = process.cwd();
        this.logDir = path.join(this.workspaceDir, 'automation', 'logs');
        this.statusFile = path.join(this.workspaceDir, 'automation', 'ultimate-redundancy-status.json');
        this.config = this.loadConfig();
        this.isRunning = false;
        this.processes = new Map();
        
        // Ensure log directory exists
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
    }

    loadConfig() {
        const configPath = path.join(this.workspaceDir, 'automation', 'redundancy-config.json');
        if (fs.existsSync(configPath)) {
            try {
                return JSON.parse(fs.readFileSync(configPath, 'utf8'));
            } catch (error) {
                console.warn('Failed to load config, using defaults');
            }
        }
        
        return {
            pm2: {
                enabled: true,
                checkInterval: 30000, // 30 seconds
                restartThreshold: 3,
                maxRestarts: 5
            },
            githubActions: {
                enabled: true,
                checkInterval: 60000, // 1 minute
                backupInterval: 300000, // 5 minutes
                maxBackups: 10
            },
            netlifyFunctions: {
                enabled: true,
                checkInterval: 45000, // 45 seconds
                healthCheckInterval: 120000, // 2 minutes
                maxFailures: 3
            },
            monitoring: {
                enabled: true,
                logLevel: 'info',
                alertThreshold: 5
            }
        };
    }

    log(level, message, data = null) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            data
        };
        
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
        
        // Write to log file
        const logFile = path.join(this.logDir, 'ultimate-redundancy.log');
        fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
        
        // Update status file
        this.updateStatus(logEntry);
    }

    updateStatus(logEntry) {
        try {
            let status = {};
            if (fs.existsSync(this.statusFile)) {
                status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
            }
            
            status.lastUpdate = new Date().toISOString();
            status.lastLog = logEntry;
            status.isRunning = this.isRunning;
            status.processCount = this.processes.size;
            
            if (!status.logs) status.logs = [];
            status.logs.push(logEntry);
            
            // Keep only last 100 logs
            if (status.logs.length > 100) {
                status.logs = status.logs.slice(-100);
            }
            
            fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
        } catch (error) {
            console.warn('Failed to update status file:', error.message);
        }
    }

    async startPM2Redundancy() {
        if (!this.config.pm2.enabled) {
            this.log('info', 'PM2 redundancy disabled in config');
            return;
        }

        this.log('info', 'Starting PM2 redundancy systems...');
        
        try {
            // Check if PM2 is available
            execSync('pm2 --version', { stdio: 'pipe' });
            
            // Start core PM2 ecosystem
            if (fs.existsSync(path.join(this.workspaceDir, 'ecosystem.pm2.cjs'))) {
                execSync('pm2 start ecosystem.pm2.cjs --update-env', { 
                    cwd: this.workspaceDir, 
                    stdio: 'pipe' 
                });
                this.log('info', 'Core PM2 ecosystem started');
            }
            
            // Start redundancy ecosystem
            if (fs.existsSync(path.join(this.workspaceDir, 'ecosystem.redundancy.cjs'))) {
                execSync('pm2 start ecosystem.redundancy.cjs --update-env', { 
                    cwd: this.workspaceDir, 
                    stdio: 'pipe' 
                });
                this.log('info', 'Redundancy PM2 ecosystem started');
            }
            
            // Start comprehensive redundancy ecosystem
            if (fs.existsSync(path.join(this.workspaceDir, 'ecosystem.comprehensive-redundancy.cjs'))) {
                execSync('pm2 start ecosystem.comprehensive-redundancy.cjs --update-env', { 
                    cwd: this.workspaceDir, 
                    stdio: 'pipe' 
                });
                this.log('info', 'Comprehensive redundancy PM2 ecosystem started');
            }
            
            // Start ultimate redundancy ecosystem
            if (fs.existsSync(path.join(this.workspaceDir, 'ecosystem.ultimate-redundancy.pm2.cjs'))) {
                execSync('pm2 start ecosystem.ultimate-redundancy.pm2.cjs --update-env', { 
                    cwd: this.workspaceDir, 
                    stdio: 'pipe' 
                });
                this.log('info', 'Ultimate redundancy PM2 ecosystem started');
            }
            
            // Configure PM2 logrotate
            execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
            execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
            execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
            execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
            execSync('pm2 set pm2-logrotate:workerInterval 60', { stdio: 'pipe' });
            execSync('pm2 set pm2-logrotate:rotateInterval "0 0 * * *"', { stdio: 'pipe' });
            
            // Save PM2 configuration
            execSync('pm2 save', { stdio: 'pipe' });
            
            this.log('info', 'PM2 redundancy systems started successfully');
            
            // Start PM2 monitoring
            this.startPM2Monitoring();
            
        } catch (error) {
            this.log('error', `Failed to start PM2 redundancy: ${error.message}`);
        }
    }

    startPM2Monitoring() {
        const interval = setInterval(async () => {
            try {
                const status = execSync('pm2 status --no-daemon', { 
                    cwd: this.workspaceDir, 
                    encoding: 'utf8' 
                });
                
                // Check for stopped processes
                if (status.includes('stopped') || status.includes('errored')) {
                    this.log('warn', 'Detected stopped PM2 processes, attempting restart');
                    execSync('pm2 restart all', { cwd: this.workspaceDir, stdio: 'pipe' });
                }
                
                // Check for memory/CPU issues
                const monit = execSync('pm2 monit --no-daemon', { 
                    cwd: this.workspaceDir, 
                    encoding: 'utf8' 
                });
                
                if (monit.includes('memory') && monit.includes('100%')) {
                    this.log('warn', 'High memory usage detected, restarting processes');
                    execSync('pm2 restart all', { cwd: this.workspaceDir, stdio: 'pipe' });
                }
                
            } catch (error) {
                this.log('error', `PM2 monitoring error: ${error.message}`);
            }
        }, this.config.pm2.checkInterval);
        
        this.processes.set('pm2-monitoring', interval);
    }

    async startGitHubActionsRedundancy() {
        if (!this.config.githubActions.enabled) {
            this.log('info', 'GitHub Actions redundancy disabled in config');
            return;
        }

        this.log('info', 'Starting GitHub Actions redundancy systems...');
        
        try {
            // Create backup workflows directory
            const backupDir = path.join(this.workspaceDir, '.github', 'workflows', 'backups');
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            // Backup existing workflows
            const workflowsDir = path.join(this.workspaceDir, '.github', 'workflows');
            const workflowFiles = fs.readdirSync(workflowsDir)
                .filter(file => file.endsWith('.yml') && !file.includes('backup'));
            
            for (const workflow of workflowFiles) {
                const sourcePath = path.join(workflowsDir, workflow);
                const backupPath = path.join(backupDir, `${workflow.replace('.yml', '')}-backup.yml`);
                
                if (!fs.existsSync(backupPath)) {
                    fs.copyFileSync(sourcePath, backupPath);
                    this.log('info', `Backed up workflow: ${workflow}`);
                }
            }
            
            // Start GitHub Actions monitoring
            this.startGitHubActionsMonitoring();
            
            this.log('info', 'GitHub Actions redundancy systems started successfully');
            
        } catch (error) {
            this.log('error', `Failed to start GitHub Actions redundancy: ${error.message}`);
        }
    }

    startGitHubActionsMonitoring() {
        const interval = setInterval(async () => {
            try {
                // Check workflow health
                const workflowsDir = path.join(this.workspaceDir, '.github', 'workflows');
                const workflowFiles = fs.readdirSync(workflowsDir)
                    .filter(file => file.endsWith('.yml') && !file.includes('backup'));
                
                for (const workflow of workflowFiles) {
                    const workflowPath = path.join(workflowsDir, workflow);
                    const content = fs.readFileSync(workflowPath, 'utf8');
                    
                    // Validate workflow syntax
                    if (!content.includes('name:') || !content.includes('on:')) {
                        this.log('warn', `Invalid workflow detected: ${workflow}`);
                        
                        // Restore from backup
                        const backupPath = path.join(this.workspaceDir, '.github', 'workflows', 'backups', 
                            `${workflow.replace('.yml', '')}-backup.yml`);
                        
                        if (fs.existsSync(backupPath)) {
                            fs.copyFileSync(backupPath, workflowPath);
                            this.log('info', `Restored workflow from backup: ${workflow}`);
                        }
                    }
                }
                
                // Check for workflow conflicts
                const gitStatus = execSync('git status --porcelain', { 
                    cwd: this.workspaceDir, 
                    encoding: 'utf8' 
                });
                
                if (gitStatus.includes('.github/workflows/')) {
                    this.log('info', 'Workflow changes detected, committing...');
                    execSync('git add .github/workflows/', { cwd: this.workspaceDir, stdio: 'pipe' });
                    execSync('git commit -m "ci(auto-heal): normalize workflows [skip ci]"', { 
                        cwd: this.workspaceDir, 
                        stdio: 'pipe' 
                    });
                }
                
            } catch (error) {
                this.log('error', `GitHub Actions monitoring error: ${error.message}`);
            }
        }, this.config.githubActions.checkInterval);
        
        this.processes.set('github-actions-monitoring', interval);
    }

    async startNetlifyFunctionsRedundancy() {
        if (!this.config.netlifyFunctions.enabled) {
            this.log('info', 'Netlify functions redundancy disabled in config');
            return;
        }

        this.log('info', 'Starting Netlify functions redundancy systems...');
        
        try {
            // Check Netlify functions directory
            const functionsDir = path.join(this.workspaceDir, 'netlify', 'functions');
            if (!fs.existsSync(functionsDir)) {
                fs.mkdirSync(functionsDir, { recursive: true });
            }
            
            // Generate functions manifest if it doesn't exist
            const manifestPath = path.join(functionsDir, 'functions-manifest.json');
            if (!fs.existsSync(manifestPath)) {
                this.log('info', 'Generating Netlify functions manifest...');
                execSync('npm run netlify:manifest', { 
                    cwd: this.workspaceDir, 
                    stdio: 'pipe' 
                });
            }
            
            // Start Netlify functions monitoring
            this.startNetlifyFunctionsMonitoring();
            
            this.log('info', 'Netlify functions redundancy systems started successfully');
            
        } catch (error) {
            this.log('error', `Failed to start Netlify functions redundancy: ${error.message}`);
        }
    }

    startNetlifyFunctionsMonitoring() {
        const interval = setInterval(async () => {
            try {
                // Check functions manifest
                const manifestPath = path.join(this.workspaceDir, 'netlify', 'functions', 'functions-manifest.json');
                if (fs.existsSync(manifestPath)) {
                    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                    const lastGenerated = new Date(manifest.generatedAt);
                    const now = new Date();
                    
                    // Regenerate manifest if older than 1 hour
                    if (now - lastGenerated > 60 * 60 * 1000) {
                        this.log('info', 'Regenerating Netlify functions manifest...');
                        execSync('npm run netlify:manifest', { 
                            cwd: this.workspaceDir, 
                            stdio: 'pipe' 
                        });
                    }
                }
                
                // Check for function files
                const functionsDir = path.join(this.workspaceDir, 'netlify', 'functions');
                const functionFiles = fs.readdirSync(functionsDir)
                    .filter(file => file.endsWith('.js') || file.endsWith('.cjs'));
                
                if (functionFiles.length === 0) {
                    this.log('warn', 'No Netlify functions found, checking for issues...');
                }
                
            } catch (error) {
                this.log('error', `Netlify functions monitoring error: ${error.message}`);
            }
        }, this.config.netlifyFunctions.checkInterval);
        
        this.processes.set('netlify-functions-monitoring', interval);
    }

    startHealthMonitoring() {
        if (!this.config.monitoring.enabled) {
            return;
        }

        const interval = setInterval(async () => {
            try {
                // Check system health
                const health = {
                    timestamp: new Date().toISOString(),
                    pm2: this.checkPM2Health(),
                    githubActions: this.checkGitHubActionsHealth(),
                    netlifyFunctions: this.checkNetlifyFunctionsHealth(),
                    system: this.checkSystemHealth()
                };
                
                // Log health status
                const healthy = Object.values(health).every(h => h.status === 'healthy');
                if (!healthy) {
                    this.log('warn', 'System health check failed', health);
                } else {
                    this.log('debug', 'System health check passed');
                }
                
                // Update status with health info
                this.updateHealthStatus(health);
                
            } catch (error) {
                this.log('error', `Health monitoring error: ${error.message}`);
            }
        }, this.config.netlifyFunctions.healthCheckInterval);
        
        this.processes.set('health-monitoring', interval);
    }

    checkPM2Health() {
        try {
            const status = execSync('pm2 status --no-daemon', { 
                cwd: this.workspaceDir, 
                encoding: 'utf8' 
            });
            
            const running = (status.match(/online/g) || []).length;
            const stopped = (status.match(/stopped/g) || []).length;
            const errored = (status.match(/errored/g) || []).length;
            
            return {
                status: errored > 0 ? 'error' : stopped > 0 ? 'warning' : 'healthy',
                running,
                stopped,
                errored,
                total: running + stopped + errored
            };
        } catch (error) {
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    checkGitHubActionsHealth() {
        try {
            const workflowsDir = path.join(this.workspaceDir, '.github', 'workflows');
            const workflowFiles = fs.readdirSync(workflowsDir)
                .filter(file => file.endsWith('.yml') && !file.includes('backup'));
            
            const backupDir = path.join(workflowsDir, 'backups');
            const backupFiles = fs.existsSync(backupDir) ? 
                fs.readdirSync(backupDir).filter(file => file.endsWith('.yml')) : [];
            
            return {
                status: 'healthy',
                workflows: workflowFiles.length,
                backups: backupFiles.length,
                hasBackups: backupFiles.length > 0
            };
        } catch (error) {
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    checkNetlifyFunctionsHealth() {
        try {
            const manifestPath = path.join(this.workspaceDir, 'netlify', 'functions', 'functions-manifest.json');
            if (!fs.existsSync(manifestPath)) {
                return {
                    status: 'warning',
                    error: 'No functions manifest found'
                };
            }
            
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            const lastGenerated = new Date(manifest.generatedAt);
            const now = new Date();
            const ageHours = (now - lastGenerated) / (1000 * 60 * 60);
            
            return {
                status: ageHours > 24 ? 'warning' : 'healthy',
                functions: manifest.functions.length,
                lastGenerated: manifest.generatedAt,
                ageHours: Math.round(ageHours * 100) / 100
            };
        } catch (error) {
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    checkSystemHealth() {
        try {
            const memory = process.memoryUsage();
            const uptime = process.uptime();
            
            return {
                status: 'healthy',
                memory: {
                    rss: Math.round(memory.rss / 1024 / 1024),
                    heapUsed: Math.round(memory.heapUsed / 1024 / 1024),
                    heapTotal: Math.round(memory.heapTotal / 1024 / 1024)
                },
                uptime: Math.round(uptime),
                processCount: this.processes.size
            };
        } catch (error) {
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    updateHealthStatus(health) {
        try {
            let status = {};
            if (fs.existsSync(this.statusFile)) {
                status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
            }
            
            status.health = health;
            status.lastHealthCheck = new Date().toISOString();
            
            fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
        } catch (error) {
            console.warn('Failed to update health status:', error.message);
        }
    }

    async start() {
        if (this.isRunning) {
            this.log('warn', 'Ultimate redundancy automation master is already running');
            return;
        }

        this.log('info', 'Starting Ultimate Redundancy Automation Master...');
        this.isRunning = true;

        try {
            // Start all redundancy systems
            await this.startPM2Redundancy();
            await this.startGitHubActionsRedundancy();
            await this.startNetlifyFunctionsRedundancy();
            
            // Start health monitoring
            this.startHealthMonitoring();
            
            this.log('info', 'Ultimate Redundancy Automation Master started successfully');
            
            // Keep the process alive
            process.on('SIGINT', () => this.stop());
            process.on('SIGTERM', () => this.stop());
            
        } catch (error) {
            this.log('error', `Failed to start: ${error.message}`);
            this.stop();
        }
    }

    stop() {
        this.log('info', 'Stopping Ultimate Redundancy Automation Master...');
        this.isRunning = false;
        
        // Clear all intervals
        for (const [name, interval] of this.processes) {
            clearInterval(interval);
            this.log('info', `Stopped process: ${name}`);
        }
        this.processes.clear();
        
        this.log('info', 'Ultimate Redundancy Automation Master stopped');
        process.exit(0);
    }

    getStatus() {
        try {
            if (fs.existsSync(this.statusFile)) {
                return JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
            }
        } catch (error) {
            console.warn('Failed to read status file:', error.message);
        }
        
        return {
            isRunning: this.isRunning,
            processCount: this.processes.size,
            lastUpdate: new Date().toISOString()
        };
    }
}

// CLI interface
if (require.main === module) {
    const master = new UltimateRedundancyAutomationMaster();
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            master.start();
            break;
        case 'stop':
            master.stop();
            break;
        case 'status':
            console.log(JSON.stringify(master.getStatus(), null, 2));
            break;
        case 'health':
            console.log(JSON.stringify({
                pm2: master.checkPM2Health(),
                githubActions: master.checkGitHubActionsHealth(),
                netlifyFunctions: master.checkNetlifyFunctionsHealth(),
                system: master.checkSystemHealth()
            }, null, 2));
            break;
        default:
            console.log('Usage: node ultimate-redundancy-automation-master.cjs [start|stop|status|health]');
            process.exit(1);
    }
}

module.exports = UltimateRedundancyAutomationMaster;