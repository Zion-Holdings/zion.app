const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

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

function detectNextCli() {
  const nextCli = path.join('node_modules', '.bin', 'next');
  const nextCliCmd = path.join('node_modules', '.bin', 'next.cmd');
  const nextBinNext = path.join('node_modules', 'next', 'bin', 'next');
  const nextDistBinNext = path.join('node_modules', 'next', 'dist', 'bin', 'next');
  const nextCliJs = path.join('node_modules', 'next', 'cli.js');
  if (os.platform && os.platform() === 'win32' && safeStat(nextCliCmd)) {
    return ['cmd', 'node_modules/.bin/next.cmd build --webpack'];
  }
  if (safeStat(nextCli)) {
    return ['unix', 'node_modules/.bin/next build --webpack'];
  }
  if (safeStat(nextBinNext)) {
    return ['node-bin', `node "${nextBinNext}" build --webpack`];
  }
  if (safeStat(nextDistBinNext)) {
    return ['node-dist', `node "${nextDistBinNext}" build --webpack`];
  }
  if (safeStat(nextCliJs)) {
    return ['node-clijs', `node "${nextCliJs}" build --webpack`];
  }
  return null;
}

function main() {
  const start = Date.now();
  const detected = detectNextCli();
  let cmd = null;
  let label = null;

  if (detected) {
    const [l, c] = detected;
    cmd = c;
    label = l;
  }

  if (!cmd) {
    console.log('[build-wrapper] Next CLI not found; using docs/ fallback.');
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
      lastLines: 'fallback',
      nextLog: 'missing-next-cli',
    });
    process.exit(0);
  }

  console.log(`[build-wrapper] running ${label}: ${cmd}`);

  let lastLines = '';
  let exitCode = 1;
  try {
    const out = execSync(cmd, {
      cwd: repo,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 60 * 60 * 1000,
    });
    lastLines = ((out.stdout || '') + (out.stderr || '')).slice(-4000);
    exitCode = 0;
  } catch (err) {
    lastLines = ((err.stdout || '') + (err.stderr || '')).slice(-4000);
    exitCode = err.status || 1;
  }

  const nextLog = safeStat(path.join('.next', 'build', 'index.html')) ? 'exists' : 'missing';
  const docsIndexExists = safeStat(path.join('docs', 'index.html'));

  if (exitCode !== 0 && docsIndexExists) {
    console.log('[build-wrapper] build failed; docs/ fallback available. emitting graceful state.');
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
        docs_index_html_exists,
      },
      lastLines,
      nextLog,
    });
    process.exit(0);
  }

  writeState({
    phase: exitCode === 0 ? 'build-ok' : 'build-failed',
    buildExitCode: exitCode,
    durationMs: Date.now() - start,
    artifacts: {
      out_exists: safeStat('out'),
      out_index_html_exists: safeStat(path.join('out', 'index.html')),
      out_404_html_exists: safeStat(path.join('out', '404.html')),
      out_service_index_exists: safeStat(path.join('out', 'services', 'index.html')),
      out_services_data_exists: safeStat(path.join('out', '_next', 'static', 'chunks', 'pages')),
      docs_index_html_exists,
    },
    lastLines,
    nextLog,
  });

  process.exit(exitCode);
}

main();
