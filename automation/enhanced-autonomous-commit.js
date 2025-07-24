#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class EnhancedAutonomousCommit {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, 'logs', 'autonomous-commit.log');
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
            autoFixEnabled: true
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
        return this.config.commitMessageTemplate.replace('{description}', description);
    }

    analyzeFileTypes(files) {
        const types = {};
        files.forEach(file => {
            const ext = path.extname(file);
            types[ext] = (types[ext] || 0) + 1;
        });
        return types;
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

        // Push if enabled
        if (this.config.autoPush) {
            await this.push();
        }

        this.log('✅ Enhanced autonomous commit completed successfully!');
    }
}

// Run the script
const autonomousCommit = new EnhancedAutonomousCommit();
autonomousCommit.execute().catch(error => {
    console.error('Autonomous commit failed:', error.message);
    process.exit(1);
});
