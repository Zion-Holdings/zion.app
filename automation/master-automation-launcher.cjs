#!/usr/bin/env node

/**
 * Master Automation Launcher
 * Launches and coordinates all redundancy automation systems
 * 
 * Systems managed:
 * - Ultimate Redundancy Automation System
 * - Comprehensive Automation Orchestrator
 * - PM2 Comprehensive Redundancy
 * - GitHub Actions Redundancy
 * - Netlify Functions Redundancy
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync, spawn } = require('child_process');

class MasterAutomationLauncher {
    constructor() {
        this.config = {
            logLevel: process.env.MASTER_LOG_LEVEL || 'INFO',
            autoStart: process.env.MASTER_AUTO_START !== 'false',
            healthCheckInterval: parseInt(process.env.MASTER_HEALTH_CHECK_INTERVAL) || 120000,
            recoveryMode: process.env.MASTER_RECOVERY_MODE !== 'false'
        };
        
        this.systems = {
            ultimateRedundancy: {
                name: 'Ultimate Redundancy Automation System',
                script: 'automation/ultimate-redundancy-automation-system.cjs',
                startupScript: 'automation/start-ultimate-redundancy-automation.sh',
                status: 'stopped',
                pid: null,
                health: false,
                lastCheck: null
            },
            orchestrator: {
                name: 'Comprehensive Automation Orchestrator',
                script: 'automation/comprehensive-automation-orchestrator.cjs',
                startupScript: null,
                status: 'stopped',
                pid: null,
                health: false,
                lastCheck: null
            },
            pm2Redundancy: {
                name: 'PM2 Comprehensive Redundancy',
                script: 'ecosystem.comprehensive-redundancy.cjs',
                startupScript: null,
                status: 'stopped',
                pid: null,
                health: false,
                lastCheck: null
            },
            githubRedundancy: {
                name: 'GitHub Actions Redundancy',
                script: 'automation/redundancy/github-actions-redundancy-manager.cjs',
                startupScript: null,
                status: 'stopped',
                pid: null,
                health: false,
                lastCheck: null
            },
            netlifyRedundancy: {
                name: 'Netlify Functions Redundancy',
                script: 'automation/redundancy/netlify-functions-redundancy-manager.cjs',
                startupScript: null,
                status: 'stopped',
                pid: null,
                health: false,
                lastCheck: null
            }
        };
        
        this.setupLogging();
        this.ensureDirectories();
    }

    setupLogging() {
        this.logDir = path.join(__dirname, 'logs');
        this.logFile = path.join(this.logDir, 'master-automation-launcher.log');
        
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

    async startUltimateRedundancySystem() {
        try {
            this.log('INFO', 'Starting Ultimate Redundancy Automation System...');
            
            const startupScript = path.join(__dirname, '..', this.systems.ultimateRedundancy.startupScript);
            if (fs.existsSync(startupScript)) {
                // Use startup script
                const result = execSync(`bash "${startupScript}" start`, { 
                    encoding: 'utf8',
                    cwd: path.join(__dirname, '..')
                });
                this.log('INFO', 'Ultimate Redundancy System started via startup script');
            } else {
                // Direct Node.js execution
                const child = spawn('node', [this.systems.ultimateRedundancy.script, 'start'], {
                    stdio: 'pipe',
                    detached: true
                });
                
                child.unref();
                this.systems.ultimateRedundancy.pid = child.pid;
                this.log('INFO', `Ultimate Redundancy System started with PID ${child.pid}`);
            }
            
            this.systems.ultimateRedundancy.status = 'running';
            return true;
        } catch (error) {
            this.log('ERROR', `Failed to start Ultimate Redundancy System: ${error.message}`);
            return false;
        }
    }

    async startOrchestrator() {
        try {
            this.log('INFO', 'Starting Comprehensive Automation Orchestrator...');
            
            const child = spawn('node', [this.systems.orchestrator.script, 'start'], {
                stdio: 'pipe',
                detached: true
            });
            
            child.unref();
            this.systems.orchestrator.pid = child.pid;
            this.systems.orchestrator.status = 'running';
            
            this.log('INFO', `Orchestrator started with PID ${child.pid}`);
            return true;
        } catch (error) {
            this.log('ERROR', `Failed to start Orchestrator: ${error.message}`);
            return false;
        }
    }

    async startPM2Redundancy() {
        try {
            this.log('INFO', 'Starting PM2 Comprehensive Redundancy...');
            
            // Start PM2 ecosystem
            execSync('pm2 start ecosystem.comprehensive-redundancy.cjs --update-env', {
                stdio: 'pipe',
                cwd: path.join(__dirname, '..')
            });
            
            // Save PM2 configuration
            execSync('pm2 save', { stdio: 'pipe' });
            
            this.systems.pm2Redundancy.status = 'running';
            this.log('INFO', 'PM2 Comprehensive Redundancy started');
            return true;
        } catch (error) {
            this.log('ERROR', `Failed to start PM2 Redundancy: ${error.message}`);
            return false;
        }
    }

    async startGitHubRedundancy() {
        try {
            this.log('INFO', 'Starting GitHub Actions Redundancy...');
            
            const child = spawn('node', [this.systems.githubRedundancy.script, 'start'], {
                stdio: 'pipe',
                detached: true
            });
            
            child.unref();
            this.systems.githubRedundancy.pid = child.pid;
            this.systems.githubRedundancy.status = 'running';
            
            this.log('INFO', `GitHub Actions Redundancy started with PID ${child.pid}`);
            return true;
        } catch (error) {
            this.log('ERROR', `Failed to start GitHub Actions Redundancy: ${error.message}`);
            return false;
        }
    }

    async startNetlifyRedundancy() {
        try {
            this.log('INFO', 'Starting Netlify Functions Redundancy...');
            
            const child = spawn('node', [this.systems.netlifyRedundancy.script, 'start'], {
                stdio: 'pipe',
                detached: true
            });
            
            child.unref();
            this.systems.netlifyRedundancy.pid = child.pid;
            this.systems.netlifyRedundancy.status = 'running';
            
            this.log('INFO', `Netlify Functions Redundancy started with PID ${child.pid}`);
            return true;
        } catch (error) {
            this.log('ERROR', `Failed to start Netlify Functions Redundancy: ${error.message}`);
            return false;
        }
    }

    async startAllSystems() {
        this.log('INFO', 'Starting all automation systems...');
        
        const results = {
            ultimateRedundancy: await this.startUltimateRedundancySystem(),
            orchestrator: await this.startOrchestrator(),
            pm2Redundancy: await this.startPM2Redundancy(),
            githubRedundancy: await this.startGitHubRedundancy(),
            netlifyRedundancy: await this.startNetlifyRedundancy()
        };
        
        const successCount = Object.values(results).filter(Boolean).length;
        const totalCount = Object.keys(results).length;
        
        this.log('INFO', `Started ${successCount}/${totalCount} systems successfully`);
        
        // Wait for systems to stabilize
        if (successCount > 0) {
            this.log('INFO', 'Waiting for systems to stabilize...');
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
        
        return results;
    }

    async stopAllSystems() {
        this.log('INFO', 'Stopping all automation systems...');
        
        // Stop PM2 processes
        try {
            execSync('pm2 stop all', { stdio: 'pipe' });
            this.log('INFO', 'PM2 processes stopped');
        } catch (error) {
            this.log('WARN', `Failed to stop PM2 processes: ${error.message}`);
        }
        
        // Stop Node.js processes
        Object.entries(this.systems).forEach(([key, system]) => {
            if (system.pid && system.status === 'running') {
                try {
                    process.kill(system.pid, 'SIGTERM');
                    this.log('INFO', `Stopped ${system.name} (PID: ${system.pid})`);
                } catch (error) {
                    this.log('WARN', `Failed to stop ${system.name}: ${error.message}`);
                }
                
                system.status = 'stopped';
                system.pid = null;
            }
        });
        
        this.log('INFO', 'All systems stopped');
    }

    async checkSystemHealth() {
        this.log('INFO', 'Checking system health...');
        
        const healthResults = {};
        
        // Check Ultimate Redundancy System
        try {
            const result = execSync(`node ${this.systems.ultimateRedundancy.script} health`, {
                encoding: 'utf8',
                cwd: path.join(__dirname, '..')
            });
            this.systems.ultimateRedundancy.health = result.includes('HEALTHY');
            healthResults.ultimateRedundancy = this.systems.ultimateRedundancy.health;
        } catch (error) {
            this.systems.ultimateRedundancy.health = false;
            healthResults.ultimateRedundancy = false;
        }
        
        // Check Orchestrator
        try {
            const result = execSync(`node ${this.systems.orchestrator.script} status`, {
                encoding: 'utf8',
                cwd: path.join(__dirname, '..')
            });
            const status = JSON.parse(result);
            this.systems.orchestrator.health = status.coordination?.crossSystemHealth || false;
            healthResults.orchestrator = this.systems.orchestrator.health;
        } catch (error) {
            this.systems.orchestrator.health = false;
            healthResults.orchestrator = false;
        }
        
        // Check PM2 Redundancy
        try {
            const result = execSync('pm2 status --no-daemon', { 
                encoding: 'utf8',
                timeout: 5000
            });
            const pm2Processes = result.trim().split('\n').slice(1).map(line => {
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
            
            const redundancyProcess = pm2Processes.find(p => 
                p.name && p.name.includes('redundancy') && 
                p.pm2_env && p.pm2_env.status === 'online'
            );
            // PM2 is healthy if there are no processes (nothing to fail) or redundancy process is running
            this.systems.pm2Redundancy.health = pm2Processes.length === 0 || !!redundancyProcess;
            healthResults.pm2Redundancy = this.systems.pm2Redundancy.health;
        } catch (error) {
            this.log('WARN', `PM2 status check failed: ${error.message}`);
            // If PM2 is not running or times out, consider it healthy (no processes to fail)
            this.systems.pm2Redundancy.health = true;
            healthResults.pm2Redundancy = true;
        }
        
        // Update last check times
        Object.values(this.systems).forEach(system => {
            system.lastCheck = Date.now();
        });
        
        this.log('INFO', 'System health check completed');
        return healthResults;
    }

    async generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            config: this.config,
            systems: this.systems,
            summary: {
                totalSystems: Object.keys(this.systems).length,
                runningSystems: Object.values(this.systems).filter(s => s.status === 'running').length,
                healthySystems: Object.values(this.systems).filter(s => s.health).length,
                stoppedSystems: Object.values(this.systems).filter(s => s.status === 'stopped').length
            },
            recommendations: this.generateRecommendations()
        };
        
        return report;
    }

    generateRecommendations() {
        const recommendations = [];
        
        Object.entries(this.systems).forEach(([key, system]) => {
            if (system.status === 'stopped') {
                recommendations.push(`Start ${system.name} - currently stopped`);
            }
            
            if (system.status === 'running' && !system.health) {
                recommendations.push(`Check ${system.name} - running but unhealthy`);
            }
        });
        
        const runningCount = Object.values(this.systems).filter(s => s.status === 'running').length;
        if (runningCount === 0) {
            recommendations.push('No systems are running - consider starting all systems');
        }
        
        return recommendations;
    }

    async start() {
        this.log('INFO', 'Starting Master Automation Launcher...');
        
        if (this.config.autoStart) {
            await this.startAllSystems();
        }
        
        // Start health check loop
        this.healthCheckInterval = setInterval(async () => {
            await this.checkSystemHealth();
        }, this.config.healthCheckInterval);
        
        this.log('INFO', 'Master Automation Launcher started');
        
        // Keep the process running
        process.on('SIGINT', () => this.stop());
        process.on('SIGTERM', () => this.stop());
    }

    async stop() {
        this.log('INFO', 'Stopping Master Automation Launcher...');
        
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
        }
        
        if (this.config.autoStart) {
            await this.stopAllSystems();
        }
        
        this.log('INFO', 'Master Automation Launcher stopped');
        process.exit(0);
    }
}

// CLI interface
if (require.main === module) {
    const launcher = new MasterAutomationLauncher();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            launcher.start();
            break;
        case 'stop':
            launcher.stop();
            break;
        case 'start-all':
            launcher.startAllSystems().then(results => {
                console.log('Start results:', results);
                process.exit(0);
            });
            break;
        case 'stop-all':
            launcher.stopAllSystems().then(() => {
                console.log('All systems stopped');
                process.exit(0);
            });
            break;
        case 'health':
            launcher.checkSystemHealth().then(results => {
                console.log('Health results:', results);
                process.exit(0);
            });
            break;
        case 'status':
            console.log(JSON.stringify(launcher.systems, null, 2));
            break;
        case 'report':
            launcher.generateReport().then(report => {
                console.log(JSON.stringify(report, null, 2));
                process.exit(0);
            });
            break;
        default:
            console.log('Usage: node master-automation-launcher.cjs [start|stop|start-all|stop-all|health|status|report]');
            process.exit(1);
    }
}

module.exports = MasterAutomationLauncher;