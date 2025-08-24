#!/usr/bin/env node

/**
 * GitHub Workflows Auto Healer
 * Automatically fixes common issues in GitHub Actions workflows
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');

// Common workflow issues and fixes
const WORKFLOW_FIXES = {
  'node-version': {
    pattern: /node-version:\s*['"]?(\d+)['"]?/g,
    replacement: 'node-version: \'20.18.1\'',
    description: 'Update Node.js version to 20.18.1'
  },
  'npm-version': {
    pattern: /npm-version:\s*['"]?(\d+)['"]?/g,
    replacement: 'npm-version: \'10.0.0\'',
    description: 'Update npm version to 10.0.0'
  },
  'runs-on': {
    pattern: /runs-on:\s*ubuntu-latest/g,
    replacement: 'runs-on: ubuntu-22.04',
    description: 'Update Ubuntu runner to 22.04'
  },
  'actions-checkout': {
    pattern: /actions\/checkout@v3/g,
    replacement: 'actions/checkout@v4',
    description: 'Update checkout action to v4'
  },
  'actions-setup-node': {
    pattern: /actions\/setup-node@v3/g,
    replacement: 'actions/setup-node@v4',
    description: 'Update setup-node action to v4'
  }
};

function loadWorkflowFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return yaml.load(content);
  } catch (error) {
    console.warn(`⚠️  Could not parse ${filePath}: ${error.message}`);
    return null;
  }
}

function saveWorkflowFile(filePath, content) {
  try {
    const yamlContent = yaml.dump(content, { 
      lineWidth: 120, 
      noRefs: true,
      sortKeys: false
    });
    fs.writeFileSync(filePath, yamlContent);
    return true;
  } catch (error) {
    console.error(`❌ Failed to save ${filePath}: ${error.message}`);
    return false;
  }
}

function fixWorkflowIssues(workflowPath) {
  const fileName = path.basename(workflowPath);
  console.log(`🔧 Fixing issues in ${fileName}...`);
  
  let content = fs.readFileSync(workflowPath, 'utf8');
  let fixesApplied = 0;
  
  Object.entries(WORKFLOW_FIXES).forEach(([issue, fix]) => {
    if (fix.pattern.test(content)) {
      content = content.replace(fix.pattern, fix.replacement);
      console.log(`  ✅ ${fix.description}`);
      fixesApplied++;
    }
  });
  
  if (fixesApplied > 0) {
    fs.writeFileSync(workflowPath, content);
    console.log(`  📝 Applied ${fixesApplied} fixes`);
  } else {
    console.log(`  ✨ No fixes needed`);
  }
  
  return fixesApplied;
}

function validateWorkflow(workflowPath) {
  try {
    const workflow = loadWorkflowFile(workflowPath);
    if (!workflow) return false;
    
    const issues = [];
    
    // Check for required fields
    if (!workflow.name) issues.push('Missing workflow name');
    if (!workflow.on) issues.push('Missing trigger configuration');
    if (!workflow.jobs) issues.push('Missing jobs configuration');
    
    // Check for deprecated patterns
    if (workflow.runs_on === 'ubuntu-latest') {
      issues.push('Using deprecated ubuntu-latest runner');
    }
    
    return {
      valid: issues.length === 0,
      issues,
      workflow
    };
  } catch (error) {
    return {
      valid: false,
      issues: [error.message],
      workflow: null
    };
  }
}

function healAllWorkflows() {
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('❌ .github/workflows directory not found');
    return { total: 0, fixed: 0, errors: 0 };
  }
  
  const workflowFiles = fs.readdirSync(WORKFLOWS_DIR)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
    .map(file => path.join(WORKFLOWS_DIR, file));
  
  console.log(`🔍 Found ${workflowFiles.length} workflow files`);
  
  let totalFixes = 0;
  let totalErrors = 0;
  
  workflowFiles.forEach(workflowPath => {
    try {
      const fixes = fixWorkflowIssues(workflowPath);
      totalFixes += fixes;
      
      // Validate after fixes
      const validation = validateWorkflow(workflowPath);
      if (!validation.valid) {
        console.log(`  ⚠️  Validation issues: ${validation.issues.join(', ')}`);
        totalErrors++;
      }
    } catch (error) {
      console.error(`  ❌ Error processing ${workflowPath}: ${error.message}`);
      totalErrors++;
    }
  });
  
  return {
    total: workflowFiles.length,
    fixed: totalFixes,
    errors: totalErrors
  };
}

function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'heal':
      console.log('🚀 Starting GitHub Workflows Auto Healer...\n');
      const result = healAllWorkflows();
      console.log(`\n📊 Healing complete:`);
      console.log(`  Total workflows: ${result.total}`);
      console.log(`  Fixes applied: ${result.fixed}`);
      console.log(`  Errors: ${result.errors}`);
      break;
      
    case 'validate':
      if (!fs.existsSync(WORKFLOWS_DIR)) {
        console.log('❌ .github/workflows directory not found');
        return;
      }
      
      const workflowFiles = fs.readdirSync(WORKFLOWS_DIR)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      console.log('🔍 Validating workflows...\n');
      
      workflowFiles.forEach(file => {
        const workflowPath = path.join(WORKFLOWS_DIR, file);
        const validation = validateWorkflow(workflowPath);
        
        if (validation.valid) {
          console.log(`✅ ${file} - Valid`);
        } else {
          console.log(`❌ ${file} - Issues: ${validation.issues.join(', ')}`);
        }
      });
      break;
      
    default:
      console.log('GitHub Workflows Auto Healer');
      console.log('============================');
      console.log('');
      console.log('Usage:');
      console.log('  node workflows-auto-healer.cjs heal      - Fix all workflow issues');
      console.log('  node workflows-auto-healer.cjs validate  - Validate all workflows');
      console.log('');
      console.log('This tool will automatically fix common issues like:');
      console.log('  - Outdated Node.js and npm versions');
      console.log('  - Deprecated GitHub Actions versions');
      console.log('  - Deprecated runner specifications');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  healAllWorkflows,
  validateWorkflow,
  fixWorkflowIssues
};