#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'pages', 'reports', 'innovations');
const REGISTRY = path.join(ROOT, 'public', 'automation', 'new-content-registry.json');
const SEARCH_INDEX = path.join(ROOT, 'public', 'search', 'index.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }
function now() { const d = new Date(); return { y: d.getUTCFullYear(), m: String(d.getUTCMonth()+1).padStart(2,'0'), d: String(d.getUTCDate()).padStart(2,'0'), H: String(d.getUTCHours()).padStart(2,'0'), M: String(d.getUTCMinutes()).padStart(2,'0') }; }
function pick(a) { return Array.isArray(a) && a.length ? a[Math.floor(Math.random()*a.length)] : undefined; }

function ideate() {
  const search = (readJson(SEARCH_INDEX, { items: [] }).items || []).map(i => i.title || i.path).filter(Boolean);
  const domains = ['RAG Platforms','Agent Ops','MLOps','Edge AI','FinOps for AI','DevSecOps AI','AI QA & Eval','LLM Apps'];
  const kinds = ['Guide','Runbook','Blueprint','Checklist','Pilot Plan','Playbook'];
  const outcomes = ['reduce cost','improve reliability','increase accuracy','accelerate delivery','enhance security'];
  const title = `${pick(kinds) || 'Guide'}: ${pick(domains) || 'AI Services'}`;
  const subtitle = `Patterns to ${pick(outcomes) || 'drive impact'}.`;
  const cue = pick(search) || 'AI Services';
  const bullets = [
    `Scope: ${title}.`,
    `Signals: ${cue}.`,
    'Architecture: ingestion → retrieval → reasoning → evaluation.',
    'Ops: observability, rollback, SLOs, security.',
  ];
  return { title, subtitle, bullets };
}

function tpl({ title, subtitle, bullets }) {
  return `import Head from 'next/head';

export default function InsightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${title}</title>
        <meta name="description" content="${subtitle}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${subtitle}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-3xl font-extrabold">${title}</h1>
        <p className="text-white/70">${subtitle}</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
${bullets.map(b => `          <li>${b}</li>`).join('\n')}
        </ul>
        <p className="mt-6">More at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">ziontechgroup.com</a>.</p>
      </main>
    </div>
  );
}
`;
}

function writeRegistry(entry) {
  const reg = readJson(REGISTRY, { items: [] });
  reg.items = Array.isArray(reg.items) ? reg.items : [];
  reg.items.unshift(entry);
  reg.items = reg.items.slice(0, 300);
  ensureDir(path.dirname(REGISTRY));
  fs.writeFileSync(REGISTRY, JSON.stringify(reg, null, 2));
}

function main() {
  ensureDir(OUT_DIR);
  const t = now();
  const slug = `insight-${t.y}-${t.m}-${t.d}-${t.H}${t.M}`;
  const out = path.join(OUT_DIR, `${slug}.tsx`);
  if (fs.existsSync(out)) return;
  const idea = ideate();
  fs.writeFileSync(out, tpl(idea), 'utf8');
  writeRegistry({ title: idea.title, subtitle: idea.subtitle, path: `/reports/innovations/${slug}`, createdAt: new Date().toISOString(), kind: 'insight' });
  console.log('created', path.relative(ROOT, out));
}

main();


