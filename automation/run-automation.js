#!/usr/bin/env node

/**
 * Simple Automation Runner
 * 
 * Easy-to-use automation runner that provides access to all automation features:
 * - Git automation (commit, push, watch)
 * - Performance monitoring
 * - Status checking
 * - Quick operations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationRunner {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'automation-config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return { gitManager: { enabled: true } };
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const prefix = level === 'error' ? '❌' : level === 'success' ? '✅' : level === 'warn' ? '⚠️' : 'ℹ️';
        console.log(`${prefix} [${timestamp}] ${message}`);
    }

    async executeCommand(command, options = {}) {
        try {
            const result = execSync(command, {
                encoding: 'utf8',
                stdio: options.stdio || 'pipe',
                cwd: this.projectRoot,
                ...options
            });
            return { success: true, output: result };
        } catch (error) {
            return { success: false, error: error.message, output: error.stdout || '' };
        }
    }

    async gitCommit() {
        this.log('🚀 Executing autonomous git commit...');
        
        const scriptPath = path.join(__dirname, 'autonomous-git-manager.js');
        const result = await this.executeCommand(`node "${scriptPath}" execute`);
        
        if (result.success) {
            this.log('Git commit completed successfully', 'success');
        } else {
            this.log(`Git commit failed: ${result.error}`, 'error');
        }
        
        return result.success;
    }

    async gitWatch() {
        this.log('👀 Starting git automation in watch mode...');
        
        const scriptPath = path.join(__dirname, 'autonomous-git-manager.js');
        const result = await this.executeCommand(`node "${scriptPath}" watch`, { stdio: 'inherit' });
        
        return result.success;
    }

    async gitPush() {
        this.log('📤 Executing git push...');
        
        const result = await this.executeCommand('git push origin main');
        
        if (result.success) {
            this.log('Git push completed successfully', 'success');
        } else {
            this.log(`Git push failed: ${result.error}`, 'error');
        }
        
        return result.success;
    }

    async gitStatus() {
        this.log('📊 Checking git status...');
        
        const result = await this.executeCommand('git status --porcelain');
        
        if (result.success) {
            const changes = result.output.trim().split('\n').filter(line => line.length > 0);
            if (changes.length > 0) {
                this.log(`Found ${changes.length} changes:`, 'info');
                changes.forEach(change => {
                    console.log(`  ${change}`);
                });
            } else {
                this.log('No changes detected', 'success');
            }
        } else {
            this.log(`Failed to get git status: ${result.error}`, 'error');
        }
        
        return result.success;
    }

    async autoFix() {
        this.log('🔧 Running automatic fixes...');
        
        const fixes = [
            { command: 'npm run lint -- --fix', name: 'ESLint fixes' },
            { command: 'npm run format', name: 'Code formatting' },
            { command: 'npm run type-check', name: 'TypeScript check' }
        ];
        
        let successCount = 0;
        
        for (const fix of fixes) {
            try {
                const result = await this.executeCommand(fix.command);
                if (result.success) {
                    this.log(`${fix.name} completed successfully`);
                    successCount++;
                } else {
                    this.log(`${fix.name} failed: ${result.error}`, 'warn');
                }
            } catch (error) {
                this.log(`${fix.name} failed: ${error.message}`, 'warn');
            }
        }
        
        this.log(`Auto-fix completed: ${successCount}/${fixes.length} successful`, successCount === fixes.length ? 'success' : 'warn');
        return successCount;
    }

    async checkPerformance() {
        this.log('📈 Checking performance metrics...');
        
        const metrics = [
            { command: 'npm run build', name: 'Build time' },
            { command: 'npm run lint', name: 'Lint check' },
            { command: 'npm run test', name: 'Test execution' }
        ];
        
        for (const metric of metrics) {
            const startTime = Date.now();
            const result = await this.executeCommand(metric.command);
            const duration = Date.now() - startTime;
            
            if (result.success) {
                this.log(`${metric.name}: ${duration}ms`, 'success');
            } else {
                this.log(`${metric.name}: Failed (${duration}ms)`, 'error');
            }
        }
    }

    async showStatus() {
        this.log('📋 Showing automation status...');
        
        const statusFiles = [
            { path: path.join(__dirname, '.git-manager-status.json'), name: 'Git Manager' },
            { path: path.join(__dirname, '.unified-automation-status.json'), name: 'Unified Automation' },
            { path: path.join(__dirname, 'logs', 'git-analytics.json'), name: 'Git Analytics' }
        ];
        
        for (const statusFile of statusFiles) {
            if (fs.existsSync(statusFile.path)) {
                try {
                    const status = JSON.parse(fs.readFileSync(statusFile.path, 'utf8'));
                    console.log(`\n${statusFile.name} Status:`);
                    console.log(JSON.stringify(status, null, 2));
                } catch (error) {
                    this.log(`Failed to read ${statusFile.name} status: ${error.message}`, 'warn');
                }
            } else {
                this.log(`${statusFile.name} status file not found`, 'warn');
            }
        }
    }

    async quickCommit() {
        this.log('⚡ Quick commit operation...');
        
        // Check git status
        const statusResult = await this.executeCommand('git status --porcelain');
        if (!statusResult.success) {
            this.log('Failed to get git status', 'error');
            return false;
        }
        
        const changes = statusResult.output.trim().split('\n').filter(line => line.length > 0);
        if (changes.length === 0) {
            this.log('No changes to commit', 'info');
            return true;
        }
        
        // Stage all changes
        const stageResult = await this.executeCommand('git add .');
        if (!stageResult.success) {
            this.log('Failed to stage changes', 'error');
            return false;
        }
        
        // Commit with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const commitMessage = `feat: auto-commit ${timestamp}`;
        const commitResult = await this.executeCommand(`git commit -m "${commitMessage}"`);
        
        if (commitResult.success) {
            this.log('Quick commit completed successfully', 'success');
            
            // Push if auto-push is enabled
            if (this.config.gitManager?.autoPush) {
                await this.gitPush();
            }
            
            return true;
        } else {
            this.log(`Quick commit failed: ${commitResult.error}`, 'error');
            return false;
        }
    }

    async runAll() {
        this.log('🚀 Running complete automation sequence...');
        
        const steps = [
            { name: 'Auto-fix', func: () => this.autoFix() },
            { name: 'Git status check', func: () => this.gitStatus() },
            { name: 'Git commit', func: () => this.gitCommit() },
            { name: 'Performance check', func: () => this.checkPerformance() }
        ];
        
        let successCount = 0;
        
        for (const step of steps) {
            this.log(`Executing: ${step.name}`);
            const success = await step.func();
            if (success) successCount++;
        }
        
        this.log(`Automation sequence completed: ${successCount}/${steps.length} successful`, 
                successCount === steps.length ? 'success' : 'warn');
        
        return successCount === steps.length;
    }
}

// Main execution
const runner = new AutomationRunner();
const command = process.argv[2] || 'help';

switch (command) {
    case 'commit':
        runner.gitCommit().catch(error => {
            console.error('Commit failed:', error.message);
            process.exit(1);
        });
        break;
    case 'push':
        runner.gitPush().catch(error => {
            console.error('Push failed:', error.message);
            process.exit(1);
        });
        break;
    case 'watch':
        runner.gitWatch().catch(error => {
            console.error('Watch failed:', error.message);
            process.exit(1);
        });
        break;
    case 'status':
        runner.gitStatus().catch(error => {
            console.error('Status check failed:', error.message);
            process.exit(1);
        });
        break;
    case 'fix':
        runner.autoFix().catch(error => {
            console.error('Auto-fix failed:', error.message);
            process.exit(1);
        });
        break;
    case 'performance':
        runner.checkPerformance().catch(error => {
            console.error('Performance check failed:', error.message);
            process.exit(1);
        });
        break;
    case 'system-status':
        runner.showStatus().catch(error => {
            console.error('Status check failed:', error.message);
            process.exit(1);
        });
        break;
    case 'quick':
        runner.quickCommit().catch(error => {
            console.error('Quick commit failed:', error.message);
            process.exit(1);
        });
        break;
    case 'all':
        runner.runAll().catch(error => {
            console.error('Automation sequence failed:', error.message);
            process.exit(1);
        });
        break;
    case 'help':
    default:
        console.log(`
🚀 Automation Runner

Usage:
  node automation/run-automation.js [command]

Commands:
  commit         - Execute autonomous git commit
  push           - Push changes to remote repository
  watch          - Start git automation in watch mode
  status         - Check git status
  fix            - Run automatic fixes (lint, format, type-check)
  performance    - Check performance metrics
  system-status  - Show automation system status
  quick          - Quick commit with timestamp
  all            - Run complete automation sequence

Examples:
  node automation/run-automation.js commit
  node automation/run-automation.js quick
  node automation/run-automation.js all

Features:
  ✅ Autonomous git operations
  ✅ Automatic code fixes
  ✅ Performance monitoring
  ✅ Status checking
  ✅ Quick operations
        `);
        break;
}

module.exports = AutomationRunner; 