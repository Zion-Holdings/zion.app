#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedWorkflowMonitor {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.reportsDir = path.join(__dirname, 'reports');
    this.logsDir = path.join(__dirname, 'logs');
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
    
    this.healthData = this.loadHealthData();
  }

  loadHealthData() {
    const healthFile = path.join(this.logsDir, 'enhanced-health-data.json');
    try {
      if (fs.existsSync(healthFile)) {
        return JSON.parse(fs.readFileSync(healthFile, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new enhanced health data file');
    }
    return {
      lastCheck: new Date().toISOString(),
      totalWorkflows: 0,
      healthyWorkflows: 0,
      problematicWorkflows: [],
      fixesApplied: [],
      recommendations: [],
      healthScore: 0
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    const logFile = path.join(this.logsDir, 'enhanced-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, options = {}) {
    try {
      const output = execSync(command, { 
        stdio: 'pipe', 
        encoding: 'utf8', 
        ...options 
      });
      return { ok: true, output: output.trim() };
    } catch (error) {
      return { 
        ok: false, 
        error: error.message,
        stdout: error.stdout?.toString() || '',
        stderr: error.stderr?.toString() || ''
      };
    }
  }

  analyzeWorkflow(workflowFile) {
    const content = fs.readFileSync(workflowFile, 'utf8');
    const filename = path.basename(workflowFile);
    
    const analysis = {
      filename,
      path: workflowFile,
      issues: [],
      warnings: [],
      suggestions: [],
      isHealthy: true,
      healthScore: 100
    };

    // Check for common issues
    if (!content.includes('runs-on:')) {
      analysis.issues.push('Missing runs-on specification');
      analysis.healthScore -= 30;
      analysis.isHealthy = false;
    }

    if (!content.includes('steps:')) {
      analysis.issues.push('Missing steps section');
      analysis.healthScore -= 25;
      analysis.isHealthy = false;
    }

    if (!content.includes('actions/checkout')) {
      analysis.warnings.push('No checkout action found');
      analysis.healthScore -= 10;
    }

    if (!content.includes('timeout-minutes:')) {
      analysis.warnings.push('No timeout specified');
      analysis.healthScore -= 5;
    }

    if (!content.includes('permissions:')) {
      analysis.warnings.push('No permissions specified');
      analysis.healthScore -= 5;
    }

    if (!content.includes('concurrency:')) {
      analysis.warnings.push('No concurrency control');
      analysis.healthScore -= 5;
    }

    // Check for YAML syntax issues
    try {
      const yaml = require('js-yaml');
      yaml.load(content);
    } catch (error) {
      analysis.issues.push(`YAML syntax error: ${error.message}`);
      analysis.healthScore -= 40;
      analysis.isHealthy = false;
    }

    // Check for excessive frequency
    const cronMatch = content.match(/cron:\s*'([^']+)'/);
    if (cronMatch) {
      const cron = cronMatch[1];
      if (cron.includes('*/1') || cron.includes('*/2') || cron.includes('*/5')) {
        analysis.warnings.push(`High frequency execution: ${cron}`);
        analysis.healthScore -= 10;
      }
    }

    // Check for resource issues
    if (content.includes('--max-old-space-size=8192') || content.includes('--max-old-space-size=6144')) {
      analysis.warnings.push('High memory usage specified');
      analysis.healthScore -= 5;
    }

    // Generate suggestions
    if (analysis.healthScore < 80) {
      analysis.suggestions.push('Consider adding workflow_dispatch for manual execution');
    }

    if (content.includes('npm ci') && !content.includes('cache:')) {
      analysis.suggestions.push('Add npm cache for better performance');
    }

    if (!content.includes('continue-on-error: true') && content.includes('npm run')) {
      analysis.suggestions.push('Consider adding continue-on-error for non-critical steps');
    }

    return analysis;
  }

  async runComprehensiveAnalysis() {
    this.log('🚀 Starting Enhanced Workflow Monitor...');
    
    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(file => file.endsWith('.yml'))
      .map(file => path.join(this.workflowsDir, file));

    this.healthData.totalWorkflows = workflowFiles.length;
    this.healthData.problematicWorkflows = [];
    this.healthData.fixesApplied = [];
    this.healthData.recommendations = [];
    
    let totalHealthScore = 0;
    let healthyCount = 0;

    this.log(`📁 Found ${workflowFiles.length} workflow files`);

    for (const workflowFile of workflowFiles) {
      const analysis = this.analyzeWorkflow(workflowFile);
      
      if (analysis.isHealthy) {
        healthyCount++;
      } else {
        this.healthData.problematicWorkflows.push(analysis);
      }

      totalHealthScore += analysis.healthScore;

      // Log analysis results
      if (analysis.issues.length > 0 || analysis.warnings.length > 0) {
        this.log(`⚠️  ${analysis.filename}: ${analysis.healthScore}/100`);
        if (analysis.issues.length > 0) {
          analysis.issues.forEach(issue => this.log(`   ❌ ${issue}`));
        }
        if (analysis.warnings.length > 0) {
          analysis.warnings.forEach(warning => this.log(`   ⚠️  ${warning}`));
        }
      } else {
        this.log(`✅ ${analysis.filename}: ${analysis.healthScore}/100`);
      }
    }

    this.healthData.healthyWorkflows = healthyCount;
    this.healthData.healthScore = Math.round(totalHealthScore / workflowFiles.length);
    this.healthData.lastCheck = new Date().toISOString();

    // Generate recommendations
    this.generateRecommendations();

    // Save health data
    this.saveHealthData();

    // Generate report
    this.generateReport();

    this.log(`\n📊 Analysis Complete!`);
    this.log(`   Total Workflows: ${workflowFiles.length}`);
    this.log(`   Healthy: ${healthyCount}`);
    this.log(`   Problematic: ${workflowFiles.length - healthyCount}`);
    this.log(`   Overall Health Score: ${this.healthData.healthScore}/100`);

    return this.healthData;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.healthData.problematicWorkflows.length > 0) {
      recommendations.push('Run the workflow auto-healer to fix common issues');
      recommendations.push('Review problematic workflows for manual intervention');
    }

    if (this.healthData.healthScore < 80) {
      recommendations.push('Consider implementing workflow templates for consistency');
      recommendations.push('Add automated testing for workflow configurations');
    }

    if (this.healthData.totalWorkflows > 100) {
      recommendations.push('Consider consolidating similar workflows');
      recommendations.push('Implement workflow dependency management');
    }

    this.healthData.recommendations = recommendations;
  }

  generateReport() {
    const reportPath = path.join(this.reportsDir, 'workflow-health-report.md');
    
    let report = `# Workflow Health Report\n\n`;
    report += `**Generated:** ${new Date().toLocaleString()}\n\n`;
    report += `## Summary\n\n`;
    report += `- **Total Workflows:** ${this.healthData.totalWorkflows}\n`;
    report += `- **Healthy Workflows:** ${this.healthData.healthyWorkflows}\n`;
    report += `- **Problematic Workflows:** ${this.healthData.totalWorkflows - this.healthData.healthyWorkflows}\n`;
    report += `- **Overall Health Score:** ${this.healthData.healthScore}/100\n\n`;

    if (this.healthData.problematicWorkflows.length > 0) {
      report += `## Problematic Workflows\n\n`;
      this.healthData.problematicWorkflows.forEach(workflow => {
        report += `### ${workflow.filename}\n`;
        report += `**Health Score:** ${workflow.healthScore}/100\n\n`;
        
        if (workflow.issues.length > 0) {
          report += `**Issues:**\n`;
          workflow.issues.forEach(issue => report += `- ❌ ${issue}\n`);
          report += `\n`;
        }
        
        if (workflow.warnings.length > 0) {
          report += `**Warnings:**\n`;
          workflow.warnings.forEach(warning => report += `- ⚠️  ${warning}\n`);
          report += `\n`;
        }
        
        if (workflow.suggestions.length > 0) {
          report += `**Suggestions:**\n`;
          workflow.suggestions.forEach(suggestion => report += `- 💡 ${suggestion}\n`);
          report += `\n`;
        }
      });
    }

    if (this.healthData.recommendations.length > 0) {
      report += `## Recommendations\n\n`;
      this.healthData.recommendations.forEach(rec => {
        report += `- ${rec}\n`;
      });
      report += `\n`;
    }

    report += `## Next Steps\n\n`;
    report += `1. Review problematic workflows\n`;
    report += `2. Apply automated fixes where possible\n`;
    report += `3. Monitor health score improvements\n`;
    report += `4. Implement preventive measures\n`;

    fs.writeFileSync(reportPath, report);
    this.log(`📝 Report generated: ${reportPath}`);
  }

  saveHealthData() {
    const healthFile = path.join(this.logsDir, 'enhanced-health-data.json');
    fs.writeFileSync(healthFile, JSON.stringify(this.healthData, null, 2));
  }

  async run() {
    try {
      await this.runComprehensiveAnalysis();
    } catch (error) {
      this.log(`❌ Error during analysis: ${error.message}`);
      process.exit(1);
    }
  }
}

if (require.main === module) {
  const monitor = new EnhancedWorkflowMonitor();
  monitor.run();
}

module.exports = EnhancedWorkflowMonitor;