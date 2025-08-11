#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// use built-in fetch in Node 18+
const { setTimeout: sleep } = require('timers/promises');

function log(msg) {
  console.log(`[netlify-trigger] ${msg}`);
}

function getArgValue(flag, defaultValue = undefined) {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && idx + 1 < process.argv.length) return process.argv[idx + 1];
  return defaultValue;
}

const isDryRun = process.argv.includes('--dry-run');
const concurrency = parseInt(getArgValue('--concurrency', '5'), 10) || 5;
const requestTimeoutMs = parseInt(getArgValue('--timeout', '15000'), 10) || 15000;

// Resolve base URL priority: CLI flag > NETLIFY_BASE_URL > SITE_URL > URL > DEPLOY_PRIME_URL > localhost:8888
const baseUrl = (
  getArgValue('--base-url') ||
  process.env.NETLIFY_BASE_URL ||
  process.env.SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'http://localhost:8888'
).replace(/\/$/, '');

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
  // Very simple scan: find lines `[[scheduled.functions]]` and subsequent `name = "..."`
  const lines = tomlContent.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === '[[scheduled.functions]]') {
      // Look ahead a few lines for name = "..."
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
    // Netlify uses file stem as function name
    names.add(base);
  }
  return Array.from(names);
}

async function invokeFunction(name) {
  const controller = new AbortController();
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    return { name, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timeout);
    return { name, status: 0, ok: false, error: err.message };
  }
}

async function invokeAll(functionNames) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < functionNames.length) {
      const current = functionNames[index];
      index += 1;
      log(`Invoking: ${current}`);
      const r = await invokeFunction(current);
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
    baseUrl,
    totals: {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  const latestPath = path.join(logsDir, 'latest-netlify-build-trigger.json');
  const datedPath = path.join(logsDir, `netlify-build-trigger-${timestamp}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));
  // Also touch a simple timestamp file to ensure diff-friendly change
  const stampPath = path.join(process.cwd(), 'automation', 'netlify-build-stamp.txt');
  fs.writeFileSync(stampPath, `Triggered at ${new Date().toISOString()}\n`);
  return [latestPath, datedPath, stampPath];
}

function gitCommitAndPush(filesToAdd) {
  const addTargets = filesToAdd.map(f => path.relative(process.cwd(), f));
  // Always include stamp file in case logs are ignored differently
  const stamp = path.join('automation', 'netlify-build-stamp.txt');
  if (!addTargets.includes(stamp)) addTargets.push(stamp);
  execSync(`git add ${addTargets.map(a => `'${a}'`).join(' ')}`, { stdio: 'inherit' });
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (!status) {
    log('No changes to commit. Skipping commit/push.');
    return { committed: false, pushed: false };
  }
  const msg = `chore: trigger netlify automations and build [skip ci] (${new Date().toISOString()})`;
  execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });
  const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  log(`Pushing to origin ${branch}...`);
  execSync(`git push origin ${branch}`, { stdio: 'inherit' });
  return { committed: true, pushed: true, branch };
}

(async function main() {
  log(`Base URL: ${baseUrl}`);
  if (isDryRun) log('Running in DRY RUN mode (no HTTP calls, no git push).');

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
  let results = [];
  if (!isDryRun) {
    results = await invokeAll(functionNames);
  } else {
    functionNames.forEach((n) => log(`Would invoke: ${n}`));
  }

  const files = writeTriggerArtifacts(results, functionNames);

  // Always commit the stamp/logs even in dry-run so scheduled workflows can sync
  try {
    gitCommitAndPush(files);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }

  log('Done.');
})();