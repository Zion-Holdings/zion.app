#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'marketplace');
const TRENDS_DIR = path.join(DATA_DIR, 'trends');
const SOLUTIONS_DIR = path.join(DATA_DIR, 'solutions');
const LOG_DIR = path.join(__dirname, 'logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function log(message) {
  ensureDir(LOG_DIR);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(path.join(LOG_DIR, 'intelligent-solutions-factory.log'), line);
}

function latestTrendFile() {
  ensureDir(TRENDS_DIR);
  const files = fs.readdirSync(TRENDS_DIR).filter(f => f.endsWith('.json')).map(f => path.join(TRENDS_DIR, f));
  files.sort((a,b) => (fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs));
  return files[0] || null;
}

function sanitizeSlug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

function pickPriceUSD(title) {
  const t = title.toLowerCase();
  if (t.includes('enterprise') || t.includes('platform')) return 4999;
  if (t.includes('agent')) return 1999;
  if (t.includes('rag') || t.includes('retrieval')) return 1499;
  if (t.includes('evaluation') || t.includes('guard')) return 1299;
  if (t.includes('monitor') || t.includes('observe')) return 999;
  return 799;
}

function templateSolution(title) {
  const slug = sanitizeSlug(title);
  const now = new Date().toISOString();
  const priceUSD = pickPriceUSD(title);
  return {
    id: slug,
    slug,
    title,
    category: 'AI Solution',
    status: 'published',
    summary: `Production-ready implementation blueprint for "${title}" tailored to your stack. Includes setup, orchestration, and evaluation playbooks.`,
    problem: `Organizations struggle to operationalize ${title} quickly and safely while aligning with business KPIs.`,
    features: [
      'Architecture diagram and component selection',
      'Reference implementation templates and CLI scaffolding',
      'Data + evaluation plan with measurable KPIs',
      'Observability and guardrails recommendations',
      'Deployment guide for cloud/serverless/edge targets',
      'Handover documentation and maintenance checklist'
    ],
    outcomes: [
      'Accelerated time-to-value',
      'Reduced integration risk',
      'Operational visibility and safety',
      'Repeatable workflows for continuous improvement'
    ],
    pricing: {
      currency: 'USD',
      model: 'fixed',
      priceUSD,
      tiers: [
        { name: 'Starter', priceUSD, includes: ['Blueprint + Templates', 'Email support (30 days)'] },
        { name: 'Pro', priceUSD * 1.8, includes: ['Starter', 'Hands-on integration support (10h)', 'Custom eval harness'] },
        { name: 'Enterprise', priceUSD * 3, includes: ['Pro', 'Security review', 'SLA & training'] }
      ]
    },
    cta: { type: 'contact', url: `/contact?solution=${slug}` },
    tags: Array.from(new Set(title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean))).slice(0, 10),
    createdAt: now
  };
}

function main() {
  log('🏭 Intelligent Solutions Factory running');
  ensureDir(SOLUTIONS_DIR);
  const trendFile = latestTrendFile();
  if (!trendFile) { log('No trend file found; nothing to do'); return; }
  const trend = JSON.parse(fs.readFileSync(trendFile, 'utf8'));
  const candidateTitles = [];
  // Prefer normalized themes as titles; fallback to raw titles
  if (Array.isArray(trend.themes) && trend.themes.length > 0) {
    for (const theme of trend.themes) {
      const cap = theme.replace(/\b\w/g, c => c.toUpperCase());
      candidateTitles.push(cap);
    }
  }
  if (candidateTitles.length < 5 && Array.isArray(trend.titles)) {
    candidateTitles.push(...trend.titles.slice(0, 20));
  }

  // Limit per run to avoid churn
  const limit = 10;
  let created = 0;
  for (const title of candidateTitles) {
    if (created >= limit) break;
    const slug = sanitizeSlug(title);
    const outPath = path.join(SOLUTIONS_DIR, `${slug}.json`);
    if (fs.existsSync(outPath)) continue;
    const solution = templateSolution(title);
    fs.writeFileSync(outPath, JSON.stringify(solution, null, 2));
    created += 1;
    log(`Created solution: ${outPath}`);
  }
  log(`✅ Solutions created this run: ${created}`);
}

if (require.main === module) main();