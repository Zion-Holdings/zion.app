#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const https = require('https');
const { URL } = require('url');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-intelligent-build-orchestrator.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

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
  const startTime = Date.now();
  try {
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

function runNodeScript(scriptPath, args = []) {
  const fullPath = path.resolve(__dirname, '..', scriptPath);
  const result = spawnSync('node', [fullPath, ...args], { 
    stdio: 'pipe', 
    encoding: 'utf8' 
  });
  return { 
    success: result.status === 0, 
    output: result.stdout || '', 
    error: result.stderr || '',
    duration: 0 // Node scripts don't have timing from spawnSync
  };
}

class NetlifyIntelligentBuildOrchestrator {
  constructor() {
    this.localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
    this.env = { ...this.localEnv, ...process.env };
    this.buildHistory = [];
    this.currentBuild = null;
    this.healthStatus = 'unknown';
    this.lastOptimization = null;
    this.loadBuildHistory();
  }

  loadBuildHistory() {
    try {
      const historyFile = path.join(LOG_DIR, 'build-history.json');
      if (fs.existsSync(historyFile)) {
        this.buildHistory = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      }
    } catch (error) {
      log(`Warning: Could not load build history: ${error.message}`);
      this.buildHistory = [];
    }
  }

  saveBuildHistory() {
    try {
      const historyFile = path.join(LOG_DIR, 'build-history.json');
      fs.writeFileSync(historyFile, JSON.stringify(this.buildHistory, null, 2));
    } catch (error) {
      log(`Warning: Could not save build history: ${error.message}`);
    }
  }

  async assessBuildHealth() {
    log('🏥 Assessing build health...');
    
    const health = {
      timestamp: new Date().toISOString(),
      overall: 'unknown',
      components: {},
      issues: [],
      recommendations: []
    };

    try {
      // Check build optimizer status
      const optimizerResult = runNodeScript('automation/netlify-build-optimizer.cjs', ['analyze']);
      if (optimizerResult.success) {
        health.components.buildOptimizer = 'healthy';
      } else {
        health.components.buildOptimizer = 'unhealthy';
        health.issues.push('Build optimizer analysis failed');
      }

      // Check analytics system
      const analyticsResult = runNodeScript('automation/netlify-build-analytics.cjs', ['collect']);
      if (analyticsResult.success) {
        health.components.buildAnalytics = 'healthy';
      } else {
        health.components.buildAnalytics = 'unhealthy';
        health.issues.push('Build analytics collection failed');
      }

      // Check auto-healer status
      const healerResult = runNodeScript('automation/netlify-auto-healer.cjs');
      if (healerResult.success) {
        health.components.autoHealer = 'healthy';
      } else {
        health.components.autoHealer = 'unhealthy';
        health.issues.push('Auto-healer check failed');
      }

      // Check file system health
      const fsHealth = await this.checkFileSystemHealth();
      health.components.fileSystem = fsHealth.status;
      if (fsHealth.issues.length > 0) {
        health.issues.push(...fsHealth.issues);
      }

      // Check dependency health
      const depHealth = await this.checkDependencyHealth();
      health.components.dependencies = depHealth.status;
      if (depHealth.issues.length > 0) {
        health.issues.push(...depHealth.issues);
      }

      // Determine overall health
      const componentCount = Object.keys(health.components).length;
      const healthyComponents = Object.values(health.components).filter(c => c === 'healthy').length;
      const unhealthyComponents = Object.values(health.components).filter(c => c === 'unhealthy').length;

      if (unhealthyComponents === 0) {
        health.overall = 'excellent';
      } else if (unhealthyComponents <= componentCount * 0.25) {
        health.overall = 'good';
      } else if (unhealthyComponents <= componentCount * 0.5) {
        health.overall = 'fair';
      } else {
        health.overall = 'poor';
      }

      // Generate recommendations
      health.recommendations = this.generateHealthRecommendations(health);

      this.healthStatus = health.overall;
      return health;

    } catch (error) {
      log(`❌ Error assessing build health: ${error.message}`);
      health.overall = 'error';
      health.issues.push(`Health assessment failed: ${error.message}`);
      return health;
    }
  }

  async checkFileSystemHealth() {
    const health = {
      status: 'unknown',
      issues: [],
      warnings: []
    };

    try {
      const criticalPaths = [
        'package.json',
        'next.config.js',
        'netlify.toml',
        'pages',
        'components'
      ];

      let missingPaths = 0;
      for (const path of criticalPaths) {
        if (!fs.existsSync(path)) {
          missingPaths++;
          health.issues.push(`Critical path missing: ${path}`);
        }
      }

      // Check for build artifacts that might cause conflicts
      const buildPaths = ['.next', 'out', 'tsconfig.tsbuildinfo'];
      for (const buildPath of buildPaths) {
        if (fs.existsSync(buildPath)) {
          const stats = fs.statSync(buildPath);
          const hoursSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
          
          if (hoursSinceModified > 48) {
            health.warnings.push(`Build artifact ${buildPath} is older than 48 hours`);
          }
        }
      }

      // Check for large files that might slow builds
      const largeFiles = await this.findLargeFiles();
      if (largeFiles.length > 0) {
        health.warnings.push(`Large files detected that may impact build performance: ${largeFiles.join(', ')}`);
      }

      if (health.issues.length === 0 && health.warnings.length === 0) {
        health.status = 'healthy';
      } else if (health.issues.length === 0) {
        health.status = 'warning';
      } else {
        health.status = 'unhealthy';
      }

    } catch (error) {
      health.status = 'error';
      health.issues.push(`File system health check failed: ${error.message}`);
    }

    return health;
  }

  async findLargeFiles() {
    const largeFiles = [];
    const maxSize = 10 * 1024 * 1024; // 10MB

    try {
      const directories = ['public', 'pages', 'components', 'styles'];
      
      for (const dir of directories) {
        if (fs.existsSync(dir)) {
          const files = this.scanDirectoryForLargeFiles(dir, maxSize);
          largeFiles.push(...files);
        }
      }
    } catch (error) {
      log(`Warning: Could not scan for large files: ${error.message}`);
    }

    return largeFiles.slice(0, 5); // Return top 5 largest files
  }

  scanDirectoryForLargeFiles(dirPath, maxSize) {
    const largeFiles = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          const subFiles = this.scanDirectoryForLargeFiles(itemPath, maxSize);
          largeFiles.push(...subFiles);
        } else if (stats.size > maxSize) {
          largeFiles.push({
            path: itemPath,
            size: stats.size,
            sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
          });
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }

    return largeFiles.sort((a, b) => b.size - a.size);
  }

  async checkDependencyHealth() {
    const health = {
      status: 'unknown',
      issues: [],
      warnings: []
    };

    try {
      // Check for outdated packages
      const outdatedResult = runCommand('npm outdated --json', { stdio: 'pipe' });
      if (outdatedResult.success && outdatedResult.output) {
        try {
          const outdated = JSON.parse(outdatedResult.output);
          const outdatedCount = Object.keys(outdated).length;
          
          if (outdatedCount > 10) {
            health.issues.push(`${outdatedCount} outdated packages detected`);
          } else if (outdatedCount > 5) {
            health.warnings.push(`${outdatedCount} outdated packages detected`);
          }
        } catch (parseError) {
          // npm outdated output might not be valid JSON
        }
      }

      // Check for vulnerabilities
      const auditResult = runCommand('npm audit --json', { stdio: 'pipe' });
      if (auditResult.success && auditResult.output) {
        try {
          const audit = JSON.parse(auditResult.output);
          const vulnerabilities = audit.metadata?.vulnerabilities || {};
          const criticalVulns = vulnerabilities.critical || 0;
          const highVulns = vulnerabilities.high || 0;
          
          if (criticalVulns > 0) {
            health.issues.push(`${criticalVulns} critical vulnerabilities detected`);
          }
          if (highVulns > 5) {
            health.issues.push(`${highVulns} high vulnerabilities detected`);
          } else if (highVulns > 0) {
            health.warnings.push(`${highVulns} high vulnerabilities detected`);
          }
        } catch (parseError) {
          // npm audit output might not be valid JSON
        }
      }

      // Check package-lock.json age
      const lockFile = 'package-lock.json';
      if (fs.existsSync(lockFile)) {
        const stats = fs.statSync(lockFile);
        const hoursSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (hoursSinceModified > 168) { // > 1 week
          health.warnings.push('package-lock.json is older than 1 week');
        }
      }

      if (health.issues.length === 0 && health.warnings.length === 0) {
        health.status = 'healthy';
      } else if (health.issues.length === 0) {
        health.status = 'warning';
      } else {
        health.status = 'unhealthy';
      }

    } catch (error) {
      health.status = 'error';
      health.issues.push(`Dependency health check failed: ${error.message}`);
    }

    return health;
  }

  generateHealthRecommendations(health) {
    const recommendations = [];

    if (health.overall === 'poor' || health.overall === 'error') {
      recommendations.push({
        priority: 'critical',
        action: 'Run full system diagnostics and repair',
        description: 'System health is poor. Immediate attention required.'
      });
    }

    if (health.components.buildOptimizer === 'unhealthy') {
      recommendations.push({
        priority: 'high',
        action: 'Repair build optimizer system',
        description: 'Build optimization system is not functioning properly.'
      });
    }

    if (health.components.buildAnalytics === 'unhealthy') {
      recommendations.push({
        priority: 'medium',
        action: 'Repair build analytics system',
        description: 'Build analytics system is not collecting data properly.'
      });
    }

    if (health.components.autoHealer === 'unhealthy') {
      recommendations.push({
        priority: 'high',
        action: 'Repair auto-healer system',
        description: 'Auto-healing system is not functioning properly.'
      });
    }

    if (health.components.fileSystem === 'unhealthy') {
      recommendations.push({
        priority: 'high',
        action: 'Repair file system issues',
        description: 'Critical file system problems detected.'
      });
    }

    if (health.components.dependencies === 'unhealthy') {
      recommendations.push({
        priority: 'high',
        action: 'Update dependencies and fix vulnerabilities',
        description: 'Dependency health issues detected.'
      });
    }

    return recommendations;
  }

  async runIntelligentBuild() {
    log('🧠 Starting intelligent build process...');
    
    const buildSession = {
      id: `build-${Date.now()}`,
      startTime: new Date().toISOString(),
      steps: [],
      results: {},
      status: 'running'
    };

    try {
      // Step 1: Health Assessment
      log('📋 Step 1: Assessing build health...');
      const health = await this.assessBuildHealth();
      buildSession.steps.push({
        step: 'health_assessment',
        status: 'completed',
        result: health.overall,
        details: health
      });

      // Step 2: Pre-build Optimization
      log('🔧 Step 2: Running pre-build optimization...');
      const optimizerResult = runNodeScript('automation/netlify-build-optimizer.cjs', ['fix']);
      buildSession.steps.push({
        step: 'pre_build_optimization',
        status: optimizerResult.success ? 'completed' : 'failed',
        result: optimizerResult.success ? 'optimized' : 'failed',
        details: optimizerResult
      });

      // Step 3: Build Analytics Collection
      log('📊 Step 3: Collecting build analytics...');
      const analyticsResult = runNodeScript('automation/netlify-build-analytics.cjs', ['collect']);
      buildSession.steps.push({
        step: 'build_analytics',
        status: analyticsResult.success ? 'completed' : 'failed',
        result: analyticsResult.success ? 'collected' : 'failed',
        details: analyticsResult
      });

      // Step 4: Actual Build Process
      log('🏗️ Step 4: Executing build process...');
      const buildResult = await this.executeBuild();
      buildSession.steps.push({
        step: 'build_execution',
        status: buildResult.success ? 'completed' : 'failed',
        result: buildResult.success ? 'built' : 'failed',
        details: buildResult
      });

      // Step 5: Post-build Analysis
      log('🔍 Step 5: Post-build analysis...');
      const postBuildAnalysis = await this.analyzePostBuild();
      buildSession.steps.push({
        step: 'post_build_analysis',
        status: 'completed',
        result: 'analyzed',
        details: postBuildAnalysis
      });

      // Step 6: Health Reassessment
      log('🏥 Step 6: Reassessing build health...');
      const postHealth = await this.assessBuildHealth();
      buildSession.steps.push({
        step: 'post_build_health',
        status: 'completed',
        result: postHealth.overall,
        details: postHealth
      });

      // Determine overall build success
      const failedSteps = buildSession.steps.filter(step => step.status === 'failed');
      if (failedSteps.length === 0) {
        buildSession.status = 'success';
        log('✅ Intelligent build completed successfully!');
      } else {
        buildSession.status = 'partial_success';
        log(`⚠️ Intelligent build completed with ${failedSteps.length} failed steps`);
      }

      // Save build session
      buildSession.endTime = new Date().toISOString();
      buildSession.duration = new Date(buildSession.endTime) - new Date(buildSession.startTime);
      
      this.buildHistory.push(buildSession);
      this.saveBuildHistory();

      return buildSession;

    } catch (error) {
      log(`❌ Intelligent build failed: ${error.message}`);
      buildSession.status = 'failed';
      buildSession.error = error.message;
      buildSession.endTime = new Date().toISOString();
      
      this.buildHistory.push(buildSession);
      this.saveBuildHistory();
      
      throw error;
    }
  }

  async executeBuild() {
    log('🚀 Executing build process...');
    
    try {
      // Use the optimized build script if available
      const buildScript = './automation/build-optimized.sh';
      if (fs.existsSync(buildScript)) {
        const result = runCommand(`bash ${buildScript}`);
        return result;
      } else {
        // Fallback to standard build
        const result = runCommand('npm run build');
        return result;
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        duration: 0
      };
    }
  }

  async analyzePostBuild() {
    log('🔍 Analyzing post-build state...');
    
    try {
      const analysis = {
        buildArtifacts: {},
        performance: {},
        recommendations: []
      };

      // Check build output
      if (fs.existsSync('out')) {
        const stats = fs.statSync('out');
        analysis.buildArtifacts.output = {
          exists: true,
          size: this.getDirectorySize('out'),
          modified: stats.mtime.toISOString()
        };
      } else {
        analysis.buildArtifacts.output = { exists: false, size: 0, modified: null };
      }

      // Check Next.js build
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        analysis.buildArtifacts.next = {
          exists: true,
          size: this.getDirectorySize('.next'),
          modified: stats.mtime.toISOString()
        };
      } else {
        analysis.buildArtifacts.next = { exists: false, size: 0, modified: null };
      }

      // Generate recommendations
      if (analysis.buildArtifacts.output.exists && analysis.buildArtifacts.output.size > 100 * 1024 * 1024) {
        analysis.recommendations.push({
          priority: 'medium',
          action: 'Optimize build output size',
          description: 'Build output exceeds 100MB. Consider optimizing static assets and removing unnecessary files.'
        });
      }

      return analysis;

    } catch (error) {
      log(`❌ Post-build analysis failed: ${error.message}`);
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
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

  async generateIntelligenceReport() {
    log('📊 Generating intelligence report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        systemHealth: this.healthStatus,
        buildHistory: this.buildHistory.slice(-10), // Last 10 builds
        recommendations: [],
        nextActions: []
      };

      // Analyze build history
      if (this.buildHistory.length > 0) {
        const recentBuilds = this.buildHistory.slice(-5);
        const successRate = recentBuilds.filter(b => b.status === 'success').length / recentBuilds.length;
        
        if (successRate < 0.8) {
          report.recommendations.push({
            priority: 'high',
            action: 'Investigate build failures',
            description: `Build success rate is ${(successRate * 100).toFixed(1)}%. Recent failures need investigation.`
          });
        }

        // Check for performance trends
        const buildTimes = recentBuilds.map(b => b.duration || 0).filter(t => t > 0);
        if (buildTimes.length > 1) {
          const avgTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;
          if (avgTime > 120000) { // > 2 minutes
            report.recommendations.push({
              priority: 'medium',
              action: 'Optimize build performance',
              description: `Average build time is ${(avgTime / 1000).toFixed(1)} seconds. Consider build optimizations.`
            });
          }
        }
      }

      // Generate next actions based on current health
      if (this.healthStatus === 'poor' || this.healthStatus === 'error') {
        report.nextActions.push('Run full system repair');
        report.nextActions.push('Investigate critical issues');
        report.nextActions.push('Review build configuration');
      } else if (this.healthStatus === 'fair') {
        report.nextActions.push('Address warning issues');
        report.nextActions.push('Optimize build process');
      } else {
        report.nextActions.push('Continue monitoring');
        report.nextActions.push('Plan next optimization cycle');
      }

      // Save report
      const reportPath = path.join(LOG_DIR, `intelligence-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      log(`📄 Intelligence report saved to: ${reportPath}`);

      return report;

    } catch (error) {
      log(`❌ Error generating intelligence report: ${error.message}`);
      throw error;
    }
  }

  async runFullIntelligenceCycle() {
    log('🧠 Starting full intelligence cycle...');
    
    try {
      // Run intelligent build
      const buildResult = await this.runIntelligentBuild();
      
      // Generate intelligence report
      const report = await this.generateIntelligenceReport();
      
      log('✅ Full intelligence cycle completed!');
      log(`📊 Build Status: ${buildResult.status.toUpperCase()}`);
      log(`🏥 System Health: ${this.healthStatus.toUpperCase()}`);
      log(`💡 Recommendations: ${report.recommendations.length}`);
      
      return {
        build: buildResult,
        report: report,
        summary: {
          buildSuccess: buildResult.status === 'success',
          systemHealth: this.healthStatus,
          recommendationsCount: report.recommendations.length,
          nextActions: report.nextActions
        }
      };
      
    } catch (error) {
      log(`❌ Full intelligence cycle failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new NetlifyIntelligentBuildOrchestrator();
  
  const command = process.argv[2] || 'full';
  
  switch (command) {
    case 'health':
      orchestrator.assessBuildHealth().then(console.log);
      break;
    case 'build':
      orchestrator.runIntelligentBuild().then(console.log);
      break;
    case 'report':
      orchestrator.generateIntelligenceReport().then(console.log);
      break;
    case 'full':
    default:
      orchestrator.runFullIntelligenceCycle().then(console.log);
      break;
  }
}

module.exports = NetlifyIntelligentBuildOrchestrator;
