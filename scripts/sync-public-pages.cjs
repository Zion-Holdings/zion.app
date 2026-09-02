#!/usr/bin/env node
/**
 * Generate consistent public/*.html pages for GitHub Pages.
 * High-value routes get richer copy; unpublished app routes get a usable fallback.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const APP = path.join(ROOT, 'app');

const CAL = 'https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1';
const STRIPE = 'https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05';
const EMAIL = 'kleber@ziontechgroup.com';
const PHONE = '+1 302 464 0950';
const WA = 'https://wa.me/13024640950';
const ADDR = '364 E Main St STE 1008, Middletown, DE 19709';

function chrome(title, description, canonical, body, extraHead = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${esc(canonical)}" />
<link rel="stylesheet" href="/css/site.css" />
${extraHead}
</head>
<body>
<header class="nav"><div class="nav-inner">
  <a class="brand" href="/">Zion Tech Group</a>
  <nav class="nav-links">
    <a href="/ai-services/">AI</a>
    <a href="/services/">Services</a>
    <a href="/pricing/">Pricing</a>
    <a href="/marketplace/">Marketplace</a>
    <a href="/success-stories/">Results</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
    <a class="btn btn-primary" href="/book/">Book Discovery</a>
  </nav>
</div></header>
${body}
<footer class="footer"><div class="footer-inner" style="flex-direction:column;text-align:center">
  <p>${ADDR} · <a href="mailto:${EMAIL}">${EMAIL}</a> · <a href="tel:+13024640950">${PHONE}</a></p>
  <p><a href="/services/">Services</a> · <a href="/ai-services/">AI</a> · <a href="/pricing/">Pricing</a> · <a href="/book/">Book</a> · <a href="/faq/">FAQ</a> · <a href="/privacy-policy/">Privacy</a> · <a href="${WA}">WhatsApp</a></p>
  <p>© ${new Date().getFullYear()} Zion Tech Group</p>
</div></footer>
</body>
</html>
`;
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function writePage(rel, html) {
  const dest = path.join(PUBLIC, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

function cardGrid(items) {
  return `<div class="grid">${items
    .map(
      ([h, p, href]) =>
        `<article class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p>${href ? `<a href="${href}">Explore →</a>` : ''}</article>`
    )
    .join('')}</div>`;
}

const pages = {
  'index.html': chrome(
    'Zion Tech Group — AI & IT Services for Measurable Growth',
    'Zion Tech Group delivers AI, cloud, cybersecurity, data, blockchain, and Micro-SaaS solutions with measurable outcomes. Book a free Discovery.',
    'https://ziontechgroup.com/',
    `<section class="hero">
      <div class="badge">Free 30-minute Discovery · $99 paid deep-dive available</div>
      <h1>AI & IT that create measurable growth</h1>
      <p class="sub">Zion Tech Group designs, ships, and operates AI agents, cloud platforms, and managed security for companies that need outcomes — not slide decks.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/book/">Book free Discovery</a>
        <a class="btn btn-secondary" href="/pricing/">View pricing</a>
      </div>
    </section>
    <section class="wrap">
      ${cardGrid([
        ['−40%', 'ticket handle time with AI support', '/success-stories/'],
        ['99.99%', 'uptime after cloud migration', '/services/cloud/'],
        ['+28%', 'cash-flow speed from billing automation', '/pricing/'],
        ['−60%', 'security incidents with managed SOC', '/services/security/'],
      ])}
    </section>
    <section class="wrap">
      <h2 style="text-align:center;margin-bottom:20px">What we deliver</h2>
      ${cardGrid([
        ['AI Services', 'Agents, RAG, MLOps, and revenue automation that ship to production.', '/ai-services/'],
        ['Cloud & DevOps', 'AWS, Azure, and GCP migration, Kubernetes, CI/CD, and FinOps.', '/services/cloud/'],
        ['Cybersecurity', 'Managed SOC, threat detection, and compliance automation.', '/services/security/'],
        ['Data & Analytics', 'Pipelines, lakes, and AI-ready analytics platforms.', '/services/data/'],
        ['Blockchain & Web3', 'Smart contracts, audits, and enterprise Web3 integrations.', '/services/blockchain/'],
        ['IoT & Edge', 'Device telemetry, edge inference, and operations automation.', '/services/iot/'],
      ])}
    </section>
    <section class="wrap">
      <article class="card" style="text-align:center">
        <h2>Ready in one conversation</h2>
        <p>Discovery is 30 minutes on Google Meet. Optional $99 paid consult if you want a written roadmap the same week. Starter projects start at $2,500. Growth retainers are $8,000/month.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="/book/">Open the calendar</a>
          <a class="btn btn-secondary" href="${STRIPE}">Pay $99 Discovery</a>
        </div>
      </article>
    </section>`,
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      email: EMAIL,
      telephone: PHONE,
      address: { '@type': 'PostalAddress', streetAddress: '364 E Main St STE 1008', addressLocality: 'Middletown', addressRegion: 'DE', postalCode: '19709', addressCountry: 'US' },
    })}</script>`
  ),

  'ai-services/index.html': chrome(
    'AI Services for Enterprise | Zion Tech Group',
    'Enterprise AI services from Zion Tech Group: agents, RAG, MLOps, AIOps, and revenue automation.',
    'https://ziontechgroup.com/ai-services/',
    `<div class="prose"><h1>AI Services for Enterprise</h1>
    <p>Production AI — agents, retrieval, observability, and monetization — designed for measurable outcomes.</p></div>
    <section class="wrap">${cardGrid([
      ['AI workflow automation', 'Ship agents that close tickets, qualify leads, and run back-office work.', '/ai-automation-services/'],
      ['Chatbots and voice', 'Support and sales agents with RAG and human handoff.', '/ai-chatbot-solutions/'],
      ['ML and analytics', 'Forecasting, scoring, and decision support.', '/ai-ml-services/'],
      ['Enterprise platforms', 'Governance, MLOps, and multi-team rollouts.', '/ai-enterprise-solutions/'],
      ['Integrations', 'HubSpot, Stripe, Slack, WhatsApp, and 30+ live apps.', '/ai-integration-services/'],
      ['Free readiness audit', 'Data, automation potential, and a 30-day plan.', '/free-ai-readiness-audit/'],
    ])}</section>`
  ),

  'services/index.html': chrome(
    'Services | Zion Tech Group',
    'AI, cloud, security, data, blockchain, and IoT services from Zion Tech Group.',
    'https://ziontechgroup.com/services/',
    `<div class="prose"><h1>Services</h1><p>Enterprise AI, IT, and Micro-SaaS built for outcomes.</p></div>
    <section class="wrap">${cardGrid([
      ['AI Services', 'Agents, RAG, MLOps, and automation.', '/ai-services/'],
      ['Cloud & DevOps', 'Migration, Kubernetes, CI/CD, FinOps.', '/services/cloud/'],
      ['Cybersecurity', 'SOC, detection, and compliance.', '/services/security/'],
      ['Data & Analytics', 'Pipelines and AI-ready platforms.', '/services/data/'],
      ['Blockchain & Web3', 'Contracts, audits, integrations.', '/services/blockchain/'],
      ['IoT & Edge', 'Telemetry and edge inference.', '/services/iot/'],
      ['IT Consulting', 'Delivery-focused consulting.', '/it-consulting/'],
      ['Managed IT', 'Operations with measurable SLAs.', '/managed-it-services/'],
    ])}</section>`
  ),

  'services/cloud/index.html': chrome(
    'Cloud & DevOps | Zion Tech Group',
    'Cloud migration, Kubernetes, CI/CD, observability, and FinOps from Zion Tech Group.',
    'https://ziontechgroup.com/services/cloud/',
    `<div class="prose"><h1>Cloud & DevOps</h1>
    <p>AWS, Azure, and GCP migrations with cost controls, platform engineering, and 24/7 operations.</p>
    <ul><li>Zero-downtime migrations</li><li>Kubernetes, Terraform, and CI/CD</li><li>Observability and incident response</li><li>FinOps and cloud cost reduction</li></ul>
    <p><a class="btn btn-primary" href="/book/">Book Discovery</a> <a href="/cloud-migration-services/">Cloud migration services</a></p></div>`
  ),

  'services/security/index.html': chrome(
    'Cybersecurity | Zion Tech Group',
    'AI-powered threat detection, managed SOC, and compliance automation from Zion Tech Group.',
    'https://ziontechgroup.com/services/security/',
    `<div class="prose"><h1>Cybersecurity</h1>
    <p>Managed SOC, detection engineering, and compliance automation for teams that cannot staff a 24/7 security org.</p>
    <ul><li>Managed SOC and incident response</li><li>Threat detection with AI triage</li><li>Compliance automation</li><li>iGaming and regulated-industry hardening</li></ul>
    <p><a class="btn btn-primary" href="/book/">Book Discovery</a> <a href="/managed-soc-pricing/">SOC pricing</a></p></div>`
  ),

  'services/data/index.html': chrome(
    'Data & Analytics | Zion Tech Group',
    'Modern data platforms, pipelines, and AI-powered analytics from Zion Tech Group.',
    'https://ziontechgroup.com/services/data/',
    `<div class="prose"><h1>Data & Analytics</h1>
    <p>Lakes, warehouses, and pipelines that make AI and reporting trustworthy.</p>
    <ul><li>Ingestion and transformation pipelines</li><li>Governance and lineage</li><li>BI and decision support</li><li>AI-ready feature and document stores</li></ul>
    <p><a class="btn btn-primary" href="/book/">Book Discovery</a> <a href="/ai-data-analytics/">AI analytics</a></p></div>`
  ),

  'services/blockchain/index.html': chrome(
    'Blockchain & Web3 | Zion Tech Group',
    'Smart contracts, audits, and enterprise Web3 integrations from Zion Tech Group.',
    'https://ziontechgroup.com/services/blockchain/',
    `<div class="prose"><h1>Blockchain & Web3</h1>
    <p>Smart contracts, audits, and production integrations — with the same delivery bar as our cloud and AI work.</p>
    <p><a class="btn btn-primary" href="/book/">Book Discovery</a> <a href="/malta-blockchain-smart-contracts/">Malta smart contracts</a></p></div>`
  ),

  'services/iot/index.html': chrome(
    'IoT & Edge | Zion Tech Group',
    'Connect, monitor, and automate devices with intelligent edge computing from Zion Tech Group.',
    'https://ziontechgroup.com/services/iot/',
    `<div class="prose"><h1>IoT & Edge</h1>
    <p>Device connectivity, telemetry, and edge inference for operations teams.</p>
    <p><a class="btn btn-primary" href="/book/">Book Discovery</a></p></div>`
  ),

  'book/index.html': chrome(
    'Book AI/IT Discovery | Zion Tech Group',
    'Book the live 30-minute Zion Tech Group AI/IT Discovery on Calendly. Google Meet. Optional $99 Stripe checkout.',
    'https://ziontechgroup.com/book/',
    `<div class="prose"><h1>Book the 30-minute Discovery</h1>
    <p>Live event type: AI/IT Discovery-1 on Google Meet. Use the calendar below or pay $99 if you want a written roadmap after the call.</p>
    <div class="cta-row" style="justify-content:flex-start">
      <a class="btn btn-primary" href="${CAL}">Open Calendly</a>
      <a class="btn btn-secondary" href="${STRIPE}">Pay $99</a>
    </div></div>
    <section class="wrap"><iframe class="cal" title="Zion Tech Group Discovery calendar" src="${CAL}?hide_gdpr_banner=1&embed_domain=ziontechgroup.com&embed_type=Inline"></iframe></section>`
  ),

  'paid-consultation/index.html': chrome(
    'Paid Consultation — $99 Discovery | Zion Tech Group',
    'Zion Tech Group paid consultation is the $99 AI/IT Discovery. Book on /book/ or pay via Stripe.',
    'https://ziontechgroup.com/paid-consultation/',
    `<div class="prose"><h1>Paid consultation</h1>
    <p>The live product is the $99 AI/IT Discovery (30 minutes, Google Meet). You get a recorded call and a short written next-step plan.</p>
    <ul><li>Stack review: AI, cloud, security, and revenue automation</li><li>Top 3 opportunities ranked by ROI</li><li>Clear build vs. buy recommendation</li></ul>
    <div class="cta-row" style="justify-content:flex-start">
      <a class="btn btn-primary" href="/book/">Book a slot</a>
      <a class="btn btn-secondary" href="${STRIPE}">Pay $99</a>
    </div></div>`
  ),

  'marketplace/index.html': chrome(
    'ZionAI Marketplace | Zion Tech Group',
    'ZionAI Marketplace matches certified tech talent, AI automation, and 24/7 onsite IT. Book a 30-minute Discovery.',
    'https://ziontechgroup.com/marketplace/',
    `<div class="prose"><h1>ZionAI Marketplace</h1>
    <p>Certified tech talent, AI solutions, and 24/7 onsite IT — matched by Zion Tech Group.</p></div>
    <section class="wrap">${cardGrid([
      ['Tech talent', 'Engineers and operators for AI, cloud, SOC, and onsite work.', '/book/'],
      ['AI solutions', 'Production agents across live business apps.', '/ai-services/'],
      ['24/7 onsite', 'Hardware and field IT next to the AI practice.', '/managed-it-services/'],
      ['How you buy', 'Discovery $99 · Starter $2,500 · Growth $8,000/month.', '/pricing/'],
    ])}</section>`
  ),

  'assessments/index.html': chrome(
    'AI Readiness Assessments | Zion Tech Group',
    'Free AI readiness audit and paid discovery assessments from Zion Tech Group.',
    'https://ziontechgroup.com/assessments/',
    `<div class="prose"><h1>Assessments</h1><p>Start with a free readiness audit, then optionally upgrade to a $99 Discovery.</p></div>
    <section class="wrap">${cardGrid([
      ['Free AI Readiness Audit', 'Data, automation potential, security posture, and a 30-day action plan.', '/free-ai-readiness-audit/'],
      ['$99 Discovery', '30-minute Google Meet plus a written next-step memo.', '/paid-consultation/'],
    ])}</section>`
  ),

  'faq/index.html': chrome(
    'FAQ | Zion Tech Group',
    'Frequently asked questions about Zion Tech Group AI services, pricing, integrations, and deployment.',
    'https://ziontechgroup.com/faq/',
    `<div class="prose"><h1>Frequently asked questions</h1>
    <details open><summary>What does Zion Tech Group build?</summary><p>AI agents, automation platforms, cloud and security programs, and revenue infrastructure for B2B teams.</p></details>
    <details><summary>Do you work with startups or enterprise?</summary><p>Both. Starter packages fit early-stage teams; custom work scales to regulated enterprises.</p></details>
    <details><summary>How fast can you deploy?</summary><p>Most MVPs ship in 2–4 weeks. Full production systems typically take 6–8 weeks depending on integrations.</p></details>
    <details><summary>What is the pricing model?</summary><p>Discovery $99, Starter $2,500/project, Growth $8,000/month, Enterprise custom. See <a href="/pricing/">Pricing</a>.</p></details>
    <details><summary>Do you accept Stripe?</summary><p>Yes. Discovery can be paid on Stripe. Project invoices also go through Stripe.</p></details>
    <details><summary>What integrations do you support?</summary><p>Stripe, HubSpot, Notion, Slack, Resend, Brevo, Calendly, WhatsApp, GitHub, Google Workspace, and 30+ live Composio apps.</p></details>
    <p style="margin-top:24px"><a class="btn btn-primary" href="/book/">Still have questions? Book a call</a></p></div>`,
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does Zion Tech Group build?', acceptedAnswer: { '@type': 'Answer', text: 'AI agents, automation platforms, cloud and security programs, and revenue infrastructure for B2B teams.' } },
        { '@type': 'Question', name: 'What is the pricing model?', acceptedAnswer: { '@type': 'Answer', text: 'Discovery $99, Starter $2,500/project, Growth $8,000/month, Enterprise custom.' } },
      ],
    })}</script>`
  ),

  'contact/index.html': chrome(
    'Contact | Zion Tech Group',
    'Talk to Zion Tech Group about AI, IT, and Micro-SaaS solutions. Book a free Discovery.',
    'https://ziontechgroup.com/contact/',
    `<div class="prose"><h1>Contact</h1>
    <p>Email <a href="mailto:${EMAIL}">${EMAIL}</a>, call <a href="tel:+13024640950">${PHONE}</a>, or message us on <a href="${WA}">WhatsApp</a>.</p>
    <p>${ADDR}</p>
    <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-primary" href="/book/">Book Discovery</a></div></div>`
  ),

  'about/index.html': chrome(
    'About Zion Tech Group',
    'Zion Tech Group builds AI agents, automation platforms, and revenue systems for B2B teams.',
    'https://ziontechgroup.com/about/',
    `<div class="prose"><h1>About Zion Tech Group</h1>
    <p>We ship AI-powered revenue and operations systems — agents, workflows, cloud, and security — so technology turns into recurring results instead of unused pilots.</p>
    <h2>What we do</h2>
    <ul><li>AI agent platforms for support, sales, and ops</li><li>Revenue automation with Stripe, CRM, and messaging</li><li>Cloud, data, and managed security programs</li></ul>
    <p><a class="btn btn-primary" href="/book/">Book a Discovery call</a></p></div>`
  ),

  'pricing/index.html': chrome(
    'Pricing | Zion Tech Group',
    'Transparent pricing: Discovery $99, Starter $2,500, Growth $8,000/month, Enterprise custom.',
    'https://ziontechgroup.com/pricing/',
    `<div class="hero"><h1>Transparent pricing</h1><p class="sub">Choose a plan or ask for a custom scope. Implementation support is included.</p></div>
    <section class="wrap">${cardGrid([
      ['Discovery · $99', '30-minute Google Meet and a written next-step memo.', STRIPE],
      ['Starter · $2,500', 'Single AI or automation deliverable in a 2-week sprint.', '/book/'],
      ['Growth · $8,000/mo', 'Up to 5 agents, monitoring, and weekly optimization.', '/book/'],
      ['Enterprise · Custom', 'Private cloud, compliance, and a dedicated team.', '/contact/'],
    ])}</section>`
  ),

  'checkout/index.html': chrome(
    'Checkout | Zion Tech Group',
    'Pay for Zion Tech Group Discovery or ask for a custom invoice.',
    'https://ziontechgroup.com/checkout/',
    `<div class="prose"><h1>Secure checkout</h1>
    <p>Discovery is live on Stripe. Starter and Growth projects are invoiced after scoping.</p>
    <article class="card"><h2>AI/IT Discovery</h2><p class="stat">$99</p>
    <ul><li>30-minute Google Meet</li><li>Written next-step memo</li><li>Credit toward a Starter project</li></ul>
    <p><a class="btn btn-primary" href="${STRIPE}">Pay with Stripe</a></p></article>
    <p>Need Starter ($2,500) or Growth ($8,000/mo)? <a href="/book/">Book a call</a> and we send a Stripe invoice.</p></div>`
  ),

  'booking/index.html': chrome(
    'Book a Consultation | Zion Tech Group',
    'Schedule a free consultation with Zion Tech Group AI and IT specialists.',
    'https://ziontechgroup.com/booking/',
    `<div class="prose"><h1>Book your strategy session</h1>
    <p>The live calendar is AI/IT Discovery-1. Free 30 minutes, or pay $99 for a written plan.</p>
    <div class="cta-row" style="justify-content:flex-start">
      <a class="btn btn-primary" href="/book/">Open calendar</a>
      <a class="btn btn-secondary" href="${STRIPE}">Pay $99</a>
    </div></div>`
  ),

  '404.html': chrome(
    'Page not found | Zion Tech Group',
    'The requested Zion Tech Group page was not found.',
    'https://ziontechgroup.com/404.html',
    `<div class="prose" style="text-align:center"><h1>This page is not published yet</h1>
    <p>Try a core route or book a Discovery call.</p>
    <p><a href="/">Home</a> · <a href="/services/">Services</a> · <a href="/book/">Book Discovery</a></p></div>`
  ),
};

for (const [rel, html] of Object.entries(pages)) {
  writePage(rel, html);
}

function walkAppPages(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAppPages(full, acc);
    else if (entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function titleFromTsx(src, fallback) {
  const m = src.match(/title:\s*['`]([^'`]+)['`]/) || src.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (m) return m[1].replace(/\s*\|\s*Zion Tech Group/i, '').trim();
  return fallback;
}

function descFromTsx(src, title) {
  const m = src.match(/description:\s*['`]([^'`]+)['`]/);
  return m ? m[1] : `${title} from Zion Tech Group. Book a Discovery call.`;
}

const skip = new Set(Object.keys(pages).map((p) => p.replace(/index\.html$/, '').replace(/\/$/, '')));
skip.add('');

for (const file of walkAppPages(APP)) {
  const relDir = path.relative(APP, path.dirname(file)).replace(/\\/g, '/');
  if (skip.has(relDir) || relDir === '.') continue;
  const destRel = `${relDir}/index.html`;
  const dest = path.join(PUBLIC, destRel);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 2500) continue;
  const src = fs.readFileSync(file, 'utf8');
  const pretty = relDir
    .split('/')
    .pop()
    .replace(/-[0-9a-f]{6,}$/i, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const title = titleFromTsx(src, pretty);
  const description = descFromTsx(src, title);
  const bodyMatch = src.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const blurb = bodyMatch
    ? bodyMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    : `${title} delivered by Zion Tech Group with measurable outcomes.`;
  writePage(
    destRel,
    chrome(
      `${title} | Zion Tech Group`,
      description,
      `https://ziontechgroup.com/${relDir}/`,
      `<div class="prose"><h1>${esc(title)}</h1><p>${esc(blurb)}</p>
      <p><a class="btn btn-primary" href="/book/">Book Discovery</a> <a href="/pricing/">Pricing</a> <a href="/services/">All services</a></p></div>`
    )
  );
}

console.log('Wrote public pages');
