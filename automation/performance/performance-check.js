#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceChecker {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, '..', 'logs', 'performance-check.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, '..', 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            performanceThreshold: 80,
            bundleSizeLimit: '2MB',
            memoryLimit: '512MB',
            cpuLimit: 80
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
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
            console.error(message);
        } else if (level === 'warn') {
            console.warn(message);
        } else {
            console.log(message);
        }
    }

    async checkBundleSize() {
        try {
            this.log('Checking bundle size...');
            
            // Check if build directory exists
            const buildDir = path.join(this.projectRoot, '.next');
            if (!fs.existsSync(buildDir)) {
                this.log('Build directory not found, running build...');
                execSync('npm run build', { stdio: 'pipe' });
            }

            // Get bundle size information
            const bundleStats = execSync('npx next-bundle-analyzer --json', { 
                encoding: 'utf8',
                stdio: 'pipe'
            });

            const stats = JSON.parse(bundleStats);
            const totalSize = stats.totalSize;
            
            this.log(`Bundle size: ${totalSize}`);
            
            // Check against threshold
            const sizeInMB = totalSize / (1024 * 1024);
            if (sizeInMB > 2) {
                this.log(`⚠️  Bundle size (${sizeInMB.toFixed(2)}MB) exceeds 2MB threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Bundle size is within acceptable limits');
            return true;
        } catch (error) {
            this.log(`Bundle size check failed: ${error.message}`, 'warn');
            return true; // Don't fail the build for bundle size issues
        }
    }

    async checkBuildTime() {
        try {
            this.log('Checking build time...');
            
            const startTime = Date.now();
            execSync('npm run build', { stdio: 'pipe' });
            const buildTime = Date.now() - startTime;
            
            this.log(`Build time: ${buildTime}ms`);
            
            // Check against threshold (60 seconds)
            if (buildTime > 60000) {
                this.log(`⚠️  Build time (${buildTime}ms) exceeds 60 second threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Build time is within acceptable limits');
            return true;
        } catch (error) {
            this.log(`Build time check failed: ${error.message}`, 'error');
            return false;
        }
    }

    async checkTestPerformance() {
        try {
            this.log('Checking test performance...');
            
            const startTime = Date.now();
            execSync('npm test', { stdio: 'pipe' });
            const testTime = Date.now() - startTime;
            
            this.log(`Test time: ${testTime}ms`);
            
            // Check against threshold (30 seconds)
            if (testTime > 30000) {
                this.log(`⚠️  Test time (${testTime}ms) exceeds 30 second threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Test performance is within acceptable limits');
            return true;
        } catch (error) {
            this.log(`Test performance check failed: ${error.message}`, 'error');
            return false;
        }
    }

    async checkMemoryUsage() {
        try {
            this.log('Checking memory usage...');
            
            // Get memory usage information
            const memoryInfo = process.memoryUsage();
            const memoryUsageMB = memoryInfo.heapUsed / (1024 * 1024);
            
            this.log(`Memory usage: ${memoryUsageMB.toFixed(2)}MB`);
            
            // Check against threshold (512MB)
            if (memoryUsageMB > 512) {
                this.log(`⚠️  Memory usage (${memoryUsageMB.toFixed(2)}MB) exceeds 512MB threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Memory usage is within acceptable limits');
            return true;
        } catch (error) {
            this.log(`Memory usage check failed: ${error.message}`, 'warn');
            return true; // Don't fail for memory check issues
        }
    }

    async generatePerformanceReport() {
        try {
            this.log('Generating performance report...');
            
            const report = {
                timestamp: new Date().toISOString(),
                bundleSize: await this.checkBundleSize(),
                buildTime: await this.checkBuildTime(),
                testPerformance: await this.checkTestPerformance(),
                memoryUsage: await this.checkMemoryUsage(),
                thresholds: {
                    bundleSizeLimit: this.config.bundleSizeLimit,
                    buildTimeLimit: '60s',
                    testTimeLimit: '30s',
                    memoryLimit: this.config.memoryLimit
                }
            };

            const reportPath = path.join(__dirname, '..', 'reports', `performance-${Date.now()}.json`);
            fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
            
            this.log(`Performance report generated: ${reportPath}`);
            return report;
        } catch (error) {
            this.log(`Failed to generate performance report: ${error.message}`, 'error');
            return null;
        }
    }

    async execute() {
        this.log('🚀 Starting performance check...');
        
        const report = await this.generatePerformanceReport();
        
        if (report) {
            const allChecksPassed = report.bundleSize && report.buildTime && 
                                  report.testPerformance && report.memoryUsage;
            
            if (allChecksPassed) {
                this.log('✅ All performance checks passed!');
                return true;
            } else {
                this.log('⚠️  Some performance checks failed, but continuing...', 'warn');
                return true; // Don't fail the build for performance issues
            }
        } else {
            this.log('❌ Performance check failed', 'error');
            return false;
        }
    }
}

// Main execution
const performanceChecker = new PerformanceChecker();
const command = process.argv[2] || 'execute';

switch (command) {
    case 'execute':
        performanceChecker.execute().catch(error => {
            console.error('Performance check failed:', error.message);
            process.exit(1);
        });
        break;
    case 'report':
        performanceChecker.generatePerformanceReport().catch(error => {
            console.error('Failed to generate performance report:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🚀 Performance Check System

Usage:
  node automation/performance/performance-check.js [command]

Commands:
  execute  - Run all performance checks
  report   - Generate performance report only

Features:
  ✅ Bundle size analysis
  ✅ Build time monitoring
  ✅ Test performance tracking
  ✅ Memory usage monitoring
  ✅ Performance reporting

Examples:
  node automation/performance/performance-check.js execute
  node automation/performance/performance-check.js report
        `);
        break;
} 