#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing High-Frequency Schedules in GitHub Actions Workflows\n');

const workflowsDir = '.github/workflows';
let fixedCount = 0;
let skippedCount = 0;

// Check if workflows directory exists
if (!fs.existsSync(workflowsDir)) {
  console.log('❌ No .github/workflows directory found');
  process.exit(1);
}

// Get all workflow files
const workflowFiles = fs.readdirSync(workflowsDir)
  .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));

console.log(`📁 Found ${workflowFiles.length} workflow files\n`);

workflowFiles.forEach(filename => {
  const filepath = path.join(workflowsDir, filename);
  let content = fs.readFileSync(filepath, 'utf8');
  let modified = false;
  
  // Fix high-frequency schedules
  const highFreqPatterns = [
    { from: '*/1 * * * *', to: '0 */2 * * *' },      // Every 1 min -> Every 2 hours
    { from: '*/2 * * * *', to: '0 */4 * * *' },      // Every 2 min -> Every 4 hours
    { from: '*/5 * * * *', to: '0 */6 * * *' },      // Every 5 min -> Every 6 hours
    { from: '*/10 * * * *', to: '0 */6 * * *' },     // Every 10 min -> Every 6 hours
    { from: '*/15 * * * *', to: '0 */8 * * *' },     // Every 15 min -> Every 8 hours
    { from: '*/20 * * * *', to: '0 */12 * * *' },    // Every 20 min -> Every 12 hours
    { from: '*/30 * * * *', to: '0 */12 * * *' }     // Every 30 min -> Every 12 hours
  ];
  
  highFreqPatterns.forEach(pattern => {
    if (content.includes(`cron: '${pattern.from}'`)) {
      content = content.replace(`cron: '${pattern.from}'`, `cron: '${pattern.to}'`);
      modified = true;
    } else if (content.includes(`cron: "${pattern.from}"`)) {
      content = content.replace(`cron: "${pattern.from}"`, `cron: "${pattern.to}"`);
      modified = true;
    } else if (content.includes(`cron: \`${pattern.from}\``)) {
      content = content.replace(`cron: \`${pattern.from}\``, `cron: \`${pattern.to}\``);
      modified = true;
    }
  });
  
  // Also check for cron: without quotes
  const cronMatch = content.match(/cron:\s*(\*\/\d+\s+\*\s+\*\s+\*\s+\*)/);
  if (cronMatch) {
    const schedule = cronMatch[1];
    if (schedule.startsWith('*/1') || schedule.startsWith('*/2') || schedule.startsWith('*/5') || 
        schedule.startsWith('*/10') || schedule.startsWith('*/15') || schedule.startsWith('*/20') || 
        schedule.startsWith('*/30')) {
      
      let newSchedule;
      if (schedule.startsWith('*/1') || schedule.startsWith('*/2')) {
        newSchedule = '0 */2 * * *';
      } else if (schedule.startsWith('*/5') || schedule.startsWith('*/10')) {
        newSchedule = '0 */6 * * *';
      } else if (schedule.startsWith('*/15') || schedule.startsWith('*/20')) {
        newSchedule = '0 */8 * * *';
      } else {
        newSchedule = '0 */12 * * *';
      }
      
      content = content.replace(`cron: ${schedule}`, `cron: ${newSchedule}`);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✅ Fixed: ${filename}`);
    fixedCount++;
  } else {
    skippedCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`  Fixed: ${fixedCount} workflows`);
console.log(`  Skipped: ${skippedCount} workflows`);
console.log(`  Total: ${workflowFiles.length} workflows`);

if (fixedCount > 0) {
  console.log('\n🎉 High-frequency schedules have been fixed!');
  console.log('💡 Schedules have been changed to more reasonable frequencies:');
  console.log('   - Every 1-2 min → Every 2 hours');
  console.log('   - Every 5-10 min → Every 6 hours');
  console.log('   - Every 15-20 min → Every 8 hours');
  console.log('   - Every 30 min → Every 12 hours');
} else {
  console.log('\n✅ No high-frequency schedules found to fix!');
}
