#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function readFiles(dir, ext) { if (!fs.existsSync(dir)) return []; return fs.readdirSync(dir).filter(f => f.endsWith(ext)).map(f => path.join(dir, f)); }
function tightenPrompt(text) {
  const trimmed = String(text || '').replace(/\s+/g, ' ').trim();
  const without = trimmed
    .replace(/\bplease\b\s*/gi, '')
    .replace(/\bcould you\b\s*/gi, '')
    .replace(/\bbasically\b\s*/gi, '')
    .replace(/\bkind of\b\s*/gi, '')
    .replace(/\bsort of\b\s*/gi, '')
    .replace(/\bvery\b\s*/gi, '')
    .replace(/\breally\b\s*/gi, '');
  return `${without}\n\nConstraints: concise; 4-6 bullets; max 120 words; avoid repetition.`;
}

const root = process.cwd();
const srcDir = path.join(root, 'data', 'prompts', 'source');
const outJson = path.join(root, 'automation_logs', 'prompt-benchmark.json');
const outMdDir = path.join(root, 'docs', 'zion-brain');
const outMd = path.join(outMdDir, 'prompt-benchmark.md');
ensureDir(path.dirname(outJson));
ensureDir(outMdDir);

const files = readFiles(srcDir, '.md');
const rows = [];
for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf8');
  const optimized = tightenPrompt(content);
  const before = content.length;
  const after = optimized.length;
  const reduction = before > 0 ? ((before - after) / before) : 0;
  const estLatencyGain = Math.max(0, Math.min(0.5, reduction));
  rows.push({ file: path.basename(fp), before, after, reduction, estLatencyGain });
}

fs.writeFileSync(outJson, JSON.stringify({ generatedAt: new Date().toISOString(), rows }, null, 2));

const md = [];
md.push('# Prompt Benchmark');
md.push('');
md.push(`Updated: ${new Date().toISOString()}`);
md.push('');
if (rows.length === 0) {
  md.push('No prompts found in data/prompts/source.');
} else {
  md.push('| File | Before | After | Reduction | Est. Latency Gain |');
  md.push('|---|---:|---:|---:|---:|');
  for (const r of rows) md.push(`| ${r.file} | ${r.before} | ${r.after} | ${(r.reduction*100).toFixed(1)}% | ${(r.estLatencyGain*100).toFixed(1)}% |`);
}
fs.writeFileSync(outMd, md.join('\n'));
console.log('Prompt benchmark written:', outJson, 'and', outMd);