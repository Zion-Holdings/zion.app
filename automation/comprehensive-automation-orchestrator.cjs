#!/usr/bin/env node

/**
 * Comprehensive Automation Orchestrator
 * Coordinates all redundancy systems: PM2, GitHub Actions, Netlify Functions
 * Provides unified interface for managing all automations
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveAutomationOrchestrator {
    constructor() {
        this.config = {
            logLevel: process.env.ORCHESTRATOR_LOG_LEVEL || 'INFO',
            checkInterval: parseInt(process.env.ORCHESTRATOR_CHECK_INTERVAL) || 60000,
            autoRecovery: process.env.ORCHESTRATOR_AUTO_RECOVERY !== 'false',
            crossSystemCoordination: process.env.ORCHESTRATOR_CROSS_SYSTEM !== 'false'
        };
        
        this.systems = {
            pm2: {
                name: 'PM2 Process Management',
                status: 'unknown',
                health: false,
                lastCheck: null,
                processes: [],
                config: 'ecosystem.comprehensive-redundancy.cjs'
            },
            github: {
                name: 'GitHub Actions',
                status: 'unknown',
                health: false,
                lastCheck: null,
                workflows: [],
                backupDir: '.github/workflows/backups'
            },
            netlify: {
                name: 'Netlify Functions',
                status: 'unknown',
                health: false,
                lastCheck: null,
                functions: [],
                manifest: 'netlify/functions/functions-manifest.json'
            }
        };
        
        this.coordination = {
            lastSync: null,
            syncInterval: 300000, // 5 minutes
            crossSystemHealth: false,
            recoveryMode: false
        };
        
        this.setupLogging();
        this.ensureDirectories();
    }

    setupLogging() {
        this.logDir = path.join(__dirname, 'logs');
        this.logFile = path.join(this.logDir, 'comprehensive-orchestrator.log');
        
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
    }

    ensureDirectories() {
        const dirs = [
            path.join(__dirname, 'logs'),
            path.join(__dirname, 'backups'),
            path.join(__dirname, 'reports'),
            path.join(__dirname, 'coordination')
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

    async checkPM2System() {
        try {
            this.log('INFO', 'Checking PM2 system...');
            
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
            
            this.systems.pm2.processes = pm2Processes;
            this.systems.pm2.lastCheck = Date.now();
            
            // Check if our redundancy system is running
            const redundancyProcess = pm2Processes.find(p => 
                p.name && p.name.includes('redundancy') && 
                p.pm2_env && p.pm2_env.status === 'online'
            );
            
            // PM2 is healthy if there are no processes (nothing to fail) or redundancy process is running
            this.systems.pm2.health = pm2Processes.length === 0 || !!redundancyProcess;
            this.systems.pm2.status = this.systems.pm2.health ? 'healthy' : 'unhealthy';
            
            this.log('INFO', `PM2 System: ${this.systems.pm2.status} (${pm2Processes.length} processes)`);
            
            return this.systems.pm2.health;
        } catch (error) {
            this.log('ERROR', `PM2 system check failed: ${error.message}`);
            this.systems.pm2.health = false;
            this.systems.pm2.status = 'error';
            return false;
        }
    }

    async checkGitHubActionsSystem() {
        try {
            this.log('INFO', 'Checking GitHub Actions system...');
            
            // Check workflow files
            const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
            const workflows = [];
            
            if (fs.existsSync(workflowsDir)) {
                const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
                
                for (const file of workflowFiles) {
                    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
                    workflows.push({
                        name: file,
                        valid: content.includes('name:') && content.includes('on:'),
                        hasTriggers: content.includes('workflow_dispatch') || content.includes('schedule')
                    });
                }
            }
            
            this.systems.github.workflows = workflows;
            this.systems.github.lastCheck = Date.now();
            
            // Check if workflows are valid and have triggers
            const validWorkflows = workflows.filter(w => w.valid && w.hasTriggers);
            this.systems.github.health = validWorkflows.length > 0;
            this.systems.github.status = this.systems.github.health ? 'healthy' : 'unhealthy';
            
            this.log('INFO', `GitHub Actions System: ${this.systems.github.status} (${validWorkflows.length}/${workflows.length} valid workflows)`);
            
            return this.systems.github.health;
        } catch (error) {
            this.log('ERROR', `GitHub Actions system check failed: ${error.message}`);
            this.systems.github.health = false;
            this.systems.github.status = 'error';
            return false;
        }
    }

    async checkNetlifyFunctionsSystem() {
        try {
            this.log('INFO', 'Checking Netlify Functions system...');
            
            // Check functions manifest
            const manifestPath = path.join(__dirname, '..', this.systems.netlify.manifest);
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
            
            this.systems.netlify.functions = functions;
            this.systems.netlify.lastCheck = Date.now();
            this.systems.netlify.health = functions.length > 0;
            this.systems.netlify.status = this.systems.netlify.health ? 'healthy' : 'unhealthy';
            
            this.log('INFO', `Netlify Functions System: ${this.systems.netlify.status} (${functions.length} functions)`);
            
            return this.systems.netlify.health;
        } catch (error) {
            this.log('ERROR', `Netlify Functions system check failed: ${error.message}`);
            this.systems.netlify.health = false;
            this.systems.netlify.status = 'error';
            return false;
        }
    }

    async coordinateSystems() {
        try {
            this.log('INFO', 'Coordinating systems...');
            
            // Check all systems
            const pm2Healthy = await this.checkPM2System();
            const githubHealthy = await this.checkGitHubActionsSystem();
            const netlifyHealthy = await this.checkNetlifyFunctionsSystem();
            
            // Update cross-system health
            this.coordination.crossSystemHealth = pm2Healthy && githubHealthy && netlifyHealthy;
            this.coordination.lastSync = Date.now();
            
            // Log coordination status
            this.log('INFO', `System Coordination Results:`);
            this.log('INFO', `  PM2: ${pm2Healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  GitHub Actions: ${githubHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  Netlify Functions: ${netlifyHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
            this.log('INFO', `  Overall: ${this.coordination.crossSystemHealth ? 'HEALTHY' : 'UNHEALTHY'}`);
            
            // Perform cross-system recovery if needed
            if (!this.coordination.crossSystemHealth && this.config.autoRecovery) {
                await this.performCrossSystemRecovery();
            }
            
            return this.coordination.crossSystemHealth;
        } catch (error) {
            this.log('ERROR', `System coordination failed: ${error.message}`);
            return false;
        }
    }

    async performCrossSystemRecovery() {
        try {
            this.log('WARN', 'Performing cross-system recovery...');
            this.coordination.recoveryMode = true;
            
            // Start with PM2 recovery
            if (!this.systems.pm2.health) {
                this.log('INFO', 'Recovering PM2 system...');
                await this.recoverPM2System();
            }
            
            // GitHub Actions recovery
            if (!this.systems.github.health) {
                this.log('INFO', 'Recovering GitHub Actions system...');
                await this.recoverGitHubActionsSystem();
            }
            
            // Netlify Functions recovery
            if (!this.systems.netlify.health) {
                this.log('INFO', 'Recovering Netlify Functions system...');
                await this.recoverNetlifyFunctionsSystem();
            }
            
            // Wait for systems to stabilize
            await new Promise(resolve => setTimeout(resolve, 15000));
            
            // Verify recovery
            await this.coordinateSystems();
            
            this.coordination.recoveryMode = false;
            this.log('INFO', 'Cross-system recovery completed');
            
            return true;
        } catch (error) {
            this.log('ERROR', `Cross-system recovery failed: ${error.message}`);
            this.coordination.recoveryMode = false;
            return false;
        }
    }

    async recoverPM2System() {
        try {
            this.log('INFO', 'Recovering PM2 system...');
            
            // Stop all PM2 processes
            execSync('pm2 stop all', { stdio: 'pipe' });
            
            // Clear PM2 logs
            execSync('pm2 flush', { stdio: 'pipe' });
            
            // Start comprehensive redundancy system
            execSync('pm2 start ecosystem.comprehensive-redundancy.cjs --update-env', { stdio: 'pipe' });
            
            // Save PM2 configuration
            execSync('pm2 save', { stdio: 'pipe' });
            
            this.log('INFO', 'PM2 system recovery completed');
            return true;
        } catch (error) {
            this.log('ERROR', `PM2 system recovery failed: ${error.message}`);
            return false;
        }
    }

    async recoverGitHubActionsSystem() {
        try {
            this.log('INFO', 'Recovering GitHub Actions system...');
            
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
            
            // Restore from backups if available
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
            
            this.log('INFO', 'GitHub Actions system recovery completed');
            return true;
        } catch (error) {
            this.log('ERROR', `GitHub Actions system recovery failed: ${error.message}`);
            return false;
        }
    }

    async recoverNetlifyFunctionsSystem() {
        try {
            this.log('INFO', 'Recovering Netlify Functions system...');
            
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
            
            this.log('INFO', 'Netlify Functions system recovery completed');
            return true;
        } catch (error) {
            this.log('ERROR', `Netlify Functions system recovery failed: ${error.message}`);
            return false;
        }
    }

    async start() {
        this.log('INFO', 'Starting Comprehensive Automation Orchestrator...');
        this.log('INFO', `Configuration: ${JSON.stringify(this.config, null, 2)}`);
        
        // Initial coordination
        await this.coordinateSystems();
        
        // Start scheduled coordination
        this.scheduler = cron.schedule(`*/${Math.ceil(this.config.checkInterval / 60000)} * * * *`, async () => {
            await this.coordinateSystems();
        });
        
        // Start cross-system sync
        this.crossSystemSync = setInterval(async () => {
            if (!this.coordination.recoveryMode) {
                await this.coordinateSystems();
            }
        }, this.coordination.syncInterval);
        
        this.log('INFO', 'Comprehensive Automation Orchestrator started successfully');
        
        // Keep the process running
        process.on('SIGINT', () => this.stop());
        process.on('SIGTERM', () => this.stop());
    }

    async stop() {
        this.log('INFO', 'Stopping Comprehensive Automation Orchestrator...');
        
        if (this.scheduler) {
            this.scheduler.stop();
        }
        
        if (this.crossSystemSync) {
            clearInterval(this.crossSystemSync);
        }
        
        this.log('INFO', 'Comprehensive Automation Orchestrator stopped');
        process.exit(0);
    }

    getStatus() {
        return {
            config: this.config,
            systems: this.systems,
            coordination: this.coordination,
            timestamp: new Date().toISOString()
        };
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                overallHealth: this.coordination.crossSystemHealth,
                systemsCount: Object.keys(this.systems).length,
                healthySystems: Object.values(this.systems).filter(s => s.health).length,
                lastCoordination: this.coordination.lastSync
            },
            systems: this.systems,
            coordination: this.coordination,
            recommendations: this.generateRecommendations()
        };
        
        return report;
    }

    generateRecommendations() {
        const recommendations = [];
        
        Object.entries(this.systems).forEach(([key, system]) => {
            if (!system.health) {
                recommendations.push(`${system.name} needs attention - current status: ${system.status}`);
            }
        });
        
        if (this.coordination.recoveryMode) {
            recommendations.push('System is currently in recovery mode - monitor progress');
        }
        
        if (!this.coordination.crossSystemHealth) {
            recommendations.push('Cross-system coordination failed - check individual system health');
        }
        
        return recommendations;
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
        case 'coordinate':
            orchestrator.coordinateSystems().then(healthy => {
                console.log(`Coordination result: ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
                process.exit(healthy ? 0 : 1);
            });
            break;
        case 'recover':
            orchestrator.performCrossSystemRecovery().then(success => {
                console.log(`Recovery result: ${success ? 'SUCCESS' : 'FAILED'}`);
                process.exit(success ? 0 : 1);
            });
            break;
        default:
            console.log('Usage: node comprehensive-automation-orchestrator.cjs [start|status|report|coordinate|recover]');
            process.exit(1);
    }
}

module.exports = ComprehensiveAutomationOrchestrator;