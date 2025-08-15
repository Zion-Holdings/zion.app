#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-build-artifact-optimizer.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function getFileSize(filePath) {
  try {
    if (!fs.existsSync(filePath)) return 0;
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function getDirectorySize(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) return 0;
    let totalSize = 0;
    
    function calculateSize(currentPath) {
      const items = fs.readdirSync(currentPath);
      for (const item of items) {
        const itemPath = path.join(currentPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          calculateSize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    }
    
    calculateSize(dirPath);
    return totalSize;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

class NetlifyBuildArtifactOptimizer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.optimizations = [];
    this.cleanedSize = 0;
    this.originalSize = 0;
  }

  async analyzeBuildArtifacts() {
    log('🔍 Analyzing build artifacts...');
    
    const analysis = {
      nextBuild: {},
      netlifyBuild: {},
      staticAssets: {},
      functions: {},
      totalSize: 0,
      recommendations: []
    };

    // Analyze Next.js build
    const nextPath = path.join(this.projectRoot, '.next');
    if (fs.existsSync(nextPath)) {
      const size = getDirectorySize(nextPath);
      analysis.nextBuild = {
        exists: true,
        size: size,
        sizeFormatted: formatBytes(size),
        subdirectories: this.analyzeSubdirectories(nextPath)
      };
      analysis.totalSize += size;
    }

    // Analyze Netlify build output
    const outPath = path.join(this.projectRoot, 'out');
    if (fs.existsSync(outPath)) {
      const size = getDirectorySize(outPath);
      analysis.netlifyBuild = {
        exists: true,
        size: size,
        sizeFormatted: formatBytes(size),
        subdirectories: this.analyzeSubdirectories(outPath)
      };
      analysis.totalSize += size;
    }

    // Analyze static assets
    const publicPath = path.join(this.projectRoot, 'public');
    if (fs.existsSync(publicPath)) {
      const size = getDirectorySize(publicPath);
      analysis.staticAssets = {
        exists: true,
        size: size,
        sizeFormatted: formatBytes(size),
        subdirectories: this.analyzeSubdirectories(publicPath)
      };
      analysis.totalSize += size;
    }

    // Analyze Netlify functions
    const functionsPath = path.join(this.projectRoot, 'netlify', 'functions');
    if (fs.existsSync(functionsPath)) {
      const size = getDirectorySize(functionsPath);
      analysis.functions = {
        exists: true,
        size: size,
        sizeFormatted: formatBytes(size),
        subdirectories: this.analyzeSubdirectories(functionsPath)
      };
      analysis.totalSize += size;
    }

    // Generate recommendations
    analysis.recommendations = this.generateOptimizationRecommendations(analysis);

    return analysis;
  }

  analyzeSubdirectories(dirPath) {
    try {
      const subdirs = {};
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          const size = getDirectorySize(itemPath);
          subdirs[item] = {
            size: size,
            sizeFormatted: formatBytes(size),
            fileCount: this.countFiles(itemPath),
            modified: stats.mtime.toISOString()
          };
        }
      }
      
      return subdirs;
    } catch {
      return {};
    }
  }

  countFiles(dirPath) {
    try {
      let count = 0;
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          count += this.countFiles(itemPath);
        } else {
          count++;
        }
      }
      
      return count;
    } catch {
      return 0;
    }
  }

  generateOptimizationRecommendations(analysis) {
    const recommendations = [];

    if (analysis.totalSize > 100 * 1024 * 1024) { // > 100MB
      recommendations.push({
        priority: 'high',
        action: 'Clean build artifacts',
        description: `Total build artifacts size is ${formatBytes(analysis.totalSize)}. Consider cleaning unnecessary files.`
      });
    }

    if (analysis.nextBuild.exists && analysis.nextBuild.size > 50 * 1024 * 1024) { // > 50MB
      recommendations.push({
        priority: 'medium',
        action: 'Optimize Next.js build',
        description: `Next.js build size is ${analysis.nextBuild.sizeFormatted}. Consider build optimizations.`
      });
    }

    if (analysis.staticAssets.exists && analysis.staticAssets.size > 20 * 1024 * 1024) { // > 20MB
      recommendations.push({
        priority: 'medium',
        action: 'Optimize static assets',
        description: `Static assets size is ${analysis.staticAssets.sizeFormatted}. Consider image optimization and cleanup.`
      });
    }

    return recommendations;
  }

  async optimizeNextBuild() {
    log('🔧 Optimizing Next.js build...');
    
    const nextPath = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(nextPath)) {
      log('ℹ️ No Next.js build directory found');
      return { success: false, message: 'No .next directory found' };
    }

    const originalSize = getDirectorySize(nextPath);
    let cleanedSize = 0;

    try {
      // Remove unnecessary Next.js build files
      const dirsToClean = ['cache', 'trace', 'server', 'static/chunks'];
      
      for (const dir of dirsToClean) {
        const dirPath = path.join(nextPath, dir);
        if (fs.existsSync(dirPath)) {
          const size = getDirectorySize(dirPath);
          execSync(`rm -rf "${dirPath}"`, { stdio: 'pipe' });
          cleanedSize += size;
          log(`🧹 Cleaned ${dir}: ${formatBytes(size)}`);
        }
      }

      // Keep only essential build files
      const essentialDirs = ['standalone', 'export', 'serverless'];
      for (const dir of essentialDirs) {
        const dirPath = path.join(nextPath, dir);
        if (fs.existsSync(dirPath)) {
          log(`✅ Preserved essential directory: ${dir}`);
        }
      }

      const finalSize = getDirectorySize(nextPath);
      const savings = originalSize - finalSize;

      return {
        success: true,
        originalSize: originalSize,
        finalSize: finalSize,
        cleanedSize: cleanedSize,
        savings: savings,
        savingsFormatted: formatBytes(savings)
      };

    } catch (error) {
      log(`❌ Error optimizing Next.js build: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async optimizeStaticAssets() {
    log('🖼️ Optimizing static assets...');
    
    const publicPath = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicPath)) {
      log('ℹ️ No public directory found');
      return { success: false, message: 'No public directory found' };
    }

    const originalSize = getDirectorySize(publicPath);
    let cleanedSize = 0;

    try {
      // Find and optimize large image files
      const largeFiles = this.findLargeFiles(publicPath, 1024 * 1024); // > 1MB
      
      for (const file of largeFiles) {
        if (file.path.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) {
          log(`🖼️ Large image detected: ${file.path} (${file.sizeFormatted})`);
          // Could implement image optimization here
        }
      }

      // Remove temporary files
      const tempPatterns = ['*.tmp', '*.temp', '*.cache', '*.log'];
      for (const pattern of tempPatterns) {
        try {
          execSync(`find "${publicPath}" -name "${pattern}" -delete`, { stdio: 'pipe' });
        } catch (error) {
          // Pattern might not match any files
        }
      }

      const finalSize = getDirectorySize(publicPath);
      const savings = originalSize - finalSize;

      return {
        success: true,
        originalSize: originalSize,
        finalSize: finalSize,
        cleanedSize: cleanedSize,
        savings: savings,
        savingsFormatted: formatBytes(savings),
        largeFiles: largeFiles.length
      };

    } catch (error) {
      log(`❌ Error optimizing static assets: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  findLargeFiles(dirPath, minSize) {
    const largeFiles = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          const subFiles = this.findLargeFiles(itemPath, minSize);
          largeFiles.push(...subFiles);
        } else if (stats.size > minSize) {
          largeFiles.push({
            path: itemPath,
            size: stats.size,
            sizeFormatted: formatBytes(stats.size),
            relativePath: path.relative(this.projectRoot, itemPath)
          });
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }

    return largeFiles.sort((a, b) => b.size - a.size);
  }

  async cleanBuildCache() {
    log('🧹 Cleaning build cache...');
    
    const cacheDirs = [
      '.next/cache',
      'node_modules/.cache',
      '.cache',
      'out/.cache'
    ];

    let totalCleaned = 0;

    for (const cacheDir of cacheDirs) {
      const cachePath = path.join(this.projectRoot, cacheDir);
      if (fs.existsSync(cachePath)) {
        try {
          const size = getDirectorySize(cachePath);
          execSync(`rm -rf "${cachePath}"`, { stdio: 'pipe' });
          totalCleaned += size;
          log(`🧹 Cleaned cache: ${cacheDir} (${formatBytes(size)})`);
        } catch (error) {
          log(`⚠️ Could not clean cache ${cacheDir}: ${error.message}`);
        }
      }
    }

    return {
      success: true,
      totalCleaned: totalCleaned,
      totalCleanedFormatted: formatBytes(totalCleaned)
    };
  }

  async runFullOptimization() {
    log('🚀 Starting full build artifact optimization...');
    
    const startTime = Date.now();
    const results = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      summary: {
        totalOriginalSize: 0,
        totalFinalSize: 0,
        totalSavings: 0,
        totalSavingsFormatted: '0 Bytes'
      }
    };

    try {
      // Analyze current state
      const analysis = await this.analyzeBuildArtifacts();
      results.analysis = analysis;
      results.summary.totalOriginalSize = analysis.totalSize;

      log(`📊 Current build artifacts size: ${formatBytes(analysis.totalSize)}`);

      // Optimize Next.js build
      const nextOptimization = await this.optimizeNextBuild();
      if (nextOptimization.success) {
        results.optimizations.push({
          type: 'next_build',
          ...nextOptimization
        });
        log(`✅ Next.js optimization completed: ${nextOptimization.savingsFormatted} saved`);
      }

      // Optimize static assets
      const staticOptimization = await this.optimizeStaticAssets();
      if (staticOptimization.success) {
        results.optimizations.push({
          type: 'static_assets',
          ...staticOptimization
        });
        log(`✅ Static assets optimization completed: ${staticOptimization.savingsFormatted} saved`);
      }

      // Clean build cache
      const cacheCleaning = await this.cleanBuildCache();
      if (cacheCleaning.success) {
        results.optimizations.push({
          type: 'cache_cleaning',
          ...cacheCleaning
        });
        log(`✅ Cache cleaning completed: ${cacheCleaning.totalCleanedFormatted} cleaned`);
      }

      // Re-analyze after optimization
      const finalAnalysis = await this.analyzeBuildArtifacts();
      results.finalAnalysis = finalAnalysis;
      results.summary.totalFinalSize = finalAnalysis.totalSize;
      results.summary.totalSavings = results.summary.totalOriginalSize - results.summary.totalFinalSize;
      results.summary.totalSavingsFormatted = formatBytes(results.summary.totalSavings);

      // Calculate total time
      const duration = Date.now() - startTime;
      results.duration = duration;
      results.durationFormatted = `${(duration / 1000).toFixed(2)}s`;

      log('✅ Build artifact optimization completed!');
      log(`📊 Summary: ${results.summary.totalSavingsFormatted} saved in ${results.durationFormatted}`);
      log(`📊 Final size: ${formatBytes(results.summary.totalFinalSize)}`);

      // Save optimization report
      const reportPath = path.join(LOG_DIR, `build-artifact-optimization-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      log(`📄 Optimization report saved to: ${reportPath}`);

      return results;

    } catch (error) {
      log(`❌ Build artifact optimization failed: ${error.message}`);
      results.error = error.message;
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new NetlifyBuildArtifactOptimizer();
  
  const command = process.argv[2] || 'full';
  
  switch (command) {
    case 'analyze':
      optimizer.analyzeBuildArtifacts().then(console.log);
      break;
    case 'next':
      optimizer.optimizeNextBuild().then(console.log);
      break;
    case 'static':
      optimizer.optimizeStaticAssets().then(console.log);
      break;
    case 'cache':
      optimizer.cleanBuildCache().then(console.log);
      break;
    case 'full':
    default:
      optimizer.runFullOptimization().then(console.log);
      break;
  }
}

module.exports = NetlifyBuildArtifactOptimizer;
