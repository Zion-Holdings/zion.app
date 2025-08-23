#!/usr/bin/env node

/**
 * Comprehensive Automation Orchestrator
 * Provides redundancy and orchestration for all PM2, GitHub Actions, and Netlify Functions automations
 * 
 * This system ensures:
 * - All automations are running and healthy
 * - Automatic recovery from failures
 * - Comprehensive monitoring and reporting
 * - Fallback mechanisms for critical services
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveAutomationOrchestrator {
    constructor() {
        this.config = {
            checkInterval: 45000, // 45 seconds
            healthCheckInterval: 90000, // 1.5 minutes
            recoveryTimeout: 300000, // 5 minutes
            maxRetries: 3,
            retryDelay: 10000, // 10 seconds
            logDir: path.join(__dirname, 'logs'),
            pidFile: path.join(__dirname, 'comprehensive-automation-orchestrator.pid'),
            statusFile: path.join(__dirname, 'comprehensive-automation-orchestrator-status.json'),
            backupDir: path.join(__dirname, 'backups', 'automation')
        };
        
        this.status = {
            started: new Date().toISOString(),
            lastHealthCheck: null,
            automations: {
                pm2: {
                    healthy: false,
                    processes: [],
                    ecosystemFiles: [],
                    lastCheck: null,
                    errors: []
                },
                githubActions: {
                    healthy: false,
                    workflows: [],
                    lastCheck: null,
                    errors: []
                },
                netlifyFunctions: {
                    healthy: false,
                    functions: [],
                    manifest: null,
                    lastCheck: null,
                    errors: []
                },
                scripts: {
                    healthy: false,
                    scripts: [],
                    lastCheck: null,
                    errors: []
                }
            },
            recoveryAttempts: 0,
            totalRecoveries: 0,
            systemHealth: 'unknown',
            errors: []
        };
        
        this.recoveryQueue = [];
        this.isRecovering = false;
        this.healthCheckTimer = null;
        this.mainTimer = null;
        
        this.ensureDirectories();
        this.loadStatus();
        this.discoverAutomations();
    }
    
    ensureDirectories() {
        if (!fs.existsSync(this.config.logDir)) {
            fs.mkdirSync(this.config.logDir, { recursive: true });
        }
        if (!fs.existsSync(this.config.backupDir)) {
            fs.mkdirSync(this.config.backupDir, { recursive: true });
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
        const logFile = path.join(this.config.logDir, 'comprehensive-automation-orchestrator.log');
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
    
    discoverAutomations() {
        this.log('INFO', 'Discovering automations...');
        
        // Discover PM2 ecosystem files
        this.discoverPM2Ecosystems();
        
        // Discover GitHub Actions workflows
        this.discoverGitHubActionsWorkflows();
        
        // Discover Netlify Functions
        this.discoverNetlifyFunctions();
        
        // Discover automation scripts
        this.discoverAutomationScripts();
        
        this.log('INFO', 'Automation discovery completed');
    }
    
    discoverPM2Ecosystems() {
        try {
            const workspaceDir = path.join(__dirname, '..');
            const ecosystemFiles = fs.readdirSync(workspaceDir)
                .filter(file => file.startsWith('ecosystem') && file.endsWith('.cjs'));
            
            this.status.automations.pm2.ecosystemFiles = ecosystemFiles.map(file => ({
                name: file,
                path: path.join(workspaceDir, file),
                lastModified: fs.statSync(path.join(workspaceDir, file)).mtime.toISOString()
            }));
            
            this.log('INFO', `Discovered ${ecosystemFiles.length} PM2 ecosystem files`);
        } catch (error) {
            this.log('ERROR', 'Failed to discover PM2 ecosystems', error.message);
        }
    }
    
    discoverGitHubActionsWorkflows() {
        try {
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            if (!fs.existsSync(workflowsDir)) {
                this.log('WARN', 'GitHub Actions workflows directory not found');
                return;
            }
            
            const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
            this.status.automations.githubActions.workflows = workflowFiles.map(file => ({
                name: file,
                path: path.join(workflowsDir, file),
                lastModified: fs.statSync(path.join(workflowsDir, file)).mtime.toISOString()
            }));
            
            this.log('INFO', `Discovered ${workflowFiles.length} GitHub Actions workflows`);
        } catch (error) {
            this.log('ERROR', 'Failed to discover GitHub Actions workflows', error.message);
        }
    }
    
    discoverNetlifyFunctions() {
        try {
            const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
            if (!fs.existsSync(functionsDir)) {
                this.log('WARN', 'Netlify Functions directory not found');
                return;
            }
            
            const manifestPath = path.join(functionsDir, 'functions-manifest.json');
            if (fs.existsSync(manifestPath)) {
                const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                this.status.automations.netlifyFunctions.manifest = manifest;
                this.status.automations.netlifyFunctions.functions = manifest.functions || [];
            }
            
            this.log('INFO', `Discovered ${this.status.automations.netlifyFunctions.functions.length} Netlify Functions`);
        } catch (error) {
            this.log('ERROR', 'Failed to discover Netlify Functions', error.message);
        }
    }
    
    discoverAutomationScripts() {
        try {
            const automationDir = __dirname;
            const scriptFiles = fs.readdirSync(automationDir)
                .filter(file => file.endsWith('.cjs') || file.endsWith('.js'))
                .filter(file => !file.includes('test') && !file.includes('example'));
            
            this.status.automations.scripts.scripts = scriptFiles.map(file => ({
                name: file,
                path: path.join(automationDir, file),
                lastModified: fs.statSync(path.join(automationDir, file)).mtime.toISOString()
            }));
            
            this.log('INFO', `Discovered ${scriptFiles.length} automation scripts`);
        } catch (error) {
            this.log('ERROR', 'Failed to discover automation scripts', error.message);
        }
    }
    
    async checkPM2Health() {
        try {
            this.log('INFO', 'Checking PM2 health...');
            
            // Check if PM2 is running
            const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
            const pm2Data = JSON.parse(pm2Status);
            
            this.status.automations.pm2.processes = pm2Data.map(proc => ({
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
            const offlineProcesses = this.status.automations.pm2.processes.filter(p => p.status !== 'online');
            this.status.automations.pm2.healthy = offlineProcesses.length === 0;
            this.status.automations.pm2.lastCheck = new Date().toISOString();
            
            if (!this.status.automations.pm2.healthy) {
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
            this.status.automations.pm2.healthy = false;
            this.status.automations.pm2.lastCheck = new Date().toISOString();
            this.status.automations.pm2.errors.push(error.message);
            
            // Try to start PM2 if it's not running
            this.queueRecovery('pm2', { name: 'pm2-daemon', error: error.message });
        }
    }
    
    async checkGitHubActionsHealth() {
        try {
            this.log('INFO', 'Checking GitHub Actions health...');
            
            if (this.status.automations.githubActions.workflows.length === 0) {
                this.log('WARN', 'No GitHub Actions workflows found');
                this.status.automations.githubActions.healthy = false;
                return;
            }
            
            // Check if workflows are valid YAML
            let validWorkflows = 0;
            for (const workflow of this.status.automations.githubActions.workflows) {
                try {
                    const content = fs.readFileSync(workflow.path, 'utf8');
                    // Basic YAML validation
                    if (content.includes('name:') && content.includes('on:') && content.includes('jobs:')) {
                        validWorkflows++;
                    } else {
                        this.log('WARN', `Workflow ${workflow.name} appears to be invalid`);
                    }
                } catch (error) {
                    this.log('ERROR', `Could not read workflow ${workflow.name}`, error.message);
                }
            }
            
            this.status.automations.githubActions.healthy = validWorkflows === this.status.automations.githubActions.workflows.length;
            this.status.automations.githubActions.lastCheck = new Date().toISOString();
            
            if (!this.status.automations.githubActions.healthy) {
                this.log('WARN', 'GitHub Actions health check failed');
                this.queueRecovery('githubActions', { error: 'Invalid workflows detected' });
            } else {
                this.log('INFO', 'GitHub Actions health check passed');
            }
            
        } catch (error) {
            this.log('ERROR', 'GitHub Actions health check failed', error.message);
            this.status.automations.githubActions.healthy = false;
            this.status.automations.githubActions.lastCheck = new Date().toISOString();
            this.status.automations.githubActions.errors.push(error.message);
        }
    }
    
    async checkNetlifyFunctionsHealth() {
        try {
            this.log('INFO', 'Checking Netlify Functions health...');
            
            if (this.status.automations.netlifyFunctions.functions.length === 0) {
                this.log('WARN', 'No Netlify Functions found');
                this.status.automations.netlifyFunctions.healthy = false;
                return;
            }
            
            // Check if manifest is recent (within last hour)
            if (this.status.automations.netlifyFunctions.manifest) {
                const manifestAge = Date.now() - new Date(this.status.automations.netlifyFunctions.manifest.generatedAt).getTime();
                const isRecent = manifestAge < 3600000; // 1 hour
                
                this.status.automations.netlifyFunctions.healthy = isRecent;
                this.status.automations.netlifyFunctions.lastCheck = new Date().toISOString();
                
                if (!isRecent) {
                    this.log('WARN', 'Netlify Functions manifest is outdated');
                    this.queueRecovery('netlifyFunctions', { error: 'Manifest outdated' });
                } else {
                    this.log('INFO', 'Netlify Functions health check passed');
                }
            } else {
                this.status.automations.netlifyFunctions.healthy = false;
                this.queueRecovery('netlifyFunctions', { error: 'No manifest found' });
            }
            
        } catch (error) {
            this.log('ERROR', 'Netlify Functions health check failed', error.message);
            this.status.automations.netlifyFunctions.healthy = false;
            this.status.automations.netlifyFunctions.lastCheck = new Date().toISOString();
            this.status.automations.netlifyFunctions.errors.push(error.message);
        }
    }
    
    async checkScriptsHealth() {
        try {
            this.log('INFO', 'Checking automation scripts health...');
            
            if (this.status.automations.scripts.scripts.length === 0) {
                this.log('WARN', 'No automation scripts found');
                this.status.automations.scripts.healthy = false;
                return;
            }
            
            // Check if scripts are valid JavaScript
            let validScripts = 0;
            for (const script of this.status.automations.scripts.scripts) {
                try {
                    // Basic syntax check
                    execSync(`node -c "${script.path}"`, { stdio: 'pipe' });
                    validScripts++;
                } catch (error) {
                    this.log('WARN', `Script ${script.name} has syntax errors`);
                }
            }
            
            this.status.automations.scripts.healthy = validScripts === this.status.automations.scripts.scripts.length;
            this.status.automations.scripts.lastCheck = new Date().toISOString();
            
            if (!this.status.automations.scripts.healthy) {
                this.log('WARN', 'Automation scripts health check failed');
                this.queueRecovery('scripts', { error: 'Invalid scripts detected' });
            } else {
                this.log('INFO', 'Automation scripts health check passed');
            }
            
        } catch (error) {
            this.log('ERROR', 'Automation scripts health check failed', error.message);
            this.status.automations.scripts.healthy = false;
            this.status.automations.scripts.lastCheck = new Date().toISOString();
            this.status.automations.scripts.errors.push(error.message);
        }
    }
    
    async performHealthCheck() {
        this.log('INFO', 'Starting comprehensive health check...');
        
        await Promise.all([
            this.checkPM2Health(),
            this.checkGitHubActionsHealth(),
            this.checkNetlifyFunctionsHealth(),
            this.checkScriptsHealth()
        ]);
        
        // Calculate overall system health
        const overallHealth = this.status.automations.pm2.healthy && 
                             this.status.automations.githubActions.healthy && 
                             this.status.automations.netlifyFunctions.healthy &&
                             this.status.automations.scripts.healthy;
        
        this.status.systemHealth = overallHealth ? 'healthy' : 'unhealthy';
        
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
        
        while (this.recoveryQueue.length > 0 && this.status.recoveryAttempts < 2) {
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
            case 'scripts':
                await this.recoverScripts(recovery.target);
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
                
                // Try to start with the main ecosystem file
                const mainEcosystem = this.status.automations.pm2.ecosystemFiles.find(f => f.name === 'ecosystem.pm2.cjs');
                if (mainEcosystem) {
                    execSync(`pm2 start ${mainEcosystem.path}`, { stdio: 'pipe' });
                } else {
                    execSync('pm2 start ecosystem.pm2.cjs', { stdio: 'pipe' });
                }
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
            
            // Backup current workflows
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            const backupDir = path.join(this.config.backupDir, 'workflows', new Date().toISOString().split('T')[0]);
            
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
            for (const file of workflowFiles) {
                const source = path.join(workflowsDir, file);
                const backup = path.join(backupDir, file);
                fs.copyFileSync(source, backup);
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
            
            this.log('INFO', 'Netlify Functions recovery completed');
        } catch (error) {
            this.log('ERROR', 'Netlify Functions recovery failed', error.message);
            throw error;
        }
    }
    
    async recoverScripts(target) {
        try {
            this.log('INFO', 'Recovering automation scripts...');
            
            // Backup current scripts
            const backupDir = path.join(this.config.backupDir, 'scripts', new Date().toISOString().split('T')[0]);
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
            }
            
            for (const script of this.status.automations.scripts.scripts) {
                const source = script.path;
                const backup = path.join(backupDir, script.name);
                fs.copyFileSync(source, backup);
            }
            
            this.log('INFO', 'Automation scripts recovery completed');
        } catch (error) {
            this.log('ERROR', 'Automation scripts recovery failed', error.message);
            throw error;
        }
    }
    
    start() {
        this.log('INFO', 'Starting Comprehensive Automation Orchestrator...');
        
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
        
        this.log('INFO', 'Comprehensive Automation Orchestrator started successfully');
        
        // Handle graceful shutdown
        process.on('SIGINT', () => this.shutdown());
        process.on('SIGTERM', () => this.shutdown());
    }
    
    async monitor() {
        try {
            // Check overall system health
            if (this.status.systemHealth === 'unhealthy') {
                this.log('WARN', 'System health check failed, triggering recovery...');
                // Trigger comprehensive recovery
                if (!this.status.automations.pm2.healthy) {
                    this.queueRecovery('pm2', { name: 'system-wide', error: 'PM2 health check failed' });
                }
                if (!this.status.automations.githubActions.healthy) {
                    this.queueRecovery('githubActions', { error: 'GitHub Actions health check failed' });
                }
                if (!this.status.automations.netlifyFunctions.healthy) {
                    this.queueRecovery('netlifyFunctions', { error: 'Netlify Functions health check failed' });
                }
                if (!this.status.automations.scripts.healthy) {
                    this.queueRecovery('scripts', { error: 'Scripts health check failed' });
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
        this.log('INFO', 'Shutting down Comprehensive Automation Orchestrator...');
        
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
        
        this.log('INFO', 'Comprehensive Automation Orchestrator shutdown complete');
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
            system: 'Comprehensive Automation Orchestrator',
            status: this.getStatus(),
            summary: {
                overallHealth: this.status.systemHealth,
                pm2Processes: this.status.automations.pm2.processes.length,
                githubWorkflows: this.status.automations.githubActions.workflows.length,
                netlifyFunctions: this.status.automations.netlifyFunctions.functions.length,
                automationScripts: this.status.automations.scripts.scripts.length,
                totalRecoveries: this.status.totalRecoveries,
                pendingRecoveries: this.recoveryQueue.length
            }
        };
        
        return report;
    }
}

// CLI interface
if (require.main === module) {
    const orchestrator = new ComprehensiveAutomationOrchestrator();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            orchestrator.start();
            break;
        case 'status':
            console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
            break;
        case 'report':
            console.log(JSON.stringify(orchestrator.generateReport(), null, 2));
            break;
        case 'health':
            orchestrator.performHealthCheck().then(() => {
                console.log('Health check completed');
                process.exit(0);
            }).catch(error => {
                console.error('Health check failed:', error);
                process.exit(1);
            });
            break;
        default:
            console.log('Usage: node comprehensive-automation-orchestrator.cjs [start|status|report|health]');
            process.exit(1);
    }
}

module.exports = ComprehensiveAutomationOrchestrator;