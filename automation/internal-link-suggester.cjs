#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursively(dirPath, extensions) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      // Skip build and hidden directories
      if (entry.name.startsWith('.next') || entry.name === 'node_modules' || entry.name === '.git') continue;
      results.push(...listFilesRecursively(full, extensions));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) results.push(full);
    }
  }
  return results;
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function extractTitle(content) {
  // Prefer <title> in Head
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) return titleMatch[1].trim();
  // Fallback to first <h1>
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) return stripTags(h1Match[1]).trim();
  return '';
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
}

const STOP_WORDS = new Set([
  'the','and','for','with','that','this','from','are','was','were','will','your','you','our','but','not','all','can','has','have','had','any','more','now','new','into','out','how','why','what','when','where','who','use','uses','used','using','very','just','over','again','each','other','than','then','them','they','their','there','about','also','into','across','via','into','onto','one','two','three','four','five','six','seven','eight','nine','ten','site','page','pages','front','home'
]);

function jaccardSimilarity(aTokens, bTokens) {
  const a = new Set(aTokens);
  const b = new Set(bTokens);
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function toRoute(filePath) {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  let rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  if (rel.endsWith('/index.tsx') || rel.endsWith('/index.ts')) rel = rel.replace(/\/index\.tsx?$/, '/');
  if (rel.endsWith('.tsx') || rel.endsWith('.ts') || rel.endsWith('.jsx') || rel.endsWith('.js')) rel = rel.replace(/\.(t|j)sx?$/, '');
  if (!rel.startsWith('/')) rel = '/' + rel;
  if (rel === '/_app') return '';
  return rel;
}

function main() {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.error('pages/ directory not found');
    process.exit(0);
  }

  const files = listFilesRecursively(pagesDir, ['.tsx', '.ts', '.jsx', '.js']).filter((f) => !/\/(api|_app|_document)\./.test(f));

  const docs = [];
  for (const file of files) {
    const content = readFileSafe(file);
    const title = extractTitle(content) || path.basename(file);
    const text = stripTags(content);
    const tokens = tokenize(title + ' ' + text);
    const route = toRoute(file);
    if (!route) continue;
    docs.push({ file, route, title, tokens });
  }

  const related = [];
  for (let i = 0; i < docs.length; i++) {
    const a = docs[i];
    const scores = [];
    for (let j = 0; j < docs.length; j++) {
      if (i === j) continue;
      const b = docs[j];
      const score = jaccardSimilarity(a.tokens, b.tokens);
      if (score > 0.05) scores.push({ route: b.route, title: b.title, score: Number(score.toFixed(3)) });
    }
    scores.sort((x, y) => y.score - x.score);
    related.push({ route: a.route, title: a.title, related: scores.slice(0, 6) });
  }

  const outDir = path.resolve(process.cwd(), 'data');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'related-links.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), pages: related }, null, 2));
  console.log(`Wrote related links report: ${path.relative(process.cwd(), outPath)}`);
}

if (require.main === module) {
  main();
}