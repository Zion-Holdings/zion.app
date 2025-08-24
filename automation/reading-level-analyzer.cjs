#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIRS = [path.join(ROOT, 'docs'), path.join(ROOT, 'pages')];
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'reading-level');
const JSON_PATH = path.join(REPORT_DIR, 'latest.json');
const HTML_PATH = path.join(REPORT_DIR, 'index.html');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFiles(dir, exts) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFiles(full, exts));
    else if (exts.includes(path.extname(entry.name))) results.push(full);
  }
  return results;
}

function extractText(content) {
  return String(content)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[#*_>\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  let count = 0;
  const vowels = 'aeiouy';
  for (let i = 0; i < w.length; i++) {
    if (vowels.includes(w[i]) && !vowels.includes(w[i - 1] || '')) count++;
  }
  if (w.endsWith('e')) count--; // silent e
  if (w.endsWith('le') && !vowels.includes(w[w.length - 3] || '')) count++;
  return Math.max(1, count);
}

function readingEase(text) {
  const sentences = text.split(/[.!?]+\s/).filter(Boolean);
  const words = text.split(/\s+/).filter(Boolean);
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const S = Math.max(1, sentences.length);
  const W = Math.max(1, words.length);
  const L = (W / S) * 1.0; // words per sentence
  const P = (syllables / W) * 100.0; // syllables per 100 words
  // Flesch Reading Ease
  const score = 206.835 - 1.015 * L - 84.6 * (syllables / W);
  return { score, sentences: S, words: W, syllables };
}

function gradeFromScore(score) {
  if (score >= 90) return 'Very easy (5th grade)';
  if (score >= 80) return 'Easy (6th grade)';
  if (score >= 70) return 'Fairly easy (7th grade)';
  if (score >= 60) return 'Standard (8-9th)';
  if (score >= 50) return 'Fairly difficult (10-12th)';
  if (score >= 30) return 'Difficult (college)';
  return 'Very confusing (college graduate)';
}

function analyzeFile(filePath) {
  let src = '';
  try { src = fs.readFileSync(filePath, 'utf8'); } catch { return null; }
  const text = extractText(src);
  if (!text) return null;
  const { score, sentences, words, syllables } = readingEase(text);
  return {
    file: path.relative(ROOT, filePath),
    score: Number(score.toFixed(2)),
    grade: gradeFromScore(score),
    sentences, words, syllables,
  };
}

function generateHtml(report) {
  const rows = report.items.map((it) => `
<tr>
  <td><code>${escapeHtml(it.file)}</code></td>
  <td>${it.score}</td>
  <td>${escapeHtml(it.grade)}</td>
  <td>${it.sentences}</td>
  <td>${it.words}</td>
  <td>${it.syllables}</td>
</tr>`).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Reading Level Report</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:0 0 16px 0}
    table{width:100%;border-collapse:collapse}
    th,td{border:1px solid rgba(255,255,255,0.12);padding:8px;vertical-align:top}
    th{background:rgba(255,255,255,0.06)}
    code{color:#e5e7eb}
    .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#14b8a6;color:#042f2e;font-weight:600;font-size:12px}
  </style>
</head>
<body>
  <h1>Reading Level Report <span class="badge">${report.items.length} files</span></h1>
  <p>Assesses readability (Flesch Reading Ease) across docs and pages to help align tone with audience.</p>
  <div class="card">
    <div><strong>Generated:</strong> ${new Date(report.generatedAt).toLocaleString()}</div>
  </div>
  <table>
    <thead><tr><th>File</th><th>Score</th><th>Grade</th><th>Sentences</th><th>Words</th><th>Syllables</th></tr></thead>
    <tbody>
      ${rows || '<tr><td colspan="6">No text content found.</td></tr>'}
    </tbody>
  </table>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

(function main() {
  ensureDir(REPORT_DIR);
  const files = SOURCE_DIRS.flatMap((d) => listFiles(d, ['.md', '.mdx', '.tsx', '.jsx', '.ts', '.js']));
  const items = [];
  for (const file of files) {
    const result = analyzeFile(file);
    if (result) items.push(result);
  }
  items.sort((a, b) => a.score - b.score); // low readability first
  const report = { generatedAt: new Date().toISOString(), items };
  fs.writeFileSync(JSON_PATH, JSON.stringify(report, null, 2), 'utf8');
  fs.writeFileSync(HTML_PATH, generateHtml(report), 'utf8');
  process.stdout.write(`[reading-level] Report written to ${path.relative(ROOT, HTML_PATH)}\n`);
})();