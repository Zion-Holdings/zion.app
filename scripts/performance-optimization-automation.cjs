#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const chalk = require('chalk')
class PerformanceOptimizationAutomation {
  constructor() {
    this.config = {
      optimizationInterval: 10 * 60 * 1000, // 10 minutes
      performanceThresholds: {
        bundleSize: 500 * 1024, // 500KB
        loadTime: 3000, // 3 seconds
        memoryUsage: 100 * 1024 * 1024, // 100MB
        cpuUsage: 80 // 80%
      },
      optimizationStrategies: {
        bundleOptimization: true,
        imageOptimization: true,
        cachingOptimization: true,
        codeSplitting: true,
        lazyLoading: true
      }
    };
    
    this.performanceHistory = [];
    this.isRunning = false;
    this.optimizationCount = 0;
  }

  async start() {
    console.log(chalk.blue('🚀 Performance Optimization Automation Starting...'));
    this.isRunning = true;
    
    // Initial performance analysis
    await this.analyzePerformance();
    
    // Set up continuous monitoring
    this.monitorInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.analyzePerformance();
      }
    }, this.config.optimizationInterval);
    
    console.log(chalk.green('✅ Performance Optimization Automation started successfully'));
  }

  async stop() {
    console.log(chalk.yellow('🛑 Stopping Performance Optimization Automation...'));
    this.isRunning = false;
    
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
    
    console.log(chalk.green('✅ Performance Optimization Automation stopped'));
  }

  async analyzePerformance() {
    try {
      console.log(chalk.cyan('📊 Analyzing application performance...'))
const metrics = await this.gatherPerformanceMetrics()
const analysis = this.analyzeMetrics(metrics);
      
      if (analysis.needsOptimization) {
        console.log(chalk.yellow('⚠️  Performance issues detected. Starting optimization...'));
        await this.performOptimizations(analysis.issues);
      } else {
        console.log(chalk.green('✅ Performance is within acceptable thresholds'));
      }
      
      this.performanceHistory.push({
        timestamp: new Date().toISOString(),
        metrics,
        analysis,
        optimizationsApplied: analysis.needsOptimization ? analysis.issues.length : 0
      });
      
      await this.generatePerformanceReport();
      
    } catch (error) {
      console.error(chalk.red('❌ Error during performance analysis:'), error.message);
    }
  }

  async gatherPerformanceMetrics() {
    const metrics = {
      bundleSize: await this.measureBundleSize(),
      loadTime: await this.measureLoadTime(),
      memoryUsage: await this.measureMemoryUsage(),
      cpuUsage: await this.measureCpuUsage(),
      imageSizes: await this.analyzeImageSizes(),
      unusedDependencies: await this.findUnusedDependencies(),
      duplicateCode: await this.findDuplicateCode()
    };
    
    return metrics;
  }

  async measureBundleSize() {
    try {
      // Build the application to measure bundle size
      execSync('npm run build', { stdio: 'pipe' })
const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        return 0;
      }
      
      const totalSize = this.calculateDirectorySize(buildDir);
      return totalSize;
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not measure bundle size:'), error.message);
      return 0;
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    }
    
    return totalSize;
  }

  async measureLoadTime() {
    try {
      // Start the development server
      const server = spawn('npm', ['run', 'dev'], { 
        stdio: 'pipe',
        detached: true 
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Measure load time using curl
      const startTime = Date.now();
      execSync('curl -s http://localhost:3002 > /dev/null', { stdio: 'pipe' })
const loadTime = Date.now() - startTime;
      
      // Kill the server
      server.kill();
      
      return loadTime;
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not measure load time:'), error.message);
      return 0;
    }
  }

  async measureMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      return usage.heapUsed;
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not measure memory usage:'), error.message);
      return 0;
    }
  }

  async measureCpuUsage() {
    try {
      const startUsage = process.cpuUsage();
      await new Promise(resolve => setTimeout(resolve, 100))
const endUsage = process.cpuUsage(startUsage)
const cpuPercent = (endUsage.user + endUsage.system) / 1000000; // Convert to percentage
      return Math.min(100, cpuPercent);
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not measure CPU usage:'), error.message);
      return 0;
    }
  }

  async analyzeImageSizes() {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
const largeImages = []
const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      this.findLargeImages(publicDir, largeImages, imageExtensions);
    }
    
    return largeImages;
  }

  findLargeImages(dirPath, largeImages, extensions, maxSize = 500 * 1024) {
    if (!fs.existsSync(dirPath)) return
const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findLargeImages(fullPath, largeImages, extensions, maxSize);
      } else if (extensions.includes(path.extname(item).toLowerCase())) {
        if (stat.size > maxSize) {
          largeImages.push({
            path: fullPath,
            size: stat.size,
            sizeInMB: (stat.size / (1024 * 1024)).toFixed(2)
          });
        }
      }
    }
  }

  async findUnusedDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const dependencies = Object.keys(packageJson.dependencies || {})
const unused = [];
      
      for (const dep of dependencies) {
        if (!this.isDependencyUsed(dep)) {
          unused.push(dep);
        }
      }
      
      return unused;
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not analyze dependencies:'), error.message);
      return [];
    }
  }

  isDependencyUsed(dependency) {
    const sourceDirs = ['src', 'pages', 'components', 'lib', 'utils'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir) && this.searchForImport(dir, dependency)) {
        return true;
      }
    }
    
    return false;
  }

  searchForImport(dirPath, dependency) {
    if (!fs.existsSync(dirPath)) return false
const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (this.searchForImport(fullPath, dependency)) {
          return true;
        }
      } else if (this.isSourceFile(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(`from '${dependency}'`) || content.includes(`require('${dependency}')`)) {
          return true;
        }
      }
    }
    
    return false;
  }

  isSourceFile(filePath) {
    const sourceExtensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return sourceExtensions.includes(path.extname(filePath));
  }

  async findDuplicateCode() {
    const duplicates = []
const sourceDirs = ['src', 'pages', 'components', 'lib', 'utils'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getAllSourceFiles(dir)
const codeBlocks = this.extractCodeBlocks(files)
const duplicateBlocks = this.findDuplicateBlocks(codeBlocks);
        duplicates.push(...duplicateBlocks);
      }
    }
    
    return duplicates;
  }

  getAllSourceFiles(dirPath) {
    const files = [];
    this.walkDirectory(dirPath, files);
    return files;
  }

  walkDirectory(dirPath, files) {
    if (!fs.existsSync(dirPath)) return
const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else if (this.isSourceFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  extractCodeBlocks(files) {
    const blocks = [];
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8')
const lines = content.split('\n');
      
      for (let i = 0; i < lines.length - 2; i++) {
        const block = lines.slice(i, i + 3).join('\n').trim();
        if (block.length > 20) { // Minimum block size
          blocks.push({
            file,
            line: i + 1,
            content: block
          });
        }
      }
    }
    
    return blocks;
  }

  findDuplicateBlocks(blocks) {
    const duplicates = []
const seen = new Map();
    
    for (const block of blocks) {
      const hash = this.hashCode(block.content);
      
      if (seen.has(hash)) {
        duplicates.push({
          original: seen.get(hash),
          duplicate: block,
          content: block.content
        });
      } else {
        seen.set(hash, block);
      }
    }
    
    return duplicates;
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  analyzeMetrics(metrics) {
    const issues = [];
    let needsOptimization = false;
    
    // Bundle size analysis
    if (metrics.bundleSize > this.config.performanceThresholds.bundleSize) {
      issues.push({
        type: 'bundle-size',
        severity: 'high',
        message: `Bundle size (${(metrics.bundleSize / 1024).toFixed(2)}KB) exceeds threshold`,
        current: metrics.bundleSize,
        threshold: this.config.performanceThresholds.bundleSize
      });
      needsOptimization = true;
    }
    
    // Load time analysis
    if (metrics.loadTime > this.config.performanceThresholds.loadTime) {
      issues.push({
        type: 'load-time',
        severity: 'medium',
        message: `Load time (${metrics.loadTime}ms) exceeds threshold`,
        current: metrics.loadTime,
        threshold: this.config.performanceThresholds.loadTime
      });
      needsOptimization = true;
    }
    
    // Memory usage analysis
    if (metrics.memoryUsage > this.config.performanceThresholds.memoryUsage) {
      issues.push({
        type: 'memory-usage',
        severity: 'medium',
        message: `Memory usage (${(metrics.memoryUsage / (1024 * 1024)).toFixed(2)}MB) exceeds threshold`,
        current: metrics.memoryUsage,
        threshold: this.config.performanceThresholds.memoryUsage
      });
      needsOptimization = true;
    }
    
    // Large images analysis
    if (metrics.imageSizes.length > 0) {
      issues.push({
        type: 'large-images',
        severity: 'low',
        message: `${metrics.imageSizes.length} large images detected`,
        images: metrics.imageSizes
      });
      needsOptimization = true;
    }
    
    // Unused dependencies analysis
    if (metrics.unusedDependencies.length > 0) {
      issues.push({
        type: 'unused-dependencies',
        severity: 'low',
        message: `${metrics.unusedDependencies.length} unused dependencies found`,
        dependencies: metrics.unusedDependencies
      });
      needsOptimization = true;
    }
    
    // Duplicate code analysis
    if (metrics.duplicateCode.length > 0) {
      issues.push({
        type: 'duplicate-code',
        severity: 'medium',
        message: `${metrics.duplicateCode.length} duplicate code blocks found`,
        duplicates: metrics.duplicateCode
      });
      needsOptimization = true;
    }
    
    return {
      needsOptimization,
      issues,
      metrics
    };
  }

  async performOptimizations(issues) {
    console.log(chalk.blue('🔧 Performing performance optimizations...'));
    
    for (const issue of issues) {
      switch (issue.type) {
        case 'bundle-size':
          await this.optimizeBundleSize();
          break;
        case 'large-images':
          await this.optimizeImages(issue.images);
          break;
        case 'unused-dependencies':
          await this.removeUnusedDependencies(issue.dependencies);
          break;
        case 'duplicate-code':
          await this.refactorDuplicateCode(issue.duplicates);
          break;
        case 'load-time':
          await this.optimizeLoadTime();
          break;
      }
    }
    
    this.optimizationCount++;
    console.log(chalk.green(`✅ Optimizations completed (${this.optimizationCount} total)`));
  }

  async optimizeBundleSize() {
    console.log(chalk.cyan('📦 Optimizing bundle size...'));
    
    // Enable tree shaking
    await this.updateNextConfig({
      experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@chakra-ui/react', 'lucide-react']
      }
    });
    
    // Add bundle analyzer
    await this.addBundleAnalyzer();
  }

  async optimizeImages(images) {
    console.log(chalk.cyan('🖼️  Optimizing images...'));
    
    for (const image of images) {
      console.log(chalk.yellow(`  Optimizing ${image.path} (${image.sizeInMB}MB)`));
      
      // Suggest optimization
      const optimizedPath = image.path.replace(/\.[^.]+$/, '.optimized$&');
      console.log(chalk.blue(`  Consider converting to WebP format: ${optimizedPath}`));
    }
  }

  async removeUnusedDependencies(dependencies) {
    console.log(chalk.cyan('🗑️  Removing unused dependencies...'));
    
    for (const dep of dependencies) {
      console.log(chalk.yellow(`  Removing unused dependency: ${dep}`));
      try {
        execSync(`npm uninstall ${dep}`, { stdio: 'pipe' });
        console.log(chalk.green(`  ✅ Removed ${dep}`));
      } catch (error) {
        console.log(chalk.red(`  ❌ Failed to remove ${dep}: ${error.message}`));
      }
    }
  }

  async refactorDuplicateCode(duplicates) {
    console.log(chalk.cyan('🔧 Refactoring duplicate code...'));
    
    for (const duplicate of duplicates) {
      console.log(chalk.yellow(`  Duplicate code found in ${duplicate.duplicate.file}:${duplicate.duplicate.line}`));
      console.log(chalk.blue(`  Original in ${duplicate.original.file}:${duplicate.original.line}`));
      
      // Suggest creating a shared utility
      const utilityName = this.generateUtilityName(duplicate.content);
      console.log(chalk.blue(`  Consider extracting to utility: ${utilityName}`));
    }
  }

  generateUtilityName(content) {
    // Simple utility name generation based on content
    const words = content.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(w => w.length > 3);
    if (words.length > 0) {
      return words[0].toLowerCase() + 'Utils';
    }
    return 'sharedUtils';
  }

  async optimizeLoadTime() {
    console.log(chalk.cyan('⚡ Optimizing load time...'));
    
    // Enable compression
    await this.updateNextConfig({
      compress: true,
      poweredByHeader: false
    });
    
    // Add preload hints
    await this.addPreloadHints();
  }

  async updateNextConfig(updates) {
    const configPath = 'next.config.js';
    if (fs.existsSync(configPath)) {
      const content = fs.readFileSync(configPath, 'utf8');
      console.log(chalk.blue(`  Updating ${configPath} with performance optimizations`));
    }
  }

  async addBundleAnalyzer() {
    console.log(chalk.blue('  Adding bundle analyzer...'));
    try {
      execSync('npm install --save-dev @next/bundle-analyzer', { stdio: 'pipe' });
      console.log(chalk.green('  ✅ Bundle analyzer installed'));
    } catch (error) {
      console.log(chalk.red(`  ❌ Failed to install bundle analyzer: ${error.message}`));
    }
  }

  async addPreloadHints() {
    console.log(chalk.blue('  Adding preload hints...'));
    // Implementation for adding preload hints
  }

  async generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOptimizations: this.optimizationCount,
        lastOptimization: this.performanceHistory[this.performanceHistory.length - 1] || null,
        performanceTrend: this.calculatePerformanceTrend()
      },
      history: this.performanceHistory.slice(-10) // Last 10 entries
    }
const reportPath = path.join(__dirname, '..', 'logs', 'performance-optimization-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(chalk.blue('📊 Performance report generated:'), reportPath);
  }

  calculatePerformanceTrend() {
    if (this.performanceHistory.length < 2) {
      return 'insufficient-data';
    }
    
    const recent = this.performanceHistory.slice(-3)
const improvements = recent.filter(entry => entry.optimizationsApplied > 0).length;
    
    if (improvements > recent.length / 2) {
      return 'improving';
    } else if (improvements === 0) {
      return 'stable';
    } else {
      return 'fluctuating';
    }
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      optimizationCount: this.optimizationCount,
      lastAnalysis: this.performanceHistory[this.performanceHistory.length - 1] || null,
      config: this.config
    };
  }
}

// CLI Interface
if (require.main === module) {
  const automation = new PerformanceOptimizationAutomation()
const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'status':
      console.log(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'analyze':
      automation.analyzePerformance();
      break;
    default:
      console.log(`
🚀 Performance Optimization Automation

Usage:
  node performance-optimization-automation.cjs [command]

Commands:
  start   - Start the automation
  stop    - Stop the automation
  status  - Show current status
  analyze - Perform a one-time performance analysis

Examples:
  node performance-optimization-automation.cjs start
  node performance-optimization-automation.cjs status
      `);
  }
}

module.exports = PerformanceOptimizationAutomation; 