#!/usr/bin/env node

/**
 * Predictive Failure Prevention System
 * Identifies potential build issues before they occur
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PredictiveFailurePrevention {
  constructor() {
    this.warningThresholds = {
      memoryUsage: 0.8,        // 80% memory usage
      diskSpace: 0.9,          // 90% disk usage
      cpuLoad: 0.85,           // 85% CPU load
      networkLatency: 1000,    // 1 second latency
      dependencyConflicts: 3,  // 3+ dependency conflicts
      buildTimeIncrease: 1.5,  // 50% build time increase
      errorFrequency: 0.1      // 10% error rate
    };
    
    this.patterns = {
      failurePatterns: [],
      warningPatterns: [],
      successPatterns: []
    };
    
    this.earlyWarningSystem = {
      active: true,
      warnings: [],
      predictions: [],
      confidence: 0.0
    };
    
    this.initializeSystem();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeSystem() {
    try {
      // Load existing patterns and data
      this.loadPatterns();
      this.loadHistoricalData();
      
      // Initialize monitoring
      this.startMonitoring();
      
      this.log('✅ Predictive failure prevention system initialized');
    } catch (error) {
      this.log(`❌ System initialization failed: ${error.message}`, 'error');
    }
  }

  loadPatterns() {
    try {
      const patternsFile = '.failure-patterns.json';
      if (fs.existsSync(patternsFile)) {
        const patternsData = JSON.parse(fs.readFileSync(patternsFile, 'utf8'));
        this.patterns = { ...this.patterns, ...patternsData };
        this.log(`📋 Loaded ${this.patterns.failurePatterns.length} failure patterns`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load patterns: ${error.message}`, 'warning');
    }
  }

  loadHistoricalData() {
    try {
      const historyFile = '.build-history.json';
      if (fs.existsSync(historyFile)) {
        const historyData = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        this.historicalData = historyData;
        this.log(`📊 Loaded ${historyData.builds?.length || 0} historical build records`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load historical data: ${error.message}`, 'warning');
    }
  }

  startMonitoring() {
    this.log('🔍 Starting predictive monitoring...');
    
    // Monitor system resources
    this.monitorSystemResources();
    
    // Monitor build patterns
    this.monitorBuildPatterns();
    
    // Monitor dependency health
    this.monitorDependencyHealth();
    
    this.log('✅ Predictive monitoring started');
  }

  monitorSystemResources() {
    // Monitor memory usage
    setInterval(() => {
      this.checkMemoryUsage();
    }, 30000); // Every 30 seconds
    
    // Monitor disk space
    setInterval(() => {
      this.checkDiskSpace();
    }, 60000); // Every minute
    
    // Monitor CPU load
    setInterval(() => {
      this.checkCPULoad();
    }, 30000); // Every 30 seconds
  }

  monitorBuildPatterns() {
    // Monitor for build time anomalies
    setInterval(() => {
      this.analyzeBuildTimePatterns();
    }, 300000); // Every 5 minutes
    
    // Monitor for error frequency
    setInterval(() => {
      this.analyzeErrorPatterns();
    }, 300000); // Every 5 minutes
  }

  monitorDependencyHealth() {
    // Monitor dependency conflicts
    setInterval(() => {
      this.checkDependencyConflicts();
    }, 600000); // Every 10 minutes
    
    // Monitor security vulnerabilities
    setInterval(() => {
      this.checkSecurityVulnerabilities();
    }, 3600000); // Every hour
  }

  async analyzeBuildContext(buildContext) {
    this.log('🔍 Analyzing build context for potential issues...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        context: buildContext,
        riskAssessment: {},
        warnings: [],
        predictions: [],
        recommendations: []
      };
      
      // Analyze various risk factors
      analysis.riskAssessment = await this.assessBuildRisks(buildContext);
      
      // Generate early warnings
      analysis.warnings = this.generateEarlyWarnings(buildContext);
      
      // Make failure predictions
      analysis.predictions = await this.predictPotentialFailures(buildContext);
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Calculate overall risk score
      analysis.overallRisk = this.calculateOverallRisk(analysis);
      
      // Save analysis
      await this.saveAnalysis(analysis);
      
      this.log(`✅ Build context analysis completed. Risk score: ${analysis.overallRisk.toFixed(1)}/100`);
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Build context analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async assessBuildRisks(buildContext) {
    const risks = {
      system: await this.assessSystemRisks(),
      dependencies: await this.assessDependencyRisks(buildContext),
      configuration: await this.assessConfigurationRisks(buildContext),
      environment: await this.assessEnvironmentRisks(buildContext),
      historical: await this.assessHistoricalRisks(buildContext)
    };
    
    return risks;
  }

  async assessSystemRisks() {
    const risks = {
      memory: 0,
      disk: 0,
      cpu: 0,
      network: 0
    };
    
    try {
      // Check memory usage
      const memoryUsage = process.memoryUsage();
      const memoryUtilization = memoryUsage.heapUsed / memoryUsage.heapTotal;
      
      if (memoryUtilization > this.warningThresholds.memoryUsage) {
        risks.memory = Math.round((memoryUtilization - this.warningThresholds.memoryUsage) * 100);
      }
      
      // Check disk space
      const diskSpace = await this.getDiskSpace();
      if (diskSpace.utilization > this.warningThresholds.diskSpace) {
        risks.disk = Math.round((diskSpace.utilization - this.warningThresholds.diskSpace) * 100);
      }
      
      // Check CPU load
      const cpuLoad = await this.getCPULoad();
      if (cpuLoad > this.warningThresholds.cpuLoad) {
        risks.cpu = Math.round((cpuLoad - this.warningThresholds.cpuLoad) * 100);
      }
      
      // Check network latency
      const networkLatency = await this.getNetworkLatency();
      if (networkLatency > this.warningThresholds.networkLatency) {
        risks.network = Math.round((networkLatency - this.warningThresholds.networkLatency) / 100);
      }
      
    } catch (error) {
      this.log(`⚠️  Could not assess system risks: ${error.message}`, 'warning');
    }
    
    return risks;
  }

  async assessDependencyRisks(buildContext) {
    const risks = {
      conflicts: 0,
      vulnerabilities: 0,
      outdated: 0,
      breaking: 0
    };
    
    try {
      // Check for dependency conflicts
      const conflicts = await this.checkDependencyConflicts();
      if (conflicts.length > this.warningThresholds.dependencyConflicts) {
        risks.conflicts = Math.min(100, conflicts.length * 20);
      }
      
      // Check for security vulnerabilities
      const vulnerabilities = await this.checkSecurityVulnerabilities();
      if (vulnerabilities.critical > 0) {
        risks.vulnerabilities = 100;
      } else if (vulnerabilities.high > 0) {
        risks.vulnerabilities = 75;
      } else if (vulnerabilities.moderate > 0) {
        risks.vulnerabilities = 50;
      }
      
      // Check for outdated dependencies
      const outdated = await this.checkOutdatedDependencies();
      if (outdated.length > 10) {
        risks.outdated = Math.min(100, outdated.length * 5);
      }
      
      // Check for breaking changes
      if (buildContext.breakingChanges > 0) {
        risks.breaking = Math.min(100, buildContext.breakingChanges * 25);
      }
      
    } catch (error) {
      this.log(`⚠️  Could not assess dependency risks: ${error.message}`, 'warning');
    }
    
    return risks;
  }

  async assessConfigurationRisks(buildContext) {
    const risks = {
      missingFiles: 0,
      invalidConfig: 0,
      versionMismatch: 0,
      environment: 0
    };
    
    try {
      // Check for missing critical files
      const missingFiles = this.checkMissingFiles();
      if (missingFiles.length > 0) {
        risks.missingFiles = Math.min(100, missingFiles.length * 25);
      }
      
      // Check configuration validity
      const configIssues = this.checkConfigurationValidity();
      if (configIssues.length > 0) {
        risks.invalidConfig = Math.min(100, configIssues.length * 20);
      }
      
      // Check version compatibility
      const versionIssues = this.checkVersionCompatibility();
      if (versionIssues.length > 0) {
        risks.versionMismatch = Math.min(100, versionIssues.length * 30);
      }
      
      // Check environment variables
      const envIssues = this.checkEnvironmentVariables();
      if (envIssues.length > 0) {
        risks.environment = Math.min(100, envIssues.length * 15);
      }
      
    } catch (error) {
      this.log(`⚠️  Could not assess configuration risks: ${error.message}`, 'warning');
    }
    
    return risks;
  }

  async assessEnvironmentRisks(buildContext) {
    const risks = {
      resourceConstraints: 0,
      networkIssues: 0,
      permissionIssues: 0,
      externalDependencies: 0
    };
    
    try {
      // Check resource constraints
      const resources = await this.checkResourceConstraints();
      if (resources.memory < 0.2 || resources.disk < 0.1) {
        risks.resourceConstraints = 80;
      }
      
      // Check network connectivity
      const networkStatus = await this.checkNetworkConnectivity();
      if (!networkStatus.healthy) {
        risks.networkIssues = 70;
      }
      
      // Check file permissions
      const permissionIssues = this.checkFilePermissions();
      if (permissionIssues.length > 0) {
        risks.permissionIssues = Math.min(100, permissionIssues.length * 20);
      }
      
      // Check external dependencies
      const externalStatus = await this.checkExternalDependencies();
      if (!externalStatus.healthy) {
        risks.externalDependencies = 60;
      }
      
    } catch (error) {
      this.log(`⚠️  Could not assess environment risks: ${error.message}`, 'warning');
    }
    
    return risks;
  }

  async assessHistoricalRisks(buildContext) {
    const risks = {
      recentFailures: 0,
      timeAnomalies: 0,
      errorPatterns: 0,
      successTrends: 0
    };
    
    try {
      if (!this.historicalData?.builds) {
        return risks;
      }
      
      const recentBuilds = this.historicalData.builds.slice(-20);
      
      // Check recent failure rate
      const recentFailures = recentBuilds.filter(build => !build.success);
      if (recentFailures.length > 0) {
        risks.recentFailures = Math.min(100, (recentFailures.length / recentBuilds.length) * 100);
      }
      
      // Check for build time anomalies
      const buildTimes = recentBuilds.map(build => build.buildTime).filter(time => time > 0);
      if (buildTimes.length > 5) {
        const avgTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;
        const recentAvg = buildTimes.slice(-5).reduce((a, b) => a + b, 0) / 5;
        
        if (recentAvg > avgTime * this.warningThresholds.buildTimeIncrease) {
          risks.timeAnomalies = 70;
        }
      }
      
      // Check error patterns
      const errorPatterns = this.analyzeErrorPatterns(recentBuilds);
      if (errorPatterns.frequency > this.warningThresholds.errorFrequency) {
        risks.errorPatterns = Math.min(100, errorPatterns.frequency * 100);
      }
      
      // Check success trends
      const successTrends = this.analyzeSuccessTrends(recentBuilds);
      if (successTrends.declining) {
        risks.successTrends = 60;
      }
      
    } catch (error) {
      this.log(`⚠️  Could not assess historical risks: ${error.message}`, 'warning');
    }
    
    return risks;
  }

  generateEarlyWarnings(buildContext) {
    const warnings = [];
    
    try {
      // System resource warnings
      if (this.earlyWarningSystem.warnings.length > 0) {
        warnings.push(...this.earlyWarningSystem.warnings);
      }
      
      // Configuration warnings
      const missingFiles = this.checkMissingFiles();
      if (missingFiles.length > 0) {
        warnings.push({
          type: 'configuration',
          severity: 'medium',
          message: `Missing critical files: ${missingFiles.join(', ')}`,
          recommendation: 'Create missing files or check file paths'
        });
      }
      
      // Dependency warnings
      if (buildContext.breakingChanges > 0) {
        warnings.push({
          type: 'dependency',
          severity: 'high',
          message: `${buildContext.breakingChanges} breaking changes detected`,
          recommendation: 'Review and test breaking changes thoroughly'
        });
      }
      
      // Environment warnings
      if (buildContext.memoryAvailable < 20) {
        warnings.push({
          type: 'environment',
          severity: 'high',
          message: 'Low memory availability detected',
          recommendation: 'Free up memory or increase available memory'
        });
      }
      
    } catch (error) {
      this.log(`⚠️  Could not generate early warnings: ${error.message}`, 'warning');
    }
    
    return warnings;
  }

  async predictPotentialFailures(buildContext) {
    const predictions = [];
    
    try {
      // Analyze failure patterns
      const failurePatterns = this.analyzeFailurePatterns(buildContext);
      
      for (const pattern of failurePatterns) {
        if (pattern.probability > 0.3) { // 30% threshold
          predictions.push({
            type: pattern.type,
            probability: pattern.probability,
            confidence: pattern.confidence,
            description: pattern.description,
            mitigation: pattern.mitigation
          });
        }
      }
      
      // Check for known failure conditions
      const knownFailures = this.checkKnownFailureConditions(buildContext);
      predictions.push(...knownFailures);
      
      // Analyze resource constraints
      const resourceFailures = await this.predictResourceFailures(buildContext);
      predictions.push(...resourceFailures);
      
    } catch (error) {
      this.log(`⚠️  Could not predict potential failures: ${error.message}`, 'warning');
    }
    
    return predictions;
  }

  analyzeFailurePatterns(buildContext) {
    const patterns = [];
    
    try {
      if (!this.patterns.failurePatterns) {
        return patterns;
      }
      
      for (const pattern of this.patterns.failurePatterns) {
        const matchScore = this.calculatePatternMatch(pattern, buildContext);
        
        if (matchScore > 0.5) { // 50% match threshold
          patterns.push({
            type: pattern.type,
            probability: pattern.failureRate * matchScore,
            confidence: matchScore,
            description: pattern.description,
            mitigation: pattern.mitigation
          });
        }
      }
      
    } catch (error) {
      this.log(`⚠️  Could not analyze failure patterns: ${error.message}`, 'warning');
    }
    
    return patterns;
  }

  calculatePatternMatch(pattern, buildContext) {
    let matchScore = 0;
    let totalFactors = 0;
    
    try {
      // Compare pattern factors with build context
      for (const [factor, value] of Object.entries(pattern.factors)) {
        totalFactors++;
        
        if (buildContext[factor] !== undefined) {
          if (typeof value === 'number' && typeof buildContext[factor] === 'number') {
            // Numeric comparison
            const difference = Math.abs(buildContext[factor] - value) / Math.max(value, 1);
            if (difference < 0.2) { // Within 20%
              matchScore += 1;
            } else if (difference < 0.5) { // Within 50%
              matchScore += 0.5;
            }
          } else if (value === buildContext[factor]) {
            // Exact match
            matchScore += 1;
          }
        }
      }
      
      return totalFactors > 0 ? matchScore / totalFactors : 0;
      
    } catch (error) {
      return 0;
    }
  }

  checkKnownFailureConditions(buildContext) {
    const failures = [];
    
    try {
      // Check for critical file changes
      if (buildContext.criticalChanges > 0) {
        failures.push({
          type: 'configuration',
          probability: 0.8,
          confidence: 0.9,
          description: 'Critical configuration changes detected',
          mitigation: 'Test configuration changes in isolation before full build'
        });
      }
      
      // Check for memory constraints
      if (buildContext.memoryAvailable < 10) {
        failures.push({
          type: 'resource',
          probability: 0.9,
          confidence: 0.95,
          description: 'Severe memory constraints detected',
          mitigation: 'Free up memory or increase available memory'
        });
      }
      
      // Check for dependency conflicts
      if (buildContext.dependencyConflicts > 5) {
        failures.push({
          type: 'dependency',
          probability: 0.7,
          confidence: 0.8,
          description: 'Multiple dependency conflicts detected',
          mitigation: 'Resolve dependency conflicts before building'
        });
      }
      
    } catch (error) {
      this.log(`⚠️  Could not check known failure conditions: ${error.message}`, 'warning');
    }
    
    return failures;
  }

  async predictResourceFailures(buildContext) {
    const failures = [];
    
    try {
      // Predict memory failures
      const memoryPrediction = this.predictMemoryFailure(buildContext);
      if (memoryPrediction.probability > 0.3) {
        failures.push(memoryPrediction);
      }
      
      // Predict disk space failures
      const diskPrediction = this.predictDiskFailure(buildContext);
      if (diskPrediction.probability > 0.3) {
        failures.push(diskPrediction);
      }
      
      // Predict network failures
      const networkPrediction = this.predictNetworkFailure(buildContext);
      if (networkPrediction.probability > 0.3) {
        failures.push(networkPrediction);
      }
      
    } catch (error) {
      this.log(`⚠️  Could not predict resource failures: ${error.message}`, 'warning');
    }
    
    return failures;
  }

  predictMemoryFailure(buildContext) {
    const currentMemory = process.memoryUsage();
    const memoryUtilization = currentMemory.heapUsed / currentMemory.heapTotal;
    
    let probability = 0;
    let description = '';
    
    if (memoryUtilization > 0.9) {
      probability = 0.9;
      description = 'Memory usage critically high';
    } else if (memoryUtilization > 0.8) {
      probability = 0.7;
      description = 'Memory usage very high';
    } else if (memoryUtilization > 0.7) {
      probability = 0.5;
      description = 'Memory usage elevated';
    }
    
    return {
      type: 'resource',
      probability,
      confidence: 0.8,
      description,
      mitigation: 'Optimize memory usage or increase available memory'
    };
  }

  predictDiskFailure(buildContext) {
    // This is a simplified implementation
    // In production, you'd check actual disk space
    
    return {
      type: 'resource',
      probability: 0.2,
      confidence: 0.6,
      description: 'Disk space monitoring not available',
      mitigation: 'Monitor disk space manually'
    };
  }

  predictNetworkFailure(buildContext) {
    // This is a simplified implementation
    // In production, you'd check actual network status
    
    return {
      type: 'resource',
      probability: 0.1,
      confidence: 0.5,
      description: 'Network status monitoring not available',
      mitigation: 'Check network connectivity manually'
    };
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    try {
      // High-risk recommendations
      if (analysis.overallRisk > 80) {
        recommendations.push({
          priority: 'critical',
          action: 'Postpone build until risks are mitigated',
          reason: 'Overall risk score indicates high probability of failure'
        });
      }
      
      // System resource recommendations
      if (analysis.riskAssessment.system.memory > 50) {
        recommendations.push({
          priority: 'high',
          action: 'Free up memory or increase available memory',
          reason: 'High memory usage detected'
        });
      }
      
      if (analysis.riskAssessment.system.disk > 50) {
        recommendations.push({
          priority: 'high',
          action: 'Free up disk space',
          reason: 'High disk usage detected'
        });
      }
      
      // Dependency recommendations
      if (analysis.riskAssessment.dependencies.vulnerabilities > 50) {
        recommendations.push({
          priority: 'high',
          action: 'Fix security vulnerabilities before building',
          reason: 'Security vulnerabilities detected'
        });
      }
      
      if (analysis.riskAssessment.dependencies.conflicts > 50) {
        recommendations.push({
          priority: 'medium',
          action: 'Resolve dependency conflicts',
          reason: 'Multiple dependency conflicts detected'
        });
      }
      
      // Configuration recommendations
      if (analysis.riskAssessment.configuration.missingFiles > 0) {
        recommendations.push({
          priority: 'medium',
          action: 'Create missing critical files',
          reason: 'Required configuration files missing'
        });
      }
      
      // Historical recommendations
      if (analysis.riskAssessment.historical.recentFailures > 50) {
        recommendations.push({
          priority: 'high',
          action: 'Investigate recent build failures',
          reason: 'High recent failure rate detected'
        });
      }
      
      // Add general recommendations
      if (recommendations.length === 0) {
        recommendations.push({
          priority: 'low',
          action: 'Proceed with build',
          reason: 'No significant risks detected'
        });
      }
      
    } catch (error) {
      this.log(`⚠️  Could not generate recommendations: ${error.message}`, 'warning');
    }
    
    return recommendations;
  }

  calculateOverallRisk(analysis) {
    let totalRisk = 0;
    let maxRisk = 0;
    
    try {
      // Calculate risk from each category
      const categories = ['system', 'dependencies', 'configuration', 'environment', 'historical'];
      
      for (const category of categories) {
        if (analysis.riskAssessment[category]) {
          const categoryRisk = Object.values(analysis.riskAssessment[category])
            .reduce((sum, risk) => sum + (risk || 0), 0);
          
          totalRisk += categoryRisk;
          maxRisk += 100;
        }
      }
      
      // Adjust based on warnings and predictions
      if (analysis.warnings.length > 0) {
        const warningRisk = Math.min(20, analysis.warnings.length * 5);
        totalRisk += warningRisk;
        maxRisk += 20;
      }
      
      if (analysis.predictions.length > 0) {
        const predictionRisk = analysis.predictions.reduce((sum, pred) => 
          sum + (pred.probability * 100), 0);
        totalRisk += predictionRisk;
        maxRisk += 100;
      }
      
      return maxRisk > 0 ? Math.round((totalRisk / maxRisk) * 100) : 0;
      
    } catch (error) {
      return 50; // Default risk score on error
    }
  }

  // Monitoring methods
  checkMemoryUsage() {
    try {
      const memoryUsage = process.memoryUsage();
      const memoryUtilization = memoryUsage.heapUsed / memoryUsage.heapTotal;
      
      if (memoryUtilization > this.warningThresholds.memoryUsage) {
        this.earlyWarningSystem.warnings.push({
          timestamp: new Date().toISOString(),
          type: 'memory',
          severity: 'medium',
          message: `High memory usage: ${(memoryUtilization * 100).toFixed(1)}%`,
          value: memoryUtilization
        });
      }
    } catch (error) {
      // Memory check failed
    }
  }

  checkDiskSpace() {
    // This is a simplified implementation
    // In production, you'd check actual disk space
  }

  checkCPULoad() {
    // This is a simplified implementation
    // In production, you'd check actual CPU load
  }

  async getDiskSpace() {
    // Simplified implementation
    return { utilization: 0.5 };
  }

  async getCPULoad() {
    // Simplified implementation
    return 0.3;
  }

  async getNetworkLatency() {
    // Simplified implementation
    return 50;
  }

  async checkDependencyConflicts() {
    // Simplified implementation
    return [];
  }

  async checkSecurityVulnerabilities() {
    // Simplified implementation
    return { critical: 0, high: 0, moderate: 0, low: 0 };
  }

  async checkOutdatedDependencies() {
    // Simplified implementation
    return [];
  }

  checkMissingFiles() {
    const criticalFiles = ['package.json', 'next.config.js'];
    const missing = [];
    
    for (const file of criticalFiles) {
      if (!fs.existsSync(file)) {
        missing.push(file);
      }
    }
    
    return missing;
  }

  checkConfigurationValidity() {
    // Simplified implementation
    return [];
  }

  checkVersionCompatibility() {
    // Simplified implementation
    return [];
  }

  checkEnvironmentVariables() {
    // Simplified implementation
    return [];
  }

  async checkResourceConstraints() {
    // Simplified implementation
    return { memory: 0.5, disk: 0.5 };
  }

  async checkNetworkConnectivity() {
    // Simplified implementation
    return { healthy: true };
  }

  checkFilePermissions() {
    // Simplified implementation
    return [];
  }

  async checkExternalDependencies() {
    // Simplified implementation
    return { healthy: true };
  }

  analyzeErrorPatterns(builds) {
    // Simplified implementation
    return { frequency: 0.05 };
  }

  analyzeSuccessTrends(builds) {
    // Simplified implementation
    return { declining: false };
  }

  // Data persistence methods
  async saveAnalysis(analysis) {
    try {
      const analysisFile = 'predictive-failure-analysis.json';
      fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
      this.log(`📄 Analysis saved to ${analysisFile}`);
    } catch (error) {
      this.log(`⚠️  Could not save analysis: ${error.message}`, 'warning');
    }
  }

  // Main execution method
  async runPredictiveAnalysis(buildContext) {
    this.log('🚀 Starting predictive failure prevention analysis...');
    
    try {
      // Analyze build context
      const analysis = await this.analyzeBuildContext(buildContext);
      
      // Print summary
      this.printAnalysisSummary(analysis);
      
      this.log('✅ Predictive analysis completed successfully');
      
      return analysis;
      
    } catch (error) {
      this.log(`💥 Predictive analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  printAnalysisSummary(analysis) {
    console.log('\n' + '='.repeat(70));
    console.log('🔮 PREDICTIVE FAILURE PREVENTION ANALYSIS');
    console.log('='.repeat(70));
    console.log(`📊 Overall Risk Score: ${analysis.overallRisk}/100`);
    
    console.log('\n🚨 RISK ASSESSMENT:');
    Object.entries(analysis.riskAssessment).forEach(([category, risks]) => {
      const categoryRisk = Object.values(risks).reduce((sum, risk) => sum + (risk || 0), 0);
      const avgRisk = Object.values(risks).filter(r => r > 0).length > 0 ? 
        categoryRisk / Object.values(risks).filter(r => r > 0).length : 0;
      
      console.log(`  ${category.toUpperCase()}: ${avgRisk.toFixed(1)}/100`);
    });
    
    if (analysis.warnings.length > 0) {
      console.log('\n⚠️  EARLY WARNINGS:');
      analysis.warnings.forEach(warning => {
        console.log(`  - ${warning.message}`);
      });
    }
    
    if (analysis.predictions.length > 0) {
      console.log('\n🔮 FAILURE PREDICTIONS:');
      analysis.predictions.forEach(prediction => {
        console.log(`  - ${prediction.description} (${(prediction.probability * 100).toFixed(1)}% probability)`);
      });
    }
    
    console.log('\n💡 RECOMMENDATIONS:');
    analysis.recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.action}`);
      console.log(`     Reason: ${rec.reason}`);
    });
    
    console.log('\n' + '='.repeat(70));
  }
}

// Run if called directly
if (require.main === module) {
  const predictor = new PredictiveFailurePrevention();
  
  // Example build context
  const buildContext = {
    fileChanges: 25,
    criticalChanges: 1,
    majorChanges: 5,
    minorChanges: 19,
    dependencyUpdates: 3,
    securityVulnerabilities: 1,
    breakingChanges: 1,
    dependencyConflicts: 2,
    memoryAvailable: 75,
    cpuCores: 4,
    networkLatency: 75
  };
  
  predictor.runPredictiveAnalysis(buildContext)
    .then(analysis => {
      console.log('Predictive Analysis Result:', JSON.stringify(analysis, null, 2));
    })
    .catch(error => {
      console.error('Predictive Analysis failed:', error);
      process.exit(1);
    });
}

module.exports = PredictiveFailurePrevention;