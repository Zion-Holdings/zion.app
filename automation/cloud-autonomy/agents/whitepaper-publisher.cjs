const fs = require('fs');
const path = require('path');

function readWhitepaperMd() {
  const mdPath = path.resolve(__dirname, '../../../docs/zion-protocol-whitepaper.md');
  try {
    const content = fs.readFileSync(mdPath, 'utf8');
    const headingCount = (content.match(/^##\s/mg) || []).length;
    return { ok: true, headingCount, bytes: Buffer.byteLength(content, 'utf8') };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

function writeStatus(status) {
  const outDir = path.resolve(__dirname, '../../../data/cloud-automations');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'whitepaper-publisher.json');
  fs.writeFileSync(outPath, JSON.stringify(status, null, 2));
}

(function main() {
  const startedAt = new Date().toISOString();
  const result = readWhitepaperMd();
  const status = {
    name: 'Autonomous Whitepaper Publisher',
    key: 'whitepaper-publisher',
    startedAt,
    finishedAt: new Date().toISOString(),
    success: !!result.ok,
    metrics: result.ok ? { headingCount: result.headingCount, bytes: result.bytes } : {},
    error: result.ok ? null : result.error,
  };
  writeStatus(status);
  console.log(`[whitepaper-publisher] ${status.success ? 'ok' : 'failed'}`);
})();