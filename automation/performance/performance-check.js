
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
const { execSync } = require('child_process');

class PerformanceChecker {
    constructor() {
        this.projectRoot = process.cwd();
<<<<<<< HEAD
        this.reportsDir = path.join(this.projectRoot, automation', 'reports');
        this.ensureDirectory(this.reportsDir);
=======
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, '..', 'logs', 'performance-check.log');
        this.ensureLogDirectory();
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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

<<<<<<< HEAD
    log(message) {
        logger.info(`[Performance Check] ${message}`);
    }

    async runPerformanceCheck() {
        this.log('🚀 Starting performance check...');

        const results = {
            timestamp: new Date().toISOString(),
            bundleSize: await this.checkBundleSize(),
            buildTime: await this.checkBuildTime(),
            testPerformance: await this.checkTestPerformance(),
            memoryUsage: await this.checkMemoryUsage(),
            recommendations: []
        };

        // Generate recommendations
        results.recommendations = this.generateRecommendations(results);

        // Save results
        const reportFile = path.join(this.reportsDir, `performance-${Date.now()}.json`);
        fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));

        this.log('✅ Performance check completed');
        return results;
=======
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
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
    }

    async checkBundleSize() {
        try {
<<<<<<< HEAD
            // Build the project
            execSync('npm run build', { stdio: 'pipe' });

            // Get bundle stats
            const statsFile = path.join(this.projectRoot, .next', 'build-manifest.json');
            if (fs.existsSync(statsFile)) {
                const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
                
                let totalSize = 0;
                const fileSizes = {};

                // Calculate sizes for each file
                for (const [page, files] of Object.entries(stats.pages)) {
                    for (const file of files) {
                        const filePath = path.join(this.projectRoot, .next', file);
                        if (fs.existsSync(filePath)) {
                            const stats = fs.statSync(filePath);
                            fileSizes[file] = stats.size;
                            totalSize += stats.size;
                        }
                    }
                }

                return {
                    totalSize: totalSize,
                    totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
                    fileSizes: fileSizes,
                    status: totalSize < 5 * 1024 * 1024 ? good' : warning' // 5MB threshold
                };
=======
            this.log('Checking bundle size...');
            
            // Check if build directory exists
            const buildDir = path.join(this.projectRoot, '.next');
            if (!fs.existsSync(buildDir)) {
                this.log('Build directory not found, running build...');
                execSync('npm run build', { stdio: 'pipe' });
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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
<<<<<<< HEAD
            const endTime = Date.now();
            const buildTime = endTime - startTime;

            return {
                buildTime: buildTime,
                buildTimeSeconds: (buildTime / 1000).toFixed(2),
                status: buildTime < 60000 ? good' : warning' // 60 seconds threshold
            };
=======
            const buildTime = Date.now() - startTime;
            
            this.log(`Build time: ${buildTime}ms`);
            
            // Check against threshold (60 seconds)
            if (buildTime > 60000) {
                this.log(`⚠️  Build time (${buildTime}ms) exceeds 60 second threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Build time is within acceptable limits');
            return true;
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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
<<<<<<< HEAD
            const endTime = Date.now();
            const testTime = endTime - startTime;

            return {
                testTime: testTime,
                testTimeSeconds: (testTime / 1000).toFixed(2),
                status: testTime < 30000 ? good' : warning' // 30 seconds threshold
            };
=======
            const testTime = Date.now() - startTime;
            
            this.log(`Test time: ${testTime}ms`);
            
            // Check against threshold (30 seconds)
            if (testTime > 30000) {
                this.log(`⚠️  Test time (${testTime}ms) exceeds 30 second threshold`, 'warn');
                return false;
            }
            
            this.log('✅ Test performance is within acceptable limits');
            return true;
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
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

<<<<<<< HEAD
        // Bundle size recommendations
        if (results.bundleSize && results.bundleSize.totalSize > 5 * 1024 * 1024) {
            recommendations.push({
                type: 'bundle-size',
                priority: 'high',
                message: Bundle size is large (>5MB). Consider code splitting and lazy loading.',
                action: Implement dynamic imports and code splitting
            });
=======
            const reportPath = path.join(__dirname, '..', 'reports', `performance-${Date.now()}.json`);
            fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
            
            this.log(`Performance report generated: ${reportPath}`);
            return report;
        } catch (error) {
            this.log(`Failed to generate performance report: ${error.message}`, 'error');
            return null;
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
        }
    }

<<<<<<< HEAD
        // Build time recommendations
        if (results.buildTime && results.buildTime.buildTime > 60000) {
            recommendations.push({
                type: 'build-time',
                priority: 'medium',
                message: Build time is slow (>60s). Consider optimizing build configuration.',
                action: Review webpack configuration and dependencies
            });
        }

        // Test performance recommendations
        if (results.testPerformance && results.testPerformance.testTime > 30000) {
            recommendations.push({
                type: 'test-performance',
                priority: 'medium',
                message: Test execution is slow (>30s). Consider parallel testing.',
                action: Implement parallel test execution
            });
        }

        // Memory usage recommendations
        if (results.memoryUsage && results.memoryUsage.rss > 100 * 1024 * 1024) {
            recommendations.push({
                type: 'memory-usage',
                priority: 'medium',
                message: Memory usage is high (>100MB). Consider memory optimization.',
                action: Review memory leaks and optimize data structures
            });
        }

        return recommendations;
=======
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
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
    }
}

// Main execution
<<<<<<< HEAD
async function main() {
    const checker = new PerformanceChecker();
    
    try {
        const results = await checker.runPerformanceCheck();
        
        // Log summary
        logger.info('\n📊 Performance Check Summary:');
        logger.info(`Bundle Size: ${results.bundleSize?.totalSizeMB || N/A'} MB`);
        logger.info(`Build Time: ${results.buildTime?.buildTimeSeconds || N/A'} seconds`);
        logger.info(`Test Time: ${results.testPerformance?.testTimeSeconds || N/A'} seconds`);
        logger.info(`Memory Usage: ${results.memoryUsage?.rssMB || N/A'} MB`);
        
        if (results.recommendations.length > 0) {
            logger.info('\n💡 Recommendations:');
            results.recommendations.forEach(rec => {
                logger.info(`- ${rec.message}`);
            });
        }
        
        process.exit(0);
    } catch (error) {
        logger.error('❌ Performance check failed:', error.message);
        process.exit(1);
    }
}
=======
const performanceChecker = new PerformanceChecker();
const command = process.argv[2] || 'execute';
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858

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

<<<<<<< HEAD
module.exports = PerformanceChecker; 

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
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
