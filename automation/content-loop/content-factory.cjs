/**
 * content-factory.cjs
 * 
 * Generates SEO-optimized Next.js pages for ziontechgroup.com and writes them
 * into the repo so they can be committed and deployed to GitHub Pages.
 *
 * Content types:
 *  - service pages   → app/services/<slug>/page.tsx
 *  - industry pages  → app/industries/<slug>/page.tsx
 *  - blog posts      → app/blog/<slug>/page.tsx
 *  - case studies    → app/case-studies/<slug>/page.tsx
 *  - template pages  → app/templates/<slug>/page.tsx
 */

const fs = require('node:fs');
const path = require('node:path');

const REPO = process.cwd();
const OUT = {
  service: path.join(REPO, 'app/services'),
  industry: path.join(REPO, 'app/industries'),
  blog: path.join(REPO, 'app/blog'),
  caseStudy: path.join(REPO, 'app/case-studies'),
  template: path.join(REPO, 'app/templates'),
};

const SITE = 'https://ziontechgroup.com';
const ORG = 'Zion Tech Group';
const PHONE = '+1 302 464 0950';
const EMAIL = 'kleber@ziontechgroup.com';
const ADDRESS = '364 E Main St STE 1008, Middletown, DE 19709';

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function write(p, content) {
  fs.writeFileSync(p, content.trim() + '\n', 'utf8');
  return p;
}
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function meta({ title, description, canonical, type = 'website' }) {
  return `
    <title>${esc(title)} | ${esc(ORG)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(canonical || SITE)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(canonical || SITE)}" />
    <meta property="og:type" content="${esc(type)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '${esc(ORG)}',
      url: '${SITE}',
      email: '${EMAIL}',
      telephone: '${PHONE}',
      address: { '@type': 'PostalAddress', streetAddress: '${esc(ADDRESS)}', addressLocality: 'Middletown', addressRegion: 'DE', postalCode: '19709', addressCountry: 'US' }
    })}} />`;
}

function pageShell({ title, description, canonical, children }) {
  return `'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: '${esc(title)} | ${esc(ORG)}',
  description: '${esc(description)}',
  alternates: { canonical: '${esc(canonical)}' },
  openGraph: { title: '${esc(title)}', description: '${esc(description)}', url: '${esc(canonical)}', type: 'website' },
  twitter: { card: 'summary_large_image', title: '${esc(title)}', description: '${esc(description)}' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">${esc(title)}</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">${esc(description)}</p>
        ${children}
        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:${PHONE.replace(/\D/g,'')}" className="text-purple-300 hover:underline">${PHONE}</a> · ✉️ <a href="mailto:${EMAIL}" className="text-purple-300 hover:underline">${EMAIL}</a></p>
        </div>
      </div>
    </main>
  );
}
`;
}

function servicePage(svc) {
  const title = svc.title || svc.slug;
  const desc = svc.description || `${title} from ${ORG}.`;
  const slug = svc.slug || slugify(title);
  const dir = path.join(OUT.service, slug);
  ensureDir(dir);
  const file = path.join(dir, 'page.tsx');
  write(file, pageShell({ title, description: desc, canonical: `${SITE}/services/${slug}/`, children: `
        <div className="max-w-4xl mx-auto space-y-6 text-slate-300">
          <p>${esc(desc)}</p>
          <h2 className="text-2xl font-semibold text-white">What you get</h2>
          <ul className="list-disc pl-6 space-y-2">
            ${(svc.features || ['Proven delivery model', 'Measurable KPIs', 'Production-ready rollout']).map(f => `<li>${esc(f)}</li>`).join('\n            ')}
          </ul>
          <h2 className="text-2xl font-semibold text-white">Why ${esc(ORG)}</h2>
          <p>We ship outcomes, not reports. Most engagements include a 30-day pilot with defined success metrics and a clear roadmap to scale.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          ${['AI-Powered Delivery', '24/7 Support', '99.9% SLA'].map(badge => `
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center">
              <div className="text-sm font-semibold text-purple-300">${badge}</div>
            </div>`).join('\n          ')}
        </div>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'Service',
        name: title,
        description: desc,
        provider: { '@type':'Organization', name: ORG, url: SITE },
        areaServed: 'US'
      }} />
` }));
  return file;
}

function industryPage({ key, label, emoji, desc, sample }) {
  const title = label;
  const description = desc || `${label} AI and IT solutions from ${ORG}.`;
  const slug = key;
  const dir = path.join(OUT.industry, slug);
  ensureDir(dir);
  const file = path.join(dir, 'page.tsx');
  write(file, pageShell({ title, description, canonical: `${SITE}/industries/${slug}/`, children: `
        <div className="max-w-4xl mx-auto space-y-6 text-slate-300">
          <p>${esc(description)}</p>
          <h2 className="text-2xl font-semibold text-white">Capabilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI and automation tailored to ${esc(label)} workflows</li>
            <li>Cloud, security, and data infrastructure</li>
            <li>Integration with existing tooling and teams</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white">Sample use cases</h2>
          <p>${esc(sample || 'Outcome-driven pilots, production rollouts, and 24/7 support.')}</p>
        </div>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'WebPage',
        name: '${esc(title)}',
        description: '${esc(description)}',
        url: '${SITE}/industries/${slug}/'
      }} />
` }));
  return file;
}

function blogPost({ title, excerpt, keywords }) {
  const desc = excerpt || `${title} — practical guidance from ${ORG}.`;
  const slug = slugify(title);
  const dir = path.join(OUT.blog, slug);
  ensureDir(dir);
  const file = path.join(dir, 'page.tsx');
  const kw = Array.isArray(keywords) ? keywords.join(', ') : String(keywords || 'AI, IT, automation');
  write(file, pageShell({ title, description: desc, canonical: `${SITE}/blog/${slug}/`, children: `
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          <p>${esc(desc)}</p>
          <h2 className="text-2xl font-semibold text-white">Key points</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Practical, implementation-first approach</li>
            <li>Aligned to measurable business outcomes</li>
            <li>Built for operators, not just prototypes</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white">Recommended next step</h2>
          <p>Start with a scoped pilot, validate ROI in 30 days, and scale what works.</p>
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: '${esc(title)}',
        description: '${esc(desc)}',
        author: { '@type':'Organization', name: '${esc(ORG)}' },
        publisher: { '@type':'Organization', name: '${esc(ORG)}', url: '${SITE}' },
        keywords: '${esc(kw)}',
        mainEntityOfPage: '${SITE}/blog/${slug}/'
      }} />
` }));
  return file;
}

function caseStudyPage({ title, company, metric, serviceUsed }) {
  const desc = `${company} case study: ${metric} using ${serviceUsed}.`;
  const slug = slugify(title);
  const dir = path.join(OUT.caseStudy, slug);
  ensureDir(dir);
  const file = path.join(dir, 'page.tsx');
  write(file, pageShell({ title, description: desc, canonical: `${SITE}/case-studies/${slug}/`, children: `
        <div className="max-w-4xl mx-auto space-y-6 text-slate-300">
          <p>${esc(desc)}</p>
          <h2 className="text-2xl font-semibold text-white">Challenge</h2>
          <p>Legacy tooling, manual work, and slow time-to-value.</p>
          <h2 className="text-2xl font-semibold text-white">Solution</h2>
          <p>Deployed ${esc(serviceUsed)} with a 30-day pilot and measurable KPIs.</p>
          <h2 className="text-2xl font-semibold text-white">Outcome</h2>
          <p>${esc(metric)}</p>
        </div>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'Review',
        reviewBody: '${esc(desc)}',
        author: { '@type':'Organization', name: '${esc(company)}' },
        itemReviewed: { '@type':'Service', name: '${esc(serviceUsed)}' }
      }} />
` }));
  return file;
}

function templatePage({ title, description, slug }) {
  const s = slug || slugify(title);
  const dir = path.join(OUT.template, s);
  ensureDir(dir);
  const file = path.join(dir, 'page.tsx');
  write(file, pageShell({ title, description, canonical: `${SITE}/templates/${s}/`, children: `
        <div className="max-w-4xl mx-auto space-y-6 text-slate-300">
          <p>${esc(description)}</p>
          <h2 className="text-2xl font-semibold text-white">Use this for</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Faster alignment with stakeholders</li>
            <li>Consistent scoping and milestones</li>
            <li>Clear success metrics before launch</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white">Next step</h2>
          <p>Use this template with ${ORG} to tailor it to your environment.</p>
        </div>
` }));
  return file;
}

const JSON_LD_IMPORT = `import JsonLd from '@/components/JsonLd';\n`;

function patchShell(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes("import JsonLd from '@/components/JsonLd'")) {
    src = JSON_LD_IMPORT + src;
  }
  fs.writeFileSync(file, src, 'utf8');
}

module.exports = {
  ensureDir,
  write,
  slugify,
  pageShell,
  meta,
  servicePage,
  industryPage,
  blogPost,
  caseStudyPage,
  templatePage,
  patchShell,
  OUT,
  SITE,
  ORG,
  PHONE,
  EMAIL,
  ADDRESS
};
