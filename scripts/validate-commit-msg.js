#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
  console.error('❌ Error: No commit message file provided'
const commitMsg = fs.readFileSync(commitMsgFile, 'utf8'
  console.error('❌ Error: Commit message cannot be empty'
  console.error('❌ Error: Commit message should be at least 10 characters long'
  console.warn('⚠️  Warning: Consider using conventional commit format'
  console.warn('   Examples: feat:, fix:, docs:, style:, refactor:, test:, chore:'
  // Don'
console.log('✅ Commit message validation passed'