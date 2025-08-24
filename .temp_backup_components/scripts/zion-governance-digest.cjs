#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function listFiles(dir, ext) { if (!fs.existsSync(dir)) return []; return fs.readdirSync(dir).filter(f => f.endsWith(ext)).map(f => path.join(dir, f)); }
function summarize(text) {
  const lines = String(text || '').split(/\r?\n/);
  const bullets = lines.filter(l => /^\s*[-*]/.test(l)).slice(0, 6).map(l => l.replace(/^\s*[-*]\s*/, '').trim());
  const headings = lines.filter(l => /^\s*#{1,3}\s+/.test(l)).slice(0, 3).map(l => l.replace(/^\s*#{1,3}\s+/, '').trim());
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0).slice(0, 3);
  const out = [];
  if (headings.length) { out.push(`Topics: ${headings.join('; ')}`); }
  if (bullets.length) {
    out.push('Highlights:');
    for (const b of bullets) out.push(`- ${b}`);
  } else {
    out.push('Summary:');
    for (const s of sentences) out.push(`- ${s.trim()}`);
  }
  out.push('Constraints: 4-6 bullets; link to sources if available; avoid repetition.');
  return out.join('\n');
}

const root = process.cwd();
const srcDir = path.join(root, 'data', 'governance', 'source');
const outDir = path.join(root, 'data', 'governance', 'digests');
const docDir = path.join(root, 'docs', 'zion-brain');
ensureDir(outDir);
ensureDir(docDir);

const files = listFiles(srcDir, '.md');
const items = [];
for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf8');
  const digest = summarize(content);
  const outFile = path.join(outDir, path.basename(fp).replace(/\.md$/, '.digest.md'));
  fs.writeFileSync(outFile, digest);
  items.push({ file: path.basename(fp), digestFile: path.basename(outFile) });
}

const mdPath = path.join(docDir, 'governance-digest.md');
const md = [];
md.push('# Governance Digest');
md.push('');
md.push(`Updated: ${new Date().toISOString()}`);
md.push('');
if (items.length === 0) {
  md.push('No governance sources found in data/governance/source.');
} else {
  for (const it of items) {
    md.push(`- ${it.file} → ${it.digestFile}`);
  }
}
fs.writeFileSync(mdPath, md.join('\n'));
console.log('Governance digest updated:', mdPath);