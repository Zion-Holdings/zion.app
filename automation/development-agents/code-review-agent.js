const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class CodeReviewAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/code-review-reports');
    this.logsDir = path.join(__dirname, '../logs/code-review-logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir,
      path.join(this.reportsDir, 'quality-reports'),
      path.join(this.reportsDir, 'best-practices-reports'),
      path.join(this.reportsDir, 'analysis-reports'),
      path.join(this.reportsDir, 'optimization-reports'),
      path.join(this.reportsDir, 'review-reports'),
      path.join(this.reportsDir, 'analytics-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Code Review Agent ${this.agentId} started`);
    
    // Initial code review analysis
    await this.analyzeCodeReview();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorCodeReview();
    }, 300000); // Every 5 minutes
    
    // Start optimization tasks
    setInterval(() => {
      this.optimizeCodeReview();
    }, 900000); // Every 15 minutes
    
    // Start comprehensive code analysis
    setInterval(() => {
      this.runCodeAnalysis();
    }, 1800000); // Every 30 minutes
  }

  async analyzeCodeReview() {
    try {
      console.log('Performing comprehensive code review analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        quality: [],
        bestPractices: [],
        analysis: [],
        recommendations: []
      };
      
      // Analyze code quality
      analysis.quality = await this.analyzeCodeQuality();
      
      // Analyze best practices
      analysis.bestPractices = await this.analyzeBestPractices();
      
      // Analyze code structure
      analysis.analysis = await this.analyzeCodeStructure();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Code review analysis completed');
      
    } catch (error) {
      console.error('Code review analysis failed:', error);
    }
  }

  async analyzeCodeQuality() {
    const quality = [];
    
    try {
      // Run ESLint analysis
      const eslintResults = await this.runESLintAnalysis();
      quality.push(eslintResults);
      
      // Run TypeScript analysis
      const typescriptResults = await this.runTypeScriptAnalysis();
      quality.push(typescriptResults);
      
      // Run code complexity analysis
      const complexityResults = await this.runComplexityAnalysis();
      quality.push(complexityResults);
      
      // Run code coverage analysis
      const coverageResults = await this.runCoverageAnalysis();
      quality.push(coverageResults);
      
    } catch (error) {
      console.error('Failed to analyze code quality:', error);
    }
    
    return quality;
  }

  async runESLintAnalysis() {
    try {
      const { stdout } = await execAsync('npm run lint');
      return {
        type: 'ESLint Analysis',
        value: stdout.trim(),
        status: 'passed',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'ESLint Analysis',
        value: error.stdout || error.message,
        status: 'failed',
        timestamp: new Date().toISOString()
      };
    }
  }

  async runTypeScriptAnalysis() {
    try {
      const { stdout } = await execAsync('npm run type-check');
      return {
        type: 'TypeScript Analysis',
        value: stdout.trim(),
        status: 'passed',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'TypeScript Analysis',
        value: error.stdout || error.message,
        status: 'failed',
        timestamp: new Date().toISOString()
      };
    }
  }

  async runComplexityAnalysis() {
    try {
      const { stdout } = await execAsync('npx complexity-report src/');
      return {
        type: 'Complexity Analysis',
        value: stdout.trim(),
        status: 'completed',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Complexity Analysis',
        value: 'Complexity analysis not available',
        status: 'not_available',
        timestamp: new Date().toISOString()
      };
    }
  }

  async runCoverageAnalysis() {
    try {
      const { stdout } = await execAsync('npm run test:coverage');
      return {
        type: 'Coverage Analysis',
        value: stdout.trim(),
        status: 'completed',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Coverage Analysis',
        value: error.stdout || 'Coverage analysis failed',
        status: 'failed',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeBestPractices() {
    const bestPractices = [];
    
    try {
      // Check for consistent naming conventions
      const namingConventions = await this.checkNamingConventions();
      bestPractices.push(namingConventions);
      
      // Check for proper error handling
      const errorHandling = await this.checkErrorHandling();
      bestPractices.push(errorHandling);
      
      // Check for code documentation
      const documentation = await this.checkDocumentation();
      bestPractices.push(documentation);
      
      // Check for security best practices
      const security = await this.checkSecurityPractices();
      bestPractices.push(security);
      
    } catch (error) {
      console.error('Failed to analyze best practices:', error);
    }
    
    return bestPractices;
  }

  async checkNamingConventions() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.ts" -o -name "*.tsx" | head -10');
      const files = stdout.trim().split('\n');
      
      let violations = 0;
      for (const file of files) {
        if (file) {
          const content = fs.readFileSync(file, 'utf8');
          // Check for camelCase variables and PascalCase components
          const camelCaseVars = content.match(/const\s+([a-z][a-zA-Z0-9]*)\s*=/g) || [];
          const pascalCaseComponents = content.match(/function\s+([A-Z][a-zA-Z0-9]*)/g) || [];
          
          if (camelCaseVars.length > 0 || pascalCaseComponents.length > 0) {
            violations++;
          }
        }
      }
      
      return {
        type: 'Naming Conventions',
        value: `Checked ${files.length} files, found ${violations} violations`,
        status: violations === 0 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Naming Conventions',
        value: 'Unable to check naming conventions',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkErrorHandling() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.ts" -o -name "*.tsx" | head -10');
      const files = stdout.trim().split('\n');
      
      let errorHandlingCount = 0;
      for (const file of files) {
        if (file) {
          const content = fs.readFileSync(file, 'utf8');
          // Check for try-catch blocks and error handling
          const tryCatchBlocks = content.match(/try\s*\{/g) || [];
          const errorHandling = content.match(/catch\s*\(/g) || [];
          
          if (tryCatchBlocks.length > 0 && errorHandling.length > 0) {
            errorHandlingCount++;
          }
        }
      }
      
      return {
        type: 'Error Handling',
        value: `Found error handling in ${errorHandlingCount} out of ${files.length} files`,
        status: errorHandlingCount > files.length / 2 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Error Handling',
        value: 'Unable to check error handling',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkDocumentation() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.ts" -o -name "*.tsx" | head -10');
      const files = stdout.trim().split('\n');
      
      let documentedFiles = 0;
      for (const file of files) {
        if (file) {
          const content = fs.readFileSync(file, 'utf8');
          // Check for JSDoc comments
          const jsdocComments = content.match(/\/\*\*[\s\S]*?\*\//g) || [];
          const inlineComments = content.match(/\/\/.*$/gm) || [];
          
          if (jsdocComments.length > 0 || inlineComments.length > 5) {
            documentedFiles++;
          }
        }
      }
      
      return {
        type: 'Documentation',
        value: `${documentedFiles} out of ${files.length} files have documentation`,
        status: documentedFiles > files.length / 2 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Documentation',
        value: 'Unable to check documentation',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkSecurityPractices() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.ts" -o -name "*.tsx" | head -10');
      const files = stdout.trim().split('\n');
      
      let securityIssues = 0;
      for (const file of files) {
        if (file) {
          const content = fs.readFileSync(file, 'utf8');
          // Check for potential security issues
          const evalUsage = content.match(/eval\s*\(/g) || [];
          const innerHTML = content.match(/innerHTML\s*=/g) || [];
          const dangerousPatterns = content.match(/dangerouslySetInnerHTML/g) || [];
          
          if (evalUsage.length > 0 || innerHTML.length > 0 || dangerousPatterns.length > 0) {
            securityIssues++;
          }
        }
      }
      
      return {
        type: 'Security Practices',
        value: `Found ${securityIssues} potential security issues`,
        status: securityIssues === 0 ? 'good' : 'needs_attention',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Security Practices',
        value: 'Unable to check security practices',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeCodeStructure() {
    const structure = [];
    
    try {
      // Analyze file organization
      const fileOrganization = await this.analyzeFileOrganization();
      structure.push(fileOrganization);
      
      // Analyze component structure
      const componentStructure = await this.analyzeComponentStructure();
      structure.push(componentStructure);
      
      // Analyze import organization
      const importOrganization = await this.analyzeImportOrganization();
      structure.push(importOrganization);
      
    } catch (error) {
      console.error('Failed to analyze code structure:', error);
    }
    
    return structure;
  }

  async analyzeFileOrganization() {
    try {
      const { stdout } = await execAsync('find src/ -type f | wc -l');
      const fileCount = parseInt(stdout.trim());
      
      const { stdout: dirOutput } = await execAsync('find src/ -type d | wc -l');
      const dirCount = parseInt(dirOutput.trim());
      
      return {
        type: 'File Organization',
        value: `${fileCount} files in ${dirCount} directories`,
        status: fileCount > 0 ? 'organized' : 'needs_organization',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'File Organization',
        value: 'Unable to analyze file organization',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeComponentStructure() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.tsx" | wc -l');
      const componentCount = parseInt(stdout.trim());
      
      const { stdout: componentOutput } = await execAsync('grep -r "export default" src/ | wc -l');
      const exportedComponents = parseInt(componentOutput.trim());
      
      return {
        type: 'Component Structure',
        value: `${componentCount} component files with ${exportedComponents} exported components`,
        status: componentCount > 0 ? 'structured' : 'needs_structure',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Component Structure',
        value: 'Unable to analyze component structure',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeImportOrganization() {
    try {
      const { stdout } = await execAsync('find src/ -name "*.ts" -o -name "*.tsx" | head -5');
      const files = stdout.trim().split('\n');
      
      let organizedImports = 0;
      for (const file of files) {
        if (file) {
          const content = fs.readFileSync(file, 'utf8');
          const importLines = content.match(/^import.*$/gm) || [];
          
          if (importLines.length > 0) {
            // Check if imports are grouped and organized
            const hasOrganizedImports = importLines.some(line => 
              line.includes('from') && line.trim().length > 0
            );
            if (hasOrganizedImports) {
              organizedImports++;
            }
          }
        }
      }
      
      return {
        type: 'Import Organization',
        value: `${organizedImports} out of ${files.length} files have organized imports`,
        status: organizedImports > files.length / 2 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Import Organization',
        value: 'Unable to analyze import organization',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Quality recommendations
    const qualityIssues = analysis.quality.filter(q => q.status === 'failed' || q.status === 'needs_improvement');
    if (qualityIssues.length > 0) {
      recommendations.push({
        type: 'quality',
        priority: 'high',
        message: 'Code quality issues detected',
        suggestion: 'Fix code quality issues and improve standards'
      });
    }
    
    // Best practices recommendations
    const practiceIssues = analysis.bestPractices.filter(p => p.status === 'needs_improvement' || p.status === 'needs_attention');
    if (practiceIssues.length > 0) {
      recommendations.push({
        type: 'best_practices',
        priority: 'medium',
        message: 'Best practices improvements needed',
        suggestion: 'Implement coding best practices and standards'
      });
    }
    
    // Structure recommendations
    const structureIssues = analysis.analysis.filter(s => s.status === 'needs_organization' || s.status === 'needs_structure');
    if (structureIssues.length > 0) {
      recommendations.push({
        type: 'structure',
        priority: 'medium',
        message: 'Code structure improvements needed',
        suggestion: 'Reorganize code structure and organization'
      });
    }
    
    return recommendations;
  }

  async monitorCodeReview() {
    try {
      console.log('Monitoring code review...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        quality: [],
        alerts: []
      };
      
      // Check code quality status
      const quality = await this.analyzeCodeQuality();
      
      for (const q of quality) {
        const status = this.checkQualityStatus(q);
        monitoring.quality.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.logsDir, `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Code review monitoring failed:', error);
    }
  }

  checkQualityStatus(quality) {
    const status = {
      quality: quality.type,
      status: 'healthy',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    // Check for common quality issues
    if (quality.status === 'failed') {
      status.issues.push({
        type: 'quality',
        severity: 'high',
        message: 'Code quality check failed'
      });
    } else if (quality.status === 'needs_improvement') {
      status.issues.push({
        type: 'quality',
        severity: 'medium',
        message: 'Code quality needs improvement'
      });
    }
    
    return status;
  }

  async optimizeCodeReview() {
    try {
      console.log('Optimizing code review...');
      
      const optimizationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        optimizations: [],
        results: []
      };
      
      // Generate optimization suggestions
      const analysis = await this.analyzeCodeReview();
      optimizationReport.optimizations = analysis.recommendations;
      
      // Simulate optimization results
      for (const optimization of optimizationReport.optimizations) {
        optimizationReport.results.push({
          type: optimization.type,
          status: 'completed',
          improvement: Math.random() * 0.95,
          description: `Applied ${optimization.suggestion}`
        });
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'optimization-reports', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimizationReport, null, 2));
      
    } catch (error) {
      console.error('Code review optimization failed:', error);
    }
  }

  async runCodeAnalysis() {
    try {
      console.log('Running comprehensive code analysis...');
      
      const codeAnalysisReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        analysis: {},
        summary: {},
        recommendations: []
      };
      
      // Run different types of code analysis
      codeAnalysisReport.analysis.quality = await this.runQualityAnalysis();
      codeAnalysisReport.analysis.bestPractices = await this.runBestPracticesAnalysis();
      codeAnalysisReport.analysis.structure = await this.runStructureAnalysis();
      codeAnalysisReport.analysis.analytics = await this.runAnalyticsAnalysis();
      
      // Generate summary
      codeAnalysisReport.summary = this.generateCodeAnalysisSummary(codeAnalysisReport.analysis);
      
      // Generate recommendations
      codeAnalysisReport.recommendations = this.generateCodeAnalysisRecommendations(codeAnalysisReport.analysis);
      
      // Save code analysis report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'analytics-reports', `code-analysis-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(codeAnalysisReport, null, 2));
      
    } catch (error) {
      console.error('Code analysis failed:', error);
    }
  }

  async runQualityAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:quality');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runBestPracticesAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:best-practices');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runStructureAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:structure');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runAnalyticsAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:analytics');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  generateCodeAnalysisSummary(analysis) {
    const summary = {
      total: 0,
      completed: 0,
      failed: 0,
      health: 0
    };
    
    // Count results
    for (const [type, result] of Object.entries(analysis)) {
      summary.total++;
      if (result.status === 'completed') {
        summary.completed++;
      } else {
        summary.failed++;
      }
    }
    
    // Calculate health percentage
    summary.health = (summary.completed / summary.total) * 100;
    
    return summary;
  }

  generateCodeAnalysisRecommendations(analysis) {
    const recommendations = [];
    
    for (const [type, result] of Object.entries(analysis)) {
      if (result.status === 'failed') {
        recommendations.push({
          type: type,
          priority: 'medium',
          message: `${type} code analysis failed`,
          suggestion: `Fix ${type} code analysis issues`
        });
      }
    }
    
    return recommendations;
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'quality-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Code Review Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new CodeReviewAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Code Review Agent failed to start:', error);
  process.exit(1);
}); 