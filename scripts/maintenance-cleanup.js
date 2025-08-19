#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Starting maintenance cleanup...');

try {
  // Clean up old automation files (older than 7 days)
  console.log('Cleaning up old automation artifacts...');
  
  const automationDir = path.join(process.cwd(), 'automation');
  
  // Clean up old analytics files (older than 7 days)
  if (fs.existsSync(path.join(automationDir, 'analytics'))) {
    execSync(`find ${path.join(automationDir, 'analytics')} -name "*.json" -mtime +7 -delete 2>/dev/null || true`, { stdio: 'inherit' });
    execSync(`find ${path.join(automationDir, 'analytics')} -name "*.html" -mtime +7 -delete 2>/dev/null || true`, { stdio: 'inherit' });
    execSync(`find ${path.join(automationDir, 'analytics')} -name "*.csv" -mtime +7 -delete 2>/dev/null || true`, { stdio: 'inherit' });
  }
  
  // Clean up old backup directories (older than 3 days)
  if (fs.existsSync(path.join(automationDir, 'backups'))) {
    execSync(`find ${path.join(automationDir, 'backups')} -type d -mtime +3 -exec rm -rf {} + 2>/dev/null || true`, { stdio: 'inherit' });
  }
  
  // Clean up old optimization reports (older than 5 days)
  if (fs.existsSync(path.join(automationDir, 'optimization'))) {
    execSync(`find ${path.join(automationDir, 'optimization')} -name "*.json" -mtime +5 -delete 2>/dev/null || true`, { stdio: 'inherit' });
  }
  
  // Clean up old deployment reports (older than 3 days)
  if (fs.existsSync(path.join(automationDir, 'deployments'))) {
    execSync(`find ${path.join(automationDir, 'deployments')} -name "*.json" -mtime +3 -delete 2>/dev/null || true`, { stdio: 'inherit' });
  }
  
  console.log('Cleanup completed');
  
  // Commit cleanup changes if there are any
  try {
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "🤖 Automated cleanup: Remove old artifacts and reports [skip ci]"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('✅ Cleanup changes committed and pushed');
  } catch (gitError) {
    console.log('No changes to commit or git error:', gitError.message);
  }
  
  console.log('✅ Maintenance cleanup completed successfully');
  
} catch (error) {
  console.error('❌ Maintenance cleanup failed:', error.message);
  process.exit(1);
}
