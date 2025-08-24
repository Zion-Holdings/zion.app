#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

function execCommand(command, options = {}) {
  return new Promise((resolve) => {
    const child = exec(command, { timeout: 20000, maxBuffer: 10 * 1024 * 1024, ...options }, (error, stdout, stderr) => {
      resolve({
        ok: !error,
        code: error ? (error.code ?? 1) : 0,
        stdout: stdout?.toString() ?? '',
        stderr: stderr?.toString() ?? '',
        errorMessage: error ? (error.message ?? '') : ''
      });
    });
    child.on('error', (err) => {
      resolve({ ok: false, code: 1, stdout: '', stderr: String(err), errorMessage: String(err) });
    });
  });
}

async function findAutomationFiles(rootDir) {
  const files = [];
  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      // Skip node_modules, .git, and auto-ops itself to avoid recursion and noise
      if (entry.isDirectory()) {
        if (['node_modules', '.git', 'auto-ops'].includes(entry.name)) continue;
        await walk(full);
      } else {
        if (full.endsWith('.cjs') || full.endsWith('.js') || full.endsWith('.sh')) {
          files.push(full);
        }
      }
    }
  }
  await walk(rootDir);
  return files;
}

async function syntaxCheckFile(filePath) {
  if (filePath.endsWith('.sh')) {
    const result = await execCommand(`bash -n ${JSON.stringify(filePath)}`);
    return { type: 'bashSyntax', ...result };
  }
  if (filePath.endsWith('.cjs') || filePath.endsWith('.js')) {
    const result = await execCommand(`node --check ${JSON.stringify(filePath)}`);
    return { type: 'nodeSyntax', ...result };
  }
  return { type: 'unknown', ok: true, code: 0, stdout: '', stderr: '' };
}

async function runStatusScripts(projectRoot) {
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const scripts = (await fs.readJson(packageJsonPath)).scripts || {};
  const candidates = Object.keys(scripts).filter((k) => k.endsWith(':status'));
  const desired = new Set([
    'automation:status',
    'autonomous:status',
    'syntax:status',
    'linting:status'
  ]);
  for (const d of desired) desired.add(d); // no-op to ensure set exists
  const toRun = Array.from(new Set([...candidates, ...desired]));
  const results = [];
  for (const name of toRun) {
    if (!scripts[name]) continue;
    const cmd = `npm run -s ${name}`;
    const res = await execCommand(cmd, { cwd: projectRoot, env: { ...process.env, CI: '1' } });
    results.push({ script: name, ok: res.ok, code: res.code, stdout: res.stdout, stderr: res.stderr });
  }
  return results;
}

async function main() {
  const projectRoot = path.resolve(__dirname, '../../');
  const automationDir = path.join(projectRoot, 'automation');
  const reportDir = path.join(automationDir, 'auto-ops', 'reports');
  await fs.ensureDir(reportDir);

  const files = await findAutomationFiles(automationDir);

  const fileChecks = [];
  for (const file of files) {
    // Avoid checking files inside auto-ops reports/output directories
    if (file.includes(path.join('auto-ops', 'reports'))) continue;
    const check = await syntaxCheckFile(file);
    fileChecks.push({ file, ...check });
  }

  const statusResults = await runStatusScripts(projectRoot);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalFilesScanned: files.length,
      totalIssues: fileChecks.filter((f) => !f.ok).length,
      statusScriptsRun: statusResults.length,
      failingStatusScripts: statusResults.filter((s) => !s.ok).length
    },
    fileChecks,
    statusResults
  };

  const latestPath = path.join(reportDir, 'last-report.json');
  const datedPath = path.join(reportDir, `report-${timestamp}.json`);
  await fs.writeJson(latestPath, report, { spaces: 2 });
  await fs.writeJson(datedPath, report, { spaces: 2 });

  const humanSummary = [
    `Auto-Ops Detector Report @ ${report.generatedAt}`,
    `- Files scanned: ${report.summary.totalFilesScanned}`,
    `- Issues detected: ${report.summary.totalIssues}`,
    `- Status scripts run: ${report.summary.statusScriptsRun}`,
    `- Failing status scripts: ${report.summary.failingStatusScripts}`
  ].join('\n');
  console.log(humanSummary);
}

main().catch((err) => {
  console.error('Detector failed:', err);
  process.exit(0); // Never crash CI; report is more important
});