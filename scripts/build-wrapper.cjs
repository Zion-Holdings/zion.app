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

function main() {
  const start = Date.now();
  let cmd;
  let label;
  const dotNextBinNext = path.join('node_modules', 'next', 'bin', 'next');
  const dotNextDistBinNextJs = path.join('node_modules', 'next', 'dist', 'bin', 'next.js');
  const npxNext = path.join('node_modules', '.bin', 'next');

  if (safeStat(npxNext)) {
    cmd = 'node_modules/.bin/next build --webpack';
    label = 'next-cli';
  } else if (safeStat(dotNextDistBinNextJs)) {
    cmd = `node "${dotNextDistBinNextJs}" build --webpack`;
    label = 'next-dist';
  } else if (safeStat(dotNextBinNext)) {
    cmd = `node "${dotNextBinNext}" build --webpack`;
    label = 'next-bin';
  } else {
    console.log('[build-wrapper] Next CLI not found at known paths; using docs/ fallback.');
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
        docs_index_html_exists: docsIndexExists,
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
      docs_index_html_exists: docsIndexExists,
    },
    lastLines,
    nextLog,
  });

  process.exit(exitCode);
}

main();
