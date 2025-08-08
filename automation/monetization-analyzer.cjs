#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'monetization');
<<<<<<< HEAD
const REPORT_PATH = path.join(REPORT_DIR, 'monetization-actions.json');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function listFilesRecursive(dir, exts = ['.tsx', '.mdx', '.md']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(full, exts));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) results.push(full);
    }
  }
  return results;
}

function discoverCandidatePages() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const blogDir = path.join(pagesDir, 'blog');
  const servicesDir = path.join(pagesDir, 'services');
  const productsDir = path.join(pagesDir, 'products');

  const candidates = [];
  const pushIfExists = (p) => { if (fs.existsSync(p)) candidates.push(p); };

  pushIfExists(path.join(pagesDir, 'index.tsx'));
  pushIfExists(path.join(pagesDir, 'enhanced-home.tsx'));
  pushIfExists(path.join(pagesDir, 'contact.tsx'));
  pushIfExists(path.join(pagesDir, 'about.tsx'));

  for (const d of [blogDir, servicesDir, productsDir]) {
    candidates.push(...listFilesRecursive(d));
  }

  // De-duplicate and cap
  return Array.from(new Set(candidates)).slice(0, 200);
}

function buildActions() {
  // Curated set of monetization actions the factory knows how to generate agents for
  return [
    'introduce_pricing_cta_sections_on_high_traffic_pages',
    'add_contact_sales_cta_on_enterprise_pages',
    'generate_paid_consultation_booking_component',
    'create_affiliate_link_wrappers_for_blog_posts',
    'add_newsletter_paywall_teaser_on_long_posts'
  ];
=======
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function fileExists(...parts) { return fs.existsSync(path.join(...parts)); }

function readTextSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function walk(dir) {
  const entries = [];
  if (!fs.existsSync(dir)) return entries;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

function analyze() {
  const actions = new Set();
  const insights = [];

  // Pricing page presence
  const hasPricingPage = fileExists(PAGES_DIR, 'pricing.tsx') || fileExists(PAGES_DIR, 'pricing/index.tsx');
  if (!hasPricingPage) {
    actions.add('generate_pricing_page');
    insights.push('No pricing page detected.');
  }

  // Checkout/api presence (stub)
  const hasCheckoutApi = fileExists(PAGES_DIR, 'api', 'checkout.ts') || fileExists(PAGES_DIR, 'api', 'checkout.tsx');
  if (!hasCheckoutApi) {
    actions.add('setup_checkout_stub');
    insights.push('No checkout API stub detected.');
  }

  // CTA presence heuristic: look for common CTA terms
  const candidatePages = ['index.tsx', 'enhanced-home.tsx', 'about.tsx'];
  let ctaFound = false;
  for (const cand of candidatePages) {
    const full = path.join(PAGES_DIR, cand);
    const text = readTextSafe(full).toLowerCase();
    if (text.includes('buy now') || text.includes('start free') || text.includes('subscribe') || text.includes('trial')) {
      ctaFound = true;
      break;
    }
  }
  if (!ctaFound) {
    actions.add('add_cta_buttons');
    insights.push('No clear CTA found on key pages.');
  }

  // Analytics instrumentation presence (very light heuristic)
  const docText = readTextSafe(path.join(PAGES_DIR, '_document.tsx')).toLowerCase();
  if (!docText.includes('gtag') && !docText.includes('analytics')) {
    actions.add('instrument_analytics');
    insights.push('No analytics instrumentation detected.');
  }

  // Newsletter capture for lead gen
  if (!fileExists(COMPONENTS_DIR, 'NewsletterSignup.tsx')) {
    actions.add('newsletter_capture');
    insights.push('No newsletter capture component detected.');
  }

  // Trial/signup flow
  const hasSignup = fileExists(PAGES_DIR, 'auth', 'signup.tsx') || fileExists(PAGES_DIR, 'signup.tsx');
  if (!hasSignup) {
    actions.add('trial_signup_flow');
    insights.push('No signup/trial flow detected.');
  }

  // SEO to monetization path
  actions.add('seo_to_monetization_path');

  // Generate AB test variants for copy/CTA
  actions.add('generate_ab_test_variants');

  // Improve conversion copy
  actions.add('improve_conversion_copy');

  // Meta-factory to continuously create monetization factories
  actions.add('create_monetization_factories');

  return { actions: Array.from(actions), insights };
>>>>>>> origin/main
}

function main() {
  ensureDir(REPORT_DIR);
<<<<<<< HEAD
  const candidates = discoverCandidatePages();
  const actions = buildActions();

  const report = {
    timestamp: new Date().toISOString(),
    candidateFiles: candidates.map((p) => path.relative(path.join(__dirname, '..'), p)),
    actions,
    notes: 'These are suggestions; downstream agents will produce proposals and safe application stubs.'
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`Monetization analyzer exported ${candidates.length} candidate files and ${actions.length} actions.`);
=======
  const { actions, insights } = analyze();
  const report = {
    timestamp: new Date().toISOString(),
    actions,
    insights
  };
  const outPath = path.join(REPORT_DIR, 'monetization-actions.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Monetization analyzer completed: ${actions.length} action(s)`);
>>>>>>> origin/main
}

main();