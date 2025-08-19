#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');
const LOGS_DIR = path.join(process.cwd(), 'automation', 'logs');
const TIMEOUT_MS = Number(process.env.NETLIFY_FUNCTION_TEST_TIMEOUT_MS || 15000);
const CONCURRENCY = Number(process.env.NETLIFY_FUNCTION_TEST_CONCURRENCY || 4);

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function listFunctions(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter(e => e.isFile())
    .map(e => e.name)
    .filter(n => /\.(js|ts)$/.test(n))
    // Prefer .js when both exist
    .sort((a, b) => a.localeCompare(b));
  // Deduplicate by base name, preferring .js
  const byBase = new Map();
  for (const f of files) {
    const base = f.replace(/\.(js|ts)$/i, '');
    const ext = path.extname(f);
    if (!byBase.has(base) || ext === '.js') byBase.set(base, f);
  }
  return Array.from(byBase.values()).map(f => path.join(FUNCTIONS_DIR, f));
}

function createChildProcessMocks() {
  const child = require('child_process');
  const original = {
    exec: child.exec,
    execSync: child.execSync,
    spawn: child.spawn,
    spawnSync: child.spawnSync,
  };
  child.exec = (cmd, opts, cb) => {
    console.log(`[MOCK exec] ${cmd}`);
    const fake = {
      pid: Math.floor(10000 + Math.random() * 90000),
      stdout: { on: () => {} },
      stderr: { on: () => {} },
      on: (ev, fn) => { if (ev === 'close' || ev === 'exit') setImmediate(() => fn(0)); },
      kill: () => true,
    };
    if (typeof opts === 'function') cb = opts;
    if (cb) setImmediate(() => cb(null, '', ''));
    return fake;
  };
  child.execSync = (cmd, opts) => {
    console.log(`[MOCK execSync] ${cmd}`);
    return Buffer.from('');
  };
  child.spawn = (cmd, args, opts) => {
    console.log(`[MOCK spawn] ${cmd} ${(args || []).join(' ')}`);
    return {
      pid: Math.floor(10000 + Math.random() * 90000),
      stdout: { on: () => {} },
      stderr: { on: () => {} },
      on: () => {},
      kill: () => true,
    };
  };
  child.spawnSync = (cmd, args, opts) => {
    console.log(`[MOCK spawnSync] ${cmd} ${(args || []).join(' ')}`);
    return { pid: Math.floor(10000 + Math.random() * 90000), status: 0, stdout: '', stderr: '' };
  };
  return () => {
    child.exec = original.exec;
    child.execSync = original.execSync;
    child.spawn = original.spawn;
    child.spawnSync = original.spawnSync;
  };
}

async function callHandler(modPath) {
  const start = Date.now();
  let timedOut = false;
  const timeout = new Promise((resolve) => setTimeout(() => { timedOut = true; resolve({ ok: false, statusCode: 0, error: `timeout after ${TIMEOUT_MS}ms` }); }, TIMEOUT_MS));

  const run = (async () => {
    // Clear require cache to isolate between functions
    delete require.cache[require.resolve(modPath)];

    // Mock child_process globally before requiring the module
    const restore = createChildProcessMocks();
    try {
      const mod = require(modPath);
      const handler = mod && (mod.handler || mod.default || mod);
      if (typeof handler !== 'function') {
        return { ok: false, statusCode: 0, error: 'No handler function export' };
      }
      const res = await handler({}, {});
      const durationMs = Date.now() - start;
      return {
        ok: true,
        statusCode: res && res.statusCode ? res.statusCode : 200,
        result: res,
        durationMs,
      };
    } catch (err) {
      const durationMs = Date.now() - start;
      return { ok: false, statusCode: 0, error: String(err && err.stack || err), durationMs };
    } finally {
      restore();
    }
  })();

  const out = await Promise.race([run, timeout]);
  if (timedOut) out.timedOut = true;
  out.durationMs = out.durationMs || (Date.now() - start);
  return out;
}

async function runAll() {
  ensureDir(LOGS_DIR);
  const modPaths = listFunctions(FUNCTIONS_DIR);
  const results = [];

  let index = 0;
  async function worker() {
    while (index < modPaths.length) {
      const current = modPaths[index++];
      const name = path.basename(current);
      process.stdout.write(`\n[TEST] ${name} ... `);
      const res = await callHandler(current);
      results.push({ name, ...res });
      process.stdout.write(`${res.ok ? 'OK' : 'FAIL'} (${res.durationMs}ms)\n`);
    }
  }
  const workers = Array.from({ length: Math.min(CONCURRENCY, modPaths.length) }, () => worker());
  await Promise.all(workers);

  const summary = {
    timestamp: new Date().toISOString(),
    functionsDir: FUNCTIONS_DIR,
    totals: {
      count: results.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };

  const latestPath = path.join(LOGS_DIR, 'latest-netlify-functions-test.json');
  const datedPath = path.join(LOGS_DIR, `netlify-functions-test-${Date.now()}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));

  const failed = summary.totals.failed;
  console.log(`\nCompleted. ${summary.totals.ok}/${summary.totals.count} passed. Failures: ${failed}`);
  process.exitCode = failed ? 1 : 0;
}

runAll().catch(err => {
  console.error(err);
  process.exit(1);
});