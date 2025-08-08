#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

const ROOT = path.join(__dirname, '..');
const LOG_DIR = path.join(__dirname, 'logs');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'code-health');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(LOG_DIR);
ensureDir(REPORT_DIR);

const LOG_FILE = path.join(LOG_DIR, 'code-health-orchestrator.log');

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function run(cmd, opts = {}) {
  log(`$ ${cmd}`);
  try {
    const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8', cwd: ROOT, ...opts });
    if (out && out.trim()) log(out.trim());
    return { ok: true, output: out || '' };
  } catch (error) {
    const out = (error.stdout || error.stderr || error.message || '').toString();
    if (out && out.trim()) log(out.trim());
    return { ok: false, output: out };
  }
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function writeReport(name, data) {
  const file = path.join(REPORT_DIR, name);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  return file;
}

function checkScriptsForMissingFiles() {
  const pkgPath = path.join(ROOT, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const missing = [];
  for (const [scriptName, scriptCmd] of Object.entries(pkg.scripts || {})) {
    const matches = Array.from(String(scriptCmd).matchAll(/\b(?:node|bash)\s+([^\s&|;]+)/g));
    for (const m of matches) {
      const rel = m[1];
      if (rel.startsWith('-e')) continue; // ignore inline node -e
      if (rel.startsWith('http')) continue; // ignore urls
      const candidate = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
      if (!fs.existsSync(candidate)) {
        missing.push({ script: scriptName, file: rel });
      }
    }
  }
  const reportPath = writeReport('missing-scripts.json', { generatedAt: new Date().toISOString(), missing });
  if (missing.length) log(`⚠️ Detected ${missing.length} missing script target(s). See ${reportPath}`);
  else log('✅ No missing script targets detected');
  return missing;
}

function runChecks({ includeBuild } = { includeBuild: false }) {
  const results = { startedAt: new Date().toISOString() };

  // Type-check
  const typeCheck = run('npm run -s type-check');
  results.typeCheck = typeCheck.ok;

  // Lint with warnings as errors to surface quality regressions
  const lint = run('npx eslint . --ext .js,.jsx,.ts,.tsx --max-warnings=0');
  results.lint = lint.ok;

  // Optional Next build (heavier)
  let buildOk = true;
  if (includeBuild) {
    const build = run('npm run -s build');
    buildOk = build.ok;
  }
  results.build = buildOk;

  // Check script targets
  const missing = checkScriptsForMissingFiles();
  results.missingScripts = missing;

  results.ok = results.typeCheck && results.lint && results.build && missing.length === 0;
  results.finishedAt = new Date().toISOString();

  const reportPath = writeReport('latest.json', results);
  log(`📄 Wrote code health report: ${reportPath}`);
  return results;
}

function tryFixes() {
  const fixers = [
    'fix_typescript_syntax_errors.cjs',
    'fix_all_typescript_errors.cjs',
    'fix_remaining_errors.cjs'
  ];

  for (const fixer of fixers) {
    if (exists(fixer)) {
      run(`node ${fixer}`);
    }
  }

  // Lint fixer
  if (exists(path.join('automation', 'lint-error-fixer.cjs'))) {
    run('node automation/lint-error-fixer.cjs all');
  }

  // Script target fixer
  if (exists(path.join('automation', 'script-target-fixer.cjs'))) {
    run('node automation/script-target-fixer.cjs');
  }
}

async function continuousLoop() {
  log('🔄 Starting continuous code health monitoring');
  // Initial pass with build to validate state
  runChecks({ includeBuild: true });

  // Lightweight loop every 5 minutes
  const intervalMs = Number(process.env.CODE_HEALTH_INTERVAL_MS || 5 * 60 * 1000);
  setInterval(() => {
    const res = runChecks({ includeBuild: false });
    if (!res.ok) {
      log('🧪 Issues detected. Attempting automated fixes...');
      tryFixes();
      // Re-check after fixes
      runChecks({ includeBuild: false });
    }
  }, intervalMs);
}

function main() {
  const command = process.argv[2] || 'continuous';
  switch (command) {
    case 'check': {
      const includeBuild = Boolean(process.argv[3] === '--build');
      const res = runChecks({ includeBuild });
      process.exit(res.ok ? 0 : 1);
    }
    case 'fix': {
      tryFixes();
      const res = runChecks({ includeBuild: false });
      process.exit(res.ok ? 0 : 1);
    }
    case 'continuous': {
      continuousLoop();
      break;
    }
    case 'status': {
      const latestPath = path.join(REPORT_DIR, 'latest.json');
      if (fs.existsSync(latestPath)) {
        const latest = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
        log(`Status: ${latest.ok ? '✅ Healthy' : '❌ Issues detected'}`);
      } else {
        log('No status available yet');
      }
      break;
    }
    default: {
      console.log('Usage: node automation/code-health-orchestrator.cjs [check|fix|continuous|status]');
    }
  }
}

main();