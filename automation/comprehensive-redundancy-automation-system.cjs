#!/usr/bin/env node

/**
 * 🚀 Comprehensive Redundancy Automation System
 * Provides redundancy for all PM2, GitHub Actions, and Netlify functions automations
 * 
 * Features:
 * - PM2 process monitoring and auto-restart
 * - GitHub Actions workflow health monitoring
 * - Netlify functions execution monitoring
 * - Automated health checks and recovery
 * - Comprehensive logging and reporting
 * - Multi-layer redundancy protection
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveRedundancyAutomationSystem {
    constructor() {
        this.config = {
            checkInterval: 30000, // 30 seconds
            healthCheckInterval: 60000, // 1 minute
            recoveryAttempts: 3,
            logFile: 'automation/logs/comprehensive-redundancy.log',
            statusFile: 'automation/logs/redundancy-status.json'
        };
        
        this.status = {
            pm2: { healthy: false, processes: [], lastCheck: null },
            githubActions: { healthy: false, workflows: [], lastCheck: null },
            netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
            system: { healthy: false, lastCheck: null, uptime: null }
        };
        
        this.monitoring = false;
        this.healthCheckJob = null;
        this.monitoringJob = null;
    }

    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        
        console.log(logEntry);
        
        // Ensure log directory exists
        const logDir = path.dirname(this.config.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        
        // Append to log file
        fs.appendFileSync(this.config.logFile, logEntry + '\n');
    }

    async checkPM2Health() {
        try {
            this.log('Checking PM2 health...');
            
            // Get PM2 status
            const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
            const processes = JSON.parse(pm2Status);
            
            const pm2Processes = processes.filter(p => 
                p.name && p.name.includes('zion') || 
                p.name && p.name.includes('automation') ||
                p.name && p.name.includes('redundancy')
            );
            
            this.status.pm2.processes = pm2Processes.map(p => ({
                name: p.name,
                status: p.pm2_env.status,
                restartCount: p.pm2_env.restart_time,
                uptime: p.pm2_env.pm_uptime,
                memory: p.monit.memory,
                cpu: p.monit.cpu
            }));
            
            // Check if all processes are healthy
            const healthyProcesses = pm2Processes.filter(p => 
                p.pm2_env.status === 'online' && 
                p.pm2_env.restart_time < 10
            );
            
            this.status.pm2.healthy = healthyProcesses.length === pm2Processes.length;
            this.status.pm2.lastCheck = new Date().toISOString();
            
            this.log(`PM2 Health Check: ${this.status.pm2.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${healthyProcesses.length}/${pm2Processes.length} processes healthy`);
            
            return this.status.pm2.healthy;
        } catch (error) {
            this.log(`PM2 Health Check Error: ${error.message}`, 'ERROR');
            this.status.pm2.healthy = false;
            this.status.pm2.lastCheck = new Date().toISOString();
            return false;
        }
    }

    async checkGitHubActionsHealth() {
        try {
            this.log('Checking GitHub Actions health...');
            
            // Check if workflows directory exists and has valid YAML files
            const workflowsDir = '.github/workflows';
            if (!fs.existsSync(workflowsDir)) {
                this.log('GitHub Actions workflows directory not found', 'WARN');
                this.status.githubActions.healthy = false;
                return false;
            }
            
            const workflowFiles = fs.readdirSync(workflowsDir)
                .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
            
            this.status.githubActions.workflows = workflowFiles.map(file => ({
                name: file,
                path: path.join(workflowsDir, file),
                lastModified: fs.statSync(path.join(workflowsDir, file)).mtime
            }));
            
            // Check if workflows are properly formatted (basic check)
            let healthyWorkflows = 0;
            for (const workflow of this.status.githubActions.workflows) {
                try {
                    const content = fs.readFileSync(workflow.path, 'utf8');
                    // Basic validation - check for required fields
                    if (content.includes('name:') && content.includes('on:') && content.includes('jobs:')) {
                        healthyWorkflows++;
                    }
                } catch (error) {
                    this.log(`Workflow validation error for ${workflow.name}: ${error.message}`, 'WARN');
                }
            }
            
            this.status.githubActions.healthy = healthyWorkflows === this.status.githubActions.workflows.length;
            this.status.githubActions.lastCheck = new Date().toISOString();
            
            this.log(`GitHub Actions Health Check: ${this.status.githubActions.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${healthyWorkflows}/${this.status.githubActions.workflows.length} workflows healthy`);
            
            return this.status.githubActions.healthy;
        } catch (error) {
            this.log(`GitHub Actions Health Check Error: ${error.message}`, 'ERROR');
            this.status.githubActions.healthy = false;
            this.status.githubActions.lastCheck = new Date().toISOString();
            return false;
        }
    }

    async checkNetlifyFunctionsHealth() {
        try {
            this.log('Checking Netlify functions health...');
            
            // Check if Netlify functions directory exists
            const functionsDir = 'netlify/functions';
            if (!fs.existsSync(functionsDir)) {
                this.log('Netlify functions directory not found', 'WARN');
                this.status.netlifyFunctions.healthy = false;
                return false;
            }
            
            // Check functions manifest
            const manifestPath = 'netlify/functions/functions-manifest.json';
            if (!fs.existsSync(manifestPath)) {
                this.log('Netlify functions manifest not found', 'WARN');
                this.status.netlifyFunctions.healthy = false;
                return false;
            }
            
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            this.status.netlifyFunctions.functions = manifest.functions || [];
            
            // Check if functions are accessible
            let healthyFunctions = 0;
            for (const funcName of this.status.netlifyFunctions.functions) {
                const funcPath = path.join(functionsDir, `${funcName}.js`);
                if (fs.existsSync(funcPath)) {
                    healthyFunctions++;
                }
            }
            
            this.status.netlifyFunctions.healthy = healthyFunctions > 0 && 
                healthyFunctions === this.status.netlifyFunctions.functions.length;
            this.status.netlifyFunctions.lastCheck = new Date().toISOString();
            
            this.log(`Netlify Functions Health Check: ${this.status.netlifyFunctions.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${healthyFunctions}/${this.status.netlifyFunctions.functions.length} functions healthy`);
            
            return this.status.netlifyFunctions.healthy;
        } catch (error) {
            this.log(`Netlify Functions Health Check Error: ${error.message}`, 'ERROR');
            this.status.netlifyFunctions.healthy = false;
            this.status.netlifyFunctions.lastCheck = new Date().toISOString();
            return false;
        }
    }

    async performSystemHealthCheck() {
        try {
            this.log('Performing comprehensive system health check...');
            
            const pm2Healthy = await this.checkPM2Health();
            const githubHealthy = await this.checkGitHubActionsHealth();
            const netlifyHealthy = await this.checkNetlifyFunctionsHealth();
            
            // Overall system health
            this.status.system.healthy = pm2Healthy && githubHealthy && netlifyHealthy;
            this.status.system.lastCheck = new Date().toISOString();
            this.status.system.uptime = process.uptime();
            
            this.log(`System Health Check Complete: ${this.status.system.healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            
            // Save status to file
            this.saveStatus();
            
            return this.status.system.healthy;
        } catch (error) {
            this.log(`System Health Check Error: ${error.message}`, 'ERROR');
            this.status.system.healthy = false;
            this.status.system.lastCheck = new Date().toISOString();
            return false;
        }
    }

    async attemptRecovery() {
        try {
            this.log('Attempting system recovery...');
            
            let recoveryActions = [];
            
            // PM2 Recovery
            if (!this.status.pm2.healthy) {
                this.log('Attempting PM2 recovery...');
                try {
                    execSync('pm2 restart all', { stdio: 'pipe' });
                    recoveryActions.push('PM2 processes restarted');
                } catch (error) {
                    this.log(`PM2 recovery failed: ${error.message}`, 'ERROR');
                }
            }
            
            // GitHub Actions Recovery
            if (!this.status.githubActions.healthy) {
                this.log('Attempting GitHub Actions recovery...');
                try {
                    // Trigger workflow generation if needed
                    if (fs.existsSync('scripts/generate-netlify-functions-manifest.cjs')) {
                        execSync('node scripts/generate-netlify-functions-manifest.cjs', { stdio: 'pipe' });
                        recoveryActions.push('Netlify functions manifest regenerated');
                    }
                } catch (error) {
                    this.log(`GitHub Actions recovery failed: ${error.message}`, 'ERROR');
                }
            }
            
            // Netlify Functions Recovery
            if (!this.status.netlifyFunctions.healthy) {
                this.log('Attempting Netlify functions recovery...');
                try {
                    if (fs.existsSync('scripts/generate-netlify-functions-manifest.cjs')) {
                        execSync('node scripts/generate-netlify-functions-manifest.cjs', { stdio: 'pipe' });
                        recoveryActions.push('Netlify functions manifest regenerated');
                    }
                } catch (error) {
                    this.log(`Netlify functions recovery failed: ${error.message}`, 'ERROR');
                }
            }
            
            if (recoveryActions.length > 0) {
                this.log(`Recovery actions completed: ${recoveryActions.join(', ')}`);
                
                // Wait a bit and recheck health
                setTimeout(async () => {
                    await this.performSystemHealthCheck();
                }, 10000);
            } else {
                this.log('No recovery actions were needed');
            }
            
        } catch (error) {
            this.log(`Recovery attempt failed: ${error.message}`, 'ERROR');
        }
    }

    saveStatus() {
        try {
            const statusDir = path.dirname(this.config.statusFile);
            if (!fs.existsSync(statusDir)) {
                fs.mkdirSync(statusDir, { recursive: true });
            }
            
            fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
        } catch (error) {
            this.log(`Failed to save status: ${error.message}`, 'ERROR');
        }
    }

    startMonitoring() {
        if (this.monitoring) {
            this.log('Monitoring is already running');
            return;
        }
        
        this.log('Starting comprehensive redundancy monitoring...');
        this.monitoring = true;
        
        // Start health check job
        this.healthCheckJob = cron.schedule('*/1 * * * *', async () => {
            await this.performSystemHealthCheck();
        });
        
        // Start monitoring job
        this.monitoringJob = setInterval(async () => {
            if (!this.status.system.healthy) {
                this.log('System unhealthy detected, attempting recovery...');
                await this.attemptRecovery();
            }
        }, this.config.checkInterval);
        
        this.log('Comprehensive redundancy monitoring started successfully');
    }

    stopMonitoring() {
        if (!this.monitoring) {
            this.log('Monitoring is not running');
            return;
        }
        
        this.log('Stopping comprehensive redundancy monitoring...');
        
        if (this.healthCheckJob) {
            this.healthCheckJob.stop();
            this.healthCheckJob = null;
        }
        
        if (this.monitoringJob) {
            clearInterval(this.monitoringJob);
            this.monitoringJob = null;
        }
        
        this.monitoring = false;
        this.log('Comprehensive redundancy monitoring stopped');
    }

    getStatus() {
        return this.status;
    }

    async generateReport() {
        try {
            await this.performSystemHealthCheck();
            
            const report = {
                timestamp: new Date().toISOString(),
                systemHealth: this.status.system.healthy,
                uptime: this.status.system.uptime,
                components: {
                    pm2: {
                        healthy: this.status.pm2.healthy,
                        processCount: this.status.pm2.processes.length,
                        processes: this.status.pm2.processes
                    },
                    githubActions: {
                        healthy: this.status.githubActions.healthy,
                        workflowCount: this.status.githubActions.workflows.length,
                        workflows: this.status.githubActions.workflows.map(w => w.name)
                    },
                    netlifyFunctions: {
                        healthy: this.status.netlifyFunctions.healthy,
                        functionCount: this.status.netlifyFunctions.functions.length,
                        functions: this.status.netlifyFunctions.functions
                    }
                },
                recommendations: []
            };
            
            // Generate recommendations
            if (!this.status.pm2.healthy) {
                report.recommendations.push('PM2 processes need attention - check logs and restart if necessary');
            }
            
            if (!this.status.githubActions.healthy) {
                report.recommendations.push('GitHub Actions workflows need validation - check YAML syntax and configuration');
            }
            
            if (!this.status.netlifyFunctions.healthy) {
                report.recommendations.push('Netlify functions need attention - regenerate manifest and check function files');
            }
            
            return report;
        } catch (error) {
            this.log(`Report generation failed: ${error.message}`, 'ERROR');
            return { error: error.message };
        }
    }
}

// CLI interface
if (require.main === module) {
    const system = new ComprehensiveRedundancyAutomationSystem();
    const command = process.argv[2] || 'start';
    
    switch (command) {
        case 'start':
            system.startMonitoring();
            break;
        case 'stop':
            system.stopMonitoring();
            break;
        case 'status':
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        case 'health':
            system.performSystemHealthCheck().then(healthy => {
                console.log(`System Health: ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
                process.exit(healthy ? 0 : 1);
            });
            break;
        case 'report':
            system.generateReport().then(report => {
                console.log(JSON.stringify(report, null, 2));
            });
            break;
        case 'recovery':
            system.attemptRecovery();
            break;
        default:
            console.log(`
Comprehensive Redundancy Automation System

Usage:
  node comprehensive-redundancy-automation-system.cjs [command]

Commands:
  start     - Start monitoring and health checks
  stop      - Stop monitoring
  status    - Show current system status
  health    - Perform health check
  report    - Generate comprehensive report
  recovery  - Attempt system recovery

Examples:
  node comprehensive-redundancy-automation-system.cjs start
  node comprehensive-redundancy-automation-system.cjs status
  node comprehensive-redundancy-automation-system.cjs health
            `);
    }
}

module.exports = ComprehensiveRedundancyAutomationSystem;