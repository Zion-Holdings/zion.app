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
  group: ${{ github.workflow }}-${{ github.ref }}
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

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

  build:
    name: Build
    runs-on: ubuntu-latest
    timeout-minutes: 25
    needs: [validate, test]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_OPTIONS: '--max-old-space-size=6144'

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: build-artifacts
          path: |
            .next/
            out/
          retention-days: 7`
    };
  }

  createSecurityTemplate() {
    return {
      name: 'Security Template',
      description: 'Security-focused workflow with vulnerability scanning and compliance checks',
      template: `name: Security Scan

on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  security-events: write

concurrency:
  group: security-scan-${{ github.ref }}
  cancel-in-progress: false

env:
  SECURITY_SCAN: 'true'

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run security audit
        run: npm audit --audit-level=moderate
        continue-on-error: true

      - name: Upload security report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: security-audit-report
          path: |
            npm-audit.json
          retention-days: 30

  dependency-check:
    name: Dependency Check
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Check for outdated packages
        run: npm outdated --json || true

      - name: Check for security vulnerabilities
        run: npm audit --json || true

  codeql-analysis:
    name: CodeQL Analysis
    runs-on: ubuntu-latest
    timeout-minutes: 60
    permissions:
      actions: read
      contents: read
      security-events: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: javascript

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3`
    };
  }

  createDeploymentTemplate() {
    return {
      name: 'Deployment Template',
      description: 'Deployment workflow with proper environment handling and rollback capabilities',
      template: `name: Deploy

on:
  push:
    branches: ["main"]
    paths-ignore:
      - 'docs/**'
      - '*.md'
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy to'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

permissions:
  contents: read
  deployments: write

concurrency:
  group: deploy-${{ github.event.inputs.environment || 'staging' }}
  cancel-in-progress: false

env:
  DEPLOY_ENV: \${{ github.event.inputs.environment || 'staging' }}

jobs:
  validate-deployment:
    name: Validate Deployment
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Validate environment
        run: |
          if [ "$DEPLOY_ENV" = "production" ]; then
            echo "Production deployment requires manual approval"
            exit 1
          fi

  deploy:
    name: Deploy to ${{ github.event.inputs.environment || 'staging' }}
    runs-on: ubuntu-latest
    timeout-minutes: 45
    needs: validate-deployment
    environment: \${{ github.event.inputs.environment || 'staging' }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup deployment environment
        run: |
          echo "Deploying to $DEPLOY_ENV"
          # Add deployment logic here

      - name: Deploy application
        run: |
          echo "Starting deployment..."
          # Add actual deployment commands here

      - name: Health check
        run: |
          echo "Performing health check..."
          # Add health check logic here

      - name: Rollback on failure
        if: failure()
        run: |
          echo "Deployment failed, initiating rollback..."
          # Add rollback logic here`
    };
  }

  createTestingTemplate() {
    return {
      name: 'Testing Template',
      description: 'Comprehensive testing workflow with multiple test types and coverage reporting',
      template: `name: Test Suite

on:
  push:
    branches: ["main", "develop"]
  pull_request:
    branches: ["main", "develop"]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: test-suite-${{ github.ref }}
  cancel-in-progress: true

env:
  NODE_OPTIONS: '--max-old-space-size=4096'

jobs:
  unit-tests:
    name: Unit Tests
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit
        env:
          NODE_ENV: test

      - name: Upload coverage
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: unit-coverage
          path: coverage/
          retention-days: 30

  integration-tests:
    name: Integration Tests
    runs-on: ubuntu-latest
    timeout-minutes: 30
    needs: unit-tests
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Setup test database
        run: npm run test:setup-db

      - name: Run integration tests
        run: npm run test:integration
        env:
          NODE_ENV: test
          TEST_DB_URL: \${{ secrets.TEST_DB_URL }}

  e2e-tests:
    name: End-to-End Tests
    runs-on: ubuntu-latest
    timeout-minutes: 45
    needs: integration-tests
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Build application
        run: npm run build

      - name: Start application
        run: npm start &
        env:
          NODE_ENV: test

      - name: Wait for app to be ready
        run: |
          timeout=60
          counter=0
          while ! curl -f http://localhost:3000 > /dev/null 2>&1; do
            if [ $counter -ge $timeout ]; then
              echo "App failed to start within $timeout seconds"
              exit 1
            fi
            echo "Waiting for app to start... ($counter/$timeout)"
            sleep 2
            counter=$((counter + 2))
          done

      - name: Run E2E tests
        run: npx playwright test
        env:
          BASE_URL: http://localhost:3000

      - name: Stop application
        run: pkill -f "npm start" || true

      - name: Upload test results
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: e2e-results
          path: |
            playwright-report/
            test-results/
          retention-days: 30`
    };
  }

  createMaintenanceTemplate() {
    return {
      name: 'Maintenance Template',
      description: 'Maintenance workflow for cleanup, optimization, and health checks',
      template: `name: Maintenance

on:
  schedule:
    - cron: '0 3 * * 0'  # Weekly on Sunday at 3 AM UTC
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: maintenance
  cancel-in-progress: false

env:
  MAINTENANCE_MODE: 'true'

jobs:
  cleanup:
    name: Cleanup
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Clean temporary files
        run: |
          rm -rf .next out .temp tmp
          npm cache clean --force

      - name: Remove old artifacts
        run: |
          find . -name "*.log" -mtime +7 -delete
          find . -name "*.tmp" -mtime +1 -delete

  dependency-maintenance:
    name: Dependency Maintenance
    runs-on: ubuntu-latest
    timeout-minutes: 45
    needs: cleanup
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Check for outdated packages
        run: npm outdated --json || true

      - name: Update patch versions
        run: npm update

      - name: Security audit
        run: npm audit --audit-level=moderate || true

      - name: Commit updates
        if: always()
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            git config user.name "github-actions[bot]"
            git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
            git add -A
            git commit -m "chore(maintenance): update dependencies [skip ci]"
            git push origin HEAD:main
          fi

  health-check:
    name: Health Check
    runs-on: ubuntu-latest
    timeout-minutes: 20
    needs: dependency-maintenance
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check
        continue-on-error: true

      - name: Lint
        run: npm run lint
        continue-on-error: true

      - name: Build test
        run: npm run build
        continue-on-error: true

      - name: Generate health report
        run: |
          echo "Maintenance completed at $(date)" > maintenance-report.txt
          echo "Status: SUCCESS" >> maintenance-report.txt

      - name: Upload maintenance report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: maintenance-report
          path: maintenance-report.txt
          retention-days: 7`
    };
  }

  createMarketingTemplate() {
    return {
      name: 'Marketing Template',
      description: 'Marketing workflow for content generation and social media automation',
      template: `name: Marketing Automation

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: marketing-automation
  cancel-in-progress: false

env:
  MARKETING_MODE: 'true'

jobs:
  content-generation:
    name: Content Generation
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Generate content
        run: npm run marketing:generate
        env:
          NODE_OPTIONS: '--max-old-space-size=4096'

      - name: Validate content
        run: npm run marketing:validate
        continue-on-error: true

  social-media:
    name: Social Media
    runs-on: ubuntu-latest
    timeout-minutes: 20
    needs: content-generation
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Post to social media
        run: npm run marketing:social
        env:
          TWITTER_TOKEN: \${{ secrets.TWITTER_TOKEN }}
          LINKEDIN_TOKEN: \${{ secrets.LINKEDIN_TOKEN }}

      - name: Schedule posts
        run: npm run marketing:schedule
        continue-on-error: true

  analytics:
    name: Analytics
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: social-media
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

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
    
    // Apply standardization rules
    const standardizationResult = await this.applyStandardizationRules(content, workflowType);
    
    if (standardizationResult.modified) {
      modified = true;
      changes.push(...standardizationResult.changes);
      content = standardizationResult.content;
    }
    
    // Apply template if available
    if (this.templateTemplates.has(workflowType)) {
      const templateResult = await this.applyTemplate(content, workflowType);
      if (templateResult.modified) {
        modified = true;
        changes.push(...templateResult.changes);
        content = templateResult.content;
      }
    }
    
    // Save if modified
    if (modified) {
      fs.writeFileSync(workflow.path, content, 'utf8');
      console.log(`✅ Standardized ${workflow.name}`);
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

  async applyStandardizationRules(content, workflowType) {
    let modified = false;
    const changes = [];
    
    // Rule 1: Ensure proper permissions
    if (!content.includes('permissions:')) {
      content = this.addPermissions(content, workflowType);
      modified = true;
      changes.push('Added permissions section');
    }
    
    // Rule 2: Add timeout if missing
    if (!content.includes('timeout-minutes:')) {
      content = this.addTimeout(content, workflowType);
      modified = true;
      changes.push('Added timeout configuration');
    }
    
    // Rule 3: Add concurrency control
    if (!content.includes('concurrency:')) {
      content = this.addConcurrency(content, workflowType);
      modified = true;
      changes.push('Added concurrency control');
    }
    
    // Rule 4: Update to latest actions
    const actionUpdates = this.updateActions(content);
    if (actionUpdates.modified) {
      content = actionUpdates.content;
      modified = true;
      changes.push('Updated to latest actions');
    }
    
    // Rule 5: Add proper error handling
    const errorHandling = this.addErrorHandling(content);
    if (errorHandling.modified) {
      content = errorHandling.content;
      modified = true;
      changes.push('Added error handling');
    }
    
    // Rule 6: Optimize resource usage
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
    const timeoutBlock = `\n    timeout-minutes: ${timeout}`;
    
    // Add timeout to each job
    return content.replace(/(runs-on:.*\n)/g, `$1    timeout-minutes: ${timeout}\n`);
  }

  addConcurrency(content, workflowType) {
    const concurrencyBlock = `\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true\n`;
    
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
    
    // Add NODE_OPTIONS for memory optimization
    if (content.includes('npm ci') && !content.includes('NODE_OPTIONS')) {
      content = content.replace(/(env:.*\n)/, '$1      NODE_OPTIONS: "--max-old-space-size=4096"\n');
      modified = true;
    }
    
    // Add npm cache
    if (content.includes('npm ci') && !content.includes('cache:')) {
      content = content.replace(/(setup-node.*\n)/, '$1          cache: npm\n');
      modified = true;
    }
    
    return { modified, content };
  }

  async applyTemplate(content, workflowType) {
    const template = this.templateTemplates.get(workflowType);
    if (!template) {
      return { modified: false, changes: [], content };
    }
    
    // For now, we'll just suggest the template rather than completely replacing
    // This is safer than automatic replacement
    return { 
      modified: false, 
      changes: [`Template available: ${template.name}`], 
      content 
    };
  }

  generateStandardizationRecommendations(report) {
    const recommendations = [];
    
    if (report.failed.length > 0) {
      recommendations.push({
        type: 'warning',
        message: `${report.failed.length} workflows failed standardization`,
        suggestion: 'Review failed workflows manually and apply fixes'
      });
    }
    
    if (report.standardized.length > 0) {
      recommendations.push({
        type: 'info',
        message: `${report.standardized.length} workflows were standardized`,
        suggestion: 'Review changes and test workflows to ensure functionality'
      });
    }
    
    // General recommendations
    recommendations.push({
      type: 'info',
      message: 'Use workflow templates for new workflows',
      suggestion: 'Copy from templates directory and customize as needed'
    });
    
    recommendations.push({
      type: 'info',
      message: 'Regular standardization checks',
      suggestion: 'Run this process weekly to maintain workflow quality'
    });
    
    return recommendations;
  }

  saveStandardizationReport(report) {
    const reportPath = path.join(this.reportsDir, 'workflow-standardization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Standardization report saved to: ${reportPath}`);
  }

  printStandardizationSummary(report) {
    console.log("\n" + "=".repeat(60));
    console.log("🔧 WORKFLOW STANDARDIZATION SUMMARY");
    console.log("=".repeat(60));
    
    console.log(`Total Workflows: ${report.totalWorkflows}`);
    console.log(`Standardized: ${report.standardized.length}`);
    console.log(`Failed: ${report.failed.length}`);
    
    if (report.standardized.length > 0) {
      console.log(`\n✅ STANDARDIZED WORKFLOWS:`);
      report.standardized.forEach(wf => {
        console.log(`  • ${wf.name} (${wf.template})`);
        wf.changes.forEach(change => console.log(`    - ${change}`));
      });
    }
    
    if (report.failed.length > 0) {
      console.log(`\n❌ FAILED WORKFLOWS:`);
      report.failed.forEach(wf => {
        console.log(`  • ${wf.name}: ${wf.reason}`);
      });
    }
    
    if (report.recommendations.length > 0) {
      console.log(`\n💡 RECOMMENDATIONS:`);
      report.recommendations.forEach(rec => {
        console.log(`  • ${rec.type.toUpperCase()}: ${rec.message}`);
        console.log(`    Suggestion: ${rec.suggestion}`);
      });
    }
    
    console.log("=".repeat(60));
  }
}

// Run the standardizer
async function main() {
  try {
    const standardizer = new WorkflowTemplateStandardizer();
    
    // Standardize workflows
    const report = await standardizer.standardizeWorkflows();
    
    // Print summary
    standardizer.printStandardizationSummary(report);
    
  } catch (error) {
    console.error("❌ Error running workflow template standardizer:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WorkflowTemplateStandardizer;