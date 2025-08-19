#!/usr/bin/env node

/**
 * 🚀 Comprehensive Redundancy Automation System
 * 
 * This system provides complete redundancy coverage for:
 * - PM2 automation processes
 * - GitHub Actions workflows
 * - Netlify functions
 * - Build automation
 * - Health monitoring
 * - Auto-recovery mechanisms
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class ComprehensiveRedundancySystem {
    constructor() {
        this.config = {
            logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO',
            pm2CheckInterval: parseInt(process.env.REDUNDANCY_PM2_CHECK_INTERVAL) || 30000,
            githubCheckInterval: parseInt(process.env.REDUNDANCY_GITHUB_CHECK_INTERVAL) || 60000,
            netlifyCheckInterval: parseInt(process.env.REDUNDANCY_NETLIFY_CHECK_INTERVAL) || 120000,
            buildCheckInterval: parseInt(process.env.REDUNDANCY_BUILD_CHECK_INTERVAL) || 300000,
            healthCheckInterval: parseInt(process.env.REDUNDANCY_HEALTH_CHECK_INTERVAL) || 600000,
            maxRetries: parseInt(process.env.REDUNDANCY_MAX_RETRIES) || 5,
            retryDelay: parseInt(process.env.REDUNDANCY_RETRY_DELAY) || 10000
        };
        
        this.status = {
            pm2: { healthy: false, processes: [], lastCheck: null },
            github: { healthy: false, workflows: [], lastCheck: null },
            netlify: { healthy: false, functions: [], lastCheck: null },
            build: { healthy: false, lastBuild: null, lastCheck: null },
            overall: { healthy: false, lastCheck: null }
        };
        
        this.logs = [];
        this.isRunning = false;
        this.schedulers = [];
        
        this.setupLogging();
    }

    setupLogging() {
        const logDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        
        this.logFile = path.join(logDir, 'comprehensive-redundancy.log');
    }

    log(level, message, data = null) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            data
        };
        
        this.logs.push(logEntry);
        
        // Keep only last 1000 log entries
        if (this.logs.length > 1000) {
            this.logs = this.logs.slice(-1000);
        }
        
        // Write to file
        const logLine = `[${timestamp}] ${level}: ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
        fs.appendFileSync(this.logFile, logLine);
        
        // Console output
        const colors = {
            INFO: '\x1b[36m',
            WARN: '\x1b[33m',
            ERROR: '\x1b[31m',
            SUCCESS: '\x1b[32m'
        };
        
        console.log(`${colors[level] || ''}[${level}]${colors[level] ? '\x1b[0m' : ''} ${message}`);
    }

    async checkPM2Redundancy() {
        try {
            this.log('INFO', 'Checking PM2 redundancy status...');
            
            // Check PM2 processes
            const pm2List = execSync('pm2 list', { encoding: 'utf8' });
            
            // Parse PM2 list output manually since --format json is not available
            const lines = pm2List.split('\n');
            const pm2Processes = [];
            
            // Find the data line (contains actual process info)
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                // Look for lines that contain process data (have id, name, etc.)
                if (line && line.includes('│') && line.match(/\d+/)) {
                    // Split by │ character and extract relevant parts
                    const parts = line.split('│').map(part => part.trim()).filter(part => part);
                    if (parts.length >= 4) {
                        pm2Processes.push({
                            id: parts[0],
                            name: parts[1],
                            mode: parts[2] || 'unknown',
                            status: parts[3] || 'unknown'
                        });
                    }
                }
            }
            
            const redundancyProcesses = pm2Processes.filter(proc => 
                proc.name.includes('redundancy') || 
                proc.name.includes('backup') ||
                proc.name.includes('zion-auto-sync') ||
                proc.name.includes('comprehensive') ||
                proc.name.includes('ecosystem')
            );
            
            this.status.pm2.processes = redundancyProcesses;
            this.status.pm2.healthy = redundancyProcesses.length >= 4; // At least 4 redundancy processes
            this.status.pm2.lastCheck = new Date();
            
            if (this.status.pm2.healthy) {
                this.log('SUCCESS', `PM2 redundancy healthy: ${redundancyProcesses.length} processes running`);
            } else {
                this.log('WARN', `PM2 redundancy unhealthy: only ${redundancyProcesses.length} processes running`);
                await this.recoverPM2Redundancy();
            }
            
        } catch (error) {
            this.log('ERROR', 'Failed to check PM2 redundancy', error.message);
            this.status.pm2.healthy = false;
            await this.recoverPM2Redundancy();
        }
    }

    async recoverPM2Redundancy() {
        try {
            this.log('INFO', 'Attempting to recover PM2 redundancy...');
            
            // Stop all PM2 processes
            execSync('pm2 stop all', { stdio: 'pipe' });
            execSync('pm2 delete all', { stdio: 'pipe' });
            
            // Start comprehensive redundancy ecosystem
            execSync('pm2 start ecosystem-comprehensive-redundancy.pm2.js', { stdio: 'pipe' });
            execSync('pm2 save', { stdio: 'pipe' });
            
            this.log('SUCCESS', 'PM2 redundancy recovered successfully');
            
        } catch (error) {
            this.log('ERROR', 'Failed to recover PM2 redundancy', error.message);
        }
    }

    async checkGitHubActionsRedundancy() {
        try {
            this.log('INFO', 'Checking GitHub Actions redundancy...');
            
            const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
            const workflowFiles = fs.readdirSync(workflowsDir);
            
            const backupWorkflows = workflowFiles.filter(file => file.includes('backup'));
            const primaryWorkflows = workflowFiles.filter(file => !file.includes('backup'));
            
            this.status.github.workflows = {
                primary: primaryWorkflows,
                backup: backupWorkflows
            };
            
            // Check if we have backup workflows for each primary workflow
            const hasBackups = primaryWorkflows.every(primary => 
                backupWorkflows.some(backup => 
                    backup.replace('-backup.yml', '.yml') === primary
                )
            );
            
            this.status.github.healthy = hasBackups && backupWorkflows.length >= 2;
            this.status.github.lastCheck = new Date();
            
            if (this.status.github.healthy) {
                this.log('SUCCESS', `GitHub Actions redundancy healthy: ${backupWorkflows.length} backup workflows`);
            } else {
                this.log('WARN', 'GitHub Actions redundancy unhealthy: missing backup workflows');
                await this.recoverGitHubActionsRedundancy();
            }
            
        } catch (error) {
            this.log('ERROR', 'Failed to check GitHub Actions redundancy', error.message);
            this.status.github.healthy = false;
        }
    }

    async recoverGitHubActionsRedundancy() {
        try {
            this.log('INFO', 'Attempting to recover GitHub Actions redundancy...');
            
            // Create backup workflows if they don't exist
            const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
            const workflowFiles = fs.readdirSync(workflowsDir);
            
            workflowFiles.forEach(workflow => {
                if (!workflow.includes('backup') && workflow.endsWith('.yml')) {
                    const backupName = workflow.replace('.yml', '-backup.yml');
                    const backupPath = path.join(workflowsDir, backupName);
                    
                    if (!fs.existsSync(backupPath)) {
                        const primaryContent = fs.readFileSync(path.join(workflowsDir, workflow), 'utf8');
                        const backupContent = primaryContent.replace(
                            /name: /,
                            'name: Backup '
                        );
                        fs.writeFileSync(backupPath, backupContent);
                        this.log('INFO', `Created backup workflow: ${backupName}`);
                    }
                }
            });
            
            this.log('SUCCESS', 'GitHub Actions redundancy recovered successfully');
            
        } catch (error) {
            this.log('ERROR', 'Failed to recover GitHub Actions redundancy', error.message);
        }
    }

    async checkNetlifyFunctionsRedundancy() {
        try {
            this.log('INFO', 'Checking Netlify functions redundancy...');
            
            const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
            
            if (!fs.existsSync(manifestPath)) {
                this.status.netlify.healthy = false;
                this.log('WARN', 'Netlify functions manifest not found');
                await this.recoverNetlifyFunctionsRedundancy();
                return;
            }
            
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            this.status.netlify.functions = manifest.functions || [];
            
            // Check if we have a good number of functions
            this.status.netlify.healthy = this.status.netlify.functions.length >= 50;
            this.status.netlify.lastCheck = new Date();
            
            if (this.status.netlify.healthy) {
                this.log('SUCCESS', `Netlify functions redundancy healthy: ${this.status.netlify.functions.length} functions`);
            } else {
                this.log('WARN', `Netlify functions redundancy unhealthy: only ${this.status.netlify.functions.length} functions`);
                await this.recoverNetlifyFunctionsRedundancy();
            }
            
        } catch (error) {
            this.log('ERROR', 'Failed to check Netlify functions redundancy', error.message);
            this.status.netlify.healthy = false;
        }
    }

    async recoverNetlifyFunctionsRedundancy() {
        try {
            this.log('INFO', 'Attempting to recover Netlify functions redundancy...');
            
            // Regenerate functions manifest
            execSync('npm run netlify:manifest', { stdio: 'pipe' });
            
            this.log('SUCCESS', 'Netlify functions redundancy recovered successfully');
            
        } catch (error) {
            this.log('ERROR', 'Failed to recover Netlify functions redundancy', error.message);
        }
    }

    async checkBuildHealth() {
        try {
            this.log('INFO', 'Checking build health...');
            
            // Check if build files exist
            const buildFiles = [
                '.next',
                'out',
                'public'
            ];
            
            const buildExists = buildFiles.every(file => 
                fs.existsSync(path.join(process.cwd(), file))
            );
            
            this.status.build.healthy = buildExists;
            this.status.build.lastCheck = new Date();
            
            if (this.status.build.healthy) {
                this.log('SUCCESS', 'Build health check passed');
            } else {
                this.log('WARN', 'Build health check failed');
                await this.recoverBuildHealth();
            }
            
        } catch (error) {
            this.log('ERROR', 'Failed to check build health', error.message);
            this.status.build.healthy = false;
        }
    }

    async recoverBuildHealth() {
        try {
            this.log('INFO', 'Attempting to recover build health...');
            
            // Try to run a simple build first
            try {
                execSync('npm run build:health-check', { stdio: 'pipe' });
                this.log('SUCCESS', 'Build health check passed');
            } catch (error) {
                // If that fails, try to run the build
                try {
                    execSync('npm run build:validate', { stdio: 'pipe' });
                    this.log('SUCCESS', 'Build validation passed');
                } catch (validationError) {
                    this.log('WARN', 'Build validation failed, attempting basic build...');
                    // Try a basic build
                    execSync('npm run build', { stdio: 'pipe' });
                    this.log('SUCCESS', 'Basic build completed');
                }
            }
            
            this.log('SUCCESS', 'Build health recovered successfully');
            
        } catch (error) {
            this.log('ERROR', 'Failed to recover build health', error.message);
        }
    }

    updateOverallHealth() {
        const allHealthy = [
            this.status.pm2.healthy,
            this.status.github.healthy,
            this.status.netlify.healthy,
            this.status.build.healthy
        ].every(healthy => healthy);
        
        this.status.overall.healthy = allHealthy;
        this.status.overall.lastCheck = new Date();
        
        if (this.status.overall.healthy) {
            this.log('SUCCESS', 'Overall system health: HEALTHY');
        } else {
            this.log('WARN', 'Overall system health: UNHEALTHY');
        }
    }

    async runHealthCheck() {
        this.log('INFO', 'Running comprehensive health check...');
        
        await this.checkPM2Redundancy();
        await this.checkGitHubActionsRedundancy();
        await this.checkNetlifyFunctionsRedundancy();
        await this.checkBuildHealth();
        
        this.updateOverallHealth();
        
        this.log('INFO', 'Comprehensive health check completed');
    }

    startSchedulers() {
        this.log('INFO', 'Starting redundancy schedulers...');
        
        // PM2 redundancy check (every 30 seconds)
        const pm2Scheduler = cron.schedule('*/1 * * * *', () => {
            this.checkPM2Redundancy();
        });
        this.schedulers.push(pm2Scheduler);
        
        // GitHub Actions redundancy check (every 1 minute)
        const githubScheduler = cron.schedule('*/1 * * * *', () => {
            this.checkGitHubActionsRedundancy();
        });
        this.schedulers.push(githubScheduler);
        
        // Netlify functions redundancy check (every 2 minutes)
        const netlifyScheduler = cron.schedule('*/2 * * * *', () => {
            this.checkNetlifyFunctionsRedundancy();
        });
        this.schedulers.push(netlifyScheduler);
        
        // Build health check (every 5 minutes)
        const buildScheduler = cron.schedule('*/5 * * * *', () => {
            this.checkBuildHealth();
        });
        this.schedulers.push(buildScheduler);
        
        // Overall health check (every 10 minutes)
        const healthScheduler = cron.schedule('*/10 * * * *', () => {
            this.runHealthCheck();
        });
        this.schedulers.push(healthScheduler);
        
        this.log('SUCCESS', `Started ${this.schedulers.length} redundancy schedulers`);
    }

    stopSchedulers() {
        this.log('INFO', 'Stopping redundancy schedulers...');
        
        this.schedulers.forEach(scheduler => {
            scheduler.stop();
        });
        
        this.schedulers = [];
        this.log('SUCCESS', 'All redundancy schedulers stopped');
    }

    async start() {
        if (this.isRunning) {
            this.log('WARN', 'System is already running');
            return;
        }
        
        this.log('INFO', 'Starting comprehensive redundancy system...');
        
        try {
            // Initial health check
            await this.runHealthCheck();
            
            // Start schedulers
            this.startSchedulers();
            
            this.isRunning = true;
            this.log('SUCCESS', 'Comprehensive redundancy system started successfully');
            
            // Keep the process alive
            this.log('INFO', 'System is running. Press Ctrl+C to stop.');
            
            // Set up process signal handlers
            process.on('SIGINT', () => {
                this.log('INFO', 'Received SIGINT, shutting down gracefully...');
                this.stop().then(() => process.exit(0));
            });
            
            process.on('SIGTERM', () => {
                this.log('INFO', 'Received SIGTERM, shutting down gracefully...');
                this.stop().then(() => process.exit(0));
            });
            
            // Keep the event loop alive
            setInterval(() => {
                // This interval keeps the process alive
            }, 60000); // Check every minute
            
        } catch (error) {
            this.log('ERROR', 'Failed to start comprehensive redundancy system', error.message);
            throw error;
        }
    }

    async stop() {
        if (!this.isRunning) {
            this.log('WARN', 'System is not running');
            return;
        }
        
        this.log('INFO', 'Stopping comprehensive redundancy system...');
        
        try {
            this.stopSchedulers();
            this.isRunning = false;
            this.log('SUCCESS', 'Comprehensive redundancy system stopped successfully');
            
        } catch (error) {
            this.log('ERROR', 'Failed to stop comprehensive redundancy system', error.message);
            throw error;
        }
    }

    getStatus() {
        return {
            isRunning: this.isRunning,
            config: this.config,
            status: this.status,
            logs: this.logs.slice(-100) // Last 100 log entries
        };
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            systemStatus: this.getStatus(),
            recommendations: []
        };
        
        // Generate recommendations based on status
        if (!this.status.pm2.healthy) {
            report.recommendations.push('PM2 redundancy needs attention - check process count and restart if necessary');
        }
        
        if (!this.status.github.healthy) {
            report.recommendations.push('GitHub Actions redundancy needs attention - ensure backup workflows exist');
        }
        
        if (!this.status.netlify.healthy) {
            report.recommendations.push('Netlify functions redundancy needs attention - regenerate functions manifest');
        }
        
        if (!this.status.build.healthy) {
            report.recommendations.push('Build health needs attention - run build recovery');
        }
        
        return report;
    }
}

// CLI interface
if (require.main === module) {
    const system = new ComprehensiveRedundancySystem();
    
    const command = process.argv[2] || 'start';
    
    switch (command) {
        case 'start':
            system.start().catch(console.error);
            break;
        case 'stop':
            system.stop().catch(console.error);
            break;
        case 'status':
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        case 'report':
            console.log(JSON.stringify(system.generateReport(), null, 2));
            break;
        case 'health':
            system.runHealthCheck().catch(console.error);
            break;
        default:
            console.log('Usage: node comprehensive-redundancy-system.cjs [start|stop|status|report|health]');
            process.exit(1);
    }
}

module.exports = ComprehensiveRedundancySystem;