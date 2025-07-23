#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining automation syntax errors...\n');

// Specific files that need manual fixes
const specificFixes = [
  {
    file: automation/continuous-improvement/start.js',
    patterns: [
      {
        pattern: /const { spawn } = require\('child_process'\);/g,
        replacement: "const { spawn } = require('child_process');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/cursor-integration.js',
    patterns: [
      {
        pattern: /apiEndpoint: process\.env\.CURSOR_API_ENDPOINT \|\| https:\/\/api\.cursor\.sh',/g,
        replacement: "apiEndpoint: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh',"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/index.js',
    patterns: [
      {
        pattern: /const http = require\('http'\);/g,
        replacement: "const http = require('http');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/ai-optimizer.js',
    patterns: [
      {
        pattern: /const http = require\('http'\);/g,
        replacement: "const http = require('http');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/monitor.js',
    patterns: [
      {
        pattern: /level: info',/g,
        replacement: "level: info',"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/improve.js',
    patterns: [
      {
        pattern: /const winston = require\('winston'\);/g,
        replacement: "const winston = require('winston');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/continuous-improvement/test-system.js',
    patterns: [
      {
        pattern: /const winston = require\('winston'\);/g,
        replacement: "const winston = require('winston');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: automation/tests/system-diagnostic.js',
    patterns: [
      {
        pattern: /require\('dotenv'\)\.config\(\);const axios = require\('axios'\);const fs = require\('fs'\)\.promises;const path = require\('path'\);/g,
        replacement: "require('dotenv').config();\nconst axios = require('axios');\nconst fs = require('fs').promises;\nconst path = require('path');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  }
];

// Scripts that need fixes
const scriptFixes = [
  {
    file: scripts/__mocks__/tail.js',
    patterns: [
      {
        pattern: /if \(this\.eventCallbacks && this\.eventCallbacks\['line'\]\) {      this\.eventCallbacks\['line'\]\.forEach\(cb => cb\(data\)\);/g,
        replacement: "if (this.eventCallbacks && this.eventCallbacks['line']) {\n      this.eventCallbacks['line'].forEach(cb => cb(data));\n    }"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/security-headers.js',
    patterns: [
      {
        pattern: /key: X-DNS-Prefetch-Control',    value: on'  },/g,
        replacement: "key: X-DNS-Prefetch-Control',\n    value: on'\n  },"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/update-icon-imports.js',
    patterns: [
      {
        pattern: /\/import\\s\+{\([^}]*\)}\\s\+from\\s\+\[\\"\]lucide-react\[\\"\]/g,"      import {$1} from "@/components/icons";    \);/g,
        replacement: "/import\\s+{([^}]*)}\\s+from\\s+['\"]lucide-react['\"]/g,\n      import {$1} from \"@/components/icons\"'\n    );"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/post-build-healer.js',
    patterns: [
      {
        pattern: /this\.logFile = logs\/post-build-healer\.log';    this\.ensureLogDirectory\(\);/g,
        replacement: "this.logFile = logs/post-build-healer.log';\n    this.ensureLogDirectory();"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/check_coverage_and_notify.js',
    patterns: [
      {
        pattern: /const fs = require\('fs'\);const { execSync } = require\('child_process'\)/g,
        replacement: "const fs = require('fs');\nconst { execSync } = require('child_process')"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/auto-lint-fix.js',
    patterns: [
      {
        pattern: /const GIT_BRANCH_NAME = auto\/fix-hourly';const GIT_USER_NAME = process\.env\.GIT_AUTHOR_NAME \|\| GitHub Actions Bot';const GIT_USER_EMAIL = process\.env\.GIT_AUTHOR_EMAIL \|\| actions-bot@users\.noreply\.github\.com'; \/\/ Replace with a suitable bot email'/g,
        replacement: "const GIT_BRANCH_NAME = auto/fix-hourly';\nconst GIT_USER_NAME = process.env.GIT_AUTHOR_NAME || GitHub Actions Bot';\nconst GIT_USER_EMAIL = process.env.GIT_AUTHOR_EMAIL || actions-bot@users.noreply.github.com'; // Replace with a suitable bot email"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/link-checker/index.js',
    patterns: [
      {
        pattern: /sourceType: module',      plugins: \['jsx', typescript'\],      errorRecovery: true/g,
        replacement: "sourceType: module',\n      plugins: ['jsx', typescript'],\n      errorRecovery: true"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/debug-login.js',
    patterns: [
      {
        pattern: /const isDevMode = process\.env\.NODE_ENV === development';    console\.warn\('📋 Environment mode:', process\.env\.NODE_ENV \|\| undefined'\);    console\.warn\('📋 Development mode:', isDevMode\);/g,
        replacement: "const isDevMode = process.env.NODE_ENV === development';\n    console.warn('📋 Environment mode:', process.env.NODE_ENV || undefined');\n    console.warn('📋 Development mode:', isDevMode);"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/heal-and-deploy.js',
    patterns: [
      {
        pattern: /this\.logFile = logs\/heal-and-deploy\.log';    this\.ensureLogDirectory\(\);/g,
        replacement: "this.logFile = logs/heal-and-deploy.log';\n    this.ensureLogDirectory();"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/watchdog.test.js',
    patterns: [
      {
        pattern: /} = require\('\.\/watchdog'\);/g,
        replacement: "} = require('./watchdog');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/verify-production.js',
    patterns: [
      {
        pattern: /const BASE_URL = process\.env\.NEXT_PUBLIC_APP_URL \|\| http:\/\/localhost:3000';/g,
        replacement: "const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || http://localhost:3000';"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/test-api-performance.js',
    patterns: [
      {
        pattern: /const https = require\('http'\);const { performance: _performance } = require\('perf_hooks'\)/g,
        replacement: "const https = require('http');\nconst { performance: _performance } = require('perf_hooks')"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/verify-staging.js',
    patterns: [
      {
        pattern: /const https = require\('https'\);const http = require\('http'\)/g,
        replacement: "const https = require('https');\nconst http = require('http')"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/test-root-path.js',
    patterns: [
      {
        pattern: /const http = require\('http'\);const https = require\('https'\)/g,
        replacement: "const http = require('http');\nconst https = require('https')"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/test-login-trace.js',
    patterns: [
      {
        pattern: /const BASE_URL = _http:\/\/localhost:3000';/g,
        replacement: "const BASE_URL = http://localhost:3000';"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/maintenance/generate-tests.js',
    patterns: [
      {
        pattern: /const _path = require\('path'\);/g,
        replacement: "const _path = require('path');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/perf/monitor.js',
    patterns: [
      {
        pattern: /const _path = require\('path'\);const { _exec } = require\('child_process'\)/g,
        replacement: "const _path = require('path');\nconst { _exec } = require('child_process')"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/codexWebhookServer.js',
    patterns: [
      {
        pattern: /app\.post\('\/webhook\/trigger-fix', \(req, res\) => {'  console\.warn\('🔁 Webhook received! Starting Codex fix pipeline\.\.\.'\);/g,
        replacement: "app.post('/webhook/trigger-fix', (req, res) => {\n  console.warn('🔁 Webhook received! Starting Codex fix pipeline...');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/check-coverage-threshold.js',
    patterns: [
      {
        pattern: /const coverageSummaryPath = path\.join\(process\.cwd\(\), logs', coverage', hourly', coverage-summary\.json'\);const coverageThreshold = 80; \/\/ Minimum percentage/g,
        replacement: "const coverageSummaryPath = path.join(process.cwd(), logs', coverage', hourly', coverage-summary.json');\nconst coverageThreshold = 80; // Minimum percentage"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  },
  {
    file: scripts/continuous-healing.js',
    patterns: [
      {
        pattern: /const AutoFixSystem = require\('\.\/auto-fix-errors'\);/g,
        replacement: "const AutoFixSystem = require('./auto-fix-errors');"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }
    ]
  }
];

function fixFile(filePath, patterns) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, utf8');
    let originalContent = content;
    let fixed = false;

    for (const { pattern, replacement } of patterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Apply specific fixes
let totalFixed = 0;

console.log('🔧 Fixing automation files...');
for (const fix of specificFixes) {
  if (fixFile(fix.file, fix.patterns)) {
    totalFixed++;
  }
}

console.log('\n🔧 Fixing script files...');
for (const fix of scriptFixes) {
  if (fixFile(fix.file, fix.patterns)) {
    totalFixed++;
  }
}

console.log(`\n✅ Fixed ${totalFixed} files`);

// Check for remaining syntax errors
console.log('\n🔍 Checking for remaining syntax errors...\n');

const { execSync } = require('child_process');

try {
  // Check automation directory
  const automationResult = execSync('find automation -name "*.js" -not -path "*/node_modules/*" -exec node -c {} \\; 2>&1', { encoding: utf8' });
  if (automationResult.trim()) {
    console.log('⚠️  Remaining errors in automation:');
    console.log(automationResult);
  } else {
    console.log('✅ No remaining syntax errors in automation files');
  }
} catch (error) {
  console.log('⚠️  Remaining errors in automation:');
  console.log(error.stdout || error.message);
}

try {
  // Check scripts directory
  const scriptsResult = execSync('find scripts -name "*.js" -exec node -c {} \\; 2>&1', { encoding: utf8' });
  if (scriptsResult.trim()) {
    console.log('\n⚠️  Remaining errors in scripts:');
    console.log(scriptsResult);
  } else {
    console.log('\n✅ No remaining syntax errors in script files');
  }
} catch (error) {
  console.log('\n⚠️  Remaining errors in scripts:');
  console.log(error.stdout || error.message);
}

console.log('\n🚀 Automation system should now be ready to run!'); 