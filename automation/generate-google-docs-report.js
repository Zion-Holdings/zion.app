
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};
#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function generateGoogleDocsReport() {
  console.log('📊 Generating Google Docs Automation Report...\n');
  
  try {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {},
      details: {},
      recommendations: []};
    
    // Gather instruction history
    const historyFile = path.join(process.cwd(), 'automation/data/instructions/history.json');
    if (await fs.pathExists(historyFile)) {
      const history = await fs.readJson(historyFile);
      
      const completed = history.filter(h => h.status === 'completed');
      const failed = history.filter(h => h.status === 'failed');
      const pending = history.filter(h => h.status === 'pending');
      
      report.summary = {
        totalInstructions: history.length,
        completedInstructions: completed.length,
        failedInstructions: failed.length,
        pendingInstructions: pending.length,
        successRate: history.length > 0 ? ((completed.length / history.length) * 100).toFixed(2) : 0};
      
      // Analyze by instruction type
      const typeAnalysis = {};
      history.forEach(instruction = > {
        const type = instruction.type || 'unknown';
        if (!typeAnalysis[type]) {
          typeAnalysis[type] = { total: 0, completed: 0, failed: 0 };
        }
        typeAnalysis[type].total++;
        if (instruction.status === 'completed') typeAnalysis[type].completed++;
        if (instruction.status === 'failed') typeAnalysis[type].failed++;
      });
      
      report.details.typeAnalysis = typeAnalysis;
      
      // Recent activity
      const recent = history.slice(-10);
      report.details.recentActivity = recent.map(instruction => ({
        id: instruction.id,
        title: instruction.title,
        type: instruction.type,
        status: instruction.status,
        createdAt: instruction.createdAt,
        completedAt: instruction.completedAt;
      }));
      
      // Performance analysis
      const completedWithTime = completed.filter(c => c.createdAt && c.completedAt);
      if (completedWithTime.length > 0) {
        const executionTimes = completedWithTime.map(c => {
          const start = new Date(c.createdAt);
          const end = new Date(c.completedAt);
          return end - start;
        });
        
        const avgExecutionTime = executionTimes.reduce((sum, time) => sum + time, 0) / executionTimes.length;
        const minExecutionTime = Math.min(...executionTimes);
        const maxExecutionTime = Math.max(...executionTimes);
        
        report.details.performance = {
          averageExecutionTime: avgExecutionTime,
          minExecutionTime,
          maxExecutionTime,
          totalExecutionTime: executionTimes.reduce((sum, time) => sum + time, 0)};
      }
    }
    
    // Gather health data
    const healthFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/health.json');
    if (await fs.pathExists(healthFile)) {
      const health = await fs.readJson(healthFile);
      report.details.health = health;
    }
    
    // Gather system metrics
    const systemReportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/system-report.json');
    if (await fs.pathExists(systemReportFile)) {
      const systemReport = await fs.readJson(systemReportFile);
      report.details.systemMetrics = systemReport;
    }
    
    // Generate recommendations
    if (report.summary.failedInstructions > 0) {
      report.recommendations.push({
        type: 'error',
        message: `Address ${report.summary.failedInstructions} failed instructions`,
        priority: 'high'
      });
    }
    
    if (report.summary.successRate < 90) {
      report.recommendations.push({
        type: 'performance',
        message: `Improve success rate from ${report.summary.successRate}% to above 90%`,
        priority: 'medium'
      });
    }
    
    if (report.summary.pendingInstructions > 0) {
      report.recommendations.push({
        type: 'workflow',
        message: `Process ${report.summary.pendingInstructions} pending instructions`,
        priority: 'low'
      });
    }
    
    // Save comprehensive report
    const reportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/comprehensive-report.json');
    await fs.writeJson(reportFile, report, { spaces: 2 });
    
    // Generate summary for console
    console.log('📈 Report Summary:');
    console.log(`  Total Instructions: ${report.summary.totalInstructions}`);
    console.log(`  Completed: ${report.summary.completedInstructions}`);
    console.log(`  Failed: ${report.summary.failedInstructions}`);
    console.log(`  Pending: ${report.summary.pendingInstructions}`);
    console.log(`  Success Rate: ${report.summary.successRate}%`);
    
    if (report.details.performance) {
      console.log('\n⏱️ Performance Metrics:');
      console.log(`  Average Execution Time: ${Math.floor(report.details.performance.averageExecutionTime / 300)} seconds`);
      console.log(`  Min Execution Time: ${Math.floor(report.details.performance.minExecutionTime / 300)} seconds`);
      console.log(`  Max Execution Time: ${Math.floor(report.details.performance.maxExecutionTime / 300)} seconds`);
    }
    
    if (report.details.typeAnalysis) {
      console.log('\n📊 Analysis by Type:');
      Object.entries(report.details.typeAnalysis).forEach(([type, stats]) => {
        const successRate = stats.total > 0 ? ((stats.completed / stats.total) * 100).toFixed(1) : 0;
        console.log(`  ${type}: ${stats.completed}/${stats.total} (${successRate}%)`);
      });
    }
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec = > {
        const priorityIcon = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`  ${priorityIcon} ${rec.message}`);
      });
    }
    
    console.log(`\n📄 Full report saved to: ${reportFile}`);
    console.log('✅ Report generation completed');
    
  } catch (error) {
    console.error('❌ Error generating report:', error);
  }
}

// Run if called directly
if (require.main === module) {
  generateGoogleDocsReport();
}

module.exports = generateGoogleDocsReport;




