#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxMonitor {
    constructor() {
        this.logDir = path.join(__dirname, '../logs');
        this.reportsDir = path.join(__dirname, '../reports');
        this.monitorDir = path.join(__dirname);
        this.pidFile = path.join(this.monitorDir, 'syntax-monitor.pid');
        this.statusFile = path.join(this.monitorDir, 'monitor-status.json');
        this.dashboardFile = path.join(this.monitorDir, 'dashboard.json');
        
        this.ensureDirectories();
        this.writePid();
    }

    ensureDirectories() {
        [this.logDir, this.reportsDir, this.monitorDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    writePid() {
        fs.writeFileSync(this.pidFile, process.pid.toString());
    }

    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}] ${message}`;
        console.log(logMessage);
        
        const logFile = path.join(this.logDir, `syntax-monitor-${new Date().toISOString().split('T')[0]}.log`);
        fs.appendFileSync(logFile, logMessage + '\n');
    }

    updateStatus(status, details = {}) {
        const statusData = {
            lastUpdate: new Date().toISOString(),
            status: status,
            pid: process.pid,
            details: details
        };
        fs.writeFileSync(this.statusFile, JSON.stringify(statusData, null, 2));
    }

    getSystemStatus() {
        const status = {
            timestamp: new Date().toISOString(),
            components: {}
        };

        // Check detector status
        const detectorStatusFile = path.join(__dirname, '../status.json');
        if (fs.existsSync(detectorStatusFile)) {
            try {
                status.components.detector = JSON.parse(fs.readFileSync(detectorStatusFile, 'utf8'));
            } catch (error) {
                status.components.detector = { status: 'ERROR', error: error.message };
            }
        } else {
            status.components.detector = { status: 'NOT_RUNNING' };
        }

        // Check fixer status
        const fixerStatusFile = path.join(__dirname, '../fixer-status.json');
        if (fs.existsSync(fixerStatusFile)) {
            try {
                status.components.fixer = JSON.parse(fs.readFileSync(fixerStatusFile, 'utf8'));
            } catch (error) {
                status.components.fixer = { status: 'ERROR', error: error.message };
            }
        } else {
            status.components.fixer = { status: 'NOT_RUNNING' };
        }

        // Check orchestrator status
        const orchestratorStatusFile = path.join(__dirname, '../orchestrator-status.json');
        if (fs.existsSync(orchestratorStatusFile)) {
            try {
                status.components.orchestrator = JSON.parse(fs.readFileSync(orchestratorStatusFile, 'utf8'));
            } catch (error) {
                status.components.orchestrator = { status: 'ERROR', error: error.message };
            }
        } else {
            status.components.orchestrator = { status: 'NOT_RUNNING' };
        }

        // Get latest reports
        status.reports = this.getLatestReports();
        
        // Get error statistics
        status.statistics = this.getErrorStatistics();

        return status;
    }

    getLatestReports() {
        const reports = [];
        
        try {
            const reportFiles = fs.readdirSync(this.reportsDir)
                .filter(file => file.startsWith('syntax-report-'))
                .sort()
                .reverse()
                .slice(0, 10); // Get last 10 reports

            for (const file of reportFiles) {
                try {
                    const reportPath = path.join(this.reportsDir, file);
                    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
                    reports.push({
                        file: file,
                        timestamp: report.timestamp,
                        totalErrors: report.totalErrors,
                        filesWithErrors: report.filesWithErrors
                    });
                } catch (error) {
                    this.log(`Error reading report ${file}: ${error.message}`, 'ERROR');
                }
            }
        } catch (error) {
            this.log(`Error reading reports directory: ${error.message}`, 'ERROR');
        }

        return reports;
    }

    getErrorStatistics() {
        const stats = {
            totalErrors: 0,
            totalFiles: 0,
            errorTrend: [],
            byFileType: {},
            bySeverity: {}
        };

        try {
            const reportFiles = fs.readdirSync(this.reportsDir)
                .filter(file => file.startsWith('syntax-report-'))
                .sort()
                .reverse()
                .slice(0, 30); // Last 30 reports

            for (const file of reportFiles) {
                try {
                    const reportPath = path.join(this.reportsDir, file);
                    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
                    
                    stats.totalErrors += report.totalErrors;
                    stats.totalFiles += report.filesWithErrors;
                    
                    stats.errorTrend.push({
                        date: report.timestamp.split('T')[0],
                        errors: report.totalErrors,
                        files: report.filesWithErrors
                    });

                    // Aggregate by file type
                    if (report.summary && report.summary.byFileType) {
                        Object.entries(report.summary.byFileType).forEach(([type, count]) => {
                            stats.byFileType[type] = (stats.byFileType[type] || 0) + count;
                        });
                    }

                    // Aggregate by severity
                    if (report.summary && report.summary.bySeverity) {
                        Object.entries(report.summary.bySeverity).forEach(([severity, count]) => {
                            stats.bySeverity[severity] = (stats.bySeverity[severity] || 0) + count;
                        });
                    }
                } catch (error) {
                    this.log(`Error processing report ${file}: ${error.message}`, 'ERROR');
                }
            }
        } catch (error) {
            this.log(`Error calculating statistics: ${error.message}`, 'ERROR');
        }

        return stats;
    }

    updateDashboard() {
        try {
            const status = this.getSystemStatus();
            fs.writeFileSync(this.dashboardFile, JSON.stringify(status, null, 2));
            this.log('Dashboard updated successfully');
        } catch (error) {
            this.log(`Error updating dashboard: ${error.message}`, 'ERROR');
        }
    }

    async startMonitoring() {
        this.log('Starting syntax monitoring...');
        this.updateStatus('MONITORING');

        while (true) {
            try {
                this.updateDashboard();
                this.updateStatus('MONITORING', { lastUpdate: new Date().toISOString() });
                
                // Wait 30 seconds before next update
                await new Promise(resolve => setTimeout(resolve, 30000));
            } catch (error) {
                this.log(`Error in monitoring loop: ${error.message}`, 'ERROR');
                this.updateStatus('ERROR', { error: error.message });
                
                // Wait 60 seconds before retrying
                await new Promise(resolve => setTimeout(resolve, 60000));
            }
        }
    }

    async runHealthCheck() {
        this.log('Running syntax system health check...');
        
        const status = this.getSystemStatus();
        const healthReport = {
            timestamp: new Date().toISOString(),
            overallHealth: 'HEALTHY',
            issues: [],
            recommendations: []
        };

        // Check detector health
        if (status.components.detector.status === 'ERROR') {
            healthReport.overallHealth = 'DEGRADED';
            healthReport.issues.push('Syntax detector has errors');
            healthReport.recommendations.push('Restart syntax detector');
        }

        // Check fixer health
        if (status.components.fixer.status === 'ERROR') {
            healthReport.overallHealth = 'DEGRADED';
            healthReport.issues.push('Syntax fixer has errors');
            healthReport.recommendations.push('Restart syntax fixer');
        }

        // Check orchestrator health
        if (status.components.orchestrator.status === 'ERROR') {
            healthReport.overallHealth = 'DEGRADED';
            healthReport.issues.push('Syntax orchestrator has errors');
            healthReport.recommendations.push('Restart syntax orchestrator');
        }

        // Check for recent errors
        if (status.statistics.totalErrors > 0) {
            healthReport.issues.push(`Found ${status.statistics.totalErrors} syntax errors`);
            healthReport.recommendations.push('Run syntax fixing cycle');
        }

        // Check if components are not running
        const notRunning = Object.entries(status.components)
            .filter(([name, comp]) => comp.status === 'NOT_RUNNING')
            .map(([name]) => name);

        if (notRunning.length > 0) {
            healthReport.overallHealth = 'DEGRADED';
            healthReport.issues.push(`Components not running: ${notRunning.join(', ')}`);
            healthReport.recommendations.push('Start syntax automation system');
        }

        const healthReportPath = path.join(this.monitorDir, 'health-report.json');
        fs.writeFileSync(healthReportPath, JSON.stringify(healthReport, null, 2));
        
        this.log(`Health check completed: ${healthReport.overallHealth}`);
        return healthReport;
    }

    cleanup() {
        try {
            if (fs.existsSync(this.pidFile)) {
                fs.unlinkSync(this.pidFile);
            }
        } catch (error) {
            this.log(`Error during cleanup: ${error.message}`, 'ERROR');
        }
    }
}

process.on('SIGINT', () => {
    const monitor = new SyntaxMonitor();
    monitor.log('Received SIGINT, cleaning up...');
    monitor.cleanup();
    process.exit(0);
});

process.on('SIGTERM', () => {
    const monitor = new SyntaxMonitor();
    monitor.log('Received SIGTERM, cleaning up...');
    monitor.cleanup();
    process.exit(0);
});

module.exports = SyntaxMonitor;

if (require.main === module) {
    const monitor = new SyntaxMonitor();
    
    const args = process.argv.slice(2);
    const command = args[0] || 'monitor';
    
    switch (command) {
        case 'monitor':
            monitor.startMonitoring()
                .catch(error => {
                    monitor.log(`Monitoring failed: ${error.message}`, 'ERROR');
                    monitor.cleanup();
                    process.exit(1);
                });
            break;
        case 'health':
            monitor.runHealthCheck()
                .then(() => {
                    monitor.log('Health check completed');
                    monitor.cleanup();
                })
                .catch(error => {
                    monitor.log(`Health check failed: ${error.message}`, 'ERROR');
                    monitor.cleanup();
                    process.exit(1);
                });
            break;
        case 'status':
            const status = monitor.getSystemStatus();
            console.log(JSON.stringify(status, null, 2));
            break;
        default:
            console.log('Usage: node syntax-monitor.js [monitor|health|status]');
            break;
    }
}
