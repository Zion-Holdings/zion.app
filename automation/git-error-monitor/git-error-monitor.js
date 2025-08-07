#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitErrorMonitor {
    constructor() {
        this.logDir = path.join(__dirname, 'logs');
        this.reportsDir = path.join(__dirname, 'reports');
        this.pidFile = path.join(__dirname, 'git-error-monitor.pid');
        this.statusFile = path.join(__dirname, 'status.json');
        
        this.ensureDirectories();
        this.startTime = new Date();
        this.errorCount = 0;
        this.fixCount = 0;
        this.lastCheck = null;
    }

    ensureDirectories() {
        [this.logDir, this.reportsDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}] ${message}`;
        console.log(logMessage);
        
        const logFile = path.join(this.logDir, `git-error-monitor-${new Date().toISOString().split('T')[0]}.log`);
        fs.appendFileSync(logFile, logMessage + '\n');
    }

    saveStatus() {
        const status = {
            running: true,
            startTime: this.startTime.toISOString(),
            lastCheck: this.lastCheck?.toISOString(),
            errorCount: this.errorCount,
            fixCount: this.fixCount,
            uptime: Date.now() - this.startTime.getTime()
        };
        fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
    }

    async checkGitStatus() {
        try {
            const result = execSync('git status --porcelain', { encoding: 'utf8' });
            return result.trim();
        } catch (error) {
            this.log(`Git status check failed: ${error.message}`, 'ERROR');
            return null;
        }
    }

    async checkGitProcesses() {
        try {
            const result = execSync('ps aux | grep git', { encoding: 'utf8' });
            return result.split('\n').filter(line => line.includes('git') && !line.includes('grep'));
        } catch (error) {
            this.log(`Git processes check failed: ${error.message}`, 'ERROR');
            return [];
        }
    }

    async checkGitLocks() {
        const gitDir = path.join(process.cwd(), '.git');
        const lockFiles = [
            'index.lock',
            'HEAD.lock',
            'refs/heads/main.lock',
            'refs/remotes/origin/main.lock'
        ];

        const locks = [];
        for (const lockFile of lockFiles) {
            const lockPath = path.join(gitDir, lockFile);
            if (fs.existsSync(lockPath)) {
                const stats = fs.statSync(lockPath);
                const age = Date.now() - stats.mtime.getTime();
                locks.push({
                    file: lockFile,
                    age: age,
                    path: lockPath
                });
            }
        }
        return locks;
    }

    async checkGitConfig() {
        try {
            const result = execSync('git config --list', { encoding: 'utf8' });
            return result;
        } catch (error) {
            this.log(`Git config check failed: ${error.message}`, 'ERROR');
            return null;
        }
    }

    async checkGitRemotes() {
        try {
            const result = execSync('git remote -v', { encoding: 'utf8' });
            return result;
        } catch (error) {
            this.log(`Git remotes check failed: ${error.message}`, 'ERROR');
            return null;
        }
    }

    async fixGitLocks(locks) {
        for (const lock of locks) {
            if (lock.age > 300000) { // 5 minutes
                try {
                    fs.unlinkSync(lock.path);
                    this.log(`Removed stale lock file: ${lock.file}`, 'FIX');
                    this.fixCount++;
                } catch (error) {
                    this.log(`Failed to remove lock file ${lock.file}: ${error.message}`, 'ERROR');
                }
            }
        }
    }

    async fixGitProcesses(processes) {
        for (const process of processes) {
            const parts = process.trim().split(/\s+/);
            if (parts.length > 1) {
                const pid = parts[1];
                try {
                    execSync(`kill -9 ${pid}`);
                    this.log(`Killed stuck git process: ${pid}`, 'FIX');
                    this.fixCount++;
                } catch (error) {
                    this.log(`Failed to kill git process ${pid}: ${error.message}`, 'ERROR');
                }
            }
        }
    }

    async fixGitStatus() {
        try {
            execSync('git reset --hard HEAD', { stdio: 'pipe' });
            this.log('Reset git working directory', 'FIX');
            this.fixCount++;
        } catch (error) {
            this.log(`Failed to reset git status: ${error.message}`, 'ERROR');
        }
    }

    async fixGitConfig() {
        try {
            execSync('git config --global user.name "Git Error Monitor"', { stdio: 'pipe' });
            execSync('git config --global user.email "monitor@git-error.local"', { stdio: 'pipe' });
            this.log('Fixed git config', 'FIX');
            this.fixCount++;
        } catch (error) {
            this.log(`Failed to fix git config: ${error.message}`, 'ERROR');
        }
    }

    async generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            uptime: Date.now() - this.startTime.getTime(),
            errorCount: this.errorCount,
            fixCount: this.fixCount,
            lastCheck: this.lastCheck?.toISOString(),
            status: 'running'
        };

        const reportFile = path.join(this.reportsDir, `git-error-report-${new Date().toISOString().split('T')[0]}.json`);
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        return report;
    }

    async runCheck() {
        this.lastCheck = new Date();
        this.log('Starting git error check...');

        const gitStatus = await this.checkGitStatus();
        if (gitStatus === null) {
            this.errorCount++;
        }

        const gitProcesses = await this.checkGitProcesses();
        if (gitProcesses.length > 0) {
            this.log(`Found ${gitProcesses.length} git processes`, 'WARN');
            await this.fixGitProcesses(gitProcesses);
        }

        const gitLocks = await this.checkGitLocks();
        if (gitLocks.length > 0) {
            this.log(`Found ${gitLocks.length} git lock files`, 'WARN');
            await this.fixGitLocks(gitLocks);
        }

        const gitConfig = await this.checkGitConfig();
        if (gitConfig === null) {
            this.errorCount++;
            await this.fixGitConfig();
        }

        const gitRemotes = await this.checkGitRemotes();
        if (gitRemotes === null) {
            this.errorCount++;
        }

        await this.generateReport();
        this.saveStatus();

        this.log(`Check completed. Errors: ${this.errorCount}, Fixes: ${this.fixCount}`);
    }

    async start() {
        this.log('Git Error Monitor starting...');
        
        fs.writeFileSync(this.pidFile, process.pid.toString());
        
        await this.runCheck();
        
        setInterval(async () => {
            await this.runCheck();
        }, 60000); // Check every minute

        this.log('Git Error Monitor started successfully');
    }

    stop() {
        this.log('Git Error Monitor stopping...');
        if (fs.existsSync(this.pidFile)) {
            fs.unlinkSync(this.pidFile);
        }
        process.exit(0);
    }
}

process.on('SIGINT', () => {
    const monitor = new GitErrorMonitor();
    monitor.stop();
});

process.on('SIGTERM', () => {
    const monitor = new GitErrorMonitor();
    monitor.stop();
});

if (require.main === module) {
    const monitor = new GitErrorMonitor();
    monitor.start();
}

module.exports = GitErrorMonitor;