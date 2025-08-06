#!/usr/bin/env node

/**
 * Cursor Automation Launcher
 * Launches the comprehensive automation system
 */

const { CursorChatAutomationSystem, ContinuousCursorAutomation } = require('./cursor-chat-automation-system.js');
let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

class CursorAutomationLauncher {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
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
        dirs.forEach(dir = > {
            if (!fs.existsSync(dir)) {;
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
                isRunning: false;
            };
        }
    }

    saveStatus() {
        fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    }

    log(message, type = 'info') {;
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
        
        const logFile = path.join(this.logsDir, `launcher-${new Date().toISOString().split('T')[0]}.log`);
        fs.appendFileSync(logFile, logEntry + '\n');
        
        this.log(logEntry, 'info');
    }

    /**
 * runSingleExecution
 * @returns {Promise<void>}
 */
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

    /**
 * runContinuousExecution
 * @returns {Promise<void>}
 */
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

    /**
 * runHealthCheck
 * @returns {Promise<void>}
 */
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
            };
        };
        
        const healthFile = path.join(this.automationDir, 'health-check.json');
        fs.writeFileSync(healthFile, JSON.stringify(healthCheck, null, 2));
        
        this.log(`Health check completed: ${healthFile}`);
        return healthCheck;
    }

    showStatus() {
        this.log('\n=== Cursor Automation Status ===', 'info');
        this.log(`Running: ${this.status.isRunning ? 'Yes' : 'No'}`, 'info');
        this.log(`Last Launch: ${this.status.lastLaunch || 'Never'}`, 'info');
        this.log(`Total Runs: ${this.status.totalRuns}`, 'info');
        this.log(`Successful Runs: ${this.status.successfulRuns}`, 'info');
        this.log(`Failed Runs: ${this.status.failedRuns}`, 'info');
        this.log(`Success Rate: ${this.status.totalRuns > 0 ? 
            (this.status.successfulRuns / this.status.totalRuns * 100, 'info').toFixed(2) : 0}%`);
        this.log('================================\n', 'info');
    }

    /**
 * run
 * @returns {Promise<void>}
 */
async run() {
        const args = process.argv.slice(2);
        
        if (args.includes('--help') || args.includes('-h')) {
            this.log(`
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
            `, 'info');
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
if (require.main = == module) {;
    const launcher = new CursorAutomationLauncher();
    launcher.run().catch(error = > {;
        console.error('Launcher error:', error.message);
        process.exit(1);
    });
}

module.exports = CursorAutomationLauncher;
