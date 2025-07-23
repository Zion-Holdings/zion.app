
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

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
            maxCommitSize: 50,
            commitMessageTemplate: fix: {description},
            branch: main',
            autoPush: true,
            enableLogging: true
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = info') {
        if (!this.config.enableLogging) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            logger.error('Failed to write to log file:', error.message);
        }
        
        if (level === error') {
            logger.error(message);
        } else if (level === warn') {
            logger.warn(message);
        } else {
            logger.info(message);
        }
    }

    async getGitStatus() {
        try {
            const status = execSync('git status --porcelain', { encoding: utf8' });
            return status.trim().split('\n').filter(line => line.length > 0);
        } catch (error) {
            this.log(`Error getting git status: ${error.message}`, error');
            return [];
        }
    }

    async getStagedFiles() {
        try {
            const staged = execSync('git diff --cached --name-only', { encoding: utf8' });
            return staged.trim().split('\n').filter(line => line.length > 0);
        } catch (error) {
            this.log(`Error getting staged files: ${error.message}`, error');
            return [];
        }
    }

    async stageFiles(files) {
        try {
            if (files.length === 0) return true;
            
            const fileList = files.join(' ;
            execSync(`git add ${fileList}`, { stdio: pipe' });
            this.log(`Staged ${files.length} files`);
            return true;
        } catch (error) {
            this.log(`Error staging files: ${error.message}`, error');
            return false;
        }
    }

    generateCommitMessage(files) {
        const fileTypes = this.analyzeFileTypes(files);
        const description = this.generateDescription(fileTypes);
        return this.config.commitMessageTemplate.replace('{description}, description);
    }

    analyzeFileTypes(files) {
        const types = {};
        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            const type = this.getFileType(ext);
            types[type] = (types[type] || 0) + 1;
        });
        return types;
    }

    getFileType(ext) {
        const typeMap = {
            .js': JavaScript',
            .ts': TypeScript',
            .tsx': React TypeScript',
            .jsx': React JavaScript',
            .css': CSS',
            .scss': SCSS',
            .html': HTML',
            .json': JSON',
            .md': Markdown',
            .py': Python',
            .sql': SQL
        };
        return typeMap[ext] || Other';
    }

    generateDescription(fileTypes) {
        const entries = Object.entries(fileTypes);
        if (entries.length === 0) return general improvements';
        
        const descriptions = entries.map(([type, count]) => {
            if (count === 1) return type;
            return `${type} files`;
        });
        
        if (descriptions.length === 1) {
            return descriptions[0];
        }
        
        const last = descriptions.pop();
        return `${descriptions.join(', )} and ${last}`;
    }

    async commit(message) {
        try {
            execSync(`git commit -m "${message}"`, { stdio: pipe' });
            this.log(`Committed: ${message}`);
            return true;
        } catch (error) {
            this.log(`Error committing: ${error.message}`, error');
            return false;
        }
    }

    async push() {
        try {
            execSync(`git push origin ${this.config.branch}`, { stdio: pipe' });
            this.log(`Pushed to ${this.config.branch}`);
            return true;
        } catch (error) {
            this.log(`Error pushing: ${error.message}`, error');
            return false;
        }
    }

    async autonomousCommitAndPush() {
        this.log('Starting autonomous commit and push process...');
        
        try {
            // Get current git status
            const status = await this.getGitStatus();
            if (status.length === 0) {
                this.log('No changes to commit');
                return { success: true, message: No changes detected' };
            }

            // Get staged files
            const stagedFiles = await this.getStagedFiles();
            
            // Stage all modified files if none are staged
            let filesToCommit = stagedFiles;
            if (stagedFiles.length === 0) {
                const modifiedFiles = status
                    .filter(line => !line.startsWith('??'))
                    .map(line => line.substring(3));
                
                if (modifiedFiles.length > 0) {
                    const staged = await this.stageFiles(modifiedFiles);
                    if (!staged) {
                        return { success: false, error: Failed to stage files' };
                    }
                    filesToCommit = modifiedFiles;
                }
            }

            // Generate commit message
            const commitMessage = this.generateCommitMessage(filesToCommit);
            
            // Commit changes
            const committed = await this.commit(commitMessage);
            if (!committed) {
                return { success: false, error: Failed to commit changes' };
            }

            // Push changes if enabled
            if (this.config.autoPush) {
                const pushed = await this.push();
                if (!pushed) {
                    return { success: false, error: Failed to push changes' };
                }
            }

            this.log('Autonomous commit and push completed successfully');
            return { 
                success: true, 
                message: `Successfully committed and pushed ${filesToCommit.length} files`,
                commitMessage,
                filesCount: filesToCommit.length
            };

        } catch (error) {
            this.log(`Unexpected error in autonomous commit and push: ${error.message}`, error');
            return { success: false, error: error.message };
        }
    }

    async run() {
        return await this.autonomousCommitAndPush();
    }
}

// Export the class
module.exports = AutonomousCommitPush;

// Run if called directly
if (require.main === module) {
    const autoCommitPush = new AutonomousCommitPush();
    autoCommitPush.run()
        .then(result => {
            if (result.success) {
                logger.info('✅ Success:', result.message);
                process.exit(0);
            } else {
                logger.error('❌ Error:', result.error);
                process.exit(1);
            }
        })
        .catch(error => {
            logger.error('❌ Unexpected error:', error);
            process.exit(1);
        });
} 

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

