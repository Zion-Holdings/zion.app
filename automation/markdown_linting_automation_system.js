#!/usr/bin/env node
/**
 * Markdown Linting Automation System
 * Continuously monitors and fixes markdown linting errors across the project
 */

import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
            console.error('Failed to write to log file: ', error.message);
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
            if (error.status === 1) { // This is expected when there are linting errors
                try {
                    const result = execSync('npx markdownlint-cli "**/*.md" --json', { 
                        encoding: 'utf8',
                        cwd: process.cwd(),
                        stdio: ['pipe', 'pipe', 'pipe']
                    });
                    
                    const errors = JSON.parse(result);
                    this.status.currentErrors = errors;
                    
                    this.log('info', `Found ${errors.length} markdown files with errors`);
                    return errors;
                } catch (parseError) {
                    this.log('error', `Failed to parse markdownlint output: ${parseError.message}`);
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
            this.log('info', 'Fixing markdown linting errors...');
            
            execSync('npx markdownlint-cli "**/*.md" --fix', { 
                stdio: 'inherit',
                cwd: process.cwd()
            });
            
            this.status.lastFixTime = new Date().toISOString();
            this.status.totalFilesFixed++;
            this.saveStatus();
            
            this.log('info', 'Markdown errors fixed successfully');
        } catch (error) {
            this.log('error', `Failed to fix markdown errors: ${error.message}`);
        }
    }

    async startWatching() {
        if (this.status.isRunning) {
            this.log('warn', 'Markdown linting automation is already running');
            return;
        }

        this.status.isRunning = true;
        this.saveStatus();
        
        this.log('info', 'Starting markdown linting automation...');
        
        // Initial check and fix
        await this.checkMarkdownErrors();
        await this.fixMarkdownErrors();
        
        // Set up file watcher
        const watcher = chokidar.watch(this.config.watchPatterns, {
            ignored: this.config.ignorePatterns,
            persistent: true
        });
        
        watcher.on('change', async (filePath) => {
            this.log('info', `Markdown file changed: ${filePath}`);
            await this.checkMarkdownErrors();
            await this.fixMarkdownErrors();
        });
        
        watcher.on('add', async (filePath) => {
            this.log('info', `New markdown file added: ${filePath}`);
            await this.checkMarkdownErrors();
            await this.fixMarkdownErrors();
        });
        
        // Set up periodic checks
        setInterval(async () => {
            await this.checkMarkdownErrors();
            if (this.status.currentErrors.length > 0) {
                await this.fixMarkdownErrors();
            }
        }, this.config.fixInterval);
        
        this.log('info', 'Markdown linting automation started successfully');
    }

    stop() {
        this.status.isRunning = false;
        this.saveStatus();
        this.log('info', 'Markdown linting automation stopped');
    }

    getStatus() {
        return this.status;
    }
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

const system = new MarkdownLintingAutomationSystem();

if (command === 'start') {
    system.startWatching();
} else if (command === 'check') {
    system.checkMarkdownErrors();
} else if (command === 'fix') {
    system.fixMarkdownErrors();
} else if (command === 'status') {
    console.log(JSON.stringify(system.getStatus(), null, 2));
} else {
    console.log('Usage: node markdown_linting_automation_system.js [start|check|fix|status]');
    process.exit(1);
}
