#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const { performance } = require('perf_hooks');

const FUNCTIONS_DIR = path.resolve(__dirname, '..', 'netlify', 'functions');

function listFunctionFiles() {
  return fs
    .readdirSync(FUNCTIONS_DIR)
    .filter((f) => f.endsWith('.js'))
    .map((f) => ({ name: f.replace(/\.js$/, ''), file: f, abs: path.join(FUNCTIONS_DIR, f) }));
}

function loadHandler(absPath) {
  try {
    const mod = require(absPath);
    const handler = (mod && mod.handler) || (typeof mod === 'function' ? mod : undefined);
    if (typeof handler === 'function') return { ok: true, handler };
    return { ok: false, error: 'missing handler export' };
  } catch (e) {
    return { ok: false, error: `load error: ${e.message}` };
  }
}

async function runAll({ execute = false, timeoutMs = 60000 }) {
  const files = listFunctionFiles();
  const results = [];
  for (const f of files) {
    const start = performance.now();
    const loaded = loadHandler(f.abs);
    if (!loaded.ok) {
      results.push({ name: f.name, file: f.file, ok: false, error: loaded.error, ms: Math.round(performance.now() - start) });
      continue;
    }
    if (!execute) {
      results.push({ name: f.name, file: f.file, ok: true, checked: true, ms: Math.round(performance.now() - start) });
      continue;
    }
    // Execute handler
    let timer;
    try {
      const maybe = loaded.handler({ source: 'local-runner' }, { awsRequestId: 'local' }, () => {});
      const promise = maybe && typeof maybe.then === 'function' ? maybe : Promise.resolve(maybe);
      const timeout = new Promise((_, rej) => (timer = setTimeout(() => rej(new Error('timeout')), timeoutMs)));
      const res = await Promise.race([promise, timeout]);
      clearTimeout(timer);
      results.push({ name: f.name, file: f.file, ok: true, executed: true, ms: Math.round(performance.now() - start), statusCode: res && res.statusCode });
    } catch (e) {
      clearTimeout(timer);
      results.push({ name: f.name, file: f.file, ok: false, executed: true, error: e && e.message ? e.message : String(e), ms: Math.round(performance.now() - start) });
    }
  }
  return results;
}

function format(results) {
  const lines = [];
  const ok = results.filter((r) => r.ok).length;
  const bad = results.length - ok;
  lines.push(`total=${results.length} ok=${ok} failed=${bad}`);
  for (const r of results) {
    if (r.ok) {
      lines.push(`[OK] ${r.name} (${r.ms}ms)${r.executed ? ` status=${r.statusCode ?? ''}` : ' [checked]'}`);
    } else {
      lines.push(`[FAIL] ${r.name} (${r.ms}ms) -> ${r.error}`);
    }
  }
  return lines.join(os.EOL);
}

async function main() {
  const argv = process.argv.slice(2);
  const execute = argv.includes('--execute') || argv.includes('-x');
  const timeoutFlag = argv.find((a) => a.startsWith('--timeout='));
  const timeoutMs = timeoutFlag ? Number(timeoutFlag.split('=')[1]) || 60000 : 60000;
  const results = await runAll({ execute, timeoutMs });
  console.log(format(results));
  process.exit(results.some((r) => !r.ok) ? 1 : 0);
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}