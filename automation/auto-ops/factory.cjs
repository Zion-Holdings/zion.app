#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

function run(command, options = {}) {
  return new Promise((resolve) => {
    exec(command, { timeout: 30000, maxBuffer: 10 * 1024 * 1024, ...options }, (error, stdout, stderr) => {
      resolve({ ok: !error, code: error ? (error.code ?? 1) : 0, stdout: String(stdout ?? ''), stderr: String(stderr ?? '') });
    });
  });
}

function safeName(filePath) {
  const base = path.basename(filePath);
  return base.replace(/[^a-zA-Z0-9_.-]/g, '_');
}

async function createFixerForNodeScript(targetFile, outputDir) {
  const base = safeName(targetFile);
  const fixerPath = path.join(outputDir, `fix-${base}`.replace(/\.(cjs|js)$/i, '.cjs'));
  const content = `#!/usr/bin/env node
const fs = require('fs-extra');
const { exec } = require('child_process');

function run(cmd, options = {}) { return new Promise((r)=>exec(cmd, { ...options, maxBuffer: 10*1024*1024 }, (e,so,se)=>r({ok:!e, code:e?e.code:0, so:String(so||''), se:String(se||'')}))); }

(async () => {
  const target = ${JSON.stringify(targetFile)};
  const backup = target + '.bak.autoops';
  try {
    if (await fs.pathExists(target)) {
      await fs.copy(target, backup, { overwrite: true });
    }
    await run('npx --yes eslint --fix ' + JSON.stringify(target));
    // Normalize line endings to LF
    const data = await fs.readFile(target, 'utf8');
    const normalized = data.replace(/\\r\\n/g, '\\n');
    if (normalized !== data) await fs.writeFile(target, normalized, 'utf8');

    const check = await run('node --check ' + JSON.stringify(target));
    if (!check.ok) {
      console.error('Post-fix syntax still failing. Reverting to backup. Error:', check.se || check.so);
      if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true });
      process.exit(1);
    }
    console.log('✅ Fixed and validated:', target);
  } catch (e) {
    console.error('Fixer error:', e && e.message ? e.message : String(e));
    // Attempt revert
    try { if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true }); } catch {}
    process.exit(1);
  }
})();
`;
  await fs.outputFile(fixerPath, content, { mode: 0o755 });
  return fixerPath;
}

async function createFixerForShellScript(targetFile, outputDir) {
  const base = safeName(targetFile);
  const fixerPath = path.join(outputDir, `fix-${base}`.replace(/\.(sh)$/i, '.cjs'));
  const content = `#!/usr/bin/env node
const fs = require('fs-extra');
const { exec } = require('child_process');
function run(cmd, options = {}) { return new Promise((r)=>exec(cmd, { ...options, maxBuffer: 10*1024*1024 }, (e,so,se)=>r({ok:!e, code:e?e.code:0, so:String(so||''), se:String(se||'')}))); }
(async () => {
  const target = ${JSON.stringify(targetFile)};
  const backup = target + '.bak.autoops';
  try {
    if (await fs.pathExists(target)) {
      await fs.copy(target, backup, { overwrite: true });
    }
    // Normalize line endings and remove potential BOM
    let data = await fs.readFile(target, 'utf8');
    data = data.replace(/^\\uFEFF/, '').replace(/\\r\\n/g, '\\n');
    await fs.writeFile(target, data, 'utf8');

    const check = await run('bash -n ' + JSON.stringify(target));
    if (!check.ok) {
      console.error('Shell syntax still failing. Reverting. Error:', check.se || check.so);
      if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true });
      process.exit(1);
    }
    console.log('✅ Shell script normalized and validated:', target);
  } catch (e) {
    console.error('Fixer error (shell):', e && e.message ? e.message : String(e));
    try { if (await fs.pathExists(backup)) await fs.copy(backup, target, { overwrite: true }); } catch {}
    process.exit(1);
  }
})();
`;
  await fs.outputFile(fixerPath, content, { mode: 0o755 });
  return fixerPath;
}

async function createShadowFactory(originalFactoryPath, outputDir) {
  const base = safeName(originalFactoryPath);
  const outPath = path.join(outputDir, `shadow-${base}`.replace(/\.(cjs|js)$/i, '.cjs'));
  const content = `#!/usr/bin/env node
// Shadow factory created by Auto-Ops to preserve original factory. This wrapper does not modify existing factories.
console.log('Shadow factory active for', ${JSON.stringify(path.basename(originalFactoryPath))});
// This stub intentionally does not alter original behavior. It can be extended to provide fallback functionality.
`;
  await fs.outputFile(outPath, content, { mode: 0o755 });
  return outPath;
}

async function main() {
  const projectRoot = path.resolve(__dirname, '../../');
  const autoOpsDir = path.join(projectRoot, 'automation', 'auto-ops');
  const reportPath = path.join(autoOpsDir, 'reports', 'last-report.json');
  const fixesDir = path.join(autoOpsDir, 'ops-fixes');
  await fs.ensureDir(fixesDir);

  if (!(await fs.pathExists(reportPath))) {
    console.log('No report found. Run detector first.');
    return;
  }
  const report = await fs.readJson(reportPath);
  const issues = [];

  for (const check of report.fileChecks || []) {
    if (check.ok) continue;
    const file = check.file;
    if (/-factory\.cjs$/.test(file)) {
      issues.push({ kind: 'shadowFactory', file });
    } else if (file.endsWith('.sh')) {
      issues.push({ kind: 'shellFix', file });
    } else if (file.endsWith('.cjs') || file.endsWith('.js')) {
      issues.push({ kind: 'nodeFix', file });
    }
  }

  // Also consider failing status scripts by generating a diagnostic agent
  const failingStatus = (report.statusResults || []).filter((s) => !s.ok).map((s) => s.script);
  const diagnostics = failingStatus.length > 0;
  if (diagnostics) {
    const diagAgent = path.join(fixesDir, `diagnostics-${Date.now()}.cjs`);
    const content = `#!/usr/bin/env node
const { exec } = require('child_process');
function run(cmd) { return new Promise((r)=>exec(cmd, { maxBuffer: 10*1024*1024 }, (e,so,se)=>r({ok:!e, code:e?e.code:0, so:String(so||''), se:String(se||'')}))); }
(async () => {
  const scripts = ${JSON.stringify(failingStatus)};
  for (const s of scripts) {
    const res = await run('npm run -s ' + s);
    console.log('Status for', s, '=> ok=', res.ok, 'code=', res.code);
    if (!res.ok) {
      console.log('--- stdout ---\\n' + res.so);
      console.error('--- stderr ---\\n' + res.se);
    }
  }
})();
`;
    await fs.outputFile(diagAgent, content, { mode: 0o755 });
    console.log('Generated diagnostics agent for failing status scripts:', diagAgent);
  }

  const created = [];
  for (const issue of issues) {
    if (issue.kind === 'nodeFix') {
      created.push(await createFixerForNodeScript(issue.file, fixesDir));
    } else if (issue.kind === 'shellFix') {
      created.push(await createFixerForShellScript(issue.file, fixesDir));
    } else if (issue.kind === 'shadowFactory') {
      created.push(await createShadowFactory(issue.file, fixesDir));
    }
  }

  console.log('Auto-Ops Factory created agents:', created);
}

main().catch((err) => {
  console.error('Factory failed:', err);
  process.exit(0);
});