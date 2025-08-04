#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors system performance and reports issues
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class PerformanceMonitor {
    constructor() {
        this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
        this.ensureLogDirectory();
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        console.log(logMessage);
        fs.appendFileSync(this.logFile, logMessage + '\n');
    }

    async getSystemMetrics() {
        try {
            // Get CPU usage
            const { stdout: cpuOutput } = await execAsync('top -l 1 | grep "CPU usage"');
            const cpuMatch = cpuOutput.match(/(\d+\.\d+)%/);
            const cpuUsage = cpuMatch ? parseFloat(cpuMatch[1]) : 0;

            // Get memory usage
            const { stdout: memOutput } = await execAsync('vm_stat');
            const memLines = memOutput.split('\n');
            let totalMem = 0;
            let usedMem = 0;
            
            memLines.forEach(line => {
                if (line.includes('Pages free:')) {
                    const match = line.match(/(\d+)/);
                    if (match) usedMem += parseInt(match[1]);
                }
                if (line.includes('Pages wired down:')) {
                    const match = line.match(/(\d+)/);
                    if (match) usedMem += parseInt(match[1]);
                }
            });

            // Get disk usage
            const { stdout: diskOutput } = await execAsync('df . | tail -1');
            const diskMatch = diskOutput.match(/(\d+)%/);
            const diskUsage = diskMatch ? parseInt(diskMatch[1]) : 0;

            return {
                cpu: cpuUsage,
                memory: usedMem,
                disk: diskUsage,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            this.log(`Error getting system metrics: ${error.message}`);
            return null;
        }
    }

    async checkProcessHealth() {
        try {
            const processes = [
                'node',
                'npm',
                'git'
            ];

            const results = {};
            for (const process of processes) {
                try {
                    const { stdout } = await execAsync(`pgrep -c ${process}`);
                    results[process] = parseInt(stdout.trim());
                } catch (error) {
                    results[process] = 0;
                }
            }

            return results;
        } catch (error) {
            this.log(`Error checking process health: ${error.message}`);
            return {};
        }
    }

    async checkAutomationLogs() {
        try {
            const logDir = path.join(__dirname, 'logs');
            if (!fs.existsSync(logDir)) {
                return { errorCount: 0, recentErrors: [] };
            }

            const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
            let errorCount = 0;
            const recentErrors = [];

            for (const logFile of logFiles) {
                const logPath = path.join(logDir, logFile);
                const stats = fs.statSync(logPath);
                
                // Check logs from last hour
                if (Date.now() - stats.mtime.getTime() < 3600000) {
                    const content = fs.readFileSync(logPath, 'utf8');
                    const errors = content.match(/ERROR|error/g);
                    if (errors) {
                        errorCount += errors.length;
                        recentErrors.push({
                            file: logFile,
                            errorCount: errors.length
                        });
                    }
                }
            }

            return { errorCount, recentErrors };
        } catch (error) {
            this.log(`Error checking automation logs: ${error.message}`);
            return { errorCount: 0, recentErrors: [] };
        }
    }

    async generateReport() {
        this.log('🔍 Starting performance monitoring...');

        const metrics = await this.getSystemMetrics();
        const processHealth = await this.checkProcessHealth();
        const logHealth = await this.checkAutomationLogs();

        const report = {
            timestamp: new Date().toISOString(),
            metrics,
            processHealth,
            logHealth,
            status: 'healthy'
        };

        // Determine overall status
        if (metrics) {
            if (metrics.cpu > 80 || metrics.disk > 90) {
                report.status = 'warning';
            }
            if (metrics.cpu > 95 || metrics.disk > 95) {
                report.status = 'critical';
            }
        }

        if (logHealth.errorCount > 10) {
            report.status = 'warning';
        }

        this.log(`📊 Performance Report: ${report.status.toUpperCase()}`);
        this.log(`CPU: ${metrics?.cpu || 'N/A'}%, Disk: ${metrics?.disk || 'N/A'}%`);
        this.log(`Processes: ${JSON.stringify(processHealth)}`);
        this.log(`Recent Errors: ${logHealth.errorCount}`);

        // Save report
        const reportFile = path.join(__dirname, 'logs', 'performance-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

        this.log('✅ Performance monitoring completed');
        return report;
    }

    async run() {
        try {
            await this.generateReport();
        } catch (error) {
            this.log(`❌ Performance monitoring failed: ${error.message}`);
            process.exit(1);
        }
    }
}

// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor();
    monitor.run();
}

module.exports = PerformanceMonitor; 