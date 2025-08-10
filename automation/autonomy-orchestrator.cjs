#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command, options = {}) {
  const start = Date.now();
  return new Promise((resolve) => {
    const child = exec(command, { timeout: options.timeoutMs || 5 * 60 * 1000 }, (error, stdout, stderr) => {
      const end = Date.now();
      resolve({
        command,
        success: !error,
        code: error && typeof error.code === 'number' ? error.code : 0,
        signal: error && error.signal ? error.signal : null,
        durationMs: end - start,
        stdout: stdout ? stdout.toString().slice(0, 5000) : '',
        stderr: stderr ? stderr.toString().slice(0, 5000) : ''
      });
    });
  });
}

async function main() {
  const tasks = [
    { id: 'links:scan', cmd: 'npm run links:scan' },
    { id: 'maintenance:run', cmd: 'npm run maintenance:run' },
    { id: 'seo:optimize', cmd: 'node automation/seo-optimizer.cjs' },
    { id: 'security:scan', cmd: 'node automation/security-scanner.cjs' },
    { id: 'performance:audit', cmd: 'node automation/performance-audit.cjs' },
    { id: 'ui-evolution:analyze', cmd: 'npm run ui-evolution:analyze' },
    { id: 'responsive:analyze', cmd: 'npm run responsive:analyze' },
    { id: 'variation:analyze', cmd: 'npm run variation:analyze' },
    { id: 'venture:analyze', cmd: 'npm run venture:analyze' },
    { id: 'feature-marketing:analyze', cmd: 'npm run feature-marketing:analyze' },
    { id: 'git:health', cmd: 'npm run git:health' }
  ];

  const results = [];
  for (const t of tasks) {
    try {
      const r = await run(t.cmd, { timeoutMs: 4 * 60 * 1000 });
      results.push({ id: t.id, ...r });
    } catch (e) {
      results.push({ id: t.id, command: t.cmd, success: false, error: String(e) });
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    success: results.every(r => r.success),
    totals: {
      tasks: results.length,
      passed: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      durationMs: results.reduce((a, r) => a + (r.durationMs || 0), 0)
    },
    results: results.map(r => ({
      id: r.id,
      command: r.command,
      success: r.success,
      durationMs: r.durationMs,
      stdoutSnippet: r.stdout,
      stderrSnippet: r.stderr
    }))
  };

  // Ensure public directory exists
  const statusDir = path.join(process.cwd(), 'public', 'autonomy');
  fs.mkdirSync(statusDir, { recursive: true });
  fs.writeFileSync(path.join(statusDir, 'status.json'), JSON.stringify(summary, null, 2));

  // Write markdown report
  const md = [
    `# Autonomous Cloud Agents — Run Report`,
    '',
    `Generated: ${summary.generatedAt}`,
    '',
    `- Tasks: ${summary.totals.tasks}`,
    `- Passed: ${summary.totals.passed}`,
    `- Failed: ${summary.totals.failed}`,
    `- Duration: ${(summary.totals.durationMs/1000).toFixed(1)}s`,
    '',
    '## Details',
    ...summary.results.map(r => [
      `### ${r.id} — ${r.success ? '✅' : '❌'}`,
      '',
      '```',
      (r.stdoutSnippet || '').slice(0, 1000) || '(no output)',
      '```',
      r.stderrSnippet ? 'Stderr:' : '',
      r.stderrSnippet ? '```' : '',
      r.stderrSnippet ? r.stderrSnippet.slice(0, 500) : '',
      r.stderrSnippet ? '```' : '',
      ''
    ].join('\n'))
  ].join('\n');

  const docsDir = path.join(process.cwd(), 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'AUTONOMY.md'), md);

  console.log('Autonomy summary written to public/autonomy/status.json and docs/AUTONOMY.md');
}

main().catch((e) => {
  console.error('Autonomy orchestrator failed', e);
  process.exit(1);
});