#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Setting up Husky Git hooks...');

// Ensure .husky directory exists
const huskyDir = path.join(process.cwd(), '.husky');
if (!fs.existsSync(huskyDir)) {
  fs.mkdirSync(huskyDir, { recursive: true });
}

// Set up Git hooks path
try {
  execSync('git config core.hooksPath .husky', { stdio: 'inherit' });
  console.log('✅ Git hooks path configured');
} catch (error) {
  console.error('❌ Failed to configure Git hooks path:', error.message);
}

// Make all hook files executable
const hookFiles = [
  'pre-commit',
  'commit-msg',
  'pre-push',
  'post-commit',
  'post-merge',
  'pre-rebase',
  'post-checkout',
  'post-rewrite',
  'prepare-commit-msg'
];

hookFiles.forEach(hookFile => {
  const hookPath = path.join(huskyDir, hookFile);
  if (fs.existsSync(hookPath)) {
    try {
      execSync(`chmod +x ${hookPath}`, { stdio: 'inherit' });
      console.log(`✅ Made ${hookFile} executable`);
    } catch (error) {
      console.error(`❌ Failed to make ${hookFile} executable:`, error.message);
    }
  }
});

// Test the setup
console.log('\n🧪 Testing Husky setup...');
try {
  const hooksPath = execSync('git config --get core.hooksPath', { encoding: 'utf8' }).trim();
  console.log(`✅ Git hooks path: ${hooksPath}`);
  
  if (hooksPath === '.husky') {
    console.log('✅ Husky setup is correct');
  } else {
    console.log('⚠️  Git hooks path is not set to .husky');
  }
} catch (error) {
  console.error('❌ Failed to verify Husky setup:', error.message);
}

console.log('\n🎉 Husky setup completed!');
console.log('📝 Available hooks:');
hookFiles.forEach(hook => {
  const hookPath = path.join(huskyDir, hook);
  if (fs.existsSync(hookPath)) {
    console.log(`   - ${hook}`);
  }
});
