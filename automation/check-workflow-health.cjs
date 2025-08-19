#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 GitHub Actions Workflow Health Check\n');

const workflowsDir = '.github/workflows';
const issues = {
  genericNames: [],
  highFrequencySchedules: [],
  missingPermissions: [],
  missingConcurrency: []
};

// Check if workflows directory exists
if (!fs.existsSync(workflowsDir)) {
  console.log('❌ No .github/workflows directory found');
  process.exit(1);
}

// Get all workflow files (excluding backup directories)
const workflowFiles = fs.readdirSync(workflowsDir)
  .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
  .filter(file => !file.includes('broken_workflows_backup'));

console.log(`📁 Found ${workflowFiles.length} main workflow files\n`);

workflowFiles.forEach(filename => {
  const filepath = path.join(workflowsDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Check for generic names
  if (filename === 'workflow.yml' || filename === 'ci.yml' || filename === 'deploy.yml') {
    issues.genericNames.push(filename);
  }
  
  // Check for high frequency schedules
  const cronMatch = content.match(/cron:\s*['"`](\*\/\d+\s+\*\s+\*\s+\*\s+\*)/);
  if (cronMatch) {
    const schedule = cronMatch[1];
    if (schedule.startsWith('*/1') || schedule.startsWith('*/2') || schedule.startsWith('*/5') || schedule.startsWith('*/10')) {
      issues.highFrequencySchedules.push({ filename, schedule });
    }
  }
  
  // Check for missing permissions
  if (!content.includes('permissions:')) {
    issues.missingPermissions.push(filename);
  }
  
  // Check for missing concurrency
  if (!content.includes('concurrency:')) {
    issues.missingConcurrency.push(filename);
  }
});

// Report issues
console.log('📊 Health Check Results:\n');

if (issues.genericNames.length > 0) {
  console.log(`⚠️  Generic Names (${issues.genericNames.length}):`);
  issues.genericNames.forEach(name => console.log(`   - ${name}`));
  console.log('');
}

if (issues.highFrequencySchedules.length > 0) {
  console.log(`⚠️  High Frequency Schedules (${issues.highFrequencySchedules.length}):`);
  issues.highFrequencySchedules.forEach(({ filename, schedule }) => 
    console.log(`   - ${filename}: ${schedule}`));
  console.log('');
}

if (issues.missingPermissions.length > 0) {
  console.log(`⚠️  Missing Permissions (${issues.missingPermissions.length}):`);
  issues.missingPermissions.forEach(name => console.log(`   - ${name}`));
  console.log('');
}

if (issues.missingConcurrency.length > 0) {
  console.log(`⚠️  Missing Concurrency (${issues.missingConcurrency.length}):`);
  issues.missingConcurrency.forEach(name => console.log(`   - ${name}`));
  console.log('');
}

const totalIssues = Object.values(issues).flat().length;
if (totalIssues === 0) {
  console.log('✅ All workflows are healthy!');
} else {
  console.log(`📈 Total Issues Found: ${totalIssues}`);
}
