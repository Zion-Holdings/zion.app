const fs = require('fs');
const path = require('path');

function mockProposals() {
  const types = ['parameter', 'treasury', 'upgrade', 'region-policy'];
  const n = 1 + Math.floor(Math.random() * 3);
  return Array.from({ length: n }).map((_, i) => ({
    id: `ZGP-${Date.now()}-${i + 1}`,
    type: types[Math.floor(Math.random() * types.length)],
    status: 'temperature-check',
  }));
}

function writeStatus(status) {
  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'governance-snapshot-syncer.json');
  fs.writeFileSync(outPath, JSON.stringify(status, null, 2));
}

(function main() {
  const startedAt = new Date().toISOString();
  const proposals = mockProposals();
  const status = {
    name: 'Governance Snapshot Syncer',
    key: 'governance-snapshot-syncer',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: true,
    metrics: { proposals },
    error: null,
  };
  writeStatus(status);
  console.log('[governance-snapshot-syncer] ok');
})();