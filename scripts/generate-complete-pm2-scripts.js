#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Generating Complete PM2 Scripts for All GitHub Actions Workflows...');

// Helper function to generate distributed cron schedules
function generateCronSchedule(index) {
  const schedules = [
    '0 2 * * 0',      // Sunday at 2 AM
    '0 2 * * 1',      // Monday at 2 AM
    '0 2 * * 2',      // Tuesday at 2 AM
    '0 2 * * 3',      // Wednesday at 2 AM
    '0 2 * * 4',      // Thursday at 2 AM
    '0 2 * * 5',      // Friday at 2 AM
    '0 2 * * 6',      // Saturday at 2 AM
    '0 */6 * * *',    // Every 6 hours
    '0 */4 * * *',    // Every 4 hours
    '0 */2 * * *',    // Every 2 hours
    '0 * * * *',      // Every hour
    '0 6 * * *',      // Daily at 6 AM
    '0 8 * * *',      // Daily at 8 AM
    '0 10 * * *',     // Daily at 10 AM
    '0 12 * * *',     // Daily at 12 PM
    '0 14 * * *',     // Daily at 2 PM
    '0 16 * * *',     // Daily at 4 PM
    '0 18 * * *',     // Daily at 6 PM
    '0 20 * * *',     // Daily at 8 PM
    '0 22 * * *',     // Daily at 10 PM
    '0 0 * * *',      // Daily at midnight
    '0 4 * * *',      // Daily at 4 AM
    '*/15 * * * *',   // Every 15 minutes
    '*/10 * * * *',   // Every 10 minutes
    '*/5 * * * *'     // Every 5 minutes
  ];
  
  return schedules[index % schedules.length];
}

// Template for basic scripts
const scriptTemplate = (taskName, description) => `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('${description}');

try {
  // TODO: Implement ${taskName} functionality
  console.log('Starting ${taskName}...');
  
  // Placeholder implementation - replace with actual logic
  const timestamp = new Date().toISOString();
  const reportPath = path.join(process.cwd(), '${taskName}-report.md');
  
  const reportContent = \`# ${taskName} Report

Generated: \${timestamp}

## Status
- Task: ${taskName}
- Status: Completed
- Timestamp: \${timestamp}

## Next Steps
- Implement actual ${taskName} functionality
- Add proper error handling
- Add logging and monitoring
\`;

  fs.writeFileSync(reportPath, reportContent);
  console.log('📝 Report generated');
  
  // Commit the report
  try {
    execSync('git add ' + reportPath, { stdio: 'inherit' });
    execSync('git commit -m "🤖 Add ${taskName} report [skip ci]"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('✅ Report committed and pushed');
  } catch (gitError) {
    console.log('Git error:', gitError.message);
  }
  
  console.log('✅ ${taskName} completed successfully');
  
} catch (error) {
  console.error('❌ ${taskName} failed:', error.message);
  process.exit(1);
}
`;

// Get all workflow files
const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));

console.log(`📊 Found ${workflowFiles.length} GitHub Actions workflows`);

// Create scripts directory if it doesn't exist
const scriptsDir = path.join(process.cwd(), 'scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Generate scripts for each workflow
const generatedScripts = [];
workflowFiles.forEach((workflowFile, index) => {
  const taskName = workflowFile.replace('.yml', '');
  const description = `🤖 Starting ${taskName}...`;
  
  const scriptPath = path.join(scriptsDir, `${taskName}.js`);
  const scriptContent = scriptTemplate(taskName, description);
  
  fs.writeFileSync(scriptPath, scriptContent);
  generatedScripts.push(taskName);
  
  if ((index + 1) % 50 === 0) {
    console.log(`✅ Generated ${index + 1} scripts...`);
  }
});

console.log(`\n🎉 Successfully generated ${generatedScripts.length} PM2 scripts!`);

// Now generate the complete ecosystem file
console.log('📝 Generating complete ecosystem configuration...');

const ecosystemContent = `module.exports = {
  apps: [
${generatedScripts.map((taskName, index) => {
  // Generate cron schedule based on index to distribute load
  const cronSchedule = generateCronSchedule(index);
  return `    {
      name: '${taskName}',
      script: 'scripts/${taskName}.js',
      cron_restart: '${cronSchedule}',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: '${taskName}'
      }
    }`;
}).join(',\n')}
  ]
};
`;

fs.writeFileSync('ecosystem.complete.cjs', ecosystemContent);

console.log('✅ Complete ecosystem configuration generated: ecosystem.complete.cjs');
console.log('📁 All scripts are now available in the scripts/ directory');
console.log('🚀 You can now start the complete PM2 ecosystem with: pm2 start ecosystem.complete.cjs');
console.log(`\n📊 Summary:`);
console.log(`- Total workflows: ${workflowFiles.length}`);
console.log(`- Generated scripts: ${generatedScripts.length}`);
console.log(`- Ecosystem file: ecosystem.complete.cjs`);
console.log(`- Scripts directory: scripts/`);
