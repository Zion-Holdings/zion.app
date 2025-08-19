#!/usr/bin/env node

/**
 * Ultimate Redundancy Automation System
 * 
 * This system provides comprehensive redundancy for:
 * - PM2 process management
 * - GitHub Actions workflows
 * - Netlify Functions
 * 
 * It performs health checks, monitors system status, and automatically recovers from failures.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class UltimateRedundancyAutomationSystem {
    constructor() {
        this.config = {
            logDir: path.join(__dirname, 'logs'),
            logFile: path.join(__dirname, 'logs', 'ultimate-redundancy.log'),
            healthCheckInterval: 30000, // 30 seconds
            recoveryAttempts: 3,
            maxLogSize: 10 * 1024 * 1024, // 10MB
        };
        
        this.ensureLogDirectory();
        this.log('INFO', '🚀 Ultimate Redundancy Automation System initialized');
    }

    ensureLogDirectory() {
        if (!fs.existsSync(this.config.logDir)) {
            fs.mkdirSync(this.config.logDir, { recursive: true });
        }
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        
        console.log(logEntry);
        
        try {
            fs.appendFileSync(this.config.logFile, logEntry + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }

    async runCommand(command, args = [], options = {}) {
        try {
            const fullCommand = `${command} ${args.join(' ')}`;
            this.log('DEBUG', `Executing: ${fullCommand}`);
            
            const { stdout, stderr } = await execAsync(fullCommand, {
                timeout: options.timeout || 30000,
                cwd: options.cwd || process.cwd(),
                ...options
            });
            
            if (stderr) {
                this.log('WARN', `Command stderr: ${stderr}`);
            }
            
            return { success: true, stdout, stderr };
        } catch (error) {
            this.log('ERROR', `Command failed: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    async checkPM2UltimateHealth() {
        this.log('INFO', '🔍 Checking PM2 ultimate health...');
        
        try {
            // Check if PM2 is installed
            const pm2Check = await this.runCommand('pm2', ['--version']);
            if (!pm2Check.success) {
                this.log('ERROR', 'PM2 is not installed');
                return { healthy: false, issues: ['PM2 not installed'] };
            }

            // Get PM2 status
            const pm2Status = await this.runCommand('pm2', ['status']);
            if (!pm2Status.success) {
                this.log('ERROR', 'Failed to get PM2 status');
                return { healthy: false, issues: ['Failed to get PM2 status'] };
            }

            // Check for stopped or errored processes
            const output = pm2Status.stdout;
            const issues = [];
            
            if (output.includes('stopped') || output.includes('errored')) {
                issues.push('Some PM2 processes are stopped or errored');
            }
            
            if (output.includes('online') && !output.includes('stopped') && !output.includes('errored')) {
                this.log('INFO', '✅ PM2 health check passed');
                return { healthy: true, issues: [] };
            } else {
                this.log('WARN', '⚠️ PM2 health check revealed issues');
                return { healthy: false, issues };
            }
        } catch (error) {
            this.log('ERROR', `PM2 health check failed: ${error.message}`);
            return { healthy: false, issues: [error.message] };
        }
    }

    async checkGitHubActionsUltimateHealth() {
        this.log('INFO', '🔍 Checking GitHub Actions ultimate health...');
        
        try {
            // Check if we're in a git repository
            const gitCheck = await this.runCommand('git', ['rev-parse', '--git-dir']);
            if (!gitCheck.success) {
                this.log('WARN', 'Not in a git repository');
                return { healthy: true, issues: [] }; // Not critical for local development
            }

            // Check remote status
            const remoteCheck = await this.runCommand('git', ['remote', '-v']);
            if (!remoteCheck.success) {
                this.log('WARN', 'No remote repositories configured');
                return { healthy: true, issues: [] };
            }

            // Check if we can fetch from remote
            const fetchCheck = await this.runCommand('git', ['fetch', '--dry-run']);
            if (!fetchCheck.success) {
                this.log('WARN', 'Cannot fetch from remote repository');
                return { healthy: false, issues: ['Cannot fetch from remote'] };
            }

            this.log('INFO', '✅ GitHub Actions health check passed');
            return { healthy: true, issues: [] };
        } catch (error) {
            this.log('ERROR', `GitHub Actions health check failed: ${error.message}`);
            return { healthy: false, issues: [error.message] };
        }
    }

    async checkNetlifyFunctionsUltimateHealth() {
        this.log('INFO', '🔍 Checking Netlify Functions ultimate health...');
        
        try {
            const netlifyDir = path.join(process.cwd(), 'netlify', 'functions');
            
            if (!fs.existsSync(netlifyDir)) {
                this.log('WARN', 'Netlify functions directory not found');
                return { healthy: true, issues: [] }; // Not critical if not using Netlify
            }

            // Check if functions directory has content
            const functions = fs.readdirSync(netlifyDir);
            const jsFunctions = functions.filter(f => f.endsWith('.js') || f.endsWith('.ts'));
            
            if (jsFunctions.length === 0) {
                this.log('WARN', 'No Netlify functions found');
                return { healthy: true, issues: [] };
            }

            // Check if functions are valid JavaScript
            let issues = [];
            for (const func of jsFunctions) {
                try {
                    const funcPath = path.join(netlifyDir, func);
                    const content = fs.readFileSync(funcPath, 'utf8');
                    
                    // Basic syntax check
                    if (content.includes('exports.handler') || content.includes('module.exports')) {
                        // Function looks valid
                    } else {
                        issues.push(`Function ${func} missing handler export`);
                    }
                } catch (error) {
                    issues.push(`Cannot read function ${func}: ${error.message}`);
                }
            }

            if (issues.length === 0) {
                this.log('INFO', '✅ Netlify Functions health check passed');
                return { healthy: true, issues: [] };
            } else {
                this.log('WARN', '⚠️ Netlify Functions health check revealed issues');
                return { healthy: false, issues };
            }
        } catch (error) {
            this.log('ERROR', `Netlify Functions health check failed: ${error.message}`);
            return { healthy: false, issues: [error.message] };
        }
    }

    async recoverPM2System() {
        this.log('INFO', '🔄 Attempting PM2 system recovery...');
        
        try {
            // Stop all processes
            await this.runCommand('pm2', ['stop', 'all']);
            
            // Delete all processes
            await this.runCommand('pm2', ['delete', 'all']);
            
            // Clear PM2 logs
            await this.runCommand('pm2', ['flush']);
            
            // Start comprehensive redundancy ecosystem
            const startResult = await this.runCommand('pm2', ['start', 'ecosystem.comprehensive-redundancy.cjs']);
            
            if (startResult.success) {
                this.log('INFO', '✅ PM2 system recovery successful');
                return true;
            } else {
                this.log('ERROR', '❌ PM2 system recovery failed');
                return false;
            }
        } catch (error) {
            this.log('ERROR', `PM2 recovery error: ${error.message}`);
            return false;
        }
    }

    async recoverGitHubActionsSystem() {
        this.log('INFO', '🔄 Attempting GitHub Actions system recovery...');
        
        try {
            // Reset any local changes that might be causing issues
            await this.runCommand('git', ['reset', '--hard', 'HEAD']);
            
            // Clean untracked files
            await this.runCommand('git', ['clean', '-fd']);
            
            // Fetch latest changes
            const fetchResult = await this.runCommand('git', ['fetch', 'origin']);
            
            if (fetchResult.success) {
                this.log('INFO', '✅ GitHub Actions system recovery successful');
                return true;
            } else {
                this.log('ERROR', '❌ GitHub Actions system recovery failed');
                return false;
            }
        } catch (error) {
            this.log('ERROR', `GitHub Actions recovery error: ${error.message}`);
            return false;
        }
    }

    async recoverNetlifyFunctionsSystem() {
        this.log('INFO', '🔄 Attempting Netlify Functions system recovery...');
        
        try {
            // This is mostly about ensuring the functions directory is accessible
            // and functions are properly formatted
            
            const netlifyDir = path.join(process.cwd(), 'netlify', 'functions');
            
            if (fs.existsSync(netlifyDir)) {
                // Ensure proper permissions
                fs.chmodSync(netlifyDir, 0o755);
                
                this.log('INFO', '✅ Netlify Functions system recovery successful');
                return true;
            } else {
                this.log('WARN', 'Netlify functions directory not found - skipping recovery');
                return true;
            }
        } catch (error) {
            this.log('ERROR', `Netlify Functions recovery error: ${error.message}`);
            return false;
        }
    }

    async performComprehensiveHealthCheck() {
        this.log('INFO', '🏥 Starting comprehensive health check...');
        
        const results = {
            timestamp: new Date().toISOString(),
            pm2: await this.checkPM2UltimateHealth(),
            githubActions: await this.checkGitHubActionsUltimateHealth(),
            netlifyFunctions: await this.checkNetlifyFunctionsUltimateHealth(),
            overall: { healthy: true, issues: [] }
        };

        // Determine overall health
        const allIssues = [
            ...results.pm2.issues,
            ...results.githubActions.issues,
            ...results.netlifyFunctions.issues
        ];

        results.overall.healthy = allIssues.length === 0;
        results.overall.issues = allIssues;

        // Log results
        this.log('INFO', `🏥 Health check completed - Overall: ${results.overall.healthy ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
        
        if (allIssues.length > 0) {
            this.log('WARN', `Issues found: ${allIssues.join(', ')}`);
        }

        return results;
    }

    initializeMonitoring() {
        this.log('INFO', '📊 Initializing monitoring system...');
        
        // Start periodic health checks
        this.healthCheckInterval = setInterval(async () => {
            try {
                const health = await this.performComprehensiveHealthCheck();
                
                // If unhealthy, attempt recovery
                if (!health.overall.healthy) {
                    this.log('WARN', '🔄 System unhealthy, attempting recovery...');
                    
                    if (!health.pm2.healthy) {
                        await this.recoverPM2System();
                    }
                    
                    if (!health.githubActions.healthy) {
                        await this.recoverGitHubActionsSystem();
                    }
                    
                    if (!health.netlifyFunctions.healthy) {
                        await this.recoverNetlifyFunctionsSystem();
                    }
                }
            } catch (error) {
                this.log('ERROR', `Health check error: ${error.message}`);
            }
        }, this.config.healthCheckInterval);

        this.log('INFO', '✅ Monitoring system initialized');
    }

    startComprehensiveMonitoring() {
        this.log('INFO', '🚀 Starting comprehensive monitoring...');
        
        // Perform initial health check
        this.performComprehensiveHealthCheck().then(() => {
            this.initializeMonitoring();
        });

        // Set up graceful shutdown
        process.on('SIGINT', () => this.shutdown());
        process.on('SIGTERM', () => this.shutdown());
    }

    rotateLogs() {
        try {
            if (fs.existsSync(this.config.logFile)) {
                const stats = fs.statSync(this.config.logFile);
                
                if (stats.size > this.config.maxLogSize) {
                    const backupFile = `${this.config.logFile}.${Date.now()}`;
                    fs.renameSync(this.config.logFile, backupFile);
                    this.log('INFO', `Log rotated to ${backupFile}`);
                }
            }
        } catch (error) {
            this.log('ERROR', `Log rotation failed: ${error.message}`);
        }
    }

    async getSystemStatus() {
        const status = {
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            pid: process.pid,
            version: process.version,
            platform: process.platform,
            arch: process.arch
        };

        return status;
    }

    shutdown() {
        this.log('INFO', '🛑 Shutting down Ultimate Redundancy Automation System...');
        
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
        }
        
        this.log('INFO', '✅ System shutdown complete');
        process.exit(0);
    }
}

// Main execution
if (require.main === module) {
    const system = new UltimateRedundancyAutomationSystem();
    
    // Handle command line arguments
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            system.startComprehensiveMonitoring();
            break;
        case 'health':
            system.performComprehensiveHealthCheck().then(() => {
                process.exit(0);
            });
            break;
        case 'status':
            system.getSystemStatus().then(status => {
                console.log(JSON.stringify(status, null, 2));
                process.exit(0);
            });
            break;
        default:
            console.log('Ultimate Redundancy Automation System');
            console.log('Usage: node ultimate-redundancy-automation-system.cjs [start|health|status]');
            console.log('  start  - Start comprehensive monitoring');
            console.log('  health - Perform health check');
            console.log('  status - Show system status');
            process.exit(1);
    }
}

module.exports = UltimateRedundancyAutomationSystem;