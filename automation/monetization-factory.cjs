#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'monetization', 'monetization-actions.json');
const AGENTS_DIR = path.join(__dirname, 'monetization-agents');
const FACTORIES_DIR = path.join(__dirname, 'monetization-factories');
const LOGS_DIR = path.join(__dirname, 'logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function writeExec(fp, code) { fs.writeFileSync(fp, code); try { fs.chmodSync(fp, 0o755); } catch {} }

function createAgent(name, code) {
  ensureDir(AGENTS_DIR);
  const fp = path.join(AGENTS_DIR, `${name}.cjs`);
  if (!fs.existsSync(fp)) writeExec(fp, code);
  return fp;
}

function createFactory(name, code) {
  ensureDir(FACTORIES_DIR);
  const fp = path.join(FACTORIES_DIR, `${name}.cjs`);
  if (!fs.existsSync(fp)) writeExec(fp, code);
  return fp;
}

function pricingPageFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('pricing-page-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const target = path.join(PAGES_DIR, 'pricing.tsx');
  if(fs.existsSync(target)){ console.log('Pricing page exists; skipping.'); return; }
  const body = 'import React from \'react\';\nexport default function Pricing(){ return (<div><h1>Pricing</h1><p>Starter, Pro, Enterprise.</p></div>); }\n';
  fs.writeFileSync(target, body);
  console.log('Created pricing page at', target);
}
main();
`;
  return createFactory('pricing-page-factory', code);
}

function checkoutStubFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('checkout-stub-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const apiDir = path.join(PAGES_DIR, 'api');
  ensureDir(apiDir);
  const target = path.join(apiDir, 'checkout.ts');
  if(fs.existsSync(target)){ console.log('Checkout API stub exists; skipping.'); return; }
  const body = 'export default function handler(req, res){ res.status(200).json({ ok: true, message: \'Checkout stub\' }); }\n';
  fs.writeFileSync(target, body);
  console.log('Created checkout API stub at', target);
}
main();
`;
  return createFactory('checkout-stub-factory', code);
}

function ctaAgent() {
  const code = `#!/usr/bin/env node
console.log('CTA agent would scan pages and suggest/add CTA buttons where missing.');
`;
  return createAgent('cta-improver', code);
}

function analyticsAgent() {
  const code = `#!/usr/bin/env node
console.log('Analytics agent would instrument analytics or verify existing instrumentation.');
`;
  return createAgent('analytics-instrumentation', code);
}

function newsletterAgent() {
  const code = `#!/usr/bin/env node
console.log('Newsletter capture agent would add a signup component and wire it to pages when enabled.');
`;
  return createAgent('newsletter-capture', code);
}

function signupFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PAGES_DIR = path.join(__dirname, '..', '..', 'pages');
const APPLY = process.env.MONETIZATION_APPLY === 'true';
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  if(!APPLY){ console.log('signup-factory: MONETIZATION_APPLY is not true; skipping apply.'); return; }
  const authDir = path.join(PAGES_DIR, 'auth');
  ensureDir(authDir);
  const target = path.join(authDir, 'signup.tsx');
  if(fs.existsSync(target)){ console.log('Signup page exists; skipping.'); return; }
  const body = 'import React from \'react\';\nexport default function Signup(){ return (<div><h1>Start your free trial</h1><form><input placeholder=\\"Email\\"/><button>Start</button></form></div>); }\n';
  fs.writeFileSync(target, body);
  console.log('Created signup page at', target);
}
main();
`;
  return createFactory('signup-flow-factory', code);
}

function abtestFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const GEN_DIR = path.join(__dirname, '..', 'generated', 'abtests');
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  ensureDir(GEN_DIR);
  const variants = ['headline', 'cta', 'hero'];
  for(const v of variants){
    const fp = path.join(GEN_DIR, 'variant-' + v + '.md');
    if(!fs.existsSync(fp)) fs.writeFileSync(fp, '# AB Test Variant: ' + v + '\n- hypothesis: improve conversion via ' + v + ' change\n');
  }
  console.log('Generated AB test variants in', GEN_DIR);
}
main();
`;
  return createFactory('abtest-factory', code);
}

function copyOptimizationFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const GEN_DIR = path.join(__dirname, '..', 'generated', 'copy');
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  ensureDir(GEN_DIR);
  const files = [
    { name: 'hero-copy.md', content: 'Improve hero value proposition and clarity.' },
    { name: 'pricing-copy.md', content: 'Clarify pricing tiers and benefits.' },
    { name: 'cta-copy.md', content: 'Test action-oriented CTA phrasing.' }
  ];
  for(const f of files){ const fp = path.join(GEN_DIR, f.name); if(!fs.existsSync(fp)) fs.writeFileSync(fp, f.content + '\n'); }
  console.log('Generated conversion copy suggestions in', GEN_DIR);
}
main();
`;
  return createFactory('copy-optimization-factory', code);
}

function seoPathAgent() {
  const code = `#!/usr/bin/env node
console.log('SEO monetization path agent would link high-traffic pages to pricing/signup.');
`;
  return createAgent('seo-to-monetization', code);
}

function metaFactory() {
  const code = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const TARGET = path.join(__dirname, 'generated', 'meta');
function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function main(){
  ensureDir(TARGET);
  const ideas = [
    'landing-page-optimization-factory',
    'checkout-ux-improvement-factory',
    'pricing-segmentation-factory',
    'retention-lifecycle-factory',
    'email-onboarding-factory'
  ];
  for(const idea of ideas){
    const fp = path.join(TARGET, idea + '.txt');
    if(!fs.existsSync(fp)) fs.writeFileSync(fp, 'Factory blueprint: ' + idea + '\n');
  }
  console.log('Meta-factory produced blueprints in', TARGET);
}
main();
`;
  return createFactory('monetization-meta-factory', code);
}

function main(){
  if(!fs.existsSync(REPORT)) { console.error('No monetization report found'); process.exit(1); }
  ensureDir(LOGS_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const actions = new Set(report.actions || []);
  const created = [];

  if(actions.has('generate_pricing_page')) created.push(pricingPageFactory());
  if(actions.has('setup_checkout_stub')) created.push(checkoutStubFactory());
  if(actions.has('add_cta_buttons')) created.push(ctaAgent());
  if(actions.has('instrument_analytics')) created.push(analyticsAgent());
  if(actions.has('newsletter_capture')) created.push(newsletterAgent());
  if(actions.has('trial_signup_flow')) created.push(signupFactory());
  if(actions.has('generate_ab_test_variants')) created.push(abtestFactory());
  if(actions.has('improve_conversion_copy')) created.push(copyOptimizationFactory());
  if(actions.has('seo_to_monetization_path')) created.push(seoPathAgent());
  if(actions.has('create_monetization_factories')) created.push(metaFactory());

  const registry = path.join(LOGS_DIR, 'monetization-agents.json');
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log('Monetization factory created', created.length, 'artifact(s)');
}

main();