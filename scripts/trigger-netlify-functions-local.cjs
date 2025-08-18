#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[local-trigger] ${msg}`); }

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

async function invokeFunctionLocally(functionName) {
  try {
    const functionPath = path.join(functionsDir, `${functionName}.js`);
    if (!fs.existsSync(functionPath)) {
      return { name: functionName, status: 0, ok: false, error: 'Function file not found' };
    }
    
    // Clear require cache to ensure fresh execution
    delete require.cache[require.resolve(functionPath)];
    
    const func = require(functionPath);
    const result = await func.handler({}, {});
    
    return { 
      name: functionName, 
      status: result.statusCode || 200, 
      ok: result.statusCode < 400,
      result: result 
    };
  } catch (err) {
    return { 
      name: functionName, 
      status: 0, 
      ok: false, 
      error: err.message 
    };
  }
}

async function invokeAll(functionNames, concurrency = 5) {
  const results = [];
  let index = 0;
  
  async function worker() {
    while (index < functionNames.length) {
      const current = functionNames[index];
      index += 1;
      log(`Invoking: ${current}`);
      const r = await invokeFunctionLocally(current);
      results.push(r);
      log(`Result: ${current} -> ${r.status}${r.ok ? ' (ok)' : ' (fail)'}${r.error ? ` ${r.error}` : ''}`);
    }
  }
  
  const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function writeTriggerArtifacts(results, functionNames) {
  const logsDir = path.join(process.cwd(), 'automation', 'logs');
  fs.mkdirSync(logsDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const summary = {
    triggeredAt: new Date().toISOString(),
    method: 'local-direct-invoke',
    totals: {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  const latestPath = path.join(logsDir, 'latest-netlify-local-trigger.json');
  const datedPath = path.join(logsDir, `netlify-local-trigger-${timestamp}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));
  const stampPath = path.join(process.cwd(), 'automation', 'netlify-local-stamp.txt');
  fs.writeFileSync(stampPath, `Triggered locally at ${new Date().toISOString()}\n`);
  return [latestPath, datedPath, stampPath];
}

function gitCommitAndPush(filesToAdd) {
  const addTargets = filesToAdd.map(f => path.relative(process.cwd(), f));
  const stamp = path.join('automation', 'netlify-local-stamp.txt');
  if (!addTargets.includes(stamp)) addTargets.push(stamp);
  
  try {
    const { execSync } = require('child_process');
    execSync(`git add ${addTargets.map(a => `'${a}'`).join(' ')}`, { stdio: 'inherit' });
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (!status) {
      log('No changes to commit. Skipping commit/push.');
      return { committed: false, pushed: false };
    }
    const msg = `chore: trigger netlify functions locally [skip ci] (${new Date().toISOString()})`;
    execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    log(`Pushing to origin ${branch}...`);
    try {
      execSync(`git push origin ${branch}`, { stdio: 'inherit' });
      return { committed: true, pushed: true, branch };
    } catch (err) {
      log(`Git push failed: ${err && err.message ? err.message : err}. Continuing without failing.`);
      return { committed: true, pushed: false, branch };
    }
  } catch (err) {
    log(`Git operations failed: ${err && err.message ? err.message : err}`);
    return { committed: false, pushed: false };
  }
}

(async function main() {
  log('Starting local Netlify functions trigger...');
  
  const scheduledFunctions = parseScheduledFunctionNamesFromToml(safeRead(tomlPath));
  const fromDir = listFunctionNamesFromDir(functionsDir);
  const functionNames = Array.from(new Set([...scheduledFunctions, ...fromDir])).sort();
  
  if (functionNames.length === 0) {
    log('No functions discovered. Exiting.');
    process.exit(0);
  }
  
  log(`Discovered ${functionNames.length} functions.`);
  const results = await invokeAll(functionNames, 3);
  
  const files = writeTriggerArtifacts(results, functionNames);
  
  try {
    const result = gitCommitAndPush(files);
    if (!result.pushed) {
      log('Git push not completed. Proceeding without failing the workflow.');
    }
  } catch (err) {
    console.error('[local-trigger] Non-fatal git commit/push error:', err && err.message ? err.message : err);
  }
  
  const summary = `\nTrigger Summary:
Total: ${results.length}
Successful: ${results.filter(r => r.ok).length}
Failed: ${results.filter(r => !r.ok).length}`;
  
  console.log(summary);
  
  if (results.filter(r => !r.ok).length > 0) {
    console.log('\nFailed functions:');
    results.filter(r => !r.ok).forEach(r => {
      console.log(`- ${r.name}: ${r.error}`);
    });
  }
  
  log('Done.');
})();