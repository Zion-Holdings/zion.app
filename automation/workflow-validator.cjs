#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * GitHub Actions Workflow Validator and Final Fixer
 * Validates workflow syntax and applies final fixes
 */

const WORKFLOWS_DIR = '.github/workflows';
const LOGS_DIR = 'automation/logs';

class WorkflowValidator {
  constructor() {
    this.validationResults = [];
    this.fixesApplied = [];
    this.errors = [];
  }

  async validateAllWorkflows() {
    console.log('🔍 Starting comprehensive workflow validation...\n');
    
    if (!fs.existsSync(WORKFLOWS_DIR)) {
      throw new Error(`Workflows directory not found: ${WORKFLOWS_DIR}`);
    }

    const workflowFiles = this.getWorkflowFiles();
    console.log(`📁 Found ${workflowFiles.length} workflow files\n`);

    for (const filePath of workflowFiles) {
      try {
        await this.validateAndFixWorkflow(filePath);
      } catch (error) {
        this.errors.push({ file: path.basename(filePath), error: error.message });
      }
    }

    this.generateValidationReport();
  }

  getWorkflowFiles() {
    return fs.readdirSync(WORKFLOWS_DIR)
      .filter(file => file.endsWith('.yml'))
      .map(file => path.join(WORKFLOWS_DIR, file));
  }

  async validateAndFixWorkflow(filePath) {
    const fileName = path.basename(filePath);
    console.log(`🔍 Validating ${fileName}...`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const validation = this.validateWorkflow(content);
    
    if (!validation.isValid) {
      console.log(`⚠️  ${fileName}: ${validation.issues.length} issues found`);
      
      // Apply fixes
      const fixedContent = this.applyFixes(content, validation.issues);
      
      if (fixedContent !== content) {
        // Create backup
        const backupPath = `${filePath}.validator-backup`;
        fs.writeFileSync(backupPath, content);
        
        // Write fixed content
        fs.writeFileSync(filePath, fixedContent);
        
        this.fixesApplied.push({
          file: fileName,
          issues: validation.issues,
          backup: backupPath
        });
        
        console.log(`✅ ${fileName}: Fixed ${validation.issues.length} issues`);
      }
    } else {
      console.log(`✅ ${fileName}: Valid`);
    }
    
    this.validationResults.push({
      file: fileName,
      isValid: validation.isValid,
      issues: validation.issues || []
    });
  }

  validateWorkflow(content) {
    const issues = [];
    
    // Check 1: Basic structure
    if (!content.includes('name:')) {
      issues.push('Missing workflow name');
    }
    
    if (!content.includes('on:')) {
      issues.push('Missing trigger section');
    }
    
    if (!content.includes('jobs:')) {
      issues.push('Missing jobs section');
    }
    
    // Check 2: Job structure
    if (content.includes('jobs:') && !content.includes('runs-on:')) {
      issues.push('Missing runs-on field in jobs');
    }
    
    // Check 3: Step structure
    if (content.includes('steps:') && !content.includes('- name:')) {
      issues.push('Missing step markers');
    }
    
    // Check 4: YAML syntax
    if (content.includes('  - name:') || content.includes('  - uses:') || content.includes('  - run:')) {
      issues.push('Incorrect step indentation');
    }
    
    // Check 5: Duplicate sections
    if ((content.match(/permissions:/g) || []).length > 1) {
      issues.push('Duplicate permissions sections');
    }
    
    if ((content.match(/concurrency:/g) || []).length > 1) {
      issues.push('Duplicate concurrency sections');
    }
    
    // Check 6: Malformed steps
    if (content.includes('name:') && !content.includes('- name:')) {
      issues.push('Missing step markers');
    }
    
    // Check 7: Orphaned content
    if (content.includes('        - name:') || content.includes('        - uses:') || content.includes('        - run:')) {
      issues.push('Orphaned step content');
    }
    
    return {
      isValid: issues.length === 0,
      issues
    };
  }

  applyFixes(content, issues) {
    let fixed = content;
    
    // Fix 1: Missing step markers
    if (issues.includes('Missing step markers')) {
      fixed = fixed.replace(/^(\s+)name:/gm, '$1- name:');
      fixed = fixed.replace(/^(\s+)uses:/gm, '$1- uses:');
      fixed = fixed.replace(/^(\s+)run:/gm, '$1- run:');
      fixed = fixed.replace(/^(\s+)with:/gm, '$1- with:');
    }
    
    // Fix 2: Incorrect step indentation
    if (issues.includes('Incorrect step indentation')) {
      fixed = fixed.replace(/^(\s{2})- name:/gm, '$1  - name:');
      fixed = fixed.replace(/^(\s{2})- uses:/gm, '$1  - uses:');
      fixed = fixed.replace(/^(\s{2})- run:/gm, '$1  - run:');
      fixed = fixed.replace(/^(\s{2})- with:/gm, '$1  - with:');
    }
    
    // Fix 3: Duplicate sections
    if (issues.includes('Duplicate permissions sections')) {
      fixed = this.removeDuplicatePermissions(fixed);
    }
    
    if (issues.includes('Duplicate concurrency sections')) {
      fixed = this.removeDuplicateConcurrency(fixed);
    }
    
    // Fix 4: Orphaned content
    if (issues.includes('Orphaned step content')) {
      fixed = this.removeOrphanedContent(fixed);
    }
    
    // Fix 5: Missing runs-on
    if (issues.includes('Missing runs-on field in jobs')) {
      fixed = this.addRunsOnField(fixed);
    }
    
    return fixed;
  }

  removeDuplicatePermissions(content) {
    const permissionsMatch = content.match(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/);
    if (permissionsMatch) {
      const singlePermissions = `permissions:
  contents: write
  actions: read

`;
      return content.replace(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/, singlePermissions);
    }
    return content;
  }

  removeDuplicateConcurrency(content) {
    if ((content.match(/concurrency:/g) || []).length > 1) {
      const firstConcurrency = content.indexOf('concurrency:');
      const secondConcurrency = content.indexOf('concurrency:', firstConcurrency + 1);
      if (secondConcurrency !== -1) {
        const endOfFirst = content.indexOf('\n\n', firstConcurrency);
        if (endOfFirst !== -1) {
          const beforeFirst = content.substring(0, firstConcurrency);
          const afterFirst = content.substring(endOfFirst);
          return beforeFirst + afterFirst;
        }
      }
    }
    return content;
  }

  removeOrphanedContent(content) {
    const lines = content.split('\n');
    const cleanedLines = [];
    let inSteps = false;
    let stepDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('steps:')) {
        inSteps = true;
        stepDepth = 0;
        cleanedLines.push(line);
      } else if (inSteps && line.trim().startsWith('-')) {
        stepDepth = 1;
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 1 && line.trim().startsWith('name:')) {
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 1 && line.trim().startsWith('uses:')) {
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 1 && line.trim().startsWith('run:')) {
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 1 && line.trim().startsWith('with:')) {
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 1 && line.trim() === '') {
        stepDepth = 0;
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 0 && line.trim().startsWith('-')) {
        stepDepth = 1;
        cleanedLines.push(line);
      } else if (inSteps && stepDepth === 0 && !line.trim().startsWith('-')) {
        // Skip orphaned content
        continue;
      } else {
        cleanedLines.push(line);
      }
    }
    
    return cleanedLines.join('\n');
  }

  addRunsOnField(content) {
    if (content.includes('jobs:') && !content.includes('runs-on:')) {
      return content.replace(/jobs:\n(\s+)(\w+):/g, 'jobs:\n$1$2:\n$1  runs-on: ubuntu-latest');
    }
    return content;
  }

  generateValidationReport() {
    console.log('\n📊 Workflow Validation Report');
    console.log('=' .repeat(50));
    
    const validWorkflows = this.validationResults.filter(r => r.isValid);
    const invalidWorkflows = this.validationResults.filter(r => !r.isValid);
    
    console.log(`✅ Valid workflows: ${validWorkflows.length}`);
    console.log(`⚠️  Invalid workflows: ${invalidWorkflows.length}`);
    
    if (invalidWorkflows.length > 0) {
      console.log('\n🔴 Invalid workflows:');
      invalidWorkflows.forEach(result => {
        console.log(`\n📁 ${result.file}:`);
        result.issues.forEach(issue => {
          console.log(`   • ${issue}`);
        });
      });
    }
    
    if (this.fixesApplied.length > 0) {
      console.log(`\n🔧 Fixed ${this.fixesApplied.length} workflows:`);
      this.fixesApplied.forEach(fix => {
        console.log(`   • ${fix.file}: ${fix.issues.length} issues fixed`);
      });
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalWorkflows: this.validationResults.length,
      validWorkflows: validWorkflows.length,
      invalidWorkflows: invalidWorkflows.length,
      workflowsFixed: this.fixesApplied.length,
      validationResults: this.validationResults,
      fixesApplied: this.fixesApplied,
      errors: this.errors
    };
    
    const reportPath = path.join(LOGS_DIR, 'workflow-validation-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
  }
}

// CLI interface
async function main() {
  const validator = new WorkflowValidator();
  
  try {
    await validator.validateAllWorkflows();
  } catch (error) {
    console.error('❌ Error during workflow validation:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WorkflowValidator;