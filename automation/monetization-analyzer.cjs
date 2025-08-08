#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'monetization');
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
}

function main() {
  ensureDir(REPORT_DIR);
  const { actions, insights } = analyze();
  const report = {
    timestamp: new Date().toISOString(),
    actions,
    insights
  };
  const outPath = path.join(REPORT_DIR, 'monetization-actions.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Monetization analyzer completed: ${actions.length} action(s)`);
}

main();