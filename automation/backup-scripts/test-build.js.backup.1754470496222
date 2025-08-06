#!/usr/bin/env node

/**
 * Build Test Script
 * Tests the build process and validates the output
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildTester {
    constructor() {
        this.baseDir = process.cwd();
        this.buildDir = path.join(this.baseDir, '.next');
        this.outDir = path.join(this.baseDir, 'out');
    }

    async testBuild() {
        console.log('Testing build process...');
        
        try {
            // Clean previous builds
            this.cleanBuild();
            
            // Run build
            const buildResult = await this.runBuild();
            
            // Validate build output
            const validationResult = this.validateBuildOutput();
            
            // Generate report
            const report = this.generateReport(buildResult, validationResult);
            
            console.log('Build test completed');
            return report;
            
        } catch (error) {
            console.error('Build test failed:', error.message);
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    cleanBuild() {
        console.log('Cleaning previous builds...');
        
        const dirsToClean = [this.buildDir, this.outDir];
        
        dirsToClean.forEach(dir => {
            if (fs.existsSync(dir)) {
                fs.rmSync(dir, { recursive: true, force: true });
                console.log(`Cleaned ${dir}`);
            }
        });
    }

    async runBuild() {
        console.log('Running build...');
        
        const startTime = Date.now();
        
        try {
            const result = execSync('npm run build', {
                cwd: this.baseDir,
                encoding: 'utf8',
                stdio: 'pipe'
            });
            
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            console.log('✓ Build completed successfully');
            console.log(`Build duration: ${duration}ms`);
            
            return {
                success: true,
                output: result,
                duration,
                timestamp: new Date().toISOString()
            };
            
        } catch (error) {
            console.log('✗ Build failed');
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    validateBuildOutput() {
        console.log('Validating build output...');
        
        const validation = {
            buildDirExists: false,
            staticFiles: [],
            pagesGenerated: 0,
            totalSize: 0,
            issues: []
        };
        
        // Check if build directory exists
        if (fs.existsSync(this.buildDir)) {
            validation.buildDirExists = true;
            console.log('✓ Build directory exists');
        } else {
            validation.issues.push('Build directory not found');
            console.log('✗ Build directory not found');
        }
        
        // Check static files
        if (validation.buildDirExists) {
            this.scanBuildDirectory(this.buildDir, validation);
        }
        
        console.log(`Generated ${validation.pagesGenerated} pages`);
        console.log(`Total build size: ${(validation.totalSize / 1024 / 1024).toFixed(2)} MB`);
        
        return validation;
    }

    scanBuildDirectory(dir, validation) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanBuildDirectory(itemPath, validation);
            } else if (stat.isFile()) {
                validation.staticFiles.push({
                    path: path.relative(this.baseDir, itemPath),
                    size: stat.size,
                    sizeKB: (stat.size / 1024).toFixed(2)
                });
                validation.totalSize += stat.size;
                
                // Count pages
                if (itemPath.includes('/pages/') || itemPath.endsWith('.html')) {
                    validation.pagesGenerated++;
                }
            }
        });
    }

    checkBuildPerformance(validation) {
        console.log('Checking build performance...');
        
        const performanceIssues = [];
        
        // Check build size
        if (validation.totalSize > 50 * 1024 * 1024) { // > 50MB
            performanceIssues.push({
                type: 'large_build',
                size: validation.totalSize,
                sizeMB: (validation.totalSize / 1024 / 1024).toFixed(2),
                message: 'Build size is large, consider optimization'
            });
        }
        
        // Check number of pages
        if (validation.pagesGenerated < 10) {
            performanceIssues.push({
                type: 'few_pages',
                count: validation.pagesGenerated,
                message: 'Few pages generated, check build configuration'
            });
        }
        
        // Check for large files
        const largeFiles = validation.staticFiles.filter(file => file.size > 1024 * 1024); // > 1MB
        if (largeFiles.length > 0) {
            performanceIssues.push({
                type: 'large_files',
                count: largeFiles.length,
                files: largeFiles.map(f => f.path),
                message: 'Large files found in build output'
            });
        }
        
        return performanceIssues;
    }

    generateReport(buildResult, validationResult) {
        const performanceIssues = this.checkBuildPerformance(validationResult);
        
        const report = {
            timestamp: new Date().toISOString(),
            buildResult,
            validationResult,
            performanceIssues,
            summary: {
                buildSuccess: buildResult.success,
                buildDuration: buildResult.duration || 0,
                pagesGenerated: validationResult.pagesGenerated,
                totalSize: validationResult.totalSize,
                totalSizeMB: (validationResult.totalSize / 1024 / 1024).toFixed(2),
                issues: validationResult.issues.length + performanceIssues.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'build-test-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Build test report generated: ${reportFile}`);
        return report;
    }
}

if (require.main === module) {
    const tester = new BuildTester();
    tester.testBuild();
}

module.exports = BuildTester;
