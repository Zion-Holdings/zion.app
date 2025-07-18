#!/usr/bin/env node

/**
 * Cursor Chat Trigger
 * Triggers new Cursor chats with detailed information for continuous app improvement
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

// Configuration
const CONFIG = {
  cursorApiUrl: process.env.CURSOR_API_URL || 'https://api.cursor.sh',
  cursorApiKey: process.env.CURSOR_API_KEY,
  cursorWorkspaceId: process.env.CURSOR_WORKSPACE_ID,
  
  // Chat categories
  chatCategories: {
    build: {
      title: 'Build Issues',
      description: 'Issues related to build process, dependencies, and compilation'
    },
    lint: {
      title: 'Code Quality',
      description: 'ESLint, Prettier, and code style issues'
    },
    typescript: {
      title: 'Type Safety',
      description: 'TypeScript errors and type definition issues'
    },
    runtime: {
      title: 'Runtime Errors',
      description: 'JavaScript runtime errors and exceptions'
    },
    performance: {
      title: 'Performance',
      description: 'Performance bottlenecks and optimization opportunities'
    },
    security: {
      title: 'Security',
      description: 'Security vulnerabilities and best practices'
    },
    accessibility: {
      title: 'Accessibility',
      description: 'Accessibility issues and WCAG compliance'
    },
    testing: {
      title: 'Testing',
      description: 'Test failures and testing improvements'
    },
    deployment: {
      title: 'Deployment',
      description: 'Deployment issues and CI/CD improvements'
    },
    userExperience: {
      title: 'User Experience',
      description: 'UX improvements and user interface issues'
    }
  },
  
  // Information gathering
  infoSources: [
    'package.json',
    'next.config.js',
    'tsconfig.json',
    'tailwind.config.js',
    '.eslintrc.js',
    'jest.config.js',
    'cypress.config.js',
    'logs/',
    'src/',
    'pages/',
    'components/',
    'utils/',
    'hooks/',
    'context/'
  ]
};

class CursorChatTrigger {
  constructor() {
    this.logFile = 'logs/cursor-chat-triggers.log';
    this.ensureLogDirectory();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  async triggerComprehensiveChat(category = 'general', specificIssue = null) {
    this.log(`Triggering comprehensive Cursor chat for category: ${category}`);
    
    try {
      // Gather comprehensive information
      const projectInfo = await this.gatherProjectInformation();
      const currentIssues = await this.gatherCurrentIssues();
      const performanceData = await this.gatherPerformanceData();
      const securityData = await this.gatherSecurityData();
      const accessibilityData = await this.gatherAccessibilityData();
      
      // Generate detailed prompt
      const prompt = this.generateComprehensivePrompt({
        category,
        specificIssue,
        projectInfo,
        currentIssues,
        performanceData,
        securityData,
        accessibilityData
      });
      
      // Send to Cursor
      const response = await this.sendCursorChat(prompt);
      
      this.log(`Cursor chat triggered successfully for ${category}`);
      return response;
      
    } catch (error) {
      this.log(`Failed to trigger Cursor chat: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async gatherProjectInformation() {
    const info = {
      packageJson: null,
      dependencies: [],
      scripts: [],
      configs: {},
      fileStructure: {},
      recentChanges: []
    };
    
    try {
      // Package.json information
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        info.packageJson = {
          name: packageJson.name,
          version: packageJson.version,
          dependencies: Object.keys(packageJson.dependencies || {}),
          devDependencies: Object.keys(packageJson.devDependencies || {}),
          scripts: Object.keys(packageJson.scripts || {})
        };
      }
      
      // Configuration files
      const configFiles = [
        'next.config.js',
        'tsconfig.json',
        'tailwind.config.js',
        '.eslintrc.js',
        'jest.config.js'
      ];
      
      for (const configFile of configFiles) {
        if (fs.existsSync(configFile)) {
          try {
            const content = fs.readFileSync(configFile, 'utf8');
            info.configs[configFile] = content.substring(0, 1000); // First 1000 chars
          } catch (error) {
            info.configs[configFile] = 'Error reading file';
          }
        }
      }
      
      // File structure
      info.fileStructure = this.getFileStructure();
      
      // Recent changes
      info.recentChanges = this.getRecentChanges();
      
    } catch (error) {
      this.log(`Error gathering project information: ${error.message}`, 'ERROR');
    }
    
    return info;
  }

  async gatherCurrentIssues() {
    const issues = {
      build: [],
      lint: [],
      typescript: [],
      runtime: [],
      tests: []
    };
    
    try {
      // Build issues
      try {
        const buildOutput = execSync('npm run build 2>&1', { 
          encoding: 'utf8',
          timeout: 300000 
        });
        if (buildOutput.includes('error') || buildOutput.includes('Error')) {
          issues.build.push(buildOutput);
        }
      } catch (error) {
        issues.build.push(error.stdout || error.stderr || error.message);
      }
      
      // Lint issues
      try {
        const lintOutput = execSync('npm run lint 2>&1', { 
          encoding: 'utf8',
          timeout: 120000 
        });
        if (lintOutput.includes('error') || lintOutput.includes('Error')) {
          issues.lint.push(lintOutput);
        }
      } catch (error) {
        issues.lint.push(error.stdout || error.stderr || error.message);
      }
      
      // TypeScript issues
      try {
        const typeOutput = execSync('npm run typecheck 2>&1', { 
          encoding: 'utf8',
          timeout: 120000 
        });
        if (typeOutput.includes('error') || typeOutput.includes('Error')) {
          issues.typescript.push(typeOutput);
        }
      } catch (error) {
        issues.typescript.push(error.stdout || error.stderr || error.message);
      }
      
      // Test issues
      try {
        const testOutput = execSync('npm test 2>&1', { 
          encoding: 'utf8',
          timeout: 300000 
        });
        if (testOutput.includes('FAIL') || testOutput.includes('error')) {
          issues.tests.push(testOutput);
        }
      } catch (error) {
        issues.tests.push(error.stdout || error.stderr || error.message);
      }
      
    } catch (error) {
      this.log(`Error gathering current issues: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  async gatherPerformanceData() {
    const performance = {
      bundleSize: null,
      buildTime: null,
      memoryUsage: null,
      lighthouse: null
    };
    
    try {
      // Bundle analysis
      try {
        const bundleOutput = execSync('npm run bundle:analyze 2>&1', { 
          encoding: 'utf8',
          timeout: 120000 
        });
        performance.bundleSize = bundleOutput;
      } catch (error) {
        performance.bundleSize = 'Bundle analysis failed';
      }
      
      // Build time
      const startTime = Date.now();
      try {
        execSync('npm run build', { 
          stdio: 'pipe',
          timeout: 300000 
        });
        performance.buildTime = Date.now() - startTime;
      } catch (error) {
        performance.buildTime = 'Build failed';
      }
      
      // Memory usage
      try {
        const memoryOutput = execSync('node -e "console.log(process.memoryUsage())"', { 
          encoding: 'utf8' 
        });
        performance.memoryUsage = memoryOutput;
      } catch (error) {
        performance.memoryUsage = 'Memory check failed';
      }
      
    } catch (error) {
      this.log(`Error gathering performance data: ${error.message}`, 'ERROR');
    }
    
    return performance;
  }

  async gatherSecurityData() {
    const security = {
      vulnerabilities: [],
      audit: null,
      dependencies: []
    };
    
    try {
      // NPM audit
      try {
        const auditOutput = execSync('npm audit --json 2>&1', { 
          encoding: 'utf8',
          timeout: 60000 
        });
        security.audit = auditOutput;
      } catch (error) {
        security.audit = 'Audit failed';
      }
      
      // Check for known vulnerable dependencies
      const vulnerableDeps = [
        'lodash',
        'moment',
        'jquery',
        'express'
      ];
      
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const allDeps = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        
        for (const dep of vulnerableDeps) {
          if (allDeps[dep]) {
            security.dependencies.push(`${dep}: ${allDeps[dep]}`);
          }
        }
      }
      
    } catch (error) {
      this.log(`Error gathering security data: ${error.message}`, 'ERROR');
    }
    
    return security;
  }

  async gatherAccessibilityData() {
    const accessibility = {
      axeResults: null,
      wcagIssues: [],
      ariaIssues: []
    };
    
    try {
      // Run accessibility tests if available
      try {
        const axeOutput = execSync('npm run test:axe 2>&1', { 
          encoding: 'utf8',
          timeout: 120000 
        });
        accessibility.axeResults = axeOutput;
      } catch (error) {
        accessibility.axeResults = 'Accessibility tests not available';
      }
      
      // Check for common accessibility issues in code
      const srcFiles = this.findFiles('src/**/*.{js,jsx,ts,tsx}');
      for (const file of srcFiles.slice(0, 10)) { // Check first 10 files
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for missing alt attributes
        if (content.includes('<img') && !content.includes('alt=')) {
          accessibility.wcagIssues.push(`${file}: Missing alt attribute on img`);
        }
        
        // Check for missing ARIA labels
        if (content.includes('aria-label') && !content.includes('aria-label=')) {
          accessibility.ariaIssues.push(`${file}: Incomplete ARIA label`);
        }
      }
      
    } catch (error) {
      this.log(`Error gathering accessibility data: ${error.message}`, 'ERROR');
    }
    
    return accessibility;
  }

  getFileStructure() {
    const structure = {};
    
    try {
      const dirs = ['src', 'pages', 'components', 'utils', 'hooks', 'context'];
      
      for (const dir of dirs) {
        if (fs.existsSync(dir)) {
          structure[dir] = this.getDirectoryStructure(dir, 2); // 2 levels deep
        }
      }
    } catch (error) {
      this.log(`Error getting file structure: ${error.message}`, 'ERROR');
    }
    
    return structure;
  }

  getDirectoryStructure(dir, maxDepth, currentDepth = 0) {
    if (currentDepth >= maxDepth) return '...';
    
    const structure = {};
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items.slice(0, 10)) { // Limit to 10 items
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          structure[item] = this.getDirectoryStructure(fullPath, maxDepth, currentDepth + 1);
        } else {
          structure[item] = 'file';
        }
      }
    } catch (error) {
      structure.error = error.message;
    }
    
    return structure;
  }

  getRecentChanges() {
    const changes = [];
    
    try {
      const gitLog = execSync('git log --oneline -10', { encoding: 'utf8' });
      changes.push(...gitLog.split('\n').filter(line => line.trim()));
    } catch (error) {
      changes.push('Git log unavailable');
    }
    
    return changes;
  }

  findFiles(pattern) {
    const files = [];
    
    try {
      const glob = require('glob');
      files.push(...glob.sync(pattern));
    } catch (error) {
      this.log(`Error finding files with pattern ${pattern}: ${error.message}`, 'ERROR');
    }
    
    return files;
  }

  generateComprehensivePrompt(data) {
    const {
      category,
      specificIssue,
      projectInfo,
      currentIssues,
      performanceData,
      securityData,
      accessibilityData
    } = data;
    
    const categoryInfo = CONFIG.chatCategories[category] || CONFIG.chatCategories.build;
    
    return `# ${categoryInfo.title} - Comprehensive Analysis and Improvement

## Project Overview
- **Name**: ${projectInfo.packageJson?.name || 'Unknown'}
- **Version**: ${projectInfo.packageJson?.version || 'Unknown'}
- **Dependencies**: ${projectInfo.packageJson?.dependencies?.length || 0} production, ${projectInfo.packageJson?.devDependencies?.length || 0} development
- **Scripts Available**: ${projectInfo.packageJson?.scripts?.join(', ') || 'None'}

## Current Issues

### Build Issues
${currentIssues.build.length > 0 ? currentIssues.build.join('\n\n') : 'No build issues detected'}

### Lint Issues
${currentIssues.lint.length > 0 ? currentIssues.lint.join('\n\n') : 'No lint issues detected'}

### TypeScript Issues
${currentIssues.typescript.length > 0 ? currentIssues.typescript.join('\n\n') : 'No TypeScript issues detected'}

### Test Issues
${currentIssues.tests.length > 0 ? currentIssues.tests.join('\n\n') : 'No test issues detected'}

## Performance Data
- **Build Time**: ${performanceData.buildTime}ms
- **Bundle Analysis**: ${performanceData.bundleSize ? 'Available' : 'Not available'}
- **Memory Usage**: ${performanceData.memoryUsage ? 'Available' : 'Not available'}

## Security Analysis
- **NPM Audit**: ${securityData.audit ? 'Issues found' : 'Clean'}
- **Vulnerable Dependencies**: ${securityData.dependencies.length > 0 ? securityData.dependencies.join(', ') : 'None detected'}

## Accessibility Analysis
- **Axe Results**: ${accessibilityData.axeResults ? 'Available' : 'Not available'}
- **WCAG Issues**: ${accessibilityData.wcagIssues.length > 0 ? accessibilityData.wcagIssues.join(', ') : 'None detected'}
- **ARIA Issues**: ${accessibilityData.ariaIssues.length > 0 ? accessibilityData.ariaIssues.join(', ') : 'None detected'}

## Specific Issue
${specificIssue ? specificIssue : 'General improvement request'}

## Request
Please provide a comprehensive analysis and improvement plan for this ${category} category. Include:

1. **Root Cause Analysis**: Identify the underlying causes of any issues
2. **Immediate Fixes**: Code changes and configuration updates needed
3. **Long-term Improvements**: Architectural and process improvements
4. **Best Practices**: Recommendations for preventing similar issues
5. **Testing Strategy**: How to validate the improvements
6. **Monitoring**: How to track the effectiveness of changes

## Context
This is an automated request from the Advanced Self-Healing System for continuous app improvement. The system will automatically commit and push any changes you recommend.

Please provide specific, actionable recommendations with code examples where appropriate.`;
  }

  async sendCursorChat(prompt) {
    if (!CONFIG.cursorApiKey) {
      throw new Error('Cursor API key not configured');
    }

    return new Promise((resolve, reject) => {
      const postData = JSON.stringify({
        workspaceId: CONFIG.cursorWorkspaceId,
        message: prompt,
        context: {
          timestamp: new Date().toISOString(),
          system: 'cursor-chat-trigger',
          category: 'comprehensive-improvement'
        }
      });
      
      const options = {
        hostname: new URL(CONFIG.cursorApiUrl).hostname,
        port: 443,
        path: '/api/chat',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'Authorization': `Bearer ${CONFIG.cursorApiKey}`
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(JSON.parse(data));
          } else {
            reject(new Error(`Cursor API error: ${res.statusCode} - ${data}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(postData);
      req.end();
    });
  }

  async triggerSpecificChat(issue) {
    this.log(`Triggering specific Cursor chat for issue: ${issue.type}`);
    
    const prompt = `# Specific Issue Resolution

## Issue Details
- **Type**: ${issue.type}
- **Pattern**: ${issue.pattern}
- **Severity**: ${issue.severity}
- **Output**: ${issue.output}

## Request
Please provide a specific solution for this issue. Include:

1. **Immediate Fix**: Code changes needed to resolve the issue
2. **Root Cause**: Why this issue occurred
3. **Prevention**: How to prevent similar issues
4. **Testing**: How to verify the fix works

Please provide specific code examples and step-by-step instructions.`;
    
    try {
      const response = await this.sendCursorChat(prompt);
      this.log(`Specific chat triggered successfully for ${issue.type}`);
      return response;
    } catch (error) {
      this.log(`Failed to trigger specific chat: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const trigger = new CursorChatTrigger();
  
  const command = process.argv[2];
  const category = process.argv[3] || 'general';
  const specificIssue = process.argv[4];
  
  switch (command) {
    case 'comprehensive':
      trigger.triggerComprehensiveChat(category, specificIssue).then(() => {
        console.log('Comprehensive chat triggered successfully');
        process.exit(0);
      }).catch(error => {
        console.error('Failed to trigger comprehensive chat:', error.message);
        process.exit(1);
      });
      break;
    case 'specific':
      if (!specificIssue) {
        console.error('Specific issue required for specific chat');
        process.exit(1);
      }
      trigger.triggerSpecificChat({ type: category, pattern: specificIssue }).then(() => {
        console.log('Specific chat triggered successfully');
        process.exit(0);
      }).catch(error => {
        console.error('Failed to trigger specific chat:', error.message);
        process.exit(1);
      });
      break;
    default:
      console.log(`
Cursor Chat Trigger

Usage:
  node scripts/cursor-chat-trigger.cjs <command> [category] [specific-issue]

Commands:
  comprehensive [category] [specific-issue] - Trigger comprehensive analysis chat
  specific <category> <specific-issue>      - Trigger specific issue resolution chat

Categories:
  build, lint, typescript, runtime, performance, security, accessibility, testing, deployment, userExperience

Environment Variables:
  CURSOR_API_KEY      - Cursor API key
  CURSOR_WORKSPACE_ID - Cursor workspace ID
  CURSOR_API_URL      - Cursor API URL (optional)
      `);
      process.exit(1);
  }
}

module.exports = CursorChatTrigger; 