#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[test-trigger] ${msg}`); }

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

function listFunctionNamesFromDir(functionsDir) {
  let entries = [];
  try {
    entries = fs.readdirSync(functionsDir, { withFileTypes: true });
  } catch {
    return [];
  }
  const exts = new Set(['.js', '.ts', '.mjs', '.cjs']);
  const names = new Set();
  for (const e of entries) {
    if (e.isDirectory()) continue;
    const ext = path.extname(e.name);
    if (!exts.has(ext)) continue;
    const base = path.basename(e.name, ext);
    names.add(base);
  }
  return Array.from(names);
}

function testFunctionLocally(functionName) {
  const functionPath = path.join(functionsDir, `${functionName}.js`);
  
  if (!fs.existsSync(functionPath)) {
    return { name: functionName, status: 'missing', ok: false, error: 'Function file not found' };
  }
  
  try {
    // Test that the function can be required and has the right structure
    delete require.cache[require.resolve(functionPath)];
    const mod = require(functionPath);
    
    if (!mod.handler) {
      return { name: functionName, status: 'invalid', ok: false, error: 'No handler function export' };
    }
    
    if (typeof mod.handler !== 'function') {
      return { name: functionName, status: 'invalid', ok: false, error: 'Handler is not a function' };
    }
    
    return { name: functionName, status: 'valid', ok: true };
    
  } catch (err) {
    return { name: functionName, status: 'error', ok: false, error: err.message };
  }
}

async function testAllFunctions() {
  log('Starting Netlify functions trigger test...');
  
  const scheduled = parseScheduledFunctionNamesFromToml(safeRead(tomlPath));
  const fromDir = listFunctionNamesFromDir(functionsDir);
  const functionNames = Array.from(new Set([...scheduled, ...fromDir])).sort();
  
  log(`Discovered ${functionNames.length} functions.`);
  
  const results = [];
  for (const functionName of functionNames) {
    log(`Testing function: ${functionName}`);
    const result = testFunctionLocally(functionName);
    results.push(result);
    
    if (result.ok) {
      log(`✅ ${functionName}: ${result.status}`);
    } else {
      log(`❌ ${functionName}: ${result.status} - ${result.error}`);
    }
  }
  
  const summary = {
    timestamp: new Date().toISOString(),
    totals: {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  
  log(`\nTest completed. ${summary.totals.ok}/${summary.totals.attempted} functions are valid.`);
  
  if (summary.totals.failed > 0) {
    log('\nFailed functions:');
    results.filter(r => !r.ok).forEach(r => {
      log(`  - ${r.name}: ${r.error}`);
    });
  }
  
  return summary;
}

testAllFunctions().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});