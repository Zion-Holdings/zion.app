const path = require('path');
const { execFile } = require('child_process');

function run(relPath, args = []) {
  const cwd = path.resolve(__dirname, '..', '..');
  const abs = path.resolve(cwd, relPath);
  return new Promise((resolve) => {
    const start = Date.now();
    const child = execFile('node', [abs, ...args], { cwd }, (error, stdout, stderr) => {
      resolve({ script: relPath, ok: !error, code: error ? error.code : 0, ms: Date.now() - start, stdout: stdout?.toString() || '', stderr: stderr?.toString() || '' });
    });
    child.on('error', () => resolve({ script: relPath, ok: false, code: -1, ms: 0, stdout: '', stderr: 'spawn error' }));
  });
}

exports.config = { schedule: '*/2 * * * *' };

exports.handler = async () => {
  const steps = [
    'automation/homepage-updater.cjs',
    'automation/homepage-auto-advertiser.cjs',
    'automation/front-index-auto-advertiser.cjs',
    'automation/front-index-directory-builder.cjs',
    'automation/front-index-ads.cjs',
    'automation/front-futurizer.cjs',
    'automation/front-fcb-promoter.cjs',
    'automation/advanced-git-sync.cjs',
  ];
  const results = [];
  for (const s of steps) {
    try { results.push(await run(s)); } catch (e) { results.push({ script: s, ok: false, code: -1, ms: 0, stdout: '', stderr: String(e) }); }
  }
  const ok = results.every(r => r.ok || /No changes|No updates|Updated|updated/i.test(r.stdout));
  return { statusCode: ok ? 200 : 207, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ engine: 'ultrafast-fcb-orchestrator', results }) };
};