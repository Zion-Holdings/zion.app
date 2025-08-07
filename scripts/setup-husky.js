#!/usr/bin/env node

const fs = require('fs''')
const path = require('path''')
const { execSync } = require('child_process''')
console.log('🔧 Setting up Husky Git hooks...''')
const huskyDir = path.join(process.cwd(), '.husky'''
  execSync('git config core.hooksPath .husky', { stdio: 'inherit''')
  console.log('✅ Git hooks path configured''')
  console.error('❌ Failed to configure Git hooks path:''')
  'pre-commit'''
  'commit-msg'''
  'pre-push'''
  'post-commit'''
  'post-merge'''
  'pre-rebase'''
  'post-checkout'''
  'post-rewrite'''
  'prepare-commit-msg'''
      execSync(`chmod +x ${hookPath}``, { stdio: 'inherit''')
console.log('\n🧪 Testing Husky setup...''')
  const hooksPath = execSync('git config --get core.hooksPath', { encoding: 'utf8''')
  if (hooksPath === '.husky''')
    console.log('✅ Husky setup is correct''')
    console.log('⚠️  Git hooks path is not set to .husky''')
  console.error('❌ Failed to verify Husky setup:''')
console.log('\n🎉 Husky setup completed!''')
console.log('📝 Available hooks:'`'')