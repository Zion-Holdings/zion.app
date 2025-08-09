/* Autonomous Security Audit
   Runs npm audit and publishes a JSON report for the site.
*/

const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

function runAudit() {
  return new Promise((resolve) => {
    const child = spawn('npm', ['audit', '--json'], { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d.toString()));
    child.stderr.on('data', () => {});
    child.on('close', () => {
      resolve(out);
    });
  });
}

async function run() {
  const started = new Date();
  let report = { error: 'audit failed' };
  try {
    const raw = await runAudit();
    try {
      report = JSON.parse(raw);
    } catch {
      report = { raw };
    }
  } catch (e) {
    report = { error: e.message };
  }
  report.generatedAt = started.toISOString();

  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'security-audit.json');
  await fs.writeJson(outFile, report, { spaces: 2 });

  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  const logFile = path.join(logDir, 'security-audit.log');
  const durationMs = Date.now() - started.getTime();
  await fs.appendFile(logFile, `[${new Date().toISOString()}] durationMs=${durationMs} ok\n`);
  console.log(`Security audit report -> ${outFile}`);
}

run().catch((e) => {
  console.error('Security audit failed:', e);
  process.exitCode = 1;
});