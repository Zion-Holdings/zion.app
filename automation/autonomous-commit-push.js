
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


const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AutonomousCommitPush {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
<<<<<<< HEAD
        this.logFile = path.join(__dirname, logs', 'autonomous-commit-push.log');
=======
        this.logFile = path.join(__dirname, 'logs', 'autonomous-commit-push.log');
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            maxCommitSize: 50,
<<<<<<< HEAD
            commitMessageTemplate: fix: {description},
=======
            commitMessageTemplate: 'fix: {description}',
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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
            logger.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
<<<<<<< HEAD
            logger.error(message);
        } else if (level === 'warn') {
            logger.warn(message);
=======
            console.error(message);
        } else if (level === 'warn') {
            console.warn(message);
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
        } else {
            logger.info(message);
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
            
<<<<<<< HEAD
            const fileList = files.join(' ;
=======
            const fileList = files.join(' ');
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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
<<<<<<< HEAD
            execSync(`git push origin ${this.config.branch}`, { stdio: 'pipe' });
            this.log(`Pushed to ${this.config.branch}`);
=======
            const branch = this.config.branch;
            execSync(`git push origin ${branch}`, { stdio: 'pipe' });
            this.log(`Pushed to ${branch}`);
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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

    async watch() {
        this.log('👀 Starting file watcher for autonomous commits...');
        
        const chokidar = require('chokidar');
        const watcher = chokidar.watch([
            'src/**/*',
            'components/**/*',
            'pages/**/*',
            'styles/**/*',
            'public/**/*'
        ], {
            ignored: /(node_modules|\.git|\.next|dist|build)/,
            persistent: true,
            ignoreInitial: true
        });

        let commitTimeout;
        const commitDelay = 5000; // 5 seconds delay

        watcher.on('change', (path) => {
            this.log(`File changed: ${path}`);
            
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

        this.log('✅ File watcher started. Changes will be auto-committed after 5 seconds of inactivity.');
    }

    async execute() {
        this.log('🚀 Starting autonomous commit and push...');
        
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

        this.log('✅ Autonomous commit and push completed successfully!');
    }
}

// Main execution
const autonomousCommit = new AutonomousCommitPush();
const command = process.argv[2] || 'commit';

<<<<<<< HEAD
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

=======
switch (command) {
    case 'commit':
        autonomousCommit.execute().catch(error => {
            console.error('Autonomous commit failed:', error.message);
            process.exit(1);
        });
        break;
    case 'push':
        autonomousCommit.push().catch(error => {
            console.error('Push failed:', error.message);
            process.exit(1);
        });
        break;
    case 'commit-and-push':
        autonomousCommit.execute().catch(error => {
            console.error('Autonomous commit and push failed:', error.message);
            process.exit(1);
        });
        break;
    case 'watch':
        autonomousCommit.watch().catch(error => {
            console.error('Watch mode failed:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🚀 Autonomous Commit and Push System

Usage:
  node automation/autonomous-commit-push.js [command]

Commands:
  commit          - Commit current changes
  push            - Push to remote repository
  commit-and-push - Commit and push changes
  watch           - Watch for file changes and auto-commit

Examples:
  node automation/autonomous-commit-push.js commit
  node automation/autonomous-commit-push.js watch
        `);
        break;
} 
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
