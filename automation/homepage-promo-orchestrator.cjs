#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const homepagePath = path.join(projectRoot, 'pages', 'index.tsx');
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'homepage-promo-orchestrator.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) { const line = `[${new Date().toISOString()}] ${msg}\n`; console.log(msg); fs.appendFileSync(logFile, line); }

const promos = [
  { href: '/services/ai-seo-auditor', label: 'AI SEO Auditor — automate your SEO improvements' },
  { href: '/services/customer-support-chatbot', label: 'Customer Support Chatbot — reduce response time with AI' },
  { href: '/services/instagram-content-scheduler', label: 'Instagram Content Scheduler — plan and auto-post' },
  { href: '/services/landing-page-generator', label: 'Landing Page Generator — launch pages instantly' },
  { href: '/services/price-intelligence-service', label: 'Price Intelligence — monitor pricing with AI' },
  { href: '/automation', label: 'Automation Status — see what our agents do' },
  { href: '/blog', label: 'Resources — learn how we build with AI' },
  { href: '/contact', label: 'Contact — talk to us about your use-case' },
];

function renderPromos() {
  const blocks = promos.map(p => `
              <Link href="${p.href}">
                <a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10">
                  <span className="text-white">${p.label}</span>
                </a>
              </Link>
`);
  return `        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Explore more</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
${blocks.join('\n')}
          </div>
        </section>`;
}

function updateHomepagePromos(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const startMarker = '{/* AUTO-GENERATED: HOMEPAGE_PROMOS_START */}';
  const endMarker = '{/* AUTO-GENERATED: HOMEPAGE_PROMOS_END */}';
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    log('Markers not found or invalid order, skipping');
    return false;
  }

  const before = content.slice(0, startIdx + startMarker.length);
  const after = content.slice(endIdx);
  const injected = '\n' + renderPromos() + '\n';
  const nextContent = before + '\n' + injected + after;

  if (nextContent !== content) {
    fs.writeFileSync(filePath, nextContent);
    log('Homepage promos updated');
    return true;
  }
  log('Homepage promos already up to date');
  return false;
}

async function main() {
  ensureDir(logsDir);
  const changed = updateHomepagePromos(homepagePath);
  log(`Done. changed=${changed}`);
}

if (require.main === module) {
  main().catch(e => { log(`Fatal: ${e.message}`); process.exit(1); });
}


