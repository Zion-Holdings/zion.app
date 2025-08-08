#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'monetization', 'monetization-actions.json');
const OUT_DIR = path.join(__dirname, 'monetization-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function agentScriptFor(actionName) {
  const header = `#!/usr/bin/env node\n`;
  const common = `const fs = require('fs');\nconst path = require('path');\nconst ROOT = path.join(__dirname, '..', '..');\nconst INPUT = path.join(ROOT, 'data', 'reports', 'monetization', 'monetization-actions.json');\nconst PROPOSALS_DIR = path.join(ROOT, 'data', 'reports', 'monetization', 'proposals');\nif (!fs.existsSync(PROPOSALS_DIR)) fs.mkdirSync(PROPOSALS_DIR, { recursive: true });\nfunction writeProposal(title, content) {\n  const fp = path.join(PROPOSALS_DIR, title + '.md');\n  const lines = ['# ' + title, '', content, ''];\n  fs.writeFileSync(fp, lines.join('\\n'));\n  console.log('Proposal written:', fp);\n}\n`;

  const bodies = {
    introduce_pricing_cta_sections_on_high_traffic_pages: `const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));\nconst files = (data.candidateFiles || []).slice(0, 20);\nconst content = files.map(f => '- Add Pricing CTA section to ' + f).join('\\n');\nwriteProposal('pricing-cta-on-top-pages', 'Recommend adding pricing CTA sections to:\\n' + content + '\\n\\nSuggested CTA snippet (React/Next.js):\\n<section className=\\"bg-amber-50 border border-amber-200 rounded-xl p-6 my-8\\">\\n  <h3 className=\\"text-xl font-semibold\\">Ready to unlock more value?</h3>\\n  <p className=\\"mt-2\\">Explore transparent pricing and tailored plans.</p>\\n  <a href=\\"/pricing\\" className=\\"btn btn-primary mt-4\\">View pricing</a>\\n</section>\\n');`,

    add_contact_sales_cta_on_enterprise_pages: `const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));\nconst files = (data.candidateFiles || []).filter(f => /services|products|enterprise|solutions/.test(f)).slice(0, 30);\nconst content = files.map(f => '- Add Contact Sales CTA to ' + f).join('\\n');\nwriteProposal('contact-sales-cta', 'Recommend adding Contact Sales CTA to:\\n' + content + '\\n\\nSuggested CTA snippet:\\n<section className=\\"bg-blue-50 border border-blue-200 rounded-xl p-6 my-8\\">\\n  <h3 className=\\"text-xl font-semibold\\">Have enterprise needs?</h3>\\n  <p className=\\"mt-2\\">Chat with our solution architects to scope your project.</p>\\n  <a href=\\"/contact\\" className=\\"btn btn-secondary mt-4\\">Contact sales</a>\\n</section>\\n');`,

    generate_paid_consultation_booking_component: `const compDir = path.join(ROOT, 'components', 'monetization');\nif (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });\nconst compPath = path.join(compDir, 'PaidConsultation.tsx');\nif (!fs.existsSync(compPath)) {\n  fs.writeFileSync(compPath, ` +
      JSON.stringify(
        `import React from 'react';

export default function PaidConsultation() {
  return (
    <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8">
      <h3 className="text-xl font-semibold">Book a paid consultation</h3>
      <p className="mt-2">Get expert guidance tailored to your needs.</p>
      <a href="/contact" className="btn btn-success mt-4">Book now</a>
    </section>
  );
}
` 
      ) +
      `);\n}\nwriteProposal('paid-consultation-component', 'Created components/monetization/PaidConsultation.tsx (idempotent). Include this on high-intent pages.');`,

    create_affiliate_link_wrappers_for_blog_posts: `const wrapperDir = path.join(ROOT, 'utils', 'monetization');\nif (!fs.existsSync(wrapperDir)) fs.mkdirSync(wrapperDir, { recursive: true });\nconst utilPath = path.join(wrapperDir, 'affiliate.ts');\nif (!fs.existsSync(utilPath)) {\n  fs.writeFileSync(utilPath, ` +
      JSON.stringify(
        `export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
}
` 
      ) +
      `);\n}\nwriteProposal('affiliate-link-wrapper', 'Created utils/monetization/affiliate.ts. Use affiliate(url, code) for outbound blog links.');`,

    add_newsletter_paywall_teaser_on_long_posts: `const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));\nconst blogPosts = (data.candidateFiles || []).filter(f => f.startsWith('pages/blog/')).slice(0, 50);\nconst content = blogPosts.map(f => '- Add newsletter teaser to ' + f).join('\\n');\nwriteProposal('newsletter-paywall-teaser', 'Recommend adding newsletter teaser to long posts:\\n' + content + '\\n\\nSuggested snippet:\\n<section className=\\"bg-purple-50 border border-purple-200 rounded-xl p-6 my-8\\">\\n  <h3 className=\\"text-xl font-semibold\\">Enjoying this deep-dive?</h3>\\n  <p className=\\"mt-2\\">Get member-only guides and templates straight to your inbox.</p>\\n  <a href=\\"/newsletter\\" className=\\"btn btn-accent mt-4\\">Subscribe</a>\\n</section>\\n');`
  };

  return header + common + (bodies[actionName] || `console.log('No body for action:', ${JSON.stringify(actionName)});\n`);
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No monetization report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const { actions } = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const action of actions) {
    const fp = path.join(OUT_DIR, `${action}.cjs`);
    if (!fs.existsSync(fp)) {
      const code = agentScriptFor(action);
      fs.writeFileSync(fp, code + '\n');
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  }
  const registry = path.join(__dirname, 'logs', 'monetization-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} monetization agents`);
}

main();