
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

    }

    async checkBundleSize() {
        try {
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

        }
    }

    }
}

// Main execution

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

