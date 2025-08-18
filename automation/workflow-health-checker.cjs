#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');

function checkWorkflowHealth() {
  console.log('🔍 Checking workflow health...\n');
  
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('❌ Workflows directory not found');
    return;
  }
  
  const workflowFiles = fs.readdirSync(WORKFLOWS_DIR)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
  
  console.log(`📁 Found ${workflowFiles.length} workflow files\n`);
  
  let issues = 0;
  
  for (const file of workflowFiles) {
    const filePath = path.join(WORKFLOWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common issues
    const problems = [];
    
    // Check for generic names
    if (content.includes('name: Workflow') || content.includes('name: workflow')) {
      problems.push('Generic workflow name');
    }
    
    // Check for high-frequency schedules
    if (content.includes('cron: \'*/10 * * * *\'') || content.includes('cron: \'*/5 * * * *\'')) {
      problems.push('High-frequency schedule (every 5-10 minutes)');
    }
    
    // Check for malformed YAML
    if (content.includes('workflow_dispatch: {}') && !content.includes('workflow_dispatch: null')) {
      // This is actually fine
    }
    
    // Check for missing permissions
    if (!content.includes('permissions:')) {
      problems.push('Missing permissions section');
    }
    
    // Check for missing concurrency
    if (!content.includes('concurrency:')) {
      problems.push('Missing concurrency control');
    }
    
    if (problems.length > 0) {
      console.log(`⚠️  ${file}:`);
      problems.forEach(problem => console.log(`   - ${problem}`));
      issues++;
    } else {
      console.log(`✅ ${file}: OK`);
    }
  }
  
  console.log(`\n📊 Summary: ${issues} workflows with potential issues`);
  
  if (issues === 0) {
    console.log('🎉 All workflows look healthy!');
  } else {
    console.log('🔧 Consider reviewing the workflows with issues above');
  }
}

if (require.main === module) {
  checkWorkflowHealth();
}

module.exports = { checkWorkflowHealth };
