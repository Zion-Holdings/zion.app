#!/usr/bin/env node

/**
 * Master Build Orchestrator
 * Coordinates all enhanced build systems and provides unified interface
 */

const fs = require('fs');
const path = require('path');
const EnhancedBuildAutomation = require('./enhanced-build-automation');
const AdvancedSecurityScanner = require('./security-scanner');
const IntelligentBuildOptimizer = require('./intelligent-build-optimizer');
const SmartDependencyManager = require('./smart-dependency-manager');
const RealTimeBuildMonitor = require('./real-time-monitor');
const AdvancedCacheManager = require('./advanced-cache-manager');

class MasterBuildOrchestrator {
  constructor() {
    this.systems = {
      enhanced: new EnhancedBuildAutomation(),
      security: new AdvancedSecurityScanner(),
      optimizer: new IntelligentBuildOptimizer(),
      dependencies: new SmartDependencyManager(),
      monitor: new RealTimeBuildMonitor(),
      cache: new AdvancedCacheManager()
    };
    
    this.orchestrationLog = [];
    this.startTime = Date.now();
    this.buildMode = process.argv[2] || 'comprehensive';
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    
    this.orchestrationLog.push(logEntry);
    console.log(logEntry);
  }

  async runOrchestratedBuild() {
    this.log('🎼 Starting master build orchestration...');
    this.log(`🎯 Build mode: ${this.buildMode}`);
    
    try {
      const results = {
        timestamp: new Date().toISOString(),
        mode: this.buildMode,
        systems: {},
        overall: {
          success: false,
          totalTime: 0,
          errors: [],
          warnings: []
        }
      };
      
      // Phase 1: Security Scanning
      this.log('🔒 Phase 1: Security Scanning');
      try {
        const securityResults = await this.systems.security.runComprehensiveSecurityScan();
        results.systems.security = {
          status: 'completed',
          score: securityResults.overallScore,
          vulnerabilities: securityResults.npmAudit?.vulnerabilities || null
        };
        
        if (securityResults.overallScore < 70) {
          results.overall.warnings.push('Low security score detected');
        }
        
        this.log(`✅ Security scan completed. Score: ${securityResults.overallScore}/100`);
      } catch (error) {
        this.log(`❌ Security scan failed: ${error.message}`, 'error');
        results.systems.security = { status: 'failed', error: error.message };
        results.overall.errors.push(`Security scan failed: ${error.message}`);
      }
      
      // Phase 2: Build Optimization Analysis
      this.log('🚀 Phase 2: Build Optimization Analysis');
      try {
        const optimizationResults = await this.systems.optimizer.analyzeBuildChanges();
        results.systems.optimization = {
          status: 'completed',
          strategy: optimizationResults.strategy,
          changes: optimizationResults.changes.total
        };
        
        this.log(`✅ Build optimization analysis completed. Strategy: ${optimizationResults.strategy}`);
      } catch (error) {
        this.log(`❌ Build optimization analysis failed: ${error.message}`, 'error');
        results.systems.optimization = { status: 'failed', error: error.message };
        results.overall.errors.push(`Build optimization analysis failed: ${error.message}`);
      }
      
      // Phase 3: Enhanced Build Execution
      this.log('🔨 Phase 3: Enhanced Build Execution');
      try {
        const buildResults = await this.systems.enhanced.runEnhancedBuild();
        results.systems.build = {
          status: buildResults ? 'completed' : 'failed',
          success: buildResults
        };
        
        if (buildResults) {
          this.log('✅ Enhanced build completed successfully');
        } else {
          this.log('❌ Enhanced build failed');
          results.overall.errors.push('Enhanced build failed');
        }
      } catch (error) {
        this.log(`❌ Enhanced build failed: ${error.message}`, 'error');
        results.systems.build = { status: 'failed', error: error.message };
        results.overall.errors.push(`Enhanced build failed: ${error.message}`);
      }
      
      // Phase 4: Post-Build Optimization (if build succeeded)
      if (results.systems.build?.success) {
        this.log('⚡ Phase 4: Post-Build Optimization');
        try {
          const postBuildResults = await this.systems.optimizer.executeBuildStrategy(
            results.systems.optimization?.strategy || 'full',
            { type: 'post-build', steps: ['optimize', 'cache'] }
          );
          
          results.systems.postBuild = {
            status: 'completed',
            optimization: postBuildResults
          };
          
          this.log('✅ Post-build optimization completed');
        } catch (error) {
          this.log(`⚠️  Post-build optimization failed: ${error.message}`, 'warning');
          results.systems.postBuild = { status: 'failed', error: error.message };
          results.overall.warnings.push(`Post-build optimization failed: ${error.message}`);
        }
      }
      
      // Calculate overall results
      results.overall.totalTime = Date.now() - this.startTime;
      results.overall.success = results.overall.errors.length === 0 && results.systems.build?.success;
      
      // Generate comprehensive report
      await this.generateOrchestrationReport(results);
      
      // Print summary
      this.printOrchestrationSummary(results);
      
      return results;
      
    } catch (error) {
      this.log(`💥 Master orchestration failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async generateOrchestrationReport(results) {
    const reportPath = 'master-build-orchestration-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    this.log(`📄 Master orchestration report saved to ${reportPath}`);
    
    // Generate human-readable summary
    const summaryPath = 'build-summary.md';
    const summary = this.generateMarkdownSummary(results);
    fs.writeFileSync(summaryPath, summary);
    this.log(`📄 Build summary saved to ${summaryPath}`);
  }

  generateMarkdownSummary(results) {
    const timestamp = new Date(results.timestamp).toLocaleString();
    
    return `# 🎼 Master Build Orchestration Report

**Generated**: ${timestamp}  
**Mode**: ${results.mode}  
**Status**: ${results.overall.success ? '✅ SUCCESS' : '❌ FAILED'}  
**Total Time**: ${results.overall.totalTime}ms

## 📊 System Status

### 🔒 Security Scanner
- **Status**: ${results.systems.security?.status || 'unknown'}
- **Score**: ${results.systems.security?.score || 'N/A'}/100
- **Vulnerabilities**: ${results.systems.security?.vulnerabilities ? 
    `${results.systems.security.vulnerabilities.critical || 0} critical, ${results.systems.security.vulnerabilities.high || 0} high` : 
    'None detected'}

### 🚀 Build Optimizer
- **Status**: ${results.systems.optimization?.status || 'unknown'}
- **Strategy**: ${results.systems.optimization?.strategy || 'N/A'}
- **Changes Detected**: ${results.systems.optimization?.changes || 0}

### 🔨 Enhanced Build
- **Status**: ${results.systems.build?.status || 'unknown'}
- **Success**: ${results.systems.build?.success ? 'Yes' : 'No'}

### ⚡ Post-Build Optimization
- **Status**: ${results.systems.postBuild?.status || 'N/A'}

## 🚨 Issues

${results.overall.errors.length > 0 ? 
  results.overall.errors.map(error => `- ❌ ${error}`).join('\n') : 
  '- ✅ No errors detected'}

## ⚠️ Warnings

${results.overall.warnings.length > 0 ? 
  results.overall.warnings.map(warning => `- ⚠️ ${warning}`).join('\n') : 
  '- ✅ No warnings detected'}

## 📈 Performance Metrics

- **Total Orchestration Time**: ${results.overall.totalTime}ms
- **Build Success Rate**: ${results.overall.success ? '100%' : '0%'}
- **Systems Completed**: ${Object.values(results.systems).filter(sys => sys?.status === 'completed').length}/${Object.keys(results.systems).length}

## 🎯 Recommendations

${this.generateRecommendations(results)}

---

*Report generated by Master Build Orchestrator v1.0*
`;
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    // Security recommendations
    if (results.systems.security?.score && results.systems.security.score < 80) {
      recommendations.push('🔒 **Security**: Run security fixes and update vulnerable dependencies');
    }
    
    // Build strategy recommendations
    if (results.systems.optimization?.strategy === 'full') {
      recommendations.push('🚀 **Build**: Consider breaking down changes for faster incremental builds');
    }
    
    // Performance recommendations
    if (results.overall.totalTime > 300000) { // 5 minutes
      recommendations.push('⚡ **Performance**: Build time is high, consider optimizing dependencies and build process');
    }
    
    // General recommendations
    if (results.overall.errors.length > 0) {
      recommendations.push('🔧 **General**: Address build errors before next deployment');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ **General**: All systems are performing well, continue current practices');
    }
    
    return recommendations.map(rec => `- ${rec}`).join('\n');
  }

  printOrchestrationSummary(results) {
    console.log('\n' + '='.repeat(70));
    console.log('🎼 MASTER BUILD ORCHESTRATION SUMMARY');
    console.log('='.repeat(70));
    console.log(`🎯 Mode: ${results.mode}`);
    console.log(`✅ Overall Success: ${results.overall.success ? 'YES' : 'NO'}`);
    console.log(`⏱️  Total Time: ${results.overall.totalTime}ms`);
    console.log(`❌ Errors: ${results.overall.errors.length}`);
    console.log(`⚠️  Warnings: ${results.overall.warnings.length}`);
    
    console.log('\n📊 SYSTEM STATUS:');
    Object.entries(results.systems).forEach(([system, data]) => {
      const status = data?.status || 'unknown';
      const icon = status === 'completed' ? '✅' : status === 'failed' ? '❌' : '⚠️';
      console.log(`  ${icon} ${system}: ${status}`);
    });
    
    if (results.overall.errors.length > 0) {
      console.log('\n❌ ERRORS:');
      results.overall.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (results.overall.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      results.overall.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    console.log('\n' + '='.repeat(70));
  }

  // Quick build modes
  async quickBuild() {
    this.log('⚡ Running quick build mode...');
    return await this.systems.enhanced.runEnhancedBuild();
  }

  async securityOnly() {
    this.log('🔒 Running security-only mode...');
    return await this.systems.security.runComprehensiveSecurityScan();
  }

  async optimizationOnly() {
    this.log('🚀 Running optimization-only mode...');
    return await this.systems.optimizer.optimizeBuild();
  }

  async comprehensiveBuild() {
    this.log('🎼 Running comprehensive build mode...');
    return await this.runOrchestratedBuild();
  }

  // Main execution
  async run() {
    try {
      switch (this.buildMode) {
        case 'quick':
          return await this.quickBuild();
          
        case 'security':
          return await this.securityOnly();
          
        case 'optimization':
          return await this.optimizationOnly();
          
        case 'comprehensive':
        default:
          return await this.comprehensiveBuild();
      }
    } catch (error) {
      this.log(`💥 Build execution failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new MasterBuildOrchestrator();
  orchestrator.run().then(results => {
    process.exit(results?.overall?.success ? 0 : 1);
  });
}

module.exports = MasterBuildOrchestrator;