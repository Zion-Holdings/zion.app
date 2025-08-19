#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class WorkflowComplexityAnalyzer {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.disabledDir = path.resolve(__dirname, "../.github/workflows.disabled");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.complexityData = {};
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async analyzeAllWorkflows() {
    console.log("🔍 Analyzing workflow complexity...");
    
    const activeWorkflows = this.getWorkflows(this.workflowsDir);
    const disabledWorkflows = this.getWorkflows(this.disabledDir);
    
    console.log(`📋 Analyzing ${activeWorkflows.length} active workflows and ${disabledWorkflows.length} disabled workflows`);
    
    // Analyze active workflows
    for (const workflow of activeWorkflows) {
      await this.analyzeWorkflow(workflow, 'active');
    }
    
    // Analyze disabled workflows
    for (const workflow of disabledWorkflows) {
      await this.analyzeWorkflow(workflow, 'disabled');
    }
    
    this.generateComplexityReport();
    this.generateRefactoringRecommendations();
    
    return this.complexityData;
  }

  getWorkflows(dir) {
    if (!fs.existsSync(dir)) return [];
    
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(dir, f)
      }));
  }

  async analyzeWorkflow(workflow, status) {
    try {
      const content = fs.readFileSync(workflow.path, 'utf8');
      const analysis = this.performComplexityAnalysis(content, workflow.name);
      
      this.complexityData[workflow.name] = {
        ...analysis,
        status,
        path: workflow.path
      };
      
      console.log(`📊 ${workflow.name}: Complexity Score ${analysis.complexityScore}/100 (${analysis.complexityLevel})`);
      
    } catch (error) {
      console.error(`❌ Failed to analyze ${workflow.name}:`, error.message);
      this.complexityData[workflow.name] = {
        status,
        path: workflow.path,
        error: error.message
      };
    }
  }

  performComplexityAnalysis(content, workflowName) {
    const lines = content.split('\n');
    const totalLines = lines.length;
    
    // Count various complexity factors
    const jobCount = this.countJobs(content);
    const stepCount = this.countSteps(content);
    const conditionalCount = this.countConditionals(content);
    const matrixCount = this.countMatrixJobs(content);
    const dependencyCount = this.countDependencies(content);
    const environmentCount = this.countEnvironments(content);
    const secretCount = this.countSecrets(content);
    const actionCount = this.countCustomActions(content);
    
    // Calculate complexity score (0-100)
    let complexityScore = 0;
    
    // Base complexity from lines
    if (totalLines > 200) complexityScore += 25;
    else if (totalLines > 100) complexityScore += 15;
    else if (totalLines > 50) complexityScore += 10;
    
    // Job complexity
    if (jobCount > 5) complexityScore += 20;
    else if (jobCount > 3) complexityScore += 15;
    else if (jobCount > 1) complexityScore += 10;
    
    // Step complexity
    if (stepCount > 20) complexityScore += 15;
    else if (stepCount > 10) complexityScore += 10;
    else if (stepCount > 5) complexityScore += 5;
    
    // Conditional complexity
    if (conditionalCount > 10) complexityScore += 15;
    else if (conditionalCount > 5) complexityScore += 10;
    else if (conditionalCount > 2) complexityScore += 5;
    
    // Matrix complexity
    if (matrixCount > 0) complexityScore += 10;
    
    // Dependency complexity
    if (dependencyCount > 5) complexityScore += 10;
    else if (dependencyCount > 2) complexityScore += 5;
    
    // Environment complexity
    if (environmentCount > 3) complexityScore += 5;
    
    // Secret complexity
    if (secretCount > 5) complexityScore += 5;
    
    // Custom action complexity
    if (actionCount > 3) complexityScore += 5;
    
    // Cap at 100
    complexityScore = Math.min(100, complexityScore);
    
    // Determine complexity level
    let complexityLevel = 'low';
    if (complexityScore >= 70) complexityLevel = 'very-high';
    else if (complexityScore >= 50) complexityLevel = 'high';
    else if (complexityScore >= 30) complexityLevel = 'medium';
    
    return {
      complexityScore,
      complexityLevel,
      metrics: {
        totalLines,
        jobCount,
        stepCount,
        conditionalCount,
        matrixCount,
        dependencyCount,
        environmentCount,
        secretCount,
        actionCount
      },
      refactoringPriority: this.calculateRefactoringPriority(complexityScore, workflowName)
    };
  }

  countJobs(content) {
    const jobPattern = /^[a-zA-Z_][a-zA-Z0-9_-]*:\s*$/gm;
    const matches = content.match(jobPattern) || [];
    return matches.filter(match => 
      !['on', 'permissions', 'concurrency', 'env', 'jobs'].includes(match.replace(':', ''))
    ).length;
  }

  countSteps(content) {
    const stepPattern = /^\s*-\s*name:/gm;
    const matches = content.match(stepPattern) || [];
    return matches.length;
  }

  countConditionals(content) {
    const conditionalPattern = /if:|unless:/gi;
    const matches = content.match(conditionalPattern) || [];
    return matches.length;
  }

  countMatrixJobs(content) {
    const matrixPattern = /matrix:/gi;
    const matches = content.match(matrixPattern) || [];
    return matches.length;
  }

  countDependencies(content) {
    const dependencyPattern = /needs:/gi;
    const matches = content.match(dependencyPattern) || [];
    return matches.length;
  }

  countEnvironments(content) {
    const envPattern = /environment:/gi;
    const matches = content.match(envPattern) || [];
    return matches.length;
  }

  countSecrets(content) {
    const secretPattern = /\${{ secrets\./gi;
    const matches = content.match(secretPattern) || [];
    return matches.length;
  }

  countCustomActions(content) {
    const actionPattern = /uses:.*@/gi;
    const matches = content.match(actionPattern) || [];
    return matches.length;
  }

  calculateRefactoringPriority(complexityScore, workflowName) {
    if (complexityScore >= 70) return 'critical';
    if (complexityScore >= 50) return 'high';
    if (complexityScore >= 30) return 'medium';
    return 'low';
  }

  generateComplexityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalWorkflows: Object.keys(this.complexityData).length,
        complexityDistribution: {
          'very-high': 0,
          'high': 0,
          'medium': 0,
          'low': 0
        },
        refactoringPriorities: {
          'critical': 0,
          'high': 0,
          'medium': 0,
          'low': 0
        }
      },
      workflows: this.complexityData
    };
    
    // Calculate distributions
    for (const workflow of Object.values(this.complexityData)) {
      if (workflow.complexityLevel) {
        report.summary.complexityDistribution[workflow.complexityLevel]++;
      }
      if (workflow.refactoringPriority) {
        report.summary.refactoringPriorities[workflow.refactoringPriority]++;
      }
    }
    
    const reportPath = path.join(this.reportsDir, 'workflow-complexity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Complexity report saved to: ${reportPath}`);
  }

  generateRefactoringRecommendations() {
    const recommendations = {
      timestamp: new Date().toISOString(),
      critical: [],
      high: [],
      medium: [],
      low: []
    };
    
    for (const [name, data] of Object.entries(this.complexityData)) {
      if (data.refactoringPriority && data.refactoringPriority !== 'low') {
        const recommendation = {
          workflow: name,
          status: data.status,
          complexityScore: data.complexityScore,
          complexityLevel: data.complexityLevel,
          metrics: data.metrics,
          refactoringStrategy: this.generateRefactoringStrategy(data)
        };
        
        recommendations[data.refactoringPriority].push(recommendation);
      }
    }
    
    const recommendationsPath = path.join(this.reportsDir, 'refactoring-recommendations.json');
    fs.writeFileSync(recommendationsPath, JSON.stringify(recommendations, null, 2));
    
    console.log(`\n💡 Refactoring recommendations saved to: ${recommendationsPath}`);
    
    // Print summary
    this.printRefactoringSummary(recommendations);
  }

  generateRefactoringStrategy(data) {
    const strategies = [];
    
    if (data.metrics.jobCount > 3) {
      strategies.push('Split into multiple focused workflows');
    }
    
    if (data.metrics.stepCount > 15) {
      strategies.push('Break down into smaller job steps');
    }
    
    if (data.metrics.conditionalCount > 5) {
      strategies.push('Simplify conditional logic');
    }
    
    if (data.metrics.matrixCount > 0) {
      strategies.push('Consider parallel workflow execution');
    }
    
    if (data.metrics.dependencyCount > 3) {
      strategies.push('Optimize job dependencies');
    }
    
    if (data.metrics.totalLines > 100) {
      strategies.push('Extract common functionality to reusable workflows');
    }
    
    return strategies;
  }

  printRefactoringSummary(recommendations) {
    console.log("\n" + "=".repeat(60));
    console.log("🔧 WORKFLOW REFACTORING RECOMMENDATIONS");
    console.log("=".repeat(60));
    
    console.log(`🔴 Critical Priority: ${recommendations.critical.length} workflows`);
    console.log(`🟡 High Priority: ${recommendations.high.length} workflows`);
    console.log(`🟢 Medium Priority: ${recommendations.medium.length} workflows`);
    
    if (recommendations.critical.length > 0) {
      console.log(`\n🔴 CRITICAL REFACTORING NEEDED:`);
      recommendations.critical.forEach(rec => {
        console.log(`  • ${rec.workflow} (Score: ${rec.complexityScore}/100)`);
      });
    }
    
    console.log("=".repeat(60));
  }
}

// Run the analyzer
async function main() {
  try {
    const analyzer = new WorkflowComplexityAnalyzer();
    const results = await analyzer.analyzeAllWorkflows();
    
    console.log("\n🎉 Workflow complexity analysis completed!");
    
  } catch (error) {
    console.error("❌ Error running workflow complexity analyzer:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WorkflowComplexityAnalyzer;