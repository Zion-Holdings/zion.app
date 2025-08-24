#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command, args = [], options = {}) {
  return new Promise((resolve) => {
    const start = Date.now();
    const child = spawn(command, args, { stdio: 'pipe', shell: true, ...options });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (d) => { stdout += d.toString(); });
    child.stderr.on('data', (d) => { stderr += d.toString(); });
    child.on('close', (code) => {
      resolve({ command: `${command} ${args.join(' ')}`.trim(), code, durationMs: Date.now() - start, stdout, stderr });
    });
  });
}

async function main() {
  const results = [];
  const startedAt = new Date().toISOString();

  const tasks = [
    { name: 'Generate Sitemap', cmd: 'npm', args: ['run', 'sitemap'] },
    { name: 'UI Evolution Analyze', cmd: 'npm', args: ['run', 'ui-evolution:analyze'] },
    { name: 'Responsive Analyze', cmd: 'npm', args: ['run', 'responsive:analyze'] },
    { name: 'Alignment Scan', cmd: 'npm', args: ['run', 'alignment:scan'] },
    { name: 'Design Analyze', cmd: 'npm', args: ['run', 'design:analyze'] },
  ];

  for (const t of tasks) {
    try {
      const result = await run(t.cmd, t.args);
      results.push({ name: t.name, ...result });
    } catch (e) {
      results.push({ name: t.name, error: String(e) });
    }
  }

  const endedAt = new Date().toISOString();
  const summary = {
    startedAt,
    endedAt,
    durationMs: new Date(endedAt).getTime() - new Date(startedAt).getTime(),
    tasks: results.map((r) => ({
      name: r.name,
      command: r.command,
      success: r.code === 0,
      code: r.code,
      durationMs: r.durationMs,
      stdoutTail: r.stdout ? r.stdout.slice(-2000) : '',
      stderrTail: r.stderr ? r.stderr.slice(-2000) : '',
    })),
  };

  const outDir = path.join(process.cwd(), 'data', 'reports', 'autonomous-cloud');
  fs.mkdirSync(outDir, { recursive: true });
  const latestPath = path.join(outDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));

  const md = [
    `# Autonomous Cloud Orchestrator Report`,
    `- Started: ${startedAt}`,
    `- Ended: ${endedAt}`,
    `- Duration: ${summary.durationMs} ms`,
    '',
    '## Tasks',
  ];
  for (const task of summary.tasks) {
    md.push(`- ${task.name}: ${task.success ? 'SUCCESS' : 'FAIL'} (code ${task.code}) in ${task.durationMs}ms`);
  }
  const mdPath = path.join(process.cwd(), 'AUTONOMOUS_CLOUD_REPORT.md');
  fs.writeFileSync(mdPath, md.join('\n'));

  console.log('Autonomous Cloud Orchestrator completed. Summary at:', latestPath);
}

main().catch((err) => {
  console.error('Orchestrator failed:', err);
  process.exitCode = 1;
});