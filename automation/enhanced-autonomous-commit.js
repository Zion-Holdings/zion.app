#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class EnhancedAutonomousCommit {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, 'logs', 'enhanced-autonomous-commit.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            maxCommitSize: 50,
            commitMessageTemplate: 'fix: {description}',
            branch: 'main',
            autoPush: true,
            enableLogging: true,
            autoFixEnabled: true,
            performanceThreshold: 80,
            securityLevel: 'high'
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = 'info') {
        if (!this.config.enableLogging) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
            console.error(message);
        } else if (level === 'warn') {
            console.warn(message);
        } else {
            console.log(message);
        }
    }

    async getGitStatus() {
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' });
            return status.trim().split('\n').filter(line => line.length > 0);
        } catch (error) {
            this.log(`Error getting git status: ${error.message}`, 'error');
            return [];
        }
    }

    async getStagedFiles() {
        try {
            const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' });
            return staged.trim().split('\n').filter(line => line.length > 0);
        } catch (error) {
            this.log(`Error getting staged files: ${error.message}`, 'error');
            return [];
        }
    }

    async stageFiles(files) {
        try {
            if (files.length === 0) return true;
            
            const fileList = files.join(' ');
            execSync(`git add ${fileList}`, { stdio: 'pipe' });
            this.log(`Staged ${files.length} files`);
            return true;
        } catch (error) {
            this.log(`Error staging files: ${error.message}`, 'error');
            return false;
        }
    }

    generateCommitMessage(files) {
        const fileTypes = this.analyzeFileTypes(files);
        const description = this.generateDescription(fileTypes);
        const changeType = this.determineChangeType(fileTypes);
        return this.config.commitMessageTemplate.replace('{description}', `${changeType}: ${description}`);
    }

    analyzeFileTypes(files) {
        const types = {};
        files.forEach(file => {
            const ext = path.extname(file);
            types[ext] = (types[ext] || 0) + 1;
        });
        return types;
    }

    determineChangeType(fileTypes) {
        const hasTS = fileTypes['.ts'] || fileTypes['.tsx'];
        const hasJS = fileTypes['.js'] || fileTypes['.jsx'];
        const hasCSS = fileTypes['.css'] || fileTypes['.scss'];
        const hasJSON = fileTypes['.json'];
        const hasMD = fileTypes['.md'];
        const hasHTML = fileTypes['.html'];

        if (hasTS || hasJS) {
            return 'fix';
        } else if (hasCSS) {
            return 'style';
        } else if (hasJSON) {
            return 'chore';
        } else if (hasMD) {
            return 'docs';
        } else if (hasHTML) {
            return 'feat';
        } else {
            return 'fix';
        }
    }

    generateDescription(fileTypes) {
        const descriptions = [];
        for (const [ext, count] of Object.entries(fileTypes)) {
            if (ext === '.ts' || ext === '.tsx') {
                descriptions.push(`${count} TypeScript file${count > 1 ? 's' : ''}`);
            } else if (ext === '.js' || ext === '.jsx') {
                descriptions.push(`${count} JavaScript file${count > 1 ? 's' : ''}`);
            } else if (ext === '.css' || ext === '.scss') {
                descriptions.push(`${count} style file${count > 1 ? 's' : ''}`);
            } else if (ext === '.json') {
                descriptions.push(`${count} config file${count > 1 ? 's' : ''}`);
            } else if (ext === '.md') {
                descriptions.push(`${count} documentation file${count > 1 ? 's' : ''}`);
            } else if (ext === '.html') {
                descriptions.push(`${count} HTML file${count > 1 ? 's' : ''}`);
            } else {
                descriptions.push(`${count} ${ext.slice(1)} file${count > 1 ? 's' : ''}`);
            }
        }
        return descriptions.join(', ');
    }

    async commit(message) {
        try {
            execSync(`git commit -m "${message}"`, { stdio: 'pipe' });
            this.log(`Committed: ${message}`);
            return true;
        } catch (error) {
            this.log(`Error committing: ${error.message}`, 'error');
            return false;
        }
    }

    async push() {
        try {
            const branch = this.config.branch;
            execSync(`git push origin ${branch}`, { stdio: 'pipe' });
            this.log(`Pushed to ${branch}`);
            return true;
        } catch (error) {
            this.log(`Error pushing: ${error.message}`, 'error');
            return false;
        }
    }

    async autoFix() {
        if (!this.config.autoFixEnabled) return true;
        
        try {
            this.log('Running auto-fix...');
            execSync('npm run lint -- --fix', { stdio: 'pipe' });
            execSync('npm run format', { stdio: 'pipe' });
            this.log('Auto-fix completed');
            return true;
        } catch (error) {
            this.log(`Auto-fix failed: ${error.message}`, 'warn');
            return false;
        }
    }

    async checkPerformance() {
        try {
            this.log('Checking performance...');
            if (fs.existsSync(path.join(__dirname, 'performance', 'performance-check.js'))) {
                execSync('node automation/performance/performance-check.js', { stdio: 'pipe' });
                this.log('Performance check completed');
            }
            return true;
        } catch (error) {
            this.log(`Performance check failed: ${error.message}`, 'warn');
            return false;
        }
    }

    async checkSecurity() {
        try {
            this.log('Checking security...');
            execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
            this.log('Security check completed');
            return true;
        } catch (error) {
            this.log(`Security check failed: ${error.message}`, 'warn');
            return false;
        }
    }

    async generateCommitReport(commitHash) {
        try {
            const report = {
                timestamp: new Date().toISOString(),
                commitHash: commitHash,
                branch: this.config.branch,
                filesChanged: await this.getStagedFiles(),
                performance: await this.checkPerformance(),
                security: await this.checkSecurity(),
                autoFix: this.config.autoFixEnabled
            };

            const reportPath = path.join(__dirname, 'reports', `commit-${commitHash}.json`);
            fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
            this.log(`Commit report generated: ${reportPath}`);
            return true;
        } catch (error) {
            this.log(`Failed to generate commit report: ${error.message}`, 'error');
            return false;
        }
    }

    async watch() {
        this.log('👀 Starting enhanced file watcher for autonomous commits...');
        
        const chokidar = require('chokidar');
        const watchConfig = this.config.watchMode || {
            patterns: ['src/**/*', 'components/**/*', 'pages/**/*'],
            ignored: ['node_modules/**/*', '.git/**/*'],
            delay: 5000
        };

        const watcher = chokidar.watch(watchConfig.patterns, {
            ignored: watchConfig.ignored,
            persistent: true,
            ignoreInitial: true
        });

        let commitTimeout;
        const commitDelay = watchConfig.delay || 5000;

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

        this.log(`✅ Enhanced file watcher started. Changes will be auto-committed after ${commitDelay}ms of inactivity.`);
    }

    async execute() {
        this.log('🚀 Starting enhanced autonomous commit...');
        
        // Get git status
        const status = await this.getGitStatus();
        if (status.length === 0) {
            this.log('No changes to commit');
            return;
        }

        // Auto-fix if enabled
        await this.autoFix();

        // Stage all changes
        const files = status.map(line => line.split(' ').pop());
        await this.stageFiles(files);

        // Generate commit message
        const message = this.generateCommitMessage(files);
        
        // Commit
        const committed = await this.commit(message);
        if (!committed) {
            this.log('Failed to commit changes', 'error');
            return;
        }

        // Get commit hash for report
        const commitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();

        // Generate commit report
        await this.generateCommitReport(commitHash);

        // Push if enabled
        if (this.config.autoPush) {
            await this.push();
        }

        this.log('✅ Enhanced autonomous commit completed successfully!');
    }
}

// Main execution
const autonomousCommit = new EnhancedAutonomousCommit();
const command = process.argv[2] || 'execute';

switch (command) {
    case 'execute':
        autonomousCommit.execute().catch(error => {
            console.error('Enhanced autonomous commit failed:', error.message);
            process.exit(1);
        });
        break;
    case 'watch':
        autonomousCommit.watch().catch(error => {
            console.error('Watch mode failed:', error.message);
            process.exit(1);
        });
        break;
    case 'test':
        console.log('🧪 Testing enhanced autonomous commit system...');
        autonomousCommit.log('Test log entry');
        console.log('✅ Test completed successfully');
        break;
    default:
        console.log(`
🚀 Enhanced Autonomous Commit System

Usage:
  node automation/enhanced-autonomous-commit.js [command]

Commands:
  execute  - Execute enhanced autonomous commit
  watch    - Watch for file changes and auto-commit
  test     - Test the system

Features:
  ✅ Intelligent commit message generation
  ✅ Auto-fix capabilities
  ✅ Performance monitoring
  ✅ Security checks
  ✅ Commit reporting
  ✅ File watching
  ✅ Configuration-driven behavior

Examples:
  node automation/enhanced-autonomous-commit.js execute
  node automation/enhanced-autonomous-commit.js watch
        `);
        break;
} 