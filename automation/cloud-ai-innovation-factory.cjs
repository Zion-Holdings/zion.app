#!/usr/bin/env node

'use strict';

// Cloud AI Innovation Factory
// Creates diversified AI/IT innovations content as standalone Next.js pages under pages/reports/innovations/.
// Does NOT modify existing automations; only adds new files.

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'pages', 'reports', 'innovations');
const DATA_TOPICS = path.join(ROOT, 'data', 'topics-map.json');
const SEO_LATEST = path.join(ROOT, 'public', 'reports', 'seo', 'latest.json');
const SEARCH_INDEX = path.join(ROOT, 'public', 'search', 'index.json');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function safeReadJson(file, fallback) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch {}
  return fallback;
}

function timestamp() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return { y, m, day, hh, mm };
}

function pick(arr, n = 1) {
  const a = Array.isArray(arr) ? arr.slice() : [];
  const out = [];
  while (a.length && out.length < n) {
    out.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
  }
  return n === 1 ? out[0] : out;
}

function synthesizeIdeas() {
  const topics = safeReadJson(DATA_TOPICS, { topics: [] }).topics || [];
  const seo = safeReadJson(SEO_LATEST, { pages: [] }).pages || [];
  const search = safeReadJson(SEARCH_INDEX, { items: [] }).items || [];

  const topicNames = topics.map(t => t.title || t.name).filter(Boolean);
  const seoPages = seo.map(p => p.path || p.url).filter(Boolean);
  const searchTerms = search.map(i => i.title || i.path).filter(Boolean);

  const domains = [
    'Generative AI Systems',
    'Data Engineering Pipelines',
    'MLOps & Observability',
    'Retrieval-Augmented Generation',
    'Agentic Orchestration',
    'Edge AI & IoT',
    'Cloud FinOps',
    'DevSecOps for AI',
    'Evaluation & Safety',
    'Autonomous UIs',
  ];

  const artifacts = [
    'Service Blueprint',
    'Reference Architecture',
    'Capability Map',
    'Runbook',
    'Checklist',
    'Playbook',
    'Implementation Guide',
    'Case Study Template',
  ];

  const benefits = [
    'reduce latency and cost',
    'increase reliability and uptime',
    'improve retrieval quality',
    'accelerate iteration speed',
    'enhance security and compliance',
    'boost conversion and engagement',
  ];

  const signals = [
    ...topicNames.slice(0, 10),
    ...seoPages.slice(0, 10),
    ...searchTerms.slice(0, 10)
  ].filter(Boolean);

  const domain = pick(domains);
  const artifact = pick(artifacts);
  const benefit = pick(benefits);
  const inspo = pick(signals.length ? signals : ['AI Services', 'Cloud Architecture', 'RAG Patterns']);

  const bullets = [
    `Scope and objectives: ${artifact} for ${domain}.`,
    `Key components: ingestion, processing, models, evaluation, and governance.`,
    `Design notes informed by: ${inspo}.`,
    `Expected impact: ${benefit}.`,
    `Next steps: pilot, measure, and harden for production.`
  ];

  const title = `${artifact} — ${domain}`;
  const subtitle = `Innovative, useful guidance to ${benefit}.`;

  return { title, subtitle, bullets };
}

function buildPageSource(title, subtitle, bullets) {
  return [
    "import Head from 'next/head';",
    '',
    'export default function InnovationPage() {',
    '  return (',
    '    <div className="min-h-screen bg-slate-950 text-white">',
    '      <Head>',
    `        <title>${title}</title>`,
    '        <meta name="description" content="Autonomously generated innovations content." />',
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
    '        <p className="mt-6">Learn more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener">https://ziontechgroup.com</a>.</p>',
    '      </main>',
    '    </div>',
    '  );',
    '}',
    '',
  ].join('\n');
}

function main() {
  ensureDir(OUT_DIR);
  const { y, m, day, hh, mm } = timestamp();
  const slug = `innovation-${y}-${m}-${day}-${hh}${mm}`;
  const outfile = path.join(OUT_DIR, `${slug}.tsx`);

  if (fs.existsSync(outfile)) {
    console.log('cloud-ai-innovation-factory: file exists for this minute, skipping');
    return;
  }

  const idea = synthesizeIdeas();
  const src = buildPageSource(idea.title, idea.subtitle, idea.bullets);
  fs.writeFileSync(outfile, src, 'utf8');
  console.log('cloud-ai-innovation-factory: created', path.relative(ROOT, outfile));
}

main();


