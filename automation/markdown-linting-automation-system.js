#!/usr/bin/env node

/**
 * Markdown Linting Automation System
 * Continuously monitors and fixes markdown linting errors across the project
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class MarkdownLintingAutomationSystem {
    constructor() {
        this.config = {
            watchPatterns: ['**/*.md'],
            ignorePatterns: ['**/node_modules/**', '**/.git/**'],
            fixInterval: 30000, // 30 seconds
            maxLineLength: 80,
            autoCommit: true,
            logLevel: 'info'
        };
        
        this.status = {
            isRunning: false,
            lastFixTime: null,
            totalFilesFixed: 0,
            totalErrorsFixed: 0,
            currentErrors: []
        };
        
        this.logFile = path.join(__dirname, 'logs', 'markdown-linting-automation.log');
        this.statusFile = path.join(__dirname, 'status', 'markdown-linting-status.json');
        
        this.ensureDirectories();
        this.loadStatus();
    }

    ensureDirectories() {
        const dirs = [
            path.dirname(this.logFile),
            path.dirname(this.statusFile)
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    loadStatus() {
        try {
            if (fs.existsSync(this.statusFile)) {
                this.status = { ...this.status, ...JSON.parse(fs.readFileSync(this.statusFile, 'utf8')) };
            }
        } catch (error) {
            this.log('error', `Failed to load status: ${error.message}`);
        }
    }

    saveStatus() {
        try {
            fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
        } catch (error) {
            this.log('error', `Failed to save status: ${error.message}`);
        }
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
        
        console.log(logMessage);
        
        try {
            fs.appendFileSync(this.logFile, logMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }

    async installDependencies() {
        try {
            this.log('info', 'Installing markdownlint-cli...');
            execSync('npm install --save-dev markdownlint-cli', { stdio: 'inherit' });
            this.log('info', 'Markdownlint-cli installed successfully');
        } catch (error) {
            this.log('error', `Failed to install markdownlint-cli: ${error.message}`);
        }
    }

    async checkMarkdownErrors() {
        try {
            this.log('info', 'Checking for markdown linting errors...');
            
            const result = execSync('npx markdownlint-cli "**/*.md" --json', { 
                encoding: 'utf8',
                cwd: process.cwd()
            });
            
            const errors = JSON.parse(result);
            this.status.currentErrors = errors;
            
            this.log('info', `Found ${errors.length} markdown files with errors`);
            
            return errors;
        } catch (error) {
            if (error.status === 1) {
                // This is expected when there are linting errors
                try {
                    const result = execSync('npx markdownlint-cli "**/*.md" --json 2>/dev/null', { 
                        encoding: 'utf8',
                        cwd: process.cwd()
                    });
                    
                    const errors = JSON.parse(result);
                    this.status.currentErrors = errors;
                    
                    this.log('info', `Found ${errors.length} markdown files with errors`);
                    return errors;
                } catch (parseError) {
                    this.log('error', `Failed to parse markdown errors: ${parseError.message}`);
                    return [];
                }
            } else {
                this.log('error', `Failed to check markdown errors: ${error.message}`);
                return [];
            }
        }
    }

    async fixMarkdownErrors() {
        try {
            this.log('info', 'Applying automatic fixes to markdown files...');
            
            execSync('npx markdownlint-cli "**/*.md" --fix', { 
                stdio: 'inherit',
                cwd: process.cwd()
            });
            
            this.log('info', 'Automatic fixes applied successfully');
            
            // Count fixed files
            const fixedFiles = await this.countFixedFiles();
            this.status.totalFilesFixed += fixedFiles;
            this.status.lastFixTime = new Date().toISOString();
            
            this.saveStatus();
            
            return fixedFiles;
        } catch (error) {
            this.log('error', `Failed to apply automatic fixes: ${error.message}`);
            return 0;
        }
    }

    async countFixedFiles() {
        try {
            const result = execSync('npx markdownlint-cli "**/*.md" --json', { 
                encoding: 'utf8',
                cwd: process.cwd()
            });
            
            const remainingErrors = JSON.parse(result);
            const fixedCount = this.status.currentErrors.length - remainingErrors.length;
            
            return Math.max(0, fixedCount);
        } catch (error) {
            return 0;
        }
    }

    async fixSpecificErrors() {
        const specificFixes = [
            this.fixMD022Errors,
            this.fixMD013Errors,
            this.fixMD040Errors,
            this.fixMD024Errors,
            this.fixMD029Errors
        ];

        let totalFixed = 0;

        for (const fixFunction of specificFixes) {
            try {
                const fixed = await fixFunction.call(this);
                totalFixed += fixed;
            } catch (error) {
                this.log('error', `Failed to apply specific fix: ${error.message}`);
            }
        }

        return totalFixed;
    }

    async fixMD022Errors() {
        // Fix blanks-around-headings errors
        let fixed = 0;
        
        try {
            const files = this.getMarkdownFiles();
            
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split('\n');
                let modified = false;
                
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    
                    // Check if this is a heading
                    if (line.match(/^#{1,6}\s/)) {
                        // Check if there's no blank line before the heading (unless it's the first line)
                        if (i > 0 && lines[i - 1].trim() !== '') {
                            lines.splice(i, 0, '');
                            modified = true;
                            i++; // Skip the newly inserted line
                        }
                        
                        // Check if there's no blank line after the heading
                        if (i < lines.length - 1 && lines[i + 1].trim() !== '') {
                            lines.splice(i + 1, 0, '');
                            modified = true;
                            i++; // Skip the newly inserted line
                        }
                    }
                }
                
                if (modified) {
                    fs.writeFileSync(file, lines.join('\n'));
                    fixed++;
                    this.log('info', `Fixed MD022 errors in ${file}`);
                }
            }
        } catch (error) {
            this.log('error', `Failed to fix MD022 errors: ${error.message}`);
        }
        
        return fixed;
    }

    async fixMD013Errors() {
        // Fix line-length errors (simplified approach)
        let fixed = 0;
        
        try {
            const files = this.getMarkdownFiles();
            
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split('\n');
                let modified = false;
                
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    
                    // Only fix lines that are too long and are not code blocks or links
                    if (line.length > this.config.maxLineLength && 
                        !line.startsWith('```') && 
                        !line.startsWith('http') &&
                        !line.includes('![') &&
                        !line.startsWith('|')) {
                        
                        // Simple word wrapping for long lines
                        const words = line.split(' ');
                        if (words.length > 1) {
                            let newLines = [];
                            let currentLine = '';
                            
                            for (const word of words) {
                                if ((currentLine + ' ' + word).length <= this.config.maxLineLength) {
                                    currentLine = currentLine ? currentLine + ' ' + word : word;
                                } else {
                                    if (currentLine) newLines.push(currentLine);
                                    currentLine = word;
                                }
                            }
                            
                            if (currentLine) newLines.push(currentLine);
                            
                            if (newLines.length > 1) {
                                lines.splice(i, 1, ...newLines);
                                modified = true;
                                i += newLines.length - 1;
                            }
                        }
                    }
                }
                
                if (modified) {
                    fs.writeFileSync(file, lines.join('\n'));
                    fixed++;
                    this.log('info', `Fixed MD013 errors in ${file}`);
                }
            }
        } catch (error) {
            this.log('error', `Failed to fix MD013 errors: ${error.message}`);
        }
        
        return fixed;
    }

    async fixMD040Errors() {
        // Fix fenced code blocks without language specification
        let fixed = 0;
        
        try {
            const files = this.getMarkdownFiles();
            
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                let modified = false;
                
                // Replace ``` with ```text for code blocks without language
                const newContent = content.replace(/```\n/g, '```text\n');
                
                if (newContent !== content) {
                    fs.writeFileSync(file, newContent);
                    modified = true;
                    fixed++;
                    this.log('info', `Fixed MD040 errors in ${file}`);
                }
            }
        } catch (error) {
            this.log('error', `Failed to fix MD040 errors: ${error.message}`);
        }
        
        return fixed;
    }

    async fixMD024Errors() {
        // Fix duplicate headings by adding numbers
        let fixed = 0;
        
        try {
            const files = this.getMarkdownFiles();
            
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split('\n');
                let modified = false;
                const headings = new Map();
                
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
                    
                    if (headingMatch) {
                        const level = headingMatch[1];
                        const text = headingMatch[2];
                        
                        if (headings.has(text)) {
                            const count = headings.get(text) + 1;
                            headings.set(text, count);
                            
                            const newHeading = `${level} ${text} ${count}`;
                            lines[i] = newHeading;
                            modified = true;
                        } else {
                            headings.set(text, 1);
                        }
                    }
                }
                
                if (modified) {
                    fs.writeFileSync(file, lines.join('\n'));
                    fixed++;
                    this.log('info', `Fixed MD024 errors in ${file}`);
                }
            }
        } catch (error) {
            this.log('error', `Failed to fix MD024 errors: ${error.message}`);
        }
        
        return fixed;
    }

    async fixMD029Errors() {
        // Fix ordered list item prefix errors
        let fixed = 0;
        
        try {
            const files = this.getMarkdownFiles();
            
            for (const file of files) {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split('\n');
                let modified = false;
                let listCounter = 1;
                let inList = false;
                
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const listMatch = line.match(/^(\d+)\.\s+(.+)$/);
                    
                    if (listMatch) {
                        if (!inList) {
                            inList = true;
                            listCounter = 1;
                        }
                        
                        const newLine = `${listCounter}. ${listMatch[2]}`;
                        if (newLine !== line) {
                            lines[i] = newLine;
                            modified = true;
                        }
                        listCounter++;
                    } else {
                        inList = false;
                    }
                }
                
                if (modified) {
                    fs.writeFileSync(file, lines.join('\n'));
                    fixed++;
                    this.log('info', `Fixed MD029 errors in ${file}`);
                }
            }
        } catch (error) {
            this.log('error', `Failed to fix MD029 errors: ${error.message}`);
        }
        
        return fixed;
    }

    getMarkdownFiles() {
        const files = [];
        const walkDir = (dir) => {
            const items = fs.readdirSync(dir);
            
            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
                    walkDir(fullPath);
                } else if (item.endsWith('.md')) {
                    files.push(fullPath);
                }
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
                execSync('git commit -m "Auto-fix: Markdown linting improvements"', { stdio: 'inherit' });
                this.log('info', 'Changes auto-committed successfully');
            }
        } catch (error) {
            this.log('error', `Failed to auto-commit changes: ${error.message}`);
        }
    }

    async startWatching() {
        this.log('info', 'Starting markdown linting automation system...');
        
        // Install dependencies if needed
        await this.installDependencies();
        
        // Initial fix
        await this.runFixCycle();
        
        // Set up file watching
        const watcher = chokidar.watch(this.config.watchPatterns, {
            ignored: this.config.ignorePatterns,
            persistent: true
        });
        
        watcher.on('change', async (filePath) => {
            this.log('info', `Markdown file changed: ${filePath}`);
            await this.runFixCycle();
        });
        
        // Set up periodic fixes
        setInterval(async () => {
            await this.runFixCycle();
        }, this.config.fixInterval);
        
        this.status.isRunning = true;
        this.saveStatus();
        
        this.log('info', 'Markdown linting automation system is now running');
        
        // Keep the process alive
        process.on('SIGINT', () => {
            this.log('info', 'Shutting down markdown linting automation system...');
            watcher.close();
            this.status.isRunning = false;
            this.saveStatus();
            process.exit(0);
        });
    }

    async runFixCycle() {
        try {
            this.log('info', 'Running markdown fix cycle...');
            
            // Check for errors
            const errors = await this.checkMarkdownErrors();
            
            if (errors.length > 0) {
                // Apply automatic fixes
                const autoFixed = await this.fixMarkdownErrors();
                
                // Apply specific fixes
                const specificFixed = await this.fixSpecificErrors();
                
                // Auto-commit if changes were made
                if (autoFixed > 0 || specificFixed > 0) {
                    await this.autoCommitChanges();
                }
                
                this.status.totalErrorsFixed += autoFixed + specificFixed;
                this.saveStatus();
                
                this.log('info', `Fixed ${autoFixed + specificFixed} errors in this cycle`);
            } else {
                this.log('info', 'No markdown errors found');
            }
        } catch (error) {
            this.log('error', `Error in fix cycle: ${error.message}`);
        }
    }

    getStatus() {
        return {
            ...this.status,
            config: this.config,
            uptime: this.status.isRunning ? Date.now() - (this.status.lastFixTime ? new Date(this.status.lastFixTime).getTime() : Date.now()) : 0
        };
    }
}

// CLI interface
if (require.main === module) {
    const system = new MarkdownLintingAutomationSystem();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'start':
            system.startWatching();
            break;
        case 'fix':
            system.runFixCycle();
            break;
        case 'status':
            console.log(JSON.stringify(system.getStatus(), null, 2));
            break;
        default:
            console.log('Usage: node markdown-linting-automation-system.js [start|fix|status]');
            console.log('  start  - Start the automation system');
            console.log('  fix    - Run a single fix cycle');
            console.log('  status - Show system status');
    }
}

module.exports = MarkdownLintingAutomationSystem;
