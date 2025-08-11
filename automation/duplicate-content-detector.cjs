#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function stripToText(source, ext) {
  let text = source;
  if (ext === '.md' || ext === '.mdx') {
    // remove code fences and markdown formatting
    text = text.replace(/```[\s\S]*?```/g, ' ');
    text = text.replace(/`[^`]*`/g, ' ');
  }
  // remove jsx/tsx tags
  text = text.replace(/<[^>]+>/g, ' ');
  // remove imports/exports/JS code lines to bias to copy
  text = text.replace(/^\s*(import|export)\b.*$/gm, ' ');
  // collapse whitespace
  text = text.replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  return text;
}

function shingles(tokens, k = 8) {
  const out = new Set();
  for (let i = 0; i + k <= tokens.length; i++) {
    out.add(tokens.slice(i, i + k).join(' '));
  }
  return out;
}

function jaccard(aSet, bSet) {
  if (aSet.size === 0 && bSet.size === 0) return 0;
  let inter = 0;
  for (const v of aSet) if (bSet.has(v)) inter++;
  const union = aSet.size + bSet.size - inter;
  return union === 0 ? 0 : inter / union;
}

function tokenize(text) {
  return text.split(/\s+/).filter(Boolean);
}

function main() {
  const root = process.cwd();
  const targets = [
    'pages/**/*.{tsx,jsx,md,mdx,ts,js}',
    'components/**/*.{tsx,jsx,ts,js}',
    'docs/**/*.{md,mdx}',
  ];
  const files = Array.from(new Set(targets.flatMap((g) => glob.sync(g, { cwd: root, nodir: true }))))
    .map((rel) => path.resolve(root, rel))
    .filter((abs) => fs.existsSync(abs));

  const docs = files.map((abs) => {
    const rel = path.relative(root, abs);
    const ext = path.extname(abs).toLowerCase();
    const raw = readFileSafe(abs);
    const text = stripToText(raw, ext);
    const tokens = tokenize(text);
    const sig = shingles(tokens, 7);
    return { abs, rel, ext, tokens, sig, tokenCount: tokens.length };
  }).filter((d) => d.tokenCount >= 120);

  const pairs = [];
  for (let i = 0; i < docs.length; i++) {
    for (let j = i + 1; j < docs.length; j++) {
      const a = docs[i], b = docs[j];
      const score = jaccard(a.sig, b.sig);
      if (score >= 0.62) {
        // extract a representative overlapping shingle if any
        let sample = '';
        for (const s of a.sig) { if (b.sig.has(s)) { sample = s; break; } }
        pairs.push({ a: a.rel, b: b.rel, similarity: Number(score.toFixed(4)), sample });
      }
    }
  }
  pairs.sort((x, y) => y.similarity - x.similarity);

  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g, '-');
  const outDir = path.join(root, 'data', 'reports', 'duplicate-content');
  ensureDir(outDir);
  const latestPath = path.join(outDir, 'latest.json');
  const reportPath = path.join(outDir, `report-${stamp}.json`);
  const summary = {
    generatedAt: now.toISOString(),
    totalComparedFiles: docs.length,
    totalPairs: pairs.length,
    pairs,
  };
  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));

  // Write Markdown summary
  const mdDir = path.join(root, 'docs', 'reports');
  ensureDir(mdDir);
  const mdPath = path.join(mdDir, 'duplicate-content.md');
  const md = [
    '# Duplicate Content Report',
    '',
    `Generated: ${now.toISOString()}`,
    '',
    `Compared files: ${docs.length}`,
    `Similar pairs (>= 0.62): ${pairs.length}`,
    '',
    ...pairs.slice(0, 50).map((p) => `- ${p.a} ↔ ${p.b} — similarity ${p.similarity}${p.sample ? ` — e.g. “${p.sample.slice(0, 120)}”` : ''}`)
  ].join('\n');
  fs.writeFileSync(mdPath, md);

  console.log(`Duplicate content analysis complete. Pairs: ${pairs.length}`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}