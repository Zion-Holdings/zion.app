#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the commit message file path
const commitMsgFile = process.argv[2];

if (!commitMsgFile) {
  console.error('❌ Error: No commit message file provided');
  process.exit(1);
}

// Read the commit message
const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();

// Check if commit message is not empty
if (!commitMsg) {
  console.error('❌ Error: Commit message cannot be empty');
  process.exit(1);
}

// Check if commit message is too short
if (commitMsg.length < 10) {
  console.error('❌ Error: Commit message should be at least 10 characters long');
  process.exit(1);
}

// Check for conventional commit format
const conventionalCommitRegex = /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?:/;
if (!conventionalCommitRegex.test(commitMsg)) {
  console.warn('⚠️  Warning: Consider using conventional commit format');
  console.warn('   Examples: feat:, fix:, docs:, style:, refactor:, test:, chore:');
  // Don't exit with error, just warn
}

console.log('✅ Commit message validation passed');
