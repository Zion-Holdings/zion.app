const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir);
  let total = 0; let bytes = 0;
  for (const e of entries) {
    const fp = path.join(dir, e);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (e === 'node_modules' || e === '.next' || e === 'out' || e === '.git') continue;
      const r = walk(fp);
      total += r.total; bytes += r.bytes;
    } else {
      total += 1; bytes += st.size;
    }
  }
  return { total, bytes };
}

(function main() {
  const startedAt = new Date().toISOString();
  const root = path.resolve(__dirname, '../../../');
  const { total, bytes } = walk(root);
  const status = {
    name: 'Repository Health Audit',
    key: 'repository-health-audit',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: true,
    metrics: { files: total, sizeBytes: bytes },
    error: null,
  };
  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'repository-health-audit.json'), JSON.stringify(status, null, 2));
  console.log('[repository-health-audit] ok');
})();