#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');

function fixWorkflowIssues() {
  console.log('🔧 Fixing workflow issues...\n');
  
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('❌ Workflows directory not found');
    return;
  }
  
  const workflowFiles = fs.readdirSync(WORKFLOWS_DIR)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
  
  console.log(`📁 Found ${workflowFiles.length} workflow files\n`);
  
  let fixed = 0;
  let skipped = 0;
  
  for (const file of workflowFiles) {
    const filePath = path.join(WORKFLOWS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix generic workflow names
    if (content.includes('name: Workflow')) {
      const descriptiveName = file.replace('.yml', '').replace('.yaml', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      content = content.replace('name: Workflow', `name: ${descriptiveName}`);
      modified = true;
    }
    
    // Fix high-frequency schedules
    if (content.includes('cron: \'*/10 * * * *\'')) {
      content = content.replace('cron: \'*/10 * * * *\'', 'cron: \'0 */6 * * *\'');
      modified = true;
    }
    
    if (content.includes('cron: \'*/5 * * * *\'')) {
      content = content.replace('cron: \'*/5 * * * *\'', 'cron: \'0 */30 * * * *\'');
      modified = true;
    }
    
    // Fix generic job names
    if (content.includes('name: Main Job')) {
      const descriptiveJobName = file.replace('.yml', '').replace('.yaml', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + ' Job';
      content = content.replace('name: Main Job', `name: ${descriptiveJobName}`);
      modified = true;
    }
    
    // Fix generic step names
    if (content.includes('name: Run workflow')) {
      const descriptiveStepName = file.replace('.yml', '').replace('.yaml', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      content = content.replace('name: Run workflow', `name: Run ${descriptiveStepName}`);
      modified = true;
    }
    
    // Fix generic echo messages
    if (content.includes('echo "Workflow Workflow completed successfully"')) {
      const descriptiveMessage = file.replace('.yml', '').replace('.yaml', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + ' workflow completed successfully';
      content = content.replace('echo "Workflow Workflow completed successfully"', `echo "${descriptiveMessage}"`);
      modified = true;
    }
    
    // Fix concurrency groups
    if (content.includes('group: workflow-${{ github.ref }}')) {
      const groupName = file.replace('.yml', '').replace('.yaml', '');
      content = content.replace('group: workflow-${{ github.ref }}', `group: ${groupName}`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${file}`);
      fixed++;
    } else {
      skipped++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  Fixed: ${fixed} workflows`);
  console.log(`  Skipped: ${skipped} workflows`);
  console.log(`  Total: ${workflowFiles.length} workflows`);
  
  if (fixed > 0) {
    console.log('\n🎉 Workflow fixes completed!');
  } else {
    console.log('\n✨ No fixes needed - all workflows are already healthy!');
  }
}

if (require.main === module) {
  fixWorkflowIssues();
}

module.exports = { fixWorkflowIssues };
