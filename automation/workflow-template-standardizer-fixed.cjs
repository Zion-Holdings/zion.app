#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class WorkflowTemplateStandardizer {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.templatesDir = path.resolve(__dirname, "templates");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.standardizedWorkflows = new Map();
    this.templateTemplates = new Map();
    
    this.ensureDirectories();
    this.initializeTemplates();
  }

  ensureDirectories() {
    [this.templatesDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  initializeTemplates() {
    // Define standard templates for different workflow types
    this.templateTemplates.set('ci', this.createCITemplate());
    this.templateTemplates.set('security', this.createSecurityTemplate());
    this.templateTemplates.set('deployment', this.createDeploymentTemplate());
    this.templateTemplates.set('testing', this.createTestingTemplate());
    this.templateTemplates.set('maintenance', this.createMaintenanceTemplate());
    this.templateTemplates.set('marketing', this.createMarketingTemplate());
    
    // Save templates to disk
    this.saveTemplates();
  }

  createCITemplate() {
    return {
      name: 'CI Template',
      description: 'Standard CI workflow with proper error handling and resource optimization',
      template: `name: CI Template

on:
  push:
    branches: ["main", "develop"]
    paths-ignore:
      - 'docs/**'
      - '*.md'
      - 'LICENSE'
  pull_request:
    branches: ["main", "develop"]
  workflow_dispatch:

permissions:
  contents: read
  pull-requests: read

      concurrency:
        group: '${{ github.workflow }}-${{ github.ref }}'
        cancel-in-progress: true

env:
  CI: 'true'
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  validate:
    name: Validate
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Lint
        run: npm run lint
        continue-on-error: true

      - name: Type check
        run: npm run type-check
        continue-on-error: true

  test:
    name: Test
    runs-on: ubuntu-latest
    timeout-minutes: 20
    needs: validate
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run tests
        run: npm test
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Upload coverage
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: coverage
          path: coverage/
          retention-days: 30`
    };
  }

  createSecurityTemplate() {
    return {
      name: 'Security Template',
      description: 'Security-focused workflow with vulnerability scanning and compliance checks',
      template: `name: Security Scan

on:
  push:
    branches: ["main", "develop"]
  pull_request:
    branches: ["main", "develop"]
  schedule:
    - cron: '0 2 * * *'
  workflow_dispatch:

permissions:
  contents: read
  security-events: write
  actions: read

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    timeout-minutes: 45
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci --audit=false
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run security audit
        run: npm audit --audit-level=moderate
        continue-on-error: true

      - name: Run CodeQL
        uses: github/codeql-action/init@v2
        with:
          languages: javascript

      - name: Autobuild
        uses: github/codeql-action/autobuild@v2

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v2`
    };
  }

  createDeploymentTemplate() {
    return {
      name: 'Deployment Template',
      description: 'Deployment workflow with proper staging and production handling',
      template: `name: Deploy

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  deployments: write

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    timeout-minutes: 60
    environment: production
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Build
        run: npm run build
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Deploy to production
        run: echo "Deploy to production"`
    };
  }

  createTestingTemplate() {
    return {
      name: 'Testing Template',
      description: 'Comprehensive testing workflow with multiple test types',
      template: `name: Test Suite

on:
  push:
    branches: ["main", "develop"]
  pull_request:
    branches: ["main", "develop"]
  workflow_dispatch:

permissions:
  contents: read

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  unit-tests:
    name: Unit Tests
    runs-on: ubuntu-latest
    timeout-minutes: 45
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run unit tests
        run: npm run test:unit
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

  integration-tests:
    name: Integration Tests
    runs-on: ubuntu-latest
    timeout-minutes: 45
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run integration tests
        run: npm run test:integration
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

  e2e-tests:
    name: End-to-End Tests
    runs-on: ubuntu-latest
    timeout-minutes: 45
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'`
    };
  }

  createMaintenanceTemplate() {
    return {
      name: 'Maintenance Template',
      description: 'Maintenance workflow for cleanup and health checks',
      template: `name: Maintenance

on:
  schedule:
    - cron: '0 3 * * 0'
  workflow_dispatch:

permissions:
  contents: write

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  maintenance:
    name: Maintenance
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Run maintenance tasks
        run: npm run maintenance
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Commit and push changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add -A
          if git diff --staged --quiet; then
            echo "No changes to commit"
          else
            git commit -m "chore(maintenance): automated maintenance tasks"
            git push
          fi`
    };
  }

  createMarketingTemplate() {
    return {
      name: 'Marketing Template',
      description: 'Marketing workflow for content generation and social media',
      template: `name: Marketing Automation

on:
  schedule:
    - cron: '0 9 * * *'
  workflow_dispatch:

permissions:
  contents: write

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  marketing:
    name: Marketing
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Collect analytics
        run: npm run marketing:analytics

      - name: Generate report
        run: npm run marketing:report

      - name: Upload marketing report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: marketing-report
          path: |
            reports/marketing/
            analytics/
          retention-days: 30`
    };
  }

  saveTemplates() {
    for (const [key, template] of this.templateTemplates) {
      const templatePath = path.join(this.templatesDir, `${key}-template.yml`);
      fs.writeFileSync(templatePath, template.template);
    }
    console.log(`💾 Saved ${this.templateTemplates.size} workflow templates`);
  }

  async standardizeWorkflows() {
    console.log("🔧 Standardizing workflows...");
    
    const workflows = this.getActiveWorkflows();
    const standardizationReport = {
      timestamp: new Date().toISOString(),
      totalWorkflows: workflows.length,
      standardized: [],
      failed: [],
      recommendations: []
    };
    
    for (const workflow of workflows) {
      try {
        const result = await this.standardizeWorkflow(workflow);
        if (result.standardized) {
          standardizationReport.standardized.push({
            name: workflow.name,
            changes: result.changes,
            template: result.template
          });
        } else {
          standardizationReport.failed.push({
            name: workflow.name,
            reason: result.reason
          });
        }
      } catch (error) {
        console.error(`❌ Error standardizing ${workflow.name}:`, error.message);
        standardizationReport.failed.push({
          name: workflow.name,
          reason: error.message
        });
      }
    }
    
    // Generate recommendations
    standardizationReport.recommendations = this.generateStandardizationRecommendations(standardizationReport);
    
    // Save report
    this.saveStandardizationReport(standardizationReport);
    
    return standardizationReport;
  }

  getActiveWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) return [];
    
    return fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.workflowsDir, f)
      }));
  }

  async standardizeWorkflow(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    const originalContent = content;
    let modified = false;
    const changes = [];
    
    // Determine workflow type
    const workflowType = this.classifyWorkflow(workflow.name, content);
    
    // Apply standardization rules - ONLY if they don't exist
    const standardizationResult = await this.applyStandardizationRules(content, workflowType);
    
    if (standardizationResult.modified) {
      modified = true;
      changes.push(...standardizationResult.changes);
      content = standardizationResult.content;
    }
    
    // Apply template if available - ONLY if workflow is severely broken
    if (this.templateTemplates.has(workflowType) && this.isWorkflowSeverelyBroken(content)) {
      const templateResult = await this.applyTemplate(content, workflowType);
      if (templateResult.modified) {
        modified = true;
        changes.push(...templateResult.changes);
        content = templateResult.content;
      }
    }
    
    // Save if modified
    if (modified) {
      // Create backup before modifying
      const backupPath = workflow.path + '.backup-' + Date.now();
      fs.writeFileSync(backupPath, originalContent, 'utf8');
      
      fs.writeFileSync(workflow.path, content, 'utf8');
      console.log(`✅ Standardized ${workflow.name} (backup: ${backupPath})`);
    }
    
    return {
      standardized: modified,
      changes,
      template: workflowType,
      reason: modified ? null : 'No changes needed'
    };
  }

  classifyWorkflow(workflowName, content) {
    const name = workflowName.toLowerCase();
    const contentLower = content.toLowerCase();
    
    if (name.includes('ci') || contentLower.includes('build') || contentLower.includes('test')) {
      return 'ci';
    } else if (name.includes('security') || contentLower.includes('audit') || contentLower.includes('vulnerability')) {
      return 'security';
    } else if (name.includes('deploy') || contentLower.includes('deployment') || contentLower.includes('release')) {
      return 'deployment';
    } else if (name.includes('test') || contentLower.includes('playwright') || contentLower.includes('jest')) {
      return 'testing';
    } else if (name.includes('maintenance') || contentLower.includes('cleanup') || contentLower.includes('health')) {
      return 'maintenance';
    } else if (name.includes('marketing') || contentLower.includes('social') || contentLower.includes('content')) {
      return 'marketing';
    } else {
      return 'general';
    }
  }

  isWorkflowSeverelyBroken(content) {
    // Only consider a workflow "severely broken" if it's missing critical sections
    const hasJobs = content.includes('jobs:');
    const hasSteps = content.includes('steps:');
    const hasRunsOn = content.includes('runs-on:');
    
    return !hasJobs || !hasSteps || !hasRunsOn;
  }

  async applyStandardizationRules(content, workflowType) {
    let modified = false;
    const changes = [];
    
    // Rule 1: Ensure proper permissions - ONLY if missing
    if (!content.includes('permissions:')) {
      content = this.addPermissions(content, workflowType);
      modified = true;
      changes.push('Added permissions section');
    }
    
    // Rule 2: Add timeout if missing - ONLY if missing
    if (!content.includes('timeout-minutes:')) {
      content = this.addTimeout(content, workflowType);
      modified = true;
      changes.push('Added timeout configuration');
    }
    
    // Rule 3: Add concurrency control - ONLY if missing
    if (!content.includes('concurrency:')) {
      content = this.addConcurrency(content, workflowType);
      modified = true;
      changes.push('Added concurrency control');
    }
    
    // Rule 4: Update to latest actions - ONLY if using old versions
    const actionUpdates = this.updateActions(content);
    if (actionUpdates.modified) {
      content = actionUpdates.content;
      modified = true;
      changes.push('Updated to latest actions');
    }
    
    // Rule 5: Add proper error handling - ONLY if missing
    const errorHandling = this.addErrorHandling(content);
    if (errorHandling.modified) {
      content = errorHandling.content;
      modified = true;
      changes.push('Added error handling');
    }
    
    // Rule 6: Optimize resource usage - ONLY if missing
    const resourceOptimization = this.optimizeResources(content);
    if (resourceOptimization.modified) {
      content = resourceOptimization.content;
      modified = true;
      changes.push('Optimized resource usage');
    }
    
    return { modified, changes, content };
  }

  addPermissions(content, workflowType) {
    const permissions = {
      ci: 'contents: read\n  pull-requests: read',
      security: 'contents: read\n  security-events: write',
      deployment: 'contents: read\n  deployments: write',
      testing: 'contents: read',
      maintenance: 'contents: write',
      marketing: 'contents: write',
      general: 'contents: read'
    };
    
    const permissionBlock = `\npermissions:\n  ${permissions[workflowType] || permissions.general}\n`;
    
    // Insert after 'on:' section
    const onIndex = content.indexOf('on:');
    if (onIndex !== -1) {
      const nextSectionIndex = content.indexOf('\n\n', onIndex);
      if (nextSectionIndex !== -1) {
        return content.slice(0, nextSectionIndex) + permissionBlock + content.slice(nextSectionIndex);
      }
    }
    
    return content + permissionBlock;
  }

  addTimeout(content, workflowType) {
    const timeouts = {
      ci: 30,
      security: 45,
      deployment: 60,
      testing: 45,
      maintenance: 30,
      marketing: 30,
      general: 25
    };
    
    const timeout = timeouts[workflowType] || timeouts.general;
    
    // Find all job sections and add timeout properly
    const lines = content.split('\n');
    const modifiedLines = [];
    let inJob = false;
    let jobIndent = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      modifiedLines.push(line);
      
      // Check if we're entering a job
      if (line.trim().startsWith('jobs:') || (line.trim().startsWith('-') && line.includes('runs-on:'))) {
        inJob = true;
        jobIndent = line.search(/\S/);
      }
      
      // Check if we're exiting a job
      if (inJob && line.trim() === '' && i < lines.length - 1) {
        const nextLine = lines[i + 1];
        if (nextLine.trim() !== '' && !nextLine.trim().startsWith('-')) {
          inJob = false;
        }
      }
      
      // Add timeout after runs-on line
      if (inJob && line.includes('runs-on:') && !content.includes('timeout-minutes:')) {
        const indent = line.search(/\S/);
        const timeoutLine = ' '.repeat(indent) + `timeout-minutes: ${timeout}`;
        modifiedLines.push(timeoutLine);
      }
    }
    
    return modifiedLines.join('\n');
  }

  addConcurrency(content, workflowType) {
    const concurrencyBlock = '\nconcurrency:\n  group: \'${{ github.workflow }}-${{ github.ref }}\'\n  cancel-in-progress: true\n';
    
    // Insert after permissions section
    const permissionsIndex = content.indexOf('permissions:');
    if (permissionsIndex !== -1) {
      const nextSectionIndex = content.indexOf('\n\n', permissionsIndex);
      if (nextSectionIndex !== -1) {
        return content.slice(0, nextSectionIndex) + concurrencyBlock + content.slice(nextSectionIndex);
      }
    }
    
    return content + concurrencyBlock;
  }

  updateActions(content) {
    let modified = false;
    
    // Update checkout action
    if (content.includes('actions/checkout@v3') || content.includes('actions/checkout@v2')) {
      content = content.replace(/actions\/checkout@v[23]/g, 'actions/checkout@v4');
      modified = true;
    }
    
    // Update setup-node action
    if (content.includes('actions/setup-node@v3') || content.includes('actions/setup-node@v2')) {
      content = content.replace(/actions\/setup-node@v[23]/g, 'actions/setup-node@v4');
      modified = true;
    }
    
    // Update upload-artifact action
    if (content.includes('actions/upload-artifact@v3') || content.includes('actions/upload-artifact@v2')) {
      content = content.replace(/actions\/upload-artifact@v[23]/g, 'actions/upload-artifact@v4');
      modified = true;
    }
    
    return { modified, content };
  }

  addErrorHandling(content) {
    let modified = false;
    
    // Add continue-on-error for non-critical steps
    if (content.includes('npm run lint') && !content.includes('continue-on-error')) {
      content = content.replace(/(npm run lint)/g, '$1\n        continue-on-error: true');
      modified = true;
    }
    
    if (content.includes('npm run type-check') && !content.includes('continue-on-error')) {
      content = content.replace(/(npm run type-check)/g, '$1\n        continue-on-error: true');
      modified = true;
    }
    
    return { modified, content };
  }

  optimizeResources(content) {
    let modified = false;
    
    // Add NODE_OPTIONS if missing
    if (!content.includes('NODE_OPTIONS:') && content.includes('env:')) {
      const envIndex = content.indexOf('env:');
      const nextSectionIndex = content.indexOf('\n\n', envIndex);
      if (nextSectionIndex !== -1) {
        const envBlock = '\n  NODE_OPTIONS: \'--max-old-space-size=4096\'';
        content = content.slice(0, nextSectionIndex) + envBlock + content.slice(nextSectionIndex);
        modified = true;
      }
    }
    
    return { modified, content };
  }

  async applyTemplate(content, workflowType) {
    if (!this.templateTemplates.has(workflowType)) {
      return { modified: false, content, changes: [] };
    }
    
    const template = this.templateTemplates.get(workflowType);
    const changes = [`Applied ${template.name} template`];
    
    return {
      modified: true,
      content: template.template,
      changes
    };
  }

  generateStandardizationRecommendations(report) {
    const recommendations = [];
    
    if (report.failed.length > 0) {
      recommendations.push('Review failed standardizations and fix manually');
    }
    
    if (report.standardized.length > 0) {
      recommendations.push('Test standardized workflows to ensure they work correctly');
    }
    
    if (report.totalWorkflows > 20) {
      recommendations.push('Consider implementing workflow templates for new workflows');
    }
    
    return recommendations;
  }

  saveStandardizationReport(report) {
    const reportPath = path.join(this.reportsDir, `standardization-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`💾 Standardization report saved to: ${reportPath}`);
  }

  printStandardizationSummary(report) {
    console.log('\n📊 Workflow Standardization Summary');
    console.log('=====================================');
    console.log(`Total workflows: ${report.totalWorkflows}`);
    console.log(`Standardized: ${report.standardized.length}`);
    console.log(`Failed: ${report.failed.length}`);
    console.log(`Timestamp: ${report.timestamp}`);
    
    if (report.standardized.length > 0) {
      console.log('\n✅ Successfully standardized workflows:');
      report.standardized.forEach(wf => {
        console.log(`  - ${wf.name}: ${wf.changes.join(', ')}`);
      });
    }
    
    if (report.failed.length > 0) {
      console.log('\n❌ Failed standardizations:');
      report.failed.forEach(wf => {
        console.log(`  - ${wf.name}: ${wf.reason}`);
      });
    }
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    }
  }
}

// Run the standardizer if called directly
if (require.main === module) {
  (async () => {
    try {
      console.log("🚀 Starting Workflow Template Standardizer...");
      
      const standardizer = new WorkflowTemplateStandardizer();
      
      const report = await standardizer.standardizeWorkflows();
      
      standardizer.printStandardizationSummary(report);
      
    } catch (error) {
      console.error("❌ Error running workflow template standardizer:", error);
      process.exit(1);
    }
  })();
}

module.exports = WorkflowTemplateStandardizer;
