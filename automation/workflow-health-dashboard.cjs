#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class WorkflowHealthDashboard {
  constructor() {
    this.logsDir = path.join(__dirname, 'logs');
    this.dashboardData = this.loadDashboardData();
  }

  loadDashboardData() {
    const data = {
      healthReport: null,
      workflowStatus: null,
      failureHistory: null,
      prioritizationReport: null,
      watchdogReport: null
    };

    try {
      const healthPath = path.join(this.logsDir, 'workflow-health-report.json');
      if (fs.existsSync(healthPath)) {
        data.healthReport = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
      }
    } catch (error) {
      console.log('No health report data available');
    }

    try {
      const statusPath = path.join(this.logsDir, 'workflow-status.json');
      if (fs.existsSync(statusPath)) {
        data.workflowStatus = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
      }
    } catch (error) {
      console.log('No workflow status data available');
    }

    try {
      const failurePath = path.join(this.logsDir, 'workflow-failure-history.json');
      if (fs.existsSync(failurePath)) {
        data.failureHistory = JSON.parse(fs.readFileSync(failurePath, 'utf8'));
      }
    } catch (error) {
      console.log('No failure history data available');
    }

    try {
      const priorityPath = path.join(this.logsDir, 'workflow-prioritization-report.json');
      if (fs.existsSync(priorityPath)) {
        data.prioritizationReport = JSON.parse(fs.readFileSync(priorityPath, 'utf8'));
      }
    } catch (error) {
      console.log('No prioritization report data available');
    }

    try {
      const watchdogPath = path.join(this.logsDir, 'workflow-watchdog.log');
      if (fs.existsSync(watchdogPath)) {
        data.watchdogLog = fs.readFileSync(watchdogPath, 'utf8');
      }
    } catch (error) {
      console.log('No watchdog log data available');
    }

    return data;
  }

  generateDashboard() {
    console.log('\n' + '='.repeat(80));
    console.log('🚀 WORKFLOW HEALTH DASHBOARD');
    console.log('='.repeat(80));
    
    this.displayHealthSummary();
    this.displayWorkflowStatus();
    this.displayFailureAnalysis();
    this.displayPrioritizationStatus();
    this.displayWatchdogStatus();
    this.displayRecommendations();
    
    console.log('\n' + '='.repeat(80));
    console.log('📊 Dashboard generated at:', new Date().toLocaleString());
    console.log('='.repeat(80));
  }

  displayHealthSummary() {
    console.log('\n📋 HEALTH SUMMARY');
    console.log('-'.repeat(40));
    
    if (this.dashboardData.healthReport) {
      const report = this.dashboardData.healthReport;
      console.log(`🏥 Health Score: ${report.summary?.healthScore || 'N/A'}/100`);
      console.log(`📁 Total Workflows: ${report.summary?.totalWorkflows || 'N/A'}`);
      console.log(`✅ Active Workflows: ${report.summary?.activeWorkflows || 'N/A'}`);
      console.log(`❌ Failing Workflows: ${report.summary?.failingWorkflows || 'N/A'}`);
      console.log(`🔧 Fixes Applied: ${report.fixesApplied?.length || 0}`);
      console.log(`💡 Recommendations: ${report.recommendations?.length || 0}`);
    } else {
      console.log('⚠️ No health report data available');
    }
  }

  displayWorkflowStatus() {
    console.log('\n📊 WORKFLOW STATUS OVERVIEW');
    console.log('-'.repeat(40));
    
    if (this.dashboardData.workflowStatus) {
      const statuses = Object.values(this.dashboardData.workflowStatus);
      const healthy = statuses.filter(s => s.health === 'healthy').length;
      const failing = statuses.filter(s => s.health === 'failing').length;
      const errors = statuses.filter(s => s.health === 'error').length;
      
      console.log(`✅ Healthy: ${healthy}`);
      console.log(`❌ Failing: ${failing}`);
      console.log(`🚨 Errors: ${errors}`);
      
      // Show top failing workflows
      if (failing > 0) {
        console.log('\n🚨 Top Failing Workflows:');
        const failingWorkflows = statuses
          .filter(s => s.health === 'failing')
          .sort((a, b) => (b.issues?.length || 0) - (a.issues?.length || 0))
          .slice(0, 5);
        
        failingWorkflows.forEach(workflow => {
          const issueCount = workflow.issues?.length || 0;
          const severity = workflow.severity || 'unknown';
          console.log(`   • ${workflow.file} (${issueCount} issues, ${severity} severity)`);
        });
      }
    } else {
      console.log('⚠️ No workflow status data available');
    }
  }

  displayFailureAnalysis() {
    console.log('\n📈 FAILURE ANALYSIS');
    console.log('-'.repeat(40));
    
    if (this.dashboardData.failureHistory) {
      const workflows = Object.keys(this.dashboardData.failureHistory);
      if (workflows.length === 0) {
        console.log('✅ No failure history recorded');
        return;
      }
      
      const totalFailures = workflows.reduce((sum, workflow) => {
        return sum + (this.dashboardData.failureHistory[workflow].totalFailures || 0);
      }, 0);
      
      console.log(`📊 Total Failures Recorded: ${totalFailures}`);
      console.log(`📁 Workflows with Failures: ${workflows.length}`);
      
      // Show workflows with most failures
      const topFailures = workflows
        .map(workflow => ({
          name: workflow,
          failures: this.dashboardData.failureHistory[workflow].totalFailures || 0,
          lastFailure: this.dashboardData.failureHistory[workflow].lastFailure
        }))
        .sort((a, b) => b.failures - a.failures)
        .slice(0, 5);
      
      if (topFailures.length > 0) {
        console.log('\n🔥 Workflows with Most Failures:');
        topFailures.forEach((workflow, index) => {
          const lastFailure = workflow.lastFailure ? 
            new Date(workflow.lastFailure).toLocaleDateString() : 'Never';
          console.log(`   ${index + 1}. ${workflow.name}: ${workflow.failures} failures (Last: ${lastFailure})`);
        });
      }
    } else {
      console.log('⚠️ No failure history data available');
    }
  }

  displayPrioritizationStatus() {
    console.log('\n🎯 PRIORITIZATION STATUS');
    console.log('-'.repeat(40));
    
    if (this.dashboardData.prioritizationReport) {
      const report = this.dashboardData.prioritizationReport;
      console.log(`📊 Total Workflows: ${report.summary?.total || 'N/A'}`);
      console.log(`🔴 Critical: ${report.summary?.critical || 'N/A'}`);
      console.log(`🟠 High: ${report.summary?.high || 'N/A'}`);
      console.log(`🟡 Medium: ${report.summary?.medium || 'N/A'}`);
      console.log(`🟢 Low: ${report.summary?.low || 'N/A'}`);
      console.log(`🔧 Optimized: ${report.summary?.optimized || 'N/A'}`);
      
      if (report.recommendations?.length > 0) {
        console.log(`\n💡 Prioritization Recommendations: ${report.recommendations.length}`);
        report.recommendations.slice(0, 3).forEach(rec => {
          console.log(`   • ${rec.message} (${rec.priority} priority)`);
        });
      }
    } else {
      console.log('⚠️ No prioritization report data available');
    }
  }

  displayWatchdogStatus() {
    console.log('\n👀 WATCHDOG STATUS');
    console.log('-'.repeat(40));
    
    if (this.dashboardData.watchdogLog) {
      const logLines = this.dashboardData.watchdogLog.split('\n');
      const recentLogs = logLines.slice(-10).filter(line => line.trim());
      
      console.log('📝 Recent Watchdog Activity:');
      recentLogs.forEach(line => {
        if (line.includes('🚨') || line.includes('❌')) {
          console.log(`   🔴 ${line.split('] ')[1] || line}`);
        } else if (line.includes('✅') || line.includes('🔄')) {
          console.log(`   🟢 ${line.split('] ')[1] || line}`);
        } else {
          console.log(`   ℹ️  ${line.split('] ')[1] || line}`);
        }
      });
    } else {
      console.log('⚠️ No watchdog log data available');
    }
  }

  displayRecommendations() {
    console.log('\n💡 ACTIONABLE RECOMMENDATIONS');
    console.log('-'.repeat(40));
    
    const recommendations = [];
    
    // Collect recommendations from all sources
    if (this.dashboardData.healthReport?.recommendations) {
      recommendations.push(...this.dashboardData.healthReport.recommendations);
    }
    
    if (this.dashboardData.prioritizationReport?.recommendations) {
      recommendations.push(...this.dashboardData.prioritizationReport.recommendations);
    }
    
    if (recommendations.length === 0) {
      console.log('✅ No immediate recommendations');
      return;
    }
    
    // Group by priority
    const byPriority = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };
    
    recommendations.forEach(rec => {
      const priority = rec.priority || 'medium';
      byPriority[priority].push(rec);
    });
    
    // Display by priority
    Object.entries(byPriority).forEach(([priority, recs]) => {
      if (recs.length > 0) {
        const emoji = priority === 'critical' ? '🚨' : 
                     priority === 'high' ? '🔥' : 
                     priority === 'medium' ? '⚠️' : 'ℹ️';
        
        console.log(`\n${emoji} ${priority.toUpperCase()} PRIORITY (${recs.length}):`);
        recs.slice(0, 3).forEach(rec => {
          console.log(`   • ${rec.message || rec.type}`);
        });
      }
    });
  }

  generateHTMLDashboard() {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workflow Health Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f6f8fa; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #24292e; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .header h1 { margin: 0; font-size: 24px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .card h3 { margin-top: 0; color: #24292e; border-bottom: 2px solid #e1e4e8; padding-bottom: 10px; }
        .metric { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #f1f3f4; }
        .metric:last-child { border-bottom: none; }
        .value { font-weight: bold; }
        .health-score { font-size: 48px; font-weight: bold; text-align: center; margin: 20px 0; }
        .score-excellent { color: #28a745; }
        .score-good { color: #17a2b8; }
        .score-warning { color: #ffc107; }
        .score-danger { color: #dc3545; }
        .status-healthy { color: #28a745; }
        .status-failing { color: #dc3545; }
        .status-error { color: #fd7e14; }
        .recommendation { background: #f8f9fa; padding: 10px; margin: 5px 0; border-radius: 4px; border-left: 4px solid #007bff; }
        .recommendation.critical { border-left-color: #dc3545; background: #f8d7da; }
        .recommendation.high { border-left-color: #fd7e14; background: #fff3cd; }
        .recommendation.medium { border-left-color: #ffc107; background: #fff3cd; }
        .recommendation.low { border-left-color: #28a745; background: #d4edda; }
        .timestamp { color: #6c757d; font-size: 12px; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Workflow Health Dashboard</h1>
        </div>
        
        <div class="grid">
            <div class="card">
                <h3>🏥 Health Overview</h3>
                <div class="health-score ${this.getHealthScoreClass()}">${this.dashboardData.healthReport?.summary?.healthScore || 'N/A'}</div>
                <div style="text-align: center; color: #6c757d;">Health Score</div>
                <div class="metric">
                    <span>Total Workflows:</span>
                    <span class="value">${this.dashboardData.healthReport?.summary?.totalWorkflows || 'N/A'}</span>
                </div>
                <div class="metric">
                    <span>Active:</span>
                    <span class="value status-healthy">${this.dashboardData.healthReport?.summary?.activeWorkflows || 'N/A'}</span>
                </div>
                <div class="metric">
                    <span>Failing:</span>
                    <span class="value status-failing">${this.dashboardData.healthReport?.summary?.failingWorkflows || 'N/A'}</span>
                </div>
            </div>
            
            <div class="card">
                <h3>📊 Status Breakdown</h3>
                ${this.generateStatusBreakdown()}
            </div>
            
            <div class="card">
                <h3>🎯 Priority Distribution</h3>
                ${this.generatePriorityBreakdown()}
            </div>
            
            <div class="card">
                <h3>📈 Failure Analysis</h3>
                ${this.generateFailureAnalysis()}
            </div>
        </div>
        
        <div class="card">
            <h3>💡 Recommendations</h3>
            ${this.generateRecommendationsHTML()}
        </div>
        
        <div class="timestamp">
            Last updated: ${new Date().toLocaleString()}
        </div>
    </div>
</body>
</html>`;

    const htmlPath = path.join(this.logsDir, 'workflow-health-dashboard.html');
    fs.writeFileSync(htmlPath, html);
    console.log(`\n🌐 HTML Dashboard saved to: ${htmlPath}`);
    
    return htmlPath;
  }

  getHealthScoreClass() {
    const score = this.dashboardData.healthReport?.summary?.healthScore;
    if (!score) return 'score-danger';
    if (score >= 80) return 'score-excellent';
    if (score >= 60) return 'score-good';
    if (score >= 40) return 'score-warning';
    return 'score-danger';
  }

  generateStatusBreakdown() {
    if (!this.dashboardData.workflowStatus) return '<p>No status data available</p>';
    
    const statuses = Object.values(this.dashboardData.workflowStatus);
    const healthy = statuses.filter(s => s.health === 'healthy').length;
    const failing = statuses.filter(s => s.health === 'failing').length;
    const errors = statuses.filter(s => s.health === 'error').length;
    
    return `
        <div class="metric">
            <span>Healthy:</span>
            <span class="value status-healthy">${healthy}</span>
        </div>
        <div class="metric">
            <span>Failing:</span>
            <span class="value status-failing">${failing}</span>
        </div>
        <div class="metric">
            <span>Errors:</span>
            <span class="value status-error">${errors}</span>
        </div>
    `;
  }

  generatePriorityBreakdown() {
    if (!this.dashboardData.prioritizationReport) return '<p>No prioritization data available</p>';
    
    const report = this.dashboardData.prioritizationReport;
    
    return `
        <div class="metric">
            <span>Critical:</span>
            <span class="value">${report.summary?.critical || 0}</span>
        </div>
        <div class="metric">
            <span>High:</span>
            <span class="value">${report.summary?.high || 0}</span>
        </div>
        <div class="metric">
            <span>Medium:</span>
            <span class="value">${report.summary?.medium || 0}</span>
        </div>
        <div class="metric">
            <span>Low:</span>
            <span class="value">${report.summary?.low || 0}</span>
        </div>
    `;
  }

  generateFailureAnalysis() {
    if (!this.dashboardData.failureHistory) return '<p>No failure data available</p>';
    
    const workflows = Object.keys(this.dashboardData.failureHistory);
    const totalFailures = workflows.reduce((sum, workflow) => {
      return sum + (this.dashboardData.failureHistory[workflow].totalFailures || 0);
    }, 0);
    
    return `
        <div class="metric">
            <span>Total Failures:</span>
            <span class="value">${totalFailures}</span>
        </div>
        <div class="metric">
            <span>Workflows with Failures:</span>
            <span class="value">${workflows.length}</span>
        </div>
    `;
  }

  generateRecommendationsHTML() {
    const recommendations = [];
    
    if (this.dashboardData.healthReport?.recommendations) {
      recommendations.push(...this.dashboardData.healthReport.recommendations);
    }
    
    if (this.dashboardData.prioritizationReport?.recommendations) {
      recommendations.push(...this.dashboardData.prioritizationReport.recommendations);
    }
    
    if (recommendations.length === 0) {
      return '<p>✅ No immediate recommendations</p>';
    }
    
    const byPriority = { critical: [], high: [], medium: [], low: [] };
    recommendations.forEach(rec => {
      const priority = rec.priority || 'medium';
      byPriority[priority].push(rec);
    });
    
    let html = '';
    Object.entries(byPriority).forEach(([priority, recs]) => {
      if (recs.length > 0) {
        const emoji = priority === 'critical' ? '🚨' : 
                     priority === 'high' ? '🔥' : 
                     priority === 'medium' ? '⚠️' : 'ℹ️';
        
        html += `<h4>${emoji} ${priority.toUpperCase()} PRIORITY (${recs.length})</h4>`;
        recs.slice(0, 5).forEach(rec => {
          html += `<div class="recommendation ${priority}">${rec.message || rec.type}</div>`;
        });
      }
    });
    
    return html;
  }

  async run() {
    console.log('🚀 Starting Workflow Health Dashboard...');
    
    try {
      // Refresh data
      this.dashboardData = this.loadDashboardData();
      
      // Generate console dashboard
      this.generateDashboard();
      
      // Generate HTML dashboard
      const htmlPath = this.generateHTMLDashboard();
      
      console.log('\n✅ Dashboard generation completed successfully');
      console.log(`📊 Console dashboard displayed above`);
      console.log(`🌐 HTML dashboard saved to: ${htmlPath}`);
      
    } catch (error) {
      console.error(`❌ Dashboard generation failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const dashboard = new WorkflowHealthDashboard();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'generate';
  
  switch (command) {
    case 'generate':
    case 'run':
      dashboard.run().catch(console.error);
      break;
    case 'html':
      dashboard.generateHTMLDashboard();
      break;
    case 'console':
      dashboard.generateDashboard();
      break;
    default:
      console.log('Usage: node workflow-health-dashboard.cjs [generate|html|console]');
      process.exit(1);
  }
}

module.exports = WorkflowHealthDashboard;
