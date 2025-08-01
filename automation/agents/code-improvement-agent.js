const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class CodeImprovementAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/code-improvement');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'suggestions'),
      path.join(this.reportsDir, 'analysis'),
      path.join(this.reportsDir, 'refactoring')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Code Improvement Agent ${this.agentId} started`);
    
    // Initial analysis
    await this.performCodeAnalysis();
    
    // Setup file watchers
    this.setupFileWatchers();
    
    // Start periodic analysis
    setInterval(() => {
      this.performCodeAnalysis();
    }, 300000); // Every 5 minutes
    
    // Start periodic refactoring suggestions
    setInterval(() => {
      this.generateRefactoringSuggestions();
    }, 600000); // Every 10 minutes
  }

  async performCodeAnalysis() {
    try {
      console.log('Performing code analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        files: [],
        issues: [],
        suggestions: [],
        metrics: {}
      };

      // Analyze JavaScript/TypeScript files
      const jsFiles = await this.findFiles(['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx']);
      
      for (const file of jsFiles) {
        const fileAnalysis = await this.analyzeFile(file);
        analysis.files.push(fileAnalysis);
        
        if (fileAnalysis.issues.length > 0) {
          analysis.issues.push(...fileAnalysis.issues);
        }
        
        if (fileAnalysis.suggestions.length > 0) {
          analysis.suggestions.push(...fileAnalysis.suggestions);
        }
      }

      // Calculate metrics
      analysis.metrics = this.calculateMetrics(analysis.files);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      // Generate improvement suggestions
      await this.generateImprovementSuggestions(analysis);
      
      console.log(`Code analysis completed. Found ${analysis.issues.length} issues and ${analysis.suggestions.length} suggestions.`);
      
    } catch (error) {
      console.error('Code analysis failed:', error);
    }
  }

  async findFiles(patterns) {
    const files = [];
    const excludePatterns = ['node_modules', '.git', '.next', 'dist', 'build'];
    
    for (const pattern of patterns) {
      try {
        const { stdout } = await execAsync(`find ${this.projectRoot} -name "${pattern}" -type f`);
        const foundFiles = stdout.trim().split('\n').filter(file => file);
        
        for (const file of foundFiles) {
          const shouldExclude = excludePatterns.some(exclude => file.includes(exclude));
          if (!shouldExclude) {
            files.push(file);
          }
        }
      } catch (error) {
        console.error(`Error finding files with pattern ${pattern}:`, error);
      }
    }
    
    return files;
  }

  async analyzeFile(filePath) {
    const analysis = {
      file: filePath,
      size: 0,
      lines: 0,
      complexity: 0,
      issues: [],
      suggestions: []
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      analysis.size = content.length;
      analysis.lines = content.split('\n').length;
      
      // Basic code analysis
      const fileAnalysis = await this.analyzeCodeContent(content, filePath);
      analysis.issues = fileAnalysis.issues;
      analysis.suggestions = fileAnalysis.suggestions;
      analysis.complexity = fileAnalysis.complexity;
      
    } catch (error) {
      console.error(`Error analyzing file ${filePath}:`, error);
      analysis.issues.push({
        type: 'error',
        message: `Failed to analyze file: ${error.message}`,
        severity: 'high'
      });
    }

    return analysis;
  }

  async analyzeCodeContent(content, filePath) {
    const analysis = {
      issues: [],
      suggestions: [],
      complexity: 0
    };

    const lines = content.split('\n');
    let complexity = 0;
    let longFunctions = 0;
    let deepNesting = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;

      // Check for long lines
      if (line.length > 120) {
        analysis.issues.push({
          type: 'style',
          message: 'Line too long',
          line: lineNumber,
          severity: 'medium'
        });
      }

      // Check for complex conditions
      if (line.includes('if') && line.split('&&').length > 3) {
        analysis.suggestions.push({
          type: 'refactoring',
          message: 'Consider simplifying complex condition',
          line: lineNumber,
          severity: 'medium'
        });
        complexity++;
      }

      // Check for deep nesting
      const indentLevel = (line.match(/^\s*/)[0].length / 2);
      if (indentLevel > 4) {
        analysis.issues.push({
          type: 'structure',
          message: 'Deep nesting detected',
          line: lineNumber,
          severity: 'medium'
        });
        deepNesting++;
      }

      // Check for magic numbers
      const magicNumbers = line.match(/\b\d{3,}\b/g);
      if (magicNumbers) {
        analysis.suggestions.push({
          type: 'refactoring',
          message: 'Consider extracting magic numbers to constants',
          line: lineNumber,
          severity: 'low'
        });
      }

      // Check for TODO comments
      if (line.includes('TODO') || line.includes('FIXME')) {
        analysis.issues.push({
          type: 'todo',
          message: 'TODO/FIXME comment found',
          line: lineNumber,
          severity: 'low'
        });
      }
    }

    // Check for large functions
    const functionMatches = content.match(/function\s+\w+\s*\(/g);
    if (functionMatches && functionMatches.length > 10) {
      analysis.suggestions.push({
        type: 'refactoring',
        message: 'Consider breaking down large file into smaller modules',
        severity: 'medium'
      });
    }

    // Check for unused imports (basic check)
    const importLines = lines.filter(line => line.trim().startsWith('import'));
    const usedImports = this.findUsedImports(content);
    const unusedImports = importLines.filter(line => {
      const importName = this.extractImportName(line);
      return importName && !usedImports.includes(importName);
    });

    if (unusedImports.length > 0) {
      analysis.issues.push({
        type: 'unused',
        message: `Found ${unusedImports.length} potentially unused imports`,
        severity: 'medium'
      });
    }

    analysis.complexity = complexity + deepNesting;
    return analysis;
  }

  findUsedImports(content) {
    const usedImports = [];
    const importPattern = /import\s+{([^}]+)}\s+from/;
    const matches = content.match(importPattern);
    
    if (matches) {
      const imports = matches[1].split(',').map(imp => imp.trim());
      usedImports.push(...imports);
    }
    
    return usedImports;
  }

  extractImportName(importLine) {
    const match = importLine.match(/import\s+(\w+)/);
    return match ? match[1] : null;
  }

  calculateMetrics(files) {
    const metrics = {
      totalFiles: files.length,
      totalLines: 0,
      totalIssues: 0,
      totalSuggestions: 0,
      averageComplexity: 0,
      filesWithIssues: 0,
      filesWithSuggestions: 0
    };

    let totalComplexity = 0;
    let filesWithIssues = 0;
    let filesWithSuggestions = 0;

    for (const file of files) {
      metrics.totalLines += file.lines;
      metrics.totalIssues += file.issues.length;
      metrics.totalSuggestions += file.suggestions.length;
      totalComplexity += file.complexity;

      if (file.issues.length > 0) filesWithIssues++;
      if (file.suggestions.length > 0) filesWithSuggestions++;
    }

    metrics.averageComplexity = files.length > 0 ? totalComplexity / files.length : 0;
    metrics.filesWithIssues = filesWithIssues;
    metrics.filesWithSuggestions = filesWithSuggestions;

    return metrics;
  }

  async saveAnalysisReport(analysis) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'analysis', `analysis-${timestamp}.json`);
    
    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async generateImprovementSuggestions(analysis) {
    const suggestions = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      priority: 'medium',
      suggestions: []
    };

    // High priority suggestions
    if (analysis.metrics.totalIssues > 10) {
      suggestions.suggestions.push({
        type: 'priority',
        message: 'High number of issues detected. Consider code review session.',
        priority: 'high'
      });
    }

    if (analysis.metrics.averageComplexity > 5) {
      suggestions.suggestions.push({
        type: 'complexity',
        message: 'High code complexity detected. Consider refactoring.',
        priority: 'high'
      });
    }

    // Medium priority suggestions
    if (analysis.metrics.filesWithIssues > analysis.metrics.totalFiles * 0.3) {
      suggestions.suggestions.push({
        type: 'quality',
        message: 'Many files have issues. Consider implementing stricter linting rules.',
        priority: 'medium'
      });
    }

    // Low priority suggestions
    if (analysis.metrics.totalSuggestions > 20) {
      suggestions.suggestions.push({
        type: 'optimization',
        message: 'Many optimization opportunities available.',
        priority: 'low'
      });
    }

    // Save suggestions
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const suggestionsPath = path.join(this.reportsDir, 'suggestions', `suggestions-${timestamp}.json`);
    fs.writeFileSync(suggestionsPath, JSON.stringify(suggestions, null, 2));
  }

  async generateRefactoringSuggestions() {
    try {
      console.log('Generating refactoring suggestions...');
      
      const refactoringSuggestions = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        refactoring: []
      };

      // Find potential refactoring opportunities
      const jsFiles = await this.findFiles(['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx']);
      
      for (const file of jsFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const suggestions = await this.findRefactoringOpportunities(content, file);
        
        if (suggestions.length > 0) {
          refactoringSuggestions.refactoring.push({
            file,
            suggestions
          });
        }
      }

      // Save refactoring suggestions
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const refactoringPath = path.join(this.reportsDir, 'refactoring', `refactoring-${timestamp}.json`);
      fs.writeFileSync(refactoringPath, JSON.stringify(refactoringSuggestions, null, 2));
      
      console.log(`Refactoring suggestions generated: ${refactoringSuggestions.refactoring.length} files with opportunities`);
      
    } catch (error) {
      console.error('Failed to generate refactoring suggestions:', error);
    }
  }

  async findRefactoringOpportunities(content, filePath) {
    const suggestions = [];
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;

      // Long functions
      if (line.includes('function') && line.length > 100) {
        suggestions.push({
          type: 'extract-function',
          message: 'Consider extracting long function into smaller functions',
          line: lineNumber,
          priority: 'medium'
        });
      }

      // Repeated code patterns
      if (line.includes('console.log') && lines.filter(l => l.includes('console.log')).length > 5) {
        suggestions.push({
          type: 'extract-logger',
          message: 'Consider creating a logger utility',
          line: lineNumber,
          priority: 'low'
        });
      }

      // Complex conditions
      if (line.includes('if') && (line.includes('&&') || line.includes('||')) && line.length > 80) {
        suggestions.push({
          type: 'simplify-condition',
          message: 'Consider extracting complex condition to a separate function',
          line: lineNumber,
          priority: 'medium'
        });
      }

      // Magic strings
      const magicStrings = line.match(/"[^"]{20,}"/g);
      if (magicStrings) {
        suggestions.push({
          type: 'extract-constants',
          message: 'Consider extracting magic strings to constants',
          line: lineNumber,
          priority: 'low'
        });
      }
    }

    return suggestions;
  }

  setupFileWatchers() {
    // This would be handled by the factory
    console.log('File watchers setup for code improvement agent');
  }

  async stop() {
    console.log(`Code Improvement Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new CodeImprovementAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Code Improvement Agent failed to start:', error);
  process.exit(1);
}); 