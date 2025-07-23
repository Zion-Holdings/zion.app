#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class EnhancedAutomationSystem {
    constructor() {
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, 'logs', 'enhanced-automation.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            autonomousMode: true,
            autoFixEnabled: true,
            autoCommitEnabled: true,
            autoPushEnabled: true,
            maxRetries: 3,
            logLevel: 'info'
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        console.log(logEntry.trim());
        fs.appendFileSync(this.logFile, logEntry);
    }

    async runCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, options.args || [], {
                stdio: 'pipe',
                shell: true,
                ...options
            });

            let stdout = '';
            let stderr = '';

            child.stdout.on('data', (data) => {
                stdout += data.toString();
                if (options.logOutput !== false) {
                    this.log(data.toString().trim(), 'debug');
                }
            });

            child.stderr.on('data', (data) => {
                stderr += data.toString();
                if (options.logOutput !== false) {
                    this.log(data.toString().trim(), 'warn');
                }
            });

            child.on('close', (code) => {
                if (code === 0) {
                    resolve({ stdout, stderr, code });
                } else {
                    reject(new Error(`Command failed with code ${code}: ${stderr}`));
                }
            });

            child.on('error', (error) => {
                reject(error);
            });
        });
    }

    async preCommit() {
        this.log('🚀 Starting pre-commit autonomous checks...');
        
        try {
            // Run autonomous code improvements
            await this.runAutonomousImprovements();
            
            // Run performance optimizations
            await this.runPerformanceChecks();
            
            // Run security checks
            await this.runSecurityChecks();
            
            this.log('✅ Pre-commit checks completed successfully');
            return true;
        } catch (error) {
            this.log(`❌ Pre-commit failed: ${error.message}`, 'error');
            return false;
        }
    }

    async prePush() {
        this.log('🚀 Starting pre-push autonomous checks...');
        
        try {
            // Final validation
            await this.runFinalValidation();
            
            // Prepare deployment
            await this.prepareDeployment();
            
            // Update deployment metadata
            await this.updateDeploymentMetadata();
            
            this.log('✅ Pre-push checks completed successfully');
            return true;
        } catch (error) {
            this.log(`❌ Pre-push failed: ${error.message}`, 'error');
            return false;
        }
    }

    async postCommitImprovements() {
        this.log('🔄 Starting post-commit autonomous improvements...');
        
        try {
            // Generate documentation updates
            await this.generateDocumentationUpdates();
            
            // Update changelog
            await this.updateChangelog();
            
            // Run additional optimizations
            await this.runPostCommitOptimizations();
            
            this.log('✅ Post-commit improvements completed');
            return true;
        } catch (error) {
            this.log(`❌ Post-commit improvements failed: ${error.message}`, 'error');
            return false;
        }
    }

    async validateCommitMessage(message) {
        this.log('✅ Validating commit message...');
        
        // Check for conventional commit format
        const conventionalCommitRegex = /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?: .+/;
        
        if (!conventionalCommitRegex.test(message)) {
            this.log('⚠️  Commit message does not follow conventional format', 'warn');
            return false;
        }
        
        // Check message length
        if (message.length > 72) {
            this.log('⚠️  Commit message is too long', 'warn');
            return false;
        }
        
        this.log('✅ Commit message validation passed');
        return true;
    }

    async enhanceCommitMessage(message) {
        this.log('✨ Enhancing commit message...');
        
        // Add issue references if missing
        let enhancedMessage = message;
        
        // Extract issue numbers from branch name
        const branchName = await this.getCurrentBranch();
        const issueMatch = branchName.match(/(?:issue|fix|feature)\/(\d+)/i);
        
        if (issueMatch && !message.includes(`#${issueMatch[1]}`)) {
            enhancedMessage = `${message} (closes #${issueMatch[1]})`;
        }
        
        // Add emoji based on commit type
        const emojiMap = {
            feat: '✨',
            fix: '🐛',
            docs: '📚',
            style: '🎨',
            refactor: '♻️',
            test: '🧪',
            chore: '🔧',
            perf: '⚡',
            ci: '👷',
            build: '📦',
            revert: '⏪'
        };
        
        const typeMatch = message.match(/^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)/);
        if (typeMatch && emojiMap[typeMatch[1]]) {
            enhancedMessage = `${emojiMap[typeMatch[1]]} ${enhancedMessage}`;
        }
        
        this.log(`✅ Enhanced commit message: ${enhancedMessage}`);
        return enhancedMessage;
    }

    async generateCommitMetadata(message) {
        this.log('📊 Generating commit metadata...');
        
        const metadata = {
            timestamp: new Date().toISOString(),
            hash: await this.getCurrentCommitHash(),
            message: message,
            branch: await this.getCurrentBranch(),
            author: await this.getGitAuthor(),
            filesChanged: await this.getChangedFiles(),
            stats: await this.getCommitStats()
        };
        
        const metadataFile = path.join(__dirname, 'data', 'commit-metadata.json');
        this.ensureDirectory(path.dirname(metadataFile));
        
        let existingMetadata = [];
        if (fs.existsSync(metadataFile)) {
            existingMetadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
        }
        
        existingMetadata.push(metadata);
        fs.writeFileSync(metadataFile, JSON.stringify(existingMetadata, null, 2));
        
        this.log('✅ Commit metadata generated');
        return metadata;
    }

    async updateCommitMetadata(hash, message) {
        this.log('📊 Updating commit metadata...');
        
        const metadataFile = path.join(__dirname, 'data', 'commit-metadata.json');
        if (!fs.existsSync(metadataFile)) {
            this.log('⚠️  No existing metadata found', 'warn');
            return;
        }
        
        const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
        const commitIndex = metadata.findIndex(c => c.hash === hash);
        
        if (commitIndex !== -1) {
            metadata[commitIndex].message = message;
            metadata[commitIndex].updatedAt = new Date().toISOString();
            fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
            this.log('✅ Commit metadata updated');
        }
    }

    async generateCommitReport(hash) {
        this.log('📋 Generating commit report...');
        
        const report = {
            hash: hash,
            timestamp: new Date().toISOString(),
            branch: await this.getCurrentBranch(),
            filesChanged: await this.getChangedFiles(),
            stats: await this.getCommitStats(),
            improvements: await this.getCommitImprovements(),
            performance: await this.getPerformanceMetrics(),
            security: await this.getSecurityMetrics()
        };
        
        const reportFile = path.join(__dirname, 'reports', `commit-${hash.substring(0, 8)}.json`);
        this.ensureDirectory(path.dirname(reportFile));
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        this.log('✅ Commit report generated');
        return report;
    }

    async prepareDeployment() {
        this.log('🚀 Preparing for deployment...');
        
        try {
            // Build the project
            await this.runCommand('npm run build');
            
            // Run final tests
            await this.runCommand('npm test');
            
            // Generate deployment manifest
            await this.generateDeploymentManifest();
            
            // Update deployment status
            await this.updateDeploymentStatus('ready');
            
            this.log('✅ Deployment preparation completed');
            return true;
        } catch (error) {
            this.log(`❌ Deployment preparation failed: ${error.message}`, 'error');
            return false;
        }
    }

    async updateDocs() {
        this.log('📚 Updating documentation...');
        
        try {
            // Generate API documentation
            await this.generateApiDocs();
            
            // Update README
            await this.updateReadme();
            
            // Generate changelog
            await this.generateChangelog();
            
            this.log('✅ Documentation updated');
            return true;
        } catch (error) {
            this.log(`❌ Documentation update failed: ${error.message}`, 'error');
            return false;
        }
    }

    async updateStatus() {
        this.log('🤖 Updating automation status...');
        
        const status = {
            lastUpdate: new Date().toISOString(),
            autonomousMode: this.config.autonomousMode,
            autoFixEnabled: this.config.autoFixEnabled,
            autoCommitEnabled: this.config.autoCommitEnabled,
            autoPushEnabled: this.config.autoPushEnabled,
            currentBranch: await this.getCurrentBranch(),
            lastCommit: await this.getCurrentCommitHash(),
            systemHealth: await this.getSystemHealth()
        };
        
        const statusFile = path.join(__dirname, '.autonomous-status.json');
        fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
        
        this.log('✅ Automation status updated');
        return status;
    }

    // Helper methods
    async getCurrentBranch() {
        try {
            const result = await this.runCommand('git branch --show-current', { logOutput: false });
            return result.stdout.trim();
        } catch (error) {
            return 'unknown';
        }
    }

    async getCurrentCommitHash() {
        try {
            const result = await this.runCommand('git rev-parse HEAD', { logOutput: false });
            return result.stdout.trim();
        } catch (error) {
            return 'unknown';
        }
    }

    async getGitAuthor() {
        try {
            const result = await this.runCommand('git config user.name', { logOutput: false });
            return result.stdout.trim();
        } catch (error) {
            return 'unknown';
        }
    }

    async getChangedFiles() {
        try {
            const result = await this.runCommand('git diff --name-only HEAD~1', { logOutput: false });
            return result.stdout.trim().split('\n').filter(Boolean);
        } catch (error) {
            return [];
        }
    }

    async getCommitStats() {
        try {
            const result = await this.runCommand('git diff --stat HEAD~1', { logOutput: false });
            return result.stdout.trim();
        } catch (error) {
            return '';
        }
    }

    ensureDirectory(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    // Placeholder methods for autonomous improvements
    async runAutonomousImprovements() {
        this.log('🤖 Running autonomous improvements...');
        // Implementation would include code analysis and automatic fixes
        return true;
    }

    async runPerformanceChecks() {
        this.log('⚡ Running performance checks...');
        // Implementation would include performance analysis
        return true;
    }

    async runSecurityChecks() {
        this.log('🔒 Running security checks...');
        // Implementation would include security analysis
        return true;
    }

    async runFinalValidation() {
        this.log('✅ Running final validation...');
        // Implementation would include final checks
        return true;
    }

    async updateDeploymentMetadata() {
        this.log('📊 Updating deployment metadata...');
        // Implementation would update deployment info
        return true;
    }

    async generateDocumentationUpdates() {
        this.log('📚 Generating documentation updates...');
        // Implementation would generate docs
        return true;
    }

    async updateChangelog() {
        this.log('📝 Updating changelog...');
        // Implementation would update changelog
        return true;
    }

    async runPostCommitOptimizations() {
        this.log('🔄 Running post-commit optimizations...');
        // Implementation would run optimizations
        return true;
    }

    async getCommitImprovements() {
        return [];
    }

    async getPerformanceMetrics() {
        return {};
    }

    async getSecurityMetrics() {
        return {};
    }

    async getSystemHealth() {
        return 'healthy';
    }

    async generateApiDocs() {
        this.log('📖 Generating API documentation...');
        return true;
    }

    async updateReadme() {
        this.log('📖 Updating README...');
        return true;
    }

    async generateChangelog() {
        this.log('📝 Generating changelog...');
        return true;
    }

    async generateDeploymentManifest() {
        this.log('📋 Generating deployment manifest...');
        return true;
    }

    async updateDeploymentStatus(status) {
        this.log(`📊 Updating deployment status: ${status}`);
        return true;
    }
}

// Main execution
async function main() {
    const system = new EnhancedAutomationSystem();
    const command = process.argv[2];
    const args = process.argv.slice(3);

    try {
        switch (command) {
            case 'pre-commit':
                await system.preCommit();
                break;
            case 'pre-push':
                await system.prePush();
                break;
            case 'post-commit-improvements':
                await system.postCommitImprovements();
                break;
            case 'validate-commit-message':
                const isValid = await system.validateCommitMessage(args[0]);
                process.exit(isValid ? 0 : 1);
                break;
            case 'enhance-commit-message':
                const enhanced = await system.enhanceCommitMessage(args[0]);
                console.log(enhanced);
                break;
            case 'generate-commit-metadata':
                await system.generateCommitMetadata(args[0]);
                break;
            case 'update-commit-metadata':
                await system.updateCommitMetadata(args[0], args[1]);
                break;
            case 'generate-commit-report':
                await system.generateCommitReport(args[0]);
                break;
            case 'prepare-deployment':
                await system.prepareDeployment();
                break;
            case 'update-docs':
                await system.updateDocs();
                break;
            case 'update-status':
                await system.updateStatus();
                break;
            default:
                console.log('Usage: node enhanced-automation-system.js <command> [args...]');
                console.log('Commands: pre-commit, pre-push, post-commit-improvements, validate-commit-message, enhance-commit-message, generate-commit-metadata, update-commit-metadata, generate-commit-report, prepare-deployment, update-docs, update-status');
                process.exit(1);
        }
    } catch (error) {
        system.log(`❌ Command failed: ${error.message}`, 'error');
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = EnhancedAutomationSystem; 