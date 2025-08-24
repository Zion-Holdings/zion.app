const fs = require('fs');
const path = require('path');

const INPUT_PATH = path.join(__dirname, '..', 'data', 'governance-pulse.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'dao-leaderboard.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function scoreProposal(p) {
  let score = 0;
  if (!p) return 0;
  score += Math.min(1e6, p.scores_total || 0);
  if (p.state === 'active') score += 5e5;
  if (p.state === 'closed') score += 2e5;
  return score;
}

async function run() {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(INPUT_PATH, 'utf8'));
  } catch {
    data = { items: [] };
  }
  const bySpace = new Map();
  for (const p of data.items || []) {
    const key = p.space || 'unknown';
    const current = bySpace.get(key) || { space: key, name: p.spaceName || key, proposals: 0, totalScore: 0 };
    current.proposals += 1;
    current.totalScore += scoreProposal(p);
    bySpace.set(key, current);
  }
  const rows = Array.from(bySpace.values()).sort((a, b) => b.totalScore - a.totalScore).slice(0, 25);

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'DAO leaderboard derived from recent Snapshot proposals',
    total: rows.length,
    items: rows,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`DAO Leaderboard written to ${OUTPUT_PATH} with ${rows.length} rows.`);
}

run().catch((err) => {
  console.error('DAO Leaderboard failed:', err);
  process.exit(0);
});