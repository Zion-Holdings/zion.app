#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * GitHub Actions Workflow Auto-Healer
 * Automatically detects and fixes workflow issues
 */

const WORKFLOWS_DIR = '.github/workflows';
const LOGS_DIR = 'automation/logs';

class WorkflowAutoHealer {
  constructor() {
    this.fixesApplied = [];
    this.errors = [];
    this.backups = [];
  }

  async healAllWorkflows() {
    console.log('🔧 Starting comprehensive workflow healing...\n');
    
    if (!fs.existsSync(WORKFLOWS_DIR)) {
      throw new Error(`Workflows directory not found: ${WORKFLOWS_DIR}`);
    }

    const workflowFiles = this.getWorkflowFiles();
    console.log(`📁 Found ${workflowFiles.length} workflow files\n`);

    for (const filePath of workflowFiles) {
      try {
        await this.healWorkflow(filePath);
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

  async healWorkflow(filePath) {
    const fileName = path.basename(filePath);
    console.log(`🔧 Healing ${fileName}...`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let fixesApplied = [];

    // Fix 1: Malformed jobs section
    if (this.hasMalformedJobsSection(content)) {
      fixedContent = this.fixJobsSection(fixedContent);
      fixesApplied.push('Fixed malformed jobs section');
    }

    // Fix 2: Missing runs-on field
    if (this.hasMissingRunsOn(content)) {
      fixedContent = this.addRunsOnField(fixedContent);
      fixesApplied.push('Added missing runs-on field');
    }

    // Fix 3: Malformed steps
    if (this.hasMalformedSteps(content)) {
      fixedContent = this.fixStepsStructure(fixedContent);
      fixesApplied.push('Fixed malformed steps structure');
    }

    // Fix 4: Missing permissions
    if (this.hasMissingPermissions(content)) {
      fixedContent = this.addPermissionsSection(fixedContent);
      fixesApplied.push('Added missing permissions section');
    }

    // Fix 5: Invalid cron expressions
    if (this.hasInvalidCron(content)) {
      fixedContent = this.fixCronExpressions(fixedContent);
      fixesApplied.push('Fixed invalid cron expressions');
    }

    // Fix 6: Unquoted expressions
    if (this.hasUnquotedExpressions(content)) {
      fixedContent = this.quoteExpressions(fixedContent);
      fixesApplied.push('Fixed unquoted expressions');
    }

    // Fix 7: Duplicate sections
    if (this.hasDuplicateSections(content)) {
      fixedContent = this.removeDuplicateSections(fixedContent);
      fixesApplied.push('Removed duplicate sections');
    }

    // Fix 8: Malformed YAML structure
    if (this.hasMalformedYaml(content)) {
      fixedContent = this.fixYamlStructure(fixedContent);
      fixesApplied.push('Fixed YAML structure');
    }

    if (fixedContent !== content) {
      // Create backup
      const backupPath = `${filePath}.healed-backup`;
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

  hasMalformedJobsSection(content) {
    return content.includes('jobs:\n\n\n') || 
           content.includes('jobs:\n  \n') ||
           (content.includes('jobs:') && !content.includes('runs-on:'));
  }

  fixJobsSection(content) {
    let fixed = content;
    
    // Remove extra newlines
    fixed = fixed.replace(/jobs:\n\n\n/g, 'jobs:\n');
    fixed = fixed.replace(/jobs:\n  \n/g, 'jobs:\n');
    
    // If jobs section is completely malformed, replace it
    if (fixed.includes('jobs:') && !fixed.includes('runs-on:')) {
      const jobsStart = fixed.indexOf('jobs:');
      const nextSection = fixed.indexOf('\n\n', jobsStart);
      
      if (nextSection !== -1) {
        const beforeJobs = fixed.substring(0, jobsStart);
        const afterJobs = fixed.substring(nextSection);
        
        const templateJobs = `jobs:
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
`;
        
        fixed = beforeJobs + templateJobs + afterJobs;
      }
    }
    
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
    
    // Add missing steps section
    if (fixed.includes('name:') && !fixed.includes('steps:')) {
      const nameMatch = fixed.match(/name:\s*(.+)/);
      if (nameMatch) {
        const stepName = nameMatch[1];
        const stepsSection = `steps:
      - name: ${stepName}
        run: echo "Step completed"
`;
        fixed = fixed.replace(/name:\s*.+/, stepsSection);
      }
    }
    
    return fixed;
  }

  hasMissingPermissions(content) {
    return !content.includes('permissions:') && 
           (content.includes('contents: write') || content.includes('contents:read'));
  }

  addPermissionsSection(content) {
    if (!content.includes('permissions:')) {
      const permissionsSection = `permissions:
  contents: write
  actions: read

`;
      return content.replace(/concurrency:\n/, `concurrency:\n${permissionsSection}`);
    }
    return content;
  }

  hasInvalidCron(content) {
    return content.includes("cron: '*/30'") || 
           content.includes("cron: '*/5'") ||
           content.includes("cron: '*/60'");
  }

  fixCronExpressions(content) {
    let fixed = content;
    fixed = fixed.replace(/cron:\s*'\*\/30'/g, "cron: '0 */1 * * *'");
    fixed = fixed.replace(/cron:\s*'\*\/5'/g, "cron: '*/5 * * * *'");
    fixed = fixed.replace(/cron:\s*'\*\/60'/g, "cron: '0 */1 * * *'");
    return fixed;
  }

  hasUnquotedExpressions(content) {
    return /group:\s*[^"']*\${{[^}]+}}[^"']*/.test(content);
  }

  quoteExpressions(content) {
    return content.replace(/group:\s*([^"']*\${{[^}]+}}[^"']*)/g, 'group: "$1"');
  }

  hasDuplicateSections(content) {
    return (content.match(/contents: write/g) || []).length > 1 ||
           (content.match(/actions: read/g) || []).length > 1;
  }

  removeDuplicateSections(content) {
    let fixed = content;
    
    // Remove duplicate permissions
    const permissionsMatch = fixed.match(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/);
    if (permissionsMatch) {
      const singlePermissions = `permissions:
  contents: write
  actions: read

`;
      fixed = fixed.replace(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/, singlePermissions);
    }
    
    return fixed;
  }

  hasMalformedYaml(content) {
    return content.includes('\n\n\n') || 
           content.includes('  \n') ||
           content.includes(':\n\n\n');
  }

  fixYamlStructure(content) {
    let fixed = content;
    
    // Remove excessive newlines
    fixed = fixed.replace(/\n\n\n/g, '\n\n');
    fixed = fixed.replace(/:\n\n\n/g, ':\n\n');
    
    return fixed;
  }

  generateReport() {
    console.log('\n📊 Workflow Healing Report');
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
    
    const reportPath = path.join(LOGS_DIR, 'workflow-healing-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
  }

  // Validate workflow syntax
  async validateWorkflow(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic YAML validation
      if (content.includes('jobs:') && !content.includes('runs-on:')) {
        return { valid: false, error: 'Missing runs-on field in jobs' };
      }
      
      if (content.includes('steps:') && !content.includes('- name:')) {
        return { valid: false, error: 'Missing step definitions' };
      }
      
      return { valid: true };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  // Create a workflow health dashboard
  async createHealthDashboard() {
    const workflowFiles = this.getWorkflowFiles();
    const healthStatus = [];
    
    for (const filePath of workflowFiles) {
      const fileName = path.basename(filePath);
      const validation = await this.validateWorkflow(filePath);
      
      healthStatus.push({
        file: fileName,
        valid: validation.valid,
        error: validation.error || null,
        lastModified: fs.statSync(filePath).mtime
      });
    }
    
    const dashboard = {
      timestamp: new Date().toISOString(),
      totalWorkflows: workflowFiles.length,
      healthyWorkflows: healthStatus.filter(w => w.valid).length,
      brokenWorkflows: healthStatus.filter(w => !w.valid).length,
      workflows: healthStatus
    };
    
    const dashboardPath = path.join(LOGS_DIR, 'workflow-health-dashboard.json');
    fs.mkdirSync(path.dirname(dashboardPath), { recursive: true });
    fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));
    
    return dashboard;
  }
}

// CLI interface
async function main() {
  const healer = new WorkflowAutoHealer();
  
  try {
    await healer.healAllWorkflows();
    
    // Create health dashboard
    console.log('\n📊 Creating workflow health dashboard...');
    const dashboard = await healer.createHealthDashboard();
    
    console.log(`\n🎯 Workflow Health Summary:`);
    console.log(`   Total: ${dashboard.totalWorkflows}`);
    console.log(`   Healthy: ${dashboard.healthyWorkflows}`);
    console.log(`   Broken: ${dashboard.brokenWorkflows}`);
    
    if (dashboard.brokenWorkflows > 0) {
      console.log('\n🔴 Broken workflows:');
      dashboard.workflows
        .filter(w => !w.valid)
        .forEach(w => console.log(`   • ${w.file}: ${w.error}`));
    }
    
  } catch (error) {
    console.error('❌ Error during workflow healing:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WorkflowAutoHealer;