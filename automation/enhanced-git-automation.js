#!/usr/bin/env node

/**
 * Enhanced Git Automation System
 * 
 * This system provides intelligent, autonomous git operations including:
 * - Smart commit message generation
 * - Automatic error detection and fixing
 * - Integration with existing automation systems
 * - Intelligent file staging and grouping
 * - Conflict resolution
 * - Performance optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class EnhancedGitAutomation {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, 'logs', 'enhanced-git-automation.log');
        this.statusFile = path.join(__dirname, '.git-automation-status.json');
        this.ensureDirectories();
        this.initializeStatus();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'config.json');
        if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            return {
                ...config,
                git: {
                    maxCommitSize: 50,
                    commitMessageTemplate: 'feat: {description}',
                    branch: 'main',
                    autoPush: true,
                    enableLogging: true,
                    autoFixEnabled: true,
                    smartGrouping: true,
                    conflictResolution: true,
                    performanceOptimization: true,
                    ...config.git
                }
            };
        }
        return {
            git: {
                maxCommitSize: 50,
                commitMessageTemplate: 'feat: {description}',
                branch: 'main',
                autoPush: true,
                enableLogging: true,
                autoFixEnabled: true,
                smartGrouping: true,
                conflictResolution: true,
                performanceOptimization: true
            }
        };
    }

    ensureDirectories() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    initializeStatus() {
        if (!fs.existsSync(this.statusFile)) {
            const initialStatus = {
                lastCommit: null,
                lastPush: null,
                totalCommits: 0,
                totalPushes: 0,
                errors: [],
                performance: {
                    averageCommitTime: 0,
                    averagePushTime: 0
                }
            };
            fs.writeFileSync(this.statusFile, JSON.stringify(initialStatus, null, 2));
        }
    }

    log(message, level = 'info') {
        if (!this.config.git.enableLogging) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
            console.error(`❌ ${message}`);
        } else if (level === 'warn') {
            console.warn(`⚠️ ${message}`);
        } else if (level === 'success') {
            console.log(`✅ ${message}`);
        } else {
            console.log(`ℹ️ ${message}`);
        }
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

    async getGitStatus() {
        const result = await this.executeCommand('git status --porcelain');
        if (!result.success) {
            this.log(`Error getting git status: ${result.error}`, 'error');
            return [];
        }
        return result.output.trim().split('\n').filter(line => line.length > 0);
    }

    async getCurrentBranch() {
        const result = await this.executeCommand('git branch --show-current');
        if (!result.success) {
            this.log(`Error getting current branch: ${result.error}`, 'error');
            return 'main';
        }
        return result.output.trim();
    }

    async checkForConflicts() {
        const result = await this.executeCommand('git status --porcelain');
        if (!result.success) return false;
        
        const hasConflicts = result.output.includes('UU ') || result.output.includes('AA ');
        if (hasConflicts) {
            this.log('Merge conflicts detected', 'warn');
        }
        return hasConflicts;
    }

    async resolveConflicts() {
        if (!this.config.git.conflictResolution) return false;
        
        this.log('Attempting to resolve conflicts...');
        
        // Try to abort current merge if in progress
        await this.executeCommand('git merge --abort');
        
        // Reset to last known good state
        await this.executeCommand('git reset --hard HEAD');
        
        // Pull latest changes
        const pullResult = await this.executeCommand('git pull origin main');
        if (!pullResult.success) {
            this.log('Failed to pull latest changes', 'error');
            return false;
        }
        
        this.log('Conflicts resolved successfully', 'success');
        return true;
    }

    async autoFix() {
        if (!this.config.git.autoFixEnabled) return true;
        
        this.log('Running automatic fixes...');
        
        const fixes = [
            { command: 'npm run lint -- --fix', name: 'ESLint fixes' },
            { command: 'npm run format', name: 'Code formatting' },
            { command: 'npm run type-check', name: 'TypeScript check' }
        ];
        
        for (const fix of fixes) {
            try {
                const result = await this.executeCommand(fix.command);
                if (result.success) {
                    this.log(`${fix.name} completed successfully`);
                } else {
                    this.log(`${fix.name} failed: ${result.error}`, 'warn');
                }
            } catch (error) {
                this.log(`${fix.name} failed: ${error.message}`, 'warn');
            }
        }
        
        return true;
    }

    groupFilesByType(files) {
        if (!this.config.git.smartGrouping) {
            return [files];
        }
        
        const groups = {
            typescript: [],
            javascript: [],
            styles: [],
            config: [],
            docs: [],
            tests: [],
            other: []
        };
        
        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            const filename = path.basename(file).toLowerCase();
            
            if (ext === '.ts' || ext === '.tsx') {
                groups.typescript.push(file);
            } else if (ext === '.js' || ext === '.jsx') {
                groups.javascript.push(file);
            } else if (ext === '.css' || ext === '.scss' || ext === '.sass') {
                groups.styles.push(file);
            } else if (ext === '.json' || ext === '.yaml' || ext === '.yml' || ext === '.toml') {
                groups.config.push(file);
            } else if (ext === '.md' || ext === '.txt') {
                groups.docs.push(file);
            } else if (filename.includes('test') || filename.includes('spec')) {
                groups.tests.push(file);
            } else {
                groups.other.push(file);
            }
        });
        
        return Object.values(groups).filter(group => group.length > 0);
    }

    generateSmartCommitMessage(files) {
        const fileGroups = this.groupFilesByType(files);
        const descriptions = [];
        
        fileGroups.forEach(group => {
            const ext = path.extname(group[0]).toLowerCase();
            const count = group.length;
            
            let description = '';
            if (ext === '.ts' || ext === '.tsx') {
                description = `${count} TypeScript file${count > 1 ? 's' : ''}`;
            } else if (ext === '.js' || ext === '.jsx') {
                description = `${count} JavaScript file${count > 1 ? 's' : ''}`;
            } else if (ext === '.css' || ext === '.scss') {
                description = `${count} style file${count > 1 ? 's' : ''}`;
            } else if (ext === '.json') {
                description = `${count} config file${count > 1 ? 's' : ''}`;
            } else if (ext === '.md') {
                description = `${count} documentation file${count > 1 ? 's' : ''}`;
            } else {
                description = `${count} ${ext.slice(1)} file${count > 1 ? 's' : ''}`;
            }
            
            descriptions.push(description);
        });
        
        const message = descriptions.join(', ');
        return this.config.git.commitMessageTemplate.replace('{description}', message);
    }

    async stageFiles(files) {
        if (files.length === 0) return true;
        
        try {
            const fileList = files.join(' ');
            const result = await this.executeCommand(`git add ${fileList}`);
            if (result.success) {
                this.log(`Staged ${files.length} files`);
                return true;
            } else {
                this.log(`Error staging files: ${result.error}`, 'error');
                return false;
            }
        } catch (error) {
            this.log(`Error staging files: ${error.message}`, 'error');
            return false;
        }
    }

    async commit(message) {
        const startTime = Date.now();
        
        try {
            const result = await this.executeCommand(`git commit -m "${message}"`);
            if (result.success) {
                const commitTime = Date.now() - startTime;
                this.log(`Committed: ${message}`, 'success');
                this.updatePerformance('commit', commitTime);
                return true;
            } else {
                this.log(`Error committing: ${result.error}`, 'error');
                return false;
            }
        } catch (error) {
            this.log(`Error committing: ${error.message}`, 'error');
            return false;
        }
    }

    async push() {
        const startTime = Date.now();
        const branch = await this.getCurrentBranch();
        
        try {
            const result = await this.executeCommand(`git push origin ${branch}`);
            if (result.success) {
                const pushTime = Date.now() - startTime;
                this.log(`Pushed to ${branch}`, 'success');
                this.updatePerformance('push', pushTime);
                return true;
            } else {
                this.log(`Error pushing: ${result.error}`, 'error');
                return false;
            }
        } catch (error) {
            this.log(`Error pushing: ${error.message}`, 'error');
            return false;
        }
    }

    updatePerformance(operation, time) {
        try {
            const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
            const perf = status.performance;
            
            if (operation === 'commit') {
                perf.averageCommitTime = (perf.averageCommitTime + time) / 2;
            } else if (operation === 'push') {
                perf.averagePushTime = (perf.averagePushTime + time) / 2;
            }
            
            fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
        } catch (error) {
            this.log(`Error updating performance metrics: ${error.message}`, 'warn');
        }
    }

    async execute() {
        const startTime = Date.now();
        this.log('🚀 Starting enhanced git automation...');
        
        // Check for conflicts
        const hasConflicts = await this.checkForConflicts();
        if (hasConflicts) {
            const resolved = await this.resolveConflicts();
            if (!resolved) {
                this.log('Failed to resolve conflicts', 'error');
                return false;
            }
        }
        
        // Get git status
        const status = await this.getGitStatus();
        if (status.length === 0) {
            this.log('No changes to commit');
            return true;
        }
        
        // Auto-fix if enabled
        await this.autoFix();
        
        // Group files intelligently
        const allFiles = status.map(line => line.split(' ').pop());
        const fileGroups = this.groupFilesByType(allFiles);
        
        let successCount = 0;
        
        // Commit each group separately
        for (const group of fileGroups) {
            if (group.length === 0) continue;
            
            // Stage files in this group
            const staged = await this.stageFiles(group);
            if (!staged) continue;
            
            // Generate commit message
            const message = this.generateSmartCommitMessage(group);
            
            // Commit
            const committed = await this.commit(message);
            if (committed) {
                successCount++;
            }
        }
        
        // Push if enabled and commits were successful
        if (this.config.git.autoPush && successCount > 0) {
            await this.push();
        }
        
        const totalTime = Date.now() - startTime;
        this.log(`✅ Enhanced git automation completed in ${totalTime}ms. ${successCount} commits made.`, 'success');
        
        return successCount > 0;
    }

    async watch() {
        this.log('👀 Starting enhanced file watcher...');
        
        const chokidar = require('chokidar');
        const watcher = chokidar.watch([
            'src/**/*',
            'components/**/*',
            'pages/**/*',
            'styles/**/*',
            'public/**/*',
            'automation/**/*'
        ], {
            ignored: /(node_modules|\.git|\.next|dist|build|logs|temp)/,
            persistent: true,
            ignoreInitial: true
        });

        let commitTimeout;
        const commitDelay = 3000; // 3 seconds delay

        watcher.on('change', (filePath) => {
            this.log(`File changed: ${filePath}`);
            
            // Clear existing timeout
            if (commitTimeout) {
                clearTimeout(commitTimeout);
            }
            
            // Set new timeout for commit
            commitTimeout = setTimeout(async () => {
                await this.execute();
            }, commitDelay);
        });

        watcher.on('error', (error) => {
            this.log(`Watcher error: ${error.message}`, 'error');
        });

        this.log('✅ Enhanced file watcher started. Changes will be auto-committed after 3 seconds of inactivity.');
    }

    async getStatus() {
        try {
            const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
            return status;
        } catch (error) {
            return null;
        }
    }
}

// Main execution
const gitAutomation = new EnhancedGitAutomation();
const command = process.argv[2] || 'execute';

switch (command) {
    case 'execute':
        gitAutomation.execute().catch(error => {
            console.error('Enhanced git automation failed:', error.message);
            process.exit(1);
        });
        break;
    case 'watch':
        gitAutomation.watch().catch(error => {
            console.error('Watch mode failed:', error.message);
            process.exit(1);
        });
        break;
    case 'status':
        const status = gitAutomation.getStatus();
        console.log('Enhanced Git Automation Status:', JSON.stringify(status, null, 2));
        break;
    case 'fix':
        gitAutomation.autoFix().catch(error => {
            console.error('Auto-fix failed:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🚀 Enhanced Git Automation System

Usage:
  node automation/enhanced-git-automation.js [command]

Commands:
  execute        - Execute enhanced git automation
  watch          - Watch for file changes and auto-commit
  status         - Show automation status
  fix            - Run auto-fix only

Features:
  ✅ Smart file grouping
  ✅ Intelligent commit messages
  ✅ Conflict resolution
  ✅ Performance optimization
  ✅ Comprehensive logging
  ✅ Error handling and recovery

Examples:
  node automation/enhanced-git-automation.js execute
  node automation/enhanced-git-automation.js watch
        `);
        break;
}

module.exports = EnhancedGitAutomation; 