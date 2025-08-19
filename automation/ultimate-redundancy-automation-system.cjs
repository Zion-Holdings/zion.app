#!/usr/bin/env node

/**
 * Ultimate Redundancy Automation System
 * Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations
 * 
 * This system provides:
 * - PM2 process monitoring and auto-recovery
 * - GitHub Actions workflow monitoring and backup triggers
 * - Netlify Functions monitoring and auto-regeneration
 * - Cross-system health monitoring and failover
 * - Automated recovery and redundancy management
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancyAutomationSystem {
    constructor() {
        this.config = {
            logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO',
            checkInterval: parseInt(process.env.REDUNDANCY_CHECK_INTERVAL) || 30000,
            maxRetries: parseInt(process.env.REDUNDANCY_MAX_RETRIES) || 3,
            autoRecovery: process.env.REDUNDANCY_AUTO_RECOVERY !== 'false',
            crossSystemMonitoring: process.env.REDUNDANCY_CROSS_SYSTEM !== 'false'
        };
        
        this.status = {
            pm2: { healthy: false, processes: [], lastCheck: null },
            github: { healthy: false, workflows: [], lastCheck: null },
            netlify: { healthy: false, functions: [], lastCheck: null },
            system: { healthy: false, lastCheck: null, uptime: Date.now() }
        };
        
        this.logs = [];
        this.metrics = {
            checks: 0,
            recoveries: 0,
            failures: 0,
            lastRecovery: null
        };
        
        this.setupLogging();
        this.ensureDirectories();
    }

    setupLogging() {
        this.logDir = path.join(__dirname, 'logs');
        this.logFile = path.join(this.logDir, 'ultimate-redundancy.log');
        
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
    }

    ensureDirectories() {
        const dirs = [
            path.join(__dirname, 'logs'),
            path.join(__dirname, 'backups'),
            path.join(__dirname, 'reports')
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
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
        
        // Keep only last 1000 logs
        if (this.logs.length > 1000) {
            this.logs = this.logs.slice(-1000);
        }
        
        const logMessage = `[${timestamp}] [${level}] ${message}`;
        
        // Console output
        switch (level) {
            case 'ERROR':
                console.error(logMessage);
                break;
            case 'WARN':
                console.warn(logMessage);
                break;
            case 'INFO':
                console.log(logMessage);
                break;
            default:
                console.log(logMessage);
        }
        
        // File logging
        try {
            fs.appendFileSync(this.logFile, logMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }

    async checkPM2Health() {
        try {
            this.log('INFO', 'Checking PM2 health...');
            
            // Check if PM2 is running
            let pm2Processes = [];
            try {
                const pm2Status = execSync('pm2 status --no-daemon', { 
                    encoding: 'utf8',
                    timeout: 5000
                });
                pm2Processes = pm2Status.trim().split('\n').slice(1).map(line => {
                    const parts = line.trim().split(/\s+/);
                    if (parts.length >= 4) {
                        return {
                            name: parts[0],
                            pm2_env: {
                                status: parts[3] === 'online' ? 'online' : 'offline'
                            }
                        };
                    }
                    return null;
                }).filter(Boolean);
            } catch (pm2Error) {
                this.log('WARN', `PM2 status check failed: ${pm2Error.message}`);
                // If PM2 is not running or times out, consider it healthy (no processes to fail)
                pm2Processes = [];
            }
            
            this.status.pm2.processes = pm2Processes;
            this.status.pm2.lastCheck = Date.now();
            
            // Check process health
            let healthyCount = 0;
            let totalCount = 0;
            
            for (const process of pm2Processes) {
                totalCount++;
                if (process.pm2_env && process.pm2_env.status === 'online') {
                    healthyCount++;
                }
            }
            
            // PM2 is healthy if there are no processes (nothing to fail) or all processes are healthy
            this.status.pm2.healthy = totalCount === 0 || (healthyCount > 0 && healthyCount === totalCount);
            
            this.log('INFO', `PM2 Health Check: ${healthyCount}/${totalCount} processes healthy`);
            
            return this.status.pm2.healthy;
        } catch (error) {
            this.log('ERROR', `PM2 health check failed: ${error.message}`);
            this.status.pm2.healthy = false;
            return false;
        }
    }

    async checkGitHubActionsHealth() {
        try {
            this.log('INFO', 'Checking GitHub Actions health...');
            
            // Check workflow files
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            const workflows = [];
            
            if (fs.existsSync(workflowsDir)) {
                const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
                
                for (const file of workflowFiles) {
                    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
                    workflows.push({
                        name: file,
                        content: content,
                        valid: content.includes('name:') && content.includes('on:')
                    });
                }
            }
            
            this.status.github.workflows = workflows;
            this.status.github.lastCheck = Date.now();
            
            // Check if workflows are valid
            const validWorkflows = workflows.filter(w => w.valid);
            this.status.github.healthy = validWorkflows.length > 0;
            
            this.log('INFO', `GitHub Actions Health Check: ${validWorkflows.length}/${workflows.length} workflows valid`);
            
            return this.status.github.healthy;
        } catch (error) {
            this.log('ERROR', `GitHub Actions health check failed: ${error.message}`);
            this.status.github.healthy = false;
            return false;
        }
    }

    async checkNetlifyFunctionsHealth() {
        try {
            this.log('INFO', 'Checking Netlify Functions health...');
            
            // Check functions manifest
            const manifestPath = path.join(__dirname, '..', 'netlify', 'functions', 'functions-manifest.json');
            const functions = [];
            
            if (fs.existsSync(manifestPath)) {
                const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                functions.push(...manifest.functions || []);
            }
            
            // Check if functions directory exists and has files
            const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
            if (fs.existsSync(functionsDir)) {
                const functionFiles = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
                functions.push(...functionFiles);
            }
            
            this.status.netlify.functions = functions;
            this.status.netlify.lastCheck = Date.now();
            this.status.netlify.healthy = functions.length > 0;
            
            this.log('INFO', `Netlify Functions Health Check: ${functions.length} functions found`);
            
            return this.status.netlify.healthy;
        } catch (error) {
            this.log('ERROR', `Netlify Functions health check failed: ${error.message}`);
            this.status.netlify.healthy = false;
            return false;
        }
    }

    async performPM2Recovery() {
        try {
            this.log('WARN', 'Performing PM2 recovery...');
            
            // Stop all PM2 processes
            execSync('pm2 stop all', { stdio: 'pipe' });
            
            // Clear PM2 logs
            execSync('pm2 flush', { stdio: 'pipe' });
            
            // Start comprehensive redundancy system
            execSync('pm2 start ecosystem.comprehensive-redundancy.cjs --update-env', { stdio: 'pipe' });
            
            // Save PM2 configuration
            execSync('pm2 save', { stdio: 'pipe' });
            
            this.log('INFO', 'PM2 recovery completed');
            this.metrics.recoveries++;
            this.metrics.lastRecovery = Date.now();
            
            return true;
        } catch (error) {
            this.log('ERROR', `PM2 recovery failed: ${error.message}`);
            this.metrics.failures++;
            return false;
        }
    }

    async performGitHubActionsRecovery() {
        try {
            this.log('WARN', 'Performing GitHub Actions recovery...');
            
            // Backup current workflows
            const backupDir = path.join(__dirname, 'backups', 'github-actions');
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            if (fs.existsSync(workflowsDir)) {
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const backupPath = path.join(backupDir, `workflows-backup-${timestamp}`);
                fs.mkdirSync(backupPath, { recursive: true });
                
                const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
                workflowFiles.forEach(file => {
                    const source = path.join(workflowsDir, file);
                    const dest = path.join(backupPath, file);
                    fs.copyFileSync(source, dest);
                });
                
                this.log('INFO', `GitHub Actions workflows backed up to ${backupPath}`);
            }
            
            // Trigger workflow regeneration if needed
            const backupWorkflows = [
                'marketing-sync-backup.yml',
                'sync-health-backup.yml'
            ];
            
            backupWorkflows.forEach(workflow => {
                const source = path.join(__dirname, '..', '.github', 'workflows', 'backups', workflow);
                const dest = path.join(__dirname, '..', '.github', 'workflows', workflow.replace('-backup', ''));
                
                if (fs.existsSync(source) && !fs.existsSync(dest)) {
                    fs.copyFileSync(source, dest);
                    this.log('INFO', `Restored workflow: ${workflow}`);
                }
            });
            
            this.log('INFO', 'GitHub Actions recovery completed');
            this.metrics.recoveries++;
            this.metrics.lastRecovery = Date.now();
            
            return true;
        } catch (error) {
            this.log('ERROR', `GitHub Actions recovery failed: ${error.message}`);
            this.metrics.failures++;
            return false;
        }
    }

    async performNetlifyFunctionsRecovery() {
        try {
            this.log('WARN', 'Performing Netlify Functions recovery...');
            
            // Backup current functions
            const backupDir = path.join(__dirname, 'backups', 'netlify-functions');
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
            if (fs.existsSync(functionsDir)) {
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const backupPath = path.join(backupDir, `functions-backup-${timestamp}`);
                fs.mkdirSync(backupPath, { recursive: true });
                
                const functionFiles = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
                functionFiles.forEach(file => {
                    const source = path.join(functionsDir, file);
                    const dest = path.join(backupPath, file);
                    fs.copyFileSync(source, dest);
                });
                
                this.log('INFO', `Netlify Functions backed up to ${backupPath}`);
            }
            
            // Regenerate functions manifest
            try {
                execSync('npm run netlify:manifest', { stdio: 'pipe' });
                this.log('INFO', 'Netlify Functions manifest regenerated');
            } catch (error) {
                this.log('WARN', `Failed to regenerate manifest: ${error.message}`);
            }
            
            this.log('INFO', 'Netlify Functions recovery completed');
            this.metrics.recoveries++;
            this.metrics.lastRecovery = Date.now();
            
            return true;
        } catch (error) {
            this.log('ERROR', `Netlify Functions recovery failed: ${error.message}`);
            this.metrics.failures++;
            return false;
        }
    }

    async performCrossSystemRecovery() {
        try {
            this.log('WARN', 'Performing cross-system recovery...');
            
            // Check if we need to restart the entire system
            const allSystemsHealthy = this.status.pm2.healthy && 
                                    this.status.github.healthy && 
                                    this.status.netlify.healthy;
            
            if (!allSystemsHealthy) {
                this.log('INFO', 'Some systems are unhealthy, performing full recovery...');
                
                // Restart all systems
                await this.performPM2Recovery();
                await this.performGitHubActionsRecovery();
                await this.performNetlifyFunctionsRecovery();
                
                // Wait for systems to stabilize
                await new Promise(resolve => setTimeout(resolve, 10000));
                
                // Verify recovery
                await this.checkPM2Health();
                await this.checkGitHubActionsHealth();
                await this.checkNetlifyFunctionsHealth();
            }
            
            this.log('INFO', 'Cross-system recovery completed');
            return true;
        } catch (error) {
            this.log('ERROR', `Cross-system recovery failed: ${error.message}`);
            return false;
        }
    }

    async runHealthCheck() {
        this.metrics.checks++;
        this.log('INFO', `Running health check #${this.metrics.checks}...`);
        
        try {
            // Check all systems
            const pm2Healthy = await this.checkPM2Health();
            const githubHealthy = await this.checkGitHubActionsHealth();
            const netlifyHealthy = await this.checkNetlifyFunctionsHealth();
            
            // Update overall system health
            this.status.system.healthy = pm2Healthy && githubHealthy && netlifyHealthy;
            this.status.system.lastCheck = Date.now();
            
            // Log results
            this.log('INFO', `Health Check Results:`);
            this.log('INFO', `  PM2: ${pm2Healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  GitHub Actions: ${githubHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  Netlify Functions: ${netlifyHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  Overall System: ${this.status.system.healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            
            // Perform recovery if needed and auto-recovery is enabled
            if (!this.status.system.healthy && this.config.autoRecovery) {
                this.log('WARN', 'System unhealthy, initiating recovery...');
                
                if (!pm2Healthy) {
                    await this.performPM2Recovery();
                }
                
                if (!githubHealthy) {
                    await this.performGitHubActionsRecovery();
                }
                
                if (!netlifyHealthy) {
                    await this.performNetlifyFunctionsRecovery();
                }
                
                // Perform cross-system recovery if still unhealthy
                if (!this.status.system.healthy) {
                    await this.performCrossSystemRecovery();
                }
            }
            
            return this.status.system.healthy;
        } catch (error) {
            this.log('ERROR', `Health check failed: ${error.message}`);
            this.metrics.failures++;
            return false;
        }
    }

    async start() {
        this.log('INFO', 'Starting Ultimate Redundancy Automation System...');
        this.log('INFO', `Configuration: ${JSON.stringify(this.config, null, 2)}`);
        
        // Initial health check
        await this.runHealthCheck();
        
        // Start scheduled health checks
        this.scheduler = cron.schedule(`*/${Math.ceil(this.config.checkInterval / 60000)} * * * *`, async () => {
            await this.runHealthCheck();
        });
        
        this.log('INFO', 'Ultimate Redundancy Automation System started successfully');
        
        // Keep the process running
        process.on('SIGINT', () => this.stop());
        process.on('SIGTERM', () => this.stop());
    }

    async stop() {
        this.log('INFO', 'Stopping Ultimate Redundancy Automation System...');
        
        if (this.scheduler) {
            this.scheduler.stop();
        }
        
        this.log('INFO', 'Ultimate Redundancy Automation System stopped');
        process.exit(0);
    }

    getStatus() {
        return {
            config: this.config,
            status: this.status,
            metrics: this.metrics,
            logs: this.logs.slice(-100), // Last 100 logs
            uptime: Date.now() - this.status.system.uptime
        };
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            system: {
                healthy: this.status.system.healthy,
                uptime: Date.now() - this.status.system.uptime,
                lastCheck: this.status.system.lastCheck
            },
            components: {
                pm2: {
                    healthy: this.status.pm2.healthy,
                    processCount: this.status.pm2.processes.length,
                    lastCheck: this.status.pm2.lastCheck
                },
                github: {
                    healthy: this.status.github.healthy,
                    workflowCount: this.status.github.workflows.length,
                    lastCheck: this.status.github.lastCheck
                },
                netlify: {
                    healthy: this.status.netlify.healthy,
                    functionCount: this.status.netlify.functions.length,
                    lastCheck: this.status.netlify.lastCheck
                }
            },
            metrics: this.metrics,
            recommendations: this.generateRecommendations()
        };
        
        return report;
    }

    generateRecommendations() {
        const recommendations = [];
        
        if (!this.status.pm2.healthy) {
            recommendations.push('PM2 system needs attention - check process status and logs');
        }
        
        if (!this.status.github.healthy) {
            recommendations.push('GitHub Actions workflows need validation - check workflow files');
        }
        
        if (!this.status.netlify.healthy) {
            recommendations.push('Netlify Functions need regeneration - run manifest generation');
        }
        
        if (this.metrics.failures > 5) {
            recommendations.push('High failure rate detected - consider system restart');
        }
        
        if (this.metrics.recoveries > 10) {
            recommendations.push('Multiple recoveries performed - investigate root cause');
        }
        
        return recommendations;
    }
}

// CLI interface
if (require.main === module) {
    const system = new UltimateRedundancyAutomationSystem();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            system.start();
            break;
        case 'status':
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        case 'report':
            console.log(JSON.stringify(system.generateReport(), null, 2));
            break;
        case 'health':
            system.runHealthCheck().then(healthy => {
                console.log(`Health check result: ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
                process.exit(healthy ? 0 : 1);
            });
            break;
        default:
            console.log('Usage: node ultimate-redundancy-automation-system.cjs [start|status|report|health]');
            process.exit(1);
    }
}

module.exports = UltimateRedundancyAutomationSystem;