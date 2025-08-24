export interface CodeReviewResult {
  score: number;
  issues: CodeIssue[];
  suggestions: CodeSuggestion[];
  complexity: ComplexityMetrics;
  security: SecurityAnalysis;
  performance: PerformanceAnalysis;
}

export interface CodeIssue {
  type: 'error' | 'warning' | 'info';
  severity: 'high' | 'medium' | 'low';
  line: number;
  message: string;
  suggestion?: string;
  category: 'security' | 'performance' | 'style' | 'bug' | 'maintainability';
}

export interface CodeSuggestion {
  type: 'refactor' | 'optimization' | 'best-practice';
  description: string;
  code: string;
  impact: 'high' | 'medium' | 'low';
}

export interface ComplexityMetrics {
  cyclomaticComplexity: number;
  cognitiveComplexity: number;
  maintainabilityIndex: number;
  technicalDebt: number;
}

export interface SecurityAnalysis {
  vulnerabilities: string[];
  riskScore: number;
  recommendations: string[];
}

export interface PerformanceAnalysis {
  bottlenecks: string[];
  optimizationOpportunities: string[];
  estimatedImprovement: number;
}

class CodeReviewService {
  private readonly languagePatterns = {
    javascript: {
      security: [
        { pattern: /eval\(/, risk: 'high', message: 'Avoid using eval() - security risk' },
        { pattern: /innerHTML\s*=/, risk: 'medium', message: 'Consider using textContent for security' },
        { pattern: /document\.write/, risk: 'medium', message: 'Avoid document.write for security' }
      ],
      performance: [
        { pattern: /for\s*\(\s*var\s+i\s*=\s*0\s*;\s*i\s*<\s*array\.length/, risk: 'low', message: 'Cache array length in loop' },
        { pattern: /setTimeout\(\s*function/, risk: 'low', message: 'Consider using arrow functions' }
      ]
    },
    python: {
      security: [
        { pattern: /exec\(/, risk: 'high', message: 'Avoid using exec() - security risk' },
        { pattern: /eval\(/, risk: 'high', message: 'Avoid using eval() - security risk' }
      ],
      performance: [
        { pattern: /for\s+item\s+in\s+range\(len\(/, risk: 'low', message: 'Use enumerate() instead' }
      ]
    }
  };

  async analyzeCode(code: string, language: string): Promise<CodeReviewResult> {
    const issues: CodeIssue[] = [];
    const suggestions: CodeSuggestion[] = [];
    
    // Analyze code based on language patterns
    const patterns = this.languagePatterns[language as keyof typeof this.languagePatterns];
    if (patterns) {
      patterns.security.forEach(rule => {
        const matches = code.match(new RegExp(rule.pattern, 'g'));
        if (matches) {
          issues.push({
            type: 'warning',
            severity: rule.risk as 'high' | 'medium' | 'low',
            line: this.findLineNumber(code, rule.pattern),
            message: rule.message,
            category: 'security'
          });
        }
      });

      patterns.performance.forEach(rule => {
        const matches = code.match(new RegExp(rule.pattern, 'g'));
        if (matches) {
          issues.push({
            type: 'info',
            severity: rule.risk as 'high' | 'medium' | 'low',
            line: this.findLineNumber(code, rule.pattern),
            message: rule.message,
            category: 'performance'
          });
        }
      });
    }

    // Calculate complexity metrics
    const complexity = this.calculateComplexity(code);
    
    // Security analysis
    const security = this.analyzeSecurity(code);
    
    // Performance analysis
    const performance = this.analyzePerformance(code);
    
    // Generate suggestions
    suggestions.push(...this.generateSuggestions(code, language, issues));
    
    // Calculate overall score
    const score = this.calculateScore(issues, complexity, security, performance);

    return {
      score,
      issues,
      suggestions,
      complexity,
      security,
      performance
    };
  }

  private findLineNumber(code: string, pattern: RegExp): number {
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 1;
  }

  private calculateComplexity(code: string): ComplexityMetrics {
    const lines = code.split('\n');
    let cyclomaticComplexity = 1; // Base complexity
    
    // Count decision points
    const decisionPatterns = [
      /if\s*\(/g, /else\s*if\s*\(/g, /for\s*\(/g, /while\s*\(/g,
      /case\s+/g, /catch\s*\(/g, /&&/g, /\|\|/g, /\?/g
    ];
    
    decisionPatterns.forEach(pattern => {
      const matches = code.match(pattern);
      if (matches) {
        cyclomaticComplexity += matches.length;
      }
    });

    const maintainabilityIndex = Math.max(0, 171 - 5.2 * Math.log(cyclomaticComplexity) - 0.23 * Math.log(lines.length));
    const technicalDebt = Math.max(0, (cyclomaticComplexity - 10) * 0.5);

    return {
      cyclomaticComplexity,
      cognitiveComplexity: cyclomaticComplexity * 0.8,
      maintainabilityIndex: Math.round(maintainabilityIndex * 100) / 100,
      technicalDebt: Math.round(technicalDebt * 100) / 100
    };
  }

  private analyzeSecurity(code: string): SecurityAnalysis {
    const vulnerabilities: string[] = [];
    const recommendations: string[] = [];
    
    // Check for common security issues
    if (code.includes('password') && code.includes('console.log')) {
      vulnerabilities.push('Potential password logging');
      recommendations.push('Remove password logging statements');
    }
    
    if (code.includes('localStorage') && code.includes('password')) {
      vulnerabilities.push('Passwords in localStorage');
      recommendations.push('Use secure HTTP-only cookies for sensitive data');
    }
    
    if (code.includes('innerHTML') && code.includes('userInput')) {
      vulnerabilities.push('Potential XSS vulnerability');
      recommendations.push('Sanitize user input before using innerHTML');
    }

    const riskScore = Math.min(100, vulnerabilities.length * 25);
    
    return {
      vulnerabilities,
      riskScore,
      recommendations
    };
  }

  private analyzePerformance(code: string): PerformanceAnalysis {
    const bottlenecks: string[] = [];
    const optimizationOpportunities: string[] = [];
    
    // Check for performance issues
    if (code.includes('document.querySelectorAll') && code.includes('for')) {
      bottlenecks.push('DOM queries in loops');
      optimizationOpportunities.push('Cache DOM queries outside loops');
    }
    
    if (code.includes('setTimeout') && code.includes('setInterval')) {
      optimizationOpportunities.push('Consider using requestAnimationFrame for animations');
    }
    
    if (code.includes('JSON.parse') && code.includes('JSON.stringify')) {
      optimizationOpportunities.push('Cache parsed JSON objects when possible');
    }

    const estimatedImprovement = Math.min(50, optimizationOpportunities.length * 10);
    
    return {
      bottlenecks,
      optimizationOpportunities,
      estimatedImprovement
    };
  }

  private generateSuggestions(code: string, language: string, issues: CodeIssue[]): CodeSuggestion[] {
    const suggestions: CodeSuggestion[] = [];
    
    // Generate language-specific suggestions
    if (language === 'javascript') {
      if (code.includes('var ')) {
        suggestions.push({
          type: 'best-practice',
          description: 'Use const or let instead of var',
          code: '// Replace var with const/let\nconst variableName = value;',
          impact: 'medium'
        });
      }
      
      if (code.includes('function(') && !code.includes('=>')) {
        suggestions.push({
          type: 'refactor',
          description: 'Consider using arrow functions for consistency',
          code: '// Convert to arrow function\nconst functionName = (param) => {\n  // function body\n};',
          impact: 'low'
        });
      }
    }
    
    if (language === 'python') {
      if (code.includes('range(len(')) {
        suggestions.push({
          type: 'optimization',
          description: 'Use enumerate() instead of range(len())',
          code: '# Replace range(len()) with enumerate\nfor index, item in enumerate(items):\n    print(f"{index}: {item}")',
          impact: 'medium'
        });
      }
    }
    
    return suggestions;
  }

  private calculateScore(issues: CodeIssue[], complexity: ComplexityMetrics, security: SecurityAnalysis, performance: PerformanceAnalysis): number {
    let score = 100;
    
    // Deduct points for issues
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'high': score -= 15; break;
        case 'medium': score -= 10; break;
        case 'low': score -= 5; break;
      }
    });
    
    // Deduct points for complexity
    if (complexity.cyclomaticComplexity > 15) score -= 10;
    if (complexity.maintainabilityIndex < 50) score -= 15;
    
    // Deduct points for security issues
    score -= security.riskScore * 0.2;
    
    return Math.max(0, Math.round(score));
  }

  async getReviewHistory(): Promise<{ date: string; score: number; language: string }[]> {
    // Mock review history - in real implementation, this would come from database
    return [
      { date: '2025-01-17', score: 85, language: 'javascript' },
      { date: '2025-01-16', score: 92, language: 'python' },
      { date: '2025-01-15', score: 78, language: 'typescript' }
    ];
  }
}

export default new CodeReviewService();