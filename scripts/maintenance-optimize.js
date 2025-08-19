#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting workflow optimization analysis...');

try {
  const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
  
  if (!fs.existsSync(workflowsDir)) {
    console.log('No workflows directory found');
    process.exit(0);
  }
  
  // Count total workflows
  const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
  const workflowCount = workflowFiles.length;
  console.log(`📊 Total workflows: ${workflowCount}`);
  
  // Check for duplicate workflows
  const workflowNames = workflowFiles.map(file => file.replace('.yml', ''));
  const duplicates = workflowNames.filter((name, index) => workflowNames.indexOf(name) !== index);
  const duplicateCount = duplicates.length;
  console.log(`⚠️  Potential duplicates: ${duplicateCount}`);
  
  // Check for workflows with high frequency schedules
  let highFreqCount = 0;
  workflowFiles.forEach(file => {
    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
    if (content.includes('cron.*\\*/[0-9]')) {
      highFreqCount++;
    }
  });
  console.log(`🚀 High frequency workflows: ${highFreqCount}`);
  
  // Generate workflow health report
  const reportPath = path.join(process.cwd(), 'workflow-health-report.md');
  const reportContent = `# Workflow Health Report

Generated: ${new Date().toISOString()}

## Summary
- Total workflows: ${workflowCount}
- Last run: ${new Date().toISOString()}

## Recommendations
- Consider consolidating similar workflows
- Review scheduling frequencies
- Ensure proper error handling
- Monitor resource usage
`;

  fs.writeFileSync(reportPath, reportContent);
  console.log('📝 Health report generated');
  
  // Commit the report
  try {
    execSync('git add workflow-health-report.md', { stdio: 'inherit' });
    execSync('git commit -m "📊 Add workflow health report [skip ci]"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('✅ Health report committed and pushed');
  } catch (gitError) {
    console.log('Git error:', gitError.message);
  }
  
  console.log('✅ Workflow optimization analysis completed successfully');
  
} catch (error) {
  console.error('❌ Workflow optimization analysis failed:', error.message);
  process.exit(1);
}
