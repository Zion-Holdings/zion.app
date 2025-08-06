#!/usr/bin/env node

/**
 * Bundle Optimization Script
 * Analyzes and optimizes bundle size
 */

const fs = require('fs');
const path = require('path');

class BundleOptimizer {
    constructor() {
        this.baseDir = process.cwd();
        this.packageJsonPath = path.join(this.baseDir, 'package.json');
    }

    analyzeDependencies() {
        console.log('Analyzing dependencies...');
        
        if (!fs.existsSync(this.packageJsonPath)) {
            console.log('✗ package.json not found');
            return null;
        }
        
        const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        const analysis = {
            totalDependencies: Object.keys(dependencies).length,
            productionDependencies: Object.keys(packageJson.dependencies || {}).length,
            devDependencies: Object.keys(packageJson.devDependencies || {}).length,
            largePackages: [],
            duplicatePackages: [],
            unusedPackages: []
        };
        
        // Check for large packages
        const largePackages = [
            'lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'
        ];
        
        largePackages.forEach(pkg => {
            if (dependencies[pkg]) {
                analysis.largePackages.push(pkg);
            }
        });
        
        console.log(`Total dependencies: ${analysis.totalDependencies}`);
        console.log(`Production dependencies: ${analysis.productionDependencies}`);
        console.log(`Dev dependencies: ${analysis.devDependencies}`);
        console.log(`Large packages found: ${analysis.largePackages.length}`);
        
        return analysis;
    }

    checkBundleSize() {
        console.log('Checking bundle size...');
        
        const buildDir = path.join(this.baseDir, '.next');
        const analysis = {
            buildExists: fs.existsSync(buildDir),
            staticFiles: [],
            totalSize: 0
        };
        
        if (analysis.buildExists) {
            this.scanBuildDirectory(buildDir, analysis);
        }
        
        return analysis;
    }

    scanBuildDirectory(dir, analysis) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanBuildDirectory(itemPath, analysis);
            } else if (stat.isFile()) {
                analysis.staticFiles.push({
                    path: path.relative(this.baseDir, itemPath),
                    size: stat.size,
                    sizeKB: (stat.size / 1024).toFixed(2)
                });
                analysis.totalSize += stat.size;
            }
        });
    }

    generateOptimizationRecommendations(dependencyAnalysis, bundleAnalysis) {
        const recommendations = [];
        
        if (dependencyAnalysis.largePackages.length > 0) {
            recommendations.push({
                type: 'large_packages',
                priority: 'high',
                message: `Consider replacing large packages: ${dependencyAnalysis.largePackages.join(', ')}`,
                packages: dependencyAnalysis.largePackages
            });
        }
        
        if (bundleAnalysis.totalSize > 5 * 1024 * 1024) { // > 5MB
            recommendations.push({
                type: 'bundle_size',
                priority: 'medium',
                message: 'Bundle size is large, consider code splitting and lazy loading'
            });
        }
        
        if (dependencyAnalysis.devDependencies > dependencyAnalysis.productionDependencies) {
            recommendations.push({
                type: 'dependency_ratio',
                priority: 'low',
                message: 'High number of dev dependencies, consider cleanup'
            });
        }
        
        return recommendations;
    }

    generateReport(dependencyAnalysis, bundleAnalysis, recommendations) {
        const report = {
            timestamp: new Date().toISOString(),
            dependencyAnalysis,
            bundleAnalysis,
            recommendations,
            summary: {
                totalDependencies: dependencyAnalysis?.totalDependencies || 0,
                bundleSize: bundleAnalysis?.totalSize || 0,
                bundleSizeMB: bundleAnalysis ? (bundleAnalysis.totalSize / 1024 / 1024).toFixed(2) : 0,
                recommendationsCount: recommendations.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'bundle-optimization-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Bundle optimization report generated: ${reportFile}`);
        return report;
    }

    run() {
        console.log('Starting bundle optimization analysis...');
        
        const dependencyAnalysis = this.analyzeDependencies();
        const bundleAnalysis = this.checkBundleSize();
        const recommendations = this.generateOptimizationRecommendations(dependencyAnalysis, bundleAnalysis);
        const report = this.generateReport(dependencyAnalysis, bundleAnalysis, recommendations);
        
        console.log('Bundle optimization analysis completed');
        return report;
    }
}

if (require.main === module) {
    const optimizer = new BundleOptimizer();
    optimizer.run();
}

module.exports = BundleOptimizer;
