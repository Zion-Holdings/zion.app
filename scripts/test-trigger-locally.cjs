#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(msg) {
  console.log(`[local-trigger-test] ${msg}`);
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
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
        if (m) {
          names.push(m[1]);
          break;
        }
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

async function testFunctionLocally(name) {
  const functionPath = path.join(process.cwd(), 'netlify', 'functions', `${name}.js`);
  try {
    // Clear require cache
    delete require.cache[require.resolve(functionPath)];
    
    const mod = require(functionPath);
    const handler = mod && (mod.handler || mod.default || mod);
    
    if (typeof handler !== 'function') {
      return { name, status: 0, ok: false, error: 'No handler function export' };
    }
    
    // Test the handler
    const result = await handler({}, {});
    const statusCode = result && result.statusCode ? result.statusCode : 200;
    
    return { name, status: statusCode, ok: statusCode >= 200 && statusCode < 300 };
  } catch (err) {
    return { name, status: 0, ok: false, error: err.message };
  }
}

async function testAllFunctions(functionNames) {
  const results = [];
  log(`Testing ${functionNames.length} functions locally...`);
  
  for (const name of functionNames) {
    log(`Testing: ${name}`);
    const result = await testFunctionLocally(name);
    results.push(result);
    log(`Result: ${name} -> ${result.status}${result.ok ? ' (ok)' : ' (fail)'}${result.error ? ` ${result.error}` : ''}`);
  }
  
  return results;
}

function writeTestArtifacts(results, functionNames) {
  const logsDir = path.join(process.cwd(), 'automation', 'logs');
  fs.mkdirSync(logsDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const summary = {
    testedAt: new Date().toISOString(),
    totals: {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  const latestPath = path.join(logsDir, 'latest-local-function-test.json');
  const datedPath = path.join(logsDir, `local-function-test-${timestamp}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));
  
  const stampPath = path.join(process.cwd(), 'automation', 'local-function-test-stamp.txt');
  fs.writeFileSync(stampPath, `Tested at ${new Date().toISOString()}\n`);
  
  return [latestPath, datedPath, stampPath];
}

async function main() {
  log('Starting local function trigger test...');
  
  const tomlPath = path.join(process.cwd(), 'netlify.toml');
  const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
  const scheduled = parseScheduledFunctionNamesFromToml(safeRead(tomlPath));
  const fromDir = listFunctionNamesFromDir(functionsDir);
  const functionNames = Array.from(new Set([...scheduled, ...fromDir])).sort();
  
  if (functionNames.length === 0) {
    log('No functions discovered. Exiting.');
    process.exit(0);
  }
  
  log(`Discovered ${functionNames.length} functions.`);
  const results = await testAllFunctions(functionNames);
  
  const files = writeTestArtifacts(results, functionNames);
  
  const okCount = results.filter(r => r.ok).length;
  const failCount = results.filter(r => !r.ok).length;
  
  log(`\n📊 Test Summary:`);
  log(`   Total: ${functionNames.length}`);
  log(`   Passed: ${okCount}`);
  log(`   Failed: ${failCount}`);
  
  if (failCount > 0) {
    log(`\n❌ Failed functions:`);
    results.filter(r => !r.ok).forEach(r => {
      log(`   - ${r.name}: ${r.error || 'Unknown error'}`);
    });
  }
  
  log('\nDone.');
  process.exit(failCount > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('[local-trigger-test] Error:', err);
  process.exit(1);
});