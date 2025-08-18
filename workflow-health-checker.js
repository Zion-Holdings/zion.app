#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class WorkflowHealthChecker {
  constructor() {
    this.workflowsDir = path.join(__dirname, '.github', 'workflows');
    this.results = [];
    this.categories = {
      'ci-cd': ['ci', 'build', 'deploy', 'release'],
      'testing': ['test', 'playwright', 'smoke'],
      'security': ['security', 'audit', 'scan', 'gitleaks'],
      'quality': ['lint', 'type-check', 'format'],
      'performance': ['performance', 'lighthouse', 'pa11y'],
      'automation': ['auto', 'autonomous', 'workflow'],
      'maintenance': ['maintenance', 'cleanup', 'deps'],
      'monitoring': ['monitor', 'health', 'watchdog']
    };
  }

  categorizeWorkflow(filename) {
    const lowerName = filename.toLowerCase();
    
    for (const [category, keywords] of Object.entries(this.categories)) {
      if (keywords.some(keyword => lowerName.includes(keyword))) {
        return category;
      }
    }
    
    return 'other';
  }

  analyzeWorkflowStructure(workflow, filename) {
    const analysis = {
      filename,
      name: workflow.name || 'Unnamed',
      category: this.categorizeWorkflow(filename),
      hasJobs: !!workflow.jobs,
      jobCount: workflow.jobs ? Object.keys(workflow.jobs).length : 0,
      hasTriggers: !!workflow.on,
      triggers: workflow.on ? Object.keys(workflow.on) : [],
      hasPermissions: !!workflow.permissions,
      hasConcurrency: !!workflow.concurrency,
      hasTimeout: false,
      hasEnvironment: false,
      issues: []
    };

    // Check for common issues
    if (workflow.jobs) {
      Object.entries(workflow.jobs).forEach(([jobName, job]) => {
        if (!job.runs_on && job.runs_on !== 'self-hosted') {
          analysis.issues.push(`Job '${jobName}' missing runs_on`);
        }
        
        if (job.timeout_minutes) {
          analysis.hasTimeout = true;
        }
        
        if (job.environment) {
          analysis.hasEnvironment = true;
        }
        
        if (job.steps) {
          job.steps.forEach((step, index) => {
            if (!step.name && !step.uses && !step.run) {
              analysis.issues.push(`Job '${jobName}' step ${index + 1} missing name/uses/run`);
            }
          });
        }
      });
    }

    return analysis;
  }

  checkWorkflowFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const workflow = yaml.load(content);
      
      if (!workflow) {
        return {
          filename: path.basename(filePath),
          valid: false,
          error: 'Empty or invalid YAML'
        };
      }

      const analysis = this.analyzeWorkflowStructure(workflow, path.basename(filePath));
      
      return {
        filename: path.basename(filePath),
        valid: true,
        analysis,
        error: null
      };
    } catch (error) {
      return {
        filename: path.basename(filePath),
        valid: false,
        error: `YAML parsing error: ${error.message}`
      };
    }
  }

  generateReport() {
    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .sort();

    console.log('🔍 GitHub Actions Workflow Health Check\n');
    console.log(`Analyzing ${workflowFiles.length} workflow files...\n`);

    let totalValid = 0;
    let totalInvalid = 0;
    const categoryStats = {};
    const issues = [];

    workflowFiles.forEach(file => {
      const result = this.checkWorkflowFile(path.join(this.workflowsDir, file));
      this.results.push(result);

      if (result.valid) {
        totalValid++;
        const category = result.analysis.category;
        categoryStats[category] = (categoryStats[category] || 0) + 1;
        
        if (result.analysis.issues.length > 0) {
          issues.push({
            filename: result.filename,
            issues: result.analysis.issues
          });
        }
      } else {
        totalInvalid++;
        console.log(`❌ ${result.filename}: ${result.error}`);
      }
    });

    // Display summary
    console.log('='.repeat(60));
    console.log('📊 WORKFLOW HEALTH SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total workflows: ${workflowFiles.length}`);
    console.log(`Valid: ${totalValid}`);
    console.log(`Invalid: ${totalInvalid}`);
    console.log(`Success rate: ${((totalValid / workflowFiles.length) * 100).toFixed(1)}%`);

    // Display category breakdown
    console.log('\n📁 WORKFLOW CATEGORIES:');
    Object.entries(categoryStats)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        console.log(`  ${category}: ${count} workflows`);
      });

    // Display issues
    if (issues.length > 0) {
      console.log('\n⚠️  WORKFLOW ISSUES FOUND:');
      issues.forEach(item => {
        console.log(`\n  ${item.filename}:`);
        item.issues.forEach(issue => {
          console.log(`    - ${issue}`);
        });
      });
    }

    // Display recommendations
    console.log('\n💡 RECOMMENDATIONS:');
    if (totalInvalid > 0) {
      console.log('  • Fix invalid YAML files first');
    }
    if (issues.length > 0) {
      console.log('  • Address workflow structure issues');
    }
    if (!categoryStats['ci-cd']) {
      console.log('  • Consider adding CI/CD workflows');
    }
    if (!categoryStats['testing']) {
      console.log('  • Consider adding testing workflows');
    }
    if (!categoryStats['security']) {
      console.log('  • Consider adding security scanning workflows');
    }

    return {
      total: workflowFiles.length,
      valid: totalValid,
      invalid: totalInvalid,
      categoryStats,
      issues
    };
  }

  exportResults(outputPath) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.length,
        valid: this.results.filter(r => r.valid).length,
        invalid: this.results.filter(r => !r.valid).length
      },
      workflows: this.results
    };

    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Results exported to: ${outputPath}`);
  }
}

// Run the health check
if (require.main === module) {
  const checker = new WorkflowHealthChecker();
  const report = checker.generateReport();
  
  // Export results
  const outputDir = path.join(__dirname, 'public', 'reports', 'workflows');
  fs.mkdirSync(outputDir, { recursive: true });
  checker.exportResults(path.join(outputDir, 'workflow-health-report.json'));
}

module.exports = WorkflowHealthChecker;