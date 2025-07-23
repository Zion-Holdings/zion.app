#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing critical automation syntax errors...\n');

// Critical automation files that need fixes
const criticalFixes = [
  {
    file: automation/continuous-improvement/start.js',
    find: "const { spawn } = require('child_process');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "const { spawn } = require('child_process');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/cursor-integration.js',
    find: "apiEndpoint: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh',","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "apiEndpoint: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh',""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/index.js',
    find: "const http = require('http');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "const http = require('http');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/ai-optimizer.js',
    find: "const http = require('http');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "const http = require('http');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/monitor.js',
    find: "level: info',","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "level: info',""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/improve.js',
    find: "const winston = require('winston');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "const winston = require('winston');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/continuous-improvement/test-system.js',
    find: "const winston = require('winston');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "const winston = require('winston');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  },
  {
    file: automation/tests/system-diagnostic.js',
    find: "require('dotenv').config();const axios = require('axios');const fs = require('fs').promises;const path = require('path');","""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    replace: "require('dotenv').config();\nconst axios = require('axios');\nconst fs = require('fs').promises;\nconst path = require('path');""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  }
];

function fixFile(filePath, findStr, replaceStr) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, utf8');
    let originalContent = content;

    if (content.includes(findStr)) {
      content = content.replace(findStr, replaceStr);
      fs.writeFileSync(filePath, content, utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Apply critical fixes
let totalFixed = 0;
for (const fix of criticalFixes) {
  if (fixFile(fix.file, fix.find, fix.replace)) {
    totalFixed++;
  }
}

console.log(`\n✅ Fixed ${totalFixed} critical files`);

// Test the main automation files
console.log('\n🔍 Testing main automation files...\n');

const mainFiles = [
  automation/index.js',
  automation/continuous-improvement/enhanced-automation.js',
  automation/continuous-improvement/start.js',
  automation/continuous-improvement/cursor-integration.js
];

for (const file of mainFiles) {
  try {
    require('child_process').execSync(`node -c ${file}`, { stdio: pipe' });
    console.log(`✅ ${file} - Syntax OK`);
  } catch (error) {
    console.log(`❌ ${file} - Syntax Error`);
  }
}

console.log('\n🚀 Critical automation files should now be ready to run!'); 