#!/usr/bin/env node

// Autonomous site maintenance orchestrator
// - Generates sitemap
// - Runs internal link scan and fixes
// - Runs SEO and security optimizers (idempotent)
// - Commits and pushes any changes

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'site-maintenance.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${line}\n`);
}

function runNode(scriptPath, args = []) {
  const absolute = path.isAbsolute(scriptPath) ? scriptPath : path.join(__dirname, scriptPath);
  const cmd = process.execPath;
  const finalArgs = [absolute, ...args];
  log(`▶️ node ${path.relative(process.cwd(), absolute)} ${args.join(' ')}`);
  const res = spawnSync(cmd, finalArgs, { stdio: 'pipe', env: process.env });
  if (res.stdout?.length) log(res.stdout.toString().trim());
  if (res.stderr?.length) log(res.stderr.toString().trim());
  if (res.status !== 0) log(`⚠️ Exit code ${res.status} running ${scriptPath}`);
  return res.status === 0;
}

function runNpmScript(scriptName) {
  log(`▶️ npm run ${scriptName}`);
  const res = spawnSync('npm', ['run', scriptName], { stdio: 'pipe', env: process.env });
  if (res.stdout?.length) log(res.stdout.toString().trim());
  if (res.stderr?.length) log(res.stderr.toString().trim());
  if (res.status !== 0) log(`⚠️ Exit code ${res.status} running npm script ${scriptName}`);
  return res.status === 0;
}

function git(args) {
  const res = spawnSync('git', args, { stdio: 'pipe' });
  if (res.stdout?.length) log(res.stdout.toString().trim());
  if (res.stderr?.length) log(res.stderr.toString().trim());
  return res;
}

function hasUncommittedChanges() {
  const res = git(['status', '--porcelain']);
  return res.stdout && res.stdout.toString().trim().length > 0;
}

function ensureGitUser() {
  // Ensure git user is set locally to avoid failures in CI/local cron
  const name = spawnSync('git', ['config', 'user.name']).stdout.toString().trim();
  const email = spawnSync('git', ['config', 'user.email']).stdout.toString().trim();
  if (!name) git(['config', 'user.name', 'zion-automation']);
  if (!email) git(['config', 'user.email', 'automation@ziontechgroup.com']);
}

async function main() {
  log('🚀 Site maintenance orchestrator started');

  // 1) Generate sitemap (idempotent)
  try {
    // Prefer package script if present
    runNpmScript('sitemap');
  } catch (_) {
    // Fallback to script direct path if needed
    runNode(path.join('..', 'scripts', 'generate-sitemap.mjs'));
  }

  // 2) Internal link scan and fixes (best-effort)
  try {
    runNode('site-link-crawler.cjs');
    runNode('site-link-fixer.cjs');
  } catch (e) {
    log(`⚠️ Link maintenance skipped: ${e.message}`);
  }

  // 3) SEO and security optimizations (best-effort)
  try { runNode('seo-optimizer.cjs'); } catch (e) { log(`⚠️ SEO skipped: ${e.message}`); }
  try { runNode('security-scanner.cjs'); } catch (e) { log(`⚠️ Security scan skipped: ${e.message}`); }

  // 4) Commit and push any changes
  ensureGitUser();
  if (hasUncommittedChanges()) {
    log('📝 Changes detected; committing and pushing...');
    git(['add', '-A']);
    git(['commit', '-m', 'chore(automation): site maintenance update (sitemap/links/seo/security)']);
    // Push to current branch
    const branch = spawnSync('git', ['branch', '--show-current']).stdout.toString().trim() || 'main';
    const pushRes = git(['push', 'origin', branch]);
    if (pushRes.status === 0) {
      log(`✅ Pushed changes to origin/${branch}`);
    } else {
      log('⚠️ Push failed');
    }
  } else {
    log('✅ No changes to commit');
  }

  log('🏁 Site maintenance orchestrator completed');
}

main().catch((err) => {
  log(`❌ Orchestrator error: ${err?.stack || err?.message || String(err)}`);
  process.exitCode = 1;
});


