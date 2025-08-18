#!/usr/bin/env node

/**
 * Continuous Automation Improvement System
 * This script analyzes and improves automation workflows
 */

const fs = require('fs');
const path = require('path');

class ContinuousImprovementSystem {
  constructor() {
    this.workflowsDir = '.github/workflows';
    this.automationDir = 'automation';
    this.reportsDir = 'reports';
  }

  async analyzeWorkflows() {
    console.log('🔍 Analyzing workflow health...');
    
    try {
      const workflowFiles = this.getWorkflowFiles();
      const analysis = {
        total: workflowFiles.length,
        valid: 0,
        issues: [],
        recommendations: []
      };

      for (const file of workflowFiles) {
        const result = await this.validateWorkflow(file);
        if (result.valid) {
          analysis.valid++;
        } else {
          analysis.issues.push(result);
        }
      }

      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      return analysis;
    } catch (error) {
      console.error('❌ Error analyzing workflows:', error.message);
      return null;
    }
  }

  getWorkflowFiles() {
    try {
      if (!fs.existsSync(this.workflowsDir)) {
        return [];
      }
      
      return fs.readdirSync(this.workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .map(file => path.join(this.workflowsDir, file));
    } catch (error) {
      console.error('❌ Error reading workflow directory:', error.message);
      return [];
    }
  }

  async validateWorkflow(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      const issues = [];
      
      // Check for basic YAML syntax
      try {
        require('yaml').parse(content);
      } catch (error) {
        issues.push(`Invalid YAML syntax: ${error.message}`);
      }
      
      // Check for common issues
      if (content.includes('\\n') && content.includes('"')) {
        issues.push('Malformed multi-line commands detected');
      }
      
      if (!content.includes('timeout-minutes')) {
        issues.push('Missing timeout configuration');
      }
      
      if (!content.includes('concurrency')) {
        issues.push('Missing concurrency control');
      }
      
      return {
        file: fileName,
        valid: issues.length === 0,
        issues
      };
    } catch (error) {
      return {
        file: path.basename(filePath),
        valid: false,
        issues: [`File read error: ${error.message}`]
      };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.issues.length > 0) {
      recommendations.push('Fix workflow syntax errors and validation issues');
    }
    
    if (analysis.total > 50) {
      recommendations.push('Consider consolidating workflows to reduce complexity');
    }
    
    recommendations.push('Add proper error handling with continue-on-error and if: always()');
    recommendations.push('Implement proper timeout values for all jobs');
    recommendations.push('Use concurrency groups to prevent resource conflicts');
    
    return recommendations;
  }

  async generateReport(analysis) {
    if (!analysis) return;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: analysis.total,
        valid: analysis.valid,
        issues: analysis.issues.length
      },
      issues: analysis.issues,
      recommendations: analysis.recommendations
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    const reportPath = path.join(this.reportsDir, 'workflow-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Report generated:', reportPath);
    return report;
  }

  async run(mode = 'once') {
    console.log('🚀 Starting Continuous Improvement System...');
    
    try {
      const analysis = await this.analyzeWorkflows();
      const report = await this.generateReport(analysis);
      
      if (report) {
        console.log('✅ Analysis completed successfully');
        console.log(`📈 Workflows: ${report.summary.total} total, ${report.summary.valid} valid, ${report.summary.issues} issues`);
        
        if (report.recommendations.length > 0) {
          console.log('💡 Recommendations:');
          report.recommendations.forEach((rec, index) => {
            console.log(`  ${index + 1}. ${rec}`);
          });
        }
      }
      
      if (mode === 'continuous') {
        console.log('🔄 Running in continuous mode...');
        // In continuous mode, you could set up file watching or scheduling
        setInterval(async () => {
          console.log('🔄 Running periodic analysis...');
          await this.run('once');
        }, 300000); // Every 5 minutes
      }
      
    } catch (error) {
      console.error('❌ System error:', error.message);
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const system = new ContinuousImprovementSystem();
  const mode = process.argv[2] || 'once';
  system.run(mode);
}

module.exports = ContinuousImprovementSystem;