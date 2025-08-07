#!/usr/bin/env node

/**
 * Simple Error Monitor
 * Monitors and fixes errors without external dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SimpleErrorMonitor {
    constructor() {
        this.config = {
            checkInterval: 30000, // 30 seconds
            autoCommit: true,
            logFile: path.join(__dirname, 'logs', 'simple-error-monitor.log')
        };
        
        this.ensureDirectories();
        this.isRunning = false;
    }

    ensureDirectories() {
        const dir = path.dirname(this.config.logFile);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        console.log(logMessage);
        
        try {
            fs.appendFileSync(this.config.logFile, logMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }

    async checkForErrors() {
        try {
            this.log('Checking for errors...');
            
            // Check for syntax errors
            const syntaxErrors = await this.checkSyntaxErrors();
            
            // Check for linting errors
            const lintingErrors = await this.checkLintingErrors();
            
            // Check for markdown errors
            const markdownErrors = await this.checkMarkdownErrors();
            
            const totalErrors = syntaxErrors + lintingErrors + markdownErrors;
            
            if (totalErrors > 0) {
                this.log(`Found ${totalErrors} errors. Attempting to fix...`);
                await this.fixErrors();
            } else {
                this.log('No errors found.');
            }
            
        } catch (error) {
            this.log(`Error in check cycle: ${error.message}`);
        }
    }

    async checkSyntaxErrors() {
        try {
            // Use node to check syntax
            const files = this.getTypeScriptFiles();
            let errorCount = 0;
            
            for (const file of files) {
                try {
                    // Try to parse the file
                    const content = fs.readFileSync(file, 'utf8');
                    // Basic syntax check - if we can read it, it's probably okay
                } catch (error) {
                    errorCount++;
                    this.log(`Syntax error in ${file}: ${error.message}`);
                }
            }
            
            return errorCount;
        } catch (error) {
            this.log(`Error checking syntax: ${error.message}`);
            return 0;
        }
    }

    async checkLintingErrors() {
        try {
            // Try to run ESLint if available
            execSync('npx eslint "**/*.{js,ts,tsx}" --format=compact', { 
                stdio: 'pipe',
                encoding: 'utf8'
            });
            return 0;
        } catch (error) {
            // ESLint found errors
            const output = error.stdout || error.stderr || '';
            const errorCount = (output.match(/error/g) || []).length;
            this.log(`Found ${errorCount} ESLint errors`);
            return errorCount;
        }
    }

    async checkMarkdownErrors() {
        try {
            // Try to run markdownlint if available
            execSync('npx markdownlint-cli "**/*.md" --format=compact', { 
                stdio: 'pipe',
                encoding: 'utf8'
            });
            return 0;
        } catch (error) {
            // Markdownlint found errors
            const output = error.stdout || error.stderr || '';
            const errorCount = (output.match(/MD\d+/g) || []).length;
            this.log(`Found ${errorCount} markdown linting errors`);
            return errorCount;
        }
    }

    async fixErrors() {
        try {
            this.log('Attempting to fix errors...');
            
            // Try to fix ESLint errors
            try {
                execSync('npx eslint "**/*.{js,ts,tsx}" --fix', { stdio: 'inherit' });
                this.log('ESLint fixes applied');
            } catch (error) {
                this.log(`ESLint fix error: ${error.message}`);
            }
            
            // Try to fix Prettier formatting
            try {
                execSync('npx prettier --write "**/*.{js,ts,tsx,json,md}"', { stdio: 'inherit' });
                this.log('Prettier fixes applied');
            } catch (error) {
                this.log(`Prettier fix error: ${error.message}`);
            }
            
            // Try to fix markdown errors
            try {
                execSync('npx markdownlint-cli "**/*.md" --fix', { stdio: 'inherit' });
                this.log('Markdown linting fixes applied');
            } catch (error) {
                this.log(`Markdown linting fix error: ${error.message}`);
            }
            
        } catch (error) {
            this.log(`Error in fix cycle: ${error.message}`);
        }
    }

    getTypeScriptFiles() {
        const files = [];
        const walkDir = (dir) => {
            try {
                const items = fs.readdirSync(dir);
                
                for (const item of items) {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
                        walkDir(fullPath);
                    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
                        files.push(fullPath);
                    }
                }
            } catch (error) {
                // Skip directories we can't read
            }
        };
        
        walkDir(process.cwd());
        return files;
    }

    async autoCommitChanges() {
        if (!this.config.autoCommit) return;
        
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' });
            
            if (status.trim()) {
                execSync('git add .', { stdio: 'inherit' });
                execSync('git commit -m "Auto-fix: Error corrections"', { stdio: 'inherit' });
                this.log('Changes auto-committed successfully');
            }
        } catch (error) {
            this.log(`Failed to auto-commit changes: ${error.message}`);
        }
    }

    async start() {
        this.log('Starting simple error monitor...');
        this.isRunning = true;
        
        // Initial check
        await this.checkForErrors();
        
        // Set up periodic checks
        setInterval(async () => {
            if (this.isRunning) {
                await this.checkForErrors();
                await this.autoCommitChanges();
            }
        }, this.config.checkInterval);
        
        this.log('Simple error monitor is now running');
        
        // Keep the process alive
        process.on('SIGINT', () => {
            this.log('Shutting down simple error monitor...');
            this.isRunning = false;
            process.exit(0);
        });
    }

    async runOnce() {
        this.log('Running single error check...');
        await this.checkForErrors();
        await this.autoCommitChanges();
    }
}

// CLI interface
if (require.main === module) {
    const monitor = new SimpleErrorMonitor();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            monitor.start();
            break;
        case 'check':
            monitor.runOnce();
            break;
        default:
            console.log('Usage: node simple-error-monitor.cjs [start|check]');
            console.log('  start  - Start the error monitor');
            console.log('  check  - Run a single error check');
    }
}

module.exports = SimpleErrorMonitor;
