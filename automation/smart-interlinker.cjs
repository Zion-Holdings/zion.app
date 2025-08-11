#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(dir, exts = ['.md', '.mdx', '.tsx', '.ts', '.js', '.jsx']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.next')) continue;
      results.push(...walkDir(p, exts));
    } else {
      if (exts.includes(path.extname(entry.name))) results.push(p);
    }
  }
  return results;
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9_\-\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => w.length > 3 && !['the','and','for','with','from','this','that','into','your','you','are','was','were','have','has','had','use','used','using','our','about','page','href','link','next'].includes(w));
}

function computeTf(toks) {
  const tf = new Map();
  for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
  return tf;
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const pagesDir = path.join(repoRoot, 'pages');
  const docsDir = path.join(repoRoot, 'docs');
  const outDir = path.join(repoRoot, 'public', 'reports');
  fs.mkdirSync(outDir, { recursive: true });

  const files = [
    ...walkDir(pagesDir, ['.tsx', '.ts', '.md', '.mdx']),
    ...walkDir(docsDir, ['.md', '.mdx'])
  ];

  const articles = [];
  for (const f of files) {
    const text = readFileSafe(f);
    if (!text) continue;
    const toks = tokenize(text);
    if (toks.length < 50) continue;
    articles.push({ file: f, tokens: toks, tf: computeTf(toks) });
  }

  const df = new Map();
  for (const a of articles) {
    const seen = new Set(a.tokens);
    for (const t of seen) df.set(t, (df.get(t) || 0) + 1);
  }
  const N = articles.length || 1;

  function score(a, b) {
    let s = 0;
    for (const [t, cnt] of a.tf.entries()) {
      if (!b.tf.has(t)) continue;
      const idf = Math.log((N + 1) / ((df.get(t) || 1) + 1));
      s += cnt * (b.tf.get(t) || 0) * idf;
    }
    return s / (a.tokens.length * b.tokens.length);
  }

  const suggestions = [];
  for (let i = 0; i < articles.length; i++) {
    for (let j = 0; j < articles.length; j++) {
      if (i === j) continue;
      const a = articles[i];
      const b = articles[j];
      const s = score(a, b);
      if (s < 0.000002) continue;
      const aText = readFileSafe(a.file);
      const relPathB = path.relative(repoRoot, b.file).replace(/\\/g, '/');
      const linkAlready = aText.includes(relPathB.split('/').slice(1).join('/')) || aText.includes('/' + relPathB);
      if (!linkAlready) {
        suggestions.push({ from: path.relative(repoRoot, a.file), to: path.relative(repoRoot, b.file), score: s });
      }
    }
  }

  suggestions.sort((x, y) => y.score - x.score);
  const topSuggestions = suggestions.slice(0, 100);

  const now = new Date().toISOString();
  const md = [];
  md.push('# Internal Link Opportunities');
  md.push(`Generated: ${now}`);
  md.push('');
  md.push(`Files analyzed: ${articles.length}`);
  md.push(`Top suggestions: ${topSuggestions.length}`);
  md.push('');
  for (const s of topSuggestions) {
    md.push(`- Link from ${s.from} → ${s.to} (score: ${s.score.toFixed(6)})`);
  }

  fs.writeFileSync(path.join(outDir, 'interlink-opportunities.md'), md.join('\n'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'interlink-opportunities.json'), JSON.stringify({ generatedAt: now, suggestions: topSuggestions }, null, 2), 'utf8');

  console.log(`Generated ${topSuggestions.length} interlink suggestions.`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error('smart-interlinker failed:', err);
    process.exit(1);
  }
}