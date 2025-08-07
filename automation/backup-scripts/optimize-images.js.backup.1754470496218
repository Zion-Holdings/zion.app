#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for better performance
 */

const fs = require('fs');
const path = require('path');

class ImageOptimizer {
    constructor() {
        this.baseDir = process.cwd();
        this.publicDir = path.join(this.baseDir, 'public');
        this.optimizedDir = path.join(this.publicDir, 'optimized');
    }

    checkImageFiles() {
        console.log('Checking image files...');
        
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
        const imageFiles = [];
        
        if (fs.existsSync(this.publicDir)) {
            this.scanDirectory(this.publicDir, imageExtensions, imageFiles);
        }
        
        console.log(`Found ${imageFiles.length} image files`);
        return imageFiles;
    }

    scanDirectory(dir, extensions, files) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanDirectory(itemPath, extensions, files);
            } else if (stat.isFile()) {
                const ext = path.extname(item).toLowerCase();
                if (extensions.includes(ext)) {
                    files.push({
                        path: itemPath,
                        relativePath: path.relative(this.publicDir, itemPath),
                        size: stat.size,
                        extension: ext
                    });
                }
            }
        });
    }

    analyzeImageSizes(imageFiles) {
        console.log('Analyzing image sizes...');
        
        const sizeAnalysis = {
            totalFiles: imageFiles.length,
            totalSize: 0,
            largeImages: [],
            mediumImages: [],
            smallImages: []
        };
        
        imageFiles.forEach(file => {
            sizeAnalysis.totalSize += file.size;
            
            if (file.size > 500000) { // > 500KB
                sizeAnalysis.largeImages.push(file);
            } else if (file.size > 100000) { // > 100KB
                sizeAnalysis.mediumImages.push(file);
            } else {
                sizeAnalysis.smallImages.push(file);
            }
        });
        
        console.log(`Total size: ${(sizeAnalysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Large images (>500KB): ${sizeAnalysis.largeImages.length}`);
        console.log(`Medium images (100KB-500KB): ${sizeAnalysis.mediumImages.length}`);
        console.log(`Small images (<100KB): ${sizeAnalysis.smallImages.length}`);
        
        return sizeAnalysis;
    }

    generateOptimizationReport(imageFiles, sizeAnalysis) {
        const report = {
            timestamp: new Date().toISOString(),
            imageFiles: imageFiles.map(file => ({
                path: file.relativePath,
                size: file.size,
                sizeKB: (file.size / 1024).toFixed(2),
                extension: file.extension
            })),
            sizeAnalysis,
            recommendations: this.generateRecommendations(sizeAnalysis)
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'image-optimization-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Image optimization report generated: ${reportFile}`);
        return report;
    }

    generateRecommendations(sizeAnalysis) {
        const recommendations = [];
        
        if (sizeAnalysis.largeImages.length > 0) {
            recommendations.push({
                type: 'compression',
                priority: 'high',
                message: `Consider compressing ${sizeAnalysis.largeImages.length} large images`,
                files: sizeAnalysis.largeImages.map(img => img.relativePath)
            });
        }
        
        if (sizeAnalysis.totalSize > 5 * 1024 * 1024) { // > 5MB total
            recommendations.push({
                type: 'overall_size',
                priority: 'medium',
                message: 'Total image size is large, consider lazy loading and compression'
            });
        }
        
        const webpCount = sizeAnalysis.imageFiles.filter(img => img.extension === '.webp').length;
        if (webpCount < sizeAnalysis.totalFiles * 0.5) {
            recommendations.push({
                type: 'format',
                priority: 'medium',
                message: 'Consider converting images to WebP format for better compression'
            });
        }
        
        return recommendations;
    }

    run() {
        console.log('Starting image optimization analysis...');
        
        const imageFiles = this.checkImageFiles();
        const sizeAnalysis = this.analyzeImageSizes(imageFiles);
        const report = this.generateOptimizationReport(imageFiles, sizeAnalysis);
        
        console.log('Image optimization analysis completed');
        return report;
    }
}

if (require.main === module) {
    const optimizer = new ImageOptimizer();
    optimizer.run();
}

module.exports = ImageOptimizer;
