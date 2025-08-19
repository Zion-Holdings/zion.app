#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-comprehensive-build-automator.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class NetlifyComprehensiveBuildAutomator {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.components = {
      optimizer: null,
      analytics: null,
      orchestrator: null,
      artifactOptimizer: null,
      errorAnalyzer: null
    };
    this.buildHistory = [];
    this.performanceMetrics = {};
  }

  async initializeComponents() {
    log('🔧 Initializing Netlify build automation components...');
    
    try {
      // Dynamically load components
      this.components.optimizer = require('./netlify-build-optimizer.cjs');
      this.components.analytics = require('./netlify-build-analytics.cjs');
      this.components.orchestrator = require('./netlify-intelligent-build-orchestrator.cjs');
      this.components.artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      this.components.errorAnalyzer = require('./netlify-build-error-analyzer.cjs');
      
      log('✅ All components initialized successfully');
      return true;
    } catch (error) {
      log(`❌ Failed to initialize components: ${error.message}`);
      return false;
    }
  }

  async runComprehensiveBuild() {
    log('🚀 Starting comprehensive Netlify build automation...');
    
    const startTime = Date.now();
    const buildSession = {
      id: `build-${Date.now()}`,
      timestamp: new Date().toISOString(),
      phases: [],
      results: {},
      summary: {
        success: false,
        duration: 0,
        issues: [],
        optimizations: []
      }
    };

    try {
      // Phase 1: Pre-build Analysis and Optimization
      log('📊 Phase 1: Pre-build Analysis and Optimization');
      const preBuildPhase = await this.runPreBuildPhase();
      buildSession.phases.push(preBuildPhase);

      // Phase 2: Build Execution
      log('🔨 Phase 2: Build Execution');
      const buildPhase = await this.runBuildPhase();
      buildSession.phases.push(buildPhase);

      // Phase 3: Post-build Analysis and Optimization
      log('📈 Phase 3: Post-build Analysis and Optimization');
      const postBuildPhase = await this.runPostBuildPhase();
      buildSession.phases.push(postBuildPhase);

      // Phase 4: Final Assessment and Recommendations
      log('🎯 Phase 4: Final Assessment and Recommendations');
      const assessmentPhase = await this.runAssessmentPhase(buildSession);
      buildSession.phases.push(assessmentPhase);

      // Calculate final summary
      const duration = Date.now() - startTime;
      buildSession.summary.duration = duration;
      buildSession.summary.success = buildPhase.success;
      buildSession.summary.issues = this.collectAllIssues(buildSession.phases);
      buildSession.summary.optimizations = this.collectAllOptimizations(buildSession.phases);

      // Save build session
      this.buildHistory.push(buildSession);
      const reportPath = path.join(LOG_DIR, `comprehensive-build-${buildSession.id}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(buildSession, null, 2));

      log('✅ Comprehensive build automation completed!');
      log(`📊 Summary: ${buildSession.summary.success ? 'SUCCESS' : 'FAILED'} in ${(duration / 1000).toFixed(2)}s`);
      log(`📄 Full report saved to: ${reportPath}`);

      return buildSession;

    } catch (error) {
      log(`❌ Comprehensive build automation failed: ${error.message}`);
      buildSession.summary.success = false;
      buildSession.summary.error = error.message;
      throw error;
    }
  }

  async runPreBuildPhase() {
    const phase = {
      name: 'pre_build',
      startTime: Date.now(),
      steps: [],
      results: {}
    };

    try {
      // Step 1: Health Check
      log('🏥 Running system health check...');
      const healthCheck = await this.runHealthCheck();
      phase.steps.push({ name: 'health_check', ...healthCheck });

      // Step 2: Build Optimization
      log('🔧 Running build optimization...');
      const optimization = await this.runBuildOptimization();
      phase.steps.push({ name: 'build_optimization', ...optimization });

      // Step 3: Artifact Cleanup
      log('🧹 Running artifact cleanup...');
      const cleanup = await this.runArtifactCleanup();
      phase.steps.push({ name: 'artifact_cleanup', ...cleanup });

      // Step 4: Dependency Analysis
      log('📦 Running dependency analysis...');
      const dependencies = await this.runDependencyAnalysis();
      phase.steps.push({ name: 'dependency_analysis', ...dependencies });

      phase.results = this.aggregateStepResults(phase.steps);
      phase.duration = Date.now() - phase.startTime;
      phase.success = phase.results.success;

      return phase;

    } catch (error) {
      log(`❌ Pre-build phase failed: ${error.message}`);
      phase.error = error.message;
      phase.success = false;
      return phase;
    }
  }

  async runBuildPhase() {
    const phase = {
      name: 'build',
      startTime: Date.now(),
      steps: [],
      results: {}
    };

    try {
      // Step 1: Build Execution
      log('🔨 Executing build...');
      const buildExecution = await this.executeBuild();
      phase.steps.push({ name: 'build_execution', ...buildExecution });

      // Step 2: Build Validation
      log('✅ Validating build output...');
      const validation = await this.validateBuild();
      phase.steps.push({ name: 'build_validation', ...validation });

      phase.results = this.aggregateStepResults(phase.steps);
      phase.duration = Date.now() - phase.startTime;
      phase.success = phase.results.success;

      return phase;

    } catch (error) {
      log(`❌ Build phase failed: ${error.message}`);
      phase.error = error.message;
      phase.success = false;
      return phase;
    }
  }

  async runPostBuildPhase() {
    const phase = {
      name: 'post_build',
      startTime: Date.now(),
      steps: [],
      results: {}
    };

    try {
      // Step 1: Build Analytics
      log('📊 Collecting build analytics...');
      const analytics = await this.runBuildAnalytics();
      phase.steps.push({ name: 'build_analytics', ...analytics });

      // Step 2: Performance Analysis
      log('⚡ Analyzing build performance...');
      const performance = await this.analyzeBuildPerformance();
      phase.steps.push({ name: 'performance_analysis', ...performance });

      // Step 3: Artifact Optimization
      log('🔧 Optimizing build artifacts...');
      const artifactOpt = await this.optimizeBuildArtifacts();
      phase.steps.push({ name: 'artifact_optimization', ...artifactOpt });

      phase.results = this.aggregateStepResults(phase.steps);
      phase.duration = Date.now() - phase.startTime;
      phase.success = phase.results.success;

      return phase;

    } catch (error) {
      log(`❌ Post-build phase failed: ${error.message}`);
      phase.error = error.message;
      phase.success = false;
      return phase;
    }
  }

  async runAssessmentPhase(buildSession) {
    const phase = {
      name: 'assessment',
      startTime: Date.now(),
      steps: [],
      results: {}
    };

    try {
      // Step 1: Overall Assessment
      log('🎯 Running overall assessment...');
      const assessment = await this.runOverallAssessment(buildSession);
      phase.steps.push({ name: 'overall_assessment', ...assessment });

      // Step 2: Generate Recommendations
      log('💡 Generating recommendations...');
      const recommendations = await this.generateRecommendations(buildSession);
      phase.steps.push({ name: 'recommendations', ...recommendations });

      // Step 3: Performance Metrics
      log('📈 Calculating performance metrics...');
      const metrics = await this.calculatePerformanceMetrics(buildSession);
      phase.steps.push({ name: 'performance_metrics', ...metrics });

      phase.results = this.aggregateStepResults(phase.steps);
      phase.duration = Date.now() - phase.startTime;
      phase.success = phase.results.success;

      return phase;

    } catch (error) {
      log(`❌ Assessment phase failed: ${error.message}`);
      phase.error = error.message;
      phase.success = false;
      return phase;
    }
  }

  async runHealthCheck() {
    try {
      const orchestrator = new this.components.orchestrator();
      const health = await orchestrator.runHealthCheck();
      return { success: true, data: health };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runBuildOptimization() {
    try {
      const optimizer = new this.components.optimizer();
      const result = await optimizer.runFullOptimization();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runArtifactCleanup() {
    try {
      const artifactOptimizer = new this.components.artifactOptimizer();
      const result = await artifactOptimizer.runFullOptimization();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runDependencyAnalysis() {
    try {
      const analytics = new this.components.analytics();
      const result = await analytics.analyzeDependencies();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async executeBuild() {
    try {
      log('🔨 Running npm run build...');
      const startTime = Date.now();
      
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });
      
      const duration = Date.now() - startTime;
      
      return { 
        success: true, 
        output: result,
        duration: duration,
        durationFormatted: `${(duration / 1000).toFixed(2)}s`
      };
    } catch (error) {
      return { 
        success: false, 
        error: error.stderr || error.message,
        exitCode: error.status || 1
      };
    }
  }

  async validateBuild() {
    try {
      // Check if build output exists
      const outDir = path.join(this.projectRoot, 'out');
      const nextDir = path.join(this.projectRoot, '.next');
      
      const outExists = fs.existsSync(outDir);
      const nextExists = fs.existsSync(nextDir);
      
      if (!outExists && !nextExists) {
        return { success: false, error: 'No build output found' };
      }

      // Check build output size
      const outSize = outExists ? this.getDirectorySize(outDir) : 0;
      const nextSize = nextExists ? this.getDirectorySize(nextDir) : 0;
      
      return {
        success: true,
        outDirectory: { exists: outExists, size: outSize, sizeFormatted: this.formatBytes(outSize) },
        nextDirectory: { exists: nextExists, size: nextSize, sizeFormatted: this.formatBytes(nextSize) },
        totalSize: outSize + nextSize,
        totalSizeFormatted: this.formatBytes(outSize + nextSize)
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runBuildAnalytics() {
    try {
      const analytics = new this.components.analytics();
      const result = await analytics.runFullAnalysis();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async analyzeBuildPerformance() {
    try {
      // Analyze build performance metrics
      const metrics = {
        buildTime: 0,
        outputSize: 0,
        optimizationRatio: 0,
        recommendations: []
      };

      // Calculate optimization ratio
      if (this.buildHistory.length > 1) {
        const previousBuild = this.buildHistory[this.buildHistory.length - 2];
        const currentBuild = this.buildHistory[this.buildHistory.length - 1];
        
        if (previousBuild && currentBuild) {
          const timeImprovement = previousBuild.summary.duration - currentBuild.summary.duration;
          metrics.buildTime = timeImprovement;
          metrics.optimizationRatio = (timeImprovement / previousBuild.summary.duration) * 100;
        }
      }

      return { success: true, data: metrics };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizeBuildArtifacts() {
    try {
      const artifactOptimizer = new this.components.artifactOptimizer();
      const result = await artifactOptimizer.runFullOptimization();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async runOverallAssessment(buildSession) {
    try {
      const assessment = {
        overallHealth: 'unknown',
        criticalIssues: 0,
        warnings: 0,
        optimizations: 0,
        recommendations: []
      };

      // Count issues and optimizations
      assessment.criticalIssues = buildSession.summary.issues.filter(i => i.severity === 'high').length;
      assessment.warnings = buildSession.summary.issues.filter(i => i.severity === 'medium').length;
      assessment.optimizations = buildSession.summary.optimizations.length;

      // Determine overall health
      if (assessment.criticalIssues === 0 && assessment.warnings === 0) {
        assessment.overallHealth = 'excellent';
      } else if (assessment.criticalIssues === 0) {
        assessment.overallHealth = 'good';
      } else if (assessment.criticalIssues <= 2) {
        assessment.overallHealth = 'fair';
      } else {
        assessment.overallHealth = 'poor';
      }

      return { success: true, data: assessment };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async generateRecommendations(buildSession) {
    try {
      const recommendations = [];

      // Generate recommendations based on build session analysis
      if (buildSession.summary.issues.length > 0) {
        recommendations.push({
          type: 'issue_resolution',
          priority: 'high',
          description: `Resolve ${buildSession.summary.issues.length} identified issues`,
          actions: [
            'Review error logs for specific details',
            'Apply suggested fixes from error analyzer',
            'Re-run build after fixes'
          ]
        });
      }

      if (buildSession.summary.optimizations.length > 0) {
        recommendations.push({
          type: 'performance_improvement',
          priority: 'medium',
          description: `Apply ${buildSession.summary.optimizations.length} performance optimizations`,
          actions: [
            'Review optimization reports',
            'Implement suggested improvements',
            'Monitor performance metrics'
          ]
        });
      }

      return { success: true, data: recommendations };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async calculatePerformanceMetrics(buildSession) {
    try {
      const metrics = {
        buildEfficiency: 0,
        optimizationEffectiveness: 0,
        trendAnalysis: 'stable'
      };

      // Calculate build efficiency
      const totalTime = buildSession.phases.reduce((sum, phase) => sum + phase.duration, 0);
      const buildTime = buildSession.phases.find(p => p.name === 'build')?.duration || 0;
      metrics.buildEfficiency = buildTime > 0 ? ((totalTime - buildTime) / totalTime) * 100 : 0;

      // Calculate optimization effectiveness
      const optimizations = buildSession.summary.optimizations.length;
      const issues = buildSession.summary.issues.length;
      metrics.optimizationEffectiveness = issues > 0 ? (optimizations / issues) * 100 : 100;

      // Analyze trends
      if (this.buildHistory.length > 3) {
        const recentBuilds = this.buildHistory.slice(-3);
        const durations = recentBuilds.map(b => b.summary.duration);
        const avgDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length;
        const currentDuration = buildSession.summary.duration;
        
        if (currentDuration < avgDuration * 0.9) {
          metrics.trendAnalysis = 'improving';
        } else if (currentDuration > avgDuration * 1.1) {
          metrics.trendAnalysis = 'declining';
        }
      }

      return { success: true, data: metrics };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  aggregateStepResults(steps) {
    const results = {
      success: true,
      totalSteps: steps.length,
      successfulSteps: 0,
      failedSteps: 0,
      errors: []
    };

    for (const step of steps) {
      if (step.success) {
        results.successfulSteps++;
      } else {
        results.failedSteps++;
        results.success = false;
        if (step.error) {
          results.errors.push({ step: step.name, error: step.error });
        }
      }
    }

    return results;
  }

  collectAllIssues(phases) {
    const issues = [];
    for (const phase of phases) {
      if (phase.results && phase.results.errors) {
        issues.push(...phase.results.errors);
      }
    }
    return issues;
  }

  collectAllOptimizations(phases) {
    const optimizations = [];
    for (const phase of phases) {
      if (phase.results && phase.results.data) {
        // Extract optimization data from various steps
        for (const step of phase.steps) {
          if (step.data && step.data.optimizations) {
            optimizations.push(...step.data.optimizations);
          }
        }
      }
    }
    return optimizations;
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

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async runQuickBuild() {
    log('⚡ Running quick build automation...');
    
    try {
      // Initialize components
      await this.initializeComponents();
      
      // Run essential phases only
      const preBuild = await this.runPreBuildPhase();
      const build = await this.runBuildPhase();
      
      const result = {
        success: build.success,
        duration: preBuild.duration + build.duration,
        phases: [preBuild, build]
      };
      
      log(`✅ Quick build completed: ${result.success ? 'SUCCESS' : 'FAILED'}`);
      return result;
      
    } catch (error) {
      log(`❌ Quick build failed: ${error.message}`);
      throw error;
    }
  }

  async runContinuousMonitoring() {
    log('🔄 Starting continuous monitoring mode...');
    
    const interval = 5 * 60 * 1000; // 5 minutes
    
    const monitor = setInterval(async () => {
      try {
        log('📊 Running continuous health check...');
        const health = await this.runHealthCheck();
        
        if (!health.success) {
          log('⚠️ Health check failed, triggering automated recovery...');
          await this.runQuickBuild();
        }
        
      } catch (error) {
        log(`❌ Continuous monitoring error: ${error.message}`);
      }
    }, interval);
    
    return monitor;
  }
}

// CLI interface
if (require.main === module) {
  const automator = new NetlifyComprehensiveBuildAutomator();
  
  const command = process.argv[2] || 'comprehensive';
  
  switch (command) {
    case 'quick':
      automator.runQuickBuild().then(console.log);
      break;
    case 'monitor':
      automator.runContinuousMonitoring().then(console.log);
      break;
    case 'comprehensive':
    default:
      automator.runComprehensiveBuild().then(console.log);
      break;
  }
}

module.exports = NetlifyComprehensiveBuildAutomator;
