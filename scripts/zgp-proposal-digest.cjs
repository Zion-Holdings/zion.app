const fs = require('fs');
const path = require('path');

function loadProposals() {
  const proposalsFile = path.join(process.cwd(), 'data', 'zgp-proposals.json');
  if (!fs.existsSync(proposalsFile)) return { proposals: [] };
  return JSON.parse(fs.readFileSync(proposalsFile, 'utf8'));
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function formatDate(d) {
  return new Date(d).toISOString().slice(0, 10);
}

function main() {
  const { proposals } = loadProposals();
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const recent = proposals
    .map((p) => ({
      ...p,
      latest: p.versions[p.latestVersion - 1] || p.versions[0],
    }))
    .filter((p) => new Date(p.latest.createdAt) >= weekAgo)
    .sort((a, b) => (a.latest.createdAt < b.latest.createdAt ? 1 : -1));

  const lines = [];
  lines.push(`# Zion Governance Weekly Digest — ${formatDate(now)}\n`);
  if (recent.length === 0) {
    lines.push(`No proposal changes in the last 7 days.`);
  } else {
    for (const p of recent) {
      lines.push(`- ${p.proposalNumber} — ${p.title} (v${p.latestVersion}, ${p.status})`);
      lines.push(`  - Updated: ${p.latest.createdAt}`);
      lines.push(`  - Summary: ${p.latest.summary.slice(0, 240)}${p.latest.summary.length > 240 ? '…' : ''}`);
    }
  }

  const digestDir = path.join(process.cwd(), 'docs', 'digests');
  ensureDir(digestDir);
  const file = path.join(digestDir, `weekly-zgp-digest-${formatDate(now)}.md`);
  fs.writeFileSync(file, lines.join('\n') + '\n');

  // Update index README
  const indexFile = path.join(digestDir, 'README.md');
  const existing = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf8') : '';
  const linkLine = `- [${formatDate(now)}](./weekly-zgp-digest-${formatDate(now)}.md)`;
  if (!existing.includes(linkLine)) {
    const header = `# ZGP Weekly Digests\n\n`;
    const content = existing.includes('# ZGP Weekly Digests') ? existing : header + existing;
    const updated = content + linkLine + '\n';
    fs.writeFileSync(indexFile, updated);
  }
}

main();