#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceChecker {
    constructor() {
        this.projectRoot = process.cwd();
        this.reportsDir = path.join(this.projectRoot, automation', reports');
        this.ensureDirectory(this.reportsDir);
    }

    ensureDirectory(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    log(message) {
        console.log(`[Performance Check] ${message}`);
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
    }

    async checkBundleSize() {
        this.log('📦 Checking bundle size...');

        try {
            // Build the project
            execSync('npm run build', { stdio: pipe' });

            // Get bundle stats
            const statsFile = path.join(this.projectRoot, .next', build-manifest.json');
            if (fs.existsSync(statsFile)) {
                const stats = JSON.parse(fs.readFileSync(statsFile, utf8'));
                
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
            }

            return { error: Could not analyze bundle size' };
        } catch (error) {
            return { error: error.message };
        }
    }

    async checkBuildTime() {
        this.log('⏱️  Checking build time...');

        try {
            const startTime = Date.now();
            execSync('npm run build', { stdio: pipe' });
            const endTime = Date.now();
            const buildTime = endTime - startTime;

            return {
                buildTime: buildTime,
                buildTimeSeconds: (buildTime / 1000).toFixed(2),
                status: buildTime < 60000 ? good' : warning' // 60 seconds threshold
            };
        } catch (error) {
            return { error: error.message };
        }
    }

    async checkTestPerformance() {
        this.log('🧪 Checking test performance...');

        try {
            const startTime = Date.now();
            execSync('npm test', { stdio: pipe' });
            const endTime = Date.now();
            const testTime = endTime - startTime;

            return {
                testTime: testTime,
                testTimeSeconds: (testTime / 1000).toFixed(2),
                status: testTime < 30000 ? good' : warning' // 30 seconds threshold
            };
        } catch (error) {
            return { error: error.message };
        }
    }

    async checkMemoryUsage() {
        this.log('💾 Checking memory usage...');

        const usage = process.memoryUsage();
        
        return {
            rss: usage.rss,
            rssMB: (usage.rss / 1024 / 1024).toFixed(2),
            heapUsed: usage.heapUsed,
            heapUsedMB: (usage.heapUsed / 1024 / 1024).toFixed(2),
            heapTotal: usage.heapTotal,
            heapTotalMB: (usage.heapTotal / 1024 / 1024).toFixed(2),
            external: usage.external,
            externalMB: (usage.external / 1024 / 1024).toFixed(2),
            status: usage.rss < 100 * 1024 * 1024 ? good' : warning' // 100MB threshold
        };
    }

    generateRecommendations(results) {
        const recommendations = [];

        // Bundle size recommendations
        if (results.bundleSize && results.bundleSize.totalSize > 5 * 1024 * 1024) {
            recommendations.push({
                type: bundle-size',
                priority: high',
                message: Bundle size is large (>5MB). Consider code splitting and lazy loading.',
                action: Implement dynamic imports and code splitting
            });
        }

        // Build time recommendations
        if (results.buildTime && results.buildTime.buildTime > 60000) {
            recommendations.push({
                type: build-time',
                priority: medium',
                message: Build time is slow (>60s). Consider optimizing build configuration.',
                action: Review webpack configuration and dependencies
            });
        }

        // Test performance recommendations
        if (results.testPerformance && results.testPerformance.testTime > 30000) {
            recommendations.push({
                type: test-performance',
                priority: medium',
                message: Test execution is slow (>30s). Consider parallel testing.',
                action: Implement parallel test execution
            });
        }

        // Memory usage recommendations
        if (results.memoryUsage && results.memoryUsage.rss > 100 * 1024 * 1024) {
            recommendations.push({
                type: memory-usage',
                priority: medium',
                message: Memory usage is high (>100MB). Consider memory optimization.',
                action: Review memory leaks and optimize data structures
            });
        }

        return recommendations;
    }
}

// Main execution
async function main() {
    const checker = new PerformanceChecker();
    
    try {
        const results = await checker.runPerformanceCheck();
        
        // Log summary
        console.log('\n📊 Performance Check Summary:');
        console.log(`Bundle Size: ${results.bundleSize?.totalSizeMB || N/A'} MB`);
        console.log(`Build Time: ${results.buildTime?.buildTimeSeconds || N/A'} seconds`);
        console.log(`Test Time: ${results.testPerformance?.testTimeSeconds || N/A'} seconds`);
        console.log(`Memory Usage: ${results.memoryUsage?.rssMB || N/A'} MB`);
        
        if (results.recommendations.length > 0) {
            console.log('\n💡 Recommendations:');
            results.recommendations.forEach(rec => {
                console.log(`- ${rec.message}`);
            });
        }
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Performance check failed:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = PerformanceChecker; 