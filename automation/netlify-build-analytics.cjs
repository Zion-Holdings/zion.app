#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const https = require('https');
const { URL } = require('url');

const LOG_DIR = path.join(__dirname, 'logs');
const ANALYTICS_DIR = path.join(__dirname, 'analytics');
const LOG_FILE = path.join(LOG_DIR, 'netlify-build-analytics.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(ANALYTICS_DIR)) fs.mkdirSync(ANALYTICS_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function loadEnvFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split(/\r?\n/).reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return acc;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) return acc;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim().replace(/^"|"$/g, '');
      if (key) acc[key] = value;
      return acc;
    }, {});
  } catch {
    return {};
  }
}

function runCommand(command, options = {}) {
  try {
    const startTime = Date.now();
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    const duration = Date.now() - startTime;
    return { success: true, output: result, error: null, duration };
  } catch (error) {
    const duration = Date.now() - startTime;
    return { 
      success: false, 
      output: error.stdout || '', 
      error: error.stderr || error.message,
      duration 
    };
  }
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

class NetlifyBuildAnalytics {
  constructor() {
    this.localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
    this.env = { ...this.localEnv, ...process.env };
    this.metrics = {};
    this.history = [];
    this.loadHistory();
  }

  loadHistory() {
    try {
      const historyFile = path.join(ANALYTICS_DIR, 'build-history.json');
      if (fs.existsSync(historyFile)) {
        this.history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      }
    } catch (error) {
      log(`Warning: Could not load build history: ${error.message}`);
      this.history = [];
    }
  }

  saveHistory() {
    try {
      const historyFile = path.join(ANALYTICS_DIR, 'build-history.json');
      fs.writeFileSync(historyFile, JSON.stringify(this.history, null, 2));
    } catch (error) {
      log(`Warning: Could not save build history: ${error.message}`);
    }
  }

  async collectBuildMetrics() {
    log('📊 Collecting build metrics...');
    
    const startTime = Date.now();
    const metrics = {
      timestamp: new Date().toISOString(),
      buildId: `build-${Date.now()}`,
      environment: {},
      performance: {},
      dependencies: {},
      fileSystem: {},
      buildArtifacts: {},
      errors: []
    };

    try {
      // Environment metrics
      metrics.environment = {
        nodeVersion: process.version,
        npmVersion: '',
        platform: process.platform,
        arch: process.arch,
        memoryUsage: process.memoryUsage(),
        envVars: {
          hasNodeOptions: !!this.env.NODE_OPTIONS,
          hasNextTelemetry: !!this.env.NEXT_TELEMETRY_DISABLED,
          hasCi: !!this.env.CI,
          nodeOptions: this.env.NODE_OPTIONS || 'not set'
        }
      };

      // Get npm version
      const npmResult = runCommand('npm --version');
      if (npmResult.success) {
        metrics.environment.npmVersion = npmResult.output.trim();
      }

      // Performance metrics
      metrics.performance = {
        startTime: startTime,
        collectionTime: 0
      };

      // Dependencies analysis
      metrics.dependencies = await this.analyzeDependencies();

      // File system analysis
      metrics.fileSystem = await this.analyzeFileSystem();

      // Build artifacts analysis
      metrics.buildArtifacts = await this.analyzeBuildArtifacts();

      // Performance timing
      metrics.performance.collectionTime = Date.now() - startTime;

      this.metrics = metrics;
      return metrics;

    } catch (error) {
      log(`❌ Error collecting metrics: ${error.message}`);
      metrics.errors.push(error.message);
      this.metrics = metrics;
      return metrics;
    }
  }

  async analyzeDependencies() {
    try {
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const dependencies = {
        total: 0,
        production: 0,
        development: 0,
        peer: 0,
        optional: 0,
        outdated: 0,
        vulnerable: 0,
        size: 0
      };

      // Count dependencies
      if (packageJson.dependencies) {
        dependencies.production = Object.keys(packageJson.dependencies).length;
        dependencies.total += dependencies.production;
      }
      
      if (packageJson.devDependencies) {
        dependencies.development = Object.keys(packageJson.devDependencies).length;
        dependencies.total += dependencies.development;
      }
      
      if (packageJson.peerDependencies) {
        dependencies.peer = Object.keys(packageJson.peerDependencies).length;
        dependencies.total += dependencies.peer;
      }
      
      if (packageJson.optionalDependencies) {
        dependencies.optional = Object.keys(packageJson.optionalDependencies).length;
        dependencies.total += dependencies.optional;
      }

      // Check for outdated packages
      try {
        const outdatedResult = runCommand('npm outdated --json', { stdio: 'pipe' });
        if (outdatedResult.success && outdatedResult.output) {
          const outdated = JSON.parse(outdatedResult.output);
          dependencies.outdated = Object.keys(outdated).length;
        }
      } catch (error) {
        // npm outdated might fail, that's okay
      }

      // Check for vulnerabilities
      try {
        const auditResult = runCommand('npm audit --json', { stdio: 'pipe' });
        if (auditResult.success && auditResult.output) {
          const audit = JSON.parse(auditResult.output);
          dependencies.vulnerable = audit.metadata?.vulnerabilities?.total || 0;
        }
      } catch (error) {
        // npm audit might fail, that's okay
      }

      // Calculate node_modules size
      const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
      dependencies.size = getDirectorySize(nodeModulesPath);

      return dependencies;

    } catch (error) {
      log(`Warning: Could not analyze dependencies: ${error.message}`);
      return { error: error.message };
    }
  }

  async analyzeFileSystem() {
    try {
      const analysis = {
        projectSize: 0,
        directories: {},
        files: {},
        buildFiles: {}
      };

      // Analyze project structure
      const projectRoot = path.join(__dirname, '..');
      const directories = ['pages', 'components', 'styles', 'public', 'utils', 'automation'];
      
      for (const dir of directories) {
        const dirPath = path.join(projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          analysis.directories[dir] = {
            exists: true,
            size: getDirectorySize(dirPath),
            fileCount: this.countFiles(dirPath)
          };
        } else {
          analysis.directories[dir] = { exists: false, size: 0, fileCount: 0 };
        }
      }

      // Analyze build-related files
      const buildFiles = [
        'next.config.js',
        'netlify.toml',
        'package.json',
        'tsconfig.json',
        '.next',
        'out',
        'tsconfig.tsbuildinfo'
      ];

      for (const file of buildFiles) {
        const filePath = path.join(projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          analysis.buildFiles[file] = {
            exists: true,
            size: stats.isDirectory() ? getDirectorySize(filePath) : stats.size,
            modified: stats.mtime.toISOString(),
            isDirectory: stats.isDirectory()
          };
        } else {
          analysis.buildFiles[file] = { exists: false, size: 0, modified: null, isDirectory: false };
        }
      }

      // Calculate total project size
      analysis.projectSize = getDirectorySize(projectRoot);

      return analysis;

    } catch (error) {
      log(`Warning: Could not analyze file system: ${error.message}`);
      return { error: error.message };
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

  async analyzeBuildArtifacts() {
    try {
      const analysis = {
        nextBuild: {},
        netlifyBuild: {},
        staticAssets: {},
        functions: {}
      };

      // Analyze Next.js build
      const nextPath = path.join(__dirname, '..', '.next');
      if (fs.existsSync(nextPath)) {
        analysis.nextBuild = {
          exists: true,
          size: getDirectorySize(nextPath),
          modified: fs.statSync(nextPath).mtime.toISOString(),
          subdirectories: this.analyzeSubdirectories(nextPath)
        };
      } else {
        analysis.nextBuild = { exists: false, size: 0, modified: null, subdirectories: {} };
      }

      // Analyze Netlify build output
      const outPath = path.join(__dirname, '..', 'out');
      if (fs.existsSync(outPath)) {
        analysis.netlifyBuild = {
          exists: true,
          size: getDirectorySize(outPath),
          modified: fs.statSync(outPath).mtime.toISOString(),
          subdirectories: this.analyzeSubdirectories(outPath)
        };
      } else {
        analysis.netlifyBuild = { exists: false, size: 0, modified: null, subdirectories: {} };
      }

      // Analyze static assets
      const publicPath = path.join(__dirname, '..', 'public');
      if (fs.existsSync(publicPath)) {
        analysis.staticAssets = {
          exists: true,
          size: getDirectorySize(publicPath),
          modified: fs.statSync(publicPath).mtime.toISOString(),
          subdirectories: this.analyzeSubdirectories(publicPath)
        };
      } else {
        analysis.staticAssets = { exists: false, size: 0, modified: null, subdirectories: {} };
      }

      // Analyze Netlify functions
      const functionsPath = path.join(__dirname, '..', 'netlify', 'functions');
      if (fs.existsSync(functionsPath)) {
        analysis.functions = {
          exists: true,
          size: getDirectorySize(functionsPath),
          modified: fs.statSync(functionsPath).mtime.toISOString(),
          count: this.countFiles(functionsPath),
          subdirectories: this.analyzeSubdirectories(functionsPath)
        };
      } else {
        analysis.functions = { exists: false, size: 0, modified: null, count: 0, subdirectories: {} };
      }

      return analysis;

    } catch (error) {
      log(`Warning: Could not analyze build artifacts: ${error.message}`);
      return { error: error.message };
    }
  }

  analyzeSubdirectories(dirPath) {
    try {
      const subdirs = {};
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          subdirs[item] = {
            size: getDirectorySize(itemPath),
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

  async analyzeBuildPerformance() {
    log('⚡ Analyzing build performance...');
    
    const performance = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      analysis: {},
      recommendations: []
    };

    try {
      // Analyze build times
      if (this.history.length > 0) {
        const recentBuilds = this.history.slice(-10); // Last 10 builds
        const buildTimes = recentBuilds.map(build => build.performance?.collectionTime || 0);
        
        performance.analysis.buildTimes = {
          recent: buildTimes,
          average: buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length,
          min: Math.min(...buildTimes),
          max: Math.max(...buildTimes),
          trend: this.calculateTrend(buildTimes)
        };
      }

      // Analyze file sizes
      const fileSizes = this.metrics.buildArtifacts;
      if (fileSizes.nextBuild && fileSizes.nextBuild.exists) {
        performance.analysis.fileSizes = {
          nextBuild: fileSizes.nextBuild.size,
          netlifyBuild: fileSizes.netlifyBuild?.size || 0,
          total: (fileSizes.nextBuild.size || 0) + (fileSizes.netlifyBuild?.size || 0)
        };
      }

      // Analyze dependencies
      const deps = this.metrics.dependencies;
      if (deps.total > 0) {
        performance.analysis.dependencies = {
          total: deps.total,
          outdated: deps.outdated,
          vulnerable: deps.vulnerable,
          health: this.calculateDependencyHealth(deps)
        };
      }

      // Generate recommendations
      performance.recommendations = this.generateRecommendations(performance.analysis);

      return performance;

    } catch (error) {
      log(`❌ Error analyzing performance: ${error.message}`);
      return { error: error.message };
    }
  }

  calculateTrend(values) {
    if (values.length < 2) return 'insufficient_data';
    
    const recent = values.slice(-3);
    const previous = values.slice(-6, -3);
    
    if (recent.length === 0 || previous.length === 0) return 'insufficient_data';
    
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const previousAvg = previous.reduce((a, b) => a + b, 0) / previous.length;
    
    if (recentAvg < previousAvg * 0.9) return 'improving';
    if (recentAvg > previousAvg * 1.1) return 'degrading';
    return 'stable';
  }

  calculateDependencyHealth(deps) {
    if (deps.total === 0) return 'unknown';
    
    const outdatedRatio = deps.outdated / deps.total;
    const vulnerableRatio = deps.vulnerable / deps.total;
    
    if (vulnerableRatio > 0.1) return 'critical';
    if (vulnerableRatio > 0.05 || outdatedRatio > 0.3) return 'poor';
    if (vulnerableRatio > 0.02 || outdatedRatio > 0.2) return 'fair';
    if (vulnerableRatio > 0.01 || outdatedRatio > 0.1) return 'good';
    return 'excellent';
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // Build time recommendations
    if (analysis.buildTimes) {
      if (analysis.buildTimes.average > 30000) { // > 30 seconds
        recommendations.push({
          priority: 'high',
          category: 'performance',
          title: 'Optimize build times',
          description: 'Build times are averaging over 30 seconds. Consider incremental builds and dependency optimization.',
          action: 'Review build configuration and consider build caching strategies'
        });
      }
      
      if (analysis.buildTimes.trend === 'degrading') {
        recommendations.push({
          priority: 'medium',
          category: 'performance',
          title: 'Investigate build time degradation',
          description: 'Build times are trending upward. Check for new dependencies or configuration changes.',
          action: 'Analyze recent changes and optimize build process'
        });
      }
    }

    // File size recommendations
    if (analysis.fileSizes) {
      if (analysis.fileSizes.total > 100 * 1024 * 1024) { // > 100MB
        recommendations.push({
          priority: 'medium',
          category: 'optimization',
          title: 'Reduce build artifact size',
          description: 'Build artifacts exceed 100MB. Consider cleaning up unnecessary files and optimizing dependencies.',
          action: 'Review and clean build outputs, optimize bundle sizes'
        });
      }
    }

    // Dependency recommendations
    if (analysis.dependencies) {
      if (analysis.dependencies.health === 'critical') {
        recommendations.push({
          priority: 'critical',
          category: 'security',
          title: 'Address security vulnerabilities',
          description: 'Critical security vulnerabilities detected in dependencies.',
          action: 'Run npm audit fix and update vulnerable packages immediately'
        });
      }
      
      if (analysis.dependencies.outdated > analysis.dependencies.total * 0.2) {
        recommendations.push({
          priority: 'medium',
          category: 'maintenance',
          title: 'Update outdated dependencies',
          description: 'Over 20% of dependencies are outdated. Regular updates improve security and performance.',
          action: 'Review and update dependencies systematically'
        });
      }
    }

    return recommendations;
  }

  async generateReport() {
    log('📊 Generating comprehensive build analytics report...');
    
    try {
      // Collect current metrics
      await this.collectBuildMetrics();
      
      // Analyze performance
      const performance = await this.analyzeBuildPerformance();
      
      // Create comprehensive report
      const report = {
        timestamp: new Date().toISOString(),
        buildId: this.metrics.buildId,
        metrics: this.metrics,
        performance: performance,
        summary: {
          totalMetrics: Object.keys(this.metrics).length,
          recommendations: performance.recommendations.length,
          criticalIssues: performance.recommendations.filter(r => r.priority === 'critical').length,
          buildHealth: this.calculateOverallBuildHealth(performance)
        }
      };

      // Save report
      const reportPath = path.join(ANALYTICS_DIR, `build-analytics-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Update history
      this.history.push({
        timestamp: report.timestamp,
        buildId: report.buildId,
        performance: report.performance,
        summary: report.summary
      });
      
      // Keep only last 100 builds
      if (this.history.length > 100) {
        this.history = this.history.slice(-100);
      }
      
      this.saveHistory();
      
      log(`📄 Analytics report saved to: ${reportPath}`);
      return report;

    } catch (error) {
      log(`❌ Error generating report: ${error.message}`);
      throw error;
    }
  }

  calculateOverallBuildHealth(performance) {
    const criticalIssues = performance.recommendations.filter(r => r.priority === 'critical').length;
    const highIssues = performance.recommendations.filter(r => r.priority === 'high').length;
    
    if (criticalIssues > 0) return 'critical';
    if (highIssues > 2) return 'poor';
    if (highIssues > 0) return 'fair';
    return 'good';
  }

  async runFullAnalysis() {
    log('🚀 Starting full build analytics analysis...');
    
    try {
      const report = await this.generateReport();
      
      log('✅ Build analytics analysis completed!');
      log(`📊 Summary: ${report.summary.totalMetrics} metrics collected, ${report.summary.recommendations} recommendations generated`);
      log(`🏥 Build Health: ${report.summary.buildHealth.toUpperCase()}`);
      
      if (report.performance.recommendations.length > 0) {
        log('💡 Recommendations:');
        report.performance.recommendations.forEach(rec => {
          log(`  [${rec.priority.toUpperCase()}] ${rec.title}: ${rec.description}`);
        });
      }
      
      return report;
      
    } catch (error) {
      log(`❌ Build analytics analysis failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const analytics = new NetlifyBuildAnalytics();
  
  const command = process.argv[2] || 'full';
  
  switch (command) {
    case 'collect':
      analytics.collectBuildMetrics().then(console.log);
      break;
    case 'analyze':
      analytics.analyzeBuildPerformance().then(console.log);
      break;
    case 'report':
      analytics.generateReport().then(console.log);
      break;
    case 'full':
    default:
      analytics.runFullAnalysis().then(console.log);
      break;
  }
}

module.exports = NetlifyBuildAnalytics;
