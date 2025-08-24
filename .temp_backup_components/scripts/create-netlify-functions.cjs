#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[create-functions] ${msg}`); }

const workspace = process.cwd();
const functionsDir = path.join(workspace, 'netlify', 'functions');
const tomlPath = path.join(workspace, 'netlify.toml');

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function parseScheduledFunctionNamesFromToml(tomlContent) {
  if (!tomlContent) return [];
  const names = [];
  const lines = tomlContent.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === '[[scheduled.functions]]') {
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
        const m = lines[j].match(/name\s*=\s*"([^"]+)"/);
        if (m) { names.push(m[1]); break; }
      }
    }
  }
  return names;
}

function generateFunctionCode(functionName) {
  return `const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log('🤖 Starting ${functionName}...');
  
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), '${functionName}-report.md');
    
    const reportContent = \`# ${functionName} Report

Generated: \${timestamp}

## Status
- Task: ${functionName}
- Status: Completed
- Timestamp: \${timestamp}

## Next Steps
- Implement actual ${functionName} functionality
- Add proper error handling
- Add logging and monitoring
\`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add ${functionName} report [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Report committed and pushed');
    } catch (gitError) {
      console.log('Git error:', gitError.message);
    }
    
    console.log('✅ ${functionName} completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: '${functionName} completed successfully',
        timestamp: timestamp
      })
    };
    
  } catch (error) {
    console.error('❌ ${functionName} failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};
`;
}

function createFunctionFile(functionName) {
  const functionPath = path.join(functionsDir, `${functionName}.js`);
  
  // Check if function already exists
  if (fs.existsSync(functionPath)) {
    log(`Function ${functionName} already exists, skipping`);
    return false;
  }
  
  const functionCode = generateFunctionCode(functionName);
  fs.writeFileSync(functionPath, functionCode);
  log(`Created function: ${functionName}`);
  return true;
}

function main() {
  log('Starting Netlify functions creation...');
  
  // Ensure functions directory exists
  if (!fs.existsSync(functionsDir)) {
    fs.mkdirSync(functionsDir, { recursive: true });
    log('Created functions directory');
  }
  
  const scheduledFunctions = parseScheduledFunctionNamesFromToml(safeRead(tomlPath));
  log(`Found ${scheduledFunctions.length} scheduled functions in netlify.toml`);
  
  let created = 0;
  for (const functionName of scheduledFunctions) {
    if (createFunctionFile(functionName)) {
      created++;
    }
  }
  
  log(`Created ${created} new functions`);
  log('Done!');
}

main();