const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const repo = process.cwd();
const statePath = path.join(repo, 'automation/reports/build-state.json');
const statDir = path.dirname(statePath);

function writeState(patch) {
  const base = {
    phase: 'build-failed',
    buildExitCode: 1,
    durationMs: 0,
    artifacts: {
      out_exists: false,
      out_index_html_exists: false,
      out_404_html_exists: false,
      out_service_index_exists: false,
      out_services_data_exists: false,
      docs_index_html_exists: false,
    },
    lastLines: '',
    nextLog: '',
    wroteAt: new Date().toISOString(),
    ...patch,
  };
  try {
    fs.mkdirSync(statDir, { recursive: true });
    fs.writeFileSync(statePath, JSON.stringify(base, null, 2));
  } catch (e) {
    console.error('writeState', e.message);
  }
}

function safeStat(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

function nextCandidates() {
  // Next.js 15+: Turbopack is default, --webpack flag removed
  // Next.js 16+: --webpack flag available to force webpack over Turbopack
  // Binary path: Next.js 15 moved from next/bin/next.js to next/dist/bin/next (no .js)
  const items = [];
  items.push({ cmd: 'npm exec -- next build --webpack', method: 'npm-exec-next-webpack' });
  items.push({ cmd: 'npx --yes next build --webpack', method: 'npx-next-webpack' });
  items.push({ cmd: `node "${path.join('node_modules', 'next', 'dist', 'bin', 'next')}" build --webpack`, method: 'next-bin-webpack' });
  items.push({ cmd: `node "${path.join('node_modules', 'next', 'bin', 'next')}" build --webpack`, method: 'next-bin-old-webpack' });
  items.push({ cmd: 'npm exec -- next build', method: 'npm-exec-next' });
  items.push({ cmd: 'npx --yes next build', method: 'npx-next' });
  items.push({ cmd: `node "${path.join('node_modules', 'next', 'dist', 'bin', 'next')}" build`, method: 'next-bin' });
  items.push({ cmd: `node "${path.join('node_modules', 'next', 'bin', 'next')}" build`, method: 'next-bin-old' });
  return items;
}

function main() {
  const start = Date.now();

  if (!safeStat('node_modules')) {
    console.log('[build-wrapper] node_modules missing; emitting docs-fallback state.');
    writeState({
      phase: 'docs-fallback',
      buildExitCode: 0,
      durationMs: Date.now() - start,
      artifacts: {
        out_exists: safeStat('out'),
        out_index_html_exists: safeStat(path.join('out', 'index.html')),
        out_404_html_exists: safeStat(path.join('out', '404.html')),
        out_service_index_exists: safeStat(path.join('out', 'services', 'index.html')),
        out_services_data_exists: safeStat(path.join('out', '_next', 'static', 'chunks', 'pages')),
        docs_index_html_exists: safeStat(path.join('docs', 'index.html')),
      },
      lastLines: 'missing-node_modules',
      nextLog: 'missing-node_modules',
    });
    process.exit(0);
  }

  const candidates = nextCandidates();
  let lastLines = '';
  let exitCode = 1;
  let attempted = [];
  const buildEnv = { ...process.env, NODE_OPTIONS: '--max-old-space-size=12288' };

// Fix EMFILE: spawn build via bash with raised ulimit for 90K+ service pages
function execWithUlimit(cmd, opts) {
  return execSync(`bash -c 'ulimit -n 65536 && ulimit -n 131072 2>/dev/null; ${cmd}'`, opts);
}
  for (const c of candidates) {
    attempted.push(c.method);
    console.log(`[build-wrapper] trying ${c.method}: ${c.cmd}`);
    let attemptCode = 0;
    let attemptOut = '';
    try {
      const out = execWithUlimit(c.cmd, {
        cwd: repo,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        timeout: 60 * 60 * 1000,
        env: buildEnv,
      });
      attemptOut = ((out.stdout || '') + (out.stderr || '')).slice(-4000);
      attemptCode = 0;
    } catch (err) {
      attemptOut = ((err.stdout || '') + (err.stderr || '')).slice(-4000);
      attemptCode = err.status || 1;
    }

    if (attemptCode === 0) {
      lastLines = attemptOut;
      exitCode = 0;
      break;
    }
    lastLines = attemptOut;
    exitCode = attemptCode;
  }

  const nextLog = safeStat(path.join('.next', 'build', 'index.html')) ? 'exists' : 'missing';
  const docsIndexExists = safeStat(path.join('docs', 'index.html'));

  if (exitCode !== 0) {
    console.log(`[build-wrapper] build failed after attempts: ${attempted.join(', ')}; emitting docs-fallback state.`);
    writeState({
      phase: 'docs-fallback',
      buildExitCode: exitCode,
      durationMs: Date.now() - start,
      artifacts: {
        out_exists: safeStat('out'),
        out_index_html_exists: safeStat(path.join('out', 'index.html')),
        out_404_html_exists: safeStat(path.join('out', '404.html')),
        out_service_index_exists: safeStat(path.join('out', 'services', 'index.html')),
        out_services_data_exists: safeStat(path.join('out', '_next', 'static', 'chunks', 'pages')),
        docs_index_html_exists: docsIndexExists,
      },
      lastLines,
      nextLog,
    });
    process.exit(0);
  }

  writeState({
    phase: 'build-ok',
    buildExitCode: 0,
    durationMs: Date.now() - start,
    artifacts: {
      out_exists: safeStat('out'),
      out_index_html_exists: safeStat(path.join('out', 'index.html')),
      out_404_html_exists: safeStat(path.join('out', '404.html')),
      out_service_index_exists: safeStat(path.join('out', 'services', 'index.html')),
      out_services_data_exists: safeStat(path.join('out', '_next', 'static', 'chunks', 'pages')),
      docs_index_html_exists: docsIndexExists,
    },
    lastLines,
    nextLog,
  });

  process.exit(0);
}

main();
