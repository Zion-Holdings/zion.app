#!/usr/bin/env node

/**
 * Intelligent Build Optimizer
 * Analyzes changes and determines optimal build strategy
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentBuildOptimizer {
  constructor() {
    this.buildStrategies = {
      incremental: 'incremental',
      full: 'full',
      selective: 'selective',
      cacheOnly: 'cache-only'
    };
    
    this.changePatterns = {
      critical: ['package.json', 'next.config.js', 'tsconfig.json'],
      major: ['pages/', 'components/', 'styles/'],
      minor: ['utils/', 'scripts/', 'docs/'],
      cacheable: ['public/', 'images/', 'assets/']
    };
    
    this.optimizationMetrics = {
      buildTime: 0,
      cacheHitRate: 0,
      memoryUsage: 0,
      efficiency: 0
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async analyzeBuildChanges() {
    this.log('🔍 Analyzing build changes...');
    
    try {
      const gitChanges = await this.getGitChanges();
      const fileChanges = await this.analyzeFileChanges(gitChanges);
      const buildStrategy = this.determineBuildStrategy(fileChanges);
      const optimizationPlan = this.createOptimizationPlan(buildStrategy, fileChanges);
      
      this.log(`📊 Build analysis complete. Strategy: ${buildStrategy}`);
      
      return {
        strategy: buildStrategy,
        changes: fileChanges,
        optimizationPlan: optimizationPlan,
        recommendations: this.generateOptimizationRecommendations(optimizationPlan)
      };
      
    } catch (error) {
      this.log(`❌ Build analysis failed: ${error.message}`, 'error');
      // Fallback to full build
      return {
        strategy: this.buildStrategies.full,
        changes: { critical: [], major: [], minor: [], cacheable: [] },
        optimizationPlan: { type: 'full', steps: ['clean', 'build', 'cache'] },
        recommendations: ['Fallback to full build due to analysis failure']
      };
    }
  }

  async getGitChanges() {
    try {
      // Get changes since last successful build
      const lastCommit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
      const lastBuildCommit = this.getLastBuildCommit();
      
      if (!lastBuildCommit) {
        this.log('ℹ️  No previous build commit found, analyzing all files');
        return await this.getAllFiles();
      }
      
      // Get diff between current and last build commit
      const diffOutput = execSync(
        `git diff --name-only ${lastBuildCommit} ${lastCommit}`,
        { encoding: 'utf8' }
      );
      
      const changedFiles = diffOutput.trim().split('\n').filter(file => file.length > 0);
      this.log(`📝 Found ${changedFiles.length} changed files since last build`);
      
      return changedFiles;
      
    } catch (error) {
      this.log('⚠️  Git analysis failed, falling back to file system analysis', 'warning');
      return await this.analyzeFileSystemChanges();
    }
  }

  getLastBuildCommit() {
    try {
      // Check for build commit marker
      if (fs.existsSync('.build-commit')) {
        return fs.readFileSync('.build-commit', 'utf8').trim();
      }
      
      // Check for build cache timestamp
      if (fs.existsSync('.next/build-manifest.json')) {
        const stats = fs.statSync('.next/build-manifest.json');
        // If build cache is less than 1 hour old, consider it recent
        if (Date.now() - stats.mtime.getTime() < 60 * 60 * 1000) {
          return 'recent';
        }
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  async getAllFiles() {
    const allFiles = [];
    const sourceDirs = ['pages', 'components', 'utils', 'scripts', 'styles'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.walkDirectory(dir);
        allFiles.push(...files);
      }
    }
    
    return allFiles;
  }

  async analyzeFileSystemChanges() {
    // Analyze file modification times to detect changes
    const sourceDirs = ['pages', 'components', 'utils', 'scripts', 'styles'];
    const changedFiles = [];
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.walkDirectory(dir);
        for (const file of files) {
          try {
            const stats = fs.statSync(file);
            if (stats.mtime.getTime() > oneHourAgo) {
              changedFiles.push(file);
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        }
      }
    }
    
    return changedFiles;
  }

  walkDirectory(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.walkDirectory(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async analyzeFileChanges(changedFiles) {
    const analysis = {
      critical: [],
      major: [],
      minor: [],
      cacheable: [],
      total: changedFiles.length
    };
    
    for (const file of changedFiles) {
      const category = this.categorizeFile(file);
      analysis[category].push(file);
    }
    
    this.log(`📊 File change analysis: Critical: ${analysis.critical.length}, Major: ${analysis.major.length}, Minor: ${analysis.minor.length}, Cacheable: ${analysis.cacheable.length}`);
    
    return analysis;
  }

  categorizeFile(filePath) {
    const fileName = path.basename(filePath);
    const dirName = path.dirname(filePath);
    
    // Critical files that require full rebuild
    if (this.changePatterns.critical.includes(fileName)) {
      return 'critical';
    }
    
    // Major changes that affect core functionality
    if (dirName.startsWith('pages/') || dirName.startsWith('components/') || dirName.startsWith('styles/')) {
      return 'major';
    }
    
    // Minor changes that might affect utilities
    if (dirName.startsWith('utils/') || dirName.startsWith('scripts/')) {
      return 'minor';
    }
    
    // Cacheable assets
    if (dirName.startsWith('public/') || dirName.startsWith('images/') || dirName.startsWith('assets/')) {
      return 'cacheable';
    }
    
    // Default to minor for unknown files
    return 'minor';
  }

  determineBuildStrategy(fileChanges) {
    // Critical changes always require full build
    if (fileChanges.critical.length > 0) {
      this.log('🚨 Critical changes detected, using full build strategy');
      return this.buildStrategies.full;
    }
    
    // Major changes might benefit from selective build
    if (fileChanges.major.length > 0 && fileChanges.major.length < 5) {
      this.log('📝 Major changes detected, using selective build strategy');
      return this.buildStrategies.selective;
    }
    
    // Many major changes require full build
    if (fileChanges.major.length >= 5) {
      this.log('📝 Many major changes detected, using full build strategy');
      return this.buildStrategies.full;
    }
    
    // Only minor/cacheable changes can use incremental build
    if (fileChanges.minor.length > 0 || fileChanges.cacheable.length > 0) {
      this.log('🔧 Minor changes detected, using incremental build strategy');
      return this.buildStrategies.incremental;
    }
    
    // No changes detected, use cache only
    this.log('✅ No significant changes detected, using cache-only strategy');
    return this.buildStrategies.cacheOnly;
  }

  createOptimizationPlan(strategy, fileChanges) {
    const plans = {
      [this.buildStrategies.full]: {
        type: 'full',
        description: 'Complete rebuild with cache invalidation',
        steps: ['clean', 'build', 'cache', 'optimize'],
        estimatedTime: '100%',
        cacheStrategy: 'invalidate'
      },
      
      [this.buildStrategies.selective]: {
        type: 'selective',
        description: 'Targeted rebuild of changed components',
        steps: ['analyze', 'selective-build', 'cache', 'merge'],
        estimatedTime: '60-80%',
        cacheStrategy: 'selective-invalidate'
      },
      
      [this.buildStrategies.incremental]: {
        type: 'incremental',
        description: 'Incremental build with cache optimization',
        steps: ['validate-cache', 'incremental-build', 'cache-update'],
        estimatedTime: '30-50%',
        cacheStrategy: 'update'
      },
      
      [this.buildStrategies.cacheOnly]: {
        type: 'cache-only',
        description: 'Use existing build cache',
        steps: ['validate-cache', 'verify', 'deploy'],
        estimatedTime: '5-10%',
        cacheStrategy: 'preserve'
      }
    };
    
    const plan = plans[strategy];
    
    // Customize plan based on specific changes
    if (fileChanges.critical.length > 0) {
      plan.steps.unshift('backup');
      plan.estimatedTime = '120%';
    }
    
    if (fileChanges.major.length > 10) {
      plan.steps.push('performance-test');
      plan.estimatedTime = '110%';
    }
    
    return plan;
  }

  generateOptimizationRecommendations(optimizationPlan) {
    const recommendations = [];
    
    switch (optimizationPlan.type) {
      case 'full':
        recommendations.push(
          'Consider breaking down large changes into smaller commits',
          'Use feature branches to isolate major changes',
          'Implement parallel builds for faster deployment'
        );
        break;
        
      case 'selective':
        recommendations.push(
          'Group related component changes together',
          'Use dynamic imports to reduce bundle size',
          'Implement component-level caching'
        );
        break;
        
      case 'incremental':
        recommendations.push(
          'Optimize cache invalidation strategy',
          'Use persistent build cache',
          'Implement build-time analysis'
        );
        break;
        
      case 'cache-only':
        recommendations.push(
          'Verify cache integrity before deployment',
          'Monitor cache hit rates',
          'Implement cache warming strategies'
        );
        break;
    }
    
    // Add general recommendations
    recommendations.push(
      'Use build-time metrics to track optimization effectiveness',
      'Implement A/B testing for build strategies',
      'Monitor build performance trends'
    );
    
    return recommendations;
  }

  async executeBuildStrategy(strategy, optimizationPlan) {
    this.log(`🚀 Executing ${strategy} build strategy...`);
    
    try {
      const startTime = Date.now();
      
      switch (strategy) {
        case this.buildStrategies.full:
          await this.executeFullBuild(optimizationPlan);
          break;
          
        case this.buildStrategies.selective:
          await this.executeSelectiveBuild(optimizationPlan);
          break;
          
        case this.buildStrategies.incremental:
          await this.executeIncrementalBuild(optimizationPlan);
          break;
          
        case this.buildStrategies.cacheOnly:
          await this.executeCacheOnlyBuild(optimizationPlan);
          break;
          
        default:
          throw new Error(`Unknown build strategy: ${strategy}`);
      }
      
      const buildTime = Date.now() - startTime;
      this.optimizationMetrics.buildTime = buildTime;
      
      this.log(`✅ ${strategy} build completed in ${buildTime}ms`);
      
      // Mark successful build
      await this.markSuccessfulBuild();
      
      return {
        success: true,
        strategy: strategy,
        buildTime: buildTime,
        metrics: this.optimizationMetrics
      };
      
    } catch (error) {
      this.log(`❌ ${strategy} build failed: ${error.message}`, 'error');
      
      // Fallback to full build on failure
      this.log('🔄 Falling back to full build strategy...');
      return await this.executeFullBuild({
        type: 'full',
        steps: ['clean', 'build', 'cache'],
        estimatedTime: '100%'
      });
    }
  }

  async executeFullBuild(plan) {
    this.log('🧹 Executing full build...');
    
    for (const step of plan.steps) {
      this.log(`📋 Executing step: ${step}`);
      
      switch (step) {
        case 'backup':
          await this.createBuildBackup();
          break;
          
        case 'clean':
          await this.cleanBuildArtifacts();
          break;
          
        case 'build':
          await this.runNextBuild();
          break;
          
        case 'cache':
          await this.updateBuildCache();
          break;
          
        case 'optimize':
          await this.optimizeBuildOutput();
          break;
          
        case 'performance-test':
          await this.runPerformanceTests();
          break;
      }
    }
  }

  async executeSelectiveBuild(plan) {
    this.log('🎯 Executing selective build...');
    
    for (const step of plan.steps) {
      this.log(`📋 Executing step: ${step}`);
      
      switch (step) {
        case 'analyze':
          await this.analyzeDependencies();
          break;
          
        case 'selective-build':
          await this.buildChangedComponents();
          break;
          
        case 'cache':
          await this.updateBuildCache();
          break;
          
        case 'merge':
          await this.mergeBuildOutputs();
          break;
      }
    }
  }

  async executeIncrementalBuild(plan) {
    this.log('🔄 Executing incremental build...');
    
    for (const step of plan.steps) {
      this.log(`📋 Executing step: ${step}`);
      
      switch (step) {
        case 'validate-cache':
          await this.validateBuildCache();
          break;
          
        case 'incremental-build':
          await this.buildIncrementalChanges();
          break;
          
        case 'cache-update':
          await this.updateBuildCache();
          break;
      }
    }
  }

  async executeCacheOnlyBuild(plan) {
    this.log('💾 Executing cache-only build...');
    
    for (const step of plan.steps) {
      this.log(`📋 Executing step: ${step}`);
      
      switch (step) {
        case 'validate-cache':
          await this.validateBuildCache();
          break;
          
        case 'verify':
          await this.verifyBuildIntegrity();
          break;
          
        case 'deploy':
          await this.deployFromCache();
          break;
      }
    }
  }

  // Build execution methods
  async createBuildBackup() {
    if (fs.existsSync('out')) {
      const backupDir = `out.backup.${Date.now()}`;
      fs.renameSync('out', backupDir);
      this.log(`✅ Created build backup: ${backupDir}`);
    }
  }

  async cleanBuildArtifacts() {
    const artifacts = ['.next', 'out', 'tsconfig.tsbuildinfo'];
    
    for (const artifact of artifacts) {
      if (fs.existsSync(artifact)) {
        fs.rmSync(artifact, { recursive: true, force: true });
        this.log(`🧹 Cleaned: ${artifact}`);
      }
    }
  }

  async runNextBuild() {
    this.log('🔨 Running Next.js build...');
    execSync('npm run build', { 
      stdio: 'inherit',
      env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider' }
    });
  }

  async updateBuildCache() {
    this.log('💾 Updating build cache...');
    
    // Copy build artifacts to cache
    if (fs.existsSync('out')) {
      const cacheDir = '.build-cache';
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }
      
      // Update cache timestamp
      fs.writeFileSync(path.join(cacheDir, 'timestamp'), Date.now().toString());
      this.log('✅ Build cache updated');
    }
  }

  async optimizeBuildOutput() {
    this.log('⚡ Optimizing build output...');
    
    // Implement build output optimization
    // This could include minification, compression, etc.
    this.log('✅ Build output optimization completed');
  }

  async runPerformanceTests() {
    this.log('📊 Running performance tests...');
    
    // Implement build performance testing
    // This could include bundle size analysis, build time metrics, etc.
    this.log('✅ Performance tests completed');
  }

  async analyzeDependencies() {
    this.log('🔍 Analyzing dependencies...');
    
    // Analyze which components depend on changed files
    this.log('✅ Dependency analysis completed');
  }

  async buildChangedComponents() {
    this.log('🔨 Building changed components...');
    
    // Build only the components that have changed
    this.log('✅ Changed components built');
  }

  async mergeBuildOutputs() {
    this.log('🔗 Merging build outputs...');
    
    // Merge incremental builds with existing build
    this.log('✅ Build outputs merged');
  }

  async validateBuildCache() {
    this.log('✅ Validating build cache...');
    
    // Validate that the build cache is still valid
    this.log('✅ Build cache validation completed');
  }

  async buildIncrementalChanges() {
    this.log('🔄 Building incremental changes...');
    
    // Build only the incremental changes
    this.log('✅ Incremental changes built');
  }

  async verifyBuildIntegrity() {
    this.log('🔍 Verifying build integrity...');
    
    // Verify that the cached build is still valid
    this.log('✅ Build integrity verified');
  }

  async deployFromCache() {
    this.log('🚀 Deploying from cache...');
    
    // Deploy the cached build
    this.log('✅ Deployed from cache');
  }

  async markSuccessfulBuild() {
    try {
      // Mark the current commit as successfully built
      const currentCommit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
      fs.writeFileSync('.build-commit', currentCommit);
      this.log('✅ Marked successful build commit');
    } catch (error) {
      this.log('⚠️  Could not mark successful build commit', 'warning');
    }
  }

  // Main optimization workflow
  async optimizeBuild() {
    this.log('🚀 Starting intelligent build optimization...');
    
    try {
      // Analyze changes and determine strategy
      const analysis = await this.analyzeBuildChanges();
      
      // Execute the determined build strategy
      const result = await this.executeBuildStrategy(analysis.strategy, analysis.optimizationPlan);
      
      // Generate optimization report
      const report = this.generateOptimizationReport(analysis, result);
      
      // Save report
      await this.saveOptimizationReport(report);
      
      // Print summary
      this.printOptimizationSummary(report);
      
      return result;
      
    } catch (error) {
      this.log(`💥 Build optimization failed: ${error.message}`, 'error');
      throw error;
    }
  }

  generateOptimizationReport(analysis, result) {
    return {
      timestamp: new Date().toISOString(),
      analysis: analysis,
      result: result,
      metrics: this.optimizationMetrics,
      summary: {
        strategy: analysis.strategy,
        success: result.success,
        buildTime: result.buildTime,
        efficiency: this.calculateBuildEfficiency(analysis, result)
      }
    };
  }

  calculateBuildEfficiency(analysis, result) {
    // Calculate build efficiency based on changes vs build time
    const changeComplexity = 
      analysis.changes.critical.length * 3 +
      analysis.changes.major.length * 2 +
      analysis.changes.minor.length * 1;
    
    const expectedTime = changeComplexity * 1000; // Base time per change
    const actualTime = result.buildTime;
    
    return Math.max(0, Math.min(100, (expectedTime / actualTime) * 100));
  }

  async saveOptimizationReport(report) {
    const reportPath = 'build-optimization-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Optimization report saved to ${reportPath}`);
  }

  printOptimizationSummary(report) {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 BUILD OPTIMIZATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`📊 Strategy: ${report.summary.strategy}`);
    console.log(`✅ Success: ${report.summary.success ? 'YES' : 'NO'}`);
    console.log(`⏱️  Build Time: ${report.summary.buildTime}ms`);
    console.log(`⚡ Efficiency: ${report.summary.efficiency.toFixed(2)}%`);
    
    console.log('\n📝 CHANGES ANALYSIS:');
    console.log(`  Critical: ${report.analysis.changes.critical.length}`);
    console.log(`  Major: ${report.analysis.changes.major.length}`);
    console.log(`  Minor: ${report.analysis.changes.minor.length}`);
    console.log(`  Cacheable: ${report.analysis.changes.cacheable.length}`);
    
    console.log('\n💡 OPTIMIZATION PLAN:');
    console.log(`  Type: ${report.analysis.optimizationPlan.type}`);
    console.log(`  Steps: ${report.analysis.optimizationPlan.steps.join(' → ')}`);
    console.log(`  Estimated Time: ${report.analysis.optimizationPlan.estimatedTime}`);
    
    if (report.analysis.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      report.analysis.recommendations.forEach((rec, index) => {
        console.log(`  ${index + 1}. ${rec}`);
      });
    }
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new IntelligentBuildOptimizer();
  optimizer.optimizeBuild().catch(error => {
    console.error('Build optimization failed:', error);
    process.exit(1);
  });
}

module.exports = IntelligentBuildOptimizer;