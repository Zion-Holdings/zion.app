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
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
    constructor() {
        this.baseDir = process.cwd();
        this.buildDir = path.join(this.baseDir, '.next');
        this.outDir = path.join(this.baseDir, 'out');
    }

    /**
 * testBuild
 * @returns {Promise<void>}
 */
async testBuild() {
        this.log('Testing build process...', 'info');
        
        try {
            // Clean previous builds
            this.cleanBuild();
            
            // Run build
            const buildResult = await this.runBuild();
            
            // Validate build output
            const validationResult = this.validateBuildOutput();
            
            // Generate report
            const report = this.generateReport(buildResult, validationResult);
            
            this.log('Build test completed', 'info');
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
        this.log('Cleaning previous builds...', 'info');
        
        const dirsToClean = [this.buildDir, this.outDir];
        
        dirsToClean.forEach(dir => {
            if (fs.existsSync(dir)) {
                fs.rmSync(dir, { recursive: true, force: true });
                this.log(`Cleaned ${dir}`, 'info');
            }
        });
    }

    /**
 * runBuild
 * @returns {Promise<void>}
 */
async runBuild() {
        this.log('Running build...', 'info');
        
        const startTime = Date.now();
        
        try {
            const result = execSync('npm run build', {
                cwd: this.baseDir,
                encoding: 'utf8',
                stdio: 'pipe'
            });
            
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            this.log('✓ Build completed successfully', 'info');
            this.log(`Build duration: ${duration}ms`, 'info');
            
            return {
                success: true,
                output: result,
                duration,
                timestamp: new Date().toISOString()
            };
            
        } catch (error) {
            this.log('✗ Build failed', 'info');
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    validateBuildOutput() {
        this.log('Validating build output...', 'info');
        
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
            this.log('✓ Build directory exists', 'info');
        } else {
            validation.issues.push('Build directory not found');
            this.log('✗ Build directory not found', 'info');
        }
        
        // Check static files
        if (validation.buildDirExists) {
            this.scanBuildDirectory(this.buildDir, validation);
        }
        
        this.log(`Generated ${validation.pagesGenerated} pages`, 'info');
        this.log(`Total build size: ${(validation.totalSize / 1024 / 1024, 'info').toFixed(2)} MB`);
        
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
        this.log('Checking build performance...', 'info');
        
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
        
        this.log(`Build test report generated: ${reportFile}`, 'info');
        return report;
    }
}

if (require.main === module) {
    const tester = new BuildTester();
    tester.testBuild();
}

module.exports = BuildTester;
