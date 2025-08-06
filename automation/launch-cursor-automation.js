#!/usr/bin/env node

/**
 * Cursor Automation Launcher
 * Launches the comprehensive automation system
 */

const { CursorChatAutomationSystem, ContinuousCursorAutomation } = require('./cursor-chat-automation-system.js');
const fs = require('fs');
const path = require('path');

class CursorAutomationLauncher {
    constructor() {
        this.baseDir = process.cwd();
        this.automationDir = path.join(this.baseDir, 'automation');
        this.logsDir = path.join(this.automationDir, 'cursor-chat-logs');
        this.statusFile = path.join(this.automationDir, 'launcher-status.json');
        
        this.ensureDirectories();
        this.loadStatus();
    }

    ensureDirectories() {
        const dirs = [this.automationDir, this.logsDir];
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    loadStatus() {
        if (fs.existsSync(this.statusFile)) {
            this.status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        } else {
            this.status = {
                lastLaunch: null,
                totalRuns: 0,
                successfulRuns: 0,
                failedRuns: 0,
                isRunning: false
            };
        }
    }

    saveStatus() {
        fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
        
        const logFile = path.join(this.logsDir, `launcher-${new Date().toISOString().split('T')[0]}.log`);
        fs.appendFileSync(logFile, logEntry + '\n');
        
        console.log(logEntry);
    }

    async runSingleExecution() {
        this.log('Starting single execution of Cursor automation');
        
        try {
            this.status.isRunning = true;
            this.status.lastLaunch = new Date().toISOString();
            this.status.totalRuns++;
            this.saveStatus();
            
            const automation = new CursorChatAutomationSystem();
            await automation.followCursorInstructions();
            await automation.generateReport();
            
            this.status.successfulRuns++;
            this.status.isRunning = false;
            this.saveStatus();
            
            this.log('Single execution completed successfully');
            return { success: true };
            
        } catch (error) {
            this.status.failedRuns++;
            this.status.isRunning = false;
            this.saveStatus();
            
            this.log(`Single execution failed: ${error.message}`, 'error');
            return { success: false, error: error.message };
        }
    }

    async runContinuousExecution() {
        this.log('Starting continuous execution of Cursor automation');
        
        try {
            this.status.isRunning = true;
            this.status.lastLaunch = new Date().toISOString();
            this.saveStatus();
            
            const continuous = new ContinuousCursorAutomation();
            
            // Handle graceful shutdown
            process.on('SIGINT', () => {
                this.log('Received SIGINT, shutting down gracefully...');
                continuous.stop();
                this.status.isRunning = false;
                this.saveStatus();
                process.exit(0);
            });
            
            process.on('SIGTERM', () => {
                this.log('Received SIGTERM, shutting down gracefully...');
                continuous.stop();
                this.status.isRunning = false;
                this.saveStatus();
                process.exit(0);
            });
            
            await continuous.start();
            
        } catch (error) {
            this.status.isRunning = false;
            this.saveStatus();
            
            this.log(`Continuous execution failed: ${error.message}`, 'error');
            throw error;
        }
    }

    async runHealthCheck() {
        this.log('Running health check...');
        
        const healthCheck = {
            timestamp: new Date().toISOString(),
            status: this.status,
            system: {
                nodeVersion: process.version,
                platform: process.platform,
                arch: process.arch,
                memoryUsage: process.memoryUsage(),
                uptime: process.uptime()
            },
            automation: {
                isRunning: this.status.isRunning,
                lastLaunch: this.status.lastLaunch,
                totalRuns: this.status.totalRuns,
                successRate: this.status.totalRuns > 0 ? 
                    (this.status.successfulRuns / this.status.totalRuns * 100).toFixed(2) : 0
            }
        };
        
        const healthFile = path.join(this.automationDir, 'health-check.json');
        fs.writeFileSync(healthFile, JSON.stringify(healthCheck, null, 2));
        
        this.log(`Health check completed: ${healthFile}`);
        return healthCheck;
    }

    showStatus() {
        console.log('\n=== Cursor Automation Status ===');
        console.log(`Running: ${this.status.isRunning ? 'Yes' : 'No'}`);
        console.log(`Last Launch: ${this.status.lastLaunch || 'Never'}`);
        console.log(`Total Runs: ${this.status.totalRuns}`);
        console.log(`Successful Runs: ${this.status.successfulRuns}`);
        console.log(`Failed Runs: ${this.status.failedRuns}`);
        console.log(`Success Rate: ${this.status.totalRuns > 0 ? 
            (this.status.successfulRuns / this.status.totalRuns * 100).toFixed(2) : 0}%`);
        console.log('================================\n');
    }

    async run() {
        const args = process.argv.slice(2);
        
        if (args.includes('--help') || args.includes('-h')) {
            console.log(`
Cursor Automation Launcher

Usage:
  node launch-cursor-automation.js [options]

Options:
  --single, -s          Run single execution
  --continuous, -c       Run continuous execution
  --health, -h          Run health check
  --status              Show current status
  --help                Show this help message

Examples:
  node launch-cursor-automation.js --single
  node launch-cursor-automation.js --continuous
  node launch-cursor-automation.js --health
  node launch-cursor-automation.js --status
            `);
            return;
        }
        
        if (args.includes('--status')) {
            this.showStatus();
            return;
        }
        
        if (args.includes('--health') || args.includes('-h')) {
            await this.runHealthCheck();
            return;
        }
        
        if (args.includes('--continuous') || args.includes('-c')) {
            await this.runContinuousExecution();
            return;
        }
        
        // Default to single execution
        await this.runSingleExecution();
    }
}

// Main execution
if (require.main === module) {
    const launcher = new CursorAutomationLauncher();
    launcher.run().catch(error => {
        console.error('Launcher error:', error.message);
        process.exit(1);
    });
}

module.exports = CursorAutomationLauncher;
