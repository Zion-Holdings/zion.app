#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AutonomousCommitPush {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, logs', autonomous-commit-push.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, utf8'));
        }
        return {
            autoCommitEnabled: true,
            autoPushEnabled: true,
            commitMessageTemplate: 🤖 Autonomous improvement: {description},
            maxCommitSize: 10, // Maximum files per commit
            minChangesForCommit: 1,
            branchProtection: {
                main: true,
                develop: true
            },
            commitTypes: {
                feat: ✨ New feature',
                fix: 🐛 Bug fix',
                docs: 📚 Documentation',
                style: 🎨 Code style',
                refactor: ♻️ Code refactoring',
                test: 🧪 Test',
                chore: 🔧 Maintenance',
                perf: ⚡ Performance',
                ci: 👷 CI/CD',
                build: 📦 Build',
                revert: ⏪ Revert
            }
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        console.log(logEntry.trim());
        fs.appendFileSync(this.logFile, logEntry);
    }

    async runCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, options.args || [], {
                stdio: pipe',
                shell: true,
                cwd: this.projectRoot,
                ...options
            });

            let stdout = ;
            let stderr = ;

            child.stdout.on('data', (data) => {
                stdout += data.toString();
                if (options.logOutput !== false) {
                    this.log(data.toString().trim(), debug');
                }
            });

            child.stderr.on('data', (data) => {
                stderr += data.toString();
                if (options.logOutput !== false) {
                    this.log(data.toString().trim(), warn');
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

    async getCurrentBranch() {
        try {
            const result = await this.runCommand('git branch --show-current', { logOutput: false });
            return result.stdout.trim();
        } catch (error) {
            return unknown';
        }
    }

    async getChangedFiles() {
        try {
            const result = await this.runCommand('git status --porcelain', { logOutput: false });
            const lines = result.stdout.trim().split('\n').filter(Boolean);
            
            return lines.map(line => {
                // Handle both single and double character status codes
                const status = line.substring(0, 2);
                const file = line.substring(3).trim();
                return { status, file };
            }).filter(item => item.file && item.file.length > 0);
        } catch (error) {
            return [];
        }
    }

    async getStagedFiles() {
        try {
            const result = await this.runCommand('git diff --cached --name-only', { logOutput: false });
            return result.stdout.trim().split('\n').filter(Boolean);
        } catch (error) {
            return [];
        }
    }

    async getUnstagedFiles() {
        try {
            const result = await this.runCommand('git diff --name-only', { logOutput: false });
            return result.stdout.trim().split('\n').filter(Boolean);
        } catch (error) {
            return [];
        }
    }

    async getUntrackedFiles() {
        try {
            const result = await this.runCommand('git ls-files --others --exclude-standard', { logOutput: false });
            return result.stdout.trim().split('\n').filter(Boolean);
        } catch (error) {
            return [];
        }
    }

    async analyzeChanges() {
        this.log('📊 Analyzing changes...');

        const changedFiles = await this.getChangedFiles();
        const stagedFiles = await this.getStagedFiles();
        const unstagedFiles = await this.getUnstagedFiles();
        const untrackedFiles = await this.getUntrackedFiles();

        const analysis = {
            totalChanges: changedFiles.length,
            stagedFiles: stagedFiles.length,
            unstagedFiles: unstagedFiles.length,
            untrackedFiles: untrackedFiles.length,
            changes: changedFiles,
            categories: this.categorizeChanges(changedFiles)
        };

        this.log(`📈 Found ${analysis.totalChanges} total changes`);
        this.log(`📦 Staged: ${analysis.stagedFiles}, Unstaged: ${analysis.unstagedFiles}, Untracked: ${analysis.untrackedFiles}`);

        return analysis;
    }

    categorizeChanges(changedFiles) {
        const categories = {
            features: [],
            fixes: [],
            docs: [],
            tests: [],
            config: [],
            automation: [],
            other: []
        };

        for (const change of changedFiles) {
            const file = change.file;
            
            if (file.includes('test') || file.includes('spec') || file.includes('__tests__')) {
                categories.tests.push(change);
            } else if (file.includes('docs') || file.includes('README') || file.includes('.md')) {
                categories.docs.push(change);
            } else if (file.includes('config') || file.includes('.json') || file.includes('.env')) {
                categories.config.push(change);
            } else if (file.includes('automation') || file.includes('scripts')) {
                categories.automation.push(change);
            } else if (file.includes('src') || file.includes('components') || file.includes('pages')) {
                if (file.includes('fix') || file.includes('bug')) {
                    categories.fixes.push(change);
                } else {
                    categories.features.push(change);
                }
            } else {
                categories.other.push(change);
            }
        }

        return categories;
    }

    generateCommitMessage(changes, category = other') {
        this.log('💬 Generating commit message...');

        let commitType = chore';
        let description = ;

        // Determine commit type based on changes
        if (changes.some(c => c.file && c.file.includes('test'))) {
            commitType = test';
            description = Add or update tests';
        } else if (changes.some(c => c.file && c.file.includes('docs'))) {
            commitType = docs';
            description = Update documentation';
        } else if (changes.some(c => c.file && c.file.includes('fix'))) {
            commitType = fix';
            description = Fix issues';
        } else if (changes.some(c => c.file && c.file.includes('automation'))) {
            commitType = ci';
            description = Improve automation';
        } else if (changes.some(c => c.file && c.file.includes('config'))) {
            commitType = build';
            description = Update configuration';
        } else {
            commitType = feat';
            description = Add new features';
        }

        // Generate file summary
        const fileTypes = this.getFileTypes(changes);
        const fileSummary = Object.entries(fileTypes)
            .map(([type, count]) => `${count} ${type}`)
            .join(', );

        const message = `${this.config.commitTypes[commitType] || 🔧 Update'}: ${description} (${fileSummary})`;
        
        this.log(`✅ Generated commit message: ${message}`);
        return message;
    }

    getFileTypes(changes) {
        const types = {};
        
        for (const change of changes) {
            const ext = path.extname(change.file).toLowerCase();
            const type = ext ? ext.substring(1) : file';
            types[type] = (types[type] || 0) + 1;
        }

        return types;
    }

    async stageFiles(files) {
        this.log(`📦 Staging ${files.length} files...`);

        try {
            // Stage all changes at once
            await this.runCommand('git add', { args: ['.'] });
            this.log('✅ Files staged successfully');
            return true;
        } catch (error) {
            this.log(`❌ Failed to stage files: ${error.message}`, error');
            return false;
        }
    }

    async commitChanges(message) {
        this.log(`💾 Committing changes: ${message}`);

        try {
            await this.runCommand('git commit', { args: ['-m', message] });
            this.log('✅ Changes committed successfully');
            return true;
        } catch (error) {
            this.log(`❌ Failed to commit changes: ${error.message}`, error');
            return false;
        }
    }

    async pushChanges() {
        const currentBranch = await this.getCurrentBranch();
        this.log(`🚀 Pushing changes to ${currentBranch}...`);

        try {
            await this.runCommand('git push', { args: ['origin', currentBranch] });
            this.log('✅ Changes pushed successfully');
            return true;
        } catch (error) {
            this.log(`❌ Failed to push changes: ${error.message}`, error');
            return false;
        }
    }

    async autonomousCommit() {
        this.log('🚀 Starting autonomous commit process...');

        try {
            // Analyze changes
            const analysis = await this.analyzeChanges();

            if (analysis.totalChanges === 0) {
                this.log('ℹ️  No changes to commit');
                return { success: true, message: No changes found' };
            }

            // Check if we should commit
            if (analysis.totalChanges < this.config.minChangesForCommit) {
                this.log(`ℹ️  Not enough changes (${analysis.totalChanges} < ${this.config.minChangesForCommit})`);
                return { success: true, message: Not enough changes to commit' };
            }

            // Stage all changes first
            const allFiles = analysis.changes.map(c => c.file);
            const staged = await this.stageFiles(allFiles);
            if (!staged) {
                return { success: false, error: Failed to stage files' };
            }

            // Group changes into logical commits
            const commitGroups = this.groupChangesForCommit(analysis.changes);

            let commitCount = 0;
            for (const group of commitGroups) {
                if (group.length === 0) continue;

                // Generate commit message
                const message = this.generateCommitMessage(group);

                // Commit changes
                const committed = await this.commitChanges(message);
                if (committed) {
                    commitCount++;
                }
            }

            this.log(`✅ Autonomous commit completed. Created ${commitCount} commits.`);
            return { success: true, commits: commitCount };

        } catch (error) {
            this.log(`❌ Autonomous commit failed: ${error.message}`, error');
            return { success: false, error: error.message };
        }
    }

    async autonomousPush() {
        this.log('🚀 Starting autonomous push process...');

        try {
            const currentBranch = await this.getCurrentBranch();

            // Check if we're on a protected branch
            if (this.config.branchProtection[currentBranch]) {
                this.log(`⚠️  Branch ${currentBranch} is protected. Skipping automatic push.`);
                return { success: true, message: Protected branch - manual push required' };
            }

            // Check if there are commits to push
            const result = await this.runCommand('git log --oneline origin/' + currentBranch + ..HEAD', { logOutput: false });
            const commitsToPush = result.stdout.trim().split('\n').filter(Boolean);

            if (commitsToPush.length === 0) {
                this.log('ℹ️  No commits to push');
                return { success: true, message: No commits to push' };
            }

            // Push changes
            const pushed = await this.pushChanges();
            if (pushed) {
                this.log(`✅ Pushed ${commitsToPush.length} commits successfully`);
                return { success: true, commits: commitsToPush.length };
            } else {
                return { success: false, error: Push failed' };
            }

        } catch (error) {
            this.log(`❌ Autonomous push failed: ${error.message}`, error');
            return { success: false, error: error.message };
        }
    }

    async autonomousCommitAndPush() {
        this.log('🚀 Starting autonomous commit and push process...');

        try {
            // First commit changes
            const commitResult = await this.autonomousCommit();
            if (!commitResult.success) {
                return commitResult;
            }

            // Then push changes
            const pushResult = await this.autonomousPush();
            if (!pushResult.success) {
                return pushResult;
            }

            this.log('✅ Autonomous commit and push completed successfully');
            return {
                success: true,
                commits: commitResult.commits || 0,
                pushed: pushResult.commits || 0
            };

        } catch (error) {
            this.log(`❌ Autonomous commit and push failed: ${error.message}`, error');
            return { success: false, error: error.message };
        }
    }

    groupChangesForCommit(changes) {
        const groups = [];
        let currentGroup = [];

        for (const change of changes) {
            // If current group is full, start a new one
            if (currentGroup.length >= this.config.maxCommitSize) {
                groups.push(currentGroup);
                currentGroup = [];
            }

            currentGroup.push(change);
        }

        // Add the last group if it has changes
        if (currentGroup.length > 0) {
            groups.push(currentGroup);
        }

        return groups;
    }

    async watchAndAutoCommit() {
        this.log('👀 Starting file watcher for autonomous commits...');

        // This would integrate with a file watcher to automatically commit changes
        // For now, we'll just run the commit process
        return await this.autonomousCommitAndPush();
    }
}

// Main execution
async function main() {
    const system = new AutonomousCommitPush();
    const command = process.argv[2];

    try {
        let result;
        
        switch (command) {
            case commit':
                result = await system.autonomousCommit();
                break;
            case push':
                result = await system.autonomousPush();
                break;
            case commit-and-push':             break;
            case commit-and-push':
            case all':
                result = await system.autonomousCommitAndPush();
                break;
            case watch':
                result = await system.watchAndAutoCommit();
                break;
            case analyze':
                result = await system.analyzeChanges();
                break;
            default:
                console.log('Usage: node autonomous-commit-push.js <command>);
                console.log('Commands: commit, push, commit-and-push, all, watch, analyze');
                process.exit(1);
        }

        if (result.success) {
            console.log('✅ Operation completed successfully');
            if (result.commits) {
                console.log(`📝 Created ${result.commits} commits`);
            }
            if (result.pushed) {
                console.log(`🚀 Pushed ${result.pushed} commits`);
            }
            process.exit(0);
        } else {
            console.log('❌ Operation failed:', result.error || result.message);
            process.exit(1);
        }

    } catch (error) {
        console.error('❌ Command failed:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = AutonomousCommitPush; 