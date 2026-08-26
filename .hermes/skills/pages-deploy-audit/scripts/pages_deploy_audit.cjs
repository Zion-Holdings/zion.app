#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const checksDir = path.join(repoRoot, 'scripts', 'checks');

function run(title, cmd) {
  let out = '';
  let code = 0;
  try {
    out = execSync(cmd, { encoding: 'utf8', cwd: repoRoot, stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    code = err.status || 1;
    out = err.stdout || err.message || '';
  }
  return { title, code, out: String(out).trim() };
}

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

async function main() {
  const results = [];
  results.push(run('pages-latest-run', `gh run list --workflow=.github/workflows/deploy-to-github-pages.yml --repo Zion-support/zion-support.github.io --limit 1 --json databaseId,conclusion,status,url --jq '.[0]'`));
  results.push(run('workflow-diff', 'git diff -- .github/workflows/deploy-to-github-pages.yml'));
  const hc = path.join(checksDir, 'service_routes_healthcheck.cjs');
  results.push(run('critical-routes', exists(hc) ? `node ${hc}` : 'node scripts/checks/smoke-routes-check.cjs'));
  results.push(run('full-smoke', 'node scripts/checks/smoke-routes-check.cjs'));
  const redirectsPath = path.join(repoRoot, 'public', '_redirects');
  results.push(run('redirects-exists', exists(redirectsPath) ? 'echo present' : 'echo missing'));
  results.push(run('artifact-dirs', "node -e \"const fs=require('fs'); const p=require('path'); const dir=p.join(process.cwd(),'public'); const targets=['services','tools']; const out=targets.map(x=>x+':'+fs.existsSync(p.join(dir,x))); console.log(out.join(' | '));\""));

  const report = results.map(r => `=== ${r.title} ===\n${r.out || '(empty)'}`).join('\n');
  const failing = results.filter(r => String(r.code).trim() !== '0');
  console.log(`PAGES_DEPLOY_AUDIT ${failing.length > 0 ? 'FAIL' : 'OK'}`);
  console.log(report);
  process.exit(failing.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error('pages-deploy-audit error:', err);
  process.exit(2);
});
