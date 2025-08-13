#!/usr/bin/env node

'use strict';

// New autonomous content factory. Generates diversified AI/IT service updates
// as standalone Next.js pages under pages/reports/updates/.
// Does NOT modify existing automations; only creates new content files.

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function timestampParts(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  const hh = String(date.getUTCHours()).padStart(2, '0');
  const mm = String(date.getUTCMinutes()).padStart(2, '0');
  return { y, m, d, hh, mm };
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createContentSeed() {
  // Deterministic yet varied seeds for innovative content ideas.
  const domains = [
    'AI Service Design',
    'Data Engineering',
    'MLOps & Model Reliability',
    'Applied NLP & RAG',
    'Vision & Multimodal',
    'Edge AI & IoT',
    'Cloud Cost Optimization',
    'DevSecOps for AI',
    'Evaluation & Safety',
    'Agentic Workflows',
  ];
  const focuses = [
    'Blueprint',
    'Playbook',
    'Checklist',
    'Capability Map',
    'Reference Architecture',
    'Performance Tuning Guide',
    'Security Hardening Guide',
    'Validation & QA Plan',
  ];
  const benefits = [
    'reduce latency for LLM apps',
    'improve observability and uptime',
    'enhance retrieval quality with domain knowledge',
    'decrease unit cost per request',
    'increase content relevance and conversions',
    'streamline CI/CD for models',
    'harden privacy and compliance',
    'accelerate iteration velocity',
  ];

  const domain = pick(domains);
  const focus = pick(focuses);
  const benefit = pick(benefits);
  return { domain, focus, benefit };
}

function buildPageSource(title, subtitle, bullets) {
  // Keep style consistent with existing update pages
  return [
    "import Head from 'next/head';",
    '',
    'export default function UpdatePage() {',
    '  return (',
    '    <div className="min-h-screen bg-slate-950 text-white">',
    '      <Head>',
    `        <title>${title}</title>`,
    '        <meta name="description" content="Autonomously generated update with curated highlights." />',
    '        <meta name="keywords" content="AI, automation, autonomous systems, product updates, engineering, Trends" />',
    '        <link rel="canonical" href="https://ziontechgroup.com" />',
    '',
    `        <meta property=\"og:title\" content=\"${title}\" />`,
    `        <meta property=\"og:description\" content=\"${subtitle}\" />`,
    '        <meta name="twitter:card" content="summary_large_image" />',
    '        <script type="application/ld+json">{JSON.stringify({',
    '          "@context": "https://schema.org",',
    '          "@type": "Article",',
    '          "headline": "'+"${title}"+'",',
    '          "description": "'+"${subtitle}"+'",',
    '          "author": { "@type": "Organization", "name": "Zion Tech Group" }',
    '        })}</script>',
    '      </Head>',
    '      <main className="container mx-auto px-6 py-12 prose prose-invert">',
    `        <h1 className="text-3xl font-extrabold">${title}</h1>`,
    `        <p className="text-white/70">${subtitle}</p>`,
    '        <ul className="mt-6 list-disc pl-6 space-y-2">',
    ...bullets.map((b) => `          <li>${b}</li>`),
    '        </ul>',
    '        <p className="mt-6">Learn more at <a className="text-cyan-300 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">https://ziontechgroup.com</a>.</p>',
    '      </main>',
    '    </div>',
    '  );',
    '}',
    '',
  ].join('\n');
}

function main() {
  ensureDir(UPDATES_DIR);

  const now = new Date();
  const { y, m, d, hh, mm } = timestampParts(now);
  const slug = `update-${y}-${m}-${d}-${hh}${mm}`;
  const outfile = path.join(UPDATES_DIR, `${slug}.tsx`);

  // If a page already exists for this minute, skip to avoid churn
  if (fs.existsSync(outfile)) {
    console.log('ai-content-factory: page already exists for this minute, skipping');
    return;
  }

  const seed = createContentSeed();
  const title = `Autonomous ${seed.focus} — ${seed.domain} (${y}-${m}-${d} ${hh}:${mm} UTC)`;
  const subtitle = `Innovative, useful guidance to ${seed.benefit}.`;
  const bullets = [
    `What it is: ${seed.focus} for ${seed.domain}.`,
    `Why it matters: helps teams ${seed.benefit}.`,
    'Key components: scope, architecture, metrics, risks.',
    'Next steps: integrate into delivery roadmap and measure impact.',
  ];

  const src = buildPageSource(title, subtitle, bullets);
  fs.writeFileSync(outfile, src, 'utf8');
  console.log('ai-content-factory: created', path.relative(ROOT, outfile));
}

main();


