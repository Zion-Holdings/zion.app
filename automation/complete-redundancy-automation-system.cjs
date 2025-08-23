#!/usr/bin/env node

/**
 * Complete Redundancy Automation System
 * Provides comprehensive redundancy for all automation systems:
 * - PM2 automations
 * - GitHub Actions automations  
 * - Netlify functions automations
 * - Build automation redundancy
 * - Health monitoring redundancy
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync, spawn } = require('child_process');
const cron = require('node-cron');

class CompleteRedundancyAutomationSystem {
    constructor() {
        this.workspaceDir = process.cwd();
        this.logDir = path.join(this.workspaceDir, 'automation', 'logs');
        this.configFile = path.join(this.workspaceDir, 'automation', 'redundancy-config.json');
        this.statusFile = path.join(this.workspaceDir, 'automation', 'complete-redundancy-status.json');
        this.pidFile = path.join(this.logDir, 'complete-redundancy.pid');
        
        this.ensureDirectories();
        this.loadConfig();
        this.initializeStatus();
        
        // Redundancy layers
        this.redundancyLayers = {
            pm2: [],
            githubActions: [],
            netlifyFunctions: [],
            build: [],
            health: []
        };
        
        this.isRunning = false;
        this.healthCheckInterval = null;
        this.redundancyCheckInterval = null;
    }

    ensureDirectories() {
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
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
            redundancy: {
                enabled: true,
                layers: 3,
                healthCheckInterval: 30000,
                redundancyCheckInterval: 60000,
                maxRetries: 3,
                retryDelay: 5000
            },
            pm2: {
                enabled: true,
                ecosystems: [
                    'ecosystem.pm2.cjs',
                    'ecosystem.redundancy.cjs',
                    'ecosystem.comprehensive-redundancy.cjs',
                    'ecosystem.ultimate-redundancy.pm2.cjs'
                ],
                healthCheckScripts: [
                    'automation/pm2-redundancy-monitor.cjs',
                    'automation/pm2-redundancy-manager.cjs'
                ]
            },
            githubActions: {
                enabled: true,
                workflows: [
                    '.github/workflows/marketing-sync.yml',
                    '.github/workflows/sync-health.yml'
                ],
                backupWorkflows: [
                    '.github/workflows/marketing-sync-backup.yml',
                    '.github/workflows/sync-health-backup.yml'
                ],
                healthCheckScripts: [
                    'automation/github-actions-redundancy.cjs',
                    'automation/github-actions-redundancy-manager.cjs'
                ]
            },
            netlifyFunctions: {
                enabled: true,
                manifestFile: 'netlify/functions/functions-manifest.json',
                healthCheckScripts: [
                    'automation/netlify-functions-redundancy.cjs',
                    'automation/netlify-functions-redundancy-manager.cjs'
                ]
            },
            build: {
                enabled: true,
                scripts: [
                    'npm run build',
                    'npm run build:heal',
                    'npm run build:smart'
                ],
                healthCheckScripts: [
                    'automation/build-failure-recovery.cjs',
                    'automation/continuous-build-monitor.cjs'
                ]
            },
            health: {
                enabled: true,
                monitors: [
                    'automation/redundancy-health-monitor.cjs',
                    'automation/comprehensive-monitoring-dashboard.cjs'
                ]
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
            startedAt: new Date().toISOString(),
            lastHealthCheck: null,
            lastRedundancyCheck: null,
            layers: {
                pm2: { status: 'unknown', lastCheck: null, errors: [] },
                githubActions: { status: 'unknown', lastCheck: null, errors: [] },
                netlifyFunctions: { status: 'unknown', lastCheck: null, errors: [] },
                build: { status: 'unknown', lastCheck: null, errors: [] },
                health: { status: 'unknown', lastCheck: null, errors: [] }
            },
            overallHealth: 'unknown',
            totalChecks: 0,
            successfulChecks: 0,
            failedChecks: 0
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
        
        console.log(`[${timestamp}] [${level}] ${message}`);
        
        if (data) {
            console.log(JSON.stringify(data, null, 2));
        }
        
        // Save to log file
        const logFile = path.join(this.logDir, 'complete-redundancy.log');
        try {
            fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
        } catch (error) {
            console.error('Error writing to log file:', error);
        }
    }

    async start() {
        if (this.isRunning) {
            this.log('WARN', 'Complete redundancy system is already running');
            return;
        }

        this.log('INFO', 'Starting Complete Redundancy Automation System...');
        
        try {
            // Write PID file
            fs.writeFileSync(this.pidFile, process.pid.toString());
            
            // Start all redundancy layers
            await this.startPM2Redundancy();
            await this.startGitHubActionsRedundancy();
            await this.startNetlifyFunctionsRedundancy();
            await this.startBuildRedundancy();
            await this.startHealthRedundancy();
            
            // Start monitoring
            this.startHealthMonitoring();
            this.startRedundancyMonitoring();
            
            this.isRunning = true;
            this.log('INFO', 'Complete Redundancy Automation System started successfully');
            
            // Keep the process alive
            process.on('SIGINT', () => this.stop());
            process.on('SIGTERM', () => this.stop());
            
        } catch (error) {
            this.log('ERROR', 'Failed to start Complete Redundancy Automation System', error);
            throw error;
        }
    }

    async startPM2Redundancy() {
        this.log('INFO', 'Starting PM2 redundancy layer...');
        
        try {
            // Check if PM2 is available
            if (!this.isCommandAvailable('pm2')) {
                this.log('WARN', 'PM2 is not available, skipping PM2 redundancy');
                this.status.layers.pm2.status = 'skipped';
                this.status.layers.pm2.lastCheck = new Date().toISOString();
                this.saveStatus();
                return;
            }
            
            // Start all configured ecosystems
            if (this.config.pm2 && this.config.pm2.ecosystems) {
                for (const ecosystem of this.config.pm2.ecosystems) {
                    const ecosystemPath = path.join(this.workspaceDir, ecosystem);
                    if (fs.existsSync(ecosystemPath)) {
                        try {
                            execSync(`pm2 start ${ecosystem} --update-env`, { 
                                cwd: this.workspaceDir,
                                stdio: 'pipe'
                            });
                            this.log('INFO', `Started PM2 ecosystem: ${ecosystem}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start PM2 ecosystem: ${ecosystem}`, error.message);
                        }
                    }
                }
            }
            
            // Start health check scripts
            if (this.config.pm2 && this.config.pm2.healthCheckScripts) {
                for (const script of this.config.pm2.healthCheckScripts) {
                    const scriptPath = path.join(this.workspaceDir, script);
                    if (fs.existsSync(scriptPath)) {
                        try {
                            spawn('node', [script], {
                                cwd: this.workspaceDir,
                                stdio: 'pipe',
                                detached: true
                            });
                            this.log('INFO', `Started PM2 health check script: ${script}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start PM2 health check script: ${script}`, error.message);
                        }
                    }
                }
            }
            
            this.status.layers.pm2.status = 'running';
            this.status.layers.pm2.lastCheck = new Date().toISOString();
            this.saveStatus();
            
        } catch (error) {
            this.log('ERROR', 'Failed to start PM2 redundancy layer', error);
            this.status.layers.pm2.status = 'failed';
            this.status.layers.pm2.errors.push(error.message);
            this.saveStatus();
        }
    }

    async startGitHubActionsRedundancy() {
        this.log('INFO', 'Starting GitHub Actions redundancy layer...');
        
        try {
            // Verify workflows exist
            if (this.config.githubActions && this.config.githubActions.workflows) {
                const workflowsExist = this.config.githubActions.workflows.every(workflow => 
                    fs.existsSync(path.join(this.workspaceDir, workflow))
                );
                
                if (!workflowsExist) {
                    this.log('WARN', 'Some GitHub Actions workflows are missing');
                }
            }
            
            // Start health check scripts
            if (this.config.githubActions && this.config.githubActions.healthCheckScripts) {
                for (const script of this.config.githubActions.healthCheckScripts) {
                    const scriptPath = path.join(this.workspaceDir, script);
                    if (fs.existsSync(scriptPath)) {
                        try {
                            spawn('node', [script], {
                                cwd: this.workspaceDir,
                                stdio: 'pipe',
                                detached: true
                            });
                            this.log('INFO', `Started GitHub Actions health check script: ${script}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start GitHub Actions health check script: ${script}`, error.message);
                        }
                    }
                }
            }
            
            this.status.layers.githubActions.status = 'running';
            this.status.layers.githubActions.lastCheck = new Date().toISOString();
            this.saveStatus();
            
        } catch (error) {
            this.log('ERROR', 'Failed to start GitHub Actions redundancy layer', error);
            this.status.layers.githubActions.status = 'failed';
            this.status.layers.githubActions.errors.push(error.message);
            this.saveStatus();
        }
    }

    async startNetlifyFunctionsRedundancy() {
        this.log('INFO', 'Starting Netlify Functions redundancy layer...');
        
        try {
            // Verify manifest exists
            if (this.config.netlifyFunctions && this.config.netlifyFunctions.manifestFile) {
                const manifestPath = path.join(this.workspaceDir, this.config.netlifyFunctions.manifestFile);
                if (!fs.existsSync(manifestPath)) {
                    this.log('WARN', 'Netlify functions manifest not found');
                }
            }
            
            // Start health check scripts
            if (this.config.netlifyFunctions && this.config.netlifyFunctions.healthCheckScripts) {
                for (const script of this.config.netlifyFunctions.healthCheckScripts) {
                    const scriptPath = path.join(this.workspaceDir, script);
                    if (fs.existsSync(scriptPath)) {
                        try {
                            spawn('node', [script], {
                                cwd: this.workspaceDir,
                                stdio: 'pipe',
                                detached: true
                            });
                            this.log('INFO', `Started Netlify Functions health check script: ${script}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start Netlify Functions health check script: ${script}`, error.message);
                        }
                    }
                }
            }
            
            this.status.layers.netlifyFunctions.status = 'running';
            this.status.layers.netlifyFunctions.lastCheck = new Date().toISOString();
            this.saveStatus();
            
        } catch (error) {
            this.log('ERROR', 'Failed to start Netlify Functions redundancy layer', error);
            this.status.layers.netlifyFunctions.status = 'failed';
            this.status.layers.netlifyFunctions.errors.push(error.message);
            this.saveStatus();
        }
    }

    async startBuildRedundancy() {
        this.log('INFO', 'Starting Build redundancy layer...');
        
        try {
            // Start health check scripts
            if (this.config.build && this.config.build.healthCheckScripts) {
                for (const script of this.config.build.healthCheckScripts) {
                    const scriptPath = path.join(this.workspaceDir, script);
                    if (fs.existsSync(scriptPath)) {
                        try {
                            spawn('node', [script], {
                                cwd: this.workspaceDir,
                                stdio: 'pipe',
                                detached: true
                            });
                            this.log('INFO', `Started Build health check script: ${script}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start Build health check script: ${script}`, error.message);
                        }
                    }
                }
            }
            
            this.status.layers.build.status = 'running';
            this.status.layers.build.lastCheck = new Date().toISOString();
            this.saveStatus();
            
        } catch (error) {
            this.log('ERROR', 'Failed to start Build redundancy layer', error);
            this.status.layers.build.status = 'failed';
            this.status.layers.build.errors.push(error.message);
            this.saveStatus();
        }
    }

    async startHealthRedundancy() {
        this.log('INFO', 'Starting Health redundancy layer...');
        
        try {
            // Start monitoring scripts
            if (this.config.health && this.config.health.monitors) {
                for (const monitor of this.config.health.monitors) {
                    const monitorPath = path.join(this.workspaceDir, monitor);
                    if (fs.existsSync(monitorPath)) {
                        try {
                            spawn('node', [monitor], {
                                cwd: this.workspaceDir,
                                stdio: 'pipe',
                                detached: true
                            });
                            this.log('INFO', `Started Health monitor: ${monitor}`);
                        } catch (error) {
                            this.log('WARN', `Failed to start Health monitor: ${monitor}`, error.message);
                        }
                    }
                }
            }
            
            this.status.layers.health.status = 'running';
            this.status.layers.health.lastCheck = new Date().toISOString();
            this.saveStatus();
            
        } catch (error) {
            this.log('ERROR', 'Failed to start Health redundancy layer', error);
            this.status.layers.health.status = 'failed';
            this.status.layers.health.errors.push(error.message);
            this.saveStatus();
        }
    }

    startHealthMonitoring() {
        this.healthCheckInterval = setInterval(async () => {
            await this.performHealthCheck();
        }, this.config.redundancy.healthCheckInterval);
        
        this.log('INFO', 'Health monitoring started');
    }

    startRedundancyMonitoring() {
        this.redundancyCheckInterval = setInterval(async () => {
            await this.performRedundancyCheck();
        }, this.config.redundancy.redundancyCheckInterval);
        
        this.log('INFO', 'Redundancy monitoring started');
    }

    async performHealthCheck() {
        this.log('INFO', 'Performing health check...');
        
        try {
            this.status.lastHealthCheck = new Date().toISOString();
            this.status.totalChecks++;
            
            let healthyLayers = 0;
            const totalLayers = Object.keys(this.status.layers).length;
            
            // Check PM2 health
            if (this.config.pm2 && this.config.pm2.enabled) {
                try {
                    if (this.isCommandAvailable('pm2')) {
                        const pm2Status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
                        if (pm2Status.includes('online')) {
                            this.status.layers.pm2.status = 'healthy';
                            healthyLayers++;
                        } else {
                            this.status.layers.pm2.status = 'unhealthy';
                        }
                    } else {
                        this.status.layers.pm2.status = 'skipped';
                        healthyLayers++; // Count as healthy if not needed
                    }
                } catch (error) {
                    this.status.layers.pm2.status = 'error';
                    this.status.layers.pm2.errors.push(error.message);
                }
            } else {
                this.status.layers.pm2.status = 'skipped';
                healthyLayers++; // Count as healthy if not needed
            }
            
            // Check GitHub Actions health
            if (this.config.githubActions && this.config.githubActions.enabled) {
                try {
                    if (this.config.githubActions.workflows) {
                        const workflowsExist = this.config.githubActions.workflows.every(workflow => 
                            fs.existsSync(path.join(this.workspaceDir, workflow))
                        );
                        if (workflowsExist) {
                            this.status.layers.githubActions.status = 'healthy';
                            healthyLayers++;
                        } else {
                            this.status.layers.githubActions.status = 'unhealthy';
                        }
                    } else {
                        this.status.layers.githubActions.status = 'healthy';
                        healthyLayers++;
                    }
                } catch (error) {
                    this.status.layers.githubActions.status = 'error';
                    this.status.layers.githubActions.errors.push(error.message);
                }
            } else {
                this.status.layers.githubActions.status = 'skipped';
                healthyLayers++; // Count as healthy if not needed
            }
            
            // Check Netlify Functions health
            if (this.config.netlifyFunctions && this.config.netlifyFunctions.enabled) {
                try {
                    if (this.config.netlifyFunctions.manifestFile) {
                        const manifestPath = path.join(this.workspaceDir, this.config.netlifyFunctions.manifestFile);
                        if (fs.existsSync(manifestPath)) {
                            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                            if (manifest.functions && manifest.functions.length > 0) {
                                this.status.layers.netlifyFunctions.status = 'healthy';
                                healthyLayers++;
                            } else {
                                this.status.layers.netlifyFunctions.status = 'unhealthy';
                            }
                        } else {
                            this.status.layers.netlifyFunctions.status = 'unhealthy';
                        }
                    } else {
                        this.status.layers.netlifyFunctions.status = 'healthy';
                        healthyLayers++;
                    }
                } catch (error) {
                    this.status.layers.netlifyFunctions.status = 'error';
                    this.status.layers.netlifyFunctions.errors.push(error.message);
                }
            } else {
                this.status.layers.netlifyFunctions.status = 'skipped';
                healthyLayers++; // Count as healthy if not needed
            }
            
            // Check Build health
            if (this.config.build && this.config.build.enabled) {
                try {
                    const packageJsonPath = path.join(this.workspaceDir, 'package.json');
                    if (fs.existsSync(packageJsonPath)) {
                        this.status.layers.build.status = 'healthy';
                        healthyLayers++;
                    } else {
                        this.status.layers.build.status = 'unhealthy';
                    }
                } catch (error) {
                    this.status.layers.build.status = 'error';
                    this.status.layers.build.errors.push(error.message);
                }
            } else {
                this.status.layers.build.status = 'skipped';
                healthyLayers++; // Count as healthy if not needed
            }
            
            // Check Health monitors
            if (this.config.health && this.config.health.enabled) {
                try {
                    this.status.layers.health.status = 'healthy';
                    healthyLayers++;
                } catch (error) {
                    this.status.layers.health.status = 'error';
                    this.status.layers.health.errors.push(error.message);
                }
            } else {
                this.status.layers.health.status = 'skipped';
                healthyLayers++; // Count as healthy if not needed
            }
            
            // Calculate overall health
            const healthPercentage = (healthyLayers / totalLayers) * 100;
            if (healthPercentage >= 80) {
                this.status.overallHealth = 'healthy';
                this.status.successfulChecks++;
            } else if (healthPercentage >= 60) {
                this.status.overallHealth = 'warning';
                this.status.successfulChecks++;
            } else {
                this.status.overallHealth = 'unhealthy';
                this.status.failedChecks++;
            }
            
            this.saveStatus();
            this.log('INFO', `Health check completed. Overall health: ${this.status.overallHealth} (${healthPercentage.toFixed(1)}%)`);
            
        } catch (error) {
            this.log('ERROR', 'Health check failed', error);
            this.status.failedChecks++;
            this.saveStatus();
        }
    }

    async performRedundancyCheck() {
        this.log('INFO', 'Performing redundancy check...');
        
        try {
            this.status.lastRedundancyCheck = new Date().toISOString();
            
            // Check if any layer needs redundancy activation
            for (const [layerName, layerStatus] of Object.entries(this.status.layers)) {
                if (layerStatus.status === 'failed' || layerStatus.status === 'error') {
                    this.log('WARN', `Layer ${layerName} needs redundancy activation`);
                    await this.activateRedundancy(layerName);
                }
            }
            
            this.log('INFO', 'Redundancy check completed');
            
        } catch (error) {
            this.log('ERROR', 'Redundancy check failed', error);
        }
    }

    async activateRedundancy(layerName) {
        this.log('INFO', `Activating redundancy for layer: ${layerName}`);
        
        try {
            switch (layerName) {
                case 'pm2':
                    await this.restartPM2Redundancy();
                    break;
                case 'githubActions':
                    await this.restartGitHubActionsRedundancy();
                    break;
                case 'netlifyFunctions':
                    await this.restartNetlifyFunctionsRedundancy();
                    break;
                case 'build':
                    await this.restartBuildRedundancy();
                    break;
                case 'health':
                    await this.restartHealthRedundancy();
                    break;
                default:
                    this.log('WARN', `Unknown layer: ${layerName}`);
            }
        } catch (error) {
            this.log('ERROR', `Failed to activate redundancy for layer: ${layerName}`, error);
        }
    }

    async restartPM2Redundancy() {
        this.log('INFO', 'Restarting PM2 redundancy...');
        try {
            execSync('pm2 restart all', { cwd: this.workspaceDir, stdio: 'pipe' });
            this.status.layers.pm2.status = 'restarting';
            this.saveStatus();
        } catch (error) {
            this.log('ERROR', 'Failed to restart PM2 redundancy', error);
        }
    }

    async restartGitHubActionsRedundancy() {
        this.log('INFO', 'Restarting GitHub Actions redundancy...');
        try {
            // Trigger workflow health check
            const healthScript = this.config.githubActions.healthCheckScripts[0];
            if (healthScript && fs.existsSync(path.join(this.workspaceDir, healthScript))) {
                spawn('node', [healthScript], {
                    cwd: this.workspaceDir,
                    stdio: 'pipe',
                    detached: true
                });
            }
            this.status.layers.githubActions.status = 'restarting';
            this.saveStatus();
        } catch (error) {
            this.log('ERROR', 'Failed to restart GitHub Actions redundancy', error);
        }
    }

    async restartNetlifyFunctionsRedundancy() {
        this.log('INFO', 'Restarting Netlify Functions redundancy...');
        try {
            const healthScript = this.config.netlifyFunctions.healthCheckScripts[0];
            if (healthScript && fs.existsSync(path.join(this.workspaceDir, healthScript))) {
                spawn('node', [healthScript], {
                    cwd: this.workspaceDir,
                    stdio: 'pipe',
                    detached: true
                });
            }
            this.status.layers.netlifyFunctions.status = 'restarting';
            this.saveStatus();
        } catch (error) {
            this.log('ERROR', 'Failed to restart Netlify Functions redundancy', error);
        }
    }

    async restartBuildRedundancy() {
        this.log('INFO', 'Restarting Build redundancy...');
        try {
            const healthScript = this.config.build.healthCheckScripts[0];
            if (healthScript && fs.existsSync(path.join(this.workspaceDir, healthScript))) {
                spawn('node', [healthScript], {
                    cwd: this.workspaceDir,
                    stdio: 'pipe',
                    detached: true
                });
            }
            this.status.layers.build.status = 'restarting';
            this.saveStatus();
        } catch (error) {
            this.log('ERROR', 'Failed to restart Build redundancy', error);
        }
    }

    async restartHealthRedundancy() {
        this.log('INFO', 'Restarting Health redundancy...');
        try {
            const monitor = this.config.health.monitors[0];
            if (monitor && fs.existsSync(path.join(this.workspaceDir, monitor))) {
                spawn('node', [monitor], {
                    cwd: this.workspaceDir,
                    stdio: 'pipe',
                    detached: true
                });
            }
            this.status.layers.health.status = 'restarting';
            this.saveStatus();
        } catch (error) {
            this.log('ERROR', 'Failed to restart Health redundancy', error);
        }
    }

    isCommandAvailable(command) {
        try {
            execSync(`which ${command}`, { stdio: 'pipe' });
            return true;
        } catch (error) {
            return false;
        }
    }

    async stop() {
        this.log('INFO', 'Stopping Complete Redundancy Automation System...');
        
        try {
            // Clear intervals
            if (this.healthCheckInterval) {
                clearInterval(this.healthCheckInterval);
            }
            if (this.redundancyCheckInterval) {
                clearInterval(this.redundancyCheckInterval);
            }
            
            // Remove PID file
            if (fs.existsSync(this.pidFile)) {
                fs.unlinkSync(this.pidFile);
            }
            
            this.isRunning = false;
            this.log('INFO', 'Complete Redundancy Automation System stopped');
            
            process.exit(0);
            
        } catch (error) {
            this.log('ERROR', 'Error stopping system', error);
            process.exit(1);
        }
    }

    getStatus() {
        return this.status;
    }

    async runCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            exec(command, {
                cwd: this.workspaceDir,
                stdio: 'pipe',
                ...options
            }, (error, stdout, stderr) => {
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
if (require.main === module) {
    const system = new CompleteRedundancyAutomationSystem();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            system.start().catch(console.error);
            break;
        case 'stop':
            system.stop();
            break;
        case 'status':
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        case 'health':
            system.performHealthCheck().catch(console.error);
            break;
        case 'redundancy':
            system.performRedundancyCheck().catch(console.error);
            break;
        default:
            console.log('Usage: node complete-redundancy-automation-system.cjs [start|stop|status|health|redundancy]');
            process.exit(1);
    }
}

module.exports = CompleteRedundancyAutomationSystem;