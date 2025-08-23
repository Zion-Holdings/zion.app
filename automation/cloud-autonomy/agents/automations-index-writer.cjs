const fs = require('fs');
const path = require('path');

(function main() {
  const startedAt = new Date().toISOString();
  const dataDir = path.resolve(__dirname, '../../../data/cloud-automations');
  const outDir = path.resolve(__dirname, '../../../public/automations');
  fs.mkdirSync(outDir, { recursive: true });
  const indexPath = path.join(outDir, 'index.json');

  const index = { generatedAt: startedAt, agents: {} };
  if (fs.existsSync(dataDir)) {
    for (const f of fs.readdirSync(dataDir)) {
      if (f.endsWith('.json')) {
        try {
          const payload = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
          index.agents[f.replace('.json','')] = payload;
        } catch {}
      }
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log('[automations-index-writer] ok');
})();