#!/usr/bin/env node

/**
 * App Content Crawler - Comprehensive Application Analysis & Content Generation
 * 
 * This automation crawls the entire application structure, analyzes content gaps,
 * and generates suggestions for additional content and agent factories.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppContentCrawler {
  constructor() {
    this.appRoot = process.cwd();
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      appStructure: {},
      contentAnalysis: {},
      gapAnalysis: {},
      agentSuggestions: {},
      contentSuggestions: {},
      githubActionsSuggestions: {}
    };
    
    this.ignoredDirs = [
      'node_modules', '.git', '.next', 'out', 'dist', 'build',
      'coverage', '.nyc_output', 'logs', 'temp', '.temp'
    ];
    
    this.contentExtensions = ['.tsx', '.ts', '.jsx', '.js', '.md', '.json', '.html', '.css'];
    this.configExtensions = ['.json', '.js', '.cjs', '.ts', '.yml', '.yaml', '.toml'];
  }

  async run() {
    console.log('🚀 Starting App Content Crawler...');
    
    try {
      await this.analyzeAppStructure();
      await this.analyzeContent();
      await this.analyzeContentGaps();
      await this.generateAgentSuggestions();
      await this.generateContentSuggestions();
      await this.generateGitHubActionsSuggestions();
      await this.saveResults();
      await this.generateReport();
      
      console.log('✅ App Content Crawler completed successfully!');
      return this.analysisResults;
    } catch (error) {
      console.error('❌ Error in App Content Crawler:', error);
      throw error;
    }
  }

  async analyzeAppStructure() {
    console.log('📁 Analyzing application structure...');
    
    this.analysisResults.appStructure = {
      directories: {},
      files: {},
      dependencies: {},
      scripts: {},
      workflows: {}
    };

    // Analyze package.json
    const packagePath = path.join(this.appRoot, 'package.json');
    if (fs.existsSync(packagePath)) {
      const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      this.analysisResults.appStructure.dependencies = {
        dependencies: packageData.dependencies || {},
        devDependencies: packageData.devDependencies || {},
        scripts: packageData.scripts || {}
      };
    }

    // Analyze GitHub workflows
    const workflowsDir = path.join(this.appRoot, '.github', 'workflows');
    if (fs.existsSync(workflowsDir)) {
      this.analysisResults.appStructure.workflows = this.analyzeWorkflows(workflowsDir);
    }

    // Analyze directory structure
    this.analysisResults.appStructure.directories = this.analyzeDirectories(this.appRoot);
    
    // Analyze file distribution
    this.analysisResults.appStructure.files = this.analyzeFiles(this.appRoot);
  }

  analyzeWorkflows(workflowsDir) {
    const workflows = {};
    const files = fs.readdirSync(workflowsDir);
    
    files.forEach(file => {
      if (file.endsWith('.yml') || file.endsWith('.yaml')) {
        const filePath = path.join(workflowsDir, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          workflows[file] = {
            size: content.length,
            triggers: this.extractWorkflowTriggers(content),
            jobs: this.extractWorkflowJobs(content)
          };
        } catch (error) {
          workflows[file] = { error: error.message };
        }
      }
    });
    
    return workflows;
  }

  extractWorkflowTriggers(content) {
    const triggers = [];
    const lines = content.split('\n');
    
    lines.forEach(line => {
      if (line.includes('on:')) {
        const nextLine = lines[lines.indexOf(line) + 1];
        if (nextLine && nextLine.trim().startsWith('-')) {
          triggers.push(nextLine.trim().substring(1));
        }
      }
    });
    
    return triggers;
  }

  extractWorkflowJobs(content) {
    const jobs = [];
    const lines = content.split('\n');
    let inJobs = false;
    
    lines.forEach(line => {
      if (line.includes('jobs:')) {
        inJobs = true;
      } else if (inJobs && line.trim() && !line.startsWith(' ')) {
        inJobs = false;
      } else if (inJobs && line.includes(':')) {
        const jobName = line.split(':')[0].trim();
        if (jobName && !jobName.startsWith('#')) {
          jobs.push(jobName);
        }
      }
    });
    
    return jobs;
  }

  analyzeDirectories(rootDir, relativePath = '') {
    const result = {};
    
    try {
      const items = fs.readdirSync(rootDir);
      
      items.forEach(item => {
        if (this.ignoredDirs.includes(item)) return;
        
        const fullPath = path.join(rootDir, item);
        const relativeItemPath = path.join(relativePath, item);
        
        if (fs.statSync(fullPath).isDirectory()) {
          result[item] = {
            type: 'directory',
            path: relativeItemPath,
            contents: this.analyzeDirectories(fullPath, relativeItemPath)
          };
        }
      });
    } catch (error) {
      result.error = error.message;
    }
    
    return result;
  }

  analyzeFiles(rootDir, relativePath = '') {
    const result = {
      total: 0,
      byExtension: {},
      byType: {}
    };
    
    try {
      const items = fs.readdirSync(rootDir);
      
      items.forEach(item => {
        if (this.ignoredDirs.includes(item)) return;
        
        const fullPath = path.join(rootDir, item);
        const relativeItemPath = path.join(relativePath, item);
        
        if (fs.statSync(fullPath).isFile()) {
          const ext = path.extname(item);
          const type = this.getFileType(ext);
          
          result.total++;
          result.byExtension[ext] = (result.byExtension[ext] || 0) + 1;
          result.byType[type] = (result.byType[type] || 0) + 1;
        } else if (fs.statSync(fullPath).isDirectory()) {
          const subResult = this.analyzeFiles(fullPath, relativeItemPath);
          result.total += subResult.total;
          
          Object.keys(subResult.byExtension).forEach(ext => {
            result.byExtension[ext] = (result.byExtension[ext] || 0) + subResult.byExtension[ext];
          });
          
          Object.keys(subResult.byType).forEach(type => {
            result.byType[type] = (result.byType[type] || 0) + subResult.byType[type];
          });
        }
      });
    } catch (error) {
      result.error = error.message;
    }
    
    return result;
  }

  getFileType(extension) {
    if (['.tsx', '.ts', '.jsx', '.js'].includes(extension)) return 'code';
    if (['.md', '.txt'].includes(extension)) return 'documentation';
    if (['.json', '.yml', '.yaml', '.toml'].includes(extension)) return 'configuration';
    if (['.css', '.scss', '.sass'].includes(extension)) return 'styling';
    if (['.html', '.xml'].includes(extension)) return 'markup';
    return 'other';
  }

  async analyzeContent() {
    console.log('📝 Analyzing content...');
    
    this.analysisResults.contentAnalysis = {
      pages: this.analyzePages(),
      components: this.analyzeComponents(),
      documentation: this.analyzeDocumentation(),
      automation: this.analyzeAutomation()
    };
  }

  analyzePages() {
    const pagesDir = path.join(this.appRoot, 'pages');
    if (!fs.existsSync(pagesDir)) return {};
    
    const pages = {};
    const items = fs.readdirSync(pagesDir);
    
    items.forEach(item => {
      if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        const filePath = path.join(pagesDir, item);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          pages[item] = {
            size: content.length,
            hasSEO: content.includes('DefaultSEO') || content.includes('Head'),
            hasMetadata: content.includes('title') || content.includes('description'),
            complexity: this.analyzeCodeComplexity(content)
          };
        } catch (error) {
          pages[item] = { error: error.message };
        }
      }
    });
    
    return pages;
  }

  analyzeComponents() {
    const componentsDir = path.join(this.appRoot, 'components');
    if (!fs.existsSync(componentsDir)) return {};
    
    const components = {};
    const items = fs.readdirSync(componentsDir);
    
    items.forEach(item => {
      if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        const filePath = path.join(componentsDir, item);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          components[item] = {
            size: content.length,
            hasProps: content.includes('interface') || content.includes('type') || content.includes('props'),
            hasState: content.includes('useState') || content.includes('useEffect'),
            complexity: this.analyzeCodeComplexity(content)
          };
        } catch (error) {
          components[item] = { error: error.message };
        }
      }
    });
    
    return components;
  }

  analyzeDocumentation() {
    const docsDir = path.join(this.appRoot, 'docs');
    if (!fs.existsSync(docsDir)) return {};
    
    const docs = {};
    const items = fs.readdirSync(docsDir);
    
    items.forEach(item => {
      if (item.endsWith('.md')) {
        const filePath = path.join(docsDir, item);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          docs[item] = {
            size: content.length,
            hasTOC: content.includes('##') || content.includes('###'),
            hasCodeBlocks: content.includes('```'),
            hasLinks: content.includes('[') && content.includes('](')
          };
        } catch (error) {
          docs[item] = { error: error.message };
        }
      }
    });
    
    return docs;
  }

  analyzeAutomation() {
    const automationDir = path.join(this.appRoot, 'automation');
    if (!fs.existsSync(automationDir)) return {};
    
    const automation = {};
    const items = fs.readdirSync(automationDir);
    
    items.forEach(item => {
      if (item.endsWith('.cjs') || item.endsWith('.js')) {
        const filePath = path.join(automationDir, item);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          automation[item] = {
            size: content.length,
            hasClass: content.includes('class'),
            hasAsync: content.includes('async') || content.includes('await'),
            hasErrorHandling: content.includes('try') || content.includes('catch'),
            complexity: this.analyzeCodeComplexity(content)
          };
        } catch (error) {
          automation[item] = { error: error.message };
        }
      }
    });
    
    return automation;
  }

  analyzeCodeComplexity(content) {
    const lines = content.split('\n');
    const codeLines = lines.filter(line => line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('/*'));
    
    return {
      totalLines: lines.length,
      codeLines: codeLines.length,
      commentLines: lines.length - codeLines.length,
      functions: (content.match(/function|=>/g) || []).length,
      imports: (content.match(/import|require/g) || []).length
    };
  }

  async analyzeContentGaps() {
    console.log('🔍 Analyzing content gaps...');
    
    this.analysisResults.gapAnalysis = {
      missingPages: this.identifyMissingPages(),
      missingComponents: this.identifyMissingComponents(),
      missingDocumentation: this.identifyMissingDocumentation(),
      missingAutomation: this.identifyMissingAutomation()
    };
  }

  identifyMissingPages() {
    const suggestions = [];
    const existingPages = Object.keys(this.analysisResults.contentAnalysis.pages);
    
    // Common missing pages
    const commonPages = [
      'about', 'contact', 'privacy', 'terms', 'sitemap', 'robots',
      'api', 'status', 'changelog', 'roadmap', 'support', 'help'
    ];
    
    commonPages.forEach(page => {
      if (!existingPages.some(existing => existing.includes(page))) {
        suggestions.push({
          type: 'page',
          name: page,
          priority: 'medium',
          reason: 'Common website page that improves user experience'
        });
      }
    });
    
    return suggestions;
  }

  identifyMissingComponents() {
    const suggestions = [];
    const existingComponents = Object.keys(this.analysisResults.contentAnalysis.components);
    
    // Common missing components
    const commonComponents = [
      'Header', 'Footer', 'Navigation', 'Sidebar', 'Modal', 'Toast',
      'Button', 'Input', 'Form', 'Table', 'Card', 'Loader', 'ErrorBoundary'
    ];
    
    commonComponents.forEach(component => {
      if (!existingComponents.some(existing => existing.includes(component))) {
        suggestions.push({
          type: 'component',
          name: component,
          priority: 'medium',
          reason: 'Common UI component that improves reusability'
        });
      }
    });
    
    return suggestions;
  }

  identifyMissingDocumentation() {
    const suggestions = [];
    const existingDocs = Object.keys(this.analysisResults.contentAnalysis.documentation);
    
    // Common missing documentation
    const commonDocs = [
      'README', 'CONTRIBUTING', 'API', 'DEPLOYMENT', 'TROUBLESHOOTING',
      'ARCHITECTURE', 'TESTING', 'SECURITY', 'PERFORMANCE'
    ];
    
    commonDocs.forEach(doc => {
      if (!existingDocs.some(existing => existing.toLowerCase().includes(doc.toLowerCase()))) {
        suggestions.push({
          type: 'documentation',
          name: doc,
          priority: 'high',
          reason: 'Essential documentation for developers and users'
        });
      }
    });
    
    return suggestions;
  }

  identifyMissingAutomation() {
    const suggestions = [];
    const existingAutomation = Object.keys(this.analysisResults.contentAnalysis.automation);
    
    // Common missing automation
    const commonAutomation = [
      'testing', 'deployment', 'monitoring', 'backup', 'cleanup',
      'performance', 'security', 'dependency', 'content'
    ];
    
    commonAutomation.forEach(auto => {
      if (!existingAutomation.some(existing => existing.toLowerCase().includes(auto.toLowerCase()))) {
        suggestions.push({
          type: 'automation',
          name: auto,
          priority: 'medium',
          reason: 'Automation that improves development workflow'
        });
      }
    });
    
    return suggestions;
  }

  async generateAgentSuggestions() {
    console.log('🤖 Generating agent suggestions...');
    
    this.analysisResults.agentSuggestions = {
      contentAgents: this.suggestContentAgents(),
      automationAgents: this.suggestAutomationAgents(),
      monitoringAgents: this.suggestMonitoringAgents(),
      deploymentAgents: this.suggestDeploymentAgents()
    };
  }

  suggestContentAgents() {
    return [
      {
        name: 'Content Gap Analyzer Agent',
        purpose: 'Automatically identify and suggest missing content',
        triggers: ['content-update', 'weekly-scan'],
        actions: ['analyze-content', 'generate-suggestions', 'create-tasks'],
        priority: 'high'
      },
      {
        name: 'SEO Optimization Agent',
        purpose: 'Optimize content for search engines',
        triggers: ['content-publish', 'weekly-optimization'],
        actions: ['analyze-seo', 'suggest-improvements', 'update-metadata'],
        priority: 'medium'
      },
      {
        name: 'Content Quality Agent',
        purpose: 'Ensure content quality and consistency',
        triggers: ['content-creation', 'daily-review'],
        actions: ['check-grammar', 'validate-links', 'assess-readability'],
        priority: 'medium'
      }
    ];
  }

  suggestAutomationAgents() {
    return [
      {
        name: 'Workflow Orchestrator Agent',
        purpose: 'Coordinate and optimize GitHub Actions workflows',
        triggers: ['workflow-trigger', 'performance-alert'],
        actions: ['analyze-workflows', 'optimize-performance', 'suggest-improvements'],
        priority: 'high'
      },
      {
        name: 'Dependency Manager Agent',
        purpose: 'Manage and update dependencies automatically',
        triggers: ['dependency-alert', 'weekly-scan'],
        actions: ['check-updates', 'test-compatibility', 'create-prs'],
        priority: 'high'
      },
      {
        name: 'Code Quality Agent',
        purpose: 'Maintain code quality standards',
        triggers: ['pr-created', 'daily-scan'],
        actions: ['run-linters', 'check-coverage', 'validate-standards'],
        priority: 'medium'
      }
    ];
  }

  suggestMonitoringAgents() {
    return [
      {
        name: 'Performance Monitor Agent',
        purpose: 'Monitor application performance metrics',
        triggers: ['deployment', 'hourly-check'],
        actions: ['collect-metrics', 'analyze-trends', 'alert-degradation'],
        priority: 'high'
      },
      {
        name: 'Security Scanner Agent',
        purpose: 'Continuously scan for security vulnerabilities',
        triggers: ['dependency-update', 'daily-scan'],
        actions: ['scan-dependencies', 'check-vulnerabilities', 'create-alerts'],
        priority: 'high'
      },
      {
        name: 'Uptime Monitor Agent',
        purpose: 'Monitor application availability',
        triggers: ['continuous', 'incident-detected'],
        actions: ['check-endpoints', 'measure-response-time', 'alert-outages'],
        priority: 'high'
      }
    ];
  }

  suggestDeploymentAgents() {
    return [
      {
        name: 'Deployment Orchestrator Agent',
        purpose: 'Coordinate deployment processes',
        triggers: ['deployment-request', 'merge-to-main'],
        actions: ['validate-changes', 'run-tests', 'deploy-safely'],
        priority: 'high'
      },
      {
        name: 'Rollback Manager Agent',
        purpose: 'Manage deployment rollbacks',
        triggers: ['deployment-failure', 'performance-degradation'],
        actions: ['assess-impact', 'execute-rollback', 'notify-team'],
        priority: 'high'
      },
      {
        name: 'Environment Manager Agent',
        purpose: 'Manage deployment environments',
        triggers: ['environment-change', 'config-update'],
        actions: ['validate-config', 'update-environment', 'verify-health'],
        priority: 'medium'
      }
    ];
  }

  async generateContentSuggestions() {
    console.log('📚 Generating content suggestions...');
    
    this.analysisResults.contentSuggestions = {
      newPages: this.suggestNewPages(),
      newComponents: this.suggestNewComponents(),
      newDocumentation: this.suggestNewDocumentation(),
      newAutomation: this.suggestNewAutomation()
    };
  }

  suggestNewPages() {
    const suggestions = [];
    const existingPages = Object.keys(this.analysisResults.contentAnalysis.pages);
    
    // Analyze existing content to suggest related pages
    if (existingPages.some(p => p.includes('blog'))) {
      suggestions.push({
        name: 'blog-categories',
        type: 'page',
        priority: 'medium',
        reason: 'Organize blog content by categories',
        content: 'Category-based blog organization with filtering and search'
      });
    }
    
    if (existingPages.some(p => p.includes('services'))) {
      suggestions.push({
        name: 'service-details',
        type: 'page',
        priority: 'medium',
        reason: 'Detailed service information pages',
        content: 'Individual service pages with detailed descriptions and pricing'
      });
    }
    
    return suggestions;
  }

  suggestNewComponents() {
    const suggestions = [];
    const existingComponents = Object.keys(this.analysisResults.contentAnalysis.components);
    
    // Suggest components based on existing ones
    if (existingComponents.some(c => c.includes('Card'))) {
      suggestions.push({
        name: 'CardGrid',
        type: 'component',
        priority: 'medium',
        reason: 'Grid layout for multiple cards',
        content: 'Responsive grid component for displaying multiple cards'
      });
    }
    
    if (existingComponents.some(c => c.includes('Button'))) {
      suggestions.push({
        name: 'ButtonGroup',
        type: 'component',
        priority: 'low',
        reason: 'Group related buttons together',
        content: 'Button group component with consistent spacing and alignment'
      });
    }
    
    return suggestions;
  }

  suggestNewDocumentation() {
    const suggestions = [];
    const existingDocs = Object.keys(this.analysisResults.contentAnalysis.documentation);
    
    // Suggest documentation based on app structure
    if (this.analysisResults.appStructure.workflows && Object.keys(this.analysisResults.appStructure.workflows).length > 0) {
      suggestions.push({
        name: 'WORKFLOWS',
        type: 'documentation',
        priority: 'high',
        reason: 'Document GitHub Actions workflows',
        content: 'Comprehensive documentation of all GitHub Actions workflows and their purposes'
      });
    }
    
    if (this.analysisResults.appStructure.dependencies.scripts && Object.keys(this.analysisResults.appStructure.dependencies.scripts).length > 0) {
      suggestions.push({
        name: 'SCRIPTS',
        type: 'documentation',
        priority: 'medium',
        reason: 'Document available npm scripts',
        content: 'Documentation of all available npm scripts and their usage'
      });
    }
    
    return suggestions;
  }

  suggestNewAutomation() {
    const suggestions = [];
    const existingAutomation = Object.keys(this.analysisResults.contentAnalysis.automation);
    
    // Suggest automation based on app structure
    if (!existingAutomation.some(a => a.includes('backup'))) {
      suggestions.push({
        name: 'backup-automation',
        type: 'automation',
        priority: 'medium',
        reason: 'Automated backup system',
        content: 'Automated backup system for critical data and configurations'
      });
    }
    
    if (!existingAutomation.some(a => a.includes('cleanup'))) {
      suggestions.push({
        name: 'cleanup-automation',
        type: 'automation',
        priority: 'low',
        reason: 'Automated cleanup system',
        content: 'Automated cleanup system for temporary files and logs'
      });
    }
    
    return suggestions;
  }

  async generateGitHubActionsSuggestions() {
    console.log('⚡ Generating GitHub Actions suggestions...');
    
    this.analysisResults.githubActionsSuggestions = {
      newWorkflows: this.suggestNewWorkflows(),
      workflowImprovements: this.suggestWorkflowImprovements(),
      agentFactories: this.suggestAgentFactories()
    };
  }

  suggestNewWorkflows() {
    const suggestions = [];
    const existingWorkflows = Object.keys(this.analysisResults.appStructure.workflows);
    
    // Suggest new workflows based on app analysis
    if (!existingWorkflows.some(w => w.includes('content'))) {
      suggestions.push({
        name: 'content-generation',
        filename: 'content-generation.yml',
        purpose: 'Automated content generation and updates',
        triggers: ['schedule', 'manual'],
        jobs: ['analyze-content', 'generate-suggestions', 'create-issues'],
        priority: 'high'
      });
    }
    
    if (!existingWorkflows.some(w => w.includes('agent'))) {
      suggestions.push({
        name: 'agent-factory',
        filename: 'agent-factory.yml',
        purpose: 'Create and manage automation agents',
        triggers: ['schedule', 'manual'],
        jobs: ['analyze-needs', 'generate-agents', 'deploy-agents'],
        priority: 'high'
      });
    }
    
    if (!existingWorkflows.some(w => w.includes('performance'))) {
      suggestions.push({
        name: 'performance-monitoring',
        filename: 'performance-monitoring.yml',
        purpose: 'Monitor and optimize application performance',
        triggers: ['schedule', 'deployment'],
        jobs: ['run-lighthouse', 'analyze-metrics', 'generate-report'],
        priority: 'medium'
      });
    }
    
    return suggestions;
  }

  suggestWorkflowImprovements() {
    const suggestions = [];
    const existingWorkflows = this.analysisResults.appStructure.workflows;
    
    Object.entries(existingWorkflows).forEach(([filename, workflow]) => {
      if (workflow.error) return;
      
      // Suggest improvements based on workflow analysis
      if (workflow.size < 1000) {
        suggestions.push({
          workflow: filename,
          type: 'optimization',
          suggestion: 'Consider adding more comprehensive error handling and logging',
          priority: 'medium'
        });
      }
      
      if (!workflow.triggers || workflow.triggers.length === 0) {
        suggestions.push({
          workflow: filename,
          type: 'trigger',
          suggestion: 'Add appropriate triggers for automated execution',
          priority: 'high'
        });
      }
      
      if (!workflow.jobs || workflow.jobs.length === 0) {
        suggestions.push({
          workflow: filename,
          type: 'jobs',
          suggestion: 'Define clear job steps for workflow execution',
          priority: 'high'
        });
      }
    });
    
    return suggestions;
  }

  suggestAgentFactories() {
    return [
      {
        name: 'Content Agent Factory',
        purpose: 'Automatically create content generation agents',
        workflow: 'agent-factory-content.yml',
        triggers: ['content-gap-detected', 'weekly-scan'],
        agents: [
          'Blog Post Generator',
          'Documentation Writer',
          'SEO Content Optimizer',
          'Social Media Content Creator'
        ],
        priority: 'high'
      },
      {
        name: 'Automation Agent Factory',
        purpose: 'Create automation agents for various tasks',
        workflow: 'agent-factory-automation.yml',
        triggers: ['automation-need-detected', 'manual'],
        agents: [
          'Dependency Manager',
          'Code Quality Enforcer',
          'Performance Monitor',
          'Security Scanner'
        ],
        priority: 'high'
      },
      {
        name: 'Monitoring Agent Factory',
        purpose: 'Create monitoring agents for different aspects',
        workflow: 'agent-factory-monitoring.yml',
        triggers: ['monitoring-gap-detected', 'weekly-scan'],
        agents: [
          'Uptime Monitor',
          'Performance Tracker',
          'Error Logger',
          'Resource Usage Monitor'
        ],
        priority: 'medium'
      },
      {
        name: 'Deployment Agent Factory',
        purpose: 'Create deployment-related agents',
        workflow: 'agent-factory-deployment.yml',
        triggers: ['deployment-issue', 'manual'],
        agents: [
          'Deployment Validator',
          'Rollback Manager',
          'Environment Synchronizer',
          'Health Checker'
        ],
        priority: 'medium'
      }
    ];
  }

  async saveResults() {
    const outputDir = path.join(this.appRoot, 'automation', 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const filename = `app-content-crawler-${Date.now()}.json`;
    const filepath = path.join(outputDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(this.analysisResults, null, 2));
    console.log(`💾 Results saved to: ${filepath}`);
  }

  async generateReport() {
    const outputDir = path.join(this.appRoot, 'automation', 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const filename = `app-content-crawler-report-${Date.now()}.md`;
    const filepath = path.join(outputDir, filename);
    
    const report = this.generateMarkdownReport();
    fs.writeFileSync(filepath, report);
    console.log(`📊 Report generated: ${filepath}`);
  }

  generateMarkdownReport() {
    const results = this.analysisResults;
    
    return `# App Content Crawler Report

Generated on: ${results.timestamp}

## 📊 Application Structure Summary

### Files and Directories
- **Total Files**: ${results.appStructure.files.total}
- **File Types**: ${Object.keys(results.appStructure.files.byType).join(', ')}
- **Top Extensions**: ${Object.entries(results.appStructure.files.byExtension)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([ext, count]) => `${ext}: ${count}`)
    .join(', ')}

### Dependencies
- **Production Dependencies**: ${Object.keys(results.appStructure.dependencies.dependencies).length}
- **Development Dependencies**: ${Object.keys(results.appStructure.dependencies.devDependencies).length}
- **Scripts**: ${Object.keys(results.appStructure.dependencies.scripts).length}

### GitHub Workflows
- **Total Workflows**: ${Object.keys(results.appStructure.workflows).length}
- **Workflow Files**: ${Object.keys(results.appStructure.workflows).join(', ')}

## 🔍 Content Analysis

### Pages
- **Total Pages**: ${Object.keys(results.contentAnalysis.pages).length}
- **Pages with SEO**: ${Object.values(results.contentAnalysis.pages).filter(p => p.hasSEO).length}
- **Pages with Metadata**: ${Object.values(results.contentAnalysis.pages).filter(p => p.hasMetadata).length}

### Components
- **Total Components**: ${Object.keys(results.contentAnalysis.components).length}
- **Components with Props**: ${Object.values(results.contentAnalysis.components).filter(c => c.hasProps).length}
- **Components with State**: ${Object.values(results.contentAnalysis.components).filter(c => c.hasState).length}

### Documentation
- **Total Docs**: ${Object.keys(results.contentAnalysis.documentation).length}
- **Docs with TOC**: ${Object.values(results.contentAnalysis.documentation).filter(d => d.hasTOC).length}
- **Docs with Code Blocks**: ${Object.values(results.contentAnalysis.documentation).filter(d => d.hasCodeBlocks).length}

### Automation
- **Total Automation**: ${Object.keys(results.contentAnalysis.automation).length}
- **Async Functions**: ${Object.values(results.contentAnalysis.automation).filter(a => a.hasAsync).length}
- **Error Handling**: ${Object.values(results.contentAnalysis.automation).filter(a => a.hasErrorHandling).length}

## 🚨 Content Gaps

### Missing Pages (${results.gapAnalysis.missingPages.length})
${results.gapAnalysis.missingPages.map(gap => `- **${gap.name}** (${gap.priority}): ${gap.reason}`).join('\n')}

### Missing Components (${results.gapAnalysis.missingComponents.length})
${results.gapAnalysis.missingComponents.map(gap => `- **${gap.name}** (${gap.priority}): ${gap.reason}`).join('\n')}

### Missing Documentation (${results.gapAnalysis.missingDocumentation.length})
${results.gapAnalysis.missingDocumentation.map(gap => `- **${gap.name}** (${gap.priority}): ${gap.reason}`).join('\n')}

### Missing Automation (${results.gapAnalysis.missingAutomation.length})
${results.gapAnalysis.missingAutomation.map(gap => `- **${gap.name}** (${gap.priority}): ${gap.reason}`).join('\n')}

## 🤖 Agent Suggestions

### Content Agents (${results.agentSuggestions.contentAgents.length})
${results.agentSuggestions.contentAgents.map(agent => `- **${agent.name}** (${agent.priority}): ${agent.purpose}`).join('\n')}

### Automation Agents (${results.agentSuggestions.automationAgents.length})
${results.agentSuggestions.automationAgents.map(agent => `- **${agent.name}** (${agent.priority}): ${agent.purpose}`).join('\n')}

### Monitoring Agents (${results.agentSuggestions.monitoringAgents.length})
${results.agentSuggestions.monitoringAgents.map(agent => `- **${agent.name}** (${agent.priority}): ${agent.purpose}`).join('\n')}

### Deployment Agents (${results.agentSuggestions.deploymentAgents.length})
${results.agentSuggestions.deploymentAgents.map(agent => `- **${agent.name}** (${agent.priority}): ${agent.purpose}`).join('\n')}

## 📚 Content Suggestions

### New Pages (${results.contentSuggestions.newPages.length})
${results.contentSuggestions.newPages.map(suggestion => `- **${suggestion.name}** (${suggestion.priority}): ${suggestion.reason}`).join('\n')}

### New Components (${results.contentSuggestions.newComponents.length})
${results.contentSuggestions.newComponents.map(suggestion => `- **${suggestion.name}** (${suggestion.priority}): ${suggestion.reason}`).join('\n')}

### New Documentation (${results.contentSuggestions.newDocumentation.length})
${results.contentSuggestions.newDocumentation.map(suggestion => `- **${suggestion.name}** (${suggestion.priority}): ${suggestion.reason}`).join('\n')}

### New Automation (${results.contentSuggestions.newAutomation.length})
${results.contentSuggestions.newAutomation.map(suggestion => `- **${suggestion.name}** (${suggestion.priority}): ${suggestion.reason}`).join('\n')}

## ⚡ GitHub Actions Suggestions

### New Workflows (${results.githubActionsSuggestions.newWorkflows.length})
${results.githubActionsSuggestions.newWorkflows.map(workflow => `- **${workflow.name}** (${workflow.filename}): ${workflow.purpose}`).join('\n')}

### Workflow Improvements (${results.githubActionsSuggestions.workflowImprovements.length})
${results.githubActionsSuggestions.workflowImprovements.map(improvement => `- **${improvement.workflow}**: ${improvement.suggestion}`).join('\n')}

### Agent Factories (${results.githubActionsSuggestions.agentFactories.length})
${results.githubActionsSuggestions.agentFactories.map(factory => `- **${factory.name}**: ${factory.purpose}`).join('\n')}

## 🎯 Next Steps

1. **Review Content Gaps**: Prioritize and address missing content based on priority levels
2. **Implement Agent Factories**: Start with high-priority agent factories for content and automation
3. **Create New Workflows**: Implement suggested GitHub Actions workflows
4. **Improve Existing Workflows**: Apply suggested improvements to current workflows
5. **Monitor and Iterate**: Use the generated agents to continuously improve the system

## 📈 Metrics

- **Analysis Duration**: ${new Date() - new Date(results.timestamp)}ms
- **Files Analyzed**: ${results.appStructure.files.total}
- **Suggestions Generated**: ${results.gapAnalysis.missingPages.length + results.gapAnalysis.missingComponents.length + results.gapAnalysis.missingDocumentation.length + results.gapAnalysis.missingAutomation.length}
- **Agents Suggested**: ${results.agentSuggestions.contentAgents.length + results.agentSuggestions.automationAgents.length + results.agentSuggestions.monitoringAgents.length + results.agentSuggestions.deploymentAgents.length}
`;
  }
}

// CLI interface
if (require.main === module) {
  const crawler = new AppContentCrawler();
  
  crawler.run()
    .then(results => {
      console.log('\n🎉 Crawler completed successfully!');
      console.log(`📊 Analyzed ${results.appStructure.files.total} files`);
      console.log(`🚨 Found ${results.gapAnalysis.missingPages.length + results.gapAnalysis.missingComponents.length + results.gapAnalysis.missingDocumentation.length + results.gapAnalysis.missingAutomation.length} content gaps`);
      console.log(`🤖 Suggested ${results.agentSuggestions.contentAgents.length + results.agentSuggestions.automationAgents.length + results.agentSuggestions.monitoringAgents.length + results.agentSuggestions.deploymentAgents.length} agents`);
      console.log(`⚡ Suggested ${results.githubActionsSuggestions.newWorkflows.length} new workflows`);
    })
    .catch(error => {
      console.error('❌ Crawler failed:', error);
      process.exit(1);
    });
}

module.exports = AppContentCrawler;
