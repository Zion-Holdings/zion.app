#!/usr/bin/env node

'use strict';

// AI + IT Innovations Factory (new)
// - Creates diversified, useful content pages about AI/IT services
// - Writes to pages/reports/innovations/insight-YYYY-MM-DD-HHMM.tsx
// - Does not modify existing automations

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'pages', 'reports', 'innovations');
const SEARCH_INDEX = path.join(ROOT, 'public', 'search', 'index.json');
const CONTENT_REGISTRY = path.join(ROOT, 'public', 'automation', 'new-content-registry.json');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function safeReadJson(file, fallback) {
  try {
    if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {}
  return fallback;
}

function nowParts() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return { y, m, day, hh, mm };
}

function pickRandom(list) {
  if (!Array.isArray(list) || list.length === 0) return undefined;
  return list[Math.floor(Math.random() * list.length)];
}

function synthesize() {
  const search = safeReadJson(SEARCH_INDEX, { items: [] }).items || [];
  const cues = search
    .map(i => i.title || i.path || '')
    .filter(Boolean)
    .slice(0, 25);

  const serviceDomains = [
    'Secure RAG Platforms',
    'LLM Application Engineering',
    'Cloud-Native MLOps',
    'Agentic Process Automation',
    'Data Quality and Observability',
    'Customer Support AI',
    'Sales Enablement AI',
    'Developer Productivity AI',
    'Compliance-Aware AI',
    'Cost-Optimized Inference',
  ];

  const deliverables = [
    'Solution Brief',
    'Implementation Guide',
    'Architecture Notes',
    'Pilot Plan',
    'Production Checklist',
    'Runbook',
    'Reference Configurations',
  ];

  const outcomes = [
    'reduce operational toil',
    'improve answer accuracy',
    'speed up deployment',
    'lower infrastructure cost',
    'enhance governance and auditability',
    'increase customer satisfaction',
  ];

  const domain = pickRandom(serviceDomains) || 'AI/IT Services';
  const deliverable = pickRandom(deliverables) || 'Guide';
  const outcome = pickRandom(outcomes) || 'drive better outcomes';
  const cue = pickRandom(cues) || 'AI Services';

  const title = `${deliverable}: ${domain}`;
  const subtitle = `Practical patterns to ${outcome}.`;
  const bullets = [
    `Scope: ${deliverable} for ${domain}.`,
    `Signals: ${cue}.`,
    'Tech stack: ingestion, vectorization, evaluation, governance.',
    'Rollout: pilot → KPIs → harden for scale.',
    'Security: least-privilege, secrets management, data residency.',
  ];

  return { title, subtitle, bullets };
}

function buildPage({ title, subtitle, bullets }) {
  return [
    "import Head from 'next/head';",
    '',
    'export default function InsightPage() {',
    '  return (',
    '    <div className="min-h-screen bg-slate-950 text-white">',
    '      <Head>',
    `        <title>${title}</title>`,
    `        <meta name="description" content="${subtitle}" />`,
    `        <meta property=\"og:title\" content=\"${title}\" />`,
    `        <meta property=\"og:description\" content=\"${subtitle}\" />`,
    '        <meta name="twitter:card" content="summary_large_image" />',
    '      </Head>',
    '      <main className="container mx-auto px-6 py-12 prose prose-invert">',
    `        <h1 className="text-3xl font-extrabold">${title}</h1>`,
    `        <p className="text-white/70">${subtitle}</p>`,
    '        <ul className="mt-6 list-disc pl-6 space-y-2">',
    ...bullets.map(b => `          <li>${b}</li>`),
    '        </ul>',
    '        <p className="mt-6">Discover more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">ziontechgroup.com</a>.</p>',
    '      </main>',
    '    </div>',
    '  );',
    '}',
    '',
  ].join('\n');
}

function updateRegistry(entry) {
  const registry = safeReadJson(CONTENT_REGISTRY, { items: [] });
  registry.items = Array.isArray(registry.items) ? registry.items : [];
  registry.items.unshift(entry);
  registry.items = registry.items.slice(0, 500);
  fs.mkdirSync(path.dirname(CONTENT_REGISTRY), { recursive: true });
  fs.writeFileSync(CONTENT_REGISTRY, JSON.stringify(registry, null, 2));
}

function main() {
  ensureDir(OUT_DIR);
  const { y, m, day, hh, mm } = nowParts();
  const slug = `insight-${y}-${m}-${day}-${hh}${mm}`;
  const out = path.join(OUT_DIR, `${slug}.tsx`);
  if (fs.existsSync(out)) {
    console.log('ai-it-innovations-factory: file exists for this minute, skipping');
    return;
  }

  const idea = synthesize();
  const src = buildPage(idea);
  fs.writeFileSync(out, src, 'utf8');
  console.log('ai-it-innovations-factory: created', path.relative(ROOT, out));

  updateRegistry({
    title: idea.title,
    subtitle: idea.subtitle,
    path: `/reports/innovations/${slug}`,
    createdAt: new Date().toISOString(),
    kind: 'insight'
  });
}

main();


