#!/usr/bin/env node

/**
 * Comprehensive Redundancy System v3
 * Provides redundancy for all PM2 automations, GitHub Actions automations, and Netlify functions automations
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveRedundancyV3 {
    constructor() {
        this.workspaceDir = process.cwd();
        this.logDir = path.join(this.workspaceDir, 'automation', 'logs');
        this.configFile = path.join(this.workspaceDir, 'automation', 'redundancy-config.json');
        this.statusFile = path.join(this.workspaceDir, 'automation', 'comprehensive-redundancy-v3-status.json');
        this.isRunning = false;
        this.healthScore = 100;
        this.lastHealthCheck = Date.now();
        
        // Ensure log directory exists
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
        
        this.loadConfig();
        this.initializeStatus();
    }

    loadConfig() {
        try {
            if (fs.existsSync(this.configFile)) {
                this.config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
            } else {
                this.config = this.getDefaultConfig();
                this.saveConfig();
            }
        } catch (error) {
            console.error('Error loading config:', error);
            this.config = this.getDefaultConfig();
        }
    }

    getDefaultConfig() {
        return {
            version: '3.0.0',
            healthCheckInterval: 30000, // 30 seconds
            pm2Redundancy: {
                enabled: true,
                checkInterval: 60000, // 1 minute
                maxRestartAttempts: 5,
                autoRecovery: true
            },
            githubActionsRedundancy: {
                enabled: true,
                checkInterval: 300000, // 5 minutes
                maxFailureThreshold: 3,
                autoTrigger: true,
                backupWorkflows: true
            },
            netlifyFunctionsRedundancy: {
                enabled: true,
                checkInterval: 600000, // 10 minutes
                maxFailureThreshold: 2,
                autoRegenerate: true,
                functionValidation: true
            },
            monitoring: {
                enabled: true,
                dashboardPort: 3002,
                metricsCollection: true,
                alerting: true
            },
            logging: {
                level: 'info',
                maxLogSize: '10M',
                maxLogFiles: 30
            }
        };
    }

    saveConfig() {
        try {
            fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
        } catch (error) {
            console.error('Error saving config:', error);
        }
    }

    initializeStatus() {
        this.status = {
            startTime: Date.now(),
            lastUpdate: Date.now(),
            healthScore: 100,
            pm2Status: 'unknown',
            githubActionsStatus: 'unknown',
            netlifyFunctionsStatus: 'unknown',
            totalChecks: 0,
            successfulChecks: 0,
            failedChecks: 0,
            lastError: null,
            components: {
                pm2: { status: 'unknown', lastCheck: 0, errors: [] },
                githubActions: { status: 'unknown', lastCheck: 0, errors: [] },
                netlifyFunctions: { status: 'unknown', lastCheck: 0, errors: [] }
            }
        };
        this.saveStatus();
    }

    saveStatus() {
        try {
            fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
        } catch (error) {
            console.error('Error saving status:', error);
        }
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
        
        // Save to log file
        const logFile = path.join(this.logDir, 'comprehensive-redundancy-v3.log');
        try {
            fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
        } catch (error) {
            console.error('Error writing to log file:', error);
        }
    }

    async executeCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            exec(command, { 
                cwd: this.workspaceDir,
                maxBuffer: 1024 * 1024, // 1MB
                ...options 
            }, (error, stdout, stderr) => {
                if (error) {
                    reject({ error, stdout, stderr });
                } else {
                    resolve({ stdout, stderr });
                }
            });
        });
    }

    parsePM2Status(output) {
        try {
            const lines = output.split('\n');
            const processes = [];
            
            for (const line of lines) {
                // Skip header lines and empty lines
                if (line.includes('┌─') || line.includes('─┐') || line.includes('│') || line.includes('─┘') || line.includes('└─') || !line.trim()) {
                    continue;
                }
                
                // Parse process line
                const parts = line.trim().split(/\s+/);
                if (parts.length >= 4) {
                    const process = {
                        name: parts[0],
                        pm2_env: {
                            status: parts[3] === 'online' ? 'online' : 'stopped'
                        }
                    };
                    processes.push(process);
                }
            }
            
            return processes;
        } catch (error) {
            this.log('warn', 'Failed to parse PM2 status, returning empty array');
            return [];
        }
    }

    async checkPM2Redundancy() {
        try {
            this.log('info', 'Checking PM2 redundancy...');
            
            // Check if PM2 is running
            const pm2Status = await this.executeCommand('pm2 status');
            // Parse PM2 status output manually since --json flag might not be available
            const status = this.parsePM2Status(pm2Status.stdout);
            
            let pm2Health = 100;
            let errors = [];
            
            // Check core PM2 processes
            const coreProcesses = ['zion-auto-sync', 'zion-auto-sync-cron'];
            const redundancyProcesses = [
                'ultimate-pm2-redundancy-manager',
                'ultimate-github-redundancy-manager',
                'ultimate-netlify-redundancy-manager',
                'ultimate-redundancy-master'
            ];
            
            // Check core processes
            for (const processName of coreProcesses) {
                const process = status.find(p => p.name === processName);
                if (!process) {
                    errors.push(`Core process ${processName} not found`);
                    pm2Health -= 25;
                } else if (process.pm2_env.status !== 'online') {
                    errors.push(`Core process ${processName} is ${process.pm2_env.status}`);
                    pm2Health -= 20;
                }
            }
            
            // Check redundancy processes
            for (const processName of redundancyProcesses) {
                const process = status.find(p => p.name === processName);
                if (!process) {
                    errors.push(`Redundancy process ${processName} not found`);
                    pm2Health -= 15;
                } else if (process.pm2_env.status !== 'online') {
                    errors.push(`Redundancy process ${processName} is ${process.pm2_env.status}`);
                    pm2Health -= 10;
                }
            }
            
            // Ensure health score doesn't go below 0
            pm2Health = Math.max(0, pm2Health);
            
            // Ensure PM2 logrotate is configured
            try {
                const logrotateStatus = await this.executeCommand('pm2 list | grep pm2-logrotate');
                if (!logrotateStatus.stdout.includes('pm2-logrotate')) {
                    this.log('warn', 'PM2 logrotate not found, installing...');
                    await this.executeCommand('pm2 install pm2-logrotate');
                }
            } catch (error) {
                this.log('warn', 'PM2 logrotate check failed:', error);
            }
            
            this.status.components.pm2 = {
                status: pm2Health >= 80 ? 'healthy' : pm2Health >= 50 ? 'warning' : 'critical',
                lastCheck: Date.now(),
                errors,
                healthScore: pm2Health
            };
            
            this.log('info', `PM2 redundancy check completed. Health: ${pm2Health}%`);
            return pm2Health;
            
        } catch (error) {
            this.log('error', 'PM2 redundancy check failed:', error);
            this.status.components.pm2 = {
                status: 'error',
                lastCheck: Date.now(),
                errors: [error.message],
                healthScore: 0
            };
            return 0;
        }
    }

    async checkGitHubActionsRedundancy() {
        try {
            this.log('info', 'Checking GitHub Actions redundancy...');
            
            let githubHealth = 100;
            let errors = [];
            
            // Check if workflows directory exists
            const workflowsDir = path.join(this.workspaceDir, '.github', 'workflows');
            if (!fs.existsSync(workflowsDir)) {
                errors.push('GitHub workflows directory not found');
                githubHealth -= 50;
            } else {
                // Check for backup workflows
                const workflowFiles = fs.readdirSync(workflowsDir);
                const hasBackups = workflowFiles.some(file => file.includes('backup'));
                
                if (!hasBackups) {
                    errors.push('No backup workflows found');
                    githubHealth -= 20;
                }
                
                // Check if main workflows exist
                const requiredWorkflows = ['marketing-sync.yml', 'sync-health.yml'];
                for (const workflow of requiredWorkflows) {
                    if (!workflowFiles.includes(workflow)) {
                        errors.push(`Required workflow ${workflow} not found`);
                        githubHealth -= 25;
                    }
                }
            }
            
            // Check if GitHub Actions redundancy manager is running
            try {
                const pm2Status = await this.executeCommand('pm2 status');
                const status = this.parsePM2Status(pm2Status.stdout);
                const githubManager = status.find(p => p.name === 'ultimate-github-redundancy-manager');
                
                if (!githubManager) {
                    errors.push('GitHub Actions redundancy manager not running');
                    githubHealth -= 30;
                } else if (githubManager.pm2_env.status !== 'online') {
                    errors.push('GitHub Actions redundancy manager is not online');
                    githubHealth -= 20;
                }
            } catch (error) {
                errors.push(`Failed to check GitHub Actions manager: ${error.message}`);
                githubHealth -= 20;
            }
            
            this.status.components.githubActions = {
                status: githubHealth >= 80 ? 'healthy' : githubHealth >= 50 ? 'warning' : 'critical',
                lastCheck: Date.now(),
                errors,
                healthScore: githubHealth
            };
            
            this.log('info', `GitHub Actions redundancy check completed. Health: ${githubHealth}%`);
            return githubHealth;
            
        } catch (error) {
            this.log('error', 'GitHub Actions redundancy check failed:', error);
            this.status.components.githubActions = {
                status: 'error',
                lastCheck: Date.now(),
                errors: [error.message],
                healthScore: 0
            };
            return 0;
        }
    }

    async checkNetlifyFunctionsRedundancy() {
        try {
            this.log('info', 'Checking Netlify functions redundancy...');
            
            let netlifyHealth = 100;
            let errors = [];
            
            // Check if Netlify functions directory exists
            const netlifyDir = path.join(this.workspaceDir, 'netlify', 'functions');
            if (!fs.existsSync(netlifyDir)) {
                errors.push('Netlify functions directory not found');
                netlifyHealth -= 50;
            } else {
                // Check functions manifest
                const manifestFile = path.join(netlifyDir, 'functions-manifest.json');
                if (!fs.existsSync(manifestFile)) {
                    errors.push('Netlify functions manifest not found');
                    netlifyHealth -= 30;
                } else {
                    try {
                        const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
                        if (!manifest.functions || manifest.functions.length === 0) {
                            errors.push('No functions found in manifest');
                            netlifyHealth -= 20;
                        }
                    } catch (error) {
                        errors.push('Failed to parse functions manifest');
                        netlifyHealth -= 20;
                    }
                }
            }
            
            // Check if Netlify functions redundancy manager is running
            try {
                const pm2Status = await this.executeCommand('pm2 status');
                const status = this.parsePM2Status(pm2Status.stdout);
                const netlifyManager = status.find(p => p.name === 'ultimate-netlify-redundancy-manager');
                
                if (!netlifyManager) {
                    errors.push('Netlify functions redundancy manager not running');
                    netlifyHealth -= 30;
                } else if (netlifyManager.pm2_env.status !== 'online') {
                    errors.push('Netlify functions redundancy manager is not online');
                    netlifyHealth -= 20;
                }
            } catch (error) {
                errors.push(`Failed to check Netlify functions manager: ${error.message}`);
                netlifyHealth -= 20;
            }
            
            this.status.components.netlifyFunctions = {
                status: netlifyHealth >= 80 ? 'healthy' : netlifyHealth >= 50 ? 'warning' : 'critical',
                lastCheck: Date.now(),
                errors,
                healthScore: netlifyHealth
            };
            
            this.log('info', `Netlify functions redundancy check completed. Health: ${netlifyHealth}%`);
            return netlifyHealth;
            
        } catch (error) {
            this.log('error', 'Netlify functions redundancy check failed:', error);
            this.status.components.netlifyFunctions = {
                status: 'error',
                lastCheck: Date.now(),
                errors: [error.message],
                healthScore: 0
            };
            return 0;
        }
    }

    async performHealthCheck() {
        try {
            this.log('info', 'Starting comprehensive health check...');
            
            const pm2Health = await this.checkPM2Redundancy();
            const githubHealth = await this.checkGitHubActionsRedundancy();
            const netlifyHealth = await this.checkNetlifyFunctionsRedundancy();
            
            // Calculate overall health score
            this.healthScore = Math.round((pm2Health + githubHealth + netlifyHealth) / 3);
            this.lastHealthCheck = Date.now();
            
            // Update status
            this.status.healthScore = this.healthScore;
            this.status.lastUpdate = Date.now();
            this.status.totalChecks++;
            
            if (this.healthScore >= 80) {
                this.status.successfulChecks++;
                this.log('info', `Health check completed successfully. Overall health: ${this.healthScore}%`);
            } else {
                this.status.failedChecks++;
                this.log('warn', `Health check completed with warnings. Overall health: ${this.healthScore}%`);
            }
            
            this.saveStatus();
            
            // Trigger recovery if needed (non-blocking)
            if (this.healthScore < 50) {
                this.log('warn', 'Recovery needed, triggering in background...');
                // Run recovery in background to avoid blocking startup
                setImmediate(() => {
                    this.triggerRecovery().catch(error => {
                        this.log('error', 'Recovery procedures failed:', error);
                    });
                });
            }
            
        } catch (error) {
            this.log('error', 'Health check failed:', error);
            this.status.lastError = error.message;
            this.status.failedChecks++;
            this.saveStatus();
        }
    }

    async triggerRecovery() {
        try {
            this.log('warn', 'Triggering recovery procedures...');
            
            // Restart PM2 processes if needed
            if (this.status.components.pm2.healthScore < 50) {
                this.log('info', 'Restarting PM2 redundancy system...');
                try {
                    await this.executeCommand('npm run redundancy:ultimate:restart');
                } catch (error) {
                    this.log('warn', 'PM2 restart failed, trying alternative...');
                    try {
                        await this.executeCommand('pm2 restart all');
                    } catch (pm2Error) {
                        this.log('error', 'Alternative PM2 restart also failed:', pm2Error);
                    }
                }
            }
            
            // Regenerate GitHub Actions if needed
            if (this.status.components.githubActions.healthScore < 50) {
                this.log('info', 'Regenerating GitHub Actions...');
                try {
                    await this.executeCommand('npm run gh:auto-heal');
                } catch (error) {
                    this.log('warn', 'GitHub Actions recovery failed:', error);
                }
            }
            
            // Regenerate Netlify functions if needed
            if (this.status.components.netlifyFunctions.healthScore < 50) {
                this.log('info', 'Regenerating Netlify functions...');
                try {
                    await this.executeCommand('npm run netlify:manifest');
                } catch (error) {
                    this.log('warn', 'Netlify functions recovery failed:', error);
                }
            }
            
            this.log('info', 'Recovery procedures completed');
            
        } catch (error) {
            this.log('error', 'Recovery procedures failed:', error);
        }
    }

    async start() {
        if (this.isRunning) {
            this.log('warn', 'Comprehensive redundancy system is already running');
            return;
        }
        
        this.log('info', 'Starting Comprehensive Redundancy System v3...');
        this.isRunning = true;
        
        // Perform initial health check
        await this.performHealthCheck();
        
        // Schedule regular health checks (simplified for testing)
        this.healthCheckCron = cron.schedule('*/2 * * * *', async () => {
            try {
                await this.performHealthCheck();
            } catch (error) {
                this.log('error', 'Scheduled health check failed:', error);
            }
        });
        
        // Schedule PM2 redundancy checks (simplified for testing)
        if (this.config.pm2 && this.config.pm2.enabled) {
            this.pm2Cron = cron.schedule('*/1 * * * *', async () => {
                try {
                    await this.checkPM2Redundancy();
                } catch (error) {
                    this.log('error', 'Scheduled PM2 check failed:', error);
                }
            });
        }
        
        // Schedule GitHub Actions redundancy checks (simplified for testing)
        if (this.config.githubActions && this.config.githubActions.enabled) {
            this.githubCron = cron.schedule('*/5 * * * *', async () => {
                try {
                    await this.checkGitHubActionsRedundancy();
                } catch (error) {
                    this.log('error', 'Scheduled GitHub check failed:', error);
                }
            });
        }
        
        // Schedule Netlify functions redundancy checks (simplified for testing)
        if (this.config.netlify && this.config.netlify.enabled) {
            this.netlifyCron = cron.schedule('*/10 * * * *', async () => {
                try {
                    await this.checkNetlifyFunctionsRedundancy();
                } catch (error) {
                    this.log('error', 'Scheduled Netlify check failed:', error);
                }
            });
        }
        
        this.log('info', 'Comprehensive Redundancy System v3 started successfully');
        
        // Keep the process running with a simple interval
        const keepAlive = setInterval(() => {
            if (!this.isRunning) {
                clearInterval(keepAlive);
                this.log('info', 'Shutting down...');
                process.exit(0);
            }
            this.log('debug', 'System heartbeat - still running');
        }, 30000); // Log every 30 seconds
        
        // Also set up process signal handlers
        process.on('SIGINT', () => {
            this.log('info', 'Received SIGINT, shutting down gracefully...');
            this.isRunning = false;
        });
        
        process.on('SIGTERM', () => {
            this.log('info', 'Received SIGTERM, shutting down gracefully...');
            this.isRunning = false;
        });
    }

    async stop() {
        this.log('info', 'Stopping Comprehensive Redundancy System v3...');
        this.isRunning = false;
        
        if (this.healthCheckCron) {
            this.healthCheckCron.destroy();
        }
        if (this.pm2Cron) {
            this.pm2Cron.destroy();
        }
        if (this.githubCron) {
            this.githubCron.destroy();
        }
        if (this.netlifyCron) {
            this.netlifyCron.destroy();
        }
        
        this.log('info', 'Comprehensive Redundancy System v3 stopped');
    }

    getStatus() {
        return {
            ...this.status,
            isRunning: this.isRunning,
            uptime: Date.now() - this.status.startTime
        };
    }

    async generateReport() {
        try {
            const report = {
                timestamp: new Date().toISOString(),
                system: 'Comprehensive Redundancy System v3',
                status: this.getStatus(),
                recommendations: []
            };
            
            // Generate recommendations based on current status
            if (this.status.components.pm2.healthScore < 80) {
                report.recommendations.push('PM2 redundancy system needs attention');
            }
            if (this.status.components.githubActions.healthScore < 80) {
                report.recommendations.push('GitHub Actions redundancy needs attention');
            }
            if (this.status.components.netlifyFunctions.healthScore < 80) {
                report.recommendations.push('Netlify functions redundancy needs attention');
            }
            
            const reportFile = path.join(this.logDir, 'comprehensive-redundancy-v3-report.json');
            fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
            
            this.log('info', 'Report generated successfully');
            return report;
            
        } catch (error) {
            this.log('error', 'Failed to generate report:', error);
            throw error;
        }
    }
}

// CLI interface
if (require.main === module) {
    const redundancy = new ComprehensiveRedundancyV3();
    const command = process.argv[2] || 'start';
    
    const commands = {
        start: () => redundancy.start(),
        stop: () => redundancy.stop(),
        status: () => console.log(JSON.stringify(redundancy.getStatus(), null, 2)),
        report: () => redundancy.generateReport().then(r => console.log(JSON.stringify(r, null, 2))),
        health: () => redundancy.performHealthCheck().then(() => console.log('Health check completed')),
        help: () => {
            console.log(`
Comprehensive Redundancy System v3

Usage: node comprehensive-redundancy-v3.cjs [command]

Commands:
  start   - Start the redundancy system
  stop    - Stop the redundancy system
  status  - Show current status
  report  - Generate a detailed report
  health  - Perform a health check
  help    - Show this help message

Examples:
  node comprehensive-redundancy-v3.cjs start
  node comprehensive-redundancy-v3.cjs status
  node comprehensive-redundancy-v3.cjs report
            `);
        }
    };
    
    if (commands[command]) {
        commands[command]();
    } else {
        console.error(`Unknown command: ${command}`);
        commands.help();
        process.exit(1);
    }
}

module.exports = ComprehensiveRedundancyV3;