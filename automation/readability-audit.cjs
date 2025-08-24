#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SCAN_DIRS = ['pages', 'docs'].map((p) => path.join(ROOT, p));
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'readability');
const MD_REPORT = path.join(ROOT, 'docs', 'readability-report.md');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);
ensureDir(path.dirname(MD_REPORT));

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(full));
    else if (/\.(md|mdx|tsx|ts|jsx|js)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function textFromSource(content) {
  // Very naive text extraction: remove JSX/HTML tags and braces blocks
  let t = content.replace(/<[^>]*>/g, ' ');
  t = t.replace(/\{[^}]*\}/g, ' ');
  t = t.replace(/[`*#_>\[\]\(\)~]/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  // Heuristic: count vowel groups, adjust endings
  const matches = w.match(/[aeiouy]+/g) || [];
  let syllables = matches.length;
  if (w.endsWith('e')) syllables = Math.max(1, syllables - 1);
  if (w.length <= 3) syllables = 1;
  return syllables;
}

function computeMetrics(text) {
  if (!text) return { words: 0, sentences: 0, syllables: 0, fleschReadingEase: 0, fleschKincaidGrade: 0 };
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const numWords = words.length || 1;
  const numSentences = sentences.length || 1;
  const numSyllables = syllables || 1;
  const fleschReadingEase = 206.835 - 1.015 * (numWords / numSentences) - 84.6 * (numSyllables / numWords);
  const fleschKincaidGrade = 0.39 * (numWords / numSentences) + 11.8 * (numSyllables / numWords) - 15.59;
  return {
    words: numWords,
    sentences: numSentences,
    syllables: numSyllables,
    fleschReadingEase: Number(fleschReadingEase.toFixed(2)),
    fleschKincaidGrade: Number(fleschKincaidGrade.toFixed(2)),
  };
}

(function main() {
  const files = SCAN_DIRS.flatMap(listFiles);
  const results = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const text = textFromSource(content);
      const metrics = computeMetrics(text);
      results.push({ file: path.relative(ROOT, file), ...metrics });
    } catch {}
  }

  const avg = (key) => (results.length ? (results.reduce((s, r) => s + (r[key] || 0), 0) / results.length) : 0);
  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      files: results.length,
      words: results.reduce((s, r) => s + (r.words || 0), 0),
    },
    averages: {
      fleschReadingEase: Number(avg('fleschReadingEase').toFixed(2)),
      fleschKincaidGrade: Number(avg('fleschKincaidGrade').toFixed(2)),
      words: Number(avg('words').toFixed(0)),
      sentences: Number(avg('sentences').toFixed(0)),
    },
    topDifficult: results.slice().sort((a, b) => (b.fleschKincaidGrade - a.fleschKincaidGrade)).slice(0, 20),
  };

  const jsonPath = path.join(REPORT_DIR, `report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify({ summary, results }, null, 2));
  console.log(`Readability report saved to ${jsonPath}`);

  const mdLines = [];
  mdLines.push('# Readability Report');
  mdLines.push('');
  mdLines.push(`Generated: ${summary.generatedAt}`);
  mdLines.push('');
  mdLines.push(`- Files analyzed: ${summary.totals.files}`);
  mdLines.push(`- Avg Flesch Reading Ease: ${summary.averages.fleschReadingEase}`);
  mdLines.push(`- Avg Flesch-Kincaid Grade: ${summary.averages.fleschKincaidGrade}`);
  mdLines.push('');
  mdLines.push('## Top 20 Most Difficult Files (by Grade)');
  mdLines.push('');
  for (const r of summary.topDifficult) {
    mdLines.push(`- ${r.file} — Grade ${r.fleschKincaidGrade} (FRE ${r.fleschReadingEase})`);
  }
  fs.writeFileSync(MD_REPORT, mdLines.join('\n'));
  console.log(`Markdown summary written to ${MD_REPORT}`);
})();