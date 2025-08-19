#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFiles(root, exts) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git' || e.name === '.next' || e.name === 'out') continue;
        walk(p);
      } else if (exts.has(path.extname(e.name).toLowerCase())) {
        results.push(p);
      }
    }
  }
  walk(root);
  return results;
}

function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }

function analyzeFile(filePath, content) {
  const lines = content.split(/\r?\n/);
  const issues = [];
  const warn = (type, message, line = 0) => issues.push({ type, message, line });

  if (lines.length > 500) warn('size/lines', `File has ${lines.length} lines (>500)`);
  const todoCount = (content.match(/\bTODO\b/gi) || []).length;
  if (todoCount > 0) warn('maint/todo', `Contains ${todoCount} TODOs`);
  const fixme = (content.match(/\bFIXME\b/gi) || []).length;
  if (fixme > 0) warn('maint/fixme', `Contains ${fixme} FIXMEs`);
  const tsIgnore = (content.match(/@ts-ignore/gi) || []).length;
  if (tsIgnore > 0) warn('ts/ignore', `Contains ${tsIgnore} @ts-ignore directives`);
  const eslintDisable = (content.match(/eslint-disable/gi) || []).length;
  if (eslintDisable > 0) warn('lint/disable', `Contains ${eslintDisable} eslint-disable directives`);
  const anyUsage = (content.match(/:\s*any\b/g) || []).length;
  if (anyUsage > 3) warn('types/any', `Contains ${anyUsage} ': any' annotations`);
  const consoleLogs = (content.match(/console\.(log|debug|trace)\(/g) || []).length;
  if (consoleLogs > 5) warn('debug/console', `Contains ${consoleLogs} console logs`);
  const longLines = lines.reduce((acc, l) => acc + (l.length > 140 ? 1 : 0), 0);
  if (longLines > 10) warn('style/long-lines', `${longLines} lines exceed 140 chars`);
  const imgNoAlt = (content.match(/<img\b(?![^>]*\balt=)/gi) || []).length;
  if (imgNoAlt > 0) warn('a11y/img-alt', `${imgNoAlt} <img> tags missing alt attribute`);
  const fetchNoTimeout = (content.match(/fetch\s*\(/g) || []).length > 0 && !/AbortController|signal\s*:\s*/.test(content);
  if (fetchNoTimeout) warn('net/timeout', 'Uses fetch() without AbortController signal');

  return { file: filePath, issues };
}

(function main() {
  const workspace = process.cwd();
  const roots = [path.join(workspace, 'pages'), path.join(workspace, 'components'), path.join(workspace, 'automation'), path.join(workspace, 'scripts')];
  const exts = new Set(['.ts', '.tsx', '.js', '.jsx']);
  const files = roots.flatMap(r => listFiles(r, exts));
  const results = [];
  for (const f of files) {
    const rel = path.relative(workspace, f);
    const content = read(f);
    const res = analyzeFile(rel, content);
    if (res.issues.length) results.push(res);
  }
  results.sort((a, b) => b.issues.length - a.issues.length);

  const outDir = path.join(workspace, 'public', 'reports', 'lint');
  ensureDir(outDir);
  const outJson = path.join(outDir, 'latest.json');
  const outHtml = path.join(outDir, 'index.html');
  const summary = { generatedAt: new Date().toISOString(), totalFilesWithIssues: results.length, totalIssues: results.reduce((s, r) => s + r.issues.length, 0) };
  fs.writeFileSync(outJson, JSON.stringify({ ...summary, results }, null, 2));

  const html = [];
  html.push('<!doctype html><meta charset="utf-8"/><title>Code Smell Audit</title>');
  html.push('<style>body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff} .card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0} code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px} .pill{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;border:1px solid rgba(59,130,246,.4);background:rgba(59,130,246,.15);font-size:12px}</style>');
  html.push(`<h1>Code Smell Audit</h1><p>Generated ${new Date().toLocaleString()}</p>`);
  html.push(`<p><strong>${summary.totalFilesWithIssues}</strong> files with issues; <strong>${summary.totalIssues}</strong> total issues.</p>`);
  results.slice(0, 300).forEach(r => {
    html.push('<div class="card">');
    html.push(`<h3><code>${r.file}</code></h3>`);
    html.push('<div>' + r.issues.map(i => `<span class="pill">${i.type}: ${i.message}</span>`).join(' ') + '</div>');
    html.push('</div>');
  });
  fs.writeFileSync(outHtml, html.join('\n'));

  process.stdout.write(`[code-smell-audit] filesWithIssues=${results.length} -> ${outJson}\n`);
})();