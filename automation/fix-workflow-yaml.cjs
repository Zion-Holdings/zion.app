#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Fix common YAML syntax issues in GitHub Actions workflow files
 */

const WORKFLOWS_DIR = '.github/workflows';

// Common fixes to apply
const FIXES = [
  // Fix unquoted ${{ github. }} expressions
  {
    pattern: /^(\s*group:\s*)([^"']*\${{[^}]+}}[^"']*)$/gm,
    replacement: '$1"$2"',
    description: 'Quote unquoted ${{ github. }} expressions in group fields'
  },
  {
    pattern: /^(\s*[a-zA-Z_-]+:\s*)([^"']*\${{[^}]+}}[^"']*)$/gm,
    replacement: '$1"$2"',
    description: 'Quote unquoted ${{ github. }} expressions in other fields'
  },
  // Fix placeholder text
  {
    pattern: /WORKFLOW_NAME_PLACEHOLDER/g,
    replacement: '',
    description: 'Remove WORKFLOW_NAME_PLACEHOLDER text'
  },
  // Fix malformed cron expressions
  {
    pattern: /cron:\s*'\*\/[0-9]+'/g,
    replacement: "cron: '0 */1 * * *'",
    description: 'Fix invalid cron expressions like */60 to valid hourly format'
  }
];

function fixWorkflowFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let fixesApplied = [];

    // Apply each fix
    FIXES.forEach((fix, index) => {
      const matches = content.match(fix.pattern);
      if (matches && matches.length > 0) {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
        fixesApplied.push(`${index + 1}. ${fix.description}`);
      }
    });

    // Fix specific common issues
    if (content.includes('permissions:') && content.includes('contents: read') && 
        (content.includes('git commit') || content.includes('git push'))) {
      fixedContent = fixedContent.replace(/contents:\s*read/g, 'contents: write');
      fixesApplied.push('5. Fixed permissions from read to write for workflows that commit/push');
    }

    // Fix malformed YAML structure
    if (content.includes('jobs:\n\n\n')) {
      fixedContent = fixedContent.replace(/jobs:\n\n\n/g, 'jobs:\n');
      fixesApplied.push('6. Fixed malformed jobs section with extra newlines');
    }

    // Fix step indentation
    if (content.includes('    - name:')) {
      fixedContent = fixedContent.replace(/    - name:/g, '      - name:');
      fixesApplied.push('7. Fixed step indentation');
    }

    if (fixedContent !== content) {
      // Create backup
      const backupPath = filePath + '.backup';
      fs.writeFileSync(backupPath, content);
      
      // Write fixed content
      fs.writeFileSync(filePath, fixedContent);
      
      return {
        file: path.basename(filePath),
        fixesApplied,
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
  console.log('🔧 Fixing GitHub Actions workflow YAML syntax issues...\n');

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
  console.log('📊 Fix Results Summary:');
  console.log('=' .repeat(50));

  if (results.length === 0) {
    console.log('✅ All workflow files are already properly formatted!');
  } else {
    results.forEach(result => {
      if (result.error) {
        console.log(`❌ ${result.file}: ${result.error}`);
      } else {
        console.log(`✅ ${result.file}:`);
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
      fixesApplied: r.fixesApplied || [],
      error: r.error || null,
      backupCreated: r.backupCreated || null
    }))
  };

  const summaryPath = 'automation/logs/workflow-yaml-fixes.json';
  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log(`\n📝 Summary saved to: ${summaryPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixWorkflowFile, FIXES };
