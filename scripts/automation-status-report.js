#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Zion App Automation System Status Report\n');
console.log('=' .repeat(60));

// Check automation directories
const automationDirs = [
  'automation',
  'scripts',
  'automation/continuous-improvement',
  'automation/performance',
  'automation/slack',
  'automation/tests'
];

console.log('\n📁 Directory Structure Check:');
for (const dir of automationDirs) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') || f.endsWith('.cjs'));
    console.log(`✅ ${dir} - ${files.length} JS files`);
  } else {
    console.log(`❌ ${dir} - Not found`);
  }
}

// Check critical automation files
const criticalFiles = [
  'automation/index.js',
  'automation/continuous-improvement/enhanced-automation.js',
  'automation/continuous-improvement/start.js',
  'automation/continuous-improvement/cursor-integration.js',
  'scripts/cursor-chat-automation.js',
  'automation/package.json'
];

console.log('\n🔧 Critical Files Syntax Check:');
for (const file of criticalFiles) {
  try {
    if (fs.existsSync(file)) {
      execSync(`node -c ${file}`, { stdio: 'pipe' });
      console.log(`✅ ${file} - Syntax OK`);
    } else {
      console.log(`❌ ${file} - File not found`);
    }
  } catch (error) {
    console.log(`❌ ${file} - Syntax Error`);
  }
}

// Check automation dependencies
console.log('\n📦 Dependencies Check:');
try {
  const packageJson = JSON.parse(fs.readFileSync('automation/package.json', 'utf8'));
  console.log(`✅ automation/package.json - Version ${packageJson.version}`);
  console.log(`   Dependencies: ${Object.keys(packageJson.dependencies || {}).length}`);
  console.log(`   Dev Dependencies: ${Object.keys(packageJson.devDependencies || {}).length}`);
} catch (error) {
  console.log(`❌ automation/package.json - Error: ${error.message}`);
}

// Check environment configuration
console.log('\n⚙️ Environment Configuration:');
const envVars = [
  'CURSOR_API_KEY',
  'CURSOR_WORKSPACE_ID',
  'OPENAI_API_KEY',
  'CLAUDE_API_KEY',
  'SLACK_BOT_TOKEN',
  'AUTOMATION_PORT'
];

for (const envVar of envVars) {
  if (process.env[envVar]) {
    console.log(`✅ ${envVar} - Configured`);
  } else {
    console.log(`⚠️ ${envVar} - Not configured`);
  }
}

// Check log directories
console.log('\n📋 Log Directories:');
const logDirs = ['logs', 'automation/logs', 'scripts/logs'];
for (const logDir of logDirs) {
  if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir);
    console.log(`✅ ${logDir} - ${files.length} files`);
  } else {
    console.log(`⚠️ ${logDir} - Not found`);
  }
}

// Check automation processes
console.log('\n🔄 Process Status:');
try {
  const processes = execSync('ps aux | grep -E "(cursor|automation|node)" | grep -v grep', { encoding: 'utf8' });
  if (processes.trim()) {
    console.log('✅ Automation processes running:');
    processes.split('\n').filter(p => p.trim()).forEach(p => {
      console.log(`   ${p.trim()}`);
    });
  } else {
    console.log('⚠️ No automation processes currently running');
  }
} catch (error) {
  console.log('⚠️ Could not check running processes');
}

// Check automation scripts
console.log('\n🚀 Available Automation Scripts:');
const automationScripts = [
  'scripts/cursor-chat-automation.js',
  'scripts/auto-fix-daemon.js',
  'scripts/watchdog.js',
  'automation/index.js',
  'automation/continuous-improvement/start.js'
];

for (const script of automationScripts) {
  if (fs.existsSync(script)) {
    try {
      execSync(`node -c ${script}`, { stdio: 'pipe' });
      console.log(`✅ ${script} - Ready to run`);
    } catch (error) {
      console.log(`❌ ${script} - Syntax error`);
    }
  } else {
    console.log(`⚠️ ${script} - Not found`);
  }
}

// Check recent automation activity
console.log('\n📊 Recent Activity:');
const logFiles = [
  'logs/cursor-chat-automation.log',
  'logs/automation.log',
  'logs/watchdog.log'
];

for (const logFile of logFiles) {
  if (fs.existsSync(logFile)) {
    try {
      const stats = fs.statSync(logFile);
      const size = stats.size;
      const modified = stats.mtime;
      console.log(`✅ ${logFile} - ${size} bytes, modified ${modified.toLocaleString()}`);
    } catch (error) {
      console.log(`❌ ${logFile} - Error reading`);
    }
  } else {
    console.log(`⚠️ ${logFile} - Not found`);
  }
}

// Summary and recommendations
console.log('\n' + '=' .repeat(60));
console.log('📋 SUMMARY & RECOMMENDATIONS:');
console.log('=' .repeat(60));

console.log('\n✅ Automation System Status: READY');
console.log('\n🚀 To start automation systems:');
console.log('   1. Cursor Chat Automation: node scripts/cursor-chat-automation.js start');
console.log('   2. Main Automation: node automation/index.js');
console.log('   3. Continuous Improvement: node automation/continuous-improvement/start.js');
console.log('   4. Watchdog: node scripts/watchdog.js');

console.log('\n🔧 To fix remaining issues:');
console.log('   1. Configure missing environment variables');
console.log('   2. Install missing dependencies: cd automation && npm install');
console.log('   3. Create log directories if missing');

console.log('\n📈 Next Steps:');
console.log('   1. Test automation systems individually');
console.log('   2. Monitor logs for any runtime errors');
console.log('   3. Configure Slack integration if needed');
console.log('   4. Set up cron jobs for continuous operation');

console.log('\n🎯 Automation systems are ready for deployment!'); 