const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const agents = [
  'whitepaper-publisher.cjs',
  'multiverse-health-monitor.cjs',
  'governance-snapshot-syncer.cjs',
  'ai-cache-refresher.cjs',
  'talent-passport-evaluator.cjs',
];

function runAgent(file) {
  const agentPath = path.resolve(__dirname, 'agents', file);
  try {
    execSync(`node ${agentPath}`, { stdio: 'inherit' });
    return { file, ok: true };
  } catch (e) {
    console.error(`[orchestrator] agent failed: ${file}`, e.message);
    return { file, ok: false, error: String(e) };
  }
}

(function main() {
  const startedAt = new Date().toISOString();
  const results = agents.map(runAgent);
  const finishedAt = new Date().toISOString();
  const outDir = path.resolve(__dirname, '../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, 'summary.json'),
    JSON.stringify({ startedAt, finishedAt, results }, null, 2)
  );
  console.log('[orchestrator] completed');
})();