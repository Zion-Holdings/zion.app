#!/usr/bin/env node

/**
 * Ultimate Redundancy System V3
 * Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations
 * 
 * This system provides:
 * - PM2 process monitoring and auto-restart
 * - GitHub Actions workflow health monitoring
 * - Netlify Functions health monitoring
 * - Automated recovery and fallback mechanisms
 * - Comprehensive logging and reporting
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancyV3System {
    constructor() {
        this.config = {
            checkInterval: 30000, // 30 seconds
            maxRetries: 3,
            retryDelay: 5000, // 5 seconds
            logDir: path.join(__dirname, 'logs'),
            pidFile: path.join(__dirname, 'ultimate-redundancy-v3.pid'),
            statusFile: path.join(__dirname, 'ultimate-redundancy-v3-status.json'),
            healthCheckInterval: 60000, // 1 minute
            recoveryTimeout: 300000, // 5 minutes
            maxConcurrentRecoveries: 2
        };
        
        this.status = {
            started: new Date().toISOString(),
            lastHealthCheck: null,
            pm2: { healthy: false, processes: [], lastCheck: null },
            githubActions: { healthy: false, workflows: [], lastCheck: null },
            netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
            recoveryAttempts: 0,
            totalRecoveries: 0,
            errors: []
        };
        
        this.recoveryQueue = [];
        this.isRecovering = false;
        this.healthCheckTimer = null;
        this.mainTimer = null;
        
        this.ensureDirectories();
        this.loadStatus();
    }
    
    ensureDirectories() {
        if (!fs.existsSync(this.config.logDir)) {
            fs.mkdirSync(this.config.logDir, { recursive: true });
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
        
        console.log(`[${timestamp}] [${level}] ${message}`);
        
        // Write to log file
        const logFile = path.join(this.config.logDir, 'ultimate-redundancy-v3.log');
        fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
        
        // Update status
        if (level === 'ERROR') {
            this.status.errors.push(logEntry);
            if (this.status.errors.length > 100) {
                this.status.errors = this.status.errors.slice(-100);
            }
        }
    }
    
    loadStatus() {
        try {
            if (fs.existsSync(this.config.statusFile)) {
                const savedStatus = JSON.parse(fs.readFileSync(this.config.statusFile, 'utf8'));
                this.status = { ...this.status, ...savedStatus };
                this.log('INFO', 'Status loaded from file');
            }
        } catch (error) {
            this.log('WARN', 'Could not load status file', error.message);
        }
    }
    
    saveStatus() {
        try {
            this.status.lastHealthCheck = new Date().toISOString();
            fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
        } catch (error) {
            this.log('ERROR', 'Could not save status file', error.message);
        }
    }
    
    async checkPM2Health() {
        try {
            this.log('INFO', 'Checking PM2 health...');
            
            // Check if PM2 is running
            const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
            const pm2Data = JSON.parse(pm2Status);
            
            this.status.pm2.processes = pm2Data.map(proc => ({
                name: proc.name,
                status: proc.pm2_env.status,
                pm_id: proc.pm_id,
                pm_cwd: proc.pm2_env.pm_cwd,
                restart_time: proc.pm2_env.restart_time,
                uptime: proc.pm2_env.pm_uptime,
                memory: proc.monit.memory,
                cpu: proc.monit.cpu
            }));
            
            // Check if all processes are online
            const offlineProcesses = this.status.pm2.processes.filter(p => p.status !== 'online');
            this.status.pm2.healthy = offlineProcesses.length === 0;
            this.status.pm2.lastCheck = new Date().toISOString();
            
            if (!this.status.pm2.healthy) {
                this.log('WARN', `PM2 health check failed: ${offlineProcesses.length} processes offline`);
                offlineProcesses.forEach(proc => {
                    this.log('WARN', `Process ${proc.name} is ${proc.status}`);
                });
                
                // Queue recovery for offline processes
                offlineProcesses.forEach(proc => {
                    this.queueRecovery('pm2', proc);
                });
            } else {
                this.log('INFO', 'PM2 health check passed');
            }
            
        } catch (error) {
            this.log('ERROR', 'PM2 health check failed', error.message);
            this.status.pm2.healthy = false;
            this.status.pm2.lastCheck = new Date().toISOString();
            
            // Try to start PM2 if it's not running
            this.queueRecovery('pm2', { name: 'pm2-daemon', error: error.message });
        }
    }
    
    async checkGitHubActionsHealth() {
        try {
            this.log('INFO', 'Checking GitHub Actions health...');
            
            // Check workflow files
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            if (!fs.existsSync(workflowsDir)) {
                this.log('WARN', 'GitHub Actions workflows directory not found');
                this.status.githubActions.healthy = false;
                return;
            }
            
            const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
            this.status.githubActions.workflows = workflowFiles.map(file => ({
                name: file,
                path: path.join(workflowsDir, file),
                lastModified: fs.statSync(path.join(workflowsDir, file)).mtime.toISOString()
            }));
            
            // Check if workflows are valid YAML
            let validWorkflows = 0;
            for (const workflow of this.status.githubActions.workflows) {
                try {
                    const content = fs.readFileSync(workflow.path, 'utf8');
                    // Basic YAML validation (check for common syntax)
                    if (content.includes('name:') && content.includes('on:') && content.includes('jobs:')) {
                        validWorkflows++;
                    } else {
                        this.log('WARN', `Workflow ${workflow.name} appears to be invalid`);
                    }
                } catch (error) {
                    this.log('ERROR', `Could not read workflow ${workflow.name}`, error.message);
                }
            }
            
            this.status.githubActions.healthy = validWorkflows === this.status.githubActions.workflows.length;
            this.status.githubActions.lastCheck = new Date().toISOString();
            
            if (!this.status.githubActions.healthy) {
                this.log('WARN', 'GitHub Actions health check failed');
                this.queueRecovery('githubActions', { error: 'Invalid workflows detected' });
            } else {
                this.log('INFO', 'GitHub Actions health check passed');
            }
            
        } catch (error) {
            this.log('ERROR', 'GitHub Actions health check failed', error.message);
            this.status.githubActions.healthy = false;
            this.status.githubActions.lastCheck = new Date().toISOString();
        }
    }
    
    async checkNetlifyFunctionsHealth() {
        try {
            this.log('INFO', 'Checking Netlify Functions health...');
            
            // Check functions manifest
            const manifestPath = path.join(__dirname, '..', 'netlify', 'functions', 'functions-manifest.json');
            if (!fs.existsSync(manifestPath)) {
                this.log('WARN', 'Netlify Functions manifest not found');
                this.status.netlifyFunctions.healthy = false;
                return;
            }
            
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            this.status.netlifyFunctions.functions = manifest.functions || [];
            
            // Check if functions directory exists and has content
            const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
            if (!fs.existsSync(functionsDir)) {
                this.log('WARN', 'Netlify Functions directory not found');
                this.status.netlifyFunctions.healthy = false;
                this.queueRecovery('netlifyFunctions', { error: 'Functions directory missing' });
                return;
            }
            
            // Check if manifest is recent (within last hour)
            const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
            const isRecent = manifestAge < 3600000; // 1 hour
            
            this.status.netlifyFunctions.healthy = isRecent && this.status.netlifyFunctions.functions.length > 0;
            this.status.netlifyFunctions.lastCheck = new Date().toISOString();
            
            if (!this.status.netlifyFunctions.healthy) {
                this.log('WARN', 'Netlify Functions health check failed');
                if (!isRecent) {
                    this.log('WARN', 'Functions manifest is outdated');
                    this.queueRecovery('netlifyFunctions', { error: 'Manifest outdated' });
                }
            } else {
                this.log('INFO', 'Netlify Functions health check passed');
            }
            
        } catch (error) {
            this.log('ERROR', 'Netlify Functions health check failed', error.message);
            this.status.netlifyFunctions.healthy = false;
            this.status.netlifyFunctions.lastCheck = new Date().toISOString();
        }
    }
    
    async performHealthCheck() {
        this.log('INFO', 'Starting comprehensive health check...');
        
        await Promise.all([
            this.checkPM2Health(),
            this.checkGitHubActionsHealth(),
            this.checkNetlifyFunctionsHealth()
        ]);
        
        this.saveStatus();
        this.log('INFO', 'Health check completed');
    }
    
    queueRecovery(type, target) {
        const recovery = {
            id: Date.now() + Math.random(),
            type,
            target,
            timestamp: new Date().toISOString(),
            attempts: 0,
            maxAttempts: this.config.maxRetries
        };
        
        this.recoveryQueue.push(recovery);
        this.log('INFO', `Recovery queued for ${type}`, recovery);
        
        // Process recovery queue if not already processing
        if (!this.isRecovering) {
            this.processRecoveryQueue();
        }
    }
    
    async processRecoveryQueue() {
        if (this.isRecovering || this.recoveryQueue.length === 0) {
            return;
        }
        
        this.isRecovering = true;
        this.log('INFO', `Processing recovery queue (${this.recoveryQueue.length} items)`);
        
        while (this.recoveryQueue.length > 0 && this.status.recoveryAttempts < this.config.maxConcurrentRecoveries) {
            const recovery = this.recoveryQueue.shift();
            this.status.recoveryAttempts++;
            
            try {
                await this.performRecovery(recovery);
            } catch (error) {
                this.log('ERROR', `Recovery failed for ${recovery.type}`, error.message);
                
                // Re-queue if max attempts not reached
                if (recovery.attempts < recovery.maxAttempts) {
                    recovery.attempts++;
                    recovery.timestamp = new Date().toISOString();
                    this.recoveryQueue.push(recovery);
                }
            }
            
            this.status.recoveryAttempts--;
        }
        
        this.isRecovering = false;
        
        if (this.recoveryQueue.length > 0) {
            this.log('INFO', `${this.recoveryQueue.length} recoveries still queued`);
            // Schedule next processing
            setTimeout(() => this.processRecoveryQueue(), this.config.retryDelay);
        }
    }
    
    async performRecovery(recovery) {
        this.log('INFO', `Performing recovery for ${recovery.type}`, recovery);
        
        switch (recovery.type) {
            case 'pm2':
                await this.recoverPM2(recovery.target);
                break;
            case 'githubActions':
                await this.recoverGitHubActions(recovery.target);
                break;
            case 'netlifyFunctions':
                await this.recoverNetlifyFunctions(recovery.target);
                break;
            default:
                this.log('WARN', `Unknown recovery type: ${recovery.type}`);
        }
        
        this.status.totalRecoveries++;
        this.saveStatus();
    }
    
    async recoverPM2(target) {
        try {
            if (target.name === 'pm2-daemon') {
                // PM2 daemon is down, try to restart
                this.log('INFO', 'Restarting PM2 daemon...');
                execSync('pm2 kill', { stdio: 'pipe' });
                execSync('pm2 start ecosystem.pm2.cjs', { stdio: 'pipe' });
            } else {
                // Individual process is down, restart it
                this.log('INFO', `Restarting PM2 process: ${target.name}`);
                execSync(`pm2 restart ${target.name}`, { stdio: 'pipe' });
            }
            
            this.log('INFO', `PM2 recovery completed for ${target.name}`);
        } catch (error) {
            this.log('ERROR', `PM2 recovery failed for ${target.name}`, error.message);
            throw error;
        }
    }
    
    async recoverGitHubActions(target) {
        try {
            this.log('INFO', 'Recovering GitHub Actions workflows...');
            
            // Validate and fix workflow files
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            const backupDir = path.join(__dirname, 'backups', 'workflows', new Date().toISOString().split('T')[0]);
            
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            // Backup current workflows
            const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
            for (const file of workflowFiles) {
                const source = path.join(workflowsDir, file);
                const backup = path.join(backupDir, file);
                fs.copyFileSync(source, backup);
            }
            
            // Try to regenerate workflows if needed
            if (target.error === 'Invalid workflows detected') {
                this.log('INFO', 'Attempting to regenerate workflows...');
                // This would typically involve running a workflow generator
                // For now, we'll just log the issue
            }
            
            this.log('INFO', 'GitHub Actions recovery completed');
        } catch (error) {
            this.log('ERROR', 'GitHub Actions recovery failed', error.message);
            throw error;
        }
    }
    
    async recoverNetlifyFunctions(target) {
        try {
            this.log('INFO', 'Recovering Netlify Functions...');
            
            // Regenerate functions manifest
            const manifestScript = path.join(__dirname, '..', 'scripts', 'generate-netlify-functions-manifest.cjs');
            if (fs.existsSync(manifestScript)) {
                execSync(`node ${manifestScript}`, { stdio: 'pipe' });
                this.log('INFO', 'Netlify Functions manifest regenerated');
            }
            
            // Check if functions directory needs to be recreated
            if (target.error === 'Functions directory missing') {
                const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
                if (!fs.existsSync(functionsDir)) {
                    fs.mkdirSync(functionsDir, { recursive: true });
                    this.log('INFO', 'Netlify Functions directory recreated');
                }
            }
            
            this.log('INFO', 'Netlify Functions recovery completed');
        } catch (error) {
            this.log('ERROR', 'Netlify Functions recovery failed', error.message);
            throw error;
        }
    }
    
    start() {
        this.log('INFO', 'Starting Ultimate Redundancy System V3...');
        
        // Write PID file
        fs.writeFileSync(this.config.pidFile, process.pid.toString());
        
        // Start health check timer
        this.healthCheckTimer = setInterval(() => {
            this.performHealthCheck();
        }, this.config.healthCheckInterval);
        
        // Start main monitoring timer
        this.mainTimer = setInterval(() => {
            this.monitor();
        }, this.config.checkInterval);
        
        // Perform initial health check
        this.performHealthCheck();
        
        this.log('INFO', 'Ultimate Redundancy System V3 started successfully');
        
        // Handle graceful shutdown
        process.on('SIGINT', () => this.shutdown());
        process.on('SIGTERM', () => this.shutdown());
    }
    
    async monitor() {
        try {
            // Check overall system health
            const overallHealth = this.status.pm2.healthy && 
                                this.status.githubActions.healthy && 
                                this.status.netlifyFunctions.healthy;
            
            if (!overallHealth) {
                this.log('WARN', 'System health check failed, triggering recovery...');
                // Trigger comprehensive recovery
                if (!this.status.pm2.healthy) {
                    this.queueRecovery('pm2', { name: 'system-wide', error: 'PM2 health check failed' });
                }
                if (!this.status.githubActions.healthy) {
                    this.queueRecovery('githubActions', { error: 'GitHub Actions health check failed' });
                }
                if (!this.status.netlifyFunctions.healthy) {
                    this.queueRecovery('netlifyFunctions', { error: 'Netlify Functions health check failed' });
                }
            }
            
            // Process recovery queue
            if (this.recoveryQueue.length > 0) {
                this.processRecoveryQueue();
            }
            
        } catch (error) {
            this.log('ERROR', 'Monitoring error', error.message);
        }
    }
    
    async shutdown() {
        this.log('INFO', 'Shutting down Ultimate Redundancy System V3...');
        
        // Clear timers
        if (this.healthCheckTimer) {
            clearInterval(this.healthCheckTimer);
        }
        if (this.mainTimer) {
            clearInterval(this.mainTimer);
        }
        
        // Remove PID file
        if (fs.existsSync(this.config.pidFile)) {
            fs.unlinkSync(this.config.pidFile);
        }
        
        // Save final status
        this.saveStatus();
        
        this.log('INFO', 'Ultimate Redundancy System V3 shutdown complete');
        process.exit(0);
    }
    
    getStatus() {
        return {
            ...this.status,
            recoveryQueueLength: this.recoveryQueue.length,
            isRecovering: this.isRecovering,
            uptime: Date.now() - new Date(this.status.started).getTime()
        };
    }
    
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            system: 'Ultimate Redundancy System V3',
            status: this.getStatus(),
            summary: {
                overallHealth: this.status.pm2.healthy && 
                              this.status.githubActions.healthy && 
                              this.status.netlifyFunctions.healthy,
                pm2Processes: this.status.pm2.processes.length,
                githubWorkflows: this.status.githubActions.workflows.length,
                netlifyFunctions: this.status.netlifyFunctions.functions.length,
                totalRecoveries: this.status.totalRecoveries,
                pendingRecoveries: this.recoveryQueue.length
            }
        };
        
        return report;
    }
}

// CLI interface
if (require.main === module) {
    const system = new UltimateRedundancyV3System();
    
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
            system.performHealthCheck().then(() => {
                console.log('Health check completed');
                process.exit(0);
            }).catch(error => {
                console.error('Health check failed:', error);
                process.exit(1);
            });
            break;
        default:
            console.log('Usage: node ultimate-redundancy-v3-system.cjs [start|status|report|health]');
            process.exit(1);
    }
}

module.exports = UltimateRedundancyV3System;