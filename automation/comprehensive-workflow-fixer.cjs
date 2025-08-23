#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Comprehensive GitHub Actions Workflow Fixer
 * Fixes structural YAML issues, missing fields, and malformed job definitions
 */

const WORKFLOWS_DIR = '.github/workflows';

// Common workflow templates for different types
const WORKFLOW_TEMPLATES = {
  ci: {
    name: 'CI',
    on: {
      workflow_dispatch: {},
      schedule: [{ cron: '0 0 * * *' }]
    },
    concurrency: {
      group: 'github.workflow-${{ github.ref }}',
      'cancel-in-progress': true
    },
    permissions: {
      contents: 'write',
      actions: 'read'
    },
    jobs: {
      main: {
        'runs-on': 'ubuntu-latest',
        name: 'Main Job',
        steps: [
          {
            name: 'Checkout repository',
            uses: 'actions/checkout@v4',
            with: { 'fetch-depth': 0 }
          },
          {
            name: 'Setup Node.js',
            uses: 'actions/setup-node@v4',
            with: {
              'node-version': '20',
              cache: 'npm'
            }
          },
          {
            name: 'Install dependencies',
            run: 'npm ci --no-audit --no-fund'
          },
          {
            name: 'Run tests',
            run: 'npm test'
          },
          {
            name: 'Build project',
            run: 'npm run build'
          }
        ]
      }
    }
  },
  test: {
    name: 'Test Suite',
    on: {
      workflow_dispatch: {},
      schedule: [{ cron: '0 0 * * *' }]
    },
    concurrency: {
      group: 'github.workflow-${{ github.ref }}',
      'cancel-in-progress': true
    },
    permissions: {
      contents: 'read',
      actions: 'read'
    },
    jobs: {
      test: {
        'runs-on': 'ubuntu-latest',
        name: 'Run Tests',
        steps: [
          {
            name: 'Checkout repository',
            uses: 'actions/checkout@v4'
          },
          {
            name: 'Setup Node.js',
            uses: 'actions/setup-node@v4',
            with: {
              'node-version': '20',
              cache: 'npm'
            }
          },
          {
            name: 'Install dependencies',
            run: 'npm ci'
          },
          {
            name: 'Run tests',
            run: 'npm test'
          }
        ]
      }
    }
  },
  security: {
    name: 'Security Scan',
    on: {
      workflow_dispatch: {},
      schedule: [{ cron: '0 2 * * 0' }]
    },
    concurrency: {
      group: 'github.workflow-${{ github.ref }}',
      'cancel-in-progress': true
    },
    permissions: {
      contents: 'read',
      'security-events': 'write',
      actions: 'read'
    },
    jobs: {
      security: {
        'runs-on': 'ubuntu-latest',
        name: 'Security Analysis',
        steps: [
          {
            name: 'Checkout repository',
            uses: 'actions/checkout@v4'
          },
          {
            name: 'Run security scan',
            run: 'npm audit --audit-level=high'
          }
        ]
      }
    }
  }
};

function detectWorkflowType(content) {
  const name = content.match(/name:\s*(.+)/)?.[1]?.toLowerCase() || '';
  
  if (name.includes('ci') || name.includes('build')) return 'ci';
  if (name.includes('test')) return 'test';
  if (name.includes('security') || name.includes('audit')) return 'security';
  
  return 'ci'; // default
}

function fixWorkflowStructure(content, workflowType = 'ci') {
  let fixedContent = content;
  
  // Fix missing runs-on field in jobs
  if (content.includes('jobs:') && !content.includes('runs-on:')) {
    const template = WORKFLOW_TEMPLATES[workflowType];
    if (template) {
      // Replace the entire jobs section with the template
      const jobsStart = content.indexOf('jobs:');
      const jobsEnd = content.indexOf('\n\n', jobsStart);
      
      if (jobsEnd !== -1) {
        const beforeJobs = content.substring(0, jobsStart);
        const afterJobs = content.substring(jobsEnd);
        
        // Convert template to YAML string
        const templateYaml = convertTemplateToYaml(template.jobs);
        fixedContent = beforeJobs + 'jobs:\n' + templateYaml + afterJobs;
      }
    }
  }
  
  // Fix malformed step indentation
  fixedContent = fixedContent.replace(/^\s{4}-\s+name:/gm, '      - name:');
  fixedContent = fixedContent.replace(/^\s{6}uses:/gm, '        uses:');
  fixedContent = fixedContent.replace(/^\s{6}with:/gm, '        with:');
  fixedContent = fixedContent.replace(/^\s{6}run:/gm, '        run:');
  
  // Fix missing permissions section
  if (!content.includes('permissions:') && content.includes('contents: write')) {
    const permissionsSection = `permissions:
  contents: write
  actions: read

`;
    fixedContent = fixedContent.replace(/concurrency:\n/, `concurrency:\n${permissionsSection}`);
  }
  
  // Fix malformed cron expressions
  fixedContent = fixedContent.replace(/cron:\s*'\*\/30'/g, "cron: '0 */1 * * *'");
  fixedContent = fixedContent.replace(/cron:\s*'\*\/5'/g, "cron: '*/5 * * * *'");
  
  // Fix unquoted expressions
  fixedContent = fixedContent.replace(/group:\s*([^"']*\${{[^}]+}}[^"']*)/g, 'group: "$1"');
  
  return fixedContent;
}

function convertTemplateToYaml(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let yaml = '';
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      yaml += `${spaces}${key}:\n${convertTemplateToYaml(value, indent + 1)}`;
    } else if (Array.isArray(value)) {
      yaml += `${spaces}${key}:\n`;
      value.forEach(item => {
        if (typeof item === 'object') {
          yaml += `${convertTemplateToYaml(item, indent + 1)}`;
        } else {
          yaml += `${spaces}  - ${item}\n`;
        }
      });
    } else {
      yaml += `${spaces}${key}: ${value}\n`;
    }
  }
  
  return yaml;
}

function fixWorkflowFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const workflowType = detectWorkflowType(content);
    
    let fixedContent = fixWorkflowStructure(content, workflowType);
    
    // Additional fixes for common issues
    if (fixedContent.includes('jobs:\n\n\n')) {
      fixedContent = fixedContent.replace(/jobs:\n\n\n/g, 'jobs:\n');
    }
    
    if (fixedContent.includes('steps:\n\n\n')) {
      fixedContent = fixedContent.replace(/steps:\n\n\n/g, 'steps:\n');
    }
    
    // Fix missing step structure
    if (fixedContent.includes('name:') && !fixedContent.includes('steps:')) {
      const nameMatch = fixedContent.match(/name:\s*(.+)/);
      if (nameMatch) {
        const stepName = nameMatch[1];
        const stepsSection = `steps:
      - name: ${stepName}
        run: echo "Step completed"
`;
        fixedContent = fixedContent.replace(/name:\s*.+/, stepsSection);
      }
    }
    
    if (fixedContent !== content) {
      // Create backup
      const backupPath = filePath + '.backup2';
      fs.writeFileSync(backupPath, content);
      
      // Write fixed content
      fs.writeFileSync(filePath, fixedContent);
      
      return {
        file: path.basename(filePath),
        workflowType,
        fixesApplied: ['Structural fixes applied'],
        backupCreated: backupPath
      };
    }
    
    return null;
  } catch (error) {
    return {
      file: path.basename(filePath),
      error: error.message
    };
  }
}

function main() {
  console.log('🔧 Comprehensive GitHub Actions Workflow Fixer\n');
  
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.error('❌ Workflows directory not found:', WORKFLOWS_DIR);
    process.exit(1);
  }
  
  const workflowFiles = fs.readdirSync(WORKFLOWS_DIR)
    .filter(file => file.endsWith('.yml'))
    .map(file => path.join(WORKFLOWS_DIR, file));
  
  console.log(`📁 Found ${workflowFiles.length} workflow files\n`);
  
  const results = [];
  let totalFixes = 0;
  
  workflowFiles.forEach(filePath => {
    const result = fixWorkflowFile(filePath);
    if (result) {
      results.push(result);
      if (result.fixesApplied) {
        totalFixes += result.fixesApplied.length;
      }
    }
  });
  
  // Generate report
  console.log('📊 Comprehensive Fix Results Summary:');
  console.log('=' .repeat(60));
  
  if (results.length === 0) {
    console.log('✅ All workflow files are already properly structured!');
  } else {
    results.forEach(result => {
      if (result.error) {
        console.log(`❌ ${result.file}: ${result.error}`);
      } else {
        console.log(`✅ ${result.file} (${result.workflowType}):`);
        result.fixesApplied.forEach(fix => {
          console.log(`   • ${fix}`);
        });
        if (result.backupCreated) {
          console.log(`   📦 Backup created: ${result.backupCreated}`);
        }
        console.log('');
      }
    });
    
    console.log(`\n🎯 Total fixes applied: ${totalFixes}`);
    console.log(`📁 Files modified: ${results.filter(r => !r.error).length}`);
  }
  
  // Create summary file
  const summary = {
    timestamp: new Date().toISOString(),
    totalWorkflows: workflowFiles.length,
    filesModified: results.filter(r => !r.error).length,
    totalFixes,
    results: results.map(r => ({
      file: r.file,
      workflowType: r.workflowType || 'unknown',
      fixesApplied: r.fixesApplied || [],
      error: r.error || null,
      backupCreated: r.backupCreated || null
    }))
  };
  
  const summaryPath = 'automation/logs/comprehensive-workflow-fixes.json';
  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  console.log(`\n📝 Summary saved to: ${summaryPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixWorkflowFile, fixWorkflowStructure, WORKFLOW_TEMPLATES };