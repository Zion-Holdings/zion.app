#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

class AICodeReviewAutomation {
  constructor() {
    this.config = {
      reviewInterval: 5 * 60 * 1000, // 5 minutes
      maxFileSize: 1024 * 1024, // 1MB
      excludedPatterns: [
        'node_modules/**',
        '.git/**',
        'dist/**',
        'build/**',
        'coverage/**',
        '*.log',
        '*.lock'
      ],
      reviewRules: {
        complexity: { max: 10 },
        maintainability: { min: 50 },
        testCoverage: { min: 80 },
        securityIssues: { max: 0 }
      }
    };
    
    this.reviewHistory = [];
    this.isRunning = false;
  }

  async start() {
    console.log(chalk.blue('🤖 AI Code Review Automation Starting...'));
    this.isRunning = true;
    
    // Initial review
    await this.performCodeReview();
    
    // Set up continuous monitoring
    this.monitorInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.performCodeReview();
      }
    }, this.config.reviewInterval);
    
    console.log(chalk.green('✅ AI Code Review Automation started successfully'));
  }

  async stop() {
    console.log(chalk.yellow('🛑 Stopping AI Code Review Automation...'));
    this.isRunning = false;
    
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
    
    console.log(chalk.green('✅ AI Code Review Automation stopped'));
  }

  async performCodeReview() {
    try {
      console.log(chalk.cyan('🔍 Performing AI Code Review...'));
      
      const files = this.getModifiedFiles();
      const reviewResults = [];
      
      for (const file of files) {
        if (this.shouldReviewFile(file)) {
          const review = await this.reviewFile(file);
          if (review) {
            reviewResults.push(review);
          }
        }
      }
      
      if (reviewResults.length > 0) {
        await this.generateReviewReport(reviewResults);
        await this.applySuggestions(reviewResults);
      }
      
      this.reviewHistory.push({
        timestamp: new Date().toISOString(),
        filesReviewed: reviewResults.length,
        suggestions: reviewResults.filter(r => r.suggestions.length > 0).length
      });
      
      console.log(chalk.green(`✅ Code review completed: ${reviewResults.length} files reviewed`));
      
    } catch (error) {
      console.error(chalk.red('❌ Error during code review:'), error.message);
    }
  }

  getModifiedFiles() {
    try {
      const output = execSync('git diff --name-only HEAD~1', { encoding: 'utf8' });
      return output.split('\n').filter(file => file.trim());
    } catch (error) {
      // If no previous commit, check all files
      return this.getAllSourceFiles();
    }
  }

  getAllSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'lib', 'utils', 'hooks'];
    const files = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, files);
      }
    }
    
    return files;
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else if (this.isSourceFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  isSourceFile(filePath) {
    const sourceExtensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const ext = path.extname(filePath);
    return sourceExtensions.includes(ext);
  }

  shouldReviewFile(filePath) {
    // Check file size
    const stats = fs.statSync(filePath);
    if (stats.size > this.config.maxFileSize) {
      return false;
    }
    
    // Check excluded patterns
    for (const pattern of this.config.excludedPatterns) {
      if (filePath.includes(pattern.replace('**', ''))) {
        return false;
      }
    }
    
    return true;
  }

  async reviewFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const analysis = await this.analyzeCode(content, filePath);
      
      return {
        file: filePath,
        analysis,
        suggestions: this.generateSuggestions(analysis, content),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(chalk.red(`Error reviewing ${filePath}:`), error.message);
      return null;
    }
  }

  async analyzeCode(content, filePath) {
    const analysis = {
      complexity: this.calculateComplexity(content),
      maintainability: this.calculateMaintainability(content),
      securityIssues: await this.detectSecurityIssues(content, filePath),
      performanceIssues: this.detectPerformanceIssues(content),
      codeSmells: this.detectCodeSmells(content),
      testCoverage: this.estimateTestCoverage(filePath)
    };
    
    return analysis;
  }

  calculateComplexity(content) {
    // Simple cyclomatic complexity calculation
    const complexityIndicators = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\|/g,
      /&&/g
    ];
    
    let complexity = 1; // Base complexity
    for (const indicator of complexityIndicators) {
      const matches = content.match(indicator);
      if (matches) {
        complexity += matches.length;
      }
    }
    
    return complexity;
  }

  calculateMaintainability(content) {
    // Simple maintainability index calculation
    const lines = content.split('\n').length;
    const functions = (content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>\s*{/g) || []).length;
    const comments = (content.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length;
    
    // Higher score = more maintainable
    let maintainability = 100;
    maintainability -= Math.min(lines / 10, 30); // Penalize long files
    maintainability += Math.min(comments / 5, 20); // Reward comments
    maintainability -= Math.min(functions * 2, 20); // Penalize too many functions
    
    return Math.max(0, Math.min(100, maintainability));
  }

  async detectSecurityIssues(content, filePath) {
    const securityPatterns = [
      { pattern: /eval\s*\(/, severity: 'high', description: 'Use of eval() is dangerous' },
      { pattern: /innerHTML\s*=/, severity: 'medium', description: 'Potential XSS vulnerability' },
      { pattern: /localStorage\.setItem/, severity: 'low', description: 'Sensitive data in localStorage' },
      { pattern: /password.*=.*['"`]/, severity: 'high', description: 'Hardcoded password detected' },
      { pattern: /api_key.*=.*['"`]/, severity: 'high', description: 'Hardcoded API key detected' }
    ];
    
    const issues = [];
    for (const { pattern, severity, description } of securityPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          severity,
          description,
          line: this.findLineNumber(content, pattern)
        });
      }
    }
    
    return issues;
  }

  detectPerformanceIssues(content) {
    const performancePatterns = [
      { pattern: /\.map\(.*=>.*\.map\(/, description: 'Nested map operations detected' },
      { pattern: /for\s*\(.*in\s*/, description: 'Consider using for...of instead of for...in' },
      { pattern: /setTimeout\(.*0\)/, description: 'Consider using requestAnimationFrame' },
      { pattern: /\.innerHTML\s*=/, description: 'Consider using textContent for better performance' }
    ];
    
    const issues = [];
    for (const { pattern, description } of performancePatterns) {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          description,
          line: this.findLineNumber(content, pattern)
        });
      }
    }
    
    return issues;
  }

  detectCodeSmells(content) {
    const codeSmells = [
      { pattern: /function\s+\w+\([^)]{50,}\)/, description: 'Function with too many parameters' },
      { pattern: /if\s*\([^)]{100,}\)/, description: 'Complex conditional expression' },
      { pattern: /console\.log/, description: 'Console.log statements in production code' },
      { pattern: /TODO|FIXME|HACK/, description: 'TODO/FIXME/HACK comments found' }
    ];
    
    const smells = [];
    for (const { pattern, description } of codeSmells) {
      const matches = content.match(pattern);
      if (matches) {
        smells.push({
          description,
          line: this.findLineNumber(content, pattern)
        });
      }
    }
    
    return smells;
  }

  estimateTestCoverage(filePath) {
    const testFile = filePath.replace(/\.(js|jsx|ts|tsx)$/, '.test.$1');
    const testFileExists = fs.existsSync(testFile);
    
    if (testFileExists) {
      return 85; // Assume good coverage if test file exists
    }
    
    return 0; // No test file found
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 0;
  }

  generateSuggestions(analysis, content) {
    const suggestions = [];
    
    // Complexity suggestions
    if (analysis.complexity > this.config.reviewRules.complexity.max) {
      suggestions.push({
        type: 'complexity',
        priority: 'high',
        message: `Function complexity (${analysis.complexity}) exceeds threshold. Consider breaking into smaller functions.`
      });
    }
    
    // Maintainability suggestions
    if (analysis.maintainability < this.config.reviewRules.maintainability.min) {
      suggestions.push({
        type: 'maintainability',
        priority: 'medium',
        message: `Maintainability score (${analysis.maintainability}) is low. Add comments and simplify code structure.`
      });
    }
    
    // Security suggestions
    for (const issue of analysis.securityIssues) {
      suggestions.push({
        type: 'security',
        priority: issue.severity,
        message: issue.description
      });
    }
    
    // Performance suggestions
    for (const issue of analysis.performanceIssues) {
      suggestions.push({
        type: 'performance',
        priority: 'medium',
        message: issue.description
      });
    }
    
    // Code smell suggestions
    for (const smell of analysis.codeSmells) {
      suggestions.push({
        type: 'code-smell',
        priority: 'low',
        message: smell.description
      });
    }
    
    return suggestions;
  }

  async generateReviewReport(reviewResults) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: reviewResults.length,
        filesWithIssues: reviewResults.filter(r => r.suggestions.length > 0).length,
        totalSuggestions: reviewResults.reduce((sum, r) => sum + r.suggestions.length, 0),
        criticalIssues: reviewResults.reduce((sum, r) => 
          sum + r.suggestions.filter(s => s.priority === 'high').length, 0
        )
      },
      details: reviewResults
    };
    
    const reportPath = path.join(__dirname, '..', 'logs', 'ai-code-review-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(chalk.blue('📊 AI Code Review Report generated:'), reportPath);
  }

  async applySuggestions(reviewResults) {
    for (const result of reviewResults) {
      if (result.suggestions.length === 0) continue;
      
      console.log(chalk.yellow(`\n🔧 Applying suggestions for ${result.file}:`));
      
      for (const suggestion of result.suggestions) {
        if (suggestion.priority === 'high') {
          console.log(chalk.red(`  ⚠️  ${suggestion.message}`));
        } else if (suggestion.priority === 'medium') {
          console.log(chalk.yellow(`  ⚠️  ${suggestion.message}`));
        } else {
          console.log(chalk.blue(`  ℹ️  ${suggestion.message}`));
        }
      }
    }
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastReview: this.reviewHistory[this.reviewHistory.length - 1] || null,
      totalReviews: this.reviewHistory.length,
      config: this.config
    };
  }
}

// CLI Interface
if (require.main === module) {
  const automation = new AICodeReviewAutomation();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'status':
      console.log(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'review':
      automation.performCodeReview();
      break;
    default:
      console.log(`
🤖 AI Code Review Automation

Usage:
  node ai-code-review-automation.cjs [command]

Commands:
  start   - Start the automation
  stop    - Stop the automation
  status  - Show current status
  review  - Perform a one-time code review

Examples:
  node ai-code-review-automation.cjs start
  node ai-code-review-automation.cjs status
      `);
  }
}

module.exports = AICodeReviewAutomation; 