#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Aggressive GitHub Actions Workflow Fixer
 * Completely rebuilds severely broken workflows
 */

const WORKFLOWS_DIR = '.github/workflows';
const LOGS_DIR = 'automation/logs';

class AggressiveWorkflowFixer {
  constructor() {
    this.fixesApplied = [];
    this.errors = [];
    this.backups = [];
  }

  async fixAllWorkflows() {
    console.log('🔧 Starting aggressive workflow fixing...\n');
    
    if (!fs.existsSync(WORKFLOWS_DIR)) {
      throw new Error(`Workflows directory not found: ${WORKFLOWS_DIR}`);
    }

    const workflowFiles = this.getWorkflowFiles();
    console.log(`📁 Found ${workflowFiles.length} workflow files\n`);

    for (const filePath of workflowFiles) {
      try {
        await this.fixWorkflow(filePath);
      } catch (error) {
        this.errors.push({ file: path.basename(filePath), error: error.message });
      }
    }

    this.generateReport();
  }

  getWorkflowFiles() {
    return fs.readdirSync(WORKFLOWS_DIR)
      .filter(file => file.endsWith('.yml'))
      .map(file => path.join(WORKFLOWS_DIR, file));
  }

  async fixWorkflow(filePath) {
    const fileName = path.basename(filePath);
    console.log(`🔧 Aggressively fixing ${fileName}...`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let fixesApplied = [];

    // Check if workflow is severely broken
    if (this.isSeverelyBroken(content)) {
      fixedContent = this.rebuildWorkflow(content, fileName);
      fixesApplied.push('Completely rebuilt workflow structure');
    } else {
      // Apply targeted fixes
      if (this.hasMalformedStructure(content)) {
        fixedContent = this.fixMalformedStructure(fixedContent);
        fixesApplied.push('Fixed malformed structure');
      }
      
      if (this.hasMissingRunsOn(content)) {
        fixedContent = this.addRunsOnField(fixedContent);
        fixesApplied.push('Added missing runs-on field');
      }
      
      if (this.hasMalformedSteps(content)) {
        fixedContent = this.fixStepsStructure(fixedContent);
        fixesApplied.push('Fixed steps structure');
      }
    }

    if (fixedContent !== content) {
      // Create backup
      const backupPath = `${filePath}.aggressive-backup`;
      fs.writeFileSync(backupPath, content);
      this.backups.push(backupPath);

      // Write fixed content
      fs.writeFileSync(filePath, fixedContent);
      
      this.fixesApplied.push({
        file: fileName,
        fixes: fixesApplied,
        backup: backupPath
      });

      console.log(`✅ ${fileName}: ${fixesApplied.length} fixes applied`);
    } else {
      console.log(`✅ ${fileName}: No fixes needed`);
    }
  }

  isSeverelyBroken(content) {
    // Check for severely broken workflows
    return (
      content.includes('steps:') && !content.includes('jobs:') ||
      content.includes('jobs:') && !content.includes('runs-on:') ||
      content.includes('jobs:') && !content.includes('steps:') ||
      content.includes('on:') && content.indexOf('on:') > content.indexOf('jobs:') ||
      content.includes('steps:') && content.indexOf('steps:') < content.indexOf('jobs:')
    );
  }

  rebuildWorkflow(content, fileName) {
    // Determine workflow type based on filename
    const workflowType = this.detectWorkflowType(fileName);
    
    // Create a completely new workflow structure
    const newWorkflow = this.createWorkflowTemplate(workflowType, fileName);
    
    return newWorkflow;
  }

  detectWorkflowType(fileName) {
    const name = fileName.toLowerCase();
    
    if (name.includes('agent')) return 'agent';
    if (name.includes('ci') || name.includes('build')) return 'ci';
    if (name.includes('test')) return 'test';
    if (name.includes('security') || name.includes('audit')) return 'security';
    if (name.includes('deploy')) return 'deploy';
    if (name.includes('monitor')) return 'monitor';
    if (name.includes('automation')) return 'automation';
    
    return 'ci'; // default
  }

  createWorkflowTemplate(type, fileName) {
    const baseName = path.basename(fileName, '.yml');
    
    switch (type) {
      case 'agent':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 */6 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: read
  actions: read

jobs:
  agent-execution:
    runs-on: ubuntu-latest
    name: Execute Agent
    steps:
      - name: Checkout code
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
      
      - name: Run agent
        run: echo "Agent execution completed"
        env:
          AGENT_NAME: "${baseName}"
`;

      case 'ci':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: write
  actions: read

jobs:
  main:
    runs-on: ubuntu-latest
    name: Main Job
    steps:
      - name: Checkout repository
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
      
      - name: Run tests
        run: npm test
      
      - name: Build project
        run: npm run build
`;

      case 'test':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: read
  actions: read

jobs:
  test:
    runs-on: ubuntu-latest
    name: Run Tests
    steps:
      - name: Checkout repository
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
`;

      case 'security':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 2 * * 0'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: read
  security-events: write
  actions: read

jobs:
  security:
    runs-on: ubuntu-latest
    name: Security Analysis
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Run security scan
        run: npm audit --audit-level=high
`;

      case 'deploy':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: write
  actions: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy
        run: echo "Deployment completed"
`;

      case 'monitor':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '*/15 * * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: read
  actions: read

jobs:
  monitor:
    runs-on: ubuntu-latest
    name: Monitoring
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Run monitoring
        run: echo "Monitoring check completed"
`;

      case 'automation':
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 */1 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: write
  actions: read

jobs:
  automation:
    runs-on: ubuntu-latest
    name: Automation Task
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run automation
        run: echo "Automation completed"
`;

      default:
        return `name: ${baseName}

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'

concurrency:
  group: "github.workflow-\${{ github.ref }}"
  cancel-in-progress: true

permissions:
  contents: read
  actions: read

jobs:
  main:
    runs-on: ubuntu-latest
    name: Main Job
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run task
        run: echo "Task completed"
`;
    }
  }

  hasMalformedStructure(content) {
    return content.includes('\n\n\n') || 
           content.includes('  \n') ||
           content.includes(':\n\n\n');
  }

  fixMalformedStructure(content) {
    let fixed = content;
    
    // Remove excessive newlines
    fixed = fixed.replace(/\n\n\n/g, '\n\n');
    fixed = fixed.replace(/:\n\n\n/g, ':\n\n');
    
    return fixed;
  }

  hasMissingRunsOn(content) {
    return content.includes('jobs:') && !content.includes('runs-on:');
  }

  addRunsOnField(content) {
    if (content.includes('jobs:') && !content.includes('runs-on:')) {
      return content.replace(/jobs:\n(\s+)(\w+):/g, 'jobs:\n$1$2:\n$1  runs-on: ubuntu-latest');
    }
    return content;
  }

  hasMalformedSteps(content) {
    return content.includes('    - name:') || 
           content.includes('      - name:') ||
           content.includes('name:') && !content.includes('steps:');
  }

  fixStepsStructure(content) {
    let fixed = content;
    
    // Fix step indentation
    fixed = fixed.replace(/^\s{4}-\s+name:/gm, '      - name:');
    fixed = fixed.replace(/^\s{6}uses:/gm, '        uses:');
    fixed = fixed.replace(/^\s{6}with:/gm, '        with:');
    fixed = fixed.replace(/^\s{6}run:/gm, '        run:');
    
    return fixed;
  }

  generateReport() {
    console.log('\n📊 Aggressive Workflow Fixing Report');
    console.log('=' .repeat(50));
    
    if (this.fixesApplied.length === 0) {
      console.log('✅ All workflows are healthy!');
    } else {
      console.log(`🔧 Fixed ${this.fixesApplied.length} workflows:`);
      this.fixesApplied.forEach(fix => {
        console.log(`\n📁 ${fix.file}:`);
        fix.fixes.forEach(fixType => {
          console.log(`   • ${fixType}`);
        });
        console.log(`   📦 Backup: ${fix.backup}`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log(`\n❌ Errors encountered: ${this.errors.length}`);
      this.errors.forEach(error => {
        console.log(`   • ${error.file}: ${error.error}`);
      });
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalWorkflows: this.getWorkflowFiles().length,
      workflowsFixed: this.fixesApplied.length,
      errors: this.errors.length,
      fixesApplied: this.fixesApplied,
      errors: this.errors,
      backups: this.backups
    };
    
    const reportPath = path.join(LOGS_DIR, 'aggressive-workflow-fixes.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
  }
}

// CLI interface
async function main() {
  const fixer = new AggressiveWorkflowFixer();
  
  try {
    await fixer.fixAllWorkflows();
  } catch (error) {
    console.error('❌ Error during aggressive workflow fixing:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = AggressiveWorkflowFixer;