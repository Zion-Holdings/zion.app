#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Final Workflow Cleanup Script
 * Fixes remaining structural issues and cleans up malformed workflows
 */

const WORKFLOWS_DIR = '.github/workflows';
const LOGS_DIR = 'automation/logs';

class FinalWorkflowCleanup {
  constructor() {
    this.fixesApplied = [];
    this.errors = [];
    this.backups = [];
  }

  async cleanupAllWorkflows() {
    console.log('🧹 Starting final workflow cleanup...\n');
    
    if (!fs.existsSync(WORKFLOWS_DIR)) {
      throw new Error(`Workflows directory not found: ${WORKFLOWS_DIR}`);
    }

    const workflowFiles = this.getWorkflowFiles();
    console.log(`📁 Found ${workflowFiles.length} workflow files\n`);

    for (const filePath of workflowFiles) {
      try {
        await this.cleanupWorkflow(filePath);
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

  async cleanupWorkflow(filePath) {
    const fileName = path.basename(filePath);
    console.log(`🧹 Cleaning up ${fileName}...`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let cleanedContent = content;
    let fixesApplied = [];

    // Fix 1: Remove duplicate sections
    if (this.hasDuplicateSections(cleanedContent)) {
      cleanedContent = this.removeDuplicateSections(cleanedContent);
      fixesApplied.push('Removed duplicate sections');
    }

    // Fix 2: Fix malformed step structure
    if (this.hasMalformedStepStructure(cleanedContent)) {
      cleanedContent = this.fixStepStructure(cleanedContent);
      fixesApplied.push('Fixed step structure');
    }

    // Fix 3: Clean up malformed YAML
    if (this.hasMalformedYaml(cleanedContent)) {
      cleanedContent = this.cleanYamlStructure(cleanedContent);
      fixesApplied.push('Cleaned YAML structure');
    }

    // Fix 4: Fix missing step markers
    if (this.hasMissingStepMarkers(cleanedContent)) {
      cleanedContent = this.addStepMarkers(cleanedContent);
      fixesApplied.push('Added missing step markers');
    }

    // Fix 5: Remove orphaned content
    if (this.hasOrphanedContent(cleanedContent)) {
      cleanedContent = this.removeOrphanedContent(cleanedContent);
      fixesApplied.push('Removed orphaned content');
    }

    if (cleanedContent !== content) {
      // Create backup
      const backupPath = `${filePath}.final-backup`;
      fs.writeFileSync(backupPath, content);
      this.backups.push(backupPath);

      // Write cleaned content
      fs.writeFileSync(filePath, cleanedContent);
      
      this.fixesApplied.push({
        file: fileName,
        fixes: fixesApplied,
        backup: backupPath
      });

      console.log(`✅ ${fileName}: ${fixesApplied.length} fixes applied`);
    } else {
      console.log(`✅ ${fileName}: No cleanup needed`);
    }
  }

  hasDuplicateSections(content) {
    return (
      (content.match(/contents: write/g) || []).length > 1 ||
      (content.match(/actions: read/g) || []).length > 1 ||
      (content.match(/permissions:/g) || []).length > 1
    );
  }

  removeDuplicateSections(content) {
    let cleaned = content;
    
    // Remove duplicate permissions sections
    const permissionsMatch = cleaned.match(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/);
    if (permissionsMatch) {
      const singlePermissions = `permissions:
  contents: write
  actions: read

`;
      cleaned = cleaned.replace(/permissions:\s*\n(\s+contents: write\s*\n\s+actions: read\s*\n)+/, singlePermissions);
    }
    
    // Remove duplicate concurrency sections
    if ((cleaned.match(/concurrency:/g) || []).length > 1) {
      const firstConcurrency = cleaned.indexOf('concurrency:');
      const secondConcurrency = cleaned.indexOf('concurrency:', firstConcurrency + 1);
      if (secondConcurrency !== -1) {
        const endOfFirst = cleaned.indexOf('\n\n', firstConcurrency);
        if (endOfFirst !== -1) {
          const beforeFirst = cleaned.substring(0, firstConcurrency);
          const afterFirst = cleaned.substring(endOfFirst);
          cleaned = beforeFirst + afterFirst;
        }
      }
    }
    
    return cleaned;
  }

  hasMalformedStepStructure(content) {
    return content.includes('name:') && !content.includes('- name:') ||
           content.includes('uses:') && !content.includes('- uses:') ||
           content.includes('run:') && !content.includes('- run:');
  }

  fixStepStructure(content) {
    let fixed = content;
    
    // Fix step markers
    fixed = fixed.replace(/^(\s+)name:/gm, '$1- name:');
    fixed = fixed.replace(/^(\s+)uses:/gm, '$1- uses:');
    fixed = fixed.replace(/^(\s+)run:/gm, '$1- run:');
    fixed = fixed.replace(/^(\s+)with:/gm, '$1- with:');
    
    return fixed;
  }

  hasMalformedYaml(content) {
    return content.includes('\n\n\n') || 
           content.includes('  \n') ||
           content.includes(':\n\n\n');
  }

  cleanYamlStructure(content) {
    let cleaned = content;
    
    // Remove excessive newlines
    cleaned = cleaned.replace(/\n\n\n/g, '\n\n');
    cleaned = cleaned.replace(/:\n\n\n/g, ':\n\n');
    
    // Fix malformed indentation
    cleaned = cleaned.replace(/^\s{2,4}name:/gm, '      - name:');
    cleaned = cleaned.replace(/^\s{6,8}uses:/gm, '        uses:');
    cleaned = cleaned.replace(/^\s{6,8}with:/gm, '        with:');
    cleaned = cleaned.replace(/^\s{6,8}run:/gm, '        run:');
    
    return cleaned;
  }

  hasMissingStepMarkers(content) {
    return content.includes('steps:') && 
           content.includes('name:') && 
           !content.includes('- name:');
  }

  addStepMarkers(content) {
    let fixed = content;
    
    // Add step markers where missing
    fixed = fixed.replace(/^(\s+)name:/gm, '$1- name:');
    fixed = fixed.replace(/^(\s+)uses:/gm, '$1- uses:');
    fixed = fixed.replace(/^(\s+)run:/gm, '$1- run:');
    fixed = fixed.replace(/^(\s+)with:/gm, '$1- with:');
    
    return fixed;
  }

  hasOrphanedContent(content) {
    return content.includes('        - name:') ||
           content.includes('          uses:') ||
           content.includes('          run:');
  }

  removeOrphanedContent(content) {
    let cleaned = content;
    
    // Remove orphaned step content that's not properly structured
    const lines = cleaned.split('\n');
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

  generateReport() {
    console.log('\n📊 Final Workflow Cleanup Report');
    console.log('=' .repeat(50));
    
    if (this.fixesApplied.length === 0) {
      console.log('✅ All workflows are clean!');
    } else {
      console.log(`🧹 Cleaned ${this.fixesApplied.length} workflows:`);
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
      workflowsCleaned: this.fixesApplied.length,
      errors: this.errors.length,
      fixesApplied: this.fixesApplied,
      errors: this.errors,
      backups: this.backups
    };
    
    const reportPath = path.join(LOGS_DIR, 'final-workflow-cleanup.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
  }
}

// CLI interface
async function main() {
  const cleanup = new FinalWorkflowCleanup();
  
  try {
    await cleanup.cleanupAllWorkflows();
  } catch (error) {
    console.error('❌ Error during final workflow cleanup:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = FinalWorkflowCleanup;