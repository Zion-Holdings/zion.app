const LayoutValidationAgent = require('./layout-validation-agent');
const MobileOptimizationAgent = require('./mobile-optimization-agent');
const SidebarIntegrationAgent = require('./sidebar-integration-agent');
const fs = require('fs');
const path = require('path');

class FrontendAutomationOrchestrator {
  constructor() {
    this.layoutAgent = new LayoutValidationAgent();
    this.mobileAgent = new MobileOptimizationAgent();
    this.sidebarAgent = new SidebarIntegrationAgent();
    this.reportsDir = path.join(process.cwd(), 'automation/frontend-sync-agents/reports');
    this.logsDir = path.join(process.cwd(), 'automation/frontend-sync-agents/logs');
    
    // Ensure directories exist
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async runFullAnalysis() {
    console.log('🚀 Starting comprehensive frontend analysis...');
    
    const startTime = Date.now();
    const results = {
      layout: await this.layoutAgent.analyzeLayoutIssues(),
      mobile: await this.mobileAgent.analyzeMobileIssues(),
      sidebar: await this.sidebarAgent.analyzeSidebarIssues(),
      summary: {},
      timestamp: new Date().toISOString()
    };

    // Generate comprehensive summary
    results.summary = this.generateComprehensiveSummary(results);
    
    // Save detailed report
    await this.saveReport(results);
    
    // Log analysis completion
    const duration = Date.now() - startTime;
    console.log(`✅ Analysis completed in ${duration}ms`);
    console.log(`📊 Found ${results.summary.totalIssues} issues across all categories`);
    
    return results;
  }

  async applyAllFixes() {
    console.log('🔧 Applying all frontend fixes...');
    
    const startTime = Date.now();
    const results = {
      layout: await this.layoutAgent.applyFixes(),
      mobile: await this.mobileAgent.applyFixes(),
      sidebar: await this.sidebarAgent.applyFixes(),
      timestamp: new Date().toISOString()
    };

    // Log fix completion
    const duration = Date.now() - startTime;
    console.log(`✅ All fixes applied in ${duration}ms`);
    
    return results;
  }

  async runAutomatedFixCycle() {
    console.log('🔄 Starting automated fix cycle...');
    
    // Step 1: Analyze all issues
    const analysis = await this.runFullAnalysis();
    
    // Step 2: Apply fixes if issues found
    if (analysis.summary.totalIssues > 0) {
      console.log('🔧 Issues detected, applying fixes...');
      const fixResults = await this.applyAllFixes();
      
      // Step 3: Re-analyze to verify fixes
      console.log('🔍 Re-analyzing to verify fixes...');
      const verification = await this.runFullAnalysis();
      
      return {
        initialAnalysis: analysis,
        fixResults: fixResults,
        verification: verification,
        success: verification.summary.totalIssues === 0
      };
    } else {
      console.log('✅ No issues found - frontend is optimized!');
      return {
        initialAnalysis: analysis,
        success: true
      };
    }
  }

  generateComprehensiveSummary(results) {
    const allIssues = [
      ...results.layout.issues,
      ...results.mobile.issues,
      ...results.sidebar.issues
    ];
    
    const allFixes = [
      ...results.layout.fixes,
      ...results.mobile.fixes,
      ...results.sidebar.fixes
    ];
    
    const issuesBySeverity = allIssues.reduce((acc, issue) => {
      acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      return acc;
    }, {});
    
    const issuesByCategory = allIssues.reduce((acc, issue) => {
      const category = issue.type.split('_')[0];
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
    
    return {
      totalIssues: allIssues.length,
      totalFixes: allFixes.length,
      issuesBySeverity,
      issuesByCategory,
      criticalIssues: allIssues.filter(issue => issue.severity === 'high').length,
      mediumIssues: allIssues.filter(issue => issue.severity === 'medium').length,
      lowIssues: allIssues.filter(issue => issue.severity === 'low').length
    };
  }

  async saveReport(results) {
    const reportPath = path.join(this.reportsDir, `frontend-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`📄 Report saved to ${reportPath}`);
  }

  async runContinuousMonitoring() {
    console.log('👁️ Starting continuous frontend monitoring...');
    
    // Run initial analysis
    let lastAnalysis = await this.runFullAnalysis();
    
    // Set up file watching for changes
    const chokidar = require('chokidar');
    const watcher = chokidar.watch([
      'pages/**/*.tsx',
      'pages/**/*.jsx',
      'components/**/*.tsx',
      'components/**/*.jsx',
      'styles/**/*.css'
    ], {
      ignored: /node_modules/,
      persistent: true
    });
    
    let debounceTimer;
    
    watcher.on('change', async (filePath) => {
      console.log(`📝 File changed: ${filePath}`);
      
      // Debounce rapid changes
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(async () => {
        console.log('🔄 Detected changes, running analysis...');
        
        const newAnalysis = await this.runFullAnalysis();
        
        // Compare with last analysis
        const newIssues = this.compareAnalyses(lastAnalysis, newAnalysis);
        
        if (newIssues.length > 0) {
          console.log(`⚠️ Found ${newIssues.length} new issues, applying fixes...`);
          await this.applyAllFixes();
          
          // Verify fixes
          const verification = await this.runFullAnalysis();
          console.log(`✅ Fixes applied. Remaining issues: ${verification.summary.totalIssues}`);
        }
        
        lastAnalysis = newAnalysis;
      }, 2000); // 2 second debounce
    });
    
    console.log('👁️ Continuous monitoring active - watching for changes...');
    
    return watcher;
  }

  compareAnalyses(oldAnalysis, newAnalysis) {
    const oldIssues = [
      ...oldAnalysis.layout.issues,
      ...oldAnalysis.mobile.issues,
      ...oldAnalysis.sidebar.issues
    ];
    
    const newIssues = [
      ...newAnalysis.layout.issues,
      ...newAnalysis.mobile.issues,
      ...newAnalysis.sidebar.issues
    ];
    
    // Find new issues by comparing file paths and issue types
    return newIssues.filter(newIssue => 
      !oldIssues.some(oldIssue => 
        oldIssue.file === newIssue.file && oldIssue.type === newIssue.type
      )
    );
  }

  async generateHealthReport() {
    console.log('🏥 Generating frontend health report...');
    
    const analysis = await this.runFullAnalysis();
    
    const healthScore = this.calculateHealthScore(analysis.summary);
    const recommendations = this.generateRecommendations(analysis);
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      healthScore,
      summary: analysis.summary,
      recommendations,
      status: healthScore >= 90 ? 'excellent' : healthScore >= 70 ? 'good' : healthScore >= 50 ? 'fair' : 'poor'
    };
    
    const reportPath = path.join(this.reportsDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    
    console.log(`🏥 Health report saved: ${reportPath}`);
    console.log(`📊 Health Score: ${healthScore}/100 (${healthReport.status})`);
    
    return healthReport;
  }

  calculateHealthScore(summary) {
    let score = 100;
    
    // Deduct points for issues
    score -= summary.criticalIssues * 10;
    score -= summary.mediumIssues * 5;
    score -= summary.lowIssues * 2;
    
    // Bonus for having fixes available
    if (summary.totalFixes > 0) {
      score += Math.min(10, summary.totalFixes);
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.summary.criticalIssues > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Apply critical fixes immediately',
        description: `${analysis.summary.criticalIssues} critical issues need immediate attention`
      });
    }
    
    if (analysis.summary.mediumIssues > 5) {
      recommendations.push({
        priority: 'medium',
        action: 'Review and fix medium priority issues',
        description: `${analysis.summary.mediumIssues} medium priority issues should be addressed`
      });
    }
    
    if (analysis.mobile.issues.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Improve mobile responsiveness',
        description: 'Mobile optimization issues detected'
      });
    }
    
    if (analysis.sidebar.issues.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Fix sidebar integration issues',
        description: 'Sidebar functionality issues detected'
      });
    }
    
    return recommendations;
  }

  async runScheduledMaintenance() {
    console.log('🛠️ Running scheduled frontend maintenance...');
    
    // Run full analysis and fixes
    const results = await this.runAutomatedFixCycle();
    
    // Generate health report
    const healthReport = await this.generateHealthReport();
    
    // Log maintenance completion
    console.log('✅ Scheduled maintenance completed');
    
    return {
      maintenanceResults: results,
      healthReport: healthReport
    };
  }
}

module.exports = FrontendAutomationOrchestrator; 