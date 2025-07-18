#!/usr/bin/env node

/**
 * Zion App - Cursor AI Integration
 * 
 * Integrates with Cursor AI to generate intelligent improvement suggestions
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'cursor-integration' },
  transports: [
    new winston.transports.File({ filename: 'logs/cursor-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/cursor-combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

class CursorIntegration {
  constructor() {
    this.apiKey = process.env.CURSOR_API_KEY;
    this.workspaceId = process.env.CURSOR_WORKSPACE_ID;
    this.apiEndpoint = process.env.CURSOR_API_ENDPOINT || 'https://api.cursor.sh';
    
    if (!this.apiKey) {
      logger.warn('Cursor API key not configured. Some features may be limited.');
    }
  }

  /**
   * Generate improvement suggestions using Cursor AI
   */
  async generateSuggestions(improvementData) {
    logger.info('🤖 Generating improvement suggestions with Cursor AI...');
    
    try {
      const prompt = this.buildPrompt(improvementData);
      const response = await this.callCursorAPI(prompt);
      const suggestions = this.parseResponse(response);
      
      logger.info(`✅ Generated ${suggestions.length} improvement suggestions`);
      return suggestions;
    } catch (error) {
      logger.error('❌ Error generating suggestions:', error);
      return [];
    }
  }

  /**
   * Build prompt for Cursor AI
   */
  buildPrompt(improvementData) {
    const { type, severity, data, alertId } = improvementData;
    
    const context = this.getContextForType(type, data);
    const examples = this.getExamplesForType(type);
    
    return `You are an expert software engineer tasked with improving the Zion App, a modern React/Next.js application.

CONTEXT:
- Application Type: React/Next.js with TypeScript
- Framework: Next.js with Pages Router
- Styling: Tailwind CSS
- State Management: React Context + Supabase
- Authentication: Supabase Auth
- Database: Supabase PostgreSQL

CURRENT ISSUE:
- Type: ${type}
- Severity: ${severity}
- Alert ID: ${alertId}
- Data: ${JSON.stringify(data, null, 2)}

CONTEXT FOR THIS ISSUE:
${context}

EXAMPLES OF SIMILAR IMPROVEMENTS:
${examples}

TASK:
Generate specific, actionable improvements that can be automatically applied to fix this issue. Focus on:
1. Code quality and maintainability
2. Performance optimization
3. Security best practices
4. User experience enhancement
5. Modern development practices

REQUIREMENTS:
- Provide improvements in JSON format
- Each improvement should be specific and actionable
- Include file paths for code changes
- Use exact code snippets
- Consider the existing codebase structure
- Ensure changes are safe and reversible

RESPONSE FORMAT:
{
  "improvements": [
    {
      "type": "code_change|dependency_update|configuration_change|performance_optimization|security_fix|accessibility_improvement",
      "description": "Clear description of what this improvement does",
      "priority": "high|medium|low",
      "changes": [
        {
          "action": "add|modify|remove|replace|insert",
          "file": "path/to/file.tsx",
          "target": "specific code or pattern to target",
          "content": "new content or modification",
          "position": "start|end (for add action)",
          "regex": "optional regex pattern for targeting",
          "after": "insert after this pattern",
          "before": "insert before this pattern"
        }
      ],
      "reasoning": "Why this improvement is needed and how it helps"
    }
  ]
}

Please provide improvements that are:
- Specific and actionable
- Safe to apply automatically
- Well-tested and proven
- Following best practices
- Compatible with the existing codebase`;
  }

  /**
   * Get context for specific improvement type
   */
  getContextForType(type, data) {
    switch (type) {
      case 'codeQuality':
        return `
Code Quality Issues Detected:
- Lint errors: ${data.lintErrors || 0}
- Test coverage: ${data.coverage || 0}%
- Bundle size increase: ${data.bundleSizeIncrease || 0}KB
- Code smells: ${data.codeSmells?.length || 0}

Focus on:
- Fixing lint errors and warnings
- Improving code structure and readability
- Adding missing tests
- Reducing bundle size
- Eliminating code smells`;
        
      case 'performance':
        return `
Performance Issues Detected:
- Lighthouse score: ${data.lighthouseScore || 0}
- Load time: ${data.loadTime || 0}ms
- API response time: ${data.apiResponseTime || 0}ms
- Core Web Vitals issues detected

Focus on:
- Optimizing bundle size and loading
- Improving Core Web Vitals
- Optimizing API calls
- Implementing caching strategies
- Code splitting and lazy loading`;
        
      case 'security':
        return `
Security Issues Detected:
- Vulnerabilities: ${data.vulnerabilities || 0}
- Outdated packages: ${data.outdatedPackages || 0}
- Security score: ${data.securityScore || 100}

Focus on:
- Fixing security vulnerabilities
- Updating outdated dependencies
- Implementing security best practices
- Adding security headers
- Input validation and sanitization`;
        
      case 'userExperience':
        return `
User Experience Issues Detected:
- Error rate: ${(data.errorRate * 100).toFixed(2)}%
- User satisfaction: ${(data.userSatisfaction * 100).toFixed(1)}%
- Accessibility score: ${data.accessibilityScore || 100}
- Conversion rate trend: ${data.conversionTrend || 0}

Focus on:
- Reducing error rates
- Improving error handling
- Enhancing accessibility
- Optimizing user flows
- Adding user feedback mechanisms`;
        
      case 'dependencies':
        return `
Dependency Issues Detected:
- Total packages: ${data.totalPackages || 0}
- Outdated packages: ${data.outdatedPackages || 0}
- Vulnerable packages: ${data.vulnerablePackages || 0}
- Unused packages: ${data.unusedPackages || 0}

Focus on:
- Updating outdated packages
- Fixing vulnerable dependencies
- Removing unused packages
- Optimizing package.json
- Security audits`;
        
      default:
        return `
General improvement needed for type: ${type}

Focus on:
- Code quality and maintainability
- Performance optimization
- Security best practices
- User experience enhancement
- Modern development practices`;
    }
  }

  /**
   * Get examples for specific improvement type
   */
  getExamplesForType(type) {
    switch (type) {
      case 'codeQuality':
        return `
Example 1 - Fixing lint errors:
{
  "type": "code_change",
  "description": "Fix ESLint errors by adding proper TypeScript types",
  "changes": [
    {
      "action": "modify",
      "file": "src/components/Button.tsx",
      "target": "const Button = ({ children, onClick }) => {",
      "content": "interface ButtonProps { children: React.ReactNode; onClick?: () => void; }\nconst Button: React.FC<ButtonProps> = ({ children, onClick }) => {"
    }
  ]
}

Example 2 - Adding error boundary:
{
  "type": "code_change",
  "description": "Add error boundary component for better error handling",
  "changes": [
    {
      "action": "add",
      "file": "src/components/ErrorBoundary.tsx",
      "content": "import React from 'react';\n\nclass ErrorBoundary extends React.Component { ... }"
    }
  ]
}`;
        
      case 'performance':
        return `
Example 1 - Image optimization:
{
  "type": "performance_optimization",
  "description": "Optimize images using Next.js Image component",
  "changes": [
    {
      "action": "replace",
      "file": "src/components/Hero.tsx",
      "target": "<img src=\"/hero.jpg\" alt=\"Hero\" />",
      "content": "import Image from 'next/image';\n<Image src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} priority />"
    }
  ]
}

Example 2 - Code splitting:
{
  "type": "performance_optimization",
  "description": "Implement dynamic imports for code splitting",
  "changes": [
    {
      "action": "modify",
      "file": "src/pages/dashboard.tsx",
      "target": "import HeavyComponent from '../components/HeavyComponent';",
      "content": "import dynamic from 'next/dynamic';\nconst HeavyComponent = dynamic(() => import('../components/HeavyComponent'), { loading: () => <div>Loading...</div> });"
    }
  ]
}`;
        
      case 'security':
        return `
Example 1 - Security headers:
{
  "type": "security_fix",
  "description": "Add security headers to Next.js configuration",
  "changes": [
    {
      "action": "modify",
      "file": "next.config.js",
      "target": "module.exports = {",
      "content": "module.exports = {\n  async headers() {\n    return [\n      {\n        source: '/(.*)',\n        headers: [\n          { key: 'X-Frame-Options', value: 'DENY' },\n          { key: 'X-Content-Type-Options', value: 'nosniff' },\n          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }\n        ]\n      }\n    ];\n  },"
    }
  ]
}

Example 2 - Input validation:
{
  "type": "security_fix",
  "description": "Add input validation to prevent XSS attacks",
  "changes": [
    {
      "action": "modify",
      "file": "src/utils/validation.ts",
      "content": "export const sanitizeInput = (input: string): string => {\n  return input.replace(/[<>\"']/g, '');\n};"
    }
  ]
}`;
        
      default:
        return `
Example - General improvement:
{
  "type": "code_change",
  "description": "Improve component structure and add proper TypeScript types",
  "changes": [
    {
      "action": "modify",
      "file": "src/components/Example.tsx",
      "target": "const Example = (props) => {",
      "content": "interface ExampleProps {\n  title: string;\n  children: React.ReactNode;\n}\n\nconst Example: React.FC<ExampleProps> = ({ title, children }) => {"
    }
  ]
}`;
    }
  }

  /**
   * Call Cursor AI API
   */
  async callCursorAPI(prompt) {
    if (!this.apiKey) {
      throw new Error('Cursor API key not configured');
    }

    const requestData = {
      prompt,
      workspace_id: this.workspaceId,
      model: 'gpt-4',
      temperature: 0.3,
      max_tokens: 4000,
      stream: false
    };

    try {
      const response = await axios.post(`${this.apiEndpoint}/api/chat`, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'User-Agent': 'Zion-App-Continuous-Improvement/1.0'
        },
        timeout: 30000 // 30 second timeout
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`Cursor API error: ${error.response.status} - ${error.response.data?.message || 'Unknown error'}`);
      } else if (error.request) {
        throw new Error('Cursor API request failed - no response received');
      } else {
        throw new Error(`Cursor API request error: ${error.message}`);
      }
    }
  }

  /**
   * Parse Cursor AI response
   */
  parseResponse(response) {
    try {
      let content = '';
      
      if (response.choices && response.choices[0] && response.choices[0].message) {
        content = response.choices[0].message.content;
      } else if (response.content) {
        content = response.content;
      } else {
        throw new Error('Invalid response format from Cursor API');
      }

      // Extract JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in Cursor response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      
      if (!parsed.improvements || !Array.isArray(parsed.improvements)) {
        throw new Error('Invalid improvements format in response');
      }

      // Validate and clean improvements
      const validImprovements = parsed.improvements.filter(improvement => {
        return improvement.type && 
               improvement.description && 
               Array.isArray(improvement.changes) &&
               improvement.changes.length > 0;
      });

      logger.info(`Parsed ${validImprovements.length} valid improvements from Cursor response`);
      return validImprovements;
    } catch (error) {
      logger.error('Error parsing Cursor response:', error);
      logger.debug('Raw response:', response);
      return [];
    }
  }

  /**
   * Analyze codebase for improvement opportunities
   */
  async analyzeCodebase() {
    logger.info('🔍 Analyzing codebase for improvement opportunities...');
    
    try {
      const analysis = {
        files: this.scanFiles(),
        metrics: await this.calculateMetrics(),
        issues: await this.detectIssues()
      };

      const prompt = this.buildAnalysisPrompt(analysis);
      const response = await this.callCursorAPI(prompt);
      const suggestions = this.parseResponse(response);

      logger.info(`✅ Codebase analysis completed, found ${suggestions.length} improvement opportunities`);
      return suggestions;
    } catch (error) {
      logger.error('❌ Error analyzing codebase:', error);
      return [];
    }
  }

  /**
   * Scan files in the codebase
   */
  scanFiles() {
    const files = [];
    const scanDir = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDir(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push({
            path: fullPath,
            size: stat.size,
            modified: stat.mtime
          });
        }
      });
    };

    scanDir('.');
    return files;
  }

  /**
   * Calculate codebase metrics
   */
  async calculateMetrics() {
    const metrics = {
      totalFiles: 0,
      totalLines: 0,
      typescriptFiles: 0,
      reactComponents: 0,
      testFiles: 0
    };

    const files = this.scanFiles();
    metrics.totalFiles = files.length;

    for (const file of files) {
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        const lines = content.split('\n').length;
        metrics.totalLines += lines;

        if (file.path.endsWith('.ts') || file.path.endsWith('.tsx')) {
          metrics.typescriptFiles++;
        }

        if (content.includes('React.FC') || content.includes('function') && content.includes('return')) {
          metrics.reactComponents++;
        }

        if (file.path.includes('.test.') || file.path.includes('.spec.')) {
          metrics.testFiles++;
        }
      } catch (error) {
        logger.warn(`Error reading file ${file.path}:`, error.message);
      }
    }

    return metrics;
  }

  /**
   * Detect common issues in codebase
   */
  async detectIssues() {
    const issues = [];
    const files = this.scanFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        
        // Check for common issues
        if (content.includes('any') && file.path.endsWith('.ts')) {
          issues.push({
            type: 'typescript_any',
            file: file.path,
            severity: 'medium',
            description: 'Usage of "any" type detected'
          });
        }

        if (content.includes('console.log') && !file.path.includes('.test.')) {
          issues.push({
            type: 'console_log',
            file: file.path,
            severity: 'low',
            description: 'Console.log found in production code'
          });
        }

        if (content.includes('TODO') || content.includes('FIXME')) {
          issues.push({
            type: 'todo_fixme',
            file: file.path,
            severity: 'low',
            description: 'TODO or FIXME comment found'
          });
        }
      } catch (error) {
        logger.warn(`Error analyzing file ${file.path}:`, error.message);
      }
    }

    return issues;
  }

  /**
   * Build analysis prompt
   */
  buildAnalysisPrompt(analysis) {
    return `You are an expert software engineer analyzing the Zion App codebase for improvement opportunities.

CODEBASE ANALYSIS:
${JSON.stringify(analysis, null, 2)}

TASK:
Based on this analysis, generate specific improvement suggestions that will:
1. Improve code quality and maintainability
2. Enhance performance
3. Strengthen security
4. Improve user experience
5. Follow modern development best practices

Focus on the most impactful improvements first. Provide specific, actionable suggestions that can be automatically applied.

RESPONSE FORMAT:
{
  "improvements": [
    {
      "type": "code_change|dependency_update|configuration_change|performance_optimization|security_fix|accessibility_improvement",
      "description": "Clear description of the improvement",
      "priority": "high|medium|low",
      "changes": [
        {
          "action": "add|modify|remove|replace|insert",
          "file": "path/to/file.tsx",
          "target": "specific code or pattern",
          "content": "new content or modification"
        }
      ],
      "reasoning": "Why this improvement is needed"
    }
  ]
}`;
  }

  /**
   * Get improvement history
   */
  getImprovementHistory() {
    try {
      const historyFile = 'logs/improvement-history.json';
      if (fs.existsSync(historyFile)) {
        const content = fs.readFileSync(historyFile, 'utf8');
        return JSON.parse(content);
      }
      return [];
    } catch (error) {
      logger.error('Error reading improvement history:', error);
      return [];
    }
  }

  /**
   * Save improvement to history
   */
  saveImprovementToHistory(improvement) {
    try {
      const historyFile = 'logs/improvement-history.json';
      const history = this.getImprovementHistory();
      
      history.push({
        ...improvement,
        timestamp: new Date().toISOString(),
        generatedBy: 'cursor-ai'
      });

      // Keep only last 100 improvements
      if (history.length > 100) {
        history.splice(0, history.length - 100);
      }

      fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
    } catch (error) {
      logger.error('Error saving improvement to history:', error);
    }
  }
}

// Export the integration
module.exports = CursorIntegration;

// Run the integration if this file is executed directly
if (require.main === module) {
  const integration = new CursorIntegration();
  
  // Example usage
  const exampleData = {
    type: 'codeQuality',
    severity: 'medium',
    data: {
      lintErrors: 5,
      coverage: 65,
      bundleSizeIncrease: 15
    },
    alertId: 'test_alert_123'
  };

  integration.generateSuggestions(exampleData).then(suggestions => {
    console.log('Generated suggestions:', JSON.stringify(suggestions, null, 2));
  }).catch(error => {
    console.error('Error generating suggestions:', error);
  });
} 